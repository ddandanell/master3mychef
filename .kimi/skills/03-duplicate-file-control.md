# Skill 03 — Duplicate File Control

**Purpose:** Stop the recurring problem of creating a second copy of a page/component/data that already exists (root vs `app/`, BlogPage vs BlogIndexPage, two cost pages).

**When to use:** Before creating ANY new page, component, data file, or image set.

## Known duplication traps
- Two parallel app trees: root `/src` (live) and `app/src` (dead). Always edit root.
- Two cost pages: `src/pages/PrivateChefCostBaliPage.tsx` (route `/blog/private-chef-bali-cost-breakdown-detailed-2026`) and `src/pages/blog/PrivateChefCostBaliPage.tsx` (route `/blog/private-chef-cost-bali`). Know which one before editing.
- Blog vs Journal: `/blog/*` legacy vs `/journal/*` live hub.

## Checklist
1. `find src -iname "*<keyword>*"` for the thing you intend to create.
2. `grep -rn "<proposed slug or title>" src/` — does the route/slug already exist?
3. `grep -rn "<component name>" src/App.tsx` — is it already routed?
4. Check `src/data/sitemap.ts` / `redirects.ts` for an existing entry.
5. If it exists: REUSE/extend it. If a near-duplicate exists: extend the live one, do not fork.

## Verification
- Zero matching existing file/route/slug, OR a clear decision to extend the existing one.

## Output
"No duplicate found, creating <file>" OR "Already exists at <path> (route <x>); extending it instead."
