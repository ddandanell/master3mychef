# myCHEF.id — Updated Audit & Fix Status

**URL:** http://localhost:3001
**Project root:** `/Users/openclaw/Downloads/MYCHEF . MASTER/app`
**Stack:** Vite 5 + React 18 + TypeScript + Tailwind + shadcn/ui (radix) + GSAP
**Last updated:** 2026-05-13

---

## TL;DR — what changed and what's next

Claude just shipped a first pass of fixes (Section A below). Kimi should pick up Section B without redoing Section A. Section C is the longer-tail roadmap.

---

## A) Already fixed (verified live on localhost:3001) — do not redo

### A1. Contact info consistency
- Replaced placeholder `+62 812 3456 789X` with the real `+62 822-3756-5997` everywhere.
- Replaced `hello@mychef.id` with `indonesia@mychef.id` on `/contact` (now matches `/privacy` and `Footer.tsx`).
- Verified live: `/contact` now shows `+62 822-3756-5997` and `indonesia@mychef.id` consistently.

### A2. WhatsApp links wired up
All `wa.me/...` URLs across the codebase now use `6282237565997` and ship with a pre-filled, role-specific message (Sofia / Daniel / Olivia / Marco / general). Files touched:
- `src/components/WhatsAppButton.tsx` (CONTACTS map — all 4 universes)
- `src/pages/ContactPage.tsx` (DEPARTMENTS map + 3 contact info blocks)
- `src/pages/PartnersPage.tsx` (Marco CTA)
- `src/pages/CateringPage.tsx` (Daniel CTA + contact strip)
- `src/pages/HomePage.tsx` (hero WhatsApp CTA)
- `src/pages/LunaPage.tsx` (Sofia booking CTA)
- `src/pages/HubPage.tsx` (Hub WhatsApp CTA)

### A3. SEO foundation
- Rewrote `index.html` with: `meta description`, `meta robots`, `theme-color`, canonical URL, full Open Graph block (`og:title`, `og:description`, `og:image`, `og:image:width/height`, `og:image:alt`, `og:url`, `og:type`, `og:site_name`, `og:locale`), Twitter Card (`summary_large_image`), icon links (svg / 32px / apple-touch), preconnect to `wa.me`, and a `preload` for the LCP hero image.
- Inlined `LocalBusiness` JSON-LD with NAP, full Bali address (Jl. Tukad Barito Timur III No.16), phone, email, `areaServed` for the 6 main regions, and opening hours (08:00–22:00 daily).
- Created `public/robots.txt` and `public/sitemap.xml` listing all 9 routes with priorities.

### A4. Verification
- Dev server (PID 16645) hot-reloaded; `curl http://localhost:3001/` now returns the new `<head>` with all SEO tags.
- Contact page rendered text matches `/privacy` — no more contact-info drift.

---

## B) Next up — recommended ownership for Kimi

These are the highest-value items that can ship in the next 1–2 hours. Each is scoped to one file or a small set.

### B1. Resolve the founder-name conflict (HIGH — trust)
The site uses two different names for the lead chef:
- **Chef Antonio** — appears in `HomePage.tsx` ("Who We Are") and `LunaPage.tsx` "Your Chef" section.
- **Adriano** — appears in `LunaPage.tsx` "Chapter Three / The Four" narrative, as the man who trained Matteo, Paco, Alessandro, and Lukas.

Pick one canonical name and update all references. Suggested: keep **Adriano** in the lineage story (it's the better narrative) and rename "Chef Antonio" everywhere else to Adriano, OR keep "Antonio" as the public-facing founder and adjust the Chapter Three narrative to say "Antonio" instead of "Adriano".

Files to update once a decision is made:
- `src/pages/HomePage.tsx` (Who We Are section, around the "myCHEF.id was born when Chef Antonio…" copy)
- `src/pages/LunaPage.tsx` (Chapter Three lineage block + "Your Chef" section)
- `src/pages/FineDiningPage.tsx` (any chef references)

### B2. Write real content for `/terms` and `/cancellation` (HIGH — legal/UX)
Both routes load `TermsPage.tsx` and `CancellationPage.tsx` but they render only the header — the homepage FAQ links to `/cancellation` and the footer links to `/terms`. Both currently look broken to a visitor.

Source content for the cancellation policy already exists in the homepage FAQ:
> Full refund 14+ days before. 50% refund 7–13 days before. No refund less than 7 days.

Expand that into a real cancellation page (deposit handling, force majeure for weather/illness, transfer policy, event-specific clauses for /events). Same pattern for `/terms` — use the existing 12-section `PrivacyPage.tsx` as a structural template.

### B3. Fix the Partners "trusted by" claim (CRITICAL — legal risk)
`PartnersPage.tsx` lists these as "Trusted by Bali's Finest Properties":
The Edge Bali · Alila Villas · Amanusa · Bvlgari Resort · COMO Shambhala · Four Seasons · Mandapa Ritz-Carlton · Viceroy Bali

If signed agreements + permission to use the brand names do not exist for each, this is exposure to trademark and false-advertising complaints from very well-funded legal teams. **Two safe options:**
- Replace with a generic line: "Trusted by 50+ luxury villas across Seminyak, Canggu, Ubud, Uluwatu, and Sanur."
- Or: keep only names where written permission exists, and switch from plain text to greyscale logos (more credible visually).

### B4. Footer broken links (MEDIUM — UX)
`Footer.tsx` shows links labelled "About Us", "Our Chefs", "Testimonials" — all three currently `href="/contact"`. Either:
- Build the three pages (`/about`, `/chefs`, `/testimonials`), or
- Remove these labels from `Footer.tsx`.

Easiest short-term: remove them and leave Fine Dining / Villa Chef / Events / Partners / Contact / legal links.

### B5. Stat reconciliation (MEDIUM — trust)
Conflicting numbers across the site:
- "560+ villas" (HomePage) vs "500+ villas" (PartnersPage)
- "50+ staff" (HomePage) vs "6-chef rotating team" (CateringPage) — these aren't contradictory but they read that way. Add one line on the Catering page: "Daniel coordinates a 6-chef rotation drawn from our wider 50-person hospitality team."

Pick one canonical number for villas served and use it everywhere. Same for team size, events produced, etc.

### B6. Image assets referenced by the new `<head>` (MEDIUM — visual)
`index.html` now references these files. They do not yet exist; create them or remove the references:
- `/og-image.jpg` — 1200×630, branded social-share image (wordmark + hero food shot)
- `/favicon.svg` — vector favicon
- `/favicon-32.png` — 32×32 PNG
- `/apple-touch-icon.png` — 180×180 PNG

Use the `image` skill or any of the `chef-*.jpg` files already in `public/` as source material for the OG image.

---

## C) Longer-term roadmap (next sprint)

### C1. SEO: pre-render or migrate to Next.js
Today the SPA ships a single 610-byte HTML shell for every route. With the new `<head>` in `index.html`, social shares now work, but Google still has to render JS for any per-route meta. Options:
- **Cheap:** add `vite-plugin-ssg` and pre-render 9 routes at build time. Each route gets its own static HTML with its own meta and JSON-LD (FAQ on `/`, `Restaurant` on `/fine-dining`, `Event` on `/events`, etc.).
- **Right:** migrate to Next.js 16. Matches the user's other projects (per workspace memory) and unlocks server actions for the WhatsApp form. 1–2 days of work.

### C2. Image optimization
30+ JPGs and several PNGs in `public/generated/`. Convert hero images to AVIF + WebP with JPG fallback; add `srcset` for responsive sizes; drop unused images. Expect 40–60% file-size reduction and a measurable LCP improvement on mobile.

### C3. Replace fabricated-looking testimonials
The 25 homepage reviews read like fiction. Replace with 5–8 real guest quotes (with permission and date) or label the existing copy as illustrative. Same for the three partner testimonials on `PartnersPage.tsx`.

### C4. Verify chef bios
Each named chef on `LunaPage.tsx` (Matteo Conti, Paco Reyes, Alessandro Conte, Lukas Brandt) should be a real, consenting person, or the names should be removed. Guests will Google.

### C5. Accessibility pass
- Add a skip-to-content link.
- Run axe-core; fix any contrast or label issues.
- Confirm all Radix-based FAQ accordions are keyboard-accessible end-to-end.

### C6. Performance pass
- Audit GSAP usage — dynamic-import scrollytelling sections so it's not in the root bundle.
- Run `vite build --report` with `rollup-plugin-visualizer` to size-check the 30+ Radix packages.
- Lighthouse target: LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile.

### C7. Conversion polish
- Sticky WhatsApp floating button on mobile.
- Currency switcher (IDR / USD / EUR) on pricing.
- Real plated-dish photos per Fine Dining course.
- 45-second founder intro video on `/fine-dining`.

---

## Files touched in pass A

```
modified:
  index.html
  src/components/WhatsAppButton.tsx
  src/pages/ContactPage.tsx
  src/pages/PartnersPage.tsx
  src/pages/CateringPage.tsx
  src/pages/HomePage.tsx
  src/pages/LunaPage.tsx
  src/pages/HubPage.tsx

created:
  public/robots.txt
  public/sitemap.xml
```

No TypeScript signatures changed; no new dependencies; no build config touched. Safe to commit as a single "fix: unify contact info and add SEO foundation" commit.
