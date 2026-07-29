# Wedding Cluster Consolidation Plan — C-004

**Owner:** Information Architecture (05) + Keyword Research (04) · **Date:** 2026-07-30
**Status:** ⚠️ **AWAITING OWNER APPROVAL — no redirect has been implemented**
**Evidence base:** `seo-department/data/gsc-2026-07-28/` (Pages.csv, Queries.csv) + codebase internal-link audit

---

## 1. The problem, measured

Four live URLs compete for one commercial intent. A fifth was already redirected.

| URL | Impressions | Avg position | Clicks | Internal links in |
|---|---|---|---|---|
| `/bali-wedding-catering-packages` | 609 | 24.0 | 4 | 7 files |
| `/events/weddings` | 373 | **38.4** | **0** | **35 files** (incl. sitewide footer) |
| `/blog/wedding-private-chef-bali-planning-guide` | 271 | **11.9** | **0** | 5 files |
| `/journal/bali-wedding-catering-complete-guide` | 34 | 39.0 | **0** | 1 file |
| `/blog/wedding-rehearsal-dinner-bali` | 4 | 7.3 | 0 | already 301 → `/events/weddings` |
| **TOTAL** | **1,291** | — | **4** | — |

**1,291 impressions → 4 clicks = 0.31% CTR.**

For scale: this is **72× the impressions** `/catering/babi-guling` earns (18), and it is the site's
highest-value booking intent. Query-side confirmation: `bali wedding catering` alone is **424
impressions at position 27.9** — the second-largest single query on the entire site after
`private chef bali`.

---

## 2. The core defect (this is the actual finding)

**The page with the most internal authority ranks the worst, and it is the only one without prices.**

`/events/weddings` is unambiguously the site's designated wedding page:

- 35 internal linking files, including the **sitewide footer** and `related-services.ts`
- Correct commercial title: *"Wedding Catering Bali | Villa Wedding Specialists"*
- Correct commercial H1: *"Wedding Catering in Bali — Villa Weddings, Run by One Team"*
- Substantial: 624 lines / ~4,579 words

Yet it sits at **position 38.4 with zero clicks**, while:

- `/bali-wedding-catering-packages` (7 internal links) ranks **14 places better** at 24.0
- `/blog/wedding-private-chef-bali-planning-guide` (5 internal links) ranks **26 places better** at 11.9

**Measured difference:** `/events/weddings` contains only 3 pricing references, and they are
peripheral (IDR 1.5M, IDR 250,000, IDR 700K — add-on and per-item figures). The packages page
carries **14 IDR references** structured as per-guest package pricing.

**Interpretation.** People searching "bali wedding catering" are overwhelmingly in cost-research
mode. The page Google is being pointed to by internal links cannot answer the cost question, so a
thinner page that can is outranking it. This is an **intent-completeness gap, not a link-equity
problem** — which matters, because it means the largest available gain does **not** require
redirecting anything.

> **Confidence: medium-high.** The pricing gap is verified in the code. The causal claim that it
> explains the ranking gap is inference. Query-per-URL data would confirm it — see §6.

---

## 3. Proposed intent architecture

One primary intent per URL, no two pages competing on the same job.

| URL | Owns | Primary keyword | Must NOT own | Action |
|---|---|---|---|---|
| `/events/weddings` | The **decision + booking**. Formats, logistics, staffing, coordination, **and headline pricing**. The page that converts. | `wedding catering Bali` | Deep cost breakdowns; private-chef-as-a-person intent | **Strengthen** — add headline pricing + link down to the detail page |
| `/bali-wedding-catering-packages` | The **cost detail**. Per-guest prices by package and headcount, what changes the total. | `Bali wedding catering packages` / `wedding catering Bali cost` | The generic `wedding catering Bali` head term | **Retarget + subordinate** — keep, but point it at cost intent and link up to `/events/weddings` |
| `/blog/wedding-private-chef-bali-planning-guide` | **Private chef for a wedding** — a genuinely distinct service question. | `wedding private chef Bali` | `wedding catering Bali` | **Keep, sharpen boundary.** Ranks 11.9 — the strongest asset in the cluster. Do not touch the URL. |
| `/journal/bali-wedding-catering-complete-guide` | Nothing distinct. Duplicates budgets (page 2) and logistics (page 3). | — | — | **Consolidation candidate** — see §4 |

---

## 4. Redirect proposal — ONE redirect only

**Proposed:** `301 /journal/bali-wedding-catering-complete-guide → /events/weddings`

Rationale:

- Lowest impressions in the cluster (34), position 39.0, **zero clicks**
- Only **1** internal link pointing to it — negligible internal equity to lose
- Its two subjects are already covered better elsewhere: budgets by `/bali-wedding-catering-packages`, logistics by `/blog/wedding-private-chef-bali-planning-guide`
- Any genuinely unique content merges into `/events/weddings` before the redirect ships

**Explicitly NOT proposed for redirect:**

| URL | Why it stays |
|---|---|
| `/blog/wedding-private-chef-bali-planning-guide` | Position **11.9** is the best in the cluster. Redirecting a page ranking this well to one ranking 38.4 would be destructive. Its intent is also legitimately different. |
| `/bali-wedding-catering-packages` | 609 impressions and the only 4 clicks in the cluster. Cost intent is real and deserves a URL. Retarget, don't remove. |

This deliberately follows the master-system rule: *never delete pages with links or rankings
without evidence.* Three of four pages keep their URLs.

---

## 5. Sequencing — lowest risk first

**Phase 1 — no redirects, no URL changes (do this first, measure for 3–4 weeks)**

1. Add a headline pricing section to `/events/weddings` — per-guest ranges by package tier, with a clear link through to `/bali-wedding-catering-packages` for the full breakdown.
   *Requires:* owner-approved wedding pricing. **Not currently documented in the repo — see §7.**
2. Retarget `/bali-wedding-catering-packages` title/H1 onto cost intent, removing competition for the bare head term.
3. Sharpen `/blog/wedding-private-chef-bali-planning-guide` toward *private chef* wording so it stops competing on *catering*.
4. Audit the 35 internal links to `/events/weddings`: make anchor text consistently `wedding catering Bali`, and repoint any cost-flavoured anchors to the packages page.

**Phase 2 — after Phase 1 is measured**

5. Merge unique content from the journal guide into `/events/weddings`.
6. Ship the single 301.

**Rollback:** the Phase 2 redirect is a one-line reversal in both `vercel.json` and
`src/data/redirects.ts`. Phase 1 is fully reversible via git.

---

## 6. What would change this plan

State plainly, per department data-honesty rules:

1. **Query-per-URL data is missing.** The 2026-07-28 export has Pages.csv and Queries.csv as
   *separate* files, so no query can be attributed to a specific URL. This is open roadmap task
   **T-003**. If query-per-URL shows `/bali-wedding-catering-packages` — not `/events/weddings` —
   already earning the head term, the winner designation in §3 should flip.
2. **No search volume data.** Ahrefs returned "insufficient plan"; Semrush was blocked by an
   Anthropic-side classifier outage on 2026-07-30 (the account itself authenticates fine).
   Volume and difficulty would let this cluster be priority-scored against the BBQ cluster.
3. **Data window unknown.** The export's date range is not recorded. A short window would make all
   position figures unstable.

---

## 7. Blocked on the owner

| # | Needed | Blocks |
|---|---|---|
| 1 | **Approved wedding catering pricing** — per-guest by package/headcount. The repo has no verified wedding price source, and `/events/weddings` currently states almost none. | Phase 1 step 1, the single highest-value action in this plan |
| 2 | Approval of the single 301 in §4 | Phase 2 |
| 3 | Ruling on **CF-001** (pricing scattered across 4+ URLs) | Consistency of any price added here |

**Nothing in §4 or §5 will be implemented without explicit sign-off.**

---

## 8. Cross-references

- `CONTRADICTION-REGISTER.md` — C-004 wedding cluster (this document is the response)
- `SEO-RISK-REGISTER.md` — R-002 intent overlap across page families
- `SEO-DECISION-LOG.md` — D-012 (babi guling scope), CF-001 (pricing sources)
- `02-KEYWORD-OWNERSHIP-MAP.md` — unresolved item 4: "ruling on the 4-page wedding catering group"
