"use client";
import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import { projects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Personal: "bg-indigo-50 text-indigo-600 border-indigo-200",
  Work: "bg-violet-50 text-violet-600 border-violet-200",
  Academic: "bg-amber-50 text-amber-600 border-amber-200",
  Analysis: "bg-cyan-50 text-cyan-600 border-cyan-200",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">
            Things I&apos;ve <span className="gradient-text">built & shipped</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card p-6 flex flex-col">

              {/* Top bar */}
              <div className={`h-1 -mx-6 -mt-6 mb-5 rounded-t-2xl bg-gradient-to-r ${project.color}`} />

              {/* Screenshot strip */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="flex gap-2 overflow-x-auto -mx-6 px-6 pb-3 mb-4 scrollbar-none">
                  {project.screenshots.map((src, idx) => (
                    <img key={idx} src={src} alt="" loading="lazy"
                      className="h-40 w-auto rounded-xl flex-shrink-0 object-cover border border-zinc-100 shadow-sm" />
                  ))}
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.emoji}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors[project.category]}`}>
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
              <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>{project.subtitle}</p>
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
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.skills.map((s) => (
                  <span key={s} className="chip text-[11px]">{s}</span>
                ))}
              </div>

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent hover:opacity-70 transition-opacity mt-auto`}>
                  View Project <ExternalLink size={11} className="text-indigo-500 flex-shrink-0" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
