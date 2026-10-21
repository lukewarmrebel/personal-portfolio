import type { ReactNode } from "react";
import type { FrameworkBlock, FlowNode, Level, ProjectFile } from "@/lib/projectSchema";
import { show } from "@/lib/projectSchema";

// The "About the project" template. Every section reads only from the project file.

export function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="py-10 border-t border-zinc-200 scroll-mt-20">
      {kicker && <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-2">{kicker}</p>}
      <h2 id={`${id}-h`} className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-6">{title}</h2>
      {children}
    </section>
  );
}

const box = "bg-white border border-zinc-200 rounded-2xl";

export function Tiles({ p }: { p: ProjectFile }) {
  if (!p.tiles?.length) return null;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {p.tiles.map((t) => (
        <div key={t.label} className={`${box} px-4 py-4`}>
          <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 leading-none">{t.value}</p>
          <p className="text-[13px] text-zinc-600 mt-2 leading-snug">{t.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Glance({ p }: { p: ProjectFile }) {
  if (!show(p.glance)) return null;
  const g = p.glance;
  const cards: [string, string][] = [["Problem", g.problem], ["Users", g.users], ["My role", g.role], ["Outcome", g.outcome]];
  return (
    <Section id="glance" title="At a glance">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map(([k, v], i) => (
          <div key={k} className={`${box} p-5 ${i === 3 ? "border-indigo-300 bg-indigo-50" : ""}`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">{k}</p>
            <p className="text-[15px] text-zinc-800 leading-relaxed">{v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Persona({ p }: { p: ProjectFile }) {
  if (!show(p.problem)) return null;
  const { persona, jtbd } = p.problem;
  return (
    <Section id="problem" title="Problem and users">
      <div className={`${box} overflow-hidden`}>
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-5">
          <div>
            <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center text-lg font-bold mb-3" aria-hidden="true">{persona.name.charAt(0)}</div>
            <p className="text-lg font-bold text-zinc-900">{persona.name}</p>
            <p className="text-sm text-zinc-500 mb-3">{persona.who}</p>
            <p className="text-[15px] text-zinc-700 leading-relaxed">{persona.context}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">Needs</p>
            <ul className="space-y-2">{persona.needs.map((n) => <li key={n} className="text-[14px] text-zinc-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">{n}</li>)}</ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">Frustrations</p>
            <ul className="space-y-2">{persona.frustrations.map((n) => <li key={n} className="text-[14px] text-zinc-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{n}</li>)}</ul>
          </div>
        </div>
        <div className="border-t border-zinc-200 bg-zinc-50 px-5 sm:px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">Job to be done</p>
          <p className="text-[15px] text-zinc-800 leading-relaxed">{jtbd}</p>
        </div>
      </div>
    </Section>
  );
}

/* ---------- PM framework blocks ---------- */

const levelCls: Record<Level, string> = { low: "bg-zinc-100 text-zinc-600", medium: "bg-amber-100 text-amber-800", high: "bg-red-100 text-red-800" };
const feelY = { good: 10, okay: 30, bad: 50 } as const;
const feelHex = { good: "#10B981", okay: "#F59E0B", bad: "#EF4444" } as const;

function BlockTitle({ kind, title }: { kind: string; title?: string }) {
  return (
    <div className="mb-4">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">{kind}</p>
      {title && <h3 className="text-lg font-bold text-zinc-900 mt-0.5">{title}</h3>}
    </div>
  );
}

function Journey({ b }: { b: Extract<FrameworkBlock, { kind: "journey" }> }) {
  const n = b.stages.length;
  return (
    <div>
      <BlockTitle kind="User journey map" title={b.title} />
      <div className="overflow-x-auto -mx-1 px-1 pb-2">
        <div style={{ minWidth: `${Math.max(n * 150, 300)}px` }}>
          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
            {b.stages.map((s, i) => (
              <div key={s.stage} className="bg-zinc-900 text-white rounded-lg px-3 py-2 text-[13px] font-semibold">{i + 1}. {s.stage}</div>
            ))}
          </div>
          <svg viewBox={`0 0 ${n * 150} 60`} className="w-full h-auto my-2" role="img" aria-label="How the user feels at each stage">
            <line x1="0" y1="30" x2={n * 150} y2="30" stroke="#E4E4E7" strokeDasharray="4 4" />
            <polyline points={b.stages.map((s, i) => `${(i + 0.5) * 150},${feelY[s.feeling]}`).join(" ")} fill="none" stroke="#6366F1" strokeWidth="2.5" />
            {b.stages.map((s, i) => <circle key={s.stage} cx={(i + 0.5) * 150} cy={feelY[s.feeling]} r="7" fill={feelHex[s.feeling]} stroke="#fff" strokeWidth="2" />)}
          </svg>
          {(["doing", "pain", "opportunity"] as const).map((row) => (
            <div key={row} className="grid gap-2 mt-2" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
              {b.stages.map((s) => (
                <div key={s.stage + row} className={`rounded-lg px-3 py-2 text-[13px] leading-snug ${row === "pain" ? "bg-red-50 text-red-900 border border-red-200" : row === "opportunity" ? "bg-indigo-50 text-indigo-900 border border-indigo-200" : "bg-white text-zinc-700 border border-zinc-200"}`}>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-70 mb-0.5">{row === "doing" ? "Doing" : row === "pain" ? "Pain" : "Opportunity"}</span>
                  {s[row]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-zinc-500 mt-2">Line: how the user feels at each stage (top is good, bottom is bad).</p>
    </div>
  );
}

function Moscow({ b }: { b: Extract<FrameworkBlock, { kind: "moscow" }> }) {
  const cols: [string, string[], string][] = [
    ["Must have", b.must, "border-zinc-900 bg-zinc-900 text-white"],
    ["Should have", b.should, "border-indigo-300 bg-indigo-50 text-indigo-900"],
    ["Could have", b.could, "border-zinc-300 bg-white text-zinc-800"],
    ["Won't have", b.wont, "border-zinc-200 bg-zinc-100 text-zinc-500 line-through decoration-zinc-400"],
  ];
  return (
    <div>
      <BlockTitle kind="MoSCoW prioritisation" title={b.title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cols.map(([label, items, cls]) => (
          <div key={label} className={`${box} p-4`}>
            <p className="text-sm font-bold text-zinc-900 mb-3">{label} <span className="text-zinc-400 font-semibold">{items.length}</span></p>
            <ul className="space-y-2">{items.map((i) => <li key={i} className={`text-[13px] leading-snug rounded-lg border px-3 py-2 ${cls}`}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Rice({ b }: { b: Extract<FrameworkBlock, { kind: "rice" }> }) {
  const rows = b.rows.map((r) => ({ ...r, score: Math.round((r.reach * r.impact * r.confidence) / r.effort) })).sort((a, c) => c.score - a.score);
  const max = Math.max(...rows.map((r) => r.score), 1);
  return (
    <div>
      <BlockTitle kind="RICE prioritisation" title={b.title} />
      <div className={`${box} overflow-x-auto`}>
        <table className="w-full text-[13px] min-w-[520px]">
          <thead><tr className="text-left text-zinc-500 border-b border-zinc-200">{["Idea", "Reach", "Impact", "Confidence", "Effort", "Score"].map((h) => <th key={h} className="px-4 py-2 font-semibold">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-2 font-medium text-zinc-900">{r.item}</td><td className="px-4 py-2">{r.reach}</td><td className="px-4 py-2">{r.impact}</td><td className="px-4 py-2">{Math.round(r.confidence * 100)}%</td><td className="px-4 py-2">{r.effort}</td>
                <td className="px-4 py-2 w-40"><div className="flex items-center gap-2"><div className="h-2 rounded-full bg-indigo-500" style={{ width: `${(r.score / max) * 80}px` }} /><span className="font-semibold">{r.score}</span></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.note && <p className="text-xs text-zinc-500 mt-2">{b.note}</p>}
    </div>
  );
}

function NorthStar({ b }: { b: Extract<FrameworkBlock, { kind: "northstar" }> }) {
  return (
    <div>
      <BlockTitle kind="North Star metric tree" title={b.title} />
      <div className="flex flex-col items-center">
        <div className="bg-zinc-900 text-white rounded-2xl px-5 py-4 max-w-xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-300 mb-1">North Star</p>
          <p className="text-base font-bold leading-snug">{b.northStar.name}</p>
          <p className="text-[13px] text-zinc-300 mt-1">{b.northStar.detail}</p>
          {b.northStar.target && <p className="text-2xl font-extrabold text-white mt-2">{b.northStar.target}</p>}
        </div>
        <div className="w-px h-6 bg-zinc-300" aria-hidden="true" />
        <div className="hidden sm:block h-px bg-zinc-300 self-stretch mx-[12%]" aria-hidden="true" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full sm:pt-4">
          {b.inputs.map((i) => (
            <div key={i.name} className="bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-bold text-indigo-950">{i.name}</p>
              <p className="text-[12.5px] text-indigo-900/80 mt-1 leading-snug">{i.detail}</p>
              {i.target && <p className="text-lg font-extrabold text-indigo-700 mt-1">{i.target}</p>}
            </div>
          ))}
        </div>
        {b.guardrails && b.guardrails.length > 0 && (
          <div className="w-full mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-red-700 mb-2 text-center">Guardrails: must not get worse</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {b.guardrails.map((g) => (
                <div key={g.name} className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-center">
                  <p className="text-[13px] font-semibold text-red-950 leading-snug">{g.name}</p>
                  {g.target && <p className="text-base font-extrabold text-red-700 mt-1">{g.target}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {b.note && <p className="text-xs text-zinc-500 mt-3 text-center">{b.note}</p>}
    </div>
  );
}

function Heart({ b }: { b: Extract<FrameworkBlock, { kind: "heart" }> }) {
  return (
    <div>
      <BlockTitle kind="HEART metrics" title={b.title} />
      <div className="grid grid-cols-1 gap-2">
        {b.rows.map((r) => (
          <div key={r.dimension} className={`${box} grid grid-cols-1 sm:grid-cols-[140px_1fr_1fr_1fr] overflow-hidden`}>
            <div className="bg-zinc-900 text-white px-4 py-3 flex sm:items-center gap-2"><span className="w-7 h-7 rounded-full bg-indigo-500 text-white text-sm font-bold flex items-center justify-center shrink-0" aria-hidden="true">{r.dimension.charAt(0)}</span><span className="text-sm font-semibold">{r.dimension}</span></div>
            {([["Goal", r.goal], ["Signal", r.signal], ["Metric", r.metric]] as const).map(([k, v]) => (
              <div key={k} className="px-4 py-3 border-t sm:border-t-0 sm:border-l border-zinc-200"><p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{k}</p><p className="text-[13.5px] text-zinc-800 leading-snug mt-0.5">{v}</p></div>
            ))}
          </div>
        ))}
      </div>
      {b.note && <p className="text-xs text-zinc-500 mt-2">{b.note}</p>}
    </div>
  );
}

function Kano({ b }: { b: Extract<FrameworkBlock, { kind: "kano" }> }) {
  const cols: [string, string, string[], string][] = [
    ["Basic", "Expected. Missing = angry users", b.basic, "bg-zinc-100 border-zinc-300"],
    ["Performance", "More is better", b.performance, "bg-indigo-50 border-indigo-200"],
    ["Delight", "Unexpected. Wins fans", b.delight, "bg-emerald-50 border-emerald-200"],
  ];
  return (
    <div>
      <BlockTitle kind="Kano model" title={b.title} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {cols.map(([label, hint, items, cls]) => (
          <div key={label} className={`rounded-2xl border p-4 ${cls}`}>
            <p className="text-sm font-bold text-zinc-900">{label}</p>
            <p className="text-xs text-zinc-500 mb-3">{hint}</p>
            <ul className="space-y-2">{items.map((i) => <li key={i} className="text-[13px] bg-white rounded-lg border border-zinc-200 px-3 py-2 leading-snug">{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Risks({ b }: { b: Extract<FrameworkBlock, { kind: "risks" }> }) {
  const lv: Level[] = ["high", "medium", "low"];
  return (
    <div>
      <BlockTitle kind="Assumptions and risks matrix" title={b.title} />
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
        <div className="self-start">
          <div className="grid grid-cols-[auto_repeat(3,1fr)] gap-1 text-[10px] text-zinc-500">
            <span />{(["low", "medium", "high"] as Level[]).map((l) => <span key={l} className="text-center">{l}</span>)}
            {lv.map((imp) => (
              <div key={imp} className="contents">
                <span className="pr-1 self-center text-right">{imp}</span>
                {(["low", "medium", "high"] as Level[]).map((lik) => {
                  const hits = b.items.map((r, i) => ({ r, i })).filter(({ r }) => r.impact === imp && r.likelihood === lik);
                  const hot = (imp === "high" && lik !== "low") || (lik === "high" && imp !== "low");
                  return (
                    <div key={lik} className={`h-14 rounded-md border flex flex-wrap items-center justify-center gap-1 p-1 ${hot ? "bg-red-50 border-red-200" : "bg-zinc-50 border-zinc-200"}`}>
                      {hits.map(({ i }) => <span key={i} className="w-5 h-5 rounded-full bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center">{i + 1}</span>)}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="text-[10px] text-zinc-500 mt-1 text-center">Likelihood → · Impact ↑</p>
        </div>
        <ol className="space-y-2">
          {b.items.map((r, i) => (
            <li key={r.risk} className={`${box} px-4 py-3 flex gap-3`}>
              <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900">{r.risk}</p>
                <div className="flex flex-wrap gap-1.5 my-1.5"><span className={`text-[11px] px-2 py-0.5 rounded-full ${levelCls[r.likelihood]}`}>likelihood: {r.likelihood}</span><span className={`text-[11px] px-2 py-0.5 rounded-full ${levelCls[r.impact]}`}>impact: {r.impact}</span></div>
                <p className="text-[13px] text-zinc-600 leading-snug">{r.mitigation}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Jtbd({ b }: { b: Extract<FrameworkBlock, { kind: "jtbd" }> }) {
  return (
    <div>
      <BlockTitle kind="Jobs to be done" title={b.title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {b.items.map((j) => (
          <div key={j.when} className={`${box} p-4 grid grid-cols-[64px_1fr] gap-y-1.5 text-[13.5px]`}>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 pt-0.5">When</span><span className="text-zinc-800">{j.when}</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 pt-0.5">I want</span><span className="text-zinc-900 font-semibold">{j.want}</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 pt-0.5">So</span><span className="text-zinc-800">{j.so}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


function Emotion({ b }: { b: Extract<FrameworkBlock, { kind: "emotion" }> }) {
  const n = b.steps.length, SW = 140, H = 150, y = (f: number) => 20 + (2 - f) * 27;
  const W = n * SW;
  return (
    <div>
      <BlockTitle kind="Emotional journey" title={b.title} />
      <div className={`${box} p-4 overflow-x-auto`}>
        <svg viewBox={`0 0 ${W + 40} ${H + 46}`} style={{ minWidth: `${Math.max(n * 110, 320)}px` }} className="w-full h-auto" role="img" aria-label="Feeling at each step" fontFamily="Inter, system-ui, sans-serif">
          {[2, 0, -2].map((f) => <g key={f}><line x1="36" x2={W + 36} y1={y(f)} y2={y(f)} stroke={f === 0 ? "#D4D4D8" : "#F4F4F5"} strokeDasharray={f === 0 ? "4 4" : undefined} /><text x="0" y={y(f) + 4} fontSize="11" fill="#71717A">{f === 2 ? "happy" : f === 0 ? "okay" : "upset"}</text></g>)}
          <polyline points={b.steps.map((s, i) => `${36 + (i + 0.5) * SW},${y(s.feeling)}`).join(" ")} fill="none" stroke="#6366F1" strokeWidth="3" />
          {b.steps.map((s, i) => (
            <g key={s.step}>
              <circle cx={36 + (i + 0.5) * SW} cy={y(s.feeling)} r="8" fill={s.feeling > 0 ? "#10B981" : s.feeling < 0 ? "#EF4444" : "#F59E0B"} stroke="#fff" strokeWidth="2" />
              {s.note && <text x={36 + (i + 0.5) * SW} y={y(s.feeling) + (s.feeling >= 0 ? 24 : -14)} fontSize="11" textAnchor="middle" fill="#3F3F46">{s.note}</text>}
              <text x={36 + (i + 0.5) * SW} y={H + 30} fontSize="12" fontWeight="600" textAnchor="middle" fill="#18181B">{s.step}</text>
            </g>
          ))}
        </svg>
      </div>
      {b.note && <p className="text-xs text-zinc-500 mt-2">{b.note}</p>}
    </div>
  );
}

function Acceptance({ b }: { b: Extract<FrameworkBlock, { kind: "acceptance" }> }) {
  return (
    <div>
      <BlockTitle kind="Acceptance criteria" title={b.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {b.stories.map((st) => (
          <div key={st.story} className={`${box} overflow-hidden`}>
            <p className="px-4 py-3 text-[14px] font-semibold text-zinc-900 bg-zinc-50 border-b border-zinc-200">{st.story}</p>
            <div className="p-4 grid grid-cols-[56px_1fr] gap-y-2 text-[13.5px]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 pt-0.5">Given</span><span className="text-zinc-800">{st.given}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 pt-0.5">When</span><span className="text-zinc-800">{st.when}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 pt-0.5">Then</span><span className="text-zinc-900 font-medium">{st.then}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tradeoff({ b }: { b: Extract<FrameworkBlock, { kind: "tradeoff" }> }) {
  const totalW = b.criteria.reduce((a, c) => a + c.weight, 0) || 1;
  const rows = b.options.map((o) => ({ ...o, total: o.scores.reduce((a, s, i) => a + s * (b.criteria[i]?.weight ?? 0), 0) / totalW }));
  return (
    <div>
      <BlockTitle kind="Trade-off matrix" title={b.title} />
      <div className={`${box} overflow-x-auto`}>
        <table className="w-full text-[13px] min-w-[560px]">
          <thead>
            <tr className="text-left text-zinc-500 border-b border-zinc-200">
              <th className="px-4 py-2 font-semibold">Option</th>
              {b.criteria.map((c) => <th key={c.name} className="px-3 py-2 font-semibold">{c.name}<span className="block text-[10px] font-normal">weight {c.weight}</span></th>)}
              <th className="px-4 py-2 font-semibold">Weighted score</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className={`border-b border-zinc-100 last:border-0 ${r.chosen ? "bg-indigo-50" : ""}`}>
                <td className="px-4 py-2 font-semibold text-zinc-900">{r.name}{r.chosen && <span className="ml-2 text-[10px] uppercase tracking-wider text-indigo-700">chosen</span>}</td>
                {r.scores.map((sc, i) => <td key={i} className="px-3 py-2"><span className="inline-flex gap-0.5" aria-label={`${sc} of 5`}>{[1, 2, 3, 4, 5].map((d) => <span key={d} className={`w-2.5 h-2.5 rounded-full ${d <= sc ? "bg-zinc-800" : "bg-zinc-200"}`} />)}</span></td>)}
                <td className="px-4 py-2 w-44"><div className="flex items-center gap-2"><div className={`h-2.5 rounded-full ${r.chosen ? "bg-indigo-500" : "bg-zinc-400"}`} style={{ width: `${(r.total / 5) * 90}px` }} /><span className="font-semibold">{r.total.toFixed(1)}</span></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.note && <p className="text-xs text-zinc-500 mt-2">{b.note}</p>}
    </div>
  );
}

function Roadmap({ b }: { b: Extract<FrameworkBlock, { kind: "roadmap" }> }) {
  const lanes: [string, string[], string][] = [["Now", b.now, "bg-zinc-900 text-white"], ["Next", b.next, "bg-indigo-500 text-white"], ["Later", b.later, "bg-zinc-200 text-zinc-800"]];
  return (
    <div>
      <BlockTitle kind="Roadmap" title={b.title} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {lanes.map(([label, items, cls]) => (
          <div key={label} className={`${box} overflow-hidden`}>
            <p className={`px-4 py-2 text-sm font-bold ${cls}`}>{label}</p>
            <ul className="p-3 space-y-2">{items.map((i) => <li key={i} className="text-[13px] bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 leading-snug">{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Circles({ b }: { b: Extract<FrameworkBlock, { kind: "circles" }> }) {
  const st = b.steps;
  const items: [string, string, string][] = [["C", "Comprehend the situation", st.comprehend], ["I", "Identify the users", st.identify], ["R", "Report their needs", st.report], ["C", "Cut through, prioritise", st.cut], ["L", "List solutions", st.list], ["E", "Evaluate trade-offs", st.evaluate], ["S", "Summarise", st.summarise]];
  return (
    <div>
      <BlockTitle kind="CIRCLES walkthrough" title={b.title} />
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
        {items.map(([l, name, text], i) => (
          <li key={i} className={`${box} p-3 flex lg:flex-col gap-3 lg:gap-2`}>
            <span className="w-9 h-9 rounded-full bg-indigo-500 text-white font-extrabold flex items-center justify-center shrink-0">{l}</span>
            <div><p className="text-[12px] font-bold text-zinc-900 leading-tight">{name}</p><p className="text-[12.5px] text-zinc-600 mt-1 leading-snug">{text}</p></div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Research({ b }: { b: Extract<FrameworkBlock, { kind: "research" }> }) {
  const groups = Array.from(new Set((b.findings ?? []).map((f) => f.group)));
  return (
    <div>
      <BlockTitle kind={b.mode === "plan" ? "Research plan" : "User research"} title={b.title} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {b.methods.map((m) => (
          <div key={m.method} className={`${box} p-4`}>
            <p className="text-sm font-bold text-zinc-900">{m.method}</p>
            <p className="text-3xl font-extrabold text-indigo-600 my-1">{m.howMany}</p>
            <p className="text-[13px] text-zinc-700 leading-snug"><span className="font-semibold">Who:</span> {m.who}</p>
            <p className="text-[13px] text-zinc-600 leading-snug mt-1"><span className="font-semibold">How:</span> {m.how}</p>
          </div>
        ))}
      </div>
      {groups.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {groups.map((g) => (
            <div key={g} className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">{g}</p>
              <ul className="space-y-2">
                {b.findings!.filter((f) => f.group === g).map((f) => (
                  <li key={f.insight} className="bg-white rounded-lg border border-amber-200 px-3 py-2">
                    <p className="text-[13.5px] font-semibold text-zinc-900 leading-snug">{f.insight}</p>
                    <p className="text-[12.5px] text-zinc-600 mt-1 leading-snug">{f.evidence}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {b.questions && b.questions.length > 0 && (
        <div className={`${box} p-4`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">What I&apos;d ask</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">{b.questions.map((q, i) => <li key={q} className="text-[13.5px] text-zinc-800 flex gap-2"><span className="text-indigo-600 font-bold">{i + 1}.</span>{q}</li>)}</ol>
        </div>
      )}
      {b.note && <p className="text-xs text-zinc-500 mt-2">{b.note}</p>}
    </div>
  );
}

const fv = { yes: ["Yes", "bg-emerald-100 text-emerald-800"], no: ["No", "bg-red-100 text-red-800"], partial: ["Partly", "bg-amber-100 text-amber-800"], unclear: ["Unclear", "bg-zinc-100 text-zinc-500"] } as const;

function Market({ b }: { b: Extract<FrameworkBlock, { kind: "market" }> }) {
  return (
    <div>
      <BlockTitle kind="Market research" title={b.title} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {b.funnel && (
          <div className={`${box} p-4`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Market size</p>
            <div className="flex flex-col items-center gap-1.5">
              {b.funnel.map((f, i) => (
                <div key={f.level} className={`rounded-xl text-center px-3 py-2.5 ${i === 0 ? "bg-zinc-900 text-white" : i === 1 ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-950"}`} style={{ width: `${100 - i * 22}%` }}>
                  <p className="text-[11px] font-bold tracking-widest opacity-80">{f.level}{f.value ? ` · ${f.value}` : ""}</p>
                  <p className="text-[13px] font-semibold leading-snug">{f.label}</p>
                  {f.assumption && <p className="text-[11px] opacity-80 leading-snug mt-0.5">{f.assumption}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {b.positioning && (
          <div className={`${box} p-4`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Where competitors sit</p>
            <svg viewBox="0 0 320 250" className="w-full h-auto" role="img" aria-label="Competitor positioning chart" fontFamily="Inter, system-ui, sans-serif">
              <text x="10" y="14" fontSize="10.5" fill="#71717A">↑ {b.positioning.y[1]}</text>
              <rect x="10" y="22" width="300" height="190" fill="#FAFAF9" stroke="#E4E4E7" />
              <line x1="160" y1="22" x2="160" y2="212" stroke="#E4E4E7" /><line x1="10" y1="117" x2="310" y2="117" stroke="#E4E4E7" />
              <text x="14" y="206" fontSize="10" fill="#A1A1AA">{b.positioning.y[0]}</text>
              <text x="10" y="230" fontSize="10.5" fill="#71717A">{b.positioning.x[0]}</text><text x="310" y="230" fontSize="10.5" fill="#71717A" textAnchor="end">{b.positioning.x[1]} →</text>
              {b.positioning.points.map((pt) => {
                const x = 10 + pt.x * 300, y = 212 - pt.y * 190;
                return (
                  <g key={pt.name}>
                    <circle cx={x} cy={y} r={pt.me ? 8 : 6} fill={pt.me ? "#6366F1" : "#3F3F46"} />
                    <text x={x + (pt.x > 0.6 ? -11 : 11)} y={y + 4} fontSize="11" fontWeight={pt.me ? 700 : 500} fill={pt.me ? "#4338CA" : "#18181B"} textAnchor={pt.x > 0.6 ? "end" : "start"}>{pt.name}</text>
                  </g>
                );
              })}
            </svg>
          </div>
        )}
      </div>
      {b.features && (
        <div className={`${box} overflow-x-auto mt-4`}>
          <table className="w-full text-[13px] min-w-[560px]">
            <thead><tr className="text-left text-zinc-500 border-b border-zinc-200"><th className="px-4 py-2 font-semibold">Product</th>{b.features.columns.map((c) => <th key={c} className="px-3 py-2 font-semibold">{c}</th>)}</tr></thead>
            <tbody>
              {b.features.rows.map((r) => (
                <tr key={r.name} className={`border-b border-zinc-100 last:border-0 ${r.me ? "bg-indigo-50" : ""}`}>
                  <td className="px-4 py-2 font-semibold text-zinc-900">{r.name}</td>
                  {r.values.map((v, i) => <td key={i} className="px-3 py-2"><span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${fv[v][1]}`}>{fv[v][0]}</span></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {b.trends && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          {b.trends.map((t) => <div key={t.label} className={`${box} p-4`}><p className="text-2xl font-extrabold text-zinc-900">{t.value}</p><p className="text-[13px] text-zinc-600 mt-1 leading-snug">{t.label}</p></div>)}
        </div>
      )}
      {b.note && <p className="text-xs text-zinc-500 mt-2">{b.note}</p>}
    </div>
  );
}

function Block({ b }: { b: FrameworkBlock }) {
  switch (b.kind) {
    case "journey": return <Journey b={b} />;
    case "moscow": return <Moscow b={b} />;
    case "rice": return <Rice b={b} />;
    case "northstar": return <NorthStar b={b} />;
    case "heart": return <Heart b={b} />;
    case "kano": return <Kano b={b} />;
    case "risks": return <Risks b={b} />;
    case "jtbd": return <Jtbd b={b} />;
    case "emotion": return <Emotion b={b} />;
    case "acceptance": return <Acceptance b={b} />;
    case "tradeoff": return <Tradeoff b={b} />;
    case "roadmap": return <Roadmap b={b} />;
    case "circles": return <Circles b={b} />;
    case "research": return <Research b={b} />;
    case "market": return <Market b={b} />;
  }
}

export function Frameworks({ p }: { p: ProjectFile }) {
  if (!show(p.frameworks)) return null;
  const blocks = p.frameworks.blocks.filter((b) => !b.todo);
  if (!blocks.length) return null;
  return (
    <Section id="frameworks" title="How I thought about it" kicker="PM frameworks">
      <div className="flex flex-col gap-12">{blocks.map((b, i) => <Block key={i} b={b} />)}</div>
    </Section>
  );
}

/* ---------- Flow diagram (inline SVG, drawn from data) ---------- */

function wrap(text: string, max: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

export function FlowDiagram({ nodes, title }: { nodes: FlowNode[]; title?: string }) {
  const W = 360, MX = 16, MW = 200, SX = 248, SW = 104, GAP = 30, LH = 15;
  let y = 8;
  const laid = nodes.map((n) => {
    const lines = wrap(n.label, 28);
    const h = Math.max(38, lines.length * LH + 18);
    const sideLines = n.side ? wrap(n.side.text, 15) : [];
    const sh = n.side ? sideLines.length * 13.5 + 14 : 0;
    const rowH = Math.max(h, sh);
    const item = { n, lines, h, y: y + (rowH - h) / 2, sideLines, sh, sy: y + (rowH - sh) / 2 };
    y += rowH + GAP;
    return item;
  });
  const H = y - GAP + 8;
  const cx = MX + MW / 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[560px] h-auto mx-auto block" role="img" aria-label={title ?? "User flow"} fontFamily="Inter, system-ui, sans-serif">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#71717A" /></marker>
      </defs>
      {laid.map((it, i) => {
        const k = it.n.kind ?? "step";
        const dark = k === "start" || k === "end";
        const dec = k === "decision";
        const next = laid[i + 1];
        return (
          <g key={i}>
            {dec ? (
              <polygon points={`${MX + 12},${it.y} ${MX + MW - 12},${it.y} ${MX + MW},${it.y + it.h / 2} ${MX + MW - 12},${it.y + it.h} ${MX + 12},${it.y + it.h} ${MX},${it.y + it.h / 2}`} fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
            ) : (
              <rect x={MX} y={it.y} width={MW} height={it.h} rx={dark ? it.h / 2 : 8} fill={dark ? "#18181B" : "#FFFFFF"} stroke={dark ? "#18181B" : "#A1A1AA"} strokeWidth="1.2" />
            )}
            {it.lines.map((l, j) => (
              <text key={j} x={cx} y={it.y + it.h / 2 - ((it.lines.length - 1) * LH) / 2 + j * LH + 4.5} textAnchor="middle" fontSize="12.5" fontWeight={dark || dec ? 600 : 500} fill={dark ? "#FFFFFF" : dec ? "#312E81" : "#18181B"}>{l}</text>
            ))}
            {next && <line x1={cx} y1={it.y + it.h} x2={cx} y2={next.y - 2} stroke="#71717A" strokeWidth="1.4" markerEnd="url(#arr)" />}
            {next && dec && <text x={cx + 6} y={it.y + it.h + 16} fontSize="10.5" fill="#3F7D58" fontWeight="600">{it.n.side?.label === "Yes" ? "No" : "Yes"}</text>}
            {it.n.side && (
              <g>
                <line x1={MX + MW} y1={it.y + it.h / 2} x2={SX - 2} y2={it.y + it.h / 2} stroke="#B9381B" strokeWidth="1.4" markerEnd="url(#arr)" />
                <text x={(MX + MW + SX) / 2} y={it.y + it.h / 2 - 5} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#B9381B">{it.n.side.label}</text>
                <rect x={SX} y={it.sy} width={SW} height={it.sh} rx="8" fill="#FEF2F2" stroke="#B9381B" strokeWidth="1.2" />
                {it.sideLines.map((l, j) => <text key={j} x={SX + 8} y={it.sy + 17 + j * 13.5} fontSize="11" fill="#7F1D1D">{l}</text>)}
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function Flow({ p }: { p: ProjectFile }) {
  if (!show(p.flow)) return null;
  return (
    <Section id="flow" title={p.flow.title ?? "User flow"} kicker="User flow">
      <div className={`${box} p-4 sm:p-6`}><FlowDiagram nodes={p.flow.nodes} title={p.flow.title} /></div>
      {p.flow.caption && <p className="text-sm text-zinc-600 mt-3">{p.flow.caption}</p>}
    </Section>
  );
}

export function Wireframes({ p }: { p: ProjectFile }) {
  if (!show(p.wireframes)) return null;
  return (
    <Section id="wireframes" title="Wireframes" kicker="Screens">
      <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 snap-x">
        {p.wireframes.screens.map((s) => (
          <figure key={s.src} className="shrink-0 snap-start w-[220px] sm:w-[240px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={`Wireframe: ${s.caption}`} loading="lazy" className="w-full h-auto" />
            <figcaption className="text-[13px] text-zinc-600 mt-2 leading-snug">{s.caption}</figcaption>
          </figure>
        ))}
      </div>
      {p.wireframes.caption && <p className="text-xs text-zinc-500 mt-2">{p.wireframes.caption}</p>}
    </Section>
  );
}

export function Solution({ p }: { p: ProjectFile }) {
  if (!show(p.solution)) return null;
  const s = p.solution;
  return (
    <Section id="solution" title="Solution and key decisions">
      <p className="text-lg text-zinc-800 leading-relaxed mb-6 max-w-3xl">{s.summary}</p>
      {s.steps && s.steps.length > 0 && (
        <ol className="flex flex-wrap items-center gap-2 mb-8" aria-label="Process">
          {s.steps.map((st, i) => (
            <li key={st} className="flex items-center gap-2">
              <span className="flex items-center gap-2 bg-white border border-zinc-300 rounded-full pl-1 pr-3 py-1 text-[13px] font-medium text-zinc-800"><span className="w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>{st}</span>
              {i < s.steps!.length - 1 && <span className="text-zinc-400" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {s.decisions.map((d) => (
          <div key={d.decision} className={`${box} p-5`}>
            <p className="text-[15px] font-bold text-zinc-900 mb-1.5">{d.decision}</p>
            <p className="text-[13.5px] text-zinc-600 leading-relaxed">{d.why}</p>
            {d.rejected && <p className="text-[13px] mt-3 text-zinc-500"><span className="text-[10px] font-semibold uppercase tracking-wider text-red-700 mr-1.5">Cut</span><s>{d.rejected}</s></p>}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Metrics({ p }: { p: ProjectFile }) {
  if (!show(p.metrics)) return null;
  const m = p.metrics;
  return (
    <Section id="metrics" title="Metrics and how I'd test it">
      {m.northStar && (
        <div className="bg-zinc-900 text-white rounded-2xl px-5 py-4 mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-300">North Star</p>
          <p className="text-base font-bold mt-1">{m.northStar}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {m.rows.map((r) => (
          <div key={r.name} className={`${box} p-4 flex gap-4 items-start`}>
            {r.target && <p className="text-xl font-extrabold text-indigo-600 leading-none shrink-0 min-w-[76px]">{r.target}</p>}
            <div><p className="text-sm font-semibold text-zinc-900">{r.name}</p><p className="text-[13px] text-zinc-600 mt-1 leading-snug">{r.how}</p></div>
          </div>
        ))}
      </div>
      {m.tests.length > 0 && (
        <div className={`${box} p-5`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Checks before launch</p>
          <ul className="space-y-2">{m.tests.map((t) => <li key={t} className="flex gap-3 text-[14px] text-zinc-800 leading-snug"><span className="mt-0.5 w-4 h-4 rounded border-2 border-indigo-500 shrink-0" aria-hidden="true" />{t}</li>)}</ul>
        </div>
      )}
      {m.note && <p className="text-xs text-zinc-500 mt-3">{m.note}</p>}
    </Section>
  );
}

export function Next({ p }: { p: ProjectFile }) {
  if (!show(p.next)) return null;
  return (
    <Section id="next" title="What I'd do next">
      <ol className="relative border-l-2 border-indigo-200 ml-3 space-y-4">
        {p.next.items.map((it, i) => (
          <li key={it} className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
            <p className="text-[15px] text-zinc-800 leading-relaxed">{it}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Extra({ p }: { p: ProjectFile }) {
  if (!show(p.extra)) return null;
  const e = p.extra;
  const has = e.images?.length || e.highlights?.length || e.stat || e.note || e.skills?.length || e.paragraphs?.length;
  if (!has) return null;
  return (
    <Section id="more" title="More detail">
      {e.images && e.images.length > 0 && (
        <div className="flex gap-4 overflow-x-auto pb-3 mb-6 -mx-1 px-1">
          {e.images.map((im) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={im.src} src={im.src} alt={im.alt} loading="lazy" className={`shrink-0 rounded-xl border border-zinc-200 bg-white object-contain ${e.images!.length > 1 ? "h-72 sm:h-96 w-auto max-w-[85%]" : "w-full h-auto"}`} />
          ))}
        </div>
      )}
      {e.paragraphs?.map((t) => <p key={t} className="text-[15px] text-zinc-700 leading-relaxed mb-4 max-w-3xl">{t}</p>)}
      {e.stat && <p className="text-base text-zinc-800 leading-relaxed border-l-4 border-indigo-500 bg-white pl-4 pr-3 py-3 mb-6 max-w-3xl">{e.stat}</p>}
      {e.highlights && e.highlights.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {e.highlights.map((h) => <li key={h} className={`${box} px-4 py-3 text-[14px] text-zinc-700 leading-snug`}>{h}</li>)}
        </ul>
      )}
      {e.note && <p className="text-sm text-zinc-500 leading-relaxed mb-6">{e.note}</p>}
      {e.skills && e.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">{e.skills.map((s) => <span key={s} className="px-3 py-1 rounded-full text-xs font-medium border border-zinc-300 text-zinc-600 bg-white">{s}</span>)}</div>
      )}
    </Section>
  );
}
