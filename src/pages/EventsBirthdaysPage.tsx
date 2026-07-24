import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import {
  MessageCircle, Calendar, Check, Cake, PartyPopper, Gift,
  Music, Camera, Sparkles,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a birthday party in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Intimate Birthday Dinner',
    price: <AllInPrice price={1500000} />,
    guestRange: '4–12 guests',
    description: 'A restaurant-grade evening in your own villa: a five-course plated dinner cooked fresh by your private chef, a birthday cake, table styling, a dedicated waiter and a photographer for one hour.',
    features: ['5-course plated dinner', 'Birthday cake', 'Table styling', 'Photographer 1h', 'Dedicated waiter'],
  },
  {
    title: 'Birthday Villa Party',
    price: <AllInPrice price={850000} />,
    guestRange: '15–40 guests',
    description: 'The full villa party: BBQ buffet cooked live on site, a bartender running a three-hour open bar, DJ for four hours, decor and birthday cake, a photographer for two hours and a day-of coordinator.',
    features: ['BBQ buffet cooked live', 'Bartender + open bar 3h', 'DJ 4h', 'Decor + cake', 'Photographer 2h', 'Day-of coordinator'],
    highlighted: true,
  },
  {
    title: 'Family Birthdays',
    price: 'Custom quote',
    guestRange: '2–40 guests',
    description: 'Combined family events with a separate kids menu, an adult menu and a coordinated entertainment area, so nobody is managing the flow instead of celebrating.',
    features: ['Adult menu + kids menu', 'Coordinated entertainment area', 'Flexible timing for all ages', 'Add-on entertainment & decor'],
  },
]

const THEMES = ['Tropical', 'Glam', 'Surfer', 'Milestone 30/40/50', 'Custom']

const CAKE_STYLES = [
  { name: 'Classic Buttercream', desc: 'Smooth finish, custom colour, name in icing.', colour: 'from-[#F5E6D3] to-[#E8D5C4]' },
  { name: 'Naked Cake', desc: 'Semi-exposed layers, fresh flowers, rustic finish.', colour: 'from-[#F0E6D8] to-[#E2D4C0]' },
  { name: 'Chocolate Drip', desc: 'Rich ganache drip, gold leaf, macaron accents.', colour: 'from-[#3E2723] to-[#5D4037]' },
  { name: 'Tropical Fruit', desc: 'Coconut base, mango, passionfruit, edible flowers.', colour: 'from-[#FFF8E1] to-[#FFECB3]' },
  { name: 'Mirror Glaze', desc: 'High-gloss finish, marble effect, modern look.', colour: 'from-[#E0F7FA] to-[#B2EBF2]' },
  { name: 'Custom Tiered', desc: '2–3 tiers, any theme, toppers, and detailing.', colour: 'from-[#F3E5F5] to-[#E1BEE7]' },
]

const ADDONS = [
  { icon: Cake, title: 'Custom 3-Tier Cake', price: '+IDR 2M – 4M' },
  { icon: Camera, title: 'Photographer (extended, 4h)', price: '+IDR 4.8M' },
  { icon: Music, title: 'Live Band 3h', price: '+IDR 8M – 15M' },
  { icon: Sparkles, title: 'Fire Dancer 30min', price: '+IDR 4.5M' },
  { icon: Gift, title: 'Themed Premium Decor', price: '+IDR 3.5M – 7.5M' },
  { icon: PartyPopper, title: 'Kids Entertainment', price: '+IDR 2M – 5M' },
]

const FAQS = [
  { q: 'How much does birthday catering in Bali cost?', a: 'Two published formats: the Intimate Birthday Dinner at IDR 1.5M++/person (4–12 guests) and the Birthday Villa Party at IDR 850K++/person (15–40 guests). "++" adds 11% government tax + 10% service charge. Group totals: 8 guests ~IDR 14.5M all-in; 24 guests ~IDR 24.7M all-in. Villa catering for groups across Bali starts from IDR 700K/person for simpler menus.' },
  { q: 'What\'s the minimum guest count?', a: 'Four guests for the intimate dinner, fifteen for the villa party. Smaller dinners for 2–6 can be arranged as a private chef booking.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes. Vegetarian, vegan, gluten-free, halal-friendly and allergy-aware menus are planned at the briefing stage, and kids\' menus run alongside adult food at family events. Tell us the dietary list when you enquire.' },
  { q: 'Do we need the villa\'s permission for a birthday party?', a: 'For anything beyond a quiet dinner, yes — most villas require event approval, and some neighbourhoods have noise expectations or banjar notification requirements. We coordinate with your villa manager before confirming the format, DJ and bar plan.' },
  { q: 'Do you provide the cake and decorations?', a: 'A standard cake (chocolate or vanilla, single tier, name in icing) is included in both formats. Custom tiered cakes (+IDR 2–4M), themed decor (+IDR 3.5–7.5M) and entertainment are add-ons — we coordinate trusted suppliers so everything arrives on one timeline.' },
  { q: 'What happens if it rains?', a: 'We plan a covered or indoor fallback for every outdoor setup — same menu, same styling, moved inside the villa or under cover. BBQ service shifts to a sheltered area; the party continues.' },
  { q: 'How do deposits and cancellation work?', a: 'A 50% deposit confirms your date and locks your chef team (aligned to live page figure; sitewide unification pending business decision). Cancellation: 7+ days before the event, 75% refund; 48 hours or more, 50% credit; under 48 hours, no refund. Booking lead times: 7 days for dinners, 10–14 days for villa parties.' },
]

const STAFFING_POINTS = [
  'For seated dinners we plan one waiter per 8–10 guests so plates land together and glasses stay topped up.',
  'Pool parties add a bartender, floor staff and a setup crew that arrives roughly 3 hours before guest arrival.',
  'If you have a DJ, live music, cake surprise, or speech moment, our coordinator cues those transitions so the food timing stays intact.',
  'Cleanup is part of the service plan — glassware, rubbish, buffet breakdown, and kitchen reset are handled before we leave the villa.',
]

const birthdayServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Birthday Catering Bali',
  serviceType: 'Birthday party catering and private chef dinners',
  provider: {
    '@type': 'LocalBusiness',
    name: 'myCHEF.id',
    url: 'https://mychef.id/',
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
  description: 'Birthday catering for Bali villas: intimate chef dinners (4–12 guests) and full villa birthday parties (15–40 guests) with BBQ, bar service, cake, styling and cleanup.',
  offers: [
    { '@type': 'Offer', name: 'Intimate Birthday Dinner', price: '1500000', priceCurrency: 'IDR', description: 'Per person, 4–12 guests, 5-course plated dinner, cake, styling, photographer 1h. ++ 11% tax + 10% service.' },
    { '@type': 'Offer', name: 'Birthday Villa Party', price: '850000', priceCurrency: 'IDR', description: 'Per person, 15–40 guests, BBQ buffet, bartender + open bar 3h, DJ 4h, decor + cake, photographer 2h, coordinator. ++ 11% tax + 10% service.' },
  ],
}

export default function EventsBirthdaysPage() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll('.birthday-reveal').forEach(el => {
        (el as HTMLElement).style.opacity = '1'
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.birthday-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.birthday-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Birthday Catering Bali | Private Villa Celebrations | myCHEF"
        description="Birthday catering for Bali villas: live chef BBQs or fine-dining menus with food, drinks, cake & styling handled. WhatsApp myCHEF."
        canonical={`${SITE}/events/birthdays`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-birthdays.webp`}
        jsonLd={[
          birthdayServiceSchema,
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Birthdays', `${SITE}/events/birthdays`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-hero-birthdays.webp" alt="Sunset birthday pool party setup at a premium Bali villa" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Birthdays' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Birthday Catering Bali
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Birthday Catering in Bali — Dinners & Villa Parties, Fully Run
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-6 max-w-xl">
            A great birthday in a Bali villa needs more than a menu. Someone has to time the food around the pool, land the cake moment after the speeches, keep the bar moving, and hand the villa back spotless when the last guest leaves. That&apos;s what myCHEF&apos;s birthday catering does: food, drinks, service staff, styling coordination and cleanup, run as one operation — so the host gets to be a guest at their own party.
          </p>
          <p className="text-base md:text-lg text-white/[85%] mb-8 max-w-xl">
            We&apos;ve cooked celebrations in 560+ villas across Bali over 8+ years, from six-person plated dinners to 40-guest BBQ and bar nights. Two formats, published prices, one WhatsApp message to start.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Book a Birthday
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-birthdays-cta" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Plan Your Birthday on WhatsApp
            </a>
          </div>
          <p className="text-sm md:text-base text-white/80 mb-2 text-left">
            Send your date, guest count and villa area — we reply within the hour with a clear, fixed quote. No payment required to enquire.
          </p>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Intimate dinner IDR 1.5M++/person · Villa party IDR 850K++/person
          </p>
          <p className="text-xs text-white/[60%] mt-2 text-left">
            All prices marked {'"++"'} are subject to 11% government tax + 10% service charge.
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-content birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Birthday Formats & Prices" subtitle="Two published formats plus combined family celebrations. Every quote shows the all-in total upfront." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These formats are designed around how birthdays are actually hosted in Bali villas. The intimate dinner gives you restaurant-style pacing and a quieter atmosphere. The villa party is built for movement, drinks, BBQ, and entertainment. Family birthdays keep food and coordination multi-generational, with separate attention for younger guests so adults can relax. For a BBQ-led version in more depth, see our <Link to="/villa-bbq-catering-bali" className="text-[#2C5F7C] hover:underline">villa BBQ catering</Link> page; for cocktail-forward formats, see <Link to="/events/villa-parties" className="text-[#2C5F7C] hover:underline">villa party formats</Link>.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
          <p className="text-[#4A4745] text-center max-w-3xl mx-auto leading-relaxed mt-10">
            <strong>What group totals look like:</strong> 8 guests at the intimate dinner runs IDR 12M++ (~IDR 14.5M all-in). 24 guests at the villa party runs IDR 20.4M++ (~IDR 24.7M all-in). Your quote is fixed before you commit.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={4} maxGuests={12} defaultGuests={8} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={850000} minGuests={15} maxGuests={40} defaultGuests={24} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                What&apos;s Included
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What a myCHEF Birthday Includes
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Every format is scoped to your villa, guest count and energy — then delivered by one team:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed"><strong>Food cooked fresh on site</strong> by our Indonesian chefs — plated courses, live BBQ, grazing and finger food in waves, plus late-night comfort food (sliders, satay, skewers) if the party runs long.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed"><strong>Bar service</strong> — a staffed open bar in the villa party format, or add a <Link to="/in-villa-service/bartenders" className="text-[#2C5F7C] hover:underline">private bartender hire</Link> from IDR 250K/hour to any dinner.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed"><strong>Cake and styling</strong> — a standard birthday cake is included; signature cakes and decor sit in the add-on menu below.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed"><strong>Setup and full cleanup</strong> — glassware, rubbish, buffet breakdown and kitchen reset are handled before we leave.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-birthdays-bbq.webp" alt="Live BBQ station at a Bali villa birthday party" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Cake & Styling
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cakes, Styling & Add-Ons
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                The cake is the one moment every guest remembers, so we plan it like a service moment — sized to the group, built to hold in Bali heat, styled to the party.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {CAKE_STYLES.map((cakeStyle) => (
                  <div key={cakeStyle.name} className="rounded-2xl border border-[#E8E6E3] bg-white overflow-hidden">
                    <div className={`h-16 bg-gradient-to-br ${cakeStyle.colour}`} />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{cakeStyle.name}</h3>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{cakeStyle.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#E8E6E3] bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#F5F5F3] text-[#1A1A1A] font-semibold">
                    <tr>
                      <th className="px-4 py-3">Add-on</th>
                      <th className="px-4 py-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ADDONS.map((addon) => (
                      <tr key={addon.title} className="border-t border-[#E8E6E3]">
                        <td className="px-4 py-3 text-[#4A4745]">{addon.title}</td>
                        <td className="px-4 py-3 font-semibold text-[#2C5F7C]">{addon.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#4A4745] leading-relaxed mt-6">
                Themes are designed around the villa&apos;s real footprint — one strong visual idea that photographs well, not twenty props blocking the service path. <span className="inline-flex flex-wrap gap-2 mt-2">
                  {THEMES.map((theme) => (
                    <span key={theme} className="px-3 py-1 rounded-full border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A]">
                      {theme}
                    </span>
                  ))}
                </span>
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-birthdays-brunch.webp" alt="Bright birthday brunch spread with tropical fruit and pastries in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Staffing & Setup
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Staffing, Setup & Cleanup
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The difference between a relaxed birthday and a stressful one is invisible to guests: enough staff, setup three hours before arrival, and a coordinator cueing DJ, speeches and cake so food timing stays intact. For seated dinners we plan one waiter per 8–10 guests; pool parties add a bartender, floor staff and a setup crew. Cleanup is part of the service plan, not an extra.
              </p>
              <div className="space-y-3">
                {STAFFING_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-birthdays-poolside.webp" alt="Poolside birthday setup with decor and staff at a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-birthdays-festival.webp" alt="Themed milestone birthday party styling in a Bali villa garden" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Practicalities
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Villa Rules, Noise & Practicalities
              </h2>
              <p className="text-[#4A4745] leading-relaxed">
                Before we confirm a format, we check what your villa can realistically support: house rules, event permission from the villa manager or owner, noise expectations and neighbourhood considerations. Some villas and local banjar (community councils) require advance notice or an event fee for larger parties — we flag this during planning so there are no surprises on the day. If your villa has strict limits, we recommend a format that fits — a plated dinner carries further than a DJ set.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white birthday-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Birthday Catering Bali — FAQ" subtitle="Common questions about booking birthday parties with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Book Your Birthday"
            subtitle="Tell us the date, the guest count, the villa and the vibe — we'll recommend the format, staffing level and add-ons that make sense, and send a fixed quote with nothing hidden."
            packageOptions={['Intimate Birthday Dinner', 'Birthday Villa Party', 'Family Birthdays']}
            fields={[
              { name: 'format', label: 'Format', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests', type: 'number', placeholder: 'e.g. 20', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'age', label: 'Birthday Age / Occasion', type: 'text', placeholder: 'e.g. 40th birthday, 8th birthday' },
              { name: 'theme', label: 'Theme', type: 'text', placeholder: 'e.g. Tropical, Milestone 40th' },
              { name: 'food', label: 'Food Style', type: 'textarea', placeholder: 'Plated dinner, BBQ, finger food, kids menu...' },
              { name: 'entertainment', label: 'Entertainment Notes', type: 'textarea', placeholder: 'DJ, live music, kids entertainer, surprise speech...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
          />
          <p className="text-[#4A4745] text-center mt-8">
            Celebrating a 30th, 40th or 50th at full production level? See our <Link to="/luxury-birthday-party-bali" className="text-[#2C5F7C] hover:underline">milestone and luxury birthday production</Link> page.
          </p>
          <p className="text-[#4A4745] text-center mt-4">
            For a dedicated chef-led <Link to="/experiences/kids-birthday-chef-party" className="text-[#2C5F7C] hover:underline">kids</Link> birthday chef party, see our kids birthday chef party page and <Link to="/kids-menus" className="text-[#2C5F7C] hover:underline">kids</Link> menus.
          </p>
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
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Cocktail receptions and celebrations.' },
              { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Business retreats and offsites.' },
              { label: 'Anniversaries', href: '/events/anniversaries', desc: 'Romantic milestone dinners.' },
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
        pageSource="events-birthdays"
        serviceName="birthday party catering in Bali"
        intent="birthday packages and pricing"
      />
    </div>
  )
}
