"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const colors: Record<string, { header: string; chip: string }> = {
  "AI & Agents":          { header: "text-violet-600 bg-violet-50 border-violet-200",   chip: "bg-violet-50 text-violet-700 border-violet-200" },
  "Product Management":   { header: "text-indigo-600 bg-indigo-50 border-indigo-200",  chip: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  "Design & Research":    { header: "text-pink-600 bg-pink-50 border-pink-200",         chip: "bg-pink-50 text-pink-700 border-pink-200" },
  "Data & Technical":     { header: "text-cyan-600 bg-cyan-50 border-cyan-200",         chip: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  "Process & Leadership": { header: "text-orange-600 bg-orange-50 border-orange-200",   chip: "bg-orange-50 text-orange-700 border-orange-200" },
  "Tools":                { header: "text-teal-600 bg-teal-50 border-teal-200",         chip: "bg-teal-50 text-teal-700 border-teal-200" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50/60">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">Skills & Tools</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">
            What I bring to <span className="gradient-text">the table</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => {
            const c = colors[category];
            return (
              <motion.div key={category}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card p-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border mb-4 inline-block ${c.header}`}>{category}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-all hover:shadow-sm ${c.chip}`}>{s}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
