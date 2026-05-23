"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">About me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">
            The person behind the <span className="gradient-text">product</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Casual photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
              <Image src="/pranav-casual.webp" alt="Pranav — casual" width={400} height={480} className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-zinc-600 text-lg leading-relaxed">{personal.bio}</p>
            <p className="text-zinc-500 text-base leading-relaxed">{personal.bio2}</p>

            <div className="flex flex-wrap gap-2 pt-1">
              {personal.featuredSkills.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Outside of work</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {personal.interests.map((i) => (
                  <div key={i.label} className="card p-4 flex flex-col items-center gap-2 text-center">
                    <span className="text-2xl">{i.emoji}</span>
                    <span className="text-xs font-medium text-zinc-600">{i.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
