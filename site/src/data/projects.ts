// Every project on the site, old and new, in one list. The content lives in site/content/projects/<slug>.ts.
import { projectFiles } from "../../content/projects";
import type { GroupId, ProjectFile } from "@/lib/projectSchema";

export type { ProjectFile, GroupId };

export const projectGroups: { id: GroupId; label: string; blurb: string }[] = [
  { id: "prototypes", label: "Working prototypes", blurb: "Apps you can open and try. Some use sample data and pre-written AI answers." },
  { id: "agents", label: "AI agents and copilots", blurb: "AI tools I built that read, draft and answer for people. Insurance underwriting, resumes and interview practice." },
  { id: "ai-testing", label: "AI testing and cost", blurb: "Is the AI safe to launch, and is it cheap enough to run?" },
  { id: "data", label: "Data analysis", blurb: "Real public data I collected and analysed myself." },
  { id: "teardowns", label: "Feature teardowns: what I'd cut", blurb: "Short memos on real app features. Practice exercises; I don't work at these companies." },
  { id: "strategy", label: "Product strategy and business plans", blurb: "Who the customer is, how big the market is, and how I'd launch. Business plans and strategy pitches." },
  { id: "side", label: "Side projects", blurb: "Smaller things I made for fun." },
];

const groupRank = (g: GroupId) => projectGroups.findIndex((x) => x.id === g);

export const allProjects: ProjectFile[] = [...projectFiles].sort(
  (a, b) => groupRank(a.group) - groupRank(b.group) || a.order - b.order,
);

// The 4 flagships: "Start here" on /projects and the featured projects on the home page.
// Each has something real a recruiter can open or check.
export const featuredSlugs = ["blood-test-report-explainer", "claims-ai-testing-sheet", "sentinel-cyber-uw-copilot", "ride-hailing-reviews-analysis"];
export const featuredProjects = featuredSlugs.map((s) => allProjects.find((p) => p.slug === s)!);
// Everything else: the "More projects" library, still in topic groups.
export const libraryProjects = allProjects.filter((p) => !featuredSlugs.includes(p.slug));
export const libraryGroups = projectGroups.filter((g) => libraryProjects.some((p) => p.group === g.id));

export function isExternal(href: string) {
  return href.startsWith("http") || /\.(pdf|xlsx|py)$/.test(href);
}
