import { useEffect, useRef } from 'react'
import { Check, Heart, Building2, PartyPopper, Star, MessageCircle, Phone, Sparkles, Truck, ChevronRight } from 'lucide-react'
import FAQAccordion from '@/components/catering/FAQAccordion'
import Breadcrumb from '@/components/shared/Breadcrumb'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BookingForm from '@/components/BookingForm'
import SeoHead, { localBusinessSchema, breadcrumbSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'

gsap.registerPlugin(ScrollTrigger)

const HOW_IT_WORKS = [
  { step: '01', title: 'Share Your Vision', desc: 'Tell Olivia your event type, guest count, and dream. Wedding? Corporate retreat? Celebration? We have done them all.', icon: MessageCircle },
  { step: '02', title: 'Receive Your Proposal', desc: 'Within 24 hours, you get a detailed proposal: menu, staffing, décor, timeline, and transparent pricing.', icon: PartyPopper },
  { step: '03', title: 'We Handle Everything', desc: 'Catering, bar, décor, AV, staffing, logistics — all coordinated by our events team. You approve, we execute.', icon: Truck },
  { step: '04', title: 'You Arrive as a Guest', desc: 'On the day, every detail is set. You walk in and enjoy your own event. That is the point.', icon: Sparkles },
]

const WHATS_INCLUDED = [
  'Event director & on-site coordination',
  'Custom menu design by executive chef',
  'Full bar service & bartenders',
  'Wait staff & service team',
  'Table setup, linens & floral décor',
  'AV, lighting & sound coordination',
  'Timeline & vendor management',
  'Setup, service, and full breakdown',
]

const EVENT_TYPES: Array<{ icon: typeof Heart; title: string; desc: string; href?: string; cta?: string }> = [
  { icon: Heart, title: 'Weddings', desc: 'Intimate villa ceremonies to 200-guest garden receptions. Every detail handled.' },
  { icon: Building2, title: 'Corporate Events', desc: 'Executive dinners, conference catering, gala nights, and full corporate productions.', href: '/events/corporate-events', cta: 'See corporate playbook' },
  { icon: PartyPopper, title: 'Celebrations', desc: 'Birthdays, anniversaries, reunions. Custom themes and menus.' },
]

interface PartyPackage {
  slug: string
  name: string
  concept: string
  image: string
  price: string
  min: string
  bestFor?: string
  includes: string[]
  addons: string[]
}

const PACKAGES: PartyPackage[] = [
  {
    slug: 'sunset-pool-party',
    name: 'Sunset Pool Party Experience',
    concept: 'Luxury Bali villa pool party with cocktails, live BBQ, floating snacks, music and sunset atmosphere.',
    image: '/generated/party-pool.webp',
    price: 'From IDR 950,000++ / guest',
    min: 'Min. 10 guests',
    bestFor: 'Birthday parties · Friends trips · Villa weekends · Influencer groups · Pre-wedding events',
    includes: ['BBQ station', 'Cocktail bar', 'Floating snacks', 'Party setup', 'Waiters', 'Ice setup', 'Cleanup'],
    addons: ['DJ', 'Saxophone player', 'Champagne tower', 'Drone videographer', 'Fire dancers', 'Pool decor'],
  },
  {
    slug: 'white-party-night',
    name: 'White Party Villa Night',
    concept: 'Luxury all-white evening with cocktails, premium dinner service, candles and high-end villa styling.',
    image: '/generated/party-white.webp',
    price: 'From IDR 1,450,000++ / guest',
    min: 'Min. 12 guests',
    bestFor: 'Luxury birthdays · Fashion groups · Influencer dinners · Networking events',
    includes: ['White styling setup', 'Fine dining menu', 'Cocktail station', 'Waiters', 'Candles & table styling'],
    addons: ['White floral styling', 'Live violinist', 'Professional photographer', 'Champagne service'],
  },
  {
    slug: 'taco-tequila-fiesta',
    name: 'Taco & Tequila Fiesta',
    concept: 'Interactive Mexican-inspired villa party with tacos, tequila, margaritas and social food stations.',
    image: '/generated/party-tacos.webp',
    price: 'From IDR 750,000++ / guest',
    min: 'Min. 8 guests',
    includes: ['Taco station', 'Margarita bar', 'Tequila tasting', 'Nachos & dips', 'Mexican dessert setup'],
    addons: ['Mariachi-style acoustic music', 'Neon signs', 'Custom cocktails', 'DJ'],
  },
  {
    slug: 'mediterranean-sunset-feast',
    name: 'Mediterranean Sunset Feast',
    concept: 'Luxury Mediterranean sharing dinner inspired by beach clubs and European summer nights.',
    image: '/generated/party-medi.webp',
    price: 'From IDR 1,250,000++ / guest',
    min: 'Min. 6 guests',
    includes: ['Seafood', 'Handmade pasta', 'Burrata', 'Shared feast setup', 'Dessert', 'Full service'],
    addons: ['Wine pairing', 'Oyster station', 'Live acoustic music'],
  },
  {
    slug: 'villa-festival-night',
    name: 'Villa Festival Night',
    concept: 'Private mini-festival atmosphere with food stations, cocktails, lounge areas and entertainment.',
    image: '/generated/party-festival.webp',
    price: 'From IDR 1,950,000++ / guest',
    min: 'Min. 20 guests',
    includes: ['Multiple food stations', 'Cocktail bars', 'Lounge styling', 'Lighting setup', 'Service team'],
    addons: ['DJ booth', 'Dance floor', 'Fire performers', 'LED installations', 'Photo booth'],
  },
  {
    slug: 'rooftop-cocktail-session',
    name: 'Rooftop Cocktail Session',
    concept: 'Elegant rooftop-style cocktail evening with canapés, bartenders and sunset social atmosphere.',
    image: '/generated/party-rooftop.webp',
    price: 'From IDR 850,000++ / guest',
    min: 'Min. 10 guests',
    includes: ['Signature cocktails', 'Canapés', 'Bartender team', 'Ice & garnish station', 'Service staff'],
    addons: ['Live saxophone', 'Luxury cigar station', 'Champagne service'],
  },
  {
    slug: 'private-birthday-experience',
    name: 'Luxury Birthday Experience',
    concept: 'Complete birthday setup with food, drinks, styling, cake and atmosphere planning.',
    image: '/generated/party-birthday.webp',
    price: 'From IDR 1,650,000++ / guest',
    min: 'Min. 8 guests',
    includes: ['Custom dinner', 'Birthday cake', 'Styling assistance', 'Waiters', 'Cocktail welcome', 'Cleanup'],
    addons: ['Balloon styling', 'Live entertainment', 'Photographer', 'Custom event signage'],
  },
  {
    slug: 'recovery-brunch-chill',
    name: 'Recovery Brunch & Chill',
    concept: 'Refined recovery brunch after weddings, birthdays or villa parties.',
    image: '/generated/party-brunch.webp',
    price: 'From IDR 450,000++ / guest',
    min: 'Min. 6 guests',
    includes: ['Healthy breakfast', 'Fresh juices', 'Coffee station', 'Recovery food', 'Fruit platters'],
    addons: ['Ice baths', 'Wellness shots', 'Smoothie station', 'Massage setup'],
  },
  {
    slug: 'bali-bbq-beer-garden',
    name: 'Bali BBQ & Beer Garden',
    concept: 'Relaxed premium beer-and-grill atmosphere inspired by iconic beach clubs.',
    image: '/generated/party-beer.webp',
    price: 'From IDR 650,000++ / guest',
    min: 'Min. 10 guests',
    includes: ['BBQ station', 'Beer buckets', 'Sharing platters', 'Side dishes', 'Dessert'],
    addons: ['Craft beer station', 'Sports screen setup', 'Acoustic music'],
  },
  {
    slug: 'ultimate-villa-celebration',
    name: 'Ultimate Villa Celebration',
    concept: 'Full-scale private villa event production. The flagship package.',
    image: '/generated/party-ultimate.webp',
    price: 'From IDR 2,950,000++ / guest',
    min: 'Min. 20 guests',
    includes: ['Full catering', 'Premium cocktails', 'Staffing', 'Styling', 'Event coordination', 'Fine-dining table setup', 'Music coordination', 'Cleanup'],
    addons: ['Full production lighting', 'Stage setup', 'Performers', 'Live band', 'Fireworks', 'Premium transportation'],
  },
]

const GLOBAL_ADDONS = [
  'DJs',
  'Live musicians',
  'Saxophone players',
  'Fire dancers',
  'Cocktail bartenders',
  'Champagne towers',
  'Floral styling',
  'Balloon styling',
  'Luxury table setups',
  'Photo / video team',
  'Drone videography',
  'Sound system',
  'LED lighting',
  'Branded menus',
  'Security staff',
  'Luxury transportation',
  'Recovery brunch next day',
]

const FAQS = [
  { q: 'How far in advance should I book an event?', a: '4+ weeks is ideal. For weddings during peak season (June–September, December), 3+ months is recommended. But message us anyway — we have pulled off miracles in less time.' },
  { q: 'What does "++" mean in the price?', a: '"++" means service charge (typically 10%) and government tax (11%) are added to the per-guest price. The total event cost depends on guest count, menu, and add-ons. Olivia provides a fully itemised proposal with no hidden fees.' },
  { q: 'What is included in the event price?', a: 'All packages include catering, bar service, staffing, basic décor, and on-site coordination. AV, specialty floral, and entertainment are quoted separately based on your needs.' },
  { q: 'Can you work at any villa in Bali?', a: 'Yes. We have produced events at over 200 villas across Seminyak, Canggu, Ubud, Uluwatu, and Nusa Dua. We know the spaces, the vendors, and the logistics.' },
  { q: 'Do you handle décor and floral?', a: 'Yes. Our Villa Celebration and Grand packages include floral and décor. For Intimate events, we can add it as an upgrade. We work with Bali\'s best floral designers.' },
  { q: 'Can we taste the menu before the event?', a: 'Yes. For events over IDR 50M, the tasting is complimentary. For smaller events, we offer a paid tasting at IDR 450K++ per person — credited toward your final booking.' },
  { q: 'What about dietary restrictions for large groups?', a: 'We handle it seamlessly. Vegetarian, halal, gluten-free, nut allergies — we label everything and ensure every guest is cared for.' },
  { q: 'Do you provide alcohol and bar service?', a: 'Yes. Full bar service with professional bartenders. We can source premium spirits, wines, and craft cocktails. You can also provide your own alcohol and we handle service.' },
  { q: 'What happens if it rains?', a: 'We always have a backup plan. Bali villas have covered areas, and we bring tenting for outdoor events. Olivia will walk you through contingencies in your proposal.' },
  { q: 'Can we see photos from past events?', a: 'Yes. Olivia shares a private portfolio of past events matched to your type — weddings, corporate, birthdays — so you can see the quality before booking.' },
  { q: 'What if our villa has restrictions?', a: 'We work with villa managers before every event. Noise curfews, guest limits, kitchen access — we plan around every restriction so nothing surprises you on the day.' },
  { q: 'Is there a commitment to get a proposal?', a: 'No. The first consultation and proposal are free. You only commit when you approve the plan and pay the deposit.' },
  { q: 'How does payment work?', a: '25% deposit to lock the date. 50% due 2 weeks before. Final 25% on the day. Invoiced and documented for corporate clients.' },
  { q: 'What if I need to cancel or reschedule?', a: 'Full refund if cancelled 30+ days ahead. 50% refund 14–30 days. Within 14 days, we apply the deposit to a rescheduled date within 6 months.' },
  { q: 'Are there hidden fees?', a: 'No. Every proposal is itemised — catering, bar, staffing, décor, AV, add-ons. You see every line item before you commit. No surprises on the day.' },
  { q: 'How do I know the food will be good?', a: 'Our executive chef Adriano trained in Modena and Tokyo. Every event menu is designed by him and executed by his team. See past event photos, read testimonials, or book a tasting.' },

]

const TESTIMONIALS = [
  { name: 'Priya & Raj', location: 'Mumbai', text: 'Our wedding at the villa was beyond anything we imagined. Olivia and her team handled 120 guests flawlessly. The food, the service, the atmosphere — our families are still talking about it.' },
  { name: 'David Chen', location: 'Shanghai', text: 'We hosted a 3-day corporate retreat for 45 executives. myCHEF managed every meal, every cocktail hour, every dietary restriction. Our CEO called it the best retreat we have ever done.' },
]

export default function AuraPage() {
  const ref = useRef<HTMLDivElement>(null)

  const eventSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Bali Villa Wedding by myCHEF',
      description: 'Intimate villa ceremonies to 200-guest garden receptions. Full-service wedding catering, bar, décor, and coordination.',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Luxury Villa in Bali',
        address: { '@type': 'PostalAddress', addressLocality: 'Bali', addressCountry: 'ID' },
      },
      organizer: { '@id': 'https://mychef.id/#business' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Corporate Event in Bali by myCHEF',
      description: 'Executive dinners, conference catering, gala nights, and full corporate productions in Bali villas.',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Luxury Villa in Bali',
        address: { '@type': 'PostalAddress', addressLocality: 'Bali', addressCountry: 'ID' },
      },
      organizer: { '@id': 'https://mychef.id/#business' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Private Celebration in Bali by myCHEF',
      description: 'Birthdays, anniversaries, reunions, and milestone celebrations with custom themes and menus.',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Luxury Villa in Bali',
        address: { '@type': 'PostalAddress', addressLocality: 'Bali', addressCountry: 'ID' },
      },
      organizer: { '@id': 'https://mychef.id/#business' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Wellness Retreat Catering in Bali by myCHEF',
      description: 'Multi-day retreat catering for yoga, wellness, and corporate offsites across Bali.',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Luxury Villa in Bali',
        address: { '@type': 'PostalAddress', addressLocality: 'Bali', addressCountry: 'ID' },
      },
      organizer: { '@id': 'https://mychef.id/#business' },
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.aura-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.aura-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} data-universe="aura" className="min-h-screen" style={{ background: '#FFFFFF', color: '#1A1A1A' }}>
      <SeoHead
        title="Bali Event Catering — Villas, Weddings & Corporate | myCHEF"
        description="Bali event catering by myCHEF — villa parties, weddings, corporate dinners, retreats. Catering, bar, décor, staffing end-to-end. From IDR 15M."
        canonical="https://mychef.id/events"
        ogImage="https://mychef.id/generated/experience-aura-hero-v2-xl.webp"
        jsonLd={[localBusinessSchema, aggregateRatingSchema(4.9, 89), ...eventSchemas, breadcrumbSchema('Events', 'https://mychef.id/events'), faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a })))]}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/experience-aura-hero-v2-xl.webp"
            alt="Luxury Bali villa event with long dining table, gold styling, and candlelight"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/25 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <Breadcrumb items={[{ label: 'Events' }]} theme="dark" className="justify-center mb-8" />
          <p className="aura-hero-label text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Bali Event Catering — Villas, Weddings & Corporate</p>
          <h1 className="aura-hero-title text-[2.5rem] md:text-7xl lg:text-8xl leading-[1.05] text-white mb-6 " style={{ fontFamily: "'Playfair Display', serif" }}>
            Bali Event Catering —<br /><span className="italic">Villas, Weddings & Corporate</span>
          </h1>
          <p className="aura-hero-sub text-lg md:text-xl text-white/[85%] mb-10 max-w-2xl mx-auto">
            From intimate vow exchanges to 200-guest galas. We handle catering, bar, décor, staffing, and every detail. From IDR 15M total event minimum. Olivia replies within 24 hours.
          </p>
          <div className="aura-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get Event Quote — 24h Reply
            </a>
            <a href="#packages" className="inline-block px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              See Party Events
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
            {[
              { label: '200+ events produced' },
              { label: '4.9★ client rating' },
              { label: '15-person events team' },
              { label: '200+ villas across Bali' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/60">
                <Check className="w-4 h-4 text-[#C5A028]" strokeWidth={1.5} />
                <span className="text-xs tracking-wider uppercase">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="aura-content py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Process</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
            <p style={{ color: '#4A4745' }}>Four steps. One extraordinary event. You just show up.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="aura-reveal text-center p-6 rounded-2xl border border-[#E5E3E0] hover:border-[#2C5F7C] transition-all">
                <div className="w-14 h-14 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#2C5F7C]" />
                </div>
                <span className="text-[#2C5F7C] text-xs tracking-[0.2em] uppercase mb-2 block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Step {item.step}</span>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4745' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <Phone className="w-4 h-4" /> Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section id="types" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Every Occasion,<br />Done Right</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENT_TYPES.map((item) => (
              <div key={item.title} className="aura-reveal text-center p-8 rounded-2xl border border-[#E5E3E0] bg-white hover:border-[#2C5F7C] transition-all hover:shadow-lg flex flex-col">
                <div className="w-14 h-14 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#2C5F7C]" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#4A4745' }}>{item.desc}</p>
                {item.href && item.cta && (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 mt-6 text-xs font-semibold tracking-[0.25em] uppercase self-center text-[#2C5F7C] hover:text-[#0F0F0F] transition-colors"
                  >
                    {item.cta}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Events — 10 cinematic villa party experiences */}
      <section id="packages" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[#2C5F7C] text-sm tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Party Events</p>
            <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif", color: '#0F0F0F' }}>
              Ten ways to throw the<br/>
              <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>villa night people talk about</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: '#4A4745' }}>
              We do not sell food. We design the atmosphere — cocktails, sunset light, music, styling, and a service team that runs the night so you can be a guest at your own party.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-28">
            {PACKAGES.map((pkg, i) => (
              <article
                key={pkg.slug}
                id={pkg.slug}
                className="group flex flex-col scroll-mt-24"
              >
                <a
                  href={`https://wa.me/6282237565997?text=${encodeURIComponent('Hi myCHEF — interested in the ' + pkg.name + ' package. Could you send details?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden rounded-[16px] aspect-[16/8] mb-8 ring-1 ring-black/5 shadow-[0_16px_40px_-20px_rgba(15,15,15,0.3)]"
                >
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} — ${pkg.concept}`}
                    width={1280}
                    height={800}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t to-black/50 via-transparent to-transparent pointer-events-none" />
                  <span
                    className="absolute top-5 left-5 text-[10px] font-semibold tracking-[0.3em] uppercase px-3.5 py-1.5 rounded-full"
                    style={{ background: 'rgba(15,15,15,0.78)', color: '#FAFAF8', backdropFilter: 'blur(8px)' }}
                  >
                    {String(i + 1).padStart(2, '0')} · Party
                  </span>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: 'rgba(250,250,248,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
                      {pkg.min}
                    </span>
                  </div>
                </a>

                <header className="mb-5">
                  <h3 className="text-[26px] md:text-[30px] leading-tight mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#0F0F0F' }}>
                    {pkg.name}
                  </h3>
                  <p className="text-[17px] md:text-lg leading-relaxed" style={{ color: '#4A4745', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                    {pkg.concept}
                  </p>
                </header>

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-5 pb-5 border-b border-black/10">
                  <p className="text-lg font-medium tracking-tight" style={{ color: '#0F0F0F' }}>{pkg.price}</p>
                </div>

                {pkg.bestFor && (
                  <p className="text-xs mb-6 leading-relaxed" style={{ color: '#6A6560' }}>
                    <span className="font-semibold tracking-[0.2em] uppercase mr-2" style={{ color: '#0F0F0F' }}>Best for</span>
                    {pkg.bestFor}
                  </p>
                )}

                <div className="mb-5">
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#0F0F0F' }}>Includes</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {pkg.includes.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs" style={{ color: '#1A1A1A' }}>
                        <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#2C5F7C]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-7">
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#0F0F0F' }}>Optional add-ons</p>
                  <ul className="flex flex-wrap gap-2">
                    {pkg.addons.map((a) => (
                      <li
                        key={a}
                        className="text-[11px] px-3 py-1.5 rounded-full border"
                        style={{ borderColor: 'rgba(15,15,15,0.12)', color: '#4A4745', background: '#FFFFFF' }}
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/6282237565997?text=${encodeURIComponent('Hi myCHEF — interested in the ' + pkg.name + ' package. Could you send details?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase self-start py-2 border-b-2 border-[#0F0F0F] hover:border-[#2C5F7C] hover:text-[#2C5F7C] transition-colors"
                  style={{ color: '#0F0F0F' }}
                >
                  Book this experience
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>

          {/* Global Add-Ons */}
          <div className="mt-24 md:mt-32 pt-16 border-t border-black/10">
            <div className="text-center mb-12">
              <p className="text-[#2C5F7C] text-sm tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Available for every party</p>
              <h3 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#0F0F0F' }}>Global add-ons</h3>
              <p className="max-w-xl mx-auto text-sm" style={{ color: '#4A4745' }}>
                Bolt any of these onto any package. Tell Olivia what you want and we will quote it inside your proposal.
              </p>
            </div>
            <ul className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {GLOBAL_ADDONS.map((a) => (
                <li
                  key={a}
                  className="text-xs px-4 py-2 rounded-full border"
                  style={{ borderColor: 'rgba(15,15,15,0.12)', color: '#1A1A1A', background: '#FFFFFF' }}
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-20">
            <p className="text-base mb-6" style={{ color: '#4A4745', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
              Want something else? We design custom villa parties from scratch.
            </p>
            <a
              href="https://wa.me/6282237565997?text=Hi%20myCHEF%20%E2%80%94%20I%27d%20like%20to%20design%20a%20custom%20villa%20party"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Phone className="w-4 h-4" /> Design a custom party
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything Included</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <p style={{ color: '#4A4745' }}>Full-service event production. You dream it. We build it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E5E3E0]">
                <Check className="w-5 h-5 text-[#2C5F7C] flex-shrink-0" />
                <span className="text-sm" style={{ color: '#1A1A1A' }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <Phone className="w-4 h-4" /> Get Your Quote
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/generated/experience-aura-team-lg.webp"
                alt="Olivia and the myCHEF events team coordinating a villa wedding in Bali"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Team</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}><span className="italic">Olivia</span> & The Events Team</h2>
              <div className="w-12 h-[2px] bg-[#2C5F7C] mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: '#4A4745' }}>
                Olivia has produced over 200 events in Bali — from intimate villa weddings to 200-guest corporate galas. Her team of 15 Indonesian event professionals handles everything: catering, bar, décor, staffing, and logistics.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: '#4A4745' }}>
                "The best events are the ones where the host never worries. We make sure you are always the guest of honor at your own event."
              </p>
              <div className="space-y-3">
                {['200+ events produced', '15-person events team', 'Full-service: catering, bar, décor, AV', 'On-site event director'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C]" />
                    <span className="text-sm" style={{ color: '#1A1A1A' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { slug: 'aura-wedding', alt: 'Bali villa wedding reception catered by myCHEF' },
              { slug: 'aura-corporate', alt: 'Bali corporate event dining set up in a private villa' },
              { slug: 'aura-toast', alt: 'Champagne toast at a private Bali villa party' },
              { slug: 'aura-tablescape', alt: 'Long-table tablescape styled for a Bali villa event' },
            ].map((img) => (
              <div key={img.slug} className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={`/generated/${img.slug}.webp`}
                  alt={img.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Client Stories</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>Events They Will<br />Never Forget</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl border border-[#E5E3E0] bg-white">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-[#2C5F7C] text-[#2C5F7C]" />)}
                </div>
                <p className="mb-6 leading-relaxed italic" style={{ color: '#1A1A1A' }}>"{t.text}"</p>
                <p className="text-sm" style={{ color: '#4A4745' }}>{t.name}, {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
            <p style={{ color: '#4A4745' }}>Planning an event is a big decision. Here are the answers you need.</p>
          </div>
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
          <div className="text-center mt-12">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Ask Olivia on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Inquire</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Let's Plan<br />Something Extraordinary</h2>
              <div className="w-12 h-[2px] bg-[#2C5F7C] mb-8" />
              <p className="mb-8 leading-relaxed" style={{ color: '#4A4745' }}>
                Olivia will design a custom proposal based on your event type, guest count, and vision. Most proposals delivered within 24 hours. First consultation is free — no commitment required.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Intimate (10–30)', price: 'From IDR 15M' },
                  { label: 'Villa Celebration (30–80)', price: 'From IDR 35M' },
                  { label: 'Grand (80–200)', price: 'From IDR 75M' },
                ].map((p) => (
                  <div key={p.label} className="flex items-center justify-between py-3 border-b border-[#E5E3E0]">
                    <span style={{ color: '#1A1A1A' }}>{p.label}</span>
                    <span className="font-medium" style={{ color: '#2C5F7C' }}>{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mb-6" style={{ color: '#4A4745' }}>
                * Custom quotes include catering, bar, staffing, and basic décor. AV, floral, and specialty items quoted separately.
              </p>
              <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
                <Phone className="w-4 h-4" /> Get a Quote on WhatsApp
              </a>
            </div>
            <div className="p-8 rounded-2xl border border-[#E5E3E0] bg-white">
              <BookingForm universe="aura" compact />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0F0F0F' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ready When You Are</p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Here Is What Happens Next</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { step: '01', text: 'Message Olivia' },
              { step: '02', text: 'Get proposal in 24h' },
              { step: '03', text: 'Approve & pay 25%' },
              { step: '04', text: 'Show up & enjoy' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-[#C5A028] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.step}</span>
                <p className="text-white/[80%] text-sm mt-1">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1e4a63] transition-all">
              <MessageCircle className="w-4 h-4" /> Get Quote in 24h — Free Consultation
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Call +62 822 3756 5997
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
