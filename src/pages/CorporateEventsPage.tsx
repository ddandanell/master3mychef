import { useEffect, useRef } from 'react'
import {
  Check, MessageCircle, Phone, Sparkles, ChevronRight,
  Briefcase, Mic2, Wine, Award, Building2, Users, Globe2, MapPin,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, detailedServiceSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip, formatIDR, calculateAllIn } from '@/components/shared'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_BASE = 'https://wa.me/6282237565997?text='

const HANDLES = [
  {
    icon: Briefcase,
    eyebrow: 'Executive Dinners',
    title: 'Private dinners for investors, management teams, and VIP guests',
    body: 'Hosted inside luxury villas, private residences, boardrooms, rooftops, and boutique venues. Elegant, relaxed, conversational, premium.',
    bullets: ['Plated dining', 'Sommelier-style wine service', 'Waiters', 'Candlelight setup', 'Printed menus', 'Cocktail welcome'],
    image: '/generated/corp-executive.webp',
  },
  {
    icon: Mic2,
    eyebrow: 'Conference Catering',
    title: 'Professional catering for conferences, workshops, seminars, and retreats',
    body: 'Smooth timing, fast service, clean presentation, international-friendly menus, reliable logistics. Built for the full conference day.',
    bullets: ['Coffee stations', 'Healthy snacks', 'Business lunch', 'Dessert station', 'Drinks', 'Setup & cleanup'],
    image: '/generated/corp-conference.webp',
  },
  {
    icon: Wine,
    eyebrow: 'Networking & Cocktail Events',
    title: 'Luxury standing events designed for relaxed conversation',
    body: 'Startup events, real estate launches, brand activations, chamber gatherings, investor evenings. Designed for movement, connection, and atmosphere.',
    bullets: ['Canapés', 'Live stations', 'Oyster bars', 'Cocktail pairings', 'Grazing tables', 'Bartender team'],
    image: '/generated/corp-networking.webp',
  },
  {
    icon: Award,
    eyebrow: 'Gala Dinners & Company Celebrations',
    title: 'Premium large-scale events for award nights and formal evenings',
    body: 'Stage setup, full dinner service, cocktail reception, DJ or live music, custom menus, branded desserts, welcome drinks, full event styling.',
    bullets: ['Elegant banquet setup', 'Gold & black styling', 'Stage & lighting', 'Champagne towers', 'Long-table dinner setup', 'Plated service'],
    image: '/generated/corp-gala.webp',
  },
] as const

const WHY = [
  {
    icon: Users,
    title: 'One team managing everything',
    body: 'Most event problems happen because too many suppliers are involved. myCHEF coordinates food, drinks, staffing, timing, setup, service flow, and guest experience as one production.',
  },
  {
    icon: Globe2,
    title: 'International-level hospitality',
    body: 'Our guests are executives, investors, international companies, and high-net-worth travelers. Presentation and professionalism matter as much as the food itself.',
  },
  {
    icon: MapPin,
    title: 'Villa and venue specialists',
    body: 'Most Bali corporate events happen in villas, remote locations, outdoor venues, or temporary spaces. Our team is built around mobile hospitality operations and private-location execution.',
  },
] as const

interface CorporatePackage {
  slug: string
  name: string
  priceNum: number
  price: string
  min: string
  bestFor: string
  includes: string[]
  flagship?: boolean
}

const PACKAGES: CorporatePackage[] = [
  {
    slug: 'corporate-lunch',
    name: 'Corporate Lunch Package',
    priceNum: 450000,
    price: 'From IDR 450,000++ / guest',
    min: 'Min. 10 guests',
    bestFor: 'Workshops · Meetings · Team lunches · Office gatherings',
    includes: ['Main courses', 'Drinks', 'Setup', 'Service staff', 'Cleanup'],
  },
  {
    slug: 'conference-catering',
    name: 'Conference Catering Package',
    priceNum: 550000,
    price: 'From IDR 550,000++ / guest',
    min: 'Min. 20 guests',
    bestFor: 'Conferences · Training days · Seminars · Retreats',
    includes: ['Coffee breaks', 'Lunch', 'Snacks', 'Drinks', 'Staff support'],
  },
  {
    slug: 'executive-dinner',
    name: 'Executive Dinner Experience',
    priceNum: 950000,
    price: 'From IDR 950,000++ / guest',
    min: 'Min. 6 guests',
    bestFor: 'Investor dinners · VIP hosting · Executive meetings · Business celebrations',
    includes: ['Multi-course dinner', 'Waiters', 'Styling', 'Dessert', 'Full setup'],
  },
  {
    slug: 'corporate-cocktail-night',
    name: 'Corporate Cocktail Night',
    priceNum: 750000,
    price: 'From IDR 750,000++ / guest',
    min: 'Min. 15 guests',
    bestFor: 'Networking · Launch events · Community gatherings · Brand events',
    includes: ['Canapés', 'Cocktail service', 'Bartenders', 'Setup', 'Service staff'],
  },
  {
    slug: 'gala-dinner',
    name: 'Gala Dinner Package',
    priceNum: 1450000,
    price: 'From IDR 1,450,000++ / guest',
    min: 'Min. 20 guests',
    bestFor: 'Award nights · Large company dinners · Formal celebrations · Premium hospitality',
    includes: ['Multi-course dinner', 'Full staffing', 'Styling assistance', 'Premium presentation'],
  },
  {
    slug: 'full-corporate-event-production',
    name: 'Full Corporate Event Production',
    priceNum: 1950000,
    price: 'From IDR 1,950,000++ / guest',
    min: 'Min. 25 guests',
    bestFor: 'Flagship — complete end-to-end event management',
    includes: ['Catering', 'Drinks', 'Staffing', 'Coordination', 'Styling', 'Guest-flow planning', 'Event support'],
    flagship: true,
  },
]

const GALLERY = [
  { src: '/generated/corp-villa.webp', alt: 'Private corporate dinner inside an open-air Bali villa with infinity pool backdrop' },
  { src: '/generated/corp-cocktail-close.webp', alt: 'Close-up of a craft corporate cocktail at a Bali rooftop event' },
  { src: '/generated/corp-plated.webp', alt: 'Plated fine dining main course at a Bali corporate dinner' },
  { src: '/generated/corp-team.webp', alt: 'myCHEF corporate hospitality team in branded black uniforms' },
] as const

const FAQS = [
  { q: 'How many guests can you handle?', a: 'From a private executive dinner of 6 inside a Bali villa to a full-scale gala dinner of 150+ guests. Above 100 guests we typically build the team and styling around a venue brief, and we can co-produce with venue partners.' },
  { q: 'Can you provide bartenders and a full bar?', a: 'Yes. Professional Indonesian bartenders, signature corporate cocktails, full glassware setup, ice and garnish station, and licensed bar service. We can also work with a venue\'s existing bar team and only run the food.' },
  { q: 'Can you work at any villa or venue in Bali?', a: 'Yes. We run mobile hospitality operations and are used to remote locations — villas, outdoor venues, cliffside settings, beach clubs, conference centers, and temporary event spaces.' },
  { q: 'Do you provide event staff?', a: 'Yes. Waiters, bartenders, chefs, kitchen team, event coordinators, and an on-site event director are all part of the corporate packages — you do not have to source staff elsewhere.' },
  { q: 'Can menus be customised for our company?', a: 'Every menu is built around the brief — international, halal, vegetarian, gluten-free, branded courses, even dietary plans for an entire conference week. Send the spec and we tailor it.' },
  { q: 'Do you handle dietary requirements at scale?', a: 'Yes. We label every dish, run separate prep lines for allergies, and have done full halal events, vegan executive dinners, and dietary-segmented conference catering for hundreds of guests.' },
] as const

export default function CorporateEventsPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-fade'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out' },
      )
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="bg-[#0A0A0A] text-white">
      <SeoHead
        title="Corporate Events Bali | Catering & Event Dining — myCHEF"
        description="Corporate events in Bali with catering, cocktails, staffing, and full event support. Conferences, executive dinners, galas. From IDR 1.2M/person."
        canonical={`${SITE}/corporate-events`}
        ogImage={`${SITE}/generated/corp-hero.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema('Corporate Event Catering Bali', 'myCHEF.id provides corporate event catering in Bali for executive dinners, conferences, networking nights, and gala functions. We coordinate menus, staffing, drinks, and service logistics for smooth private-venue events.', `${SITE}/corporate-events`),
          breadcrumbSchema('Corporate Event Catering Bali', `${SITE}/corporate-events`, 'Events', `${SITE}/events`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Corporate Events' }]} className="bg-[#0A0A0A] text-white/70" />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src="/generated/corp-hero.webp"
          alt="Corporate Events Bali — luxury private corporate dinner in a Bali villa"
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-20 md:pb-28 w-full">
          <p className="hero-fade text-[#C5A028] text-sm tracking-[0.4em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Corporate Events Bali
          </p>
          <h1 className="hero-fade text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate events done right<br/>
            <span className="italic text-white/85" style={{ fontFamily: "'Cormorant Garamond', serif" }}>with food and drinks that deliver</span>
          </h1>
          <p className="hero-fade text-base md:text-xl max-w-2xl leading-relaxed text-white/80 mb-8">
            From executive dinners and conference catering to networking evenings and full-scale company celebrations, myCHEF creates premium corporate event experiences designed around hospitality, execution, and atmosphere.
          </p>
          <div className="hero-fade flex flex-wrap gap-3">
            <a
              href={`${WA_BASE}${encodeURIComponent('Hi myCHEF — interested in your corporate events service in Bali. Could we get a proposal?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Phone className="w-4 h-4" /> Plan My Event
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all"
            >
              View Packages <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28 px-6" style={{ background: '#0F0F0F' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hospitality production, not catering</p>
          <h2 className="text-3xl md:text-5xl leading-[1.1] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            We approach corporate catering like a hospitality production.
          </h2>
          <p className="text-lg leading-relaxed text-white/75">
            Food, drinks, flow, timing, staffing, presentation, guest experience, and coordination all work together as one complete experience. Whether you are hosting six executives inside a private villa or 150 guests for a branded company event, the goal is always the same — make your guests feel taken care of from the first drink to the final goodbye.
          </p>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section id="what-we-handle" className="py-24 md:py-32 px-6" style={{ background: '#FAFAF8', color: '#0F0F0F' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#2C5F7C] text-sm tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What We Handle</p>
            <h2 className="text-4xl md:text-5xl leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Four event categories.<br />
              <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>One standard of execution.</span>
            </h2>
          </div>
          <div className="space-y-16 md:space-y-24">
            {HANDLES.map((h, i) => (
              <article
                key={h.eyebrow}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="overflow-hidden rounded-2xl aspect-[4/3] ring-1 ring-black/5 shadow-[0_24px_60px_-30px_rgba(15,15,15,0.4)]">
                  <img src={h.image} alt={h.title} width={1280} height={960} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-5">
                    <h.icon className="w-4 h-4 text-[#2C5F7C]" />
                    <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase font-semibold">{h.eyebrow}</p>
                  </div>
                  <h3 className="text-2xl md:text-3xl leading-snug mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{h.title}</h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4745' }}>{h.body}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {h.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: '#1A1A1A' }}>
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2C5F7C]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MYCHEF */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0F0F0F' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Why Companies Choose myCHEF</p>
            <h2 className="text-4xl md:text-5xl leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Three reasons companies hand us the whole evening.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY.map((w) => (
              <div key={w.title} className="p-8 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <w.icon className="w-7 h-7 text-[#C5A028] mb-5" />
                <h3 className="text-xl leading-snug mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{w.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FAFAF8', color: '#0F0F0F' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#2C5F7C] text-sm tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Corporate Event Packages</p>
            <h2 className="text-4xl md:text-5xl leading-[1.05] mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Six ways to host a corporate event in Bali</h2>
            <p className="max-w-xl mx-auto text-base md:text-lg" style={{ color: '#4A4745', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
              From workshop lunches to flagship full-scale productions. Pricing is per guest with transparent minimums.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.slug}
                id={pkg.slug}
                className={`relative p-7 rounded-2xl border transition-all hover:-translate-y-1 scroll-mt-24 ${pkg.flagship ? 'border-[#2C5F7C] bg-[#0F0F0F] text-white' : 'border-black/10 bg-white'}`}
                style={pkg.flagship ? { background: '#0F0F0F' } : undefined}
              >
                {pkg.flagship && (
                  <span className="absolute -top-3 left-7 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[#C5A028] text-[#0F0F0F] font-semibold">
                    Flagship
                  </span>
                )}
                <h3 className={`text-xl mb-2 leading-snug ${pkg.flagship ? 'text-white' : ''}`} style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.name}</h3>
                <p className={`text-lg font-medium ${pkg.flagship ? 'text-[#C5A028]' : ''}`} style={!pkg.flagship ? { color: '#0F0F0F' } : undefined}>{pkg.price}</p>
                <p className={`text-xs mb-1 ${pkg.flagship ? 'text-white/55' : 'text-[#4A4745]/70'}`}>
                  ≈ {formatIDR(calculateAllIn(pkg.priceNum))} all-in / guest
                </p>
                <p className={`text-xs uppercase tracking-[0.2em] mb-5 ${pkg.flagship ? 'text-white/60' : ''}`} style={!pkg.flagship ? { color: '#8A8580' } : undefined}>{pkg.min}</p>
                <p className={`text-xs mb-5 leading-relaxed ${pkg.flagship ? 'text-white/70' : ''}`} style={!pkg.flagship ? { color: '#4A4745' } : undefined}>
                  <span className={`font-semibold tracking-[0.2em] uppercase mr-2 ${pkg.flagship ? 'text-white' : ''}`} style={!pkg.flagship ? { color: '#0F0F0F' } : undefined}>Best for</span>
                  {pkg.bestFor}
                </p>
                <ul className="space-y-2 mb-7">
                  {pkg.includes.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${pkg.flagship ? 'text-white/85' : ''}`} style={!pkg.flagship ? { color: '#1A1A1A' } : undefined}>
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.flagship ? 'text-[#C5A028]' : 'text-[#2C5F7C]'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA_BASE}${encodeURIComponent('Hi myCHEF — interested in the ' + pkg.name + ' for a corporate event in Bali. Could you send a proposal?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl text-xs font-semibold tracking-[0.25em] uppercase transition-all hover:scale-[1.02] ${pkg.flagship ? 'bg-[#C5A028] text-[#0F0F0F]' : 'bg-[#0F0F0F] text-white'}`}
                >
                  Get a Proposal
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0F0F0F' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Gallery</p>
            <h2 className="text-4xl md:text-5xl leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
              How corporate events actually look.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((g) => (
              <div key={g.src} className="overflow-hidden rounded-xl aspect-square ring-1 ring-white/10">
                <img src={g.src} alt={g.alt} width={1024} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.06]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PressStrip />

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#FAFAF8', color: '#0F0F0F' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2C5F7C] text-sm tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Common Questions</p>
            <h2 className="text-4xl md:text-5xl leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>Quick answers for event leads.</h2>
          </div>
          <FAQAccordion items={[...FAQS]} defaultOpenCount={4} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 opacity-30">
          <img src="/generated/corp-gala.webp" alt="" aria-hidden loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Sparkles className="w-7 h-7 text-[#C5A028] mx-auto mb-5" />
          <h2 className="text-4xl md:text-6xl leading-[1.05] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let&rsquo;s build your next event properly.
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-white/75 mb-10">
            Send the brief — guests, dates, venue, vibe — and Olivia will return with a corporate proposal inside 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`${WA_BASE}${encodeURIComponent('Hi myCHEF — I want to plan a corporate event in Bali. Here is the brief:')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Phone className="w-4 h-4" /> Plan My Event
            </a>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-[#0F0F0F] text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Building2 className="w-4 h-4" /> Get Proposal
            </a>
            <a
              href={WA_BASE + encodeURIComponent('Hi myCHEF')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
