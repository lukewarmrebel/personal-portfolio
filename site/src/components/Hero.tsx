"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowDown, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-20 pb-16 relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-100/60 blur-[100px]" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-purple-100/50 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div {...up(0.05)}>
              <span className="inline-flex items-center gap-1.5 text-sm text-indigo-600 font-medium bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full mb-6">
                <MapPin size={12} /> {personal.location}
              </span>
            </motion.div>

            <motion.h1 {...up(0.15)} className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-4 leading-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text block">{personal.name}</span>
            </motion.h1>

            <motion.p {...up(0.25)} className="text-lg text-zinc-500 mb-2 font-medium">
              {personal.title} · Data · Platform · InsurTech
            </motion.p>

            <motion.p {...up(0.35)} className="text-base text-zinc-600 max-w-xl mb-8 leading-relaxed">
              {personal.tagline}
            </motion.p>

            <motion.div {...up(0.45)} className="flex flex-wrap gap-3 mb-8">
              <a href="#projects"
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors shadow-sm">
                View Projects
              </a>
              <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold border border-zinc-300 text-zinc-700 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                Download Resume
              </a>
            </motion.div>

            <motion.div {...up(0.55)} className="flex items-center gap-3">
              {[
                { Icon: GithubIcon, href: personal.github, label: "GitHub" },
                { Icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="p-2.5 rounded-full border border-zinc-200 text-zinc-400 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-indigo-100/60">
                <Image
                  src="/pranav-formal.jpg"
                  alt="Pranav Thatavarti"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-indigo-200 -z-10" />
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-zinc-100 shadow-md rounded-2xl px-4 py-2.5 flex items-center gap-2">
                <span className="text-lg">👋</span>
                <div>
                  <p className="text-xs font-bold text-zinc-800">Open to work</p>
                  <p className="text-xs text-zinc-400">PM roles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a href="#about" {...up(0.9)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-300 hover:text-indigo-400 transition-colors animate-bounce hidden md:block"
          aria-label="Scroll down">
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}
