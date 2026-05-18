# myCHEF.id — Task Division: 16 Landing Pages
## Current Status + Parallel Work Plan

### ✅ ALREADY BUILT (6 pages — DO NOT MODIFY structure, only add missing elements)

| # | Page | File | Route | Status |
|---|------|------|-------|--------|
| 1 | Catering Hub | `CateringMainPage.tsx` | `/catering` | ✅ Done — 15 sections |
| 2 | BBQ Catering | `CateringBBQPage.tsx` | `/catering/bbq-catering` | ✅ Done — 11 sections |
| 3 | Drop-Off Catering | `CateringDropOffPage.tsx` | `/catering/drop-off-catering` | ✅ Done — 14 sections |
| 4 | Buffet Catering | `CateringBuffetPage.tsx` | `/catering/buffet` | ✅ Done — 12 sections |
| 5 | Babi Guling | `CateringBabiGulingPage.tsx` | `/catering/babi-guling` | ✅ Done — 12 sections |
| 6 | Grazing Tables | `CateringGrazingPage.tsx` | `/catering/grazing-tables` | ✅ Done — 14 sections |

**Shared components in `src/components/catering/`:**
- `SectionHeader.tsx` — eyebrow + h2 + subtitle
- `CateringPackageCard.tsx` — image, title, price, description, CTA
- `CateringAddOnCard.tsx` — smaller upsell card
- `FAQAccordion.tsx` — reusable accordion
- `TrustRow.tsx` — icon row for includes
- `BookingFormCatering.tsx` — WhatsApp form

**Design system already established:**
- Background: `#FAFAF8` (off-white), hero sections use dark overlays
- Text: `#1A1A1A` (dark), body: `#4A4745` (muted)
- Accent: `#6B8E5A` (green) for catering pages
- Typography: Playfair Display (serif headlines), Inter (body)
- Cards: white bg, `#E8E6E3` border, rounded-2xl
- WhatsApp: `#25D366`

---

### 🔧 MISSING: Universal Elements (apply to ALL pages)

These must be added across all existing + new pages:

1. **Trust strip** — 4 icons: "Same-day WhatsApp · 50% deposit only · 1 waiter per 10 guests · Full cleanup"
2. **Breadcrumb** — Home › Pillar › Sub-page with BreadcrumbList schema
3. **All-in pricing display** — Every price shows "IDR 450,000++ = IDR 544,500 all-in" inline
4. **Tax footer note** — "10% government tax + 11% service charge" on every page
5. **Sticky WhatsApp button** on mobile (already have floating button? verify)
6. **Press logo strip** — Honeycombers, NOW Bali, Hello Bali (when available)
7. **Testimonial block** — 3 cards minimum, named + location
8. **FAQ top 4 open by default** — currently all closed
9. **Schema markup** — Service, Offer, Menu, BreadcrumbList, FAQPage, AggregateRating
10. **Group total calculator** — dynamic guest count × price = total display

---

### 🆕 PAGES TO BUILD (10 pages remaining)

#### CATERING PILLAR — 2 pages remaining

| # | Page | Route | File | Priority |
|---|------|-------|------|----------|
| 7 | **Plated Set Menu** | `/catering/plated-catering` | `CateringPlatedPage.tsx` | HIGH |
| 8 | **Floating Breakfast** | `/catering/floating-breakfast` | `CateringFloatingBreakfastPage.tsx` | HIGH |

#### EVENTS PILLAR — 8 pages (all new)

| # | Page | Route | File | Priority |
|---|------|-------|------|----------|
| 9 | **Events Hub** | `/events` | `EventsMainPage.tsx` | HIGH — replaces current `/events` |
| 10 | **Weddings** | `/events/weddings` | `EventsWeddingsPage.tsx` | HIGH |
| 11 | **Birthdays** | `/events/birthdays` | `EventsBirthdaysPage.tsx` | MEDIUM |
| 12 | **Anniversaries** | `/events/anniversaries` | `EventsAnniversariesPage.tsx` | MEDIUM |
| 13 | **Corporate Events** | `/events/corporate-events` | `EventsCorporatePage.tsx` | MEDIUM |
| 14 | **Retreats** | `/events/retreats` | `EventsRetreatsPage.tsx` | MEDIUM |
| 15 | **Baby Showers** | `/events/baby-showers` | `EventsBabyShowersPage.tsx` | LOW |
| 16 | **Villa Parties** | `/events/villa-parties` | `EventsVillaPartiesPage.tsx` | LOW |

---

## WORKER ASSIGNMENTS

### WORKER A — "Catering Closer"
**Scope:** Build the 2 remaining Catering pages + add universal elements to all 6 existing catering pages

**Tasks:**
1. Create `CateringPlatedPage.tsx` — 12 sections (see blueprint page 14-17)
   - Hero, 3-tier compare (3/4/5 course), sample menus, what's included, why plated vs buffet, photo gallery, wine pairing, group size guide, testimonials, FAQ, reservation form
   - Pricing: 3-Course IDR 800K/pp, 4-Course IDR 1M/pp, 5-Course IDR 1.3M/pp
   - Min spend: IDR 5,000,000 per event
   - Accent color: Use a more editorial/luxury feel — consider `#8B7355` (bronze) or keep `#6B8E5A`

2. Create `CateringFloatingBreakfastPage.tsx` — 10 sections (see blueprint page 29-32)
   - Hero, 3 product cards (Breakfast couple / Brunch couple / Group brunch), visual setup detail, time options, photo gallery, add-ons, delivery process, cancellation, testimonials, FAQ, order form
   - Pricing: Couple IDR 950K, Brunch IDR 1.4M, Group IDR 750K/pp
   - This page is LIGHT and AIRY — exception to dark brand frame
   - Use pool-water blue accents, lots of whitespace

3. Add to ALL 6 existing catering pages:
   - All-in pricing display next to every ++ price
   - Tax footer note
   - Trust strip with 4 icons (reuse from blueprint)
   - Testimonial block (3 cards)
   - Top 4 FAQ open by default

4. Update `App.tsx`:
   - Add lazy imports for new pages
   - Add routes: `/catering/plated-catering`, `/catering/floating-breakfast`

**Reuse pattern:** Copy structure from `CateringBuffetPage.tsx` or `CateringGrazingPage.tsx` — they have the most complete section architecture. Use existing shared components.

---

### WORKER B — "Events Builder"
**Scope:** Build the 8 Events pillar landing pages

**Tasks:**
1. Create `EventsMainPage.tsx` — Events Hub (see blueprint page 33-36)
   - 10 sections: Hero, trust strip, 7 event type cards, how we run events, why myCHEF, pricing transparency, geographic coverage, testimonials, press, FAQ, reservation form
   - 7 event cards: Wedding, Birthday, Anniversary, Corporate, Retreat, Baby Shower, Villa Party
   - Pricing table with from-prices per event type
   - Route: `/events` (this REPLACES the current AuraPage at `/events`)

2. Create `EventsWeddingsPage.tsx` — Villa Weddings (see blueprint page 36-39)
   - 12 sections: Hero, 3-tier compare (Intimate/Standard/Luxury), real weddings gallery, what's included, day-of coordinator, wedding add-ons, lead time, press, testimonials, FAQ, consult form
   - Pricing: Intimate IDR 600K/pp, Standard IDR 950K/pp, Luxury IDR 1.5M/pp
   - Form is LONGER and WARMER — includes date, guest count, villa name, ceremony/reception split, budget range
   - This is the highest-emotion page — editorial wedding-magazine feel

3. Create `EventsBirthdaysPage.tsx` — Birthday Parties (see blueprint page 40-43)
   - 10 sections: Hero, 3 formats (Intimate Dinner / Villa Party / Kids Party), per-format detail, cake gallery, themed setup gallery, add-ons, real gallery, testimonials, FAQ, form
   - Pricing: Intimate IDR 1.5M/pp, Villa Party IDR 850K/pp, Kids IDR 350K child / 250K adult
   - Joyful, warmer design — allow more color in photography sections

4. Create `EventsAnniversariesPage.tsx` — Anniversary Dinners (see blueprint page 44-47)
   - 10 sections: Hero, 3 formats, comparison vs hotel-locked packages (Apéritif, Samabe, Bulgari), menu approach, setup detail, gallery, add-ons, testimonials, FAQ, form
   - Pricing: Couple IDR 1.5M/pp, Small Group IDR 1.2M/pp, Renewal of Vows IDR 2.5M/pp
   - Sentimental, soft, romantic feel
   - Comparison table is KEY — buyers research hotels first

5. Create `EventsCorporatePage.tsx` — Corporate Events (see blueprint page 48-51)
   - 10 sections: Hero, 3 formats (Day Event / Multi-Day Retreat / Product Launch), capacity overview, what's included, B2B trust block, sample agendas, add-ons, past events, logo wall, FAQ, inquiry form
   - Pricing: Day Event IDR 1.2M/pp, Retreat IDR 2.5M/pp/day, Product Launch quote
   - B2B-detailed form: company name, billing, headcount, dates, dietary breakdown
   - Restrained, business-document feel

6. Create `EventsRetreatsPage.tsx` — Wellness & Yoga Retreats (see blueprint page 52-55)
   - 10 sections: Hero, 3 tiers, daily meal schedule, dietary specialism, multi-day operations, past retreats, add-ons, testimonials, FAQ, inquiry form
   - Pricing: Wellness IDR 1.5M/pp/day, Yoga IDR 1.5M/pp/day, Corporate-style IDR 2.5M/pp/day
   - Calm, slow-paced design — pale earth tones

7. Create `EventsBabyShowersPage.tsx` — Baby Showers (see blueprint page 56-59)
   - 10 sections: Hero, 2 formats, theme gallery, what's included, decor detail, mocktail bar, photography, gallery, testimonials, FAQ, form
   - Pricing: Intimate IDR 750K/pp, Larger IDR 1.1M/pp
   - LIGHT and SOFT — mostly white background with pastel accents
   - Warmest form tone: "We're so excited for you"

8. Create `EventsVillaPartiesPage.tsx` — Villa Parties (see blueprint page 60-62)
   - 10 sections: Hero, 3 formats, theme options, what's included, bartender detail, music options, decor gallery, hens/bucks callout, photos, testimonials, FAQ, form
   - Pricing: Cocktail IDR 650K/pp, Sundowner IDR 850K/pp, Casual Mixer IDR 950K/pp
   - Vibrant, energetic — sunset orange / electric blue accents allowed

9. Update `App.tsx`:
   - Add lazy imports for all 8 events pages
   - Add routes for all 8 pages
   - Replace `/events` route from AuraPage to EventsMainPage
   - Keep AuraPage import but redirect or keep as fallback

10. Create shared Events components in `src/components/events/`:
    - `EventPackageCard.tsx` — similar to CateringPackageCard but for events
    - `EventFormatCard.tsx` — for the 2-3 format cards per page
    - Reuse FAQAccordion, BookingFormCatering (or create EventBookingForm)

**Design note for ALL Events pages:**
- Hero background: Black (#0A0A0A) with white serif H1 and gold accent (#C9A227)
- Use the "Chapter X — Title" device from /fine-dining for narrative spine
- Editorial serif headlines (Playfair Display), clean sans body (Inter)
- 1px gold-on-black dividers
- Full-bleed hero images
- Side-by-side compare tables for tiered products

---

### WORKER C — "Foundation & Polish" (YOU — Main Thread)
**Scope:** Build shared infrastructure, schema, navigation updates, and final integration

**Tasks:**
1. **Build universal components** in `src/components/shared/`:
   - `TrustStrip.tsx` — 4 icons with labels (Same-day WhatsApp, 50% deposit, 1 waiter per 10, Full cleanup)
   - `Breadcrumb.tsx` — Home › Pillar › Sub-page with JSON-LD schema
   - `AllInPrice.tsx` — Component that displays "IDR 450,000++ = IDR 544,500 all-in"
   - `TaxFooter.tsx` — Small note: "10% government tax + 11% service charge"
   - `TestimonialBlock.tsx` — 3 cards with name, location, quote, optional photo
   - `PressStrip.tsx` — Logo strip for Honeycombers, NOW Bali, Hello Bali
   - `SchemaInjector.tsx` — JSON-LD generator for Service, Offer, Menu, BreadcrumbList, FAQPage, AggregateRating
   - `GroupTotalCalculator.tsx` — Slider for guest count, live update of total price

2. **Update global navigation**:
   - Verify nav has: Fine Dining, Catering (dropdown), Events (dropdown), Service, Rent Staff, Locations, Journal, Contact
   - Catering dropdown: BBQ, Buffet, Plated, Drop-Off, Babi Guling, Grazing, Floating Breakfast
   - Events dropdown: Weddings, Birthdays, Anniversaries, Corporate, Retreats, Baby Showers, Villa Parties

3. **Update global footer**:
   - Full pillar nav, locations list, contact, social, tax/NPWP info
   - Add all new page links

4. **SEO infrastructure**:
   - Update `SeoHead` component to support all new schema types
   - Generate sitemap.xml with all 16 page URLs
   - Add meta titles/descriptions per blueprint specs
   - Image alt text conventions

5. **Build integration**:
   - After Workers A and B finish, merge all routes into App.tsx
   - Verify no route conflicts
   - Run full TypeScript check
   - Run full build
   - Screenshot test all 16 pages at desktop + mobile

6. **WhatsApp deeplink generator**:
   - Enhance BookingFormCatering to pre-fill WhatsApp message with all form data
   - Format: "Hi Sofia, I'm interested in [package] for [guests] guests on [date] at [villa]. [dietary notes]"

---

## FILE NAMING CONVENTIONS

**Pages:** `src/pages/Catering[Name]Page.tsx`, `src/pages/Events[Name]Page.tsx`
**Components:** `src/components/catering/*`, `src/components/events/*`, `src/components/shared/*`
**Images:** Use existing `/generated/*.webp` or create placeholders. Real photography is Phase 2.

## PRICING REFERENCE (All-In = ++ × 1.21)

| Code | Product | ++ Price | All-In | Min |
|------|---------|----------|--------|-----|
| CA-B1 | Indonesian BBQ | 450K/pp | 544.5K/pp | 6 |
| CA-B2 | International BBQ | 600K/pp | 726K/pp | 6 |
| CA-B3 | Premium Surf & Turf | 850K/pp | 1,028.5K/pp | 6 |
| CA-BF1 | Indonesian Buffet | 550K/pp | 665.5K/pp | 30 |
| CA-BF2 | International Buffet | 750K/pp | 907.5K/pp | 30 |
| CA-BF3 | Premium Live-Station | 950K/pp | 1,149.5K/pp | 30 |
| CA-P1 | 3-Course Plated | 800K/pp | 968K/pp | 5M total |
| CA-P2 | 4-Course Plated | 1M/pp | 1,210K/pp | 5M total |
| CA-P3 | 5-Course Premium | 1.3M/pp | 1,573K/pp | 5M total |
| CA-D1 | Family Drop-Off | 350K/pp | all-in | 4 |
| CA-D2 | Dinner Party Drop-Off | 500K/pp | all-in | 8 |
| CA-D3 | Grazing Drop-Off | 650K/pp | all-in | 8 |
| CA-BG1 | Babi Guling Small | 3.7M total | all-in | 10-15 |
| CA-BG2 | Babi Guling Medium | 5M total | all-in | 25-30 |
| CA-BG3 | Babi Guling Large | 7M total | all-in | 40-50 |
| CA-GR1 | Mini Grazing Box | 650K | all-in | 2 |
| CA-GR2 | Cheese Platter | 2.7M | all-in | 10 |
| CA-GR3 | Wedding Grazing | 350K/pp | all-in | 20-50 |
| CA-GR4 | Floating Pool Tray | 1.8M | all-in | 2-6 |
| CA-FL1 | Floating Breakfast | 950K/couple | all-in | 2 |
| CA-FL2 | Floating Brunch | 1.4M/couple | all-in | 2 |
| CA-FL3 | Floating Group | 750K/pp | all-in | 4-10 |

## IMPORTANT RULES

1. **DO NOT change existing page structure** — only ADD missing elements (trust strip, breadcrumbs, all-in pricing, tax footer, testimonials)
2. **DO NOT change colors or design system** — use established palette
3. **Reuse components** — copy from existing catering pages, adapt for events
4. **Keep it simple** — don't over-engineer. One section = one scroll block.
5. **WhatsApp number:** +62 822 3756 5997 (Sofia)
6. **All pages lazy-load** — follow existing pattern in App.tsx
7. **Mobile-first** — test at 390px width
8. **Build green** — TypeScript must pass, build must succeed
