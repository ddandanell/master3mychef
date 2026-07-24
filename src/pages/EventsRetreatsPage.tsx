import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Leaf, Heart, Sun,
  Coffee, Check, Truck, Thermometer,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceWithOfferSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20a%20wellness%20retreat%20catering%20quote.%20Type%3A%20%20Dates%3A%20%20Participants%3A%20%20Dietary%20split%3A%20'
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Wellness Retreat',
    price: <AllInPrice price={1500000} suffix="/person/day" />,
    guestRange: '10–30 guests',
    description: 'Plant-forward, anti-inflammatory, detox-friendly service: three meals and two snacks daily, an on-site chef, daily fresh sourcing and a welcome ceremony touch.',
    features: ['3 plant-forward meals', '2 healthy snacks', 'Anti-inflammatory focus', 'On-site chef', 'Daily fresh sourcing', 'Welcome ceremony touch'],
  },
  {
    title: 'Yoga Retreat',
    price: <AllInPrice price={1500000} suffix="/person/day" />,
    guestRange: '10–30 guests',
    description: 'Fully vegan, sattvic service as standard: three meals, two snacks and mid-morning and evening tea rituals, an on-site chef, a welcome water blessing, and an optional recipe book for guests to take home.',
    features: ['3 sattvic vegan meals', '2 snacks + tea rituals', 'Fully vegan', 'On-site chef', 'Welcome water blessing', 'Recipe book option'],
    highlighted: true,
  },
]

const DAILY_SCHEDULE = [
  { time: '07:00', meal: 'Morning tea + light snack', type: 'Pre-yoga' },
  { time: '08:30', meal: 'Breakfast', type: 'Tropical fruit, overnight oats, coconut yoghurt, eggs to order, sourdough' },
  { time: '11:00', meal: 'Mid-morning snack', type: 'Smoothie and fruit' },
  { time: '13:00', meal: 'Lunch', type: 'Produce-led buffet with a protein, a grain or root base, two vegetables, a vegan line and labelled sauces' },
  { time: '16:00', meal: 'Afternoon snack', type: 'Nuts, banana bread, energy bites and herbal tea' },
  { time: '19:00', meal: 'Dinner', type: 'A calmer plated or family-style meal that closes the day without weighing it down' },
]

const DIETARY = ['Plant-Forward', 'Anti-Inflammatory', 'Fully Vegan', 'Sattvic', 'Paleo', 'Keto', 'Gluten-Free', 'Dairy-Free']

const DIETARY_DETAILS = [
  { name: 'Plant-Forward', desc: 'Vegetables, legumes, and grains as the centrepiece, built on Bali-grown produce.' },
  { name: 'Anti-Inflammatory', desc: 'Turmeric, ginger, omega-3 rich foods. Low refined sugar, high whole food.' },
  { name: 'Fully Vegan', desc: 'All yoga retreat tiers are fully vegan by default.' },
  { name: 'Sattvic', desc: 'Sattvic preparation available for yoga retreats.' },
  { name: 'Paleo', desc: 'Grass-fed meats, seafood, vegetables, nuts. No grains, dairy, or processed foods.' },
  { name: 'Keto', desc: 'High healthy fat, moderate protein, very low carb. Sustained energy without spikes.' },
  { name: 'Gluten-Free', desc: '100% celiac-safe prep. Separate utensils, certified ingredients, labelled service.' },
  { name: 'Dairy-Free', desc: 'No milk, butter, or cream. Coconut and nut-based alternatives used throughout.' },
]

const MULTI_DAY_OPS = [
  { icon: Truck, title: 'Daily fresh sourcing', desc: 'Produce bought every morning; no day-two leftovers.' },
  { icon: Thermometer, title: 'Food safety', desc: 'Hygiene-certified team, HACCP-compliant cold chain, temperature logs for multi-day service.' },
  { icon: Check, title: 'On-site chef for 3+ day retreats', desc: 'Daily delivery available for shorter formats, flexed to your villa kitchen.' },
  { icon: Calendar, title: 'Shifting attendance', desc: 'Service counts adjusted daily with the host, so portions stay accurate and waste stays low.' },
  { icon: Heart, title: 'Chefs who join in', desc: 'Many hosts include the chef in the welcome ceremony; we are glad to be part of it.' },
]

const SAMPLE_DAY_MENU = [
  {
    title: 'Breakfast',
    menu: 'Tropical fruit, overnight oats, coconut yoghurt, eggs to order, sourdough.',
  },
  {
    title: 'Lunch',
    menu: 'Produce-led buffet with a protein, a grain or root base, two vegetables, a vegan line and labelled sauces on the side.',
  },
  {
    title: 'Afternoon snack',
    menu: 'Nuts, banana bread, energy bites and herbal tea.',
  },
  {
    title: 'Dinner',
    menu: 'A calmer plated or family-style meal that closes the day without weighing it down.',
  },
]

const ADDONS = [
  { icon: Coffee, title: 'Cooking class', price: '+IDR 1.5M–2.5M per person', href: '/experiences/private-cooking-class' },
  { icon: Leaf, title: 'Foraging walk', price: '+IDR 1M per person' },
  { icon: Heart, title: 'Dietary consultation', price: '+IDR 1.5M per session' },
  { icon: Sun, title: 'Recipe book', price: '+IDR 250K per participant' },
]

const FAQS = [
  { q: 'What does wellness retreat catering in Bali cost?', a: 'From IDR 1,500,000++ per person per day for wellness and yoga formats — three meals, two snacks, on-site chef and daily fresh sourcing — subject to 11% government tax + 10% service charge. Catering-only meal plans start from IDR 400,000++/person/day on our retreat catering page.' },
  { q: 'Are you a fully plant-based operator?', a: 'We are not 100% vegan as a company, but we run a dedicated plant-forward line — and all yoga retreat tiers are fully vegan by default, with sattvic preparation available.' },
  { q: 'How do you handle celiac and gluten-free guests?', a: 'With a strict protocol: separate utensils, certified gluten-free ingredients and labelled service. Celiac-safe means celiac-safe.' },
  { q: 'Can you handle multiple dietary types at once?', a: 'Yes — intake 14 days before arrival, parallel menus, labelled dishes, separate prep for high-risk allergies. Common at retreats of 15+.' },
  { q: 'What if participant numbers shift during the week?', a: 'We confirm a working headcount before the retreat, then adjust daily service counts with the host as attendance changes.' },
  { q: 'Can kids or accompanying family join the meals?', a: 'Yes — children aged 3–12 are charged at 60% of the adult rate; under-3s eat free.' },
  { q: 'What is the alcohol policy?', a: 'Your programme sets it. Most wellness retreats are dry; some hosts add a single wine-paired closing dinner. We serve to your rules.' },
  { q: 'What is the cancellation policy for multi-day retreats?', a: '30+ days before: 50% refund. 14–30 days: 25%. Under 14 days: no refund, but credit toward a future retreat.' },
  { q: 'What deposit and lead time apply?', a: 'A 50% deposit confirms your dates and chef team. Book two to four weeks ahead minimum; two to three months for June–September peak season.' },
]

const RETREAT_GALLERY = [
  { title: 'Sunrise Breakfast', image: '/generated/mychef-events-bali-hero-retreats.webp' },
  { title: 'Communal Lunch Table', image: '/generated/mychef-events-bali-retreats-communal.webp' },
  { title: 'Whole Produce Prep', image: '/generated/mychef-events-bali-retreats-produce.webp' },
  { title: 'Brunch Recovery Spread', image: '/generated/mychef-events-bali-retreats-brunch.webp' },
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
        title="Wellness Retreat Catering Bali | Multi-Day Event Support"
        description="Wellness & yoga retreat catering in Bali: plant-forward menus, celiac-safe prep, 3 meals + snacks daily from IDR 1.5M++/person/day. WhatsApp myCHEF."
        canonical={`${SITE}/events/retreats`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-retreats.webp`}
        jsonLd={[
          serviceWithOfferSchema({
            name: 'Wellness Retreat Catering Bali',
            description: 'Multi-day wellness and yoga retreat catering in Bali: plant-forward and sattvic vegan menus, 100% celiac-safe preparation, on-site chef, three meals and two snacks daily.',
            url: `${SITE}/events/retreats`,
            price: '1500000',
            unitText: 'per person per day, before 11% government tax + 10% service charge',
          }),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Wellness Retreats', `${SITE}/events/retreats`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-hero-retreats.webp" alt="Healthy retreat breakfast spread by a Bali villa pool at sunrise" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            Wellness & Yoga Retreat Catering in Bali — Food That Carries the Programme
          </h1>
          <p className="text-lg md:text-xl text-white/[80%] mb-8 max-w-xl">
            Multi-day retreat catering designed around the rhythm of your programme: sunrise breakfasts ready before the first session, recovery lunches, dinners that close the day gently — dietary-coded, celiac-safe, and consistent from day one to day seven.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-retreats-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#244e66] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Retreat Quote
            </a>
            <Link to="/catering/retreat-catering" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Meal-Plans-Only Option
            </Link>
          </div>
          <p className="text-sm md:text-base text-white/[70%] uppercase tracking-[0.2em] text-left">
            From IDR 1,500,000++/person/day · Plant-forward, vegan & sattvic menus · 10–30 guests · Ubud & Bali-wide
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white retreat-content retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Retreat Food Is Part of the Retreat
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Retreat food is part of the retreat, not a break from it
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Guests on a wellness retreat eat three times a day for days in a row — which means the food quietly shapes how the whole programme feels. Menus must nourish without repeating, portions must support the day's practice, and dietary complexity builds fast as the guest list grows. We design around those realities from day one, so the food becomes something guests remember for the right reasons.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                This page covers retreat support: meal service plus the things that make a retreat run — tempo design, welcome touches and experience add-ons. If you only need the meal plan itself, our <Link to="/catering/retreat-catering" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">retreat meal plans (catering-only)</Link> page has per-day catering pricing from IDR 400,000++/person/day. Running a company offsite? See <Link to="/corporate-retreat-catering-bali" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">corporate retreat catering</Link>.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-hero-retreats.webp" alt="Healthy breakfast service for a Bali wellness retreat" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Retreat formats & per-day pricing" subtitle="Prices per person per day, subject to 11% government tax + 10% service charge (++)." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            Two retreat service shapes designed around how guests actually move through the day. Both include three meals, two snacks, an on-site chef and daily fresh sourcing.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
          <div className="mt-12 max-w-md mx-auto">
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={10} maxGuests={30} defaultGuests={16} accent={ACCENT} />
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
                A day of retreat meals, timed to your schedule
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                This is a planning frame, not a fixed menu. Once your dates, guest profile and dietary map are clear, it becomes a rotation plan that shifts energy across the week instead of repeating it.
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
              <img src="/generated/mychef-events-bali-retreats-communal.webp" alt="Long communal retreat dining table in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-retreats-produce.webp" alt="Fresh whole produce prepared for wellness retreat catering" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Dietary-Coded Menus
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dietary-coded menus at scale — including 100% celiac-safe prep
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Retreat hosts often carry several dietary profiles at once: vegan guests, gluten-free guests, allergies, low-sugar requests, participants on specific protocols. Our system handles it: an intake form well before arrival, a kitchen briefed against the real guest list, dishes labelled by dietary line, and separate prep protocols for high-risk allergies.
              </p>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                For celiac guests we run a <strong>100% celiac-safe protocol</strong>: separate utensils, certified gluten-free ingredients and labelled service — not a "gluten-free-ish" promise. Menu lines include plant-forward, anti-inflammatory, fully vegan, sattvic, paleo, keto, gluten-free and dairy-free, all built on whole ingredients and Bali-grown produce.
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

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Multi-Day Logistics
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Multi-day logistics that hold quality for a week
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                The hidden work in retreat catering is consistency: menus that evolve through the week, produce that stays fresh, portioning that adapts to attendance, and a kitchen that protects energy as well as food safety.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <img src="/generated/mychef-events-bali-retreats-communal.webp" alt="Multi-day retreat lunch service setup in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Bali-Wide Service
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ubud, the retreat capital — and everywhere else
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Most of our retreat work happens in and around Ubud — Sayan, Penestanan, Tegallalang and the jungle villa belt — where shala logistics, tea rituals and quiet service matter as much as the menu. See our <Link to="/private-chef/ubud" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">private chef in Ubud</Link> page for area detail. We also cater retreats in Sidemen, Canggu, Uluwatu and across the island. Please note: we serve Bali only, not outer islands.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-hero-retreats.webp" alt="Retreat catering service in Ubud, Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
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
                Experience add-ons
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                We suggest choosing one or two meaningful additions rather than stacking extras into an already full schedule. For guests staying on after the retreat, our <Link to="/healthy-meal-delivery-indonesia" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">chef-prepared meal plans</Link> continue the same eating at their villa.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => (
                  <div key={addon.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 flex items-start gap-4">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><addon.icon className="w-5 h-5 text-[#2C5F7C]" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1A1A1A]">
                        {addon.href ? <Link to={addon.href} className="hover:text-[#2C5F7C] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">{addon.title}</Link> : addon.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#2C5F7C]">{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-retreats-brunch.webp" alt="Healthy brunch-style retreat spread in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] retreat-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 4 — Sample Day"
            title="A sample one-day retreat food structure"
            subtitle="A planning frame, not a fixed menu. Once dates, guest profile and dietary map are clear, it becomes a rotation plan that shifts energy across the week."
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

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white retreat-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Wellness retreat FAQ" subtitle="Operations-focused answers for retreat organisers." />
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
              { to: '/catering/retreat-catering', label: 'Retreat Meal Plans' },
              { to: '/corporate-retreat-catering-bali', label: 'Corporate Retreat Catering' },
              { to: '/experiences/private-cooking-class', label: 'private cooking class' },
              { to: '/healthy-meal-delivery-indonesia', label: 'Chef-Prepared Meal Plans' },
              { to: '/private-chef/ubud', label: 'Private Chef in Ubud' },
              { to: '/events', label: 'All Events' }
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
            title="Request a retreat quote"
            subtitle="Tell us your retreat type, dates, participant profile and dietary split. We reply on WhatsApp within the hour and send a sample day menu with a fixed per-day quote."
            packageOptions={['Wellness Retreat', 'Yoga Retreat']}
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
          <p className="mt-8 text-center text-sm text-[#4A4745]">
            Prefer email? <a href="mailto:bali@mychef.id" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">bali@mychef.id</a> · Or call <a href="tel:+6289674072020" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">+62 896-7407-2020</a>
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
              { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Business retreats and offsites.' },
              { label: 'Weddings', href: '/events/weddings', desc: 'Villa wedding catering and planning.' },
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Private celebrations and mixers.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
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
      <StickyMobileCTA
        pageSource="events-retreats"
        serviceName="wellness retreat catering in Bali"
        intent="retreat catering packages and pricing"
      />
    </div>
  )
}