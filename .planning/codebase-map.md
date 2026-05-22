# Codebase Map — Pranav Thatavarti Portfolio Site

**Mapped:** 2026-05-23
**Project root:** `E:\Projects\Portfolio\site`

---

## 1. Architecture

### Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.6 |
| Language | TypeScript | ^5 |
| Runtime | React | 19.2.4 |
| Styling | Tailwind CSS v4 | ^4 |
| Animation | Framer Motion | ^12.40.0 |
| Icons | Lucide React | ^1.16.0 |
| Linting | ESLint (next/core-web-vitals + next/typescript) | ^9 |

> **Note:** This is Next.js 16 with React 19 — both are very new releases. The AGENTS.md at `E:\Projects\Portfolio\site\AGENTS.md` explicitly warns: "This version has breaking changes — APIs, conventions, and file structure may all differ from training data."

### App Router Layout

```
src/
  app/
    favicon.ico
    globals.css          ← global styles + CSS custom properties
    layout.tsx           ← root layout: Inter font, metadata, <html>/<body>
    page.tsx             ← single-page entry: composes all sections
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    InfoPanel.tsx
    Skills.tsx
    Education.tsx
    Contact.tsx
  data/
    portfolio.ts         ← all content data (single source of truth)
public/
  pranav-formal.jpg      ← used in Hero
  pranav-casual.webp     ← used in About
  file.svg / globe.svg / next.svg / vercel.svg / window.svg  ← Next.js defaults (unused)
```

### Page Composition (`src/app/page.tsx`)

The entire site is a single page (`/`). Layout is:

```
<Navbar />                          ← fixed top bar
<Hero />                            ← full-width, full-viewport-height section
<div max-w-6xl two-column grid>
  <main flex-1>                     ← scrollable left column
    <About />
    <Experience />
    <Projects />
  </main>
  <aside w-80 sticky top-20>        ← sticky right sidebar
    <InfoPanel />                   ← contact + education + skills summary
  </aside>
</div>
```

`Skills`, `Education`, and `Contact` components exist as standalone files but are **not imported in `page.tsx`** — they are currently unused/orphaned. See Quality Notes below.

---

## 2. Key Components

### `Navbar.tsx` — `src/components/Navbar.tsx`

- `"use client"` — uses `useState` + `useEffect` for scroll detection and mobile menu toggle
- Transparent on load, switches to `bg-white/90 backdrop-blur-md` after 40px scroll
- Desktop: horizontal nav links + Resume CTA button
- Mobile: hamburger menu that expands into a vertical drawer (closes on link click)
- Nav links hardcoded in component: About, Experience, Projects, Skills, Education, Contact
- Logo "PT" uses `.gradient-text` and links to `#hero`
- Pulls `personal.resumeUrl` from data layer

### `Hero.tsx` — `src/components/Hero.tsx`

- `"use client"` — uses Framer Motion for staggered entrance animations
- Full-height section (`min-h-screen`) with two-column grid (text left, photo right) on `lg+`
- Animated background blobs (Tailwind blur utilities, `pointer-events-none`)
- Photo: `next/image` with `priority`, source `/pranav-formal.jpg`
- Social links: GitHub (inline SVG), LinkedIn (inline SVG), Email (Lucide `Mail`)
- CTA buttons: "View Projects" (anchor `#projects`) + "Download Resume" (external link)
- "Open to work" badge floats over photo bottom-right
- Scroll-down `ArrowDown` caret at bottom, only visible `md+`, uses `animate-bounce`

### `About.tsx` — `src/components/About.tsx`

- `"use client"` — scroll-triggered animations via Framer Motion `whileInView`
- 5-column grid on `lg`: photo occupies 2 cols (`lg:col-span-2`), text occupies 3 cols
- Photo: `/pranav-casual.webp` via `next/image`
- Renders `personal.bio`, `personal.bio2`, interests grid from `personal.interests`
- Hardcoded skill-tag chips: "Product Strategy", "Cross-functional Leadership", etc. — not driven by data layer

### `Experience.tsx` — `src/components/Experience.tsx`

- `"use client"` — scroll-triggered stagger animations
- Vertical timeline: decorative left line (`w-px bg-zinc-200`) + gradient dot per entry
- Each entry is a `.card` showing: company, role (gradient-colored), period, location, bullet points
- Drives from `experience[]` in data layer
- Gradient dot color per job comes from `job.color` (Tailwind gradient class string in data)

### `Projects.tsx` — `src/components/Projects.tsx`

- `"use client"` — scroll-triggered stagger animations
- Responsive grid: 1 col → 2 cols (`md`) → 3 cols (`xl`)
- Each card: colored top accent bar, emoji, category badge, duration, title, subtitle (gradient), summary, optional stats, optional highlights, skill chips, optional external link
- Category badge colors defined locally in `categoryColors` record
- Gradient colors come from `project.color` in data layer

### `InfoPanel.tsx` — `src/components/InfoPanel.tsx`

- `"use client"` — sticky sidebar rendered from `page.tsx`
- Three stacked cards: Contact, Education, Skills summary
- Contact: location line + 4 links (Email, LinkedIn, GitHub, Resume) with colored dot indicators
- Education: renders `education[]` — degree, field (gradient), institution, period, optional achievement badge
- Skills: grouped by category using `skills` object — each category colored with local `skillColors` record
- GitHub and LinkedIn icons are inline SVGs (duplicated from Hero and Contact)
- `eduGradients` array is hardcoded here independently of `edu.color` in data — see Quality Notes

### `Skills.tsx` — `src/components/Skills.tsx` _(currently not rendered)_

- Standalone full-section skills display (section id `#skills`)
- Renders same `skills` data as InfoPanel but as larger cards (1→2→3 col grid)
- Each category card shows header badge + individual skill chips, all color-coded
- Not imported in `page.tsx` — orphaned component

### `Education.tsx` — `src/components/Education.tsx` _(currently not rendered)_

- Standalone full-section education display (section id `#education`)
- Renders same `education` data as InfoPanel but in full cards with top accent bars
- Includes clickable institution name linking to `edu.url`
- Not imported in `page.tsx` — orphaned component

### `Contact.tsx` — `src/components/Contact.tsx` _(currently not rendered)_

- Standalone full-section contact display (section id `#contact`)
- 4-card grid: Email, LinkedIn, GitHub, Resume — each with gradient icon container
- Includes footer copyright line: `© {year} Pranav Thatavarti · Built with Next.js & Tailwind CSS`
- Not imported in `page.tsx` — orphaned component

---

## 3. Data Layer

**Single file:** `src/data/portfolio.ts`

All portfolio content is exported as typed constants. No runtime data fetching; everything is static.

### `personal` (object)

```ts
{
  name, title, tagline, location, email, phone,
  linkedin, github, resumeUrl,
  bio, bio2,
  interests: { label: string; emoji: string }[]
}
```

Used by: Navbar (resumeUrl), Hero (name, title, tagline, location, email, linkedin, github, resumeUrl), About (bio, bio2, interests), InfoPanel (all contact fields), Contact (email, linkedin, github, resumeUrl, location)

### `experience` (array)

```ts
{
  company, role, location, period,
  color: string,    // Tailwind gradient class e.g. "from-violet-500 to-indigo-600"
  bullets: string[]
}[]
```

4 entries: ICICI Lombard (Chief Manager), ICICI Lombard (Internship), Galaxeye, TCS.

### `Project` (type) + `projects` (array)

```ts
type Project = {
  title, subtitle,
  category: "Personal" | "Work" | "Academic" | "Analysis",
  summary,
  highlights?: string[],
  skills: string[],
  link?: string,
  duration?: string,
  color: string,     // Tailwind gradient class
  emoji: string,
  stats?: { label: string; value: string }[]
}
```

7 entries: Sentinel, Motor Claims Fraud Detection, AI Vehicle Inspection, PM Interview Prep Bot, Centrico, Tata Imagination Challenge, Eductive.

### `skills` (object)

```ts
Record<
  "Product Management" | "Design & Research" | "Data & Technical" | "Process & Leadership" | "Tools",
  string[]
>
```

5 categories, ~35 total skills. Used by InfoPanel and Skills.

### `education` (array)

```ts
{
  degree, field, institution, location, period,
  url: string,      // clickable institution link
  achievement: string,
  color: string     // Tailwind gradient class
}[]
```

2 entries: MBA (IIM Ranchi), B.Tech (GVP College of Engineering).

---

## 4. Styling Approach

### Tailwind CSS v4 + `globals.css`

File: `src/app/globals.css`

Tailwind v4 is imported via `@import "tailwindcss"` (new v4 syntax, no config file needed). No `tailwind.config.js` is present.

### CSS Custom Properties (design tokens)

```css
:root {
  --bg: #F8F7F4;       /* off-white page background */
  --surface: #FFFFFF;  /* card backgrounds */
  --border: #E4E4E7;   /* default borders */
  --text: #18181B;     /* primary text */
  --muted: #71717A;    /* secondary text */
  --accent: #6366F1;   /* indigo-500 */
  --accent2: #A855F7;  /* purple-500 */
}
```

### Global Utility Classes

Two reusable classes defined in globals.css — not Tailwind components:

**`.gradient-text`**
Indigo-to-purple gradient applied as text fill. Used on: logo "PT" (Navbar), name in Hero, section heading highlights (About, Experience, Projects, etc.), project subtitles.

**`.card`**
White surface + zinc border + 16px radius + hover lift effect (translateY -2px, box-shadow, border highlight to indigo). Used on virtually every content block.

**`.chip`**
Pill-shaped tag for skills/labels. Hover shifts border to indigo and background to `#EEF2FF`. Used on: About tags, project skill tags.

### Scrollbar Styling

Custom slim purple scrollbar (`width: 5px`, thumb `#C4B5FD`) applied globally.

### Conventions

- All spacing, typography, colors use Tailwind utility classes inline on JSX elements
- `zinc-*` scale used for neutrals (text, borders, backgrounds)
- `indigo-*` is the primary brand color
- Section backgrounds alternate: white → `bg-zinc-50/60` → white → etc.
- Motion animations follow a consistent pattern: `initial: { opacity: 0, y: 20/24 }`, `whileInView: { opacity: 1, y: 0 }`, `viewport: { once: true }`, stagger via `delay: i * 0.07–0.1`
- Each data item has a `color` string (Tailwind gradient classes) used for per-item visual variety

---

## 5. Assets

**`public/`**

| File | Used by | Notes |
|------|---------|-------|
| `pranav-formal.jpg` | `Hero.tsx` (`<Image src="/pranav-formal.jpg">`) | Formal headshot, 320×320 rendered |
| `pranav-casual.webp` | `About.tsx` (`<Image src="/pranav-casual.webp">`) | Casual photo, 400×480 rendered |
| `file.svg` | Not used | Next.js default scaffold asset |
| `globe.svg` | Not used | Next.js default scaffold asset |
| `next.svg` | Not used | Next.js default scaffold asset |
| `vercel.svg` | Not used | Next.js default scaffold asset |
| `window.svg` | Not used | Next.js default scaffold asset |

**`src/app/favicon.ico`** — favicon served at `/favicon.ico` (standard Next.js convention).

---

## 6. Quality Notes

### Orphaned Components (High Priority)

`Skills.tsx`, `Education.tsx`, and `Contact.tsx` are complete, well-built components that are **not imported anywhere in `page.tsx`**. The Navbar links to `#skills`, `#education`, and `#contact` anchors — those anchors don't exist in the rendered page. Clicking those nav links scrolls nowhere.

**Fix:** Import and render them in `src/app/page.tsx` inside the main scrollable column, in order: About → Experience → Projects → Skills → Education → Contact.

### Duplicated Inline SVG Icons

`GithubIcon` and `LinkedinIcon` SVG components are copy-pasted identically across:
- `src/components/Hero.tsx`
- `src/components/InfoPanel.tsx`
- `src/components/Contact.tsx`

**Fix:** Extract to `src/components/icons/SocialIcons.tsx` and import from there.

### Hardcoded Skill Tags in About.tsx

`About.tsx` line 37 hardcodes 6 skill tags inline as JSX strings ("Product Strategy", "Cross-functional Leadership", etc.) rather than pulling from the `skills` data in `portfolio.ts`.

**Fix:** Either derive from `portfolio.ts` (e.g., a `featuredSkills` array on the `personal` export) or document the intentional separation.

### `eduGradients` Duplicated in InfoPanel

`InfoPanel.tsx` defines its own `eduGradients` array `["from-violet-500 to-indigo-600", "from-orange-400 to-amber-500"]` instead of reading from `edu.color` already defined in the data layer. These are in sync now but can drift.

**Fix:** Replace with `edu.color` from the data array (already available).

### Unused Public Assets

5 SVG files from the Next.js scaffold (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) sit in `public/` unused. Safe to delete for cleanliness.

### No OpenGraph Image

`layout.tsx` defines OpenGraph metadata with title and description but no `og:image`. Social link previews will show no image when shared.

**Fix:** Add a 1200×630 OG image to `public/` and reference it in `layout.tsx` under `openGraph.images`.

### Single-Route Only

There are no additional routes beyond `/`. The `app/` directory has only `layout.tsx` and `page.tsx`. Project detail pages, blog, etc. would each need a new folder under `src/app/`.

### No Test Infrastructure

No test files, no testing library in `package.json`. Acceptable for a portfolio site, but worth noting if the codebase grows.

### `next.config.ts` is Empty

`next.config.ts` has no configuration set. No image domain allowlist, no redirects, no headers. If the resume URL on Google Drive or other external images are ever loaded via `next/image`, `remotePatterns` will need to be added.

### Contact Section Uses `target="_blank"` Without `rel="noopener noreferrer"` — Verified Safe

All external links in the components correctly include `rel="noopener noreferrer"`. No security issue here.
