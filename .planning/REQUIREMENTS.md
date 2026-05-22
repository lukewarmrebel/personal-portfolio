# Requirements

## Goal
Ship a polished, live portfolio at Vercel as fast as possible. The site must be complete, bug-free, and impressive to PM hiring managers.

## Must-Have (P0)

### R1 — Wire up orphaned sections
- `Skills`, `Education`, and `Contact` components must be rendered in `page.tsx`
- Navbar links (`#skills`, `#education`, `#contact`) must scroll to visible sections
- **Why:** These sections are fully built but invisible — the Navbar currently links to nowhere

### R2 — Fix sidebar / full-page data consistency
- `InfoPanel.tsx` uses a hardcoded `eduGradients` array instead of `edu.color` from the data layer — sync these
- `About.tsx` has 6 hardcoded skill tags — pull from `skills` data or remove

### R3 — Extract shared SVG icons
- `GithubIcon` and `LinkedinIcon` are copy-pasted in Hero, Contact, and InfoPanel
- Extract to `site/src/components/icons.tsx` and import everywhere

### R4 — Vercel deployment
- Site must deploy successfully to Vercel with no build errors
- Custom domain or default `.vercel.app` URL acceptable

### R5 — OpenGraph metadata
- Add `<title>`, `<meta description>`, and `og:image` in `site/src/app/layout.tsx`
- og:image: use the formal photo or a generated card

## Should-Have (P1)

### R6 — Mobile layout QA
- Verify Hero, Projects grid, and InfoPanel collapse gracefully on < 768px
- InfoPanel should stack below main content on mobile (already coded, verify it works)

### R7 — Clean up unused assets
- Remove 5 unused Next.js scaffold SVGs from `public/` (file.svg, globe.svg, next.svg, vercel.svg, window.svg)

### R8 — Resume link works
- `personal.resumeUrl` must point to a real, downloadable PDF (either hosted on Vercel or an external URL)

## Out of Scope
- CMS or dynamic content
- Dark mode
- Blog or writing section
- Contact form (mailto link is sufficient)
- Analytics (can add post-launch)
