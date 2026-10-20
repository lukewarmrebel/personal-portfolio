"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { allProjects, projectGroups, type GroupId } from "@/data/projects";

// The full projects list, grouped, with filter chips. "All" shows every group.
export default function ProjectsBrowser() {
  const [active, setActive] = useState<GroupId | "all">("all");
  const groups = projectGroups.filter((g) => active === "all" || g.id === active);
  const chip = (on: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium border transition-colors ${on ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-700 border-zinc-300 hover:border-indigo-400 hover:text-indigo-700"}`;
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects">
        <button type="button" className={chip(active === "all")} aria-pressed={active === "all"} onClick={() => setActive("all")}>
          All ({allProjects.length})
        </button>
        {projectGroups.map((g) => (
          <button key={g.id} type="button" className={chip(active === g.id)} aria-pressed={active === g.id} onClick={() => setActive(g.id)}>
            {g.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-14">
        {groups.map((g) => {
          const items = allProjects.filter((p) => p.group === g.id);
          return (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-24">
              <div className="mb-5 max-w-3xl">
                <h2 id={`${g.id}-h`} className="text-2xl font-bold text-zinc-900">{g.label}</h2>
                <p className="text-[15px] text-zinc-600 mt-1 leading-relaxed">{g.blurb}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p) => <ProjectCard key={p.slug} p={p} />)}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
