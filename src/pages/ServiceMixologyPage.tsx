import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, X, Phone, Calendar, Star, ShieldCheck, Award, FlaskConical } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  detailedServiceSchema,
  faqPageSchema,
  aggregateRatingSchema,
  howToSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'a mixology / cocktail experience in Bali', intent: 'availability and pricing' })

const PRICING_TIERS = [
  {
    title: 'Cocktail Experience',
    price: 'IDR 1,500,000',
    unit: '/session',
    features: ['2-hour session', '4 signature cocktails', 'Fresh ingredients', 'Glassware & tools', 'Tasting notes', 'Up to 8 guests'],
    bestFor: 'Intimate dinners, date nights, small gatherings',
  },
  {
    title: 'Mixology Masterclass',
    price: 'IDR 2,500,000',
    unit: '/session',
    features: ['3-hour session', '6 cocktails + techniques', 'Hands-on participation', 'Ingredient sourcing talk', 'Recipe cards', 'Up to 12 guests'],
    bestFor: 'Birthdays, team building, villa experiences',
    highlight: true,
  },
  {
    title: 'Signature Program',
    price: 'IDR 4,000,000',
    unit: '/day',
    features: ['Full-day program', 'Custom menu creation', 'Molecular techniques', 'Bar setup design', 'Branded cocktails', 'Unlimited guests'],
    bestFor: 'Weddings, corporate retreats, boutique launches',
  },
]

const WHAT_INCLUDED = [
  'Professional mixologist',
  'Premium mixers, syrups & fresh juices',
  'Specialized bar tools',
  'Elegant glassware',
  'Fresh garnishes and botanicals',
  'Custom cocktail menu',
  'Tasting notes and stories',
  'Recipe cards for guests',
]

// The base spirits (alcohol) are NOT part of the package price — these are the three ways we handle it.
const ALCOHOL_OPTIONS = [
  { n: '01', t: 'We suggest the bottles', d: 'Tell us your menu and budget and we recommend exactly which spirits to buy — by brand and bottle — so nothing is wasted.' },
  { n: '02', t: 'We send a shopping list', d: 'You get a simple, itemised list of what to buy and how much. Pick it up yourself or have your villa stock it before we arrive.' },
  { n: '03', t: 'We bring it for you', d: 'Prefer zero effort? We source and deliver everything, added to your quote at cost. You just enjoy the evening.' },
]

const NOT_INCLUDED = [
  'Base spirits / alcohol — see the three options above',
  'Premium or rare bottle upgrades',
  'Extra glassware beyond the standard set',
  'Hours beyond your booked session (overtime quoted on request)',
  'Travel outside South Bali (quoted by location)',
  'Gratuities — always optional, never expected',
]

const PACKAGE_TABLE = [
  { name: 'Cocktail Experience', duration: '2 hours', pax: 'Up to 8', price: 'IDR 1,500,000', overtime: 'On request' },
  { name: 'Mixology Masterclass', duration: '3 hours', pax: 'Up to 12', price: 'IDR 2,500,000', overtime: 'On request' },
  { name: 'Signature Program', duration: 'Full day', pax: 'Unlimited', price: 'IDR 4,000,000', overtime: 'On request' },
]

const SIGNATURE_COCKTAILS = [
  { name: 'Balinese Arak Sour', notes: 'Local arak, fresh lime, palm sugar, silky egg-white foam' },
  { name: 'Lemongrass & Kaffir Gimlet', notes: 'Gin, house lemongrass cordial, kaffir lime leaf' },
  { name: 'Spiced Tamarind Margarita', notes: 'Tequila, tamarind, chili-salt rim, Bali sea salt' },
  { name: 'Butterfly-Pea Spritz', notes: 'Colour-changing, floral and refreshing, low-alcohol' },
  { name: 'Young Coconut Colada', notes: 'Fresh young coconut, rum (or zero-proof), pineapple' },
  { name: 'Sandalwood Old Fashioned', notes: 'Aged rum or bourbon, palm-sugar, aromatic spice' },
]

const GALLERY = [
  { src: '/generated/mychef-service-bali-mixology-gallery-1.webp', alt: 'Indonesian mixologist shaking a cocktail at a Bali villa bar at golden hour' },
  { src: '/generated/mychef-service-bali-mixology-gallery-2.webp', alt: 'Guests enjoying cocktails by a Bali villa pool while an Indonesian server presents a drinks tray' },
  { src: '/generated/mychef-service-bali-mixology-gallery-3.webp', alt: 'Indonesian mixologist leading a hands-on cocktail-shaking class for guests at a Bali villa' },
  { src: '/generated/mychef-service-bali-mixology-gallery-4.webp', alt: 'Indonesian bartender garnishing signature butterfly-pea cocktails at a Bali villa bar' },
]

const BOOKING_STEPS = [
  { n: '1', t: 'Check your date', d: 'Message us on WhatsApp with your date, villa and guest count. We reply within 2 hours and hold the date for you.' },
  { n: '2', t: 'Confirm menu & spirits', d: 'We design your cocktail menu and agree how the spirits are handled — we suggest, send a shopping list, or bring them.' },
  { n: '3', t: 'Secure with 50% deposit', d: 'A 50% deposit locks in your booking. The balance is settled before your event — simple and transparent.' },
]

const SAFETY = [
  { t: 'Experienced, professional mixologists', d: 'Trained, vetted bartenders who run villa cocktail experiences across Bali every week.' },
  { t: 'Hygienic, food-safe handling', d: 'Sanitised tools, a clean bar setup and careful handling from setup through to service.' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Briefing', desc: 'Your tastes, preferences, and the occasion.', icon: Calendar },
  { step: '02', title: 'Menu design', desc: 'Signature cocktails built around your story.', icon: FlaskConical },
  { step: '03', title: 'Sourcing', desc: 'Premium spirits, fresh produce, unique ingredients.', icon: ShieldCheck },
  { step: '04', title: 'Experience', desc: 'Build, shake, stir, and taste. Interactive and memorable.', icon: Award },
  { step: '05', title: 'Take home', desc: 'Recipe cards and ingredient list to recreate.', icon: Star },
]

const FAQS = [
  { q: 'Is the alcohol included in the price?', a: 'No — and this keeps your price fair. The package covers your mixologist, the cocktail menu, premium mixers, fresh juices, syrups, garnishes, bar tools and glassware. The base spirits (the alcohol itself) are bought separately, so you only pay for the bottles you actually want.' },
  { q: 'So how does the alcohol work?', a: 'Three ways, your choice: (1) we recommend the exact bottles to match your menu and budget, (2) we send a simple shopping list for you or your villa to stock before we arrive, or (3) we source and bring everything for you, added to your quote at cost. Mixers, garnishes, tools and glassware are always included either way.' },
  { q: 'What is the difference between a bartender and a mixologist?', a: 'A bartender serves drinks efficiently. A mixologist designs cocktails as culinary creations — balancing flavors, sourcing unique ingredients, and creating an experience around each drink. Think chef versus cook.' },
  { q: 'Can guests participate in making cocktails?', a: 'Absolutely. Our masterclass tier is designed for hands-on participation. Guests learn techniques, build their own drinks, and take home recipe cards.' },
  { q: 'Do you use local Balinese ingredients?', a: 'Yes. We incorporate arak, local fruits, Balinese spices, and tropical botanicals into our creations. It is Bali in a glass.' },
  { q: 'How long does a session last?', a: 'Cocktail Experience: 2 hours. Mixology Masterclass: 3 hours. Signature Program: full day with breaks.' },
  { q: 'What areas do you cover?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: '1–2 weeks for standard sessions. 3–4 weeks for signature programs during peak season.' },
  { q: 'Can you create non-alcoholic experiences?', a: 'Yes. Our zero-proof programs are increasingly popular — complex, layered mocktails that rival their alcoholic counterparts.' },
]

export default function ServiceMixologyPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mixology-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.mixology-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Mixology Service Bali | Signature Cocktails for Villas — myCHEF"
        description="Private mixology in Bali: signature cocktail menus, guided tastings & cocktail classes for villa events. From IDR 1.5M/session (spirits separate — we suggest, send a shopping list, or bring them). WhatsApp us to book."
        canonical={`${SITE}/in-villa-service/mixology`}
        ogImage={`${SITE}/generated/mychef-service-bali-hero-mixology.webp`}
        jsonLd={[
          detailedServiceSchema(
            'Mixology Experience Bali',
            'myCHEF.id creates private mixology experiences in Bali with signature cocktail menus, demonstrations, and premium bar service. We design the drinks, setup, and guest interaction for villa events and celebrations.',
            `${SITE}/in-villa-service/mixology`,
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 45),
          howToSchema({
            name: 'How to Book a Mixologist in Bali',
            description: 'Book a private mixologist for your Bali villa event in 4 easy steps.',
            totalTime: 'PT15M',
            steps: [
              { name: 'Choose your cocktail experience', text: 'Select from signature cocktail menu, interactive mixology class, or premium open bar.' },
              { name: 'Share event details', text: 'Send your date, villa location, guest count, and preferred spirits via WhatsApp.' },
              { name: 'Approve your cocktail menu', text: 'We design a custom cocktail list with garnishes, glassware, and setup plan within 1 hour.' },
              { name: 'Shake and celebrate', text: 'The mixologist arrives with premium spirits, fresh ingredients, and bar tools. You enjoy crafted cocktails.' },
            ],
          }),
          breadcrumbSchema('Mixology Experience Bali', `${SITE}/in-villa-service/mixology`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-service-bali-hero-mixology.webp" alt="Indonesian mixologist garnishing a vibrant signature cocktail at a Bali villa bar" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
          <Breadcrumb items={[
            { label: 'In-Villa Service', href: '/in-villa-service' },
            { label: 'Mixology' },
          ]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Mixology in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Signature cocktail programs and masterclasses in your villa. 
            Signature drinks, fresh ingredients, unforgettable experiences. From IDR 1,500,000 per session — spirits not included, your choice how we handle them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-mixology-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Book Mixology Experience
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <Calendar className="w-4 h-4" /> Book Mixology
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Experiences" title="Mixology Programs" subtitle="From intimate tastings to full-day masterclasses." />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.title} className={`rounded-2xl p-8 ${tier.highlight ? 'bg-[#1A1A1A] text-white' : 'bg-white border border-[#E8E6E3]'}`}>
                <h3 className="font-playfair text-2xl mb-2">{tier.title}</h3>
                <p className={`text-3xl font-semibold mb-1 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#1A1A1A]'}`}>{tier.price}</p>
                <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/[60%]' : 'text-[#4A4745]'}`}>{tier.unit}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#6B8E5A]'}`} />
                      <span className={tier.highlight ? 'text-white/[80%]' : 'text-[#4A4745]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs ${tier.highlight ? 'text-white/[50%]' : 'text-[#8A8785]'}`}>Best for: {tier.bestFor}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm md:text-base text-[#4A4745] mt-10 max-w-[760px] mx-auto">
            Every package includes your mixologist, custom cocktail menu, premium mixers, tools &amp; glassware. <strong className="text-[#1A1A1A]">The alcohol (base spirits) is not included</strong> — pick one of the three easy options below.
          </p>
        </div>
      </section>

      {/* Package comparison table */}
      <section className="px-6 pb-8">
        <div className="max-w-[1280px] mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#E8E6E3]">
                <th className="py-4 pr-4 font-playfair text-lg text-[#1A1A1A]">Package</th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-[#8A8785]">Duration</th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-[#8A8785]">Max guests</th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-[#8A8785]">Price</th>
                <th className="py-4 pl-4 text-xs font-semibold uppercase tracking-wider text-[#8A8785]">Extra hours</th>
              </tr>
            </thead>
            <tbody>
              {PACKAGE_TABLE.map((p) => (
                <tr key={p.name} className="border-b border-[#E8E6E3]">
                  <td className="py-4 pr-4 font-medium text-[#1A1A1A]">{p.name}</td>
                  <td className="py-4 px-4 text-sm text-[#4A4745]">{p.duration}</td>
                  <td className="py-4 px-4 text-sm text-[#4A4745]">{p.pax}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-[#1A1A1A]">{p.price}</td>
                  <td className="py-4 pl-4 text-sm text-[#4A4745]">{p.overtime}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[#8A8785] mt-4 max-w-[820px] leading-relaxed">
            Prices exclude spirits (see the three options below). Travel is included across South Bali — Uluwatu, Jimbaran, Seminyak, Canggu, Ubud and Nusa Dua; other areas are quoted by location. Extra hours and premium bottle upgrades are quoted on request.
          </p>
        </div>
      </section>

      {/* Alcohol clarity — make it unmistakable that spirits are separate */}
      <section className="py-20 md:py-28 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[800px]">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">About the alcohol</p>
            <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-5">The spirits are separate — here is how it works</h2>
            <p className="text-white/[80%] text-lg mb-4">
              Our package prices cover the full experience: your professional mixologist, the custom cocktail menu, premium mixers, fresh juices, syrups, garnishes, ice, bar tools and glassware. <strong className="text-white">The base spirits — the alcohol itself — are not included in the price.</strong>
            </p>
            <p className="text-white/[80%] text-lg">
              Why? It keeps your price fair and flexible — you only pay for the bottles you actually want, at the quality and budget that suit you. Choose whichever is easiest:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {ALCOHOL_OPTIONS.map((o) => (
              <div key={o.n} className="rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                <p className="font-cormorant text-[#C5A028] text-base mb-3">{o.n}</p>
                <h3 className="font-playfair text-2xl mb-3">{o.t}</h3>
                <p className="text-white/[70%] text-sm leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
          <p className="text-white/[60%] text-sm mt-8 max-w-[800px]">
            Everything else — mixers, fresh juices, syrups, garnishes, ice, the full professional bar kit and glassware — is always included. You never need to buy those separately.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Mixologist, mixers, tools & glassware — spirits sold separately." />
          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-8">
              <h3 className="font-playfair text-2xl mb-5 text-[#1A1A1A]">Included in every package</h3>
              <ul className="space-y-3">
                {WHAT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4A4745]">
                    <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E8E6E3] bg-white p-8">
              <h3 className="font-playfair text-2xl mb-5 text-[#1A1A1A]">Not included</h3>
              <ul className="space-y-3">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4A4745]">
                    <X className="w-5 h-5 text-[#B23B3B] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From concept to cocktail — five creative steps." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <p className="font-cormorant text-[#C5A028] text-sm mb-2">{step.step}</p>
                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature cocktails + gallery (social proof) */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="The drinks" title="Signature Creations" subtitle="A taste of what your mixologist can build — every menu is designed around you and your guests." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {SIGNATURE_COCKTAILS.map((c) => (
              <div key={c.name} className="rounded-xl border border-[#E8E6E3] bg-[#FAFAF8] p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FlaskConical className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                  <h3 className="font-playfair text-xl text-[#1A1A1A]">{c.name}</h3>
                </div>
                <p className="text-sm text-[#4A4745]">{c.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#8A8785] mt-4">Illustrative menu — your final cocktails are designed to your tastes during the briefing.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {GALLERY.map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & quality signals */}
      <section className="py-14 px-6 bg-[#FAFAF8] border-y border-[#E8E6E3]">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
          {SAFETY.map((s) => (
            <div key={s.t} className="flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-[#6B8E5A] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-[#1A1A1A] mb-1">{s.t}</h3>
                <p className="text-sm text-[#4A4745]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'Alex & Jordan', location: 'Los Angeles', quote: 'The mixology masterclass was the highlight of our trip. We learned techniques we still use at home. The cocktails were incredible.', rating: 5 },
          { name: 'Corporate Team', location: 'Sydney', quote: 'Booked for our team retreat. The branded cocktails were a hit. Professional, fun, and genuinely educational.', rating: 5 },
          { name: 'The Nguyen Family', location: 'Ho Chi Minh City', quote: 'Zero-proof experience for our family reunion. Even the teenagers loved it. Beautiful, complex drinks without alcohol.', rating: 5 },
        ]}
        title="What Guests Say"
        subtitle="Real reviews from mixology experiences across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Mixology FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/in-villa-service/bartenders" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Bartender Hire</h4>
              <p className="text-xs text-[#4A4745]">Bring in a service-led bar team for parties, receptions, and fast pours.</p>
            </Link>
            <Link to="/in-villa-service/sommelier" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Sommelier Service</h4>
              <p className="text-xs text-[#4A4745]">Layer in wine pairings and tableside storytelling for dinner service.</p>
            </Link>
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">In-Villa Service</h4>
              <p className="text-xs text-[#4A4745]">Explore the full staffing hub for drinks, dining, and guest experience support.</p>
            </Link>
            <Link to="/events" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Events</h4>
              <p className="text-xs text-[#4A4745]">Connect your cocktail program to weddings, retreats, and celebrations.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      {/* Booking flow — 3 steps */}
      <section className="py-20 md:py-28 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Booking in 3 steps</p>
          <h2 className="font-playfair text-3xl md:text-5xl mb-3">How to book</h2>
          <p className="text-white/[70%] mb-12 max-w-[680px]">Most villa sessions book 1–2 weeks ahead; allow 3–4 weeks for the full-day Signature Program in peak season.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {BOOKING_STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                <div className="w-10 h-10 rounded-full bg-[#C5A028] text-black font-semibold flex items-center justify-center mb-4">{s.n}</div>
                <h3 className="font-playfair text-2xl mb-3">{s.t}</h3>
                <p className="text-white/[70%] text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-mixology-cta" className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Check my date on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-service-bali-mixology-cta.webp" alt="Indonesian mixologist hands garnishing a craft cocktail with tropical flowers and herbs" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Mixology Experience</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your vision and we will design a cocktail program your guests will never forget.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-mixology-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Bartenders', href: '/in-villa-service/bartenders', desc: 'Cocktail and bar service.' },
              { label: 'Butlers', href: '/in-villa-service/butlers', desc: 'Discreet villa hosting.' },
              { label: 'Sommelier', href: '/in-villa-service/sommelier', desc: 'Wine pairing and service.' },
              { label: 'Waiters', href: '/in-villa-service/waiters', desc: 'Professional table service.' },
              { label: 'Events', href: '/events', desc: 'Full-service event production.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="in-villa-mixology"
        serviceName="mixology experience in Bali"
        intent="mixology packages and pricing"
      />
    </div>
  )
}