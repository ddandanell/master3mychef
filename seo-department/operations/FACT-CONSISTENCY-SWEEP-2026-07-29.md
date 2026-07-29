# Fact consistency sweep — 2026-07-29

**Why:** retiring `/pricing-calculator` surfaced a page stating pricing terms that contradicted the rest of the site. That suggested there might be more. So I swept every `.tsx`/`.ts`/`.md` file in `src/` against the canonical values in `siteFacts.ts`.

**Checked:** deposit %, grocery policy, founding year, corporate minimum spend, cancellation windows, dining guest minimums.

---

## Clean — no contradictions found

| Fact | Canonical | Result |
|---|---|---|
| Deposit | 50% | **0 hits** for any other percentage |
| Corporate minimum spend | IDR 15,000,000 | **0 hits** for 7.5M / 50M / others |
| Cancellation | 14+ / 7–13 / <7 days | **0 hits** for 24h / 48h / 72h / 30-day variants |

The corrections shipped 28–29 Jul held. Nothing regressed.

---

## FIXED — dining minimum said 4 on three fine-dining pages

The owner-confirmed 5-guest sweep (commit `74d21212`, decisions D-006..D-009) set dining formats to **minimum 5 guests** — 39 replacements across 22 files. It missed three entries in `articleContent.ts`, all of them fine-dining tasting-menu pages:

| Page | Said | Now |
|---|---|---|
| `/fine-dining/private-chef-bali` (Michelin head-term page) | Minimum 4 guests | **5** |
| `/fine-dining/tasting-menu` | Minimum 4 guests | **5** |
| `/private-tasting-menu-bali` (301s to tasting-menu) | Minimum 4 guests | **5** |

Meanwhile `/fine-dining` itself states "Minimum 5 guests" three times and `/pricing` states "Fine dining from 5 guests". So two live commercial pages were quoting a minimum the business does not offer — a customer could book for 4 and then be turned away, or be honoured at a loss.

**This was not a new business decision** — it is a missed instance of one already made and confirmed. `Minimum 10 guests` on `/events/baby-showers` was left alone: the sweep explicitly kept events on their own numbers.

**Also fixed upstream.** The same three files in `mychef-seo/content/` still said 4. `scripts/publish-content.py` writes that folder into `articleContent.ts`, so leaving it would have silently reverted the site on the next publish run.

> ⚠️ **Path discrepancy to confirm.** `publish-content.py:20` points at `/Users/openclaw/Movies/LIve website/mychef-seo`, but the folder connected to this session is `/Users/openclaw/Downloads/mychef-seo`. I fixed the Downloads copy. **If those are two separate folders, the fix needs applying to the other one too, or the next publish will undo it.** Please confirm which path is authoritative.

---

## NOT a contradiction — grocery policy is two-tier, `siteFacts` only encodes one tier

38 matches for "ingredients/groceries included" initially looked alarming. They are not. The site consistently states a **two-tier policy**:

- **Fine dining, catering, events** → ingredients **included** in the per-person price
- **Daily / weekly villa chef ("Rent a Chef")** → groceries **billed at cost**, receipts provided

That distinction is stated consistently on `/pricing`, `/faq`, `PillarSubPage`, `LandingPage` and `/calculator`. No page contradicts another.

**But `siteFacts.groceryPolicy` says only:** `'Groceries are billed at cost, no markup'` — the second tier alone. Anyone (human or agent) treating that constant as the whole truth would wrongly "correct" the fine-dining pages.

**Recommended:** split it into `groceryPolicyIncluded` and `groceryPolicyAtCost`, or restate it as the full two-tier sentence. Not changed here — it touches copy on pages that are currently correct, and deserves a deliberate decision rather than a drive-by edit.

---

## RESOLVED — owner-confirmed 2026-07-30. Do not re-flag.

**`/journal/private-chef-ubud-villa-dining` says "We've been operating in Ubud since 2020." This is correct and must not be changed.**

The Update-2 audit listed this as a founding-year contradiction (company founded 2019). It is not one. Founding the company in 2019 and beginning Ubud operations in 2020 are compatible facts, and the owner has confirmed 2020 is the true Ubud start date.

**Ruling:** the audit item is closed as a false positive. `src/data/content/articleContent.ts` is left unchanged.

**Standing rule for future audits and agents:** a year that differs from 2019 is not automatically a contradiction. myCHEF's timeline is deliberately staggered by area:

| Claim | Year | Status |
| --- | --- | --- |
| Company founded / serving Bali | 2019 | Correct — 19 references sitewide |
| Operating in Seminyak | 2019 | Correct |
| Operating in Ubud | **2020** | **Correct — owner-verified, do not "align" to 2019** |

Any future sweep that proposes changing the Ubud 2020 date must be rejected unless the owner reverses this ruling in writing.

---

## Also retired: `/pricing-calculator`

A duplicate of `/calculator` with **zero internal links**, absent from the sitemap, returning **HTTP 404** to crawlers while rendering client-side for humans. More importantly its content was stale and contradicted live policy on two counts:

- *"Our minimum booking is for 2 guests"* — against the 5-guest dining minimum
- *"Are ingredients included? Yes."* — stated flatly on a calculator covering all services, while `/calculator` says "Groceries are not included"

301'd to `/calculator`, route and component removed. **No content migrated** — every unique FAQ on it was either stale or contradicted current pricing.

---

*SEO Director (01) / Compliance & Risk (24).*
