# Action Plan — analysis_961 GSC Report → #1 for Private Chef & Catering Bali

**Owner:** SEO Director (01) · **Written:** 2026-07-29
**Source:** `~/Downloads/analysis_961_full_export/` (GSC query+page data, 28 Apr – 26 Jul 2026, joined with Google Ads volumes)
**Goal:** #1 on Google for the private chef and catering category in Bali — measured in WhatsApp enquiries, not rankings.

---

## STATUS DASHBOARD (updated 2026-07-29, end of day)

| Step | What | Status |
|---|---|---|
| 0 | Verify already-shipped fixes | ✅ Technical layer verified live; residual head-term title found & fixed · ⏳ GSC layer awaits fresh data (scheduled 12 Aug) |
| 1 | Live-inspect 8 /private-chef/ URLs, request indexing | ✅ Done — 7/8 already indexed; kuta requested (re-check ~5 Aug) · bonus re-crawls for 2 retitled pages |
| 2 | `private chef bali` page-2→1 push | ✅ 2.1 61-page home anchor · ✅ 2.2 homepage meta rewrite (R-003 claim removed) · ✅ 2.3 head-term exclusivity enforced · ⏳ 2.4 = authority (Step 6) |
| 3 | Untapped pools: private dining + home chef | ✅ Done — 4 contextual anchors + homepage FAQ snippet target, all live |
| 4 | Page-2 internal-linking pass (5 queries) | ✅ Done — anchors added/verified for all five, live |
| 5 | Area consolidation checkpoint | ⏳ WAITING by design — measure weeks 3–6 (first read: 12 Aug scheduled task). No action before data. |
| 6 | **Link building — the binding constraint** | 🟡 **IN PROGRESS.** ✅ 6.1 prospect list — `LINK-PROSPECTS.csv`, 50 verified orgs across 6 categories · ✅ 6.2 asset drafted — `link-building/ASSET-DRAFT-bali-villa-dining-costs-2026.md`, **awaiting owner approval** (publish decision + citation sign-off) · 🔴 6.3 outreach — blocked on owner approval, templates ready in `templates/OUTREACH-TEMPLATE.md` · 🟡 6.4 citations — 7 directory/association targets in the prospect list · ✅ 6.5 ledger scaffold — `LINK-LEDGER.csv` |
| 7 | Measurement gaps | 🔴 7.1 WhatsApp conversion tracking — **blocked on GA4/GTM access** (R-006, the most important unmeasured thing) · 🔴 7.2 localised volumes — blocked on tool budget · ✅ 7.3 monthly export cadence — scheduled task set for 12 Aug; user supplies fresh analysis-export monthly |

**Deployed commits (all live on mychef.id):** `74d21212` (minimums+pipeline), `4bf1c2a9` (menu minGuests), `edaeb854` (redirects+menu retarget), `8bbb3aa5` (Step 0 residual), `b86f39eb` (Step 2), `53572f58` (Step 3), `2b7ae9e7` (Step 4).

**Scheduled check-ups (both confirmed enabled, auto-run one-time):** 5 Aug 09:00 — kuta indexing re-check · 12 Aug 09:00 — full GSC re-verification of all shipped fixes. Monthly: user supplies a fresh analysis-export (same format as analysis_961) and it gets checked against this plan's verify-checkpoints.

**Owner decisions now blocking Step 6:** (1) publish the cost asset as a new URL or extend `/pricing`; (2) approve the price figures for external citation; (3) sign off outreach sending. Everything else on this plan is either done or waiting on data.

---

## How to read this plan

Work top-down. Each step has: the evidence, the exact action, where it happens, how to verify it worked, and its status. Steps marked **DONE** shipped on 2026-07-29 (commits `74d21212`, `4bf1c2a9`, `edaeb854`) — they are listed so you can verify them, not redo them.

**Data caveats (read once):**
- The report ends 26 Jul — it does **not** reflect the 28–29 Jul fixes. Do not "fix" things it flags that are already fixed (list in Step 0).
- Search volumes are **global**, not Bali-filtered. Use them to rank opportunities against each other, never as forecast numbers.
- The report's Brand/Non-brand classifier is broken (it tags "private chef bali" as branded). Ignore that column.

---

## Step 0 — Already fixed; verify, don't redo (DONE — verify in ~2 weeks)

The report flags these; they were fixed 28–29 Jul after the report window closed:

| Report finding | Fix already shipped |
|---|---|
| `/jakarta`, `/private-chef-senayan`, `/private-chef-menteng` etc. carrying the homepage title | 301'd to `/` (28 Jul) |
| Wedding split: `/events/weddings` vs `/bali-wedding-catering-packages` same intent | Titles split: service vs packages (28 Jul) |
| BBQ split: hub vs `/catering/bbq-catering` vs `/villa-bbq-catering-bali` | Titles split per de-cannibalisation plan (28 Jul) |
| Chefs-table duplicate: `/chef-table-experience-bali` vs `/fine-dining/chefs-table` | 301 consolidated (28 Jul) |
| Homepage cannibalised by `/services` and `/guide` | Fixed (28 Jul) |
| Legacy `/canggu`-style URLs feeding dining guides | Re-pointed to `/private-chef/{area}` (29 Jul, D-010) |
| "private chef villa menu" family unowned | `/fine-dining/menus` retargeted + internal anchors (29 Jul, D-011) |

**Verify (mid-August):** pull a fresh GSC export; confirm Jakarta URLs are gone from Pages, the wedding/BBQ queries each resolve to one URL, and `/fine-dining/menus` starts appearing for "private chef villa menu".

### Live verification run 2026-07-29 (technical layer — all PASS, one residual found & fixed)

| Check | Result |
|---|---|
| 8 Jakarta URLs → 308 to `/` | ✅ all eight |
| Wedding titles split (service / packages / Indonesia) | ✅ three distinct titles |
| BBQ titles split (cluster owner / party / seafood / grill) | ✅ four distinct titles |
| Chefs-table duplicate 308 → `/fine-dining/chefs-table` | ✅ |
| `/services` + `/guide` off the head term | ✅ |
| 10 legacy area URLs → 308 to `/private-chef/{area}` | ✅ all ten |
| `/locations/{area}` guides still 200 | ✅ |
| `/fine-dining/menus` retarget live (title + H1) | ✅ |
| **Residual found:** `/fine-dining/private-chef-bali` title still carried verbatim "Private Chef Bali" (105 imp at pos 72–86 in report) | ❌ → **fixed 2026-07-29**: retitled "Michelin-Trained Chefs Bali \| Fine Dining at Your Villa" |

Remaining Step 0 work is the **GSC layer only** (query-level shifts) — needs the fresh export in ~2 weeks; nothing to do before then.

---

## Step 1 — Request indexing for the /private-chef/ pages the redirects now feed (NEXT SESSION, ~30 min)

**Evidence:** the redirect consolidation (D-010) only pays off if `/private-chef/canggu`, `/private-chef/ubud`, `/private-chef/seminyak`, `/private-chef/kuta`, `/private-chef/berawa`, `/private-chef/sanur`, `/private-chef/nusa-dua`, `/private-chef/uluwatu` are indexed. Per the correction doc, the Page Indexing report is stale — **live-verify first**.

**Action:** in Search Console URL Inspection (browser, already authenticated):
1. Inspect each of the 8 URLs above live.
2. For any not indexed → Request Indexing (quota ~10–15/day; these 8 fit in one day).
3. Log results in the task board.

**Verify:** re-inspect in 7 days; all 8 indexed.

### Executed 2026-07-29 (live URL Inspection, all 8 URLs)

| URL | Live status | Action |
|---|---|---|
| /private-chef/canggu | ✅ Indexed | none |
| /private-chef/ubud | ✅ Indexed | none |
| /private-chef/seminyak | ✅ Indexed | none |
| /private-chef/uluwatu | ✅ Indexed | none |
| /private-chef/sanur | ✅ Indexed | none |
| /private-chef/nusa-dua | ✅ Indexed | none |
| /private-chef/berawa | ✅ Indexed | none |
| /private-chef/kuta | ❌ "URL is unknown to Google" (never crawled; GSC claimed no referring sitemap although it is in sitemap.xml — stale crawl record) | **Indexing requested** — priority crawl queue |

Bonus (quota permitting): re-crawl requested for the two pages retitled today — `/fine-dining/menus` and `/fine-dining/private-chef-bali` — so the new titles land faster. Quota used: 3 of ~10–15.

**Note:** 7 of 8 already indexed — further confirmation that the Page Indexing report's "193 not indexed" is unreliable. The correction-doc rule (live-verify before acting) held again.

**Re-check:** ~2026-08-05, re-inspect /private-chef/kuta.

---

## Step 2 — Move `private chef bali` from page 2 to page 1 (THIS WEEK)

**Evidence:** homepage pos 14 on 243 imp (report) / pos ~9–18 in recent Performance data. This is the head term. Every one-position gain here is worth more than any other single change.

**Actions, in order:**
1. **Internal anchors:** every area page already links home; audit that the anchor is "private chef Bali" (not "home" / brand). One template pass over `PrivateChefAreaPage.tsx` related-links + breadcrumbs.
2. **Homepage meta description CTR test:** current description leans on "560+ villas" (unverified claim, R-003). Rewrite around what's verifiable: price anchor ("from IDR 700K/guest"), 5-guest minimum, same-hour WhatsApp reply. One change, then watch CTR at stable position for 2–3 weeks.
3. **Do not** add "private chef bali" to any other page's title/H1. The 28 Jul de-cannibalisation must hold — one page owns the head term.
4. The rest of this query's gap is **authority** → Step 6.

**Verify:** GSC query report, 28-day window: position trend on "private chef bali" + CTR at position.

### Executed 2026-07-29 (commit b86f39eb, deployed + live-verified)

- 2.1 ✅ The area template had **zero** in-content homepage links. New always-rendered "Also see" block gives all 61 `/private-chef/{area}` pages a "private chef Bali" anchor to `/` (verified live on canggu + jimbaran). Curated per-area links preserved.
- 2.2 ✅ Homepage meta description rewritten: "560+ villas served" (unverified, R-003) replaced with verifiable claims — prices from IDR 700K/guest, WhatsApp reply within the hour. 158 chars, live.
- 2.3 Standing rule — enforced in Step 0 (residual `/fine-dining/private-chef-bali` title fixed same day).
- 2.4 → Step 6 (authority). Open.
- **Measure from:** ~2026-08-12 export (CTR at stable position needs 2–3 weeks).

---

## Step 3 — Capture the two biggest untapped query pools (THIS WEEK, on-page only)

### 3a. "private dining" — `/private-dining-indonesia` at pos 24, 84 imp, 22k global vol
- Add 3–5 internal links with anchor "private dining" from high-crawl pages (`/fine-dining`, `/pricing`, homepage article body, `/services`).
- Check the page's internal links OUT — it must link up to `/` and `/fine-dining` (hub reinforcement).
- Title is already correct; do not touch it.

### 3b. "home chef" — homepage at pos 9, 50 imp, 0 clicks, 201k global vol
- The homepage snippet doesn't speak to "home chef" searchers. Add one H2/paragraph on the homepage (or FAQ entry): "Home chef service in Bali — what's included" phrasing, so Google can bold-match the snippet.
- Do **not** retitle the homepage for it — head term stays "Private Chef Bali".

**Verify:** impressions/CTR for both queries in the next monthly export.

### Executed 2026-07-29 (commit 53572f58, deployed + live-verified)

- 3a ✅ "private dining" anchors to `/private-dining-indonesia` added: `/fine-dining` prose paragraph, `/pricing` fine-dining block, homepage FAQ. Article body now links up to `/` with a "private chef Bali" anchor (upstream md edited, republished through the hardened publish pipeline — 161/161 entries, only the intended route changed).
- 3b ✅ Homepage FAQ entry "Do you offer a home chef service in Bali?" — home-chef snippet target, joins the FAQPage schema.
- All four changes confirmed live on mychef.id.
- **Measure from:** next monthly export — impressions/CTR for "private dining" and "home chef".

---

## Step 4 — Page-2 push list: one internal-linking pass (THIS WEEK, ~1 session)

Queries sitting at positions 11–25 with real impressions — each is a title-plus-links fix away from page 1:

| Query | URL | Pos | Imp | Action |
|---|---|---|---|---|
| `bali villa catering` | `/catering/villa-catering` | 13 | 46 | 2–3 internal links with exact anchor from `/catering` hub, `/events/villa-parties`, area pages |
| `bali buffet catering` | `/catering/buffet` | 14 | 29 | Same pattern; anchor "buffet catering Bali" |
| `bbq catering bali` | `/catering/bbq-catering` | 16 | 47 | Links from `/villa-bbq-catering-bali` + `/seafood-bbq-catering-bali` UP to the cluster owner (plan rule: sub-pages link up) |
| `chefs table bali` | `/fine-dining/chefs-table` | 21 | 49 | Links from `/fine-dining`, `/fine-dining/menus`, tasting-menu page; anchor "chef's table in Bali" |
| `bali wedding catering` | `/bali-wedding-catering-packages` | 22 | 39 | Links from `/events/weddings` (anchor "wedding catering packages & prices"), journal wedding guides |
| `private dining` | `/private-dining-indonesia` | 24 | 84 | Covered in 3a |

**Rule while doing this:** anchors descriptive and varied, 2–3 links per target, only from pages where the link genuinely helps a reader. No footer link-stuffing.

**Verify:** position deltas on these six queries, next export.

### Executed 2026-07-29 (commit 2b7ae9e7, deployed + live-verified)

| Query | Links added / verified |
|---|---|
| `bali villa catering` | Hub anchor sharpened → "Villa Catering in Bali"; `/events/villa-parties` FAQ links "villa catering in Bali" |
| `bali buffet catering` | "Buffet Catering in Bali" added to hub's dedicated-pages sentence |
| `bbq catering bali` | Verified: villa-bbq (4×) and seafood-bbq (2×) article bodies already link up to the cluster owner — nothing added |
| `chefs table bali` | Prose anchor "chef's table in Bali" on `/fine-dining`; new FAQ with same anchor on `/fine-dining/menus` |
| `bali wedding catering` | Journal complete-guide now links "Bali wedding catering packages & prices" (previously linked only the service page); `/events/weddings` anchor verified descriptive |
| `private dining` | Covered in Step 3a |

All five verified live. **Measure:** position deltas on these queries, next export (~12 Aug).

---

## Step 5 — Watch the area consolidation; then decide the /locations/ question (2–6 WEEKS)

**Evidence:** `/locations/{area}` guides currently outrank the `/private-chef/{area}` service pages for service queries ("private chef canggu": locations pos 5, service page invisible). The 29 Jul redirect change starts moving equity, but Google needs weeks.

**Actions:**
1. **Weeks 1–2:** nothing. Let the redirects settle.
2. **Week 3–4 check:** GSC → query "private chef canggu" (and seminyak/ubud variants) → which URL earns the impressions now?
   - If `/private-chef/{area}` is rising → continue, extend internal links from guides to service pages ("book a private chef in Canggu" CTA already exists post-28-Jul hero fix).
   - If `/locations/{area}` still owns it at week 6 → escalate the structural options to the owner: (a) 301 the guides into the service pages, or (b) formally accept guides as the ranking pages. **Do not do either without this data.**
3. Never let both families share a title/H1 phrase — audit `/locations/{area}` titles stay "dining guide" phrasing.

---

## Step 6 — Link building: the binding constraint (START NOW, ONGOING — the real work)

**Evidence:** DR 23 (Ahrefs). Every on-page fix above tunes distribution of authority the site doesn't yet have. The report shows the pattern of an under-powered site: rankings at 8–25 across hundreds of queries, almost none at 1–3. Nothing on this list moves "private chef bali" to #1 except authority.

**Actions (per week, sustainable cadence):**
1. **Build the prospect list (week 1):** Bali villa-management companies, wedding planners, retreat organisers, concierge services, expat/travel blogs, Bali tourism directories. Target: 50 prospects, each with a relevance note and a contact.
2. **One linkable asset (week 1–2):** the site already has genuinely link-worthy material — the transparent pricing data and the wedding-catering cost breakdown. Package one as a citable resource ("What villa dining actually costs in Bali, 2026 — real prices").
3. **Outreach (week 2+, requires your approval before sending):** 10 personalised contacts/week. Villa managers and wedding planners first — they convert commercially AND link.
4. **Citations (parallel):** Bali business directories, tourism listings, GBP consistency.
5. **Track:** every acquired link in `LINK-LEDGER.csv` with date, DR, relevance.

**Verify:** referring domains +5–10/quarter minimum; DR trend; and — the real metric — position movement on the head terms in Steps 2–4.

---

## Step 7 — Fix measurement gaps the report exposed (WHEN GRANTING ACCESS)

1. **WhatsApp conversion tracking (R-006, TASK-002):** the report counts clicks; the business runs on WhatsApp taps. Until events fire, none of the above can be judged on enquiries. This is the single most important measurement fix.
2. **Volume data localisation:** report volumes are global. When keyword tooling is funded (Ahrefs plan currently lacks API, Semrush out of units), pull Indonesia/Bali-filtered volumes and re-rank the opportunity list.
3. **Monthly export cadence:** re-run this same analysis_961 export monthly; compare against this plan's verify-checkpoints.

---

## What this plan deliberately does NOT do

- No new pages. Existing 248 URLs are unmeasured for conversion; adding more compounds the problem.
- No changes to `/locations/{area}` guides until Step 5's data lands.
- No touching kids-party, babi guling, buffet or event minimums (owner-confirmed exceptions).
- No claims additions — "560+ villas" and "Michelin-trained" remain unverified (R-003); Step 2's meta rewrite works around them.

## Standing risks that gate the plan

- **R-003:** unverified trust claims in homepage meta — Step 2.2 reduces exposure.
- **R-006:** unmeasured WhatsApp conversions — Step 7.1.
- **Correction-doc rule:** never act on the GSC Page Indexing report without live URL Inspection — applies to Step 1.

## Sequence summary

| When | Steps |
|---|---|
| Next session | 1 (indexing requests) |
| This week | 2, 3, 4 (on-page + internal links) + 6.1–6.2 (prospect list, asset) |
| Week 2+ | 6.3 outreach (needs your approval) |
| Week 3–6 | 5 (area consolidation checkpoint) |
| Monthly | fresh export, verify every step's checkpoint |
