import { workGroups, featuredItems, linkIsExternal, type WorkItem, type WorkLink } from "@/data/work";

// Home page: a quick-links bar to every group of work, then three featured pieces.
// Flat on purpose: no motion, no gradients. Everything links to /work for the full index.

function LinkRow({ links }: { links: WorkLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
      {links.map((l) => (
        <a key={l.href} href={l.href}
          {...(linkIsExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-indigo-600 hover:text-indigo-800 underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-500">
          {l.label}
        </a>
      ))}
    </div>
  );
}

function Bars({ bars }: { bars: NonNullable<WorkItem["bars"]> }) {
  return (
    <div className="h-full flex flex-col justify-center gap-4 px-6 py-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{bars.title}</p>
      {bars.rows.map((r) => (
        <div key={r.label}>
          <div className="flex justify-between gap-3 text-sm text-zinc-700 mb-1"><span>{r.label}</span><span className="font-semibold">{r.value}</span></div>
          <div className="h-3 rounded-full bg-zinc-200"><div className={`h-3 rounded-full ${r.muted ? "bg-zinc-400" : "bg-indigo-500"}`} style={{ width: `${r.pct}%` }} /></div>
        </div>
      ))}
      <p className="text-sm text-zinc-700 border-t border-dashed border-zinc-300 pt-3">{bars.note}</p>
    </div>
  );
}

function FeaturedCard({ item }: { item: WorkItem }) {
  return (
    <article className="bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col">
      <div className="h-56 bg-zinc-100 border-b border-zinc-200 overflow-hidden flex items-start justify-center">
        {item.bars ? (
          <div className="w-full h-full bg-white"><Bars bars={item.bars} /></div>
        ) : item.image?.shape === "phone" ? (
          <div className="flex gap-3 pt-5 px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image.src} alt={item.image.alt} loading="lazy" className="w-36 rounded-xl border border-zinc-300" />
            {item.image2 && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={item.image2.src} alt={item.image2.alt} loading="lazy" className="w-36 rounded-xl border border-zinc-300 mt-6" />
            )}
          </div>
        ) : item.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={item.image.src} alt={item.image.alt} loading="lazy" className="w-full h-full object-contain bg-white p-3" />
        ) : null}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex flex-col gap-3 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{item.tag}</p>
        <h3 className="text-xl font-bold text-zinc-900 leading-snug">{item.title}</h3>
        <p className="text-[15px] text-zinc-600 leading-relaxed">{item.what}</p>
        {item.stat && (
          <p className="pt-3 border-t border-dashed border-zinc-300 text-[15px] font-semibold text-zinc-900 leading-snug">{item.stat}</p>
        )}
        </div>
        <div className="pt-1"><LinkRow links={item.links} /></div>
      </div>
    </article>
  );
}

export default function WorkHighlights() {
  return (
    <section id="work" className="py-20 px-6 bg-white border-y border-zinc-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">My work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900">What I&apos;ve built and written</h2>
            <p className="text-zinc-600 mt-3 max-w-2xl text-base md:text-lg leading-relaxed">
              Working prototypes, AI testing, data analysis and product memos. All self-initiated in October 2026. Each one shows how I would build it, not a product I shipped.
            </p>
          </div>
          <a href="/work" className="self-start md:self-auto shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors">
            See all work
          </a>
        </div>

        <nav aria-label="Jump to a group of work" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-12">
          {workGroups.map((g) => (
            <a key={g.id} href={`/work#${g.id}`}
              className="group flex items-center justify-between gap-3 border border-zinc-200 rounded-xl px-4 py-3.5 bg-zinc-50/60 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
              <span>
                <span className="block text-base font-semibold text-zinc-900 group-hover:text-indigo-600">{g.short}</span>
                <span className="block text-sm text-zinc-500 leading-snug mt-0.5">{g.hint}</span>
              </span>
              <span aria-hidden="true" className="text-indigo-500 font-semibold">→</span>
            </a>
          ))}
          <a href="#projects"
            className="group flex items-center justify-between gap-3 border border-zinc-200 rounded-xl px-4 py-3.5 bg-zinc-50/60 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
            <span>
              <span className="block text-base font-semibold text-zinc-900 group-hover:text-indigo-600">Earlier apps</span>
              <span className="block text-sm text-zinc-500 leading-snug mt-0.5">Apps and projects I built before</span>
            </span>
            <span aria-hidden="true" className="text-indigo-500 font-semibold">→</span>
          </a>
        </nav>

        <h3 className="text-base font-semibold text-zinc-900 mb-4">Start here: my three strongest pieces</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {featuredItems.map((item) => <FeaturedCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
