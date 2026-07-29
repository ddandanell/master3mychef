# Area Content Briefs — harvested from `mychef-seo/` local research

**Written:** 2026-07-29 · **Status:** BRIEFS ONLY — nothing published, no content shipped.
**Source:** `mychef-seo/Update 2/05-local-seo-gap-report.md` + `research2/local-seo-research.md` (competitor-derived, 25 Jul).
**Every claim below was checked against `src/data/privateChefAreas.ts` before being written down.**

---

## Why this is short

The source research listed a long wish-list per area. Most of it is **already on the site**. Verified counts in `privateChefAreas.ts`:

| Research said we were missing | Reality |
|---|---|
| Uluwatu sunset-timing angle | **Already covered** — 70 "sunset" references; `/private-chef/uluwatu` meta leads with "Sunset-timed clifftop dinners" |
| Travel-fee transparency | **Already written** — travel-fee FAQs live on 6 area pages |
| Area-specific FAQ depth | **Already there** — tier-1 areas carry 15 FAQs each |

Only four genuine gaps survive verification. They are below.

---

## BLOCKED ON OWNER — the highest-value item, and it needs one answer

### Travel-fee policy → unlocks FAQ schema on 6 area pages

Travel-fee FAQs are written and visible, but `PrivateChefAreaPage.tsx:141-143` deliberately **strips them out of the FAQPage schema**:

> `// Travel-fee FAQs are kept in the visible accordion but excluded from the`
> `// FAQPage schema until the business policy is confirmed.`

So we are showing the answer to users but withholding it from Google, on 6 of the highest-intent commercial pages, because the policy was never confirmed.

Competitors treat this as a headline selling point — several advertise "no extra travel fee" directly in their area FAQs; one publishes a zone table charging ~IDR 700K to Uluwatu/Bingin.

**One decision unblocks it. Options:**

| Option | What we would publish |
|---|---|
| A — Included everywhere | "No travel fee anywhere in Bali." Strongest competitive answer. |
| B — Zone table | Fixed fee per zone (e.g. South Bali included; Ubud X; Uluwatu/Bukit Y). Matches how a competitor prices it. |
| C — Quoted per booking | Keep current hedge. Weakest — competitors answer plainly and we do not. |

**Effort once decided:** XS. The copy exists; the change is removing the schema filter and setting the figures.

---

## GENUINE CONTENT GAPS — verified absent

### 1. Canggu — shared-chef / co-hire between neighbouring villas
**Evidence:** 0 matches for `co-hire`, `shared chef`, `share a chef` anywhere in `privateChefAreas.ts`.
**Why it matters:** the source research documents this as an established local demand pattern in the Canggu–Pererenan corridor (neighbouring long-stay families splitting one chef). It is a booking model we apparently offer nothing for, and it is specific enough that nobody writes about it.
**Brief:** one FAQ + a short block on `/private-chef/canggu`. Needs an owner answer first: *do we accept a shared booking across two villas, and how is it priced and staffed?* Do not write it until that is answered.

### 2. Long-stay monthly retainer, invisible on area pages
**Evidence:** 0 matches for `retainer` in `privateChefAreas.ts`, despite `/hire-private-chef-bali-monthly` existing as a page.
**Why it matters:** Canggu and Pererenan carry the densest long-stay expat demand. The monthly product exists but the area pages that catch that audience never mention it.
**Brief:** one FAQ + contextual link from the Canggu / Pererenan / Berawa area pages to `/hire-private-chef-bali-monthly`. **No owner input needed** — this is an internal link plus a pointer to an existing page. Safe to action.

### 3. Ubud — villa kitchen constraints and weather contingency
**Evidence:** 0 matches for kitchen-equipment or gas-supply constraints.
**Why it matters:** rice-field and jungle villas have genuinely limited kitchens, and outdoor dinners get rained out. Answering it pre-empts the objection and signals operational competence.
**Brief:** two FAQs on `/private-chef/ubud`. Needs ops input: *what is the actual minimum kitchen we require, and what is the standard wet-weather fallback?*

### 4. Uluwatu / Bukit — banjar fees and curfews
**Evidence:** 1 passing mention of `banjar` sitewide.
**Why it matters:** villa-event operators in the Bukit publish banjar contributions and curfew limits in their terms; clients planning clifftop events hit this and search for it.
**Brief:** one FAQ on `/private-chef/uluwatu`. **Flagged in the source research as MEDIUM business confirmation (E1) and still unanswered** — figures must not be invented. Write qualitatively or not at all.

---

## What was deliberately left out

| Item | Why |
|---|---|
| Tier-2/tier-3 area page expansion (912–1,130w vs tier-1 2,500w) | Real gap, but it sits inside the Step 5 area-consolidation decision that is **waiting on the 12 Aug measurement** by design. Acting now on 25 Jul guesses is the exact risk we agreed to avoid. |
| Per-area editorial article series | Rejected in the source research itself (R1) — avoids thin programmatic sprawl. Also contradicts the GSC finding that this is a position problem, not a coverage problem. |
| New guide/blog assets | GSC: avg position 10.3 on 12.7k impressions. Depth on ranking pages beats new URLs. |

---

## Recommended sequence

1. **Answer the travel-fee question.** One decision, unlocks schema on 6 commercial pages. Highest value per unit of effort in this document.
2. **Ship gap #2** (monthly retainer links) — needs nothing from the owner.
3. Answer the co-hire and Ubud kitchen questions, then ship #1 and #3.
4. Leave #4 qualitative unless banjar figures are confirmed.

---

*Compiled by SEO Director (01). Companion to `RESEARCH-HARVEST-2026-07-29.md`.*
