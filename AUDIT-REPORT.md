# myCHEF.id — Site Audit Report

**URL audited:** http://localhost:3001
**Project:** `/Users/openclaw/Downloads/MYCHEF . MASTER/app`
**Stack:** Vite + React 18 + TypeScript + Tailwind + shadcn/ui (radix) + GSAP
**Date:** 2026-05-13
**Pages reviewed:** `/`, `/fine-dining`, `/villa-chef`, `/events`, `/partners`, `/contact`, `/privacy` (+ stubs `/terms`, `/cancellation`)

---

## TL;DR — top 10 things to fix before launch

1. **Contact info is inconsistent and partly fake.** `/contact` shows `+62 812 3456 7890` (a placeholder) and `hello@mychef.id`. `/privacy` shows the real-looking `+62 822-3756-5997` and `indonesia@mychef.id`. Pick one set and use it everywhere.
2. **No WhatsApp links actually work.** All "Chat with Sofia/Daniel/Olivia/Marco" + "BOOK ON WHATSAPP" buttons are not wired to `wa.me/<number>` URLs. They look like CTAs but don't go anywhere.
3. **Partners page lists Aman, Bvlgari, Four Seasons, Mandapa Ritz-Carlton, COMO Shambhala, Alila, Viceroy, The Edge as "trusted by"** — if these are not actual signed partners, this is false advertising and a legal/reputation risk. Remove or replace with real partners + permission to use logos.
4. **No SEO whatsoever.** The HTML shell that ships to crawlers is only 610 bytes — no `meta description`, no Open Graph, no Twitter cards, no canonical URL, no JSON-LD, no favicon link, no robots tag. Every route returns the same shell. Google can still render JS, but social shares (WhatsApp, FB, IG, LinkedIn) will show **a blank preview**.
5. **It's an SPA (Vite, not Next.js / SSR).** For a business that lives off discovery — Google, GMB, social — this should be SSR'd. Recommend porting to Next.js 16 (matches the rest of your stack) OR add `vite-plugin-ssg` / pre-render at minimum.
6. **`/terms` and `/cancellation` are empty stubs** (610 bytes, no content). `/privacy` is the only real legal page. You reference cancellation in the homepage FAQ but the link goes to an empty page.
7. **Footer links are misleading.** "About Us", "Our Chefs", "Testimonials" all redirect to `/contact` instead of going to real pages. Either build them or remove from the footer.
8. **Hero images are too big and unoptimized.** All hero `.jpg` files are 1440×800 served as JPEG, no `<picture>` element, no AVIF/WebP fallback, no `loading="eager"` + `fetchpriority="high"` on hero, no `loading="lazy"` on below-fold images. LCP will suffer on mobile.
9. **Testimonials read as fabricated.** 25 reviews with cinematic copy ("we will talk about for the rest of our lives", "a memory we will talk about for the rest of our lives"), generic Western names and one-line cities. Replace with real reviews (Google, Tripadvisor, or anonymized real guest quotes) — or label clearly as illustrative.
10. **Stats look invented.** "560+ villas served / 12,000+ guests / 4.9 average rating / 8+ years". If you cannot back these up, soften the language or remove. Especially "4.9 across 500+ villa experiences" — Google reviews are public, this will be checked.

---

## Page-by-page findings

### Homepage `/`

**What works**
- Strong hero headline: "Extraordinary Food, Without Leaving Your Villa" — clear and benefit-led.
- 3-service layout (Fine Dining / Catering / Events) is the right structure.
- "How It Works" 4 steps is clean and reduces purchase friction.
- "What We Do / Why Choose Us" section reinforces trust signals.
- All 7 hero images have alt text.

**Content / copy issues**
- "A Michelin-trained team of 50+" appears twice in different sections — say it once.
- "We are not a marketplace. We are not an app." — punchy, keep.
- "Villa Award 2025" + "Villa Award 2026" — having a 2026 award today (date is 2026-05-13) is fine, but make sure both awards are real and you have the badge/proof to link to.
- "From IDR 600K per hour" on the Catering card — the Catering page says IDR 600K/hour is *Breakfast Only*. The homepage gives the impression that's the full villa-chef rate. Misleading.
- "Italian fine dining" in hero, but Fine Dining page calls it Italian / Mediterranean — pick one positioning.
- Stats card has "4.9 average rating" without a source.

**Images**
- 7 images on homepage. All have alt text — good.
- Two large hero images (1102×692 + 1102×594) — both are 1440×800 source. Should be served at 1.5× the display width max, in WebP/AVIF.
- Team photo `team-photo.jpg` 1440×800 rendered at 487×609 — way oversized.

**Links**
- Footer's "About Us", "Our Chefs", "Testimonials" → all `/contact` (broken — placeholder routing).
- "BOOK ON WHATSAPP" button is not a `wa.me` link.

---

### `/fine-dining`

**What works**
- Strong narrative ("Chapter Three / Chapter Four") — feels editorial, not template.
- Two-menu structure (Mediterranean Sea / Wagyu) is clear.
- Detailed menu with starters / mains / desserts + wine pairings.
- "What You Get" checklist removes objections.
- 4-step booking process.
- FAQ accordion.

**Content / copy issues**
- **Chef bios feel embellished.** "Adriano met him in Modena fifteen years ago, when they were stagiaires in the same kitchen — the only person in that brigade Adriano stayed in touch with." This is great copy *if true*. If invented, it's a liability when guests google these chefs. Verify every named chef (Matteo Conti, Paco Reyes, Alessandro Conte, Lukas Brandt, Adriano) actually exists and consents to being named.
- Homepage says **Chef Antonio** is the Michelin-trained leader. Fine Dining page says **Adriano** trained "the four". Then the bottom of the page says "Your Chef: Chef Antonio". Three names for what looks like the same role. Pick one founder/lead chef and stick with it across all pages.
- "Italian tasting menus" (hero) vs "Mediterranean" (menu) — be consistent.
- "++" appears in pricing without explanation until the FAQ. Add a short note next to the first "IDR 2,200,000++".
- "4–24 Guests" — fine, but the FAQ says "minimum 4 guests". Make sure the booking form enforces this.

**Booking form**
- Free-text fields (date, guests, location, menu, special requests) — but the submit button is "SEND TO SOFIA VIA WHATSAPP", which should pre-fill a WhatsApp message via `wa.me/<number>?text=...`. Currently almost certainly does not.

---

### `/villa-chef` (Catering)

**What works**
- Clear 4-tier pricing (Breakfast / Half Board / Full Board / Custom).
- Honest "groceries billed at cost, no markup" — strong trust signal.
- Chef Daniel introduced with credible bio.

**Content / copy issues**
- "Per hour, per chef" — but the rate cards then list "IDR 600K / hour" with no minimum hours shown until the small print at the bottom. Surface "min 4-hour booking" on the price cards.
- "6-chef rotating team" → on the homepage you said "50+ staff". Reconcile.
- The CTA is "MESSAGE DANIEL" but no `wa.me` link.

---

### `/events`

**What works**
- 3 tier packages (Intimate / Villa Celebration / Grand) — clear differentiation.
- Starting prices upfront ("From IDR 15M / 35M / 75M") — most competitors hide this; keep it.
- Inclusion lists per tier.

**Content / copy issues**
- "Olivia has produced over 200 events" + the homepage's "200+ weddings and corporate retreats" — internally consistent, but make sure the number is defensible.
- "What happens if it rains?" FAQ is listed but no answer visible in the dump — verify accordion content exists for every FAQ.
- "GET A QUOTE ON WHATSAPP" + "SEND TO OLIVIA VIA WHATSAPP" — same WhatsApp problem.

---

### `/partners`

**CRITICAL — legal/reputation risk**
The hero says:
> Trusted by Bali's Finest Properties
> The Edge Bali · Alila Villas · Amanusa · Bvlgari Resort · COMO Shambhala · Four Seasons · Mandapa Ritz-Carlton · Viceroy Bali

If you do **not** have signed partnership agreements with these specific properties allowing use of their names/brands, **remove these names today**. These are international luxury brands with active legal teams. At minimum:
- Replace with "Properties we've worked with" + only names you have written permission for.
- Or use a generic line: "Trusted by 50+ luxury villas across Seminyak, Canggu, Ubud, Uluwatu, and Sanur."

**Other findings**
- Three testimonials with real-sounding names (James Richardson, Sarah Chen, Michael Torres) and titles. Same caveat — verify or remove.
- Certifications: HACCP, Food Safety Level 3, Bali Tourism Board Member. Add a thumbnail of each certificate (or PDF link). Claims without evidence on a partner-recruitment page kill conversion.

---

### `/contact`

**What works**
- Three concierge cards (Sofia / Daniel / Olivia) match the funnel sections — nice continuity.

**Issues**
- **Phone & WhatsApp are obvious placeholders:** `+62 812 3456 7890`. Replace with the real `+62 822-3756-5997` from `/privacy`, or whatever the actual number is.
- Email: `hello@mychef.id` here vs `indonesia@mychef.id` on privacy — pick one. (`hello@` is more standard for a marketing site; `indonesia@` is okay for legal/data inquiries — many businesses use both, but the contact page should show the customer-facing one.)
- "Available 8am–10pm Bali time" — good. Add timezone (WITA, UTC+8).
- "Location: Bali, Indonesia" — for trust and Google Business, add the actual office address from the Privacy page: *Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80226*.
- No map embed. Add a Google Maps iframe for the office.

---

### Legal pages

- `/privacy` — full, well-written, has correct contact details. Last updated "January 2024" — bump to current month.
- `/terms` — **empty stub.**
- `/cancellation` — **empty stub.** The homepage FAQ says "See our full cancellation policy for details" — this link goes nowhere.

Write both pages or remove the links.

---

## Cross-site issues

### Trust & consistency

| Claim | Where | Status |
|---|---|---|
| Founder name | Chef Antonio (home, FD bottom) vs Adriano (FD chapter 3) | **Inconsistent** |
| Team size | "50+ staff" (home) vs "6-chef rotating team" (villa-chef) | Need clearer breakdown |
| Phone number | `+62 812 3456 7890` (contact) vs `+62 822-3756-5997` (privacy) | **Inconsistent** |
| Email | `hello@mychef.id` (contact) vs `indonesia@mychef.id` (privacy) | **Inconsistent** |
| Years in Bali | "8 years" (home, why-choose-us) and "8+ years" (partners) | OK |
| Villas served | "560+" (home) and "500+" (partners) | Inconsistent, off by 60 |
| Reviews | "12,000+ guests, 4.9 avg, 25 reviews shown" | Reconcile "25 reviews" vs "12,000+ guests" — Google rating is verifiable. |

### Images / media

- **Total media count is high.** 30+ JPGs in `public/generated/` plus another 25+ in `public/`. Audit which are actually used and delete the rest.
- **No WebP/AVIF.** Tailwind/Vite makes this easy with `vite-imagetools` or pre-converting with `sharp`. Expect 40–60% file-size savings.
- **No responsive `srcset`.** A hero served at 1102px wide ships the same 1440×800 file to a 375px iPhone. Use `<img srcset>` or `<picture>`.
- **Hero image is not preloaded.** Add `<link rel="preload" as="image" href="...">` in `index.html` for `hub-hero-v3.jpg` (LCP boost).
- **Chef portraits are PNGs** (`chef-matteo.png`, `chef-paco.png`). Convert to WebP — typically 5–10× smaller than PNG for photos.
- All visible images have alt text — good.

### SEO

Current `index.html` is bare:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>myCHEF.id - Private Chef & Event Experiences in Bali</title>
</head>
```

Missing (must-fix):
- `<meta name="description">`
- `<meta name="robots" content="index,follow">`
- `<link rel="canonical">`
- `<link rel="icon">` + apple-touch-icon
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale=en_US`
- Twitter: `twitter:card=summary_large_image`, `twitter:image`
- JSON-LD structured data:
  - `LocalBusiness` (NAP, opening hours, address, geo)
  - `Restaurant` or `FoodService`
  - `BreadcrumbList` per page
  - `FAQPage` for the homepage FAQ
  - `AggregateRating` (but only if you can prove the 4.9 / 25 reviews — Schema.org abuse is a Google penalty)
- `sitemap.xml` and `robots.txt` in `/public`

Because this is a Vite SPA, per-route meta won't help unless you pre-render or move to SSR. Two paths forward:
1. **Quick:** add `vite-plugin-ssg` and pre-render 7 routes at build → static HTML per page with proper meta. Cheapest fix.
2. **Right:** migrate to Next.js 16 (matches your other projects per memory). 1–2 days of work; unlocks proper SEO, server actions for the WhatsApp form, and a real `app/(routes)` structure.

### Accessibility

- No skip-to-content link.
- Color contrast not verified — run axe-core against the site after restart.
- The homepage has multiple `h2` but heading hierarchy looks reasonable.
- Form fields on the booking pages need `aria-label` if labels are styled small/uppercase.
- FAQ accordions use Radix — keyboard-accessible by default; verify each section actually expands on focus + Enter.

### Performance (likely)

- All hero JPGs are unoptimized → LCP likely > 2.5s on a mid-tier phone over 4G.
- GSAP is in dependencies — make sure it's dynamically imported only where used (scrollytelling sections), not in the root bundle.
- ~30 Radix UI packages in dependencies — Tailwind purges CSS but JS still ships unless code-split. Audit with `vite build --report` (or `rollup-plugin-visualizer`).

---

## Prioritized fix list

### Today (legal / trust)
- [ ] Remove or verify the 8 luxury hotel names on `/partners`.
- [ ] Replace placeholder `+62 812 3456 7890` with the real number across the site.
- [ ] Pick one email (`hello@` or `indonesia@`) and use it everywhere.
- [ ] Wire all "WhatsApp" buttons to `https://wa.me/62XXXXXXXXX?text=<prefilled>` URLs.
- [ ] Write `/terms` and `/cancellation` or remove the links.
- [ ] Resolve the Antonio / Adriano founder-name conflict.
- [ ] Either back up "4.9 / 25 reviews / 12,000+ guests / 560+ villas" with proof or soften the language.

### This week (SEO + conversion)
- [ ] Add basic SEO meta + Open Graph image (1200×630) to `index.html`.
- [ ] Add `sitemap.xml`, `robots.txt`, favicons (16, 32, apple-touch 180).
- [ ] Pre-render routes with `vite-plugin-ssg` so each page ships real HTML.
- [ ] Add `LocalBusiness` + `FAQPage` JSON-LD.
- [ ] Build the missing pages footer links to: `/about`, `/chefs`, `/testimonials` — or remove from footer.
- [ ] Add Google Maps embed + structured address on `/contact`.
- [ ] Add "Last updated" date and content to `/terms` + `/cancellation`.

### Next sprint (polish + performance)
- [ ] Convert all `public/generated/*.jpg` and `*.png` to WebP (and AVIF for heroes).
- [ ] Add `<link rel="preload">` for the homepage hero.
- [ ] Add `srcset` / `<picture>` for hero images on each page.
- [ ] Delete unused images from `public/` and `public/generated/`.
- [ ] Replace the 25 fabricated-looking testimonials with 5–8 real ones, with permission, and date them.
- [ ] Add real partner logos (with permission) instead of plain-text names.
- [ ] Run Lighthouse on each page; target LCP < 2.5s, INP < 200ms, CLS < 0.1.
- [ ] Decide: stay on Vite + SSG, or migrate to Next.js 16.

### Nice to have
- [ ] Sticky WhatsApp floating button on mobile.
- [ ] Currency switcher (IDR / USD / EUR) — most guests think in their home currency.
- [ ] Photo gallery per Fine Dining menu with real plated dishes.
- [ ] Chef video on `/fine-dining` (45 sec founder intro from Antonio/Adriano).
- [ ] Newsletter signup → menu drops / seasonal experiences.

---

## Suggested image work (for Kimi to run)

Routes that need new / better images:
1. **`/contact` hero** — currently the contact page has a hero slot (`contact-hero-v2.jpg` exists in `/generated`) but no shot of the actual office or team on phones answering. Add a candid team photo.
2. **Chef portraits** — Matteo, Paco, Alessandro, Lukas, Antonio, Daniel, Olivia, Marco, Sofia. Currently only `chef-matteo.png`, `chef-paco.png`, `chef-antonio.jpg`, `chef-david.jpg`, `chef-maria.jpg`, `chef-ani.jpg` exist. Missing or mislabelled: Alessandro, Lukas, Daniel, Olivia, Sofia, Marco. Either rename or generate consistent square portraits.
3. **Menu photos** — Mediterranean Sea menu and Wagyu Experience menus have detailed dish descriptions but no per-dish hero. Shoot or generate one hero per course.
4. **Event scale photos** — `aura-*` set exists but `/events` page only uses heroes. Add a 3-image gallery per package (Intimate / Villa Celebration / Grand).
5. **Partners trust logos** — replace plain text with greyscale logo strip (only for verified partners).
6. **Open Graph image** — design one 1200×630 with the wordmark + hero food shot. Used for every social share.

---

## Stack / repo notes

- Project at `/Users/openclaw/Downloads/MYCHEF . MASTER/app`
- Vite 5 + React 18 + TS + Tailwind + shadcn/ui (new-york style, slate base) + GSAP
- Dev server running on port 3001 (PID 16645)
- No tests in repo (`src/` has no `__tests__` or `*.test.tsx` files visible)
- No CI/CD config visible — recommend GitHub Actions running `tsc -b && vite build` on PR

---

*Generated by Claude as a one-pass audit. Verify the legal/trust items first — those are the highest-risk and the cheapest to fix.*
