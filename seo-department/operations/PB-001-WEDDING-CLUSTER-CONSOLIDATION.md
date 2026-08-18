# Page Brief — Wedding Cluster Consolidation

**Brief ID:** PB-001 · **Date:** 2026-08-10 · **Author:** 04 Keyword Research + 08 On-Page · **Approver:** 01 + Management
**Status:** ✅ **OPTION A SHIPPED 2026-08-10** — approved by owner ("to all, we recommend"). Metadata + keyword ownership changed; no URLs touched, fully reversible. See §8 for what was actually done and §4 for what remains unverified.
**Addresses:** C-004 (roadmap Days 16–30, item 5) · related to R-002 (intent overlap across page families)

---

## 1. Commercial basis

- **Page objective:** stop three pages competing for one commercial query so that a single page can rank and take the enquiry.
- **Target audience:** couples planning a villa wedding in Bali, researching catering cost and inclusions ahead of booking.
- **Conversion action:** WhatsApp enquiry for a fixed wedding catering proposal.
- **Expected commercial value:** the roadmap already flags weddings as **highest booking value** of any cluster. Current capture is close to zero.
- **Why an existing page cannot do this:** an existing page *should* do this. The problem is that **four** are trying to, so none is chosen. This brief consolidates rather than creates — no new page is proposed.

---

## 2. Search basis — the evidence

**Measured, Google Search Console, 1 Jun – 8 Aug 2026 (`dataState: final`), pages matching "wedding":**

| Page | Impressions | Avg position | Clicks | CTR |
|---|---|---|---|---|
| `/bali-wedding-catering-packages` | 847 | 22.6 | 7 | 0.83% |
| `/events/weddings` | 572 | 34.8 | 2 | 0.35% |
| `/blog/wedding-private-chef-bali-planning-guide` | 350 | **15.0** | 1 | 0.29% |
| `/journal/bali-wedding-catering-complete-guide` | 12 | 25.8 | 0 | 0% |
| **Total** | **1,781** | — | **10** | **0.56%** |

**Query-level split for the head term `bali wedding catering` (14 Jul – 8 Aug):**

| Page | Impressions | Position |
|---|---|---|
| `/bali-wedding-catering-packages` | 180 | 28.4 |
| `/events/weddings` | 171 | 42.5 |
| `/catering/` | 6 | 85.8 |

Three URLs, one intent, **351 impressions and 1 click**. This is the signature of cannibalisation: Google has impressions for the site but no confident choice of page, so all candidates rank mid-page-3 instead of one ranking page 1.

**Two further observations worth recording:**

1. **The best-ranking wedding page is a blog post** (`/blog/wedding-private-chef-bali-planning-guide`, position 15.0) — it outranks both commercial pages. Informational content is earning the relevance the money pages should own.
2. `/events/weddings` ranks **position 1.85 for `villa wedding catering bali`** on 40 impressions with **zero clicks**. Flagged, not diagnosed. 40 impressions is too small a sample to act on and it may be a SERP-feature artefact. Do not treat as established.

**Nine wedding paths exist in `page-meta.ts`**; only four register impressions. The remaining five (`/wedding-catering-indonesia`, `/blog/bali-wedding-catering-private-chef-timeline`, `/blog/bali-wedding-catering-budget-guide`, `/journal/villa-wedding-catering-logistics-bali`, `/help/wedding-guide`) are invisible and dilute internal linking.

- **Cannibalisation check — competing URLs reviewed:** ☑ confirmed present (this brief *is* the finding)

---

## 3. Recommendation — Option A (recommended): intent separation, no URL changes

**`/bali-wedding-catering-packages` becomes the single target for commercial "wedding catering" intent.** It already carries the most impressions, the best commercial position, and 7 of the cluster's 10 clicks.

`/events/weddings` is **retained** — it sits inside the `/events/` hub and deleting it would break site architecture — but is **re-pointed away from the catering-cost query** toward villa wedding *production and staffing* intent, which it does not currently compete for.

| Page | New role | Metadata change |
|---|---|---|
| `/bali-wedding-catering-packages` | Owns `bali wedding catering`, `wedding catering bali`, `+ packages/prices` | Keep; strengthen head-term prominence in title |
| `/events/weddings` | Owns villa wedding *production*, staffing, day-of service | Re-target title/H1/description away from "Wedding Catering Bali" |
| `/blog/wedding-private-chef-bali-planning-guide` | Informational; feeds the commercial page | Add prominent contextual link → packages page |
| `/journal/bali-wedding-catering-complete-guide` | Informational | Same |

**Why Option A over redirects:** the master system forbids deleting or redirecting pages with existing links or rankings without evidence, and both commercial pages hold rankings. Intent separation captures most of the benefit at a fraction of the risk, and is reversible.

**All metadata changes route through `src/data/page-meta.ts`** (the centralised typed source of truth) — no per-page edits.

### Option B (alternative): 301 consolidation

Redirect `/events/weddings` → `/bali-wedding-catering-packages`, merging content. Higher potential upside, materially higher risk: it removes a hub page, requires a redirect plan, and forfeits 572 impressions of existing (if poor) visibility. **Requires explicit management approval and a rollback plan.** Not recommended as a first move.

---

## 4. Required factual content

| Fact needed | Source | Verified? |
|---|---|---|
| Wedding catering price floors (per-person bands) | `src/data/siteFacts.ts` / pricing page | ☐ — must be confirmed before any copy change |
| Guest-count minimums for wedding formats | Management | ☐ |
| What "production" includes vs "catering" | Management | ☐ — the split defines the two pages |

**Facts requiring management confirmation:** the catering-vs-production service boundary. This brief cannot proceed to copy without it — inventing the distinction would breach the no-fabrication rule.
**Prices requiring verification:** any per-person figure used in new metadata.
**Claims requiring evidence:** none proposed.

---

## 5. Honest expectation setting

- **This will not produce a page-1 ranking on its own.** R-011 records Authority Score 6 / DR 23 with ~72% of referring domains being link farms, and ~290 queries stuck below position 20. Consolidation removes self-inflicted damage; it does not manufacture authority.
- A realistic near-term outcome is **one page moving from ~28 to the low 20s / high teens**, concentrating 1,781 split impressions behind a single URL. Whether that reaches page 1 depends on link acquisition, which is a separate workstream (15 Digital PR).
- **Measurement window: 6 weeks minimum** before judging, consistent with how R-013 is being handled.
- No ranking, traffic or revenue outcome is guaranteed.

---

## 6. Approval gate

Per `00-SEO-MASTER-SYSTEM.md`, management approval is required before changing service descriptions or redirecting significant pages.

- ☐ Management confirms the catering-vs-production service boundary
- ☐ Management approves Option A (intent separation) **or** Option B (301 consolidation)
- ☐ Prices in any new metadata verified against approved pricing documents

**Nothing ships until these are ticked.**

---

## 8. What was actually shipped (2026-08-10)

**The root cause was in code, not just metadata.** `src/data/keywordOwnership.ts` explicitly assigned the head term `wedding catering bali` to `/events/weddings` — the page ranking #42 for it — while restricting `/bali-wedding-catering-packages` to long-tail only. That registry is the reason the two pages fought. Metadata alone would have been silently reverted by the next person who read it.

| File | Change |
|---|---|
| `src/data/keywordOwnership.ts` | `/bali-wedding-catering-packages` primary → **`bali wedding catering`** (head term), secondary now includes `wedding catering bali`. `/events/weddings` primary → `villa wedding catering bali` (kept **on evidence** — it ranks position 1.85 for it), secondary moved to multi-day production terms. |
| `src/data/page-meta.ts` — `events-weddings` | Title `Wedding Catering Bali \| Villa Reception Production` → **`Bali Villa Wedding Production \| Multi-Day F&B`**. H1 and description re-pointed to welcome dinner / ceremony day / recovery brunch and logistics. |
| `src/data/page-meta.ts` — `bali-wedding-catering-packages` | Title → **`Bali Wedding Catering \| Packages & Prices 2026`** (head term now leads). H1 → `Bali Wedding Catering — Packages & Prices by Guest Count`. |

**Verified:** `npx tsc -b` and `npx eslint` both pass. All titles ≤60 chars, all descriptions ≤160 chars. No other entry in the registry claims the head term.

**Deliberately NOT done:**
- **No new internal links.** Section 3 proposed adding contextual links from the informational pages. On inspection **17 files already link to the packages page**, including the top-ranking blog (3 links). Adding more would be over-linking, so this item is closed as already satisfied rather than actioned.
- **No copy or price changes.** The §4 facts remain unverified, so nothing that would require them was touched. The service boundary was derived from **existing published page content** (source hierarchy #3 — official website), not invented: `/events/weddings` already covers welcome dinner, ceremony day, recovery brunch, mobile kitchens, power, villa access and rain plan, while the packages page already covers per-guest bands and inclusions.

**Nothing is live until the site is rebuilt and deployed.** Metadata is compiled into the prerendered HTML.

## 7. Cross-references

- Head term `private chef bali` is a **separate** and currently **held** issue — see R-013, review mid-September 2026. The homepage ranks #7 for it while `/private-chef-bali` ranks #23; owner decided 2026-08-10 to leave it until the measurement window closes.
- Conversion measurement caveat: GA4 was proven on 2026-08-10 to capture only ~2 of 14 real WhatsApp leads. Enquiry counts attributed to any page in this cluster are floors, not true values.
