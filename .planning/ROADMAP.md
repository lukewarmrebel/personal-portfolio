# Roadmap

## Phase 1 — Fix & Polish (current)
**Goal:** All sections visible, no broken links, clean code, ready to deploy

### Tasks
1. Wire `Skills`, `Education`, `Contact` into `page.tsx` with correct `id` attributes
2. Remove duplicate sections from the two-column layout (InfoPanel sidebar stays, but full-page Skills/Education/Contact sections now render below it)
3. Fix `InfoPanel.tsx` — use `edu.color` from data instead of hardcoded `eduGradients`
4. Extract `GithubIcon` + `LinkedinIcon` SVGs to `site/src/components/icons.tsx`
5. Fix `About.tsx` skill tags — pull from data or simplify
6. Add OpenGraph metadata to `site/src/app/layout.tsx`
7. Clean up 5 unused scaffold SVGs from `public/`
8. Verify resume URL resolves correctly
9. Deploy to Vercel

### Success Criteria
- `npm run build` passes with no errors or warnings
- All 6 Navbar links scroll to visible content
- Vercel deployment URL is live and accessible
- OpenGraph preview renders on social share

## Phase 2 — Enhancements (post-launch, optional)
- Add analytics (Vercel Analytics or Plausible)
- Add subtle scroll progress indicator
- Improve mobile experience for Projects grid
- Add "Testimonials" or "Recommendations" section if content available
- Add favicon and manifest

---
**After Phase 1:** Run `/gsd:plan-phase 2` to plan enhancements.
