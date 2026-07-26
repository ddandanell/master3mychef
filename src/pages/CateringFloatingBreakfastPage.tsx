import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Check, Phone, Calendar, Users, MapPin,
  Utensils, Sun, Sunrise, Clock, Droplets,
  Heart, Camera, Sparkles, Wine, CakeSlice, Flower2,
  ChefHat, ShieldCheck, Package,
  Leaf, Gift, Star, Coffee, Cloud, Sunset,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceSchema,
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

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a floating breakfast add-on in Bali', intent: 'adding a floating breakfast to a chef or catering booking' })
const SITE = 'https://mychef.id'

const FLOATING_OPTIONS = [
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Floating Breakfast for 2',
    price: 'IDR 950,000 / couple',
    description: 'Custom bamboo tray with tropical fruit, croissants and pastries, eggs, coffee, tea and juice. The classic.',
    includes: ['Custom bamboo tray', 'Tropical fruit, croissants & pastries', 'Eggs cooked properly', 'Coffee, tea & fresh juice', 'Flowers & poolside styling'],
    minGuests: '2 guests',
  },
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Floating Brunch for 2',
    price: 'IDR 1,400,000 / couple',
    description: 'Champagne, cured salmon, avocado toast and a mini grazing board. The celebration version.',
    includes: ['Champagne', 'Cured salmon & avocado toast', 'Mini grazing board', 'Coffee, tea & fresh juice', 'Flowers & poolside styling'],
    minGuests: '2 guests',
  },
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Floating Group Brunch',
    price: 'IDR 750,000 / person',
    description: 'Multiple bamboo trays, scaled fruit and pastry service, eggs and mains, coffee, tea and juice for the whole group.',
    includes: ['Multiple bamboo trays', 'Scaled fruit & pastry service', 'Eggs & mains', 'Coffee, tea & juice for the group', 'Flowers & poolside styling'],
    minGuests: '4–10 guests',
  },
]

const PAIRING_SERVICES = [
  {
    icon: ChefHat,
    title: 'Private Chef Breakfast',
    desc: 'The most natural combination. A chef prepares breakfast at your villa and selected dishes are presented on the floating tray. For the best experience, use the tray for fruit, pastries, cold dishes and drinks while hot food is served separately by the chef.',
    href: '/blog/private-chef-breakfast-bali-villas',
    anchor: 'private chef breakfast in Bali villas',
  },
  {
    icon: Utensils,
    title: 'Private Cooking Class',
    desc: 'Make it a full culinary day — learn Balinese dishes with our chefs in the afternoon after your pool morning.',
    href: '/experiences/private-cooking-class',
    anchor: 'private cooking class',
  },
  {
    icon: Utensils,
    title: 'Villa Catering',
    desc: 'One team for the whole stay — daily villa meals with one standout pool morning in the middle of it.',
    href: '/catering/villa-catering',
    anchor: 'villa catering for the rest of your stay',
  },
  {
    icon: Users,
    title: 'Retreat Catering',
    desc: 'Use it as a welcome breakfast, a content moment, a final-day brunch or a special guest experience during a retreat program.',
    href: '/catering/retreat-catering',
    anchor: 'floating breakfast for retreat groups',
  },
  {
    icon: Heart,
    title: 'Romantic Villa Experience',
    desc: 'Combine it with a romantic dinner, anniversary service, honeymoon package or proposal experience at the same villa.',
    href: '/fine-dining/romantic-dinner',
    anchor: 'romantic private dinner',
  },
  {
    icon: Gift,
    title: 'Birthday or Bridal Event',
    desc: 'Add it to birthday catering, pre-wedding villa catering or a bridal breakfast for a photogenic start to the celebration.',
    href: '/events/birthdays',
    anchor: 'villa birthday catering',
  },
]

const DIFFERENTIATION = [
  { icon: ChefHat, title: 'Freshly prepared', desc: 'Cooked fresh that same morning — never a pre-packed courier basket.' },
  { icon: Utensils, title: 'Chef cooked', desc: 'A myCHEF chef prepares and plates every element.' },
  { icon: Sparkles, title: 'Restaurant presentation', desc: 'Plated like a boutique restaurant, styled for your pool.' },
  { icon: Leaf, title: 'Premium ingredients', desc: 'Local tropical fruit, imported pastries, and quality proteins.' },
  { icon: MapPin, title: 'Served in your villa', desc: 'Delivered to your villa and placed in the water by our team.' },
  { icon: Clock, title: 'Flexible timing', desc: 'Sunrise, midday or sunset slots — sunrise is the favourite for light and temperature.' },
  { icon: ShieldCheck, title: 'Dietary options', desc: 'Vegan, gluten-free, dairy-free, halal, and allergy-aware menus.' },
  { icon: Package, title: 'Setup included', desc: 'Tray placement, flowers, styling, and pool safety check.' },
  { icon: Camera, title: 'Photography ready', desc: 'Lighting, composition, and styling planned for photos.' },
  { icon: Flower2, title: 'Fresh flowers optional', desc: 'Tropical blooms arranged on and around the tray.' },
  { icon: Wine, title: 'Champagne optional', desc: 'Sparkling wine, rosé, or champagne upgrades available.' },
]

const WHAT_WE_BRING = [
  'Floating bamboo breakfast tray',
  'Food-safe plates and bowls',
  'Cups and drink containers suited to the tray',
  'Breakfast dishes selected for the experience',
  'Tropical fruit',
  'Coffee, tea, or juice',
  'Flowers or light decoration',
  'Linen and styling details',
  'Safe placement in the pool',
  'Removal of reusable equipment',
]

const VILLA_SUITABILITY = [
  { icon: Droplets, title: 'Pool access', desc: 'The pool must be accessible to the catering team during your scheduled service.' },
  { icon: Package, title: 'Tray size', desc: 'Couple trays are 120 cm × 80 cm; larger groups use multiple trays.' },
  { icon: ShieldCheck, title: 'Calm water', desc: 'The water should be reasonably calm, with space to position the tray safely.' },
  { icon: Sun, title: 'Infinity pools', desc: 'Stunning for photos; we use stable ledges or weighted supports.' },
  { icon: Sunrise, title: 'Jets & fountains', desc: 'Strong fountains or jets may need to be turned off during the experience.' },
  { icon: Users, title: 'Supervision', desc: 'Children should be supervised, and guests should not sit or lean on the tray.' },
  { icon: ShieldCheck, title: 'No glassware', desc: 'Glassware is not used in or beside the pool — tray-safe drinkware only.' },
  { icon: Cloud, title: 'Weather & backup', desc: 'If the pool is unsuitable, a styled poolside table setup is used instead.' },
]

const HOW_IT_WORKS = [
  { step: 1, title: 'Pick your time slot', desc: 'Sunrise (6:00–7:30am), midday (10:00–11:00am) or sunset (4:30–6:00pm). Sunrise is the most popular for light and temperature.' },
  { step: 2, title: 'We prepare everything fresh', desc: 'Food cooked that morning, flowers and drinks set, tray sized to your group.' },
  { step: 3, title: 'The tray goes in your pool', desc: 'Placed safely in calm water or on the pool shelf, 15 minutes before your slot.' },
  { step: 4, title: 'We collect it later', desc: 'We return 1.5–2 hours after delivery to retrieve the tray. No cleanup for you.' },
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
  { title: 'Tropical Floating Breakfast', desc: 'Island fruit, pastries, eggs and juice with floral styling.' },
  { title: 'Western Breakfast', desc: 'Eggs any style, sourdough, pastries, coffee and juice.' },
  { title: 'Indonesian Breakfast', desc: 'Nasi goreng or bubur with tropical fruit and Balinese coffee.' },
  { title: 'Healthy Breakfast', desc: 'Smoothie bowls, avocado toast, granola and cold-pressed juice.' },
  { title: 'Vegetarian & Vegan', desc: 'Plant-based breakfast selections styled for the tray.' },
  { title: 'Children\'s Floating Breakfast', desc: 'Fun, safe pool-ledge setup with pancakes, fruit, and mild flavours.' },
  { title: 'Premium Floating Brunch', desc: 'Smoked salmon, sparkling wine, oysters, and berries.' },
  { title: 'Celebration Breakfast', desc: 'Rose petals, cake, champagne, and custom signage.' },
]

const TIME_OPTIONS = [
  { icon: Sunrise, label: 'Sunrise', time: '6:00 – 7:30am', desc: 'Golden light, calm water, quiet morning — the most popular slot for photos and temperature.' },
  { icon: Coffee, label: 'Midday', time: '10:00 – 11:00am', desc: 'A late, leisurely start for slow villa mornings.' },
  { icon: Sunset, label: 'Sunset', time: '4:30 – 6:00pm', desc: 'A floating sunset brunch — golden-hour glow over the pool.' },
]

const ADDONS = [
  { title: 'Fresh flower arrangement', price: '+IDR 350,000', description: 'Fresh tropical flowers styled on and around the tray' },
  { title: 'Celebration cake', price: '+IDR 450,000', description: 'Custom cake for birthdays, anniversaries and proposals' },
  { title: 'Champagne', price: '+IDR 850,000', description: 'A chilled bottle waiting poolside' },
  { title: 'Professional photographer', price: '+IDR 1,500,000', description: 'One-hour poolside shoot — the photos are half the point' },
  { title: 'Birthday message card or signage', price: '+IDR 150,000', description: 'A personalised message for the celebration' },
  { title: 'Extra floating tray', price: '+IDR 650,000', description: 'An additional tray for larger groups' },
  { title: 'Poolside smoothie bar', price: '+IDR 750,000', description: 'Fresh blended smoothie station by the pool' },
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
  { q: 'Can I book a floating breakfast on its own?', a: 'No — a floating breakfast in Bali is an add-on experience, booked together with a main myCHEF service: a private chef breakfast or brunch, a villa BBQ, or a villa or event catering booking. Tell us your main service and we will plan the tray around it.' },
  { q: 'How much does a floating breakfast in Bali cost?', a: 'IDR 950,000 per couple for the classic tray, IDR 1,400,000 for the champagne brunch, or IDR 750,000 per person for groups of 4–10 — all ++ (11% government tax + 10% service charge). Tray, flowers and drinks are included.' },
  { q: 'Do you deliver to Ubud, Uluwatu or Nusa Dua?', a: 'Yes — unlike the mass-market tray brands, we serve Ubud, Uluwatu, Nusa Dua and Sanur as well as Seminyak, Canggu and the rest of the island. A small travel fee may apply outside Seminyak and Canggu, quoted upfront.' },
  { q: 'Is there a minimum order?', a: 'Couple packages start at two guests; the group brunch has a minimum of four guests.' },
  { q: 'Can the breakfast be vegan, vegetarian, halal or gluten-free?', a: 'Yes. The vegetarian menu is standard, fully vegan and gluten-free versions are available on request, and everything can be prepared halal — just tell us when booking.' },
  { q: 'What happens if it rains?', a: 'We set up an indoor villa table with the same styling and menu, or reschedule you to the next available morning slot at no extra charge.' },
  { q: 'Is the tray included?', a: 'Yes — a custom bamboo floating tray sized to your group is part of every package, and we collect it 1.5–2 hours after delivery.' },
  { q: 'What if our villa pool is not suitable for a tray?', a: 'We style a poolside or indoor breakfast table with the same menu and presentation instead. Pool suitability — access, calm water, and space for safe placement — is confirmed before your slot.' },
  { q: 'How far in advance should I book?', a: 'Two to three days minimum. For peak season (June–August and December–January), one to two weeks secures your preferred date and slot.' },
  { q: 'What deposit is required?', a: 'A 50% deposit confirms your booking; the balance is due the day before the event.' },
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
        title="Floating Breakfast Bali | Add-On for Villa Catering & Private Chef"
        description="Floating breakfast in your Bali villa pool — available exclusively as an add-on to a myCHEF private chef, villa catering or event booking. WhatsApp myCHEF."
        canonical={`${SITE}/catering/floating-breakfast`}
        ogImage={`${SITE}/breakfast-spread.webp`}
        jsonLd={[
          serviceSchema(
            'Floating Breakfast Bali',
            'Chef-prepared floating breakfast styled in your Bali villa pool, available exclusively as an add-on to a myCHEF private chef, villa catering or event booking — island-wide including Ubud, Uluwatu, Nusa Dua and Sanur. From IDR 950,000 per couple — tray, flowers and drinks included.',
            `${SITE}/catering/floating-breakfast`
          ),
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
                Floating Breakfast Bali for Your Private Villa
              </h1>

              <p className="text-[#C5A028] text-sm md:text-base font-semibold mb-6 max-w-[540px]">
                From IDR 950,000/couple · Flowers, drinks and bamboo tray included · Serving Ubud, Uluwatu, Nusa Dua, Sanur, Seminyak, Canggu and beyond
              </p>

              <p className="text-white/85 text-base md:text-lg leading-[1.55] mb-6 max-w-[540px]">
                A styled bamboo tray of chef-prepared breakfast, floating in your own pool at sunrise. We prepare everything fresh, deliver it to your villa, place the tray in the water — and collect it when you are done. Booked together with your main service — a private chef breakfast or brunch, a villa BBQ, or a catering booking — never on its own.
              </p>

              <p className="text-white/70 text-sm mb-8 max-w-[540px]">
                Perfect for honeymoon mornings, birthday surprises, anniversaries and girls' trips — pair it with a <Link to="/fine-dining/romantic-dinner" className="text-[#C5A028] hover:underline">romantic private dinner</Link> or <Link to="/catering/villa-catering" className="text-[#C5A028] hover:underline">villa catering for the rest of your stay</Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  data-source="floating-breakfast-hero-primary-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <Calendar className="w-4 h-4" /> Add to My Booking
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
                Chef-prepared, never a pre-packed basket · Rain backup: indoor setup or free reschedule · No payment required to enquire
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
                Most <strong>floating breakfasts in Bali</strong> are pre-packed baskets delivered by courier. Ours is prepared by professional chefs — the same team behind our private dining and <Link to="/catering/villa-catering" className="text-[#C5A028] hover:underline">villa catering</Link> work — so the eggs are cooked properly, the pastries are fresh, and dietary requests are handled the way a kitchen handles them, not a packing line.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Every tray arrives styled and photo-ready: tropical fruit, fresh pastries, eggs, juice, coffee and flowers arranged around your pool and villa backdrop. It works beautifully for honeymoon mornings, birthday surprises, anniversaries, girls' trips, or simply a slow villa morning worth remembering. The floating breakfast is an add-on, booked together with your main service — a private chef breakfast or brunch, a villa BBQ, or catering — as the standout morning of the booking.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {['Chef-prepared dishes', 'Custom bamboo tray', 'Tropical fruit & flowers', 'Fresh coffee & juice', 'Photo-ready styling', 'Equipment handled by our team', 'Timing around your service', 'Dietary options'].map((item) => (
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

      {/* ═══════ SECTION 2 — SERVICES TO PAIR WITH ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Combine It"
            title="Add a Floating Breakfast to These Services"
            subtitle="Floating breakfast is an add-on, booked together with a main myCHEF service — these are the combinations guests love most."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {PAIRING_SERVICES.map((item) => (
              <div key={item.title} className="floating-reveal bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745] mb-3">{item.desc}</p>
                <Link to={item.href} className="text-xs font-medium text-[#C5A028] hover:underline">
                  {item.anchor} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — PACKAGES & PRICES ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Floating Breakfast Packages and Prices"
            subtitle="Add-on packages, booked together with your main service. Fixed prices, no hidden fees — subject to 11% government tax + 10% service charge."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {FLOATING_OPTIONS.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#C5A028" />
            ))}
          </div>
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-[#4A4745] font-semibold">
              Floating breakfast is available exclusively as an add-on to a myCHEF private chef, villa BBQ or catering booking — it is not sold on its own.
            </p>
            <p className="text-sm text-[#4A4745] font-semibold">
              Tray, flowers and drinks are included in every package.
            </p>
            <p className="text-sm text-[#4A4745]/80 max-w-2xl mx-auto">
              Couple packages start at two guests; the group brunch serves 4–10. See the <Link to="/pricing" className="text-[#C5A028] hover:underline">full price list</Link> for every myCHEF service.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — WHAT MAKES US DIFFERENT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Difference"
            title="What Makes Our Floating Breakfast Different?"
            subtitle="We do not drop off a tray. We create a private, chef-led experience."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIFFERENTIATION.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
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

      {/* ═══════ SECTION 5 — WHAT WE BRING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[960px] mx-auto">
          <SectionHeader
            eyebrow="Equipment Included"
            title="What We Bring"
            subtitle="We provide the floating tray and the necessary setup equipment — you do not need to rent or purchase anything separately."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {WHAT_WE_BRING.map((item) => (
              <div key={item} className="floating-reveal flex items-center gap-3 bg-white rounded-xl border border-[#E8E6E3] p-4">
                <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                <span className="text-sm text-[#4A4745]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745]/80 mt-8 max-w-2xl mx-auto">
            We return 1.5–2 hours after delivery to collect the tray and reusable equipment — no cleanup for you.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 6 — POOL REQUIREMENTS & SAFETY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Pool Check"
            title="Pool Requirements and Safety"
            subtitle="Final approval depends on the pool being suitable for safe placement — here is what we check."
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
            Not every villa pool can support the setup. Unsure about yours? Send us your villa name or pool dimensions on WhatsApp and we will recommend the safest, most photogenic option — including a styled poolside table setup if the pool is unsuitable.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 7 — HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
            subtitle="From your WhatsApp message to the tray in the pool — four simple steps."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
          <p className="text-center text-sm text-[#4A4745]/80 mt-8 max-w-2xl mx-auto">
            All we need at your villa is safe pool access, a calm floating area or shallow shelf, and staff or gate access for delivery and collection.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 8 — BEST COMBINED WITH A PRIVATE BREAKFAST CHEF ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionHeader
            eyebrow="The Perfect Pairing"
            title="Best Combined With a Private Breakfast Chef"
            subtitle="A private chef prepares fresh breakfast at your villa, while the floating tray turns part of the meal into a styled pool experience."
          />
          <p className="text-[#4A4745] text-sm leading-relaxed max-w-2xl mx-auto">
            Guests can enjoy hot dishes, eggs made to order, pancakes, coffee, and a full table breakfast, with selected items presented on the floating tray. For the best experience, use the floating tray for fruit, pastries, cold dishes, drinks, and selected breakfast items, while hot food is served separately by the chef — hot dishes sitting in a pool cool quickly and do not stay at their best.
          </p>
          <Link
            to="/blog/private-chef-breakfast-bali-villas"
            className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-[#C5A028] text-black text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <ChefHat className="w-4 h-4" /> Book a Private Chef Breakfast
          </Link>
        </div>
      </section>

      {/* ═══════ SECTION 9 — MENU STYLES ═══════ */}
      <section id="menu-styles" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Customise"
            title="Build Your Floating Breakfast"
            subtitle="Choose a breakfast style to match your mood, diet and group — every menu is prepared fresh by our chefs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUILD_OPTIONS.map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745]/80 mt-8 max-w-2xl mx-auto">
            Vegetarian is standard; fully vegan and gluten-free versions are available on request, and everything can be prepared halal — just tell us when booking.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 10 — VARIATIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Menu Styles"
            title="Floating Breakfast Menu Styles"
            subtitle="The same stunning setup, tailored to every taste and occasion."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VARIATIONS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 11 — TIME OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Timing"
            title="Pick Your Time Slot"
            subtitle="Sunrise is the most popular for light and temperature — sunset is our favourite for golden-hour photos."
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

      {/* ═══════ SECTION 12 — ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Optional Extras"
            subtitle="Upgrade your tray with flowers, cake, champagne, photography and more."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <CateringAddOnCard key={addon.title} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13 — GALLERY / STYLING ═══════ */}
      <section id="setups" className="py-20 md:py-28 px-6">
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

      {/* ═══════ SECTION 14 — DELIVERY COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[960px] mx-auto text-center">
          <SectionHeader
            eyebrow="Bali-Wide"
            title="Where We Deliver: Ubud, Uluwatu, Nusa Dua, Sanur and Beyond"
            subtitle="The big tray-delivery brands skip large parts of the island — our chefs already work in villas everywhere."
          />
          <p className="text-[#4A4745] text-sm leading-relaxed mb-6">
            This is where we are different. We serve <strong>Ubud</strong> (jungle-pool mornings are our favourite), <strong>Uluwatu</strong> and the Bukit clifftops, <strong>Nusa Dua</strong>, <strong>Sanur</strong>, <strong>Seminyak</strong>, <strong>Canggu</strong>, <strong>Jimbaran</strong>, <strong>Tanah Lot</strong>, <strong>Kerobokan</strong>, <strong>Kuta</strong>, <strong>Legian</strong> and <strong>Denpasar</strong>. A small travel fee may apply outside Seminyak and Canggu — always quoted upfront before you book.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Ubud', 'Uluwatu', 'Nusa Dua', 'Sanur', 'Seminyak', 'Canggu', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar'].map((loc) => (
              <span key={loc} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{loc}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 15 — PAIRS WELL WITH ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Make It a Full Day</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Pairs Well With Your Floating Breakfast</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Breakfast', href: '/blog/private-chef-breakfast-bali-villas', desc: 'A chef cooking breakfast at your villa — the most natural pairing for larger groups.' },
              { label: 'Villa Catering', href: '/catering/villa-catering', desc: 'Villa catering for the rest of your stay.' },
              { label: 'Romantic Dinner', href: '/fine-dining/romantic-dinner', desc: 'A romantic private dinner that evening — the full honeymoon day.' },
              { label: 'Private Cooking Class', href: '/experiences/private-cooking-class', desc: 'Learn Balinese dishes with our chefs later the same day.' },
              { label: 'Retreat Catering', href: '/catering/retreat-catering', desc: 'A special retreat breakfast experience for group programs.' },
              { label: 'Birthday Catering', href: '/events/birthdays', desc: 'A birthday breakfast experience at your villa.' },
            ].map((item) => (
              <Link key={item.href + item.label} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
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
          { name: 'The Park Family', location: 'Canggu Villa', quote: 'We added the floating brunch to our anniversary villa catering. The champagne, the styling, the whole experience was perfect.', rating: 5 },
          { name: 'Amanda R.', location: 'Uluwatu Villa', quote: 'Best start to our Bali trip. The early slot was worth the wake-up. Highly recommend the photographer add-on.', rating: 5 },
        ]}
        title="What Floating Breakfast Guests Say"
        subtitle="Real reviews from villa pool breakfasts across Bali."
      />

      {/* ═══════ SECTION 16 — FAQ ═══════ */}
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

      {/* ═══════ SECTION 17 — RESERVE YOUR TRAY ═══════ */}
      <section id="order" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Reserve"
            title="Add a Floating Breakfast to Your Booking"
            subtitle="Floating breakfast is booked together with a main service — a private chef breakfast or brunch, a villa BBQ, or catering. Send your main service, date, villa, guest count and preferred time slot. We confirm the tray setup, timing and delivery window on WhatsApp within the hour — no payment required to enquire."
          />
          <BookingFormCatering
            title="Add a Floating Breakfast to My Booking"
            subtitle="We confirm the tray setup, timing and delivery window on WhatsApp within the hour."
            fields={[
              { name: 'mainService', label: 'Main Service', type: 'select', options: ['Private chef breakfast / brunch', 'Villa BBQ', 'Villa catering', 'Event catering', 'Not sure yet — advise me'], required: true },
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'area', label: 'Location', type: 'text', icon: MapPin, placeholder: 'Ubud, Uluwatu, Nusa Dua, Sanur, Seminyak, Canggu...', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 2', required: true },
              { name: 'timing', label: 'Preferred Time Slot', type: 'select', icon: Clock, options: ['Sunrise (6:00–7:30am)', 'Midday (10:00–11:00am)', 'Sunset (4:30–6:00pm)'] },
              { name: 'pool', label: 'Pool Type & Approximate Size', type: 'text', icon: Droplets, placeholder: 'e.g. 5m x 3m infinity pool' },
              { name: 'style', label: 'Preferred Breakfast Style', type: 'text', placeholder: 'Tropical / Healthy / Indonesian / Western / Vegetarian / Kids' },
              { name: 'dietary', label: 'Dietary Requirements', type: 'text', placeholder: 'Allergies, vegan, gluten-free, halal...' },
              { name: 'occasion', label: 'Occasion', type: 'text', placeholder: 'Honeymoon / Birthday / Anniversary / Girls’ trip / None' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Flowers, cake, champagne, photographer...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
            ]}
            submitLabel="Add Floating Breakfast to My Booking"
            messageIntro="Hi myCHEF, I'd like to add a floating breakfast to my booking."
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
            Add a Floating Breakfast to Your Booking
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your main service — a private chef breakfast or brunch, a villa BBQ, or catering — plus your date, villa, guest count and preferred time slot. We confirm the tray setup, timing and delivery window on WhatsApp within the hour — no payment required to enquire. Prefer email? bali@mychef.id · Or call +62 896-7407-2020.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-floating-breakfast-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Phone className="w-4 h-4" /> Add to My Booking on WhatsApp
            </a>
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Calendar className="w-4 h-4" /> Use the Enquiry Form
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="catering-floating-breakfast"
        serviceName="a floating breakfast add-on in Bali"
        intent="adding a floating breakfast to a chef or catering booking"
        label="Add to My Booking"
      />
    </div>
  )
}
