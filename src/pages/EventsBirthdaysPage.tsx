import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Check, Cake, PartyPopper, Gift,
  Music, Camera, Sparkles,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead, { localBusinessSchema, breadcrumbSchema, detailedServiceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20book%20a%20birthday%20party.'
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Intimate Birthday Dinner',
    price: <AllInPrice price={1500000} />,
    guestRange: '4–12 guests',
    description: '5-course plated dinner, birthday cake, styling, and photographer for 1 hour. Perfect for milestone birthdays.',
    features: ['5-course menu', 'Birthday cake', 'Table styling', 'Photographer 1h', 'Dedicated waiter'],
  },
  {
    title: 'Birthday Villa Party',
    price: <AllInPrice price={850000} />,
    guestRange: '15–40 guests',
    description: 'BBQ buffet, bartender, open bar, DJ, decor, cake, and photographer. The full villa party experience.',
    features: ['BBQ buffet (B2)', 'Bartender + open bar 3h', 'DJ 4h', 'Decor + cake', 'Photographer 2h', 'Day-of coordinator'],
    highlighted: true,
  },
  {
    title: 'Kids Birthday Party',
    price: 'IDR 350K child / IDR 250K adult',
    guestRange: '10–30 kids',
    description: 'Kids menu, adult food, entertainment, themed decor, balloons, goodie bags, and photographer.',
    features: ['Kids menu + adult food', 'Entertainment', 'Themed decor', 'Balloons', 'Goodie bags', 'Photographer 2h'],
  },
]

const THEMES = ['Tropical', 'Glam', 'Surfer', 'Kids Unicorn', 'Milestone 30/40/50', 'Custom']

const CAKE_STYLES = [
  { name: 'Classic Buttercream', desc: 'Smooth finish, custom colour, name in icing.', colour: 'from-[#F5E6D3] to-[#E8D5C4]' },
  { name: 'Naked Cake', desc: 'Semi-exposed layers, fresh flowers, rustic finish.', colour: 'from-[#F0E6D8] to-[#E2D4C0]' },
  { name: 'Chocolate Drip', desc: 'Rich ganache drip, gold leaf, macaron accents.', colour: 'from-[#3E2723] to-[#5D4037]' },
  { name: 'Tropical Fruit', desc: 'Coconut base, mango, passionfruit, edible flowers.', colour: 'from-[#FFF8E1] to-[#FFECB3]' },
  { name: 'Mirror Glaze', desc: 'High-gloss finish, marble effect, modern look.', colour: 'from-[#E0F7FA] to-[#B2EBF2]' },
  { name: 'Custom Tiered', desc: '2–3 tiers, any theme, toppers, and detailing.', colour: 'from-[#F3E5F5] to-[#E1BEE7]' },
]

const THEMED_SETUPS = [
  { name: 'Tropical', desc: 'Palm leaves, pineapples, bright colours, pool floats.', colour: 'from-[#C5A028]/20 to-[#C5A028]/5' },
  { name: 'Glam', desc: 'Black and gold, sequins, champagne tower, sparkle.', colour: 'from-[#1A1A1A]/10 to-[#C5A028]/10' },
  { name: 'Surfer', desc: 'Beach casual, board shorts, sunset tones, acoustic.', colour: 'from-[#E8913A]/20 to-[#E8913A]/5' },
  { name: 'Kids Unicorn', desc: 'Pastel rainbow, glitter, balloons, magic backdrop.', colour: 'from-[#F8BBD0]/20 to-[#E1BEE7]/20' },
]

const REAL_BIRTHDAYS = [
  { title: 'Milestone 40th Pool Dinner', location: 'Canggu Villa', image: '/generated/mychef-events-bali-birthday-pool.webp' },
  { title: 'Birthday Welcome Setup', location: 'Seminyak Villa', image: '/generated/mychef-events-bali-party-birthday.webp' },
  { title: 'Sunset BBQ Bash', location: 'Uluwatu Villa', image: '/generated/mychef-finedining-bali-sol-bbq.webp' },
  { title: 'Birthday Brunch Recovery', location: 'Berawa Villa', image: '/generated/mychef-events-bali-party-brunch.webp' },
]

const ADDONS = [
  { icon: Cake, title: 'Custom 3-Tier Cake', price: '+IDR 2M – 4M' },
  { icon: Camera, title: 'Photographer Extended', price: '+IDR 4.8M (4h)' },
  { icon: Music, title: 'Live Band 3h', price: '+IDR 8M – 15M' },
  { icon: Sparkles, title: 'Fire Dancer 30min', price: '+IDR 4.5M' },
  { icon: Gift, title: 'Themed Premium Decor', price: '+IDR 3.5M – 7.5M' },
  { icon: PartyPopper, title: 'Kids Entertainment', price: '+IDR 2M – 5M' },
]

const FAQS = [
  { q: 'How far in advance to book?', a: 'Intimate dinner: 7 days. Villa party: 10–14 days. Kids party: 14 days (custom decor/entertainment booking).' },
  { q: 'Can you do a milestone theme?', a: 'Yes — signature themes for milestones included. Custom themes from +IDR 3,500,000.' },
  { q: 'Are you good with kids parties?', a: 'Yes — we have a dedicated kids party coordinator who handles entertainment booking, dietary needs, and decor.' },
  { q: 'Do you provide the cake?', a: 'Standard cake (chocolate or vanilla, single tier, with name in icing) is included. Custom 3-tier or signature cake is +IDR 2M–4M.' },
  { q: 'Can guests bring their own alcohol?', a: 'Yes — BYO welcome. We charge a corkage waiver fee of IDR 250,000 per villa party. Or we manage open bar through our bartender package.' },
  { q: 'What\'s the cancellation policy?', a: '7+ days before event: 75% refund. 48h+: 50% credit. Under 48h: no refund.' },
  { q: 'Can you do a surprise birthday?', a: 'Yes — we\'ll coordinate with one party member discreetly. Tell us the surprise level at booking.' },
  { q: 'Do you handle adult + kids parties simultaneously?', a: 'Yes — combined family events with separate kids menu + adult food + separate kids entertainment area.' },
]

const STAFFING_POINTS = [
  'For seated birthday dinners we normally plan 1 waiter for every 8–10 guests so plates land together and glasses stay topped up.',
  'Pool parties usually include a bartender, floor staff, and a setup crew that arrives roughly 3 hours before guest arrival.',
  'If you have a DJ, live music, cake surprise, or speech moment, our coordinator cues those transitions so the food timing stays intact.',
  'Cleanup is part of the service plan — glassware, rubbish, buffet breakdown, and kitchen reset are handled before we leave the villa.',
]

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
        title="Birthday Parties in Bali — Villa Catering & Events | myCHEF"
        description="Birthday parties at your Bali villa with food, drinks, staff, decor, and coordination handled by one team. From intimate dinners to 80-guest pool parties."
        canonical={`${SITE}/events/birthdays`}
        ogImage={`${SITE}/generated/mychef-events-bali-birthday-pool.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema('Birthday Party Catering Bali', 'myCHEF.id caters birthday parties in Bali with private chef menus, buffet or plated service, drinks, and event staffing. We manage setup, flow, and cleanup for everything from intimate dinners to full villa parties.', `${SITE}/events/birthdays`),
          offerSchema('Intimate Birthday Dinner', 1500000, 'IDR', `${SITE}/events/birthdays`),
          offerSchema('Birthday Villa Party', 850000, 'IDR', `${SITE}/events/birthdays`),
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Private Birthday Celebration in Bali',
            description: 'Private chef and catering for birthday parties at Bali villas — menus, service staff, setup, and cleanup.',
            location: { '@type': 'Place', name: 'Bali, Indonesia' },
            organizer: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Birthday Party Catering Bali', `${SITE}/events/birthdays`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-birthday-pool.webp" alt="Birthday pool party dinner at a Bali villa" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            Chapter 1 — Birthday Parties
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Birthday Parties in Bali — Villa Catering & Events
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            Food, drinks, bar service, decor, entertainment coordination, and full cleanup for birthdays that actually run smoothly — from intimate milestone dinners to high-energy villa pool parties.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Book a Birthday
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-birthdays-cta" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            From IDR 350K/child or 850K++/guest · Cake, staff, and cleanup handled
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white birthday-content birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                myCHEF runs the whole birthday, not just the food drop
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Birthday hosts usually need more than a menu. They need someone to think about the actual flow of the celebration: when food comes out, where the cake moment lands, how drinks are served around the pool, who resets the table after speeches, and how the villa gets handed back after the last guest leaves. That is where our team is useful. We handle food, drinks, service staff, setup coordination, and cleanup as one operation, so the event feels joined up instead of stitched together from separate vendors.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                We can build birthdays around different energies — a 6-person plated dinner, a 30-person BBQ and bar night, or a family party where adults want proper food while the kids need entertainment and easy timing. The planning starts with guest count, villa layout, and vibe, then we recommend the format, staffing level, cake style, and add-ons that make sense operationally and visually.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-party-birthday.webp" alt="Birthday celebration dining setup in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Three Birthday Formats" subtitle="Choose the structure that fits your guest count, villa layout, and how lively you want the celebration to feel." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These formats are designed around how birthdays are actually hosted in Bali villas. The intimate dinner format gives you restaurant-style pacing and a quieter atmosphere. The villa party format is built for movement, drinks, BBQ, and entertainment. The kids format keeps food and coordination family-friendly, with separate attention for younger guests so adults can relax instead of managing the flow themselves.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
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
                Party Food Showcase
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The food that keeps a birthday moving, not queueing
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Great birthday food should support the mood of the night. For villa parties, that usually means hot BBQ coming off the grill in waves, trays of finger food that can circulate while people mingle, and grazing-style tables that guests can return to without losing the energy of the room. We use those formats because they work in real life: people are swimming, chatting, taking photos, and moving between the pool, bar, and dining area. Food needs to be generous and easy to access.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                For more formal birthdays, we shift to plated menus or family-style courses so the birthday speech, cake moment, and photography feel more intentional. Either way, we make sure there is enough savoury food behind the drinks service, enough late-night comfort food if the party runs long, and enough variation that both adults and younger guests stay happy.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-finedining-bali-sol-bbq.webp" alt="BBQ catering spread for a Bali birthday villa party" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Cake & Desserts
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cakes that photograph well, portion cleanly, and match the party mood
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                The birthday cake is usually the one part every guest remembers, so we plan it like a real service moment rather than a last-minute add-on. We look at guest count, whether the cake is for display only or full serving, how long it needs to sit out in Bali heat, and whether the tone is elegant, playful, milestone-led, or family-friendly. Dessert tables can also include mini pastries, tropical fruit, gelato cups, and lighter sweets for daytime birthdays or brunch-style celebrations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
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
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-party-brunch.webp" alt="Birthday brunch desserts and cake styling in a villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
                Enough hands on site to keep the party feeling easy
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The difference between a good birthday and a stressful one is usually invisible to guests. It is the number of staff on the floor, how early the setup starts, how cleanly the bar is reset, and whether someone is actively managing the transitions between dinner, speeches, cake, music, and cleanup. We plan those details from the start so the host is not pulled into solving them on the day.
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
              <img src="/generated/mychef-events-bali-party-pool.webp" alt="Poolside birthday setup with staff and table styling in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-party-festival.webp" alt="Themed birthday party styling inspiration for Bali villa events" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Themes
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Styled themes that still work inside a real villa footprint
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Themes only look good when they suit the property and the guest flow. We design around where guests will enter, where the food will sit, how the bar is positioned, and what photographs well in daylight or after sunset. That is why our setups focus on practical signature looks instead of over-building the space and blocking service paths. Milestone birthdays often need one strong visual idea, not twenty small props.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {THEMED_SETUPS.map((setup) => (
                  <div key={setup.name} className="rounded-2xl border border-[#E8E6E3] bg-white overflow-hidden">
                    <div className={`h-16 bg-gradient-to-br ${setup.colour}`} />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{setup.name}</h3>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{setup.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {THEMES.map((theme) => (
                  <span key={theme} className="px-4 py-2 rounded-full border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A]">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Real Birthdays" title="Celebration Gallery" subtitle="Recent birthday formats across Bali villas, from daytime setups to high-energy night events." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            The gallery shows the range we are actually asked to deliver: long-table pool dinners, milestone setups with stronger decor, BBQ-led food service, and recovery brunches the next day. That variety matters because birthdays are rarely one-size-fits-all. Some hosts want a polished dinner; some want a villa party that can stretch late without losing control.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_BIRTHDAYS.map((birthday) => (
              <div key={birthday.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={birthday.image} alt={birthday.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{birthday.title}</h3>
                  <p className="text-[#4A4745] text-xs">{birthday.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Add-Ons
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Extra pieces that lift the party once the core operation is locked
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Add-ons work best when they support the format instead of fighting it. A live band suits a sunset dinner better than a kids pool party. A photographer is valuable when you have a defined cake or speech moment. Premium decor is worth it when the villa has one area that can take a strong visual treatment. We help hosts choose the upgrades that will actually show up well in the event rather than selling everything by default.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => (
                  <div key={addon.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-5 flex items-start gap-4">
                    <div className="bg-[#2C5F7C]/10 rounded-xl p-2.5 shrink-0"><addon.icon className="w-5 h-5 text-[#2C5F7C]" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1A1A1A]">{addon.title}</h3>
                      <p className="text-sm font-semibold text-[#2C5F7C]">{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-party-white.webp" alt="Premium birthday party styling with decor and lighting in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="What Birthday Hosts Say"
        subtitle="Fun to guests, organised behind the scenes."
        testimonials={[
          { name: 'Lisa M.', location: 'Canggu Villa Party', quote: 'We booked the villa party package for my 40th and the team handled BBQ, bar service, decor, and the cake reveal without me having to brief anyone twice.', rating: 5 },
          { name: 'The Johnson Family', location: 'Seminyak Kids Party', quote: 'The kids had entertainment, the adults had proper food, and cleanup was handled before the villa manager even came by. Huge relief.', rating: 5 },
          { name: 'Marcus & Friends', location: 'Uluwatu Dinner', quote: 'The intimate dinner felt polished and warm at the same time. Service was attentive without making the evening feel formal.', rating: 5 },
        ]}
      />

      <section className="py-20 md:py-28 bg-white birthday-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Birthday FAQ" subtitle="Common questions about booking birthday parties with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Book a Birthday Party"
            subtitle="Tell us about your birthday and we will recommend the right format, staffing, and production level."
            packageOptions={['Intimate Birthday Dinner', 'Birthday Villa Party', 'Kids Birthday Party']}
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
        </div>
      </section>

      <PressStrip />
      <TaxFooter />
    </div>
  )
}
