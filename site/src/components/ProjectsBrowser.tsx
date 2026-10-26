"use client";
import { useState } from "react";
import { CompactCard } from "@/components/ProjectCard";
import { libraryProjects, libraryGroups, type GroupId } from "@/data/projects";

// The "More projects" library: every project that isn't a flagship, in topic groups, with filter chips. "All" shows every group.
export default function ProjectsBrowser() {
  const [active, setActive] = useState<GroupId | "all">("all");
  const chip = (on: boolean) =>
    `px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${on ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-700 border-zinc-300 hover:border-indigo-400 hover:text-indigo-700"}`;
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">
        <button type="button" className={chip(active === "all")} aria-pressed={active === "all"} onClick={() => setActive("all")}>
          All ({libraryProjects.length})
        </button>
        {libraryGroups.map((g) => (
          <button key={g.id} type="button" className={chip(active === g.id)} aria-pressed={active === g.id} onClick={() => setActive(g.id)}>
            {g.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-10">
        {libraryGroups.map((g) => {
          const items = libraryProjects.filter((p) => p.group === g.id);
          return (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-24" style={active === "all" || active === g.id ? undefined : { display: "none" }}>
              <div className="mb-4 max-w-3xl">
                <h3 id={`${g.id}-h`} className="text-lg font-bold text-zinc-900">{g.label}</h3>
                <p className="text-[14px] text-zinc-600 mt-0.5 leading-relaxed">{g.blurb}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((p) => <CompactCard key={p.slug} p={p} />)}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
