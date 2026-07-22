import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Flame, Wine, Clock, Users, Star, Check, ChevronRight, MessageCircle, Phone, Sparkles, Truck, Heart, UtensilsCrossed, ShieldCheck, RefreshCw } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
const OrderPanel = lazy(() => import('@/components/OrderPanel'))
import BestPartnerBadge from '@/components/BestPartnerBadge'
import FAQAccordion from '@/components/catering/FAQAccordion'
import LocationChips from '@/components/LocationChips'
import SeoHead, { breadcrumbSchema, serviceSchema, offerSchema, faqPageSchema, howToSchema } from '@/components/SeoHead'
import { Button } from '@/components/ui/button'
import Breadcrumb from '@/components/shared/Breadcrumb'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { FineDiningRiskReversal } from '@/components/shared'
import { getPageMeta } from '@/data/page-meta'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { CLASSIC_MENUS, FAMILY_LABEL, formatIdr } from '@/data/menus'
import type { MenuFamily } from '@/data/menus'
import { MenuFilterTabs, MenuOverview } from '@/components/menus'

const MENU_FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'mixed-meats', label: 'Mixed Meats' },
  { value: 'single-meat', label: 'Single-Meat' },
]

const CLASSIC_MENU_FAMILIES: MenuFamily[] = ['vegetarian', 'seafood', 'mixed-meats', 'single-meat']

/** One summary row per Classic menu family, shown beside the booking form. */
const MENU_FAMILY_SUMMARY = CLASSIC_MENU_FAMILIES.map((family) => {
  const menus = CLASSIC_MENUS.filter((menu) => menu.family === family)
  return {
    family,
    count: menus.length,
    fromPrice: Math.min(...menus.map((menu) => menu.priceIdr)),
  }
})

const HOW_IT_WORKS = [
  { step: '01', title: 'Message Sofia on WhatsApp', desc: 'Share your date, villa location, and guest count. She replies within the hour.', icon: MessageCircle },
  { step: '02', title: 'Choose Your Menu', desc: 'Choose from 24 signature set menus. Add wine pairing. Dietary needs? We adjust everything.', icon: Wine },
  { step: '03', title: 'We Arrive & Transform', desc: 'Our team of 6–10 arrives 3 hours early. Table setting, kitchen prep, ambience — all handled.', icon: Truck },
  { step: '04', title: 'You Dine. We Disappear.', desc: 'Course after course, served at your villa. When you are done, we leave everything spotless.', icon: Sparkles },
]

const WHATS_INCLUDED = [
  'Michelin-trained executive chef',
  'Sous chef & kitchen team',
  'Professional service staff',
  'Sommelier wine pairing (optional)',
  'Fresh ingredients and select imports',
  'Table setting with linens & candles',
  'Full kitchen cleanup',
  'Dietary customization (no extra charge)',
]

const FAQS = [
  { question: 'What is the minimum number of guests?', answer: 'Six guests minimum. We can accommodate up to 24 for the full fine dining experience. For intimate two-guest romantic evenings, message Sofia to arrange.' },
  { question: 'Can I mix different menus for my group?', answer: 'Absolutely. Half your table can dine from one family, half from another — seafood for some, single-meat for others. Just let Sofia know when booking.' },
  { question: 'What does "++" mean in the price?', answer: '"++" means service charge (typically 10%) and government tax (11%) are added to the menu price. Set menus range from IDR 1,250,000 to IDR 3,600,000 per guest before tax and service. Wine pairing is additional at IDR 850K per guest.' },
  { question: 'How far in advance should I book?', answer: '7+ days is ideal. Peak season (July–August, December) books 2+ weeks ahead. We can sometimes accommodate 48-hour requests — message us and we will try.' },
  { question: 'Do you provide wine, or do I need to buy it?', answer: 'We bring the wine. The pairing is IDR 850K per guest and includes 4–5 glasses matched to each course.' },
  { question: 'What if someone has allergies or dietary restrictions?', answer: 'We adjust every course. Gluten-free, shellfish allergy, pregnancy-friendly, halal, vegan — just tell us. No extra charge.' },
  { question: 'Where do you cook? Do I need a big kitchen?', answer: 'We cook in your villa kitchen. We bring any specialized equipment. We have worked in everything from pool villas to estates.' },
  { question: 'What time do you arrive?', answer: 'Typically 3 hours before service for setup and prep. The tasting experience itself lasts 2.5–3 hours.' },
  { question: 'Why villa fine dining instead of a restaurant?', answer: 'Privacy, pacing, and control. No other tables. No noise. No rush. The chef cooks for you alone, and the evening moves at your speed. For groups of 6–24, the per-person cost is often comparable to a high-end restaurant once you factor in transport and wine markup.' },
  { question: 'Can I see the menu before booking?', answer: 'Yes. We send full menu details, wine pairings, and pricing before you commit. Sofia will walk you through each course.' },
  { question: 'What happens if I need to cancel?', answer: 'Full refund if cancelled 14+ days ahead. 50% refund 7–14 days. Within 7 days, we apply the deposit to a rescheduled date.' },
  { question: 'Is this a real Michelin-trained chef?', answer: 'Yes. Adriano, our executive chef, trained in Modena and Tokyo. He personally trains every chef on our team for 6+ months before they lead an evening.' },
  { question: 'What if I do not like the food?', answer: 'We have served 500+ villa dinners with zero complaints requiring refund. If something is not right, we fix it on the spot. Your satisfaction is the standard we cook to.' },
  { question: 'How do I pay?', answer: 'We accept bank transfer (IDR or USD), Wise, and credit card via secure link. A 50% deposit locks your date. Balance due 3 days before the evening.' },
  { question: 'Is my villa suitable?', answer: 'We have worked in pool villas, cliffside estates, and jungle retreats. As long as there is a kitchen and a dining area, we can make it work. We bring tableware, linens, and any equipment we need.' },
  { question: 'What about children?', answer: 'Children are welcome. We can prepare a simplified menu for younger guests at a reduced rate. Let us know ages and preferences when booking.' },
]

const TESTIMONIALS = [
  {
    name: 'James & Sarah',
    location: 'Seminyak clifftop villa',
    eventType: 'Anniversary Dinner',
    date: 'February 2026',
    quote: 'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.',
    rating: 5,
  },
  {
    name: 'The Harrisons',
    location: 'Ubud jungle estate',
    eventType: 'Private Celebration',
    date: 'January 2026',
    quote: 'Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    location: 'Uluwatu ocean villa',
    eventType: 'Executive Dinner',
    date: 'December 2025',
    quote: 'I have hosted client dinners at Michelin restaurants across Asia. This was better. The privacy, the pacing, the fact that the chef was cooking three meters from our table — my client still talks about it six months later.',
    rating: 5,
  },
]

const RELATED_SERVICES = [
  {
    title: 'Daily Villa Chef',
    desc: 'Breakfast, lunch, and dinner menus designed around your villa rhythm.',
    href: '/villa-chef',
  },
  {
    title: 'Event Catering',
    desc: 'Weddings, parties, and retreats with full staffing and service flow.',
    href: '/events',
  },
  {
    title: 'Villa Hospitality Services',
    desc: 'Butlers, bartenders, and service teams beyond the kitchen.',
    href: '/services',
  },
]

const THE_FOUR = [
  {
    name: 'I Made Surya',
    role: 'Pasta. Mediterranean lead.',
    origin: 'Ubud, Bali',
    image: '/generated/chef-made-surya-portrait-bw.webp',
    imageAlt: 'I Made Surya — pasta and Mediterranean lead chef at myCHEF private dining, Bali',
    bio: 'Born in a village outside Ubud, where his family ran a warung. He started as a kitchen hand at sixteen in a hotel in Seminyak, moved up to line cook, then to a small Italian restaurant in Canggu where he taught himself to make pasta. Adriano met him in 2021 — they were in the same kitchen for one service, covering for a mutual friend. Adriano watched him work for two hours and offered him an apprenticeship that night. Three months of the training were spent on pasta technique alone. His tagliatelle now travels with him to every Mediterranean evening, rolled in the villa where it will be eaten.',
  },
  {
    name: 'Bayu Pranata',
    role: 'Grill and protein. Wagyu lead.',
    origin: 'Yogyakarta, Java',
    image: '/generated/chef-bayu-pranata-portrait-bw.webp',
    imageAlt: 'Bayu Pranata — grill and Wagyu lead chef at myCHEF private dining, Bali',
    bio: 'Born in Yogyakarta. Trained in five-star hotel kitchens in Jakarta before moving to Bali in 2019 looking for less industrial work. He specialised in grilled proteins at a steakhouse in Seminyak, where his ribeye became quietly known among local chefs. Adriano heard about him in 2022, took a meeting, watched him cook a single steak, and hired him the same week. He brings the patience of a man who has been at fire since he was nineteen — and the discipline the Wagyu menu requires.',
  },
  {
    name: 'Rizky Saputra',
    role: 'Sauces and technique. Cross-menu.',
    origin: 'Padang, West Sumatra',
    image: '/generated/chef-rizky-saputra-portrait-bw.webp',
    imageAlt: 'Rizky Saputra — sauces and technique chef at myCHEF private dining, Bali',
    bio: 'Born in Padang, West Sumatra, into a family that has run restaurants for three generations. Minangkabau cooking is built on sauces that take a day — rendang reduced until the coconut milk has all but disappeared, gulai layered over hours, sambal pounded by hand. He grew up understanding that a sauce that takes ten minutes is not yet a sauce. He left Padang at twenty for Jakarta, then came to Bali in 2020 looking for a kitchen that would demand something different from him. He worked in two hotel kitchens before Adriano met him in 2023 at an industry tasting. The way he reduced a single sauce caught Adriano\'s eye — controlled, patient, almost reverent. Adriano hired him within a fortnight. He runs the sauce station on every evening, regardless of menu. The blue cheese sauce on the Wagyu ribeye and the lobster reduction for the tagliatelle are both his hands.',
  },
  {
    name: 'Ni Putu Asri',
    role: 'Pastry.',
    origin: 'North Bali',
    image: '/generated/chef-ni-putu-asri-portrait-bw.webp',
    imageAlt: 'Ni Putu Asri — pastry chef at myCHEF private dining, Bali',
    bio: 'Born in a village in north Bali. Trained at a culinary school in Denpasar, then worked in pastry at a high-end resort in Nusa Dua, where she grew frustrated by the industrial scale of it — sheet trays of identical cakes for the breakfast buffet, made by a kitchen of fifteen. Adriano met her in 2023 at a wedding she had been hired to bake for. The dessert was the best thing on the table. He found her two days later. She left the resort the following month and trained with Adriano for nine months — the longest training any of the four has done. The lady fingers in the tiramisu are baked the morning of the dinner. The Tenerina cake is hers.',
  },
]

const SIDEBAR_LINKS = [
  { id: 'private-chef-bali', label: 'Private Chef in Bali' },
  { id: 'romantic-dinner', label: 'Romantic Dinner' },
  { id: 'chefs-table', label: "Chef's Table" },
  { id: 'tasting-menu', label: 'Tasting Menu' },
  { id: 'our-menus', label: 'Our Menus' },
  { id: 'our-chefs', label: 'Our Chefs' },
]

export default function LunaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [orderOpen, setOrderOpen] = useState(false)
  const [orderExperience, setOrderExperience] = useState<string | undefined>(undefined)
  const [activeSection, setActiveSection] = useState<string>('')
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [menuFilter, setMenuFilter] = useState('all')

  const filteredMenus = menuFilter === 'all' ? CLASSIC_MENUS : CLASSIC_MENUS.filter((menu) => menu.family === menuFilter)

  const openOrder = (experience?: string) => {
    setOrderExperience(experience)
    setOrderOpen(true)
  }

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
        gsap.fromTo('.luna-reveal', { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.luna-content', start: 'top 75%', once: true },
        })
      }, heroRef)

      cleanup = () => ctx.revert()
    })()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  // IntersectionObserver for sidebar active state + visibility
  useEffect(() => {
    const sectionIds = SIDEBAR_LINKS.map((l) => l.id)
    const observers: IntersectionObserver[] = []

    // Visibility observer — show sidebar after scrolling past hero
    const hero = heroRef.current
    if (hero) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setSidebarVisible(!entry.isIntersecting)
        },
        { threshold: 0.05, rootMargin: '-80px 0px 0px 0px' }
      )
      heroObserver.observe(hero)
      observers.push(heroObserver)
    }

    // Active section observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })
    observers.push(sectionObserver)

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div ref={heroRef} data-universe="luna" className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Private Fine Dining Bali — 24 Set Menus | myCHEF.id"
        description="24 premium set menus for private villa dining in Bali. Vegetarian, seafood, mixed meats & single-meat. From IDR 1.25M per guest. Book your chef."
        canonical={getPageMeta('fine-dining').canonical}
        ogImage={getPageMeta('fine-dining').ogImage}
        jsonLd={[
          serviceSchema(
            'Private Chef Fine Dining Bali',
            '24 classic set menus served privately in your Bali villa — vegetarian, seafood, mixed meats, and single-meat. Michelin-trained chef, sommelier wine pairing, open-flame cooking.',
            'https://mychef.id/fine-dining',
            '$$$$'
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Fine Dining in Bali',
            description: 'Curated tasting menus, wine pairings, and luxury culinary experiences delivered to your Bali villa.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'myCHEF.id',
              url: 'https://mychef.id',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Bali, Indonesia',
            },
            serviceType: 'Private Chef Service',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '1250000',
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: '1250000',
                maxPrice: '3600000',
                priceCurrency: 'IDR',
              },
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'AggregateOffer',
            name: 'Classic Set Menus — 24 Signature Set Menus',
            lowPrice: '1250000',
            highPrice: '3600000',
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock',
            url: 'https://mychef.id/fine-dining',
            seller: { '@id': 'https://mychef.id/#business' },
          },
          offerSchema('Wine Pairing', 850000, 'IDR', 'https://mychef.id/fine-dining'),
          faqPageSchema(FAQS),
          howToSchema({
            name: 'How to Book a Private Fine Dining Experience in Bali',
            description: 'Four steps from the first WhatsApp message to the final course in your Bali villa.',
            steps: HOW_IT_WORKS.map((s) => ({ name: s.title, text: s.desc })),
          }),
          breadcrumbSchema('Fine Dining', 'https://mychef.id/fine-dining'),
        ]}
      />

      {/* Mobile chip row — horizontal scroll */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 lg:hidden px-4 transition-all duration-500 ${sidebarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.95), rgba(5,5,5,0.8))' }}
      >
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {SIDEBAR_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`flex-shrink-0 text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border transition-all duration-300 whitespace-nowrap min-h-[48px] lg:min-h-[36px] inline-flex items-center ${
                activeSection === link.id
                  ? 'text-[#C5A028] border-[#C5A028]/60 bg-[#C5A028]/10'
                  : 'text-white/[50%] border-white/10 hover:text-white/[70%] hover:border-white/20'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/*
        Hero — refined hotel booking aesthetic.
        Full-screen cinematic image, dark gradient overlay (not flat tint), tiny gold
        eyebrow, oversized serif headline, two CTAs: Order Now (opens the side panel)
        and Explore Menu (anchors to #our-menus). Generous spacing — no badges, no chips.
      */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-experience-bali-luna-hero-v4.webp"
            alt="Candlelit private fine-dining table set beside the pool of a luxury Bali villa at dusk, plated tasting menu with warm lanterns and tropical greenery"
            width={1408}
            height={768}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 pt-32 max-w-[1280px] mx-auto w-full">
          <Breadcrumb items={[{ label: 'Fine Dining' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p
            className="luna-hero-label text-[#C5A028] text-xs md:text-sm tracking-[0.35em] uppercase mb-7 font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Chapter 1 — Private Villa Fine Dining
          </p>
          <h1
            className="luna-hero-title mb-8 max-w-[920px] text-[2.55rem] leading-[1.04] text-white sm:text-[3.25rem] md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Private Fine Dining in Your Bali Villa
          </h1>
          <p className="luna-hero-sub mb-4 max-w-[640px] text-base leading-relaxed text-white/[85%] md:text-xl font-medium">
            24 classic set menus across four families — vegetarian, seafood, mixed meats, and single-meat — prepared by a Michelin-trained team. Served privately in your villa. Minimum 6 guests.
          </p>
          <p className="mb-12 max-w-[640px] text-base leading-relaxed text-[#C5A028] md:text-xl font-medium">
            From IDR 1,250,000++ per guest
          </p>
          <div className="luna-hero-cta mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              type="button"
              variant="primary"
              size="brand"
              className="w-full text-xs tracking-[0.25em] sm:w-auto md:text-sm"
              onClick={() => openOrder('Private Fine Dining')}
              data-source="luna-hero"
            >
              Reserve Your Evening — Quote in 1 Hour
            </Button>
            <Button asChild variant="secondary" size="brand" className="w-full text-xs tracking-[0.25em] sm:w-auto md:text-sm">
              <a href="#our-menus">Explore Menus</a>
            </Button>
          </div>
          <p className="mb-10 text-xs uppercase tracking-[0.18em] text-white/[55%]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Weekends fill fast — book early
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: Star, label: '500+ villa dinners served' },
              { icon: Users, label: '6–24 guests' },
              { icon: UtensilsCrossed, label: 'Vegetarian · Seafood · Mixed Meats · Single-Meat' },
              { icon: Wine, label: 'Wine pairing +IDR 850K' },
              { icon: Clock, label: '2.5–3 hour journey' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/[60%]">
                <badge.icon className="w-4 h-4 text-[#C5A028]" strokeWidth={1.5} />
                <span className="text-xs tracking-wider uppercase">{badge.label}</span>
              </div>
            ))}
          </div>
          {/* Risk Reversal — Fine Dining guarantees */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: ShieldCheck, label: 'Same-day confirmation or your money back' },
              { icon: RefreshCw, label: 'Chef can\'t make it? Replacement within 2h or 100% refund' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/[60%]">
                <badge.icon className="w-4 h-4 text-[#C5A028]" strokeWidth={1.5} />
                <span className="text-xs tracking-wider uppercase">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip dark />

      {/* ── Six Experiences Navigation ──────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6" style={{ background: '#111111' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Fine Dining Experiences</p>
            <h2 className="text-2xl md:text-3xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Choose Your Evening</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { href: '/fine-dining/private-chef-bali', label: 'Private Chef in Bali', sub: 'From IDR 1,250,000++', icon: '🍽' },
              { href: '/fine-dining/tasting-menu', label: 'Tasting Menu', sub: '5 or 7 courses', icon: '🌿' },
              { href: '/fine-dining/romantic-dinner', label: 'Romantic Dinner', sub: 'Couples & anniversaries', icon: '🕯' },
              { href: '/fine-dining/chefs-table', label: "Chef's Table", sub: 'IDR 3,500,000++ · 6 seats', icon: '👨‍🍳' },
              { href: '/fine-dining/menus', label: 'Our Menus', sub: '24 Signature Set Menus', icon: '📋' },
              { href: '/fine-dining/our-chefs', label: 'Our Chefs', sub: 'Adriano & the team', icon: '⭐' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group flex flex-col gap-2 rounded-xl border border-white/10 px-5 py-4 hover:border-[#C5A028]/60 hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white font-medium text-sm leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</span>
                <span className="text-white/[40%] text-xs">{item.sub}</span>
                <span className="text-[#C5A028] text-xs mt-auto opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Private Chef in Bali — SEO Section */}
      <section id="private-chef-bali" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Private Chef in Bali</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>A Michelin-Trained Chef in Your Villa</h2>
              <div className="w-12 h-[2px] bg-[#C5A028] mb-8" />
              <p className="text-white/[70%] mb-6 leading-relaxed">
                When you hire a private chef in Bali, you are not ordering dinner. You are commissioning an evening. Our executive chef Adriano — trained in Modena and Tokyo — leads a team of four Indonesian chefs he has personally trained for 6 to 12 months each. They arrive at your villa three hours before service, transform your kitchen into a fine dining station, and serve a multi-course tasting menu at your table.
              </p>
              <p className="text-white/[70%] mb-6 leading-relaxed">
                Every ingredient is sourced that morning. The pasta is rolled in your kitchen. The Wagyu is flame-grilled in front of your guests. The wine is paired course by course. And when the evening ends, the team leaves your villa spotless — as if they were never there.
              </p>
              <p className="text-white/[50%] text-sm leading-relaxed">
                This is not a catering service. This is a private restaurant built inside your villa for one night only. Available across Bali: Seminyak, Canggu, Uluwatu, Ubud, Sanur, and Nusa Dua.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-3.webp"
                alt="Private chef preparing a fine dining course in a Bali villa kitchen"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="built-for" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F5F3EF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Built For</p>
            <h2 className="text-4xl md:text-5xl mb-3 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>Who Villa Fine Dining Is For</h2>
            <p className="text-[#1A1A1A]/60 max-w-2xl mx-auto">If you want more than a restaurant reservation — a private evening designed around you — this is it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Anniversaries', desc: 'Milestone dinners where the setting matters as much as the food. Private, uninterrupted, yours.' },
              { title: 'Proposals', desc: 'The question and the answer, over courses. We coordinate timing, pacing, and the moment.' },
              { title: 'Executive Dinners', desc: 'Impress clients or celebrate closes. No restaurant noise, no competing tables, full control.' },
              { title: 'Special Occasions', desc: 'Birthdays, reunions, farewells. A long table, your people, no closing time.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl mb-3 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge match CTA + internal links */}
      <section className="py-16 md:py-20 px-6" style={{ background: '#F5F3EF' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Not Sure What You Need?</p>
          <h3 className="text-2xl md:text-3xl mb-4 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>We Will Match the Right Experience to Your Evening</h3>
          <p className="text-[#1A1A1A]/60 max-w-xl mx-auto mb-6">
            Tell us your dates, guest count, and villa. We will recommend the perfect menu, wine pairing, and service style — and reply within the hour with a clear quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20reserve%20a%20fine%20dining%20evening%20in%20Bali." target="_blank" rel="noopener noreferrer" data-source="luna-not-sure-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get Your Fine Dining Quote in 1 Hour
            </a>
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E6E3] text-[#1A1A1A] text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white transition-all">
              Get a Structured Quote
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#1A1A1A]/60">
            <Link to="/recommended-services" className="underline-offset-4 hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Not sure? Let us recommend →
            </Link>
            <Link to="/fine-dining" className="underline-offset-4 hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore all experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Risk Reversal — Fine Dining guarantees */}
      <FineDiningRiskReversal dark className="border-y border-white/10" />

      {/* Experience Intro — Chapter Four */}
      <section id="experience" className="luna-content py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F5F3EF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="luna-reveal">
              <img
                src="/generated/mychef-experience-bali-luna-collage.webp"
                alt="Michelin-trained chef preparing a Mediterranean tasting menu in a private Bali villa kitchen"
                width={800}
                height={600}
                className="rounded-2xl w-full aspect-[4/3] object-cover"
                loading="lazy"
                decoding="async" />
            </div>
            <div className="luna-reveal">
              <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Experience</p>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>One Night.<br />Twenty-Four Journeys.</h2>
              <div className="w-12 h-[2px] bg-[#C5A028] mb-8" />
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                We arrive as a team of white-clad professionals. We transform your villa garden or a Balinese village courtyard into an open-air Michelin-inspired dining room.
              </p>
              <p className="text-[#1A1A1A]/70 mb-8 leading-relaxed">
                Every course is prepared in front of your guests. Every wine is paired. Every detail — from the hand-pressed linen to the gold-rimmed plates — is considered. Choose from 24 signature set menus across four families.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Flame, label: 'Open-Flame Cooking' },
                  { icon: Wine, label: 'Sommelier Pairing' },
                  { icon: Clock, label: '2.5–3 Hour Journey' },
                  { icon: Users, label: '6–24 Guests' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#C5A028]" />
                    <span className="text-sm text-[#1A1A1A]/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Table — SEO Section */}
      <section id="chefs-table" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Chef's Table</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Chef's Table</h2>
              <div className="w-12 h-[2px] bg-[#C5A028] mb-8" />
              <p className="text-white/[70%] mb-6 leading-relaxed">
                The Chef's Table is our most intimate fine dining experience. Limited to exactly 6 guests, your chef prepares each course at your table — explaining techniques, sharing stories, and answering questions. This is not just dinner; it is a masterclass in flavour.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Format', value: 'Interactive cooking experience at your table' },
                  { label: 'Cuisine', value: 'Italian, French, Mediterranean, or Wagyu-themed evening' },
                  { label: 'Guests', value: 'Exactly 6 seats (no more, no fewer)' },
                  { label: 'Duration', value: '3–3.5 hours' },
                  { label: 'Service level', value: 'Always Full-Service (complete table setting, all equipment brought)' },
                  { label: 'Price', value: 'IDR 3,500,000++ per person' },
                  { label: 'Includes', value: 'All courses, ingredients, tableware, service, cleanup' },
                  { label: 'Wine pairing', value: '+IDR 850,000 per guest' },
                  { label: 'Minimum', value: 'Exactly 6 guests' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 text-sm">
                    <span className="text-[#C5A028] text-xs tracking-[0.15em] uppercase w-28 flex-shrink-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.label}</span>
                    <span className="text-white/[70%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-2.webp"
                alt="Chef cooking at an open kitchen station during a private villa dinner"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Tasting Menu — SEO Section */}
      <section id="tasting-menu" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Tasting Menu</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>The Tasting Menu Journey</h2>
            <p className="text-white/[50%] max-w-2xl mx-auto">5 or 7 courses. Your choice from 24 classic set menus across four families.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-white/[60%] leading-relaxed">
              A tasting menu is not just dinner — it is a journey. Each course is designed to build on the last, with wine pairings that elevate every bite. Your chef explains each dish as it arrives, transforming your villa into a private chef&apos;s table.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-12">
            {/* 5-Course Journey */}
            <div className="p-6 md:p-8 rounded-2xl border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <span className="text-[#C5A028]/60 text-sm tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5-Course Journey</span>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>The Essential Experience</h3>
              <p className="text-white/[50%] text-sm leading-relaxed mb-6">Amuse-bouche, starter, fish, main, dessert</p>
              <div className="space-y-2 text-sm text-white/[70%]">
                <p><span className="text-white/[50%]">Kitchen-Service:</span> <span className="text-[#C5A028]">IDR 1,250,000++</span></p>
                <p><span className="text-white/[50%]">Full-Service:</span> <span className="text-[#C5A028]">IDR 2,200,000++</span></p>
              </div>
            </div>
            {/* 7-Course Journey */}
            <div className="p-6 md:p-8 rounded-2xl border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <span className="text-[#C5A028]/60 text-sm tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>7-Course Journey</span>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>The Complete Journey</h3>
              <p className="text-white/[50%] text-sm leading-relaxed mb-6">Amuse-bouche, starter, two intermediate courses, fish, main, cheese, dessert</p>
              <div className="space-y-2 text-sm text-white/[70%]">
                <p><span className="text-white/[50%]">Kitchen-Service:</span> <span className="text-[#C5A028]">IDR 2,200,000++</span></p>
                <p><span className="text-white/[50%]">Full-Service:</span> <span className="text-[#C5A028]">IDR 2,600,000++</span></p>
              </div>
            </div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-white/[50%] text-sm">Wine pairing: <span className="text-[#C5A028]">+IDR 850,000 per guest</span></p>
            <p className="text-white/[50%] text-sm">Minimum: <span className="text-white/[70%]">6 guests</span></p>
          </div>
        </div>
      </section>

      {/* Fine Dining Overview */}
      <section id="fine-dining-overview" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Fine Dining Overview</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>A Private Restaurant, Built Inside Your Villa for One Night</h2>
              <div className="w-12 h-[2px] bg-[#C5A028] mb-8" />
              <p className="text-white/[70%] mb-6 leading-relaxed">
                This is not a catering service. This is not a restaurant reservation. This is a private restaurant built inside your villa for one evening only — and every detail is designed around your group.
              </p>
              <p className="text-white/[70%] mb-6 leading-relaxed">
                Your chef arrives with fresh ingredients, prepares a multi-course tasting menu in your kitchen, serves each course at your table, and leaves your kitchen spotless. The only people in the room are your guests. The only schedule is your own.
              </p>
              <p className="text-white/[50%] text-sm leading-relaxed">
                Available across Bali: Seminyak, Canggu, Uluwatu, Ubud, Sanur, Nusa Dua, and beyond. Minimum 6 guests. Romantic dinner for 2 available by special arrangement.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-3.webp"
                alt="Chef garnishing a fine dining course before service in a Bali villa kitchen"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Experience — Two-Tier Display */}
      <section id="choose-experience" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Experience Level</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Choose Your Experience</h2>
            <p className="text-white/[50%]">Same chef. Same ingredients. Two ways to enjoy.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 — Full-Service */}
            <div className="luna-reveal rounded-2xl border border-white/10 p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>We Bring Everything</h3>
                <span className="text-[#C5A028] text-base md:text-lg whitespace-nowrap" style={{ fontFamily: "'Cormorant Garamond', serif" }}>From IDR 2,200,000++</span>
              </div>
              <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The complete luxury experience</p>
              <p className="text-white/[65%] leading-relaxed mb-8">
                We arrive with premium plates, crystal glassware, designer cutlery, and fresh linen. Your table is dressed to restaurant standard before the first guest sits down. A dedicated server handles every pour and every course. We bring our own equipment. We pack everything away when the evening ends. You simply arrive and enjoy.
              </p>
              <div className="mb-8">
                <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What&apos;s included</p>
                <div className="space-y-3">
                  {[
                    'Premium plates, glassware & cutlery',
                    'Full table setting & decoration',
                    'Chef + dedicated service staff',
                    'All cooking equipment',
                    'Complete setup and cleanup',
                    'Restaurant-standard presentation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                      <span className="text-sm text-white/[80%]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-white/[60%] uppercase tracking-wider mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Best for</p>
                <p className="text-sm text-white/[70%]">Villas without full kitchen setups, milestone celebrations, maximum impact evenings</p>
              </div>
            </div>

            {/* Card 2 — Kitchen-Service */}
            <div className="luna-reveal rounded-2xl border border-white/10 p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>We Use Your Villa&apos;s Kitchen</h3>
                <span className="text-[#C5A028] text-base md:text-lg whitespace-nowrap" style={{ fontFamily: "'Cormorant Garamond', serif" }}>From IDR 1,250,000++</span>
              </div>
              <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Same chef, same food, exceptional value</p>
              <p className="text-white/[65%] leading-relaxed mb-8">
                The same Michelin-trained chef. The same ingredients, techniques, and recipes. The difference? We use your villa&apos;s plates, glassware, and kitchen. The evening feels more intimate — like having a world-class chef cook in your own home. Cleanup is included, and your kitchen is left exactly as we found it.
              </p>
              <div className="mb-8">
                <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What&apos;s included</p>
                <div className="space-y-3">
                  {[
                    'Michelin-trained private chef',
                    'All ingredients (premium, fresh)',
                    'Multi-course tasting menu',
                    'Service using your villa&apos;s tableware',
                    'Kitchen cleanup',
                    'Personal, intimate atmosphere',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                      <span className="text-sm text-white/[80%]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-white/[60%] uppercase tracking-wider mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Best for</p>
                <p className="text-sm text-white/[70%]">Well-equipped villas, casual elegance, repeat guests, smart pricing</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-white/[50%] text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Both experiences include the same chef, same ingredients, and same menu quality. The difference is presentation and tableware only.
            </p>
          </div>
        </div>
      </section>

      {/* Menus */}
      <section id="our-menus" className="py-24 md:py-32 px-6 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Our Menus</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>24 Signature Set Menus. One Extraordinary Evening.</h2>
            <p className="text-white/[50%]">Every course is prepared in your villa. Every menu is tailored to your guests.</p>
          </div>
          <div className="mb-12 flex justify-center">
            <MenuFilterTabs options={MENU_FILTER_OPTIONS} active={menuFilter} onChange={setMenuFilter} />
          </div>
          <MenuOverview menus={filteredMenus} grouped={menuFilter === 'all'} dataSource="luna-menus" />
          {/* Custom / Bespoke Menu callout */}
          <div className="mt-8 flex flex-col items-center rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center md:p-10">
            <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Custom / Bespoke Menu</p>
            <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Your menu, designed from scratch.</h3>
            <p className="text-white/[65%] max-w-xl mb-8 leading-relaxed">
              Our chefs craft a fully bespoke experience around your tastes — any cuisine, any dietary requirement, any theme that means something to you.
            </p>
            <Link
              to="/quote"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#C5A028] px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-colors hover:bg-[#d0ab33] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Plan Your Bespoke Menu
            </Link>
          </div>
          {/* Explore More Menu Collections — sibling cross-links */}
          <div className="mt-12 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More Menu Collections</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Three-Course from IDR 850K', href: '/three-course' },
                { label: 'BBQ Grill from IDR 950K', href: '/bbq-grill' },
                { label: "Kids' from IDR 250K/child", href: '/kids-menus' },
                { label: 'Browse all 50 menus', href: '/dining-styles' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm text-white/[75%] transition-all hover:border-[#C5A028]/60 hover:bg-[#C5A028]/10 hover:text-[#C5A028]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Menu closing line */}
          <div className="mt-12 text-center">
            <p className="text-[#C5A028]/70 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Custom menus, dietary adjustments, and private evening formats arranged on request.
            </p>
            <p className="text-white/[30%] text-xs mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              All prices subject to government tax and service.
            </p>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA: After menus */}
      <section className="py-16 md:py-20 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ready to Book?</p>
          <h3 className="text-2xl md:text-3xl mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Your Evening, Your Menu, Your Villa</h3>
          <p className="text-white/[60%] max-w-xl mx-auto mb-6">
            Choose from 24 signature set menus. Add wine pairing. Dietary needs? We adjust everything. Sofia replies within the hour with availability and a clear quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20reserve%20a%20fine%20dining%20evening%20in%20Bali." target="_blank" rel="noopener noreferrer" data-source="luna-menus-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get Your Fine Dining Quote in 1 Hour
            </a>
            <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              Prefer Email?
            </a>
          </div>
        </div>
      </section>

      {/* How It Works — Cinematic Luxury */}
      <section id="how-it-works" className="relative py-32 md:py-40 px-6 overflow-hidden scroll-mt-24">
        {/* Cinematic background layers */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(139,69,19,0.06) 0%, transparent 50%), #0A0A0A' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,8,8,0) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0) 100%)' }} />

        <div className="relative z-10 max-w-[1280px] mx-auto">
          {/* Header — asymmetrical, large */}
          <div className="mb-20 md:mb-28">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#C5A028]/60" />
              <p className="text-[#C5A028] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Process</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
                How It<br /><span className="italic">Works</span>
              </h2>
              <p className="text-white/[60%] text-sm md:text-base leading-relaxed max-w-md lg:ml-auto lg:text-right">
                Four deliberate steps from first message to final course. Each handled with the precision of a Michelin kitchen.
              </p>
            </div>
            <div className="mt-8 w-full h-[1px] bg-white/10" />
          </div>

          {/* Steps — asymmetrical grid with glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 mb-16">
            {HOW_IT_WORKS.map((item, i) => (
              <div
                key={item.step}
                className="group relative"
                style={{ marginTop: i % 2 === 1 ? '2rem' : '0' }}
              >
                {/* Card with glassmorphism */}
                <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 hover:border-[#C5A028]/20 hover:bg-white/[0.04] hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.15)]">
                  {/* Step number — framed, prominent */}
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className="relative w-16 h-16 rounded-2xl border-2 border-white/[0.12] bg-[#0a0a0a] flex items-center justify-center transition-all duration-500 group-hover:border-[#C5A028]/60 group-hover:shadow-[0_0_24px_-4px_rgba(212,175,55,0.25)] group-hover:scale-110">
                      <span className="text-2xl font-semibold text-white/[80%] transition-colors duration-500 group-hover:text-[#C5A028]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Icon — glassmorphism circle with gold glow on hover */}
                  <div className="relative mb-8 mt-4">
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:border-[#C5A028]/30 group-hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.25)] group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-[#C5A028]/80 transition-all duration-500 group-hover:text-[#C5A028]" strokeWidth={1} />
                    </div>
                    {/* Subtle glow ring on hover */}
                    <div className="absolute inset-0 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: '0 0 40px 8px rgba(212,175,55,0.15)' }} />
                  </div>

                  {/* Title — larger, elegant */}
                  <h3 className="text-xl md:text-lg lg:text-xl text-white mb-3 leading-snug transition-colors duration-500 group-hover:text-[#C5A028]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>

                  {/* Description — smaller, lighter, almost disappearing */}
                  <p className="text-xs text-white/[60%] leading-relaxed transition-colors duration-500 group-hover:text-white/[50%]">
                    {item.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 w-8 h-[1px] bg-white/10 transition-all duration-700 group-hover:w-16 group-hover:bg-[#C5A028]/40" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA — centered with ornament */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-[1px] bg-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028]/40" />
              <div className="w-16 h-[1px] bg-white/10" />
            </div>
            <Button asChild variant="secondary" size="brand" className="text-sm tracking-[0.2em] hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)]">
              <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="luna-howitworks-cta">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                Get Your Quote in 1 Hour
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Four — Our Chefs */}
      <section id="our-chefs" className="py-16 md:py-24 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Our Chefs</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The <span className="italic">Four</span></h2>
            <p className="text-xl md:text-2xl text-white/[60%] italic max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Trained by Adriano. One of them is in your kitchen tonight.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-white/[50%] leading-relaxed mb-6">
              Adriano did not build a team. He built a lineage.
            </p>
            <p className="text-white/[50%] leading-relaxed mb-6">
              He arrived in Bali in 2019 with the standards of Modena and Tokyo in his hands. He chose not to import a kitchen from Europe. He chose instead to find local talent and teach them everything he knew.
            </p>
            <p className="text-white/[50%] leading-relaxed mb-6">
              Four chefs, over five years. Each found in Indonesia. Each chosen on his terms. Each trained by him personally — six months beside him before they cook a single plate for a paying guest, another year beside him before they lead an evening alone. Every sauce, every pour, every minute of pacing tested and corrected until it is right.
            </p>
            <p className="text-white/[50%] leading-relaxed mb-6">
              He found them across three islands and three culinary traditions — Bali, Java, and Sumatra. What they share is the kitchen they were trained in.
            </p>
            <p className="text-white/[50%] leading-relaxed mb-6">
              The result is something neither Italian nor Indonesian, and at the same time both. It is what happens when a master from one tradition trains his hands in another country, and the country leaves its mark on the cooking.
            </p>
            <p className="text-white/[70%] leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
              These are the four.
            </p>
            <p className="text-white/[50%] leading-relaxed mt-6">
              Each chef specialises in different cuisines and techniques. I Made leads our vegetarian and seafood menus. Bayu leads the single-meat and mixed-meat menus at the grill. Rizky handles sauces across every menu. Ni Putu creates the desserts that close every evening. One of the four will be in your kitchen — which one depends on your menu, your date, and what arrived on the morning boat.
            </p>
          </div>

          {/*
            Chef portraits + bios. Editorial magazine framing — the image is the
            full top half of the card, framed not cropped. Generous aspect-[4/5]
            (slightly taller than wide), object-position center-top so the chef
            hat is always visible, no max-height cap.
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16 max-w-[1080px] mx-auto">
            {THE_FOUR.map((chef) => (
              <div
                key={chef.name}
                className="group flex flex-col"
              >
                {/* Portrait — magazine framing, full hat + shoulders visible */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                  <img
                    src={chef.image}
                    alt={chef.imageAlt}
                    width={768}
                    height={1152}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                </div>

                {/* Bio card */}
                <div className="p-5 md:p-7 rounded-b-2xl border border-t-0 border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{chef.name}</h3>
                    <span className="text-[10px] text-white/[60%] tracking-wider uppercase">{chef.origin}</span>
                  </div>
                  <p className="text-[#C5A028] text-[10px] tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{chef.role}</p>
                  <p className="text-white/[50%] text-xs leading-relaxed line-clamp-4">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div className="text-center">
            <p className="text-[#C5A028]/80 text-sm md:text-base italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              One of the four will be in your kitchen on the night.
            </p>
            <p className="text-white/[30%] text-xs mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Which one depends on the menu, the date, and what arrived on the morning boat.
            </p>
          </div>

          {/* Best Partner diploma — premium credential */}
          <div className="mt-16 flex justify-center">
            <BestPartnerBadge variant="light" width={300} />
          </div>
        </div>
      </section>

      {/* Romantic Dinner — repositioned after Our Chefs */}
      <section id="romantic-dinner" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F5F3EF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-4.webp"
                alt="Romantic candlelit dinner for two at a private Bali villa"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Romantic Dinner</p>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>An Evening for Two</h2>
              <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>By special arrangement</p>
              <div className="w-12 h-[2px] bg-[#C5A028] mb-8" />
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                A romantic dinner in Bali should not mean fighting for a table at a crowded restaurant. It should mean your own villa, your own chef, and an evening that moves at your pace. We design intimate dinners for couples who want privacy without compromise — the same Michelin-trained team, the same ingredients, the same attention to detail, scaled to an evening for two.
              </p>
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                The table is set with candles and crystal. The courses arrive unhurried. The wine is paired to your preference. And the only other voices in the room are the ones you choose to hear. Whether it is a proposal, an anniversary, or simply a night that deserves to be remembered, we build the evening around you.
              </p>
              <div className="rounded-2xl border border-[#C5A028]/25 bg-[#C5A028]/5 p-5 mb-6">
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong>Important:</strong> Our standard fine dining menus require a minimum of 6 guests. The Romantic Dinner is available as a special arrangement for couples who prefer an intimate two-person experience.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Pricing</p>
                <div className="space-y-2 text-sm text-[#1A1A1A]/70">
                  <p><span className="text-[#1A1A1A]/50">Kitchen-Service:</span> <span className="text-[#1A1A1A] font-medium">IDR 2,800,000++ per couple</span></p>
                  <p><span className="text-[#1A1A1A]/50">Full-Service:</span> <span className="text-[#1A1A1A] font-medium">IDR 3,500,000++ per couple</span></p>
                  <p><span className="text-[#1A1A1A]/50">Wine pairing:</span> <span className="text-[#1A1A1A] font-medium">+IDR 850,000 per person</span></p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What&apos;s included</p>
                <div className="space-y-2">
                  {[
                    'Private chef for the evening',
                    'Multi-course tasting menu (5 courses)',
                    'Table setting and decoration',
                    'Full service and cleanup',
                    'Personalised menu consultation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                      <span className="text-sm text-[#1A1A1A]/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Guarantees</p>
                <div className="space-y-2 text-sm text-[#1A1A1A]/70">
                  <p><strong className="text-[#1A1A1A]/80">Satisfaction guarantee:</strong> Not satisfied? We refund 50% — no questions asked</p>
                  <p><strong className="text-[#1A1A1A]/80">48-hour cancellation policy:</strong> Full refund if you cancel 48+ hours before</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#1A1A1A]/60 text-sm">
                <Heart className="w-4 h-4 text-[#C5A028]" />
                <span>To arrange: Contact us via WhatsApp to discuss your evening. We recommend booking at least 7 days in advance.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section id="captured" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Evening</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How It Looks</h2>
            <p className="text-white/[50%]">Candlelight. Crystal. White-clad professionals. Your villa, transformed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-1.webp"
                alt="Sommelier pouring wine during a private fine dining dinner in a Bali villa"
                width={800}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                fetchPriority="low" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-2.webp"
                alt="Chef flambéing a course at an open kitchen station during a villa dinner"
                width={800}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                fetchPriority="low" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-3.webp"
                alt="Private chef plating a course with guests watching at a Bali villa dinner"
                width={800}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                fetchPriority="low" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-4.webp"
                alt="Group of guests dining at sunset during a private villa event in Bali"
                width={800}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                fetchPriority="low" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything Included</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <p className="text-white/[50%]">No hidden fees. No surprises. One price, one extraordinary evening.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-white/10">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0" />
                <span className="text-sm text-white/[80%]">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="whatsapp" size="brand">
              <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="luna-included-cta">
                <Phone className="w-4 h-4" />
                Reserve Your Evening — Reply in 1 Hour
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials — headline is baked into the cinematic background image */}
      <section id="testimonials" className="relative px-6 py-0 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        {/* Full-bleed editorial header image (eyebrow + h2 are part of the artwork) */}
        <div className="relative w-full h-[60vh] min-h-[420px] max-h-[760px] overflow-hidden">
          <img
            src="/generated/mychef-ui-bali-testimonials-bg.webp"
            alt="Private chef serving guests at a candlelit villa dinner — words from guests"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async" />
          {/* Soft fade into the section below so testimonial cards don't sit on hard edge */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0A0A0A 100%)' }}
          />
        </div>

        <TestimonialBlock
          title="Guest Words"
          subtitle="Anniversaries, executive dinners and private celebrations — this is what guests remember after the last course."
          testimonials={TESTIMONIALS}
        />
      </section>

      {/* Location & Guide Links */}
      <section className="py-16 md:py-20 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Fine Dining by Location</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Link to="/locations/ubud" className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-[#C5A028]/50 hover:bg-white/[0.06] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <p className="text-[#C5A028] text-xs uppercase tracking-wider mb-1">Ubud</p>
              <p className="text-white text-sm font-medium group-hover:text-[#C5A028] transition-colors">Ubud jungle villa fine dining</p>
            </Link>
            <Link to="/locations/seminyak" className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-[#C5A028]/50 hover:bg-white/[0.06] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <p className="text-[#C5A028] text-xs uppercase tracking-wider mb-1">Seminyak</p>
              <p className="text-white text-sm font-medium group-hover:text-[#C5A028] transition-colors">Seminyak beachfront fine dining</p>
            </Link>
            <Link to="/locations/uluwatu" className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-[#C5A028]/50 hover:bg-white/[0.06] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <p className="text-[#C5A028] text-xs uppercase tracking-wider mb-1">Uluwatu</p>
              <p className="text-white text-sm font-medium group-hover:text-[#C5A028] transition-colors">Uluwatu cliffside dining</p>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/fine-dining-guide" className="text-[#C5A028] hover:underline font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Read our complete guide to fine dining in Bali →
            </Link>
            <span className="text-white/20">·</span>
            <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              See fine dining pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 px-6 scroll-mt-24">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
            <p className="text-white/[50%]">Still have questions? Message Sofia on WhatsApp — she responds within the hour.</p>
          </div>
          <FAQAccordion
            items={FAQS.map((f) => ({ q: f.question, a: f.answer }))}
            defaultOpenCount={4}
            dark
          />
          <div className="text-center mt-12">
            <p className="text-white/[50%] text-sm mb-4">Peak season books 2+ weeks ahead. Message Sofia to check availability.</p>
            <Button asChild variant="whatsapp" size="brand">
              <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="luna-faq-cta">
                <MessageCircle className="w-4 h-4" />
                Reserve Your Evening — Reply in 1 Hour
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Reserve</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Book Your<br />Extraordinary Evening</h2>
              <div className="w-12 h-[2px] bg-[#C5A028] mb-8" />
              <p className="text-white/[60%] mb-8 leading-relaxed">
                Sofia, our fine dining concierge, will confirm your date and menu within the hour. We recommend booking 7+ days in advance for peak season.
              </p>
              <div className="space-y-4 mb-8">
                {MENU_FAMILY_SUMMARY.map((item) => (
                  <div key={item.family} className="flex items-center justify-between py-4 border-b border-white/10">
                    <div>
                      <p className="text-white/[80%] font-medium">{FAMILY_LABEL[item.family]}</p>
                      <p className="text-sm text-white/[60%]">{item.count} set menus · 2.5–3 hour journey</p>
                    </div>
                    <span className="text-[#C5A028] font-medium">From {formatIdr(item.fromPrice)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A028]" /><span className="text-sm text-white/[80%]">Wine pairing available — IDR 850K per guest</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A028]" /><span className="text-sm text-white/[80%]">Minimum 6 guests</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A028]" /><span className="text-sm text-white/[80%]">++ adds service charge + government tax (see FAQ)</span></div>
              </div>
              <Button asChild variant="whatsapp" size="brand">
                <a href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20fine%20dining%20experience." target="_blank" rel="noopener noreferrer" data-source="luna-fine-dining-cta">
                  <Phone className="w-4 h-4" />
                  Reserve My Private Dinner
                </a>
              </Button>
              <p className="text-sm text-white/[55%] mt-3">
                No booking fee · Menu tweaks welcome · Replies within 1 hour
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C5A028] mb-3">Read our guides</p>
                <Link to="/journal" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                  Visit the myCHEF Journal <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-white/10">
              <BookingForm universe="luna" compact />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section id="related" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#111111' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Complete Your Stay</p>
            <h2 className="text-4xl md:text-5xl mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
            <p className="text-white/[55%] max-w-2xl mx-auto">From daily chef service to event teams, we cover the full villa hospitality stack.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_SERVICES.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-[#C5A028]/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-white/[60%] leading-relaxed mb-6">{item.desc}</p>
                <span className="text-[#C5A028] text-xs uppercase tracking-[0.25em]">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-20 md:py-24 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Table Is Waiting</p>
          <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>An Evening Designed Around You</h2>
          <p className="text-white/[60%] mb-8">Private villa fine dining, tailored to your guests, your timing, your taste. We respond within 2 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="whatsapp" size="brand">
              <a href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20reserve%20a%20fine%20dining%20evening%20in%20Bali." target="_blank" rel="noopener noreferrer" data-source="luna-final-cta">
                <Phone className="w-4 h-4" />
                Get Your Fine Dining Quote in 1 Hour
              </a>
            </Button>
            <Button asChild variant="secondary" size="brand">
              <a href="mailto:bali@mychef.id">Prefer Email? bali@mychef.id</a>
            </Button>
          </div>
        </div>
      </section>

      <LocationChips
        title="Fine Dining Across Bali"
        subtitle="The same Michelin-trained team, the same standards — in every villa from Seminyak to the Bukit Peninsula."
        dark
      />

      <Suspense fallback={null}>
        <OrderPanel open={orderOpen} onClose={() => setOrderOpen(false)} initialExperience={orderExperience} />
      </Suspense>
      <StickyMobileCTA
        pageSource="luna-main"
        serviceType="fine-dining"
        label="Get a Fine Dining Quote via WhatsApp"
        serviceName="fine dining in Bali"
        intent="menu and pricing"
      />
    </div>
  )
}
