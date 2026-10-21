import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { allProjects, projectGroups, isExternal } from "@/data/projects";
import { Tiles, Glance, Judgment, Persona, Frameworks, Flow, Wireframes, Solution, Metrics, Next, Extra } from "@/components/ProjectSections";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = allProjects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} · About the project · Pranav Thatavarti`, description: p.oneLine } : {};
}

// "About the project": one template for every project, filled from site/content/projects/<slug>.ts.
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = allProjects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = allProjects[i];
  const group = projectGroups.find((g) => g.id === p.group)!;
  const next = allProjects[(i + 1) % allProjects.length];

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-16">
        <p className="text-sm text-zinc-500 mb-6">
          <Link href="/projects" className="hover:text-zinc-900">Projects</Link> / <Link href={`/projects#${group.id}`} className="hover:text-zinc-900">{group.label}</Link>
        </p>

        <header className="pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">About the project</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-4 max-w-4xl">{p.title}</h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed mb-5 max-w-3xl">{p.oneLine}</p>
          {p.tags && p.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border border-zinc-300 text-zinc-700 bg-white">{t}</span>)}
            </div>
          )}
          {p.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {p.links.map((l, k) => (
                <a key={l.href} href={l.href}
                  {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={k === 0
                    ? "px-5 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
                    : "px-5 py-2.5 rounded-full text-sm font-semibold border border-zinc-300 text-zinc-700 bg-white hover:border-indigo-400 hover:text-indigo-700 transition-colors"}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
          <Tiles p={p} />
          {p.label && <p className="text-[13px] text-zinc-500 mt-4 max-w-3xl">{p.label}</p>}
        </header>

        {/* Lead with the problem, what I built and the result. The frameworks come after, and only the ones that earn a place. */}
        <Glance p={p} />
        <Solution p={p} />
        <Wireframes p={p} />
        <Judgment p={p} />
        <Persona p={p} />
        <Frameworks p={p} />
        <Flow p={p} />
        <Metrics p={p} />
        <Next p={p} />
        <Extra p={p} />

        <div className="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row gap-3 justify-between text-sm font-semibold">
          <Link href="/projects" className="text-indigo-600 hover:text-indigo-800"><span aria-hidden="true">←</span> All projects</Link>
          <Link href={`/projects/${next.slug}`} className="text-indigo-600 hover:text-indigo-800">Next: {next.title} <span aria-hidden="true">→</span></Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
