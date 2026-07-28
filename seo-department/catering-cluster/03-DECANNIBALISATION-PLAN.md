# Document 3 — De-Cannibalisation & Re-Targeting Plan

**Date:** 2026-07-28 · **Owner:** Information Architecture (05) + Keyword Research (04)
**Instruction:** stop the competing catering URLs fighting each other by giving each a distinct keyword, rather than deleting them.

---

## The governing principle

Three page jobs, three keyword types. A page may hold **one** job.

| Job | Keyword type | Who holds it |
|---|---|---|
| **Sell the service** | Commercial head term (`BBQ catering Bali`) | The `/catering/*` cluster page — always |
| **Answer a question** | Informational (`how much does BBQ catering cost in Bali`) | Editorial `/blog/*` and `/journal/*` |
| **Serve a sub-niche** | Specific format or menu term (`seafood BBQ Bali`) | The standalone landing page |

**Enforcement rule:** a non-cluster page may not use the cluster page's primary keyword in its **title tag or H1**. It may mention the term in body copy, and must link up to the cluster page with a descriptive anchor.

That single rule resolves most of the conflict without deleting anything.

---

## BBQ — five URLs, one term (the worst case)

| URL | New primary keyword | New intent | Action |
|---|---|---|---|
| **`/catering/bbq-catering`** | `BBQ catering Bali` | Commercial — book a live-chef BBQ | **Unchanged.** Cluster owner. |
| `/villa-bbq-catering-bali` | `villa BBQ party Bali` | Hosting a party at a villa | Re-title around the *party occasion*, not the catering service |
| `/seafood-bbq-catering-bali` | `seafood BBQ Bali` | Seafood-specific grill menu | **Genuinely distinct sub-niche** — keep, sharpen onto seafood/Jimbaran-style grill |
| `/bbq-grill` | `BBQ grill hire Bali` | Equipment and grill setup | Narrow to equipment/setup, drop catering framing |
| `/journal/bbq-catering-cost-breakdown-bali` | `BBQ catering cost Bali` | Informational — what it costs and why | Keep as cost editorial; must link up |

Of the five, only `seafood-bbq` and the cost guide have a genuinely independent reason to exist. `/bbq-grill` is the weakest and is the first candidate for consolidation **if** Search Console shows it earns nothing.

---

## Corporate and retreat — one page straddling two

| URL | New primary keyword | New intent |
|---|---|---|
| **`/catering/corporate-catering`** | `corporate catering Bali` | Meetings, conferences, boardroom, company events |
| **`/catering/retreat-catering`** | `retreat catering Bali` | Wellness, yoga, multi-day retreat meal plans |
| `/corporate-retreat-catering-bali` | `corporate retreat catering Bali` | Multi-day **company** offsites — business retreat, not wellness retreat |

These three are defensible as separate terms: a corporate offsite genuinely is a different search and a different buyer from both a boardroom lunch and a yoga retreat. The straddle resolves as long as the offsite page stops selling generic corporate catering and generic retreat catering, and commits to the company-offsite occasion.

---

## Editorial pages — re-point to question intent

| URL | New primary keyword | Must not target |
|---|---|---|
| `/blog/drop-off-catering-bali` | `how drop-off catering works Bali` | `drop-off catering Bali` |
| `/blog/bali-catering-menu` | `Bali catering menu ideas` | `catering Bali` |
| `/blog/corporate-events-catering-bali-team-dining` | `team dinner ideas Bali` | `corporate catering Bali` |

Each keeps its usefulness, loses the head term from its title and H1, and gains a contextual link into the matching cluster page.

---

## Wedding catering — four URLs, outside this cluster

Flagged, not actioned — wedding pages are outside the assigned scope.

| URL | Suggested primary keyword |
|---|---|
| `/bali-wedding-catering-packages` | `Bali wedding catering packages` (commercial, package-led) |
| `/wedding-catering-indonesia` | `wedding catering Indonesia` (broader geography, non-Bali) |
| `/journal/bali-wedding-catering-complete-guide` | `how to plan Bali wedding catering` (informational) |
| `/journal/villa-wedding-catering-logistics-bali` | `villa wedding catering logistics` (informational, planner audience) |

Wedding catering is the highest booking value on the site. It deserves its own dedicated pass rather than being handled as a side-effect of the catering cluster.

---

## Reducing the hub's over-reach

Two changes stop `/catering` from competing with its own children:

1. **Title.** Current: `Catering Bali | Villa & Event Catering by Private Chefs`. The trailing "by Private Chefs" imports private-chef intent into the page that must own *catering Bali*. Recommend removing at rewrite.
2. **Specialist sections on the hub** must stay at four elements — what the format is, who it suits, a verified starting price, and a link out. No full package descriptions reproduced from the child page. The hub sells the *choice*; the child sells the *format*.

---

## What must not happen

- **No deletions or redirects yet.** Several of these 13 URLs may hold the rankings or backlinks today. Removing them on structural inference would destroy earned value.
- Consolidation decisions require Search Console query-per-URL data. That remains outstanding.

## Sequence

| # | Step | Blocked by |
|---|---|---|
| 1 | Grant Search Console access | Management |
| 2 | Pull query-per-URL for all 24 catering-intent pages | Step 1 |
| 3 | Confirm which URL currently earns each head term | Step 2 |
| 4 | Apply title/H1 re-targeting per this plan | Step 3 |
| 5 | Add upward contextual links from editorial to cluster | Step 4 |
| 6 | Re-measure after 6–8 weeks; only then consider consolidation | Step 5 |

**Step 3 may overturn parts of this plan.** If a standalone landing page currently outranks its cluster page for the head term, the correct move may be to keep the incumbent and re-target the cluster page instead. That decision needs data, not preference.
