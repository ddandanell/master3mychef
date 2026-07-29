# SEO Autopilot Log

State file for the `mychef-seo-autopilot` scheduled task. Each run appends one entry.
Its purpose is the **data gate**: before making any change, a run compares current Semrush
figures against the last entry here. If nothing has refreshed, the run makes no content or
metadata changes — rewriting against unchanged data delays Google's reassessment rather than
helping it.

Semrush project (site audit campaign): `30621470` · domain `mychef.id`

**Per-URL cooldown:** do not rewrite a page's title or description more than once per 14 days
unless data clearly shows it underperforming. Check the "URLs touched" column before editing.

---

## Run 2026-07-29 20:40–20:52 UTC (manual "run now", first run)

**Data gate: PASSED — data was fresh.** Two audit snapshots available, 50 minutes apart:

| Snapshot | Finished (UTC) |
|---|---|
| `6a6a62ee3bfffa0de6a416a4` (current) | 2026-07-29 20:38:05 |
| `6a6a56a4a35d0760f593c5cf` (previous) | 2026-07-29 19:47:51 |

**Site health: 97 (delta +2).** 100 pages crawled, ~100 checks run. Only 8 checks had a
non-zero count — consistent with the standing note that most of this campaign's checks pass.

| ID | Issue | Count | Assessment |
|---|---|---|---|
| 204 | Hreflang language mismatch | **94** (all pages) | Real. Fix existed in code but was **not deployed** — see below |
| 112 | Low text-to-HTML ratio | 66 | Inherent to a React SPA. Not a defect; no action |
| 45 | Structured data markup errors | 3 | Real — `provider` objects missing required `address` |
| 213 | Pages with only one internal link | 4 | Real, low risk |
| 216 | Links with no anchor text | 3 | Real — homepage portal cards using `aria-label` only |
| 4 | Blocked from crawling | 2 | Includes `/join-our-team`, which was noindex **and** in sitemap |
| 105 | Duplicate content in h1 and title | 1 | Real — wedding planning guide |
| 223 | Content not optimized | 1 | Advisory |

**Excluded as crawler noise (standing ruling):** `wa.me/6289674072020` "broken external links".
The URL returns 200 on direct fetch; Semrush's crawler is rate-limited by WhatsApp. Excluded in
the campaign. Never "fix" these.

### Principal finding: a completed fix was sitting undeployed

Commit `650ba745` ("fix(seo): clear the real Semrush audit findings") existed locally and had
been pushed to `origin/fix/concierge-widget-mobile`, but **not to `main`**. This project only
builds `main` — branch previews are not configured — so none of it was live. The 94-page
hreflang mismatch was still being served.

Action taken: reviewed the diff, verified `npx tsc -b` exit 0, pushed to `main`.

- **Commit shipped:** `650ba745`
- **Deployment:** created 20:51:39 UTC, reached **READY**
- **URLs touched:** sitewide (hreflang, both generators) · `/join-our-team` (indexation) ·
  homepage portal cards + journal grid · `/blog/wedding-private-chef-bali-planning-guide` (title)
- **What it fixed:** hreflang `id` alternate removed from both `inject-meta.ts` (prerender) and
  `SeoHead.tsx` (client); six inline `provider` objects replaced with the `providerRef` `@id`
  so they resolve against the `#business` node that carries the address; `/join-our-team`
  removed from `noindexNoFollowPaths`; anchor text moved from `aria-label` into `sr-only` spans;
  four thin-inbound-link blog posts surfaced in the homepage journal grid; duplicate h1/title
  aligned.

### Concurrency note — read this before the next run

Two agent sessions were active in this repo simultaneously (`gracious-trusting-feynman` and
`wizardly-practical-rubin`). Consequences observed, all of which the next run should expect:

1. Two abandoned zero-byte `.git/index.lock` files blocked commits until removed.
2. `credential.helper` was repointed to the *other* session's path mid-run, breaking `git push`
   with "could not read Username". Repoint before pushing:
   `git config credential.helper "store --file=$(pwd)/.git/credentials-master3mychef"`
3. A finished fix was left on a feature branch and never reached production. **Always check
   `git rev-list --left-right --count origin/main...HEAD` and confirm the newest commit is on
   `origin/main`, not just committed locally.**

### Not done, deliberately

- **id 112 (66 pages, low text-to-HTML ratio)** — a structural property of a React SPA, not a
  content defect. "Fixing" it means padding copy or stripping markup. No action.
- **id 223, id 4 (remaining)** — advisory; need an owner view before acting.
- Verification that the hreflang fix cleared is **pending the next Semrush recrawl**. The
  current snapshot finished 20:38, before the 20:51 deploy, so its 94-count reflects the old
  code. Expect 204 to drop to 0 on the next crawl. Do not "re-fix" it in the meantime.

### Open, needs an owner ruling

- **`/catering/retreat-catering` minimum.** The page says only "Minimum booking applies" — the
  one catering entry point with no number. Logged as Q7 in `CONTRADICTION-REGISTER.md`.

---

## Run 2026-07-29 20:56 UTC (manual "run now", second run)

**Outcome: NO CHANGES MADE. This is the correct result, not a failed run.**

**Data gate: CLOSED for site audit.** `snapshots` returned the same two IDs as run 1
(`6a6a62ee3bfffa0de6a416a4`, `6a6a56a4a35d0760f593c5cf`) — no recrawl in the interval, as
expected. Semrush audits recrawl roughly daily. Per the gate rule, nothing the audit flagged was
touched. Notably id 204 (hreflang, 94 pages) was **not** re-fixed: the fix shipped in run 1 and
its snapshot predates the deploy.

**New data examined instead:** `organic_research/resource_organic`, database `id`, positions 4–20
(striking distance), sorted by volume. Eight keywords returned:

| Keyword | Pos | Vol | Ranking URL | KD |
|---|---|---|---|---|
| private chef | 13 | 320 | `/jakarta` | 30 |
| chef private | 13 | 320 | `/jakarta` | 30 |
| private chef bali | 11 | 170 | `/canggu` | 28 |
| chef recommendation | 19 | 140 | `/` | 13 |
| corporate buffet | 16 | 40 | `/catering` | 11 |
| private chef jakarta | 7 | 30 | `/locations/jakarta` | 17 |
| chef's table bali | 15 | 30 | `/fine-dining/chefs-table` | 18 |
| baby bar catering | 5 | 30 | `/events/baby-showers` | 17 |

### Investigated and dismissed — do not re-open

**The Jakarta URLs are stale Semrush attribution, not a live problem.** Jakarta was deliberately
and completely exited. Verified in `src/data/redirects.ts`:

- line 296 — `/locations/jakarta` → `/` ("Jakarta location focus removed")
- line 299 — `/jakarta` → `/` ("Jakarta focus removed; still earned 16 clicks/28d into a 404")
- line 294 — `/journal/private-chef-jakarta-guide` → `/`

There is no `page-meta.ts` entry, no route in `App.tsx`, and no `sitemap.xml` entry for either
Jakarta URL. Semrush's index still attributes those keywords to URLs that now 301. **Do not
"fix" this by restoring a Jakarta page — that would reverse a deliberate business decision.**

**`/canggu` for "private chef bali" (170/mo, pos 11)** — `/canggu` → `/locations/canggu`
(`redirects.ts:44`), which is correct and consistent. This also sits inside the **D-010
consolidation experiment opened 2026-07-29 with a stated 4–6 week observation window**. Touching
`private chef {area}` routing now would destroy the experiment's signal. Leave it until roughly
2026-09-09 unless the owner rules otherwise.

### Genuine opportunity, needs an owner decision (not an autopilot call)

`private chef` and `chef private` are 320/mo each — the highest-volume terms the site touches —
and currently resolve to the homepage via a redirect from a decommissioned URL, at position 13,
KD 30. Deciding which URL should own a generic, city-less "private chef" query is a positioning
question with cannibalisation risk against `/private-chef/*` and `/locations/*`. Flagged for the
owner; autopilot should not unilaterally pick a target for it.
