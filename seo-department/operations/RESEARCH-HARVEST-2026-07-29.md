# Research Harvest — `mychef-seo/` folder → live SEO department

**Written:** 2026-07-29 · **Source folder:** `~/Downloads/mychef-seo/` (34MB, built 24–25 Jul 2026)
**Rule applied:** nothing is imported that risks undoing work already shipped. GSC data and completed corrections always win.
**Verification method:** every claim in the folder was checked against the current repo (`vercel.json`, `src/`, `public/`) before being classified. Nothing below is assumed.

---

## Headline

**The folder's technical fix list is ~90% already done.** It was written 25 Jul; the corrections shipped 28–29 Jul closed almost all of it. Of 13 headline defects it raised, **10 are DONE, 2 are NO LONGER APPLICABLE (deliberately reversed), 1 is partial.**

The folder's residual value is **not** its fix list. It is three things the repo has never consumed: NAP/entity consistency evidence, per-area competitor intelligence, and a 366-question AEO map.

---

## 1. VERIFIED ALREADY DONE — do not re-open

Listed so nobody re-does them from the old report.

| Folder claim (25 Jul) | Current state | Evidence |
|---|---|---|
| `/partner-platform` never 301'd | **DONE** | `vercel.json:377`; component now serves `/certified-partner` (`App.tsx:361`) |
| `/private-tasting-menu-bali` canonical ignored | **DONE** — 301 + canonical | `vercel.json:407`; `LandingPage.tsx:18` |
| `/chef-table-experience-bali` canonical ignored | **DONE** — 301 + canonical | `vercel.json:412`; `LandingPage.tsx:19` |
| 323 nav anchors → `/fine-dining/private-chef-bali` | **DONE for nav** | `Navbar.tsx:72-75` remaps head term to `/` |
| 5 blog posts are true orphans | **DONE** — all 5 now have 2–6 inbound links | `KutaPage.tsx:170`, `CateringDropOffPage.tsx:463`, `HubPage.tsx:118`, etc. |
| FAQPage schema 0 of 229 | **DONE** — 181 of 187 page components emit it | central helper `SeoHead.tsx:351` + auto-inject `PremiumPage.tsx:154` |
| Service schema 0 of 147 | **DONE** — injected by default on all PremiumPage routes | `SeoHead.tsx:138`, `PremiumPage.tsx:151` |
| Homepage H1 rendered twice | **NOT REPRODUCIBLE** — one H1; injected H1s downgraded to H2 | `HubPage.tsx:339`, `ArticleContentSection.tsx:21` |
| `/quote` thin page indexed | **DONE** — noindexed twice + excluded from sitemap | `QuoteFunnel.tsx:176`; `vercel.json:1091`; `sitemap.ts:289` |
| Deposit 25% vs 50% contradiction | **DONE** — zero `25% deposit` strings remain | `siteFacts.ts:17` `depositPercent: 50`; 23 confirmations in `privateChefAreas.ts` |
| `/fine-dining` cancellation self-contradiction | **NO LONGER APPLICABLE** — no cancellation window on that page | `LunaPage.tsx:1071`; canonical policy in `siteFacts.ts:31-36` |
| Corporate min-spend 50M vs 7.5M | **DONE** — IDR 15,000,000, consistent | `siteFacts.ts:23`; `PricingPage.tsx:204` |
| Founding-year / "8+ Years" conflict | **DONE** — zero matches for `8+ Years`, `since 2020` | `siteFacts.ts:11` `foundingYear: 2019` |

**Two items the folder wants that we deliberately went the other way on — do NOT action:**

| Folder recommendation | Why it must be ignored |
|---|---|
| Canonical `/fine-dining/our-chefs` → `/chefs` | Reversed on purpose. Page is live, self-canonical, nav links to it, and the *opposite* redirect exists (`vercel.json:417`). Explicit note in `redirects.ts:143-146`. |
| Publish the full `_locations_jakarta.md` rewrite | The Jakarta family was retired on purpose. Nine Jakarta URLs now 301 → `/` (`vercel.json:992-1041`) and copy is Bali-only. Publishing that file would resurrect a decision we reversed. |

---

## 2. SAFE TO USE — real gaps, verified open, no strategic risk

These are the only items I would act on. All are consistency or additive-content work. None touches architecture, keyword ownership, or anything the GSC re-scope decided.

### 2.1 — NAP / entity consistency (**highest value, genuinely open**)

The folder flagged NAP unification as its one blocking local-SEO item. It is still open, and worse than the folder knew. Verified today:

**Address — 6 different strings live:**

| Problem | Detail |
|---|---|
| Two different `addressLocality` in JSON-LD | Canonical `SeoHead.localBusinessSchema:39` = street `…No.16, Panjer` + locality `Denpasar Selatan`. Seven other blocks = street `…No.16, Panjer, Denpasar Selatan` + locality `Denpasar`. Same business, two localities. |
| Contact pages drop the sub-district and postcode | `ContactPage.tsx:31,281` and `BarServicesContactPage.tsx:53` omit "Panjer" and `80226` |
| 17 schema blocks carry `addressLocality: 'Bali'` only | no street, no postcode |
| `siteFacts.ts` has **no address field at all** | so there is no single source of truth to enforce |

**Business name — 4 variants across ~240 schema blocks:** `myCHEF.id` ×136 · `myCHEF` ×53 · `myCHEF Bali` ×51 · `myCHEF Indonesia` (legal entity, `PrivacyPage.tsx:10`). `siteArchitecture.ts:24` says `myCHEF`; `SeoHead` says `myCHEF.id`.

**Phone — number is 100% correct** (all 415 occurrences resolve to +62 896-7407-2020, 363 `wa.me` links, zero variants). Two cosmetic issues only: `PrivateChefAreaPage.tsx:151` emits schema `telephone: '+6289674072020'` where every other block uses `'+62 896-7407-2020'`; and `siteArchitecture.ts:19` defines an unused third format.

**Email — clean.** `bali@mychef.id` everywhere.

**Why this matters:** Google matches website entity data against the Google Business Profile to establish local trust. Conflicting locality and name signals across 240 structured-data blocks weakens that match — for a business whose top queries are `private chef bali`, `private chef canggu`, `ubud private chef`, this is directly on the money path.

**Proposed fix (data-only, zero content change):** add canonical `address` + `legalName` + `displayName` to `siteFacts.ts`, point every schema block at it, align the two contact pages. Low risk — no copy, no URLs, no rankings exposure.

**Correction to the folder:** it concluded "no GBP found/verifiable." That is **wrong now** — `siteFacts.ts:56` holds a live `googleBusinessProfileUrl`. The GBP exists. Its per-area GBP recommendations should be re-read with that in mind.

### 2.2 — Internal link pointing at a redirect

`Footer.tsx:218` still links to `/villa-staff-bali-agency`, which 301s to `/staffing/villa-staff` (`vercel.json:422`). Sitewide footer link → wasted hop on every page. One-line fix.

### 2.3 — Two pages render FAQ copy without markup

Everything commercial is covered. Only these two miss it, and both already have the visible content:

- `/pricing-calculator` — 4 visible Q&A pairs at `PricingCalculatorPage.tsx:479-510`, no schema imported at all
- `/help/managing-booking` — `const FAQS` at `ManagingBookingPage.tsx:88`, rendered at :237, not in `jsonLd`

Also worth checking: `ChefsPage.tsx:330,332` passes FAQs **twice** (via `faqs=` and `extraJsonLd`), and `PremiumPage.tsx:154` only guards against `extraTypes` — possible duplicate FAQPage emission on `/chefs`.

### 2.4 — Per-area competitor intelligence (**the best unused content asset**)

`Update 2/05-local-seo-gap-report.md` + `research2/local-seo-research.md` contain competitor-derived local detail that exists nowhere in this repo. It is additive FAQ/section material for pages we already own — it changes no architecture. Examples verified as genuinely absent from our pages:

| Area | Intelligence competitors are using that we are not |
|---|---|
| Seminyak | Travel fee stated explicitly (competitors advertise "no extra travel fee"); gang access/parking logistics; villa-event noise rules |
| Canggu | **Co-hire / shared-chef between neighbouring villas** — a documented local demand pattern we do not market at all; monthly retainer for long stays |
| Ubud | Drive time & travel fee transparency (a competitor charges ~IDR 700K); rice-field villa kitchen constraints; rain contingency for jungle dinners |
| Uluwatu | **Sunset-timing FAQ** (plan dinner around the 5:30–6pm golden hour) — competitor runs this and it is a strong intent match; banjar fees/curfews; highest travel-surcharge zone |

These map directly onto pages that already rank. Adding them is content depth on existing URLs, which is exactly what the GSC plan says to prioritise ("position gains on existing ranking pages over publishing anything new").

### 2.5 — 366-question AEO map (backlog, not urgent)

`Update 2/04-question-seo-map.csv` — 366 questions, fact-checked against the crawl baseline, mapped to pages. Since FAQ schema is now near-universal, its value has shifted from "get schema live" to "improve the questions we answer" and feeding agent 21 (AI Search Discovery). Treat as a library to draw from, not a rollout.

---

## 3. DO NOT IMPORT — stale or contradicted

| Asset | Reason |
|---|---|
| `04-master-keyword-map`, `05-keyword-ownership`, `03-expanded-keyword-ownership` (~1,626 assignments) | Built on **inferred** demand before any GSC access. The 28 Jul pull contradicts its core assumption — real demand is private chef, not catering. `NEXT-SESSION-BRIEF` already ruled the inferred map must be replaced by real query data. |
| `06-cannibalization-report` + `07-cannibalization-recheck` | Same problem, plus the catering de-cannibalisation was already redone from real data in `catering-cluster/03-DECANNIBALISATION-PLAN.md`. |
| Twin-architecture merge/consolidation recommendations | Step 5 of the live action plan is **WAITING by design** until the 12 Aug measurement. Acting now on 25 Jul guesses is precisely the damage we agreed to avoid. |
| Tier-2/tier-3 area page expansion (912–1,130w vs tier-1 2,500w) | Real gap, but it sits inside the Step 5 area-consolidation decision. Do not touch before 12 Aug data. Logged, not actioned. |
| Republishing the 27 "partially published" pages from `content/*.md` | The 116 content files predate every factual correction since (deposit, corporate min-spend, founding year, Jakarta retirement, minimums sweep). Republishing would overwrite corrected facts with 24 Jul copy. **Highest-damage item in the folder.** |
| `06-topical-authority-content-map` — 15 new guide proposals | Contradicts current priority: GSC says avg position 10.3 on 12.7k impressions is a position problem, not a coverage problem. Park until position work is exhausted. |
| `11-business-confirmation-update` blocker register | Superseded by `SEO_BLOCKER_DECISIONS.md` — the 7 blockers were answered 25–28 Jul. Only the non-blocking MEDIUM/LOW items remain unanswered, none gating current work. |

---

## 4. Recommended order (if approved)

| # | Item | Effort | Risk | Why now |
|---|---|---|---|---|
| 1 | NAP/entity unification via `siteFacts.ts` | S | Very low | Only verified-open item with a direct line to local ranking; data-only |
| 2 | Footer `/villa-staff-bali-agency` link | XS | None | One line |
| 3 | FAQ markup on the 2 utility pages + `/chefs` duplicate check | XS | None | Content already there |
| 4 | Area intelligence → FAQ/section additions on tier-1 area pages | M | Low | Additive depth on pages that already rank; aligns with position-first strategy |
| 5 | 366-question map → library for agent 21 | — | None | Reference, no rollout |

**Nothing in §3 gets touched.** Items 4 and 5 are content additions requiring the usual fact-verification gate; items 1–3 are consistency fixes needing no business decision.

---

## 5. Open question for the owner

The folder's local research assumed no Google Business Profile existed. `siteFacts.ts` says one does. Before any local-SEO work: **is the GBP claimed, verified, and does its name/address exactly match `SeoHead.localBusinessSchema`?** That answer determines whether §2.1 is a tidy-up or a genuine ranking fix.

---

*Compiled by SEO Director (01). Cross-references: `mychef-seo/Update 2/02-unfinished-and-incorrect-work.md`, `05-local-seo-gap-report.md`, `SEO_BLOCKER_DECISIONS.md`, `REPORT-ACTION-PLAN-2026-07-29.md`.*
