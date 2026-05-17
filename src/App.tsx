import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

import { LANDING_PAGE_SLUGS, GUIDE_SLUGS, BLOG_POST_SLUGS, SERVICE_SLUGS, MENU_SLUGS, AREA_SLUGS, MICRO_AREA_SLUGS } from './data/route-slugs'
import { REDIRECTS } from './data/redirects'
import { CUSTOM_LOCATION_PAGE_SLUGS } from './data/locationLandingPages'
import { getAllSubPages, getAllLocationPaths } from './data/siteArchitecture'

// ── Page components (code-split into per-route chunks) ───────────────────────
const HubPage = lazy(() => import('./pages/HubPage'))
const LunaPage = lazy(() => import('./pages/LunaPage'))
const RomanticDinnerPage = lazy(() => import('./pages/RomanticDinnerPage'))
const TastingMenuPage = lazy(() => import('./pages/TastingMenuPage'))
const PrivateChefBaliPage = lazy(() => import('./pages/PrivateChefBaliPage'))
const ChefsTablePage = lazy(() => import('./pages/ChefsTablePage'))
const FineDiningMenusPage = lazy(() => import('./pages/FineDiningMenusPage'))
const FineDiningChefsPage = lazy(() => import('./pages/FineDiningChefsPage'))
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
const SeminyakPage = lazy(() => import('./pages/SeminyakPage'))
const CangguPage = lazy(() => import('./pages/CangguPage'))
const UbudPage = lazy(() => import('./pages/UbudPage'))
const UluwatuPage = lazy(() => import('./pages/UluwatuPage'))
const SanurPage = lazy(() => import('./pages/SanurPage'))
const NusaDuaPage = lazy(() => import('./pages/NusaDuaPage'))
const JimbaranPage = lazy(() => import('./pages/JimbaranPage'))
const DenpasarPage = lazy(() => import('./pages/DenpasarPage'))
const BukitPeninsulaPage = lazy(() => import('./pages/BukitPeninsulaPage'))
const PererenanPage = lazy(() => import('./pages/PererenanPage'))
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

// Help & Guides System
const HelpPage = lazy(() => import('./pages/HelpPage'))
const GettingStartedPage = lazy(() => import('./pages/GettingStartedPage'))
const PricingGuide = lazy(() => import('./pages/PricingGuide'))
const MenuGuide = lazy(() => import('./pages/MenuGuidePage'))
const WeddingGuide = lazy(() => import('./pages/WeddingGuidePage'))
const CorporateGuide = lazy(() => import('./pages/CorporateGuidePage'))
const StaffingGuide = lazy(() => import('./pages/StaffingGuidePage'))
const ManagingBooking = lazy(() => import('./pages/ManagingBookingPage'))

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
  const customLocationSlugs = new Set<string>(CUSTOM_LOCATION_PAGE_SLUGS)

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
          <Route path="/fine-dining/romantic-dinner" element={<RomanticDinnerPage />} />
          <Route path="/fine-dining/tasting-menu" element={<TastingMenuPage />} />
          <Route path="/fine-dining/private-chef-bali" element={<PrivateChefBaliPage />} />
          <Route path="/fine-dining/chefs-table" element={<ChefsTablePage />} />
          <Route path="/fine-dining/menus" element={<FineDiningMenusPage />} />
          <Route path="/fine-dining/our-chefs" element={<FineDiningChefsPage />} />
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
          <Route path="/locations/seminyak" element={<SeminyakPage />} />
          <Route path="/locations/canggu" element={<CangguPage />} />
          <Route path="/locations/ubud" element={<UbudPage />} />
          <Route path="/locations/uluwatu" element={<UluwatuPage />} />
          <Route path="/locations/sanur" element={<SanurPage />} />
          <Route path="/locations/nusa-dua" element={<NusaDuaPage />} />
          <Route path="/locations/jimbaran" element={<JimbaranPage />} />
          <Route path="/locations/denpasar" element={<DenpasarPage />} />
          <Route path="/locations/bukit" element={<BukitPeninsulaPage />} />
          <Route path="/locations/pererenan" element={<PererenanPage />} />
          {locationPaths.filter(({ location }) => !customLocationSlugs.has(location.slug)).map(({ path }) => (
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
          <Route path="/seminyak" element={<SeminyakPage />} />
          <Route path="/canggu" element={<CangguPage />} />
          <Route path="/ubud" element={<UbudPage />} />
          <Route path="/uluwatu" element={<UluwatuPage />} />
          <Route path="/sanur" element={<SanurPage />} />
          <Route path="/nusa-dua" element={<NusaDuaPage />} />
          <Route path="/jimbaran" element={<JimbaranPage />} />
          <Route path="/denpasar" element={<DenpasarPage />} />
          <Route path="/bukit" element={<BukitPeninsulaPage />} />
          <Route path="/pererenan" element={<PererenanPage />} />
          {AREA_SLUGS.filter((a) => !customLocationSlugs.has(a.slug)).map((a) => (
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
                description="Michelin-trained standards, brought to private residences and corporate suites in Indonesia's capital. Experience the myCHEF standard in Jakarta."
                slug="jakarta"
                heroImage="/generated/mychef-location-jakarta-skyline.webp"
                highlights={[
                  'Background-checked Indonesian chefs with international experience',
                  'Coverage in Menteng, Kemang, SCBD, Pondok Indah, and BSD',
                  'Multi-course fine dining, weekly meal prep, and corporate catering',
                  'Complete at-home operations: we shop, cook, serve, and clean',
                  'Bilingual guest relations for seamless coordination',
                ]}
              />
            }
          />
          <Route
            path="/private-chef-menteng"
            element={
              <InfoPage
                title="Private Chef in Menteng"
                description="Discreet, professional private chef services for Jakarta's primary diplomatic and residential district. Tailored to embassy hospitality and private family residences."
                slug="private-chef-menteng"
                heroImage="/generated/mychef-location-jakarta-skyline.webp"
                highlights={[
                  'Discreet service for high-profile and diplomatic residences',
                  'Specialized in formal multi-course hosting and embassy dinners',
                  'Rigorous security and background vetting for all on-site staff',
                  'Direct communication with Menteng-based guest relations',
                  'Premium ingredient sourcing for international standards',
                ]}
              />
            }
          />
          <Route
            path="/private-chef-kemang"
            element={
              <InfoPage
                title="Private Chef in Kemang"
                description="Sophisticated private dining and catering for Kemang's vibrant expat and creative community. From family dinners to social events."
                slug="private-chef-kemang"
                heroImage="/generated/mychef-location-jakarta-skyline.webp"
                highlights={[
                  'Tailored menus for Kemang’s international guest profiles',
                  'Family-style catering and social event hosting',
                  'Healthy meal prep and weekly chef service available',
                  'Expertise in various global cuisines',
                  'Professional service and full kitchen cleanup',
                ]}
              />
            }
          />
          <Route
            path="/private-chef-scbd"
            element={
              <InfoPage
                title="Private Chef in SCBD"
                description="Premium corporate catering and executive private dining in the heart of Jakarta's Business District."
                slug="private-chef-scbd"
                heroImage="/generated/mychef-location-jakarta-skyline.webp"
                highlights={[
                  'Executive boardroom lunches and corporate dinners',
                  'Seamless logistics for SCBD high-rise apartments and offices',
                  'Professional hospitality teams for networking events',
                  'Strict adherence to corporate scheduling and timing',
                  'High-end plated menus and premium presentation',
                ]}
              />
            }
          />
          <Route
            path="/private-chef-pondok-indah"
            element={
              <InfoPage
                title="Private Chef in Pondok Indah"
                description="Exclusive residential private chef services for Jakarta's premier family estates."
                slug="private-chef-pondok-indah"
                heroImage="/generated/mychef-location-jakarta-skyline.webp"
                highlights={[
                  'Large estate catering and multi-generational family dining',
                  'Specialized in milestone birthdays and home celebrations',
                  'Vetted staff accustomed to premier residential standards',
                  'Customizable menus for all dietary requirements',
                  'Consistent, reliable service for regular bookings',
                ]}
              />
            }
          />
          <Route
            path="/private-chef-bsd"
            element={
              <InfoPage
                title="Private Chef in BSD City"
                description="Modern private dining and group catering for the residential and tech hubs of BSD."
                slug="private-chef-bsd"
                heroImage="/generated/mychef-location-jakarta-skyline.webp"
                highlights={[
                  'Convenient villa-style dining for BSD residents',
                  'Group BBQ catering and social gatherings',
                  'Modern fusion and healthy menu concepts',
                  'Flexible booking for both residences and offices',
                  'Professional Indonesian chefs with international training',
                ]}
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

          {/* Help & Guides */}
          <Route path="/help" element={<HelpPage />} />
          <Route path="/help/getting-started" element={<GettingStartedPage />} />
          <Route path="/help/pricing" element={<PricingGuide />} />
          <Route path="/help/menu-guide" element={<MenuGuide />} />
          <Route path="/help/wedding-guide" element={<WeddingGuide />} />
          <Route path="/help/corporate-guide" element={<CorporateGuide />} />
          <Route path="/help/staffing-guide" element={<StaffingGuide />} />
          <Route path="/help/managing-booking" element={<ManagingBooking />} />

          {/* 404 */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
