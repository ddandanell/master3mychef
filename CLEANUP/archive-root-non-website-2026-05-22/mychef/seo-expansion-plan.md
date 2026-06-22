# 🚀 myCHEF SEO Expansion Plan: Revenue-Ready Landing Pages

**Date**: May 17, 2026  
**Status**: 🏗️ STRATEGIC PLANNING  
**Goal**: Identify and map 30+ high-intent SEO landing pages to dominate the Bali & Jakarta private chef market.

---

## A. Current Website Structure Audit

The site is currently a high-performance React SPA with **91 canonical routes**.

| Category | Intent | Current Coverage |
|----------|--------|------------------|
| **Core Pillars** | Service Discovery | Fine Dining, Catering, Events, In-Villa Service, Staffing. |
| **Pillar Sub-Pages** | Specific Service Detail | 30+ pages (e.g., BBQ, Weddings, Butlers, Tasting Menus). |
| **Location Pages** | Local SEO (Top Cities) | 10 primary Bali cities + Jakarta/Menteng. |
| **Micro-Area Pages** | Hyper-Local SEO | 8 beach/village-specific pages (e.g., Echo Beach, Bingin). |
| **Journal/Blog** | Educational / Long-tail | 12 technical guides and hospitality stories. |
| **Help Hub** | Conversion / Operations | 6 planning guides (Pricing, Menus, Weddings, etc.). |

---

## B. Keyword Opportunities per Pillar

We prioritize **Commercial Intent** over raw volume. We want users ready to book, not just browsers.

### 1. Fine Dining (Premium Focus)
1. **Keyword**: `Michelin chef Bali price`
   - *Intent*: Price-conscious but quality-driven.
   - *Target*: High-net-worth guests comparing myCHEF to Fine Dining restaurants.
2. **Keyword**: `Private tasting menu Bali villa`
   - *Intent*: Specific experience request.
   - *Target*: Foodies and celebratory groups.
3. **Keyword**: `Chef table experience Bali`
   - *Intent*: Interactive, high-end entertainment.
   - *Target*: Luxury villa groups looking for "Villa Theatre."

### 2. Catering (Volume & Social Focus)
1. **Keyword**: `Best villa BBQ catering Bali`
   - *Intent*: Direct commercial search for the most popular Bali service.
   - *Target*: Birthday groups, families, and group arrivals.
2. **Keyword**: `Seafood BBQ catering Bali cost`
   - *Intent*: Specific menu interest + price discovery.
   - *Target*: Groups interested in Bali's signature "Jimbaran style" at home.
3. **Keyword**: `Group villa dinner packages Bali`
   - *Intent*: Budget/Package-led search.
   - *Target*: Large families and retreat groups.

### 3. Events (Coordination Focus)
1. **Keyword**: `Bali villa wedding catering 2026`
   - *Intent*: High-ticket, long-lead planning.
   - *Target*: Couples planning elopements or estate weddings.
2. **Keyword**: `Corporate retreat catering Bali packages`
   - *Intent*: B2B, efficiency and scale.
   - *Target*: Company organizers and executive assistants.
3. **Keyword**: `Luxury birthday party villa Bali`
   - *Intent*: Full-service celebration hosting.
   - *Target*: Milestone birthday hosts (30th, 40th, 50th).

### 4. Staffing (Reliability Focus)
1. **Keyword**: `Hire private chef Bali monthly`
   - *Intent*: Long-term placement / villa residency.
   - *Target*: Long-stay guests and expat families.
2. **Keyword**: `Professional villa staff Bali agency`
   - *Intent*: Trust-based recruitment.
   - *Target*: Villa owners and estate managers.
3. **Keyword**: `Butler service Bali daily rate`
   - *Intent*: Specific role-based hiring.
   - *Target*: High-end guests wanting hotel-level service in a villa.

---

## C. URL Structure (Scalable & Clean)

We will use a nested, logical structure that mirrors the site architecture.

*   **Pillar Expansion**: `/[pillar]/[keyword-slug]`
    - *Example*: `/fine-dining/michelin-chef-bali-price`
*   **Location Bundles**: `/locations/[city]/[service-slug]`
    - *Example*: `/locations/canggu/villa-bbq-catering`
*   **Experience Bundles**: `/experiences/[keyword-slug]`
    - *Example*: `/experiences/proposal-dinner-bali-packages`

---

## D. Page Template Framework (The "Premium SEO" Layout)

Every expansion page must follow this 10-point quality check:

1.  **Hero**: Standard "Dark Standard" gradient + High-res BFL image.
2.  **Primary H1**: Exact keyword match (e.g., "Villa BBQ Catering Bali").
3.  **The "Why"**: 2-3 sentences on the "Bali Problem" (e.g., Traffic, bad restaurant service) and our solution.
4.  **Service Grid**: Interactive cards showing what's included.
5.  **Location/Context Section**: Why this service works *specifically* in the target context (e.g., "Poolside in Seminyak").
6.  **Trust Strip**: Google Rating (4.9), Guest counts (12k+), Michelin heritage.
7.  **Process Step-through**: 1. Message -> 2. Proposal -> 3. Shop & Prep -> 4. Serve -> 5. Clean.
8.  **Pricing Guidance**: "From IDR XXX per guest" or "Calculate your budget" link.
9.  **Internal Link Matrix**: Links to parent pillar, top 3 cities, and related planning guide.
10. **Schema**: `ServiceSchema` + `FAQPage` + `BreadcrumbList`.

---

## E. AI Image Plan (BFL API Prompts)

All images must use the **Indonesian Staff / European Client** persona rule.

| Page Group | BFL Style | Prompt Core |
|------------|-----------|-------------|
| **Catering** | `food-photo` | "Abundant [Menu Type] spread, Balinese teak table, Indonesian staff serving European guests, golden hour." |
| **Fine Dining** | `hero` | "Indonesian chef artfully plating a Michelin dish, candlelit Bali villa terrace at night, European couple." |
| **Staffing** | `documentary`| "Professional Indonesian butler in white uniform greeting European guests at a luxury villa entrance." |
| **Locations** | `real-estate`| "Luxury villa in [City Name], Bali, table set for dinner by the pool, cinematic sunset lighting." |

---

## F. Footer Discovery Strategy

New pages will be grouped in the **Global Footer** under a "Popular Searches" or "Luxury Experiences" heading.

**Example Structure:**
*   **Top Experiences**
    *   [Michelin Chef Bali Prices](/fine-dining/michelin-chef-bali-price)
    *   [Wedding Catering Packages](/events/wedding-catering-bali)
    *   [Villa BBQ Nights](/catering/villa-bbq-catering-bali)
    *   [Jakarta Private Dining](/jakarta)
*   **Location Guides**
    *   [Seminyak Fine Dining](/locations/seminyak/fine-dining)
    *   [Canggu Villa BBQ](/locations/canggu/villa-bbq-catering)
    *   [Uluwatu Clifftop Events](/locations/uluwatu/events)

---

## G. Build Priority

1.  **Tier 1 (High Revenue)**: Villa BBQ, Wedding Catering, Michelin Prices.
2.  **Tier 2 (Expansion)**: Jakarta Fine Dining, Menteng Staffing.
3.  **Tier 3 (Niche)**: Floating Breakfast, Sommelier Service, Retreat Meal Prep.

---

## H. Developer Notes

- Use the `LandingPage.tsx` or `InfoPage.tsx` components for initial deployment.
- Ensure all images go through the `audit:images` resizing pipeline.
- All new routes must be registered in `src/data/sitemap.ts` first to drive the dynamic sitemap generation.

---
*Plan created by Claude CLI Agent — Certified for Execution.*
