---
wave: 1
depends_on: []
files_modified:
  - site/src/components/icons.tsx
  - site/src/components/Hero.tsx
  - site/src/components/InfoPanel.tsx
  - site/src/components/Contact.tsx
  - site/src/components/About.tsx
  - site/src/data/portfolio.ts
  - site/public/file.svg
  - site/public/globe.svg
  - site/public/next.svg
  - site/public/vercel.svg
  - site/public/window.svg
autonomous: true
requirements_addressed: [R2, R3, R7]
---

# Plan 01-P03 — Code Cleanup: Extract Icons, Fix Data Consistency, Remove Unused Assets

## Objective
Eliminate three code quality issues: (1) duplicated inline SVG icons across 3 files, (2) hardcoded `eduGradients` in InfoPanel that can drift from data, (3) hardcoded skill tags in About.tsx. Also delete 5 unused scaffold SVGs from `public/`.

## Tasks

<task id="P03-T01">
  <title>Create site/src/components/icons.tsx with shared social icons</title>
  <read_first>
    - site/src/components/Hero.tsx (lines ~6-14: GithubIcon and LinkedinIcon inline SVG definitions)
    - site/src/components/InfoPanel.tsx (lines ~6-15: identical GithubIcon and LinkedinIcon definitions)
    - site/src/components/Contact.tsx (has its own GithubIcon and LinkedinIcon inline SVGs)
  </read_first>
  <action>
    Create `site/src/components/icons.tsx` exporting two named components:
    - `GithubIcon` — the SVG from Hero.tsx (viewBox="0 0 24 24", fill="currentColor", className="w-4 h-4 shrink-0", GitHub path data)
    - `LinkedinIcon` — the SVG from Hero.tsx (viewBox="0 0 24 24", fill="currentColor", className="w-4 h-4 shrink-0", LinkedIn path data)
    Copy the exact SVG path data from Hero.tsx to ensure pixel-identical output.
    Both components accept no props (className is hardcoded as in the originals).
  </action>
  <acceptance_criteria>
    - `site/src/components/icons.tsx` exists and exports `GithubIcon` and `LinkedinIcon`
    - Both exports are React functional components with the correct SVG path data
  </acceptance_criteria>
</task>

<task id="P03-T02">
  <title>Update Hero.tsx to import GithubIcon and LinkedinIcon from icons.tsx</title>
  <read_first>
    - site/src/components/Hero.tsx (locate the inline GithubIcon and LinkedinIcon component definitions — remove them and add import)
    - site/src/components/icons.tsx (just created in P03-T01)
  </read_first>
  <action>
    In `site/src/components/Hero.tsx`:
    1. Remove the inline `GithubIcon` and `LinkedinIcon` component definitions (both const arrow functions with JSX SVG bodies)
    2. Add import at the top: `import { GithubIcon, LinkedinIcon } from "@/components/icons";`
    The JSX usage of `<GithubIcon />` and `<LinkedinIcon />` elsewhere in the file remains unchanged.
  </action>
  <acceptance_criteria>
    - Hero.tsx does not contain inline SVG component definitions for GithubIcon or LinkedinIcon
    - Hero.tsx imports GithubIcon and LinkedinIcon from "@/components/icons"
    - GithubIcon and LinkedinIcon render identically in Hero section (same className, same SVG output)
  </acceptance_criteria>
</task>

<task id="P03-T03">
  <title>Update InfoPanel.tsx: import icons from icons.tsx and replace eduGradients with edu.color</title>
  <read_first>
    - site/src/components/InfoPanel.tsx (current file — has inline GithubIcon/LinkedinIcon at lines ~6-15, and eduGradients at line ~25)
    - site/src/data/portfolio.ts (education array — each entry has a `color` field, e.g. "from-violet-500 to-indigo-600")
    - site/src/components/icons.tsx (just created)
  </read_first>
  <action>
    In `site/src/components/InfoPanel.tsx`:
    1. Remove the inline `GithubIcon` and `LinkedinIcon` component definitions
    2. Add import: `import { GithubIcon, LinkedinIcon } from "@/components/icons";`
    3. Remove the `const eduGradients = [...]` line
    4. In the Education render block (the `{education.map((edu, i) => ...)}` JSX), replace every occurrence of `eduGradients[i]` with `edu.color`
       — There are exactly 2 occurrences: the gradient div className and the gradient text className (lines ~73-78)
    The rest of InfoPanel.tsx (skillColors, contactLinks, JSX structure) remains unchanged.
  </action>
  <acceptance_criteria>
    - InfoPanel.tsx does not contain inline SVG GithubIcon/LinkedinIcon definitions
    - InfoPanel.tsx imports GithubIcon and LinkedinIcon from "@/components/icons"
    - InfoPanel.tsx does not contain the `eduGradients` array
    - Education entries in InfoPanel use `edu.color` for both gradient div and gradient text
    - InfoPanel renders visually identically (edu.color values match the removed eduGradients values: "from-violet-500 to-indigo-600" and "from-orange-400 to-amber-500")
  </acceptance_criteria>
</task>

<task id="P03-T04">
  <title>Update Contact.tsx to import icons from icons.tsx</title>
  <read_first>
    - site/src/components/Contact.tsx (locate inline GithubIcon and LinkedinIcon definitions — remove and replace with import)
    - site/src/components/icons.tsx (just created)
  </read_first>
  <action>
    In `site/src/components/Contact.tsx`:
    1. Remove the inline `GithubIcon` and `LinkedinIcon` component definitions
    2. Add import: `import { GithubIcon, LinkedinIcon } from "@/components/icons";`
    The JSX usage of these icons remains unchanged.
  </action>
  <acceptance_criteria>
    - Contact.tsx does not contain inline SVG component definitions for GithubIcon or LinkedinIcon
    - Contact.tsx imports GithubIcon and LinkedinIcon from "@/components/icons"
  </acceptance_criteria>
</task>

<task id="P03-T05">
  <title>Fix About.tsx hardcoded skill tags — add featuredSkills to portfolio.ts</title>
  <read_first>
    - site/src/components/About.tsx (line ~37: hardcoded array ["Product Strategy", "Cross-functional Leadership", "0 → 1 Products", "Data-driven Decisions", "User-centric Design", "P&C Insurance"])
    - site/src/data/portfolio.ts (personal export — currently has name, title, tagline, location, email, phone, linkedin, github, resumeUrl, bio, bio2, interests)
  </read_first>
  <action>
    1. In `site/src/data/portfolio.ts`, add a `featuredSkills` field to the `personal` object:
       `featuredSkills: ["Product Strategy", "Cross-functional Leadership", "0 → 1 Products", "Data-driven Decisions", "User-centric Design", "P&C Insurance"],`
       Place it after `bio2` and before `interests`.
    2. In `site/src/components/About.tsx`, replace the hardcoded array in the `.map()` call with `personal.featuredSkills`:
       Change: `{["Product Strategy", ...].map((tag) => (` 
       To: `{personal.featuredSkills.map((tag) => (`
    The tag chip rendering (className="chip") remains unchanged.
  </action>
  <acceptance_criteria>
    - `portfolio.ts` personal export contains `featuredSkills: string[]` with the 6 skill tags
    - `About.tsx` maps over `personal.featuredSkills` instead of a hardcoded array literal
    - The 6 skill chips render identically ("Product Strategy", "Cross-functional Leadership", "0 → 1 Products", "Data-driven Decisions", "User-centric Design", "P&C Insurance")
  </acceptance_criteria>
</task>

<task id="P03-T06">
  <title>Delete 5 unused scaffold SVGs from site/public/</title>
  <read_first>
    - site/public/ directory listing (verify these 5 files exist and are not referenced anywhere)
  </read_first>
  <action>
    Delete these 5 files from `site/public/`:
    - `file.svg`
    - `globe.svg`
    - `next.svg`
    - `vercel.svg`
    - `window.svg`
    Verify none are imported in any component (codebase-map confirms they are unused).
    Keep: `pranav-formal.jpg`, `pranav-casual.webp` — these are actively used.
  </action>
  <acceptance_criteria>
    - `site/public/` no longer contains file.svg, globe.svg, next.svg, vercel.svg, window.svg
    - `site/public/` still contains pranav-formal.jpg, pranav-casual.webp, favicon.ico (in app/)
    - grep for "file.svg|globe.svg|next.svg|vercel.svg|window.svg" in src/ returns no matches
  </acceptance_criteria>
</task>

## must_haves
```yaml
truths:
  - GithubIcon and LinkedinIcon have a single source of truth at site/src/components/icons.tsx
  - Hero.tsx, InfoPanel.tsx, Contact.tsx all import from icons.tsx — no inline SVG definitions
  - InfoPanel.tsx education cards use edu.color from the data layer (not a local array)
  - About.tsx skill tags are driven by personal.featuredSkills from portfolio.ts
  - 5 unused scaffold SVGs are deleted from public/
  - npm run build passes with no errors after these changes
```
