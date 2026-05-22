# Project: Pranav Thatavarti — Portfolio Website

## Overview
A personal portfolio website for Pranav Thatavarti, a Product Manager actively seeking PM roles. The site showcases work experience, projects, skills, and education in a clean, minimalistic design.

## Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS + Framer Motion
- **Deployment:** Vercel
- **Data:** Single source of truth at `site/src/data/portfolio.ts`

## Design System
- Light mode: `#F8F7F4` background, white cards, zinc text
- Accent: indigo-500 → purple-500 gradient
- Cards: white bg, border, hover shadow with indigo tint
- Typography: system font stack, tight tracking for labels

## Site Structure
```
/ (single page)
├── Navbar          — fixed, links to sections
├── Hero            — name, title, formal photo, CTAs
├── About           — casual photo, bio, interests
├── Experience      — timeline, 4 jobs
├── Projects        — 7 project cards
├── Skills          — grouped skill chips (ORPHANED — not in page.tsx)
├── Education       — 2 institutions (ORPHANED — not in page.tsx)
├── Contact         — 4 link cards (ORPHANED — not in page.tsx)
└── InfoPanel       — sticky sidebar: Contact + Education + Skills
```

## Key Files
- `site/src/data/portfolio.ts` — all content
- `site/src/app/page.tsx` — page composition
- `site/src/app/globals.css` — design tokens
- `site/public/` — pranav-formal.jpg, pranav-casual.webp
- `.planning/codebase-map.md` — detailed codebase analysis

## Owner
Pranav Thatavarti — PM portfolio, job-search critical

## Status
Active development. Core layout and data layer complete. Several components built but not wired into the page.
