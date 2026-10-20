import { workGroups, workCount } from "@/data/work";

// A small banner in the hero so the new work is visible in the first screen.
export default function NewWorkBanner() {
  const parts = workGroups.map((g) => `${g.items.length} ${g.unit}`).join(" · ");
  return (
    <a href="#work"
      className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 px-3 py-1.5 rounded-xl sm:rounded-full border border-indigo-200 bg-indigo-50 text-sm text-zinc-700 hover:border-indigo-400 transition-colors">
      <span className="font-semibold text-indigo-600">New</span>
      <span className="hidden sm:inline">{parts} <span aria-hidden="true" className="text-indigo-600 font-semibold">→</span></span>
      <span className="sm:hidden">{workCount} AI PM pieces, from prototypes to kill docs <span aria-hidden="true" className="text-indigo-600 font-semibold">→</span></span>
    </a>
  );
}
