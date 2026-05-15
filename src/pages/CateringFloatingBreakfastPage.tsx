import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Check, Phone, Calendar, Users, MapPin,
  Utensils, Sun, Sunrise, Sunset, Clock, Droplets,
  Heart, Camera, Sparkles, Wine, CakeSlice, Flower2,
  ChefHat, ArrowRight, ShieldCheck, Truck, Package,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  cateringBreadcrumbSchema,
  cateringServiceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20book%20a%20floating%20breakfast%20in%20Bali.'
const SITE = 'https://mychef.id'

const FLOATING_PACKAGES = [
  {
    image: '/generated/catering/floating-breakfast.webp',
    title: 'Floating Breakfast for 2',
    price: 'IDR 950,000/couple',
    priceNum: 950000,
    description: 'Bamboo tray, tropical fruit, croissants, eggs, coffee/tea/juice.',
    includes: ['Custom bamboo tray', 'Tropical fruit', 'Croissants & pastries', 'Eggs', 'Coffee, tea & juice'],
    minGuests: 'For 2',
  },
  {
    image: '/generated/catering/floating-brunch.webp',
    title: 'Floating Brunch for 2',
    price: 'IDR 1,400,000/couple',
    priceNum: 1400000,
    description: 'Champagne, cured salmon, avocado toast, mini grazing board.',
    includes: ['Champagne', 'Cured salmon', 'Avocado toast', 'Mini grazing board', 'Coffee, tea & juice'],
    minGuests: 'For 2',
  },
  {
    image: '/generated/catering/floating-group.webp',
    title: 'Floating Group Brunch',
    price: 'IDR 750,000/person',
    priceNum: 750000,
    description: '4-10 guests, multiple trays, scaled setup.',
    includes: ['Multiple bamboo trays', 'Scaled fruit & pastries', 'Eggs & mains', 'Coffee, tea & juice', 'Group styling'],
    minGuests: 'Min. 4 guests',
  },
]

const BEST_OCCASIONS = [
  { icon: Heart, title: 'Honeymoons', desc: 'Romantic pool mornings' },
  { icon: CakeSlice, title: 'Birthdays', desc: 'Surprise breakfast celebrations' },
  { icon: Sparkles, title: 'Anniversaries', desc: 'Special milestone mornings' },
  { icon: Users, title: "Girls' Trips", desc: 'Instagram-worthy group moments' },
  { icon: Sun, title: 'Villa Stays', desc: 'Luxury holiday mornings' },
  { icon: Flower2, title: 'Surprise Mornings', desc: 'Unexpected delights' },
  { icon: Camera, title: 'Pre-Wedding Stays', desc: 'Bridal prep photo sessions' },
  { icon: Wine, title: 'Luxury Holiday Mornings', desc: 'Indulgent vacation starts' },
]

const INCLUDED_ITEMS = [
  'Floating tray',
  'Breakfast items',
  'Tropical fruit',
  'Fresh juice',
  'Coffee & tea',
  'Pastries',
  'Eggs',
  'Pancakes',
  'Smoothie bowls',
  'Flowers',
  'Optional champagne',
]

const MENU_OPTIONS = [
  { name: 'Tropical Breakfast', desc: 'Mango, pineapple, dragon fruit, coconut, and island-inspired dishes' },
  { name: 'Healthy Breakfast', desc: 'Avocado toast, granola bowls, fresh greens, and cold-pressed juices' },
  { name: 'Indonesian Breakfast', desc: 'Nasi goreng, mie goreng, sambal, and traditional Balinese sides' },
  { name: 'Western Breakfast', desc: 'Eggs Benedict, bacon, sausages, hash browns, and toast' },
  { name: 'Vegetarian Breakfast', desc: 'Plant-based eggs, tempeh, grilled vegetables, and dairy-free options' },
  { name: "Children's Breakfast", desc: 'Pancakes, fruit skewers, mild flavors, and fun presentation' },
]

const VILLA_REQUIREMENTS = [
  { icon: Droplets, title: 'Pool Access', desc: 'Clear entry for tray placement and safe floating area' },
  { icon: Clock, title: 'Timing', desc: 'Setup 15 minutes before your chosen time slot' },
  { icon: ShieldCheck, title: 'Safe Serving Area', desc: 'Shallow shelf or calm water zone for stable tray placement' },
  { icon: Truck, title: 'Staff Access', desc: 'Villa staff or gate access for delivery and collection' },
  { icon: Package, title: 'Tray Return', desc: 'We collect trays 1.5–2 hours after delivery' },
  { icon: Sun, title: 'Shade', desc: 'Morning shade helps keep food fresh and photos soft' },
  { icon: ShieldCheck, title: 'Weather Backup', desc: 'Indoor villa table setup if rain is forecast' },
]

const TIME_OPTIONS = [
  { icon: Sunrise, label: 'Sunrise', time: '6:00 – 7:30am', desc: 'Golden light, quiet morning, perfect for photos.' },
  { icon: Sun, label: 'Midday', time: '10:00 – 11:00am', desc: 'Bright and relaxed. Great for late risers.' },
  { icon: Sunset, label: 'Sunset', time: '4:30 – 6:00pm', desc: 'Golden hour glow over the pool. Magical.' },
]

const ADDONS = [
  { title: 'Flowers', price: '+IDR 350,000', description: 'Fresh tropical floral arrangement on the tray' },
  { title: 'Cake', price: '+IDR 450,000', description: 'Custom small cake for birthdays or celebrations' },
  { title: 'Champagne', price: '+IDR 850,000', description: 'Bottle of sparkling wine or champagne upgrade' },
  { title: 'Photographer 1 hour', price: '+IDR 1,500,000', description: 'Professional poolside photo shoot' },
  { title: 'Birthday message', price: '+IDR 150,000', description: 'Personalized message card or signage' },
  { title: 'Private chef breakfast', price: 'Quote based', description: 'Live cooking station by the pool' },
  { title: 'Extra trays', price: '+IDR 650,000', description: 'Additional floating tray for larger groups' },
  { title: 'Smoothie bar', price: '+IDR 750,000', description: 'Fresh blended smoothie station poolside' },
]

const DELIVERY_STEPS = [
  { step: 1, title: 'Choose time slot', desc: 'Sunrise, midday, or sunset.' },
  { step: 2, title: 'We prepare & style', desc: 'Chef prepares everything fresh.' },
  { step: 3, title: 'Deliver to your pool', desc: 'Styled tray placed in your pool.' },
  { step: 4, title: 'Retrieve when done', desc: 'We collect the tray 1.5–2h later.' },
]

const FLOATING_GALLERY = [
  '/generated/catering/floating-breakfast.webp',
  '/generated/pkg-breakfast.webp',
  '/generated/sol-breakfast.webp',
  '/generated/hub-catering.webp',
  '/generated/aura-buffet.webp',
  '/generated/aura-tablescape.webp',
]

const FAQS = [
  { q: 'Can you deliver to any villa?', a: 'We deliver to most villas across Bali with pool access. We need safe entry for tray placement and a calm water area. If your pool is very small or has no shallow shelf, we can adapt the setup or place the tray poolside instead.' },
  { q: 'What time can we book?', a: 'You can choose sunrise (6:00–7:30am), midday (10:00–11:00am), or sunset (4:30–6:00pm). Sunrise is most popular for photos and cooler temperatures.' },
  { q: 'Is the tray included?', a: 'Yes. Every package includes a custom bamboo floating tray sized for your group. Couple trays are 120cm × 80cm. Group setups use multiple trays.' },
  { q: 'Can it be vegan or vegetarian?', a: 'Absolutely. We offer a full vegetarian breakfast with plant-based eggs, tempeh, grilled vegetables, and dairy-free smoothie bowls. Vegan options are available on request.' },
  { q: 'What happens if it rains?', a: 'If rain is forecast, we offer an indoor villa table setup with the same styling and menu. You can also reschedule to the next available morning slot at no extra charge.' },
  { q: 'How far in advance should I book?', a: 'We recommend 2–3 days minimum. For peak season (June–August, December–January), 1–2 weeks is ideal to secure your preferred date and time slot.' },
  { q: 'What areas in Bali do you cover?', a: 'We serve Canggu, Seminyak, Berawa, Pererenan, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Tanah Lot, Kerobokan, Kuta, Legian, and Denpasar. Travel fees may apply outside Seminyak and Canggu.' },
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

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Floating Breakfast Bali | Villa Pool Breakfast Experience"
        description="Floating breakfast in Bali for villas, honeymoon stays, birthdays, and private mornings with tropical food, drinks, styling, and delivery."
        canonical={`${SITE}/catering/floating-breakfast`}
        ogImage={`${SITE}/breakfast-spread.webp`}
        jsonLd={[
          localBusinessSchema,
          cateringServiceSchema('Floating Breakfast Bali', 'Floating breakfast service in Bali for villa pools, honeymoons, birthdays, and private mornings with tropical dishes and styled presentation. myCHEF.id prepares, delivers, and sets the experience across Bali.', `${SITE}/catering/floating-breakfast`),
          offerSchema('Floating Breakfast for 2', 950000, 'IDR', `${SITE}/catering/floating-breakfast`),
          offerSchema('Floating Brunch for 2', 1400000, 'IDR', `${SITE}/catering/floating-breakfast`),
          offerSchema('Floating Group Brunch', 750000, 'IDR', `${SITE}/catering/floating-breakfast`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          cateringBreadcrumbSchema('Floating Breakfast Bali', `${SITE}/catering/floating-breakfast`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Floating Breakfast Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hero-floating-breakfast.webp"
            alt="Floating breakfast bamboo tray in a Bali villa pool with tropical fruit, coffee, and flowers"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Floating Breakfast Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Floating Breakfast Bali<br />
            <span className="italic">for Villa Pool Mornings</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4745] mb-8 max-w-2xl mx-auto">
            A styled floating breakfast experience with tropical dishes, fresh juice, coffee, fruit, and pool-ready presentation delivered to your villa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Calendar className="w-4 h-4" /> Book Floating Breakfast
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

      {/* ═══════ SECTION 1 — FLOATING BREAKFAST IN BALI ═══════ */}
      <section className="floating-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Villa Pool Experience"
                title="Floating Breakfast in Bali"
                subtitle="Breakfast served in a floating tray in your villa pool. Strong visual, romantic, simple, and social-media friendly."
              />
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                A floating breakfast in Bali is one of the most iconic villa experiences. We deliver a styled bamboo tray loaded with tropical fruit, pastries, eggs, fresh juice, and coffee — floating directly in your private pool. It is romantic, effortless, and designed to be photographed.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Whether you are on honeymoon, celebrating a birthday, or simply want a slow luxury morning, our floating breakfast turns an ordinary pool into a magazine-worthy scene. Everything is prepared fresh, styled with flowers, and placed in your pool at your chosen time.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {['Bamboo floating tray', 'Tropical fruit & flowers', 'Fresh pastries & eggs', 'Juice, coffee & tea', 'Photo-ready styling', 'Chef-prepared food', 'Poolside delivery', 'Flexible timing'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A028]" />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/catering/floating-breakfast.webp"
                alt="Floating breakfast tray with tropical fruit and coffee in a Bali villa pool"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2 — BEST OCCASIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Best Occasions for a Floating Breakfast"
            subtitle="The moments that deserve a floating tray in the pool."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_OCCASIONS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — WHAT IS INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Inclusions"
            title="What Is Included"
            subtitle="Every floating breakfast arrives as a complete, styled experience — not just food on a tray."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INCLUDED_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Truck className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Delivery & Setup</h4>
              <p className="text-xs text-[#4A4745] mt-1">We place the styled tray directly in your pool at your chosen time.</p>
            </div>
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Camera className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Photo-Ready Styling</h4>
              <p className="text-xs text-[#4A4745] mt-1">Flowers, linen, and tropical details arranged for social sharing.</p>
            </div>
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <ShieldCheck className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Tray Collection</h4>
              <p className="text-xs text-[#4A4745] mt-1">We retrieve the tray 1.5–2 hours after delivery — no cleanup for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — MENU OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Menu"
            title="Floating Breakfast Menu Options"
            subtitle="Choose a breakfast style that matches your mood, diet, and group."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {MENU_OPTIONS.map((item) => (
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

      {/* ═══════ SECTION 5 — VILLA REQUIREMENTS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Requirements"
            title="Villa Requirements"
            subtitle="What we need at your villa to deliver a safe, beautiful floating breakfast."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {VILLA_REQUIREMENTS.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6 — PHOTO AND STYLING DIRECTION ═══════ */}
      <section id="setups" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Styling"
            title="Photo and Styling Direction"
            subtitle="How we style every floating breakfast for maximum visual impact."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/catering/floating-breakfast.webp"
                alt="Styled floating breakfast tray with tropical fruit, coffee, and white linen in a clear Bali villa pool"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <p className="text-[#4A4745] text-sm leading-relaxed mb-4">
                Every floating breakfast is designed to look as good as it tastes. The tray floats in clear pool water with your villa as the backdrop. We arrange tropical fruit, fresh coffee, pastries, and white linen with intentional negative space so your photos feel natural and editorial.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mb-4">
                Flowers are placed to frame the tray without blocking the food. Coffee cups are angled for light reflection. Fruit is stacked for color contrast. The result is a scene that feels effortless — even though every detail is considered.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Tray floating in clear pool', 'Villa background', 'Tropical fruit arrangement', 'Styled coffee & juice', 'White linen accents', 'Fresh flowers'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {FLOATING_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt={`Floating breakfast setup ${i + 1} in a Bali villa pool`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7 — FLOATING BREAKFAST VS PRIVATE CHEF ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Comparison"
            title="Floating Breakfast vs Private Breakfast Chef"
            subtitle="Choose the experience that fits your morning."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-[#C5A028]" />
              </div>
              <h3 className="text-xl md:text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Floating Breakfast</h3>
              <p className="text-[#4A4745] text-sm leading-relaxed mb-4">
                Visual and simple. A styled tray delivered to your pool — perfect for couples, honeymoons, and photo moments. The food is prepared fresh and arranged for beauty. Best for 2–6 guests who want a relaxed, Instagram-worthy morning.
              </p>
              <div className="space-y-2">
                {['Pre-prepared & styled', 'Pool delivery included', 'Photo-first presentation', 'Ideal for 2–6 guests', 'Minimal villa setup needed'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028]" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-[#6B8E5A]" />
              </div>
              <h3 className="text-xl md:text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Private Breakfast Chef</h3>
              <p className="text-[#4A4745] text-sm leading-relaxed mb-4">
                Full cooked service and larger groups. A chef prepares breakfast live at your villa — eggs to order, pancakes fresh off the pan, smoothie bowls blended poolside. Better for families, groups of 6+, or guests who want hot, made-to-order food.
              </p>
              <div className="space-y-2">
                {['Live cooking at your villa', 'Made-to-order hot dishes', 'Larger group capacity', 'Custom menu planning', 'Interactive experience'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#6B8E5A]" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/catering/villa-catering"
              className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline"
            >
              Explore villa catering options <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8 — ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Add-Ons"
            subtitle="Upgrade your floating breakfast with flowers, champagne, photography, and more."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <CateringAddOnCard key={addon.title} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TIME OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Timing"
            title="Choose Your Time"
            subtitle="Three time slots to match your mood and the light."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {TIME_OPTIONS.map((opt) => (
              <div key={opt.label} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <opt.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h4 className="font-medium text-lg mb-1">{opt.label}</h4>
                <p className="text-[#C5A028] font-semibold text-sm mb-2">{opt.time}</p>
                <p className="text-xs text-[#4A4745]">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY PROCESS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="Delivery Process"
            subtitle="Four simple steps from booking to retrieval."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {DELIVERY_STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#C5A028] text-white flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  {s.step}
                </div>
                <h4 className="font-medium text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Floating Breakfast Packages"
            subtitle="Fixed-price packages for couples and groups. No hidden fees."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {FLOATING_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#C5A028" />
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#4A4745]/70">
              All-in fixed pricing:{' '}
              <AllInPrice price={950000} showPlusPlus={false} suffix="/couple" className="inline" /> ·{' '}
              <AllInPrice price={1400000} showPlusPlus={false} suffix="/couple" className="inline" /> ·{' '}
              <AllInPrice price={750000} showPlusPlus={false} suffix="/person" className="inline" />
            </p>
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

      {/* ═══════ SECTION 9 — FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Floating Breakfast FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 10 — CTA / ORDER FORM ═══════ */}
      <section id="order" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Reserve Now"
            title="Book Floating Breakfast"
            subtitle="Book by date, villa location, guest count, breakfast style, and special occasion. We will confirm availability and styling within the hour."
          />
          <BookingFormCatering
            title="Book Floating Breakfast"
            subtitle="We will confirm availability, styling, and delivery time within the hour."
            fields={[
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'timeSlot', label: 'Time Slot', type: 'select', icon: Clock, required: true },
              { name: 'package', label: 'Package', type: 'select', icon: Utensils, required: true },
              { name: 'area', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 2', required: true },
              { name: 'style', label: 'Breakfast Style', type: 'text', placeholder: 'Tropical / Healthy / Indonesian / Western / Vegetarian' },
              { name: 'occasion', label: 'Special Occasion', type: 'text', placeholder: 'Honeymoon / Birthday / Anniversary / None' },
              { name: 'poolSize', label: 'Pool Size', type: 'text', icon: Droplets, placeholder: 'e.g. 5m x 3m infinity pool' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Flowers, cake, champagne, photographer...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Floating Breakfast for 2', 'Floating Brunch for 2', 'Floating Group Brunch']}
            accent="#C5A028"
          />
        </div>
      </section>

      {/* ═══════ FINAL CTA BANNER ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/catering/floating-breakfast.webp"
            alt="Floating breakfast tray in a Bali villa pool"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Your Floating Breakfast in Bali
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send your date, villa location, guest count, breakfast style, and special occasion. We will confirm availability and styling by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Calendar className="w-4 h-4" /> Book Floating Breakfast
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-floating-breakfast-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ INTERNAL LINKS ═══════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4A4745]/50 mb-6 text-center">Explore More</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/fine-dining" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
              Fine Dining
            </Link>
            <Link to="/catering/villa-catering" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
              Villa Catering
            </Link>
            <Link to="/events" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
              Events
            </Link>
            <Link to="/contact" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
