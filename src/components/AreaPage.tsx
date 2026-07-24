import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle, Check, Utensils, Flame, Sparkles, Building2, Users, ChefHat, PartyPopper } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from './SeoHead'
import { AREAS, MICRO_AREAS } from '@/data/sitemap'
import { getLocationBySlug, hasLocationPage } from '@/data/siteArchitecture'
import { TOP_CITIES } from '@/data/topCities'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const createWaLink = (message: string) => `https://wa.me/${WA}?text=${encodeURIComponent(message)}`

// Single template that powers every city / neighbourhood URL.
//
// For the 10 top cities (TOP_CITIES) the page has full 3-service selling
// content — Catering, Events, Fine Dining — plus a partner-villa CTA and
// internal links to all nine sibling cities (city-hub silo for SEO).
//
// For the long-tail areas not in TOP_CITIES we still render a valid SEO page
// with H1 / meta / cross-links, but no per-section selling copy.
export default function AreaPage({ kind = 'area' }: { kind?: 'area' | 'micro-area' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '').replace(/^locations\//, '')
  const source = kind === 'area' ? AREAS : MICRO_AREAS
  const entry = source.find((a) => a.slug === slug)
  if (!entry) return <Navigate to="/404" replace />

  const top = TOP_CITIES.find((c) => c.slug === slug)
  const locationPage = kind === 'area' ? getLocationBySlug(slug) : undefined
  const title = locationPage?.h1 ?? `Private Chef in ${entry.name}, Bali`
  const description = locationPage?.description ?? (
    top
      ? `Private chef, villa catering, and full-service events in ${entry.name}. ${top.hook} Background-checked chefs, transparent pricing, same-day response.`
      : `Private chef services in ${entry.name}, Bali — villa dinners, weekly meal prep, events, and weddings. Background-checked chefs, transparent pricing, same-day response.`
  )
  const canonical = `${SITE}/${slug}`
  const waLink = createWaLink(`Hi myCHEF, I'd like a private chef in ${entry.name}, Bali.`)
  const fineDiningWaLink = createWaLink(`Hi myCHEF, I'd like fine dining with a private chef in ${entry.name}, Bali.`)
  const cateringWaLink = createWaLink(`Hi myCHEF, I'd like catering in ${entry.name}, Bali.`)
  const eventsWaLink = createWaLink(`Hi myCHEF, I'd like help planning an event in ${entry.name}, Bali.`)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `Private Chef ${entry.name}`,
    description: `Private chef services in ${entry.name} — villa dinners, weekly meal prep, events, and weddings.`,
    serviceType: 'Private Chef & Villa Dining',
    areaServed: { '@type': 'Place', name: `${entry.name}, Bali` },
    provider: { '@id': `${SITE}/#business` },
    url: canonical,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: '1300000',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'IDR',
        price: '1300000',
        unitText: 'per session, from',
      },
      availability: 'https://schema.org/InStock',
      url: canonical,
    },
  }

  const localBusiness = {
    ...localBusinessSchema,
    areaServed: { '@type': 'Place', name: `${entry.name}, Bali` },
  }

  const areaFaq = faqPageSchema([
    {
      question: `How much does a private chef cost in ${entry.name}?`,
      answer: `Private chef services in ${entry.name} start from IDR 1.3M per session. Villa catering for groups starts from IDR 700K per person. Full pricing depends on group size, menu complexity, and duration. Request a free quote via WhatsApp.`,
    },
    {
      question: `Can I hire a private chef for my villa in ${entry.name}?`,
      answer: `Yes. myCHEF sends trained chefs directly to your villa in ${entry.name}. The chef handles grocery shopping, cooking, serving, and clean-up — you enjoy restaurant-quality dining at your villa.`,
    },
    {
      question: `What cuisines are available in ${entry.name}?`,
      answer: `Our chefs cover Balinese, Indonesian, Italian, Japanese, Mediterranean, and international fusion menus. Custom menus and dietary accommodations (vegan, gluten-free, halal) are available on request.`,
    },
    {
      question: `How quickly can myCHEF confirm a booking in ${entry.name}?`,
      answer: `Same-day confirmation for most bookings. WhatsApp us and a coordinator will confirm chef availability and pricing within 1 hour.`,
    },
  ])

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={locationPage?.title ?? `${title} | myCHEF`}
        description={description}
        canonical={canonical}
        ogImage={top ? `${SITE}${top.hero}` : undefined}
        jsonLd={[
          localBusiness, 
          serviceSchema,
          areaFaq, 
          breadcrumbSchema(entry.name, canonical, 'Locations', `${SITE}/locations`)
        ]}
      />

      {/* Hero — full-bleed image for top cities, simple eyebrow hero for long-tail areas */}
      {top ? (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
          <img
            src={top.hero}
            alt={`Luxury villa in ${entry.name}, Bali, with private dining at golden hour`}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            decoding="async" fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.20) 100%)' }}
          />
          <div className="relative z-10 px-8 md:px-12 py-12 md:py-20 max-w-[1100px] mx-auto w-full text-white flex flex-col justify-center h-full">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Private chef</p>
            <h1 className="font-playfair text-5xl md:text-7xl leading-tight mb-5 max-w-[600px]">{title}</h1>
            <p className="text-base md:text-lg text-white/[85%] max-w-[550px] mb-3">{top.blurb}</p>
            {locationPage?.intro && <p className="text-sm md:text-base text-white/[75%] max-w-[550px] mb-3">{locationPage.intro}</p>}
            <p className="text-sm text-white/[55%] italic mb-8">{top.signature}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                data-source={`area-${slug}-hero`}
                className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Private Chef</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">{title}</h1>
          <p className="text-lg text-[#4A4745] max-w-[640px] mb-8">
            {locationPage?.intro ?? `Wake up to chef-prepared breakfasts. Host a candlelit dinner under the stars. Plan a wedding for 80 guests. myCHEF brings background-checked chefs to villas across ${entry.name} — for single dinners, recurring stays, and full-service events.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              data-source={`area-${slug}-cta`}
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </section>
      )}

      {/* All services — expanded from 3 to full spider */}
      {top && (
        <section className="px-8 py-16 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-center font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Everything we offer in {entry.name}</p>
            <h2 className="text-center font-playfair text-3xl md:text-4xl mb-4">Most-booked villa dining services in {entry.name}</h2>
            <p className="text-center text-[#4A4745] max-w-[720px] mx-auto mb-12">
              Fine dining, group catering, and full-service events — planned around your villa, guest count, and schedule.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Fine Dining */}
              <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col hover:border-[#C5A028] transition-all">
                <Flame className="w-6 h-6 text-[#C5A028] mb-3" />
                <h3 className="font-playfair text-xl mb-2">Fine Dining</h3>
                <p className="text-sm text-[#4A4745] flex-grow">Italian tasting menus, sommelier pairing, open-flame cooking.</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link to="/fine-dining" className="text-xs uppercase tracking-[2px] font-semibold text-[#C5A028] hover:text-[#1A1A1A]">Explore →</Link>
                  <a href={fineDiningWaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-semibold text-[#1A1A1A] hover:text-[#C5A028]">
                    <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                  </a>
                </div>
              </div>

              {/* Catering */}
              <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col hover:border-[#6B8E5A] transition-all">
                <Utensils className="w-6 h-6 text-[#6B8E5A] mb-3" />
                <h3 className="font-playfair text-xl mb-2">Catering</h3>
                <p className="text-sm text-[#4A4745] flex-grow">BBQ, buffet, drop-off, grazing tables, plated dinners.</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link to="/catering" className="text-xs uppercase tracking-[2px] font-semibold text-[#6B8E5A] hover:text-[#1A1A1A]">Explore →</Link>
                  <a href={cateringWaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-semibold text-[#1A1A1A] hover:text-[#6B8E5A]">
                    <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                  </a>
                </div>
              </div>

              {/* Events */}
              <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col hover:border-[#2C5F7C] transition-all">
                <Sparkles className="w-6 h-6 text-[#2C5F7C] mb-3" />
                <h3 className="font-playfair text-xl mb-2">Events</h3>
                <p className="text-sm text-[#4A4745] flex-grow">Weddings, birthdays, corporate, retreats, villa parties.</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link to="/events" className="text-xs uppercase tracking-[2px] font-semibold text-[#2C5F7C] hover:text-[#1A1A1A]">Explore →</Link>
                  <a href={eventsWaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-semibold text-[#1A1A1A] hover:text-[#2C5F7C]">
                    <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                  </a>
                </div>
              </div>

              {/* In-Villa Service */}
              <Link to="/in-villa-service" className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col hover:border-[#8B5A2B] transition-all group">
                <Users className="w-6 h-6 text-[#8B5A2B] mb-3" />
                <h3 className="font-playfair text-xl mb-2">In-Villa Service</h3>
                <p className="text-sm text-[#4A4745] flex-grow">Waiters, butlers, bartenders, mixologists, sommeliers.</p>
                <span className="text-xs uppercase tracking-[2px] font-semibold text-[#8B5A2B] mt-4 group-hover:text-[#1A1A1A]">Explore →</span>
              </Link>
            </div>

            {/* Second row: staffing + services */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link to="/staffing" className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col hover:border-[#C5A028] transition-all group">
                <ChefHat className="w-6 h-6 text-[#C5A028] mb-3" />
                <h3 className="font-playfair text-xl mb-2">Staffing & Placement</h3>
                <p className="text-sm text-[#4A4745] flex-grow">Full-time private chefs, villa staff, household staff, hotel recruitment.</p>
                <span className="text-xs uppercase tracking-[2px] font-semibold text-[#C5A028] mt-4 group-hover:text-[#1A1A1A]">Explore →</span>
              </Link>

              <Link to="/services" className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col hover:border-[#2C5F7C] transition-all group">
                <PartyPopper className="w-6 h-6 text-[#2C5F7C] mb-3" />
                <h3 className="font-playfair text-xl mb-2">All Experiences</h3>
                <p className="text-sm text-[#4A4745] flex-grow">Villa parties, romantic dinners, cooking classes, weekly meal prep.</p>
                <span className="text-xs uppercase tracking-[2px] font-semibold text-[#2C5F7C] mt-4 group-hover:text-[#1A1A1A]">Explore →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* What's included strip — always shown */}
      <section className="px-8 py-16 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl mb-4">What we cook in {entry.name}</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {['Mediterranean tasting menus', 'Traditional Balinese cuisine', 'Modern Asian fusion', 'Plant-based and vegan menus', 'Halal-certified menus', 'Dietary customization at no extra cost'].map((it) => (
                <li key={it} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {it}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-3xl mb-4">What is included</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {['Private chef in your villa', 'Fresh-that-morning groceries (billed at cost)', 'Table service and presentation', 'Full kitchen cleanup', 'Wine pairing on request', 'Same-day WhatsApp confirmation'].map((it) => (
                <li key={it} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partner villas in this area */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-start gap-8">
          <Building2 className="w-10 h-10 text-[#2C5F7C] flex-shrink-0" />
          <div className="flex-grow">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-2">Partner villas</p>
            <h2 className="font-playfair text-3xl mb-3">The villas we work with in {entry.name}</h2>
            <p className="text-[#4A4745] mb-5">
              We have an active partnership programme with 50+ luxury villas across Bali. If you own or manage a villa in {entry.name},
              partnering with myCHEF gives your guests on-demand fine dining without lifting a finger.
            </p>
            <Link to="/staffing/for-villa-managers" className="inline-flex items-center text-xs uppercase tracking-[2px] font-semibold text-[#2C5F7C] hover:text-[#1A1A1A]">
              See the partner programme →
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-city linking — siblings in the same region */}
      <section className="px-8 py-16 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-2">Explore Bali</p>
          <h2 className="font-playfair text-3xl mb-6">We cook across every primary region</h2>
          <p className="text-[#4A4745] mb-6 max-w-[640px]">
            myCHEF serves the most-visited areas in Bali. Browse the location closest to where you are staying —
            same team, same standards, same WhatsApp number.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {TOP_CITIES.filter((c) => c.slug !== slug && hasLocationPage(c.slug)).map((c) => (
              <Link
                key={c.slug}
                to={`/locations/${c.slug}`}
                className="text-sm font-medium bg-white border border-[#1A1A1A]/10 px-4 py-3 rounded-lg hover:border-[#C5A028] hover:text-[#C5A028] transition-all text-center"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-[#8A8785] mt-6">
            See <Link to="/locations" className="underline hover:text-[#C5A028]">our full Bali coverage map</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
