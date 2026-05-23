"use client";
import { motion } from "framer-motion";
import { Mail, FileText, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  { icon: Mail,         label: "Email",    value: personal.email,         href: `mailto:${personal.email}`,  color: "from-indigo-500 to-violet-500" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "pranav-thatavarthi",   href: personal.linkedin,           color: "from-blue-500 to-cyan-500" },
  { icon: GithubIcon,   label: "GitHub",   value: "lukewarmrebel",        href: personal.github,             color: "from-zinc-600 to-zinc-800" },
  { icon: FileText,     label: "Resume",   value: "Download PDF",         href: personal.resumeUrl,          color: "from-pink-500 to-rose-500" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-50/60">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="text-zinc-500 mt-3 max-w-lg">Open to Product Manager roles and interesting conversations.</p>
          <div className="flex items-center gap-1.5 text-sm text-zinc-400 mt-2">
            <MapPin size={13} />{personal.location}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-6 flex flex-col gap-4 group">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-sm`}>
                <Icon />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-zinc-700 group-hover:text-indigo-600 transition-colors truncate">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <p className="text-center text-zinc-400 text-xs mt-16">
        © {new Date().getFullYear()} Pranav Thatavarti · Built with Next.js & Tailwind CSS
      </p>
    </section>
  );
}
