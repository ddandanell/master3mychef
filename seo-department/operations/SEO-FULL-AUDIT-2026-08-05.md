# myCHEF.id — Full SEO Audit

**Date:** 2026-08-05 · **Scope:** technical, on-page, content, keywords, link profile, analytics
**Operating role:** 01 SEO Director, with 06 Technical, 08 On-Page, 04 Keyword, 15 Digital PR, 18 Analytics, 24 Compliance
**Commercial test applied throughout:** does this change qualified WhatsApp enquiries? Traffic and rankings are proxies, not the goal.

> **Correction notice.** A first draft of this report led with "the pillar page is missing from the sitemap." That was **wrong**. It was based on the committed `public/sitemap.xml`, which is a stale build artefact five days behind HEAD. Fetching the live sitemap disproved it — `/private-chef-bali` has been live and submitted since ~2026-08-02. The finding has been rewritten (see C-2), and the staleness that caused the error is now itself a logged finding (H-4). Recorded here because the department's rule is to separate verified fact from assumption, and I broke it.

---

## 1. Executive summary

The site is in better technical shape than expected. Metadata discipline is genuinely excellent, rendering parity is solved, redirects are clean, and conversion tracking now works. The real problems are **authority, honesty, and one head-term collision**.

Ranked by damage:

1. **Your backlink profile is mostly spam, and part of it looks self-built.** 69 referring domains; roughly 50 are automated "buy aged domains and backlinks" farm pages on a handful of shared IPs. Two `.online` satellite sites link to you with commercial CTA anchors and link to nothing else on the web. That is a link-scheme footprint and it is the highest-risk item here. It is also why DR is 23 and "private chef bali" sits at position 18.
2. **The homepage SERP snippet advertises a price model you no longer sell** — "from IDR 700K/guest" against a IDR 1M/day system. The homepage is 5,934 impressions and 225 clicks, a third of all your search clicks.
3. **Three URLs compete for "private chef bali"**, all three submitted in the live sitemap. Your 749-impression head term is split across a new pillar, an old page now retitled as a tasting-menu page, and a guide.
4. **"560+ villas / 12,000+ guests / Michelin-trained" are still live and still unsubstantiated** — open since 2026-07-28, present in 39 source files and 12 meta descriptions.

Verified good news: **rendering parity is solved** (R-007 can close), **conversion tracking is live** (R-006 can close), and **Google organic is your single largest measured lead source** — 49 of 101 WhatsApp leads in 30 days. SEO work here has a measurable payoff, which was not previously provable.

**Semrush health score:** 97/100. Real, but narrow — it crawls 100 of ~240 URLs and catches almost none of what follows.

---

## 2. Data used, and what it does not cover

| Source | Date | Coverage | Caveat |
|---|---|---|---|
| Codebase (`master3mychef`) | 2026-08-05, HEAD `0ce036d1` | 257 metadata entries, 219 routes, 206 redirects | Ground truth for source |
| **Live `mychef.id/sitemap.xml`** | 2026-08-05 | Full | **Authoritative.** The committed copy is stale — see H-4 |
| Live page fetch + render check | 2026-08-05 | Spot checks | Confirms prerender output |
| Semrush Site Audit (campaign 30621470) | **2026-07-29** | 100 URLs | **7 days stale.** Predates the 2026-07-30 schema fix and the 2026-08-03 B2B launch |
| Google Search Console export | **2026-07-28** (≈28 Apr–26 Jul) | 762 queries, 162 pages, 155 countries | 1 week stale, and **predates the pillar page going live** |
| Semrush Backlink Analytics | 2026-08-05 | 150 backlinks, 69 referring domains | Current |
| Ahrefs | 2026-08-05 | Domain Rating only — **DR 23** | API plan blocks backlink and keyword endpoints |
| PostHog (project 458871) | last 30 days | 101 `generate_lead`, 92 `cta_click` | Tracking started **2026-07-30** — 6 days of data, not a baseline |

**Not available:** GA4, Google Business Profile, booking/revenue data, Google Ads (read-only pending appeal).

**Excluded per existing rulings — these are NOT defects:** `wa.me` "broken links" (crawler noise), the Ubud 2020 founding date, the 22 `/bar-services/` URLs excluded from the sitemap (owner decision 2026-07-28), Semrush issue 213 (D-021), plated-catering `provider` schema (D-017), the 61 area pages as "doorway pages" (D-002).

---

## 3. Findings — ranked by severity

Severity = damage to enquiries. Risk = likelihood of harm if left alone, including policy and legal risk.

### P0 — CRITICAL

---

#### C-1 · Backlink profile is ~75% link-farm spam, with a self-built satellite footprint

| | |
|---|---|
| **Risk** | **CRITICAL** — Google link-spam policy exposure |
| **Effort** | 2 hours to assess, then a business decision |
| **Confidence** | Verified from raw Semrush backlink rows, 2026-08-05 |

**Profile:** 150 backlinks, 69 referring domains, Semrush Authority Score **6**, Trust Score **6**, Ahrefs DR **23**. Only **16 distinct class-C IP blocks** across 69 domains.

**Group A — automated link farms (~50 domains).** Page titles are literally *"Where to buy 🚀 aged domains and backlinks 🔥"*. Each carries 9,000–10,500 external links. Includes `backlinkhouse.com`, `backlinkon.com`, `backlinksbank.com`, `backlinkstree.com`, `linksnatcher.com`, `linksnatcher.art`, `all-aged-domains.com`, `allwebsitesdirectory.com`, `getwebsiteworth.com`, `domainsc.com`, `domainanalysis.org`, `bestwebstats.com`, `indexaward.com`, `way2check.cv`, `cheapsmmprovider.online`, `mp3fresh.net`. Clustered on IPs `118.139.181.85`, `118.139.178.200`, `118.139.161.199`, `184.168.115.60`.

Almost certainly not yours — scraper farms auto-list domains. Google generally ignores them. **Not urgent to disavow, but they are why Authority Score is 6.**

**Group B — the actual risk.** Two sites appear to be under your control:

- **`villa-catering-bali.online`** — 11+ backlinks. Every linking page has `external_num: 1`, meaning it links to **nothing on the web except mychef.id**. Anchors are commercial CTAs copied from your own site: *"Book a chef now →"*, *"Browse luxury chefs →"*, *"Compare prices →"*, *"See wedding-ready chefs →"*, *"Start a dietary-aware quote →"*, *"Request a structured quote →"*. Topically identical content (villa catering guides, budget guides, supplier pages).
- **`balipoolmaintenance.online`** — 9 backlinks, exact-match anchor *"hire a private chef in bali"*. Same `.online` TLD.

A network of sites existing primarily to pass links to one commercial domain is a **link scheme** under Google's spam policies, regardless of content quality. The `external_num: 1` signature plus arrow-CTA anchors lifted from your own site is exactly the footprint algorithmic systems detect.

**Group C — three genuine, valuable links, all first seen from ~2026-07-30:**

| Domain | Authority | URL | Anchor |
|---|---|---|---|
| `tribunnews.com` | **80** | `bali.tribunnews.com/adv/602248/…` | "MyCHEF" |
| `voi.id` | **58** | `voi.id/berita/587385/…` | "premium catering in Bali" |
| `hops.id` | **42** | `hops.id/viral/29417443642/…` | "private chef in Bali" |

Worth more than the other 66 combined. **But:** the Tribun URL sits under `/adv/` — an advertorial path. Your profile is **149 followed vs 1 nofollowed**, so these pass PageRank. If they were paid, Google's policy requires `rel="sponsored"`.

**Decisions required from you (I cannot invent these):**
1. Are `villa-catering-bali.online` and `balipoolmaintenance.online` yours? If yes: either make them genuinely independent and `nofollow` the links, or fold the content into mychef.id and 301 them. Leaving them as-is is the one option I would argue against.
2. Were the three media placements paid? If yes, request `rel="sponsored"`.
3. **Do not file a disavow yet.** Google ignores most of Group A, and disavow is a blunt tool.

**Stated bluntly because you asked for verification over agreement:** a 69-domain profile that is ~72% farms and ~3% self-owned satellites will not lift "private chef bali" from position 18 to page one, and it carries real downside.

---

### P1 — HIGH

---

#### H-1 · Homepage meta description advertises a discontinued price model

| | |
|---|---|
| **Risk** | **HIGH** — live price contradiction on the highest-traffic page |
| **Effort** | 10 minutes |
| **Confidence** | Verified, `page-meta.ts:31` vs `siteFacts.ts:171` |

`src/data/page-meta.ts:31` — *"…Michelin-trained team, clear prices from **IDR 700K/guest**. WhatsApp reply within 1 hour."*

Live pricing (`src/data/siteFacts.ts:171`, `MEAL_PLANS`) is a **per-day** rate: `1_000_000` / `1_800_000` / `2_700_000`, established by commit `55fd6f0b` (2026-08-04). `/private-chef-bali` and `/pricing` both publish it. The homepage snippet still sells a per-guest model at a number that no longer exists.

The homepage is **5,934 impressions, 225 clicks, position 9.33** — roughly a third of all site clicks. Every searcher sees the wrong price in the SERP before they click. Same class of defect as D-009 and D-013.

Also check `page-meta.ts:2463` — *"From IDR 700K/person ++"* on the Indonesian street food page. Verify against `siteFacts` before assuming it is wrong.

---

#### H-2 · "560+ villas / 12,000+ guests / Michelin-trained" remain live and unsubstantiated

| | |
|---|---|
| **Risk** | **HIGH** — advertising-claim exposure (**R-003 / CF-002, open since 2026-07-28**) |
| **Effort** | 30 min to soften; unknown to substantiate |
| **Confidence** | Verified by exact count |

- `src/data/siteFacts.ts:45,48,49,50` — `'560+ events served · 12,000+ guests · 500+ villa bookings'`
- `560+` appears in **exactly 39 files** under `src/`
- **`Michelin-trained` appears in exactly 12 meta descriptions** in `page-meta.ts` (zero in titles), including the homepage
- `page-meta.ts:2071` *"Why 560+ Bali villas trust myCHEF"*; `:2073` H1 *"Why 560+ Villas Choose myCHEF"*; `:2079` title *"myCHEF Reviews | 560+ Villas Served in Bali"*
- Live render of `/private-chef-bali` shows the claim string **twice**, plus *"50+ professional chefs on the team"*

Eight days open, no evidence document. Two acceptable paths, neither of which is "leave it":
- **Substantiate** — produce the booking count. If true it is a strength and I would lean on it harder.
- **Soften** — *"hundreds of villa events across Bali"*; *"a Milan-trained executive chef"*.

**Fix "Michelin-trained" first.** Adriano's own live bio says *"Fine-dining trained in Milan"* — verifiable, specific, and defensible. Extending "Michelin-trained" to the whole team across 12 meta descriptions is the weakest claim on the site and the easiest to challenge.

---

#### H-3 · Three URLs compete for "private chef bali" — all three submitted

| | |
|---|---|
| **Risk** | HIGH — splits your highest-value commercial query |
| **Effort** | 1 hour, plus a 6-week measurement window |
| **Confidence** | Verified against the **live** sitemap |

All three are in the live sitemap right now:

| URL | Sitemap priority | GSC (to 2026-07-26) | Current role |
|---|---|---|---|
| `/private-chef-bali` | 0.9 | **no rows** — live only since ~2026-08-02 | The intended pillar. 196 internal references, top nav, all 61 area pages, footer |
| `/fine-dining/private-chef-bali` | 0.9 | 161 imp, **position 65**, 2 clicks | Retitled *"Michelin Tasting Menu Bali"* — the URL says private chef, the page sells a tasting menu |
| `/guide/private-chef-bali` | 0.8 | 5 imp, position 42 | Guide hub |

Meanwhile the query `private chef bali` = **749 impressions, position 18.4, 21 clicks**.

The pillar having zero impressions is **expected**, not a bug — GSC data ends 2026-07-26 and the page went live around 2026-08-02. The real problem is that you now have three submitted URLs whose slugs all say "private chef bali", and the one Google has historically associated with the query no longer answers it.

**Recommended (not urgent, but decide deliberately):**
- Keep `/private-chef-bali` as the commercial pillar. It is correct, well-built and correctly linked.
- `/fine-dining/private-chef-bali` is now a tasting-menu page on a private-chef URL. Either rename the URL to match the content (with a 301) or point its canonical at the pillar. **Do not delete it** — it holds 161 impressions and inbound links, including the hops.id link. Any change needs a redirect plan.
- Add a prominent internal link from `/fine-dining/private-chef-bali` to `/private-chef-bali` regardless.

---

#### H-4 · `public/sitemap.xml` is committed to git and 5 days stale

| | |
|---|---|
| **Risk** | HIGH — it produced a wrong diagnosis in this very audit |
| **Effort** | 30 minutes |
| **Confidence** | Verified — this is the bug that caused the correction notice |

- `public/sitemap.xml` was last committed **2026-07-30** (`d8ade71b`). HEAD is `0ce036d1`, **2026-08-04**.
- It is **tracked in git**, not gitignored.
- `prebuild` runs `generate-sitemap.ts`, which regenerates it into `public/` before vite copies it to `dist/`. **Production is therefore correct** — I verified the live file contains `/private-chef-bali`, all 10 RKS/guides URLs, `/reviews`, and correctly excludes `/villa-chef` and `/hire-private-chef-bali-monthly`.
- But anyone reading the repo — a developer, a future session, an audit tool, or me — reads a file that is wrong. **This audit's first draft made exactly that mistake and produced three false critical findings.**

Same failure class as D-020 and D-022: a generated artefact checked into git, drifting from its source.

**Fix, choose one:**
- **Preferred:** gitignore `public/sitemap.xml` (and check whether `vercel.json` and `public/_redirects` should follow). They are build outputs; git should not hold a stale copy.
- **Or:** add sitemap regeneration to the pre-commit hook so the committed copy can never drift.

Either way, add a line to `AI_INSTRUCTIONS.md`: *"`public/sitemap.xml` may be stale. Verify against `https://mychef.id/sitemap.xml` or regenerate before reasoning about it."*

---

### P2 — MEDIUM

---

#### M-1 · Sitemap gaps that are real (verified against the live file)

Small, but genuine:

| URL | Issue |
|---|---|
| `/quote` | Live, indexable, **absent from the live sitemap**. It is a conversion page, and external backlinks from `villa-catering-bali.online` point at it |
| `/partner` | Live, absent |
| `/pricing-calculator` | Live, absent |
| `/fine-dining/our-chefs` | **In** the live sitemap but has **no `page-meta.ts` entry** — inherits fallback metadata |
| `/private-chef-bali` | In the sitemap with `lastmod 2026-06-24`, but the page was materially rewritten **2026-08-04** (`55fd6f0b`, new pricing + Chef Rotation). The freshness signal understates a major update |

**Not gaps — do not "fix" these:** `/about` is a 301 source (`redirects.ts:149` → `/chefs`); the 22 `/bar-services/` URLs are excluded by owner decision; `/calculator` and `/join-our-team` are in `NOINDEX_PATHS` by design.

---

#### M-2 · 15 queries with 1,001 impressions produce zero clicks

| Query | Impressions | Position |
|---|---|---|
| bali villa catering | 94 | 15.4 |
| private chef bali villa | 94 | 15.9 |
| private dining | 94 | 25.5 |
| chefs table bali | 80 | 26.4 |
| **how to ensure food safety and sourcing with a private villa chef in bali** | **78** | **6.0** |
| home chef | 75 | 9.5 |
| private chef villa menu | 73 | 12.0 |
| private dining nusa dua | 68 | 34.4 |
| private catering bali | 65 | 24.8 |
| catering bali | 60 | 38.1 |
| catering chef | 50 | 54.0 |
| nusa dua villa catering | 44 | 27.4 |
| best catering in bali | 43 | 54.3 |
| private catering service | 42 | 32.6 |
| corporate event catering bali | 41 | 18.5 |

Three distinct problems, three different fixes:

- **The anomaly — position 6.0 with 0% CTR.** *"how to ensure food safety and sourcing with a private villa chef in bali"*, 78 impressions. Ranking sixth and earning nothing almost always means the SERP snippet does not answer the question, or an AI Overview is absorbing the click. This is the cheapest fix in the report: find the ranking URL and rewrite its title and description to answer that question directly.
- **Positions 10–20** (`bali villa catering`, `private chef bali villa`, `private chef villa menu`, `corporate event catering bali`) — 302 impressions just off page one. Winnable with on-page work. D-011 already sharpened `/fine-dining/menus` for the villa-menu family; unmeasured pending a fresh GSC pull.
- **Positions 25–55** (`catering bali`, `best catering in bali`, `catering chef`, `private dining`) — not near-misses. Google knows you exist and does not rate you. No on-page change moves position 54 to position 8. These need authority → back to C-1.

Overall: **290 queries sit below position 20, carrying 2,709 impressions and 7 clicks** — 40% of impressions producing 4% of clicks.

---

#### M-3 · The wedding cluster is your largest unowned commercial family

| Page | Impressions | Position | Clicks |
|---|---|---|---|
| `/events/weddings` | 373 | 38.4 | **0** |
| `/blog/wedding-private-chef-bali-planning-guide` | 271 | 11.9 | **0** |

Query `bali wedding catering` = **424 impressions, position 27.9, 2 clicks** — your second-biggest query.

The informational guide (position 11.9) outranks the commercial page (position 38.4), and neither converts a click. D-012 correctly protected this equity by keeping wedding keywords off `/catering/babi-guling`; the equity now needs converting. Start with titles and descriptions on both pages before anything structural — position 12 at 0% CTR is a snippet problem, not a ranking problem.

---

#### M-4 · The `/private-chef/{area}` family: 61 pages, 65 impressions, 2 clicks

GSC family aggregation, 28 Apr–26 Jul:

| Family | Pages with data | Clicks | Impressions | Clicks/page |
|---|---|---|---|---|
| `/locations/` | 10 | **104** | 3,606 | 10.40 |
| `/catering*` | 12 | 41 | 2,643 | 3.42 |
| `/in-villa-service*` | 7 | 55 | 1,082 | 7.86 |
| `/blog/` | 16 | 17 | 1,563 | 1.06 |
| `/fine-dining*` | 8 | 9 | 1,043 | 1.12 |
| `/journal/` | 7 | 5 | 845 | 0.71 |
| `/events/` | 7 | 5 | 874 | 0.71 |
| **`/private-chef/`** | **2** | **2** | **65** | **1.00** |

D-010 (owner ruling, 2026-07-29) consolidated "private chef {area}" intent **onto** `/private-chef/{area}`, redirecting away from `/locations/{area}`. D-020 found that ruling had been silently reverting on every deploy and restored it — **so the 4–6 week observation window actually opened 2026-07-29 and closes between 2026-08-26 and 2026-09-09.**

You moved traffic from a family earning 104 clicks toward a family earning 2. That may still be right — the area pages are genuinely differentiated (D-002, verified; not reopening it) and had not had a fair run. But it is a large bet, currently unmeasured.

**Change nothing here yet.** Pull fresh GSC on **2026-08-26** and compare against this baseline.

---

#### M-5 · Semrush audit is 7 days stale and covers ~42% of the site

Snapshot `6a6a62ee3bfffa0de6a416a4` finished **2026-07-29 20:38 UTC**. Since then: `650ba745` (2026-07-30) fixed the schema errors; `8d8c9565`/`0163e6da` (2026-08-03/04) shipped the B2B hub.

It still reports **3 structured-data errors** on `/wedding-catering-indonesia`, `/proposal-dinner` and `/experiences/kids-birthday-chef-party` — the exact three URLs `650ba745` fixed. Repo inspection confirms `ProposalDinnerPage.tsx:232` now uses a valid `Organization` provider. **Almost certainly already fixed; the report is stale.** Re-crawl before touching code.

`pages_crawled: 100` against ~240 live URLs. Every count is measured through a 42% keyhole — which is exactly why D-021 rejected issue 213.

---

#### M-6 · Internal links pointing at the homepage instead of real destinations

Verified on the live `/private-chef-bali` render and in source:

| Anchor | Where | Currently points to | Should point to |
|---|---|---|---|
| "Tasting Menu at Your Villa" | `Footer.tsx:113–117` | `/` — a **deliberate hardcoded override** when on the pillar page, not drift | `/fine-dining/private-chef-bali`. **Not** `/fine-dining/tasting-menu` — the footer already links there separately at `:163` |
| "Reviews" | `Footer.tsx:459` | `/` | **`/reviews` exists** (`page-meta.ts:2078`, in the live sitemap) |
| "Private Chef Breakfast" | Footer | `/catering` | `/catering/floating-breakfast`, or remove |
| "About" | **`siteArchitecture.ts:501`** (`PRIMARY_NAV`, not Footer) | `/fine-dining/our-chefs` | Fine as-is; note `/about` itself is a 301 to `/chefs` |

Small individually; across ~240 pages it is a lot of anchor text pointing nowhere useful. Semrush notice 216 also flags 3 links with no anchor text.

---

### P3 — LOW

- **L-1 · Hreflang "language mismatch" on 94/94 crawled pages** (Semrush notice 204). `inject-meta.ts:429` emits self-referencing `hreflang="en"` + `x-default` on an English-only site. Semrush likely trips on Indonesian vocabulary. Harmless but pointless. **Verify before changing** — a wrong hreflang edit is worse than a useless one.
- **L-2 · 64 meta descriptions exceed 160 characters.** They truncate in the SERP. Tidy only the ones that earn impressions, not all 64.
- **L-3 · Sitemap `lastmod` discipline is good** — the generator deliberately omits `lastmod` rather than lying (see the comment at `generate-sitemap.ts:70`). Better than most sites. Two 2025 dates (`/guide/private-chef-bali`, `/blog/private-chef-cost-bali`) are worth a sanity check.
- **L-4 · `/restaurant-kitchen-solutions` is routed both with and without a trailing slash** (`App.tsx:543`, `:544`). Pick one canonical form and 301 the other before either gets indexed.
- **L-5 · Low text-to-HTML ratio on 66 of 94 crawled pages** (Semrush 112). Normal for a prerendered React SPA with a ~120-link footer. A soft signal, not an error. Do not restructure for it.
- **L-6 · The footer links to `/bar-services/#hotels`, `#villas`, `#beach-clubs`, `#restaurants`, `#events` from every page** — a 22-URL cluster you deliberately removed from the sitemap to protect crawl budget for the area pages. You are excluding it with one hand and pushing crawl equity at it from every page with the other. Reduce to one link, or put it back in the sitemap.
- **L-7 · `satuatapsinergi.id` on the same Vercel project** (R-008, open since 2026-07-28).
- **L-8 · AI-search readiness is a genuine strength.** `public/llms.txt` exists (12,722 bytes) and `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot. Ahead of nearly all competitors. One measured AI referral already: 1 lead from `perplexity.ai`.

---

## 4. What is working — do not break these

| | Evidence |
|---|---|
| **Rendering parity is solved** | Prerendered HTML contains full body copy, metadata and 6 `ld+json` blocks. **R-007 can close.** |
| **Conversion tracking is live** | `generate_lead` 101 events / 70 people; `cta_click` 92 / 60; since 2026-07-30. **R-006 can close.** |
| **Organic search is your #1 lead source** | 49 of 101 leads from `google.com`; 47 direct; 3 Bing; 1 Perplexity |
| **Metadata discipline is excellent** | 257 entries in `page-meta.ts`: **zero duplicate titles, zero duplicate descriptions, zero duplicate H1s, zero duplicate paths, zero missing titles/descriptions/H1s.** Independently verified. Rare at this size |
| **Redirects are clean** | 206 rules, 206 unique sources, **zero chains, zero loops, zero self-redirects** |
| **The sitemap generator is well-built** | Composes ~240 entries from 12 typed sources; filters redirect sources and noindex paths automatically; refuses to fake `lastmod`. The **only** problem is the stale committed copy (H-4) |
| **Area pages are real content** | D-002 verified against the doorway-page definition |
| **`/locations/` cluster performs** | 10.4 clicks per page — your best family |
| **Three genuine authority links landed in one week** | tribunnews (80), voi.id (58), hops.id (42). Whatever produced those, do more of it |

---

## 5. Link building — assessment and direction

**Position:** DR 23, Authority Score 6, 69 referring domains of which ~3 are genuinely valuable. Anchor profile is 64/69 branded URL anchors — natural and fine.

**The honest read:** you cannot rank for "private chef bali" (749 impressions, position 18.4) at DR 23 against Bali hospitality sites with real link profiles. On-page work has taken you close to its limit. The 290 queries below position 20 are an authority problem, not a content problem.

**What worked:** three Indonesian media placements in one week. Correct targets — national/regional Indonesian media, topically relevant, real editorial domains. **Clarify sponsorship status first (C-1)**, then scale this channel.

**Priority targets:**
1. **Villa management and villa rental agencies in Bali.** Relevant, commercially aligned, a referral channel as well as a link. `/staffing/for-villa-managers` is your pitch asset.
2. **Wedding planners and Bali venue directories.** Unlocks the 424-impression wedding cluster (M-3).
3. **Expat and relocation publications.** You already have `/blog/private-chef-bali-expats`.
4. **More Indonesian media**, clearly labelled sponsored where paid.

**Do not:** buy directory links, build further satellite sites, or guest-post on generic lifestyle blogs with no Bali relevance. The department rule — *links without relevance are not valuable* — is right, and the current profile is the counter-example.

---

## 6. Keyword optimisation — assessment

**What is right:** keyword-to-URL mapping discipline is good. D-011 (villa menu family), D-012 (excluding wedding/private-chef keywords from babi guling to avoid cannibalisation), D-014 (pork-free demand) all show correct evidence-led reasoning. Metadata uniqueness is perfect.

**The gap:** the head term is split three ways (H-3), and the largest commercial family — weddings — is unowned (M-3).

**Winnable volume (positions 10–20):**

| Query | Impressions | Position | Likely owner |
|---|---|---|---|
| private chef bali | 749 | 18.4 | `/private-chef-bali` — resolve H-3 first |
| bali villa catering | 94 | 15.4 | `/catering/villa-catering` |
| private chef bali villa | 94 | 15.9 | `/private-chef-bali` |
| chef bali | 78 | 10.8 | `/private-chef-bali` |
| private chef villa menu | 73 | 12.0 | `/fine-dining/menus` (D-011, unmeasured) |
| corporate event catering bali | 41 | 18.5 | `/catering/corporate-catering` |
| private chef uluwatu bali | 32 | 10.1 | `/private-chef/uluwatu` |

**Geography — a correction to a standing assumption.** Memory records "US traffic is a trap, Australia is the market." The data supports the first half emphatically and the second half only partly:

| Country | Impressions | Clicks | CTR | Position |
|---|---|---|---|---|
| **Indonesia** | **8,670** | **264** | 3.04% | 13.64 |
| United States | 4,358 | 29 | **0.67%** | 10.39 |
| Australia | 2,393 | 139 | **5.81%** | 9.07 |
| Singapore | 730 | 34 | 4.66% | 13.00 |
| United Kingdom | 625 | 23 | 3.68% | 7.69 |

US is confirmed as the trap — worst CTR of any significant market by a factor of five. Australia converts best. **But Indonesia is the largest market by both impressions and clicks**, and the Bali framing nearly hid why: `/private-chef-senayan` earns **47 clicks at position 5.78** (your second-best page after the homepage), `/jakarta` 16 clicks, `/private-chef-menteng` 8 clicks, and the query `private chef jakarta` sits at **position 5.9 with 19 clicks**.

**There is a real Jakarta business running with almost no dedicated effort.** That deserves a deliberate decision rather than continuing by accident.

**Priorities in order:**
1. Resolve the three-way "private chef bali" collision (H-3), then measure for 6 weeks.
2. Wedding cluster (M-3) — 424 impressions, largest unowned family.
3. The position-6 zero-CTR anomaly (M-2) — cheapest fix in the report.
4. Jakarta — already working, currently unmanaged.
5. Villa catering / villa menu — 261 combined impressions at positions 12–16.

---

## 7. Risk register — new and changed

| ID | Risk | Severity | Status |
|---|---|---|---|
| **R-009** | Link-scheme footprint: two owner-adjacent `.online` satellites passing followed commercial-anchor links | **CRITICAL** | **NEW — decision required** (C-1) |
| **R-010** | Advertorial media links (`/adv/`) passing PageRank; sponsorship status unconfirmed | **HIGH** | **NEW** (C-1) |
| **R-011** | Live price contradiction: homepage SERP snippet advertises IDR 700K/guest against a IDR 1M/day model | **HIGH** | **NEW** (H-1) |
| **R-012** | Generated artefacts committed to git and drifting from source; `public/sitemap.xml` 5 days stale, caused a false audit finding | **HIGH** | **NEW** (H-4) |
| **R-013** | Three submitted URLs compete for the "private chef bali" head term | **HIGH** | **NEW** (H-3) |
| R-003 | Unsubstantiated "560+ / Michelin-trained" claims | HIGH | **STILL OPEN — 8 days** (H-2) |
| R-002 | Intent overlap across three page families | MEDIUM | **Partially resolved** — D-010/D-020; review closes 2026-08-26 (M-4) |
| R-006 | WhatsApp conversion tracking unverified | HIGH | **CLOSE** — 101 leads measured since 2026-07-30 |
| R-007 | SPA render parity | CRITICAL if confirmed | **CLOSE** — prerender verified 2026-08-05 |
| R-001 | Service area overreach (61 areas incl. 2–4h from base) | HIGH | Unchanged — business decision |
| R-004 | Allergy/dietary language | HIGH | Open — not re-audited this session |
| R-005 | Client imagery permission | MEDIUM | Open — not re-audited this session |
| R-008 | `satuatapsinergi.id` on same Vercel project | LOW | Unchanged |

---

## 8. What I could not check

| Missing access | Unblocks |
|---|---|
| **GSC API / fresh export** | Post-D-010 verdict; whether D-011/D-014 worked; current position for "private chef bali"; whether the pillar is indexing |
| **Ahrefs paid API** | Competitor link gap — who links to competitors but not you. The input for §5 |
| **Google Business Profile** | Local pack visibility. For "private chef bali" the map pack likely sits above the organic result you are chasing |
| **Fresh Semrush crawl at full URL limit** | Every count in §3 is currently through a 42% keyhole |
| **Booking / revenue data** | Whether the 49 organic leads/month convert, and at what value. Without it, "more leads" is the only goal available |

---

## 9. Recommended sequence

**This week** — H-1 (10 min), H-4 (30 min), M-1 (30 min), and the M-2 position-6 anomaly (30 min). Under two hours, all low-risk.

**Next 2 weeks** — C-1 investigation (confirm satellite ownership and sponsorship status; this is the highest-stakes item), H-2 (a business decision plus 30 min), H-3 (decide the pillar strategy), M-5 (fresh Semrush crawl).

**By 2026-08-26** — fresh GSC export, then the M-4 consolidation verdict against the baseline in this report.

**Ongoing** — link acquisition per §5. This is the long pole and nothing substitutes for it.

---

*Prepared under the myCHEF SEO department rules. Verified facts are cited to file, line, or dataset. Estimates are labelled. All codebase claims in this version were independently re-verified after the first draft's sitemap diagnosis proved wrong. No rankings, traffic or revenue outcomes are guaranteed. Items requiring management approval are marked as decisions, not actions.*
