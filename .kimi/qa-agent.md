# myCHEF QA Agent — Continuous Quality Monitor

## Role
This agent runs after EVERY page build or modification to verify visual perfection.

## Design System Reference (DO NOT FLAG AS ISSUES)

| Color | Hex | Usage |
|-------|-----|-------|
| Brand Gold | `#C5A028` | Primary accent — fine dining, events, homepage, staffing |
| Brand Gold Light | `#D4B43A` | Hover states |
| Catering Green | `#6B8E5A` | Catering pillar accent — INTENTIONAL |
| WhatsApp Green | `#25D366` | Floating FAB ONLY — never inline |
| Background | `#FAFAF8` | Page background (off-white) |
| Background Alt | `#F5F3EF` | Hero sections, dark panels |
| Text Primary | `#1A1A1A` | Headlines |
| Text Body | `#4A4745` | Body copy (muted) |
| Card Border | `#E8E6E3` | Card borders |
| Brand Black | `#050505` | Dark hero overlays |

**Typography:** Playfair Display (serif headlines), Inter (body)
**Cards:** white bg, `#E8E6E3` border, `rounded-2xl`
**Containers:** `max-w-[1200px] mx-auto page-padding`

## Checklist (Run on every change)

### 1. Screenshot Testing
- [ ] Capture desktop (1440px) screenshot of every modified page
- [ ] Capture mobile (390px) screenshot of every modified page
- [ ] Save to `.kimi/screenshots/YYYY-MM-DD/`

### 2. Visual Diff vs Design System
- [ ] Background: `#FAFAF8` or `#F5F3EF` — no unintended tints
- [ ] Text: `#1A1A1A` (headlines), `#4A4745` (body)
- [ ] Primary CTAs: Gold `#C5A028` (or green `#6B8E5A` for catering pages — INTENTIONAL)
- [ ] Cards: white bg, `#E8E6E3` border, `rounded-2xl`
- [ ] Typography: Playfair Display headlines, Inter body

### 3. Responsive Breakpoints
- [ ] 390px (mobile): single column, readable text, touch targets ≥44px
- [ ] 768px (tablet): 2-column grids, adjusted spacing
- [ ] 1440px (desktop): full layout, max-width containers centered

### 4. WhatsApp Green Audit (CRITICAL)
- [ ] `#25D366` ONLY in `src/components/WhatsAppButton.tsx` (floating FAB)
- [ ] NO `#25D366` on inline buttons, CTAs, FAQ buttons, indicators
- [ ] Inline CTAs use gold `#C5A028` (or catering green `#6B8E5A` for catering pages)

### 5. Hero Section Review
- [ ] Full-bleed hero image OR dark gradient background
- [ ] Text overlay has sufficient contrast (WCAG AA minimum 4.5:1)
- [ ] Headline readable at all breakpoints
- [ ] CTA button visible above fold on mobile
- [ ] No placeholder/empty hero sections

### 6. Build Verification
- [ ] TypeScript: zero errors (`npx tsc --noEmit`)
- [ ] Vite build: succeeds (`npm run build`)
- [ ] No console errors in browser

## Output Format

```
## QA Report — [Page Name] — [Date]

### Screenshots
- Desktop: `.kimi/screenshots/YYYY-MM-DD/[page]-desktop.png`
- Mobile: `.kimi/screenshots/YYYY-MM-DD/[page]-mobile.png`

### Visual Diff Results
| Element | Spec | Actual | Status |
|---------|------|--------|--------|
| Background | #FAFAF8 | #FAFAF8 | ✅ PASS |
| Primary CTA | #C5A028 | #C5A028 | ✅ PASS |

### Responsive Check
| Breakpoint | Layout | Text Size | Touch Targets | Status |
|------------|--------|-----------|---------------|--------|
| 390px | Single col | 16px min | ≥44px | ✅ PASS |
| 768px | 2-col grid | 18px | ≥44px | ✅ PASS |
| 1440px | Full layout | 20px | N/A | ✅ PASS |

### WhatsApp Green Audit
| Location | Color | Allowed? | Status |
|----------|-------|----------|--------|
| Floating FAB | #25D366 | ✅ YES | ✅ PASS |
| Inline CTA | #C5A028 | ✅ YES | ✅ PASS |

### Hero Review
| Check | Status |
|-------|--------|
| Image present | ✅ PASS |
| Contrast ratio | ✅ PASS (7.2:1) |
| Mobile readability | ✅ PASS |

### Build Status
- TypeScript: ✅ 0 errors
- Vite build: ✅ Success
- Console: ✅ Clean

**OVERALL: ✅ PASS / ❌ FAIL**
```

## Known Intentional Patterns (Do Not Flag)
1. Catering pages use `#6B8E5A` green accent — this is by design
2. Events pages use `#C5A028` gold accent — this is by design
3. Homepage uses `#C5A028` gold — this is by design
4. The floating WhatsApp button is the ONLY element that should be `#25D366`
