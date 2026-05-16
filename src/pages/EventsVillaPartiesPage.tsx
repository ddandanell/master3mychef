import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Users, MapPin,
  Wine, Sun, Music, Palette, Sparkles, Heart, Check,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, detailedServiceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20plan%20a%20villa%20party%20in%20Bali.'
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const PARTY_FORMATS = [
  {
    title: 'Cocktail Reception',
    price: <AllInPrice price={650000} />,
    guestRange: '20 — 80 guests',
    description: 'Elegant standing reception with canapés, grazing stations, and flowing drinks. Perfect for arrivals, celebrations, and networking.',
    features: ['6-8 canapé varieties', 'Grazing station', '2.5h open bar', 'Bartender', 'Service staff', 'Cocktail napkins & glassware', 'Cleanup'],
    highlighted: false,
  },
  {
    title: 'Sundowner Party',
    price: <AllInPrice price={850000} />,
    guestRange: '15 — 50 guests',
    description: 'Sunset-to-evening celebration with BBQ, cocktails, and music. The classic Bali villa party experience.',
    features: ['BBQ or buffet menu', '3h open bar', 'Bartender + cocktail menu', 'Bluetooth speaker', 'Sunset timing', 'Service staff', 'Cleanup'],
    highlighted: true,
  },
  {
    title: 'Casual Mixer',
    price: <AllInPrice price={950000} />,
    guestRange: '10 — 30 guests',
    description: 'Relaxed dinner party with family-style sharing plates, wine, and conversation. Intimate but festive.',
    features: ['Family-style sharing menu', 'Wine selection', 'Table styling', 'Background music', 'Personalised menu', 'Service staff', 'Cleanup'],
    highlighted: false,
  },
]

const THEMES = [
  { title: 'Tropicana', desc: 'Palm prints, pineapples, bright colours, pool floats, reggae beats.', icon: Sun },
  { title: 'Gatsby', desc: 'Black and gold, art deco, champagne towers, jazz playlist.', icon: Sparkles },
  { title: 'Surfer', desc: 'Beach casual, board shorts, sunset colours, acoustic playlist.', icon: Palette },
  { title: 'Disco', desc: 'Mirror balls, neon, 70s hits, dance floor energy.', icon: Music },
  { title: 'Custom', desc: 'Your idea, our execution. Any theme, any colour, any vibe.', icon: Heart },
]

const BAR_PACKAGE = [
  { title: 'Standard Bar', price: 'Included', desc: 'Beer, wine, spirits, mixers, soft drinks' },
  { title: 'Cocktail Bar', price: '+ IDR 1,500,000', desc: 'Signature cocktails, fresh ingredients, bartender flair' },
  { title: 'Premium Bar', price: '+ IDR 3,000,000', desc: 'Top-shelf spirits, champagne, custom cocktail menu' },
]

const MUSIC_OPTIONS = [
  { title: 'DJ', price: 'From IDR 4,000,000', desc: 'Playlist curation or live mixing, 4-hour set' },
  { title: 'Live Band', price: 'From IDR 8,000,000', desc: 'Acoustic duo to 5-piece band, 3-hour set' },
  { title: 'Playlist + Speaker', price: 'Included', desc: 'Bluetooth speaker provided, you control the music' },
]

const DECOR_GALLERY = [
  { title: 'Festoon Lighting', desc: 'String lights across terraces and gardens.', image: '/generated/mychef-experience-bali-aura-setup.webp' },
  { title: 'Pool Floats & Decor', desc: 'Themed inflatables, flower arrangements, lanterns.', image: '/generated/party-pool.webp' },
  { title: 'Lounge Areas', desc: 'Low tables, cushions, rugs for relaxed seating.', image: '/generated/party-rooftop.webp' },
  { title: 'Bar Styling', desc: 'Custom bar setup with branded menus and garnishes.', image: '/generated/party-beer.webp' },
]

const HENS_BUCKS = [
  { title: 'Hens Party', desc: 'Spa morning, pool party, sunset cocktails, private dinner. All-female coordination available.', icon: Heart },
  { title: 'Bucks Party', desc: 'BBQ feast, whiskey tasting, poker night, beach day. Custom adrenaline activities available.', icon: Sun },
]

const PARTY_TESTIMONIALS = [
  {
    name: 'The London Crew',
    location: 'Canggu Villa Party',
    quote: '30 of us flew in for a milestone birthday. The sundowner party with BBQ, cocktails, and a DJ was the highlight of our Bali trip.',
    rating: 5,
  },
  {
    name: 'Sarah\'s Hens',
    location: 'Seminyak Villa',
    quote: 'Sofia organised the perfect hens party — spa morning, pool floats, sunset cocktails, and a glam dinner. Every detail was Instagram-worthy.',
    rating: 5,
  },
  {
    name: 'The Smith Group',
    location: 'Uluwatu Villa',
    quote: 'Corporate cocktail reception for 50 clients. Professional, stylish, and the canapés were incredible. Our clients were impressed.',
    rating: 5,
  },
]

const FAQS = [
  { q: 'What is the minimum guest count for a villa party?', a: 'Cocktail Reception: 20 guests. Sundowner Party: 15 guests. Casual Mixer: 10 guests. We can accommodate smaller groups with adjusted pricing.' },
  { q: 'Can we have a pool party?', a: 'Absolutely. Many of our villa parties are poolside. We provide pool floats, waterproof decor, and can arrange floating brunch add-ons.' },
  { q: 'Do you provide the DJ and sound system?', a: 'We can arrange DJs, live bands, or provide Bluetooth speakers. Sound system rental is available for larger parties.' },
  { q: 'Can we bring our own alcohol?', a: 'Yes. Our packages include a standard bar, but you are welcome to supplement with your own bottles. Corkage may apply depending on the package.' },
  { q: 'What time do villa parties typically start?', a: 'Sundowner parties start at 5:30 PM for sunset. Cocktail receptions can start any time from 4 PM. Casual mixers typically begin at 7 PM.' },
  { q: 'Do you handle noise restrictions?', a: 'We work with villa management to understand noise curfews. For parties with live music or DJs, we recommend villas with good sound insulation or remote locations.' },
  { q: 'Can we do a themed party?', a: 'Yes. Our five standard themes are starting points. We love custom themes — send us your idea and we will make it happen.' },
  { q: 'Is cleanup included?', a: 'Yes. All party packages include full cleanup. We leave the villa as we found it. Additional post-party deep cleaning can be arranged if needed.' },
]

const LATE_NIGHT_POINTS = [
  'We confirm villa noise cut-off times before the event so the party format suits the property from the start.',
  'Responsible service matters: bartenders are briefed to slow service when needed rather than pushing an open bar blindly.',
  'Transport coordination for drivers or ride-hailing pickups can be built into the end-of-night plan for larger groups.',
  'Cleanup begins in layers so glassware, rubbish, and buffet breakdown do not hit all at once at the end of the night.',
]

const ADDONS = [
  { title: 'Sound Equipment Upgrade', price: '+IDR 3M – 12M', desc: 'For larger villas, speeches, and late-night sets.' },
  { title: 'Extra Bartender + Barback', price: '+IDR 1.8M – 3.2M', desc: 'Useful once guest counts climb or cocktails get more complex.' },
  { title: 'After-Party Snack Station', price: '+IDR 180K – 320K/pp', desc: 'Late-night sliders, satay, tacos, or comfort food trays.' },
  { title: 'Security & Guest Check-In', price: '+IDR 2M – 6M', desc: 'For high-profile groups or large guest lists.' },
]

export default function EventsVillaPartiesPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.party-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.party-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Villa Party Catering Bali — BBQ, Pool & Night Events | myCHEF"
        description="Villa party catering in Bali — BBQ nights, cocktail receptions, pool parties & late events. Food, bar, staff and cleanup in one service."
        canonical={`${SITE}/events/villa-parties`}
        ogImage={`${SITE}/bbq-poolside.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema('Villa Party Catering Bali', 'myCHEF.id caters villa parties in Bali with BBQ menus, canapés, cocktails, bartenders, and service staff. We handle setup, live service, and cleanup so hosts can focus on the guest experience.', `${SITE}/events/villa-parties`),
          offerSchema('Cocktail Reception', 650000, 'IDR', `${SITE}/events/villa-parties`),
          offerSchema('Sundowner Party', 850000, 'IDR', `${SITE}/events/villa-parties`),
          offerSchema('Casual Mixer', 950000, 'IDR', `${SITE}/events/villa-parties`),
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Villa Party Catering in Bali',
            description: 'Private chef villa parties in Bali — BBQ, poolside, buffet, plated dinner, cocktail service, and full staff.',
            location: { '@type': 'Place', name: 'Bali, Indonesia' },
            organizer: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Villa Party Catering Bali', `${SITE}/events/villa-parties`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/generated/mychef-events-bali-villa-party-night.webp" alt="Night-time villa party with bar and pool lighting in Bali" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Villa Parties' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Villa Parties
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Parties in Bali — BBQ, Pool, Cocktail & Night Events
          </h1>
          <p className="text-lg md:text-xl text-white/[80%] mb-8 max-w-xl">
            Sunset BBQs, pool parties, cocktail receptions, and late-night celebrations with food, drinks, bartender service, staffing, music coordination, and cleanup all handled by one team.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-villa-parties-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#244e66] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Plan Your Party
            </a>
            <a href="#formats" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Wine className="w-4 h-4" /> View Formats
            </a>
          </div>
          <p className="text-sm md:text-base text-white/[70%] uppercase tracking-[0.2em] text-left">
            From IDR 650K++/guest · Bar, staffing, and cleanup handled
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section id="formats" className="party-content py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                The Bali Party Brief
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                myCHEF is built for villa parties where food, bar, and timing all need to stay moving
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Villa parties are usually at their best when they feel loose to the guest but tightly run underneath. Someone needs to think about the flow from sunset drinks into food service, the bar load after the first hour, what happens when guests move from the pool to the lounge, and how cleanup starts without flattening the mood. That is the gap we fill. We plan the party as an operational sequence, not just a menu and a bartender.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Some groups want a proper cocktail reception, some want a sundowner BBQ, and some want a looser dinner-party format that can stretch into the night. The right choice depends on guest count, villa layout, neighbours, and how much movement the host wants. The cards below show the starting structures we use most often.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <OptimizedImage src="/generated/generated/mychef-events-bali-villa-party-night.webp" alt="Bali villa party setup with bar and long-table dining" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Party Types & Formats" subtitle="Choose the structure first, then we dial the food, bar, and entertainment around it." />
          <div className="grid md:grid-cols-3 gap-6">
            {PARTY_FORMATS.map((format) => (
              <EventFormatCard key={format.title} {...format} accent={ACCENT} />
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={650000} minGuests={20} maxGuests={80} defaultGuests={30} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={850000} minGuests={15} maxGuests={50} defaultGuests={25} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={950000} minGuests={10} maxGuests={30} defaultGuests={18} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Food & BBQ Showcase
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Party food needs to eat well standing up, by the pool, and late into the night
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Good villa party food keeps the room energised. That usually means a combination of live BBQ, finger food, grazing tables, and shareable dishes that can be eaten without forcing everyone into formal dining mode. Live stations work particularly well because they give the party a focal point, keep food hot, and create natural movement around the villa. We often pair that with passed snacks early, then add heavier items once the bar has been running for a while.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                For guests who stay late, after-party food matters more than people expect. Sliders, satay, tacos, noodles, or grilled skewers at the right moment can stabilise the night, keep the mood high, and make the event feel more generous overall. The menu is always designed around the party format, not the other way around.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <OptimizedImage src="/generated/sol-bbq.webp" alt="Live BBQ station for a Bali villa party" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <OptimizedImage src="/generated/party-beer.webp" alt="Party bartender service and drinks at a Bali villa event" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Bar & Cocktails
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The bar is part of the production, not an afterthought in the corner
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                At villa parties, the bar often becomes the social centre of the whole night. That means it needs enough ice, glassware, garnish prep, and staff to avoid queues and keep the mood from flattening. We design the bar around guest count and drink complexity: a standard open bar is fine for beer, wine, and simple mixed drinks, but once you want signature cocktails or faster service for bigger groups, the setup needs to scale.
              </p>
              <div className="space-y-4">
                {BAR_PACKAGE.map((bar) => (
                  <div key={bar.title} className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center shrink-0"><Wine className="w-4 h-4 text-[#2C5F7C]" /></div>
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <h3 className="text-sm font-semibold text-[#1A1A1A]">{bar.title}</h3>
                        <span className="text-sm font-semibold text-[#2C5F7C] whitespace-nowrap">{bar.price}</span>
                      </div>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{bar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Staffing & Logistics
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The right staffing level is what makes a party feel easy instead of chaotic
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Most villa party stress comes from underestimating what the team needs to do at once: greet guests, pass drinks, work a grill, reset tables, coordinate music, keep the bar full, and clean discreetly as the night moves on. We scope staff against those real actions. Bigger parties need more than a chef and bartender. They need floor staff, setup crew, and someone watching the timeline so the host does not become the event manager halfway through the evening.
              </p>
              <div className="space-y-3">
                {[
                  'Setup crews usually arrive 3 hours before guest arrival to build the bar, food stations, and party styling.',
                  'Service staffing is adjusted to the food style: more tray-pass for cocktail parties, more floor clearing for dinner-heavy formats.',
                  'DJ, sound, and photographer coordination is handled against the food run-sheet so key moments land cleanly.',
                  'Cleanup is staged throughout the night so glasses, rubbish, and buffet waste do not pile up at the end.',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <OptimizedImage src="/generated/party-pool.webp" alt="Poolside villa party staffing and setup in Bali" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Safety & Late Night Standards
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Late parties only stay fun when the practical limits are planned in advance
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The best night events do not feel heavily policed, but they are carefully bounded. We check villa curfews, sound rules, parking, and access before confirming the final format, because those details shape what kind of party the property can realistically support. We also plan drink pacing, end-of-night food, and guest departure flow early, which is how the night stays high-energy without becoming sloppy or difficult for the villa team.
              </p>
              <div className="space-y-3">
                {LATE_NIGHT_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <OptimizedImage src="/generated/party-rooftop.webp" alt="Late-night rooftop style villa party in Bali" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Themes & Upgrades
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Decor, music, and add-ons that change the energy of the night
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                A villa party usually needs one strong identity rather than endless decoration. We use themes to guide colour, music, bar styling, and how the villa should feel once the sun goes down. From there, upgrades such as better sound, extra bartenders, or an after-party snack station make sense because they directly improve how the night runs for guests.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {ADDONS.map((addon) => (
                  <div key={addon.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-4">
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{addon.title}</h3>
                    <p className="text-sm font-semibold text-[#2C5F7C] mb-1">{addon.price}</p>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{addon.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {MUSIC_OPTIONS.map((music) => (
                  <div key={music.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-4">
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{music.title}</h3>
                    <p className="text-sm font-semibold text-[#2C5F7C] mb-1">{music.price}</p>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{music.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {HENS_BUCKS.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-4 flex items-start gap-3">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><item.icon className="w-4 h-4 text-[#2C5F7C]" /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 sticky top-24">
              {THEMES.map((theme) => (
                <div key={theme.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center shrink-0"><theme.icon className="w-5 h-5 text-[#2C5F7C]" /></div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{theme.title}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{theme.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Real Parties" title="Celebration Gallery" subtitle="Poolside dining, rooftop mood, live food stations, and bars that actually keep up with the room." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These examples show the formats people ask us to run most often in Bali: a night party around the pool, a more open sundowner look, a rooftop-style scene, and live food that keeps guests circulating instead of standing in one place. The images are different, but the operational spine is the same every time.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Night Pool Party', image: '/generated/generated/mychef-events-bali-villa-party-night.webp' },
              { title: 'Poolside Dinner Party', image: '/generated/party-pool.webp' },
              { title: 'Rooftop Mood', image: '/generated/party-rooftop.webp' },
              { title: 'Live BBQ Station', image: '/generated/sol-bbq.webp' },
            ].map((party) => (
              <div key={party.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={party.image} alt={party.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{party.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 4 — Decor Details" title="Production Details in the Space" subtitle="These are the kinds of upgrades that make the villa read as a party venue rather than just a house with music." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DECOR_GALLERY.map((decor) => (
              <div key={decor.title} className="bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={decor.image} alt={decor.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-[#1A1A1A] mb-1">{decor.title}</h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed">{decor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={PARTY_TESTIMONIALS}
        title="Party People Say"
        subtitle="Real celebrations, real villas, real good times."
      />

      <section className="py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Villa Party FAQ" />
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
              { to: '/events', label: 'All Events' },
              { to: '/catering', label: 'Villa Catering' },
              { to: '/in-villa-service/bartenders', label: 'Bartenders' },
              { to: '/book', label: 'Book myCHEF' }
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

      <section className="py-20 md:py-28 bg-[#FAFAF8] party-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Book" title="Plan Your Villa Party" subtitle="Tell us your date, group size, and vibe. Sofia will design the right food, bar, and party flow." />
          <BookingFormCatering
            title="Villa Party Inquiry"
            subtitle="We will reply with format recommendations, pricing, and availability within the hour."
            fields={[
              { name: 'format', label: 'Party Format', type: 'select', icon: Wine, required: true },
              { name: 'date', label: 'Party Date', type: 'date', icon: Calendar, required: true },
              { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 30', required: true },
              { name: 'villa', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Canggu, Seminyak...', required: true },
              { name: 'theme', label: 'Theme or Vibe', type: 'text', placeholder: 'Tropicana, Gatsby, Custom...' },
              { name: 'music', label: 'Music Preference', type: 'text', placeholder: 'DJ, Live band, Playlist...' },
              { name: 'bar', label: 'Bar Level', type: 'text', placeholder: 'Standard, Cocktail, Premium...' },
              { name: 'notes', label: 'Tell us more', type: 'textarea', placeholder: 'Occasion, curfew, dietary needs, surprise moments, transport...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
            ]}
            packageOptions={['Cocktail Reception', 'Sundowner Party', 'Casual Mixer']}
            whatsappName="Sofia"
            accent={ACCENT}
          />
        </div>
      </section>

      <PressStrip />
      <TaxFooter />
    </div>
  )
}
