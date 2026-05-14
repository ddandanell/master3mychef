import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Flame, Heart, Truck, ShieldCheck, Sparkles, Package, CreditCard, ChefHat,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20reserve%20Babi%20Guling.'
const SITE = 'https://mychef.id'

const PACKAGES = [
  {
    title: 'Small Babi Guling',
    guests: '10 to 15 guests',
    price: 'IDR 3,700,000 total',
    priceNum: 3700000,
    includes: ['Whole pig', 'Lawar', 'Nasi kuning', 'Sate', 'Sambals', 'Dessert', 'Fresh fruit'],
    bestFor: 'Small villa parties, family gatherings, birthday dinners, local food experience',
  },
  {
    title: 'Medium Babi Guling',
    guests: '25 to 30 guests',
    price: 'IDR 5,000,000 total',
    priceNum: 5000000,
    includes: ['Whole pig', 'Lawar', 'Nasi kuning', 'Sate', 'Sambals', 'Dessert', 'Fresh fruit', 'Extended sides', 'Kuah Balung soup'],
    bestFor: 'Medium villa events, birthdays, group holiday dinners, casual wedding recovery',
  },
  {
    title: 'Large Babi Guling',
    guests: '40 to 50 guests',
    price: 'IDR 7,000,000 total',
    priceNum: 7000000,
    includes: ['Premium suckling pig', 'Lawar', 'Nasi kuning', 'Sate', 'Sambals', 'Dessert', 'Fresh fruit', 'Extended sides', 'Kuah Balung soup', 'Bonfire setup option'],
    bestFor: 'Large villa parties, weddings, corporate events, big birthdays, group celebrations',
  },
]

const INCLUDED = [
  'Whole roasted pig', 'Balinese side dishes', 'Lawar', 'Nasi kuning',
  'Sate', 'Sambals', 'Dessert', 'Fresh fruit', 'Serving setup',
  'Delivery or event coordination',
]

const BEST_FOR = [
  { icon: Heart, title: 'Villa birthday', desc: 'Celebrate with tradition' },
  { icon: Utensils, title: 'Balinese food night', desc: 'Local culinary experience' },
  { icon: Users, title: 'Group holiday dinner', desc: 'Shared cultural meal' },
  { icon: Heart, title: 'Family gathering', desc: 'Multi-generational dining' },
  { icon: Flame, title: 'Wedding recovery lunch', desc: 'Casual post-wedding' },
  { icon: ShieldCheck, title: 'Corporate villa event', desc: 'Team cultural dinner' },
  { icon: Sparkles, title: 'Large poolside party', desc: 'Festive villa celebration' },
  { icon: Truck, title: 'Local experience dinner', desc: 'Authentic Balinese food' },
]

const ADDONS = [
  { title: 'Extra sides', price: 'Quote based on guests', description: 'Additional rice, vegetables, sambals' },
  { title: 'Additional sate', price: 'Quote based on quantity', description: 'Extra sate skewers' },
  { title: 'Service staff', price: 'Quote based on group', description: 'Staff to serve and carve' },
  { title: 'Bonfire setup', price: 'Selected locations', description: 'Evening villa garden fire' },
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', description: 'Cocktail station' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', description: 'Depends on area and event size' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose package', desc: 'Small, medium, or large.', icon: Package },
  { step: '02', title: 'Send details', desc: 'Date, area, guest count.', icon: Calendar },
  { step: '03', title: 'Confirm menu', desc: 'Pork-based menu accepted.', icon: Utensils },
  { step: '04', title: 'Confirm setup', desc: 'Delivery or service setup.', icon: Truck },
  { step: '05', title: 'Pay deposit', desc: '25% to confirm booking.', icon: CreditCard },
  { step: '06', title: 'We prepare', desc: 'Whole-pig prep and timing.', icon: ChefHat },
  { step: '07', title: 'Food served', desc: 'Delivered or served at event.', icon: Sparkles },
]

const AREAS = [
  'Canggu', 'Seminyak', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Sanur', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar',
]

const BABI_GULING_GALLERY = [
  '/generated/catering/babi-guling.webp',
  '/generated/pkg-roast.webp',
  '/generated/hub-catering.webp',
  '/generated/aura-buffet.webp',
  '/generated/pkg-bbq.webp',
  '/generated/aura-wedding.webp',
]

const FEAST_COMPONENTS = [
  { name: 'Whole roasted suckling pig', desc: 'Crispy skin, tender meat, Balinese spice stuffing' },
  { name: 'Lawar', desc: 'Traditional Balinese salad with coconut and spices' },
  { name: 'Nasi kuning', desc: 'Fragrant turmeric rice' },
  { name: 'Sate lilit', desc: 'Minced meat satay on lemongrass skewers' },
  { name: 'Sambals', desc: 'Three Balinese chilli condiments' },
  { name: 'Kuah Balung', desc: 'Rich pork bone soup (medium & large)' },
  { name: 'Dessert', desc: 'Balinese sweets and fresh fruit' },
]

const COOKING_STEPS = [
  { step: '01', title: 'Selection', desc: 'Whole pig chosen by weight and guest count.', icon: Package },
  { step: '02', title: 'Spice paste', desc: 'Basa gede rubbed inside and out.', icon: Utensils },
  { step: '03', title: 'Stuffing', desc: 'Lemongrass, shallots, garlic, and ginger packed inside.', icon: ChefHat },
  { step: '04', title: 'Slow roast', desc: 'Spit-roasted over charcoal for 6–8 hours.', icon: Flame },
  { step: '05', title: 'Basting', desc: 'Coconut water and spice glaze applied every 30 min.', icon: Sparkles },
  { step: '06', title: 'Rest & carve', desc: 'Rested 20 min, then carved at your villa.', icon: Check },
]

const FAQS = [
  { q: 'What is Babi Guling?', a: 'Babi Guling is a traditional Balinese whole roasted pig dish. The pig is stuffed with spices, slow-roasted until the skin is crispy, and served with Balinese sides like lawar, nasi kuning, sate, and sambals.' },
  { q: 'How many people does each package serve?', a: 'Small serves 10-15 guests. Medium serves 25-30 guests. Large serves 40-50 guests. For larger groups, contact us for a custom quote.' },
  { q: 'Does Babi Guling contain pork?', a: 'Yes. Babi Guling is a pork-based dish. It is not suitable for halal groups or pork-free events.' },
  { q: 'Is it halal?', a: 'No. Babi Guling contains pork and is not halal. For halal catering, we recommend our Indonesian BBQ, International Buffet, or Plated Menu options.' },
  { q: 'What sides are included?', a: 'All packages include lawar (Balinese salad), nasi kuning (turmeric rice), sate, sambals, dessert, and fresh fruit. Medium and large packages add extended sides and Kuah Balung soup.' },
  { q: 'Can you deliver it to a villa?', a: 'Yes. We deliver Babi Guling to villas across Bali. The food arrives ready to serve with full setup instructions.' },
  { q: 'Can staff serve it at the event?', a: 'Yes. You can add service staff who will carve, serve, and manage the buffet table during your event.' },
  { q: 'Can I add more sides?', a: 'Yes. Extra sides, additional sate, and extended accompaniments can be added. Pricing depends on quantity.' },
  { q: 'How far in advance should I book?', a: 'We recommend 3-7 days minimum. For large events or peak season, 2+ weeks is ideal.' },
  { q: 'Do you charge travel fees?', a: 'Travel fees may apply for areas outside Seminyak/Canggu: IDR 250,000 to 700,000 depending on distance and event size.' },
  { q: 'Do I need to pay a deposit?', a: 'Yes. A 25% deposit is required to confirm your booking. The balance is due on the day of delivery or service.' },
  { q: 'Can you do a pork-free alternative?', a: 'Yes. For pork-free or halal groups, we offer Indonesian BBQ, International Buffet, Plated Menus, and Drop-Off Catering with fully halal options.' },
]

export default function CateringBabiGulingPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bg-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bg-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Babi Guling Bali | Whole-Pig Roast for Villas — myCHEF"
        description="Balinese Babi Guling whole-pig catering for villas. Lawar, nasi kuning, sate, sambals, dessert, fruit. Small to large packages. From IDR 3.7M."
        canonical={`${SITE}/catering/babi-guling`}
        ogImage={`${SITE}/generated/catering/babi-guling.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Babi Guling Catering Bali', 'Traditional Balinese whole-pig catering for villas, parties, and group events. Small, medium, and large packages.', `${SITE}/catering/babi-guling`, 'IDR'),
          offerSchema('Small Babi Guling', 3700000, 'IDR', `${SITE}/catering/babi-guling`),
          offerSchema('Medium Babi Guling', 5000000, 'IDR', `${SITE}/catering/babi-guling`),
          offerSchema('Large Babi Guling', 7000000, 'IDR', `${SITE}/catering/babi-guling`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Babi Guling', `${SITE}/catering/babi-guling`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Babi Guling' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/catering/babi-guling.webp"
            alt="Traditional Balinese Babi Guling whole-pig setup with side dishes"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Traditional Balinese
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Babi Guling Catering in Bali<br />
            <span className="italic">for Villas, Parties & Group Events</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Traditional Balinese whole-pig catering delivered with sides, sambals, rice, lawar, sate, dessert, and fruit. Choose small, medium, or large packages with clear fixed pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Flame className="w-4 h-4" /> Reserve Babi Guling
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp availability
            </a>
          </div>
          <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3 max-w-md mx-auto flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <p className="text-xs text-amber-800">
              <strong>Contains pork.</strong> Not suitable for halal groups.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ CHAPTER 1 — THE PIG ═══════ */}
      <section className="bg-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="CHAPTER 1 — THE PIG"
                title="A Traditional Balinese Whole-Pig Experience"
                subtitle="Babi Guling is one of Bali's most iconic food experiences. It is a whole roasted pig served with Balinese sides, sambals, rice, sate, and fresh accompaniments."
              />
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Babi Guling has been central to Balinese ceremonies and celebrations for centuries. The ritual of roasting a whole pig over an open fire brings communities together — it is served at weddings, temple festivals, and family gatherings as a symbol of abundance and hospitality. For visitors, it offers an authentic taste of Balinese culture, prepared with the same respect and technique passed down through generations.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Villa parties', 'Birthdays', 'Local food nights', 'Group dinners', 'Cultural experiences', 'Large family meals', 'Casual events'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A028]" />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/pkg-roast.webp"
                alt="Chef carving Babi Guling with Balinese sides"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 2 — THE FEAST"
            title="Choose Your Babi Guling Package"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#C5A028] font-semibold text-lg mb-1">{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-1"><AllInPrice price={pkg.priceNum} showPlusPlus={false} suffix=" total" /></p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.guests}</p>
                <div className="space-y-2 mb-4">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028]" /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#4A4745]/70 pt-3 border-t border-[#E8E6E3]">
                  <strong>Best for:</strong> {pkg.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ANNOTATED DIAGRAM ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 3 — THE COMPONENTS"
            title="What Is in the Feast"
            subtitle="Every Babi Guling spread is built around the whole pig and a complete set of traditional accompaniments."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {FEAST_COMPONENTS.map((item) => (
              <div key={item.name} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-[#1A1A1A]">{item.name}</p>
                  <p className="text-xs text-[#4A4745]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COOKING PROCESS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 4 — THE CRAFT"
            title="The Cooking Process"
            subtitle="Eight hours from raw pig to carved feast. Every step is done by hand, over charcoal, in the traditional Balinese way."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {COOKING_STEPS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <span className="text-[#C5A028] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BONFIRE SETUP ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <Flame className="w-10 h-10 text-[#C5A028] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Bonfire Setup Option</h2>
          <p className="text-[#4A4745] mb-6">
            For large groups booking the Large Babi Guling package, we offer a premium bonfire setup in your villa garden. This adds atmosphere, warmth, and a focal point for the evening. Available at selected locations with sufficient outdoor space.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Garden bonfire', 'Ambient lighting', 'Seating arrangement', 'Fire safety included', 'Evening events only'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 5 — THE SERVICE"
            title="What Every Babi Guling Package Includes"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PHOTO GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 6 — THE SETUP"
            title="Babi Guling Gallery"
            subtitle="Traditional whole-pig setups and carved feasts across Bali villas."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BABI_GULING_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt={`Babi Guling setup ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DIETARY NOTE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Important: Babi Guling Contains Pork</h2>
          <p className="text-[#4A4745] mb-6">
            Babi Guling is a pork-based Balinese whole-pig dish. It is not suitable for halal groups or pork-free events. For pork-free or halal-style catering, choose one of our alternatives.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/catering/bbq-catering" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
              View Indonesian BBQ
            </Link>
            <Link to="/catering/buffet" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
              View Buffet Catering
            </Link>
            <Link to="/catering/drop-off-catering" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
              View Drop-Off Catering
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ BEST FOR ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Best For These Events"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Add More to the Experience"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4 md:p-5 hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base">{addon.title}</h4>
                  <span className="text-[#C5A028] font-semibold text-sm whitespace-nowrap">{addon.price}</span>
                </div>
                {addon.description && <p className="text-xs text-[#4A4745]">{addon.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW SETUP WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How Setup Works"
            subtitle="Babi Guling requires coordination because the whole-pig preparation and timing must be handled properly."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <span className="text-[#C5A028] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AREA COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Babi Guling Catering Across Bali"
            subtitle="Travel fee depends on area, delivery timing, setup needs, and event size."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Reserve Now"
            title="Reserve Babi Guling Catering"
          />
          <BookingFormCatering
            title="Reserve Your Babi Guling"
            subtitle="We will confirm availability, setup details, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Package Size', type: 'select', icon: Package, required: true },
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Time', type: 'text', icon: Flame, placeholder: 'e.g. 6:00 PM' },
              { name: 'area', label: 'Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa/Venue Address', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 15', required: true },
              { name: 'setup', label: 'Delivery or Serviced Setup?', type: 'text', placeholder: 'Delivery / Full service' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Extra sides, staff, bonfire...' },
              { name: 'porkConfirm', label: 'I confirm this is a pork-accepted event', type: 'text', placeholder: 'Yes', required: true },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Small (10-15 guests)', 'Medium (25-30 guests)', 'Large (40-50 guests)']}
            accent="#C5A028"
          />
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Rachel & Sam', location: 'Ubud Villa', quote: 'The Babi Guling was the highlight of our group dinner. The crispy skin was incredible and the lawar was authentic. A true Balinese experience.', rating: 5 },
          { name: 'The Wong Family', location: 'Canggu Villa', quote: 'We ordered the medium package for 28 guests. The portions were generous and the whole pig was perfectly cooked. Highly recommend.', rating: 5 },
          { name: 'Chris M.', location: 'Seminyak Villa', quote: 'Best Babi Guling outside of Ubud. The sambals were spicy and flavorful. Our guests are still talking about it weeks later.', rating: 5 },
        ]}
        title="What Babi Guling Guests Say"
        subtitle="Real reviews from traditional Balinese whole-pig events across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Babi Guling FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/pkg-roast.webp"
            alt="Complete Babi Guling table with guests"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Reserve a Babi Guling Package for Your Event
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send your date, area, guest count, and preferred package size. We will confirm availability, setup details, and final price by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Flame className="w-4 h-4" /> Reserve Babi Guling
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
