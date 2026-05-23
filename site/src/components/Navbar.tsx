"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    setDark(document.documentElement.classList.contains("dark"));
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg gradient-text tracking-tight">PT</a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <button onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 transition-colors font-medium">
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-500 hover:text-indigo-600 transition-all"
            aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="p-1 text-zinc-600" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-3 h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-4 flex flex-col gap-4 shadow-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-zinc-600 hover:text-zinc-900 font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
