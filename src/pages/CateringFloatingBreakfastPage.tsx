import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Check, Phone, Calendar, Users, MapPin,
  Utensils, Sun, Sunrise, Sunset, Clock, Droplets,
  Heart, Camera, Sparkles, Wine, CakeSlice, Flower2,
  ChefHat, ShieldCheck, Truck, Package,
  Leaf, Gift, Star, Coffee, Cloud,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceWithOfferSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { ArticleContentSection, Breadcrumb, PressStrip, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a Floating Breakfast Experience in Bali', intent: 'floating breakfast packages and pricing' })
const SITE = 'https://mychef.id'

const FLOATING_PACKAGES = [
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Floating Breakfast for 2',
    price: 'IDR 950,000/couple',
    priceNum: 950000,
    description: 'Custom bamboo tray with tropical fruit, croissants and pastries, eggs, coffee, tea and juice. The classic.',
    includes: ['Custom bamboo tray', 'Tropical fruit & croissants', 'Eggs, coffee, tea & juice', 'Flowers & drinks included', 'Pool setup & retrieval'],
    minGuests: 'For 2',
  },
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Floating Brunch for 2',
    price: 'IDR 1,400,000/couple',
    priceNum: 1400000,
    description: 'Champagne, cured salmon, avocado toast and a mini grazing board. The celebration version.',
    includes: ['Champagne', 'Cured salmon', 'Avocado toast', 'Mini grazing board', 'Celebration brunch'],
    minGuests: 'For 2',
  },
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Floating Group Brunch',
    price: 'IDR 750,000/person',
    priceNum: 750000,
    description: 'Multiple bamboo trays, scaled fruit and pastry service, eggs and mains, coffee, tea and juice for the whole group.',
    includes: ['Multiple bamboo trays', 'Scaled fruit & pastries', 'Eggs and mains', 'Coffee, tea & juice', 'For 4–10 guests'],
    minGuests: '4–10 guests',
  },
]

const DIFFERENTIATION = [
  { icon: ChefHat, title: 'Freshly prepared', desc: 'Cooked the same morning, not pre-packed the night before.' },
  { icon: Utensils, title: 'Chef cooked', desc: 'A myCHEF chef prepares and plates every element.' },
  { icon: Sparkles, title: 'Restaurant presentation', desc: 'Plated like a boutique restaurant, styled for your pool.' },
  { icon: Leaf, title: 'Premium ingredients', desc: 'Local tropical fruit, imported pastries, and quality proteins.' },
  { icon: MapPin, title: 'Served in your villa', desc: 'We come to private villas across Bali.' },
  { icon: Clock, title: 'Flexible timing', desc: 'Sunrise, mid-morning, sunset, or any time that suits you.' },
  { icon: ShieldCheck, title: 'Dietary options', desc: 'Vegan, gluten-free, dairy-free, halal, and allergy-aware menus.' },
  { icon: Truck, title: 'Setup included', desc: 'Tray placement, flowers, styling, and pool safety check.' },
  { icon: Package, title: 'Cleanup included', desc: 'We collect the tray and leave the pool area tidy.' },
  { icon: Camera, title: 'Photography ready', desc: 'Lighting, composition, and styling planned for photos.' },
  { icon: Flower2, title: 'Fresh flowers optional', desc: 'Tropical blooms arranged on and around the tray.' },
  { icon: Wine, title: 'Champagne optional', desc: 'Sparkling wine, rosé, or champagne upgrades available.' },
]

const VILLA_SUITABILITY = [
  { icon: Droplets, title: 'Pool size', desc: 'A flat, calm area at least 2.5 m wide works best for a stable tray.' },
  { icon: Package, title: 'Tray size', desc: 'Couple trays are 120 cm × 80 cm; larger groups use multiple trays.' },
  { icon: ShieldCheck, title: 'Water depth', desc: 'Shallow shelves or calm zones keep the tray steady and safe.' },
  { icon: Sun, title: 'Infinity pools', desc: 'Stunning for photos; we use stable ledges or weighted supports.' },
  { icon: Sunrise, title: 'Round pools', desc: 'Central placement works beautifully with floral accents around the edge.' },
  { icon: MapPin, title: 'Rectangular pools', desc: 'Easy to align the tray with the pool for clean, editorial shots.' },
  { icon: Users, title: 'Villa staff coordination', desc: 'We coordinate with your villa manager for smooth entry and setup.' },
  { icon: Cloud, title: 'Weather', desc: 'Light rain plans include poolside or indoor table setup at no extra charge.' },
]

const HOW_IT_WORKS = [
  { step: 1, title: 'Book', desc: 'Choose your package, date, and villa location via WhatsApp or the form below.' },
  { step: 2, title: 'Menu', desc: 'We tailor the menu to your dietary needs, occasion, and photo vision.' },
  { step: 3, title: 'Villa information', desc: 'Share pool type, size, depth, access details, and villa contact.' },
  { step: 4, title: 'Arrival', desc: 'The chef team arrives 1.5–2 hours before your chosen time slot.' },
  { step: 5, title: 'Setup', desc: 'Tray is prepared, pool is styled, flowers and props are placed.' },
  { step: 6, title: 'Floating breakfast', desc: 'You step into the pool to a ready, photogenic breakfast experience.' },
  { step: 7, title: 'Cleanup', desc: 'We return to collect the tray, glassware, and décor when you are done.' },
]

const BUILD_OPTIONS = [
  { icon: ChefHat, label: 'Egg style', desc: 'Poached, scrambled, sunny-side up, Benedict, omelette, or Balinese-style.' },
  { icon: CakeSlice, label: 'Fresh pastries', desc: 'Croissants, danishes, sourdough, muffins, and Balinese baked goods.' },
  { icon: Leaf, label: 'Healthy', desc: 'Avocado toast, granola bowls, chia pudding, and cold-pressed juices.' },
  { icon: Heart, label: 'Vegan', desc: 'Plant-based eggs, dairy-free smoothies, tempeh, and tropical fruit.' },
  { icon: Users, label: 'Kids', desc: 'Pancakes, fruit skewers, mild flavours, and fun presentation.' },
  { icon: Wine, label: 'Champagne', desc: 'Sparkling wine, champagne, or Bali rosé upgrades.' },
  { icon: Flower2, label: 'Flowers', desc: 'Tropical floral arrangement on the tray and scattered in the pool.' },
  { icon: Coffee, label: 'Coffee', desc: 'Barista espresso, cappuccino, Balinese kopi, or French press.' },
  { icon: Droplets, label: 'Fresh juice', desc: 'Orange, watermelon, pineapple-ginger, or green detox juice.' },
  { icon: Star, label: 'Smoothies', desc: 'Acai, dragon fruit, mango, or green smoothie bowls.' },
  { icon: Sun, label: 'Fruit', desc: 'Dragon fruit, mango, papaya, rambutan, pineapple, and coconut.' },
  { icon: CakeSlice, label: 'Desserts', desc: 'Mini cakes, macarons, chocolates, or Balinese klepon.' },
  { icon: Sparkles, label: 'Balloons', desc: 'Floating balloons and poolside décor for celebrations.' },
  { icon: Gift, label: 'Birthday', desc: 'Cake, candles, birthday signage, and singing chef surprise.' },
  { icon: Heart, label: 'Proposal', desc: 'Romantic setup, private corner, flowers, and discreet coordination.' },
  { icon: Camera, label: 'Photography', desc: 'Professional poolside photo shoot add-on available.' },
]

const VARIATIONS = [
  { title: 'Floating Brunch', desc: 'Eggs Benedict, smoked salmon, avocado toast, and sparkling wine.' },
  { title: 'Floating Champagne', desc: 'Champagne, fresh juice, oysters, and berries for celebratory mornings.' },
  { title: 'Floating Afternoon Tea', desc: 'Pastries, finger sandwiches, scones, and Balinese tea.' },
  { title: 'Floating Dessert', desc: 'Mini cakes, tropical fruit, chocolates, and dessert wines.' },
  { title: 'Floating Anniversary', desc: 'Rose petals, champagne, anniversary cake, and private chef service.' },
  { title: 'Floating Proposal', desc: 'Secluded setup, flowers, photographer, and custom menu.' },
  { title: 'Floating Kids Breakfast', desc: 'Fun, safe pool-ledge setup with pancakes, fruit, and mild flavours.' },
  { title: 'Floating Family Breakfast', desc: 'Multiple trays, larger menu, and options for every age group.' },
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

const FLOATING_GALLERY = [
  '/generated/mychef-catering-bali-floating-breakfast.webp',
  '/generated/mychef-events-bali-party-brunch.webp',
  '/generated/mychef-experience-bali-aura-toast.webp',
  '/generated/mychef-catering-bali-hub-catering.webp',
  '/generated/mychef-experience-bali-aura-tablescape.webp',
  '/generated/mychef-misc-bali-section-romantic-dinner.webp',
]

const FAQS = [
  { q: 'How much does a floating breakfast in Bali cost?', a: 'IDR 950,000 per couple for the classic tray, IDR 1,400,000 for the champagne brunch, or IDR 750,000 per person for groups of 4–10 — all ++ (11% government tax + 10% service charge). Tray, flowers and drinks are included.' },
  { q: 'Do you deliver floating breakfast to Ubud, Uluwatu or Nusa Dua?', a: 'Yes. myCHEF serves Ubud, Uluwatu, Nusa Dua and Sanur as well as Seminyak, Canggu, Jimbaran and the rest of Bali. A small travel fee may apply outside Seminyak and Canggu, quoted upfront.' },
  { q: 'Is there a minimum order for floating breakfast?', a: 'Couple packages start at two guests; the group brunch has a minimum of four guests.' },
  { q: 'Can the floating breakfast be vegan, vegetarian, halal or gluten-free?', a: 'Yes. Vegetarian is standard; vegan and gluten-free versions are available on request, and everything can be prepared halal.' },
  { q: 'What happens if it rains on the day?', a: 'An indoor villa table setup with the same styling and menu is offered, or a free reschedule to the next available morning slot.' },
  { q: 'Is the floating tray included?', a: 'Yes, a custom bamboo floating tray is included in every package and collected 1.5–2 hours after delivery.' },
  { q: 'How far in advance should I book a floating breakfast?', a: 'Two to three days minimum; one to two weeks in peak season (June–August, December–January).' },
  { q: 'What deposit is required?', a: 'A 50% deposit confirms the booking; the remaining 50% is due the day before the service.' },
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
        title="Floating Breakfast Bali | Chef-Prepared, Island-Wide"
        description="Floating breakfast in your Bali villa pool — chef-prepared and styled, delivered island-wide incl. Ubud, Uluwatu & Nusa Dua. WhatsApp myCHEF."
        canonical={`${SITE}/catering/floating-breakfast`}
        ogImage={`${SITE}/breakfast-spread.webp`}
        jsonLd={[
          {
            ...serviceWithOfferSchema({
              name: 'Floating Breakfast Bali',
              description: 'Chef-prepared floating breakfast delivered and styled in your Bali villa pool, island-wide including Ubud, Uluwatu, Nusa Dua and Sanur.',
              url: `${SITE}/catering/floating-breakfast`,
              price: '950000',
              priceCurrency: 'IDR',
              unitText: 'per couple, before 11% government tax + 10% service charge',
            }),
            provider: {
              '@type': 'Organization',
              name: 'myCHEF.id',
              url: 'https://mychef.id',
              telephone: '+62 896-7407-2020',
              email: 'bali@mychef.id',
            },
            areaServed: [
              { '@type': 'Place', name: 'Ubud' },
              { '@type': 'Place', name: 'Uluwatu' },
              { '@type': 'Place', name: 'Nusa Dua' },
              { '@type': 'Place', name: 'Sanur' },
              { '@type': 'Place', name: 'Seminyak' },
              { '@type': 'Place', name: 'Canggu' },
              { '@type': 'Place', name: 'Bali' },
            ],
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '950000',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '950000',
                priceCurrency: 'IDR',
                unitText: 'per couple, before 11% government tax + 10% service charge',
              },
              description: 'Floating breakfast for two from IDR 950,000++/couple; brunch IDR 1,400,000++/couple; group brunch IDR 750,000++/person',
              url: `${SITE}/catering/floating-breakfast`,
            },
          },
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          cateringBreadcrumbSchema('Floating Breakfast Bali', `${SITE}/catering/floating-breakfast`),
        ]}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-black" style={{ minHeight: 'clamp(520px, 88vh, 100vh)' }}>
        <OptimizedImage
          src="/generated/mychef-location-bali-floating-breakfast-bali.webp"
          alt="Luxury floating breakfast bamboo tray in a Bali villa pool with tropical fruit, coffee, and fresh flowers"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_center]"
          style={{ objectPosition: 'center center' }} />

        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.20) 40%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 bg-black/30 md:hidden" />

        <div
          className="relative z-10 flex items-center"
          style={{ minHeight: 'clamp(520px, 88vh, 100vh)' }}
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-14 pt-24 pb-12">
            <div className="max-w-[620px]">
              <Breadcrumb
                items={[
                  { label: 'Catering', href: '/catering' },
                  { label: 'Floating Breakfast' },
                ]}
                theme="dark"
                className="mb-6"
              />

              <p
                className="text-[#C5A028] text-xs font-semibold uppercase tracking-[0.35em] mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Floating Breakfast Bali
              </p>

              <h1
                className="text-white leading-[0.97] tracking-[-0.02em] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(42px, 6vw, 88px)',
                }}
              >
                Floating Breakfast in Bali — Chef-Prepared, Served in Your Villa Pool
              </h1>

              <p className="text-white/85 text-base md:text-lg leading-[1.55] mb-6 max-w-[540px]">
                A styled bamboo tray of chef-prepared breakfast, floating in your own pool at sunrise. We prepare everything fresh, deliver it to your villa, place the tray in the water — and collect it when you are done. From IDR 950,000 per couple, our floating breakfast Bali service includes flowers, drinks, a custom bamboo tray and island-wide villa delivery.
              </p>

              <p className="text-white/70 text-sm mb-8 max-w-[540px]">
                Available as an upgrade with a <Link to="/blog/private-chef-breakfast-bali-villas" className="text-[#C5A028] hover:underline">private chef breakfast in Bali villas</Link>, <Link to="/catering/villa-catering" className="text-[#C5A028] hover:underline">villa catering for the rest of your stay</Link>, or paired with a <Link to="/fine-dining/romantic-dinner" className="text-[#C5A028] hover:underline">romantic private dinner</Link>. Add a <Link to="/experiences/private-cooking-class" className="text-[#C5A028] hover:underline">private cooking class</Link> or see our <Link to="/pricing" className="text-[#C5A028] hover:underline">full price list</Link>. Standalone service available upon request, subject to villa location and minimum order requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="#order"
                  data-source="floating-breakfast-hero-primary-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <Calendar className="w-4 h-4" /> Reserve My Tray
                </a>
                <a
                  href="#menu-styles"
                  data-source="floating-breakfast-hero-secondary-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:border-[#C5A028] hover:bg-white/5 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <Utensils className="w-4 h-4" /> See the Menu Styles
                </a>
              </div>

              <p className="text-white/60 text-sm">
                From IDR 950,000/couple · Flowers, drinks and bamboo tray included · Serving Ubud, Uluwatu, Nusa Dua, Sanur, Seminyak, Canggu and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ SECTION 1 — POSITIONING ═══════ */}
      <section className="floating-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="A Signature Villa Experience"
                title="More Than Breakfast — A Memory in the Pool"
                subtitle="The customer is buying photos, luxury, holiday memories, romance, surprise, and celebration. Our Floating Breakfast Experience delivers all of it."
              />
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                A <strong>private floating breakfast in Bali</strong> is one of the most photographed holiday rituals in the world — and for good reason. We turn that photo opportunity into a full hospitality moment: a myCHEF chef arrives at your villa, prepares and styles every dish, places a custom bamboo tray in your pool, and leaves you with nothing to do but step into the water and enjoy.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Whether you are celebrating a honeymoon in Ubud, a birthday in Seminyak, a proposal in Uluwatu, or simply want a luxury start to a villa morning in Canggu, this experience is designed for privacy, beauty, and effortless enjoyment.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {['Chef-prepared dishes', 'Custom bamboo tray', 'Tropical fruit & flowers', 'Fresh coffee & juice', 'Photo-ready styling', 'Full setup & cleanup', 'Flexible villa timing', 'Dietary options'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A028]" />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-catering-bali-floating-breakfast.webp"
                alt="Private floating breakfast tray with tropical fruit and coffee in a Bali villa pool"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2 — PACKAGES ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Floating Breakfast Packages"
            subtitle="Clear, experience-led packages designed as upgrades or standalone moments."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLOATING_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#C5A028" />
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#4A4745]/80">
              Fixed prices, no hidden fees. Prices are subject to 11% government tax + 10% service charge.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — WHAT MAKES US DIFFERENT ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Difference"
            title="What Makes Our Floating Breakfast Different?"
            subtitle="We do not drop off a tray. We create a private, chef-led experience."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIFFERENTIATION.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — IS YOUR VILLA SUITABLE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Villa Check"
            title="Is Your Villa Suitable?"
            subtitle="We adapt the setup to your pool, but here is what works best for a luxury floating breakfast."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {VILLA_SUITABILITY.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745]/80 mt-8 max-w-2xl mx-auto">
            Unsure about your pool? Send us your villa name or pool dimensions on WhatsApp and we will recommend the safest, most photogenic setup for your <strong>floating breakfast in Bali</strong>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 5 — HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
            subtitle="From first message to final cleanup — seven simple steps."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#C5A028] text-[#1A1A1A] flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  {s.step}
                </div>
                <h4 className="font-medium text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6 — MENU STYLES ═══════ */}
      <section id="menu-styles" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Customise"
            title="Build Your Floating Breakfast"
            subtitle="Mix and match every element to match your mood, diet, and occasion."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUILD_OPTIONS.map((item) => (
              <div key={item.label} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7 — VARIATIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Variations"
            title="Floating Breakfast Variations"
            subtitle="The same stunning setup, reimagined for every moment of the day."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VARIATIONS.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8 — TIME OPTIONS ═══════ */}
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

      {/* ═══════ SECTION 9 — ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
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
          <p className="text-center text-sm text-[#4A4745]/80 mt-8 max-w-2xl mx-auto">
            Pair it with a <Link to="/blog/private-chef-breakfast-bali-villas" className="text-[#C5A028] hover:underline">private chef breakfast in Bali villas</Link> for larger groups, add <Link to="/catering/villa-catering" className="text-[#C5A028] hover:underline">villa catering for the rest of your stay</Link>, or make it a full day with a <Link to="/fine-dining/romantic-dinner" className="text-[#C5A028] hover:underline">romantic private dinner</Link>. Extend the experience with a <Link to="/experiences/private-cooking-class" className="text-[#C5A028] hover:underline">private cooking class</Link>; see our <Link to="/pricing" className="text-[#C5A028] hover:underline">full price list</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 10 — GALLERY / STYLING ═══════ */}
      <section id="setups" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Styling"
            title="Photo-Ready Pool Setups"
            subtitle="Every tray is styled for light, balance, and beautiful holiday memories."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FLOATING_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <OptimizedImage src={src} alt={`Luxury floating breakfast setup ${i + 1} in a Bali villa pool`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 11 — LOCATION KEYWORDS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[960px] mx-auto text-center">
          <SectionHeader
            eyebrow="Bali-Wide"
            title="Floating Breakfast Across Bali"
            subtitle="We serve private villas in every major Bali destination."
          />
          <p className="text-[#4A4745] text-sm leading-relaxed mb-6">
            From a <strong>floating breakfast in Seminyak</strong> villa to a <strong>floating breakfast in Ubud</strong> jungle retreat, a <strong>floating breakfast in Canggu</strong> surf estate, a <strong>floating breakfast in Uluwatu</strong> clifftop pool, a <strong>floating breakfast in Nusa Dua</strong> resort villa, or a relaxed <strong>floating breakfast in Sanur</strong> — we bring the same luxury standard to every location.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Sanur', 'Jimbaran', 'Berawa', 'Pererenan'].map((loc) => (
              <span key={loc} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">{loc}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 12 — INTERNAL LINKS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Complete Your Morning</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef', href: '/', desc: 'Live chef cooking at your villa.' },
              { label: 'villa catering for the rest of your stay', href: '/catering/villa-catering', desc: 'Daily villa breakfast service.' },
              { label: 'villa catering for the rest of your stay', href: '/catering/villa-catering', desc: 'Group meals for multi-day stays.' },
              { label: 'romantic private dinner', href: '/fine-dining/romantic-dinner', desc: 'Candlelit private chef dinners.' },
              { label: 'Wedding Catering', href: '/events/weddings', desc: 'Full villa wedding catering.' },
              { label: 'Retreat Catering', href: '/catering/retreat-catering', desc: 'Multi-day wellness retreat meals.' },
              { label: 'Drop-Off Breakfast', href: '/catering/drop-off-catering', desc: 'Fresh food delivered to your villa.' },
              { label: 'Private Butler', href: '/in-villa-service/butlers', desc: 'Discreet villa hosting service.' },
              { label: 'Bartender', href: '/in-villa-service/bartenders', desc: 'Cocktails by the pool.' },
              { label: 'Flowers', href: '/fine-dining/romantic-dinner', desc: 'Romantic floral styling.' },
              { label: 'Decoration', href: '/events/birthdays', desc: 'Themed villa celebration décor.' },
            ].map((item) => (
              <Link key={item.href + item.label + item.desc} to={item.href} className="block p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
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

      {/* ═══════ SECTION 13 — FAQ ═══════ */}
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

      {/* ═══════ SECTION 14 — CTA / ORDER FORM ═══════ */}
      <section id="order" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Reserve Now"
            title="Book Your Floating Breakfast Experience"
            subtitle="Send your date, villa, guest count, and breakfast style. We confirm the tray setup and timing on WhatsApp within the hour."
          />
          <BookingFormCatering
            title="Book Floating Breakfast"
            subtitle="We will confirm the tray setup, timing, and delivery window within the hour."
            fields={[
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'timeSlot', label: 'Time Slot', type: 'select', icon: Clock, required: true },
              { name: 'package', label: 'Package', type: 'select', icon: Utensils, required: true },
              { name: 'area', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud, Uluwatu...', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 2', required: true },
              { name: 'style', label: 'Breakfast Style', type: 'text', placeholder: 'Tropical / Healthy / Indonesian / Western / Vegetarian / Vegan' },
              { name: 'occasion', label: 'Special Occasion', type: 'text', placeholder: 'Honeymoon / Birthday / Anniversary / Proposal / None' },
              { name: 'poolSize', label: 'Pool Size', type: 'text', icon: Droplets, placeholder: 'e.g. 5m x 3m infinity pool' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Flowers, cake, champagne, photographer...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Floating Breakfast Add-On', 'Romantic Morning', 'Celebration Morning', 'Luxury Villa Morning']}
            accent="#C5A028"
          />
        </div>
      </section>

      <StaffingInfo />
      <BookingProcess />

      <CateringDiscoverySection page="floatingBreakfast" />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-floating-breakfast.webp"
            alt="Luxury floating breakfast setup ready for guests in Bali villa pool"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Your Luxury Floating Breakfast in Bali
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, villa, guest count, and preferred time slot. We will confirm the tray setup and delivery time on WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Calendar className="w-4 h-4" /> Reserve My Experience
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-floating-breakfast-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection />

      <StickyMobileCTA
        pageSource="catering-floating-breakfast"
        serviceName="luxury floating breakfast in Bali"
        intent="floating breakfast packages and pricing"
      />
    </div>
  )
}
