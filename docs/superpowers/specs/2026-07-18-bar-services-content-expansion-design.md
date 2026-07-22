# Bar Services Content Expansion & Navigation Simplification

## Goal

Upgrade the existing 22-page `/bar-services/` section so that every page carries at least 1,000 words of unique, keyword-optimized copy, uses 3–4 high-quality images, and is reachable from a single footer link labelled **"B2B Bar Service"**.

## Current State

- 22 pages live under `/bar-services/`: hub, 11 service pages, FAQ, contact, 7 resource pages, resources index.
- Page copy is currently ~400–700 words of rendered body text.
- Navbar has a grouped "Bar Services" dropdown; footer has a full Bar Services column.
- Images: 1 hero + 1 body image per service; hero + resource images for hub/resources. Total ~54 fallback images generated from existing assets.
- OpenAI DALL-E is not available (the configured key resolves to a chat-only Kimi endpoint). Previous BFL account also had insufficient credits.

## Proposed Changes

### 1. Navigation simplification

- **Navbar:** Remove the "Bar Services" top-level item and dropdown entirely. The hub is no longer in the main nav.
- **Footer:** Replace the full Bar Services column with one link: **"B2B Bar Service" → `/bar-services/`**.
- **Hub page (`/bar-services/`):** Make the hub the canonical discovery page. Add clear grouped cards for all 11 services plus FAQ, Contact, and Resources so the footer link surfaces everything.
- **Cross-links:** Keep the small inline cross-links from `/bartender-hire-bali` and `/staffing/villa-managers` (they already point to `/bar-services/`).

### 2. Content expansion to 1,000+ words per page

For every service page, combine:

1. Existing data-driven sections (hero, problem, deliverables, process, included, proof, FAQ, quote block, cross-sells, resources, enquiry form, lead magnet).
2. Expanded narrative sections sourced from the blueprint `06-website-copy/` and `04-service-design/` docs:
   - **Why this matters in Bali** (local labour law, licence, and market context).
   - **Who this is for** (hotels, villas, beach clubs, restaurants, event organisers, private estates).
   - **Common mistakes venues make** (unique per service).
   - **Compliance & risk notes** (RSA, KUHP, licensing).
   - **What success looks like** (KPIs, guarantee, measurable outcomes).
   - **How this connects to other MyChef services** (internal linking).
3. Keyword-optimized intro/outro paragraphs using the primary and secondary keywords from the blueprint SEO plan.

Pages to expand:
- `/bar-services/` (hub)
- `/bar-services/bar-staff-training/`
- `/bar-services/cocktail-menu-development/`
- `/bar-services/signature-cocktail-creation/`
- `/bar-services/temporary-bartender-staffing/`
- `/bar-services/permanent-bar-staff-recruitment/`
- `/bar-services/new-bar-setup/`
- `/bar-services/bar-audit-improvement/`
- `/bar-services/bar-costing-inventory-control/`
- `/bar-services/bar-equipment-supply-rental/`
- `/bar-services/monthly-bar-management-support/`
- `/bar-services/complete-bar-performance-programme/`
- `/bar-services/faq/`
- `/bar-services/contact/`
- `/bar-services/resources/` (index)
- 7 resource pages

### 3. Images: 3–4 per page

For each service page:
1. Hero image (existing or regenerated).
2. Body image 1: service in action (training, menu tasting, audit, staffing).
3. Body image 2: venue/context shot (villa bar, hotel bar, beach club).
4. Body image 3: result/detail shot (cocktail close-up, team behind bar, equipment).

For hub, FAQ, contact, resources: keep hero + add 2 relevant supporting images.

Image generation strategy:
1. Attempt OpenAI DALL-E 3 first.
2. If unavailable (expected), fall back to **Pollinations** open image API for fast, cost-free generation.
3. If Pollinations quality is insufficient, fall back to **BFL FLUX** if credits allow.
4. Final fallback: reuse existing brand assets with Sharp overlays/crops.

All images will be WebP/JPG, optimized, SEO-named, and registered in `src/lib/imageDimensions.ts`.

### 4. SEO optimization

- Use primary keyword in H1 and first paragraph.
- Use secondary keywords in H2/H3 subheadings and body copy.
- Add semantic H2/H3 structure so each 1,000-word page is scannable.
- Keep meta titles/descriptions intact unless blueprint provides better ones.
- Add internal links between services and resources.
- Ensure schema markup (service, breadcrumb, FAQ) remains valid.

### 5. Quality guardrails

- Each page must have unique body copy; no duplicated paragraphs across pages.
- Content must be factually aligned with the blueprint (pricing, process, compliance).
- No location pages under `/bar-services/` (user explicitly excluded them).
- Build, sitemap, redirects, and price-floor checks must pass before deploy.

## Trade-offs

| Approach | Effort | Result |
|----------|--------|--------|
| A. Expand all 22 pages + new images | High | Strongest SEO and user experience; matches user request. |
| B. Expand only 11 service pages + hub | Medium | Faster, but resources/FAQ/contact remain thin. |
| C. Pilot 3 pages first | Low | Quick validation, but leaves most pages under-optimised. |

**Recommendation:** Approach A, executed page-by-page with subagents so each page gets focused attention.

## Implementation Plan

After this spec is approved, invoke `writing-plans` to produce a page-by-page task list covering:
1. Navigation/footer changes.
2. Content expansion per page.
3. Image generation and registration.
4. Build validation and deployment.
