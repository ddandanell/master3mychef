# PROJECT CONTROL STATUS

_Last verified: 2026-06-23 · HEAD `1bd1e65` = `origin/main` · Vercel READY on mychef.id_

## Production source of truth (PART 2 answers)

| # | Question | Answer (verified) |
|---|----------|-------------------|
| 1 | Which folder Vercel builds | Repo **ROOT** |
| 2 | Active `package.json` | Root `package.json` (`name: my-app`); build `npx playwright install chromium && tsc -b && vite build`; `postbuild` = validate-critical-assets + inject-meta + prerender |
| 3 | Active entry file | `index.html` → `/src/main.tsx` |
| 4 | Active routing | `src/App.tsx` (react-router, ~174 routes) |
| 5 | Is root `/src` production? | **Yes** |
| 6 | Is `app/` stale/duplicated/non-prod? | **Stale & non-production.** Own `.git`, divergent history, **0 commits in last 5 days**, 0 of the 5-day production changes touched it. Do not edit. |
| 7 | Nested `.git` folders | **Two:** `app/.git` and `Mychef Live/.git` (plus root `.git`) |
| 8 | Folder pointing to same remote but not deployed | `app/` remote = same `master3mychef.git` but does NOT deploy (root builds) |
| 9 | Uncommitted files | Only gitlink entries (`app`, `.claude/worktrees/...`) show as modified — **no production `src/` files uncommitted** |
| 10 | Production matches latest commit? | **Yes** — `1bd1e65` is HEAD, `origin/main`, and the live READY deploy aliased to mychef.id |

## Tracking / SEO snapshot
- **Tracking re-audited 2026-06-23.** `index.html` is **GTM-only** (`GTM-KCBNZBL9`); GA4 `G-W0PQH8ZKTF` is configured *inside* GTM (the ID in index.html is a comment). `index.html` not changed.
  - page_view = single (no manual `trackPageView` caller). OK.
  - `generate_lead` conversion **double-fire FIXED** (`Layout.tsx` global listener + 5 component onClicks → now listener-only, attribution via `data-source`). Verified tsc exit 0.
  - **Open:** `trackEvent` dual-sends to gtag + dataLayer — possible second GA4 hit if GTM forwards custom events; needs GTM Preview / GA4 DebugView (see KNOWN_ISSUES #3 / NEXT_ACTIONS #1).
- `robots.txt` present (allows Googlebot/Bingbot + AI crawlers); `sitemap.xml` = **151** URLs.
- `AggregateRating` present only in the **neutralized** `src/components/SeoHead.tsx` helper (no per-page rating; no legal-page review markup).
- Conversion: WhatsApp `wa.me/628113803488` (`+62 811-3803-488`) sitewide; `ExitIntentPopup` + `EmailCaptureBar` live.

## Content hub
- Live blog hub = **`/journal`** (`src/components/JournalPage.tsx`). `/blog` 301 → `/journal`. `src/components/BlogIndexPage.tsx` is vestigial behind that redirect. `src/pages/BlogPage.tsx` was deleted (`1bd1e65`).

## How to re-verify (run Skill 01 + 02)
```
cat .vercel/project.json ; grep main index.html ; git remote -v ; git branch --show-current
find . -maxdepth 3 -name .git -not -path ./.git
GIT_DIR=.git git log --since="5 days ago" --name-only --pretty=format: | grep -c '^app/'   # expect 0
```
