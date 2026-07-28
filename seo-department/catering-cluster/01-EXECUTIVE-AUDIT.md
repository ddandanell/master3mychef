# Document 1 — Executive Audit: Catering Cluster

**Scope:** 11 `/catering*` URLs · **Date:** 2026-07-28 · **Phase:** 1 of 12 (audit only — no rewriting performed)
**Companion:** `CONTRADICTION-REGISTER.md`

---

## Headline

The catering cluster is **substantially better built than a routine audit would assume**. All 11 pages exist, all 11 have unique metadata, all carry real operational detail, and the content shows genuine domain knowledge — buffet flow, holding temperatures, staffing ratios, villa access, weather planning. Total cluster volume is ~634,000 characters of source.

The problems are **not** thin content, keyword stuffing or invented facts. They are three specific defects:

1. **Pricing is presented inconsistently** — the same number means two different amounts depending on the page.
2. **Metadata has two competing sources** on five pages, one of which hides a booking rule.
3. **Thirteen catering pages live outside the cluster**, competing with it — five of them on BBQ alone.

None of the three can be fixed by writing better copy. All three need a decision first.

---

## Current state — the 11 pages

| URL | Source chars | Title len | Stated minimum | `++` used consistently? |
|---|---:|---:|---|---|
| `/catering` | 109,788 | 55 | Spend IDR 5,000,000 | **No** — 4 of 50 |
| `/catering/bbq-catering` | 44,971 | 56 | 6 guests | No — 0 of 14 |
| `/catering/buffet` | 61,930 | 59 | 30 guests | Mixed — 22 of 41 |
| `/catering/plated-catering` | 44,668 | 59 | Spend IDR 5,000,000 | Mixed — 21 of 35 |
| `/catering/drop-off-catering` | 61,609 | 58 | 4 / 8 people | No — 0 of 5 |
| `/catering/babi-guling` | 40,577 | 57 | 6 guests / IDR 3,900,000 | No — 0 of 10 |
| `/catering/grazing-tables` | 49,250 | 52 | 6 guests | n/a — quoted individually |
| `/catering/villa-catering` | 42,791 | 53 | 8 guests | Yes — 6 of 7 |
| `/catering/corporate-catering` | 47,450 | 58 | IDR 15,000,000 | No — 0 of 2 |
| `/catering/retreat-catering` | 82,423 | 57 | **Undefined** | n/a — no prices shown |
| `/catering/floating-breakfast` | 48,602 | 52 | 2 (couple) / 4 (group) | No — 0 of 15 |

Titles are all within display range (52–59 chars) and unique. No duplicate-title problem in this cluster.

---

## Strongest opportunities

1. **Fix pricing presentation once.** A single ruling on net-vs-`++`, applied across 11 pages, removes the largest trust leak in the cluster. It is the highest-value change available and needs no new content.

2. **Consolidate the BBQ intent.** Five URLs (`/catering/bbq-catering`, `/villa-bbq-catering-bali`, `/seafood-bbq-catering-bali`, `/bbq-grill`, `/journal/bbq-catering-cost-breakdown-bali`) chase one commercial term. Concentrating that authority on one page is likely the single biggest ranking opportunity — **but only after Search Console shows which page currently earns the impressions.**

3. **Retreat catering is under-monetised.** It is the second-largest page (82k chars), demonstrates real expertise, and has **no prices and no defined minimum**. Multi-day retreats are high-value bookings. Adding a verified pricing structure is a direct revenue lever.

4. **Grazing tables shows zero prices.** Everything is "individually quoted". For a format where competitors publish per-head ranges, a starting price would reduce enquiry friction.

5. **Floating breakfast metadata fix is nearly free.** One description correction stops attracting enquiries for a service that cannot be booked standalone.

---

## Critical errors

**Pricing consistency (C-01).** Detailed in the register. The hub shows 46 of 50 prices without tax notation while child pages use `++`. Same tier, 21% apparent difference.

---

## Pricing conflicts

- Hub minimum spend **IDR 5,000,000** vs babi guling floor **IDR 3,900,000** vs BBQ floor **IDR 4,200,000**
- Retreat catering has no quantified minimum at all
- Corporate minimum **IDR 15,000,000** is 3× the hub minimum with no explanation of why

---

## Policy conflicts

- Floating breakfast: **add-on only** on-page, **implied standalone** in metadata
- Drop-off catering correctly states no chef/waiter remains on site — consistent, no conflict found
- Minimum guest counts differ per format (4/6/8/30) with no single reference table anywhere

---

## Cannibalisation

**Within the cluster:** low. Each of the 10 specialist pages owns a distinct format, and none competes with the hub for "catering Bali" as a primary term. The internal structure is sound.

**Outside the cluster: high.** 13 competing URLs, concentrated on BBQ (5), wedding catering (4) and corporate/retreat (1 page spanning both). `/corporate-retreat-catering-bali` is the awkward case — it straddles two cluster pages simultaneously.

**No consolidation may be proposed without GSC data.** Several competing pages may hold the rankings or links today.

---

## Duplication

No significant copy duplication found between the 11 pages. Each has a distinct structure and vocabulary. The cluster does **not** read as cloned templates.

---

## Unsupported claims

| Claim | Pages | Status |
|---|---|---|
| "Michelin" | 4 | Evidence required |
| NPWP-registered | corporate (×7) | Number required for file |
| "organic" sides / farms | BBQ meta, retreat | Supplier basis required |
| halal-certified proteins | villa | Supplier basis required — **wording itself is correct** |
| "nutrient-dense" | retreat | Defensible if kitchen standard documented |

**Not** found: invented reviews, fabricated client names, fake awards, fake certifications, or guarantee promises. Testimonials carry first-name-plus-initial attribution and are not marked up as schema.

---

## Technical concerns

1. **Dual metadata sources on 5 pages** — undermines `page-meta.ts` as the source of truth (H-01)
2. **No schema markup detected in the catering page components** — the cluster may be missing Service/Breadcrumb/FAQ structured data entirely. Requires confirmation of whether schema is injected by a shared wrapper.
3. **SPA render parity unverified** (standing risk R-007) — applies to this cluster as to the whole site

---

## Conversion concerns

- WhatsApp CTAs are present and page-specific (verified on floating breakfast: `buildWhatsAppUrl` with per-service intent). This is a genuine strength.
- **Conversion tracking remains unverified** (R-006) — so the commercial performance of all 11 pages is currently unmeasurable.
- Retreat and grazing pages give no price signal, which typically raises enquiry friction rather than lowering it.

---

## Recommended sequence

| Step | Action | Blocked by |
|---|---|---|
| 1 | Management answers questions 1–3 in the register | — |
| 2 | Grant Search Console access | — |
| 3 | Pull query-per-URL for all 24 catering-intent pages | GSC |
| 4 | Ruling on BBQ and wedding consolidation | Step 3 |
| 5 | Fix pricing notation sitewide | Step 1 |
| 6 | Fix the 5 dual-description pages | Step 1 |
| 7 | Begin rewriting, starting with `/catering` | Steps 1–6 |

**Rewriting has not begun and should not begin at step 7's position in this list being reached early.** Writing new price-bearing copy before the pricing rule is decided would bake the contradiction into fresh content across 11 pages.

---

## Honest limitations of this audit

- Based on **source inspection**, not live-rendered pages. Rendered output may differ.
- **No Search Console, GA4 or ranking data.** Every cannibalisation judgement is structural inference, not measured evidence.
- Word counts are source-file characters including JSX markup, not rendered prose word counts.
- No competitor SERP analysis performed yet — that is Phase 3, and it requires the keyword ownership map to be approved first.
