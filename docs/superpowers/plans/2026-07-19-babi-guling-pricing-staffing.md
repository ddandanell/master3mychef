# Babi Guling Pricing & Catering Process Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace fixed total-price Babi Guling packages with a per-person volume-discount estimator, and add reusable staffing + booking-process sections to all catering pages.

**Architecture:** Create three small reusable components in `src/components/catering/` (`StaffingInfo`, `BookingProcess`, `BabiGulingPricing`) and import them into the relevant catering page components. Keep all existing page structure, SEO, and URLs unchanged.

**Tech Stack:** React + TypeScript + Tailwind CSS + Lucide icons + Vite. No backend changes.

## Global Constraints
- No URL changes.
- Prices are estimates; copy must say final quote depends on add-ons, location, and setup.
- Staffing information is informational only, not a line-item cost.
- Fine-dining pages remain unchanged.
- Follow existing Tailwind classes and component patterns in `src/components/catering/`.

---

## Task 1: Create reusable `StaffingInfo` component

**Files:**
- Create: `src/components/catering/StaffingInfo.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `export default function StaffingInfo()`

- [ ] **Step 1: Write the component**

Create `src/components/catering/StaffingInfo.tsx`:

```tsx
import { Users, ChefHat, UserPlus } from 'lucide-react'

function calcStaff(guests: number) {
  if (guests >= 450) return { chefs: 'Custom brigade', assistants: 'Custom team' }
  const chefs = Math.ceil(guests / 50)
  const assistants = Math.ceil(guests / 10)
  return { chefs, assistants }
}

export default function StaffingInfo() {
  const examples = [
    { guests: 15 },
    { guests: 30 },
    { guests: 80 },
    { guests: 150 },
  ]

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Team
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            How We Staff Your Event
          </h2>
          <p className="text-[#4A4745]">
            Staffing is included in your catering package. These numbers are a rough guide so you know who will be on site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
            <ChefHat className="w-8 h-8 text-[#C5A028] mb-4" />
            <h3 className="font-medium text-lg mb-2">Chefs</h3>
            <p className="text-sm text-[#4A4745]">
              <strong>1 chef per 50 guests.</strong> One head chef handles events up to 50 guests; larger events add chefs so every dish is finished on time.
            </p>
          </div>
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
            <UserPlus className="w-8 h-8 text-[#C5A028] mb-4" />
            <h3 className="font-medium text-lg mb-2">Assistants</h3>
            <p className="text-sm text-[#4A4745]">
              <strong>1 assistant per 10 guests.</strong> Assistants help with setup, carving, serving, and cleanup so service runs smoothly.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-medium mb-6">Quick staffing examples</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {examples.map(({ guests }) => {
              const staff = calcStaff(guests)
              return (
                <div key={guests} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <Users className="w-5 h-5 text-[#C5A028] mx-auto mb-2" />
                  <p className="font-medium text-sm">{guests} guests</p>
                  <p className="text-xs text-[#4A4745] mt-1">
                    {typeof staff.chefs === 'number' ? `${staff.chefs} chef${staff.chefs > 1 ? 's' : ''}` : staff.chefs}
                    <br />
                    {typeof staff.assistants === 'number' ? `${staff.assistants} assistant${staff.assistants > 1 ? 's' : ''}` : staff.assistants}
                  </p>
                </div>
              )
            })}
          </div>
          <p className="text-center text-xs text-[#4A4745] mt-6">
            For events over 450 guests we build a custom brigade sized to the event.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors in `StaffingInfo.tsx`

- [ ] **Step 3: Commit**

```bash
git add src/components/catering/StaffingInfo.tsx
git commit -m "feat(catering): add reusable StaffingInfo component"
```

---

## Task 2: Create reusable `BookingProcess` component

**Files:**
- Create: `src/components/catering/BookingProcess.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `export default function BookingProcess()`

- [ ] **Step 1: Write the component**

Create `src/components/catering/BookingProcess.tsx`:

```tsx
import { ClipboardCheck, Building2, Wallet, UtensilsCrossed, PackageCheck } from 'lucide-react'

const STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Villa inspection & requirements',
    desc: 'We check your villa layout, kitchen access, power, serving space, and event timing so we know exactly what the setup needs.',
  },
  {
    icon: Building2,
    title: 'Villa management coordination',
    desc: 'We handle logistics directly with your villa manager — access, loading, parking, and house rules — so you do not have to.',
  },
  {
    icon: Wallet,
    title: 'Confirm menu & 50% deposit',
    desc: 'Once the menu, guest count, and event details are agreed, a 50% deposit locks your date. The balance is due before the event.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Prep & execution',
    desc: 'We source ingredients, prep, cook, deliver, set up, serve, and clean up — everything is managed end to end.',
  },
  {
    icon: PackageCheck,
    title: 'Equipment check',
    desc: 'We identify any missing equipment and arrange extras if needed. Additional items are quoted clearly before we proceed.',
  },
]

export default function BookingProcess() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Booking Flow
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            How Booking Works
          </h2>
          <p className="text-[#4A4745]">
            From first message to final cleanup, we handle the details so you can focus on your guests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-5 relative">
              <span className="absolute top-4 right-4 text-[#E8E6E3] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <step.icon className="w-7 h-7 text-[#C5A028] mb-4" />
              <h3 className="font-medium text-sm mb-2">{step.title}</h3>
              <p className="text-xs text-[#4A4745] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors in `BookingProcess.tsx`

- [ ] **Step 3: Commit**

```bash
git add src/components/catering/BookingProcess.tsx
git commit -m "feat(catering): add reusable BookingProcess component"
```

---

## Task 3: Create `BabiGulingPricing` component

**Files:**
- Create: `src/components/catering/BabiGulingPricing.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `export default function BabiGulingPricing()`

- [ ] **Step 1: Write the component**

Create `src/components/catering/BabiGulingPricing.tsx`:

```tsx
import { useState } from 'react'
import { Users, ChefHat, UserPlus, Calculator, Info } from 'lucide-react'

const TIERS = [
  { min: 6, max: 15, price: 650000, label: '6–15 guests' },
  { min: 16, max: 30, price: 600000, label: '16–30 guests' },
  { min: 31, max: 50, price: 550000, label: '31–50 guests' },
  { min: 51, max: 100, price: 525000, label: '51–100 guests' },
  { min: 101, max: 200, price: 500000, label: '101–200 guests' },
  { min: 201, max: 450, price: 475000, label: '201–450 guests' },
]

function formatIdr(n: number) {
  return 'IDR ' + n.toLocaleString('id-ID')
}

function getTier(guests: number) {
  if (guests >= 451) return null
  return TIERS.find((t) => guests >= t.min && guests <= t.max) ?? null
}

function calcStaff(guests: number) {
  if (guests >= 451) return { chefs: 'Custom', assistants: 'Custom' }
  return { chefs: Math.ceil(guests / 50), assistants: Math.ceil(guests / 10) }
}

export default function BabiGulingPricing() {
  const [guests, setGuests] = useState<number | ''>(15)
  const guestNum = typeof guests === 'number' ? guests : 0
  const tier = getTier(guestNum)
  const staff = calcStaff(guestNum)
  const total = tier ? guestNum * tier.price : 0

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Babi Guling Pricing Estimate
          </h2>
          <p className="text-[#4A4745]">
            Per-person pricing with a lower rate for larger groups. Minimum 6 guests. Final quote depends on add-ons, villa location, serving style, and equipment needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
            <h3 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Pricing tiers</h3>
            <div className="space-y-3">
              {TIERS.map((t) => (
                <div key={t.label} className="flex items-center justify-between py-2 border-b border-[#E8E6E3] last:border-0">
                  <span className="text-sm text-[#4A4745]">{t.label}</span>
                  <span className="font-semibold text-sm">{formatIdr(t.price)}<span className="text-[#4A4745] font-normal">/person</span></span>
                </div>
              ))}
              <div className="flex items-center justify-between py-2 border-b border-[#E8E6E3] last:border-0">
                <span className="text-sm text-[#4A4745]">450+ guests</span>
                <span className="font-semibold text-sm">Custom quote</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0F1111] text-white rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-[#C5A028]" />
              <h3 className="text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Quick estimate</h3>
            </div>
            <label className="block text-sm text-white/70 mb-2">Number of guests (min. 6)</label>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-[#C5A028]" />
              <input
                type="number"
                min={6}
                value={guests}
                onChange={(e) => setGuests(e.target.value === '' ? '' : Math.max(6, parseInt(e.target.value, 10) || 6))}
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C5A028]"
              />
            </div>

            {tier ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm">Rate</span>
                  <span className="font-semibold">{formatIdr(tier.price)}/person</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm">Estimated total</span>
                  <span className="font-semibold text-[#C5A028]">{formatIdr(total)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm flex items-center gap-2"><ChefHat className="w-4 h-4" /> Chefs</span>
                  <span className="font-semibold">{typeof staff.chefs === 'number' ? `${staff.chefs}` : staff.chefs}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm flex items-center gap-2"><UserPlus className="w-4 h-4" /> Assistants</span>
                  <span className="font-semibold">{typeof staff.assistants === 'number' ? `${staff.assistants}` : staff.assistants}</span>
                </div>
              </div>
            ) : (
              <p className="text-white/70 text-sm">For events over 450 guests we prepare a custom quote and brigade plan.</p>
            )}

            <div className="flex items-start gap-2 mt-6 text-xs text-white/50">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>This is an estimate. Add-ons, travel, extra equipment, and special requests may change the final price.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors in `BabiGulingPricing.tsx`

- [ ] **Step 3: Commit**

```bash
git add src/components/catering/BabiGulingPricing.tsx
git commit -m "feat(catering): add BabiGulingPricing estimator component"
```

---

## Task 4: Update `/catering/babi-guling` page

**Files:**
- Modify: `src/pages/CateringBabiGulingPage.tsx`

**Interfaces:**
- Consumes: `BabiGulingPricing`, `StaffingInfo`, `BookingProcess`
- Produces: updated page component

- [ ] **Step 1: Import new components**

Add imports near the top of `src/pages/CateringBabiGulingPage.tsx`:

```tsx
import BabiGulingPricing from '@/components/catering/BabiGulingPricing'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
```

- [ ] **Step 2: Remove old fixed package section**

Delete the entire `PACKAGES` constant (lines 34–59) and the JSX block under `{/* ═══════ PACKAGES ═══════ */}` (lines 469–498).

- [ ] **Step 3: Replace package section with new components**

Where the old packages section was, add:

```tsx
<BabiGulingPricing />
<StaffingInfo />
<BookingProcess />
```

- [ ] **Step 4: Update hero highlight and schema**

Change the hero highlight from `'From IDR 5.5M'` or similar to `'From IDR 475k/person'`.

Update the JSON-LD offer schema from the three old fixed prices to:

```tsx
offerSchema('Babi Guling Catering', 475000, 'IDR', `${SITE}/catering/babi-guling`)
```

- [ ] **Step 5: Verify build**

Run: `pnpm run build`
Expected: build succeeds, 253 routes prerendered, validate-prerender passes.

- [ ] **Step 6: Commit**

```bash
git add src/pages/CateringBabiGulingPage.tsx
git commit -m "feat(catering/babi-guling): switch to per-person pricing estimator and add staffing/booking sections"
```

---

## Task 5: Add `StaffingInfo` and `BookingProcess` to other catering pages

**Files:**
- Modify: `src/pages/CateringMainPage.tsx`
- Modify: `src/pages/CateringBBQPage.tsx`
- Modify: `src/pages/CateringDropOffPage.tsx`
- Modify: `src/pages/CateringBuffetPage.tsx`
- Modify: `src/pages/CateringGrazingPage.tsx`
- Modify: `src/pages/CateringPlatedPage.tsx`
- Modify: `src/pages/CateringFloatingBreakfastPage.tsx`
- Modify: `src/pages/CateringVillaPage.tsx`
- Modify: `src/pages/CateringCorporatePage.tsx`
- Modify: `src/pages/CateringRetreatPage.tsx`

**Interfaces:**
- Consumes: `StaffingInfo`, `BookingProcess`
- Produces: updated page components

- [ ] **Step 1: Add imports to each page**

In each file, add:

```tsx
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
```

- [ ] **Step 2: Insert components near the bottom of each page**

Before the final CTA or FAQ section, add:

```tsx
<StaffingInfo />
<BookingProcess />
```

- [ ] **Step 3: Verify build**

Run: `pnpm run build`
Expected: build succeeds with no TypeScript errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Catering*.tsx
git commit -m "feat(catering): add staffing and booking process sections to all catering pages"
```

---

## Task 6: Final verification and deployment

- [ ] **Step 1: Run full build and audit**

Run: `pnpm run build && npx tsx scripts/seo-audit.ts`
Expected: build passes, SEO score remains 100/100.

- [ ] **Step 2: Push branch**

```bash
git push origin feature/bar-services
```

- [ ] **Step 3: Deploy to Vercel**

```bash
vercel deploy --prod --prebuilt --yes
```

- [ ] **Step 4: Spot-check live pages**

Visit:
- `https://mychef.id/catering/babi-guling` — shows pricing estimator, staffing, booking process
- `https://mychef.id/catering/bbq-catering` — shows staffing and booking process
- `https://mychef.id/catering` — shows staffing and booking process

---

## Self-Review

- **Spec coverage:** All pricing tiers, staffing formula, booking steps, and rollout pages are covered by tasks.
- **Placeholder scan:** No TBD or TODO items; all code is provided.
- **Type consistency:** `calcStaff` logic matches between `StaffingInfo` and `BabiGulingPricing`; both use the same 1 chef/50 guests and 1 assistant/10 guests rules.
