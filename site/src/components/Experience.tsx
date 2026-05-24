"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

function CompanyLogo({ src, alt, color, dark }: { src: string; alt: string; color: string; dark?: boolean }) {
  return (
    <div className={`w-9 h-9 rounded-xl border shadow-sm flex items-center justify-center overflow-hidden shrink-0 ${dark ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-100"}`}>
      <img
        src={src}
        alt={alt}
        className="w-7 h-7 object-contain"
        onError={(e) => {
          const el = e.currentTarget.parentElement!;
          el.className = `w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`;
          el.innerHTML = `<span class="text-white text-xs font-bold">${alt.slice(0, 2).toUpperCase()}</span>`;
        }}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50/60">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Work experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">
            Where I&apos;ve <span className="gradient-text">made an impact</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-700 hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-16 relative">
                {/* dot */}
                <div className={`hidden md:flex absolute left-3.5 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-gradient-to-br ${job.color} items-center justify-center shadow ring-2 ring-white dark:ring-zinc-900`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div className="flex items-start gap-3">
                      <CompanyLogo src={job.logo} alt={job.company} color={job.color} dark={(job as {logoDark?: boolean}).logoDark} />
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900">{job.company}</h3>
                        <p className={`text-sm font-semibold mt-0.5 bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>{job.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0 text-xs text-zinc-400">
                      <span className="flex items-center gap-1"><Calendar size={11} />{job.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-zinc-600 leading-relaxed">
                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-indigo-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
