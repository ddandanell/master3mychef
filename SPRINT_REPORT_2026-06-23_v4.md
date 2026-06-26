# Sprint Report — 2026-06-23 v4 (Blue Book Optimizer)

**Canonical tree:** root `/src` · **Branch:** `main`, local in sync with `origin/main` (0 ahead / 0 behind) · **Net production change: none this run (blocked + no churn-free safe push available).**

## Headline
The site remains mature. Prior sprints already shipped every HIGH-priority Blue Book item in the canonical `/src` tree. This run did fresh verification, found **one genuinely actionable, low-risk SEO cleanup** (a non-canonical URL in the sitemap), and hit a **hard blocker** that prevents any autonomous commit. Per the unattended-run rule ("when in doubt, a report is the correct output"), I'm reporting rather than forcing a risky push.

## Blocker (why nothing was committed)
- **Git writes are not possible from the sandbox.** This working copy is a **git worktree** whose real gitdir lives at `/Users/openclaw/.git/worktrees/blissful-murdock-bc0139`, which is **outside the mounted folder** — so `git status`/`add`/`commit` fail from the sandbox. A stale `.git/index.lock` is also present and cannot be removed ("Operation not permitted").
- The documented fallback (osascript → Terminal on the real Mac) requires the owner to approve app access. **Owner is absent (scheduled run), so that path is unavailable.**
- Read-only git worked (log, rev-list): local `main` == `origin/main`, clean.

## Tree-discipline note (re-confirmed, 4th sprint running)
The task file instructs edits under `app/`. Per checked-in `CLAUDE.md`, **root `/src` is the only tree Vercel builds**; `app/` is a stale, non-deploying duplicate. All work/verification was done in `/src`. Editing `app/` would have zero live effect. **Recommend the owner archive `app/` so sprints stop being pointed at a dead tree** (it has ~106 uncommitted files — do not delete blindly).

## HIGH-priority Blue Book list — verified already complete in `/src`
| Item | State | Evidence |
|---|---|---|
| Private-chef-cost-Bali pricing guide | Done | `src/pages/blog/PrivateChefCostBaliPage.tsx` (570 lines), routed `/blog/private-chef-cost-bali`, in sitemap, prerendered |
| Chef profile pages | Done | `src/pages/ChefProfilePage.tsx` + `ChefsPage.tsx` |
| Lead magnets / email capture | Done (prior sprint) | ExitIntent + EmailCapture components |
| Corporate case studies | Done | `src/pages/CorporateCaseStudiesPage.tsx` |
| Testimonials/reviews + schema | Done | `src/pages/ReviewsPage.tsx`; self-serving AggregateRating already removed prior |

MEDIUM audit (alt text, lazy-loading, meta descriptions) was re-confirmed clean by the prior sprint with a parser; no regressions found.

## The one concrete, low-risk fix found this run (ready to apply)
**Keyword-cannibalization is already mitigated, but the sitemap is inconsistent with it.**

There are two cost pages, both routed under `/blog/*` and both targeting "private chef cost bali":
- **Primary:** `/blog/private-chef-cost-bali` → `src/pages/blog/PrivateChefCostBaliPage.tsx`
- **Secondary:** `/blog/private-chef-bali-cost-breakdown-detailed-2026` → `src/pages/PrivateChefCostBaliPage.tsx` (735 lines)

Good news: **both files set the identical** `CANONICAL = ${SITE}/blog/private-chef-cost-bali`. So the secondary correctly self-declares the primary as canonical — Google won't treat them as competing duplicates. ✅

Residual issue: the **non-canonical** secondary URL is still listed in `public/sitemap.xml`. Submitting a URL that canonicalizes elsewhere is a mixed signal (minor but real). 

**Recommended edit (safe, ~5 lines, no build/route impact):** delete the secondary URL's `<url>` block from `public/sitemap.xml`:
```
public/sitemap.xml  (lines 254–259)
  <url>
    <loc>https://mychef.id/blog/private-chef-bali-cost-breakdown-detailed-2026</loc>
    <lastmod>2026-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```
The page stays live and indexable via its canonical; it simply stops being independently advertised in the sitemap. (If the owner instead wants this URL to rank in its own right, the correct fix is the opposite: give it its **own** canonical — but that reintroduces cannibalization and needs an explicit owner call on which page is primary. Default recommendation: remove from sitemap.)

This change could not be applied this run because of the git blocker above; it's a <1-minute apply for the next attended session.

## Remaining open items — all require owner sign-off or manual verification (cannot be done unattended)
1. **Tracking P0** — fix shipped earlier; only open piece is **manual GA4 DebugView/Realtime confirmation** of a single `generate_lead` from a real device (needs Tag Assistant, not repo evidence).
2. **Archive `app/`** — owner sign-off (106 uncommitted files).
3. **~32 React routes 404 on direct access** (not prerendered, no SPA fallback). Several are internally linked — notably sitewide **Footer → `/join-our-team`**, plus `/villa-chef` ×3 and `/recommended-services`. Fix = prerender + add to sitemap the genuinely-wanted routes (smallest high-value fix). Needs owner decision on which routes are intended to be public before touching `scripts/prerender.ts`/`prerender.mjs`.
4. **Collapse vestigial `/blog` surface** — deliberate decision; retire `BlogIndexPage.tsx` and `/blog` entries so the cost-guide add→revert loop can't recur.

## Build / deploy health
No code changed this run; tree is identical to last verified-green state (`tsc -b` exit 0 per prior sprint, local == origin). Vercel prod last deployment READY.

## Conclusion
Disciplined output: **verification + one precisely-specified safe fix**, not churn. The blocker (sandbox can't write git; owner absent) is the gating issue for future autonomous sprints — resolving the worktree/`app/` situation would unblock real autonomous shipping.
