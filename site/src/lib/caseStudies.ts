import fs from "node:fs";
import path from "node:path";

// The case study pages are hand-written HTML fragments in src/content/case-studies.
// They are read at build time, so every page is statically generated.
export const caseStudies = [
  { slug: "preauth-copilot", title: "PreAuth Copilot", description: "How I would build an AI copilot for US prior authorization and India’s cashless pre-auth. Wireframes, journey map and metrics." },
  { slug: "claim-companion", title: "The claim is the product", description: "How I would build a GenAI claims assistant for US and Indian personal-lines insurance. Wireframes, journey map and metrics." },
  { slug: "pause", title: "Pause", description: "How I would stop UPI and Zelle scam payments at the moment of payment without slowing down honest ones." },
  { slug: "the-usual", title: "The Usual, Done Right", description: "How I would build an AI reorder assistant for quick commerce in India and grocery delivery in the US." },
] as const;

export type CaseStudySlug = (typeof caseStudies)[number]["slug"];

export function readCaseStudyHtml(name: CaseStudySlug): string {
  return fs.readFileSync(path.join(process.cwd(), "src", "content", "case-studies", `${name}.html`), "utf8");
}
