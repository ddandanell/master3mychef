import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Check, Clock, Heart, Newspaper,
} from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, detailedServiceSchema, offerSchema, faqPageSchema, aggregateRatingSchema, eventSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a wedding in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#C5A028'

const WEDDING_TIERS = [
  {
    title: 'Intimate Villa Wedding',
    price: <AllInPrice price={600000} />,
    guestRange: '30+ guests',
    description: 'Perfect for elopements and small villa ceremonies. 4-course plated dinner, day-of coordination, basic floral arch.',
    features: ['4-course plated dinner', 'Day-of coordination', '1 waiter per 10 guests', 'Basic floral arch', 'Ceremony setup', 'Sound system', 'Full cleanup'],
  },
  {
    title: 'Standard Villa Wedding',
    price: <AllInPrice price={950000} />,
    guestRange: '50+ guests',
    description: 'Full wedding reception with 5-course plated or live-station buffet. Welcome canapés, open bar, photography.',
    features: ['5-course plated or buffet', 'Welcome canapés + sparkling', 'Bartender + 4h open bar', 'Ceremony + reception setup', 'Sound + lighting', 'Photography 6h', 'Dedicated coordinator'],
    highlighted: true,
  },
  {
    title: 'Signature Villa Wedding',
    price: <AllInPrice price={1500000} />,
    guestRange: '50+ guests',
    description: 'Dedicated planner from booking, cocktail reception, full-day photo + video, and a full villa run-sheet.',
    features: ['Plated dinner + cocktail reception', 'Bartender + 6h open bar', 'Ceremony florals + arch', 'Full sound + lighting', 'Photo + video full-day', 'Dedicated planner', 'Pre-event tasting'],
  },
]

const ADDONS = [
  { icon: Calendar, title: 'Wedding Cake', price: '+IDR 3.5M – 8.5M', desc: 'Custom 3-tier cake' },
  { icon: Newspaper, title: 'Cinematography', price: '+IDR 15M – 35M', desc: 'Full-day film' },
  { icon: Heart, title: 'Drone Footage', price: '+IDR 5M – 10M', desc: 'Aerial coverage' },
  { icon: MessageCircle, title: 'Live Band 4h', price: '+IDR 12M – 25M', desc: 'Jazz, acoustic, or DJ' },
  { icon: Check, title: 'Ceremony Florals', price: '+IDR 8M – 25M', desc: 'Arch + aisle + table' },
  { icon: Clock, title: 'Guest Transport', price: '+IDR 3M – 8M', desc: 'Per 50-guest coach' },
]

const REAL_WEDDINGS = [
  { names: 'Emma & James', date: 'March 2026', villa: 'Villa Aria, Uluwatu', image: '/generated/mychef-events-bali-event-wedding.webp' },
  { names: 'Anya & Mark', date: 'January 2026', villa: 'Villa Soma, Canggu', image: '/generated/mychef-events-bali-wedding-reception.webp' },
  { names: 'Sarah & David', date: 'December 2025', villa: 'Villa Kali, Seminyak', image: '/generated/mychef-experience-bali-aura-toast.webp' },
  { names: 'Priya & Raj', date: 'November 2025', villa: 'Villa Tirta, Uluwatu', image: '/generated/mychef-experience-bali-aura-setup.webp' },
]

const LEAD_TIMES = [
  { phase: '3–10 months', label: 'Peak season booking', note: 'Jul–Sep, Dec–Jan. Signature tier requires 3+ months.' },
  { phase: '1–3 months', label: 'Standard booking', note: 'Off-peak dates. Standard + Intimate tiers.' },
  { phase: '2–4 weeks', note: 'Pre-event tasting', label: 'Tasting window' },
  { phase: '1 month', label: 'Minimum off-peak', note: 'Intimate tier only. Subject to availability.' },
]

const PRESS_FEATURES = [
  { name: 'Honeycombers Weddings', desc: 'Featured in Bali wedding guide as top villa catering pick.' },
  { name: 'Hello Bali Weddings', desc: 'Listed as recommended full-service villa wedding vendor.' },
  { name: 'Bridestory', desc: 'Vendor profile with 50+ real wedding reviews and portfolio.' },
]

const FAQS = [
  { q: 'How far in advance should I book?', a: '3–10 months for peak season (Jul–Sep, Dec–Jan). 1 month minimum for off-peak. Signature tier requires 3+ months.' },
  { q: 'Do you do the wedding planning?', a: 'Standard + Signature include planning from booking. Intimate includes day-of coordination. For larger weddings (80+) we always include a dedicated planner.' },
  { q: 'Can I use my own florist or photographer?', a: 'Yes — we coordinate any vendor you bring. We have preferred partners with negotiated rates if you prefer.' },
  { q: 'How does tasting work?', a: 'Free pre-event tasting for all tiers, scheduled 2–4 weeks before wedding. We taste 3 dishes per course; you finalise the menu after.' },
  { q: 'What if it rains?', a: 'Every wedding has a wet-weather backup plan in the booking. We coordinate marquee rental + indoor relocation if needed.' },
  { q: 'Can you scope a three-day wedding weekend instead of one dinner?', a: 'Yes. We can split the brief into welcome night, ceremony day, and farewell brunch or lunch so each service format is costed and planned separately. That usually gives couples more control than forcing one package over the whole weekend.' },
  { q: 'Can you plan for mixed cultural food expectations?', a: 'Yes. The consult is where we map must-have dishes, vegetarian or halal-friendly needs, spice levels, and how different family groups should be served. We shape the menu brief around the guest mix before the tasting stage.' },
  { q: 'Do you handle non-Christian ceremonies?', a: 'Yes — Hindu, Muslim, Jewish, Balinese traditional, secular celebrant — all coordinated through our vetted officiant network.' },
  { q: 'Can my guests stay nearby?', a: 'We work with private villa partners and can arrange room blocks. Not included in package pricing.' },
  { q: 'What\'s your cancellation policy?', a: 'Up to 90 days before: 50% refund of deposit. 60–90 days: 25%. Under 60 days: no refund but credit toward rescheduled event within 12 months.' },
]

const FLOW_STEPS = [
  'Arrival drinks and passed canapés begin 30–45 minutes before the ceremony so guests settle without crowding the aisle.',
  'Ceremony timing is locked into the run-sheet with officiant, musicians, photographer, and villa access team on the same timeline.',
  'Cocktail hour opens while portraits happen, with waiters circulating champagne, mocktails, and hot canapés from the kitchen.',
  'Reception dinner can run as plated, shared, or hybrid service depending on speeches, entertainment, and guest count.',
  'Cake cutting, late-night snacks, and final bar call are built into the service plan so the evening lands cleanly and calmly.',
]

const STAFFING_POINTS = [
  '1 waiter per 8–10 guests is our standard for seated weddings, plus a service manager and kitchen lead.',
  'For cocktail receptions we increase tray-pass staff so drinks and canapés keep moving while portraits and speeches happen.',
  'Setup crew typically arrives 3 hours before guest arrival; kitchen prep and rentals often begin earlier depending on access.',
  'Full plate clearing, glassware reset, rubbish removal, and kitchen cleanup are included so the villa is handed back properly.',
]

const WEDDING_WEEKEND_FORMATS = [
  {
    title: 'Welcome Night / Sangeet-Style Evening',
    desc: 'A more social format with canapes, family-style dishes, buffet stations, or live cooking so guests can move, meet, and settle into the weekend.',
  },
  {
    title: 'Ceremony + Reception Day',
    desc: 'The most timing-sensitive service block. Menus and staffing are scoped around vows, portraits, speeches, and how long guests realistically wait between moments.',
  },
  {
    title: 'Farewell Brunch / Recovery Lunch',
    desc: 'A softer final meal for villa guests the next day - simpler food, calmer pacing, and a clean way to close the wedding weekend without another formal event build.',
  },
]

const MULTICULTURAL_MENU_POINTS = [
  'Different events in the same wedding weekend can carry different food identities instead of forcing one cuisine across every moment.',
  "Menu direction can be split by guest need: vegetarian-heavy family tables, halal-friendly lines, lower-spice options, children's meals, or late-night comfort dishes.",
  'The proposal can be structured around must-have dishes and non-negotiable family preferences before the tasting stage, which makes sign-off easier for couples and planners.',
  'If you already have a planner, family lead, or other decision-maker involved, we can shape the brief so timing, menu style, and service expectations are clear in one document.',
]

export default function EventsWeddingsPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wedding-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.wedding-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Wedding Catering Bali | Villa Weddings & Receptions — myCHEF"
        description="Wedding catering in Bali for villa ceremonies & receptions. Michelin-trained chefs, full staffing, multi-tier menus from IDR 600K/pp. WhatsApp us."
        canonical={`${SITE}/events/weddings`}
        ogImage={`${SITE}/generated/mychef-events-bali-event-wedding.webp`}
        jsonLd={[
          detailedServiceSchema('Wedding Catering Bali', 'myCHEF.id provides wedding catering in Bali with private chef menus, service staff, and full villa coordination. We support intimate ceremonies and reception dinners with setup, timing, and cleanup managed by one team.', `${SITE}/events/weddings`),
          eventSchema({
            name: 'Private Wedding Catering in Bali',
            description: 'myCHEF.id provides private chef and catering services for intimate wedding celebrations across Bali villas.',
            url: `${SITE}/events/weddings`,
            lowPrice: 600000,
            image: `${SITE}/generated/mychef-events-bali-event-wedding.webp`,
          }),
          offerSchema('Intimate Villa Wedding', 600000, 'IDR', `${SITE}/events/weddings`),
          offerSchema('Standard Villa Wedding', 950000, 'IDR', `${SITE}/events/weddings`),
          offerSchema('Signature Villa Wedding', 1500000, 'IDR', `${SITE}/events/weddings`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Wedding Catering Bali', `${SITE}/events/weddings`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-events-bali-event-wedding.webp"
            alt="Bali villa wedding ceremony at a tropical altar"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Weddings' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Villa Weddings
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Weddings in Bali — Catering & Coordination
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            One contract for menu planning, service staff, ceremony flow, setup, bar, and full cleanup. From intimate villa ceremonies to full reception dinners, myCHEF runs the food and the logistics together.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Request Wedding Consult
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-weddings-cta" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            From IDR 600K++/guest · Transparent proposal before deposit
          </p>
          <p className="text-xs text-white/[60%] mt-2 text-left">
            All prices marked {'"++"'} are subject to 10% service charge + 11% government tax.
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white wedding-content wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                What We Cover
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Food, floor service, coordination, setup, and cleanup in one wedding operation
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                A villa wedding only feels effortless when the catering team and the event timeline speak the same language. myCHEF builds both. We plan the menu around ceremony timing, cocktail hour, speeches, and the realities of working in a private villa kitchen. That means chef arrivals are aligned with rental drop-offs, waiters are briefed on the running order, and the coordinator is tracking guest flow while the kitchen tracks fire times and plate counts. Whether you want a formal plated reception, shared family-style dinner, or a hybrid evening with canapés and a seated main event, the food is never treated as a separate vendor.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                We also cover the operational details couples usually underestimate: staffing ratios, glassware reset, backup power planning, dietary mapping, late-night snack timing, and final cleanup after the last toast. The result is simple for you and clear for the villa — one team arrives early, builds the service, runs it properly, and leaves the property clean when the night is done.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-event-wedding.webp" alt="Luxury Bali villa wedding ceremony setup by myCHEF" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 2 — Packages"
            title="Three Wedding Tiers"
            subtitle="Pricing is built around guest count, menu format, staffing level, and how much coordination you want us to hold."
          />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            Every tier includes a real service plan, not just food pricing. We scope kitchen labour, service staff, timeline coordination, and cleanup from the start, which is why couples use these packages as a working budget instead of a teaser. If you are comparing venues or planners, use the calculators below to see what the all-in guest totals look like before custom florals, entertainment, or extra production upgrades are added.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {WEDDING_TIERS.map((tier) => (
              <EventFormatCard key={tier.title} {...tier} accent={ACCENT} />
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={600000} minGuests={30} maxGuests={200} defaultGuests={60} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={950000} minGuests={50} maxGuests={200} defaultGuests={80} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={50} maxGuests={200} defaultGuests={80} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Ceremony to Reception Flow
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A wedding timeline that moves naturally from first arrival to final toast
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The best villa weddings feel calm because the guest experience is paced properly. We usually begin with welcome drinks and light canapés so guests arrive settled instead of standing around waiting for the ceremony to start. Once vows finish, our team pivots immediately into cocktail hour while the couple steps away for photos. That handoff is where coordination matters most: the bar opens, service trays circulate, music changes, and reception tables are reset without a visible scramble.
              </p>
              <div className="space-y-3">
                {FLOW_STEPS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-experience-bali-aura-toast.webp" alt="Champagne service during Bali wedding cocktail hour" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-experience-bali-aura-setup.webp" alt="Wedding reception setup inside a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Staffing & Service
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Service ratios built for villa logistics, not restaurant assumptions
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                A wedding dinner in a private villa asks more of the team than a normal restaurant shift. Staff are carrying across garden paths, resetting glassware between outdoor and indoor moments, coordinating with the photographer, and working around speeches, dancing, and late arrivals. That is why we scope staffing against your event format rather than giving every wedding the same headcount. Seated receptions need enough hands to fire and clear each course properly, while cocktail-heavy weddings need stronger tray-pass and bar coverage.
              </p>
              <div className="space-y-3">
                {STAFFING_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 3 — Real Weddings"
            title="Wedding Stories"
            subtitle="Recent villa weddings show the range: ceremony-led, reception-led, intimate, and full-scale celebration."
          />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These are not styled shoots. They are the kind of events we are actually briefed on every week: couples wanting an altar moment that flows cleanly into drinks, a reception dinner that feels polished without becoming formal, and staffing that can work inside a live villa environment. The gallery below reflects the wedding formats couples most often ask for in Bali right now.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_WEDDINGS.map((wedding) => (
              <div key={wedding.names} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={wedding.image} alt={`${wedding.names} wedding at ${wedding.villa}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{wedding.names}</h3>
                  <p className="text-[#4A4745] text-xs">{wedding.date} · {wedding.villa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Menu Planning
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Plated menus, dietary mapping, halal-friendly service, and tastings that answer real questions
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Wedding menus need to satisfy more than taste. They need to serve mixed ages, dietary needs, and different guest expectations without slowing down service. We build menus around how the reception will actually run: plated if you want a cleaner speech cadence, family-style if you want warmth and movement, or a hybrid structure if you want canapés followed by a short plated dinner. Vegan, vegetarian, halal-friendly, gluten-free, dairy-free, nut-free, and children\'s meals are briefed in advance so the kitchen is not improvising on the night.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Tastings are typically scheduled 2–4 weeks before the event once timing, guest count, and style are clear. Couples often combine this page with our <a href="/catering/plated-catering" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">plated catering service</a> when they want a more restaurant-led reception feel. We can also build Indonesian-Western fusion menus, non-pork or halal-friendly spreads, and late-night comfort dishes that keep guests happy after the formal courses finish.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-wedding-reception.webp" alt="Wedding reception table with candles and plated dinner service" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Multi-Cultural & Multi-Day Planning
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Weddings with different family expectations need a clearer food plan, not a more generic one
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The hardest wedding briefs are usually not about guest count alone. They are about different expectations meeting the same table: vegetarian relatives, halal-friendly lines, lower-spice options for one side of the family, late-night snacks for another, and a couple trying to balance elegance with comfort. The useful proposal is not only a per-person rate. It is a structure for how the whole weekend will actually eat.
              </p>
              <div className="space-y-3">
                {MULTICULTURAL_MENU_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {WEDDING_WEEKEND_FORMATS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6">
                  <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-[#4A4745] leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-experience-bali-aura-setup.webp" alt="Intimate Bali wedding dinner for a small group" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Process & Lead Times
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What booking looks like from first message to event week
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Wedding planning moves faster when the operational decisions are made early. Once we have your date, villa, guest count, and preferred format, Sofia builds a proposal that covers menu direction, staffing, service style, rentals, and timing assumptions. After the deposit is in, we lock the service plan, liaise with the villa on access, and schedule any tasting or site visit that is needed. That gives the kitchen and floor team enough lead time to source correctly and brief every supplier against the same run-sheet.
              </p>
              <div className="space-y-4">
                {LEAD_TIMES.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] px-5 py-4">
                    <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#C5A028]" />
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                        <h3 className="text-sm font-semibold text-[#1A1A1A]">{item.label}</h3>
                        <span className="text-sm font-semibold text-[#C5A028]">{item.phase}</span>
                      </div>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] wedding-reveal">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 4 — Your Coordinator" title="Meet Sofia" subtitle="Your single point of contact from first message to final guest departure." dark />
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sofia holds the timeline so the couple does not have to
              </h3>
              <p className="text-white/[70%] leading-relaxed mb-4">
                Sofia coordinates menu decisions, supplier timing, guest flow, and the day-of service brief. Couples work with her directly instead of being handed from sales to planner to operations. That continuity matters when something changes in the final week: the person adjusting the run-sheet is the same person who understands your menu, your villa access notes, and your ceremony-reception sequence.
              </p>
              <p className="text-white/[70%] leading-relaxed mb-6">
                She has coordinated more than 100 villa weddings across Bali and knows the practical constraints that affect service: kitchen size, power load, rain backup, guest transport timing, and how long a speech block can realistically run before dinner quality starts to slip.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-weddings-cta" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#b08d23] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
                <MessageCircle className="w-4 h-4" /> Message Sofia
              </a>
            </div>
            <div className="h-full min-h-[320px]">
              <img src="/generated/mychef-experience-bali-aura-toast.webp" alt="Wedding couple toasting during a Bali villa celebration" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 5 — Press" title="As Featured In" subtitle="Recognised by Bali wedding publications that care about food, execution, and real guest experience." />
          <div className="grid sm:grid-cols-3 gap-6">
            {PRESS_FEATURES.map((feature) => (
              <div key={feature.name} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 text-center">
                <Newspaper className="w-8 h-8 text-[#C5A028] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] text-sm font-semibold mb-2">{feature.name}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 6 — Add-Ons" title="Wedding Add-Ons" subtitle="Use these to expand production once your food and staffing plan is locked." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            We recommend treating add-ons as a second-stage decision. First we make sure the ceremony, kitchen, staffing, and reception service are sound. Then we layer in florals, music, film, cake, and transport based on what the villa can actually support. This keeps budgets honest and avoids spending on visual upgrades before the operational backbone of the event is properly solved.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
                <div className="bg-[#C5A028]/10 rounded-xl p-2.5 shrink-0">
                  <addon.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{addon.title}</h3>
                  <p className="text-[#C5A028] font-semibold text-sm">{addon.price}</p>
                  <p className="text-[#4A4745] text-sm mt-1">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="What Couples Say"
        subtitle="Real reviews from real weddings across Bali."
        testimonials={[
          { name: 'Emma & James', location: 'Uluwatu Villa Wedding', quote: 'Sofia handled the whole flow from ceremony drinks to dinner service. We never had to chase a supplier or solve a timing issue ourselves.', rating: 5 },
          { name: 'Anya & Mark', location: 'Canggu Villa Wedding', quote: 'The plated reception felt like a real restaurant service, but inside our villa. Dietary guests were looked after perfectly.', rating: 5 },
          { name: 'Sarah & David', location: 'Seminyak Wedding', quote: 'The team arrived early, built everything quietly, and left the villa spotless. It felt organised from first WhatsApp to final cleanup.', rating: 5 },
        ]}
      />

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Wedding FAQ" subtitle="Everything you need to know about booking a villa wedding with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#C5A028] mb-3">Also available</p>
          <h2 className="text-2xl font-semibold text-[#1A1916] mb-8">Explore More myCHEF Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/events/anniversaries', label: 'Anniversaries' },
              { to: '/catering', label: 'Villa Catering' },
              { to: '/fine-dining', label: 'Fine Dining' },
              { to: '/in-villa-service', label: 'In-Villa Staff' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 px-4 rounded border border-[#C5A028]/30 text-[#1A1916] hover:bg-[#C5A028]/10 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Request a Wedding Consult"
            subtitle="Tell us about your wedding and we will send a detailed proposal within 48 hours."
            packageOptions={['Intimate Villa Wedding', 'Standard Villa Wedding', 'Signature Villa Wedding']}
            fields={[
              { name: 'package', label: 'Wedding Package', type: 'select', required: true },
              { name: 'date', label: 'Wedding Date', type: 'date', required: true },
              { name: 'celebration_days', label: 'Celebration Length', type: 'text', placeholder: 'e.g. 1 day, 3-day wedding weekend' },
              { name: 'guests', label: 'Number of Guests', type: 'number', placeholder: 'e.g. 60', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', placeholder: 'e.g. Villa Aria, Seminyak', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', placeholder: 'e.g. Seminyak, Uluwatu...', required: true },
              { name: 'ceremony', label: 'Ceremony / Reception Split', type: 'text', placeholder: 'e.g. Ceremony 4pm, Reception 6pm' },
              {
                name: 'cuisine_direction',
                label: 'Cuisine Direction / Cultural Notes',
                type: 'textarea',
                placeholder: 'Indian, Western, Balinese, halal, vegetarian mix, family dishes, late-night snacks...',
                rows: 4,
              },
              { name: 'planner', label: 'Planner / Production Contact', type: 'text', placeholder: 'Optional wedding planner or coordinator name' },
              { name: 'budget', label: 'Budget Range (IDR)', type: 'text', placeholder: 'e.g. 50M - 100M' },
              { name: 'dietary', label: 'Dietary Requirements', type: 'textarea', placeholder: 'Halal, vegan, allergies...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
            messageIntro="Hi Sofia, I'm planning a wedding in Bali and would like a proposal."
          />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ RELATED EVENTS ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Other Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Anniversaries', href: '/events/anniversaries', desc: 'Romantic villa dinners for two.' },
              { label: 'Birthday Parties', href: '/events/birthdays', desc: 'Milestone celebrations in your villa.' },
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Cocktail receptions and celebrations.' },
              { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Business retreats and offsites.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter />
      <StickyMobileCTA
        pageSource="events-weddings"
        serviceType="wedding"
        label="Plan My Wedding Menu via WhatsApp"
        serviceName="a wedding in Bali"
        intent="help with catering, staff, and setup"
      />
    </div>
  )
}
