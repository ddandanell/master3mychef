import { useEffect, useRef } from 'react'
import {
  Check, Phone, Calendar, Users, MapPin,
  Utensils, Sun, Sunrise, Sunset, Clock, Droplets,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20order%20a%20floating%20breakfast.'
const SITE = 'https://mychef.id'

const FLOATING_PACKAGES = [
  {
    image: '/generated/catering/floating-breakfast.webp',
    title: 'Floating Breakfast for 2',
    price: 'IDR 950,000/couple',
    description: 'Bamboo tray, tropical fruit, croissants, eggs, coffee/tea/juice.',
    includes: ['Custom bamboo tray', 'Tropical fruit', 'Croissants & pastries', 'Eggs', 'Coffee, tea & juice'],
    minGuests: 'For 2',
  },
  {
    image: '/generated/catering/floating-breakfast.webp',
    title: 'Floating Brunch for 2',
    price: 'IDR 1,400,000/couple',
    description: 'Champagne, cured salmon, avocado toast, mini grazing board.',
    includes: ['Champagne', 'Cured salmon', 'Avocado toast', 'Mini grazing board', 'Coffee, tea & juice'],
    minGuests: 'For 2',
  },
  {
    image: '/generated/catering/floating-breakfast.webp',
    title: 'Floating Group Brunch',
    price: 'IDR 750,000/person',
    description: '4-10 guests, multiple trays, scaled setup.',
    includes: ['Multiple bamboo trays', 'Scaled fruit & pastries', 'Eggs & mains', 'Coffee, tea & juice', 'Group styling'],
    minGuests: 'Min. 4 guests',
  },
]

const TRAY_ITEMS = [
  'Custom bamboo tray',
  'Tropical fruit',
  'Croissants & pastries',
  'Eggs Benedict',
  'Cured salmon',
  'Avocado toast',
  'Mini grazing board',
  'Coffee, tea & juice',
  'Champagne (brunch tier)',
]

const TIME_OPTIONS = [
  { icon: Sunrise, label: 'Sunrise', time: '6:00 – 7:30am', desc: 'Golden light, quiet morning, perfect for photos.' },
  { icon: Sun, label: 'Midday', time: '10:00 – 11:00am', desc: 'Bright and relaxed. Great for late risers.' },
  { icon: Sunset, label: 'Sunset', time: '4:30 – 6:00pm', desc: 'Golden hour glow over the pool. Magical.' },
]

const ADDONS = [
  { title: 'Champagne upgrade — Veuve Clicquot', price: '+IDR 1,500,000', description: 'Upgrade to Veuve Clicquot champagne' },
  { title: 'Champagne upgrade — Krug', price: '+IDR 4,500,000', description: 'Upgrade to Krug champagne' },
  { title: 'Photographer 1 hour', price: '+IDR 1,500,000', description: 'Professional poolside photo shoot' },
  { title: 'Premium floral pool styling', price: '+IDR 2,500,000', description: 'Floating florals and pool decor' },
  { title: 'Birthday / anniversary signage', price: '+IDR 350,000', description: 'Custom signage for your celebration' },
  { title: 'Live acoustic guitarist 30 min', price: '+IDR 1,500,000', description: 'Soft acoustic music by the pool' },
]

const DELIVERY_STEPS = [
  { step: 1, title: 'Choose time slot', desc: 'Sunrise, midday, or sunset.' },
  { step: 2, title: 'We prepare & style', desc: 'Chef prepares everything fresh.' },
  { step: 3, title: 'Deliver to your pool', desc: 'Styled tray placed in your pool.' },
  { step: 4, title: 'Retrieve when done', desc: 'We collect the tray 1.5–2h later.' },
]

const FAQS = [
  { q: 'What time do you set up?', a: 'You can choose sunrise (6:00–7:30am), midday (10–11am), or sunset (4:30–6pm).' },
  { q: 'Does the tray come back out?', a: 'Yes. We retrieve the tray 1.5–2 hours after delivery.' },
  { q: 'How big is the tray?', a: 'The couple tray is 120cm × 80cm. Group setups use multiple trays.' },
  { q: 'What if my pool is small?', a: 'We adapt to plunge pools, infinity pools, and jacuzzis.' },
  { q: 'Is the food hot or cold?', a: 'A mix — juices are cold, eggs are warm at delivery.' },
  { q: 'Can I add a photographer?', a: 'Yes. A 1-hour professional poolside photo shoot is IDR 1,500,000.' },
  { q: 'Birthday or anniversary surprise?', a: 'Yes. We offer signage, petals, and cake add-ons.' },
  { q: 'Delivery beyond Seminyak/Canggu?', a: 'Yes, with a surcharge of IDR 150,000–500,000 depending on distance.' },
]

export default function CateringFloatingBreakfastPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.floating-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.floating-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Floating Breakfast Bali',
    description: 'Bamboo tray styled with frangipani, tropical fruit, and chef-prepared brunch delivered to your Bali villa pool.',
    price: '950000',
    priceCurrency: 'IDR',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: `${SITE}/catering/floating-breakfast`,
    seller: { '@id': 'https://mychef.id/#business' },
  }

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Floating Breakfast Bali | Villa Pool Brunch — myCHEF"
        description="Bamboo tray styled with frangipani + tropical fruit + chef-prepared brunch. Delivered to your Bali villa pool, photo-ready. From IDR 950,000/couple."
        canonical={`${SITE}/catering/floating-breakfast`}
        ogImage={`${SITE}/generated/catering/floating-breakfast.webp`}
        jsonLd={[localBusinessSchema, offerSchema, breadcrumbSchema('Floating Breakfast', `${SITE}/catering/floating-breakfast`, 'Catering', `${SITE}/catering`)]}
      />

      {/* ═══════ HERO (light, airy) ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/catering/floating-breakfast.webp"
            alt="Floating breakfast bamboo tray in a Bali villa pool with tropical fruit"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Floating Breakfast
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Floating Breakfast —<br />
            <span className="italic">In Your Bali Villa Pool</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4745] mb-8 max-w-2xl mx-auto">
            Bamboo tray styled with frangipani + tropical fruit + chef-prepared brunch. Delivered to your villa pool, photo-ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Calendar className="w-4 h-4" /> Order Floating Breakfast
            </a>
            <a
              href="#setups"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#1A1A1A]/20 text-[#1A1A1A] text-sm tracking-widest uppercase rounded-full hover:bg-white/60 transition-all"
            >
              <Utensils className="w-4 h-4" /> See the Setups
            </a>
          </div>
          <p className="text-[#4A4745]/80 text-sm">From IDR 950,000/couple · Photo-ready styling · Chef-prepared</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ PACKAGES ═══════ */}
      <section className="floating-content py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Choose Your Floating Experience"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {FLOATING_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#6B8E5A" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ VISUAL SETUP DETAIL ═══════ */}
      <section id="setups" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="The Tray"
            title="What's on the Tray"
            subtitle="Every floating breakfast is styled with fresh, chef-prepared items and tropical details."
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {TRAY_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TIME OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Timing"
            title="Choose Your Time"
            subtitle="Three time slots to match your mood and the light."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {TIME_OPTIONS.map((opt) => (
              <div key={opt.label} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-4">
                  {opt.time === 'Sunrise' ? <Sunrise className="w-5 h-5 text-[#6B8E5A]" /> : opt.time === 'Sunset' ? <Sunset className="w-5 h-5 text-[#6B8E5A]" /> : <Sun className="w-5 h-5 text-[#6B8E5A]" />}
                </div>
                <h4 className="font-medium text-lg mb-1">{opt.label}</h4>
                <p className="text-[#6B8E5A] font-semibold text-sm mb-2">{opt.time}</p>
                <p className="text-xs text-[#4A4745]">{opt.desc}</p>
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
            title="Add-Ons"
            subtitle="Upgrade your floating breakfast with champagne, photography, music, and styling."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <CateringAddOnCard key={addon.title} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY PROCESS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="How It Works"
            title="Delivery Process"
            subtitle="Four simple steps from booking to retrieval."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {DELIVERY_STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#6B8E5A] text-white flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  {s.step}
                </div>
                <h4 className="font-medium text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Jessica & Tom', location: 'Seminyak Villa', quote: 'The floating breakfast was absolutely magical. The tray was beautiful, the food was delicious, and the photos are incredible.', rating: 5 },
          { name: 'The Park Family', location: 'Canggu Villa', quote: 'We ordered the floating brunch for our anniversary. The champagne, the styling, the whole experience was perfect.', rating: 5 },
          { name: 'Amanda R.', location: 'Uluwatu Villa', quote: 'Best start to our Bali trip. The sunrise slot was worth the early wake-up. Highly recommend the photographer add-on.', rating: 5 },
        ]}
        title="What Floating Breakfast Guests Say"
        subtitle="Real reviews from villa pool breakfasts across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Floating Breakfast FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ ORDER FORM ═══════ */}
      <section id="order" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Order Now"
            title="Order Floating Breakfast"
          />
          <BookingFormCatering
            title="Order Floating Breakfast"
            subtitle="We will confirm availability, styling, and delivery time within the hour."
            fields={[
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'timeSlot', label: 'Time Slot', type: 'select', icon: Clock, required: true },
              { name: 'package', label: 'Package', type: 'select', icon: Utensils, required: true },
              { name: 'area', label: 'Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'poolSize', label: 'Pool Size', type: 'text', icon: Droplets, placeholder: 'e.g. 5m x 3m infinity pool' },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 2', required: true },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Champagne, photographer, floral styling, guitarist...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Floating Breakfast for 2', 'Floating Brunch for 2', 'Floating Group Brunch']}
            accent="#6B8E5A"
          />
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/catering/floating-breakfast.webp"
            alt="Floating breakfast tray in a Bali villa pool"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Your Floating Breakfast?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send your villa, date, time slot, and package. We will confirm availability and styling by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Calendar className="w-4 h-4" /> Order Floating Breakfast
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
