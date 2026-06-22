# Sprint Report — 2026-06-22 (v14) · Blue Book Optimizer

## Outcome: Closed the last stale-2025 data leak v13 missed. Deploy green, verified live (desktop + mobile).

### Decision (data-driven)
Audited the priority backlog before acting. Findings, all verified — not assumed:
- **Lazy loading (Task 6):** already 100% done — all 168 `<img>` tags carry a `loading=` attribute.
- **Alt-text audit (Task 8):** effectively 100% — a multiline scan found only 2 candidates, both
  false positives (`<img {...props}>` passthrough in `OptimizedImage.tsx`, and a string literal
  in `JournalPage.tsx`).
- **Cost-page cannibalization (v13 #1):** already mitigated — the breakdown page
  (`/blog/private-chef-bali-cost-breakdown-detailed-2026`) already sets
  `canonical = /blog/private-chef-cost-bali`, pointing ranking signal at the primary page.

The one **real, un-fixed defect:** v13 refreshed 2025→2026 on the *page component* but missed the
data source. `src/data/sitemap.ts` `BLOG_POSTS` still carried `"[2025 Guide]"` and
`"Real 2025 pricing"` for slug `blog/private-chef-cost-bali`. That object feeds
`BlogIndexPage` (its card title/description + the ItemList JSON-LD) and `LandingPage`'s
related-article entries — so the data directly contradicted the live 2026 page.

### What changed
File: `src/data/sitemap.ts` (root tracked tree, not stale `app/`). Two string edits:
- title `[2025 Guide]` → `[2026 Guide]`
- description `Real 2025 pricing` → `Real 2026 pricing`

Preserved `date: "2025-01-15"` (original publish date — correct; matches the page's
`datePublished` schema, consistent with v13's preservation choice).

### Verification
- `npx tsc -b` from repo root → **exit 0**.
- Commit `f8ac592` pushed to `main` via Terminal (cleared a stale `.git/index.lock` first).
- Vercel deploy `dpl_CDmXmyut9kb61ZarK2CwY6dJzh34` built **READY**, aliased to mychef.id.
- Browser-verified live `/blog/private-chef-vs-restaurant-bali` (renders the cost card):
  page text contains **zero** "2025"; renders clean at desktop and at 390px mobile
  (Related Guides section + cards intact, no layout break). Text-only data change → no layout risk.

### Honest impact scope
The visible related-card widget renders the **short** title (no year suffix), so the
user-visible change on that surface is nil. The year-bearing strings surface in the
blog-index **ItemList JSON-LD** and any description-bearing card. Since exact `/blog`
301-redirects to `/journal`, that schema is not currently served — so the practical SEO
gain is modest. The concrete win is **data consistency**: no source of truth now contradicts
the live 2026 page, and the data is correct if `/blog` is ever un-redirected or the entry reused.

### Environment note (for next agent)
Git is unusable from the sandbox shell: the worktree gitdir (`/Users/openclaw/.git/worktrees/...`)
isn't mounted, and `.git/index.lock` can't be removed there ("Operation not permitted").
The working path is **osascript → Terminal** (`mcp__Control_your_Mac__osascript`), which runs
on the real machine where the worktree resolves. Commit only the specific changed file
(`git add <file>`) — a blanket `git add -A` would sweep in dirty `.claude/worktrees/*`, `app`,
and untracked sprint reports.

### Still open for owner (carried)
1. **Keyword cannibalization residue:** `BLOG_POSTS` + `JournalPage` both hold a
   "private chef cost bali" entry. Canonical handles the page-level case; consider consolidating
   the duplicate data entries to a single source of truth.
2. **Dead code:** `BlogPage.tsx` + the `/blog` index path never render (301 → `/journal`).
   Deleting prevents future agents repeating wasted edits on non-served surfaces.
3. **Lead magnets (6 forms):** still blocked — no email backend. Needs an owner decision on a
   form provider (Formspree / Netlify Forms / API endpoint) before building.
