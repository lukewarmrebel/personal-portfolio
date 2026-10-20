"""
Ride-hailing review analyzer: Uber vs Ola vs Rapido (Google Play, India)
Pranav Thatavarti, Oct 2026

What this does
  1. Pulls every English review posted in India in the last ~3 months for each app (newest first).
  2. Draws a random sample of reviews per app and tags each one with ONE primary theme
     and a sentiment, using an LLM with a fixed theme list (no free-form labels).
  3. Writes counts and shares per theme per app, plus a random validation sample
     that I then labelled by hand, blind, to measure agreement.

Run
  pip install google-play-scraper requests pandas
  export ANTHROPIC_API_KEY=...        # any Claude key works
  python ride_hailing_reviews.py pull
  python ride_hailing_reviews.py tag
  python ride_hailing_reviews.py fare_subtag
  python ride_hailing_reviews.py summarise
"""
import json, os, sys, time, random, datetime as dt, re
from concurrent.futures import ThreadPoolExecutor
import requests
import pandas as pd

APPS = {"Uber": "com.ubercab", "Ola": "com.olacabs.customer", "Rapido": "com.rapido.passenger"}
WINDOW_START = dt.datetime(2026, 7, 20)       # ~3 months before the pull
SAMPLE_PER_APP = 3000                          # reviews tagged per app
SEED = 42
DATA = os.environ.get("RH_DATA", "data")
API = os.environ.get("ANTHROPIC_BASE_URL", "https://api.anthropic.com")
KEY = os.environ.get("ANTHROPIC_API_KEY", "")
MODEL = os.environ.get("RH_MODEL", "claude-sonnet-5")

# The theme list. One primary theme per review: the thing the reviewer is most upset
# (or happy) about. If a review mentions two problems, the one that caused the bad trip wins.
THEMES = {
    "driver_cancel":     "Driver cancels after accepting, refuses the trip, asks the rider to cancel, asks destination/payment mode before coming, or never shows up",
    "fare_mismatch":     "Final fare higher than the fare shown at booking, surprise surge, extra charges added, driver demands more than the app fare",
    "high_prices":       "General complaint that fares or surge are too expensive, without a shown-vs-charged gap",
    "payment_dispute":   "Cash vs UPI/online fights, paid twice, money deducted but trip unpaid, wallet or refund not received",
    "safety":            "Feeling unsafe: rash or drunk driving, harassment, threats, wrong route at night, vehicle unsafe",
    "driver_behaviour":  "Rude or unprofessional driver, AC off, dirty vehicle, wrong vehicle or number plate, smoking (not a safety threat)",
    "support":           "Can't reach customer support, bot-only help, complaint ignored or not resolved",
    "app_bugs":          "App crashes or freezes, login/OTP/account problems, wrong pickup location or map, booking or payment screen errors",
    "availability":      "No driver/auto/bike found, no captain assigned, service not available in the area",
    "wait_time":         "Driver accepted but takes too long, ETA keeps growing, driver not moving towards pickup",
    "other_complaint":   "A clear complaint that fits none of the above",
    "praise_price":      "Positive, mainly about low or fair price",
    "praise_driver":     "Positive, mainly about a good driver/captain",
    "praise_general":    "Positive or neutral-positive with no specific reason (good, nice, best app, convenient, quick)",
    "unclear":           "Too short or vague to tell, gibberish, off-topic",
}

PROMPT = """You are tagging Google Play reviews of the ride-hailing app {app} in India.
For each review pick exactly ONE primary theme from this list (use the key):
{themes}

Rules:
- Pick the issue that caused the bad experience. If the driver cancelled and support then didn't help, pick driver_cancel.
- A driver asking for more money than the app shows is fare_mismatch. A driver insisting on cash only is payment_dispute.
- Star rating is context, not the answer. A 1-star "good app" is still praise_general.
- Hinglish and Telugu-English are common; read them.
Also give sentiment: pos, neg, mixed or neutral.

Reviews (id | stars | text):
{rows}

Answer with JSON only, one object per review, as a list:
[{{"id": <id>, "theme": "<key>", "sentiment": "<pos|neg|mixed|neutral>"}}, ...]"""


def pull():
    from google_play_scraper import reviews, Sort, app
    os.makedirs(DATA, exist_ok=True)
    meta = {"pulled_utc": dt.datetime.utcnow().isoformat(), "apps": APPS, "meta": {}}
    for name, aid in APPS.items():
        info = app(aid, lang="en", country="in")
        meta["meta"][name] = {k: info.get(k) for k in ["title", "installs", "score", "ratings", "reviews", "version", "updated", "histogram"]}
        out, tok = [], None
        for _ in range(300):
            res, tok = reviews(aid, lang="en", country="in", sort=Sort.NEWEST, count=200, continuation_token=tok)
            out += res
            if not res or tok is None or res[-1]["at"] < WINDOW_START:
                break
            time.sleep(0.3)
        for r in out:
            r["at"] = r["at"].isoformat() if r.get("at") else None
            r["repliedAt"] = r["repliedAt"].isoformat() if r.get("repliedAt") else None
        json.dump(out, open(f"{DATA}/{name}.json", "w"))
    json.dump(meta, open(f"{DATA}/meta.json", "w"), default=str)


def load_window():
    rows = []
    for name in APPS:
        for r in json.load(open(f"{DATA}/{name}.json")):
            if not r.get("at"):
                continue
            at = dt.datetime.fromisoformat(r["at"])
            if at < WINDOW_START:
                continue
            rows.append({"app": name, "review_id": r["reviewId"], "date": at, "stars": r["score"],
                         "thumbs_up": r.get("thumbsUpCount", 0), "app_version": r.get("reviewCreatedVersion"),
                         "text": (r.get("content") or "").strip(), "dev_replied": bool(r.get("replyContent"))})
    df = pd.DataFrame(rows).drop_duplicates("review_id")
    return df


def anonymise(text):
    text = re.sub(r"\+?\d[\d\s-]{8,}\d", "[number]", text)              # phone numbers
    text = re.sub(r"\b[\w.]+@[\w]+\b", "[upi/email]", text)               # UPI ids and emails
    text = re.sub(r"\b[A-Z]{2}\s?\d{1,2}\s?[A-Z]{1,3}\s?\d{3,4}\b", "[vehicle no.]", text)  # Indian number plates
    text = re.sub(r"\b(CRN|crn|booking id|Booking ID|ride id|Ride ID)\s*[:#]?\s*\w+", r"\1 [id]", text)
    return text


def call_llm(app_name, batch):
    rows = "\n".join(f"{i} | {s} | {t[:600].replace(chr(10), ' ')}" for i, s, t in batch)
    themes = "\n".join(f"- {k}: {v}" for k, v in THEMES.items())
    body = {"model": MODEL, "max_tokens": 4000, "thinking": {"type": "disabled"},
            "messages": [{"role": "user", "content": PROMPT.format(app=app_name, themes=themes, rows=rows)}]}
    for attempt in range(5):
        try:
            r = requests.post(f"{API}/v1/messages", json=body, timeout=120,
                              headers={"x-api-key": KEY, "anthropic-version": "2023-06-01"})
            r.raise_for_status()
            txt = "".join(c.get("text", "") for c in r.json()["content"] if c["type"] == "text")
            txt = txt[txt.index("["): txt.rindex("]") + 1]
            out = {int(o["id"]): o for o in json.loads(txt)}
            if all(i in out and out[i]["theme"] in THEMES for i, _, _ in batch):
                return out
        except Exception as e:
            print("retry", attempt, e, flush=True)
        time.sleep(2 * (attempt + 1))
    return {}


def tag():
    df = load_window()
    df = df[df.text.str.len() > 0]
    random.seed(SEED)
    parts = []
    for name in APPS:
        sub = df[df.app == name]
        parts.append(sub.sample(n=min(SAMPLE_PER_APP, len(sub)), random_state=SEED))
    s = pd.concat(parts).reset_index(drop=True)
    s["row"] = range(len(s))
    jobs = []
    for name in APPS:
        idx = s[s.app == name].row.tolist()
        for k in range(0, len(idx), 40):
            jobs.append((name, [(i, s.at[i, "stars"], s.at[i, "text"]) for i in idx[k:k + 40]]))
    results = {}
    with ThreadPoolExecutor(16) as ex:
        for out in ex.map(lambda j: call_llm(*j), jobs):
            results.update(out)
    s["theme"] = s.row.map(lambda i: results.get(i, {}).get("theme", "untagged"))
    s["sentiment"] = s.row.map(lambda i: results.get(i, {}).get("sentiment", ""))
    s["text_anon"] = s.text.map(anonymise)
    s.to_pickle(f"{DATA}/tagged.pkl")


FARE_SUBTYPES = {
    "driver_extra": "Driver asks for more money than the app fare (extra cash, AC charge, tip demand, 'app fare too low')",
    "final_higher": "The in-app final fare or charge was higher than the price shown at booking",
    "fees": "Cancellation fee, platform fee, convenience fee or other added charge they didn't expect",
    "surge": "Surge or peak pricing complaint about the price changing before booking",
    "other": "Anything else about fare",
}


def fare_subtag():
    """Second pass on fare_mismatch reviews only: split them by what actually happened."""
    s = pd.read_pickle(f"{DATA}/tagged.pkl")
    fm = s[s.theme == "fare_mismatch"]
    items = list(zip(fm.row, fm.text))

    def one(batch):
        rows = "\n".join(f"{i} | {t[:600].replace(chr(10), ' ')}" for i, t in batch)
        p = ("These are Indian ride-hailing app reviews already known to be about the fare not matching expectations. "
             "Pick ONE subtype each:\n" + "\n".join(f"- {k}: {v}" for k, v in FARE_SUBTYPES.items()) +
             f"\n\nReviews (id | text):\n{rows}\n\nJSON only: [{{\"id\":<id>,\"sub\":\"<key>\"}}, ...]")
        body = {"model": MODEL, "max_tokens": 3000, "thinking": {"type": "disabled"},
                "messages": [{"role": "user", "content": p}]}
        r = requests.post(f"{API}/v1/messages", json=body, timeout=120,
                          headers={"x-api-key": KEY, "anthropic-version": "2023-06-01"})
        txt = "".join(c.get("text", "") for c in r.json()["content"] if c["type"] == "text")
        return {int(o["id"]): o["sub"] for o in json.loads(txt[txt.index("["): txt.rindex("]") + 1])}

    res = {}
    with ThreadPoolExecutor(16) as ex:
        for out in ex.map(one, [items[k:k + 40] for k in range(0, len(items), 40)]):
            res.update(out)
    s["fare_sub"] = s.row.map(res)
    s.to_pickle(f"{DATA}/tagged.pkl")


def summarise():
    s = pd.read_pickle(f"{DATA}/tagged.pkl")
    # One fixed post-rule: "safe ride" style praise was tagged safety; positive safety rows count as praise.
    s.loc[(s.theme == "safety") & (s.sentiment == "pos"), "theme"] = "praise_general"
    pivot = pd.crosstab(s.theme, s.app)
    share = (pivot / pivot.sum() * 100).round(1)
    print(pivot, "\n", share)
    # validation sample: 50 random tagged reviews, labelled by hand without seeing the model's tag
    val = s.sample(n=50, random_state=7)[["app", "review_id", "stars", "text_anon", "theme"]]
    val.to_csv(f"{DATA}/validation_sample.csv", index=False)


if __name__ == "__main__":
    {"pull": pull, "tag": tag, "fare_subtag": fare_subtag, "summarise": summarise}[sys.argv[1]]()
