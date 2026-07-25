import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Check, Phone, Calendar, Users, MapPin,
  Utensils, Sun, Sunrise, Clock, Droplets,
  Heart, Camera, Sparkles, Wine, CakeSlice, Flower2,
  ChefHat, ShieldCheck, Package,
  Leaf, Gift, Star, Coffee, Cloud, AlertCircle,
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

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a Floating Breakfast add-on in Bali', intent: 'adding a floating breakfast to my villa catering or private chef booking' })
const SITE = 'https://mychef.id'

const FLOATING_OPTIONS = [
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Classic Floating Breakfast',
    price: 'Add-on quote',
    description: 'Floating bamboo tray with tropical fruit, pastries, eggs or a breakfast main, coffee or tea, fresh juice and light floral styling.',
    includes: ['Floating bamboo tray', 'Tropical fruit & pastries', 'Eggs or breakfast main', 'Coffee, tea & fresh juice', 'Light floral styling & pool setup'],
    minGuests: 'Add-on only',
  },
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Premium Floating Brunch',
    price: 'Add-on quote',
    description: 'A larger breakfast selection with avocado toast or smoked salmon, smoothie bowls, premium fruit, pastries and enhanced styling.',
    includes: ['Larger breakfast selection', 'Avocado toast or smoked salmon', 'Smoothie bowls & premium fruit', 'Coffee, juice & tea', 'Optional sparkling wine'],
    minGuests: 'Add-on only',
  },
  {
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Group Floating Breakfast',
    price: 'Add-on quote',
    description: 'Multiple trays where required, a shared breakfast selection, fruit, pastries, eggs, drinks and styling for the whole group.',
    includes: ['Multiple trays where required', 'Shared breakfast selection', 'Fruit, pastries, eggs & drinks', 'Families, bridal groups & retreats', 'Villa celebrations'],
    minGuests: 'Add-on only',
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
    icon: Sun,
    title: 'Full-Day Villa Chef',
    desc: 'Add a floating breakfast to a day that also includes lunch, dinner, or both — one team, one schedule, one special morning in the pool.',
    href: '/catering/villa-catering',
    anchor: 'full-day private chef service',
  },
  {
    icon: Utensils,
    title: 'Villa Catering',
    desc: 'Include the floating breakfast as part of a larger villa stay or group catering plan — daily meals with one standout pool morning.',
    href: '/catering/villa-catering',
    anchor: 'villa catering in Bali',
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
    anchor: 'romantic villa dinner',
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
  { icon: ChefHat, title: 'Freshly prepared', desc: 'Cooked the same morning by the team already serving your villa.' },
  { icon: Utensils, title: 'Chef cooked', desc: 'A myCHEF chef prepares and plates every element.' },
  { icon: Sparkles, title: 'Restaurant presentation', desc: 'Plated like a boutique restaurant, styled for your pool.' },
  { icon: Leaf, title: 'Premium ingredients', desc: 'Local tropical fruit, imported pastries, and quality proteins.' },
  { icon: MapPin, title: 'Served in your villa', desc: 'Part of your confirmed chef or catering service at the same villa.' },
  { icon: Clock, title: 'Flexible timing', desc: 'Coordinated with the schedule of your main booking.' },
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
  { step: 1, title: 'Book a main service', desc: 'Choose a private chef breakfast, villa catering, a full-day chef, retreat catering, or another qualifying myCHEF service.' },
  { step: 2, title: 'Add floating breakfast', desc: 'Tell us the number of guests, preferred style, villa, pool type, and occasion.' },
  { step: 3, title: 'Confirm menu & setup', desc: 'We confirm the breakfast dishes, tray size, flowers, drinks, timing, and pool suitability.' },
  { step: 4, title: 'Prepared at the villa', desc: 'The breakfast is prepared as part of your scheduled chef or catering service.' },
  { step: 5, title: 'Styled & placed', desc: 'Our team arranges the food and safely positions the floating tray in the pool.' },
  { step: 6, title: 'Equipment handled', desc: 'The tray and reusable items are removed by our team as part of the main service schedule.' },
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
  { icon: Sunrise, label: 'Early Breakfast', time: '7:00 – 8:30am', desc: 'Golden light, quiet morning, perfect for photos.' },
  { icon: Sun, label: 'Standard Breakfast', time: '8:30 – 10:00am', desc: 'The classic slot — bright, warm and relaxed.' },
  { icon: Coffee, label: 'Brunch', time: '10:00 – 12:00pm', desc: 'A late, leisurely start for slow villa mornings.' },
]

const ADDONS = [
  { title: 'Flowers', price: 'Quoted add-on', description: 'Fresh tropical floral arrangement on the tray' },
  { title: 'Cake', price: 'Quoted add-on', description: 'Custom small cake for birthdays or celebrations' },
  { title: 'Champagne', price: 'Quoted add-on', description: 'Bottle of sparkling wine or champagne upgrade' },
  { title: 'Photographer 1 hour', price: 'Quoted add-on', description: 'Professional poolside photo shoot' },
  { title: 'Birthday message', price: 'Quoted add-on', description: 'Personalized message card or signage' },
  { title: 'Extra trays', price: 'Quoted add-on', description: 'Additional floating tray for larger groups' },
  { title: 'Smoothie bar', price: 'Quoted add-on', description: 'Fresh blended smoothie station poolside' },
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
  { q: 'Can I book only a floating breakfast?', a: 'No. Floating breakfast is available exclusively as an add-on to another confirmed myCHEF service at the same villa — such as a private chef breakfast, villa catering, a full-day chef, retreat catering, or event catering. We do not send a team to a villa solely to prepare and deliver one floating breakfast.' },
  { q: 'Why is it only available as an add-on?', a: 'The experience requires food preparation, specialist equipment, safe pool placement, service coordination, and equipment handling. Providing it alongside another confirmed service allows us to maintain quality and operate efficiently.' },
  { q: 'Do you provide the floating tray?', a: 'Yes. We bring the floating bamboo tray, serving equipment, styling items, and the agreed breakfast setup. The tray remains the property of myCHEF and is removed by our team after the experience.' },
  { q: 'Which service is best to combine with it?', a: 'A private chef breakfast or full-day villa chef is the most natural option. It can also be added to villa catering, retreat catering, birthday catering, or a romantic villa experience.' },
  { q: 'How much does a floating breakfast cost?', a: 'Floating breakfast is quoted as an add-on to your main booking. Pricing depends on guest count, menu, tray requirements, styling, villa location, and the service already booked — it appears as a separate line in your main quotation.' },
  { q: 'Can we use it for a group?', a: 'Yes, subject to the pool size, guest count, tray capacity, and the service already booked. Larger groups may require multiple trays or a combination of floating and poolside breakfast service.' },
  { q: 'What if the pool is not suitable?', a: 'We can provide a styled poolside breakfast setup instead. Pool suitability — access, calm water, and space for safe placement — is confirmed before the event.' },
  { q: 'Can the floating breakfast be vegan, vegetarian, halal or gluten-free?', a: 'Yes. Vegetarian is standard; vegan and gluten-free versions are available on request, and everything can be prepared halal.' },
  { q: 'What happens if it rains on the day?', a: 'A poolside or indoor villa table setup with the same styling and menu is offered as part of your main service.' },
  { q: 'How far in advance should I book?', a: 'Add it when you book your main service — two to three days minimum; one to two weeks in peak season (June–August, December–January).' },
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
            'A photo-ready floating breakfast in your Bali villa pool, available exclusively as an add-on to a confirmed myCHEF private chef, villa catering, retreat catering or event booking. Tray, styling, setup and equipment handling included.',
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
                Available exclusively as an add-on to a confirmed myCHEF private chef, villa catering, breakfast, or event booking.
              </p>

              <p className="text-white/85 text-base md:text-lg leading-[1.55] mb-6 max-w-[540px]">
                Add a photo-ready floating breakfast to your existing myCHEF villa service. Our team prepares the food, styles the floating tray with tropical fruit, breakfast dishes, drinks, and flowers, then safely places it in your villa pool.
              </p>

              <p className="text-white/70 text-sm mb-8 max-w-[540px]">
                Floating breakfast cannot be booked as a standalone delivery service. It must be combined with <Link to="/catering/villa-catering" className="text-[#C5A028] hover:underline">villa catering</Link>, a <Link to="/blog/private-chef-breakfast-bali-villas" className="text-[#C5A028] hover:underline">private chef breakfast</Link>, <Link to="/fine-dining" className="text-[#C5A028] hover:underline">fine dining</Link>, or another confirmed myCHEF service at the same location.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="#order"
                  data-source="floating-breakfast-hero-primary-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <Calendar className="w-4 h-4" /> Add Floating Breakfast to My Booking
                </a>
                <Link
                  to="/blog/private-chef-breakfast-bali-villas"
                  data-source="floating-breakfast-hero-secondary-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:border-[#C5A028] hover:bg-white/5 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <ChefHat className="w-4 h-4" /> Explore Private Chef Breakfast
                </Link>
              </div>

              <p className="text-white/60 text-sm">
                Tray, styling and setup equipment provided · Prepared during your main villa service · Serving Ubud, Uluwatu, Nusa Dua, Sanur, Seminyak, Canggu and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ IMPORTANT BOOKING REQUIREMENT ═══════ */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <div className="rounded-2xl border-2 border-[#C5A028] bg-[#FAFAF8] p-6 md:p-10">
            <div className="flex items-start gap-4 mb-5">
              <AlertCircle className="w-7 h-7 text-[#C5A028] flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Important Booking Requirement
                </h2>
                <p className="text-[#4A4745] leading-relaxed">
                  Floating breakfast is offered <strong>only as part of another confirmed myCHEF service</strong>. We do not send a team to a villa solely to prepare and deliver one floating breakfast. This experience can be added when our chef or catering team is already working at your villa.
                </p>
              </div>
            </div>
            <p className="text-sm text-[#4A4745] mb-4">Qualifying main services include:</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {[
                'Private chef breakfast',
                'Full-day villa chef',
                'Villa catering',
                'Multi-day villa catering',
                'Romantic villa stay',
                'Birthday catering',
                'Retreat catering',
                'Private event catering',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A028]" />
                  <span className="text-sm text-[#4A4745]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4A4745] leading-relaxed">
              <strong>Why it works this way:</strong> a floating breakfast requires food preparation, transport, setup, specialized equipment, safe pool placement, and later equipment collection. To maintain service quality and efficient operations, we provide it only alongside another confirmed catering or private chef booking.
            </p>
          </div>
        </div>
      </section>

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
                A <strong>private floating breakfast in Bali</strong> is one of the most photographed holiday rituals in the world — and for good reason. Because our chef and service team are already working at your villa, we can turn that photo opportunity into a full hospitality moment: every dish is prepared and styled as part of your scheduled service, a custom bamboo tray is placed safely in your pool, and the equipment is managed by our team as part of the booking.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Whether you are celebrating a honeymoon in Ubud, a birthday in Seminyak, a proposal in Uluwatu, or simply want a luxury start to a villa morning in Canggu, this add-on is designed for privacy, beauty, and effortless enjoyment.
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
            title="Services You Can Pair With Floating Breakfast"
            subtitle="Floating breakfast is added to a qualifying main booking — these are the combinations that work best."
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

      {/* ═══════ SECTION 3 — ADD-ON OPTIONS ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Add-On Options"
            title="Add Floating Breakfast to Your Villa Service"
            subtitle="Three experience styles, each quoted as part of your main booking."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {FLOATING_OPTIONS.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#C5A028" />
            ))}
          </div>
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-[#4A4745] font-semibold">
              Available only as an addition to another confirmed myCHEF service.
            </p>
            <p className="text-sm text-[#4A4745]/80 max-w-2xl mx-auto">
              Floating breakfast is quoted as an add-on to your main booking. Pricing depends on guest count, menu, tray requirements, styling, villa location, and the service already booked — it appears as a separate line in your quotation.
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
            The tray remains the property of myCHEF and is removed by our team after the experience.
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

      {/* ═══════ SECTION 7 — HOW THE ADD-ON WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How the Floating Breakfast Add-On Works"
            subtitle="From your main booking to the final styling — six simple steps."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            subtitle="Your floating breakfast menu can match the breakfast or catering service already selected, or we can create a separate smaller selection for the tray."
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
            Menu options depend on the chef service and ingredients already included in your primary booking. Additional premium ingredients can be added to the quotation.
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
            title="Choose Your Morning"
            subtitle="Timing is coordinated with your main booked service — these are the windows that work best."
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
            subtitle="Upgrade your floating breakfast with flowers, champagne, photography, and more — quoted with your main booking."
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

      {/* ═══════ SECTION 14 — LOCATION KEYWORDS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[960px] mx-auto text-center">
          <SectionHeader
            eyebrow="Bali-Wide"
            title="Floating Breakfast Across Bali"
            subtitle="Available wherever our chef and catering teams serve — in every major Bali destination."
          />
          <p className="text-[#4A4745] text-sm leading-relaxed mb-6">
            From a <strong>floating breakfast in Seminyak</strong> villa to a <strong>floating breakfast in Ubud</strong> jungle retreat, a <strong>floating breakfast in Canggu</strong> surf estate, a <strong>floating breakfast in Uluwatu</strong> clifftop pool, a <strong>floating breakfast in Nusa Dua</strong> resort villa, or a relaxed <strong>floating breakfast in Sanur</strong> — we bring the same luxury standard to every location where your main myCHEF service is booked.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Sanur', 'Jimbaran', 'Berawa', 'Pererenan'].map((loc) => (
              <span key={loc} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{loc}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 15 — RELATED QUALIFYING SERVICES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Start With the Main Booking</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Qualifying Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Breakfast', href: '/blog/private-chef-breakfast-bali-villas', desc: 'The most natural pairing — a chef cooking breakfast at your villa.' },
              { label: 'Villa Catering', href: '/catering/villa-catering', desc: 'Add floating breakfast to your villa catering plan.' },
              { label: 'Romantic Dinner', href: '/fine-dining/romantic-dinner', desc: 'Combine it with a romantic villa dinner or honeymoon experience.' },
              { label: 'Retreat Catering', href: '/catering/retreat-catering', desc: 'A special retreat breakfast experience for group programs.' },
              { label: 'Birthday Catering', href: '/events/birthdays', desc: 'A birthday breakfast experience at your villa.' },
              { label: 'Private Butler', href: '/in-villa-service/butlers', desc: 'Discreet villa hosting alongside your chef service.' },
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

      {/* ═══════ SECTION 17 — COMBINED ENQUIRY FORM ═══════ */}
      <section id="order" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Add to Your Booking"
            title="Add Floating Breakfast to Your Booking"
            subtitle="Tell us your main service, date, villa, guest count, and breakfast style. We confirm the tray setup and timing on WhatsApp within the hour."
          />
          <div className="rounded-xl border border-[#C5A028]/60 bg-[#FAFAF8] p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#4A4745]">
              <strong>Floating breakfast cannot be booked independently.</strong> Your enquiry must include another myCHEF catering or private chef service at the same villa.
            </p>
          </div>
          <BookingFormCatering
            title="Request Combined Service Quote"
            subtitle="We will confirm the combined service, tray setup, and timing within the hour."
            fields={[
              { name: 'hasBooking', label: 'Do you already have a myCHEF booking?', type: 'select', icon: Check, required: true, options: ['Yes — I have a confirmed booking', 'No — I am enquiring for the first time'] },
              { name: 'bookingRef', label: 'Booking Reference (if available)', type: 'text', placeholder: 'e.g. WhatsApp chat name or confirmation date' },
              { name: 'mainService', label: 'Main Service Required', type: 'select', icon: Utensils, required: true, options: ['Private chef breakfast', 'Full-day villa chef', 'Villa catering', 'Multi-day villa catering', 'Retreat catering', 'Romantic experience', 'Birthday or event catering', 'Other qualifying service'] },
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'area', label: 'Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud, Uluwatu...', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 2', required: true },
              { name: 'pool', label: 'Pool Type & Approximate Size', type: 'text', icon: Droplets, placeholder: 'e.g. 5m x 3m infinity pool' },
              { name: 'style', label: 'Preferred Breakfast Style', type: 'text', placeholder: 'Tropical / Western / Indonesian / Healthy / Vegetarian / Vegan / Kids' },
              { name: 'dietary', label: 'Dietary Requirements', type: 'text', placeholder: 'Allergies, vegan, gluten-free, halal...' },
              { name: 'occasion', label: 'Occasion', type: 'text', placeholder: 'Honeymoon / Birthday / Anniversary / Retreat / None' },
              { name: 'timing', label: 'Preferred Timing', type: 'select', icon: Clock, options: ['Early breakfast (7:00–8:30)', 'Standard breakfast (8:30–10:00)', 'Brunch (10:00–12:00)'] },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Flowers, cake, champagne, photographer...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
            ]}
            submitLabel="Request Combined Service Quote"
            messageIntro="Hi myCHEF, I'd like to add a floating breakfast to a villa service booking."
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
            Add a Floating Breakfast to Your Bali Villa Service
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Book your private chef, villa catering or event service first — then add the floating tray. Send your date, villa, guest count, and main service, and we will confirm the combined setup on WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Calendar className="w-4 h-4" /> Request Combined Service Quote
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
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="catering-floating-breakfast"
        serviceName="a floating breakfast add-on in Bali"
        intent="adding a floating breakfast to a villa catering or private chef booking"
        label="Add to My Booking"
      />
    </div>
  )
}
