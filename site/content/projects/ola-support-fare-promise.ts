// About the project: Why I'd replace Ola's support chatbot with a fare promise.
// Facts come from my memo and my own analysis of 3,000 Play Store reviews. Illustrative numbers say "est." or "sample data".
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const W = "/projects/ola-support-fare-promise";

const project: ProjectFile = {
  slug: "ola-support-fare-promise",
  group: "teardowns",
  order: 2,
  title: "Why I'd replace Ola's support chatbot with a fare promise",
  oneLine: "Riders with a fare problem can only reach a bot. I'd promise the fare on screen is the fare you pay, let AI approve refunds within a day, and let only a person say no.",
  tag: "Ola",
  tags: ["Teardown", "Mobility", "AI support", "India"],
  links: [{ label: "Read (PDF)", href: "/work/pdf/Pranav_KillDoc_OlaAI.pdf" }],
  card: { thumb: "/work/img/ola-before-after.webp" },
  tiles: [
    { value: "2×+", label: "more often than Uber riders, Ola riders say they can't reach support" },
    { value: "14.5%", label: "of Ola reviews are about fare shown vs fare charged (Uber: 6.6%)" },
    { value: "238 of 277", label: "“driver asked for more” reviews are 1 star" },
    { value: "<24 h", label: "refund target (est.)" },
  ],
  label: "A teardown memo, not something I shipped. I don't work at Ola. Review numbers are from my own analysis; everything else marked est. is my estimate.",
  glance: {
    problem: "Ola riders with a fare problem can only reach a bot.",
    users: "Ola riders who were charged more than the app showed.",
    role: "Solo: review analysis of 3,000 reviews, options, recommendation and a test plan.",
    outcome: "A 2-page memo: point the AI at the fare, not at FAQs. Practice exercise.",
  },
  problem: {
    persona: {
      name: "Kiran, 34, Hyderabad",
      who: "Takes autos to the station twice a month",
      context: "App shows ₹550. At pickup the driver asks for ₹800. He pays to make his train, then opens Help.",
      needs: ["His ₹250 back", "Proof it won't happen again", "To report it in Telugu, by voice"],
      frustrations: ["A bot that sends a fare policy", "No way to reach a person", "Refunds as coupons, days later"],
    },
    jtbd: "When a driver asks for more than the app fare, I want to report it in seconds and get the money back fast, so I can trust the price I see next time.",
  },
  frameworks: {
    blocks: [
      {
        kind: "circles",
        title: "The problem, worked through step by step",
        steps: {
          comprehend: "Ola's AI help desk deflects tickets. Its biggest ticket is a fare dispute, which needs money moved.",
          identify: "Riders overcharged after acceptance; drivers; the support ops team.",
          report: "Get the extra money back, fast, and reach a person when the answer is no.",
          cut: "Fare disputes first: the top complaint and mostly 1 star. Receipts and lost items can stay on the bot.",
          list: "Kill the bot, narrow it, keep and tune FAQs, or kill and replace with a fare guarantee.",
          evaluate: "All-human support is too costly. Tuning FAQs leaves money unmoved.",
          summarise: "A fare guarantee: one button, AI refunds within a day, and only a person can say no.",
        },
      },
      {
        kind: "research",
        mode: "findings",
        title: "Review analysis: 3,000 Play Store reviews (no interviews)",
        methods: [
          { method: "Review analysis", who: "Recent Play Store reviews: Ola, Uber, Rapido", howMany: "3,000", how: "Tagged each review by theme and star rating, then compared apps" },
          { method: "Keyword count", who: "Ola fare complaints", howMany: "1 pass", how: "Counted fare complaints that also say they couldn't get help" },
          { method: "Public record", who: "Company filings and regulator actions", howMany: "3", how: "Read revenue, costs and 2024 complaint findings" },
        ],
        findings: [
          { group: "Fares are the problem", insight: "Fare disputes are twice Uber's rate", evidence: "Fare shown vs charged: 14.5% of Ola reviews, vs 6.6% on Uber." },
          { group: "Fares are the problem", insight: "“Asked for more” is the angriest theme", evidence: "9.2% of Ola reviews; 238 of those 277 are 1 star." },
          { group: "Support is a wall", insight: "Riders can't reach anyone", evidence: "Support unreachable: 6.3% on Ola, 2.4% on Uber, 2.8% on Rapido." },
          { group: "Support is a wall", insight: "The bot is named outright", evidence: "Twelve reviews name the bot, FAQs or auto-replies: “In need we are forced to chat with AI.”" },
          { group: "Deflection moves cost", insight: "Fare fights and no help go together", evidence: "26% of Ola fare complaints also say they couldn't get help." },
          { group: "Deflection moves cost", insight: "Language AI didn't land here", evidence: "No sampled review mentions Kruti; one mentions Krutrim. My sample is English only." },
        ],
        questions: [
          "Walk me through the last time a driver asked for more. What did you do?",
          "What did you expect Help to do for you?",
          "Would you report it by voice in Telugu or Hindi?",
          "What would make you trust the app fare again?",
        ],
        note: "Numbers are from my own review analysis. The questions are interviews I'd run next, including Hindi and Telugu riders my sample missed.",
      },
      {
        kind: "market",
        title: "The market and the gap",
        funnel: [
          { level: "TAM", value: "est.", label: "Ride-hailing trips in Indian cities" },
          { level: "SAM", value: "est.", label: "Ola auto and bike trips where the fare can be disputed" },
          { level: "SOM", value: "6 weeks (est.)", label: "Hyderabad autos and bikes, half of riders in the test", assumption: "One city first to measure abuse and driver response" },
        ],
        positioning: {
          x: ["Deflect the ticket", "Fix the money"],
          y: ["Slow, days", "Fast, same day"],
          points: [
            { name: "Ola help bot today", x: 0.12, y: 0.25 },
            { name: "Human chat or call", x: 0.55, y: 0.35 },
            { name: "Bot + “talk to a person”", x: 0.42, y: 0.5 },
            { name: "Fare guarantee", x: 0.88, y: 0.85, me: true },
          ],
        },
        features: {
          columns: ["Fare locked at accept", "One-tap report", "Refund to UPI in a day", "Person can be reached"],
          rows: [
            { name: "Ola today", values: ["unclear", "no", "unclear", "no"] },
            { name: "Uber", values: ["unclear", "unclear", "unclear", "partial"] },
            { name: "Rapido", values: ["unclear", "unclear", "unclear", "partial"] },
            { name: "Fare guarantee", values: ["yes", "yes", "yes", "yes"], me: true },
          ],
        },
        trends: [
          { value: "−42%", label: "Ola's FY25 revenue, to ₹1,171 crore" },
          { value: "2,061", label: "regulator complaints in 2024, led by fares higher than shown" },
          { value: "10 months", label: "how long the Kruti AI assistant lasted" },
        ],
        note: "Competitor cells are my reading from outside; “Unclear” means I couldn't confirm it.",
      },
      {
        kind: "journey",
        title: "A fare dispute today, stage by stage",
        stages: [
          { stage: "Book", doing: "Sees ₹550 and books", feeling: "good", pain: "None yet", opportunity: "Lock the fare at acceptance" },
          { stage: "Pickup", doing: "Driver asks for ₹800", feeling: "bad", pain: "Pay or miss the train", opportunity: "“Driver asked for more” button, free cancel" },
          { stage: "Ride", doing: "Pays the extra in cash", feeling: "bad", pain: "Feels cheated", opportunity: "Promise a refund on the spot" },
          { stage: "Help", doing: "Opens Help, gets a bot", feeling: "bad", pain: "FAQs, no person", opportunity: "AI checks trip data and pays clear cases" },
          { stage: "After", doing: "Waits, or gives up", feeling: "bad", pain: "Refund as coupon, if ever", opportunity: "Money to UPI within a day" },
        ],
      },
      {
        kind: "emotion",
        title: "How a fare dispute feels today",
        steps: [
          { step: "Books at ₹550", feeling: 1 },
          { step: "Asked for ₹800", feeling: -2, note: "Low point" },
          { step: "Pays extra", feeling: -1 },
          { step: "Opens Help", feeling: 0, note: "Hope" },
          { step: "Bot sends policy", feeling: -2 },
          { step: "No person", feeling: -2 },
        ],
        note: "Drawn from the review themes. With the guarantee, the curve should recover at “Opens Help”.",
      },
      {
        kind: "rice",
        title: "What to build first (RICE)",
        rows: [
          { item: "“Driver asked for more” button", reach: 6, impact: 3, confidence: 0.8, effort: 1 },
          { item: "AI refund for clear cases", reach: 5, impact: 3, confidence: 0.6, effort: 3 },
          { item: "Person-only denials with reply", reach: 2, impact: 2, confidence: 0.8, effort: 2 },
          { item: "Telugu and Hindi voice reports", reach: 3, impact: 2, confidence: 0.6, effort: 2 },
          { item: "Repeat-driver flag for ops", reach: 6, impact: 1, confidence: 0.7, effort: 1 },
          { item: "Free cancel when asked for more", reach: 3, impact: 2, confidence: 0.9, effort: 1 },
        ],
        note: "Sample data. Reach is thousands of riders a week in the test city (est.), impact 1 to 3, effort in squad-weeks.",
      },
      {
        kind: "moscow",
        title: "Scope for the first version",
        must: ["Fare locked at acceptance", "“Driver asked for more” button", "AI approves clear cases up to a cap", "Only a person denies"],
        should: ["Voice reports in Telugu and Hindi", "Repeat-driver flag", "Free cancel over a fare ask"],
        could: ["Refund status in the trip history", "Driver appeal screen"],
        wont: ["Call recording", "Coupons instead of money", "AI in the rider headline"],
      },
      {
        kind: "tradeoff",
        title: "Four options, weighted",
        criteria: [
          { name: "Fixes the rider's money", weight: 3 },
          { name: "Support cost", weight: 2 },
          { name: "Speed to build", weight: 1 },
          { name: "Regulator risk", weight: 2 },
          { name: "Driver supply", weight: 2 },
        ],
        options: [
          { name: "Kill the bot", scores: [3, 1, 4, 3, 4] },
          { name: "Narrow + talk to a person", scores: [2, 3, 4, 3, 4] },
          { name: "Keep and tune FAQs", scores: [1, 5, 5, 1, 5] },
          { name: "Kill and replace", scores: [5, 3, 2, 5, 3], chosen: true },
        ],
        note: "Scores 1 to 5 are my judgement from the memo, not measured. Higher is better on every column.",
      },
      {
        kind: "acceptance",
        title: "Acceptance criteria",
        stories: [
          { story: "Report", given: "a driver has accepted my trip", when: "they ask for more than the app fare", then: "I can tap “Driver asked for more” until 24 hours after the trip" },
          { story: "Free cancel", given: "I reported a fare ask before pickup", when: "I cancel the trip", then: "no cancel fee is charged" },
          { story: "AI refund", given: "trip data backs my report and the amount is under the cap", when: "the AI check runs", then: "the extra is paid to my UPI within 24 hours" },
          { story: "Person denies", given: "the AI can't approve my case", when: "it goes to review", then: "a person decides, gives a reason, and I can reply" },
        ],
      },
      {
        kind: "northstar",
        title: "Metric tree",
        northStar: { name: "Rides per rider in the 30 days after a fare dispute", detail: "Test vs holdout; did we keep the rider?", target: "+10% vs holdout (est.)" },
        inputs: [
          { name: "Median time from report to refund", detail: "Not public today", target: "under 24 h (est.)" },
          { name: "Reviews: driver asked for more", detail: "Share of Ola reviews, 9.2% today", target: "4.6% in two quarters (est.)" },
          { name: "Reviews: support unreachable", detail: "6.3% today", target: "under 3% (est.)" },
          { name: "Reports per 1,000 trips", detail: "Should rise first, then fall", target: "sample data" },
        ],
        guardrails: [
          { name: "Short-trip acceptance by drivers", target: "max 2-point drop" },
          { name: "Wrong approvals in audit", target: "under 5% (est.)" },
        ],
        note: "Targets are my estimates for a six-week city test.",
      },
      {
        kind: "heart",
        title: "HEART",
        rows: [
          { dimension: "Happiness", goal: "Riders trust the fare", signal: "Fewer fare reviews", metric: "“Asked for more” reviews 9.2% → 4.6% (est.)" },
          { dimension: "Engagement", goal: "Riders report instead of quitting", signal: "Button taps per dispute", metric: "Reports per 1,000 trips" },
          { dimension: "Adoption", goal: "Riders find the button", signal: "Taps in the first week", metric: "Share of test riders who see it, 90% (est.)" },
          { dimension: "Retention", goal: "Disputed riders come back", signal: "Rides in 30 days", metric: "+10% vs holdout (est.)" },
          { dimension: "Task success", goal: "Money back fast", signal: "Refund paid", metric: "Median under 24 h (est.)" },
        ],
      },
      {
        kind: "risks",
        title: "Risks and how I'd handle them",
        items: [
          { risk: "Refund abuse", likelihood: "medium", impact: "medium", mitigation: "Cap per trip, trip-data checks, audit of approvals" },
          { risk: "Drivers skip short trips", likelihood: "medium", impact: "high", mitigation: "Stop early at a 2-point drop; fix pricing before policing" },
          { risk: "Reviews overstate the problem", likelihood: "medium", impact: "medium", mitigation: "Check trip logs per 1,000 trips before scaling" },
          { risk: "The bot works in Hindi and Telugu", likelihood: "low", impact: "medium", mitigation: "Analyse non-English reviews before rollout" },
        ],
      },
      {
        kind: "roadmap",
        title: "Roadmap",
        now: ["Hyderabad test, six weeks", "Button + free cancel", "AI refunds under a cap"],
        next: ["Voice reports in Telugu and Hindi", "Repeat-driver flag for ops", "Roll out city by city"],
        later: ["Bot only for receipts and lost items", "Driver appeal screen"],
      },
    ],
  },
  flow: {
    title: "From “driver asked for more” to money back",
    nodes: [
      { label: "Rider taps “Driver asked for more”", kind: "start" },
      { label: "Report by text or voice, any of 3 languages", kind: "step" },
      { label: "AI reads it next to quote, route, calls, cash switch", kind: "step" },
      { label: "Clear case and under the cap?", kind: "decision", side: { label: "No", text: "A person reviews. Only a person can deny." } },
      { label: "Pay the extra back to UPI", kind: "step" },
      { label: "Recover from driver payout; flag repeats", kind: "step" },
      { label: "Rider sees “Paid back” within a day", kind: "end" },
    ],
    caption: "AI can approve. Only a person can say no, and the rider can reply to them.",
  },
  wireframes: {
    screens: [
      { src: `${W}/1-today.svg`, caption: "Before: the bot sends a fare policy" },
      { src: `${W}/2-trip.svg`, caption: "Fare locked, one button to report" },
      { src: `${W}/3-report.svg`, caption: "Report by voice in Telugu" },
      { src: `${W}/4-refund.svg`, caption: "Paid back, and who decided" },
    ],
    caption: "Flat wireframes. Amounts echo a real Hyderabad review: ₹550 shown, ₹800 asked.",
  },
  solution: {
    summary: "The bot isn't the villain; it's pointed at the wrong job. Riders don't have questions. They have ₹250 a driver took.",
    steps: ["Fare locked", "One-tap report", "AI checks trip data", "Refund to UPI", "Person for every no"],
    decisions: [
      { decision: "The fare on screen is the fare you pay", why: "Accepting a trip means accepting that fare. A simple rule riders can repeat." },
      { decision: "AI can approve; only a person can deny", why: "Same rule I use in my claims work. A wrong yes costs little; a wrong no loses the rider." },
      { decision: "Keep the bot for receipts and lost items", why: "Those are real questions it answers fine.", rejected: "Switching the bot off entirely" },
      { decision: "Keep Krutrim's best work: language voice", why: "A rider can report by voice note in Telugu or Hindi." },
      { decision: "No call recording", why: "Trip data is enough to judge clear cases, and recording breaks trust.", rejected: "Recording driver calls" },
    ],
  },
  metrics: {
    northStar: "Rides per rider in the 30 days after a fare dispute",
    rows: [
      { name: "Reviews: driver asked for more", target: "9.2% → 4.6% (est.)", how: "Same review tagging, monthly" },
      { name: "Reviews: support unreachable", target: "6.3% → under 3% (est.)", how: "Same review tagging, monthly" },
      { name: "Median report to refund", target: "Under 24 h (est.)", how: "Timestamps in the refund log" },
      { name: "Wrong approvals in audit", target: "Under 5% (est.)", how: "Weekly sample reviewed by ops" },
    ],
    tests: [
      "Hyderabad autos and bikes, six weeks (est.), riders split 50/50 against today's bot",
      "Primary: rides per rider in 30 days after a dispute, test vs holdout",
      "Stop early if short-trip acceptance drops over 2 points or wrong approvals pass 5% (est.)",
      "Scale if disputed test riders ride 10%+ more (est.) with guardrails intact",
    ],
    note: "Every target is my estimate, not a benchmark.",
  },
  next: {
    items: [
      "Check trip logs: how often is “asked for more” per 1,000 trips?",
      "Run the same review analysis on Hindi and Telugu reviews",
      "Brief drivers at hubs in three languages before the test",
      "Set the refund cap from the test, not from a guess",
    ],
  },
  extra: {
    images: [{ src: "/work/img/ola-before-after.webp", alt: "Mock screens: today's help bot vs the proposed fare guarantee" }],
    stat: "Ola riders say they can't reach support over twice as often as Uber riders.",
  },
};

export default project;
