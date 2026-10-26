import Link from "next/link";
import { FeaturedCard } from "@/components/ProjectCard";
import { featuredProjects, allProjects } from "@/data/projects";

// Home page: the 4 flagship projects. Everything else lives on /projects.
export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Featured projects</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">Things I&apos;ve built and written</h2>
            <p className="text-[15px] text-zinc-600 mt-2 max-w-2xl leading-relaxed">Four projects with something real to open: a prototype in three languages, an AI test sheet, an underwriting AI demo and an analysis of 80,548 app reviews.</p>
          </div>
          <Link href="/projects" className="self-start md:self-auto shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors">
            See all {allProjects.length} projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((p, i) => <FeaturedCard key={p.slug} p={p} n={i + 1} />)}
        </div>
      </div>
    </section>
  );
}
