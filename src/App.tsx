import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

// Existing brand pages
import HubPage from './pages/HubPage'
import LunaPage from './pages/LunaPage'
import SolPage from './pages/SolPage'
import AuraPage from './pages/AuraPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CancellationPage from './pages/CancellationPage'
import NotFoundPage from './pages/NotFoundPage'

// SEO-preservation templates (data-driven, see src/data/sitemap.ts)
import AreaPage from './components/AreaPage'
import ServicePage from './components/ServicePage'
import MenuPage from './components/MenuPage'
import LandingPage from './components/LandingPage'
import InfoPage from './components/InfoPage'
import BlogIndexPage from './components/BlogIndexPage'
import BaliHubPage from './components/BaliHubPage'
import QuoteFunnel from './components/QuoteFunnel'
import StaffingPage from './pages/StaffingPage'
import ServicesPage from './pages/ServicesPage'
import PartnerPlatformPage from './pages/PartnerPlatformPage'
import CertifiedPartnerPage from './pages/CertifiedPartnerPage'

import { AREAS, MICRO_AREAS, SERVICES, MENUS, LANDING_PAGES, GUIDES, BLOG_POSTS } from './data/sitemap'
import { REDIRECTS } from './data/redirects'

export default function App() {
  return (
    <Layout>
      <Routes>
        {/*
          301 redirects FIRST. The real 301 happens at the edge (vercel.json /
          public/_redirects). These Navigate routes are the client-side fallback
          that fires when the host config is skipped (dev mode, in-app navigation)
          or when a user hits an old internal link. They must be declared above
          the data-driven routes so they win the match.
        */}
        {REDIRECTS.map((r) => (
          <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
        ))}

        {/* Brand pages */}
        <Route path="/" element={<HubPage />} />
        <Route path="/fine-dining" element={<LunaPage />} />
        <Route path="/villa-chef" element={<SolPage />} />
        <Route path="/events" element={<AuraPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Legal — canonical paths + production aliases */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
        <Route path="/cancellation" element={<CancellationPage />} />
        <Route path="/payment-terms" element={<CancellationPage />} />

        {/* Services — top-nav page */}
        <Route path="/services" element={<ServicesPage />} />
        {/* Staffing — top-nav page */}
        <Route path="/staffing" element={<StaffingPage />} />
        {/* Partner Platform — villa partnership deep-dive */}
        <Route path="/partner-platform" element={<PartnerPlatformPage />} />
        {/* Public certified-partner verification pages (templated by slug) */}
        <Route path="/certified/:slug" element={<CertifiedPartnerPage />} />

        {/* Production aliases for existing pages */}
        <Route path="/villa-partners" element={<PartnersPage />} />
        <Route path="/catering" element={<SolPage />} />

        {/* Area pages — 25 Bali neighbourhoods */}
        {AREAS.map((a) => (
          <Route key={a.slug} path={`/${a.slug}`} element={<AreaPage kind="area" />} />
        ))}

        {/* Micro-area pages — narrower neighbourhood landings */}
        {MICRO_AREAS.map((m) => (
          <Route key={m.slug} path={`/${m.slug}`} element={<AreaPage kind="micro-area" />} />
        ))}

        {/* Jakarta city + Menteng micro */}
        <Route path="/jakarta" element={
          <InfoPage
            title="Private Chef in Jakarta"
            description="Private chef services in Jakarta — for residences, expat households, and corporate hospitality."
            slug="jakarta"
            highlights={[
              'Background-checked Indonesian chefs',
              'Menteng, Kemang, SCBD, Pondok Indah, and beyond',
              'Multi-course dinners, weekly meal prep, and event catering',
            ]}
          />
        } />
        <Route path="/private-chef-menteng" element={
          <InfoPage
            title="Private Chef in Menteng, Jakarta"
            description="Private chef services in Menteng, Central Jakarta — discreet, professional, and tailored to residences and embassy hospitality."
            slug="private-chef-menteng"
          />
        } />

        {/* Service pages — 8 services */}
        {SERVICES.map((s) => (
          <Route key={s.slug} path={`/services/${s.slug}`} element={<ServicePage />} />
        ))}

        {/* Menus — index + 6 cuisines */}
        <Route path="/menus" element={<MenuPage />} />
        {MENUS.map((m) => (
          <Route key={m.slug} path={`/menus/${m.slug}`} element={<MenuPage />} />
        ))}

        {/* SEO keyword landing pages */}
        {LANDING_PAGES.map((l) => (
          <Route key={l.slug} path={`/${l.slug}`} element={<LandingPage kind="landing" />} />
        ))}

        {/* Bali hub — links to all 10 top cities */}
        <Route path="/guide/private-chef-bali" element={<BaliHubPage />} />

        {/* Guides */}
        {GUIDES.filter((g) => g.slug !== 'guide/private-chef-bali').map((g) => (
          <Route key={g.slug} path={`/${g.slug}`} element={<LandingPage kind="guide" />} />
        ))}

        {/* Blog index + posts */}
        <Route path="/blog" element={<BlogIndexPage />} />
        {BLOG_POSTS.map((p) => (
          <Route key={p.slug} path={`/${p.slug}`} element={<LandingPage kind="blog" />} />
        ))}

        {/* Info / utility pages */}
        <Route path="/about" element={
          <InfoPage
            title="About myCHEF"
            description="myCHEF is Bali's most-trusted private chef service — Michelin-trained leadership, 50+ Indonesian professionals, and 8+ years of villa hospitality."
            slug="about"
            highlights={[
              'Michelin-trained executive chef leadership',
              '50+ Indonesian hospitality professionals',
              '8+ years operating across Bali',
              'Background-checked and certified team',
            ]}
          />
        } />
        <Route path="/chefs" element={
          <InfoPage
            title="Our Chefs"
            description="Meet the chefs behind myCHEF — backgrounds, specialties, and the cuisines they cook best."
            slug="chefs"
          />
        } />
        <Route path="/faq" element={
          <InfoPage
            title="Frequently Asked Questions"
            description="Answers to common questions about private chef services in Bali — booking lead times, pricing, dietary needs, equipment, and logistics."
            slug="faq"
          />
        } />
        <Route path="/why-mychef" element={
          <InfoPage
            title="Why Choose myCHEF"
            description="Why myCHEF is the most-trusted private chef service in Bali — vetted chefs, transparent pricing, and same-day response."
            slug="why-mychef"
            highlights={[
              'Vetted, background-checked chefs',
              'Transparent grocery pass-through (no markup)',
              'Same-day WhatsApp confirmation',
              'Dietary customization at no extra cost',
            ]}
          />
        } />
        <Route path="/reviews" element={
          <InfoPage
            title="Reviews"
            description="Real reviews from real guests — families, couples, and event hosts who chose myCHEF."
            slug="reviews"
          />
        } />
        <Route path="/pricing" element={
          <InfoPage
            title="Pricing"
            description="Transparent pricing for private chef services in Bali — hourly rates, menu pricing, and full-event packages."
            slug="pricing"
            highlights={[
              'Hourly rates from IDR 600,000',
              'Fine dining tasting menus from IDR 2,200,000++ per guest',
              'Event packages from IDR 15,000,000',
              'Groceries billed at cost — no markup',
            ]}
          />
        } />
        <Route path="/retreats" element={
          <InfoPage
            title="Retreat Catering in Bali"
            description="Multi-day catering for yoga retreats, wellness retreats, and corporate offsites across Bali — full-board menus, dietary flexibility, and on-site coordination."
            slug="retreats"
          />
        } />
        <Route path="/recommended-services" element={
          <InfoPage
            title="Recommended Services in Bali"
            description="Our trusted partners for DJs, decor, photography, transport, and other event services in Bali."
            slug="recommended-services"
          />
        } />
        <Route path="/join-our-team" element={
          <InfoPage
            title="Join Our Team"
            description="Open chef and hospitality roles at myCHEF — apply to join our growing team in Bali and Jakarta."
            slug="join-our-team"
          />
        } />
        <Route path="/quote" element={<QuoteFunnel />} />
        <Route path="/calculator" element={
          <InfoPage
            title="Pricing Calculator"
            description="Estimate the cost of a private chef in Bali — adjust guests, meals, cuisine, and add-ons."
            slug="calculator"
          />
        } />

        {/* 404 */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
