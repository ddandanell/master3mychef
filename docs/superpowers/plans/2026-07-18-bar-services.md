# MyChef Bar Services Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` (recommended) or `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy 22 new B2B bar-services landing pages under `/bar-services/` on mychef.id, with OpenAI-generated imagery, matching the existing site design and conversion patterns.

**Architecture:** A reusable data-driven template renders all 11 service pages from a typed data file; standalone components handle the hub, FAQ, contact, resources index, and individual resource articles. Routes, metadata, sitemap, and navigation are wired into the existing Vite + React Router app.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, React Router v7, existing mychef component library (`SeoHead`, `OptimizedImage`, `Breadcrumb`, `FAQAccordion`, `StickyMobileCTA`).

## Global Constraints

- All new URLs live under `/bar-services/` with trailing slashes.
- English only; Indonesian `/id/` mirror is out of scope.
- No published prices; use "Request a quote" everywhere.
- Use existing WhatsApp number `6289674072020` for all CTAs.
- Images generated with OpenAI, output as WebP, optimized (hero ≤150KB, body ≤100KB, OG ≤120KB).
- All internal links normalized to `/bar-services/`.
- `pnpm lint` and `pnpm build` must pass before the task is complete.
- Work on branch `feature/bar-services`; do not commit to `main`.

---

## File Map

### New data files
- `src/data/bar-services/types.ts` — shared TypeScript interfaces
- `src/data/bar-services/services.ts` — 11 service page data objects
- `src/data/bar-services/resources.ts` — 7 resource article data objects
- `src/data/bar-services/hub.ts` — hub page content and service groupings
- `src/data/bar-services/index.ts` — barrel export

### New shared components (`src/components/bar-services/`)
- `BarServiceHero.tsx`
- `BarServiceSectionHeader.tsx`
- `BarServiceProblem.tsx`
- `BarServiceDeliverables.tsx`
- `BarServiceProcess.tsx`
- `BarServiceIncluded.tsx`
- `BarServiceProof.tsx`
- `BarServiceQuoteBlock.tsx`
- `BarServiceCrossSells.tsx`
- `BarServiceResources.tsx`
- `BarServiceEnquiryForm.tsx`
- `BarServiceLeadMagnet.tsx`
- `index.ts` — barrel export

### New page components (`src/pages/`)
- `BarServicePage.tsx` — template for 11 service pages
- `BarServicesHubPage.tsx`
- `BarServicesFAQPage.tsx`
- `BarServicesContactPage.tsx`
- `BarServicesResourcesIndexPage.tsx`
- `BarServicesResourcePage.tsx` — data-driven resource article

### Modified existing files
- `src/App.tsx` — add routes
- `src/data/page-meta.ts` — add 22 meta entries
- `src/data/sitemap.ts` — add 22 URLs
- `src/data/redirects.ts` — add normalized redirects
- `src/components/Navbar.tsx` — add Bar Services dropdown
- `src/components/Footer.tsx` — add Bar Services column
- `src/lib/imageDimensions.ts` — add new image dimensions
- `scripts/inject-meta.ts` — add OG image mappings
- `scripts/validate-hero-images.ts` — add required hero checks

### Generated assets (`public/generated/`)
- 11 service heroes, 11 service body shots, 7 resource featured images, 3 hub images, 2 contact images, 22 OG images.

---

## Phase 1: Data Foundations

### Task 1: Create bar-services types and barrel file

**Files:**
- Create: `src/data/bar-services/types.ts`
- Create: `src/data/bar-services/index.ts`

**Interfaces:**
- Produces: `BarService`, `BarResource`, `BarServiceGroup`, `BarServicesHubData` interfaces.

- [ ] **Step 1: Write types**

```typescript
// src/data/bar-services/types.ts
export interface BarService {
  slug: string
  route: string
  metaKey: string
  eyebrow: string
  h1: string
  heroImage: string
  heroAlt: string
  bodyImage: string
  bodyAlt: string
  valueProp: string
  whatsappMessage: string
  problem: {
    title: string
    paragraphs: string[]
  }
  deliverables: {
    title: string
    description: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  included: string[]
  proof: {
    title: string
    items: string[]
  }
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
  relatedResources: string[]
}

export interface BarResource {
  slug: string
  route: string
  metaKey: string
  title: string
  h1: string
  featuredImage: string
  featuredAlt: string
  summary: string
  content: { heading?: string; paragraphs: string[] }[]
  relatedServices: string[]
}

export interface BarServiceGroup {
  title: string
  services: string[] // slugs
}

export interface BarServicesHubData {
  hero: {
    eyebrow: string
    h1: string
    description: string
    heroImage: string
    heroAlt: string
  }
  groups: BarServiceGroup[]
  whyUs: {
    title: string
    items: { title: string; description: string }[]
  }
  process: { step: number; title: string; description: string }[]
  proof: { title: string; items: string[] }
}
```

- [ ] **Step 2: Create barrel export**

```typescript
// src/data/bar-services/index.ts
export * from './types'
export * from './services'
export * from './resources'
export * from './hub'
```

- [ ] **Step 3: Commit**

```bash
git add src/data/bar-services/
git commit -m "feat(bar-services): add shared types and barrel export"
```

---

### Task 2: Create service data file

**Files:**
- Create: `src/data/bar-services/services.ts`

**Interfaces:**
- Consumes: `BarService` from `src/data/bar-services/types.ts`
- Produces: `BAR_SERVICES: BarService[]`, `getBarServiceBySlug(slug: string): BarService | undefined`, `BAR_SERVICE_SLUGS: string[]`.

- [ ] **Step 1: Create service data**

Build 11 `BarService` objects using the blueprint copy. Include all required fields. Example structure for one service:

```typescript
export const BAR_SERVICES: BarService[] = [
  {
    slug: 'bar-staff-training',
    route: '/bar-services/bar-staff-training/',
    metaKey: 'bar-services-bar-staff-training',
    eyebrow: 'Bar Staff Training',
    h1: 'Bar Staff Training Bali',
    heroImage: '/generated/mychef-bar-services-bali-hero-bar-staff-training.webp',
    heroAlt: 'Indonesian bartender training staff behind a villa bar in Bali',
    bodyImage: '/generated/mychef-bar-services-bali-bar-staff-training-body.webp',
    bodyAlt: 'Bar team practising cocktail-making during a training session',
    valueProp: 'Turn your bar team into consistent, confident operators who protect margins and elevate guest experience.',
    whatsappMessage: 'Hi MyChef — I\'d like to discuss Bar Staff Training for my venue in Bali.',
    problem: {
      title: 'Untrained staff cost you more than you think',
      paragraphs: [
        'In Bali, most front-of-house bar roles must be filled by local talent, but formal bar training is rare. Inconsistent pours, slow service, and wasted inventory silently drain revenue every shift.',
        'MyChef Bar Training gives your team the practical skills and systems to perform confidently from day one.'
      ]
    },
    deliverables: [
      { title: 'Skills assessment', description: 'Benchmark current ability across service, speed, and product knowledge.' },
      { title: 'Custom training programme', description: 'Built for your venue type, menu, and guest expectations.' },
      { title: 'Hands-on sessions', description: 'Practical training behind your actual bar with real equipment.' },
      { title: 'Reference materials', description: 'Recipe cards, checklists, and SOPs your team can use daily.' }
    ],
    process: [
      { step: 1, title: 'Briefing', description: 'We review your menu, team, and biggest pain points.' },
      { step: 2, title: 'Assessment', description: 'Current skills are benchmarked across key competencies.' },
      { step: 3, title: 'Training', description: 'Practical, venue-specific sessions with live feedback.' },
      { step: 4, title: 'Handover', description: 'SOPs, checklists, and a follow-up plan are delivered.' }
    ],
    included: [
      'Pre-training venue assessment',
      'Customised training plan',
      'Hands-on practical sessions',
      'Recipe and SOP documentation',
      'Train-the-trainer notes for managers',
      '30-day follow-up support'
    ],
    proof: {
      title: 'Trained by operators who understand Bali',
      items: [
        'Curriculum built for Indonesian bar teams',
        'Practical, venue-based delivery',
        'Focus on margin protection and guest satisfaction'
      ]
    },
    faqs: [
      { question: 'How long is a typical training programme?', answer: 'Most programmes run 1–3 days depending on team size and scope. We tailor the length to your needs.' },
      { question: 'Can you train existing staff or only new hires?', answer: 'Both. We can upskill current teams and create onboarding programmes for new staff.' },
      { question: 'Do you provide training materials?', answer: 'Yes — recipe cards, checklists, and SOPs are included so knowledge stays in the business.' },
      { question: 'Is the training conducted in English or Bahasa Indonesia?', answer: 'We deliver in English with Bahasa Indonesia support where needed.' }
    ],
    relatedServices: ['temporary-bartender-staffing', 'bar-audit-improvement', 'monthly-bar-management-support'],
    relatedResources: ['how-much-does-a-bartender-cost-bali', 'how-many-bartenders-per-guest']
  },
  // ... remaining 10 services follow the same shape
]
```

Fill in the remaining 10 services with blueprint copy:
- `cocktail-menu-development`
- `signature-cocktail-creation`
- `temporary-bartender-staffing`
- `permanent-bar-staff-recruitment`
- `new-bar-setup`
- `bar-audit-improvement`
- `bar-costing-inventory-control`
- `bar-equipment-supply-rental`
- `monthly-bar-management-support`
- `complete-bar-performance-programme`

- [ ] **Step 2: Add helpers**

```typescript
export const getBarServiceBySlug = (slug: string): BarService | undefined =>
  BAR_SERVICES.find((s) => s.slug === slug)

export const BAR_SERVICE_SLUGS = BAR_SERVICES.map((s) => s.slug)
```

- [ ] **Step 3: Commit**

```bash
git add src/data/bar-services/services.ts
git commit -m "feat(bar-services): add service page data"
```

---

### Task 3: Create resource data file

**Files:**
- Create: `src/data/bar-services/resources.ts`

**Interfaces:**
- Consumes: `BarResource` from `src/data/bar-services/types.ts`
- Produces: `BAR_RESOURCES: BarResource[]`, `getBarResourceBySlug(slug)`, `BAR_RESOURCE_SLUGS`.

- [ ] **Step 1: Create resource data**

Build 7 `BarResource` objects. Example:

```typescript
export const BAR_RESOURCES: BarResource[] = [
  {
    slug: 'how-much-does-a-bartender-cost-bali',
    route: '/bar-services/resources/how-much-does-a-bartender-cost-bali/',
    metaKey: 'bar-services-resources-how-much-does-a-bartender-cost-bali',
    title: 'How Much Does a Bartender Cost in Bali?',
    h1: 'How Much Does a Bartender Cost in Bali?',
    featuredImage: '/generated/mychef-bar-services-bali-resource-how-much-does-a-bartender-cost-bali.webp',
    featuredAlt: 'Indonesian bartender preparing drinks at a Bali villa bar',
    summary: 'A practical guide to bartender salaries, hourly rates, and hidden costs for Bali venues in 2026.',
    content: [
      {
        heading: 'Typical bartender costs in Bali',
        paragraphs: [
          'Bartender costs in Bali vary by venue type, experience, and whether you hire full-time, part-time, or for events. Entry-level bar staff typically start around Rp 3–4.5M per month, while experienced bartenders or shift leaders can command Rp 6–10M or more.',
          'For one-off events or temporary coverage, hourly rates usually range from Rp 35,000 to Rp 100,000 per hour depending on skill level and shift length.'
        ]
      },
      // ... additional sections from blueprint
    ],
    relatedServices: ['temporary-bartender-staffing', 'permanent-bar-staff-recruitment', 'bar-staff-training']
  },
  // ... remaining 6 resources
]
```

- [ ] **Step 2: Add helpers**

```typescript
export const getBarResourceBySlug = (slug: string): BarResource | undefined =>
  BAR_RESOURCES.find((r) => r.slug === slug)

export const BAR_RESOURCE_SLUGS = BAR_RESOURCES.map((r) => r.slug)
```

- [ ] **Step 3: Commit**

```bash
git add src/data/bar-services/resources.ts
git commit -m "feat(bar-services): add resource article data"
```

---

### Task 4: Create hub data file

**Files:**
- Create: `src/data/bar-services/hub.ts`

**Interfaces:**
- Consumes: `BarServicesHubData` from `src/data/bar-services/types.ts`
- Produces: `BAR_SERVICES_HUB: BarServicesHubData`.

- [ ] **Step 1: Create hub data**

```typescript
import type { BarServicesHubData } from './types'

export const BAR_SERVICES_HUB: BarServicesHubData = {
  hero: {
    eyebrow: 'Bar Services for Venues',
    h1: 'Bar Consultant Bali',
    description: 'The team behind Bali\'s private dining standard — now building world-class bar programmes for the island\'s venues.',
    heroImage: '/generated/mychef-bar-services-bali-hero-hub.webp',
    heroAlt: 'Bali villa bar setup with professional bartender preparing drinks at golden hour'
  },
  groups: [
    {
      title: 'Consulting',
      services: ['bar-audit-improvement', 'bar-costing-inventory-control', 'cocktail-menu-development', 'signature-cocktail-creation', 'new-bar-setup']
    },
    {
      title: 'Staffing',
      services: ['temporary-bartender-staffing', 'permanent-bar-staff-recruitment', 'bar-equipment-supply-rental']
    },
    {
      title: 'Management',
      services: ['bar-staff-training', 'monthly-bar-management-support']
    },
    {
      title: 'Flagship',
      services: ['complete-bar-performance-programme']
    }
  ],
  whyUs: {
    title: 'Why venues choose MyChef Bar Services',
    items: [
      { title: 'Bali-focused', description: 'We understand local staffing laws, supply chains, and guest expectations.' },
      { title: 'Margin-first', description: 'Every recommendation is measured against your cost structure and revenue goals.' },
      { title: 'End-to-end', description: 'From audit and setup to training and ongoing management — one partner.' }
    ]
  },
  process: [
    { step: 1, title: 'Diagnose', description: 'We assess your bar, team, and numbers.' },
    { step: 2, title: 'Design', description: 'We build a tailored programme and timeline.' },
    { step: 3, title: 'Deliver', description: 'We implement training, systems, or staffing.' },
    { step: 4, title: 'Optimise', description: 'We track results and refine month by month.' }
  ],
  proof: {
    title: 'Built on the same standards as Bali\'s best private dining experiences',
    items: [
      'Experienced hospitality operators',
      'Local team training and recruitment expertise',
      'Focus on measurable ROI'
    ]
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/bar-services/hub.ts
git commit -m "feat(bar-services): add hub page data"
```

---

### Task 5: Add routes to App.tsx

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: page components created in later tasks.

- [ ] **Step 1: Add lazy imports**

Near existing lazy imports, add:

```typescript
const BarServicesHubPage = lazy(() => import('./pages/BarServicesHubPage'))
const BarServicePage = lazy(() => import('./pages/BarServicePage'))
const BarServicesFAQPage = lazy(() => import('./pages/BarServicesFAQPage'))
const BarServicesContactPage = lazy(() => import('./pages/BarServicesContactPage'))
const BarServicesResourcesIndexPage = lazy(() => import('./pages/BarServicesResourcesIndexPage'))
const BarServicesResourcePage = lazy(() => import('./pages/BarServicesResourcePage'))
```

- [ ] **Step 2: Add routes**

Before catch-all routes, add:

```tsx
<Route path="/bar-services/" element={<BarServicesHubPage />} />
<Route path="/bar-services/faq/" element={<BarServicesFAQPage />} />
<Route path="/bar-services/contact/" element={<BarServicesContactPage />} />
<Route path="/bar-services/resources/" element={<BarServicesResourcesIndexPage />} />
<Route path="/bar-services/resources/:slug/" element={<BarServicesResourcePage />} />
<Route path="/bar-services/:slug/" element={<BarServicePage />} />
```

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat(bar-services): add routes"
```

---

### Task 6: Add page meta entries

**Files:**
- Modify: `src/data/page-meta.ts`

**Interfaces:**
- Consumes: existing `PageMeta` type and structure.
- Produces: 22 new page-meta entries.

- [ ] **Step 1: Add bar-services meta entries**

Add to the meta object:

```typescript
'bar-services-hub': {
  title: 'Bar Consultant Bali | MyChef Bar Services for Venues',
  description: 'Bali bar consulting, training, staffing and management for hotels, restaurants, villas and beach clubs. Request a quote from MyChef.',
  h1: 'Bar Consultant Bali',
  canonical: '/bar-services/',
  ogImage: '/generated/mychef-bar-services-bali-og-hub.jpg',
},
'bar-services-bar-staff-training': {
  title: 'Bar Staff Training Bali | MyChef',
  description: 'Practical bar staff training for Bali venues. Upskill your team, protect margins, and deliver consistent guest experiences. Request a quote.',
  h1: 'Bar Staff Training Bali',
  canonical: '/bar-services/bar-staff-training/',
  ogImage: '/generated/mychef-bar-services-bali-og-bar-staff-training.jpg',
},
// ... remaining 19 entries following same pattern
```

Generate unique titles/descriptions for all 22 pages from the blueprint metadata.

- [ ] **Step 2: Commit**

```bash
git add src/data/page-meta.ts
git commit -m "feat(bar-services): add page meta entries"
```

---

### Task 7: Add sitemap entries

**Files:**
- Modify: `src/data/sitemap.ts`

**Interfaces:**
- Consumes: `BAR_SERVICES`, `BAR_RESOURCES` from `src/data/bar-services`.

- [ ] **Step 1: Import bar-services data**

```typescript
import { BAR_SERVICES, BAR_RESOURCES } from './bar-services'
```

- [ ] **Step 2: Add bar-services URLs to sitemap**

Add a new `barServices` array or merge into existing `infoPages`:

```typescript
const barServicesPages = [
  '/bar-services/',
  '/bar-services/faq/',
  '/bar-services/contact/',
  '/bar-services/resources/',
  ...BAR_SERVICES.map((s) => s.route),
  ...BAR_RESOURCES.map((r) => r.route),
]
```

Ensure these are included in the exported `SITEMAP`.

- [ ] **Step 3: Commit**

```bash
git add src/data/sitemap.ts
git commit -m "feat(bar-services): add sitemap entries"
```

---

### Task 8: Add redirects

**Files:**
- Modify: `src/data/redirects.ts`

**Interfaces:**
- Consumes: existing redirect structure.

- [ ] **Step 1: Add normalized redirects**

Add any old paths that should redirect to `/bar-services/`:

```typescript
{ from: '/services/bar-staff-training', to: '/bar-services/bar-staff-training/', permanent: true },
{ from: '/services/cocktail-menu-development', to: '/bar-services/cocktail-menu-development/', permanent: true },
// ... add redirects for all 11 services + hub/FAQ/contact/resources as needed
```

Only add redirects if there are real old URLs to redirect. If not, skip.

- [ ] **Step 2: Commit**

```bash
git add src/data/redirects.ts
git commit -m "feat(bar-services): add redirects"
```

---

## Phase 2: Shared Components

### Task 9: Create BarServiceHero

**Files:**
- Create: `src/components/bar-services/BarServiceHero.tsx`

**Interfaces:**
- Consumes: `BarService` data fields (`eyebrow`, `h1`, `valueProp`, `heroImage`, `heroAlt`, `whatsappMessage`).
- Produces: `<BarServiceHero service={service} />`.

- [ ] **Step 1: Implement component**

```tsx
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { OptimizedImage } from '@/components/OptimizedImage'
import type { BarService } from '@/data/bar-services'

export function BarServiceHero({ service }: { service: BarService }) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <OptimizedImage
        src={service.heroImage}
        alt={service.heroAlt}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative container mx-auto px-4 py-24">
        <span className="text-sm uppercase tracking-widest text-amber-400 mb-4 block">
          {service.eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 max-w-3xl">
          {service.h1}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          {service.valueProp}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={buildWhatsAppUrl({ serviceName: service.h1, intent: service.whatsappMessage })}
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
          >
            WhatsApp Us
          </a>
          <a
            href="#enquiry-form"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 font-medium rounded"
          >
            Get a Written Quote
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceHero.tsx
git commit -m "feat(bar-services): add BarServiceHero component"
```

---

### Task 10: Create BarServiceSectionHeader

**Files:**
- Create: `src/components/bar-services/BarServiceSectionHeader.tsx`

**Interfaces:**
- Produces: `<BarServiceSectionHeader eyebrow? title description? />`.

- [ ] **Step 1: Implement component**

```tsx
export function BarServiceSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceSectionHeader.tsx
git commit -m "feat(bar-services): add BarServiceSectionHeader component"
```

---

### Task 11: Create BarServiceProblem

**Files:**
- Create: `src/components/bar-services/BarServiceProblem.tsx`

**Interfaces:**
- Consumes: `BarService['problem']`.

- [ ] **Step 1: Implement component**

```tsx
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceProblem({ problem }: { problem: BarService['problem'] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader title={problem.title} />
        <div className="max-w-3xl space-y-4 text-gray-700">
          {problem.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceProblem.tsx
git commit -m "feat(bar-services): add BarServiceProblem component"
```

---

### Task 12: Create BarServiceDeliverables

**Files:**
- Create: `src/components/bar-services/BarServiceDeliverables.tsx`

**Interfaces:**
- Consumes: `BarService['deliverables']`.

- [ ] **Step 1: Implement component**

```tsx
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceDeliverables({
  deliverables,
}: {
  deliverables: BarService['deliverables']
}) {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="What you get"
          title="What we deliver"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((d, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
              <p className="text-gray-600">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceDeliverables.tsx
git commit -m "feat(bar-services): add BarServiceDeliverables component"
```

---

### Task 13: Create BarServiceProcess

**Files:**
- Create: `src/components/bar-services/BarServiceProcess.tsx`

**Interfaces:**
- Consumes: `BarService['process']`.

- [ ] **Step 1: Implement component**

```tsx
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceProcess({ process }: { process: BarService['process'] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="How it works"
          title="Our process"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step) => (
            <div key={step.step} className="relative">
              <span className="text-5xl font-serif text-amber-200 absolute -top-6 -left-2">
                {step.step}
              </span>
              <div className="relative pt-8">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceProcess.tsx
git commit -m "feat(bar-services): add BarServiceProcess component"
```

---

### Task 14: Create BarServiceIncluded

**Files:**
- Create: `src/components/bar-services/BarServiceIncluded.tsx`

**Interfaces:**
- Consumes: `BarService['included']`.

- [ ] **Step 1: Implement component**

```tsx
import { Check } from 'lucide-react'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceIncluded({ included }: { included: BarService['included'] }) {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="What's included"
          title="Everything in the programme"
        />
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {included.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceIncluded.tsx
git commit -m "feat(bar-services): add BarServiceIncluded component"
```

---

### Task 15: Create BarServiceProof

**Files:**
- Create: `src/components/bar-services/BarServiceProof.tsx`

**Interfaces:**
- Consumes: `BarService['proof']`.

- [ ] **Step 1: Implement component**

```tsx
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceProof({ proof }: { proof: BarService['proof'] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader title={proof.title} />
        <div className="grid md:grid-cols-3 gap-6">
          {proof.items.map((item, i) => (
            <div key={i} className="border-l-4 border-amber-500 pl-6">
              <p className="text-lg text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceProof.tsx
git commit -m "feat(bar-services): add BarServiceProof component"
```

---

### Task 16: Create BarServiceQuoteBlock

**Files:**
- Create: `src/components/bar-services/BarServiceQuoteBlock.tsx`

**Interfaces:**
- Consumes: `BarService['h1']`, `BarService['whatsappMessage']`.

- [ ] **Step 1: Implement component**

```tsx
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import type { BarService } from '@/data/bar-services'

export function BarServiceQuoteBlock({ service }: { service: BarService }) {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Request a quote for {service.h1}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Tell us about your venue and we'll reply with a tailored proposal within one business day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={buildWhatsAppUrl({ serviceName: service.h1, intent: service.whatsappMessage })}
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
          >
            WhatsApp Us
          </a>
          <a
            href="#enquiry-form"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 font-medium rounded"
          >
            Get a Written Quote
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceQuoteBlock.tsx
git commit -m "feat(bar-services): add BarServiceQuoteBlock component"
```

---

### Task 17: Create BarServiceCrossSells

**Files:**
- Create: `src/components/bar-services/BarServiceCrossSells.tsx`

**Interfaces:**
- Consumes: `BarService['relatedServices']`, `BAR_SERVICES` data.

- [ ] **Step 1: Implement component**

```tsx
import { getBarServiceBySlug } from '@/data/bar-services'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'

export function BarServiceCrossSells({ slugs }: { slugs: string[] }) {
  const services = slugs
    .map((slug) => getBarServiceBySlug(slug))
    .filter(Boolean)

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="Related services"
          title="You may also need"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service!.slug}
              href={service!.route}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600">
                {service!.eyebrow}
              </h3>
              <p className="text-gray-600">{service!.valueProp}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceCrossSells.tsx
git commit -m "feat(bar-services): add BarServiceCrossSells component"
```

---

### Task 18: Create BarServiceResources

**Files:**
- Create: `src/components/bar-services/BarServiceResources.tsx`

**Interfaces:**
- Consumes: `BarService['relatedResources']`, `BAR_RESOURCES` data.

- [ ] **Step 1: Implement component**

```tsx
import { getBarResourceBySlug } from '@/data/bar-services'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'

export function BarServiceResources({ slugs }: { slugs: string[] }) {
  const resources = slugs
    .map((slug) => getBarResourceBySlug(slug))
    .filter(Boolean)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="Resources"
          title="Helpful reads"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {resources.map((resource) => (
            <a
              key={resource!.slug}
              href={resource!.route}
              className="block border border-gray-200 p-6 rounded-lg hover:border-amber-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{resource!.title}</h3>
              <p className="text-gray-600 text-sm">{resource!.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceResources.tsx
git commit -m "feat(bar-services): add BarServiceResources component"
```

---

### Task 19: Create BarServiceEnquiryForm

**Files:**
- Create: `src/components/bar-services/BarServiceEnquiryForm.tsx`

**Interfaces:**
- Consumes: `BarService['slug']`, `BarService['eyebrow']`, `BAR_SERVICES`.
- Produces: `<BarServiceEnquiryForm preselectedService={service.slug} />`.

- [ ] **Step 1: Implement component**

```tsx
import { useState } from 'react'
import { BAR_SERVICES } from '@/data/bar-services'

const VENUE_TYPES = ['Hotel', 'Restaurant', 'Villa', 'Beach club', 'Café', 'Event company', 'Other']

export function BarServiceEnquiryForm({ preselectedService }: { preselectedService?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    venue: '',
    venueType: '',
    services: preselectedService ? [preselectedService] : [],
    phone: '',
    email: '',
    message: '',
    preferredChannel: 'WhatsApp',
  })

  const handleServiceToggle = (slug: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(slug)
        ? prev.services.filter((s) => s !== slug)
        : [...prev.services, slug],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Existing site form handling: if a backend endpoint exists, use it;
    // otherwise fall back to mailto with form data.
    const body = encodeURIComponent(
      `Name: ${formData.name}\nVenue: ${formData.venue}\nVenue type: ${formData.venueType}\nServices: ${formData.services.join(', ')}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPreferred channel: ${formData.preferredChannel}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:info@mychef.id?subject=Bar Services Enquiry&body=${body}`
  }

  return (
    <section id="enquiry-form" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">
          Get a written quote
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input required type="text" className="w-full border rounded px-3 py-2" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Venue / company *</label>
            <input required type="text" className="w-full border rounded px-3 py-2" value={formData.venue} onChange={(e) => setFormData({ ...formData, venue: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Venue type *</label>
            <select required className="w-full border rounded px-3 py-2" value={formData.venueType} onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}>
              <option value="">Select venue type</option>
              {VENUE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Services needed *</label>
            <div className="flex flex-wrap gap-2">
              {BAR_SERVICES.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => handleServiceToggle(s.slug)}
                  className={`px-3 py-1 rounded-full border text-sm ${
                    formData.services.includes(s.slug)
                      ? 'bg-amber-500 border-amber-500 text-black'
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                >
                  {s.eyebrow}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp / phone *</label>
            <input required type="tel" className="w-full border rounded px-3 py-2" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input required type="email" className="w-full border rounded px-3 py-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea rows={4} className="w-full border rounded px-3 py-2" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred reply channel</label>
            <select className="w-full border rounded px-3 py-2" value={formData.preferredChannel} onChange={(e) => setFormData({ ...formData, preferredChannel: e.target.value })}>
              <option>WhatsApp</option>
              <option>Email</option>
            </select>
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded">
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceEnquiryForm.tsx
git commit -m "feat(bar-services): add BarServiceEnquiryForm component"
```

---

### Task 20: Create BarServiceLeadMagnet

**Files:**
- Create: `src/components/bar-services/BarServiceLeadMagnet.tsx`

**Interfaces:**
- Produces: `<BarServiceLeadMagnet />`.

- [ ] **Step 1: Implement component**

```tsx
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function BarServiceLeadMagnet() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-serif mb-4">
          Get the Bar Cost Leak Checklist
        </h2>
        <p className="text-gray-700 mb-8">
          A 10-point checklist that shows where most Bali venues lose margin behind the bar — and how to fix it.
        </p>
        <a
          href={buildWhatsAppUrl({ serviceName: 'Bar Cost Leak Checklist', intent: 'Hi MyChef — please send me the Bar Cost Leak Checklist.' })}
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded"
        >
          Send me the checklist
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Or book a free 30-minute bar health call.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/BarServiceLeadMagnet.tsx
git commit -m "feat(bar-services): add BarServiceLeadMagnet component"
```

---

### Task 21: Create component barrel export

**Files:**
- Create: `src/components/bar-services/index.ts`

- [ ] **Step 1: Export all components**

```typescript
export { BarServiceHero } from './BarServiceHero'
export { BarServiceSectionHeader } from './BarServiceSectionHeader'
export { BarServiceProblem } from './BarServiceProblem'
export { BarServiceDeliverables } from './BarServiceDeliverables'
export { BarServiceProcess } from './BarServiceProcess'
export { BarServiceIncluded } from './BarServiceIncluded'
export { BarServiceProof } from './BarServiceProof'
export { BarServiceQuoteBlock } from './BarServiceQuoteBlock'
export { BarServiceCrossSells } from './BarServiceCrossSells'
export { BarServiceResources } from './BarServiceResources'
export { BarServiceEnquiryForm } from './BarServiceEnquiryForm'
export { BarServiceLeadMagnet } from './BarServiceLeadMagnet'
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bar-services/index.ts
git commit -m "feat(bar-services): add component barrel export"
```

---

## Phase 3: Pages

### Task 22: Create BarServicePage template

**Files:**
- Create: `src/pages/BarServicePage.tsx`

**Interfaces:**
- Consumes: `useParams`, `getBarServiceBySlug`, `BAR_SERVICE_SLUGS`, all bar-services components, `SeoHead`, `Breadcrumb`, `FAQAccordion`, `StickyMobileCTA`, `getPageMeta`.
- Produces: `BarServicePage` component.

- [ ] **Step 1: Implement page template**

```tsx
import { useParams } from 'react-router-dom'
import { SeoHead } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { FAQAccordion } from '@/components/catering/FAQAccordion'
import { StickyMobileCTA } from '@/components/shared/StickyMobileCTA'
import { OptimizedImage } from '@/components/OptimizedImage'
import { getPageMeta } from '@/data/page-meta'
import { getBarServiceBySlug, BAR_SERVICE_SLUGS } from '@/data/bar-services'
import {
  BarServiceHero,
  BarServiceProblem,
  BarServiceDeliverables,
  BarServiceProcess,
  BarServiceIncluded,
  BarServiceProof,
  BarServiceQuoteBlock,
  BarServiceCrossSells,
  BarServiceResources,
  BarServiceEnquiryForm,
  BarServiceLeadMagnet,
} from '@/components/bar-services'

export default function BarServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getBarServiceBySlug(slug) : undefined

  if (!service || !BAR_SERVICE_SLUGS.includes(slug ?? '')) {
    return <div className="container mx-auto px-4 py-24">Service not found</div>
  }

  const meta = getPageMeta(service.metaKey)

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        ogImage={meta.ogImage}
        schema={[
          // Breadcrumb + Service + Offer + FAQPage schemas added here
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Bar Services', href: '/bar-services/' },
          { label: service.eyebrow, href: service.route },
        ]}
      />
      <BarServiceHero service={service} />
      <BarServiceProblem problem={service.problem} />
      <BarServiceDeliverables deliverables={service.deliverables} />
      <BarServiceProcess process={service.process} />
      <BarServiceIncluded included={service.included} />
      <BarServiceProof proof={service.proof} />
      <BarServiceQuoteBlock service={service} />
      <BarServiceCrossSells slugs={service.relatedServices} />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif mb-8">Frequently asked questions</h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>
      <BarServiceResources slugs={service.relatedResources} />
      <BarServiceEnquiryForm preselectedService={service.slug} />
      <BarServiceLeadMagnet />
      <StickyMobileCTA />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/BarServicePage.tsx
git commit -m "feat(bar-services): add service page template"
```

---

### Task 23: Create BarServicesHubPage

**Files:**
- Create: `src/pages/BarServicesHubPage.tsx`

**Interfaces:**
- Consumes: `BAR_SERVICES_HUB`, `BAR_SERVICES`, `getBarServiceBySlug`, `getPageMeta`, `SeoHead`, `Breadcrumb`, `OptimizedImage`, `buildWhatsAppUrl`.

- [ ] **Step 1: Implement hub page**

Build a standalone hub page using the hub data. Include hero, service group cards, why us, process, proof, resources teaser, and CTA. Use existing site styling.

- [ ] **Step 2: Commit**

```bash
git add src/pages/BarServicesHubPage.tsx
git commit -m "feat(bar-services): add hub page"
```

---

### Task 24: Create BarServicesFAQPage

**Files:**
- Create: `src/pages/BarServicesFAQPage.tsx`

**Interfaces:**
- Consumes: `FAQAccordion`, `getPageMeta`, `SeoHead`, `Breadcrumb`.
- Produces: general FAQ page with combined FAQs from all services + hub-specific questions.

- [ ] **Step 1: Implement FAQ page**

Aggregate unique FAQs from all service data into a single list. Add general questions like "What areas in Bali do you cover?", "Do you work with hotels and villas?", "How do I get a quote?".

- [ ] **Step 2: Commit**

```bash
git add src/pages/BarServicesFAQPage.tsx
git commit -m "feat(bar-services): add FAQ page"
```

---

### Task 25: Create BarServicesContactPage

**Files:**
- Create: `src/pages/BarServicesContactPage.tsx`

**Interfaces:**
- Consumes: `BarServiceEnquiryForm`, `buildWhatsAppUrl`, `SeoHead`, `Breadcrumb`, `OptimizedImage`.

- [ ] **Step 1: Implement contact page**

Include hero image, contact form, WhatsApp CTA, coverage info, response time, and team/consultant image.

- [ ] **Step 2: Commit**

```bash
git add src/pages/BarServicesContactPage.tsx
git commit -m "feat(bar-services): add contact page"
```

---

### Task 26: Create BarServicesResourcesIndexPage

**Files:**
- Create: `src/pages/BarServicesResourcesIndexPage.tsx`

**Interfaces:**
- Consumes: `BAR_RESOURCES`, `SeoHead`, `Breadcrumb`, `OptimizedImage`.

- [ ] **Step 1: Implement resources index**

Card grid of all 7 resource articles with featured image, title, summary, and link.

- [ ] **Step 2: Commit**

```bash
git add src/pages/BarServicesResourcesIndexPage.tsx
git commit -m "feat(bar-services): add resources index page"
```

---

### Task 27: Create BarServicesResourcePage

**Files:**
- Create: `src/pages/BarServicesResourcePage.tsx`

**Interfaces:**
- Consumes: `useParams`, `BAR_RESOURCE_SLUGS`, `getBarResourceBySlug`, `SeoHead`, `Breadcrumb`, `OptimizedImage`, `BarServiceCrossSells`.

- [ ] **Step 1: Implement resource article page**

```tsx
import { useParams } from 'react-router-dom'
import { SeoHead } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { OptimizedImage } from '@/components/OptimizedImage'
import { getPageMeta } from '@/data/page-meta'
import { getBarResourceBySlug, BAR_RESOURCE_SLUGS } from '@/data/bar-services'
import { BarServiceCrossSells } from '@/components/bar-services'

export default function BarServicesResourcePage() {
  const { slug } = useParams<{ slug: string }>()
  const resource = slug ? getBarResourceBySlug(slug) : undefined

  if (!resource || !BAR_RESOURCE_SLUGS.includes(slug ?? '')) {
    return <div className="container mx-auto px-4 py-24">Resource not found</div>
  }

  const meta = getPageMeta(resource.metaKey)

  return (
    <>
      <SeoHead title={meta.title} description={meta.description} canonical={meta.canonical} ogImage={meta.ogImage} />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Bar Services', href: '/bar-services/' },
          { label: 'Resources', href: '/bar-services/resources/' },
          { label: resource.title, href: resource.route },
        ]}
      />
      <section className="relative py-24 md:py-32">
        <OptimizedImage src={resource.featuredImage} alt={resource.featuredAlt} className="absolute inset-0 w-full h-full object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white max-w-3xl">{resource.h1}</h1>
        </div>
      </section>
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          {resource.content.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && <h2 className="text-2xl font-serif mb-4">{section.heading}</h2>}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-700 mb-4">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </article>
      <BarServiceCrossSells slugs={resource.relatedServices} />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/BarServicesResourcePage.tsx
git commit -m "feat(bar-services): add resource article page"
```

---

## Phase 4: Images

### Task 28: Audit existing images

**Files:**
- Read: `public/generated/` directory and `src/lib/imageDimensions.ts`

- [ ] **Step 1: Document visual baseline**

List 5–10 representative existing hero images, noting style, color temperature, subject matter, and composition. Use this to write consistent prompts.

- [ ] **Step 2: Commit findings**

No code change; note in implementation notes.

---

### Task 29: Generate service hero images

**Files:**
- Create: 11 WebP files in `public/generated/`
- Modify: `scripts/generate-openai-hero.ts` or create `scripts/generate-bar-services-images.ts`

- [ ] **Step 1: Write generation script or prompts**

For each service, generate a hero image matching the style rules. Example prompt:

```
Editorial photograph of an Indonesian bartender working confidently behind a modern Bali villa bar at golden hour. Natural warm light, candid working moment, professional but relaxed. Tropical greenery visible through open windows. No text, no logos, no neon signs. Clean, premium hospitality aesthetic.
```

- [ ] **Step 2: Generate and optimize**

Generate all 11 hero images, convert to WebP, resize to ~1440px wide, compress to ≤150KB.

- [ ] **Step 3: Commit**

```bash
git add public/generated/mychef-bar-services-bali-hero-*.webp
git commit -m "feat(bar-services): add service hero images"
```

---

### Task 30: Generate service body images

**Files:**
- Create: 11 WebP files in `public/generated/`

- [ ] **Step 1: Generate body images**

For each service, generate a body-section image showing a related scene (e.g., training in action, menu design flat-lay, bartender at event). Optimize to ≤100KB.

- [ ] **Step 2: Commit**

```bash
git add public/generated/mychef-bar-services-bali-*-body.webp
git commit -m "feat(bar-services): add service body images"
```

---

### Task 31: Generate hub, resource, and contact images

**Files:**
- Create: 3 hub images, 7 resource images, 2 contact images in `public/generated/`

- [ ] **Step 1: Generate images**

Follow the naming convention and style rules. Optimize each to ≤150KB (heroes) or ≤100KB (body/resource).

- [ ] **Step 2: Commit**

```bash
git add public/generated/mychef-bar-services-bali-hub-*.webp public/generated/mychef-bar-services-bali-resource-*.webp public/generated/mychef-bar-services-bali-contact-*.webp
git commit -m "feat(bar-services): add hub, resource, and contact images"
```

---

### Task 32: Generate OG images

**Files:**
- Create: 22 JPG files in `public/generated/` (1200×630)

- [ ] **Step 1: Generate OG images**

For hub, 11 services, FAQ, contact, resources index, and 7 resource articles. Use a consistent template: dark background, service name, MyChef Bar Services logo/wordmark if available, no small text.

If OpenAI text rendering is unreliable, generate clean background images and overlay text with Sharp/Canvas in a post-processing step.

- [ ] **Step 2: Commit**

```bash
git add public/generated/mychef-bar-services-bali-og-*.jpg
git commit -m "feat(bar-services): add OG images"
```

---

### Task 33: Register image dimensions and validate

**Files:**
- Modify: `src/lib/imageDimensions.ts`
- Modify: `scripts/validate-hero-images.ts` if it checks specific hero paths

- [ ] **Step 1: Add dimensions**

Add entries for all new images:

```typescript
'/generated/mychef-bar-services-bali-hero-hub.webp': { width: 1440, height: 960 },
'/generated/mychef-bar-services-bali-hero-bar-staff-training.webp': { width: 1440, height: 960 },
// ... all new images
```

- [ ] **Step 2: Validate**

Run `npx tsx scripts/validate-hero-images.ts` and fix any missing/oversized images.

- [ ] **Step 3: Commit**

```bash
git add src/lib/imageDimensions.ts scripts/validate-hero-images.ts
git commit -m "feat(bar-services): register image dimensions and validation"
```

---

## Phase 5: Navigation & SEO Polish

### Task 34: Update Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add Bar Services dropdown**

Insert a "Bar Services" dropdown between "Staffing" and "Contact" with the groups defined in the spec (Overview, Consulting, Staffing, Management, bottom link).

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(bar-services): add navbar dropdown"
```

---

### Task 35: Update Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Add Bar Services column**

Add a column with links to hub, key services, FAQ, and contact.

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(bar-services): add footer links"
```

---

### Task 36: Add OG image mappings

**Files:**
- Modify: `scripts/inject-meta.ts`

- [ ] **Step 1: Map OG images**

Add entries for all 22 pages to the `OG_IMAGES` map:

```typescript
'bar-services-hub': '/generated/mychef-bar-services-bali-og-hub.jpg',
'bar-services-bar-staff-training': '/generated/mychef-bar-services-bali-og-bar-staff-training.jpg',
// ... etc
```

- [ ] **Step 2: Commit**

```bash
git add scripts/inject-meta.ts
git commit -m "feat(bar-services): add OG image mappings"
```

---

### Task 37: Add cross-links from existing pages

**Files:**
- Modify: relevant existing service pages (e.g., `src/pages/ServiceBartendersPage.tsx`, `src/pages/StaffingVillaManagersPage.tsx`)

- [ ] **Step 1: Add subtle cross-links**

Add a small CTA or link where relevant, e.g., on the bartenders page: "Looking for bar training or consultancy? Explore MyChef Bar Services."

Keep cross-links minimal.

- [ ] **Step 2: Commit**

```bash
git add src/pages/ServiceBartendersPage.tsx src/pages/StaffingVillaManagersPage.tsx
git commit -m "feat(bar-services): add cross-links from existing pages"
```

---

## Phase 6: Validation & Deploy

### Task 38: Lint

**Files:**
- All modified files

- [ ] **Step 1: Run lint**

```bash
pnpm lint
```

- [ ] **Step 2: Fix issues and commit**

Fix any lint errors. Commit with message `style(bar-services): fix lint issues`.

---

### Task 39: Build

**Files:**
- All modified files

- [ ] **Step 1: Run build**

```bash
pnpm build
```

- [ ] **Step 2: Fix issues and commit**

Fix any build errors (TypeScript, image validation, sitemap, prerender). Commit fixes.

---

### Task 40: Manual review

**Files:**
- Built output in `dist/`

- [ ] **Step 1: Spot-check pages**

Verify these URLs prerender with correct content:
- `/bar-services/`
- `/bar-services/bar-staff-training/`
- `/bar-services/temporary-bartender-staffing/`
- `/bar-services/bar-audit-improvement/`
- `/bar-services/faq/`
- `/bar-services/contact/`
- `/bar-services/resources/`
- `/bar-services/resources/how-much-does-a-bartender-cost-bali/`

- [ ] **Step 2: Verify SEO**

Check `<title>`, meta description, canonical, OG tags, and JSON-LD in `dist/<route>/index.html`.

- [ ] **Step 3: Mark complete**

No commit needed if no changes.

---

## Self-Review

### Spec coverage

| Spec section | Task(s) |
|---|---|
| 22 URLs under `/bar-services/` | Task 5 (routes), Task 6 (meta), Task 7 (sitemap) |
| Hybrid architecture | Task 1–4 (data), Task 9–21 (components), Task 22–27 (pages) |
| Service page template sections | Task 9–20 + Task 22 |
| Hub/FAQ/Contact/Resources | Task 23–27 |
| OpenAI images | Task 28–33 |
| SEO/schema/sitemap | Task 6, 7, 36 |
| Navigation | Task 34, 35 |
| Conversion (WhatsApp/form) | Task 9, 16, 19, 25 |
| No prices, request quote | Content in Task 2 + components in Task 16 |
| Validation | Task 38–40 |

### Placeholder scan
- No "TBD", "TODO", or "implement later".
- No vague steps like "add error handling".
- Repetitive data entry is explicit; all services/resources must be filled from blueprint copy.

### Type consistency
- `BarService` interface used consistently across data file, components, and page.
- `BarResource` interface used consistently.
- `getBarServiceBySlug` and `getBarResourceBySlug` return types match usage.

### Gaps
- Exact page copy for remaining services/resources not included in plan; sourced from blueprint during implementation.
- Form backend endpoint not defined; fallback to `mailto:` is specified. If site has an existing form handler, use it instead.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-07-18-bar-services.md`.

Two execution options:

**1. Subagent-Driven (recommended)** — Dispatch a fresh subagent per task or per phase, review between tasks, fast iteration.

**2. Inline Execution** — Execute tasks in this session using `executing-plans`, with checkpoints for review.

Which approach do you want?
