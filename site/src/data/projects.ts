// Every project on the site, old and new, in one list. The content lives in site/content/projects/<slug>.ts.
import { projectFiles } from "../../content/projects";
import type { GroupId, ProjectFile } from "@/lib/projectSchema";

export type { ProjectFile, GroupId };

export const projectGroups: { id: GroupId; label: string; blurb: string }[] = [
  { id: "prototypes", label: "Working prototypes", blurb: "Clickable apps you can try on your phone. Sample data and pre-written AI answers." },
  { id: "ai-testing", label: "AI testing and cost", blurb: "Is the AI safe to launch, and is it cheap enough to run?" },
  { id: "data", label: "Data analysis", blurb: "Real public data I collected and analysed myself." },
  { id: "teardowns", label: "Feature teardowns: what I'd cut", blurb: "Short memos on real app features. Practice exercises; I don't work at these companies." },
  { id: "side", label: "Side projects", blurb: "Smaller things I made for fun." },
  { id: "earlier", label: "Earlier apps and strategy work", blurb: "Apps and AI tools I built before, plus MBA strategy work." },
];

const groupRank = (g: GroupId) => projectGroups.findIndex((x) => x.id === g);

export const allProjects: ProjectFile[] = [...projectFiles].sort(
  (a, b) => groupRank(a.group) - groupRank(b.group) || a.order - b.order,
);

export const featuredSlugs = ["blood-test-report-explainer", "claims-ai-testing-sheet", "ride-hailing-reviews-analysis"];
export const featuredProjects = featuredSlugs.map((s) => allProjects.find((p) => p.slug === s)!);

export function isExternal(href: string) {
  return href.startsWith("http") || /\.(pdf|xlsx|py)$/.test(href);
}
