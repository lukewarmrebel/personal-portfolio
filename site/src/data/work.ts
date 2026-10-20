// All of Pranav's self-initiated AI PM work, grouped by what each piece proves.
// Used by the home page highlights and the /work index. Numbers here come from the
// documents themselves; anything that is an estimate or mock data says so.

export type WorkLinkKind = "live" | "prototype" | "page" | "pdf" | "sheet" | "code";

export type WorkLink = { label: string; href: string; kind: WorkLinkKind };

export type WorkItem = {
  id: string;
  title: string;
  tag: string;
  what: string;
  proof?: { value: string; label: string };
  note?: string;
  links: WorkLink[];
  image?: { src: string; alt: string; shape: "phone" | "wide" };
  image2?: { src: string; alt: string };
  bars?: { title: string; rows: { label: string; value: string; pct: number; muted?: boolean }[]; note: string };
  span?: boolean; // full-width row in its group
  featured?: string; // why it is a featured pick, one line
};

export type WorkGroup = {
  id: string;
  label: string;
  short: string; // quick-link label
  unit: string; // used in the hero banner, e.g. "4 kill docs"
  blurb: string;
  cols?: 2 | 3;
  items: WorkItem[];
};

const pdf = (file: string) => `/work/pdf/${file}`;
const sheet = (file: string) => `/work/sheets/${file}`;

export const workGroups: WorkGroup[] = [
  {
    id: "prototypes",
    unit: "prototypes",
    label: "Prototypes",
    short: "Prototypes",
    blurb: "Things you can tap through on your phone. Each tests one interaction, with mock data and scripted AI answers.",
    items: [
      {
        id: "lab-report",
        title: "Lab report explainer",
        tag: "Prototype · Health · India + US",
        what: "Upload a parent's blood test and get every value explained in plain English, Hindi or Telugu. A critical value gets a “call the doctor today” screen, not a cheerful summary.",
        proof: { value: "Potassium 6.6", label: "in the mock report gets “call his doctor today”. Values it can't read are flagged, never guessed." },
        links: [
          { label: "Product page", href: "https://pranav-labreport.sites.tab.bot/", kind: "page" },
          { label: "Try the prototype", href: "https://pranav-labreport.sites.tab.bot/prototype/", kind: "prototype" },
        ],
        image: { src: "/work/img/labreport-urgent.webp", alt: "Prototype screen: potassium 6.6, contact a doctor today", shape: "phone" },
        image2: { src: "/work/img/labreport-telugu.webp", alt: "Prototype screen: report summary in Telugu" },
        featured: "The guardrails are the product.",
      },
      {
        id: "dinner-for-6",
        title: "Dinner for 6",
        tag: "Prototype · Food delivery · India + US",
        what: "Group food ordering. Everyone taps what they can eat and spend, the app suggests places that work for the whole group, and the bill splits itself into UPI pay links.",
        proof: { value: "44-second demo", label: "From “dinner?” in the flat group to a split bill." },
        links: [
          { label: "Product page", href: "https://pranav-dinnerfor6.sites.tab.bot/", kind: "page" },
          { label: "Try the prototype", href: "https://pranav-dinnerfor6.sites.tab.bot/prototype/", kind: "prototype" },
        ],
        image: { src: "/work/img/dinner-hardnight.webp", alt: "Prototype screen: hard night, nothing fits everyone", shape: "phone" },
        image2: { src: "/work/img/dinner-split.webp", alt: "Prototype screen: the bill split" },
      },
    ],
  },
  {
    id: "ai-build",
    unit: "eval & cost sheets",
    label: "AI build: evals and cost",
    short: "Evals & cost",
    blurb: "The unglamorous part of shipping AI. How I'd test a model before customers meet it, and whether the bill fits the margin.",
    items: [
      {
        id: "eval-suite",
        title: "Claims assistant eval suite",
        tag: "Spreadsheet · Insurance",
        what: "50 hard customer messages for a WhatsApp claims bot: Telugu and Hinglish voice notes, angry customers, people pushing it to promise a payout. Every case has a pass bar and hard fails.",
        proof: { value: "62% → 90%", label: "v1 to v2 pass rate in a mock run. I still call it not ready: 3 high-risk P0 cases fail." },
        note: "Results are illustrative mock data I wrote to show the method, not a real model run.",
        bars: {
          title: "Pass rate, mock run",
          rows: [
            { label: "v1 prompt", value: "62%", pct: 62, muted: true },
            { label: "v2 prompt", value: "90%", pct: 90 },
          ],
          note: "Launch bar: 100% on P0 cases. 3 still fail, so: not ready.",
        },
        links: [
          { label: "Open the sheet", href: sheet("Pranav_ClaimsAssistant_EvalSuite.xlsx"), kind: "sheet" },
          { label: "PDF view", href: pdf("Pranav_ClaimsAssistant_EvalSuite.pdf"), kind: "pdf" },
          { label: "Case study", href: "/case-studies/claim-companion", kind: "page" },
        ],
        featured: "Shows I know when not to ship.",
      },
      {
        id: "cost-model",
        title: "Model routing and token cost",
        tag: "Spreadsheet · Quick commerce",
        what: "Which model answers which grocery request, and what one assisted order costs. Easy asks go to small models, only meal plans and allergy requests reach the frontier model.",
        proof: { value: "₹1.50 → ₹0.49", label: "AI cost per assisted order in India, all-frontier vs routed. 67% less. US: $0.038 → $0.027." },
        note: "A self-initiated model on published list prices, not production data.",
        bars: {
          title: "AI cost per assisted order, India",
          rows: [
            { label: "Everything on the frontier model", value: "₹1.50", pct: 100, muted: true },
            { label: "Routed by request type", value: "₹0.49", pct: 33 },
          ],
          note: "My budget is ₹1 an order. Routed fits. All-frontier doesn't.",
        },
        links: [
          { label: "Open the sheet", href: sheet("Pranav_TheUsual_ModelRouting_CostModel.xlsx"), kind: "sheet" },
          { label: "PDF view", href: pdf("Pranav_TheUsual_ModelRouting_CostModel.pdf"), kind: "pdf" },
          { label: "Case study", href: "/case-studies/the-usual", kind: "page" },
        ],
      },
    ],
  },
  {
    id: "data",
    unit: "data study",
    label: "Data analysis",
    short: "Data",
    blurb: "Real data, pulled and tagged myself. Where the numbers came from is in the file.",
    items: [
      {
        id: "ride-hailing",
        title: "What Uber, Ola and Rapido riders complain about",
        tag: "Analysis · Ride-hailing · India",
        what: "Every English Play Store review from three months, then 9,000 tagged into 15 themes by an LLM. I checked 50 of its tags by hand.",
        proof: { value: "80,548 reviews", label: "#1 complaint: fare shown vs fare charged. Ola 14.5%, Rapido 7.0%, Uber 6.6%. 84% of tags matched my hand check of 50." },
        links: [
          { label: "Read the PDF", href: pdf("Pranav_RideHailing_ReviewAnalysis.pdf"), kind: "pdf" },
          { label: "Data sheet", href: sheet("Pranav_RideHailing_ReviewAnalysis.xlsx"), kind: "sheet" },
          { label: "Python script", href: "/work/code/Pranav_RideHailing_ReviewAnalysis.py", kind: "code" },
        ],
        image: { src: "/work/img/ride-complaints-chart.webp", alt: "Chart: complaint themes by app", shape: "wide" },
        featured: "Real data, my own pipeline.",
      },
    ],
  },
  {
    id: "kill-docs",
    cols: 3,
    unit: "kill docs",
    label: "Product judgment: kill docs",
    short: "Kill docs",
    blurb: "One-page memos on a real feature: kill, narrow or keep. Each prices the options and says what would change my mind. Portfolio exercises. I don't work at these companies.",
    items: [
      {
        id: "kill-scratch-cards",
        title: "Scratch cards in payment apps",
        tag: "Kill doc · GPay, Paytm, CRED · live",
        what: "Kill the random scratch card. Replace it with fewer, bigger rewards from places you already pay, and let people pick 1 of 3.",
        proof: { value: "66% vs 19%", label: "GPay reviews that mention rewards are 1–2 stars 66% of the time, vs 19% for all reviews." },
        links: [{ label: "Read the memo", href: pdf("Pranav_KillDoc_ScratchCards.pdf"), kind: "pdf" }],
        image: { src: "/work/img/scratch-before-after.webp", alt: "Wireframe: today's scratch card vs pick your reward", shape: "wide" },
      },
      {
        id: "kill-ola-ai",
        title: "Ola's bot-only help desk",
        tag: "Kill doc · Ola · live",
        what: "Kill the bot as the only door for fare problems. Point the AI at the fare: it can approve a refund within a day, and only a person can say no.",
        proof: { value: "6.3% vs 2.4%", label: "Ola reviews saying support is unreachable, vs Uber. From my own review analysis." },
        links: [{ label: "Read the memo", href: pdf("Pranav_KillDoc_OlaAI.pdf"), kind: "pdf" }],
        image: { src: "/work/img/ola-before-after.webp", alt: "Mock screens: today's help bot vs the proposed fare guarantee", shape: "wide" },
      },
      {
        id: "kill-paytm-home",
        title: "Ads and credit pushes on Paytm's pay path",
        tag: "Kill doc · Paytm · live",
        what: "Kill the launch ad, the banner by the scanner and the same-for-everyone loans block. Home becomes scan-first, ranked by what each person actually does.",
        proof: { value: "14% vs 4%", label: "Recent reviews that mention slowness vs ads or clutter. So speed to pay is the real argument." },
        links: [{ label: "Read the memo", href: pdf("Pranav_KillDoc_PaytmHome.pdf"), kind: "pdf" }],
        image: { src: "/work/img/paytm-before-after.webp", alt: "Mock layouts: today's Paytm home vs a scan-first home", shape: "wide" },
      },
      {
        id: "kill-zomato-instant",
        title: "Zomato Instant (2023)",
        tag: "Kill doc · Zomato · historical",
        what: "Written as of January 2023. My call was narrow, not kill: drop the 10-minute promise, run one 8-week test near offices and colleges, then shut it if it misses.",
        proof: { value: "Narrow, not kill", label: "Each station needed roughly 270–500 orders a day to break even (my estimate)." },
        links: [{ label: "Read the memo", href: pdf("Pranav_KillDoc_ZomatoInstant.pdf"), kind: "pdf" }],
        span: true,
      },
    ],
  },
  {
    id: "case-studies",
    unit: "case studies",
    label: "Case studies",
    short: "Case studies",
    blurb: "Four AI products, each for the US and India. Screens, a journey map, metrics and the risks.",
    items: [
      {
        id: "cs-preauth",
        title: "PreAuth Copilot",
        tag: "Case study · Healthcare",
        what: "Most prior auth delays are incomplete files, not hard medical calls. A copilot that makes every request complete the first time, and is never allowed to say no.",
        proof: { value: "80.7%", label: "of appealed Medicare Advantage denials overturned (KFF)." },
        links: [
          { label: "Read it", href: "/case-studies/preauth-copilot", kind: "page" },
          { label: "PDF", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_Healthcare.pdf", kind: "pdf" },
        ],
      },
      {
        id: "cs-claims",
        title: "The claim is the product",
        tag: "Case study · Insurance",
        what: "Report on WhatsApp, get paid in minutes when the claim is simple, get a person when it isn't.",
        proof: { value: "19.3 days", label: "average US repair cycle (J.D. Power)." },
        links: [
          { label: "Read it", href: "/case-studies/claim-companion", kind: "page" },
          { label: "PDF", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_Insurance.pdf", kind: "pdf" },
        ],
      },
      {
        id: "cs-pause",
        title: "Pause",
        tag: "Case study · Payments",
        what: "Hold the few payments that look like a scam in progress, explain why in plain words, let everything else through.",
        proof: { value: "98.5%", label: "of UPI fraud value sits in payments above ₹10,000 (RBI)." },
        links: [
          { label: "Read it", href: "/case-studies/pause", kind: "page" },
          { label: "PDF", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_Payments.pdf", kind: "pdf" },
        ],
      },
      {
        id: "cs-usual",
        title: "The Usual, Done Right",
        tag: "Case study · Quick commerce",
        what: "A grocery assistant that gets your usual basket right in one tap, understands Hinglish, and never sneaks anything into the cart.",
        proof: { value: "₹691 vs $115", label: "basket size, India vs US." },
        links: [
          { label: "Read it", href: "/case-studies/the-usual", kind: "page" },
          { label: "PDF", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_B2C_QuickCommerce.pdf", kind: "pdf" },
        ],
      },
    ],
  },
];

export const featuredIds = ["lab-report", "eval-suite", "ride-hailing"] as const;

export const allWorkItems = workGroups.flatMap((g) => g.items.map((i) => ({ ...i, groupId: g.id, groupLabel: g.label })));

export const featuredItems = featuredIds.map((id) => allWorkItems.find((i) => i.id === id)!);

export const workCount = allWorkItems.length;

export function linkIsExternal(href: string) {
  return href.startsWith("http") || href.endsWith(".pdf") || href.endsWith(".xlsx") || href.endsWith(".py");
}
