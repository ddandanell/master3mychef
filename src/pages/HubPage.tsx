import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getLocationCanonical } from '@/data/siteArchitecture'
import {
  ArrowRight,
  Star,
  ChefHat,
  MessageCircle,
  Check,
  Phone,
  Utensils,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Clock,
  UsersRound,
  ConciergeBell,
  Wine,
} from 'lucide-react'
import SeoHead, {
  serviceSchema,
  faqPageSchema,
  organizationSchema,
  localBusinessSchema,
  postalAddressSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import {
  siteFacts,
  MEAL_PLANS,
  formatIDR,
  planDailyRateAllIn,
} from '@/data/siteFacts'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { RiskReversal } from '@/components/shared'
import TrustSection from '@/components/trust/TrustSection'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const homeMeta = getPageMeta('home')

const CHEF_ONE = formatIDR(planDailyRateAllIn(MEAL_PLANS[0], 'daily'))
const CHEF_TWO = formatIDR(planDailyRateAllIn(MEAL_PLANS[1], 'daily'))
const CHEF_THREE = formatIDR(planDailyRateAllIn(MEAL_PLANS[2], 'daily'))

const WA_STAY = buildWhatsAppUrl({
  serviceName: 'a private chef in Bali for a villa stay',
  intent: 'availability and the all-in day rate',
})
const WA_CATERING = buildWhatsAppUrl({
  serviceName: 'catering in Bali for one lunch, dinner or party',
  intent: 'a quote with per-person, group total and all-in',
})
const WA_HOME = buildWhatsAppUrl({
  serviceName: 'a private chef stay or catering in Bali',
  intent: 'help choosing stay chef vs one meal',
})

const CORES = [
  {
    id: 'private-chef',
    kicker: 'Villa chef hire · a stay',
    title: 'Private Chef',
    oneLiner: `${CHEF_ONE} · ${CHEF_TWO} · ${CHEF_THREE} all-in a day. Groceries extra at cost with receipts.`,
    points: [
      'One, two or three meals a day for the days you are in the villa.',
      'Team: 1 chef + 1 assistant, about 10 guests. One meal ~4 hours, two ~8, three ~12.',
      'Over 10 guests: extra assistant per +10 and +40% of the base day rate per step.',
    ],
    path: '/private-chef-bali',
    cta: 'Private chef day rates',
    wa: WA_STAY,
    waLabel: 'WhatsApp a stay chef',
    image: '/generated/mychef-experience-bali-luna-hero-v2.webp',
    imageAlt: 'Private chef cooking and serving a meal at a Bali villa for myCHEF guests',
    accent: '#C5A028',
  },
  {
    id: 'catering',
    kicker: 'One meal / one party',
    title: 'Catering',
    oneLiner:
      'Bali catering for one lunch, dinner or party. Groceries included. Quote shows per person, group total and all-in.',
    points: [
      'Two menus with dishes — you pick, we cook at the villa.',
      '50% deposit. No tasting. No named chef. Wine is BYO — you bring, we pour.',
      '++ is 10% service + 11% VAT on food quotes. Chef stay rates above are already all-in.',
    ],
    path: '/catering',
    cta: 'Catering for one meal',
    wa: WA_CATERING,
    waLabel: 'WhatsApp one meal',
    image: '/generated/mychef-catering-bali-hub-catering.webp',
    imageAlt: 'Villa catering spread at a Bali property by myCHEF',
    accent: '#6B8E5A',
  },
] as const

const ADD_ONS = [
  {
    title: 'Weddings',
    desc: 'Food, staff and service for a villa wedding — stacked on catering, not a separate hero.',
    href: '/events/weddings',
    cta: 'Wedding catering →',
  },
  {
    title: 'Sushi masterclass',
    desc: 'Hands-on sushi at the villa. An add-on to a stay or a one-off session.',
    href: '/experiences/sushi-masterclass',
    cta: 'Sushi masterclass →',
  },
  {
    title: 'Mobile bar',
    desc: 'Cocktail setup at the villa. Alcohol is not included — you supply the bottles.',
    href: '/in-villa-service/bartenders',
    cta: 'Mobile bar →',
  },
  {
    title: 'Events',
    desc: 'Birthdays, corporate dinners and villa parties — scoped as catering plus staff.',
    href: '/events',
    cta: 'Events →',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Message Us',
    desc: 'Stay or one meal, dates, villa, guest count. We reply within 2 hours.',
    icon: MessageCircle,
    color: '#C5A028',
  },
  {
    step: '02',
    title: 'We Send Menus',
    desc: 'Stay chef: menus for the days you booked. Catering: two menus with dishes.',
    icon: Utensils,
    color: '#6B8E5A',
  },
  {
    step: '03',
    title: 'We Shop & Cook',
    desc: 'Stay: groceries at cost with receipts. Catering: food included in the quote.',
    icon: ChefHat,
    color: '#2C5F7C',
  },
  {
    step: '04',
    title: 'You Eat. We Clear.',
    desc: 'Service, then a spotless kitchen. You bring wine if you want it — we pour.',
    icon: Sparkles,
    color: '#C5734D',
  },
]

const COMPARISON_ROWS = [
  { feature: 'Vetted, background-checked team', freelance: 'Varies', marketplace: 'Varies', mychef: 'Always' },
  { feature: 'Backup if your chef falls ill', freelance: 'None', marketplace: 'Rebooking', mychef: 'Replacement within 2 hours or 100% refund' },
  { feature: 'Waiters, bar, extra staff', freelance: 'Rarely', marketplace: 'No', mychef: 'Quoted when you need them' },
  { feature: 'Itemised quote before you pay', freelance: 'Sometimes', marketplace: 'Platform estimate', mychef: 'Always — chef all-in, catering ++ and all-in' },
  { feature: 'Kitchen left spotless', freelance: 'Hopefully', marketplace: '—', mychef: 'Guaranteed' },
]

const FAQS = [
  {
    q: 'Can you cook at our villa in Bali?',
    a: 'Yes. myCHEF cooks in villa kitchens across Bali — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran and the Bukit. Send the villa area on WhatsApp. <a href="/locations">Locations →</a>',
  },
  {
    q: 'Is food included — private chef or catering?',
    a: 'Catering (one lunch, dinner or party): groceries are included in the quote. Private chef for a stay: the all-in day rate is the team; groceries are extra at cost with receipts, no markup. <a href="/private-chef-bali">Stay chef →</a> · <a href="/catering">Catering →</a>',
  },
  {
    q: 'Private chef vs catering vs cooking class — which do I book?',
    a: 'A <strong>stay</strong> is <a href="/private-chef-bali">private chef</a> — one, two or three meals a day, groceries extra. <strong>One lunch, dinner or party</strong> is <a href="/catering">catering</a> — food included. A <a href="/experiences/cooking-class">cooking class</a> is you cooking with the chef, not a meal service. Cooking class, weddings and sushi sit under the two cores, not beside them.',
  },
  {
    q: 'How much is a private chef in Bali for a stay?',
    a: `All-in day rates already include tax and service: 1 meal ${CHEF_ONE}; 2 meals ${CHEF_TWO}; 3 meals ${CHEF_THREE}. Groceries extra at cost with receipts. Team is 1 chef + 1 assistant for about 10 guests. <a href="/private-chef-bali">Private chef Bali →</a>`,
  },
  {
    q: 'How much is catering for one lunch, dinner or party?',
    a: 'WhatsApp guest count, date and villa. We send two menus with dishes, then a quote with per-person, group total and all-in. Groceries included. ++ is 10% service + 11% VAT; the all-in figure is what you pay. We do not publish old buffet SKUs on this page.',
  },
  {
    q: 'What deposit do you require?',
    a: 'A 50% deposit confirms the booking. The remaining 50% is due on the day of service. Full terms: <a href="/cancellation">cancellation policy</a>.',
  },
  {
    q: 'Can we request a named chef?',
    a: 'No. We send a HACCP-certified chef and assistant matched to the brief. We do not assign or guarantee a named chef.',
  },
  {
    q: 'Is wine included?',
    a: 'No. You bring wine and alcohol; we pour. We do not sell wine with the meal.',
  },
  {
    q: 'Can you do same-day dinner?',
    a: 'Usually we cannot. Normal notice is 3–5 days. Message us anyway if the date is tight — we will say honestly if the kitchen can take it.',
  },
  {
    q: 'How many guests does the stay chef cover?',
    a: 'The published stay rate is 1 chef + 1 assistant for about 10 guests. Over 10: an extra assistant per +10 guests and +40% of the base day rate per step. One meal is about 4 hours on site, two about 8, three about 12.',
  },
]

const IN_HOUSE_TEAM = [
  {
    image: '/generated/chef-adriano-portrait.webp',
    width: 900,
    height: 900,
    alt: 'myCHEF in-house chef in a Bali villa kitchen',
  },
  {
    image: '/generated/chef-made-surya-portrait.webp',
    width: 768,
    height: 1024,
    alt: 'myCHEF in-house chef preparing fresh pasta at a Bali villa',
  },
  {
    image: '/generated/chef-ni-putu-asri-portrait.webp',
    width: 900,
    height: 900,
    alt: 'myCHEF in-house chef preparing Balinese spice paste in a villa kitchen',
  },
] as const

const JOURNAL_LINKS = [
  {
    title: 'How to Host a Villa Dinner Party in Bali (Complete Guide)',
    path: '/private-dining-indonesia',
  },
  {
    title: 'Bali Wedding Catering Cost: What to Budget in 2026',
    path: '/bali-wedding-catering-packages',
  },
  {
    title: 'The Bali Floating Breakfast: History, Recipes & How to Order One',
    path: '/catering/floating-breakfast',
  },
  {
    title: 'Holiday Chef Bali: Christmas, New Year & Festive Season Dining',
    path: '/blog/holiday-chef-bali',
  },
  {
    title: 'Wedding Private Chef in Bali: Planning & Logistics Guide',
    path: '/blog/wedding-private-chef-bali-planning-guide',
  },
  {
    title: 'Corporate Events & Team Dining in Bali: Private Chef',
    path: '/blog/corporate-events-catering-bali-team-dining',
  },
  {
    title: 'Fine Dining Trends in Bali 2026: Modern Innovations',
    path: '/blog/fine-dining-trends-bali-2026-innovations',
  },
  {
    title: 'Chef Qualifications & Credentials: Hiring Guide for Bali',
    path: '/blog/chef-qualifications-credentials-bali-hiring',
  },
]

const REVIEWS = [
  { name: 'The O\'Briens', location: 'Dublin', dept: 'Stay chef', text: 'Seven breakfasts, five lunches, four dinners across ten days. Never the same dish twice. The kids asked if the chef could move in.' },
  { name: 'Lisa & Tom', location: 'Amsterdam', dept: 'Stay chef', text: 'We hired a villa chef for our honeymoon. Waking up to fresh croissants and Balinese coffee every morning — that is the definition of luxury.' },
  { name: 'The Müllers', location: 'Munich', dept: 'Stay chef', text: 'Two weeks in Canggu with daily chef service. The grocery receipts were transparent, the food was exceptional, and the kitchen was cleaner when they left than when they arrived.' },
  { name: 'The Garcias', location: 'Barcelona', dept: 'Catering', text: 'Our wedding dinner for 40 guests. Every plate came out perfect. Every server knew our names. It felt like a five-star restaurant in our garden.' },
  { name: 'Rebecca & Sam', location: 'Melbourne', dept: 'Catering', text: 'We hosted a retreat for 25 executives. The myCHEF team handled everything — dietary restrictions, timing, presentation. Flawless.' },
  { name: 'Sophie & Pierre', location: 'Paris', dept: 'Stay chef', text: 'Ten days in Ubud with a private chef. We never went to a restaurant. Why would we? The best food in Bali was in our villa.' },
]

const CITIES = [
  { name: 'Seminyak', slug: 'seminyak', image: '/generated/mychef-location-bali-city-seminyak.webp' },
  { name: 'Canggu', slug: 'canggu', image: '/generated/mychef-location-bali-city-canggu.webp' },
  { name: 'Ubud', slug: 'ubud', image: '/generated/mychef-location-bali-city-ubud.webp' },
  { name: 'Uluwatu', slug: 'uluwatu', image: '/generated/mychef-location-bali-city-uluwatu.webp' },
  { name: 'Sanur', slug: 'sanur', image: '/generated/mychef-location-bali-city-sanur.webp' },
  { name: 'Nusa Dua', slug: 'nusa-dua', image: '/generated/mychef-location-bali-city-nusa-dua.webp' },
  { name: 'Jimbaran', slug: 'jimbaran', image: '/generated/mychef-location-bali-city-jimbaran.webp' },
  { name: 'Berawa', slug: 'berawa', image: '/generated/mychef-location-bali-city-berawa.webp' },
  { name: 'Pererenan', slug: 'pererenan', image: '/generated/mychef-location-bali-city-pererenan.webp' },
  { name: 'Bukit', slug: 'bukit', image: '/generated/mychef-location-bali-city-bukit.webp' },
]

export default function HubPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const portalsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    let cleanup: (() => void) | undefined

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)
      const ctx = gsap.context(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (!prefersReduced && window.innerWidth >= 768) {
          const tl = gsap.timeline({ delay: 0.2 })
          tl.fromTo('.hub-hero-label', { y: 16 }, { y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform' })
          tl.fromTo('.hub-hero-title', { y: 20 }, { y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform' }, '-=0.4')
        }

        gsap.fromTo('.portal-card', { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: portalsRef.current, start: 'top 85%', once: true },
        })

        gsap.fromTo('.trust-item', { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: trustRef.current, start: 'top 80%', once: true },
        })

        gsap.fromTo('.hiw-step', { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.hiw-section', start: 'top 75%', once: true },
        })

        gsap.fromTo('.diff-card', { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.diff-section', start: 'top 80%', once: true },
        })
      })

      cleanup = () => ctx.revert()
    })()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  const homeLocalBusinessSchema: Record<string, unknown> = {
    ...localBusinessSchema,
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    '@id': 'https://mychef.id/#business',
    name: siteFacts.businessName,
    description:
      'Bali private chef for villa stays and catering for one lunch, dinner or party. HACCP-certified team. Groceries extra on stay chef; food included on catering.',
    url: 'https://mychef.id/',
    telephone: siteFacts.phoneDisplay,
    email: siteFacts.email,
    address: postalAddressSchema,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteFacts.geo.latitude,
      longitude: siteFacts.geo.longitude,
    },
    areaServed: ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Sanur', 'Nusa Dua', 'Jimbaran', 'Berawa', 'Pererenan', 'Bukit'],
    priceRange: `${CHEF_ONE} - ${CHEF_THREE} per day`,
    founder: { '@type': 'Person', name: 'Adriano' },
    servesCuisine: ['Indonesian', 'Italian', 'Mediterranean', 'Japanese', 'International'],
    openingHours: 'Mo-Su 07:00-22:00',
  }
  delete homeLocalBusinessSchema.aggregateRating
  delete homeLocalBusinessSchema.review

  const websiteSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mychef.id/#website',
    name: 'myCHEF.id',
    url: 'https://mychef.id/',
    inLanguage: 'en',
    publisher: { '@id': 'https://mychef.id/#organization' },
  }

  const homeSchemas: Record<string, unknown>[] = [
    homeLocalBusinessSchema,
    websiteSchema,
    organizationSchema('https://mychef.id/mychef-logo-512.png', [
      'https://www.instagram.com/mychef.id',
      'https://www.facebook.com/mychef.id',
    ]),
    serviceSchema(
      'Private Chef Bali — Villa Stay',
      `A chef and assistant at your villa for a stay. All-in day rates: 1 meal ${CHEF_ONE}, 2 meals ${CHEF_TWO}, 3 meals ${CHEF_THREE}. Groceries extra at cost with receipts.`,
      'https://mychef.id/private-chef-bali',
      '$$$',
    ),
    serviceSchema(
      'Catering Bali — One Meal or Party',
      'One lunch, dinner or party at the villa. Groceries included. Quote shows per person, group total and all-in. Two menus with dishes.',
      'https://mychef.id/catering',
      '$$$',
    ),
    faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
  ]

  return (
    <div>
      <SeoHead
        title={homeMeta.title}
        description={homeMeta.description}
        canonical={homeMeta.canonical}
        ogImage={homeMeta.ogImage}
        jsonLd={homeSchemas}
      />

      {/* HERO — two cores named in the first screen */}
      <section
        ref={(node) => {
          heroRef.current = node as HTMLDivElement | null
        }}
        className="pb-10 md:pb-16"
        style={{ background: 'var(--u-bg)' }}
      >
        <div className="relative min-h-[70svh] overflow-hidden md:min-h-[78vh]">
          <img
            src="/generated/mychef-location-bali-hub-hero-800.webp"
            srcSet="/generated/mychef-location-bali-hub-hero-800.webp 800w, /generated/mychef-location-bali-hub-hero.webp 1440w"
            sizes="100vw"
            alt="Private chef Bali villa dining — sunset terrace table set for in-villa dining by myCHEF"
            width={800}
            height={444}
            className="absolute inset-0 h-full w-full object-cover object-[center_52%]"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              if (!img.src.includes('mychef-location-bali-hub-hero.webp')) {
                img.src = '/generated/mychef-location-bali-hub-hero.webp'
              }
            }}
          />
          <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.35) 100%)' }} />
          <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)' }} />
          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1280px] items-end px-5 pb-8 pt-24 sm:px-6 md:min-h-[78vh] md:items-center md:pb-14 md:pt-24">
            <div className="w-full max-w-2xl md:max-w-[52%]">
              <p className="hub-hero-label mb-3 text-xs uppercase tracking-[0.28em] text-[#C5A028] sm:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                myCHEF Bali · Bali private chef
              </p>
              <h1 className="hub-hero-title mb-3 text-[1.7rem] leading-[1.12] text-white sm:text-5xl md:text-[3.25rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {homeMeta.h1}
              </h1>
              <div className="gold-arc mb-4 md:mb-5" />
              <p className="hub-hero-subtitle mb-3 max-w-[46ch] text-[15px] leading-relaxed text-white/90 sm:max-w-xl sm:text-lg">
                Hire a <strong className="font-semibold text-white">private chef in Bali</strong> for a stay — villa chef hire at {CHEF_ONE} / {CHEF_TWO} / {CHEF_THREE} all-in a day, groceries extra. Then <strong className="font-semibold text-white">catering</strong> for one lunch, dinner or party — food included.
              </p>
              <p className="hub-hero-subtitle mb-5 text-sm text-white/75 sm:text-[15px]">
                HACCP-certified · Normal notice 3–5 days · Same-day dinner usually cannot
              </p>
              <div className="hub-hero-cta mb-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  to="/private-chef-bali"
                  data-source="homepage-hero-pillar"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-[1.02] sm:w-auto sm:px-7 focus:outline-none focus:ring-2 focus:ring-white"
                  style={{ background: '#C5A028', color: '#111' }}
                >
                  Private chef — a stay <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/catering"
                  data-source="homepage-hero-catering"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/45 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 sm:w-auto sm:px-7 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  Catering — one meal
                </Link>
                <a
                  href={WA_HOME}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="homepage-hero"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 text-sm font-medium text-white/85 underline-offset-4 hover:text-white hover:underline sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp in 2 hours
                </a>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/55 sm:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Chef replacement guarantee
              </p>
              <p className="mt-3 text-xs text-white/50">
                <Link
                  to="/experiences/cooking-class"
                  className="underline-offset-4 hover:text-white/80 hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
                >
                  Private class at the villa →
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
          <div className="mb-6 mt-8 md:mb-8 md:mt-10">
            <div className="mx-auto mb-6 max-w-2xl">
              <RiskReversal
                items={[
                  { icon: Clock, label: 'Book 3–5 days ahead', desc: 'Same-day dinner is usually not possible. Send the date — we will say if we can take it.' },
                  { icon: RefreshCw, label: 'Chef replacement guarantee', desc: 'If the team cannot make it, we send a replacement within 2 hours or refund 100%.' },
                  { icon: ShieldCheck, label: '50% deposit', desc: 'Confirms the date. Balance on the day of service.' },
                ]}
              />
            </div>
          </div>

          {/* TWO CORES — not four equal heroes */}
          <div ref={portalsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {CORES.map((core) => (
              <article
                key={core.id}
                className="portal-card overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={core.image}
                    alt={core.imageAlt}
                    width={800}
                    height={500}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <p
                    className="absolute left-5 top-5 text-xs uppercase tracking-[0.22em] text-white/90"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {core.kicker}
                  </p>
                  <h2
                    className="absolute bottom-4 left-5 right-5 text-3xl text-white md:text-4xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {core.title}
                  </h2>
                </div>
                <div className="p-5 sm:p-7">
                  <p className="mb-4 text-[15px] font-medium leading-relaxed" style={{ color: 'var(--u-text)' }}>
                    {core.oneLiner}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {core.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: core.accent }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      to={core.path}
                      data-source={`homepage-core-${core.id}`}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                      style={{ background: core.accent, color: '#111' }}
                    >
                      {core.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={core.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-source={`homepage-core-wa-${core.id}`}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold uppercase tracking-widest transition-all hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                      style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                    >
                      <MessageCircle className="h-4 w-4" /> {core.waLabel}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs sm:text-sm" style={{ color: 'var(--u-text-muted)' }}>
            ++ = 10% service + 11% VAT. Chef stay rates on this page are already all-in. Catering food quotes show ++ and all-in.
          </p>
        </div>
      </section>

      <TrustStrip />

      <div className="cv-auto">
        <TrustSection />
      </div>

      {/* HOW IT WORKS */}
      <section
        className="hiw-section cv-auto relative flex min-h-0 flex-col items-center justify-center overflow-hidden py-12 md:min-h-[700px] md:py-32 px-5 md:px-12 mobile-bg-scroll"
        style={{
          backgroundImage: 'url(/generated/mychef-misc-bali-hero-how-it-works.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.79))',
          }}
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p
              className="text-base md:text-[16px] tracking-[0.08em] uppercase mb-5"
              style={{ color: '#C5A028', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: '0.1em' }}
            >
              Simple as It Gets
            </p>
            <div className="flex justify-center mb-7">
              <div style={{ width: '60px', height: '1px', background: '#C5A028' }} />
            </div>
            <h2
              className="mb-4 text-3xl leading-tight sm:text-5xl md:mb-6 md:text-7xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: '#1E1E1E', lineHeight: 0.95 }}
            >
              How It Works
            </h2>
            <p
              className="text-xl md:text-2xl max-w-xl mx-auto leading-[1.6]"
              style={{ color: '#6D5F55', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Stay chef or one meal — four steps. Groceries extra on a stay. Food included for catering.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-24">
            {HOW_IT_WORKS.map((item, idx) => (
              <div key={item.step} className="hiw-step relative overflow-visible">
                <div
                  className="absolute flex items-center justify-center transition-all duration-300"
                  style={{
                    top: 0,
                    left: '50%',
                    transform: hoveredStep === item.step
                      ? 'translate(-50%, -50%) scale(1.15)'
                      : 'translate(-50%, -50%) scale(1)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: item.color,
                    boxShadow: hoveredStep === item.step
                      ? `0 20px 40px ${item.color}40, inset 0 -2px 8px rgba(0, 0, 0, 0.1)`
                      : `0 12px 28px ${item.color}40`,
                    zIndex: 10,
                  }}
                >
                  <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                <div
                  className="pt-28 pb-10 px-8 rounded-2xl text-center h-full flex flex-col relative cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(201, 162, 39, 0.12)',
                    boxShadow: '0 18px 55px rgba(40, 30, 20, 0.08)',
                    zIndex: 1,
                  }}
                  onMouseEnter={() => setHoveredStep(item.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <p
                    className="text-sm md:text-base tracking-[0.1em] uppercase mb-6 font-semibold"
                    style={{ color: '#D4AF37', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: '0.15em' }}
                  >
                    Step {item.step}
                  </p>
                  <div className="flex justify-center mb-6">
                    <div style={{ width: '45px', height: '1px', background: '#C5A028' }} />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl leading-tight mb-5"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1E1E1E', fontWeight: 400, lineHeight: 1.15 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-[1.65]"
                    style={{ color: '#6D5F55', fontFamily: "'Inter', sans-serif", fontWeight: 400, maxWidth: '260px', margin: '0 auto' }}
                  >
                    {item.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div
                    className="hidden md:block absolute top-1/3 -right-5 w-10 h-px"
                    style={{
                      background: 'rgba(201, 162, 39, 0.45)',
                      backgroundImage: 'radial-gradient(circle, #C5A028 1px, transparent 1px)',
                      backgroundSize: '6px 100%',
                      backgroundPosition: 'left center',
                      backgroundRepeat: 'repeat-x',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <a
              href={WA_HOME}
              target="_blank"
              rel="noopener noreferrer"
              data-source="homepage-hiw-cta"
              className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full mb-6 transition-all hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
              style={{
                background: '#C5A028',
                color: 'white',
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                width: 'fit-content',
                boxShadow: '0 14px 34px rgba(201, 162, 39, 0.28)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Get Your Quote within 2 Hours
            </a>
            <p className="text-base" style={{ color: '#6D5F55', fontFamily: "'Inter', sans-serif" }}>
              Replies within 2 hours · Normal notice 3–5 days
            </p>
          </div>
        </div>
      </section>

      {/* ADD-ONS — not equal heroes */}
      <section className="px-5 py-12 sm:px-6 md:py-24" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="u-label mb-4">Add-ons</p>
            <h2 className="u-heading text-3xl md:text-5xl mb-4">Around the Two Cores</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              Weddings, sushi, a bar and events sit under a stay chef or catering — not equal heroes on this page.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADD_ONS.map((service) => (
              <div key={service.href} className="p-8 rounded-2xl border transition-all hover:shadow-lg" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--u-text-muted)' }}>{service.desc}</p>
                <Link to={service.href} className="text-sm font-semibold hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded" style={{ color: 'var(--u-accent)' }}>
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF vs CATERING vs CLASS */}
      <section className="px-5 py-12 sm:px-6 md:py-24" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="u-label mb-4">The Split</p>
          <h2 className="u-heading text-3xl md:text-5xl mb-6">Private Chef or Catering</h2>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--u-text-muted)' }}>
            A <strong style={{ color: 'var(--u-text)' }}>private chef in Bali</strong> is for a stay — meals across the days you are in the villa, groceries at cost.{' '}
            <strong style={{ color: 'var(--u-text)' }}>Catering Bali</strong> is one lunch, dinner or party, food included.{' '}
            <Link to="/private-chef-bali" className="font-semibold hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded" style={{ color: 'var(--u-accent)' }}>Stay rates →</Link>
            {' · '}
            <Link to="/catering" className="font-semibold hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded" style={{ color: 'var(--u-accent)' }}>Catering →</Link>
          </p>
        </div>
      </section>

      {/* WHO WE ARE — no named-chef picker */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-proposal-dinner-plated-dish-bali-portrait.webp"
                alt="Plated villa dinner course by the myCHEF in-house kitchen in Bali"
                width={896}
                height={1200}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
              />
            </div>
            <div>
              <p className="u-label mb-4">Who We Are</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">A Kitchen That Travels to the Villa</h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                myCHEF.id was born when Adriano — trained under Michelin-level standards in {siteFacts.founderTrainingCity} — arrived in Bali and saw a gap.
                World-class villas. Incredible ingredients. The kitchen was missing.
              </p>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Today we are a team of 50+ Indonesian hospitality professionals. Every stay booking is 1 chef + 1 assistant, HACCP-certified. We do not assign a named chef — we match a team to the brief.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                We are not a marketplace. We are not an app. You bring wine if you want it; we pour.
              </p>
              <div className="flex flex-wrap gap-4">
                {['560+ events served', '12,000+ guests', 'HACCP-certified', '50+ staff'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: 'var(--u-accent)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm" style={{ color: 'var(--u-text-muted)' }}>
                Prefer a structured form?{' '}
                <Link to="/quote" className="font-semibold underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded" style={{ color: 'var(--u-accent)' }}>
                  Request a quote →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN-HOUSE TEAM — existing portraits only; no named-chef booking CTA */}
      <section className="px-5 pb-12 sm:px-6 md:pb-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <p className="u-label mb-4">The Team</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">In-house team</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              Every booking is cooked by our in-house kitchen — matched to cuisine and occasion. We do not assign a named chef.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {IN_HOUSE_TEAM.map((chef) => (
              <div key={chef.image} className="relative aspect-[4/5] overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <img
                  src={chef.image}
                  alt={chef.alt}
                  width={chef.width}
                  height={chef.height}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BOOK myCHEF */}
      <section className="cv-auto diff-section px-5 py-12 sm:px-6 md:py-24" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <p className="u-label mb-4">Why Book myCHEF</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">Why Book myCHEF</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              A 50+ person Indonesian hospitality team — not a freelancer, not a marketplace. Founded by Adriano, trained under a Michelin-starred chef in {siteFacts.founderTrainingCity}.
            </p>
          </div>
          <div className="mb-6 space-y-3 md:hidden">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.feature} className="rounded-2xl border p-4" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--u-text)' }}>{row.feature}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--u-accent)' }}>myCHEF: {row.mychef}</p>
                <p className="mt-1 text-xs" style={{ color: 'var(--u-text-muted)' }}>Freelance: {row.freelance} · Marketplace: {row.marketplace}</p>
              </div>
            ))}
          </div>
          <div className="mb-6 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] text-sm border rounded-2xl overflow-hidden" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--u-border)', background: 'var(--u-bg)' }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: 'var(--u-text)' }}></th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: 'var(--u-text)' }}>Freelance chef</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: 'var(--u-text)' }}>Marketplace</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: 'var(--u-text)' }}>myCHEF</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--u-text-muted)' }}>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b last:border-0" style={{ borderColor: 'var(--u-border)' }}>
                    <td className="px-5 py-3 font-medium" style={{ color: 'var(--u-text)' }}>{row.feature}</td>
                    <td className="px-5 py-3">{row.freelance}</td>
                    <td className="px-5 py-3">{row.marketplace}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: 'var(--u-accent)' }}>{row.mychef}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <Link to="/why-mychef" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-all hover:gap-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ color: 'var(--u-accent)' }}>
              Full comparison and guarantees <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section ref={trustRef} style={{ background: '#faf8f3' }} className="cv-auto py-0">
        <div
          className="grid grid-cols-1 items-center gap-0 lg:grid-cols-[0.9fr_1.1fr] min-h-0 lg:min-h-[calc(100vh-82px)]"
          style={{ padding: '48px 5vw 40px' }}
        >
          <div className="flex flex-col justify-center pr-0 lg:pr-12">
            <p
              className="mb-6 text-sm uppercase tracking-[0.15em]"
              style={{ color: '#b88a2b', fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Trusted by villas, families, and private hosts
            </p>
            <h2
              className="mb-4 text-3xl leading-tight sm:mb-8 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1a1714', fontWeight: 400 }}
            >
              Private Chef Service in Bali
            </h2>
            <p className="mb-12 text-lg leading-[1.7]" style={{ color: '#5c5550' }}>
              We cook in private villas for stays and for one meal. From a week of breakfasts to a single dinner party, the team shops, cooks, serves and leaves the kitchen clean.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full" style={{ background: '#b88a2b' }}>
                  <ChefHat className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: '#1a1714' }}>HACCP-certified</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#7d7470' }}>Leadership trained under Michelin-level standards in {siteFacts.founderTrainingCity}. No named-chef picker.</p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full" style={{ background: '#b88a2b' }}>
                  <UsersRound className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: '#1a1714' }}>1 chef + 1 assistant</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#7d7470' }}>Stay rate covers about 10 guests. Extra assistant per +10 and +40% of the base day rate per step.</p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full" style={{ background: '#b88a2b' }}>
                  <ConciergeBell className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: '#1a1714' }}>2-Hour Response</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#7d7470' }}>Replacement within 2 hours or 100% refund. Normal booking notice 3–5 days.</p>
              </div>
            </div>
            <p className="flex items-center gap-2 text-sm" style={{ color: '#9d8d78' }}>
              <Wine className="h-4 w-4 shrink-0" /> You bring wine. We pour. Alcohol is never in the food quote.
            </p>
          </div>

          <div className="relative h-full lg:flex items-center justify-center hidden">
            <div className="relative w-full max-w-[500px]" style={{ aspectRatio: '4/5' }}>
              <img
                src="/generated/mychef-misc-bali-hub-villa.webp"
                alt="Family enjoying a private chef dinner in a Bali villa by myCHEF"
                width={500}
                height={625}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.08))' }}
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden px-6 py-12">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img
              src="/generated/mychef-misc-bali-hub-villa.webp"
              alt="Family served a private chef dinner in a Bali villa by myCHEF"
              width={600}
              height={450}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-6 md:py-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Gallery</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">Private dining moments in Bali</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/generated/mychef-home-1.webp', alt: 'Balinese private chef cooking for a family at a luxury Bali villa' },
              { src: '/generated/mychef-home-2.webp', alt: 'Guests dining on a Bali villa terrace served by a Balinese waiter' },
              { src: '/generated/mychef-home-3.webp', alt: 'Balinese private chef presenting a dish to guests at a Bali villa' },
              { src: '/generated/mychef-home-4.webp', alt: 'Couple enjoying a private villa dinner with a Balinese chef in Bali' },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Guest Words</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">What Guests Say</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>Real guests. Real villas. Stays and one-meal catering across Seminyak, Canggu, Ubud and beyond.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="p-6 rounded-2xl border transition-all hover:border-[#C5A028]/30" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-[#C5A028] text-[#C5A028]" />)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: 'var(--u-text)' }}>&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{review.name}</p>
                    <p className="text-xs" style={{ color: 'var(--u-text-muted)' }}>{review.location}</p>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase px-2 py-1 rounded-full border" style={{ borderColor: 'var(--u-border)', color: 'var(--u-text-muted)' }}>{review.dept}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ color: 'var(--u-accent)' }}>
              read guest reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="u-label mb-4">Where We Serve</p>
            <h2 className="u-heading text-3xl md:text-5xl mb-4">Where We Serve</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              Chefs based across the island — no travel games, no surprise fees.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                to={getLocationCanonical(city.slug)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <img
                  src={city.image}
                  alt={`Private chef service in ${city.name}, Bali by myCHEF`}
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium text-sm">{city.name}</p>
                    <p className="text-white/[60%] text-xs">Private Chef</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{ color: 'var(--u-text-muted)' }}>
            Hire a private chef in{' '}
            {CITIES.map((city, idx, arr) => (
              <span key={city.slug}>
                <Link to={getLocationCanonical(city.slug)} className="hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
                  {city.name === 'Bukit' ? 'Bukit Peninsula' : city.name}
                </Link>
                {idx < arr.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
          <div className="text-center mt-6">
            <Link to="/locations" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all hover:gap-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ color: 'var(--u-accent)' }}>
              View All Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="hidden md:block px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="u-label mb-4">Partnerships</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">For Villa & Airbnb Owners</h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Elevate your guests&apos; experience by partnering with myCHEF. We work with 560+ private villas across Bali. We handle the dining. You deliver the experience.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Premium Guest Service', desc: 'Offer exclusive dining without any effort on your part.' },
                  { title: 'Easy Partnership', desc: 'Simple setup with ongoing support for you and your guests.' },
                  { title: 'Higher Ratings', desc: 'Villas that offer private chef services see higher guest satisfaction and repeat bookings.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--u-accent)' }} />
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/staffing/for-villa-managers" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white" style={{ background: 'var(--u-accent)', color: '#fff' }}>
                Partner With myCHEF <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-misc-bali-hub-villa.webp"
                alt="myCHEF villa partnership — private chef service for luxury Bali properties"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="u-label mb-4">Guarantees</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">Booking With Confidence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: '3–5 days notice', desc: 'That is the normal window. Same-day dinner is usually not possible.' },
              { title: 'Chef replacement guarantee', desc: 'If the team cannot make it, we send a replacement within 2 hours or refund 100%.' },
              { title: 'Transparent terms', desc: '50% deposit to confirm, balance on the day. Stay chef rates are all-in. Catering quotes show ++ (10% service + 11% VAT) and all-in.' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/why-mychef" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-all hover:gap-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ color: 'var(--u-accent)' }}>
              Why villas across Bali choose myCHEF <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Questions</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">Frequently Asked</h2>
            <p className="mb-2" style={{ color: 'var(--u-text-muted)' }}>Still unsure? Message us on WhatsApp — we respond within 2 hours.</p>
          </div>
          <FAQAccordion items={FAQS} defaultOpenCount={3} showToc={false} ctaEvery={0} />
          <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_HOME}
              target="_blank"
              rel="noopener noreferrer"
              data-source="homepage-faq-cta"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
              style={{ background: '#C5A028', color: '#fff' }}
            >
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
            <Link to="/faq" className="text-sm font-semibold hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded" style={{ color: 'var(--u-accent)' }}>
              Full FAQ →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:py-16" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1100px] mx-auto rounded-[28px] border border-black/5 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[560px]">
              <p className="u-label mb-3">Journal</p>
              <h2 className="u-heading text-3xl md:text-4xl mb-4">Explore Our Journal</h2>
              <p style={{ color: 'var(--u-text-muted)' }}>
                Planning a villa dinner, wedding weekend, or Bali breakfast setup? Browse our latest guides for practical hosting tips.
              </p>
            </div>
            <Link to="/journal" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all hover:gap-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ color: 'var(--u-accent)' }}>
              Visit the Journal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNAL_LINKS.map((article) => (
              <Link
                key={article.path}
                to={article.path}
                className="rounded-2xl border border-black/5 bg-[#FAFAF8] px-5 py-5 text-sm font-medium transition-colors hover:border-[#C5A028] hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 sm:px-6 md:py-28">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-hub-bali.webp"
            alt="Sunset over Bali landscape — myCHEF private villa dining experiences across the island"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ready When You Are</p>
          <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stay Chef or One Meal.<br />
            <span className="italic">One Message Away.</span>
          </h2>
          <p className="text-white/[70%] mb-10 max-w-xl mx-auto">
            Tell us stay or one party, dates, guest count and villa area. Most enquiries are answered within 2 hours. Normal notice 3–5 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_HOME} target="_blank" rel="noopener noreferrer" data-source="homepage-final-cta" className="inline-flex items-center gap-2 px-10 py-5 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> WhatsApp quote within 2 hours <span aria-hidden="true">→</span>
            </a>
            <Link to="/contact" className="inline-block px-10 py-5 border border-white/40 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              View All Contact Options
            </Link>
          </div>
        </div>
      </section>
      <StickyMobileCTA
        pageSource="home"
        serviceType="hub"
        label="WhatsApp quote · reply in 2h"
        serviceName="a private chef stay or catering in Bali"
        intent="help choosing stay chef vs one meal"
      />
    </div>
  )
}
