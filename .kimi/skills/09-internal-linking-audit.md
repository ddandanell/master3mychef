# Skill 09 — Internal Linking Audit

**Purpose:** Ensure high-value pages are reachable and linked from the RIGHT hubs — not orphaned and not linked only through dead/redirected pages.

**When to use:** After adding pages; during SEO sprints; when a money page underperforms.

## Checklist
1. For each money page (pricing, cost guide, each service, each location, chef profiles), `grep -rn "<path>" src/` → count inbound internal links.
2. **Links must originate from LIVE pages**, not dead ones (a link from `BlogPage.tsx` counted for nothing — it was unrouted). Re-verify the linking page with Skill 04.
3. Hub correctness: location pages link from the locations hub; services from the services hub; articles from `/journal`.
4. Orphans: 0 inbound internal links from live pages = orphan → add contextual links from relevant hubs.
5. Avoid over-linking: 1–3 contextual links beat a wall of links.

## Verification
- Every money page has ≥2 inbound links from live, indexable pages.
- No money page depends on a redirected/dead page for its only link.

## Output
Table: page | inbound links (from live pages) | hub correct? | orphan? | action.
