# Bar Services Luxury Redesign Spec

## Goal
Transform every MyChef Bar Services page into a sharp, high-end, premium-bar experience that feels like a top-tier hospitality consultancy. Mobile and desktop must both feel intentional, smooth, and expensive.

## Visual direction
- **Mood:** Refined, dark, confident — like a luxury hotel bar at golden hour.
- **Palette:** Deep charcoal/near-black backgrounds (`#0A0A0A`, `#0F0E0C`), warm amber gold (`#C5A028`), rich cream text (`#F5F2EB`), muted stone (`#1A1A1A`).
- **Typography:** Large serif headlines (Playfair Display / Cormorant), clean sans body, generous line-height.
- **Surfaces:** Subtle gradients, soft shadows, glassmorphism cards, thin gold borders, noise texture overlay.
- **Motion:** Smooth fade/slide reveals on scroll, staggered card entrances, subtle hover lifts, no generic bouncing.
- **Icons:** Lucide icons only, thin stroke, amber accent, used sparingly as punctuation not decoration.

## Pages to redesign
All routes under `/bar-services/`:
- Hub `/bar-services/`
- 11 service pages
- FAQ `/bar-services/faq/`
- Contact `/bar-services/contact/`
- Resources index `/bar-services/resources/`
- Individual resource articles `/bar-services/resources/<slug>/`

## Shared component changes
1. **BarServiceHero**
   - Full viewport height, cinematic image with dark gradient overlay.
   - Eyebrow as small amber pill.
   - H1 larger, max-width tighter.
   - CTAs as amber primary + ghost secondary with hover glow.
   - Scroll-down indicator at bottom.

2. **BarServiceSectionHeader**
   - Optional numbered step indicator.
   - Eyebrow as amber uppercase tracking.
   - Title with serif, gradient text option.

3. **BarServiceProblem / Deliverables / Process / Proof**
   - Alternate dark/stone section backgrounds.
   - Asymmetric two-column layouts: content + image with overlap/diagonal crop.
   - Cards with thin gold border, hover lift.
   - Process steps as numbered vertical timeline.

4. **BarServiceIncluded**
   - Dark section with checkmark grid.
   - Icon + text in glass cards.

5. **BarServiceExpandedContent**
   - Full-width dark bands.
   - Large stats/quotes.
   - Image masks (rounded, offset).

6. **BarServiceQuoteBlock**
   - Large pull-quote with gold quotation mark.
   - Dark background.

7. **BarServiceCrossSells / Resources**
   - Horizontal scroll on mobile, grid on desktop.
   - Cards with image top, gradient overlay, title.

8. **BarServiceSubNav**
   - Already decent; refine active state, add gold underline, smoother mobile scroll.

9. **BarServiceEnquiryForm / LeadMagnet**
   - Dark card with gold border, cleaner inputs, larger submit button.

## Hub page changes
- Hero: full viewport, stronger headline hierarchy.
- "Who we serve" segment cards: glass cards with icon + hover lift.
- Service group grid: large cards with background image, gradient overlay, price anchor visible.
- Process: vertical timeline with connecting line.
- Proof: large metric numbers.
- Resources teaser: horizontal scroll cards.

## FAQ / Contact / Resources
- Consistent dark hero, amber accents.
- FAQ accordion with cleaner expand/collapse animation.
- Contact: split layout with form + info cards.
- Resources: magazine-style cards, larger images, service links.

## Image treatment
- New images already generating with OpenAI gpt-image-1 / Pollinations fallback.
- All images get slight warm overlay so they sit inside the dark luxury palette.
- Use object-cover, subtle scale on hover.

## Mobile requirements
- Touch targets ≥ 44px.
- Horizontal scroll where grids are too wide.
- Hero text readable at 320px.
- Subnav stays sticky and scrollable.
- No layout shifts (images have explicit dimensions).

## Technical constraints
- Keep existing routes and slugs.
- Keep existing data layer (`services.ts`, `hub.ts`, `resources.ts`).
- Use Tailwind CSS only.
- Use GSAP if already loaded; otherwise pure CSS transitions.
- Must pass `npx tsc --noEmit` and `npm run build`.
- Keep SEO meta, JSON-LD, FAQ schema intact.
