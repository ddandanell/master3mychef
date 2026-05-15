import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

import { LANDING_PAGE_SLUGS, GUIDE_SLUGS, BLOG_POST_SLUGS, SERVICE_SLUGS, MENU_SLUGS, AREA_SLUGS, MICRO_AREA_SLUGS } from './data/route-slugs'
import { REDIRECTS } from './data/redirects'
import { getAllSubPages, getAllLocationPaths } from './data/siteArchitecture'

// ── Page components (code-split into per-route chunks) ───────────────────────
const HubPage = lazy(() => import('./pages/HubPage'))
const LunaPage = lazy(() => import('./pages/LunaPage'))
const SolPage = lazy(() => import('./pages/SolPage'))
// const AuraPage = lazy(() => import('./pages/AuraPage'))
const PartnersPage = lazy(() => import('./pages/PartnersPage'))
const PressPage = lazy(() => import('./pages/PressPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const CancellationPage = lazy(() => import('./pages/CancellationPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const StaffingPage = lazy(() => import('./pages/StaffingPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PartnerPlatformPage = lazy(() => import('./pages/PartnerPlatformPage'))
const CertifiedPartnerPage = lazy(() => import('./pages/CertifiedPartnerPage'))
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
const JournalIndexPage = lazy(() =>
  import('./components/JournalPage').then((module) => ({ default: module.JournalIndexPage }))
)
const JournalPostPage = lazy(() =>
  import('./components/JournalPage').then((module) => ({ default: module.JournalPostPage }))
)

// SEO template pages
const AreaPage = lazy(() => import('./components/AreaPage'))
const ServicePage = lazy(() => import('./components/ServicePage'))
const MenuPage = lazy(() => import('./components/MenuPage'))
const LandingPage = lazy(() => import('./components/LandingPage'))
const InfoPage = lazy(() => import('./components/InfoPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ChefsPage = lazy(() => import('./pages/ChefsPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'))
const WhyMychefPage = lazy(() => import('./pages/WhyMychefPage'))
const RecommendedServicesPage = lazy(() => import('./pages/RecommendedServicesPage'))
const JoinTeamPage = lazy(() => import('./pages/JoinTeamPage'))
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'))
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
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/partner-platform" element={<PartnerPlatformPage />} />
          <Route path="/certified-partner" element={<PartnerPlatformPage />} />
          <Route path="/corporate-events" element={<Navigate to="/events/corporate-events" replace />} />
          <Route path="/certified/:slug" element={<CertifiedPartnerPage />} />

          {/* Legacy aliases */}
          <Route path="/villa-chef" element={<SolPage />} />
          <Route path="/villa-partners" element={<PartnersPage />} />

          {/* Legacy area pages (still served at root for SEO continuity) */}
          {AREA_SLUGS.map((a) => (
            <Route key={a.slug} path={`/${a.slug}`} element={<AreaPage kind="area" />} />
          ))}
          {MICRO_AREA_SLUGS.map((m) => (
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
          {SERVICE_SLUGS.map((slug) => (
            <Route key={slug} path={`/services/${slug}`} element={<ServicePage />} />
          ))}

          {/* Menu pages */}
          <Route path="/menus" element={<MenuPage />} />
          {MENU_SLUGS.map((slug) => (
            <Route key={slug} path={`/menus/${slug}`} element={<MenuPage />} />
          ))}

          {/* Landing pages */}
          {LANDING_PAGE_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LandingPage kind="landing" />} />
          ))}

          {/* Bali hub */}
          <Route path="/guide/private-chef-bali" element={<BaliHubPage />} />

          {/* Guides */}
          {GUIDE_SLUGS.filter((s) => s !== 'guide/private-chef-bali').map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LandingPage kind="guide" />} />
          ))}

          {/* Blog (legacy) */}
          <Route path="/blog" element={<BlogIndexPage />} />
          {BLOG_POST_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LandingPage kind="blog" />} />
          ))}

          {/* Info / utility pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chefs" element={<ChefsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/why-mychef" element={<WhyMychefPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/retreats" element={<Navigate to="/events/retreats" replace />} />
          <Route path="/recommended-services" element={<RecommendedServicesPage />} />
          <Route path="/join-our-team" element={<JoinTeamPage />} />
          <Route path="/quote" element={<QuoteFunnel />} />
          <Route path="/calculator" element={<CalculatorPage />} />

          {/* 404 */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
