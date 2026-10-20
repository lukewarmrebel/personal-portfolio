// About the project: Why I'd make Paytm's home screen scan-first.
// Facts come from my memo (public results, my own keyword pass on 2,783 reviews). Illustrative numbers say "est." or "sample data".
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const W = "/projects/paytm-scan-first-home";

const project: ProjectFile = {
  slug: "paytm-scan-first-home",
  group: "teardowns",
  order: 3,
  title: "Why I'd make Paytm's home screen scan-first",
  oneLine: "Most people open Paytm to pay. I'd remove the ad on launch, the ad beside the scanner and the loan offers everyone sees, and put the scanner first.",
  tag: "Paytm",
  tags: ["Teardown", "Payments", "Home screen", "India"],
  links: [{ label: "Read (PDF)", href: "/work/pdf/Pranav_KillDoc_PaytmHome.pdf" }],
  card: { thumb: "/work/img/paytm-before-after.webp" },
  tiles: [
    { value: "3×", label: "more reviews about slowness than about ads" },
    { value: "~100×", label: "gap between monthly users and key credit customers (est.)" },
    { value: "8.03%", label: "Paytm's UPI volume share, August 2026" },
    { value: "−30%", label: "time-to-pay target (est.)" },
  ],
  label: "A teardown memo, not something I shipped. I don't work at Paytm. Review numbers are from my own keyword pass; numbers marked est. are my estimates.",
  glance: {
    problem: "Most people open Paytm to pay, but ads and loan offers come first.",
    users: "People who open Paytm to scan and pay at a shop counter.",
    role: "Solo: review analysis, business read, options, recommendation and a test plan.",
    outcome: "A 2-page memo: a scan-first home, with credit shown only after intent. Practice exercise.",
  },
  problem: {
    persona: {
      name: "Meena, 42, Indore",
      who: "Pays at the vegetable stall and kirana daily",
      context: "Queue behind her, phone in hand. She opens Paytm and a full-screen ad loads before the scanner.",
      needs: ["Scanner ready in a second", "Her usual shops and bills up front", "No mis-taps near the scanner"],
      frustrations: ["A launch ad she has to skip", "An ad banner right beside Scan", "Loan offers after a decline"],
    },
    jtbd: "When I'm at the counter with people waiting, I want the scanner open the moment the app opens, so I can pay and move on without looking slow.",
  },
  frameworks: {
    blocks: [
      {
        kind: "circles",
        title: "The problem, worked through step by step",
        steps: {
          comprehend: "Payments bring users in; credit makes the money. So home became the credit shelf, in front of the scanner.",
          identify: "Daily scan-and-pay users; the few lakh who want credit; partners paying for placement.",
          report: "Fast scan, no mis-taps, credit only when they want it.",
          cut: "Time to pay first. Credit discovery second, but only for people who raise a hand.",
          list: "Strip home to pay only, drop just the two ads, keep the Nov 2025 cleanup, or kill and replace.",
          evaluate: "Stripping hurts the credit funnel. Dropping two ads still shows loans to everyone.",
          summarise: "Scan-first home with ranked shortcuts; credit in a Money tab and on home only after intent.",
        },
      },
      {
        kind: "research",
        mode: "findings",
        title: "Review analysis and public results (no interviews)",
        methods: [
          { method: "Review keyword pass", who: "Recent Play Store reviews, 8+ words", howMany: "2,783", how: "Counted mentions of slow, lag, crash, login vs ads, clutter, UI" },
          { method: "Home teardown", who: "Paytm, Google Pay, PhonePe home screens", howMany: "3", how: "Mapped what sits above and around the scanner" },
          { method: "Business read", who: "Public results and UPI share data", howMany: "FY26 + Q1", how: "Where the money comes from and who it serves" },
        ],
        findings: [
          { group: "Speed beats clutter", insight: "Slowness is the loudest complaint", evidence: "14% of reviews mention slow, lag, crash or login; 4% mention ads, clutter or UI." },
          { group: "Speed beats clutter", insight: "Top-voted this month is about speed", evidence: "“It takes longer to load and scan than other apps” (2 stars, 45 likes)." },
          { group: "Ads hurt the pay moment", insight: "The banner sits where thumbs go", evidence: "A 1-star review says the ad by the scanner gets touched by accident." },
          { group: "Ads hurt the pay moment", insight: "A launch ad blocks the app", evidence: "Reviewers report a full-screen ad before the app starts." },
          { group: "Credit reaches few", insight: "Loans are shown to everyone", evidence: "7.6 lakh key credit customers vs 8.0 Cr monthly users: about 100× (est.)." },
          { group: "Credit reaches few", insight: "Offers after a decline break trust", evidence: "“I repeatedly get loan offers… but I still don't get the loan.”" },
        ],
        questions: [
          "Show me the last time you paid at a shop. What did you tap first?",
          "Have you ever tapped something by mistake near the scanner?",
          "Which loan or card offers do you remember seeing? Did you want them?",
          "What would you put on your home screen if you could pick?",
        ],
        note: "Fair to say: the app holds a 4.7 rating and clutter isn't the top complaint by count. The questions are the interviews I'd run next.",
      },
      {
        kind: "market",
        title: "The market and the gap",
        funnel: [
          { level: "TAM", value: "every UPI user", label: "People paying by UPI in India" },
          { level: "SAM", value: "8.0 Cr MTU", label: "Paytm's monthly transacting users" },
          { level: "SOM", value: "2% per arm (est.)", label: "Users in each arm of the 8-week test", assumption: "Split by heavy vs light users and city tier" },
        ],
        positioning: {
          x: ["Sells on home", "Pays on home"],
          y: ["Same for everyone", "Ranked by you"],
          points: [
            { name: "Paytm today", x: 0.25, y: 0.2 },
            { name: "PhonePe", x: 0.3, y: 0.25 },
            { name: "Google Pay", x: 0.75, y: 0.45 },
            { name: "Scan-first home", x: 0.88, y: 0.85, me: true },
          ],
        },
        features: {
          columns: ["Scan is first", "No launch ad", "Shortcuts ranked by use", "Credit only after intent"],
          rows: [
            { name: "Paytm today", values: ["partial", "no", "no", "no"] },
            { name: "PhonePe", values: ["partial", "unclear", "unclear", "unclear"] },
            { name: "Google Pay", values: ["yes", "unclear", "partial", "unclear"] },
            { name: "Scan-first home", values: ["yes", "yes", "yes", "yes"], me: true },
          ],
        },
        trends: [
          { value: "0.4%", label: "fee on merchant payments above ₹2,000 from 15 Oct, so a faster scan now earns" },
          { value: "+52%", label: "Paytm's financial services revenue in FY26" },
          { value: "−18%", label: "Paytm's marketing services revenue in FY26" },
        ],
        note: "Competitor cells are my reading of their home screens; “Unclear” means I couldn't confirm it.",
      },
      {
        kind: "journey",
        title: "Paying at the counter today, stage by stage",
        stages: [
          { stage: "Open", doing: "Opens the app at the counter", feeling: "okay", pain: "Full-screen ad first", opportunity: "Nothing loads in front of Scan" },
          { stage: "Find", doing: "Looks for the scanner", feeling: "okay", pain: "Credit block and banners compete", opportunity: "Scan fills the top third" },
          { stage: "Tap", doing: "Taps Scan", feeling: "bad", pain: "Hits the ad banner by mistake", opportunity: "No banner near the scanner" },
          { stage: "Pay", doing: "Scans and pays", feeling: "good", pain: "Slow load with a queue behind", opportunity: "Measure time-to-pay, cut app weight" },
          { stage: "After", doing: "Sees a loan offer", feeling: "bad", pain: "Offer after a decline", opportunity: "Credit only after intent" },
        ],
      },
      {
        kind: "emotion",
        title: "How paying at the counter feels today",
        steps: [
          { step: "Opens app", feeling: 0 },
          { step: "Launch ad", feeling: -2, note: "Low point" },
          { step: "Finds Scan", feeling: -1 },
          { step: "Mis-taps ad", feeling: -2 },
          { step: "Payment done", feeling: 1, note: "Relief" },
          { step: "Loan offer", feeling: -1 },
        ],
        note: "Drawn from the review themes. The redesign aims to make the first two steps disappear.",
      },
      {
        kind: "rice",
        title: "What to build first (RICE)",
        rows: [
          { item: "Remove launch ad and scanner banner", reach: 8, impact: 2, confidence: 0.9, effort: 1 },
          { item: "Scan fills the top third", reach: 8, impact: 2, confidence: 0.8, effort: 1 },
          { item: "Shortcuts ranked by own use", reach: 6, impact: 2, confidence: 0.6, effort: 3 },
          { item: "“Likely next” slot with a reason", reach: 5, impact: 2, confidence: 0.5, effort: 3 },
          { item: "Money tab + intent-only credit", reach: 2, impact: 3, confidence: 0.6, effort: 2 },
          { item: "Pin and reset tiles", reach: 3, impact: 1, confidence: 0.8, effort: 1 },
        ],
        note: "Sample data. Reach is crore monthly users (est.), impact 1 to 3, effort in squad-months.",
      },
      {
        kind: "moscow",
        title: "Scope for the first version",
        must: ["No launch ad", "No banner beside Scan", "Scan any QR in the top third", "Credit off home without intent"],
        should: ["4 to 8 ranked shortcuts", "One “likely next” slot with its reason", "Money tab"],
        could: ["Pin and reset tiles", "Old layout for 30 days"],
        wont: ["Credit cues from low balance", "“Pre-approved” before a lender says yes", "Paid tiles above own use"],
      },
      {
        kind: "tradeoff",
        title: "Four options, weighted",
        criteria: [
          { name: "Faster pay path", weight: 3 },
          { name: "Credit revenue kept", weight: 3 },
          { name: "User trust", weight: 2 },
          { name: "Build cost (low is good)", weight: 1 },
          { name: "Partner fallout (low is good)", weight: 1 },
        ],
        options: [
          { name: "Kill: pay only", scores: [5, 1, 4, 4, 1] },
          { name: "Narrow: drop 2 ads", scores: [3, 5, 3, 5, 4] },
          { name: "Keep Nov 2025 layout", scores: [1, 5, 2, 5, 5] },
          { name: "Kill and replace", scores: [5, 4, 5, 2, 3], chosen: true },
        ],
        note: "Scores 1 to 5 are my judgement from the memo, not measured.",
      },
      {
        kind: "acceptance",
        title: "Acceptance criteria",
        stories: [
          { story: "Scan first", given: "I open the app", when: "home loads", then: "Scan any QR is the first thing on screen and nothing loads in front of it" },
          { story: "Ranked shortcuts", given: "I've used the app for 90 days", when: "I look at my shortcuts", then: "they're ordered by what I use; a new user sees the default set" },
          { story: "Likely next", given: "a “likely next” card is shown", when: "I tap “Why?”", then: "I see the reason, and I can hide it" },
          { story: "Credit by intent", given: "I've never checked my score or opened Postpaid", when: "home loads", then: "no loan or card offer is on home" },
          { story: "Never hidden", given: "any ranking result", when: "home renders", then: "Scan, balance and history are always visible" },
        ],
      },
      {
        kind: "northstar",
        title: "Metric tree",
        northStar: { name: "Scan-and-pay transactions per monthly user", detail: "Share gains come from frequency", target: "+3% (est.)" },
        inputs: [
          { name: "Median time from open to pay screen", detail: "The habit lives or dies here", target: "−30% (est.)" },
          { name: "Promo tap, then back within 3 s", detail: "Proxy for mis-taps on the banner", target: "−80% (est.)" },
          { name: "Credit offers shown to declined users", detail: "Stops the trust leak", target: "−50% (est.)" },
          { name: "Likely-next slot used", detail: "Taps vs hides", target: "sample data" },
        ],
        guardrails: [
          { name: "Financial services revenue per user", target: "within −5% (est.)" },
          { name: "Payment success rate", target: "no drop" },
          { name: "Services used per user", target: "no drop" },
        ],
        note: "Targets are my estimates for an 8-week test.",
      },
      {
        kind: "heart",
        title: "HEART",
        rows: [
          { dimension: "Happiness", goal: "Home feels fast and clean", signal: "Fewer speed and ad reviews", metric: "Share of reviews on slow or ads" },
          { dimension: "Engagement", goal: "People pay more often", signal: "Scans per user", metric: "+3% per MTU (est.)" },
          { dimension: "Adoption", goal: "Ranked home is kept", signal: "Few resets to default", metric: "Reset rate under 5% (est.)" },
          { dimension: "Retention", goal: "Credit buyers still find credit", signal: "Money tab visits after intent", metric: "Credit revenue within −5% (est.)" },
          { dimension: "Task success", goal: "Pay without a detour", signal: "Open-to-pay time", metric: "−30% median (est.)" },
        ],
      },
      {
        kind: "risks",
        title: "Risks and how I'd handle them",
        items: [
          { risk: "Credit revenue falls more than 5%", likelihood: "medium", impact: "high", mitigation: "Ship Narrow instead and keep the credit block" },
          { risk: "Slowness is engineering, not layout", likelihood: "medium", impact: "medium", mitigation: "Measure time-to-pay first; fix app weight if it barely moves" },
          { risk: "Ranking kills discovery", likelihood: "low", impact: "medium", mitigation: "Track services used per user; All services stays one tap away" },
          { risk: "Partners push back", likelihood: "high", impact: "medium", mitigation: "Move placements to category pages, make-goods for live deals" },
        ],
      },
      {
        kind: "roadmap",
        title: "Roadmap",
        now: ["Remove launch ad and scanner banner", "8-week, three-arm test", "Time-to-pay baseline"],
        next: ["Ranked shortcuts", "Likely-next slot with reasons", "Money tab and intent signals"],
        later: ["Pin and reset tiles", "1% holdout for six months", "Model v2 beyond frequency and recency"],
      },
    ],
  },
  flow: {
    title: "What decides what's on home",
    nodes: [
      { label: "User opens the app", kind: "start" },
      { label: "Show Scan any QR at once, nothing in front", kind: "step" },
      { label: "Has 90 days of use?", kind: "decision", side: { label: "No", text: "Show today's default shortcuts." } },
      { label: "Rank 4 to 8 shortcuts by own use", kind: "step" },
      { label: "Any intent signal for credit?", kind: "decision", side: { label: "No", text: "Keep credit in the Money tab only." } },
      { label: "Add one credit card in the intent slot", kind: "step" },
      { label: "Home: scan, shortcuts, one likely-next with a reason", kind: "end" },
    ],
    caption: "Version one is a frequency, recency and time-of-day score, not an LLM.",
  },
  wireframes: {
    screens: [
      { src: `${W}/1-today.svg`, caption: "Before: launch ad, credit block, banner by Scan" },
      { src: `${W}/2-home.svg`, caption: "After: scan first, shortcuts ranked by use" },
      { src: `${W}/3-why.svg`, caption: "Every suggestion shows why, and can be hidden" },
      { src: `${W}/4-money.svg`, caption: "Credit one tap away, on home only after intent" },
    ],
    caption: "Flat wireframes with made-up names.",
  },
  solution: {
    summary: "Showing a loan block to 8 Cr people a month to find a few lakh borrowers is the costliest way to find them. Intent is cheaper.",
    steps: ["Remove two ads", "Scan first", "Ranked shortcuts", "Likely-next slot", "Credit after intent"],
    decisions: [
      { decision: "Scan fills the top third", why: "Most opens are a payment. Nothing loads in front of it." },
      { decision: "Credit only after a raised hand", why: "Checking a score or opening Postpaid is intent. Everyone else gets speed.", rejected: "The same credit block for everyone" },
      { decision: "A simple score, not an LLM", why: "Frequency, recency and time of day are enough, and easy to explain." },
      { decision: "Every suggestion shows its reason", why: "Personal ranking only earns trust if people can see and hide it." },
      { decision: "Test three arms, keep a holdout", why: "If credit falls, Narrow ships instead.", rejected: "A full switch on day one" },
    ],
  },
  metrics: {
    northStar: "Scan-and-pay transactions per monthly user",
    rows: [
      { name: "Median open-to-pay time", target: "−30% (est.)", how: "Client timing from open to pay screen" },
      { name: "Promo tap then back in 3 s", target: "−80% (est.)", how: "Event pairs on the banner slot" },
      { name: "Credit offers to declined users", target: "−50% (est.)", how: "Offer impressions joined to lender decisions" },
      { name: "Credit revenue per user", target: "Within −5% (est.)", how: "Guardrail, by arm" },
    ],
    tests: [
      "8 weeks, three arms: today's home, Narrow, Kill-and-replace; 2% of users each (est.)",
      "Split by heavy vs light users and city tier",
      "Replace wins if pay frequency rises 3%+ and credit revenue holds within −5% (est.)",
      "A 1% holdout runs for six months after rollout",
    ],
    note: "Every target is my estimate, not a benchmark.",
  },
  next: {
    items: [
      "Measure open-to-pay time on low-end phones before any layout change",
      "Watch 10 people pay at a real counter",
      "Agree intent signals with the lending team",
      "Plan partner make-goods for live home deals",
    ],
  },
  extra: {
    images: [{ src: "/work/img/paytm-before-after.webp", alt: "Mock layouts: today's Paytm home vs a scan-first home" }],
    stat: "Reviews complain about slowness over 3 times as often as about ads.",
  },
};

export default project;

