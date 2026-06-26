import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import EngagementTracker from './components/EngagementTracker'

import { LANDING_PAGE_SLUGS, GUIDE_SLUGS, BLOG_POST_SLUGS, SERVICE_SLUGS, MENU_SLUGS, AREA_SLUGS, MICRO_AREA_SLUGS } from './data/route-slugs'
import { PUBLISHED_AREA_SLUGS } from './data/privateChefAreas'
import PrivateChefAreaPage from './components/PrivateChefAreaPage'
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
const JakartaPage = lazy(() => import('./pages/JakartaPage'))
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
const PrivateChefCostBaliPage = lazy(() => import('./pages/PrivateChefCostBaliPage'))
const PrivateChefCostBaliPageBlog = lazy(() => import('./pages/blog/PrivateChefCostBaliPage'))
const KutaPage = lazy(() => import('./pages/KutaPage'))
const PrivateChefVsRestaurantPage = lazy(() => import('./pages/PrivateChefVsRestaurantPage'))
const FamilyKidsMenuPage = lazy(() => import('./pages/FamilyKidsMenuPage'))
const CorporateEventsCateringBaliPage = lazy(() => import('./pages/CorporateEventsCateringBaliPage'))
const CorporateCaseStudiesPage = lazy(() => import('./pages/CorporateCaseStudiesPage'))
const FoodAllergiesPage = lazy(() => import('./pages/FoodAllergiesPage'))
const BaliWeddingCateringTimelinePage = lazy(() => import('./pages/BaliWeddingCateringTimelinePage'))
const HowToHirePrivateChefPage = lazy(() => import('./pages/HowToHirePrivateChefPage'))
const ChefHiringGuidePage = lazy(() => import('./pages/ChefHiringGuidePage'))
const EventPlanningBaliPage = lazy(() => import('./pages/EventPlanningBaliPage'))
const BaliCateringMenuPage = lazy(() => import('./pages/BaliCateringMenuPage'))
const FineDiningGuidePage = lazy(() => import('./pages/FineDiningGuidePage'))
const WeddingPrivateChefPage = lazy(() => import('./pages/WeddingPrivateChefPage'))
const RomanticDinnerBaliPage = lazy(() => import('./pages/RomanticDinnerBaliPage'))
const VillaBirthdayPartyPage = lazy(() => import('./pages/VillaBirthdayPartyPage'))
const YogaRetreatChefPage = lazy(() => import('./pages/YogaRetreatChefPage'))
const DiningByLocationBaliPage = lazy(() => import('./pages/DiningByLocationBaliPage'))
const ChefProfilePage = lazy(() => import('./pages/ChefProfilePage'))

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
      <EngagementTracker />
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
          <Route path="/corporate-case-studies" element={<CorporateCaseStudiesPage />} />
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
          <Route path="/locations/kuta" element={<KutaPage />} />
          <Route path="/locations/jakarta" element={<JakartaPage />} />
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
          <Route path="/kuta" element={<KutaPage />} />
          {AREA_SLUGS.filter((a) => !customLocationSlugs.has(a.slug)).map((a) => (
            <Route key={a.slug} path={`/${a.slug}`} element={<AreaPage kind="area" />} />
          ))}
          {MICRO_AREA_SLUGS.map((m) => (
            <Route key={m.slug} path={`/${m.slug}`} element={<AreaPage kind="micro-area" />} />
          ))}

          {/* Jakarta */}
          <Route path="/jakarta" element={<JakartaPage />} />
          {/* /private-chef-bali/* — hub kept; area pages 301 → /private-chef/[slug] (TASK-030) */}
          <Route path="/private-chef-bali" element={<PrivateChefBaliPage />} />
          <Route path="/private-chef-bali/seminyak" element={<Navigate to="/private-chef/seminyak" replace />} />
          <Route path="/private-chef-bali/canggu" element={<Navigate to="/private-chef/canggu" replace />} />
          <Route path="/private-chef-bali/uluwatu" element={<Navigate to="/private-chef/uluwatu" replace />} />
          <Route path="/private-chef-bali/ubud" element={<Navigate to="/private-chef/ubud" replace />} />
          <Route path="/private-chef-bali/jimbaran" element={<Navigate to="/private-chef/jimbaran" replace />} />
          <Route path="/private-chef-bali/nusa-dua" element={<Navigate to="/private-chef/nusa-dua" replace />} />
          <Route path="/private-chef-bali/sanur" element={<Navigate to="/private-chef/sanur" replace />} />
          <Route path="/private-chef-bali/denpasar" element={<Navigate to="/private-chef/denpasar" replace />} />

          {/* Jakarta sub-areas — consolidated to single Jakarta page */}
          <Route path="/private-chef-menteng" element={<Navigate to="/jakarta" replace />} />
          <Route path="/private-chef-kemang" element={<Navigate to="/jakarta" replace />} />
          <Route path="/private-chef-scbd" element={<Navigate to="/jakarta" replace />} />
          <Route path="/private-chef-pondok-indah" element={<Navigate to="/jakarta" replace />} />
          <Route path="/private-chef-bsd" element={<Navigate to="/jakarta" replace />} />
          <Route path="/surabaya" element={<Navigate to="/jakarta" replace />} />
          <Route path="/bandung" element={<Navigate to="/jakarta" replace />} />
          <Route path="/yogyakarta" element={<Navigate to="/jakarta" replace />} />

          {/* Bali sub-areas — point directly to /private-chef/[slug] (TASK-030, no more chains) */}
          <Route path="/private-chef-bali/berawa" element={<Navigate to="/private-chef/berawa" replace />} />
          <Route path="/private-chef-bali/petitenget" element={<Navigate to="/private-chef/petitenget" replace />} />
          <Route path="/private-chef-bali/legian" element={<Navigate to="/private-chef/legian" replace />} />
          <Route path="/private-chef-bali/kerobokan" element={<Navigate to="/private-chef/kerobokan" replace />} />
          <Route path="/private-chef-bali/kuta" element={<Navigate to="/private-chef/kuta" replace />} />
          <Route path="/private-chef-bali/tanah-lot" element={<Navigate to="/private-chef/tanah-lot" replace />} />
          <Route path="/private-chef-bali/pecatu" element={<Navigate to="/private-chef/pecatu" replace />} />
          <Route path="/private-chef-bali/ungasan" element={<Navigate to="/private-chef/ungasan" replace />} />
          <Route path="/private-chef-bali/gianyar" element={<Navigate to="/private-chef/ubud" replace />} />
          <Route path="/private-chef-bali/tegallalang" element={<Navigate to="/private-chef/tegallalang" replace />} />
          <Route path="/private-chef-bali/tabanan" element={<Navigate to="/private-chef/tanah-lot" replace />} />
          <Route path="/private-chef-bali/padang-bai" element={<Navigate to="/private-chef-bali" replace />} />

          {/* /private-chef/[slug] — Bali Domination Blueprint area landing pages */}
          {PUBLISHED_AREA_SLUGS.map((slug) => (
            <Route key={slug} path={`/private-chef/${slug}`} element={<PrivateChefAreaPage slug={slug} />} />
          ))}

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
          {/* Dedicated blog articles */}
          <Route path="/blog/private-chef-cost-bali" element={<PrivateChefCostBaliPageBlog />} />
          <Route path="/blog/private-chef-vs-restaurant-bali" element={<PrivateChefVsRestaurantPage />} />
          <Route path="/blog/family-kids-menu-private-chef-bali" element={<FamilyKidsMenuPage />} />
          <Route path="/blog/corporate-events-catering-bali" element={<CorporateEventsCateringBaliPage />} />
          <Route path="/blog/food-allergies-dietary-requirements-private-chef-bali" element={<FoodAllergiesPage />} />
          <Route path="/blog/bali-wedding-catering-private-chef-timeline" element={<BaliWeddingCateringTimelinePage />} />
          <Route path="/blog/how-to-hire-private-chef-bali-complete-guide" element={<HowToHirePrivateChefPage />} />
          <Route path="/blog/how-to-hire-private-chef" element={<HowToHirePrivateChefPage />} />
          <Route path="/blog/chef-qualifications-credentials-bali-hiring" element={<ChefHiringGuidePage />} />
          <Route path="/blog/chef-hiring-guide" element={<ChefHiringGuidePage />} />
          <Route path="/blog/event-planning-bali" element={<EventPlanningBaliPage />} />
          <Route path="/blog/bali-catering-menu" element={<BaliCateringMenuPage />} />
          <Route path="/blog/fine-dining-guide" element={<FineDiningGuidePage />} />
          <Route path="/blog/wedding-private-chef-bali-planning-guide" element={<WeddingPrivateChefPage />} />
          <Route path="/blog/romantic-dinner-at-home-bali-private-chef" element={<RomanticDinnerBaliPage />} />
          <Route path="/blog/how-to-plan-villa-birthday-party-bali" element={<VillaBirthdayPartyPage />} />
          <Route path="/blog/yoga-retreat-chef-bali-meal-planning" element={<YogaRetreatChefPage />} />
          <Route path="/blog/private-chef-romantic-dinners-bali" element={<RomanticDinnerBaliPage />} />
          <Route path="/blog/corporate-events-catering-bali-team-dining" element={<CorporateEventsCateringBaliPage />} />
          <Route path="/blog/private-chef-bali-cost-breakdown-detailed-2026" element={<PrivateChefCostBaliPage />} />
          <Route path="/blog/wedding-rehearsal-dinner-bali" element={<WeddingPrivateChefPage />} />
          <Route path="/blog/dining-by-location-bali-neighborhood-guide" element={<DiningByLocationBaliPage />} />
          <Route path="/blog/private-chef-roles-responsibilities-explained" element={<HowToHirePrivateChefPage />} />
          <Route path="/blog/fine-dining-trends-bali-2026-innovations" element={<FineDiningGuidePage />} />
          <Route path="/blog/seasonal-ingredients-bali-cooking-guide" element={<BaliCateringMenuPage />} />
          {BLOG_POST_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LandingPage kind="blog" />} />
          ))}

          {/* Info / utility pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chefs" element={<ChefsPage />} />
          <Route path="/chefs/:slug" element={<ChefProfilePage />} />
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
