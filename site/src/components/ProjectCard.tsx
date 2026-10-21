import Link from "next/link";
import type { ProjectFile } from "@/lib/projectSchema";

// One card for every project, old and new. The whole card opens the project's "About the project" page.
export function CardVisual({ p }: { p: ProjectFile }) {
  const bars = p.card?.bars;
  if (bars) {
    return (
      <div className="h-44 bg-white flex flex-col justify-center gap-3 px-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">{bars.title}</p>
        {bars.rows.map((r) => (
          <div key={r.label}>
            <div className="flex justify-between gap-3 text-[13px] text-zinc-700 mb-1"><span>{r.label}</span><span className="font-semibold">{r.value}</span></div>
            <div className="h-2.5 rounded-full bg-zinc-200"><div className={`h-2.5 rounded-full ${r.muted ? "bg-zinc-400" : "bg-indigo-500"}`} style={{ width: `${r.pct}%` }} /></div>
          </div>
        ))}
      </div>
    );
  }
  if (p.card?.thumb) {
    return (
      <div className="h-44 bg-zinc-100 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.card.thumb} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
      </div>
    );
  }
  const t = p.tiles?.[0];
  return (
    <div className="h-44 bg-zinc-100 flex flex-col justify-end p-5">
      {t ? (
        <>
          <p className="text-4xl font-extrabold tracking-tight text-zinc-900">{t.value}</p>
          <p className="text-sm text-zinc-600 mt-1">{t.label}</p>
        </>
      ) : (
        <p className="text-2xl font-bold leading-tight text-zinc-400">{p.tag.split(" · ")[0]}</p>
      )}
    </div>
  );
}

export default function ProjectCard({ p }: { p: ProjectFile }) {
  const tiles = (p.tiles ?? []).slice(p.card?.thumb || p.card?.bars ? 0 : 1, (p.card?.thumb || p.card?.bars ? 0 : 1) + 2);
  return (
    <Link href={`/projects/${p.slug}`}
      className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 transition-colors">
      <div className="border-b border-zinc-200"><CardVisual p={p} /></div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{p.tag}</p>
        <h3 className="text-lg font-bold text-zinc-900 leading-snug">{p.title}</h3>
        <p className="text-[15px] text-zinc-600 leading-relaxed line-clamp-2">{p.oneLine}</p>
        {tiles.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            {tiles.map((t) => (
              <div key={t.label} className="rounded-lg bg-zinc-50 border border-zinc-200 px-3 py-2">
                <p className="text-base font-bold text-zinc-900 leading-tight">{t.value}</p>
                <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">{t.label}</p>
              </div>
            ))}
          </div>
        )}
        <span className="mt-auto pt-3 text-sm font-semibold text-indigo-600 group-hover:text-indigo-800">About the project <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
