# Project Intelligence Report
Generated: 2026-05-18 06:41 WITA

## Identity
- Name: myCHEF Bali
- Purpose: Premium private chef & catering service platform for Bali villa experiences
- Target users: Luxury travelers in Bali seeking private dining, event catering, and villa chef services

## Architecture
- Framework: React 19.2.0 + Vite 7.2.4 (SPA with client-side routing)
- Language: TypeScript 5.9.3 (strict mode enabled)
- Styling: Tailwind CSS 3.4.19 + CSS animations (tailwindcss-animate)
- Database: None (static content, no backend)
- Auth: None (public marketing site)
- Hosting: Netlify (configured via netlify.toml)
- Analytics: GA4 (G-W0PQH8ZKTF) + GTM (optional)

## Technology Stack
### Core
- React Router DOM 7.15.0 (client-side routing)
- GSAP 3.15.0 + @gsap/react (animations)
- Lucide React (iconography)
- Radix UI (accessible components)

### Performance
- @vercel/analytics + @vercel/speed-insights (monitoring)
- Code splitting (router, gsap, radix, lucide as separate chunks)
- CSS code splitting enabled
- Asset optimization (images hashed, fonts optimized)

### Build Process
- Prebuild: Validates hero images, critical assets, generates sitemap & redirects
- Build: TypeScript compile + Vite production build
- Postbuild: Validates critical assets, injects meta tags dynamically

## Project Structure
```
src/
├── App.tsx                 # Main router + route definitions
├── main.tsx                # Entry point
├── pages/                  # Page components (88 files)
├── components/             # Shared components (37 files)
│   ├── ui/                # Radix UI primitives
│   ├── Navbar.tsx         # Global navigation
│   ├── SeoHead.tsx        # Meta tag management
│   ├── WhatsAppButton.tsx # CTA component
│   ├── BookingForm.tsx    # Lead capture
│   └── ...
├── data/                   # Static content (9 files)
│   ├── sitemap.ts         # Site structure
│   ├── siteArchitecture.ts # Content database
│   └── ...
├── contexts/               # React contexts
├── hooks/                  # Custom hooks
├── lib/                    # Utilities
└── content/                # Markdown content

scripts/                    # Build automation
├── validate-hero-images.ts
├── validate-critical-assets.ts
├── generate-sitemap.ts
├── generate-redirects.ts
├── inject-meta.ts
└── audit-*.ts
```

## Route Map
This is a static marketing site with ~138 HTML pages including:

| Route Pattern | Purpose | Examples |
|---------------|---------|----------|
| `/` | Homepage | Main landing |
| `/fine-dining/*` | Fine dining service | /fine-dining, /fine-dining/menus |
| `/catering/*` | Catering service | /catering, /catering/packages |
| `/events-weddings/*` | Event service | /events-weddings, /events-weddings/venues |
| `/in-villa-service` | Villa service | Villa chef details |
| `/journal/*` | Blog/SEO content | /journal, /journal/[slug] |
| `/locations/*` | Location pages | /locations/seminyak, /locations/canggu |
| `/help/*` | Support pages | /help/faqs, /help/booking-process |
| `/about`, `/book`, `/pricing` | Static pages | Company info, booking, pricing |

All routes are public. No authentication required.

## Data Model
**Static Content Architecture** (no database)

Content is stored in TypeScript files:
- `src/data/siteArchitecture.ts` - Main content database (services, locations, menus, FAQs)
- `src/data/sitemap.ts` - Site structure for navigation
- `src/data/route-slugs.ts` - URL mappings
- `src/pages/*.tsx` - Static page components

Core Entities:
- **Services**: Fine Dining, Catering, Events/Weddings, In-Villa
- **Locations**: Seminyak, Canggu, Ubud, Uluwatu, Sanur, Berawa, etc.
- **Blog Posts**: 12 published journal posts
- **Menu Items**: Tasting menus, catering packages
- **FAQs**: Service-specific Q&A content

## Business Workflows
1. **Lead Generation**: Homepage → Service Page → WhatsApp CTA → Contact
2. **Discovery**: Google Search → Journal Post → Service Page → WhatsApp
3. **Booking**: Service Page → Pricing → Book Page → WhatsApp Form → External
4. **SEO**: Keyword → Blog Post → Internal Link → Service Page → Conversion

No backend workflows. All conversions route to WhatsApp (+62 822-3756-5997).

## Integration Points
| Service | Purpose | Where Used |
|---------|---------|------------|
| WhatsApp Business | Lead capture | All CTA buttons, booking forms |
| Google Analytics 4 | Traffic tracking | Global (G-W0PQH8ZKTF) |
| Google Tag Manager | (Optional) Tag management | Global (GTM-CONTAINER-ID) |
| Netlify | Hosting & deployment | Production deployment |

## Conventions

### File Naming
- Components: PascalCase (`BookingForm.tsx`, `Navbar.tsx`)
- Pages: PascalCase (`HomePage.tsx`, `ServicePage.tsx`)
- Data files: camelCase (`sitemap.ts`, `siteArchitecture.ts`)
- Scripts: kebab-case (`generate-sitemap.ts`)

### Component Patterns
- Composition-heavy (Radix UI primitives)
- Props drilling for simple state
- React Context for theme/universe state
- Functional components only (no class components)

### Styling
- Tailwind utility-first
- Custom animations via GSAP
- Responsive breakpoints: sm/md/lg/xl
- Dark mode: Not implemented (luxury brand uses light theme)

### TypeScript
- Strict mode enabled (`tsconfig.app.json`)
- Path aliases: `@/*` → `./src/*`
- Type imports preferred
- Explicit return types on exported functions

### Import Patterns
- Absolute imports via `@/` alias
- Barrel exports not used
- Direct component imports

### Code Quality
- ESLint configured (React hooks, React refresh)
- Playwright e2e tests available
- Axe accessibility testing integration
- Pre-commit validation scripts

## SEO Strategy
- 99 URLs in sitemap.xml
- 126 redirect rules configured
- Meta tags injected post-build
- Schema.org markup for rich snippets
- Localized content (Bali-specific keywords)
- Internal linking between journal posts and services
- Core Web Vitals optimized (LCP < 2.5s target)

## Deployment
- Platform: Netlify
- Branch: `auto-improve/core-web-vitals-phase4`
- Build Command: `pnpm build`
- Publish Directory: `dist`
- Environment Variables:
  - `VITE_GA_ID` (required)
  - `VITE_GTM_ID` (optional)
- Redirects: Configured via `public/_redirects`
- SPA routing: `/* /index.html 200` (netlify.toml)

## Current Status (2026-05-18)
- ✅ Production build passing (21MB, 138 HTML files)
- ✅ GA4 configured
- ✅ All quality checks passing
- ✅ Ready for deployment
- ⏳ Awaiting human Netlify deployment execution
- ⏳ Awaiting stakeholder calls (Alessandro, Paco, Antonio)

## Key Technical Decisions
1. **No backend/database**: Content managed in TypeScript for simplicity and performance
2. **WhatsApp integration**: Direct WhatsApp links instead of form submissions (reduces friction)
3. **Static generation**: Vite SPA with pre-generated meta tags for SEO
4. **Code splitting**: Vendor chunks separated (gsap, radix, router) for optimal loading
5. **Animation strategy**: GSAP for complex animations, CSS for simple transitions
6. **Accessibility**: Radix UI primitives ensure WCAG compliance
7. **GTM optional**: GA4 sufficient for initial launch, GTM added later if needed

## Development Commands
```bash
pnpm dev          # Start dev server (port 3000)
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm lint         # ESLint check
pnpm audit        # Quality audit
pnpm sitemap      # Regenerate sitemap
pnpm redirects    # Regenerate redirects
```

## Critical Files
- `src/App.tsx` - Router configuration
- `src/data/siteArchitecture.ts` - Main content database
- `src/data/sitemap.ts` - Site structure
- `scripts/inject-meta.ts` - SEO meta injection
- `public/_redirects` - URL redirect rules
- `netlify.toml` - Deployment config
- `.env` - Environment variables (GA4/GTM IDs)

## Known Issues / Technical Debt
- MISSING: `.env.example` (not found in repo)
- 1 modified file: `src/data/siteArchitecture.ts` (blog content updates)
- 8 untracked audit scripts (non-critical)
- GTM placeholder in `.env` (can add post-launch)

## Next Steps (Per Master Status)
1. **Human Deployment** (40 min): Netlify setup + DNS config
2. **Strategic Calls**: Alessandro (menus), Paco (service flow), Antonio (test dinner)
3. **Post-Launch**: Monitor GA4, verify Core Web Vitals, deploy WhatsApp bot
