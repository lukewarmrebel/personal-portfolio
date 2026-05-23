---
wave: 1
depends_on: []
files_modified:
  - site/src/app/layout.tsx
autonomous: true
requirements_addressed: [R5]
---

# Plan 01-P02 — Add OpenGraph Image Metadata

## Objective
Add `og:image` to the `metadata` export in `layout.tsx` so social sharing previews show Pranav's photo.

## Context
`layout.tsx` already has `openGraph.title` and `openGraph.description` but no image. Social share previews (LinkedIn, Twitter, Slack) show a blank preview. The formal headshot `/pranav-formal.jpg` is already in `public/` and is a suitable OG image.

## Tasks

<task id="P02-T01">
  <title>Add og:image to layout.tsx metadata</title>
  <read_first>
    - site/src/app/layout.tsx (current metadata export — has openGraph title/description, no images key)
  </read_first>
  <action>
    In `site/src/app/layout.tsx`, extend the `openGraph` object in `metadata` to add:
    ```
    images: [
      {
        url: "/pranav-formal.jpg",
        width: 800,
        height: 800,
        alt: "Pranav Thatavarti — Product Manager",
      },
    ],
    url: "https://pranav.vercel.app",
    ```
    Also add a top-level `metadataBase` before the `metadata` const:
    `export const metadataBase = new URL("https://pranav.vercel.app");`
    — or add it inside metadata as `metadataBase: new URL("https://pranav.vercel.app")`.
    Use the Next.js 15+ pattern: set `metadataBase` on the `metadata` object so relative `/pranav-formal.jpg` resolves to an absolute URL.
    The exact Vercel URL will be updated after deploy; the placeholder URL is fine for now.
  </action>
  <acceptance_criteria>
    - `layout.tsx` metadata contains `openGraph.images` with at least one entry pointing to `/pranav-formal.jpg`
    - `metadataBase` is set (either as a standalone export or inside the metadata object)
    - `npm run build` does not warn about missing metadataBase for relative OpenGraph images
  </acceptance_criteria>
</task>

## must_haves
```yaml
truths:
  - layout.tsx metadata.openGraph.images contains /pranav-formal.jpg
  - metadataBase is configured so relative image paths resolve to absolute URLs
  - No other metadata fields are removed or altered
```
