// About the project: Blood test report explainer (prototype). Gold-standard example: every section filled.
// Schema: src/lib/projectSchema.ts. Facts come from the project's own write-up; illustrative numbers say "est." or "sample data".
import type { ProjectFile } from "../../src/lib/projectSchema";

const W = "/projects/blood-test-report-explainer";

const project: ProjectFile = {
  slug: "blood-test-report-explainer",
  group: "prototypes",
  order: 1,
  title: "Blood test report explainer (prototype)",
  oneLine: "Upload a parent's blood test report and every result is explained in plain English, Hindi or Telugu. A dangerous value shows “call a doctor today” instead of a summary.",
  tag: "Prototype · Health · India and US",
  tags: ["Prototype", "Consumer health", "AI safety", "India + US"],
  links: [
    { label: "Try the prototype", href: "https://pranav-labreport.sites.tab.bot/prototype/" },
    { label: "Read the full write-up", href: "https://pranav-labreport.sites.tab.bot/" },
  ],
  card: { thumb: "/work/img/labreport-urgent.webp" },
  tiles: [
    { value: "3", label: "languages: English, Hindi, Telugu" },
    { value: "100%", label: "urgent-value recall needed to ship" },
    { value: "0", label: "diagnoses, medicines or doses suggested" },
    { value: "45%", label: "north star target (est.)" },
  ],
  label: "How I would build it. Not something I shipped. The prototype runs on a mock report and scripted AI answers. Not medical advice.",
  glance: {
    problem: "A parent's report lands on the family WhatsApp at night. Nobody can tell if it can wait till the doctor visit.",
    users: "The adult child, 25 to 40, often in another city, who is expected to “check properly”.",
    role: "Solo: research, product design, safety rules, metrics and a clickable prototype.",
    outcome: "A working prototype and a full write-up. Self-initiated, not shipped.",
  },
  problem: {
    persona: {
      name: "Sneha, 31, Bengaluru",
      who: "Reads her father's reports for the family",
      context: "Sunday 9:40 pm. Amma forwards Nanna's 4-page report: “Is it bad?” The doctor visit is Saturday.",
      needs: ["Can this wait till Saturday?", "What should we ask the doctor?", "A short note the family can read in Telugu"],
      frustrations: ["Search shows worst cases", "A chatbot answer she can't check", "Each lab explains only its own reports"],
    },
    jtbd: "When my parent's blood report arrives, I want to know quickly if anything is urgent and what to ask the doctor, so I can calm the family and not miss something serious.",
  },
  frameworks: {
    blocks: [
      {
        kind: "circles",
        title: "The problem, worked through step by step",
        steps: {
          comprehend: "A parent's report arrives at night. The family needs to know: urgent or can it wait?",
          identify: "Adult child reading for a parent; the parent as a second reader.",
          report: "Is anything urgent? What does each number mean? What do we ask the doctor?",
          cut: "Urgent check and doctor questions first. Language support second.",
          list: "Plain-words explainer, chatbot, lab smart report, or caregiver-first app.",
          evaluate: "Chatbots can't promise an urgent path. Lab reports cover one lab only.",
          summarise: "A caregiver-first explainer with a rule-based urgent check.",
        },
      },
      {
        kind: "research",
        mode: "plan",
        title: "Research plan (no interviews done yet)",
        methods: [
          { method: "Interviews", who: "Adults 25 to 40 who read a parent's lab report", howMany: "10", how: "45-minute calls, walking through their last real report" },
          { method: "Prototype test", who: "Same group, on their phone", howMany: "8", how: "Upload the sample urgent report; watch what they do first" },
          { method: "Doctor review", who: "GPs who speak Hindi or Telugu", howMany: "3", how: "Review the urgent list and refusal lines" },
        ],
        questions: [
          "Tell me about the last report you read for a parent. What did you do first?",
          "How did you decide if it was urgent?",
          "Who else in the family did you tell, and how?",
          "What did you ask the doctor, and what did you forget?",
        ],
        note: "A plan, not findings. Sample sizes are what I'd start with.",
      },
      {
        kind: "market",
        title: "The market and the gap",
        funnel: [
          { level: "TAM", label: "Families in India and the US who get routine lab reports" },
          { level: "SAM", label: "Adult children who read a parent's report on their phone" },
          { level: "SOM", label: "Indian families on WhatsApp, Hindi or Telugu first, year 1" },
        ],
        positioning: {
          x: ["One lab only", "Any lab"],
          y: ["General info", "Caregiver-first, safety rails"],
          points: [
            { name: "Lab smart reports", x: 0.15, y: 0.35 },
            { name: "Quest / Labcorp apps", x: 0.2, y: 0.2 },
            { name: "General chatbots", x: 0.85, y: 0.12 },
            { name: "Dedicated explainers", x: 0.75, y: 0.4 },
            { name: "This app", x: 0.8, y: 0.85, me: true },
          ],
        },
        features: {
          columns: ["Any lab", "Urgent path first", "Ranges from the report", "Caregiver consent", "Hindi / Telugu"],
          rows: [
            { name: "Lab smart reports", values: ["no", "unclear", "yes", "no", "unclear"] },
            { name: "Quest / Labcorp apps", values: ["no", "unclear", "yes", "no", "no"] },
            { name: "General chatbots", values: ["yes", "no", "partial", "no", "yes"] },
            { name: "Dedicated explainers", values: ["yes", "unclear", "partial", "unclear", "yes"] },
            { name: "This app", values: ["yes", "yes", "yes", "yes", "yes"], me: true },
          ],
        },
        trends: [
          { value: "29%", label: "of US adults use AI tools at least monthly for health information" },
          { value: "44%", label: "aren't confident they can tell if a chatbot's health answer is true" },
          { value: "Nov 2025", label: "India's data protection rules notified: consent sits with the person the data is about" },
        ],
        note: "Market sizes not estimated yet. “Unclear” means I couldn't find it on the product's public pages.",
      },
      {
        kind: "jtbd",
        title: "Jobs the app is hired for",
        items: [
          { when: "a parent's report lands on the family group", want: "to know if anything is urgent", so: "I can act tonight or relax till Saturday" },
          { when: "I see a value marked H or L", want: "plain words and the gap from the range", so: "I stop doom-searching" },
          { when: "the doctor visit comes", want: "a short list of questions", so: "nothing important is forgotten" },
          { when: "Amma asks “is it bad?”", want: "a summary in Telugu I can forward", so: "the family is calm and informed" },
        ],
      },
      {
        kind: "emotion",
        title: "How Sneha feels, with the app",
        steps: [
          { step: "Report arrives", feeling: -1, note: "worried" },
          { step: "Uploads", feeling: 0 },
          { step: "Urgent check", feeling: 1, note: "nothing urgent" },
          { step: "Plain words", feeling: 1 },
          { step: "Doctor questions", feeling: 2, note: "ready" },
          { step: "Family summary", feeling: 2 },
        ],
        note: "Illustrative, based on the scenario in the write-up.",
      },
      {
        kind: "journey",
        title: "Sneha's evening today, and where the app steps in",
        stages: [
          { stage: "Report arrives", doing: "PDF forwarded to the family group", feeling: "okay", pain: "“Is it bad?” lands on her", opportunity: "Upload straight from WhatsApp" },
          { stage: "Reads it", doing: "Pinches and zooms on 4 pages", feeling: "bad", pain: "Bold H and L with no meaning", opportunity: "Urgent check first, then plain words" },
          { stage: "Searches", doing: "Googles each value", feeling: "bad", pain: "Third result is about heart attacks", opportunity: "Ranges only from the report itself" },
          { stage: "Replies", doing: "“Let me check properly”", feeling: "bad", pain: "An hour of searching at 10 pm", opportunity: "Family summary in Telugu" },
          { stage: "Doctor visit", doing: "Saturday appointment", feeling: "okay", pain: "Forgets what to ask", opportunity: "5 questions for the doctor" },
        ],
      },
      {
        kind: "moscow",
        title: "What goes in version 1",
        must: ["Urgent-value check before anything else", "Ranges read from the report, never filled in", "“Couldn't read this” for unclear values", "Consent: does the parent know?"],
        should: ["Telugu and Hindi summaries", "Questions for the doctor", "Compare with the last report"],
        could: ["Doctor table with the original PDF", "US mode for Quest and Labcorp reports"],
        wont: ["Diet or medicine tips", "A health score or “health age”", "Diagnosis of any kind"],
      },
      {
        kind: "rice",
        title: "Which features first (sample scores, est.)",
        rows: [
          { item: "Urgent-value check", reach: 10, impact: 3, confidence: 0.9, effort: 2 },
          { item: "Doctor questions list", reach: 9, impact: 2, confidence: 0.8, effort: 2 },
          { item: "Telugu and Hindi summaries", reach: 6, impact: 2, confidence: 0.7, effort: 3 },
          { item: "Compare with last report", reach: 4, impact: 2, confidence: 0.6, effort: 4 },
          { item: "US mode (Quest, Labcorp)", reach: 3, impact: 1, confidence: 0.5, effort: 5 },
        ],
        note: "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method.",
      },
      {
        kind: "tradeoff",
        title: "How to decide what is urgent",
        criteria: [
          { name: "Never misses", weight: 5 },
          { name: "Can be audited", weight: 4 },
          { name: "Covers rare cases", weight: 2 },
          { name: "Cost to run", weight: 1 },
        ],
        options: [
          { name: "Fixed list owned by doctors", scores: [5, 5, 3, 5], chosen: true },
          { name: "AI decides", scores: [3, 1, 4, 3] },
          { name: "List plus AI second check", scores: [5, 4, 4, 3] },
        ],
        note: "Scores 1 to 5 are my judgement. The list wins because recall has to be 100% and checkable.",
      },
      {
        kind: "acceptance",
        title: "Key stories",
        stories: [
          { story: "Urgent value", given: "a report with potassium 6.6 mmol/L", when: "it is uploaded", then: "only the “contact a doctor today” screen shows, with no summary" },
          { story: "Missing range", given: "a value with no range printed", when: "the summary is built", then: "the value shows with “no range on the report”, and no range is filled in" },
          { story: "Unreadable value", given: "a smudged creatinine line", when: "the report is read", then: "it is listed as “couldn't read”, and the report is never called all clear" },
          { story: "Medicine question", given: "the user asks “should he start a medicine?”", when: "the AI answers", then: "it declines and adds the question to the doctor list" },
        ],
      },
      {
        kind: "northstar",
        title: "North star and what drives it",
        northStar: { name: "Reports that end with a doctor question list saved or shared", detail: "The moment the app did its job", target: "45% (est.)" },
        inputs: [
          { name: "Uploads finished", detail: "Report read, consent given" },
          { name: "Understood", detail: "Say “I know what to ask”", target: "70% (est.)" },
          { name: "Routed to a doctor", detail: "Share or book within 7 days", target: "30% (est.)" },
          { name: "Came back", detail: "Second report in 6 months", target: "20% (est.)" },
        ],
        guardrails: [
          { name: "Urgent-value recall", target: "100%" },
          { name: "Ranges not on the report", target: "0" },
          { name: "Medicine or dose suggestions", target: "0" },
          { name: "Urgent-screen precision", target: "≥ 90% (est.)" },
        ],
      },
      {
        kind: "heart",
        title: "HEART metrics",
        rows: [
          { dimension: "Happiness", goal: "People feel ready for the doctor", signal: "Answer to “I know what to ask”", metric: "% scoring 4 or 5 (target 70%, est.)" },
          { dimension: "Engagement", goal: "People read past the summary", signal: "Opens a result's plain-words detail", metric: "Results opened per report" },
          { dimension: "Adoption", goal: "First report is finished", signal: "Upload reaches the summary", metric: "% of uploads finished" },
          { dimension: "Retention", goal: "Families come back", signal: "Second report uploaded", metric: "% within 6 months (target 20%, est.)" },
          { dimension: "Task success", goal: "The doctor handoff happens", signal: "Question list saved or shared", metric: "% of uploads (target 45%, est.)" },
        ],
      },
      {
        kind: "risks",
        title: "Risks and how I'd handle them",
        items: [
          { risk: "Misread value or made-up range", likelihood: "medium", impact: "high", mitigation: "Per-field confidence, page reference on every range, arithmetic not AI" },
          { risk: "Missing an urgent value", likelihood: "low", impact: "high", mitigation: "Fixed list, runs first; an unreadable urgent test blocks “all clear”" },
          { risk: "Read as a diagnosis", likelihood: "high", impact: "high", mitigation: "No scores, no advice, every path ends with a doctor" },
          { risk: "Treated as a medical device", likelihood: "medium", impact: "high", mitigation: "Stay on the information side; regulatory advice before launch" },
          { risk: "Labs give a version away free", likelihood: "high", impact: "medium", mitigation: "Compete on cross-lab and caregiver-first, or sell to insurers" },
        ],
      },
      {
        kind: "roadmap",
        title: "Roadmap",
        now: ["Urgent list and reading tested on real-format reports", "Doctor review of urgent and refusal screens", "India launch: English, Hindi, Telugu"],
        next: ["Compare with the last report", "Doctor table with the original PDF", "US mode for Quest and Labcorp"],
        later: ["“Read by the family” mode for the parent", "Partner with a health insurer or telehealth app"],
      },
    ],
  },
  flow: {
    title: "From upload to the doctor visit",
    nodes: [
      { label: "Upload the report (PDF or photo)", kind: "start" },
      { label: "Whose report? Does the parent know?", kind: "step" },
      { label: "Any value on the urgent list?", kind: "decision", side: { label: "Yes", text: "Stop. “Contact a doctor today.” No summary." } },
      { label: "Read every value, unit and printed range", kind: "step" },
      { label: "Can the value be read clearly?", kind: "decision", side: { label: "No", text: "Show “couldn't read”. Never guess." } },
      { label: "Plain-words summary by group", kind: "step" },
      { label: "Questions for the doctor + family summary", kind: "end" },
    ],
    caption: "The urgent check is a rule, not AI. It runs before anything is explained.",
  },
  wireframes: {
    screens: [
      { src: `${W}/1-upload.svg`, caption: "Consent before reading" },
      { src: `${W}/2-urgent.svg`, caption: "The urgent path: no summary behind it" },
      { src: `${W}/3-summary.svg`, caption: "Every range says which page it came from" },
      { src: `${W}/4-questions.svg`, caption: "Off-limits questions become doctor questions" },
    ],
    caption: "Flat wireframes with sample data. The clickable prototype has the full flow.",
  },
  solution: {
    summary: "The first question the app answers is “can this wait till Saturday?”, with a rule, not a model.",
    steps: ["Upload", "Consent", "Urgent check", "Summary by group", "Doctor questions"],
    decisions: [
      { decision: "The urgent list is a table, not AI", why: "Recall has to be 100% and checkable. The AI can't talk anyone out of it." },
      { decision: "Ranges only from the report", why: "Labs differ. If no range is printed, I show the value and say so." },
      { decision: "If I can't read it, I say so", why: "An unreadable potassium value means the app won't say “all clear”." },
      { decision: "Questions, not advice", why: "Diet and medicine tips are where explaining turns into treating.", rejected: "“What you can do” tips per result" },
      { decision: "No scores, no “health age”", why: "A score is a diagnosis in disguise.", rejected: "A single health score" },
    ],
  },
  metrics: {
    northStar: "Uploads that end with the doctor question list saved or shared",
    rows: [
      { name: "Question list saved or shared", target: "45% (est.)", how: "Share or save events per upload" },
      { name: "Doctor contact within 7 days", target: "30% (est.)", how: "Share-to-doctor or booking taps, for reports with an out-of-range value" },
      { name: "“I know what to ask”", target: "70% (est.)", how: "One question after the summary, 4 or 5 out of 5" },
      { name: "Second report in 6 months", target: "20% (est.)", how: "Repeat uploads per family" },
    ],
    tests: [
      "Urgent-value recall: 100% on a labelled set of real-format reports, or it doesn't ship",
      "Ranges shown that aren't on the report: zero",
      "Medicine or dose suggestions on a red-team prompt set: zero",
      "Unclear fields shown as “couldn't read”: 100%",
      "Urgent-screen precision of 90% or more (est.), so the screen keeps its weight",
    ],
    note: "Every target is my estimate for a first launch, not a benchmark.",
  },
  next: {
    items: [
      "Test the urgent list and the reading step on 200 real-format reports from 5 labs",
      "Get the urgent and refusal screens reviewed by doctors who speak Hindi and Telugu",
      "Run 10 sessions with adult children reading a parent's report",
      "v2: a “read by the family” mode, where the parent gets his own copy in Telugu",
    ],
  },
  extra: {
    images: [
      { src: "/work/img/labreport-urgent.webp", alt: "Prototype screen: potassium 6.6, contact a doctor today" },
      { src: "/work/img/labreport-telugu.webp", alt: "Prototype screen: report summary in Telugu" },
    ],
  },
};

export default project;
