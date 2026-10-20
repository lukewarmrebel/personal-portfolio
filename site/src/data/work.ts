// All of Pranav's self-initiated AI PM work, grouped by type, in plain words.
// Used by the home page highlights and the /work index. Numbers here come from the
// documents themselves; anything that is an estimate or mock data says so.

export type WorkLinkKind = "live" | "prototype" | "page" | "pdf" | "sheet" | "code";

export type WorkLink = { label: string; href: string; kind: WorkLinkKind };

export type WorkItem = {
  id: string;
  title: string;
  tag: string;
  what: string;
  stat?: string; // one plain sentence with at most one number
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
  hint: string; // one plain line under the quick link
  blurb: string;
  cols?: 2 | 3;
  items: WorkItem[];
};

const pdf = (file: string) => `/work/pdf/${file}`;
const sheet = (file: string) => `/work/sheets/${file}`;

export const workGroups: WorkGroup[] = [
  {
    id: "prototypes",
    hint: "Apps you can try on your phone",
    label: "Working prototypes",
    short: "Working prototypes",
    blurb: "Clickable apps you can try on your phone. They use sample data and pre-written AI answers.",
    items: [
      {
        id: "lab-report",
        title: "Blood test report explainer (prototype)",
        tag: "Health · India and US",
        what: "Upload a blood test report and every result is explained in plain English, Hindi or Telugu. A dangerous value shows “call a doctor today” instead of a summary.",
        stat: "It never diagnoses or suggests medicine. Values it can't read are flagged, not guessed.",
        links: [
          { label: "About the project", href: "https://pranav-labreport.sites.tab.bot/", kind: "page" },
          { label: "Try the prototype", href: "https://pranav-labreport.sites.tab.bot/prototype/", kind: "prototype" },
        ],
        image: { src: "/work/img/labreport-urgent.webp", alt: "Prototype screen: potassium 6.6, contact a doctor today", shape: "phone" },
        image2: { src: "/work/img/labreport-telugu.webp", alt: "Prototype screen: report summary in Telugu" },
        featured: "Safety rules are part of the design.",
      },
      {
        id: "dinner-for-6",
        title: "Group dinner ordering app (prototype)",
        tag: "Food delivery · India and US",
        what: "Friends tap what they can eat and spend. The app suggests places that suit everyone and splits the bill into UPI payment links.",
        links: [
          { label: "About the project", href: "https://pranav-dinnerfor6.sites.tab.bot/", kind: "page" },
          { label: "Try the prototype", href: "https://pranav-dinnerfor6.sites.tab.bot/prototype/", kind: "prototype" },
        ],
        image: { src: "/work/img/dinner-hardnight.webp", alt: "Prototype screen: hard night, nothing fits everyone", shape: "phone" },
        image2: { src: "/work/img/dinner-split.webp", alt: "Prototype screen: the bill split" },
      },
    ],
  },
  {
    id: "ai-build",
    hint: "Testing an AI before launch, and its running cost",
    label: "AI testing and cost",
    short: "AI testing & cost",
    blurb: "The less visible part of building with AI: checking it is safe before customers use it, and making sure it is cheap enough to run.",
    items: [
      {
        id: "eval-suite",
        title: "How I'd test a claims AI before launch",
        tag: "Spreadsheet · Insurance",
        what: "50 tough test messages for an insurance claims chatbot on WhatsApp: Telugu voice notes, angry customers, people pushing it to promise a payout. Each one has a clear pass or fail rule.",
        note: "Sample results I wrote to show the method, not a real AI run.",
        bars: {
          title: "Tests passed (sample data)",
          rows: [
            { label: "First version", value: "62%", pct: 62, muted: true },
            { label: "Improved version", value: "90%", pct: 90 },
          ],
          note: "To launch, it must pass every high-risk test. 3 still fail, so I'd hold the launch.",
        },
        links: [
          { label: "Open the spreadsheet", href: sheet("Pranav_ClaimsAssistant_EvalSuite.xlsx"), kind: "sheet" },
          { label: "Read (PDF)", href: pdf("Pranav_ClaimsAssistant_EvalSuite.pdf"), kind: "pdf" },
          { label: "Related case study", href: "/case-studies/claim-companion", kind: "page" },
        ],
        featured: "Shows I know when not to launch.",
      },
      {
        id: "cost-model",
        title: "What an AI shopping assistant costs per order",
        tag: "Spreadsheet · Grocery delivery",
        what: "I matched each type of grocery request to the cheapest AI model that can handle it. Simple requests go to small models. Only meal plans and allergy questions use the most expensive one.",
        note: "Built on published AI prices, not real company data.",
        bars: {
          title: "AI cost per order in India (estimate)",
          rows: [
            { label: "Most expensive model for everything", value: "₹1.50", pct: 100, muted: true },
            { label: "Right-sized model per request", value: "₹0.49", pct: 33 },
          ],
          note: "About two-thirds cheaper, and under my budget of ₹1 per order.",
        },
        links: [
          { label: "Open the spreadsheet", href: sheet("Pranav_TheUsual_ModelRouting_CostModel.xlsx"), kind: "sheet" },
          { label: "Read (PDF)", href: pdf("Pranav_TheUsual_ModelRouting_CostModel.pdf"), kind: "pdf" },
          { label: "Related case study", href: "/case-studies/the-usual", kind: "page" },
        ],
      },
    ],
  },
  {
    id: "data",
    hint: "80,000 app reviews, analysed",
    label: "Data analysis",
    short: "Data analysis",
    blurb: "Real public data that I collected and analysed myself. The files show exactly how.",
    items: [
      {
        id: "ride-hailing",
        title: "What 80,000 ride-hailing reviews complain about",
        tag: "Uber, Ola, Rapido · India",
        what: "I pulled three months of English Play Store reviews (July to October 2026) and sorted the complaints by theme. The biggest one: paying more than the fare the app showed.",
        stat: "Ola: 1 in 7 reviews are about the fare not matching the app.",
        links: [
          { label: "Read (PDF)", href: pdf("Pranav_RideHailing_ReviewAnalysis.pdf"), kind: "pdf" },
          { label: "Open the spreadsheet", href: sheet("Pranav_RideHailing_ReviewAnalysis.xlsx"), kind: "sheet" },
          { label: "See the code", href: "/work/code/Pranav_RideHailing_ReviewAnalysis.py", kind: "code" },
        ],
        image: { src: "/work/img/ride-complaints-chart.webp", alt: "Chart: complaint themes by app", shape: "wide" },
        featured: "Real data, analysed end to end by me.",
      },
    ],
  },
  {
    id: "kill-docs",
    cols: 3,
    hint: "Features I'd remove or change, and why",
    label: "Feature teardowns: what I'd cut",
    short: "Feature teardowns",
    blurb: "Two-page memos on real app features: what I would remove or change, what it costs, and what I'd put in its place. Practice exercises. I don't work at these companies.",
    items: [
      {
        id: "kill-scratch-cards",
        title: "Why I'd remove scratch cards from payment apps",
        tag: "GPay, Paytm, CRED",
        what: "Random scratch cards mostly say “Better luck next time”. I'd replace them with a weekly choice of 3 real rewards from shops you already pay.",
        stat: "2 in 3 GPay reviews that mention rewards give 1 or 2 stars.",
        links: [{ label: "Read (PDF)", href: pdf("Pranav_KillDoc_ScratchCards.pdf"), kind: "pdf" }],
        image: { src: "/work/img/scratch-before-after.webp", alt: "Wireframe: today's scratch card vs pick your reward", shape: "wide" },
      },
      {
        id: "kill-ola-ai",
        title: "Why I'd replace Ola's support chatbot with a fare promise",
        tag: "Ola",
        what: "Riders with a fare problem can only reach a bot. I'd promise the fare on screen is the fare you pay, let AI approve refunds within a day, and let only a person say no.",
        stat: "Ola riders say they can't reach support over twice as often as Uber riders.",
        links: [{ label: "Read (PDF)", href: pdf("Pranav_KillDoc_OlaAI.pdf"), kind: "pdf" }],
        image: { src: "/work/img/ola-before-after.webp", alt: "Mock screens: today's help bot vs the proposed fare guarantee", shape: "wide" },
      },
      {
        id: "kill-paytm-home",
        title: "Why I'd make Paytm's home screen scan-first",
        tag: "Paytm",
        what: "Most people open Paytm to pay. I'd remove the ad on launch, the ad beside the scanner and the loan offers everyone sees, and put the scanner first.",
        stat: "Reviews complain about slowness over 3 times as often as about ads.",
        links: [{ label: "Read (PDF)", href: pdf("Pranav_KillDoc_PaytmHome.pdf"), kind: "pdf" }],
        image: { src: "/work/img/paytm-before-after.webp", alt: "Mock layouts: today's Paytm home vs a scan-first home", shape: "wide" },
      },
      {
        id: "kill-zomato-instant",
        title: "Should Zomato have shut its 10-minute food delivery? (2023)",
        tag: "Zomato · written as of January 2023",
        what: "My call: don't shut it yet. Drop the 10-minute promise, run one 8-week test near offices and colleges, and close it if it misses the target.",
        links: [{ label: "Read (PDF)", href: pdf("Pranav_KillDoc_ZomatoInstant.pdf"), kind: "pdf" }],
        span: true,
      },
    ],
  },
  {
    id: "case-studies",
    hint: "Four AI product ideas, worked end to end",
    label: "Case studies",
    short: "Case studies",
    blurb: "Four AI product ideas for India and the US. Each covers the problem, the screens, how I'd measure it and the risks.",
    items: [
      {
        id: "cs-preauth",
        title: "Faster insurance approvals for hospital treatment (US)",
        tag: "Healthcare · “PreAuth Copilot”",
        what: "Most approval delays come from incomplete paperwork, not hard medical decisions. An AI helper makes each request complete the first time, and it is never allowed to refuse one.",
        stat: "Most appealed Medicare Advantage denials are overturned: 80.7%.",
        links: [
          { label: "Read the case study", href: "/case-studies/preauth-copilot", kind: "page" },
          { label: "PDF version", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_Healthcare.pdf", kind: "pdf" },
        ],
      },
      {
        id: "cs-claims",
        title: "Car insurance claims on WhatsApp",
        tag: "Insurance · “The claim is the product”",
        what: "Report the damage on WhatsApp. Simple claims get paid in minutes, and anything complex goes to a person.",
        links: [
          { label: "Read the case study", href: "/case-studies/claim-companion", kind: "page" },
          { label: "PDF version", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_Insurance.pdf", kind: "pdf" },
        ],
      },
      {
        id: "cs-pause",
        title: "Stopping UPI scams before the money leaves",
        tag: "Payments · “Pause”",
        what: "Hold the few payments that look like a scam in progress, explain why in plain words, and let every other payment go through.",
        stat: "98.5% of UPI fraud money is in payments above ₹10,000.",
        links: [
          { label: "Read the case study", href: "/case-studies/pause", kind: "page" },
          { label: "PDF version", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_Payments.pdf", kind: "pdf" },
        ],
      },
      {
        id: "cs-usual",
        title: "One-tap grocery reorder assistant",
        tag: "Grocery delivery · “The Usual, Done Right”",
        what: "An assistant that gets your usual grocery order right in one tap, understands Hinglish, and never adds anything you didn't ask for.",
        links: [
          { label: "Read the case study", href: "/case-studies/the-usual", kind: "page" },
          { label: "PDF version", href: "/case-studies/pdf/Pranav_AIPM_CaseStudy_B2C_QuickCommerce.pdf", kind: "pdf" },
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
