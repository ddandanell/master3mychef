import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Users, MapPin,
  Wine, Sun, Music, Palette, Sparkles, Heart, Check,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ArticleContentSection, Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a villa party in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const PARTY_FORMATS = [
  {
    title: 'Cocktail Reception',
    price: <AllInPrice price={650000} />,
    guestRange: '20 — 80 guests',
    description: 'An elegant standing reception: 6–8 canapé varieties, a grazing station, a 2.5-hour open bar with bartender and full service staff. Ideal for arrivals, celebrations and corporate socials.',
    features: ['6–8 canapé varieties', 'Grazing station', '2.5h open bar', 'Bartender & service staff', 'Cocktail napkins & glassware', 'Cleanup'],
    highlighted: false,
  },
  {
    title: 'Sundowner Party',
    price: <AllInPrice price={850000} />,
    guestRange: '15 — 50 guests',
    description: 'The classic Bali villa party: sunset-to-evening BBQ or buffet, a three-hour open bar with cocktail menu, speaker, service staff and timing built around the sun going down.',
    features: ['BBQ or buffet menu', '3h open bar', 'Bartender + cocktail menu', 'Bluetooth speaker', 'Sunset timing', 'Service staff', 'Cleanup'],
    highlighted: true,
  },
  {
    title: 'Casual Mixer',
    price: <AllInPrice price={950000} />,
    guestRange: '10 — 30 guests',
    description: 'A relaxed dinner-party format: family-style sharing plates, a wine selection, table styling and background music. Intimate but festive — the house party where nobody has to cook or clean.',
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
  { title: 'Festoon Lighting', desc: 'String lights across terraces and gardens.', image: '/generated/mychef-events-bali-villa-parties-festoon.webp' },
  { title: 'Pool Floats & Decor', desc: 'Themed inflatables, flower arrangements, lanterns.', image: '/generated/mychef-events-bali-villa-parties-pool.webp' },
  { title: 'Lounge Areas', desc: 'Low tables, cushions, rugs for relaxed seating.', image: '/generated/mychef-events-bali-villa-parties-rooftop.webp' },
  { title: 'Bar Styling', desc: 'Custom bar setup with branded menus and garnishes.', image: '/generated/mychef-events-bali-villa-parties-bar.webp' },
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
  { q: 'How much does villa party catering cost in Bali?', a: 'From IDR 650K++/person for a cocktail reception (20–80 guests), IDR 850K++ for a sundowner (15–50) and IDR 950K++ for a casual mixer (10–30). "++" adds 11% government tax + 10% service charge. Example: 30-guest reception ~IDR 23.6M all-in.' },
  { q: "What's the minimum guest count?", a: '20 for cocktail receptions, 15 for sundowners, 10 for mixers. Smaller groups can be quoted with adjusted pricing — just ask.' },
  { q: "Do we need the villa's permission — and what about noise rules?", a: "Yes, for parties beyond a quiet dinner. We coordinate with your villa manager on event approval, noise expectations and curfew times before confirming, and design the sound plan around the property. Some neighbourhoods also expect banjar (community) notification for larger events — we advise on what's customary for your location." },
  { q: 'Can we bring our own alcohol?', a: "Yes. All formats include a standard bar, but you're welcome to supplement with your own bottles. Corkage may apply depending on the package — we'll confirm in your quote." },
  { q: 'Can you handle dietary requirements?', a: 'Yes — vegetarian, vegan, gluten-free and allergy-aware options are planned into every menu at briefing, across canapés, BBQ and sharing formats.' },
  { q: 'Can we have a pool party?', a: 'Absolutely — many of our villa parties are poolside. We provide pool floats and waterproof decor, and time food service around swimming.' },
  { q: 'What happens if it rains?', a: 'Every outdoor format has a covered fallback planned in advance: grill stations move to sheltered areas, the bar relocates under cover, and the timeline flexes around the weather.' },
  { q: 'How do deposits, timing and cancellation work?', a: 'Sundowners start at 5:30pm for sunset; cocktail receptions from 4pm; mixers from 7pm. A 50% deposit confirms your date. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
]

const VILLA_RULES_POINTS = [
  'Villa permission. Most villas require event approval for anything beyond a quiet dinner. Tell us your villa and we coordinate with the manager or owner before confirming the format.',
  'Noise and curfews. We confirm the property\'s noise expectations and cut-off times before the event and design around them — speaker placement, DJ end-time, and a wind-down plan. For strict neighbourhoods we recommend formats that carry less sound (mixer or dinner formats over DJ-led parties).',
  'Banjar notification. Some communities require advance notice or an event contribution for larger parties. We flag what\'s customary for your villa\'s location during planning so nothing surfaces on the day.',
  'Departure flow. For larger groups we plan end-of-night transport so the party ends cleanly for guests and neighbours.',
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
        title="Villa Party Catering Bali | Social Events Done Right"
        description="Villa party catering in Bali: cocktail receptions, pool parties & BBQs with food, bar staff and coordination. From IDR 650K++/guest. WhatsApp myCHEF."
        canonical={`${SITE}/events/villa-parties`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-villa-parties.webp`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Villa Party Catering Bali',
            serviceType: 'Villa party catering, bar service and event staffing',
            provider: {
              '@type': 'LocalBusiness',
              name: 'myCHEF.id',
              url: `${SITE}/`,
              telephone: '+62 896-7407-2020',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan',
                addressLocality: 'Denpasar',
                addressRegion: 'Bali',
                postalCode: '80226',
                addressCountry: 'ID',
              },
            },
            areaServed: 'Bali, Indonesia',
            description: 'Villa party catering in Bali: cocktail receptions, sundowner BBQ parties and casual mixers with food, open bar, service staff, entertainment coordination and full cleanup.',
            offers: [
              { '@type': 'Offer', name: 'Cocktail Reception', price: '650000', priceCurrency: 'IDR', description: 'Per person, 20–80 guests. Canapés, grazing station, 2.5h open bar, bartender, staff. ++ 11% tax + 10% service.' },
              { '@type': 'Offer', name: 'Sundowner Party', price: '850000', priceCurrency: 'IDR', description: 'Per person, 15–50 guests. BBQ/buffet, 3h open bar, cocktail menu, sunset timing. ++ 11% tax + 10% service.' },
              { '@type': 'Offer', name: 'Casual Mixer', price: '950000', priceCurrency: 'IDR', description: 'Per person, 10–30 guests. Family-style sharing menu, wine selection, styling. ++ 11% tax + 10% service.' },
            ],
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Villa Parties', `${SITE}/events/villa-parties`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-hero-villa-parties.webp" alt="Night-time Bali villa party with bar, pool and festoon lighting" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
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
            Villa Party Catering in Bali — Food, Bar, Staff & Cleanup, One Team
          </h1>
          <p className="text-lg md:text-xl text-white/[80%] mb-8 max-w-xl">
            The best villa parties feel loose to the guests and tightly run underneath. We cater and staff villa parties across Bali — pool parties, house parties, cocktail receptions, BBQ sundowners and late-night formats — with published per-person prices and one team running the whole night.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-villa-parties-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#244e66] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Plan Your Party
            </a>
            <a href="#formats" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Wine className="w-4 h-4" /> View Formats
            </a>
          </div>
          <p className="text-sm text-white/[70%] mb-2">
            Send your date, guest count and vibe — we reply within the hour with formats and a fixed quote.
          </p>
          <p className="text-sm md:text-base text-white/[70%] uppercase tracking-[0.2em] text-left">
            From IDR 650K++/guest · Food, bar, staff and cleanup handled
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section id="formats" className="party-content py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Party Formats & Prices
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Priced formats that bundle food, bar and staff from the start
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                The best villa parties feel loose to the guests and tightly run underneath. Someone has to manage the flow from sunset drinks into food service, the bar load after the first hour, what happens when guests move from pool to lounge, and how cleanup starts without flattening the mood. That's myCHEF's job.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                All prices "++" — 11% government tax + 10% service charge added. Every quote shows the all-in total upfront.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <OptimizedImage src="/generated/mychef-events-bali-hero-villa-parties.webp" alt="Bali villa party setup with bar and long-table dining" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Party Formats & Prices" subtitle="Choose the structure first, then we dial the food, bar, and entertainment around it." />
          <div className="grid md:grid-cols-3 gap-6">
            {PARTY_FORMATS.map((format) => (
              <EventFormatCard key={format.title} {...format} accent={ACCENT} />
            ))}
          </div>
          <p className="text-[#4A4745] leading-relaxed mt-8">
            For a fully cocktail-led evening with signature menu design, see our <Link to="/experiences/private-cocktail-party" className="text-[#2C5F7C] hover:underline">dedicated cocktail party experience</Link>. For BBQ-specific menus and packages, see <Link to="/villa-bbq-catering-bali" className="text-[#2C5F7C] hover:underline">villa BBQ catering</Link> and our <Link to="/catering/bbq-catering" className="text-[#2C5F7C] hover:underline">BBQ catering menus</Link>.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={650000} minGuests={20} maxGuests={80} defaultGuests={30} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={850000} minGuests={15} maxGuests={50} defaultGuests={25} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={950000} minGuests={10} maxGuests={30} defaultGuests={18} accent={ACCENT} />
          </div>
          <p className="text-[#4A4745] leading-relaxed mt-8">
            <strong>Group totals:</strong> 30 guests at a cocktail reception runs IDR 19.5M++ (~IDR 23.6M all-in). 25 guests at a sundowner runs IDR 21.3M++ (~IDR 25.7M all-in). 18 guests at a mixer runs IDR 17.1M++ (~IDR 20.7M all-in). Smaller groups than the listed minimums can be quoted with adjusted pricing.
          </p>
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
                Party Food That Keeps the Night Moving
              </h2>
              <p className="text-[#4A4745] leading-relaxed">
                Villa party food has to eat well standing up, by the pool, and late into the night. We build menus around live grills, finger food, grazing and shareable dishes — passed snacks early, heavier items once the bar has been running. A late-night station (sliders, satay, tacos, skewers) can be added at +IDR 180–320K per person to keep the night generous to the end.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <OptimizedImage src="/generated/mychef-events-bali-villa-parties-bbq.webp" alt="Live BBQ station for a Bali villa party" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <OptimizedImage src="/generated/mychef-events-bali-villa-parties-bar.webp" alt="Bartender serving cocktails at an illuminated Bali villa party bar" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Bar & Cocktails
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Bar, Properly Run
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                At a villa party the bar is the social centre — it needs ice, glassware, garnish prep and enough staff to avoid queues. Every format includes a standard open bar (beer, wine, spirits, mixers, soft drinks). Upgrade to a <strong>cocktail bar</strong> (+IDR 1.5M) for signature cocktails and fresh ingredients, or a <strong>premium bar</strong> (+IDR 3M) for top-shelf spirits, champagne and a custom menu. Larger or more complex parties can add an extra bartender and barback (+IDR 1.8–3.2M), or hire a <Link to="/in-villa-service/bartenders" className="text-[#2C5F7C] hover:underline">private bartender hire</Link> from IDR 350K/hour for smaller gatherings. Our bartenders are briefed on responsible service — pacing drinks rather than pushing an open bar blindly.
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
                Staffing & Production
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Staffing & Production
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Most party stress comes from underestimating what the team must do at once: greet, pour, grill, reset, coordinate music, clean as the night moves. We scope staff against those real actions — bigger parties get floor staff, a setup crew (on site roughly three hours before guests) and a coordinator watching the timeline so the host never becomes the event manager. DJs (from IDR 4M), live bands (from IDR 8M), sound upgrades (+IDR 3–12M) and security/guest check-in (+IDR 2–6M) are coordinated against the food run-sheet. Cleanup is staged through the night, not dumped at the end.
              </p>
              <div className="space-y-3">
                {[
                  'Setup crew on site roughly three hours before guests arrive.',
                  'A coordinator watches the timeline so the host never becomes the event manager.',
                  'DJ, sound, live band and security coordination is handled against the food run-sheet.',
                  'Cleanup is staged through the night, not dumped at the end.',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <OptimizedImage src="/generated/mychef-events-bali-villa-parties-pool.webp" alt="Poolside villa party staffing and setup in Bali" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Villa Rules & Permissions
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Villa Rules, Noise & Banjar — the Practical Stuff
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                This is the part most caterers skip, and the part that decides whether your party actually happens:
              </p>
              <div className="space-y-3">
                {VILLA_RULES_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <OptimizedImage src="/generated/mychef-events-bali-villa-parties-rooftop.webp" alt="Late-night rooftop style villa party in Bali" className="w-full h-full object-cover" loading="lazy" />
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
                Themes & Occasions
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                One strong identity beats endless decoration: Tropicana, Gatsby, Surfer, Disco or fully custom — guiding colour, music, bar styling and pool floats. We regularly run <strong>hens parties</strong>, <strong>bucks parties</strong>, milestone birthdays (see <Link to="/events/birthdays" className="text-[#2C5F7C] hover:underline">birthday catering</Link>) and corporate socials. Want the whole thing bundled with transport and staffing under one contract? See our <Link to="/villa-event-packages" className="text-[#2C5F7C] hover:underline">all-inclusive event packages</Link>.
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
              { title: 'Night Pool Party', image: '/generated/mychef-events-bali-hero-villa-parties.webp' },
              { title: 'Poolside Dinner Party', image: '/generated/mychef-events-bali-villa-parties-pool.webp' },
              { title: 'Rooftop Mood', image: '/generated/mychef-events-bali-villa-parties-rooftop.webp' },
              { title: 'Live BBQ Station', image: '/generated/mychef-events-bali-villa-parties-bbq.webp' },
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

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white party-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Villa Party Bali — FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#C5A028] mb-3">Also available</p>
          <h2 className="text-2xl font-semibold text-[#1A1916] mb-8">Explore More myCHEF Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { to: '/experiences/private-cocktail-party', label: 'dedicated cocktail party experience' },
              { to: '/villa-bbq-catering-bali', label: 'villa BBQ catering' },
              { to: '/catering/bbq-catering', label: 'BBQ catering menus' },
              { to: '/in-villa-service/bartenders', label: 'private bartender hire' },
              { to: '/events/birthdays', label: 'birthday catering' },
              { to: '/villa-event-packages', label: 'all-inclusive event packages' }
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
          <SectionHeader eyebrow="Book" title="Plan Your Party" subtitle="Tell us your date, group size and vibe — we'll recommend the format, bar level, staffing and entertainment, and send a fixed quote with nothing hidden." />
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

      {/* ═══════ RELATED EVENTS ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Other Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Weddings', href: '/events/weddings', desc: 'Villa wedding catering and planning.' },
              { label: 'Birthdays', href: '/events/birthdays', desc: 'Milestone birthday celebrations.' },
              { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Business retreats and offsites.' },
              { label: 'Anniversaries', href: '/events/anniversaries', desc: 'Romantic milestone dinners.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, bartenders, and staff.' },
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
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="events-villa-parties"
        serviceName="villa party catering in Bali"
        intent="party packages and pricing"
      />
    </div>
  )
}