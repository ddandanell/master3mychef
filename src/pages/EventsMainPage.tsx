import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Phone, Calendar, Users, MapPin, ChevronRight,
  Heart, Cake, Wine, Briefcase, Leaf, Baby, Sparkles, Music,
  Globe2, ClipboardCheck, ArrowRight, Check,
} from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, faqPageSchema, serviceSchema, offerSchema, aggregateRatingSchema } from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import LocationChips from '@/components/LocationChips'
import { Breadcrumb, PressStrip, AllInPrice, formatIDR, formatIDRShort, calculateAllIn } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { EventsRiskReversal } from '@/components/shared'

import OptimizedImage from '@/components/OptimizedImage'

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I'd like to plan an event in Bali. Could you walk me through the options?",
)}`

interface EventType {
  slug: string
  title: string
  eyebrow: string
  fromPrice: React.ReactNode
  description: string
  icon: typeof Heart
  image: string
  href: string
}

function CardPrice({ price, suffix = '/pp' }: { price: number; suffix?: string }) {
  return (
    <>
      <span className="text-[#C5A028] font-semibold">From {formatIDRShort(price)}++{suffix}</span>
      <span className="block text-[11px] font-normal text-[#4A4745]/70 mt-0.5">
        ≈ {formatIDR(calculateAllIn(price))} all-in{suffix}
      </span>
    </>
  )
}

const EVENT_TYPES: EventType[] = [
  {
    slug: 'weddings',
    eyebrow: 'Your Villa Wedding',
    title: 'Villa Weddings',
    fromPrice: <CardPrice price={600000} />,
    description:
      'Ceremony to reception, entirely in your villa. We handle vendors, timeline, styling, food, staff. You walk down the aisle.',
    icon: Heart,
    image: '/generated/aura-wedding.webp',
    href: '/events/weddings',
  },
  {
    slug: 'birthdays',
    eyebrow: 'The Celebration',
    title: 'Birthday Parties',
    fromPrice: <CardPrice price={850000} />,
    description:
      'Cake, setup, themed decor, and a full team. Your guests arrive, you celebrate. We handle everything else.',
    icon: Cake,
    image: '/generated/party-birthday.webp',
    href: '/events/birthdays',
  },
  {
    slug: 'anniversaries',
    eyebrow: 'Your Story, Celebrated',
    title: 'Anniversary Dinners',
    fromPrice: <CardPrice price={1200000} />,
    description:
      'Private candlelit dinner built around your history. Wine paired. Service perfect. The opposite of generic.',
    icon: Wine,
    image: '/generated/aura-toast.webp',
    href: '/events/anniversaries',
  },
  {
    slug: 'corporate-events',
    eyebrow: 'Executive Hospitality',
    title: 'Corporate Events',
    fromPrice: <CardPrice price={1200000} />,
    description:
      'Offsites, dinners, retreats, launches. Full hospitality production. Invoice-ready. NPWP-issued. Zero stress.',
    icon: Briefcase,
    image: '/generated/corp-gala.webp',
    href: '/events/corporate-events',
  },
  {
    slug: 'retreats',
    eyebrow: 'Multi-Day Hospitality',
    title: 'Wellness & Yoga Retreats',
    fromPrice: <CardPrice price={1500000} suffix="/pp/day" />,
    description:
      'Plant-forward, gluten-free, raw, vegan—dietary specialists handle everything at scale. Three meals daily. On schedule.',
    icon: Leaf,
    image: '/generated/party-medi.webp',
    href: '/events/retreats',
  },
  {
    slug: 'baby-showers',
    eyebrow: 'The Celebration',
    title: 'Baby Showers',
    fromPrice: <CardPrice price={750000} />,
    description:
      'Brunch, high tea, themed decor, mocktail bar. Styled so well it photographs itself. You just show up.',
    icon: Baby,
    image: '/generated/party-white.webp',
    href: '/events/baby-showers',
  },
  {
    slug: 'villa-parties',
    eyebrow: 'The Celebration',
    title: 'Villa Parties',
    fromPrice: <CardPrice price={650000} />,
    description:
      'Cocktail receptions, sundowner BBQs, hens & bucks weekends. Bar staff, music, decor. We run it. You host it.',
    icon: Music,
    image: '/generated/party-ultimate.webp',
    href: '/events/villa-parties',
  },
]

interface HowStep {
  step: string
  title: string
  body: string
  icon: typeof ClipboardCheck
}

const HOW_WE_RUN: HowStep[] = [
  {
    step: '01',
    title: 'Message Us',
    body: 'Date, guest count, villa, event type. Sofia replies within hours with availability and pricing.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Proposal',
    body: 'One document covers food, drinks, staff, styling, timing, all-in cost. You review. We adjust until you sign off.',
    icon: ClipboardCheck,
  },
  {
    step: '03',
    title: 'Event Day',
    body: 'Our team arrives early, builds setup, runs service, clears down. You host. We execute.',
    icon: Calendar,
  },
]

interface WhyItem {
  title: string
  body: string
  icon: typeof Users
}

const WHY: WhyItem[] = [
  {
    icon: Users,
    title: 'One team, one bill, one contact',
    body: 'Food, drinks, staff, styling, coordination — handled in-house. No supplier merry-go-round. One WhatsApp thread, one proposal, one invoice.',
  },
  {
    icon: Globe2,
    title: 'Built for villa hospitality',
    body: 'Most Bali events happen in private villas, not hotel ballrooms. Our entire operation is mobile — generator, prep stations, glassware, cold chain, the lot.',
  },
  {
    icon: Sparkles,
    title: 'International-standard execution',
    body: 'Plated service, dietary mapping at scale, multi-course timing, allergy-line discipline. The fine-dining playbook applied to your living room.',
  },
]

const WHY_COMPETITIVE = [
  { vs: 'Mimpi / All-in-one operators', point: 'We specialise in food + events, not real estate. Better menus, sharper pricing, no villa markup.' },
  { vs: 'Single-service operators', point: 'One contact for catering, bar, staff, and coordination. No chasing five vendors on WhatsApp.' },
  { vs: 'Hotel packages', point: 'Your villa, your rules, your timeline. No hotel curfews, no generic menus, no ballroom feel.' },
]

const PRICING_TRANSPARENCY = [
  { label: 'Per-person base', desc: 'Covers chef, ingredients, service staff, and basic setup. Varies by event type and menu.' },
  { label: 'Add-ons', desc: 'Photography, custom cake, live music, premium bar, extended decor — all itemised in the proposal.' },
  { label: 'Tax & service', desc: '10% government service charge + 11% VAT added at proposal. No hidden fees.' },
  { label: 'Deposit', desc: '50% to confirm the date. Balance due the week of the event. Net-30 for repeat corporate clients.' },
]

interface PricingRow {
  type: string
  from: React.ReactNode
  minGuests: string
  goodFor: string
}

const PRICING_TABLE: PricingRow[] = [
  { type: 'Villa Weddings (Intimate)', from: <AllInPrice price={600000} />, minGuests: '10+', goodFor: 'Elopements, micro-weddings' },
  { type: 'Villa Weddings (Luxury)', from: <AllInPrice price={1500000} />, minGuests: '40+', goodFor: 'Full receptions, multi-day' },
  { type: 'Birthday Parties', from: <AllInPrice price={850000} />, minGuests: '15+', goodFor: 'Milestone dinners, villa parties' },
  { type: 'Anniversary Dinners', from: <AllInPrice price={1200000} />, minGuests: '2+', goodFor: 'Couples, vow renewals' },
  { type: 'Corporate Events', from: <AllInPrice price={1200000} />, minGuests: '10+', goodFor: 'Conferences, exec dinners' },
  { type: 'Wellness Retreats', from: <AllInPrice price={1500000} suffix="/person/day" />, minGuests: '8+', goodFor: 'Yoga, wellness, dietary-led' },
  { type: 'Baby Showers', from: <AllInPrice price={750000} />, minGuests: '10+', goodFor: 'Brunch, high tea, gender reveal' },
  { type: 'Villa Parties', from: <AllInPrice price={650000} />, minGuests: '20+', goodFor: 'Sundowners, hens, cocktail' },
]

const AREAS_COVERED = [
  'Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Sanur', 'Nusa Dua',
  'Jimbaran', 'Berawa', 'Pererenan', 'Bukit', 'Bingin', 'Tabanan',
]

const EVENTS_TESTIMONIALS = [
  {
    name: 'Priya & Raj',
    location: 'Uluwatu Villa Wedding',
    quote:
      'We compared three hotels and a wedding planner. myCHEF was half the price and twice the warmth. Sofia ran the day like a Swiss watch.',
    rating: 5,
  },
  {
    name: 'The Larsen Family',
    location: 'Canggu — 3-day reunion',
    quote:
      'Twelve adults, six kids, three days, three meal services a day. Different dietary needs every meal. The team made it look easy.',
    rating: 5,
  },
  {
    name: 'David — Series A Off-site',
    location: 'Berawa Villa Conference',
    quote:
      'Two-day off-site for forty engineers. Coffee station never empty, lunch on time every time, gala dinner that landed. Invoice came with NPWP.',
    rating: 5,
  },
]

const FAQS = [
  {
    q: 'How far in advance do we need to book?',
    a: 'Weddings and large retreats: 3–6 months for high season (July–August, December–January). Smaller events and corporate: 4–6 weeks is comfortable. Last-minute is possible — we have run a 30-guest dinner with 72 hours notice. WhatsApp Sofia and we will tell you what is still open.',
  },
  {
    q: 'Is the price per person all-in or does tax come on top?',
    a: 'Listed prices are ++ (before 10% government service charge and 11% VAT). We always show the all-in number in the proposal so you know the total — no surprises. Groceries are billed at cost with no markup.',
  },
  {
    q: 'Do you handle dietary requirements at scale?',
    a: 'Yes — this is one of the things we do best. Vegan, halal, gluten-free, raw, kosher-style, nut allergy, shellfish allergy, kids portions. We label every dish, run separate prep lines for allergies, and have done full halal weddings and dietary-led retreats for hundreds.',
  },
  {
    q: 'Can you work at any villa in Bali?',
    a: 'Yes. We are mobile hospitality — full kitchen, glassware, linens, generator, cold chain, the lot. We have worked at over 200 villas across Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Pererenan, Berawa, and the Bukit peninsula. If your villa is in Bali, we can run an event there.',
  },
  {
    q: 'Do we pay a deposit, and what happens if we cancel?',
    a: '50% deposit to confirm the date, balance due the week of the event. Cancellation policy is in your proposal — full refund up to 30 days out, 50% inside 30 days, no refund inside 14 days. Force-majeure clauses are standard.',
  },
  {
    q: 'Who is our point of contact?',
    a: 'Sofia handles events end-to-end — the same person from first WhatsApp to the day-of coordination on site. No handoffs, no losing context. For corporate accounts she works alongside Olivia for invoicing and NPWP paperwork.',
  },
  {
    q: 'Can we customise the menu?',
    a: 'Every menu is built around the brief. Cuisine, courses, signature dishes, kids menu, dietary-specific lines, branded courses for corporate. Send the spec and we tailor it — and you taste the menu before you sign off when there is time.',
  },
  {
    q: 'Do you provide staff, bartenders, and coordinators?',
    a: 'Yes — chefs, waiters (1 per 10 guests is our standard), bartenders, kitchen team, runners, and an on-site event coordinator are part of every package. For corporate and weddings we add a dedicated coordinator who manages timing, suppliers, and the run-sheet.',
  },
]

export default function EventsMainPage() {
  const heroRef = useRef<HTMLDivElement>(null)

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
        gsap.fromTo(
          '.hero-fade',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out' },
        )
        gsap.fromTo(
          '.events-reveal',
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: '.events-grid', start: 'top 80%', once: true },
          },
        )
      }, heroRef)

      cleanup = () => ctx.revert()
    })()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return (
    <div ref={heroRef} className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('events').title}
        description={getPageMeta('events').description}
        canonical={getPageMeta('events').canonical}
        ogImage={getPageMeta('events').ogImage}
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Events', `${SITE}/events`),
          serviceSchema('Bali Event Catering & Coordination', 'Villa weddings, birthdays, anniversaries, corporate events, retreats, baby showers, and villa parties in Bali. One team, one bill.', `${SITE}/events`, 'IDR'),
          offerSchema('Villa Weddings', 600000, 'IDR', `${SITE}/events/weddings`),
          offerSchema('Birthday Parties', 850000, 'IDR', `${SITE}/events/birthdays`),
          offerSchema('Anniversary Dinners', 1200000, 'IDR', `${SITE}/events/anniversaries`),
          offerSchema('Corporate Events', 1200000, 'IDR', `${SITE}/events/corporate-events`),
          offerSchema('Wellness & Yoga Retreats', 1500000, 'IDR', `${SITE}/events/retreats`),
          offerSchema('Baby Showers', 750000, 'IDR', `${SITE}/events/baby-showers`),
          offerSchema('Villa Parties', 650000, 'IDR', `${SITE}/events/villa-parties`),
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Private Events and Celebrations in Bali',
            description: 'Private chef events, weddings, birthdays, corporate dinners, and villa parties across Bali — managed end-to-end.',
            location: { '@type': 'Place', name: 'Bali, Indonesia' },
            organizer: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Bali Event Services by myCHEF',
            itemListElement: EVENT_TYPES.map((e, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE}${e.href}`,
              name: e.title,
            })),
          },
        ]}
      />

      <Breadcrumb items={[{ label: 'Events' }]} theme="dark" />

      {/* ═══════ HERO — DARK, EDITORIAL, GOLD ═══════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0A0A] text-white">
        <img
          src="/generated/mychef-events-bali-hero-events-new.webp"
          alt="Luxury villa event in Bali with styled dining and celebration setup"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-black/20 md:hidden" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 py-12 md:py-20 w-full flex flex-col justify-center h-full">
          <Breadcrumb items={[{ label: 'Events' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p
            className="hero-fade text-[#C5A028] text-sm tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Chapter 1 — Bali Events
          </p>
          <h1
            className="hero-fade text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-2xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Events in Bali, run by one team.<br />
            <span className="italic text-white/[85%]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              You just host.
            </span>
          </h1>
          <p className="hero-fade text-base md:text-xl max-w-lg leading-relaxed text-white/[80%] mb-8">
            Villa weddings, birthdays, anniversaries, corporate events, retreats, baby showers, and villa parties.
            Food, drinks, staff, styling, and coordination — handled by one team, in your villa, anywhere in Bali.
          </p>
          <div className="hero-fade flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="events-hero"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </a>
            <a
              href="#event-types"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              View Event Types <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <p className="hero-fade mt-4 text-sm text-white/[60%]">
            From IDR 600K++/guest · Free consultation · Same-day WhatsApp reply · Transparent proposal before deposit
          </p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip dark />

      {/* ═══════ RISK REVERSAL ═══════ */}
      <EventsRiskReversal dark />

      {/* ═══════ INTRO ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#0F0F0F] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Production, not catering
          </p>
          <h2 className="text-3xl md:text-5xl leading-[1.1] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            We approach events the way a fine-dining kitchen approaches service.
          </h2>
          <p className="text-lg leading-relaxed text-white/[75%]">
            One brigade owns the night — chefs in the kitchen, waiters on the floor, bartenders on the bar, a coordinator
            on the timeline. Whether it is a six-person anniversary or a hundred-and-fifty-guest wedding, the standard
            is the same: hot food on time, full glasses, clean plates, and a host who never had to look at a watch.
          </p>
        </div>
      </section>

      {/* ═══════ ALL EVENTS WE COVER ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 2 — All Events We Cover"
            title="Four of the formats we run most often"
            subtitle="Weddings, birthdays, corporate events, and retreats each ask for a different service rhythm — but the same operational discipline."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            {EVENT_TYPES.filter((event) => ['weddings', 'birthdays', 'corporate-events', 'retreats'].includes(event.slug)).map((event) => (
              <Link
                key={event.slug}
                to={event.href}
                className="group bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-xl hover:border-[#C5A028] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={event.image} alt={`${event.title} in Bali by myCHEF`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="text-[#C5A028] text-[11px] tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                    {event.eyebrow}
                  </p>
                  <h3 className="text-xl text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{event.title}</h3>
                  <p className="text-[#4A4745] text-sm leading-relaxed">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7 EVENT TYPES ═══════ */}
      <section id="event-types" className="events-grid py-24 md:py-32 px-6 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 3 — Seven Kinds of Evening"
            title="Choose the kind of event you are hosting"
            subtitle="Each pillar has its own page with full pricing, menus, and a tailored inquiry form."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {EVENT_TYPES.map((e) => (
              <Link
                key={e.slug}
                to={e.href}
                className="events-reveal group bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-xl hover:border-[#C5A028] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={e.image}
                    alt={`${e.title} in Bali by myCHEF`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                    <e.icon className="w-3.5 h-3.5 text-[#C5A028]" />
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase text-white/[90%]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                    >
                      {e.eyebrow}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3
                    className="text-2xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {e.title}
                  </h3>
                  <p className="text-[#C5A028] font-semibold text-sm mb-3">{e.fromPrice}</p>
                  <p className="text-[#4A4745] text-sm leading-relaxed mb-5">{e.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#0F0F0F] text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Chapter 4 — How It Works
            </p>
            <h2
              className="text-3xl md:text-5xl leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three clear steps from first message to event day.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_WE_RUN.map((s) => (
              <div
                key={s.step}
                className="p-7 rounded-2xl border border-white/10"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <p
                  className="text-[#C5A028] text-xs tracking-[0.4em] uppercase mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {s.step}
                </p>
                <s.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/[70%]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY MYCHEF ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 4 — Why myCHEF"
            title="The three reasons hosts hand us the whole evening"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="p-8 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E3] hover:border-[#C5A028]/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C5A028]/10 flex items-center justify-center mb-5">
                  <w.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3
                  className="text-xl mb-3 text-[#1A1A1A]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {w.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4745]">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY MYCHEF FOR EVENTS — COMPETITIVE ADVANTAGE ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 5 — Competitive Edge"
            title="Why myCHEF for events"
            subtitle="How we compare to the alternatives you are probably researching."
          />
          <div className="space-y-4">
            {WHY_COMPETITIVE.map((item) => (
              <div key={item.vs} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#E8E6E3]">
                <div className="w-8 h-8 rounded-full bg-[#C5A028]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#C5A028]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">vs {item.vs}</h4>
                  <p className="text-[#4A4745] text-sm">{item.point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING TRANSPARENCY ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 6 — Pricing"
            title="What an event actually costs"
            subtitle="Every price below is per guest, before tax and service. The proposal Sofia sends includes the all-in total — no surprises."
          />
          <div className="overflow-hidden rounded-2xl border border-[#E8E6E3] bg-white shadow-sm">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-[#0F0F0F] text-white text-xs tracking-[0.25em] uppercase">
              <div className="col-span-4">Event Type</div>
              <div className="col-span-3 text-[#C5A028]">From Price</div>
              <div className="col-span-2">Min Guests</div>
              <div className="col-span-3">Best For</div>
            </div>
            {PRICING_TABLE.map((row, i) => (
              <div
                key={row.type}
                className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'
                } border-t border-[#E8E6E3]`}
              >
                <div
                  className="md:col-span-4 text-base text-[#1A1A1A]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {row.type}
                </div>
                <div className="md:col-span-3 text-[#C5A028] font-semibold">{row.from}</div>
                <div className="md:col-span-2 text-sm text-[#4A4745]">{row.minGuests}</div>
                <div className="md:col-span-3 text-sm text-[#4A4745]">{row.goodFor}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING_TRANSPARENCY.map((pt) => (
              <div key={pt.label} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4">
                <h4 className="font-semibold text-[#1A1A1A] text-xs mb-1">{pt.label}</h4>
                <p className="text-[#4A4745] text-xs">{pt.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-[#4A4745]/70">
            All prices ++ (10% government service charge and 11% VAT added at proposal). Groceries billed at cost — no
            markup. 50% deposit to confirm.
          </p>
        </div>
      </section>

      {/* ═══════ DAY-OF COORDINATOR ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#0F0F0F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Chapter 7 — Your Coordinator
          </p>
          <div className="w-24 h-24 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-[#C5A028]" />
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.1] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sofia
          </h2>
          <p className="text-lg text-white/[70%] mb-6 max-w-2xl mx-auto">
            "I have coordinated 200+ events across Bali — from 2-person anniversary dinners to 200-guest weddings. 
            My job is simple: make sure the host never has to look at a watch."
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Plan My Event — Free Consultation
            </a>
            <a
              href="tel:+6282237565997"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone className="w-4 h-4" /> Call +62 822 3756 5997
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ GEOGRAPHIC COVERAGE ═══════ */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <p
            className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Chapter 8 — Where We Work
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1A1A1A] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mobile hospitality across Bali
          </h2>
          <p className="text-[#4A4745] max-w-2xl mx-auto mb-10">
            Generator, prep kitchen, cold chain, glassware, linens, and the team — packed and travelled to your villa.
            Same-island, same-day setups.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS_COVERED.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#1A1A1A] hover:border-[#C5A028]/40 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A028]" />
                {area}
              </span>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#4A4745]/70">
            Not on the list? We travel anywhere in Bali. Outer-island events on request.
          </p>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={EVENTS_TESTIMONIALS}
        title="What event hosts say"
        subtitle="Real weddings, retreats, off-sites, and parties — from real villas across Bali."
      />

      {/* ═══════ LEARN MORE — BLOG ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#0F0F0F] text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Learn More
            </p>
            <h2
              className="text-3xl md:text-5xl leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Event planning insights for Bali
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link
              to="/blog/wedding-private-chef-bali-planning-guide"
              className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-[#C5A028] transition-colors">
                Planning a Villa Wedding
              </h3>
              <p className="text-sm text-white/[70%] mb-4">
                From venue prep to timing coordination, learn how to orchestrate a wedding that feels effortless from the guest perspective.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">
                Read more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              to="/blog/corporate-events-catering-bali-team-dining"
              className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-[#C5A028] transition-colors">
                Corporate Events & Team Dining
              </h3>
              <p className="text-sm text-white/[70%] mb-4">
                Execute off-sites, executive dinners, and company retreats with the production quality of a five-star kitchen.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">
                Read more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              to="/blog/how-to-plan-villa-birthday-party-bali"
              className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-[#C5A028] transition-colors">
                Milestone Celebrations in Bali
              </h3>
              <p className="text-sm text-white/[70%] mb-4">
                Birthdays, anniversaries, and milestone moments deserve more than a restaurant reservation—they deserve a production.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">
                Read more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Chapter 9 — Questions"
            title="The eight questions every host asks"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ FORM ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 10 — Inquire"
            title="Tell Sofia about your event"
            subtitle="One message. Same-hour reply. A proposal in your inbox within 24 hours."
          />
          <BookingFormCatering
            title="Event Inquiry"
            subtitle="The more you share, the sharper the proposal."
            fields={[
              { name: 'event_type', label: 'Event Type', type: 'select', icon: Heart, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'duration', label: 'Event Duration / Days', type: 'text', icon: Calendar, placeholder: 'e.g. 1 evening, 3 days, 15-17 June' },
              { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 40', required: true },
              { name: 'villa', label: 'Villa / Location', type: 'text', icon: MapPin, placeholder: 'Canggu, Seminyak, TBC...' },
              { name: 'company', label: 'Company / Planner', type: 'text', icon: Briefcase, placeholder: 'Optional, if booking for a client or business' },
              { name: 'budget', label: 'Budget Range (optional)', type: 'text', placeholder: 'e.g. IDR 50M total' },
              {
                name: 'dietary',
                label: 'Dietary / Cuisine Brief',
                type: 'textarea',
                icon: Check,
                placeholder: 'Vegan count, halal, allergies, kids meals, cuisine direction...',
                rows: 4,
              },
              {
                name: 'proposal',
                label: 'Proposal / Invoice Needs',
                type: 'textarea',
                icon: ClipboardCheck,
                placeholder: 'Line-item quote, NPWP invoice, tasting, planner coordination, PO requirements...',
                rows: 4,
              },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
              {
                name: 'notes',
                label: 'Tell us more',
                type: 'textarea',
                placeholder: 'Vibe, timing, service style, special requests, and anything else we should know...',
                rows: 5,
              },
            ]}
            packageOptions={EVENT_TYPES.map((e) => e.title)}
            whatsappName="Sofia"
            accent="#C5A028"
            messageIntro="Hi Sofia, I'm planning an event in Bali and would like a proposal."
          />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0A0A0A] text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/generated/mychef-experience-bali-aura-tablescape.webp"
            alt="Aura restaurant/service at myCHEF fine dining"
            aria-hidden
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Sparkles className="w-7 h-7 text-[#C5A028] mx-auto mb-5" />
          <h2 className="text-4xl md:text-6xl leading-[1.05] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            One message and we&rsquo;re running.
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-white/[75%] mb-10">
            Sofia replies inside the hour. The proposal lands inside the day. The team arrives on the date — built,
            briefed, and ready.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="events-cta"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Plan My Event — Free Consultation
            </a>
            <a
              href="tel:+6282237565997"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone className="w-4 h-4" /> Call +62 822 3756 5997
            </a>
          </div>
        </div>
      </section>

      <LocationChips
        title="Events Across Bali"
        subtitle="Weddings in Uluwatu. Corporate retreats in Ubud. Birthday parties in Canggu. We know every venue, every vendor, every regulation."
        dark
      />
    </div>
  )
}
