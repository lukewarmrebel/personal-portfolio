// The data shape for every project page ("About the project").
// One file per project lives in site/content/projects/<slug>.ts and default-exports a ProjectFile.
// Any section can carry `todo: true`: the page then hides that section completely (no placeholder).
// A section is "done" when it is present and has no `todo: true`.

export type GroupId = "prototypes" | "agents" | "ai-testing" | "data" | "teardowns" | "strategy" | "side";

export type Todo = { todo?: boolean };

// A page section: either filled in (todo absent or false) or parked with todo: true (anything inside may be partial).
export type Section<T> = (T & { todo?: false }) | ({ todo: true } & Partial<T>);

export type ProjectLink = { label: string; href: string };

export type Level = "low" | "medium" | "high";

export type FrameworkBlock =
  | ({ kind: "jtbd"; title?: string; items: { when: string; want: string; so: string }[] } & Todo)
  | ({ kind: "moscow"; title?: string; must: string[]; should: string[]; could: string[]; wont: string[] } & Todo)
  | ({ kind: "rice"; title?: string; rows: { item: string; reach: number; impact: number; confidence: number; effort: number }[]; note?: string } & Todo)
  | ({ kind: "northstar"; title?: string; northStar: { name: string; detail: string; target?: string }; inputs: { name: string; detail: string; target?: string }[]; guardrails?: { name: string; target?: string }[]; note?: string } & Todo)
  | ({ kind: "emotion"; title?: string; steps: { step: string; feeling: -2 | -1 | 0 | 1 | 2; note?: string }[]; note?: string } & Todo)
  | ({ kind: "acceptance"; title?: string; stories: { story: string; given: string; when: string; then: string }[] } & Todo)
  | ({ kind: "tradeoff"; title?: string; criteria: { name: string; weight: number }[]; options: { name: string; scores: number[]; chosen?: boolean }[]; note?: string } & Todo)
  | ({ kind: "roadmap"; title?: string; now: string[]; next: string[]; later: string[] } & Todo)
  | ({ kind: "research"; title?: string; mode: "findings" | "plan"; methods: { method: string; who: string; howMany: string; how: string }[]; findings?: { insight: string; evidence: string; group: string }[]; questions?: string[]; note?: string } & Todo)
  | ({ kind: "market"; title?: string; funnel?: { level: "TAM" | "SAM" | "SOM"; label: string; value?: string; assumption?: string }[]; positioning?: { x: [string, string]; y: [string, string]; points: { name: string; x: number; y: number; me?: boolean }[] }; features?: { columns: string[]; rows: { name: string; values: ("yes" | "no" | "partial" | "unclear")[]; me?: boolean }[] }; trends?: { value: string; label: string }[]; note?: string } & Todo)
  | ({ kind: "circles"; title?: string; steps: { comprehend: string; identify: string; report: string; cut: string; list: string; evaluate: string; summarise: string } } & Todo)
  | ({ kind: "heart"; title?: string; rows: { dimension: "Happiness" | "Engagement" | "Adoption" | "Retention" | "Task success"; goal: string; signal: string; metric: string }[]; note?: string } & Todo)
  | ({ kind: "journey"; title?: string; stages: { stage: string; doing: string; feeling: "good" | "okay" | "bad"; pain: string; opportunity: string }[] } & Todo)
  | ({ kind: "kano"; title?: string; basic: string[]; performance: string[]; delight: string[] } & Todo)
  | ({ kind: "risks"; title?: string; items: { risk: string; likelihood: Level; impact: Level; mitigation: string }[] } & Todo)
  // A plain table for anything else that earns a place: a metric definition, a failure taxonomy, a launch bar.
  // `label` is the small grey kicker above the title (e.g. "Failure taxonomy").
  | ({ kind: "table"; label: string; title?: string; columns: string[]; rows: string[][]; note?: string } & Todo);

// A flow diagram is drawn from data as a vertical flowchart (readable at 390px).
// kind: "start" | "step" | "decision" | "end". A decision can send a side branch ("no" path) to a short note.
export type FlowNode = { label: string; kind?: "start" | "step" | "decision" | "end"; side?: { label: string; text: string } };

// The product spec layout (used by the AI agents and copilots pages). When `spec` is present the page runs in this order:
// personas, current process, future process (each step tagged with how it is run), success metrics,
// prioritisation and a trade-off matrix, guardrails and risks, acceptance criteria.
export type OpMode = "ai" | "assisted" | "human"; // Full AI automation, AI-assisted, Human in the loop
export type SpecPersona = { name: string; who: string; personality: string; jobs: string[]; pains: string[]; goals: string[]; nonGoals: string[] };
export type ProductSpec = {
  personas: { intro?: string; items: SpecPersona[] };
  current: { intro?: string; steps: { step: string; detail: string; pain?: string }[] };
  future: { intro?: string; steps: { step: string; detail: string; mode: OpMode; why: string }[] };
  metrics: {
    northStar: { name: string; detail: string };
    inputs: { name: string; target?: string; how: string }[];
    guardrails: { name: string; target?: string; how: string }[];
    tests?: string[];
    note?: string;
  };
  priorities: {
    intro?: string;
    items: { item: string; call: "Must" | "Should" | "Could" | "Won't"; why: string }[];
    matrix: { title: string; criteria: { name: string; weight: number }[]; options: { name: string; scores: number[]; chosen?: boolean }[]; note?: string };
  };
  guardrails: { rules: string[]; risks: { risk: string; likelihood: Level; impact: Level; mitigation: string }[] };
  acceptance: { story: string; given: string; when: string; then: string }[];
};

export type ProjectFile = {
  slug: string;
  group: GroupId;
  order: number; // position inside its group on the Projects page
  title: string;
  oneLine: string; // the card line and the page's one-line summary
  tag: string; // small label above the title, e.g. "Prototype · Health"
  tags?: string[]; // chips in the hero
  links: ProjectLink[]; // hero buttons; the first is the main one
  card?: {
    thumb?: string; // image on the card (path on the site)
    bars?: { title: string; rows: { label: string; value: string; pct: number; muted?: boolean }[]; note: string };
  };
  // Flagships only: the line on the "Start here" card saying what the project proves, and its real number if it has one.
  proof?: string;
  proofStat?: { value: string; label: string };
  tiles?: { value: string; label: string }[]; // flat stat tiles in the hero; real numbers only, or say "sample data" / "est." in the label
  label?: string; // honesty line under the hero, e.g. "How I would build it. Sample data."
  glance: Section<{ problem: string; users: string; role: string; outcome: string }>;
  // "Frameworks I used, and why": a short line. `list` (optional) shows each framework and what it is for.
  judgment?: { used: string; skipped?: string; list?: { name: string; why: string }[] };
  spec?: ProductSpec;
  problem?: Section<{
    persona: { name: string; who: string; context: string; needs: string[]; frustrations: string[] };
    jtbd: string;
  }>;
  frameworks?: Section<{ blocks: FrameworkBlock[] }>;
  flow?: Section<{ title?: string; nodes: FlowNode[]; caption?: string }>;
  wireframes?: Section<{ title?: string; screens: { src: string; caption: string; device?: "phone" | "desktop" }[]; caption?: string }>;
  solution?: Section<{ summary: string; steps?: string[]; decisions: { decision: string; why: string; rejected?: string }[] }>;
  metrics?: Section<{ northStar?: string; rows: { name: string; target?: string; how: string }[]; tests: string[]; note?: string }>;
  next?: Section<{ items: string[] }>;
  // What the site already said about the project: pictures, bullets, skills. Shown under "More detail".
  extra?: Section<{ images?: { src: string; alt: string }[]; highlights?: string[]; stat?: string; note?: string; skills?: string[]; paragraphs?: string[] }>;
};

export function show<T>(s: Section<T> | undefined): s is T & { todo?: false } {
  return !!s && !s.todo;
}
