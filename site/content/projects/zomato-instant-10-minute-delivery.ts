// About the project: Should Zomato have shut its 10-minute food delivery? (written as of January 2023)
// Facts come from my memo (public reporting, my own unit math marked est.). Illustrative numbers say "est." or "sample data".
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const W = "/projects/zomato-instant-10-minute-delivery";

const project: ProjectFile = {
  slug: "zomato-instant-10-minute-delivery",
  group: "teardowns",
  order: 4,
  title: "Should Zomato have shut its 10-minute food delivery? (2023)",
  oneLine: "My call: don't shut it yet. Drop the 10-minute promise, run one 8-week test near offices and colleges, and close it if it misses the target.",
  tag: "Zomato · written as of January 2023",
  tags: ["Teardown", "Food delivery", "Decision memo", "India"],
  links: [{ label: "Read (PDF)", href: "/work/pdf/Pranav_KillDoc_ZomatoInstant.pdf" }],
  tiles: [
    { value: "8 weeks", label: "one focused test before deciding" },
    { value: "270–500", label: "orders a day for a station to break even (est.)" },
    { value: "3 of 3", label: "kill criteria a station must pass at week 8" },
    { value: "3%", label: "core food GOV growth, QoQ, the quarter before" },
  ],
  label: "A decision memo written as if it were January 2023, with a scorecard added in October 2026. I was not at Zomato. Numbers marked est. are my estimates.",
  glance: {
    problem: "Zomato's 10-minute food delivery was costly. Should it shut? (written as of January 2023)",
    users: "Zomato's leadership, deciding whether to keep or close the service. And office and college eaters.",
    role: "Solo: unit math, options, recommendation, kill criteria and comms plan.",
    outcome: "A memo: don't shut it yet; run one 8-week test, then decide. Later scored against what happened.",
  },
  problem: {
    persona: {
      name: "Aditi, 26, Gurugram",
      who: "Works in an office park, orders lunch on weekdays",
      context: "12:50 pm, a 1:30 meeting. She wants a cheap, filling lunch at her desk, not a feast.",
      needs: ["A meal under ₹100", "At her desk well before the meeting", "The same reliable dishes every day"],
      frustrations: ["Long waits at lunch peak", "Delivery fees on a small order", "Menus built for snacking"],
    },
    jtbd: "When I'm stuck at my desk on a weekday, I want a cheap, proper meal close by and fast, so I can eat well without losing my lunch break.",
  },
  frameworks: {
    blocks: [
      {
        kind: "circles",
        title: "The decision, worked through step by step",
        steps: {
          comprehend: "Instant's stations are a fixed cost. Ordering is off. Leadership must kill, narrow or scale this week.",
          identify: "Leadership; office and college eaters; restaurant partners; riders.",
          report: "Eaters want cheap, fast weekday meals. Leadership needs a cost it can cover.",
          cut: "Prove one dense use case first. Brand and scale come after.",
          list: "Kill now, narrow to weekday meals near offices and colleges, or scale to 40 stations.",
          evaluate: "Scaling multiplies an uncovered fixed cost. Killing writes off the kitchen learning.",
          summarise: "Narrow: drop the minute count, run an 8-week weekday meal test, close if it misses.",
        },
      },
      {
        kind: "research",
        mode: "plan",
        title: "Research plan, plus what public reporting showed",
        methods: [
          { method: "Order data dig", who: "Instant orders by micro-market and hour", howMany: "4 stations", how: "Find where repeat and meal orders were dense" },
          { method: "Intercepts", who: "Office and college eaters near stations", howMany: "20", how: "10-minute chats at lunch about price, wait and menu" },
          { method: "Partner calls", who: "Restaurant partners in the pilot", howMany: "6", how: "What the pre-mix workflow cost them, and what they'd keep" },
        ],
        findings: [
          { group: "What reporting showed", insight: "Snacks sold, not meals", evidence: "The pilot's top sellers were momos, poha and Maggi." },
          { group: "What reporting showed", insight: "Partners missed the clock", evidence: "Partners kept missing 10 minutes in the Gurugram pilot." },
          { group: "What reporting showed", insight: "The promise drew backlash", evidence: "The launch drew rider-safety criticism, even though riders never see a timer." },
          { group: "My estimates", insight: "Stations need volume", evidence: "₹4–6 lakh a month per station at ₹40–50 an order needs 270–500 orders a day (est.)." },
          { group: "My estimates", insight: "Dense demand is narrow", evidence: "Repeat outside office and student pockets looks weak (est.)." },
        ],
        questions: [
          "What did you eat for lunch yesterday, and how did you get it?",
          "What's the most you'd pay for a weekday lunch delivered?",
          "Would you order the same 5 dishes every week?",
          "Did “10 minutes” change whether you ordered?",
        ],
        note: "No interviews were run. The amber cards are public reporting and my own unit math, not user research.",
      },
      {
        kind: "market",
        title: "The market and the gap (as of January 2023)",
        funnel: [
          { level: "TAM", value: "est.", label: "Online food orders in Indian metros" },
          { level: "SAM", value: "est.", label: "Weekday breakfast and lunch near offices and colleges" },
          { level: "SOM", value: "4 stations (est.)", label: "The Gurugram stations in the 8-week test", assumption: "300+ weekday orders a day each to pass" },
        ],
        positioning: {
          x: ["Wide menu", "Small, fixed menu"],
          y: ["Normal speed", "Very fast"],
          points: [
            { name: "Zomato core delivery", x: 0.12, y: 0.3 },
            { name: "Instant, 10 minutes", x: 0.85, y: 0.92 },
            { name: "Cloud kitchens", x: 0.45, y: 0.35 },
            { name: "Office canteen / tiffin", x: 0.9, y: 0.55 },
            { name: "Weekday meals, close and fast", x: 0.8, y: 0.7, me: true },
          ],
        },
        features: {
          columns: ["Under ₹100", "No minute promise", "Owned stations", "Repeat-friendly menu"],
          rows: [
            { name: "Instant (2022)", values: ["partial", "no", "yes", "partial"] },
            { name: "Zomato core", values: ["partial", "yes", "no", "partial"] },
            { name: "Tiffin services", values: ["yes", "yes", "no", "yes"] },
            { name: "Weekday meals test", values: ["yes", "yes", "yes", "yes"], me: true },
          ],
        },
        trends: [
          { value: "3%", label: "core food GOV growth QoQ in Q2: every rupee here is one not spent on core" },
          { value: "40+", label: "NCR stations in the original 90-day plan" },
          { value: "4", label: "stations reported in the Gurugram pilot" },
        ],
        note: "Written from what was public in January 2023. Cells are my reading, not company data.",
      },
      {
        kind: "journey",
        title: "A weekday lunch order, stage by stage",
        stages: [
          { stage: "Hungry", doing: "Opens the app at 12:50", feeling: "okay", pain: "Big menus, long waits at peak", opportunity: "A short weekday menu near her" },
          { stage: "Choose", doing: "Scrolls snacks on Instant", feeling: "okay", pain: "Snacks, not a meal", opportunity: "Thalis and rice meals under ₹100" },
          { stage: "Pay", doing: "Checks the total", feeling: "bad", pain: "Fees on a small order", opportunity: "Price set for daily repeat" },
          { stage: "Wait", doing: "Watches the clock", feeling: "okay", pain: "A promise that gets missed", opportunity: "“Close by”, no minute count" },
          { stage: "Repeat", doing: "Decides on tomorrow", feeling: "good", pain: "Nothing pulls her back", opportunity: "Reorder tomorrow in one tap" },
        ],
      },
      {
        kind: "emotion",
        title: "How Instant felt, and the bet behind narrowing",
        steps: [
          { step: "Sees “10 min”", feeling: 2, note: "Excited" },
          { step: "Menu is snacks", feeling: -1 },
          { step: "Places order", feeling: 1 },
          { step: "Clock slips", feeling: -2, note: "Low point" },
          { step: "Food arrives", feeling: 1 },
          { step: "Thinks of tomorrow", feeling: 0 },
        ],
        note: "Illustrative, built from the reporting. A promised number sets a bar the product then misses.",
      },
      {
        kind: "rice",
        title: "What the test should include (RICE)",
        rows: [
          { item: "Drop the 10-minute brand", reach: 9, impact: 2, confidence: 0.9, effort: 1 },
          { item: "Weekday meals menu under ₹100", reach: 5, impact: 3, confidence: 0.5, effort: 2 },
          { item: "Only office and college areas", reach: 4, impact: 2, confidence: 0.7, effort: 1 },
          { item: "Weekly kill-criteria scorecard", reach: 2, impact: 3, confidence: 0.9, effort: 1 },
          { item: "Reorder tomorrow in one tap", reach: 4, impact: 2, confidence: 0.6, effort: 1 },
          { item: "Scale to 40 NCR stations", reach: 9, impact: 2, confidence: 0.2, effort: 8 },
        ],
        note: "Sample data. Reach 1 to 10 relative, impact 1 to 3, effort in team-months.",
      },
      {
        kind: "moscow",
        title: "Scope for the 8-week test",
        must: ["No minute count anywhere", "Fixed weekday breakfast and lunch menu", "Kill criteria set before launch", "Partners and riders told first"],
        should: ["One-tap reorder", "Dish-level forecasting kept", "Prices under ₹100"],
        could: ["Office group orders", "A name other than Instant"],
        wont: ["New stations", "New cities", "Late penalties for riders"],
      },
      {
        kind: "tradeoff",
        title: "Three options, weighted",
        criteria: [
          { name: "Cash burn (low is good)", weight: 3 },
          { name: "Learning kept", weight: 2 },
          { name: "Chance of a real business", weight: 3 },
          { name: "Brand and safety risk (low is good)", weight: 2 },
        ],
        options: [
          { name: "Kill now", scores: [5, 1, 1, 3] },
          { name: "Narrow and test", scores: [4, 4, 3, 4], chosen: true },
          { name: "Keep and scale", scores: [1, 4, 2, 1] },
        ],
        note: "Scores 1 to 5 are my judgement from the memo, not measured.",
      },
      {
        kind: "acceptance",
        title: "Acceptance criteria for the test",
        stories: [
          { story: "No clock", given: "I'm a customer in a test area", when: "I see the menu or track an order", then: "no minute count is shown, only “close by”" },
          { story: "Weekday menu", given: "it's a weekday, 7 am to 3 pm", when: "I open the station menu", then: "I see a fixed breakfast or lunch menu, priced for daily repeat" },
          { story: "Riders", given: "I'm a rider on a station order", when: "I pick up", then: "there's no timer and no late penalty" },
          { story: "Kill switch", given: "it's week 8", when: "any of the 3 criteria is missed", then: "the stations close and partners are told within a week" },
        ],
      },
      {
        kind: "northstar",
        title: "Metric tree",
        northStar: { name: "Weekday orders a day per station", detail: "The fixed cost only works with volume", target: "300+ (est.)" },
        inputs: [
          { name: "First-time buyers who reorder in 30 days", detail: "Is it a habit or a novelty?", target: "35%+ (est.)" },
          { name: "Lunch-peak orders per office cluster", detail: "Where demand is dense", target: "sample data" },
          { name: "Average order value", detail: "Low on purpose, for daily repeat", target: "₹80–100 (est.)" },
          { name: "Station prep accuracy", detail: "Forecast vs dishes sold", target: "90%+ (est.)" },
        ],
        guardrails: [
          { name: "Contribution per order after rider cost", target: "positive" },
          { name: "Rider safety incidents", target: "0 linked to speed" },
        ],
        note: "Targets are my estimates. All three of the first ones must hold at week 8.",
      },
      {
        kind: "heart",
        title: "HEART",
        rows: [
          { dimension: "Happiness", goal: "Lunch feels worth it", signal: "Ratings on station orders", metric: "Avg rating 4.3+ (est.)" },
          { dimension: "Engagement", goal: "Weekly habit", signal: "Orders per buyer per week", metric: "2+ (est.)" },
          { dimension: "Adoption", goal: "Office eaters try it", signal: "First orders per cluster", metric: "Sample data" },
          { dimension: "Retention", goal: "They come back", signal: "Reorder in 30 days", metric: "35%+ (est.)" },
          { dimension: "Task success", goal: "Arrives hot, close and fast", signal: "Delivered in 10–15 min", metric: "85% of orders (est.)" },
        ],
      },
      {
        kind: "risks",
        title: "Risks and how I'd handle them",
        items: [
          { risk: "A cheap menu also doesn't scale", likelihood: "high", impact: "high", mitigation: "Hard week-8 kill criteria, no extensions" },
          { risk: "“Zomato gave up” headlines", likelihood: "medium", impact: "medium", mitigation: "New name, new menu, one holding line for press" },
          { risk: "Partners lose money on stations", likelihood: "medium", impact: "medium", mitigation: "Call each partner first; settle dues on a set date" },
          { risk: "Demand exists outside offices", likelihood: "low", impact: "medium", mitigation: "Check every micro-market's data before closing" },
        ],
      },
      {
        kind: "roadmap",
        title: "Roadmap (as written in January 2023)",
        now: ["Drop the 10-minute promise", "Call partners, brief riders", "Weekday meals menu live"],
        next: ["Weekly scorecard against 3 criteria", "Week 8: keep or close", "Hand back unused stations"],
        later: ["Only if it passes: one more office cluster", "Keep forecasting for core delivery"],
      },
    ],
  },
  flow: {
    title: "How I'd make the call",
    nodes: [
      { label: "Ordering off; stations are a fixed cost", kind: "start" },
      { label: "Any micro-market near break-even outside offices?", kind: "decision", side: { label: "Yes", text: "Then I'd argue to keep Instant as it was. None was (est.)." } },
      { label: "Drop the 10-minute brand", kind: "step" },
      { label: "8 weeks: weekday meals near offices and colleges", kind: "step" },
      { label: "Week 8: all 3 criteria hold?", kind: "decision", side: { label: "No", text: "Close the stations. Keep the forecasting." } },
      { label: "Add one more office cluster, carefully", kind: "end" },
    ],
    caption: "The criteria are set before the test starts, so the answer can't be argued later.",
  },
  wireframes: {
    screens: [
      { src: `${W}/1-before.svg`, caption: "Before: a minute count and a snack menu" },
      { src: `${W}/2-menu.svg`, caption: "Test: weekday meals, no minute count" },
      { src: `${W}/3-tracking.svg`, caption: "Tracking says “close by”, never a clock" },
      { src: `${W}/4-scorecard.svg`, caption: "The weekly kill-criteria scorecard" },
    ],
    caption: "Flat wireframes with mock menus and sample data.",
  },
  solution: {
    summary: "Speed is what you get when the menu is small enough to pre-stage, and that only works where demand is dense. So I'd stop promising minutes and test the one dense case.",
    steps: ["Drop the promise", "Narrow the menu", "Office and college areas", "8-week scorecard", "Keep or close"],
    decisions: [
      { decision: "Say “close and fast”, never a number", why: "The clock is what people heard, and what partners kept missing." },
      { decision: "Narrow, not kill", why: "Two more months of stations (₹32–48 lakh, est.) buys a clear answer and keeps the kitchen learning.", rejected: "Shut everything this month" },
      { decision: "Don't scale", why: "40 stations is ₹1.6–2.4 crore a month in fixed cost (est.) before one breaks even.", rejected: "The 40-station NCR plan" },
      { decision: "Three hard kill criteria", why: "Volume, repeat and positive contribution, all fixed before launch." },
    ],
  },
  metrics: {
    northStar: "Weekday orders a day per station",
    rows: [
      { name: "Weekday orders a day per station", target: "300+ (est.)", how: "Station order logs, Mon to Fri" },
      { name: "First-time buyers reordering in 30 days", target: "35%+ (est.)", how: "Cohort by first order week" },
      { name: "Contribution per order after rider cost", target: "Positive", how: "Unit economics per station, weekly" },
    ],
    tests: [
      "8 weeks, existing Gurugram stations only, weekdays",
      "All three criteria must hold at week 8, or the stations close",
      "No mid-test changes to the bar",
    ],
    note: "Every target is my estimate, not company data.",
  },
  next: {
    items: [
      "Scorecard: my call matched what Zomato did in 2023. I was right to drop the promise and wrong about the asset.",
      "Next time I'd test restaurant density, not owned kitchens, as the thing that makes fast food work",
      "Set a hard end date on any narrowed bet, so a slow failure is called early",
    ],
  },
  extra: {
    paragraphs: [
      "What actually happened (added October 2026): ordering stayed off, and in February 2023 Zomato launched Everyday in Gurugram, home-style meals from ₹89 in 10 to 15 minutes, from Instant's stations. It shut in May 2025 as a limited use case for office locations. That is my test failing, slowly.",
      "Where I was wrong: demand. Swiggy's Bolt used existing restaurants within 2 km and fast-prep items, no kitchens of its own, and grew fast. Zomato's own 15-minute tab, Quick, shut after about four months. Restaurant density, not stations, was the asset.",
    ],
  },
};

export default project;



