---
wave: 1
depends_on: []
files_modified:
  - site/src/app/page.tsx
autonomous: true
requirements_addressed: [R1]
---

# Plan 01-P01 — Wire Orphaned Sections into page.tsx

## Objective
Import and render the `Skills`, `Education`, and `Contact` components in `page.tsx` so that all Navbar links (`#skills`, `#education`, `#contact`) scroll to visible sections.

## Context
`Skills.tsx`, `Education.tsx`, and `Contact.tsx` are fully built but not imported in `page.tsx`. The Navbar has links to `#skills`, `#education`, `#contact` that currently scroll nowhere. These sections must be rendered in the main scrollable column, below `Projects`.

## Tasks

<task id="P01-T01">
  <title>Wire Skills, Education, Contact into page.tsx</title>
  <read_first>
    - site/src/app/page.tsx (current page composition — has About, Experience, Projects, InfoPanel)
    - site/src/components/Skills.tsx (has section id="skills")
    - site/src/components/Education.tsx (has section id="education")
    - site/src/components/Contact.tsx (has section id="contact", includes footer copyright line)
  </read_first>
  <action>
    In `site/src/app/page.tsx`:
    1. Add three imports at the top alongside existing imports:
       `import Skills from "@/components/Skills";`
       `import Education from "@/components/Education";`
       `import Contact from "@/components/Contact";`
    2. In the main scrollable column `<div className="flex-1 min-w-0 space-y-0">`, append after `<Projects />`:
       `<Skills />`
       `<Education />`
       `<Contact />`
    Order must be: About → Experience → Projects → Skills → Education → Contact.
  </action>
  <acceptance_criteria>
    - `page.tsx` imports Skills, Education, Contact from "@/components/..."
    - Skills, Education, Contact are rendered in the main column after Projects
    - `#skills`, `#education`, `#contact` anchors exist in the DOM (they are defined in the component files — just need to be rendered)
    - Dev server shows all 6 sections on the page
  </acceptance_criteria>
</task>

## must_haves
```yaml
truths:
  - Skills, Education, Contact are rendered in the main scrollable column of page.tsx
  - Render order: About → Experience → Projects → Skills → Education → Contact
  - No existing sections removed or reordered
  - page.tsx imports are clean (no duplicate or unused imports)
```
