# myCHEF.id — Phase 3 Task Division
## Blueprint Compliance Audit + Final Integration

### ✅ COMPLETE (Phase 1 + 2)
- All 16 pages built and compiling
- Breadcrumb navigation (visual + JSON-LD)
- All-in pricing display (AllInPrice component)
- PressStrip before final CTA
- FAQ top 4 open by default
- Enhanced schema (Service, Offer, FAQPage, AggregateRating, BreadcrumbList)
- TrustStrip, TaxFooter, TestimonialBlock on all pages
- WhatsApp booking forms

### 🔧 GAPS IDENTIFIED (from full blueprint audit)

#### GAP 1: Chapter X — Title Device (14 pages missing)
**Blueprint requirement:** "Use the 'Chapter X — Title' device (verified from /fine-dining) on every product family to give the page narrative spine."
**Current:** Only EventsMainPage (7) and EventsVillaPartiesPage (9) have Chapter device
**Missing:** All 6 remaining catering pages + 6 remaining events pages

#### GAP 2: Group Total Calculator (all pricing pages)
**Blueprint requirement:** "Group total calculator widget — slider for guest count, live update of IDR ++ and all-in"
**Current:** Component built but NOT integrated into any page
**Needed on:** BBQ, Buffet, Plated, Weddings, Birthdays, Anniversaries, Corporate, Retreats, Baby Showers, Villa Parties

#### GAP 3: Menu Schema (SeoHead)
**Blueprint requirement:** "Menu schema for each tier" on catering pages
**Current:** `menuSchema()` function doesn't exist in SeoHead.tsx
**Needed:** Add `menuSchema()` generator and integrate into catering pages

#### GAP 4: Section Architecture Gaps (per-page audit)

**Catering Hub (/catering/):**
- ✅ Hero, Trust Strip, Choose Format, How It Works, Pricing Transparency, Cuisine, Coverage, Testimonials, FAQ, Form
- ❌ Missing: "Why we publish our prices" pricing transparency block (60 words) — check if present

**BBQ (/catering/bbq-catering/):**
- ✅ Hero, Trust Strip, Why BBQ, Packages, What's Included, Add-ons, Best For, Area Minimums, Dietary, Form, Testimonials, FAQ, Final CTA
- ❌ Missing: **How It Works** (4 steps) — blueprint requires it
- ❌ Missing: **Photo Gallery** (BBQ in action across 6+ villa settings)
- ❌ Missing: **Group Size Guide** (table showing total for 6/10/20/30/40 guests)
- ❌ Missing: **Chapter device**

**Buffet (/catering/buffet-catering/):**
- ❌ Missing: **Pre-event tasting promise** (free at 40+) — trust signal
- ❌ Missing: **Photo Gallery**
- ❌ Missing: **Group Size Guide** (30/50/80/120/200 guests)
- ❌ Missing: **Chapter device**

**Plated (/catering/plated-catering/):**
- ❌ Missing: **Why plated vs buffet** comparison (3-bullet)
- ❌ Missing: **Wine pairing add-on detail**
- ❌ Missing: **Photo Gallery** (every course beautifully plated)
- ❌ Missing: **Group size guide + minimum spend explanation**
- ❌ Missing: **Chapter device**

**Drop-Off (/catering/drop-off-catering/):**
- ✅ Has How It Works, What's in the box, Menu Examples, Delivery Rules, Upgrade Path
- ❌ Missing: **Photo Gallery**
- ❌ Missing: **Chapter device**

**Babi Guling (/catering/babi-guling/):**
- ❌ Missing: **Chapter device: "Chapter X — The Pig"** (cultural significance)
- ❌ Missing: **Annotated diagram** of whole spread
- ❌ Missing: **Cooking process** (spit, marinade, 8 hours)
- ❌ Missing: **Bonfire setup option**

**Grazing (/catering/grazing-tables/):**
- ❌ Missing: **Photography section** (large gallery — this page sells on visuals)
- ❌ Missing: **Annotated callout** of every component
- ❌ Missing: **Customisation options** (Cheese-lover, Italian, Mediterranean, Vegan)
- ❌ Missing: **Chapter device**

**Floating Breakfast (/catering/floating-breakfast/):**
- ❌ Missing: **Visual setup detail** (annotated image of tray components)
- ❌ Missing: **Time options** (sunrise/midday/sunset)
- ❌ Missing: **Photo Gallery** (multiple real villa pools)
- ❌ Missing: **Chapter device**

**Events Hub (/events/):**
- ✅ Has most sections
- ❌ Missing: **"Why myCHEF for events"** competitive advantage (vs Mimpi, vs single-service)
- ❌ Missing: **Pricing transparency block**
- ❌ Missing: **Day-of coordinator photo** (prominent, named, with quote)

**Weddings (/events/weddings/):**
- ✅ Has tiers, included, coordinator, add-ons, FAQ, form
- ❌ Missing: **Real Weddings gallery** (5–8 actual weddings with story)
- ❌ Missing: **Lead time guidance + booking calendar**
- ❌ Missing: **Press features**
- ❌ Missing: **Chapter device**

**Birthdays (/events/birthdays/):**
- ❌ Missing: **Cake gallery** (custom cake options)
- ❌ Missing: **Themed setup gallery**
- ❌ Missing: **Real birthday gallery**
- ❌ Missing: **Chapter device**

**Anniversaries (/events/anniversaries/):**
- ✅ Has comparison vs hotels
- ❌ Missing: **Real anniversary gallery** (consented couples)
- ❌ Missing: **Setup detail** (candle landscape, petal pathway)
- ❌ Missing: **Chapter device**

**Corporate (/events/corporate-events/):**
- ❌ Missing: **Capacity overview** (20–100 day / 10–50 multi-day / 50–300 launches)
- ❌ Missing: **B2B trust block** (invoicing, tax, contracts, insurance)
- ❌ Missing: **Sample agendas** (day-event + 3-day retreat)
- ❌ Missing: **Logo wall** of past clients
- ❌ Missing: **Chapter device**

**Retreats (/events/retreats/):**
- ❌ Missing: **Daily meal schedule sample**
- ❌ Missing: **Dietary specialism block**
- ❌ Missing: **Multi-day operations explained**
- ❌ Missing: **Past retreats with credit**
- ❌ Missing: **Chapter device**

**Baby Showers (/events/baby-showers/):**
- ❌ Missing: **Theme gallery** (boho/pastel/botanical/classic)
- ❌ Missing: **Decor + setup detail**
- ❌ Missing: **Mocktail bar option**
- ❌ Missing: **Real baby shower gallery**
- ❌ Missing: **Chapter device**

**Villa Parties (/events/villa-parties/):**
- ✅ Has Chapter device (9 occurrences)
- ❌ Missing: **Theme options** (Tropicana/Gatsby/Surfer/Disco)
- ❌ Missing: **Bartender + bar package detail**
- ❌ Missing: **Music options**
- ❌ Missing: **Decor gallery**
- ❌ Missing: **Hens/bucks callout**

---

## WORKER ASSIGNMENTS

### WORKER A — "Chapter Device + Missing Sections (Catering)"
**Scope:** Add Chapter device and missing blueprint sections to all 8 Catering pages

**Tasks per page:**
1. Add "Chapter X — Title" eyebrow text before key sections
2. Add missing sections from blueprint audit
3. Keep existing sections intact

### WORKER B — "Chapter Device + Missing Sections (Events)"
**Scope:** Add Chapter device and missing blueprint sections to all 8 Events pages

**Tasks per page:**
1. Add "Chapter X — Title" eyebrow text before key sections
2. Add missing sections from blueprint audit
3. Keep existing sections intact

### WORKER C — "Group Total Calculator + Menu Schema"
**Scope:** Build and integrate interactive components

**Tasks:**
1. Integrate GroupTotalCalculator into package cards on pricing pages
2. Add `menuSchema()` to SeoHead.tsx
3. Add Menu schema to all catering pages

### Main Thread — Final QA
1. Wait for all workers
2. Run build
3. Verify all routes
4. Update completion status
