# Skill 10 — Content Reuse System

**Purpose:** Reuse existing sections, components, data shapes, image patterns, and CTA blocks instead of re-authoring — keeps the site consistent and avoids duplicate work.

**When to use:** Before writing any new page or section.

## Reusable building blocks (root /src)
- **Page shell:** `PremiumPage` / `InfoPage` / `AreaPage` patterns — props-driven sections (`content`, `features`, `cta`).
- **Schema helpers:** `src/components/SeoHead.tsx` (`breadcrumbSchema`, `faqPageSchema`, `howToSchema`, `eventSchema`, …) — reuse, don't hand-roll JSON-LD.
- **Lead capture:** `EmailCaptureBar`, `ExitIntentPopup` — already built; drop in, don't recreate.
- **Data sources:** `src/data/sitemap.ts`, `redirects.ts` — register new routes here.
- **Images:** `/public/generated/*.webp` — search before generating new (Skill 03). WebP q~82, hero ≥1200px <300KB, Indonesian service staff (see CLAUDE.md IMAGE RULES).
- **CTA:** WhatsApp `wa.me/62089674072020` is the single conversion action — reuse the existing CTA component/label patterns.

## Checklist
1. Identify the closest existing page/section; copy its structure.
2. Reuse schema helpers + lead-capture components.
3. Reuse an existing image if one fits; only generate if none exists.
4. Register routes/sitemap via existing data files.

## Verification
- New page imports existing shells/helpers; no new JSON-LD hand-rolled; no duplicate component created.

## Output
"Reused: <shell>, <schema helpers>, <CTA>, <images>. New code written only for: <unique content>."
