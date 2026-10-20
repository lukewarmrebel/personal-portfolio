// A small banner in the hero so the new work is visible in the first screen.
export default function NewWorkBanner() {
  return (
    <a href="/projects"
      className="inline-flex items-baseline gap-2 mb-6 px-3.5 py-2 rounded-2xl border border-indigo-200 bg-indigo-50 text-sm sm:text-[15px] text-zinc-700 hover:border-indigo-400 transition-colors">
      <span className="font-semibold text-indigo-600 shrink-0">New</span>
      <span className="hidden sm:inline">Prototypes you can try, AI testing, data analysis and product memos <span aria-hidden="true" className="text-indigo-600 font-semibold">→</span></span>
      <span className="sm:hidden">See my latest AI product work <span aria-hidden="true" className="text-indigo-600 font-semibold">→</span></span>
    </a>
  );
}
