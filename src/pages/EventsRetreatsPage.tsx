import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Leaf, Heart, Sun,
  Coffee, Check, Truck, Thermometer,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, detailedServiceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/491635080236?text=Hi%20myCHEF,%20I%20would%20like%20a%20retreat%20catering%20quote.'
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Wellness Retreat',
    price: <AllInPrice price={1500000} suffix="/person/day" />,
    guestRange: '10–30 guests',
    description: 'Plant-forward, anti-inflammatory, detox-focused. 3 meals + 2 snacks daily. On-site chef.',
    features: ['3 plant-forward meals', '2 healthy snacks', 'Anti-inflammatory focus', 'On-site chef', 'Daily fresh sourcing', 'Welcome ceremony'],
  },
  {
    title: 'Yoga Retreat',
    price: <AllInPrice price={1500000} suffix="/person/day" />,
    guestRange: '10–30 guests',
    description: 'Fully vegan, sattvic meals. 3 meals + 2 snacks + mid-morning and evening tea ritual.',
    features: ['3 sattvic vegan meals', '2 snacks + tea ritual', 'Fully vegan', 'On-site chef', 'Welcome water blessing', 'Recipe book option'],
    highlighted: true,
  },
  {
    title: 'Corporate-Style Retreat',
    price: <AllInPrice price={2500000} suffix="/person/day" />,
    guestRange: '10–50 guests',
    description: 'Mixed dietary management, team-building activities, retreat coordinator included.',
    features: ['3 meals + 2 snacks/day', 'Mixed dietary management', 'Team-building included', 'Retreat coordinator', 'Tax invoice', 'AV support'],
  },
]

const DAILY_SCHEDULE = [
  { time: '07:00', meal: 'Morning Tea + Light Snack', type: 'Pre-yoga' },
  { time: '08:30', meal: 'Breakfast', type: 'Plant-forward / Vegan' },
  { time: '11:00', meal: 'Mid-Morning Snack', type: 'Smoothie + Fruit' },
  { time: '13:00', meal: 'Lunch', type: 'Balanced / Sattvic' },
  { time: '16:00', meal: 'Afternoon Snack', type: 'Nuts + Herbal Tea' },
  { time: '19:00', meal: 'Dinner', type: 'Light / Digestive' },
]

const DIETARY = ['Plant-Forward', 'Anti-Inflammatory', 'Vegan', 'Sattvic', 'Paleo', 'Keto', 'Gluten-Free', 'Dairy-Free']

const DIETARY_DETAILS = [
  { name: 'Plant-Forward', desc: 'Vegetables, legumes, and grains as the centrepiece. Meat optional on request.' },
  { name: 'Anti-Inflammatory', desc: 'Turmeric, ginger, omega-3 rich foods. Low refined sugar, high whole food.' },
  { name: 'Paleo', desc: 'Grass-fed meats, seafood, vegetables, nuts. No grains, dairy, or processed foods.' },
  { name: 'Keto', desc: 'High healthy fat, moderate protein, very low carb. Sustained energy without spikes.' },
  { name: 'Gluten-Free', desc: '100% celiac-safe prep. Separate utensils, certified ingredients, labelled service.' },
  { name: 'Dairy-Free', desc: 'No milk, butter, or cream. Coconut and nut-based alternatives used throughout.' },
]

const MULTI_DAY_OPS = [
  { icon: Truck, title: 'Daily Fresh Sourcing', desc: 'No day-2 leftovers. We source produce every morning from local markets and trusted suppliers.' },
  { icon: Thermometer, title: 'Food Safety & HACCP', desc: 'Hygiene-certified team. Cold chain maintained. Temperature logs kept for multi-day events.' },
  { icon: Check, title: 'Daily Delivery vs On-Site', desc: 'On-site chef for retreats 3+ days. Daily delivery for shorter events. Flexible to villa kitchen size.' },
]

const SAMPLE_DAY_MENU = [
  {
    title: 'Breakfast',
    menu: 'Tropical fruit, overnight oats, coconut yogurt, eggs to order, sourdough, and a lighter savoury option.',
  },
  {
    title: 'Lunch',
    menu: 'Produce-led buffet with protein, grain or root base, two vegetables, a vegan line, and labelled sauces on the side.',
  },
  {
    title: 'Snack Window',
    menu: 'Smoothies, cut fruit, nuts, banana bread, energy bites, or recovery snacks timed around the programme.',
  },
  {
    title: 'Dinner',
    menu: 'A calmer plated or family-style meal with a satisfying main, lighter sides, and dessert that closes the day without feeling heavy.',
  },
]

const ADDONS = [
  { icon: Coffee, title: 'Cooking Class', price: '+IDR 1.5M – 2.5M/pp' },
  { icon: Leaf, title: 'Foraging Walk', price: '+IDR 1M/pp' },
  { icon: Heart, title: 'Dietary Consultation', price: '+IDR 1.5M/session' },
  { icon: Sun, title: 'Recipe Book', price: '+IDR 250K/participant' },
]

const FAQS = [
  { q: 'Are you a plant-based operator?', a: 'We are not 100% vegan but we have a dedicated plant-forward menu line. All yoga retreat tiers are fully vegan by default.' },
  { q: 'Do you handle multiple dietary types simultaneously?', a: 'Yes — common at corporate retreats. We pre-intake dietary needs 14 days before, design parallel menus, label every dish.' },
  { q: 'Can you cook on-site at the retreat villa?', a: 'Yes — daily on-site chef. We work in your villa kitchen or bring a satellite kitchen if needed.' },
  { q: 'What about food safety for multi-day events?', a: 'Hygiene-certified team. Daily fresh sourcing (no leftover day-2). HACCP-compliant cold chain.' },
  { q: 'Can I see a sample retreat menu before I book?', a: 'Yes. Once we understand your retreat rhythm, guest profile, and dietary direction, we can show a sample day structure so you can see how breakfast, lunch, snacks, and dinner would be paced.' },
  { q: 'What happens if participant numbers shift during the week?', a: 'We confirm a working headcount before the retreat starts, then adjust daily service counts with the host when attendance changes. That keeps portions realistic and helps control waste.' },
  { q: 'Can the chef join the retreat ceremony?', a: 'Yes — our chefs are often part of the experience. Many retreat hosts include the chef in the welcome ceremony.' },
  { q: 'Can you cater off-island?', a: 'Currently not — refer to specialist outer-island operators. Bali island-wide only.' },
  { q: 'Pricing for kids / accompanying family?', a: 'Kids 3–12 charged at 60% of adult rate. Under 3 free.' },
  { q: 'Cancellation for multi-day events?', a: '30+ days before: 50% refund. 14–30 days: 25%. Under 14 days: no refund but credit toward future retreat.' },
]

const RETREAT_GALLERY = [
  { title: 'Sunrise Breakfast', image: '/generated/mychef-events-bali-retreat-breakfast.webp' },
  { title: 'Communal Lunch Table', image: '/generated/mychef-events-bali-retreat-table.webp' },
  { title: 'Whole Produce Prep', image: '/generated/mychef-finedining-bali-sol-produce.webp' },
  { title: 'Brunch Recovery Spread', image: '/generated/mychef-events-bali-party-brunch.webp' },
]

const INTAKE_STEPS = [
  'Hosts receive a dietary intake form well before arrival so we can map allergies, preferences, and programme goals by guest.',
  'The kitchen is briefed against a real guest list, not a vague summary, which is how we avoid missing edge cases on day one.',
  'Dishes are labelled by dietary line and separate prep protocols are used for high-risk allergies and gluten-free requests.',
  'If your retreat has shifting attendance, we update the service counts daily so portions stay accurate without waste.',
]

export default function EventsRetreatsPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.retreat-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.retreat-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Retreat Catering Bali | Wellness & Group Stays — myCHEF"
        description="Retreat catering in Bali for yoga, wellness & leadership groups. Multi-day menus, dietary planning & reliable on-site chef service. WhatsApp us today."
        canonical={`${SITE}/events/retreats`}
        ogImage={`${SITE}/generated/mychef-events-bali-retreat-breakfast.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema('Wellness Retreat Catering Bali', 'myCHEF.id provides retreat catering in Bali with wellness-focused menus, dietary planning, and on-site chef support. We manage multi-day meal service, kitchen operations, and cleanup for private villas and retreat venues.', `${SITE}/events/retreats`),
          offerSchema('Wellness Retreat', 1500000, 'IDR', `${SITE}/events/retreats`),
          offerSchema('Yoga Retreat', 1500000, 'IDR', `${SITE}/events/retreats`),
          offerSchema('Corporate-Style Retreat', 2500000, 'IDR', `${SITE}/events/retreats`),
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Corporate Retreat Catering in Bali',
            description: 'Full-board private chef catering for corporate retreats in Bali — daily menus, dietary accommodation, team dining.',
            location: { '@type': 'Place', name: 'Bali, Indonesia' },
            organizer: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Wellness Retreat Catering Bali', `${SITE}/events/retreats`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-retreat-breakfast.webp" alt="Healthy retreat breakfast with fruit and juices in Bali" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Retreats' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Retreat Catering
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wellness Retreats in Bali — Healthy Catering & Meal Planning
          </h1>
          <p className="text-lg md:text-xl text-white/[80%] mb-8 max-w-xl">
            Multi-day retreat food planning with balanced breakfasts, communal lunches, dietary-coded dinners, and a team that can sustain quality for several days in a villa environment.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#244e66] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Request Retreat Quote
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-retreats-cta" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
          <p className="text-sm md:text-base text-white/[70%] uppercase tracking-[0.2em] text-left">
            From IDR 1.5M++/guest/day · Dietary-coded menus and multi-day service
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white retreat-content retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Multi-Day, Not One-Off
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Retreat catering has to support energy, digestion, and repetition across several days
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Retreat food planning is different from normal event catering because guests are not just attending a dinner. They are waking up together, moving through sessions, practicing, resting, and eating multiple times a day for several days in a row. That changes everything: the menu has to feel nourishing without becoming repetitive, portions need to support the rhythm of the programme, and dietary complexity builds quickly as the guest list gets bigger. We design around those realities from day one.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                myCHEF specialises in balanced villa retreat operations — breakfast setups that are ready before the first session, communal lunches that keep the day moving, evening dinners that feel satisfying without weighing guests down, and kitchen systems that hold quality across the full week. For organisers who need a more service-specific breakdown, our <a href="/catering/retreat-catering" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">retreat catering page</a> shows the dedicated catering version of this offer.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-retreat-breakfast.webp" alt="Healthy breakfast service for a Bali wellness retreat" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Retreat Formats" subtitle="Wellness-led, yoga-led, or mixed-profile retreats — each with its own service rhythm and dietary intensity." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These formats give retreat hosts a starting point for pricing and service design. Some retreats want deeply plant-forward menus, others need stricter sattvic or vegan service, and some need more mixed menus because spouses, facilitators, or corporate groups are sharing the same schedule. The point is not only what guests eat, but how consistently that experience can be maintained every day.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={10} maxGuests={30} defaultGuests={16} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={2500000} minGuests={10} maxGuests={50} defaultGuests={20} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Daily Meal Structure
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Meals are timed around the retreat schedule, not around kitchen convenience
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Most retreats succeed when the meal plan supports the emotional tempo of the day. Sunrise breakfasts need to feel clean and energising, lunch needs enough substance for guests to recover without feeling sluggish, and evening meals should close the day rather than overpower it. That pacing is why we build a real meal structure instead of just assigning dishes to time slots. The right food at the wrong moment can throw off the whole retreat.
              </p>
              <div className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] overflow-hidden">
                {DAILY_SCHEDULE.map((item) => (
                  <div key={`${item.time}-${item.meal}`} className="flex items-center gap-4 px-5 py-4 border-t border-[#E8E6E3] first:border-t-0">
                    <span className="text-sm font-semibold text-[#2C5F7C] w-16 shrink-0">{item.time}</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">{item.meal}</span>
                    <span className="text-sm text-[#4A4745] ml-auto">{item.type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-retreat-table.webp" alt="Long communal retreat dining table in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-finedining-bali-sol-produce.webp" alt="Fresh whole produce prepared for wellness retreat catering" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Healthy Menu Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Whole ingredients, local produce, and nutritional clarity instead of wellness clichés
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Healthy retreat food should still feel abundant. Our menu philosophy starts with whole ingredients, strong produce sourcing, and enough protein, fibre, and fat balance that guests feel grounded through the day. We use Bali-grown fruit and vegetables wherever they make sense, avoid leaning on processed shortcuts, and build plant-based lines that feel satisfying rather than symbolic. If a retreat needs a more specific nutritional approach, we build around that rather than forcing every host into the same wellness language.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
                {DIETARY_DETAILS.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-[#E8E6E3] bg-white p-4">
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.name}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {DIETARY.map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Dietary Intake Process
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dietary requirements are managed through systems, not last-minute improvisation
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Retreat hosts often carry the pressure of multiple dietary profiles at once: vegan guests, gluten-free guests, allergies, low-sugar requests, and participants following specific retreat protocols. The only way to handle that well is with a proper intake and briefing process. We collect information early, structure it in a way the kitchen can use, and then translate that into labelled service and disciplined prep on site.
              </p>
              <div className="space-y-3">
                {INTAKE_STEPS.map((step) => (
                  <div key={step} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-retreat-breakfast.webp" alt="Labeled healthy breakfast setup for retreat guests" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Multi-Day Logistics
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                How we keep food quality high over 3, 5, or 7 days without repetition fatigue
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                The hidden work in retreat catering is consistency. Menus need to evolve through the week, produce needs to stay fresh, portioning has to adapt to attendance, and the kitchen has to protect energy as well as food safety. We plan those systems in advance so the experience stays stable from the first breakfast to the final farewell meal.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {MULTI_DAY_OPS.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 text-center">
                    <item.icon className="w-6 h-6 text-[#2C5F7C] mx-auto mb-3" />
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-retreat-table.webp" alt="Multi-day retreat lunch service setup in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Real Retreats" title="Retreat Gallery" subtitle="Breakfasts, communal lunches, produce-led menus, and the everyday food moments guests actually remember." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            Retreat photography is useful because it shows more than beautiful plates. It shows portion style, table scale, produce quality, and the tone of the service. Hosts can use the images below to gauge whether they want a more communal format, a more styled breakfast setup, or a menu direction that feels simpler and produce-led.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RETREAT_GALLERY.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Add-Ons
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Activities and educational extras that deepen the retreat without complicating the meal core
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Add-ons should extend the retreat philosophy, not distract from it. Cooking classes work well when guests want to take something practical home. Foraging walks and dietary consultations suit more educational formats. Recipe books help hosts turn the food programme into part of the retreat memory. We usually suggest choosing one or two meaningful additions rather than stacking too many optional extras into an already full schedule.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => (
                  <div key={addon.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 flex items-start gap-4">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><addon.icon className="w-5 h-5 text-[#2C5F7C]" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1A1A1A]">{addon.title}</h3>
                      <p className="text-sm font-semibold text-[#2C5F7C]">{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-party-brunch.webp" alt="Healthy brunch-style retreat spread in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 4 — Sample Day"
            title="A sample one-day retreat food structure"
            subtitle="Retreat hosts usually need to see how the day eats before they are ready to judge the proposal. This sample is a planning frame, not a fixed menu."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {SAMPLE_DAY_MENU.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6">
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.menu}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#4A4745] text-center max-w-4xl mx-auto">
            Once dates, guest profile, and dietary map are clear, we turn this into a rotation plan that shifts across the week instead of repeating the same energy profile every day.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white retreat-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Retreat FAQ" subtitle="Operations-focused answers for retreat organisers." />
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
              { to: '/fine-dining', label: 'Fine Dining' },
              { to: '/menus', label: 'Menus' }
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

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Request Retreat Quote"
            subtitle="Tell us the dates, participant profile, and dietary mix. We will build a practical multi-day meal plan around your schedule."
            packageOptions={['Wellness Retreat', 'Yoga Retreat', 'Corporate-Style Retreat']}
            fields={[
              { name: 'package', label: 'Retreat Type', type: 'select', required: true },
              { name: 'dates', label: 'Retreat Dates', type: 'text', placeholder: 'e.g. 10-15 June 2026', required: true },
              { name: 'duration', label: 'Retreat Length / Days', type: 'text', placeholder: 'e.g. 5 days, 7 days' },
              { name: 'guests', label: 'Participants', type: 'number', placeholder: 'e.g. 20', required: true },
              { name: 'area', label: 'Retreat Location', type: 'text', required: true },
              { name: 'meals', label: 'Meals Needed Per Day', type: 'text', placeholder: 'e.g. breakfast, lunch, dinner, 2 snacks' },
              { name: 'profile', label: 'Participant Profile / Retreat Focus', type: 'text', placeholder: 'Yoga, wellness, mixed corporate, beginners...' },
              { name: 'schedule', label: 'Daily Rhythm', type: 'textarea', placeholder: 'Sunrise session, brunch, workshop, dinner, etc.' },
              { name: 'dietary', label: 'Dietary Breakdown', type: 'textarea', placeholder: 'e.g. 80% vegan, 5 gluten-free, 3 nut allergy...' },
              {
                name: 'safety',
                label: 'Food Safety Priorities',
                type: 'textarea',
                placeholder: 'Allergy protocols, separate prep lines, ingredient sourcing, anything critical for your group...',
                rows: 4,
              },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text', required: true },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
            messageIntro="Hi Sofia, I'm planning a retreat in Bali and need a multi-day food proposal."
          />
        </div>
      </section>

      <PressStrip />
      <TaxFooter />
    </div>
  )
}
