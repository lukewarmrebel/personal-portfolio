---
wave: 2
depends_on: [01-P01-wire-sections, 01-P02-opengraph, 01-P03-code-cleanup]
files_modified: []
autonomous: false
requirements_addressed: [R4, R6, R8]
---

# Plan 01-P04 — Build Verification + Vercel Deploy

## Objective
Verify `npm run build` passes clean, manually check mobile layout and Navbar scrolling, then deploy to Vercel and confirm the live URL works.

## Context
This is the final wave — all code fixes from Wave 1 must be complete before running this plan. The deploy step requires the Vercel CLI to be installed (`npm i -g vercel`) or can be done via the Vercel dashboard by importing the GitHub repo.

**R8 (resume URL):** `personal.resumeUrl` is now set to `/resume.pdf` and the file exists at `site/public/resume.pdf` — already resolved before Phase 1 planning.

## Tasks

<task id="P04-T01">
  <title>Run npm run build and fix any errors</title>
  <read_first>
    - site/src/app/page.tsx (verify Skills/Education/Contact are imported and used)
    - site/src/components/icons.tsx (verify it exports GithubIcon and LinkedinIcon)
  </read_first>
  <action>
    From `E:\Projects\Portfolio\site`:
    Run `npm run build`
    If errors appear:
    - TypeScript errors: fix type mismatches in the modified files
    - Missing imports: add the missing import statement
    - ESLint errors: fix the flagged lint issues
    Re-run until the build exits 0 with no errors or warnings.
    Note: The AGENTS.md in site/ warns this is Next.js 16 with breaking changes — if build errors reference unknown APIs, check node_modules/next/dist/docs/.
  </action>
  <acceptance_criteria>
    - `npm run build` exits 0
    - No TypeScript errors (tsc --noEmit passes)
    - No ESLint errors from next lint
    - Build output shows pages: /, and static assets
  </acceptance_criteria>
</task>

<task id="P04-T02">
  <title>Start dev server and verify all 6 Navbar links scroll correctly</title>
  <read_first>
    - site/src/components/Navbar.tsx (links: #about, #experience, #projects, #skills, #education, #contact)
    - site/src/app/page.tsx (verify all section ids are present in rendered output)
  </read_first>
  <action>
    From `E:\Projects\Portfolio\site`, start the dev server: `npm run dev`
    Open http://localhost:3000 in a browser.
    Click each Navbar link and verify it scrolls to the correct visible section:
    - "About" → About section (casual photo, bio)
    - "Experience" → Experience timeline
    - "Projects" → Projects card grid
    - "Skills" → Skills section (large skill category cards)
    - "Education" → Education full section
    - "Contact" → Contact 4-card grid with footer
    Also verify: "Download Resume" button in Hero and Navbar opens /resume.pdf without a 404.
    Fix any issues before proceeding.
  </action>
  <acceptance_criteria>
    - All 6 Navbar section links scroll to a visible, populated section
    - No section link scrolls to a blank area or nowhere
    - /resume.pdf returns the PDF file (not a 404)
    - Hero section and InfoPanel sidebar are both visible
  </acceptance_criteria>
</task>

<task id="P04-T03">
  <title>Verify mobile layout at < 768px</title>
  <read_first>
    - site/src/app/page.tsx (the flex-col lg:flex-row layout wrapper)
  </read_first>
  <action>
    With dev server running, open Chrome DevTools and set viewport to 375px (iPhone SE) or 390px (iPhone 14).
    Check:
    - Hero: text/photo layout collapses correctly to single column
    - InfoPanel: stacks below main content (not overlapping)
    - Projects grid: collapses to 1 column
    - Navbar: hamburger menu appears and opens/closes correctly
    - Skills section: cards visible and not overflowing
    - Contact section: 4-card grid collapses properly
    If any layout breaks, fix the Tailwind responsive classes in the affected component.
  </action>
  <acceptance_criteria>
    - Site renders without horizontal overflow at 375px viewport width
    - InfoPanel appears below Projects/Skills/Education/Contact on mobile (stacks vertically)
    - Navbar hamburger menu opens and closes
    - No text or cards are clipped or cut off on mobile
  </acceptance_criteria>
</task>

<task id="P04-T04">
  <title>Deploy to Vercel</title>
  <read_first>
    - site/package.json (verify build script and project name)
  </read_first>
  <action>
    Option A — CLI (preferred):
    1. Ensure Vercel CLI is installed: `npm i -g vercel`
    2. From `E:\Projects\Portfolio\site`, run: `vercel --prod`
    3. On first run: authenticate, set project name (e.g., "pranav-portfolio"), confirm root directory is `site/` or run from within `site/`
    4. After deploy completes, copy the production URL (e.g., `https://pranav-portfolio.vercel.app`)

    Option B — Dashboard:
    1. Push to GitHub (commit all Phase 1 changes first)
    2. Go to vercel.com/new, import the GitHub repo
    3. Set root directory to `site/`
    4. Deploy

    After deploy:
    - Update `metadataBase` URL in `layout.tsx` with the real Vercel URL
    - Rebuild and redeploy if metadataBase was a placeholder
  </action>
  <acceptance_criteria>
    - Vercel deployment URL is live and accessible in a browser
    - Home page loads correctly at the Vercel URL
    - All 6 section links work at the deployed URL
    - /resume.pdf is accessible at the deployed URL
    - OpenGraph preview shows Pranav's photo when URL is pasted in LinkedIn/Twitter/Slack
  </acceptance_criteria>
</task>

## must_haves
```yaml
truths:
  - npm run build exits 0 with no errors before deploy
  - All 6 Navbar section links scroll to visible content
  - Site is accessible at a live Vercel URL
  - /resume.pdf resolves at the deployed URL
```
