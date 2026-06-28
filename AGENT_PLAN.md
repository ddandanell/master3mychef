# myCHEF.id Website Restructure — Orchestrator Plan

## Baseline
- Branch: `agent/restructure`
- Commit: `8963618` ("baseline: preserve existing journal content updates before restructure")
- Worktrees created for parallel agent work

## Shared Contract (ALL agents must follow)

### SEO Preservation Rules (MANDATORY)
- DO NOT change any URLs
- DO NOT change meta titles on these pages:
  - `/` → "Private Chef Bali | Villa Dining, Catering & Events — myCHEF"
  - `/fine-dining` → "Private Dining Bali | Michelin-Trained Chef in Your Villa — myCHEF"
  - `/pricing` → "Private Chef Pricing Bali | Transparent Rates | myCHEF.id"
- DO NOT remove existing schema markup structures (only update prices within them)
- DO NOT touch any location pages (`/locations/*`, `/canggu`, `/seminyak`, etc.)
- DO NOT touch any catering sub-pages (`/catering/*` except `/catering` itself)
- DO NOT touch any events sub-pages (`/events/*` except `/events` itself)
- DO NOT touch `/in-villa-service`, `/staffing`, `/help`, footer, WhatsApp links, `/quote`
- DO NOT change breadcrumb structure
- Keep all existing internal links to location pages

### Code Style
- Use the existing React + TypeScript + Tailwind CSS patterns in the repo
- Do not introduce new dependencies
- Preserve existing animation/gsap patterns where present
- Preserve existing component imports and exports
- Keep existing Lucide icons; only add new ones if needed
- Preserve all existing WhatsApp `wa.me` links and `data-source` attributes on CTAs

### Validation
- After changes, run `cd /worktree && npx tsc --noEmit` (if node_modules available) or at least check for TypeScript errors visually
- Ensure no JSX syntax errors
- Ensure all closing tags match opening tags
- Do not remove existing sections unless explicitly instructed

---

## Task Slices

### Agent 1: Nav + Homepage Worker
**Worktree:** `/Users/openclaw/Movies/LIve website/.worktrees/navbar-homepage`
**Branch:** `agent/navbar-homepage`
**Files:** `src/components/Navbar.tsx`, `src/pages/HubPage.tsx`
**Forbidden:** All other files

#### Navbar Changes (Navbar.tsx)
Reorder `NAV_ITEMS` array so the order is:
1. Catering → /catering
2. Fine Dining → /fine-dining
3. Events → /events
4. In-Villa → /in-villa-service
5. Staffing → /staffing
6. Locations → /locations
7. Help → /help

#### Homepage Changes (HubPage.tsx)
1. **Hero Headline:** Change from "A Michelin-Trained Private Chef, in Your Bali Villa." to "Your Villa. Our Kitchen."
2. **Service Cards (PORTALS array):** Reorder so Catering is first, Fine Dining second, Events third. Update subtitles:
   - Catering: "BBQ, buffet, plated dinners. Babi guling. Drop-off or full service. We handle everything. You enjoy."
   - Fine Dining: "A private chef cooks exclusively for your group. Multi-course tasting menus — Italian, French, Mediterranean, Wagyu. Your villa. Just your table. From 6 guests."
   - Events: keep as-is
3. **Trust paragraph** (the one under hero stats): Change from "Founded by Adriano — trained under a Michelin-starred chef in Milan — myCHEF.id delivers restaurant-level private dining to Bali's finest villas with a 50+ person hospitality team." to "Founded by Adriano — trained under a Michelin-starred chef in Milan — myCHEF.id delivers restaurant-level dining to Bali's finest villas. From intimate fine dining for 6 to catering for 200, our 50+ person hospitality team handles every detail."
4. **Keep everything else unchanged** — hero subheadline, CTAs, how it works, trust section, reviews, FAQ, gallery, etc. all stay as-is.

---

### Agent 2: Fine Dining Restructure Worker
**Worktree:** `/Users/openclaw/Movies/LIve website/.worktrees/fine-dining`
**Branch:** `agent/fine-dining`
**Files:** `src/pages/LunaPage.tsx`, `src/pages/FineDiningMenusPage.tsx`
**Forbidden:** All other files, especially location pages, catering sub-pages, events sub-pages

This is the largest task. The `/fine-dining` page (LunaPage.tsx) needs major restructuring. Read the full blueprint copy at `/Users/openclaw/Downloads/Fine dinner Catering Website Strategy Blueprint/mychef-new-copy.md` for exact text to paste.

#### LunaPage.tsx Changes
1. **Hero Section:**
   - Add chapter label: "Chapter 1 — Private Villa Fine Dining"
   - Headline: "Private Fine Dining in Your Bali Villa"
   - Subheadline: "Italian, French, Mediterranean & Wagyu tasting menus prepared by a Michelin-trained team. Served privately in your villa. Minimum 6 guests."
   - Price display: "From IDR 1,750,000++ per guest"
   - Primary CTA: "Reserve My Private Dinner"
   - Secondary CTA: "Explore Menus"
   - Below-hero note: "Weekends fill fast — book early"
   - Trust pills: 500+ villa dinners served | 6–24 guests | Italian · French · Mediterranean · Wagyu | Wine pairing +IDR 850K | 2.5–3 hour journey | Same-day confirmation or your money back | Chef can't make it? Replacement within 2h or 100% refund

2. **Side Navigation (tabs):** Reorder to:
   1. Fine Dining Overview
   2. Our Menus
   3. Tasting Menu
   4. Chef's Table
   5. Romantic Dinner
   6. Our Chefs

3. **NEW SECTION: Fine Dining Overview**
   - Headline: "A Private Restaurant, Built Inside Your Villa for One Night"
   - Body paragraphs as specified in copy document

4. **NEW SECTION: Choose Your Experience (Two-Tier Display)**
   - Card 1: Full-Service Experience (IDR 2,200,000++)
   - Card 2: Kitchen-Service Experience (IDR 1,750,000++)
   - Exact copy from the blueprint document

5. **SECTION: Our Menus (RESTRUCTURED)**
   - Add Italian Experience menu (NEW)
   - Add French Experience menu (NEW)
   - Mediterranean Sea Experience (keep existing, update pricing to show both tiers)
   - Wagyu Experience (keep existing, update pricing to show both tiers)
   - Add Custom Menu (NEW)
   - All with exact copy from the blueprint document

6. **SECTION: Tasting Menu (UPDATED)**
   - Update pricing: 5-Course Kitchen-Service IDR 1,750,000++ / Full-Service IDR 2,200,000++
   - 7-Course Kitchen-Service IDR 2,200,000++ / Full-Service IDR 2,600,000++
   - Add cuisine options text
   - Add wine pairing: +IDR 850,000 per guest
   - Minimum: 6 guests

7. **SECTION: Chef's Table (UPDATED)**
   - Always Full-Service (no Kitchen-Service option)
   - Add cuisine options
   - Add interactive cooking description
   - Keep IDR 3,500,000++ per person

8. **SECTION: Romantic Dinner (REPOSITIONED)**
   - Move to end of page (after Our Chefs)
   - Update copy to "by special arrangement" positioning
   - Update pricing: Kitchen-Service IDR 2,800,000/couple, Full-Service IDR 3,500,000/couple
   - Add explicit note about 6+ guest standard and 2-guest exception

9. **SECTION: Our Chefs (MINOR UPDATE)**
   - Keep all existing chef bios
   - Add the new paragraph about cuisine specialisations after "These are the four"

10. **Schema updates:** Update any price references in schema/JSON-LD to match new two-tier pricing. Keep schema structure.

#### FineDiningMenusPage.tsx Changes
- If this page has menu cards, restructure them to match the 5-menu structure (Italian, French, Mediterranean, Wagyu, Custom) with two-tier pricing on each.
- Preserve existing page structure and SEO.

---

### Agent 3: Pricing Page Worker
**Worktree:** `/Users/openclaw/Movies/LIve website/.worktrees/pricing`
**Branch:** `agent/pricing`
**Files:** `src/pages/PricingPage.tsx`
**Forbidden:** All other files

#### PricingPage.tsx Changes
1. **Update the `SECTIONS` array:**
   - Modify the transparency section (`id: 'transparency'`) to include the new two-tier pricing explanation for Fine Dining (Full-Service vs Kitchen-Service)
   - Add In-Villa Staffing pricing text
   - Add Staffing & Placement pricing text
   - Keep existing Villa Chef/Catering and Events text

2. **NEW SECTION: Fine Dining Pricing Table**
   - Add a new section with id `fine-dining-pricing-table` that shows:
   - Table with columns: Menu | Kitchen-Service | Full-Service | Cuisine Style
   - Rows: Italian, French, Mediterranean Sea, Wagyu, Custom, Chef's Table, Romantic Dinner
   - All prices from the blueprint
   - Note: "All prices are per person and subject to 10% service charge and 11% government tax."
   - Wine pairing: +IDR 850,000 per guest

3. **NEW SECTION: Experience Comparison**
   - Add a comparison table: Full-Service vs Kitchen-Service
   - Columns: Feature | Full-Service | Kitchen-Service
   - Rows covering: Plates & glassware, Cutlery & linen, Table decoration, Service staff, Equipment, Cleanup, Atmosphere, Price, Best for
   - Exact copy from the blueprint document

4. **Update FAQ:** Update the minimum guest count answer to reflect "Fine dining: 6 guests minimum (2 for romantic dinners by special arrangement)."

5. **Schema updates:** Update `PRICING_OFFER_SCHEMA` and `PRICE_SPECIFICATION_SCHEMA` to include the new menu prices and two-tier structure. Keep existing structure but update prices.

6. **Keep existing sections:** pricing calculator, what affects quote, catering pricing, events pricing, staffing pricing, what included, fast quote, CTA.

---

### Agent 4: Catering Cross-Promotion Worker
**Worktree:** `/Users/openclaw/Movies/LIve website/.worktrees/catering`
**Branch:** `agent/catering`
**Files:** `src/pages/CateringMainPage.tsx`
**Forbidden:** All other files

#### CateringMainPage.tsx Changes
1. **Add cross-promotion section AFTER the hero section:**
   - Headline: "Looking for a Multi-Course Tasting Menu?"
   - Body: "For groups of 6 or more, our Private Fine Dining experience offers Italian, French, Mediterranean, and Wagyu tasting menus prepared by a Michelin-trained chef in your villa."
   - CTA: "Explore Fine Dining →" linking to `/fine-dining`
   - Style it to match the existing catering page design (use similar card/styling patterns)

2. **Keep everything else unchanged.**

---

## Merge Order
1. Agent 1 (Nav + Homepage) — foundation changes
2. Agent 2 (Fine Dining) — largest content change
3. Agent 3 (Pricing) — references fine dining pricing
4. Agent 4 (Catering) — cross-promotion links to fine dining

## Final Verification
- `git merge agent/navbar-homepage agent/fine-dining agent/pricing agent/catering`
- `npx tsc --noEmit` (TypeScript check)
- `npm run build` (Vite build)
- Check no broken imports
- Check all internal links resolve
