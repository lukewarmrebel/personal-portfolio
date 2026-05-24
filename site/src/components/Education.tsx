"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { education } from "@/data/portfolio";

function EduLogo({ src, alt, color, dark }: { src: string; alt: string; color: string; dark?: boolean }) {
  return (
    <div className={`w-10 h-10 rounded-xl border shadow-sm flex items-center justify-center overflow-hidden mb-4 ${dark ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-100"}`}>
      <img
        src={src}
        alt={alt}
        className="w-8 h-8 object-contain"
        onError={(e) => {
          const el = e.currentTarget.parentElement!;
          el.innerHTML = `<div class="w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center"><svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 10v6M2 10l10-5 10 5-10 5z'/><path d='M6 12v5c3 3 9 3 12 0v-5'/></svg></div>`;
        }}
      />
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">
            Academic <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {education.map((edu, i) => (
            <motion.div key={edu.institution}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 overflow-hidden">
              <div className={`h-1 -mx-6 -mt-6 mb-5 bg-gradient-to-r ${edu.color}`} />

              <EduLogo src={edu.logo} alt={edu.shortName} color={edu.color} dark={edu.logoDark} />

              <h3 className="font-bold text-zinc-900 text-base">{edu.degree}</h3>
              <p className={`text-sm font-semibold mt-0.5 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>{edu.field}</p>

              <a href={edu.url} target="_blank" rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors block mt-1">
                {edu.institution}
              </a>

              <div className="flex flex-wrap gap-3 mt-3 text-xs text-zinc-400">
                <span className="flex items-center gap-1"><MapPin size={11} />{edu.location}</span>
                <span className="flex items-center gap-1"><Calendar size={11} />{edu.period}</span>
              </div>

              {edu.achievement && (
                <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                  <Award size={14} className="text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-700 font-medium">{edu.achievement}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
