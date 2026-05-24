"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Clock, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { projects, projectSlug } from "@/data/portfolio";

type Tab = "Spotlight" | "AI Systems" | "0→1 Builds" | "PM & Strategy" | "Teardowns";

const TABS: Tab[] = ["Spotlight", "AI Systems", "0→1 Builds", "PM & Strategy", "Teardowns"];

const tabStyles: Record<Tab, { active: string; dot: string }> = {
  Spotlight:      { active: "bg-amber-500 text-white border-amber-500",     dot: "bg-amber-400" },
  "AI Systems":   { active: "bg-violet-600 text-white border-violet-600",   dot: "bg-violet-400" },
  "0→1 Builds":  { active: "bg-emerald-600 text-white border-emerald-600", dot: "bg-emerald-400" },
  "PM & Strategy":{ active: "bg-blue-600 text-white border-blue-600",       dot: "bg-blue-400" },
  Teardowns:      { active: "bg-cyan-600 text-white border-cyan-600",       dot: "bg-cyan-400" },
};

const categoryBadge: Record<string, string> = {
  "AI Systems":    "bg-violet-50 text-violet-600 border-violet-200",
  "0→1 Builds":   "bg-emerald-50 text-emerald-600 border-emerald-200",
  "PM & Strategy": "bg-blue-50 text-blue-600 border-blue-200",
  Teardowns:       "bg-cyan-50 text-cyan-600 border-cyan-200",
};

function ScreenshotCarousel({ screenshots, color }: { screenshots: string[]; color: string }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  return (
    <div className="relative overflow-hidden rounded-t-2xl" style={{ background: "var(--surface)" }}>
      <div className="flex items-center justify-center py-5" style={{ minHeight: "13rem" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={idx}
            src={screenshots[idx]}
            alt=""
            loading="lazy"
            className="h-48 w-auto rounded-xl shadow-md object-cover"
            initial={{ opacity: 0, x: dir * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -48 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={() => go((idx - 1 + screenshots.length) % screenshots.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => go((idx + 1) % screenshots.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 right-3 text-[11px] text-zinc-400 bg-white/80 rounded-full px-2 py-0.5 border border-zinc-100">
            {idx + 1} / {screenshots.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("Spotlight");

  const filtered = activeTab === "Spotlight"
    ? projects.filter((p) => p.spotlight)
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">
            Things I&apos;ve <span className="gradient-text">built & shipped</span>
          </h2>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {TABS.map((tab) => {
            const isActive = tab === activeTab;
            const style = tabStyles[tab];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? style.active
                    : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300 hover:text-zinc-700"
                }`}
              >
                {tab === "Spotlight" && <Sparkles size={12} className={isActive ? "text-white" : "text-amber-400"} />}
                {tab}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card flex flex-col overflow-hidden"
              >
                {/* Top colour bar */}
                <div className={`h-1 bg-gradient-to-r ${project.color} flex-shrink-0`} />

                {/* Screenshot carousel */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <ScreenshotCarousel screenshots={project.screenshots} color={project.color} />
                )}

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{project.emoji}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryBadge[project.category]}`}>
                        {project.category}
                      </span>
                      {project.duration && (
                        <span className="flex items-center gap-1 text-xs text-zinc-400">
                          <Clock size={11} />{project.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-zinc-900 text-lg mb-1">{project.title}</h3>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5 flex-1">{project.summary}</p>

                  {/* Stats */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="flex gap-3 mb-5 flex-wrap">
                      {project.stats.map((s) => (
                        <div key={s.label} className="bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-2 text-center">
                          <p className={`text-base font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>{s.value}</p>
                          <p className="text-xs text-zinc-400">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2 text-xs text-zinc-500 leading-relaxed">
                          <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-indigo-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.skills.map((s) => (
                      <span key={s} className="chip text-[11px]">{s}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto">
                    {project.screenshots && project.screenshots.length > 0 && (
                      <Link
                        href={`/projects/${projectSlug(project.title)}`}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-gradient-to-r ${project.color} text-white hover:opacity-90 transition-opacity`}
                      >
                        Explore <ArrowUpRight size={11} />
                      </Link>
                    )}
                    {project.link && (
                      <a
                        href={project.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-zinc-700 transition-colors"
                      >
                        View Project <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
