"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { personal } from "@/data/portfolio";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

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

          {/* Right — Photo + Contact */}
          <div className="flex flex-col items-center lg:items-end gap-8">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
              className="relative"
            >
              <div className="w-60 h-60 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-indigo-100/60">
                <Image
                  src="/pranav-formal.jpg"
                  alt="Pranav Thatavarti"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-indigo-200 -z-10" />
              <div className="absolute -bottom-4 -right-4 bg-white border border-zinc-100 shadow-md rounded-2xl px-4 py-2.5 flex items-center gap-2">
                <span className="text-lg">👋</span>
                <div>
                  <p className="text-xs font-bold text-zinc-800">Open to work</p>
                  <p className="text-xs text-zinc-400">PM roles</p>
                </div>
              </div>
            </motion.div>

            {/* Contact tiles */}
            <section id="contact" className="w-full max-w-sm">
              <motion.div {...up(0.5)}>
                <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Get in touch</span>
                <h3 className="text-2xl font-bold text-zinc-900 mt-1 mb-4">
                  Let&apos;s <span className="gradient-text">connect</span>
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                      className="bg-white/80 border border-zinc-100 rounded-2xl p-4 flex flex-col gap-2.5 group hover:border-indigo-200 hover:shadow-sm transition-all">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-4 h-4 shrink-0" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">{label}</p>
                        <p className="text-xs font-semibold text-zinc-700 group-hover:text-indigo-600 transition-colors truncate">{value}</p>
                      </div>
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
