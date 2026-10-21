// About the project: Why I'd remove scratch cards from payment apps.
// Facts come from my memo (review analysis, published surveys, public spend figures). Illustrative numbers say "est." or "sample data".
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const W = "/projects/remove-scratch-cards";

const project: ProjectFile = {
  slug: "remove-scratch-cards",
  group: "teardowns",
  order: 1,
  title: "Why I'd remove scratch cards from payment apps",
  oneLine: "Random scratch cards mostly say “Better luck next time”. I'd replace them with a weekly choice of 3 real rewards from shops you already pay.",
  tag: "GPay, Paytm, CRED",
  tags: ["Teardown", "Payments", "Rewards", "India"],
  links: [{ label: "Read (PDF)", href: "/work/pdf/Pranav_KillDoc_ScratchCards.pdf" }],
  card: { thumb: "/work/img/scratch-before-after.webp" },
  tiles: [
    { value: "2 in 3", label: "GPay reward reviews give 1 or 2 stars" },
    { value: "89%", label: "say rewards matter when picking a UPI app (published survey)" },
    { value: "85%", label: "drop in POP's UPI volume after it pulled cashback" },
    { value: "40%+", label: "reward redemption target at week 8 (est.)" },
  ],
  label: "A teardown memo, not something I shipped. I don't work at these companies. “Our app” is a composite UPI app; internal numbers are my estimates.",
  glance: {
    problem: "Random scratch cards in payment apps mostly say “Better luck next time” and annoy users.",
    users: "People who pay with GPay, Paytm or CRED, and the rewards team paying for it.",
    role: "Solo: review analysis, options, recommendation, metrics and a test plan.",
    outcome: "A 2-page memo: kill the scratch card, replace it with “pick 1 of 3”. Practice exercise.",
  },
  problem: {
    persona: {
      name: "Rahul, 27, Pune",
      who: "Pays for almost everything by UPI",
      context: "Pays the kirana ₹420. A scratch card pops up. It says “Better luck next time” for the third time this week.",
      needs: ["A reward he'd actually use", "Knowing what he gets before he bothers", "Enough time to use it"],
      frustrations: ["Blanks and ₹1 wins", "Vouchers for brands he never buys", "A pile of 100+ cards that expire"],
    },
    jtbd: "When I pay with UPI every day, I want rewards that are worth something at places I already go, so I feel the app is on my side and not playing me.",
  },
  frameworks: {
    blocks: [
      {
        kind: "circles",
        title: "The problem, worked through step by step",
        steps: {
          comprehend: "Apps still spend crores on random scratch cards, but the payment habit is already built.",
          identify: "Daily UPI payers; the rewards team; the brand partners who fund vouchers.",
          report: "Rewards worth using, no blanks, clear expiry, and no feeling of being played.",
          cut: "Usefulness of each reward first. Surprise and frequency last.",
          list: "Kill outright, narrow to new users, keep as is, or kill and replace.",
          evaluate: "Killing outright risks a POP-style drop. Keeping means rising spend that users dislike.",
          summarise: "Kill and replace: a weekly pick 1 of 3 from shops you already pay, proven on a holdout first.",
        },
      },
      {
        kind: "research",
        mode: "findings",
        title: "Review analysis and published surveys (no interviews)",
        methods: [
          { method: "Review analysis", who: "Newest Play Store reviews for GPay and CRED", howMany: "8,000 each", how: "Tagged reviews that mention rewards and compared their star ratings with all reviews" },
          { method: "Published surveys", who: "UPI users in India", howMany: "3", how: "Read what users say about rewards, switching and cashback that never came" },
          { method: "Spend scan", who: "Public filings of UPI apps", howMany: "4 apps", how: "Tracked what apps spend on cashback and promotion, year on year" },
        ],
        findings: [
          { group: "Rewards feel like a lottery", insight: "Reward reviews are far angrier than average", evidence: "GPay: 66% of reward reviews are 1 or 2 stars, vs 19% for all reviews. CRED: 72% vs 34%." },
          { group: "Rewards feel like a lottery", insight: "Unused cards pile up", evidence: "One review: “Not even one out of 200 has been used!”" },
          { group: "Rewards still matter", insight: "People pick apps on rewards", evidence: "89% say rewards matter when choosing a UPI app; 83% would switch for better ones." },
          { group: "Rewards still matter", insight: "Paid usage is rented", evidence: "When POP pulled cashback, its UPI volume fell 85%, from 63.7M to 9.5M a month." },
          { group: "Trust is thin", insight: "Promised money often doesn't arrive", evidence: "66% of survey respondents say a promised cashback never came." },
          { group: "Trust is thin", insight: "Vouchers read as ads", evidence: "Users call them “sponsored ad vouchers” and say the brand gives the same discount anyway." },
        ],
        questions: [
          "Show me your rewards tab. Which of these did you use, and why?",
          "When did a reward last change where you paid?",
          "Would you rather get 1 bigger reward a week or a card every payment?",
          "How would you feel if the app used the shops you pay at to pick rewards?",
        ],
        note: "The numbers are from my review analysis and published surveys. The questions are the interviews I'd run next.",
      },
      {
        kind: "market",
        title: "The market and the gap",
        funnel: [
          { level: "TAM", value: "24.07B txns/month", label: "Every UPI payment in India (September)" },
          { level: "SAM", value: "est.", label: "Merchant payments on a big UPI app that trigger a reward", assumption: "Person-to-person payments are left out on purpose" },
          { level: "SOM", value: "~2% of users (est.)", label: "The holdout cells for the first 8 weeks", assumption: "Big enough to read frequency within 3%" },
        ],
        positioning: {
          x: ["Random", "Chosen by you"],
          y: ["Small, every payment", "Bigger, fewer"],
          points: [
            { name: "GPay scratch cards", x: 0.12, y: 0.15 },
            { name: "Paytm cards and points", x: 0.22, y: 0.3 },
            { name: "CRED coins and jackpots", x: 0.3, y: 0.62 },
            { name: "Plain cashback", x: 0.55, y: 0.22 },
            { name: "Pick 1 of 3", x: 0.85, y: 0.82, me: true },
          ],
        },
        features: {
          columns: ["No blanks", "You choose", "Uses where you pay", "Clear expiry"],
          rows: [
            { name: "GPay scratch card", values: ["no", "no", "unclear", "unclear"] },
            { name: "Paytm scratch card", values: ["no", "no", "unclear", "partial"] },
            { name: "CRED coins", values: ["partial", "partial", "no", "unclear"] },
            { name: "Pick 1 of 3", values: ["yes", "yes", "yes", "yes"], me: true },
          ],
        },
        trends: [
          { value: "0.4%", label: "new fee on merchant payments above ₹2,000, from 15 Oct" },
          { value: "+73%", label: "Paytm's cashback and incentive spend in FY26" },
          { value: "₹956 cr", label: "PhonePe's ad and promotion spend in FY26" },
        ],
        note: "Competitor cells are my reading of public help pages; “Unclear” means I couldn't tell from outside.",
      },
      {
        kind: "journey",
        title: "Today's scratch card, stage by stage",
        stages: [
          { stage: "Pay", doing: "Pays the kirana by UPI", feeling: "good", pain: "None. The payment works.", opportunity: "Don't get in the way of the pay path" },
          { stage: "Reveal", doing: "Scratches the card", feeling: "okay", pain: "Mostly a blank or ₹1", opportunity: "Never show a blank" },
          { stage: "Collect", doing: "Cards pile up in Rewards", feeling: "bad", pain: "100+ cards, most useless", opportunity: "One reward a week, picked by him" },
          { stage: "Redeem", doing: "Tries a brand voucher", feeling: "bad", pain: "A brand he never buys", opportunity: "Rewards from shops he already pays" },
          { stage: "Expire", doing: "Finds cards expired", feeling: "bad", pain: "Felt short-changed", opportunity: "At least 30 days, with a reminder" },
        ],
      },
      {
        kind: "emotion",
        title: "How a scratch card feels today",
        steps: [
          { step: "Payment done", feeling: 1 },
          { step: "Card appears", feeling: 2, note: "Hope" },
          { step: "Scratch", feeling: 0 },
          { step: "“Better luck”", feeling: -2, note: "Low point" },
          { step: "Rewards pile", feeling: -1 },
          { step: "Card expired", feeling: -2 },
        ],
        note: "Drawn from the review themes. The high comes before the scratch; the redesign moves it to the reward itself.",
      },
      {
        kind: "rice",
        title: "What to build first (RICE)",
        rows: [
          { item: "Weekly pick 1 of 3", reach: 8, impact: 3, confidence: 0.7, effort: 4 },
          { item: "Always a plain-cash option", reach: 8, impact: 2, confidence: 0.9, effort: 1 },
          { item: "No-blanks rule, 30-day expiry", reach: 9, impact: 2, confidence: 0.9, effort: 1 },
          { item: "Consent screen (one purpose)", reach: 6, impact: 2, confidence: 0.9, effort: 2 },
          { item: "Merchant pay-per-redemption", reach: 3, impact: 3, confidence: 0.5, effort: 5 },
          { item: "Three-cell holdout setup", reach: 2, impact: 3, confidence: 0.8, effort: 2 },
        ],
        note: "Sample data. Reach is millions of monthly users (est.), impact 1 to 3, effort in person-months.",
      },
      {
        kind: "moscow",
        title: "Scope for the first version",
        must: ["3 options a week, user picks 1", "One option is always plain cash", "No blanks; 30+ days to use", "Separate consent notice"],
        should: ["Ranker on redemption × value", "Expiry reminder", "Honour cards already issued"],
        could: ["Merchant dashboard with totals only", "Festive bonus pick"],
        wont: ["Loans shown as rewards", "Countdowns or fake scarcity", "Person-to-person or health data in the ranker"],
      },
      {
        kind: "tradeoff",
        title: "Four options, weighted",
        criteria: [
          { name: "Cost saved", weight: 3 },
          { name: "Keeps the habit", weight: 3 },
          { name: "User trust", weight: 2 },
          { name: "Merchant value", weight: 2 },
          { name: "Low legal risk", weight: 1 },
        ],
        options: [
          { name: "Kill outright", scores: [5, 1, 3, 1, 5] },
          { name: "Narrow to new users", scores: [3, 3, 2, 2, 3] },
          { name: "Keep as is", scores: [1, 4, 1, 2, 2] },
          { name: "Kill and replace", scores: [3, 4, 4, 4, 4], chosen: true },
        ],
        note: "Scores 1 to 5 are my judgement from the memo, not measured.",
      },
      {
        kind: "acceptance",
        title: "Acceptance criteria",
        stories: [
          { story: "Weekly pick", given: "I made a merchant payment this week", when: "I open my rewards on Monday", then: "I see 3 options with value and expiry, and none is a blank" },
          { story: "Cash fallback", given: "I don't want a voucher", when: "I look at my 3 options", then: "One of them is always plain cash to my bank" },
          { story: "Consent", given: "I said no to using my payments", when: "my weekly pick loads", then: "I get 3 general options and none use my history" },
          { story: "Safe data", given: "I paid a friend or a pharmacy", when: "the ranker builds my options", then: "that payment is never used and no health offer appears" },
          { story: "Old cards", given: "I hold unscratched cards at switch-over", when: "the new flow launches", then: "my old cards still work until they expire" },
        ],
      },
      {
        kind: "northstar",
        title: "Metric tree",
        northStar: { name: "Share of issued rewards that get used", detail: "Under 10% today (est.); counts redemption, not scratch opens", target: "40%+ (est.)" },
        inputs: [
          { name: "Personalisation opt-in", detail: "Users who say yes on the consent screen", target: "30%+ (est.)" },
          { name: "Weekly pick claimed", detail: "Users who claim a reward in the week", target: "50% (est.)" },
          { name: "Reward cost per user kept at 90 days", detail: "Versus the scratch-card cell", target: "25% lower (est.)" },
          { name: "Merchant sales per ₹1 of reward", detail: "For merchant-funded options", target: "₹3+ (est.)" },
        ],
        guardrails: [
          { name: "Payments per active user a month", target: "within 3% of holdout" },
          { name: "1–2 star reward reviews", target: "under 40% (from 66%)" },
          { name: "Person-to-person data used", target: "0" },
        ],
        note: "Targets are my estimates for an 8-week test.",
      },
      {
        kind: "heart",
        title: "HEART",
        rows: [
          { dimension: "Happiness", goal: "Rewards feel fair", signal: "Fewer angry reward reviews", metric: "1–2 star reward reviews under 40% (est.)" },
          { dimension: "Engagement", goal: "People pick each week", signal: "Weekly claims", metric: "Claims per active user a week" },
          { dimension: "Adoption", goal: "People trust the consent ask", signal: "Says yes to personalisation", metric: "Opt-in rate, 30%+ (est.)" },
          { dimension: "Retention", goal: "Paying habit holds", signal: "Payments per month vs holdout", metric: "Within 3% of holdout (est.)" },
          { dimension: "Task success", goal: "Rewards get used", signal: "Redeemed before expiry", metric: "Redemption 40%+ (est.)" },
        ],
      },
      {
        kind: "risks",
        title: "Risks and how I'd handle them",
        items: [
          { risk: "Payments drop like POP's did", likelihood: "medium", impact: "high", mitigation: "Holdout first; fall back to narrow if frequency is 3% below" },
          { risk: "Personal picks feel creepy", likelihood: "medium", impact: "medium", mitigation: "Plain consent, merchant types only, delete on withdraw" },
          { risk: "Merchants won't pay per redemption", likelihood: "medium", impact: "medium", mitigation: "Same budget for two quarters; show them aggregate sales" },
          { risk: "Coin jackpots read as gaming", likelihood: "low", impact: "high", mitigation: "No coin-entry jackpots; legal review" },
        ],
      },
      {
        kind: "roadmap",
        title: "Roadmap",
        now: ["Three-cell holdout, 8 weeks", "No-blanks rule and cash option", "Consent screen"],
        next: ["Ranker on redemption × value", "Merchant pay-per-redemption", "Switch off scratch cards if C wins"],
        later: ["Merchant dashboard with totals", "Festive picks without countdowns"],
      },
    ],
  },
  flow: {
    title: "How a weekly pick is built",
    nodes: [
      { label: "User makes merchant payments in the week", kind: "start" },
      { label: "Did they consent to personalisation?", kind: "decision", side: { label: "No", text: "Show 3 general options. No history used." } },
      { label: "Drop person-to-person and sensitive categories", kind: "step" },
      { label: "Rank partner offers by likely use × value", kind: "step" },
      { label: "At least 2 good partner offers?", kind: "decision", side: { label: "No", text: "Fill with plain cash. Never a blank." } },
      { label: "Show 2 offers + 1 plain-cash option", kind: "step" },
      { label: "User picks 1; 30+ days to use, with a reminder", kind: "end" },
    ],
    caption: "The ranker is a plain scoring model, not a chatbot. The safety filters run before it.",
  },
  wireframes: {
    screens: [
      { src: `${W}/1-today.svg`, caption: "Before: a card every payment, mostly blanks" },
      { src: `${W}/2-pick.svg`, caption: "After: pick 1 of 3, one is always cash" },
      { src: `${W}/3-consent.svg`, caption: "Consent first, with what's never used" },
      { src: `${W}/4-wallet.svg`, caption: "Every reward is usable, with a clear expiry" },
    ],
    caption: "Flat wireframes with mock brands and sample data.",
  },
  solution: {
    summary: "Fewer, bigger rewards, picked from places you already pay, judged by how many get used. Proven on a holdout before anything is switched off.",
    steps: ["Holdout test", "Consent", "Weekly pick 1 of 3", "Redeem at the shop", "Switch off scratch cards"],
    decisions: [
      { decision: "Once a week, not every payment", why: "The habit is built. The budget should buy rewards people use, not surprise.", rejected: "A card on every payment" },
      { decision: "One option is always cash", why: "Nobody is pushed into a voucher they don't want." },
      { decision: "A plain ranker, not a chatbot", why: "Score offers on likely use × value from merchant types and visit counts. Easy to audit." },
      { decision: "Test three cells before killing", why: "A no-rewards cell shows what scratch cards really buy. If it's close, they're pure cost.", rejected: "Switching off for everyone on day one" },
      { decision: "No countdowns, no loans as rewards", why: "They are dark patterns and break the trust this is meant to win back." },
    ],
  },
  metrics: {
    northStar: "Share of issued rewards that get used",
    rows: [
      { name: "Redemption of rewards issued", target: "40%+ (est.)", how: "Redeemed before expiry ÷ issued" },
      { name: "Reward cost per user kept at 90 days", target: "25% lower (est.)", how: "Cell C vs cell A" },
      { name: "Reward reviews at 1–2 stars", target: "Under 40% (est.)", how: "Same review tagging, monthly" },
      { name: "Merchant sales per ₹1 of reward", target: "₹3+ (est.)", how: "Merchant-funded offers only" },
    ],
    tests: [
      "8 weeks, about 2% of monthly users (est.): A scratch cards, B no rewards, C pick 1 of 3 at the same budget",
      "Thresholds fixed before launch, no peeking; split by new vs old users and tier-2/3 cities",
      "Ship if C beats A on cost per retained user and payments stay within 3% (est.)",
      "Fall back to narrow if redemption is under 25% or opt-in under 30% (est.)",
    ],
    note: "Every target is my estimate, not a benchmark.",
  },
  next: {
    items: [
      "Run the three-cell holdout and read B vs A first",
      "Talk to 10 daily UPI payers using their own rewards tab",
      "Pitch pay-per-redemption to 5 partner brands",
      "Get legal to review coin jackpots against the gaming law",
    ],
  },
  extra: {
    images: [{ src: "/work/img/scratch-before-after.webp", alt: "Wireframe: today's scratch card vs pick your reward" }],
    stat: "2 in 3 GPay reviews that mention rewards give 1 or 2 stars.",
  },
};

export default project;




