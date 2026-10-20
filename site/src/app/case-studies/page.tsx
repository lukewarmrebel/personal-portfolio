import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { workGroups } from "@/data/work";

export const metadata: Metadata = {
  title: "Case Studies · Pranav Thatavarti",
  description:
    "Four self-initiated AI product case studies: hospital insurance approvals, car insurance claims, UPI scams and grocery reorders, across the US and India.",
};

const studies = workGroups.find((g) => g.id === "case-studies")!.items;

export default function CaseStudiesIndex() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link> / Case studies</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">Case studies</h1>
        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed mb-2">
          Four AI product ideas for India and the US, worked end to end: the problem, the screens, how I&apos;d measure it and the risks.
        </p>
        <p className="text-[15px] text-zinc-500 max-w-2xl leading-relaxed mb-10">
          Self-initiated. I didn&apos;t ship any of them. Each page has a full PDF version.
        </p>
        <ol className="flex flex-col gap-4">
          {studies.map((s, i) => {
            const page = s.links.find((l) => l.kind === "page")!;
            const pdf = s.links.find((l) => l.kind === "pdf");
            return (
              <li key={s.id} className="bg-white border border-zinc-200 rounded-2xl p-5 sm:p-6 hover:border-indigo-400 transition-colors">
                <div className="flex gap-4 sm:gap-6">
                  <span className="text-2xl font-bold text-zinc-300 tabular-nums shrink-0" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">{s.tag}</p>
                    <h2 className="text-xl font-bold text-zinc-900 leading-snug mb-2">
                      <Link href={page.href} className="hover:text-indigo-700">{s.title}</Link>
                    </h2>
                    <p className="text-[15px] text-zinc-600 leading-relaxed mb-4">{s.what}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                      <Link href={page.href} className="text-indigo-600 hover:text-indigo-800">Read the case study <span aria-hidden="true">→</span></Link>
                      {pdf && <a href={pdf.href} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900">Read (PDF)</a>}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="text-[15px] text-zinc-600 mt-10">
          Want the shorter pieces, prototypes and apps? <Link href="/projects" className="text-indigo-600 font-semibold underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-500">See all projects</Link>.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
