import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Users, Clock, ChefHat, MessageCircle, Check, Phone, Utensils, Sparkles, Shield, ShieldCheck, RefreshCw, UsersRound, ConciergeBell } from 'lucide-react'
import SeoHead, {
  localBusinessSchema,
  serviceSchema,
  faqPageSchema,
  aggregateRatingSchema,
  organizationSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { RiskReversal } from '@/components/shared'
import TrustSection from '@/components/trust/TrustSection'

const PORTALS = [
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    subtitle: 'A private chef cooks exclusively for you. Multi-course menu. Wine pairing. Your villa. Just your table.',
    path: '/fine-dining',
    image: '/generated/hub-fine-dining.webp',
    accent: '#C5A028',
  },
  {
    id: 'catering',
    title: 'Catering & Events',
    subtitle: 'BBQ, buffet, plated dinners. Weddings, retreats, celebrations. We handle everything. You enjoy.',
    path: '/catering',
    image: '/generated/hub-catering.webp',
    accent: '#6B8E5A',
  },
  {
    id: 'events',
    title: 'Events',
    subtitle: 'Full-service hospitality for weddings, corporate offsites, and celebrations. Chef, staff, setup, cleanup.',
    path: '/events',
    image: '/generated/hub-events.webp',
    accent: '#2C5F7C',
  },
]

// Six editorial trust cards rendered under the three service portals.
// Each one earns the premium price tag with one concrete promise.
const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Message Us',
    desc: 'Your dates, villa, guest count. We reply within the hour.',
    icon: MessageCircle,
    color: '#C5A028',
  },
  {
    step: '02',
    title: 'We Design Your Menu',
    desc: 'Choose from our menus or create a custom experience. You approve every detail.',
    icon: Utensils,
    color: '#6B8E5A',
  },
  {
    step: '03',
    title: 'We Shop & Cook',
    desc: 'Fresh ingredients sourced that morning. We arrive ready to execute.',
    icon: ChefHat,
    color: '#2C5F7C',
  },
  {
    step: '04',
    title: 'You Enjoy. We Disappear.',
    desc: 'Sit back. Eat. Laugh. When you are done, your kitchen is spotless.',
    icon: Sparkles,
    color: '#C5734D',
  },
]

const DIFFERENTIATORS = [
  { icon: ChefHat, title: 'Michelin-Trained Leadership', desc: 'Adriano trained under a Michelin-starred chef. His standards are the minimum for every dish.' },
  { icon: Users, title: '50+ Professional Staff', desc: 'Chefs, servers, bartenders, mixologists. All trained in-house. All hospitality focused.' },
  { icon: Shield, title: 'We Handle Everything', desc: 'Groceries, cooking, service, cleanup. You lift nothing. Not even a planning call.' },
  { icon: MapPin, title: 'We Know Bali', desc: '8 years serving villas across Seminyak, Canggu, Ubud, Uluwatu, Sanur. We know the kitchens and the markets.' },
  { icon: Clock, title: 'Same-Day Response', desc: 'Inquiries confirmed within one hour. Proposals delivered within 24 hours. No delays.' },
  { icon: Star, title: '12,000+ Happy Guests', desc: 'Families, couples, CEOs, wedding parties. 4.9★ across 560+ villa experiences.' },
]

const FAQS = [
  { q: 'How far in advance should I book?', a: 'For fine dining, 7+ days is ideal. For villa chefs, 3+ days. For events, 4+ weeks. But message us anyway — we accommodate last-minute requests whenever possible.' },
  { q: 'Do you serve all areas of Bali?', a: 'Yes. Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, and everywhere in between. We have chefs based across the island.' },
  { q: 'What about dietary restrictions?', a: 'Every menu is tailored. Gluten-free, vegan, halal, nut allergies, pregnancy-friendly — just tell us. We have done it all.' },
  { q: 'Are groceries included in the price?', a: 'For fine dining and events, ingredients are included. For villa chef catering, groceries are billed at cost with no markup — you see every receipt.' },
  { q: 'How many staff will come to my villa?', a: 'Fine dining: 6–10 staff (chef, sous chef, servers, sommelier). Villa chef: 1–2 chefs. Events: depends on scale, quoted in your proposal.' },
  { q: 'What is the cancellation policy?', a: 'Full refund 14+ days before. 50% refund 7–13 days before. No refund less than 7 days. See our full cancellation policy for details.' },
  { q: 'How does payment work?', a: 'A 25% deposit confirms your booking and locks your chef. The remaining 75% is paid when the chef arrives at your villa, before service begins.' },
]


const JOURNAL_LINKS = [
  {
    title: 'How to Host a Villa Dinner Party in Bali (Complete Guide)',
    path: '/journal/bali-villa-dinner-party-guide',
  },
  {
    title: 'Bali Wedding Catering Cost: What to Budget in 2025',
    path: '/journal/wedding-catering-bali-cost',
  },
  {
    title: 'The Bali Floating Breakfast: History, Recipes & How to Order One',
    path: '/journal/floating-breakfast-bali',
  },
]

const REVIEWS = [
  { name: 'James & Sarah', location: 'London', dept: 'Fine Dining', text: 'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.' },
  { name: 'The Harrisons', location: 'Sydney', dept: 'Fine Dining', text: 'Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.' },
  { name: 'Marco & Elena', location: 'Milan', dept: 'Fine Dining', text: 'As Italians, we are picky about our food. The tagliatelle transported us back to Bologna. The wine pairing was impeccable.' },
  { name: 'The Wilson Family', location: 'Singapore', dept: 'Fine Dining', text: 'We booked the Wagyu Experience for my father\'s 70th. He has eaten at three Michelin stars. He said this was better because it was ours.' },
  { name: 'Priya & Rahul', location: 'Mumbai', dept: 'Fine Dining', text: 'The Mediterranean Sea menu was light, sophisticated, and deeply flavourful. Every plate looked like art. Every bite tasted like summer in Sicily.' },
  { name: 'David Chen', location: 'Hong Kong', dept: 'Fine Dining', text: 'The ribeye was the best piece of meat I have had in a decade. The fire, the technique, the timing — this team understands heat.' },
  { name: 'The O\'Briens', location: 'Dublin', dept: 'Catering', text: 'Seven breakfasts, five lunches, four dinners across ten days. Never the same dish twice. The kids asked if the chef could move in.' },
  { name: 'Lisa & Tom', location: 'Amsterdam', dept: 'Catering', text: 'We hired a villa chef for our honeymoon. Waking up to fresh croissants and Balinese coffee every morning — that is the definition of luxury.' },
  { name: 'The Nakamura Family', location: 'Tokyo', dept: 'Catering', text: 'Our chef adjusted every meal for our children\'s tastes without making it feel like kids\' food. The level of care was extraordinary.' },
  { name: 'Sophie & Pierre', location: 'Paris', dept: 'Catering', text: 'Ten days in Ubud with a private chef. We never went to a restaurant. Why would we? The best food in Bali was in our villa.' },
  { name: 'The Johnsons', location: 'New York', dept: 'Catering', text: 'We have used private chefs in Tuscany, Provence, and the Hamptons. The myCHEF team in Bali was the most professional of all.' },
  { name: 'Anna K.', location: 'Berlin', dept: 'Catering', text: 'As a vegetarian in Bali, I was worried. The chef created dishes I still dream about. Grilled tempeh with sambal mataku — unforgettable.' },
  { name: 'The Garcias', location: 'Barcelona', dept: 'Events', text: 'Our wedding dinner for 40 guests. Every plate came out perfect. Every server knew our names. It felt like a five-star restaurant in our garden.' },
  { name: 'Rebecca & Sam', location: 'Melbourne', dept: 'Events', text: 'We hosted a retreat for 25 executives. The myCHEF team handled everything — dietary restrictions, timing, presentation. Flawless.' },
  { name: 'Michael R.', location: 'Dubai', dept: 'Events', text: 'My 50th birthday party. They turned our villa pool deck into a dining room that looked like something from a magazine. And the food matched.' },
  { name: 'The Lims', location: 'Kuala Lumpur', dept: 'Events', text: 'Corporate dinner for 30. The team arrived at 2 PM and worked silently until service. Not a single detail was missed.' },
  { name: 'Clara & Felix', location: 'Zurich', dept: 'Events', text: 'We wanted something intimate for our engagement. They created a candlelit dinner for twelve that felt like a scene from a film.' },
  { name: 'The Patels', location: 'Mumbai', dept: 'Events', text: 'Our daughter\'s graduation dinner. The dessert table alone — those pastries are worth the flight to Bali.' },
  { name: 'Richard & Amanda', location: 'San Francisco', dept: 'Fine Dining', text: 'We have done tasting menus in Napa, Paris, and Tokyo. The Wagyu Experience at our villa rivalled all of them. The team is world-class.' },
  { name: 'The Müllers', location: 'Munich', dept: 'Catering', text: 'Two weeks in Canggu with daily chef service. The grocery receipts were transparent, the food was exceptional, and the kitchen was cleaner when they left than when they arrived.' },
  { name: 'Jessica & Ben', location: 'Toronto', dept: 'Fine Dining', text: 'The sommelier paired a Sicilian white with the lobster tagliatelle that made me cry. Not exaggerating. It was that good.' },
  { name: 'The Kwons', location: 'Seoul', dept: 'Events', text: '100 guests for our company anniversary. They served a seven-course plated dinner with military precision. Every guest commented on the food.' },
  { name: 'Olivia & Marcus', location: 'Stockholm', dept: 'Catering', text: 'Fresh juice every morning, poolside lunches, candlelit dinners. We felt like we were living in a luxury resort — except it was our villa.' },
  { name: 'The Fosters', location: 'Chicago', dept: 'Fine Dining', text: 'We asked for a surprise menu. What arrived was a journey through Adriano\'s career — Modena, Tokyo, Bali. Each course told a story.' },
  { name: 'Yuki & Kenji', location: 'Osaka', dept: 'Events', text: 'Traditional Japanese wedding ceremony followed by a Western-style reception. The team respected every ritual while delivering world-class cuisine.' },
]

const HERO_STATS = ['560+ Villas Served', '12,000+ Happy Guests', '4.9 ★ Rating', '8+ Years in Bali']

const FEATURED_TESTIMONIALS = [
  {
    name: 'James & Sarah',
    location: 'Seminyak Villa',
    eventType: 'Private Dinner',
    date: 'March 2026',
    quote: REVIEWS[0].text,
    rating: 5,
  },
  {
    name: 'The Harrisons',
    location: 'Ubud Estate',
    eventType: 'Anniversary Dinner',
    date: 'February 2026',
    quote: REVIEWS[1].text,
    rating: 5,
  },
  {
    name: 'The Garcias',
    location: 'Canggu Garden Villa',
    eventType: 'Wedding Dinner',
    date: 'January 2026',
    quote: REVIEWS[12].text,
    rating: 5,
  },
]

export default function HubPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const portalsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const statsAnimationStartedRef = useRef(false)
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
        const tl = gsap.timeline({ delay: 0.3 })
        tl.fromTo('.hub-hero-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
        tl.fromTo('.hub-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
        tl.fromTo('.hub-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        tl.fromTo('.hub-hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')

        gsap.fromTo('.portal-card', { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: portalsRef.current, start: 'top 85%', once: true },
        })

        gsap.fromTo('.trust-item', { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: trustRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => { statsAnimationStartedRef.current = true },
          },
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
    '@type': 'FoodEstablishment',
    url: 'https://mychef.id/',
    telephone: '+62 822-3756-5997',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer',
      addressLocality: 'Denpasar Selatan',
      addressRegion: 'Bali',
      postalCode: '80226',
      addressCountry: 'Indonesia',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Bali, Indonesia',
    },
    priceRange: '$$$$',
    servesCuisine: ['Italian', 'Mediterranean', 'Indonesian', 'International'],
  }

  const websiteSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mychef.id/#website',
    name: 'myCHEF.id',
    url: 'https://mychef.id/',
    inLanguage: 'en',
    publisher: { '@id': 'https://mychef.id/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://mychef.id/?s={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  }

  const homeBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
    ],
  }

  const homeSchemas: Record<string, unknown>[] = [
    homeLocalBusinessSchema,
    websiteSchema,
    homeBreadcrumb,
    organizationSchema('https://mychef.id/generated/home-hero-ivory-villa-v2.png', [
      'https://www.instagram.com/mychef.id',
      'https://www.facebook.com/mychef.id',
    ]),
    serviceSchema(
      'Private Chef / Fine Dining',
      'Italian tasting menus and open-flame dining experiences in your Bali villa. Michelin-trained leadership.',
      'https://mychef.id/fine-dining',
      '$$$$'
    ),
    serviceSchema(
      'Villa Catering',
      'Daily private chef service for villa stays — breakfast, lunch, and dinner. Groceries at cost.',
      'https://mychef.id/catering',
      '$$$'
    ),
    serviceSchema(
      'Event Production',
      'Weddings, retreats, birthdays, and corporate events — full planning, catering, and service staff.',
      'https://mychef.id/events',
      '$$$$'
    ),
    serviceSchema(
      'In-Villa Service Staff',
      'Uniformed waiters, butlers, bartenders, mixologists, and sommeliers for villa dining and events.',
      'https://mychef.id/in-villa-service',
      '$$$'
    ),
    serviceSchema(
      'Staffing & Placement',
      'Hire vetted private chefs, live-in chefs, butlers, and villa staff across Bali. 48-hour placement.',
      'https://mychef.id/staffing',
      '$$$'
    ),
    aggregateRatingSchema(4.9, 560),
    faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
  ]

  return (
    <div>
      <SeoHead
        title={getPageMeta('home').title}
        description={getPageMeta('home').description}
        canonical={getPageMeta('home').canonical}
        ogImage={getPageMeta('home').ogImage}
        jsonLd={homeSchemas}
      />
      {/* HERO — premium brand identity with Michelin-trained founder story front and centre */}
      <section ref={(node) => { heroRef.current = node as HTMLDivElement | null; portalsRef.current = node as HTMLDivElement | null }} className="pb-20 pt-16 md:pb-32 md:pt-[72px]" style={{ background: 'var(--u-bg)' }}>
        <div className="mb-10 md:mb-14">
          <div className="relative min-h-[calc(100vh-64px)] overflow-hidden md:min-h-[calc(100vh-72px)]">
            <img
              src="/generated/bali-hub-hero.webp"
              alt="Luxury private dining table in a Bali villa at sunset"
              width={1536}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover object-[center_52%]"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              onError={(e) => {
                console.error('❌ Critical: Homepage hero image failed to load. Check that public/generated/bali-hub-hero.webp exists.')
                const img = e.target as HTMLImageElement
                img.style.opacity = '0.3'
              }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)' }} />
            <div className="absolute inset-0 bg-black/20 md:hidden" />
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-[1280px] items-center px-5 py-10 sm:px-6 md:min-h-[calc(100vh-72px)] md:py-14">
              <div className="max-w-2xl md:max-w-[46%]">
                <p className="hub-hero-label mb-4 text-xs uppercase tracking-[0.34em] text-[#C5A028] sm:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Your Villa. Our Kitchen.
                </p>
                <h1 className="hub-hero-title mb-4 text-[2rem] leading-[1.08] text-white sm:text-5xl md:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A Michelin-Trained Private Chef, in Your Bali Villa.
                </h1>
                <div className="gold-arc mb-6" />
                <p className="hub-hero-subtitle mb-7 max-w-xl text-[15px] leading-relaxed sm:text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Private dining, catering, and events across Bali. We shop, cook, serve, and clean. You just enjoy.
                </p>
                <div className="hub-hero-cta mb-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  <a href="https://wa.me/6282237565997?text=Hi%2C%20I%27d%20like%20to%20book%20a%20private%20chef%20for%20my%20Bali%20villa." target="_blank" rel="noopener noreferrer" data-source="homepage-hero" className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 sm:w-auto sm:px-8" style={{ background: '#C5A028', color: '#111' }}>
                    <MessageCircle className="w-4 h-4" /> Get My Free Quote <span aria-hidden="true">→</span>
                  </a>
                  <Link to="/pricing" className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 sm:w-auto sm:px-8" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                    Browse Menus &amp; Pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/60" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Replies within 1 hour · Weekends fill fast
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
          <div className="mb-8 md:mb-12">
            <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed sm:text-[15px] md:text-base" style={{ color: 'var(--u-text-muted)' }}>
              Founded by Adriano — trained under a Michelin-starred chef in Milan — myCHEF.id delivers restaurant-level private dining to Bali&apos;s finest villas with a 50+ person hospitality team.
            </p>

            <div className="mx-auto mb-8 max-w-2xl">
              <RiskReversal
                items={[
                  { icon: ShieldCheck, label: 'Same-day confirmation or your money back', desc: 'If your chef can\'t make it, we send a replacement within 2 hours or refund 100%' },
                  { icon: RefreshCw, label: 'Chef replacement guarantee', desc: 'Same-day replacement or full refund — your evening is protected' },
                ]}
              />
            </div>
            <div className="mx-auto mb-6 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)', color: 'var(--u-text-muted)' }}
                >
                  {stat}
                </div>
              ))}
            </div>
            <div className="mx-auto mb-12 text-center">
              <a
                href="https://wa.me/6282237565997"
                target="_blank"
                rel="noopener noreferrer"
                data-source="homepage-pricing-strip"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1916] transition-colors hover:text-[#C5A028]"
              >
                Message us with date, guest count, and villa area <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {PORTALS.map((portal, idx) => (
              <div key={portal.id} className="portal-card group relative w-full overflow-hidden rounded-2xl min-h-[420px] sm:min-h-[480px]" style={{ aspectRatio: '3/4' }}>
                <Link to={portal.path} className="absolute inset-0 z-10" aria-label={portal.title} />
                <img
                  src={portal.image}
                  alt={portal.title}
                  width={600}
                  height={800}
                  fetchPriority={idx === 0 ? 'high' : undefined}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  style={{ background: '#1a1a1a' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.4' }}
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{portal.title}</h3>
                  <p className="text-sm text-white/[70%] mb-5 leading-relaxed">{portal.subtitle}</p>
                  <span className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-4" style={{ color: portal.accent }}>
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-opacity-100 pointer-events-none" style={{ borderColor: portal.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LUXURY TRUST SECTION */}
      <div className="cv-auto">
        <TrustSection />
      </div>

      {/* HOW IT WORKS */}
      <section
        className="cv-auto relative min-h-[900px] flex flex-col items-center justify-center overflow-hidden py-20 md:py-32 px-5 md:px-12"
        style={{
          backgroundImage: 'url(/generated/hero-how-it-works.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.79))',
          }}
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          {/* Section header */}
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
              className="text-5xl md:text-7xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: '#1E1E1E', lineHeight: 0.95 }}
            >
              How It Works
            </h2>
            <p
              className="text-xl md:text-2xl max-w-xl mx-auto leading-[1.6]"
              style={{ color: '#6D5F55', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              From first message to first bite — four steps. No stress. No surprises.
            </p>
          </div>

          {/* Step cards grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-24">
            {HOW_IT_WORKS.map((item, idx) => (
              <div key={item.step} className="relative overflow-visible">
                {/* Icon circle - positioned above card */}
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
                    filter: hoveredStep === item.step ? 'saturate(1.2) brightness(1.1)' : 'saturate(1) brightness(1)',
                  }}
                >
                  <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Card */}
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

                {/* Connector line - only on desktop, between cards */}
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

          {/* CTA Button and trust line */}
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20arrange%20dining%20at%20my%20villa"
              target="_blank"
              rel="noopener noreferrer"
              data-source="homepage-hiw-cta"
              className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full mb-6 transition-all hover:shadow-lg hover:scale-105"
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
              Start on WhatsApp
            </a>
            <p
              className="text-base"
              style={{ color: '#6D5F55', fontFamily: "'Inter', sans-serif" }}
            >
              Replies within 1 hour · Available across Bali
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/generated/team-photo.webp"
                alt="The myCHEF team"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
              />
            </div>
            <div>
              <p className="u-label mb-4">Who We Are</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">A Team Built on Passion, Not Pitch Decks</h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                myCHEF.id was born when Adriano — trained under a Michelin-starred chef in Milan — arrived in Bali and saw a gap. 
                The island had world-class villas. It had incredible ingredients. But the connection between them was missing.
              </p>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Today we are a team of 50+ Indonesian hospitality professionals. Chefs trained in Italian technique. Servers who anticipate 
                before you ask. Event producers who have handled 200+ weddings and corporate retreats. Every person on our team shares one belief: 
                extraordinary food should not require leaving your villa.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                We are not a marketplace. We are not an app. We are a kitchen that travels — and we take that seriously.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Michelin-trained leadership', '50+ staff', '560+ villas served', '12,000+ guests'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: 'var(--u-accent)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="cv-auto diff-section py-24 md:py-32 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Why Choose Us</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">What Makes Us Different</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>Anyone can cook. We build experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="diff-card p-8 rounded-2xl border transition-all hover:shadow-lg" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <d.icon className="w-6 h-6 mb-4" style={{ color: 'var(--u-accent)' }} />
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE CHEF SERVICE IN BALI — TRUST SECTION */}
      <section ref={trustRef} style={{ background: '#faf8f3' }} className="cv-auto py-0">
        <div
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-0 items-center min-h-[calc(100vh-82px)]"
          style={{ padding: '96px 7vw 72px' }}
        >
          {/* Left: Content */}
          <div className="flex flex-col justify-center pr-0 lg:pr-12">
            {/* Eyebrow */}
            <p
              className="mb-6 text-sm uppercase tracking-[0.15em]"
              style={{ color: '#b88a2b', fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Trusted by villas, families, and private hosts
            </p>

            {/* Main Heading */}
            <h2
              className="mb-8 text-5xl lg:text-6xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1a1714', fontWeight: 400 }}
            >
              Private Chef Service in Bali
            </h2>

            {/* Description */}
            <p
              className="mb-12 text-lg leading-[1.7]"
              style={{ color: '#5c5550' }}
            >
              We partner with private villas, villa managers, and guests who want restaurant-level dining without the coordination work. From intimate dinners to larger private events, every detail is handled by our team.
            </p>

            {/* Three Trust Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {/* Icon Box 1 */}
              <div className="flex flex-col">
                <div
                  className="mb-4 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ background: '#b88a2b' }}
                >
                  <ChefHat className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3
                  className="mb-2 text-sm font-semibold uppercase tracking-widest"
                  style={{ color: '#1a1714' }}
                >
                  Michelin-Trained
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#7d7470' }}
                >
                  Leadership by Adriano, trained under Michelin-starred chefs in Milan.
                </p>
              </div>

              {/* Icon Box 2 */}
              <div className="flex flex-col">
                <div
                  className="mb-4 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ background: '#b88a2b' }}
                >
                  <UsersRound className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3
                  className="mb-2 text-sm font-semibold uppercase tracking-widest"
                  style={{ color: '#1a1714' }}
                >
                  50+ Professionals
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#7d7470' }}
                >
                  Chefs, servers, bartenders, and event staff — all trained in-house.
                </p>
              </div>

              {/* Icon Box 3 */}
              <div className="flex flex-col">
                <div
                  className="mb-4 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ background: '#b88a2b' }}
                >
                  <ConciergeBell className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3
                  className="mb-2 text-sm font-semibold uppercase tracking-widest"
                  style={{ color: '#1a1714' }}
                >
                  1-Hour Response
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#7d7470' }}
                >
                  Same-day confirmation or same-day replacement guarantee.
                </p>
              </div>
            </div>

            {/* Trust Metrics */}
            <p
              className="text-sm uppercase tracking-[0.1em]"
              style={{ color: '#9d8d78' }}
            >
              ✓ 560+ villas served  ✓ 12,000+ happy guests  ✓ 4.9 average rating
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative h-full lg:flex items-center justify-center hidden">
            <div
              className="relative w-full max-w-[500px]"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="/generated/hub-villa.webp"
                alt="Family enjoying private villa dinner in Bali"
                width={500}
                height={625}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
                style={{
                  filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.08))'
                }} />
            </div>
          </div>
        </div>

        {/* Mobile Image (shows below on smaller screens) */}
        <div className="lg:hidden px-6 py-12">
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src="/generated/hub-villa.webp"
              alt="Family enjoying private villa dinner in Bali"
              width={600}
              height={450}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="Guest moments worth repeating"
        subtitle="Private dinners, wedding weekends and hosted events — the details guests remember most."
        testimonials={FEATURED_TESTIMONIALS}
      />

      {/* REVIEWS */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Guest Words</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">25 Reviews. One Truth.</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>Real guests. Real villas. Real experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="p-6 rounded-2xl border transition-all hover:border-[#C5A028]/30" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-3 h-3 fill-[#C5A028] text-[#C5A028]" />)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: 'var(--u-text)' }}>"{review.text}"</p>
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
            <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105" style={{ color: 'var(--u-accent)' }}>
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="u-label mb-4">Where We Serve</p>
            <h2 className="u-heading text-3xl md:text-5xl mb-4">Private Chef Across Bali</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              From Seminyak's beachfront villas to Ubud's jungle retreats — we know every kitchen, every market, every road.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'Seminyak', slug: 'seminyak', image: '/generated/city-seminyak.webp' },
              { name: 'Canggu', slug: 'canggu', image: '/generated/city-canggu.webp' },
              { name: 'Ubud', slug: 'ubud', image: '/generated/city-ubud.webp' },
              { name: 'Uluwatu', slug: 'uluwatu', image: '/generated/city-uluwatu.webp' },
              { name: 'Sanur', slug: 'sanur', image: '/generated/city-sanur.webp' },
              { name: 'Nusa Dua', slug: 'nusa-dua', image: '/generated/city-nusa-dua.webp' },
              { name: 'Jimbaran', slug: 'jimbaran', image: '/generated/city-jimbaran.webp' },
              { name: 'Berawa', slug: 'berawa', image: '/generated/city-berawa.webp' },
              { name: 'Pererenan', slug: 'pererenan', image: '/generated/city-pererenan.webp' },
              { name: 'Bukit', slug: 'bukit', image: '/generated/city-bukit.webp' },
            ].map((city) => (
              <Link
                key={city.slug}
                to={`/${city.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={city.image}
                  alt={`Private chef in ${city.name}, Bali`}
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
          <div className="text-center mt-10">
            <Link to="/locations" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all hover:gap-4" style={{ color: 'var(--u-accent)' }}>
              View All Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VILLA & AIRBNB OWNERS */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="u-label mb-4">Partnerships</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">For Villa & Airbnb Owners</h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Elevate your guests' experience by partnering with myCHEF. We currently work with 560+ private villas across Bali. Whatever your guests need, we lift everything we touch with excellence.
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
              <Link to="/partners" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105" style={{ background: 'var(--u-accent)', color: '#fff' }}>
                Partner With myCHEF <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/generated/hub-villa.webp"
                alt="Luxury villa partnership"
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

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Questions</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">Frequently Asked</h2>
            <p className="mb-2" style={{ color: 'var(--u-text-muted)' }}>Still unsure? Message us on WhatsApp — we respond within the hour.</p>
          </div>
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
          <div className="text-center mt-12">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" data-source="homepage-about-cta" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105" style={{ background: '#C5A028', color: '#fff' }}>
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1100px] mx-auto rounded-[28px] border border-black/5 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[560px]">
              <p className="u-label mb-3">Journal</p>
              <h2 className="u-heading text-3xl md:text-4xl mb-4">Explore Our Journal</h2>
              <p style={{ color: 'var(--u-text-muted)' }}>
                Planning a villa dinner, wedding weekend, or Bali breakfast setup? Browse our latest guides for practical hosting tips.
              </p>
            </div>
            <Link to="/journal" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all hover:gap-4" style={{ color: 'var(--u-accent)' }}>
              Visit the Journal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {JOURNAL_LINKS.map((article) => (
              <Link
                key={article.path}
                to={article.path}
                className="rounded-2xl border border-black/5 bg-[#FAFAF8] px-5 py-5 text-sm font-medium transition-colors hover:border-[#C5A028] hover:text-[#C5A028]"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hub-bali.webp"
            alt="Bali landscape"
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
            Your Villa. Our Kitchen.<br />
            <span className="italic">One Message Away.</span>
          </h2>
          <p className="text-white/[70%] mb-10 max-w-xl mx-auto">
            Most inquiries are answered within the hour. No deposit required to start planning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" data-source="homepage-final-cta" className="inline-flex items-center gap-2 px-10 py-5 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105">
              <Phone className="w-4 h-4" /> Get My Free Quote <span aria-hidden="true">→</span>
            </a>
            <Link to="/contact" className="inline-block px-10 py-5 border border-white/40 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              View All Contact Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
