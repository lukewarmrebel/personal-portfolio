import type { Metadata } from "next";
import Link from "next/link";
import { workGroups, featuredItems, linkIsExternal, type WorkItem, type WorkLink } from "@/data/work";
import { projects, projectSlug, personal } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work · Pranav Thatavarti",
  description:
    "All of Pranav's AI product work in one place: working prototypes, AI testing and cost, a ride-hailing review analysis, feature teardowns and case studies.",
};

function Links({ links }: { links: WorkLink[] }) {
  return (
    <div className="wk-links">
      {links.map((l) => (
        <a key={l.href} href={l.href} className={`wk-link k-${l.kind}`}
          {...(linkIsExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {l.label}
        </a>
      ))}
    </div>
  );
}


function Visual({ item }: { item: WorkItem }) {
  if (item.bars) {
    return (
      <div className="wk-vis wk-bars">
        <p className="eyebrow">{item.bars.title}</p>
        {item.bars.rows.map((r) => (
          <div className="bar" key={r.label}>
            <span>{r.label}</span><b>{r.value}</b>
            <i><em style={{ width: `${r.pct}%` }} className={r.muted ? "grey" : undefined} /></i>
          </div>
        ))}
        <p className="bar-note">{item.bars.note}</p>
      </div>
    );
  }
  if (!item.image) return null;
  if (item.image.shape === "phone") {
    return (
      <div className="wk-vis wk-phones">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image.src} alt={item.image.alt} loading="lazy" width={520} height={1125} />
        {item.image2 && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={item.image2.src} alt={item.image2.alt} loading="lazy" width={520} height={1125} />
        )}
      </div>
    );
  }
  return (
    <div className="wk-vis wk-wide">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image.src} alt={item.image.alt} loading="lazy" />
    </div>
  );
}

function Card({ item, big = false }: { item: WorkItem; big?: boolean }) {
  return (
    <article className={`wk-card${big ? " big" : ""}${item.image || item.bars ? " has-vis" : ""}${item.span ? " span" : ""}`} id={big ? undefined : item.id}>
      <Visual item={item} />
      <div className="wk-body">
        <p className="wk-tag">{item.tag}</p>
        <h3>{item.title}</h3>
        <p className="wk-what">{item.what}</p>
        {item.stat && <p className="wk-stat">{item.stat}</p>}
        {item.note && <p className="wk-note">{item.note}</p>}
        <Links links={item.links} />
      </div>
    </article>
  );
}

export default function WorkIndex() {
  const earlier = projects.filter((p, i, arr) => arr.findIndex((q) => projectSlug(q.title) === projectSlug(p.title)) === i);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav"><div className="wrap">
        <Link className="logo" href="/#hero" aria-label="Pranav Thatavarti, main portfolio">P<span>T</span></Link>
        <nav className="nav-links" aria-label="Main">
          <Link className="show-sm" href="/">Portfolio</Link>
          <Link className="hide-sm" href="/#about">About</Link>
          <Link className="hide-sm" href="/#experience">Experience</Link>
          <Link href="/work" aria-current="page">Work</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link className="hide-sm" href="/#contact">Contact</Link>
          <a className="btn" href={personal.resumeUrl}>Resume</a>
        </nav>
      </div></header>

      <main id="main">
        <div className="idx-hero wk-hero"><div className="wrap">
          <div className="crumbs"><Link href="/">Portfolio</Link> / Work</div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>My work · AI product management</div>
          <h1>Everything I&apos;ve made, in one place.</h1>
          <p className="sub wk-sub">
            Prototypes you can try, AI testing and cost, a data study, feature teardowns and case studies. All self-initiated in October 2026. Each one shows how I would build it, not a product I shipped.
          </p>
        </div></div>

        <nav className="wk-jump" aria-label="Jump to a group">
          <div className="wrap"><div className="wk-jump-row">
            <a href="#start">Start here</a>
            {workGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`}>{g.short}</a>
            ))}
            <a href="#earlier">Earlier apps</a>
          </div></div>
        </nav>

        <section id="start" className="wk-section"><div className="wrap">
          <div className="wk-head">
            <h2>Start here</h2>
            <p>My three strongest pieces, if you only have a minute.</p>
          </div>
          <div className="wk-featured">
            {featuredItems.map((item) => (
              <div key={item.id} className="wk-feat">
                {item.featured && <p className="wk-why">{item.featured}</p>}
                <Card item={item} big />
              </div>
            ))}
          </div>
        </div></section>

        {workGroups.map((g, gi) => (
          <section key={g.id} id={g.id} className="wk-section"><div className="wrap">
            <div className="wk-head">
              <p className="wk-num">{String(gi + 1).padStart(2, "0")}</p>
              <h2>{g.label}</h2>
              <p>{g.blurb}</p>
            </div>
            <div className={`wk-grid n${g.items.length} c${g.cols ?? 2}`}>
              {g.items.map((item) => <Card key={item.id} item={item} />)}
            </div>
          </div></section>
        ))}

        <section id="earlier" className="wk-section"><div className="wrap">
          <div className="wk-head">
            <p className="wk-num">{String(workGroups.length + 1).padStart(2, "0")}</p>
            <h2>Earlier apps and projects</h2>
            <p>Apps and strategy work from before this series. Each opens its own page with screenshots.</p>
          </div>
          <ul className="wk-earlier">
            {earlier.map((p) => (
              <li key={p.title}>
                <Link href={`/projects/${projectSlug(p.title)}`}>
                  <span className="t">{p.title}</span>
                  <span className="s">{p.subtitle}</span>
                  <span className="c">{p.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div></section>
      </main>

      <footer className="site"><div className="wrap">
        <div>Pranav Thatavarti · Product Manager · Hyderabad<br /><span className="small">Self-initiated work, October 2026. Nothing here is a product I shipped.</span></div>
        <div><Link href="/">Main portfolio</Link> · <a href={`mailto:${personal.email}`}>Email</a> · <a href={personal.linkedin}>LinkedIn</a> · <a href={personal.github}>GitHub</a></div>
      </div></footer>
    </>
  );
}
