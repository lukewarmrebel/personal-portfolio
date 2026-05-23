"use client";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  { icon: Mail,         label: "Email",    href: `mailto:${personal.email}`, hoverCls: "hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200" },
  { icon: LinkedinIcon, label: "LinkedIn", href: personal.linkedin,          hoverCls: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
  { icon: GithubIcon,   label: "GitHub",   href: personal.github,            hoverCls: "hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-300" },
  { icon: FileText,     label: "Resume",   href: personal.resumeUrl,         hoverCls: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" },
];

export default function FloatingDock() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {links.map(({ icon: Icon, label, href, hoverCls }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.07, duration: 0.3 }}
          className={`w-10 h-10 rounded-full bg-white shadow-sm border border-zinc-150 flex items-center justify-center text-zinc-400 transition-all duration-200 ${hoverCls}`}
        >
          <Icon className="w-4 h-4 shrink-0" />
        </motion.a>
      ))}
    </div>
  );
}
