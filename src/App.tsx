import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

import {
  AREAS,
  MICRO_AREAS,
  SERVICES,
  MENUS,
  LANDING_PAGES,
  GUIDES,
  BLOG_POSTS,
} from './data/sitemap'
import { REDIRECTS } from './data/redirects'
import { getAllSubPages, getAllLocationPaths } from './data/siteArchitecture'

// ── Page components (code-split into per-route chunks) ───────────────────────
const HubPage = lazy(() => import('./pages/HubPage'))
const LunaPage = lazy(() => import('./pages/LunaPage'))
const SolPage = lazy(() => import('./pages/SolPage'))
// const AuraPage = lazy(() => import('./pages/AuraPage'))
const PartnersPage = lazy(() => import('./pages/PartnersPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const CancellationPage = lazy(() => import('./pages/CancellationPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const StaffingPage = lazy(() => import('./pages/StaffingPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PartnerPlatformPage = lazy(() => import('./pages/PartnerPlatformPage'))
const CertifiedPartnerPage = lazy(() => import('./pages/CertifiedPartnerPage'))
const CorporateEventsPage = lazy(() => import('./pages/CorporateEventsPage'))
const EventsMainPage = lazy(() => import('./pages/EventsMainPage'))
const EventsWeddingsPage = lazy(() => import('./pages/EventsWeddingsPage'))
const EventsBirthdaysPage = lazy(() => import('./pages/EventsBirthdaysPage'))
const EventsAnniversariesPage = lazy(() => import('./pages/EventsAnniversariesPage'))
const EventsCorporatePage = lazy(() => import('./pages/EventsCorporatePage'))
const EventsRetreatsPage = lazy(() => import('./pages/EventsRetreatsPage'))
const EventsBabyShowersPage = lazy(() => import('./pages/EventsBabyShowersPage'))
const EventsVillaPartiesPage = lazy(() => import('./pages/EventsVillaPartiesPage'))

// New system-plan pages
const CateringPage = lazy(() => import('./pages/CateringMainPage'))
const CateringBBQPage = lazy(() => import('./pages/CateringBBQPage'))
const CateringDropOffPage = lazy(() => import('./pages/CateringDropOffPage'))
const CateringBuffetPage = lazy(() => import('./pages/CateringBuffetPage'))
const CateringBabiGulingPage = lazy(() => import('./pages/CateringBabiGulingPage'))
const CateringGrazingPage = lazy(() => import('./pages/CateringGrazingPage'))
const CateringPlatedPage = lazy(() => import('./pages/CateringPlatedPage'))
const CateringFloatingBreakfastPage = lazy(() => import('./pages/CateringFloatingBreakfastPage'))
const CateringVillaPage = lazy(() => import('./pages/CateringVillaPage'))
const CateringCorporatePage = lazy(() => import('./pages/CateringCorporatePage'))
const CateringRetreatPage = lazy(() => import('./pages/CateringRetreatPage'))
const InVillaServicePage = lazy(() => import('./components/InVillaServicePage'))
const ServiceWaitersPage = lazy(() => import('./pages/ServiceWaitersPage'))
const ServiceButlersPage = lazy(() => import('./pages/ServiceButlersPage'))
const ServiceBartendersPage = lazy(() => import('./pages/ServiceBartendersPage'))
const ServiceMixologyPage = lazy(() => import('./pages/ServiceMixologyPage'))
const ServiceSommelierPage = lazy(() => import('./pages/ServiceSommelierPage'))
const ServiceHostPage = lazy(() => import('./pages/ServiceHostPage'))
const StaffingPlacementPage = lazy(() => import('./pages/StaffingPlacementPage'))
const StaffingLiveInPage = lazy(() => import('./pages/StaffingLiveInPage'))
const StaffingVillaStaffPage = lazy(() => import('./pages/StaffingVillaStaffPage'))
const StaffingHouseholdPage = lazy(() => import('./pages/StaffingHouseholdPage'))
const StaffingVillaManagersPage = lazy(() => import('./pages/StaffingVillaManagersPage'))
const StaffingHotelsPage = lazy(() => import('./pages/StaffingHotelsPage'))
const PillarSubPage = lazy(() => import('./components/PillarSubPage'))
const LocationsHubPage = lazy(() => import('./components/LocationsHubPage'))
const BookPage = lazy(() => import('./components/BookPage'))
import { JournalIndexPage, JournalPostPage } from './components/JournalPage'

// SEO template pages
const AreaPage = lazy(() => import('./components/AreaPage'))
const ServicePage = lazy(() => import('./components/ServicePage'))
const MenuPage = lazy(() => import('./components/MenuPage'))
const LandingPage = lazy(() => import('./components/LandingPage'))
const InfoPage = lazy(() => import('./components/InfoPage'))
const BlogIndexPage = lazy(() => import('./components/BlogIndexPage'))
const BaliHubPage = lazy(() => import('./components/BaliHubPage'))
const QuoteFunnel = lazy(() => import('./components/QuoteFunnel'))

// Minimal brand-aligned fallback — dark screen with subtle gold pulse
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#050505' }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-[#C5A028] animate-pulse" />
      </div>
    </div>
  )
}

export default function App() {
  const subPages = getAllSubPages()
  const locationPaths = getAllLocationPaths()

  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {REDIRECTS.map((r) => (
            <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
          ))}

          {/* Brand pages */}
          <Route path="/" element={<HubPage />} />
          <Route path="/fine-dining" element={<LunaPage />} />
          <Route path="/events" element={<EventsMainPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Pillar pages — new canonical URLs */}
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/catering/bbq-catering" element={<CateringBBQPage />} />
          <Route path="/catering/drop-off-catering" element={<CateringDropOffPage />} />
          <Route path="/catering/buffet" element={<CateringBuffetPage />} />
          <Route path="/catering/babi-guling" element={<CateringBabiGulingPage />} />
          <Route path="/catering/grazing-tables" element={<CateringGrazingPage />} />
          <Route path="/catering/villa-catering" element={<CateringVillaPage />} />
          <Route path="/catering/corporate-catering" element={<CateringCorporatePage />} />
          <Route path="/catering/retreat-catering" element={<CateringRetreatPage />} />
          <Route path="/catering/plated-catering" element={<CateringPlatedPage />} />
          <Route path="/catering/floating-breakfast" element={<CateringFloatingBreakfastPage />} />
          <Route path="/events/weddings" element={<EventsWeddingsPage />} />
          <Route path="/events/birthdays" element={<EventsBirthdaysPage />} />
          <Route path="/events/anniversaries" element={<EventsAnniversariesPage />} />
          <Route path="/events/corporate-events" element={<EventsCorporatePage />} />
          <Route path="/events/retreats" element={<EventsRetreatsPage />} />
          <Route path="/events/baby-showers" element={<EventsBabyShowersPage />} />
          <Route path="/events/villa-parties" element={<EventsVillaPartiesPage />} />
          <Route path="/in-villa-service" element={<InVillaServicePage />} />
          <Route path="/in-villa-service/waiters" element={<ServiceWaitersPage />} />
          <Route path="/in-villa-service/butlers" element={<ServiceButlersPage />} />
          <Route path="/in-villa-service/bartenders" element={<ServiceBartendersPage />} />
          <Route path="/in-villa-service/mixology" element={<ServiceMixologyPage />} />
          <Route path="/in-villa-service/sommelier" element={<ServiceSommelierPage />} />
          <Route path="/in-villa-service/host-hostess" element={<ServiceHostPage />} />
          <Route path="/staffing" element={<StaffingPage />} />
          <Route path="/staffing/private-chef-placement" element={<StaffingPlacementPage />} />
          <Route path="/staffing/live-in-chef" element={<StaffingLiveInPage />} />
          <Route path="/staffing/villa-staff" element={<StaffingVillaStaffPage />} />
          <Route path="/staffing/household-staff" element={<StaffingHouseholdPage />} />
          <Route path="/staffing/for-villa-managers" element={<StaffingVillaManagersPage />} />
          <Route path="/staffing/for-hotels-restaurants" element={<StaffingHotelsPage />} />

          {/* Pillar sub-pages */}
          {subPages.map(({ path }) => (
            <Route key={path} path={path} element={<PillarSubPage />} />
          ))}

          {/* Locations */}
          <Route path="/locations" element={<LocationsHubPage />} />
          {locationPaths.map(({ path }) => (
            <Route key={path} path={path} element={<AreaPage kind="area" />} />
          ))}

          {/* Journal */}
          <Route path="/journal" element={<JournalIndexPage />} />
          <Route path="/journal/:slug" element={<JournalPostPage />} />

          {/* Book */}
          <Route path="/book" element={<BookPage />} />

          {/* Legal */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/cancellation" element={<CancellationPage />} />
          <Route path="/payment-terms" element={<CancellationPage />} />

          {/* Legacy top-nav pages (kept for compatibility) */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/partner-platform" element={<PartnerPlatformPage />} />
          <Route path="/corporate-events" element={<CorporateEventsPage />} />
          <Route path="/certified/:slug" element={<CertifiedPartnerPage />} />

          {/* Legacy aliases */}
          <Route path="/villa-chef" element={<SolPage />} />
          <Route path="/villa-partners" element={<PartnersPage />} />

          {/* Legacy area pages (still served at root for SEO continuity) */}
          {AREAS.map((a) => (
            <Route key={a.slug} path={`/${a.slug}`} element={<AreaPage kind="area" />} />
          ))}
          {MICRO_AREAS.map((m) => (
            <Route key={m.slug} path={`/${m.slug}`} element={<AreaPage kind="micro-area" />} />
          ))}

          {/* Jakarta */}
          <Route
            path="/jakarta"
            element={
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
            }
          />
          <Route
            path="/private-chef-menteng"
            element={
              <InfoPage
                title="Private Chef in Menteng, Jakarta"
                description="Private chef services in Menteng, Central Jakarta — discreet, professional, and tailored to residences and embassy hospitality."
                slug="private-chef-menteng"
              />
            }
          />

          {/* Service detail pages */}
          {SERVICES.map((s) => (
            <Route key={s.slug} path={`/services/${s.slug}`} element={<ServicePage />} />
          ))}

          {/* Menu pages */}
          <Route path="/menus" element={<MenuPage />} />
          {MENUS.map((m) => (
            <Route key={m.slug} path={`/menus/${m.slug}`} element={<MenuPage />} />
          ))}

          {/* Landing pages */}
          {LANDING_PAGES.map((l) => (
            <Route key={l.slug} path={`/${l.slug}`} element={<LandingPage kind="landing" />} />
          ))}

          {/* Bali hub */}
          <Route path="/guide/private-chef-bali" element={<BaliHubPage />} />

          {/* Guides */}
          {GUIDES.filter((g) => g.slug !== 'guide/private-chef-bali').map((g) => (
            <Route key={g.slug} path={`/${g.slug}`} element={<LandingPage kind="guide" />} />
          ))}

          {/* Blog (legacy) */}
          <Route path="/blog" element={<BlogIndexPage />} />
          {BLOG_POSTS.map((p) => (
            <Route key={p.slug} path={`/${p.slug}`} element={<LandingPage kind="blog" />} />
          ))}

          {/* Info / utility pages */}
          <Route
            path="/about"
            element={
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
            }
          />
          <Route
            path="/chefs"
            element={
              <InfoPage
                title="Our Chefs"
                description="Meet the chefs behind myCHEF — backgrounds, specialties, and what they cook best."
                slug="chefs"
              />
            }
          />
          <Route
            path="/faq"
            element={
              <InfoPage
                title="Frequently Asked Questions"
                description="Answers to common questions about private chef services in Bali — booking lead times, pricing, dietary needs, and logistics."
                slug="faq"
              />
            }
          />
          <Route
            path="/why-mychef"
            element={
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
            }
          />
          <Route
            path="/reviews"
            element={
              <InfoPage
                title="Reviews"
                description="Real reviews from real guests — families, couples, and event hosts who chose myCHEF."
                slug="reviews"
              />
            }
          />
          <Route
            path="/pricing"
            element={
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
            }
          />
          <Route
            path="/retreats"
            element={
              <InfoPage
                title="Retreat Catering in Bali"
                description="Multi-day catering for yoga retreats, wellness retreats, and corporate offsites across Bali — full-board menus, dietary flexibility, and on-site coordination."
                slug="retreats"
              />
            }
          />
          <Route
            path="/recommended-services"
            element={
              <InfoPage
                title="Recommended Services in Bali"
                description="Our trusted partners for DJs, decor, photography, transport, and other event services in Bali."
                slug="recommended-services"
              />
            }
          />
          <Route
            path="/join-our-team"
            element={
              <InfoPage
                title="Join Our Team"
                description="Open chef and hospitality roles at myCHEF — apply to join our growing team in Bali and Jakarta."
                slug="join-our-team"
              />
            }
          />
          <Route path="/quote" element={<QuoteFunnel />} />
          <Route
            path="/calculator"
            element={
              <InfoPage
                title="Pricing Calculator"
                description="Estimate the cost of a private chef in Bali — adjust guests, meals, cuisine, and add-ons."
                slug="calculator"
              />
            }
          />

          {/* 404 */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
