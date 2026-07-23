# Buffet Pricing & Consistency Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `/catering/buffet` pricing to match current Bali market positioning and fix all tax/service-charge/staffing-ratio inconsistencies on the page.

**Architecture:** All changes are confined to the existing buffet page and two shared components it consumes (`TaxFooter`, `StaffingInfo`). Update data constants in `CateringBuffetPage.tsx`, adjust package descriptions, hero copy, group-size guide, and schema offers. Fix shared components so tax wording and staffing ratios are consistent across the site.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind.

## Global Constraints

- Only touch `/catering/buffet` and the two shared components it uses (`TaxFooter`, `StaffingInfo`).
- No URL changes.
- No new dependencies.
- Preserve existing visual styling.
- Build must pass (`npm run build`).
- Commit each task separately.

---

### Task 1: Update buffet package prices and descriptions

**Files:**
- Modify: `src/pages/CateringBuffetPage.tsx:37-62`

**Interfaces:**
- Consumes: existing `BUFFET_PACKAGES` array shape.
- Produces: updated `BUFFET_PACKAGES` with new prices, descriptions, and includes.

- [ ] **Step 1: Replace package data**

```ts
const BUFFET_PACKAGES = [
  {
    title: 'Indonesian Buffet',
    price: 475000,
    description: '3 main dishes, 2 vegetable or side dishes, rice & noodles, 2 salads or cold dishes, sambals, dessert & fresh fruit.',
    includes: ['Chef & kitchen team', 'Service staff (1 per 12 guests)', 'Buffet equipment', 'Serving tables', 'Linens', 'Cutlery', '2.5h service', 'Setup & cleanup', 'Normal groceries included'],
    minGuests: 'Min. 30 guests',
    image: '/generated/mychef-catering-bali-buffet-package-indonesian.webp',
  },
  {
    title: 'International Buffet',
    price: 575000,
    description: '3 premium proteins, pasta or potato dish, 2 salads, vegetables, bread, two desserts.',
    includes: ['Chef & service team', 'Service staff (1 per 12 guests)', 'Complete buffet setup', 'Tables', 'Linens', 'Cutlery', 'Serving equipment', '2.5h service', 'Setup & cleanup', 'Normal groceries included'],
    minGuests: 'Min. 30 guests',
    image: '/generated/mychef-catering-bali-buffet-package-international.webp',
  },
  {
    title: 'Premium Live-Station Buffet',
    price: 775000,
    description: 'Two live stations, two prepared main dishes, premium sides & salads, dessert station.',
    includes: ['Head chef', 'Live-station chefs', 'Service staff (1 per 12 guests)', 'Full buffet & station setup', 'Premium serving equipment', 'Tables', 'Linens', 'Cutlery', '2.5h service', 'Setup & cleanup', 'Normal groceries included'],
    minGuests: 'Min. 30 guests',
    image: '/generated/mychef-catering-bali-buffet-package-premium.webp',
  },
]
```

- [ ] **Step 2: Add a volume-pricing note under the packages**

After the package grid (`src/pages/CateringBuffetPage.tsx:507-508`), insert:

```tsx
          <div className="mt-8 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 max-w-4xl mx-auto">
            <h3 className="font-semibold mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Volume Pricing</h3>
            <p className="text-sm text-[#4A4745] text-center mb-4">Larger groups benefit from economies of scale. Prices below are per person, ++.</p>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-[#1A1A1A]">
                    <th className="pb-3 font-semibold uppercase tracking-normal">Guests</th>
                    <th className="pb-3 font-semibold uppercase tracking-normal">Indonesian</th>
                    <th className="pb-3 font-semibold uppercase tracking-normal">International</th>
                    <th className="pb-3 font-semibold uppercase tracking-normal">Live Station</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">20 – 29</td><td className="py-3">IDR 525,000++</td><td className="py-3">IDR 625,000++</td><td className="py-3">IDR 850,000++</td></tr>
                  <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">30 – 49</td><td className="py-3">IDR 475,000++</td><td className="py-3">IDR 575,000++</td><td className="py-3">IDR 775,000++</td></tr>
                  <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">50 – 99</td><td className="py-3">IDR 450,000++</td><td className="py-3">IDR 550,000++</td><td className="py-3">IDR 750,000++</td></tr>
                  <tr><td className="py-3 font-medium">100+</td><td className="py-3" colSpan={3}>Custom quotation</td></tr>
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-3">
              <div className="flex justify-between text-sm"><span className="font-medium">20 – 29 guests</span><span className="text-[#4A4745]">IDR 525K++ / IDR 625K++ / IDR 850K++</span></div>
              <div className="flex justify-between text-sm"><span className="font-medium">30 – 49 guests</span><span className="text-[#4A4745]">IDR 475K++ / IDR 575K++ / IDR 775K++</span></div>
              <div className="flex justify-between text-sm"><span className="font-medium">50 – 99 guests</span><span className="text-[#4A4745]">IDR 450K++ / IDR 550K++ / IDR 750K++</span></div>
              <div className="flex justify-between text-sm"><span className="font-medium">100+ guests</span><span className="text-[#4A4745]">Custom quotation</span></div>
            </div>
          </div>
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/CateringBuffetPage.tsx
git commit -m "feat(buffet): update package prices, descriptions, and add volume pricing"
```

---

### Task 2: Update group-size guide totals

**Files:**
- Modify: `src/pages/CateringBuffetPage.tsx:136-142` and `src/pages/CateringBuffetPage.tsx:533-535`

**Interfaces:**
- Consumes: new base prices from Task 1.
- Produces: `GROUP_SIZE_GUIDE` values using 30–49 tier prices.

- [ ] **Step 1: Update table data**

```ts
const GROUP_SIZE_GUIDE = [
  { guests: 30, indonesian: 'IDR 17.24M', international: 'IDR 20.87M', premium: 'IDR 28.12M' },
  { guests: 50, indonesian: 'IDR 28.74M', international: 'IDR 34.78M', premium: 'IDR 46.87M' },
  { guests: 80, indonesian: 'IDR 45.98M', international: 'IDR 55.65M', premium: 'IDR 75.00M' },
  { guests: 120, indonesian: 'IDR 68.97M', international: 'IDR 83.48M', premium: 'IDR 112.50M' },
  { guests: 200, indonesian: 'IDR 114.95M', international: 'IDR 139.13M', premium: 'IDR 187.50M' },
]
```

Calculated as `price * 1.21 * guests` (all-in total) using 30–49 tier prices:
- Indonesian 475,000 × 1.21 = 574,750
- International 575,000 × 1.21 = 695,750
- Premium 775,000 × 1.21 = 937,750

- [ ] **Step 2: Update table headers to show new base prices**

Change:
- `Indonesian <span className="text-xs font-normal opacity-70">(700K)</span>` → `(475K)`
- `International <span className="text-xs font-normal opacity-70">(750K)</span>` → `(575K)`
- `Live-Station <span className="text-xs font-normal opacity-70">(950K)</span>` → `(775K)`

- [ ] **Step 3: Commit**

```bash
git add src/pages/CateringBuffetPage.tsx
git commit -m "feat(buffet): recalculate group-size guide with new pricing"
```

---

### Task 3: Update calculators, comparison table, and schema offers

**Files:**
- Modify: `src/pages/CateringBuffetPage.tsx:190-192`, `src/pages/CateringBuffetPage.tsx:241`, `src/pages/CateringBuffetPage.tsx:512-514`, `src/pages/CateringBuffetPage.tsx:533-535`, `src/pages/CateringBuffetPage.tsx:151`

**Interfaces:**
- Consumes: new base prices.
- Produces: consistent pricing references across copy, JSON-LD, and calculators.

- [ ] **Step 1: Update offerSchema prices**

```ts
offerSchema('Indonesian Buffet', 475000, 'IDR', `${SITE}/catering/buffet`),
offerSchema('International Buffet', 575000, 'IDR', `${SITE}/catering/buffet`),
offerSchema('Premium Live-Station Buffet', 775000, 'IDR', `${SITE}/catering/buffet`),
```

- [ ] **Step 2: Update hero subtitle**

```tsx
From IDR 475,000++ per guest · Min. 30 guests · Food, chef, staff & cleanup included · Bali-wide
```

- [ ] **Step 3: Update GroupTotalCalculator props**

```tsx
<GroupTotalCalculator pricePerPerson={475000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
<GroupTotalCalculator pricePerPerson={575000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
<GroupTotalCalculator pricePerPerson={775000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
```

- [ ] **Step 4: Update buffet-vs-plated price range**

```ts
{ aspect: 'Price range', buffet: 'IDR 475K–775K/pp', plated: 'IDR 800K–1.3M/pp' },
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/CateringBuffetPage.tsx
git commit -m "feat(buffet): sync calculators, hero, schema, and comparison with new prices"
```

---

### Task 4: Fix tax and grocery copy in TaxFooter

**Files:**
- Modify: `src/components/shared/TaxFooter.tsx:7-9`

**Interfaces:**
- Consumes: none.
- Produces: consistent footer text used on all catering pages.

- [ ] **Step 1: Update footer copy**

```tsx
    <div className={`text-center text-xs text-[#4A4745]/80 ${className}`}>
      <p>Prices shown are estimates. Final quote includes 10% service charge and 11% VAT.</p>
      <p className="mt-1">Premium upgrades (lobster, imported beef, oysters, extra live stations) quoted separately. 50% deposit to confirm.</p>
    </div>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/shared/TaxFooter.tsx
git commit -m "fix(tax-footer): clarify normal groceries are included and premium upgrades are extra"
```

---

### Task 5: Fix staffing ratio inconsistency

**Files:**
- Modify: `src/components/catering/StaffingInfo.tsx:6` and `src/components/catering/StaffingInfo.tsx:45`

**Interfaces:**
- Consumes: none.
- Produces: consistent 1-per-12 staffing ratio across buffet page.

- [ ] **Step 1: Update assistant calculation and copy**

```ts
const assistants = Math.ceil(guests / 12)
```

```tsx
<strong>1 assistant per 12 guests.</strong> Assistants help with setup, carving, serving, and cleanup so service runs smoothly.
```

- [ ] **Step 2: Commit**

```bash
git add src/components/catering/StaffingInfo.tsx
git commit -m "fix(staffing-info): align assistant ratio with buffet page (1 per 12 guests)"
```

---

### Task 6: Build and verify

**Files:**
- Test: `npm run build`

**Interfaces:**
- Consumes: all previous changes.
- Produces: passing build and prerender.

- [ ] **Step 1: Run build**

```bash
npm run build
```

Expected: build exits 0, prerender completes 253/253 routes, price-floor check passes.

- [ ] **Step 2: Spot-check generated buffet page**

```bash
grep -o 'IDR 475,000++' dist/catering/buffet/index.html | head -1
grep -o 'IDR 575,000++' dist/catering/buffet/index.html | head -1
grep -o 'IDR 775,000++' dist/catering/buffet/index.html | head -1
```

Expected: each price appears at least once.

- [ ] **Step 3: Commit if build produced any tracked changes**

If `dist/` or `public/` changed as a result of the build:

```bash
git add dist/ public/
git commit -m "chore(build): regenerate dist for buffet pricing update"
```

---

### Task 7: Push to main

**Files:**
- None.

**Interfaces:**
- Consumes: all commits on current branch.
- Produces: updated `main` on origin.

- [ ] **Step 1: Push**

```bash
git push origin main
```

Expected: push succeeds, main on origin contains all commits.

---

## Spec Coverage

| Requirement | Task |
|---|---|
| Indonesian buffet IDR 475K++ | Task 1 |
| International buffet IDR 575K++ | Task 1 |
| Premium live-station IDR 775K++ | Task 1 |
| Volume pricing table | Task 1 |
| Group-size totals recalculated | Task 2 |
| Calculators / hero / schema / comparison synced | Task 3 |
| Groceries included, premium upgrades extra | Task 4 |
| Staffing ratio 1 per 12 | Task 5 |
| Build passes | Task 6 |
| Push to main | Task 7 |
