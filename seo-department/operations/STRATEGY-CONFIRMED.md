# Confirmed Strategy — owner decision 2026-07-28

**This supersedes the open head-term question in `04-SERP-RESEARCH-FINDINGS.md`.**

---

## The goal, in the owner's words

> Win **first position on all Bali locations**, for **private chef and catering**. Bali only.

**Jakarta is deliberately out of scope** — removed because there is no staff to service it. Do not build for it, do not target it, do not treat Jakarta rankings as a win.

*Verified 2026-07-28:* Jakarta is already cleanly removed — absent from `public/sitemap.xml` and `page-meta.ts`; only a redirect entry and two incidental mentions remain. The 212 impressions / 19 clicks still showing at position 5.9 are residual index memory and will decay. **No action needed.** Note that until it decays, roughly 12% of clicks are unqualified.

---

## What the GSC export (762 queries, 28 days) establishes

**Private chef is the head category.** Chef queries carry **57.8%** of impressions; catering **25%**. Catering is the supporting cluster, not the anchor.

### The single biggest opportunity

| Query | Impressions | Position | Clicks |
|---|---:|---:|---:|
| **private chef bali** | **749** | **18.4** | 21 |

Largest query on the site by a wide margin, stuck on **page two**. Moving this to page one is worth more than every metadata change made on 2026-07-28 combined. **This is priority one.**

### Area pages are already working — protect them

| Query | Position | CTR |
|---|---:|---:|
| private chef canggu | 5.9 | 5.9% |
| canggu private chef | 6.4 | 4.4% |
| private chef uluwatu | 6.3 | 5.5% |
| private chef in bali | 7.0 | 5.1% |
| bali private chef | 9.6 | 3.3% |

The 61-page `/private-chef/{area}` architecture is the thing earning rankings. **Do not consolidate or thin it.** Earlier suspicion that these were doorway pages was investigated and rejected — see decision D-002.

### Striking distance — 1,051 impressions on page two

| Query | Impressions | Position | Clicks |
|---|---:|---:|---:|
| private chef bali | 749 | 18.4 | 21 |
| bali villa catering | 94 | 15.4 | **0** |
| private chef bali villa | 94 | 15.9 | **0** |
| private chef villa menu | 73 | 12.0 | **0** |
| corporate event catering bali | 41 | 18.5 | **0** |

### Ranking but not converting — snippet problems, not ranking problems

| Query | Impressions | Position | CTR |
|---|---:|---:|---:|
| private chef | 266 | 8.2 | 1.1% |
| home chef | 75 | 9.5 | **0%** |
| how to ensure food safety and sourcing… | 78 | 6.0 | **0%** |

Page one, almost no clicks. These are title and description failures, distinct from the position problem above — and cheap to fix.

---

## Correction to an earlier diagnosis

On 2026-07-28 `bali wedding catering` was diagnosed as a CTR/snippet problem from partial data (260 impressions, 2 clicks). The full export shows **position 27.9** — page three, where a 0.5% CTR is normal. **It is a ranking problem, not a snippet problem.** The metadata split shipped that day was reasonable housekeeping but will not move clicks until position improves. Do not expect a lift from it.

---

## Working order for the next session

1. **`private chef bali` — position 18.4 → page one.** Everything else is smaller. Identify which URL ranks for it, then work position: internal links from the strongest pages, on-page relevance, and the four-URL wedding-style conflicts if any exist on this term.
2. **The five striking-distance queries** — four earn literally zero clicks despite page-two positions.
3. **Snippet fixes** on `private chef`, `home chef`, and the food-safety query — page one already, wasted.
4. **Location coverage** — the goal is first position on *all* Bali areas. Audit which of the 61 areas rank, which don't, and why. Canggu and Uluwatu are the proof the model works; find the gap.
5. Catering as the supporting cluster, after the above.

## Standing constraints

- **Domain Rating 23** (Ahrefs, 2026-07-28). Modest. Position gains will come from relevance and internal linking before external authority — but link building has real headroom.
- **Do not build for Jakarta or any non-Bali geography.**
- Seven owner questions remain unanswered and still block copy work — see `NEXT-SESSION-BRIEF.md`.
