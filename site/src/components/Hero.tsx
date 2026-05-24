"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { personal, education, experience } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useState, useEffect } from "react";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const quotes = [
  { text: "Fall in love with the problem, not the solution.", author: "Uri Levine" },
  { text: "It's not about ideas. It's about making ideas happen.", author: "Scott Belsky" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
  { text: "A problem well stated is a problem half solved.", author: "Charles Kettering" },
];

// Deduplicate experience logos by company name
const workLogos = experience.filter((job, i, arr) =>
  arr.findIndex((j) => j.company === job.company) === i
);

function LogoTile({ src, alt, href, dark }: { src: string; alt: string; href: string; dark?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={alt}
      className={`w-28 h-28 rounded-2xl border shadow-sm overflow-hidden p-4 flex items-center justify-center hover:scale-105 hover:shadow-md transition-all bg-white border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700`}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </a>
  );
}

const contactLinks = [
  { icon: Mail,         label: "Email",    value: personal.email,       href: `mailto:${personal.email}`, color: "from-indigo-500 to-violet-500" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "pranav-thatavarthi", href: personal.linkedin,          color: "from-blue-500 to-cyan-500" },
  { icon: GithubIcon,   label: "GitHub",   value: "lukewarmrebel",      href: personal.github,            color: "from-zinc-600 to-zinc-800" },
  { icon: FileText,     label: "Resume",   value: "Download PDF",       href: personal.resumeUrl,         color: "from-pink-500 to-rose-500" },
];

export default function Hero() {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setQuoteIdx(i => (i + 1) % quotes.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-100/60 blur-[100px]" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-purple-100/50 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left — Text */}
          <div className="pt-4">
            <motion.h1 {...up(0.1)} className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-4 leading-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text block">{personal.name}</span>
            </motion.h1>

            <motion.p {...up(0.2)} className="text-lg text-zinc-500 mb-2 font-medium">
              {personal.title} · Data · Platform · InsurTech
            </motion.p>

            <motion.p {...up(0.3)} className="text-base text-zinc-600 max-w-xl mb-8 leading-relaxed">
              {personal.tagline}
            </motion.p>

            <motion.div {...up(0.4)} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects"
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors shadow-sm">
                View Projects
              </a>
              <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold border border-zinc-300 text-zinc-700 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                Download Resume
              </a>
            </motion.div>

            {/* Quote carousel */}
            <motion.div {...up(0.55)} className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={quoteIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <span className="text-7xl leading-none font-serif bg-gradient-to-br from-indigo-400 to-violet-400 bg-clip-text text-transparent select-none block mb-2 text-center">&ldquo;</span>
                  <p className="text-2xl md:text-3xl text-zinc-700 italic leading-snug font-medium mb-4 text-center">{quotes[quoteIdx].text}</p>
                  <p className="text-sm text-zinc-400 text-center">— {quotes[quoteIdx].author}</p>
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-6 justify-center">
                {quotes.map((_, i) => (
                  <button key={i} onClick={() => setQuoteIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === quoteIdx ? "bg-indigo-400 w-6" : "bg-zinc-200 w-1.5"}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Photo + Logos + Contact */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:justify-between">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
              className="relative self-center"
            >
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-indigo-100/60">
                <Image
                  src="/pranav-formal.jpg"
                  alt="Pranav Thatavarti"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-indigo-200 -z-10" />
              <div className="absolute -bottom-4 -right-4 bg-white border border-zinc-100 shadow-md rounded-2xl px-3 py-2 flex items-center gap-2">
                <span className="text-base">👋</span>
                <div>
                  <p className="text-xs font-bold text-zinc-800">Open to work</p>
                  <p className="text-[11px] text-zinc-400">PM roles</p>
                </div>
              </div>
            </motion.div>

            {/* Education & Work logo bar */}
            <motion.div {...up(0.45)} className="w-full pt-2">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-indigo-400 mb-3">Education &amp; Work</p>
              <div className="flex items-end gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[9px] font-semibold tracking-widest uppercase text-zinc-400">Graduated from</p>
                  <div className="flex gap-3">
                    {education.map((edu) => (
                      <LogoTile key={edu.institution} src={edu.logo} alt={edu.shortName} href={edu.url} dark={edu.logoDark} />
                    ))}
                  </div>
                </div>
                <div className="w-px self-stretch bg-zinc-200 dark:bg-zinc-700 mt-5" />
                <div className="flex flex-col gap-2">
                  <p className="text-[9px] font-semibold tracking-widest uppercase text-zinc-400">Contributed at</p>
                  <div className="flex gap-3">
                    {workLogos.map((job) => (
                      <LogoTile key={job.company} src={job.logo} alt={job.company} href={(job as {url?: string}).url ?? "#"} dark={(job as {logoDark?: boolean}).logoDark} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact — compact 4-tile row */}
            <section id="contact" className="w-full">
              <motion.div {...up(0.5)} className="w-full">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-indigo-400 mb-3">Get in touch</p>
                <div className="flex gap-5">
                  {contactLinks.map(({ icon: Icon, label, href, color }, i) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.55 + i * 0.06 }}
                      className="w-36 bg-white/80 border border-zinc-100 rounded-xl p-4 py-5 flex flex-col items-center gap-2 group hover:border-indigo-200 hover:shadow-sm transition-all"
                    >
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-4 h-4 shrink-0" />
                      </div>
                      <p className="text-[11px] font-medium text-zinc-500 group-hover:text-indigo-600 transition-colors">{label}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
