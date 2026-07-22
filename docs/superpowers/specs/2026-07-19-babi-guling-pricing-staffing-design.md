# Babi Guling Pricing & Catering Process Design

## Goal
Update the Babi Guling catering page with a per-person pricing estimator and add reusable "How We Staff" and "How Booking Works" sections to all catering pages so guests understand pricing, staffing, and the booking flow.

## 1. Babi Guling Pricing (`/catering/babi-guling` only)

### Pricing tiers (per person, volume discount)
- Minimum 6 guests.
- Prices are estimates; final quote depends on add-ons, villa location, serving style, and equipment needs.

| Guests | Per person | Example total |
|---|---|---|
| 6–15 | IDR 650,000 | 10 guests ≈ IDR 6,500,000 |
| 16–30 | IDR 600,000 | 20 guests ≈ IDR 12,000,000 |
| 31–50 | IDR 550,000 | 40 guests ≈ IDR 22,000,000 |
| 51–100 | IDR 525,000 | 80 guests ≈ IDR 42,000,000 |
| 101–200 | IDR 500,000 | 150 guests ≈ IDR 75,000,000 |
| 201–450 | IDR 475,000 | 300 guests ≈ IDR 142,500,000 |
| 450+ | Custom quote | — |

### UX
- Replace the 3 fixed "Small / Medium / Large" package cards with a pricing table and a simple guest-count estimator.
- The estimator shows the tier, per-person price, estimated total, and estimated staffing for the entered guest count.
- Add copy: "Prices are estimates. Final quote confirmed after menu, add-ons, and villa details are agreed."
- Update hero subtitle/highlights to reference per-person pricing (e.g. "From IDR 475k/person").
- Update JSON-LD offer schema to reflect the new entry price.

## 2. Reusable "How We Staff Your Event" Component

Used on all `/catering/*` pages.

### Rules
- **Chefs:** 1 chef per 50 guests (1–50 = 1 chef, 51–100 = 2 chefs, 101–150 = 3 chefs, etc.).
- **Assistants:** 1 assistant per 10 guests, rounded up (15 guests = 2 assistants, 30 guests = 3 assistants).
- Staff are included in the package; this section is informational.

### Examples to show
- 15 guests → 1 chef + 2 assistants
- 30 guests → 1 chef + 3 assistants
- 80 guests → 2 chefs + 8 assistants
- 450+ guests → custom brigade

## 3. Reusable "How Booking Works" Component

Used on all `/catering/*` pages.

### Steps
1. **Villa inspection & requirements** — we check layout, kitchen access, power, serving space, and event timing.
2. **Villa management coordination** — we handle logistics directly with your villa manager so you don't have to.
3. **Confirm menu & 50% deposit** — once details are agreed, the deposit locks your date.
4. **Prep & execution** — sourcing, cooking, delivery/setup, service, and cleanup.
5. **Equipment check** — we identify any missing equipment and arrange extras; additional items are quoted clearly.

## 4. Rollout

### New components
- `src/components/catering/StaffingInfo.tsx`
- `src/components/catering/BookingProcess.tsx`

### Pages to update
- `/catering/babi-guling` — full pricing system + new components
- All other `/catering/*` pages — add StaffingInfo and BookingProcess components only:
  - `/catering`
  - `/catering/bbq-catering`
  - `/catering/buffet`
  - `/catering/plated-catering`
  - `/catering/drop-off-catering`
  - `/catering/grazing-tables`
  - `/catering/villa-catering`
  - `/catering/corporate-catering`
  - `/catering/retreat-catering`
  - `/catering/floating-breakfast`

Fine-dining pages remain unchanged.

## 5. Out of scope
- No live dynamic calculator backend.
- No payment integration changes.
- No URL changes.
