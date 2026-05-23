"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Clock } from "lucide-react";
import { projects, projectSlug } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Personal: "bg-indigo-50 text-indigo-600 border-indigo-200",
  Work: "bg-violet-50 text-violet-600 border-violet-200",
  Academic: "bg-amber-50 text-amber-600 border-amber-200",
  Analysis: "bg-cyan-50 text-cyan-600 border-cyan-200",
};

function Carousel({ screenshots }: { screenshots: string[] }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  return (
    <div>
      {/* Main viewer */}
      <div className="relative overflow-hidden rounded-2xl mb-3" style={{ background: "var(--surface)" }}>
        <div className="flex items-center justify-center py-8" style={{ minHeight: "26rem" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={idx}
              src={screenshots[idx]}
              alt={`Screenshot ${idx + 1}`}
              className="h-96 w-auto rounded-xl shadow-2xl"
              initial={{ opacity: 0, x: dir * 64 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -64 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>

        {screenshots.length > 1 && (
          <>
            <button
              onClick={() => go((idx - 1 + screenshots.length) % screenshots.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go((idx + 1) % screenshots.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-3 right-4 text-xs text-zinc-400 bg-white/80 border border-zinc-100 rounded-full px-2.5 py-1">
              {idx + 1} / {screenshots.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {screenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === idx
                  ? "border-indigo-400 opacity-100 scale-105"
                  : "border-transparent opacity-40 hover:opacity-70"
              }`}
            >
              <img src={src} alt="" className="h-24 w-auto" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => projectSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: "var(--bg)" }}>
        <p className="text-zinc-500">Project not found.</p>
        <Link href="/#projects" className="flex items-center gap-1.5 text-sm font-medium text-indigo-500 hover:text-indigo-700 transition-colors">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* Sticky top bar */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 92%, transparent)" }}
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link
            href="/#projects"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-zinc-900"
            style={{ color: "var(--muted)" }}
          >
            <ArrowLeft size={15} /> Back
          </Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <span className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
            {project.title}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 pb-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors[project.category]}`}>
              {project.category}
            </span>
            {project.duration && (
              <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                <Clock size={11} /> {project.duration}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl leading-none">{project.emoji}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--text)" }}>
                {project.title}
              </h1>
              <p className={`text-base font-semibold mt-1 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {project.subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Colour accent bar */}
        <div className={`h-1 rounded-full bg-gradient-to-r ${project.color} mb-8 opacity-80`} />

        {/* Screenshot carousel */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10"
          >
            <Carousel screenshots={project.screenshots} />
          </motion.div>
        )}

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base leading-relaxed mb-8"
          style={{ color: "var(--muted)" }}
        >
          {project.summary}
        </motion.p>

        {/* Stats */}
        {project.stats && project.stats.length > 0 && (
          <div className="flex gap-3 mb-10 flex-wrap">
            {project.stats.map((s) => (
              <div key={s.label} className="card px-6 py-4 text-center min-w-[96px]">
                <p className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {s.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-10">
            <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  className="flex gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        <div className="mb-10">
          <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            Tech & Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r ${project.color} text-white hover:opacity-90 transition-opacity`}
          >
            View Project <ExternalLink size={14} />
          </a>
        )}
      </main>
    </div>
  );
}
