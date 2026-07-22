# MyChef Bar Services — Design Spec

> **Status:** Approved for implementation planning  
> **Scope:** 22 new public pages under `/bar-services/`  
> **Approach:** Hybrid — data-driven service template + standalone hub/FAQ/contact/resources

---

## 1. Goal

Launch a B2B bar-services vertical on mychef.id as a self-contained landing-page cluster. The pages must look and feel like part of the existing site, use OpenAI-generated imagery that matches the current visual language, and convert venue owners via WhatsApp and a written-quote form — without distracting from the main consumer-focused experience.

---

## 2. Decisions & Constraints

| Topic | Decision |
|---|---|
| **Pages to build** | Hub + 11 service pages + FAQ + Contact + 7 resource articles = **22 pages** |
| **Location pages** | **Excluded** from this phase |
| **Indonesian mirror** | **Deferred** to Phase 2; build English only now |
| **URL base** | `/bar-services/...` (no `/en/` prefix) |
| **Prices on pages** | **None**. Use "Request a quote" everywhere |
| **WhatsApp number** | Existing site number: `+62 896-7407-2020` (`6289674072020`) |
| **Launch policy** | Build and publish now; use standard legal disclaimers until entity/contracts/insurance are finalized |
| **Architecture** | Hybrid: one reusable template for the 11 service pages; standalone pages for hub, FAQ, contact, and resource articles |
| **Images** | OpenAI-generated (`gpt-image-2` or DALL-E 3), converted to WebP, optimized, registered in `src/lib/imageDimensions.ts` |

---

## 3. URL Plan

```
/bar-services/                                  → BarServicesHubPage
/bar-services/bar-staff-training/               → BarServicePage (data-driven)
/bar-services/cocktail-menu-development/
/bar-services/signature-cocktail-creation/
/bar-services/temporary-bartender-staffing/
/bar-services/permanent-bar-staff-recruitment/
/bar-services/new-bar-setup/
/bar-services/bar-audit-improvement/
/bar-services/bar-costing-inventory-control/
/bar-services/bar-equipment-supply-rental/
/bar-services/monthly-bar-management-support/
/bar-services/complete-bar-performance-programme/
/bar-services/faq/                              → BarServicesFAQPage
/bar-services/contact/                          → BarServicesContactPage
/bar-services/resources/                        → BarServicesResourcesIndexPage
/bar-services/resources/how-much-does-a-bartender-cost-bali/      → BarServicesResourcePage
/bar-services/resources/bartender-salary-benchmarks-bali/
/bar-services/resources/how-many-bartenders-per-guest/
/bar-services/resources/beverage-cost-percentage-guide/
/bar-services/resources/how-to-open-a-bar-in-bali/
/bar-services/resources/how-to-create-a-cocktail-menu/
```

All URLs use trailing slashes, lowercase, hyphenated slugs. Canonical URLs are self-referential.

---

## 4. Page Architecture

### 4.1 Service Page Template (`BarServicePage`)

One React component renders all 11 service pages from a typed data object keyed by slug.

**Section order (every service page):**

1. `SeoHead` — title, description, canonical, OG, JSON-LD
2. `Breadcrumb` — Home › Bar Services › [Service Name]
3. `BarServiceHero` — full-bleed image, eyebrow, H1, value prop, WhatsApp CTA, "Get a written quote" scroll-to-form link
4. `BarServiceProblem` — why this matters
5. `BarServiceDeliverables` — 3–4 cards of what we do
6. `BarServiceProcess` — 4–6 numbered steps
7. `BarServiceIncluded` — checklist / included items
8. `BarServiceProof` — credentials, guarantees, stats
9. `BarServiceQuoteBlock` — "Request a quote" (no price)
10. `BarServiceCrossSells` — 3 related service cards
11. `FAQAccordion` — 4–6 service-specific FAQs
12. `BarServiceResources` — links to relevant resource articles
13. `BarServiceEnquiryForm` — name, venue, venue type, service, WhatsApp, email, message
14. `BarServiceLeadMagnet` — "Bar Cost Leak Checklist" or free 30-min call
15. `StickyMobileCTA`

**Data source:** `src/data/bar-services/services.ts`

### 4.2 Hub Page (`BarServicesHubPage`)

Standalone page. Sections:

1. Hero — "Bar Consultant Bali" positioning
2. Service category cards (Consulting / Staffing / Management / Flagship)
3. Why MyChef Bar Services
4. Process overview
5. Proof/standards
6. Featured resources
7. CTA block

### 4.3 FAQ Page (`BarServicesFAQPage`)

Standalone accordion page with general bar-services FAQs.

### 4.4 Contact Page (`BarServicesContactPage`)

Standalone page with:

- Contact form
- WhatsApp CTA
- Coverage/response-time info
- Team/consultant image

### 4.5 Resource Pages (`BarServicesResourcePage`)

Standalone long-form article pages, reusing the existing article-content pattern. Each page has:

1. Hero image + H1
2. Breadcrumb
3. Article body
4. Related services / resources
5. Enquiry CTA

### 4.6 Resources Index (`BarServicesResourcesIndexPage`)

Card grid of all 7 resource articles.

---

## 5. Components

### New Shared Components (create in `src/components/bar-services/`)

| Component | Responsibility |
|---|---|
| `BarServiceHero` | Hero section for service pages |
| `BarServiceSectionHeader` | Reusable eyebrow + heading + subheading |
| `BarServiceProblem` | Problem statement block |
| `BarServiceDeliverables` | Deliverable cards grid |
| `BarServiceProcess` | Numbered process steps |
| `BarServiceIncluded` | Included-items checklist |
| `BarServiceProof` | Proof/standards block |
| `BarServiceQuoteBlock` | "Request a quote" CTA block |
| `BarServiceCrossSells` | 3-card related services |
| `BarServiceResources` | Related resource article links |
| `BarServiceEnquiryForm` | Contact/enquiry form |
| `BarServiceLeadMagnet` | Lead magnet CTA |

### Existing Components to Reuse

- `SeoHead`
- `OptimizedImage`
- `Breadcrumb`
- `FAQAccordion`
- `StickyMobileCTA`
- `RelatedServices` (adapt if needed)

---

## 6. Data Model

### `src/data/bar-services/services.ts`

```typescript
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
  relatedServices: string[] // slugs of 3 related services
  relatedResources: string[] // slugs of related resource articles
}
```

### `src/data/bar-services/resources.ts`

```typescript
export interface BarResource {
  slug: string
  route: string
  metaKey: string
  title: string
  h1: string
  featuredImage: string
  featuredAlt: string
  summary: string
  content: string // or array of sections
  relatedServices: string[]
}
```

### `src/data/bar-services/hub.ts`

Hub page content and service groupings.

---

## 7. Images

### Inventory (~46 images)

| Purpose | Count | Naming |
|---|---|---|
| Hub | 3 | `mychef-bar-services-bali-hero-hub.webp`, `mychef-bar-services-bali-hub-consulting.webp`, `mychef-bar-services-bali-hub-staffing.webp` |
| Service heroes | 11 | `mychef-bar-services-bali-hero-<slug>.webp` |
| Service body shots | 11 | `mychef-bar-services-bali-<slug>-body.webp` |
| Resource featured | 7 | `mychef-bar-services-bali-resource-<slug>.webp` |
| FAQ/Contact | 2 | `mychef-bar-services-bali-contact-portrait.webp`, `mychef-bar-services-bali-contact-team.webp` |
| OG images | 22 | `mychef-bar-services-bali-og-<slug>.jpg` |

### Style Rules

- Warm, natural light; editorial/candid style
- Real Bali venues: villa bars, hotel bars, beach clubs, restaurant back-bars
- Indonesian/Balinese service staff where people appear
- Professional, confident working moments
- No text, logos, watermarks
- No religious/sacred symbols
- No plastic/disposable ware
- No neon cocktail signs, no generic stock mojitos, no flair-bartending theatrics

### Generation Workflow

1. Audit existing `/public/generated/` images to establish the visual baseline.
2. Write per-image prompt briefs tied to page concepts and blueprint alt-text guidance.
3. Generate using OpenAI (`gpt-image-2` or DALL-E 3) via `scripts/generate-openai-hero.ts` or a new batch script.
4. Convert to WebP, resize/compress (hero ≤150KB, body ≤100KB, OG ≤120KB).
5. Register dimensions in `src/lib/imageDimensions.ts`.
6. Validate with `scripts/validate-hero-images.ts`.

---

## 8. SEO & Schema

### Metadata

- Store all page meta in `src/data/page-meta.ts` using keys like `bar-services-hub`, `bar-services-bar-staff-training`, `bar-services-resources-how-much-does-a-bartender-cost-bali`.
- Unique title ≤60 chars, description ≤155 chars, H1.
- Canonical URLs match the route exactly.
- OG images mapped in `scripts/inject-meta.ts`.

### JSON-LD Schema

| Page type | Schema |
|---|---|
| Hub | `ProfessionalService` + `hasOfferCatalog` + `FAQPage` |
| Service pages | `Service` + `Offer` + `FAQPage` |
| FAQ page | `FAQPage` |
| Resource articles | `Article` (+ `HowTo` where applicable) |
| All pages | `BreadcrumbList` |

### Sitemap

Add all 22 URLs to `src/data/sitemap.ts` so `scripts/generate-sitemap.ts` includes them.

### Redirects

Add any old `/services/...` paths or blueprint-specified aliases to `src/data/redirects.ts`, normalized to `/bar-services/...`.

---

## 9. Navigation Integration

### Navbar

Add a top-level "Bar Services" dropdown between "Staffing" and "Contact" with groups:

- **Overview:** Bar Services for Venues, Complete Bar Performance Programme
- **Consulting:** Bar Audit & Improvement, Bar Costing & Inventory Control, Cocktail Menu Development, Signature Cocktail Creation, New Bar Setup
- **Staffing:** Temporary Bartender Staffing, Permanent Bar Staff Recruitment, Bar Equipment Supply & Rental
- **Management:** Bar Staff Training, Monthly Bar Management Support
- **Bottom link:** View All Bar Services

### Footer

Add a "Bar Services" column with links to hub, key services, FAQ, and contact.

### Cross-links

- Add bar-services links sparingly to existing relevant pages (e.g., `/in-villa-service/bartenders`, `/staffing/*`).
- Keep cross-linking minimal so the main site focus stays on consumer services.

---

## 10. Conversion System

### WhatsApp CTA

- Use `buildWhatsAppUrl({ serviceName, intent })` from `src/lib/whatsapp.ts`.
- Each page has a page-specific pre-filled message (e.g., "Hi MyChef — I'd like to discuss Bar Staff Training for my venue...").
- Primary CTA on hero, quote block, and sticky mobile CTA.

### Enquiry Form

Fields:

1. Name (required)
2. Venue / company name (required)
3. Venue type — select: hotel, restaurant, villa, beach club, café, event company, other (required)
4. Service needed — multi-select chips, pre-selected from current page (required)
5. WhatsApp / phone (required)
6. Email (required)
7. Message (optional)
8. Preferred reply channel — default WhatsApp (optional)

### Lead Magnet

- "Bar Cost Leak Checklist" PDF download
- Free 30-minute bar health call

### Analytics

Track: `whatsapp_click`, `form_submit`, `proposal_request`, `lead_magnet_download`, `scroll_75`.

---

## 11. Content Sources & Resolutions

- Primary copy source: blueprint `06-website-copy/`.
- All internal links normalized to `/bar-services/`.
- All prices removed; "Request a quote" used instead.
- Location pages and Indonesian mirror excluded.
- P0 business blockers (entity form, contracts, insurance) noted; site uses standard "subject to final agreement" language and links to existing Privacy/Terms pages.

---

## 12. Build & Validation

### Build Order

1. Foundations: data types, shared components, routes, page-meta, sitemap.
2. Hub + 3 pilot service pages (validate template).
3. Remaining 8 service pages.
4. FAQ + Contact.
5. 7 resource articles.
6. Image generation and optimization.
7. Navigation, redirects, final SEO pass.
8. Build validation and deploy.

### Validation Checklist

- `pnpm lint` passes.
- `pnpm build` passes (includes hero-image validation, sitemap, meta injection, prerender).
- All 22 URLs prerender to static HTML.
- Manual spot-check: hub, 3 service pages, 1 resource article, FAQ, contact.
- Image sizes within budget (hero ≤150KB, body ≤100KB, OG ≤120KB).

---

## 13. Out of Scope

- `/id/` Indonesian mirror (Phase 2).
- Location pages (`/bar-services/locations/...`).
- `/for-business/` standalone page.
- Backend form handler (use existing pattern or simple `mailto:` fallback).
- Separate WhatsApp business number.
- Lawyer-drafted contracts and insurance (handled as business follow-up, not website blocker).
