import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getLocationCanonical } from '@/data/siteArchitecture'
import { ArrowRight, Star, ChefHat, MessageCircle, Check, Phone, Utensils, Sparkles, ShieldCheck, RefreshCw, UsersRound, ConciergeBell } from 'lucide-react'
import SeoHead, {
  serviceSchema,
  faqPageSchema,
  organizationSchema,
  localBusinessSchema,
  postalAddressSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import { siteFacts } from '@/data/siteFacts'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { RiskReversal } from '@/components/shared'
import TrustSection from '@/components/trust/TrustSection'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import PriceCards from '@/components/shared/PriceCards'
import AvailabilitySheet from '@/components/shared/AvailabilitySheet'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const PORTALS = [
  {
    id: 'private-chef',
    title: 'Private Chef',
    subtitle:
      'A chef and assistant at your villa for one, two or three meals a day. From IDR 1,000,000++ per day.',
    path: '/private-chef-bali',
    image: '/generated/mychef-experience-bali-luna-hero-v2.webp',
    imageAlt: 'Private chef cooking and serving a meal at a Bali villa for myCHEF guests',
    accent: '#C5A028',
  },
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    subtitle: 'Multi-course tasting menus — Italian, French, Mediterranean, Wagyu — plated in your villa, from 5 guests.',
    path: '/fine-dining',
    image: '/generated/mychef-misc-bali-hub-fine-dining.webp',
    imageAlt: 'Private fine dining table set for an intimate dinner in a Bali villa by myCHEF',
    accent: '#C5A028',
  },
  {
    id: 'catering',
    title: 'Catering & BBQ',
    subtitle: 'Buffets, live-fire grills, grazing tables and babi guling for groups of 10 to 150.',
    path: '/catering',
    image: '/generated/mychef-catering-bali-hub-catering.webp',
    imageAlt: 'Villa catering spread with BBQ, buffet and plated dishes at a Bali property by myCHEF',
    accent: '#6B8E5A',
  },
  {
    id: 'events',
    title: 'Events & Weddings',
    subtitle: 'Full-service hospitality: chef, staff, setup and cleanup for celebrations up to 200 guests.',
    path: '/events',
    image: '/generated/mychef-events-bali-hub-events.webp',
    imageAlt: 'Full-service private event setup at a Bali villa with dining and bar by myCHEF',
    accent: '#2C5F7C',
  },
]

// Six editorial trust cards rendered under the four service portals.
// Each one earns the premium price tag with one concrete promise.
const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Message Us',
    desc: 'Your dates, villa, guest count. We reply within 2 hours.',
    icon: MessageCircle,
    color: '#C5A028',
  },
  {
    step: '02',
    title: 'We Design Your Menu',
    desc: 'Choose from our menus or build something custom. You approve every dish.',
    icon: Utensils,
    color: '#6B8E5A',
  },
  {
    step: '03',
    title: 'We Shop & Cook',
    desc: 'Fresh ingredients sourced the same day, cooked in your villa kitchen.',
    icon: ChefHat,
    color: '#2C5F7C',
  },
  {
    step: '04',
    title: 'You Enjoy. We Disappear.',
    desc: 'Full service, then a spotless kitchen — you just enjoy.',
    icon: Sparkles,
    color: '#C5734D',
  },
]

const COMPARISON_ROWS = [
  { feature: 'Vetted, background-checked team', freelance: 'Varies', marketplace: 'Varies', mychef: 'Always' },
  { feature: 'Backup if your chef falls ill', freelance: 'None', marketplace: 'Rebooking', mychef: 'Replacement within 2 hours or 100% refund' },
  { feature: 'Full staffing (waiters, bar, sommelier)', freelance: 'Rarely', marketplace: 'No', mychef: 'Waiters/butlers: contact us for pricing; cocktail packages from IDR 500,000++ per guest' },
  { feature: 'Itemised fixed quote before you pay', freelance: 'Sometimes', marketplace: 'Platform estimate', mychef: 'Always, within 24 hours' },
  { feature: 'Kitchen left spotless', freelance: 'Hopefully', marketplace: '—', mychef: 'Guaranteed' },
]

const FAQS = [
  { q: 'How much does a private chef in Bali cost?', a: 'Villa dinners start from IDR 700K per person and tasting menus from IDR 950K per person, ++ (11% government tax + 10% service charge). Your fixed quote depends on menu, guest count and staffing. <a href="/pricing">Full price tables →</a>' },
  { q: 'What\'s included in the price?', a: 'Menu planning, fresh ingredient shopping, cooking, serving and a full kitchen clean-up. Daily villa chef service bills groceries at cost with receipts. Waiters and butlers: contact us for pricing; cocktail packages from IDR 500,000++ per guest. Sommelier quoted per event.' },
  { q: 'Do you offer a home chef service in Bali?', a: 'Yes — our private chefs work as your home chef for a single evening or on a daily or weekly basis: menu planning, market shopping, cooking and full clean-up at your villa or residence. See the <a href="/private-chef-bali">daily villa chef service</a>, or explore <a href="/private-dining-indonesia">private dining</a> for at-home fine dining.' },
  { q: 'How far in advance should I book?', a: 'A few days is ideal for dinners; weddings and large events deserve weeks. Same-day and next-day requests are often possible — message us and we\'ll tell you honestly.' },
  { q: 'Which areas do you serve?', a: 'All of Bali\'s main villa areas — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Berawa, Pererenan and the Bukit. Remote-area travel is always quoted upfront.' },
  { q: 'Do you handle dietary requirements?', a: 'Yes — vegan, gluten-free, halal, allergies and kids\' menus at no extra charge. Tell us when you enquire and the menu is built around it.' },
  { q: 'What if my chef can\'t make it?', a: 'We send a verified replacement within 2 hours or refund 100%. Your evening is protected either way.' },
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — private chef, catering, a mobile cocktail bar and experiences (cooking class, sushi) stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/catering">Catering →</a> · <a href="/experiences/cooking-class">Cooking class →</a>' },
  { q: 'Do you bring a mobile bar to villa parties in Bali?', a: 'Yes — complete cocktail packages from IDR 500,000++ per guest (min 10). We set up at your villa; not hourly bartender-only hire. <a href="/in-villa-service/bartenders">Packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
  { q: 'Do you offer a private cooking class at our Bali villa?', a: 'Yes — hands-on Balinese and Indonesian cooking classes in your villa kitchen (not a tourist school). We quote each session for group size and cuisine — contact for a proposal. <a href="/experiences/cooking-class">Cooking class Bali →</a> · <a href="/experiences/sushi-masterclass">Sushi masterclass →</a>' },
  { q: 'Do you clean up?', a: 'Yes on serviced formats — kitchen left clean after service.' },
  { q: 'Kids welcome?', a: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { q: 'Who is myCHEF?', a: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/why-mychef">Why myCHEF</a> · <a href="/chefs">Chefs</a>.' },
  { q: 'More questions?', a: 'See the central <a href="/faq">FAQ</a>.' },
  { q: 'What deposit do you require?', a: 'A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  // AnswerSocrates customer intents (not chef job/salary)
  { q: 'How much does it cost to hire a chef in Bali?', a: 'Event dinners from about IDR 700K per person ++; tasting menus from about IDR 950K++; daily villa chef hire from IDR 1,000,000++/day for one meal (chef + assistant, groceries at cost). <a href="/pricing">Pricing →</a> · <a href="/private-chef-bali">Day rates →</a>' },
  { q: 'Can I hire a private chef for my villa?', a: 'Yes. WhatsApp date, area and guest count — we reply within about two hours. <a href="/book">Book →</a>' },
  { q: 'Does a private chef live at the villa?', a: 'For most holiday bookings, no — the team works your meal windows and leaves after cleanup. Live-in is a separate long-term option. <a href="/staffing/live-in-chef">Live-in chef →</a>' },
  { q: 'Do you buy the food and clean the kitchen?', a: 'Yes. We shop, cook, serve and clean. On daily chef hire, groceries are billed at cost with receipts.' },
  { q: 'What is the difference between a private chef and a personal chef?', a: 'Occasion / short-stay bookings vs recurring multi-day meal service — both available. See <a href="/private-chef-bali">private chef Bali</a>.' },
  { q: 'Is a private chef worth it?', a: 'For villa groups and multi-meal days, often yes on convenience and per-person cost vs restaurants. Published prices help you decide before you book. <a href="/blog/private-chef-cost-bali">Cost guide →</a>' },
]


/** Mobile home: 6 high-intent FAQs only; full set lives on /faq (schema uses this short list). */
const HOME_FAQS = FAQS.filter((_, idx) => [0, 1, 3, 4, 5, 6].includes(idx))


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
  // The four below were each sitting on a single inbound internal link (flagged by
  // Semrush as "pages with only one internal link"). Linking them from the homepage —
  // the highest-authority page on the site — gives them a real second entry point.
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
  { name: 'The Fosters', location: 'Chicago', dept: 'Fine Dining', text: 'We asked for a surprise menu. What arrived was a journey through Adriano\'s career — Milan, Tokyo, Bali. Each course told a story.' },
  { name: 'Yuki & Kenji', location: 'Osaka', dept: 'Events', text: 'Traditional Japanese wedding ceremony followed by a Western-style reception. The team respected every ritual while delivering world-class cuisine.' },
]

export default function HubPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const portalsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const statsAnimationStartedRef = useRef(false)
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)
  const [availabilityOpen, setAvailabilityOpen] = useState(false)

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
        // Hero stays fully visible for LCP — never animate from opacity 0
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
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    '@id': 'https://mychef.id/#business',
    name: siteFacts.businessName,
    description: 'Private chef company in Bali delivering restaurant-level villa dining, catering and event hospitality.',
    url: 'https://mychef.id/',
    telephone: siteFacts.phoneDisplay,
    email: siteFacts.email,
    address: postalAddressSchema,
    areaServed: ['Seminyak','Canggu','Ubud','Uluwatu','Sanur','Nusa Dua','Jimbaran','Berawa','Pererenan','Bukit'],
    priceRange: 'IDR 700,000 - IDR 3,000,000+ per person',
    founder: { '@type': 'Person', 'name': 'Adriano' },
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
  }

  const homeSchemas: Record<string, unknown>[] = [
    homeLocalBusinessSchema,
    websiteSchema,
    organizationSchema('https://mychef.id/mychef-logo-512.png', [
      'https://www.instagram.com/mychef.id',
      'https://www.facebook.com/mychef.id',
    ]),
    serviceSchema(
      'Private Chef / Fine Dining',
      'Italian tasting menus and open-flame dining experiences in your Bali villa. Milan-trained leadership.',
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
    faqPageSchema(HOME_FAQS.map((f) => ({ question: f.q, answer: f.a }))),
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
      {/* HERO — mobile-first conversion shell */}
      <section ref={(node) => { heroRef.current = node as HTMLDivElement | null; portalsRef.current = node as HTMLDivElement | null }} className="pb-12 md:pb-24" style={{ background: 'var(--u-bg)' }}>
        <div className="mb-8 md:mb-12">
          <div className="relative min-h-[85svh] overflow-hidden md:min-h-screen">
            <img
              src="/generated/mychef-location-bali-hub-hero-800.webp"
              srcSet="/generated/mychef-location-bali-hub-hero-800.webp 800w, /generated/mychef-location-bali-hub-hero.webp 1440w"
              sizes="100vw"
              alt="Private chef Bali villa dining — sunset terrace table set for in-villa fine dining by myCHEF"
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
              }} />
            <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.35) 100%)' }} />
            <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)' }} />
            <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-[1280px] items-end px-5 pb-8 pt-24 sm:px-6 md:min-h-screen md:items-center md:pb-14 md:pt-24">
              <div className="w-full max-w-2xl md:max-w-[46%]">
                <p className="hub-hero-label mb-3 text-xs uppercase tracking-[0.28em] text-[#C5A028] sm:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  myCHEF · Bali hospitality
                </p>
                <h1 className="hub-hero-title mb-2 text-[1.75rem] leading-[1.1] text-white sm:text-5xl md:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Your villa. Our kitchen.
                </h1>
                <p className="hub-hero-subtitle mb-3 text-sm font-medium leading-snug text-white/90 sm:text-base md:text-lg">
                  Restaurant-level dining, catering and events — delivered in your villa
                </p>
                <div className="gold-arc mb-4 md:mb-6" />
                <p className="hub-hero-subtitle mb-3 max-w-[40ch] text-[15px] leading-relaxed text-white/90 sm:max-w-xl sm:text-lg">
                  myCHEF runs villa hospitality across Bali: multi-day chef service, fine dining nights, BBQ catering and full event teams. We shop, cook, serve and leave the kitchen spotless — from dinner for two to celebrations for 200.
                </p>
                <p className="hub-hero-subtitle mb-5 text-sm text-white/75 sm:text-[15px]">
                  Day rates from IDR 1,000,000++ · Groceries at cost · 560+ events served
                </p>
                <div className="hub-hero-cta mb-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    to="/private-chef-bali"
                    data-source="homepage-hero-pillar"
                    className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-[1.02] sm:w-auto sm:px-7 focus:outline-none focus:ring-2 focus:ring-white"
                    style={{ background: '#C5A028', color: '#111' }}
                  >
                    Private chef day rates <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={buildWhatsAppUrl({ serviceName: 'a villa hospitality plan with myCHEF', intent: 'a quote within 2 hours' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source="homepage-hero"
                    className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/45 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 sm:w-auto sm:px-7 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp in 2 hours
                  </a>
                  <Link
                    to="/pricing"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 text-sm font-medium text-white/85 underline-offset-4 hover:text-white hover:underline sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
                  >
                    See transparent prices <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/55 sm:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Same-day confirmation · Chef replacement guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
          <div className="mb-6 md:mb-10">
            <div className="mx-auto mb-6 max-w-2xl">
              <RiskReversal
                items={[
                  { icon: ShieldCheck, label: 'Same-day confirmation or your money back', desc: 'If your chef can\'t make it, we send a replacement within 2 hours or refund 100%' },
                  { icon: RefreshCw, label: 'Chef replacement guarantee', desc: 'Same-day replacement or full refund — your evening is protected' },
                ]}
              />
            </div>
          </div>

          {/* Intent portals — horizontal snap on mobile, grid on desktop */}
          <div className="mobile-snap-row md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 md:overflow-visible">
            {PORTALS.map((portal) => (
              <Link
                key={portal.id}
                to={portal.path}
                className="portal-card mobile-snap-card group relative min-h-[280px] w-full overflow-hidden rounded-2xl md:aspect-[3/4] md:min-h-[360px] md:max-w-none md:flex-none md:w-auto"
                style={{ aspectRatio: undefined }}
              >
                <img
                  src={portal.image}
                  alt={portal.imageAlt}
                  width={600}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h2 className="mb-2 text-2xl md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{portal.title}</h2>
                  <p className="text-sm leading-relaxed text-white/85 line-clamp-3">{portal.subtitle}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#C5A028]">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <span className="sr-only">{portal.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE STRIP */}
      <section className="px-5 py-12 sm:px-6 md:py-16" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <p className="u-label mb-4">Transparent Pricing</p>
            <h2 className="u-heading text-3xl md:text-4xl mb-4">A Private Chef, Without the Guesswork</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              Most private chef sites in Bali hide their prices. We publish ours.
            </p>
          </div>
          <PriceCards />
          <p className="mt-3 text-center text-xs sm:text-sm" style={{ color: 'var(--u-text-muted)' }}>
            Fixed quotes before you deposit. {siteFacts.depositPercent}% confirms your date.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* LUXURY TRUST SECTION */}
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
              className="mb-4 text-3xl leading-tight sm:text-5xl md:mb-6 md:text-7xl"
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
              href={buildWhatsAppUrl({ serviceName: 'villa dining in Bali', intent: 'a quote within 2 hours' })}
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
            <p
              className="text-base"
              style={{ color: '#6D5F55', fontFamily: "'Inter', sans-serif" }}
            >
              Replies within 2 hours · Available across Bali
            </p>
          </div>
        </div>
      </section>

      {/* OUR PRIVATE CHEF SERVICES IN BALI */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="u-label mb-4">Services</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">Our Private Chef Services in Bali</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              One team for every format — from a single dinner to a full month of villa dining.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { title: 'Fine dining Bali villa', desc: 'Multi-course tasting menus (Italian, French, Mediterranean, Wagyu) plated in your villa, from 5 guests.', href: '/fine-dining', cta: 'Explore fine dining Bali villa →' },
              { title: 'Catering Bali', desc: 'Buffets, live-fire grills, grazing tables and babi guling for groups of 10 to 150.', href: '/catering', cta: 'Explore catering Bali →' },
              { title: 'Private dining', desc: 'At-home fine dining across Indonesia — chef, service team and cleanup at your table.', href: '/private-dining-indonesia', cta: 'Explore private dining →' },
              { title: 'Hire private chef Bali', desc: 'Breakfast, lunch and dinner across your whole stay, groceries at cost. Daily and monthly rates published.', href: '/private-chef-bali', cta: 'Hire a private chef in Bali →' },
              { title: "Chef's table Bali", desc: 'Counter seating with Adriano — 7-course market menu, max 6 guests, Friday & Saturday only.', href: '/fine-dining/chefs-table', cta: "Book chefs table Bali →" },
              { title: 'Mobile bar & villa staff', desc: 'Mobile cocktail bar packages from IDR 500K++ per guest for villa parties; waiters and butlers contact for pricing. Stack with chef or catering.', href: '/in-villa-service/bartenders', cta: 'Explore mobile cocktail bar packages →' },
              { title: 'Cooking class Bali', desc: 'Private Balinese and Indonesian cooking lessons in your villa kitchen — contact for a quote. Sushi masterclass available too.', href: '/experiences/cooking-class', cta: 'Explore cooking class Bali →' },
            ].map((service) => (
              <div key={service.href} className="p-8 rounded-2xl border transition-all hover:shadow-lg" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--u-text-muted)' }}>{service.desc}</p>
                <Link to={service.href} className="text-sm font-semibold hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded" style={{ color: 'var(--u-accent)' }}>
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white" style={{ background: 'var(--u-accent)', color: '#fff' }}>
              Compare all private chef services in Bali <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRIVATE CHEF OR PERSONAL CHEF? — desktop/tablet; home spine keeps mobile shorter */}
      <section className="hidden md:block px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="u-label mb-4">The Difference</p>
          <h2 className="u-heading text-4xl md:text-5xl mb-6">Private Chef or Personal Chef?</h2>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--u-text-muted)' }}>
            A <strong style={{ color: 'var(--u-text)' }}>private chef</strong> cooks for one occasion or group at a time — a dinner, a BBQ, a wedding. A <strong style={{ color: 'var(--u-text)' }}>personal chef</strong> is the same craft on a recurring rhythm: daily meals, weekly prep, or a monthly arrangement for your household. We do both. Most guests start with a single dinner; many long-stay guests move to a{' '}
            <Link to="/private-chef-bali" className="font-semibold hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded" style={{ color: 'var(--u-accent)' }}>
              weekly or monthly arrangement
            </Link>.
          </p>
        </div>
      </section>

      {/* MEET THE CHEFS */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="u-label mb-4">The Team</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">Meet the Chefs</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              Every booking is cooked by our in-house team — matched to your cuisine and occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { name: 'Adriano', role: 'founder, fine-dining trained in Milan' },
              { name: 'I Made Surya', role: 'Mediterranean & handmade pasta' },
              { name: 'Bayu Pranata', role: 'BBQ & live-fire specialist' },
              { name: 'Ni Putu Asri', role: 'Balinese & Indonesian feasts' },
              { name: 'Wayan Suarjana', role: 'pastry, cakes & desserts' },
              { name: 'Ketut Mahardika', role: 'seafood & Japanese' },
              { name: 'Sari Dewi Kusuma', role: 'wellness & vegan retreat menus' },
              { name: 'Komang Artha', role: 'large events & weddings' },
            ].map((chef) => (
              <div key={chef.name} className="p-6 rounded-2xl border text-center" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <p className="font-semibold mb-1" style={{ color: 'var(--u-text)' }}>{chef.name}</p>
                <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>{chef.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/chefs" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-all hover:gap-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ color: 'var(--u-accent)' }}>
              Meet the full team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-misc-bali-about-team-photo.webp"
                alt="myCHEF hospitality team gathered for villa service across Bali"
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
                myCHEF.id was born when Adriano — trained under Michelin-level standards in {siteFacts.founderTrainingCity} — arrived in Bali and saw a gap.
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
                {['560+ events served', '12,000+ happy guests', 'Same-day confirmation', '50+ staff'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: 'var(--u-accent)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
              {/* Primary quote CTAs live after service portals and in the final section — avoid stacking identical WA buttons here. */}
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

      {/* WHY BOOK myCHEF */}
      <section className="cv-auto diff-section px-5 py-12 sm:px-6 md:py-24" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <p className="u-label mb-4">Why Book myCHEF</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">Why Book myCHEF</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              myCHEF was founded by Adriano, trained under a Michelin-starred chef in {siteFacts.founderTrainingCity}, after he saw the gap between Bali&apos;s world-class villas and the dining served inside them. Today we are a 50+ person Indonesian hospitality team — not a freelancer, not a marketplace.
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

      {/* PRIVATE CHEF SERVICE IN BALI — TRUST SECTION */}
      <section ref={trustRef} style={{ background: '#faf8f3' }} className="cv-auto py-0">
        <div
          className="grid grid-cols-1 items-center gap-0 lg:grid-cols-[0.9fr_1.1fr] min-h-0 lg:min-h-[calc(100vh-82px)]"
          style={{ padding: '48px 5vw 40px' }}
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
              className="mb-4 text-3xl leading-tight sm:mb-8 sm:text-5xl lg:text-6xl"
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
                  Leadership by Adriano, trained under Michelin-level standards in {siteFacts.founderTrainingCity}.
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
                  2-Hour Response
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#7d7470' }}
                >
                  Replacement within 2 hours or 100% refund guarantee.
                </p>
              </div>
            </div>

            {/* Trust Metrics */}
            <p
              className="text-sm uppercase tracking-[0.1em]"
              style={{ color: '#9d8d78' }}
            >
              Trusted island-wide for villa hosts who want published rates and a real backup plan.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative h-full lg:flex items-center justify-center hidden">
            <div
              className="relative w-full max-w-[500px]"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="/generated/mychef-misc-bali-hub-villa.webp"
                alt="Family enjoying a private chef dinner in a Bali villa by myCHEF"
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

      {/* Photo gallery */}
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

      {/* Single social-proof section (was dual: TestimonialBlock + review grid). Full set on /reviews. */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Guest Words</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">What Guests Say</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>Real guests. Real villas. Named reviews from stays across Seminyak, Canggu, Ubud and beyond.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 6).map((review, i) => (
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
            {[
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
            ].map((city) => (
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
            {[
              { name: 'Seminyak', slug: 'seminyak' },
              { name: 'Canggu', slug: 'canggu' },
              { name: 'Ubud', slug: 'ubud' },
              { name: 'Uluwatu', slug: 'uluwatu' },
              { name: 'Sanur', slug: 'sanur' },
              { name: 'Nusa Dua', slug: 'nusa-dua' },
              { name: 'Jimbaran', slug: 'jimbaran' },
              { name: 'Berawa', slug: 'berawa' },
              { name: 'Pererenan', slug: 'pererenan' },
              { name: 'Bukit Peninsula', slug: 'bukit' },
            ].map((city, idx, arr) => (
              <span key={city.slug}>
                <Link to={getLocationCanonical(city.slug)} className="hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
                  {city.name}
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

      {/* VILLA & AIRBNB OWNERS */}
      <section className="hidden md:block px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="u-label mb-4">Partnerships</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">For Villa & Airbnb Owners</h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Elevate your guests' experience by partnering with myCHEF. We work with 560+ private villas across Bali. We handle the dining. You deliver the experience.
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

      {/* BOOKING WITH CONFIDENCE */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="u-label mb-4">Guarantees</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">Booking With Confidence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Same-day confirmation', desc: 'Or your money back.' },
              { title: 'Chef replacement guarantee', desc: 'If your chef can\'t make it, we send a replacement within 2 hours or refund 100%.' },
              { title: 'Transparent terms', desc: '50% deposit to confirm, balance on the day; all prices quoted ++ (11% government tax + 10% service charge) with nothing hidden.' },
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

      {/* FAQ */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Questions</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">Frequently Asked</h2>
            <p className="mb-2" style={{ color: 'var(--u-text-muted)' }}>Still unsure? Message us on WhatsApp — we respond within 2 hours.</p>
          </div>
          {/* No in-accordion WA CTAs (ctaEvery omitted) — one end CTA is enough on an already conversion-heavy homepage. */}
          <FAQAccordion items={HOME_FAQS} defaultOpenCount={2} showToc={false} />
          <p className="mt-6 text-center text-sm" style={{ color: 'var(--u-text-muted)' }}>
            {FAQS.length - HOME_FAQS.length}+ more answers on the full FAQ.
          </p>
          <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteFacts.whatsappNumber}?text=${encodeURIComponent('Hi myCHEF, I have a question about private chef service in Bali.')}`}
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

      {/* BLOG POSTS */}
      <section className="px-5 py-12 sm:px-6 md:py-24 md:px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label mb-4">Blog & Guides</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-4">Expert Guides for Your Bali Event</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>
              From hiring your first private chef to planning a 150-guest wedding, our guides cover everything you need to know.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/blog/how-to-hire-private-chef-bali-complete-guide" className="group rounded-2xl border overflow-hidden hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
              <div className="h-48 bg-gradient-to-br from-[#C5A028]/20 to-[#C5A028]/5 flex items-center justify-center">
                <span className="text-[#C5A028] font-serif text-3xl">👨‍🍳</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors" style={{ color: 'var(--u-text)' }}>How to Hire a Private Chef in Bali</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--u-text-muted)' }}>A step-by-step guide to finding, vetting, and booking the right chef for your villa.</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--u-accent)' }}>Read More <ArrowRight className="w-3 h-3" /></span>
              </div>
            </Link>

            <Link to="/blog/wedding-private-chef-bali-planning-guide" className="group rounded-2xl border overflow-hidden hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
              <div className="h-48 bg-gradient-to-br from-[#C5A028]/20 to-[#C5A028]/5 flex items-center justify-center">
                <span className="text-[#C5A028] font-serif text-3xl">💍</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors" style={{ color: 'var(--u-text)' }}>Planning a Wedding with a Private Chef</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--u-text-muted)' }}>Coordinate your celebration menu, timeline, and service flow for the perfect villa wedding.</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--u-accent)' }}>Read More <ArrowRight className="w-3 h-3" /></span>
              </div>
            </Link>

            <Link to="/blog/corporate-events-catering-bali-team-dining" className="group rounded-2xl border overflow-hidden hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
              <div className="h-48 bg-gradient-to-br from-[#C5A028]/20 to-[#C5A028]/5 flex items-center justify-center">
                <span className="text-[#C5A028] font-serif text-3xl">👔</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors" style={{ color: 'var(--u-text)' }}>Corporate Events & Team Dining</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--u-text-muted)' }}>Run executive dinners and off-sites with military precision and memorable food.</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--u-accent)' }}>Read More <ArrowRight className="w-3 h-3" /></span>
              </div>
            </Link>

            </div>
          <div className="text-center mt-12">
            <Link to="/journal" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white" style={{ background: '#C5A028', color: '#1A1A1A' }}>
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
            Your Villa. Our Kitchen.<br />
            <span className="italic">One Message Away.</span>
          </h2>
          <p className="text-white/[70%] mb-10 max-w-xl mx-auto">
            Most inquiries are answered within 2 hours. No deposit required to start planning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={buildWhatsAppUrl({ serviceName: 'a private chef in Bali', intent: 'a quote within 2 hours' })} target="_blank" rel="noopener noreferrer" data-source="homepage-final-cta" className="inline-flex items-center gap-2 px-10 py-5 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Get Your Private Chef Quote within 2 Hours <span aria-hidden="true">→</span>
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
        serviceName="a private chef in Bali"
        intent="a quote within 2 hours"
      />
      <AvailabilitySheet
        open={availabilityOpen}
        onClose={() => setAvailabilityOpen(false)}
        pageSource="home"
      />
    </div>
  )
}
