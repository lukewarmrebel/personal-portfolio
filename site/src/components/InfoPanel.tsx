"use client";
import { motion } from "framer-motion";
import { Mail, FileText, MapPin, GraduationCap, Award } from "lucide-react";
import { skills, education, personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const skillColors: Record<string, string> = {
  "Product Management":   "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Design & Research":    "bg-pink-50 text-pink-700 border-pink-200",
  "Data & Technical":     "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Process & Leadership": "bg-orange-50 text-orange-700 border-orange-200",
  "Tools":                "bg-teal-50 text-teal-700 border-teal-200",
};


const contactLinks = [
  { icon: Mail,         label: "Email",    value: personal.email,       href: `mailto:${personal.email}`,  dot: "bg-indigo-400" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "pranav-thatavarthi", href: personal.linkedin,           dot: "bg-blue-400" },
  { icon: GithubIcon,   label: "GitHub",   value: "lukewarmrebel",      href: personal.github,             dot: "bg-zinc-500" },
  { icon: FileText,     label: "Resume",   value: "Download PDF",       href: personal.resumeUrl,          dot: "bg-pink-400" },
];

export default function InfoPanel() {
  return (
    <div className="space-y-4">

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4 }}
        className="card p-4"
      >
        <p className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-3">Contact</p>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-3 pb-3 border-b border-zinc-100">
          <MapPin size={11} />{personal.location} · Open to PM roles
        </div>
        <div className="space-y-1">
          {contactLinks.map(({ icon: Icon, label, value, href, dot }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-indigo-50 transition-colors group">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider leading-none mb-0.5">{label}</p>
                <p className="text-xs font-semibold text-zinc-700 group-hover:text-indigo-600 transition-colors truncate">{value}</p>
              </div>
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.06 }}
        className="card p-4"
      >
        <p className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-3">Education</p>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={edu.institution} className="flex gap-3 items-start">
              <div className={`w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                <GraduationCap size={14} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-zinc-900 leading-snug">{edu.degree}</p>
                <p className={`text-[11px] font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>{edu.field}</p>
                <p className="text-[11px] text-zinc-500 truncate">{edu.institution}</p>
                <p className="text-[10px] text-zinc-400">{edu.period}</p>
                {edu.achievement && (
                  <div className="mt-1.5 flex items-start gap-1 bg-amber-50 border border-amber-100 rounded-md px-2 py-1">
                    <Award size={10} className="text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-[10px] text-amber-700 font-medium leading-snug">{edu.achievement}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.12 }}
        className="card p-4"
      >
        <p className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-3">Skills & Tools</p>
        <div className="space-y-3">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mb-1.5">{cat}</p>
              <div className="flex flex-wrap gap-1">
                {items.map((s) => (
                  <span key={s} className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${skillColors[cat]}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
