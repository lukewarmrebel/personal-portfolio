import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectsBrowser from "@/components/ProjectsBrowser";
import { FeaturedCard } from "@/components/ProjectCard";
import { featuredProjects, libraryProjects } from "@/data/projects";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Projects · Pranav Thatavarti",
  description:
    "Start with Pranav's 4 flagship projects: a blood test explainer prototype, a claims AI test sheet, an underwriting AI demo and an analysis of 80,548 ride-hailing reviews. Then browse the rest by topic.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link> / Projects</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">Projects</h1>
        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed mb-10">
          If you only have five minutes, read these four. Each one has something real you can open or check.
        </p>

        <section id="start-here" aria-labelledby="start-here-h" className="mb-16">
          <h2 id="start-here-h" className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-5">Start here: 4 projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.map((p, i) => <FeaturedCard key={p.slug} p={p} n={i + 1} />)}
          </div>
        </section>

        <section id="more-projects" aria-labelledby="more-projects-h" className="border-t border-zinc-200 pt-10">
          <h2 id="more-projects-h" className="text-2xl font-bold text-zinc-900 mb-2">More projects</h2>
          <p className="text-[15px] text-zinc-600 max-w-2xl leading-relaxed mb-6">
            {libraryProjects.length} more, from working apps and AI agents to short teardowns, grouped by topic. Longer product write-ups are in my <Link href="/case-studies" className="text-indigo-600 font-semibold underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-500">case studies</Link>.
          </p>
          <ProjectsBrowser />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
