import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectsBrowser from "@/components/ProjectsBrowser";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Projects · Pranav Thatavarti",
  description:
    "All of Pranav's projects in one place: working prototypes, AI agents and copilots, AI testing and cost, data analysis, feature teardowns, product strategy and side projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link> / Projects</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">Projects</h1>
        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed mb-3">
          Everything I&apos;ve built and written, old and new, in one place. Tap any card to see what it is and open it.
        </p>
        <p className="text-[15px] text-zinc-600 max-w-2xl leading-relaxed mb-10">
          Looking for longer product write-ups? See my <Link href="/case-studies" className="text-indigo-600 font-semibold underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-500">case studies</Link>.
        </p>
        <ProjectsBrowser />
      </main>
      <SiteFooter />
    </>
  );
}
