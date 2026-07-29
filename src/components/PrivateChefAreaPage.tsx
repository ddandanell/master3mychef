/**
 * PrivateChefAreaPage — data-driven landing page for /private-chef/[slug]
 *
 * Implements the 13-section Bali Domination Blueprint template.
 * Every section is driven by the PrivateChefArea data record so the page is
 * genuinely unique without per-page copywriting.
 */
import { Link, Navigate } from 'react-router-dom'
import {
  MessageCircle,
  Check,
  ChefHat,
  UtensilsCrossed,
  Flame,
  Users,
  Sparkles,
  MapPin,
  Star,
  Clock,
  ShieldCheck,
  ArrowRight,
  CalendarCheck,
  Utensils,
} from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { getPrivateChefArea, PRIVATE_CHEF_AREAS } from '@/data/privateChefAreas'
import { hasLocationPage } from '@/data/siteArchitecture'
import { getPageMetaByPath } from '@/data/page-meta'
import { trackWhatsAppClick } from '@/lib/analytics'
import { siteFacts } from '@/data/siteFacts'
import { ArticleContentSection } from '@/components/shared'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`

// ── Service grid data ─────────────────────────────────────────────────────────
const SERVICE_CARDS = [
  {
    id: 'private-chef' as const,
    label: 'Private Chef',
    icon: ChefHat,
    color: '#C5A028',
    desc: 'Chef cooks at your villa — market shop, cooking, full table service, and clean-up.',
    href: '/',
  },
  {
    id: 'fine-dining' as const,
    label: 'Fine Dining',
    icon: Flame,
    color: '#C5A028',
    desc: 'Tasting menus, wine pairing, open-flame cooking — restaurant quality in your villa.',
    href: '/fine-dining',
  },
  {
    id: 'catering' as const,
    label: 'Catering',
    icon: UtensilsCrossed,
    color: '#6B8E5A',
    desc: 'BBQ, buffet, grazing tables, and plated catering for groups of 10–200.',
    href: '/catering',
  },
  {
    id: 'bbq' as const,
    label: 'BBQ & Grills',
    icon: Flame,
    color: '#D4621A',
    desc: 'Charcoal grills, seafood BBQ, satay stations, and live-fire setups.',
    href: '/catering/bbq-catering',
  },
  {
    id: 'events' as const,
    label: 'Events',
    icon: Sparkles,
    color: '#2C5F7C',
    desc: 'Weddings, birthdays, corporate retreats, and villa parties — full service team.',
    href: '/events',
  },
  {
    id: 'staffing' as const,
    label: 'Staffing',
    icon: Users,
    color: '#8B5A2B',
    desc: 'Waiters, butlers, bartenders, sommeliers, and household staff placement.',
    href: '/staffing',
  },
]

// Route-specific internal links that aren't covered by the service grid or nearby-areas mesh.
const AREA_RELATED_LINKS: Record<string, { to: string; label: string }[]> = {
  canggu: [
    { to: '/villa-chef', label: 'daily villa chef service' },
    { to: '/hire-private-chef-bali-monthly', label: 'monthly chef hire' },
    { to: '/fine-dining/menus', label: 'private chef villa menus' },
    { to: '/journal/private-chef-canggu-guide', label: 'Canggu local' },
  ],
  pererenan: [
    { to: '/villa-chef', label: 'daily villa chef service' },
    { to: '/hire-private-chef-bali-monthly', label: 'monthly chef hire' },
  ],
  sanur: [
    { to: '/villa-chef', label: 'daily villa chef service' },
    { to: '/hire-private-chef-bali-monthly', label: 'monthly chef hire' },
  ],
  seminyak: [
    { to: '/fine-dining/menus', label: 'private chef villa menus' },
    { to: '/journal/private-chef-seminyak-guide', label: 'Seminyak local' },
  ],
  ubud: [
    { to: '/catering/retreat-catering', label: 'retreat catering programme' },
    { to: '/fine-dining/menus', label: 'private chef villa menus (incl. vegetarian)' },
    { to: '/journal/private-chef-ubud-villa-dining', label: 'Ubud villa dining guide' },
  ],
}

const OCCASIONS = [
  { key: 'romantic', label: 'Romantic Dinner', href: '/fine-dining/romantic-dinner' },
  { key: 'birthday', label: 'Birthday Party', href: '/events/birthdays' },
  { key: 'villa-party', label: 'Villa Party', href: '/events/villa-parties' },
  { key: 'wedding', label: 'Wedding', href: '/events/weddings' },
  { key: 'corporate', label: 'Corporate Event', href: '/events/corporate-events' },
  { key: 'retreat', label: 'Retreat Catering', href: '/events/retreats' },
  { key: 'family', label: 'Family Dining', href: '/catering' },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function PrivateChefAreaPage({ slug }: { slug: string }) {
  const area = getPrivateChefArea(slug)
  if (!area) return <Navigate to="/404" replace />

  const waGeneral = wa(`Hi myCHEF, I'd like a private chef in ${area.name}, Bali.`)
  const waEvent = wa(`Hi myCHEF, I'd like to enquire about catering / events in ${area.name}, Bali.`)
  const waFD = wa(`Hi myCHEF, I'd like a fine dining experience in ${area.name}, Bali.`)

  const canonical = `${SITE}/private-chef/${area.slug}`
  const mappedMeta = getPageMetaByPath(`/private-chef/${area.slug}`)
  const pageTitle = mappedMeta?.title ?? area.metaTitle
  const pageDescription = mappedMeta?.description ?? area.metaDescription
  const pageH1 = mappedMeta?.h1 ?? `Private Chef in ${area.name}, Bali`

  // Travel-fee FAQs are kept in the visible accordion but excluded from the
  // FAQPage schema until the business policy is confirmed.
  const schemaFaqs = area.faqs.filter((f) => !f.q.toLowerCase().includes('travel fee'))

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE}/#business`,
      name: 'myCHEF.id',
      url: SITE,
      telephone: '+6289674072020',
      priceRange: 'IDR 2,000,000 – IDR 4,200,000',
      image: `${SITE}/og-image.webp`,
      areaServed: { '@type': 'Place', name: `${area.name}, Bali, Indonesia` },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: area.coordinates.lat,
        longitude: area.coordinates.lng,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: `Private Chef in ${area.name}, Bali`,
      description: pageDescription,
      serviceType: 'Private Chef & Villa Dining',
      provider: { '@id': `${SITE}/#business` },
      areaServed: { '@type': 'Place', name: `${area.name}, Bali` },
      url: canonical,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        price: '2500000',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'IDR',
          price: '2500000',
          unitText: 'per half day, from',
        },
        availability: 'https://schema.org/InStock',
        url: canonical,
      },
    },
    faqPageSchema(schemaFaqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema(area.name, canonical, 'Private Chef Bali', `${SITE}/`),
  ]

  const availableServices = SERVICE_CARDS.filter((s) => area.services.includes(s.id))

  // Nearby areas — up to 6, filtered to published
  const publishedSlugs = new Set(PRIVATE_CHEF_AREAS.filter((a) => a.published).map((a) => a.slug))
  const nearby = area.nearbyAreas.filter((n) => publishedSlugs.has(n.slug)).slice(0, 6)

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        ogImage={`${SITE}${area.heroImage}`}
        jsonLd={structuredData}
      />

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={area.heroImage}
          alt={area.heroAlt}
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.20) 100%)' }}
        />

        <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6 md:px-10 py-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left: headline + intro */}
          <div className="max-w-[660px]">
            <p className="text-[#C5A028] text-sm font-semibold uppercase tracking-[0.35em] mb-4">
              Private Chef · {area.regency} · Bali
            </p>
            <h1 className="font-playfair text-4xl md:text-6xl leading-tight text-white mb-5">
              {pageH1}
            </h1>
            <p className="text-white/85 text-lg leading-relaxed max-w-[600px] mb-8">
              {area.intro}
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-4 text-sm text-white/75 mb-8">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#C5A028] fill-[#C5A028]" /> {siteFacts.eventsServed}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A028]" /> HACCP certified
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A028]" /> Same-day response
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                data-source={`area-${area.slug}-hero-wa`}
                onClick={() => trackWhatsAppClick(`area-${area.slug}-hero`)}
                className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center border border-white/25 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:border-[#C5A028] hover:text-[#C5A028] transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right: pricing card */}
          <div className="w-full max-w-[340px] rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-md p-6">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-1">Pricing</p>
            <p className="font-playfair text-2xl text-white mb-1">{area.priceFrom}</p>
            <p className="text-white/65 text-sm leading-6 mb-5">{area.pricingNote}</p>
            <div className="space-y-3 text-sm text-white/75 mb-6">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                {siteFacts.groceryPolicy} (receipts provided)
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                {siteFacts.depositPercent}% deposit to confirm · balance on the day
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                All dietary requirements at no extra charge
              </div>
            </div>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              data-source={`area-${area.slug}-hero-price`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-6 py-3 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a free quote
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE OFFER IN [AREA] ───────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-center text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-3">
            Full service stack
          </p>
          <h2 className="text-center font-playfair text-3xl md:text-4xl mb-4">
            Everything myCHEF offers in {area.name}
          </h2>
          <p className="text-center text-[#4A4745] max-w-[680px] mx-auto mb-12 leading-7">
            We are a company — not a freelance marketplace. Every service below is delivered by a vetted
            myCHEF team, end to end, with fixed transparent pricing and one point of accountability.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {availableServices.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.id}
                  className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col hover:border-[#C5A028] transition-all"
                >
                  <Icon className="w-6 h-6 mb-3" style={{ color: svc.color }} />
                  <h3 className="font-playfair text-xl mb-2">{svc.label}</h3>
                  <p className="text-sm text-[#4A4745] flex-grow leading-6">{svc.desc}</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <Link
                      to={svc.href}
                      className="text-xs uppercase tracking-[2px] font-semibold hover:text-[#1A1A1A] transition-colors"
                      style={{ color: svc.color }}
                    >
                      Explore {svc.label} →
                    </Link>
                    <a
                      href={svc.id === 'events' ? waEvent : svc.id === 'fine-dining' ? waFD : waGeneral}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-source={`area-${area.slug}-service-${svc.id}`}
                      onClick={() => trackWhatsAppClick(`area-${area.slug}-service-${svc.id}`)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-semibold text-[#1A1A1A] hover:text-[#C5A028] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. COMPANY VS FREELANCER ──────────────────────────────────────────── */}
      <section className="bg-[#0F1111] text-white px-6 py-20 md:px-10">
        <div className="max-w-[1160px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-4">
              Why myCHEF
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl mb-6">
              A managed company — not a freelance hub
            </h2>
            <p className="text-white/75 leading-8 mb-6">
              Freelance chef platforms connect you to an independent cook, then step away. myCHEF is
              different: we own the whole experience — chef, sous chef, service staff, ingredients,
              equipment, and quality control — so the result is consistent whether it's your first
              booking or your twentieth.
            </p>
            <ul className="space-y-4">
              {[
                'Every chef is background-checked, HACCP certified, and trained in-house',
                'Fixed, transparent pricing — no hidden grocery markups',
                'One WhatsApp number for everything: menu, booking, and day-of coordination',
                'Full accountability — if anything is wrong, we fix it',
                'Insurance-covered for villa events and large catering',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80 text-sm leading-6">
                  <ShieldCheck className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {[
              { label: 'Freelance hub', desc: 'Connects you to an independent chef, then steps away. No quality control after booking.', bad: true },
              { label: 'myCHEF', desc: 'Full-service company. Vetted team, managed quality, fixed pricing, one point of accountability. We stay involved from booking to clean-up.', bad: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-[24px] border p-6 ${item.bad ? 'border-white/10 bg-white/5' : 'border-[#C5A028]/30 bg-[#C5A028]/10'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-2 h-2 rounded-full ${item.bad ? 'bg-red-400' : 'bg-[#C5A028]'}`} />
                  <p className="font-semibold text-sm uppercase tracking-[0.2em] text-white">{item.label}</p>
                </div>
                <p className="text-sm text-white/70 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT'S INCLUDED ───────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-10 bg-[#FAFAF8]">
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-4">
              What we cook
            </p>
            <h2 className="font-playfair text-3xl mb-6">Menus for {area.name}</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {[
                'Traditional Balinese rice-table dinner (nasi campur, lawar, sate lilit)',
                'Mediterranean tasting menu with olive oil and seasonal produce',
                'Modern Asian fusion — Japanese, Thai, and Indonesian influences',
                'Italian open-fire cooking — pasta, wood-grilled proteins, tiramisu',
                'Plant-based and vegan menus — whole food, organic sourcing',
                'Halal-certified menus on request',
                'Custom menus for allergies and dietary requirements at no extra cost',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6">
                  <Check className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-4">
              What is included
            </p>
            <h2 className="font-playfair text-3xl mb-6">Everything handled for you</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {[
                `Chef and team travel to your ${area.name} villa`,
                `Fresh-that-morning grocery shopping (${siteFacts.groceryPolicy.toLowerCase()}, receipts provided)`,
                'Menu planning and custom dietary accommodations',
                'Full table setting and presentation',
                'Cooking, plating, and table service',
                'Complete kitchen and dining area clean-up',
                'Same-day WhatsApp confirmation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6">
                  <Check className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. OCCASIONS ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-center text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-3">
            Occasions
          </p>
          <h2 className="text-center font-playfair text-3xl md:text-4xl mb-4">
            What brings people to us in {area.name}
          </h2>
          <p className="text-center text-[#4A4745] max-w-[640px] mx-auto mb-12 leading-7">
            From a quiet Tuesday dinner to a 200-guest wedding — we adapt the service format to
            the occasion, villa, and guest mix.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {OCCASIONS.filter((o) => area.services.some((s) =>
              (o.key === 'romantic' && (s === 'private-chef' || s === 'fine-dining')) ||
              (o.key === 'birthday' && (s === 'events' || s === 'catering')) ||
              (o.key === 'villa-party' && (s === 'events' || s === 'catering')) ||
              (o.key === 'wedding' && s === 'events') ||
              (o.key === 'corporate' && (s === 'events' || s === 'catering')) ||
              (o.key === 'retreat' && (s === 'events' || s === 'catering')) ||
              (o.key === 'family' && (s === 'catering' || s === 'private-chef'))
            )).map((occasion) => (
              <Link
                key={occasion.key}
                to={occasion.href}
                className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-[#E5E3E0] bg-[#FAFAF8] hover:border-[#C5A028] hover:-translate-y-0.5 transition-all"
              >
                <CalendarCheck className="w-6 h-6 text-[#C5A028]" />
                <p className="font-semibold text-sm text-[#1A1A1A]">{occasion.label}</p>
                <p className="text-xs uppercase tracking-[2px] font-semibold text-[#C5A028] group-hover:text-[#1A1A1A] transition-colors">
                  View →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY MYCHEF IN [AREA] — LOCAL KNOWLEDGE ───────────────────────── */}
      <section className="px-6 py-20 md:px-10 bg-[#FAFAF8]">
        <div className="max-w-[1160px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-4">
              Local knowledge
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl mb-5">
              Why myCHEF in {area.name}
            </h2>
            <div className="space-y-5 text-[#4A4745] leading-8">
              <p>
                Our chefs know {area.name} — its villa layouts, the villas that have great kitchens, and
                the local suppliers that make the food genuinely fresh. That knowledge comes from cooking
                here hundreds of times, not from a listing on a marketplace.
              </p>
              <p>
                {area.villaDensity}
              </p>
              <p>
                {area.guestProfile}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Landmarks */}
            <div className="bg-white rounded-[24px] border border-[#E5E3E0] p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#C5A028]" />
                <p className="font-semibold text-sm uppercase tracking-[0.2em]">Local landmarks we plan around</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {area.landmarks.map((lm) => (
                  <div key={lm} className="flex items-start gap-2 text-sm text-[#4A4745] leading-5">
                    <Check className="w-3.5 h-3.5 text-[#C5A028] mt-0.5 flex-shrink-0" />
                    {lm}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking note */}
            <div className="bg-white rounded-[24px] border border-[#E5E3E0] p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-[#C5A028]" />
                <p className="font-semibold text-sm uppercase tracking-[0.2em]">Booking timeline</p>
              </div>
              <p className="text-sm text-[#4A4745] leading-6">{area.bookingNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. PRICING ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0F1111] text-white px-6 py-20 md:px-10">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-3 text-center">
            Transparent pricing
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-center">
            Pricing for {area.name}
          </h2>
          <p className="text-white/70 max-w-[640px] mx-auto text-center leading-7 mb-12">
            No hidden fees. {siteFacts.groceryPolicy} with receipts. The quote you receive is the
            price you pay. {siteFacts.depositPercent}% deposit confirms the booking; the balance is due {siteFacts.balanceTiming}.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { label: 'Private Chef Half Day', price: 'From IDR 2,500,000++', note: 'Per day · chef + assistant included · groceries at cost' },
              { label: 'Villa Catering', price: 'From IDR 700,000 pp', note: 'Per person · 8–30 guests · buffet or plated' },
              { label: 'Fine Dining Tasting Menu', price: 'From IDR 980,000 pp', note: 'Per person · 5–7 courses · wine pairing available' },
              { label: 'BBQ & Seafood Grill', price: 'From IDR 720,000 pp', note: 'Per person · charcoal grill · full service' },
              { label: 'Events & Weddings', price: 'Custom quote', note: 'Group size, menu, staffing level — quoted per event' },
              { label: 'Weekly Chef Service', price: 'From IDR 2,250,000++ per day', note: 'Weekly rate (10% off standard) · chef + assistant included' },
            ].map((tier) => (
              <div key={tier.label} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
                <p className="font-playfair text-lg mb-1">{tier.label}</p>
                <p className="text-[#C5A028] font-semibold text-lg mb-2">{tier.price}</p>
                <p className="text-white/60 text-xs leading-5">{tier.note}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              data-source={`area-${area.slug}-pricing-wa`}
              onClick={() => trackWhatsAppClick(`area-${area.slug}-pricing`)}
              className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a free itemised quote
            </a>
            <p className="text-white/50 text-xs mt-4">
              <Link to="/pricing" className="underline hover:text-white transition-colors">
                pricing guide
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-10 bg-white">
        <div className="max-w-[860px] mx-auto">
          <p className="text-center text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-center font-playfair text-3xl md:text-4xl mb-12">
            Questions about {area.name}
          </h2>

          <div className="space-y-5">
            {area.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-[#E5E3E0] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-[#1A1A1A] text-base list-none select-none hover:bg-[#FAFAF8] transition-colors">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-[#C5A028] flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-[#4A4745] leading-7 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. NEARBY AREAS ──────────────────────────────────────────────────── */}
      {nearby.length > 0 && (
        <section className="px-6 py-16 md:px-10 bg-[#FAFAF8]">
          <div className="max-w-[1160px] mx-auto">
            <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-3">
              Nearby areas
            </p>
            <h2 className="font-playfair text-2xl md:text-3xl mb-2">
              We also cook near {area.name}
            </h2>
            <p className="text-[#4A4745] mb-8 text-sm leading-6 max-w-[600px]">
              Same team, same standards. If your villa is in a nearby area, we cover it too.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  to={`/private-chef/${n.slug}`}
                  className="flex items-center gap-3 bg-white border border-[#E5E3E0] rounded-xl px-4 py-3 hover:border-[#C5A028] hover:text-[#C5A028] transition-all text-sm font-medium"
                >
                  <MapPin className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                  private chef in {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 10. ALL SERVICES BLOCK ───────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16 md:px-10">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-3">
            All myCHEF services
          </p>
          <h2 className="font-playfair text-2xl md:text-3xl mb-8">Explore the full service menu</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Fine Dining', href: '/fine-dining', icon: Flame },
              { label: 'Villa Catering', href: '/catering', icon: Utensils },
              { label: 'Events & Weddings', href: '/events', icon: Sparkles },
              { label: 'Staffing', href: '/staffing', icon: Users },
              { label: 'Private Chef Bali', href: '/', icon: ChefHat },
              { label: 'Pricing Guide', href: '/pricing', icon: Check },
              { label: 'Book myCHEF', href: '/book', icon: CalendarCheck },
              { label: 'Get a Quote', href: '/quote', icon: MessageCircle },
            ].map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-[#E5E3E0] hover:border-[#C5A028] transition-all"
                >
                  <Icon className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-[#C5A028] transition-colors">{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A028] ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 10b. CROSS-LINK TO LOCATION PAGE ───────────────────────────────── */}
      {hasLocationPage(area.slug) && (
        <section className="px-6 py-16 md:px-10 bg-[#FAFAF8]">
          <div className="max-w-[1160px] mx-auto text-center">
            <h3 className="font-playfair text-2xl mb-4">Explore {area.name} Location Guide</h3>
            <p className="text-[#4A4745] mb-6 max-w-[640px] mx-auto leading-7">
              See detailed neighbourhood coverage, local services, and area-specific pricing for private chef dining in {area.name}.
            </p>
            <Link
              to={`/locations/${area.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all"
            >
              {area.name} dining guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* ── 10c. RELATED SERVICES (all areas) ─────────────────────────────── */}
      <section className="px-6 py-10 md:px-10">
        <div className="max-w-[1160px] mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-[#4A4745]">
            <span>Also see:</span>
            {[{ to: '/', label: 'private chef Bali' }, ...(AREA_RELATED_LINKS[area.slug] ?? [])].map((link, i, arr) => (
              <span key={link.to}>
                <Link to={link.to} className="text-[#C5A028] hover:underline font-medium">
                  {link.label}
                </Link>
                {i < arr.length - 1 ? <span className="text-[#8A8785]"> · </span> : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-10 bg-[#1A1A1A] text-white text-center">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#C5A028] text-sm uppercase tracking-[0.35em] font-semibold mb-4">
            Ready to book?
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl mb-5">
            Book a private chef in {area.name}
          </h2>
          <p className="text-white/70 leading-8 mb-10">
            WhatsApp us your date, villa address, guest count, and any dietary requirements. We'll
            confirm a chef and send a free itemised quote within 1 hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              data-source={`area-${area.slug}-final-cta`}
              onClick={() => trackWhatsAppClick(`area-${area.slug}-final`)}
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-10 py-5 rounded-full hover:bg-[#D4B43A] transition-all text-base"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center border border-white/20 text-white font-semibold text-sm uppercase tracking-[2px] px-10 py-5 rounded-full hover:border-[#C5A028] hover:text-[#C5A028] transition-all text-base"
            >
              Request a quote online
            </Link>
          </div>
          <p className="text-white/55 text-xs mt-8">
            Same-day response · HACCP certified · {siteFacts.reviewFraming}
          </p>
        </div>
      </section>
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
