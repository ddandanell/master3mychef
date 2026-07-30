import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Calendar, Users, Utensils, Home, ChefHat, ShieldCheck, Sparkles, Wine, Flower2, CakeSlice, Flame, ArrowRight, Wallet, ClipboardList } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  faqPageSchema,
  serviceWithAggregateOfferSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
// import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb } from '@/components/shared'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'villa catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'

/* ── DATA ── */

const VILLA_PACKAGES = [
  {
    title: 'Villa Lunch',
    price: 450000,
    people: 'Groups of 8 or more',
    format: ['2 starters', '2 mains', '2 sides', 'Dessert', 'Soft drinks'],
    bestFor: 'Poolside lunches, family gatherings, and relaxed villa afternoons',
  },
  {
    title: 'Villa Dinner',
    price: 650000,
    people: 'Groups of 8 or more',
    format: ['3 starters', '2 mains', '3 sides', 'Dessert', 'Coffee & tea'],
    bestFor: 'Private group dinners, birthdays, celebrations, and arrival-night meals',
  },
  {
    title: 'Multi-Day Villa Catering',
    price: null,
    people: 'Groups of 8 or more',
    format: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Full service team'],
    bestFor: 'Wedding groups, retreats, extended family stays, corporate offsites',
  },
]

const TRUST_ITEMS = [
  { icon: MessageCircle, label: 'Same-day WhatsApp', desc: 'Confirmation within the hour' },
  { icon: Wallet, label: '50% deposit only', desc: 'Balance due before event' },
  { icon: ChefHat, label: 'Chef & service team', desc: 'Sized to your group' },
  { icon: Sparkles, label: 'Full cleanup included', desc: 'We pack up and leave' },
]

const MENU_STYLES = [
  { name: 'Family-Style', desc: 'Shared platters to the table. Relaxed, social, generous portions.' },
  { name: 'Buffet', desc: 'Self-serve hot and cold stations. Best for 30+ guests.' },
  { name: 'BBQ & Grill', desc: 'Live-fire cooking by the pool. Chef grills at your villa.' },
  { name: 'Plated Dinner', desc: 'Restaurant-style courses with table service. Formal and precise.' },
  { name: 'Breakfast Service', desc: 'Continental or full breakfast, cooked fresh in your villa kitchen.' },
  { name: 'Indonesian Feast', desc: 'Authentic Balinese and Indonesian dishes. Nasi campur, satay, lawar.' },
  { name: 'Mediterranean', desc: 'Grilled seafood, pasta, salads, olive oil, fresh herbs.' },
  { name: 'Custom Menu', desc: 'Tell us your vision. We design a menu around your group and occasion.' },
]

const VILLA_EVENTS = [
  { title: 'Birthdays', desc: 'Milestone celebrations with cake, decor, and custom menus.' },
  { title: 'Family Gatherings', desc: 'Relaxed multi-generational dining by the pool.' },
  { title: 'Arrival Dinners', desc: 'Start the stay with a proper dinner — no shopping, no driving.' },
  { title: 'Pre-Wedding Meals', desc: 'Rehearsal dinners and pre-wedding gatherings for villa-staying guests.' },
  { title: 'Anniversaries', desc: 'Romantic dinners with candles, petals, and wine.' },
  { title: 'Poolside Lunches', desc: 'Easy lunches and BBQs by the water.' },
  { title: 'Retreat Dinners', desc: 'Wellness, yoga, and corporate retreat catering.' },
]

const ADDONS = [
  { icon: Wine, title: 'Bartender & Cocktails', desc: 'Mixologist, full bar setup, and signature drinks — quoted with your package.' },
  { icon: Users, title: 'Waiters & Service Staff', desc: 'Professional waiters for plated or buffet service, scaled to your group size.' },
  { icon: Flower2, title: 'Table Styling & Flowers', desc: 'Linens, candles, floral arrangements, and table decor.' },
  { icon: CakeSlice, title: 'Custom Cakes', desc: 'Birthday, anniversary, or celebration cakes. 3-day notice.' },
  { icon: Utensils, title: 'Breakfast Service', desc: 'Morning after? We do villa breakfast too. Continental or full.' },
  { icon: Flame, title: 'Live BBQ Station', desc: 'Chef grills at your villa. Whole fish, ribs, prawns, skewers.' },
]

const LOCATION_LINKS = [
  { label: 'Villa catering in Seminyak', href: '/locations/seminyak' },
  { label: 'Villa catering in Canggu', href: '/locations/canggu' },
  { label: 'Villa catering in Uluwatu', href: '/locations/uluwatu' },
  { label: 'Villa catering in Ubud', href: '/locations/ubud' },
  { label: 'Villa catering in Nusa Dua', href: '/locations/nusa-dua' },
  { label: 'Villa catering in Sanur', href: '/locations/sanur' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Share villa, date & guest count', desc: 'Tell us the villa, dates, group size, and occasion. We match the right chef and format.', icon: Home },
  { step: '02', title: 'Choose service & menu', desc: 'Lunch, dinner, BBQ, buffet, plated, or multi-day — pick dishes, dietary needs, and add-ons.', icon: Utensils },
  { step: '03', title: 'Confirm quotation & deposit', desc: 'Approve a clear, itemised quotation. A 50% deposit locks your date.', icon: Wallet },
  { step: '04', title: 'Villa & kitchen check if required', desc: 'For larger groups or live-fire formats, we confirm kitchen access, power, and equipment in advance.', icon: ClipboardList },
  { step: '05', title: 'Chef & team arrive', desc: 'Groceries, equipment, and staff come with us. Prep starts in your villa kitchen.', icon: ChefHat },
  { step: '06', title: 'Service & cleanup', desc: 'Food goes out on time. Kitchen, dishes, and surfaces are cleaned before we leave.', icon: ShieldCheck },
]

const FAMILY_COVERAGE_OPTIONS = [
  {
    title: 'Dinner-only for long stays',
    desc: 'The simplest way to remove the hardest meal of the day. Families explore Bali freely, then come back to a proper dinner without shopping, transport, or table logistics.',
    bullets: ['Best for 5–14 day stays', 'Strong fit for multi-generational groups', 'Pairs well with a grocery budget cap'],
  },
  {
    title: 'Breakfast + dinner rhythm',
    desc: 'Useful when your group wants calm villa mornings and an easy evening finish, while leaving lunch flexible for beach clubs, day trips, or kids\' schedules.',
    bullets: ['Good for kids and early risers', 'Reduces restaurant coordination twice daily', 'Works well for 8–20 guests'],
  },
  {
    title: 'Celebration-day full coverage',
    desc: 'Use full-day catering on the days that matter most: arrival day, birthday dinner, reunion lunch, or the one day everyone stays in the villa together.',
    bullets: ['Best for milestone days', 'Keeps the villa running cleanly', 'Lets you avoid paying for full service every day'],
  },
]

const FAQS = [
  { q: 'Can a caterer cook in my villa in Bali?', a: 'Yes. Cooking happens in your villa kitchen after a quick kitchen assessment. Missing equipment is brought by the team, and Full-Service bookings add tableware and staff.' },
  { q: 'What kitchen requirements are needed for villa catering?', a: 'A working hob or oven and counter space suffice for most menus. For large groups or live-fire formats we bring mobile equipment and confirm power, water, and operating logistics in advance.' },
  { q: 'Is there a minimum group size for villa catering?', a: 'Villa catering packages are designed for groups of eight or more — the same minimum in every area we serve. For smaller groups, our private chef and fine dining services are a better fit.' },
  { q: 'How much is villa catering per day in Bali?', a: 'Multi-day villa catering is priced by custom quotation based on the number of guests, meals, days, menu style, and service requirements. Single services start from IDR 450,000++ per person for villa lunches and IDR 650,000++ per person for villa dinners.' },
  { q: 'Do caterers clean up after a villa event?', a: 'Yes. Full cleanup is included: the team packs equipment, clears service ware, and leaves the kitchen and event space tidy before departure.' },
  { q: 'Is grocery shopping included in villa catering?', a: 'Yes — normal groceries are included in your quotation, and the chef or team does all shopping with fresh market sourcing each service day. Premium upgrades such as lobster or imported beef are quoted separately.' },
]

const serviceSchemaBase = serviceWithAggregateOfferSchema({
  name: 'Villa Catering Bali',
  description: 'Full-service villa catering in Bali for private lunches, dinners, BBQs, buffets, celebrations and multi-day stays — chef, service team, setup and cleanup included for groups of eight or more.',
  url: `${SITE}/catering/villa-catering`,
  lowPrice: '450000',
  highPrice: '650000',
  priceCurrency: 'IDR',
  unitText: 'per person',
})

const serviceSchema = {
  ...serviceSchemaBase,
  provider: {
    ...(serviceSchemaBase.provider as Record<string, unknown>),
    telephone: '+62 896-7407-2020',
  },
  offers: {
    ...(serviceSchemaBase.offers as Record<string, unknown>),
    offerCount: '3',
    description: 'Per person ++ (11% government tax + 10% service charge); min. 8 guests; multi-day catering by custom quotation',
  },
}

export default function CateringVillaPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.villa-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Villa Catering Bali | Private Lunch, Dinner & Multi-Day Catering"
        description="Villa catering in Bali: private villa lunches from IDR 450K++/person, villa dinners from IDR 650K++/person, BBQs, buffets & multi-day catering for groups of 8+. WhatsApp myCHEF."
        canonical={`${SITE}/catering/villa-catering`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-villa.webp`}
        jsonLd={[
          serviceSchema,
          cateringBreadcrumbSchema('Villa Catering Bali', `${SITE}/catering/villa-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Villa Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-villa.webp"
            alt="Long villa dining table by the pool at sunset with chef-prepared Bali catering"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Villa Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Catering Bali for Private Lunches, Dinners and Group Stays
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Enjoy private villa catering in Bali without restaurant bookings, transport, shopping, cooking, or cleanup. Our chefs provide villa lunches, private dinners, BBQs, buffets, celebration meals, and multi-day catering for families and groups across Bali.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            Villa lunches from IDR 450,000++/person · Villa dinners from IDR 650,000++/person · Minimum booking: 8 guests
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-catering-hero" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Plan My Villa Meals
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              See Packages &amp; Prices
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day WhatsApp reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 50% deposit only</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full cleanup included</span>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST STRIP — villa catering specific ═══════ */}
      <div className="bg-white border-y border-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TRUST_ITEMS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="bg-[#6B8E5A]/10 rounded-xl p-2.5 shrink-0">
                  <Icon className="w-5 h-5 text-[#6B8E5A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{label}</p>
                  <p className="text-xs text-[#4A4745] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ SECTION 2: WHO THIS IS FOR ═══════ */}
      <section className="villa-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 2 — Who This Is For"
            title="Private Villa Catering for Every Group"
            subtitle="Families, celebration groups, retreats, and villa managers. If you are staying in a Bali villa and want restaurant-level food without leaving, this is for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { title: 'Families & Holiday Groups', desc: 'Multi-generational families, holiday renters, and expats who want relaxed, restaurant-level meals without restaurant logistics.' },
              { title: 'Birthdays & Celebrations', desc: 'Milestone birthdays, anniversaries, reunions, and celebration evenings with custom menus, cakes, and decor at your villa.' },
              { title: 'Retreats & Corporate Groups', desc: 'Yoga, wellness, and surf retreats plus corporate offsites needing consistent, healthy multi-day catering.' },
              { title: 'Villa Managers & Concierges', desc: <>Concierge-level catering for your guests. <Link to="/certified-partner" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">villa manager partnerships</Link> and white-label available.</> },
            ].map((item) => (
              <div key={item.title} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: MENU STYLES ═══════ */}
      <section id="menu-styles" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 3 — Menu Styles"
            title="Flexible Formats for Every Villa Occasion"
            subtitle="Choose the service style that matches your group, your villa, and your mood. Every format includes chef, service team, setup, and cleanup."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {MENU_STYLES.map((style) => (
              <div key={style.name} className="flex items-start gap-4 p-5 bg-[#FAFAF8] rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#C5A028] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{style.name}</h3>
                  <p className="text-sm text-[#4A4745]">{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catering/bbq-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              villa BBQ catering in Bali <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/catering/buffet" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              villa buffet catering <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/catering/plated-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              plated villa dinner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-[#4A4745] max-w-2xl mx-auto">
            More specialized formats have their own pages: <Link to="/catering/grazing-tables" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">grazing tables</Link>, <Link to="/catering/floating-breakfast" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">floating breakfast</Link>, and <Link to="/catering/drop-off-catering" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">chef-prepared drop-off meals</Link> — villa food delivery without staff. Or browse <Link to="/catering" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">all catering services</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 4: HOW THE VILLA SETUP WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 4 — How It Works"
            title="How Booking Works"
            subtitle="One simple process from first message to final cleanup — villa details, menu, deposit, service, and cleanup all handled by the same team."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <span className="text-xs text-[#C5A028] font-semibold tracking-wider uppercase">Step {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#4A4745] text-center max-w-3xl mx-auto">
            Most groups build a rhythm around the stay: arrival-night welcome dinner, dinner-only middle days, and a big night that can be a <Link to="/villa-bbq-catering-bali" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">villa BBQ party</Link> or <Link to="/catering/bbq-catering" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">a BBQ night</Link>. For a single big dinner, see our <Link to="/group-villa-dinner-packages-bali" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">group dinner packages</Link>. Staying a month or more? <Link to="/private-chef-bali" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">long-stay chef hire</Link> may suit better. For nights when you want chef-prepared food without staff in the villa, try our <Link to="/catering/drop-off-catering" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">drop-off dinners</Link> or read the <Link to="/blog/drop-off-catering-bali" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">drop-off catering guide</Link>.
          </p>
          <div className="mt-10 bg-[#FAFAF8] rounded-2xl p-6 md:p-8 border border-[#E8E6E3]">
            <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What You Need to Provide</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'A working kitchen (stove, fridge, sink)',
                'Basic cookware and utensils (most villas have these)',
                'Dining table and chairs for your group',
                'Access 2–3 hours before meal time',
                'WiFi for our coordination (helpful, not required)',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4A4745] mt-4">
              <strong>We bring everything else:</strong> chef, service team, groceries, specialized equipment, table styling materials, and cleanup supplies. If your villa lacks something, we arrange it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: VILLA EVENTS WE CATER ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 5 — Villa Events"
            title="Villa Celebrations We Cater"
            subtitle="From relaxed family gatherings to pre-wedding meals — we cater the moments that matter during your villa stay."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {VILLA_EVENTS.map((event) => (
              <div key={event.title} className="villa-reveal bg-[#FAFAF8] rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{event.title}</h3>
                <p className="text-sm text-[#4A4745]">{event.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#4A4745] max-w-2xl mx-auto">
            Hosting during the festive season? See our <Link to="/blog/holiday-chef-bali" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">holiday chef Bali guide</Link> for Christmas, New Year and peak-season planning.
          </p>
          <div className="mt-8 text-center">
            <Link to="/events" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore Event Catering <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: PACKAGES + PRICING ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 6 — Packages"
            title="Villa Catering Packages"
            subtitle="Prices are per person, ++ — ++ means 11% government tax + 10% service charge. Chef, service team, setup, and cleanup included. Premium upgrades quoted separately. Minimum booking: 8 guests."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {VILLA_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <div className="mb-1">
                  {pkg.price ? (
                    <p className="font-semibold text-lg text-[#1A1A1A]">
                      From IDR {pkg.price.toLocaleString('id-ID')}++<span className="text-sm font-normal text-[#4A4745]"> /person</span>
                    </p>
                  ) : (
                    <p className="font-semibold text-lg text-[#C5A028]">Custom quotation</p>
                  )}
                </div>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.people}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.format.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                {!pkg.price && (
                  <p className="text-xs text-[#4A4745]/80 mb-4">
                    Multi-day plans are priced according to the number of meals, days, guest count, menu level, and staffing requirements.
                  </p>
                )}
                <p className="text-xs text-[#4A4745]/80 mb-4">Best for: {pkg.bestFor}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-catering-package" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
                  <Calendar className="w-4 h-4" /> Book This Package
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#4A4745] max-w-3xl mx-auto">
            Villa catering packages are designed for groups of eight or more. For smaller groups, explore our <Link to="/private-chef-bali" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">private chef</Link> and <Link to="/fine-dining" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">fine dining</Link> services.
          </p>
          <p className="mt-4 text-center text-sm text-[#4A4745] max-w-3xl mx-auto">
            <strong>Example villa catering budget:</strong> a villa dinner for 14 guests starts from approximately IDR 9.1 million++ before premium upgrades or additional services. Your quotation will show the complete total before booking. See our full <Link to="/pricing" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">pricing</Link> page for more detail.
          </p>
          <TaxFooter className="mt-8" />
        </div>
      </section>

      {/* ═══════ SECTION 7: FAMILY BUDGET + COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 7 — Family Planning"
            title="Build the service around your stay, not the other way around"
            subtitle="You do not need to book full catering every day to make a villa stay easier. Most families mix celebration meals, dinner-only coverage, and lighter breakfast service depending on who is in the villa each day."
          />
          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            {FAMILY_COVERAGE_OPTIONS.map((option) => (
              <div key={option.title} className="villa-reveal rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-6">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{option.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed mb-4">{option.desc}</p>
                <div className="space-y-2">
                  {option.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: DIETARY & GUEST HANDLING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 8 — Dietary"
            title="Dietary & Guest Handling"
            subtitle="Mixed international groups are the norm in Bali villas. We handle every dietary need without fuss."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              { title: 'Vegetarian & Vegan', desc: 'Full plant-based menus with protein-rich mains, fresh salads, and creative sides.' },
              { title: 'Gluten-Free', desc: 'Naturally gluten-free options and adapted dishes, prepared with separate utensils and prep areas to minimise cross-contamination.' },
              { title: 'Halal-Friendly', desc: 'Pork-free, alcohol-free options available. We source halal-certified proteins on request.' },
              { title: 'Children\'s Menus', desc: 'Milder flavors, familiar dishes, and fun presentations for younger guests.' },
              { title: 'Allergies', desc: 'Nut, shellfish, dairy, and other allergies flagged and managed with separate prep zones.' },
              { title: 'Spice Levels', desc: 'Indonesian dishes adapted for Western palates. Sambal served on the side.' },
            ].map((d) => (
              <div key={d.title} className="flex items-start gap-3 p-5 bg-[#FAFAF8] rounded-xl">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{d.title}</h3>
                  <p className="text-sm text-[#4A4745]">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: OPTIONAL ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 9 — Add-Ons"
            title="Optional Add-Ons"
            subtitle="Elevate your villa catering with bartenders, waiters, table styling, live BBQ, and more."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <addon.icon className="w-6 h-6 text-[#C5A028] mb-3" />
                <h3 className="font-semibold text-sm mb-1">{addon.title}</h3>
                <p className="text-sm text-[#4A4745]">{addon.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#4A4745] max-w-2xl mx-auto">
            Bartenders, cocktail service, table styling, cakes, additional waiters, and live cooking stations can be added to your quotation.
          </p>
          <div className="mt-8 text-center">
            <Link to="/in-villa-service/bartenders" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Hire Bartenders <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/in-villa-service/waiters" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Hire Waiters <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: AREAS WE SERVE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <SectionHeader
            eyebrow="Chapter 10 — Coverage"
            title="Villa Catering Areas"
            subtitle="Bali-wide villa catering. From Canggu to Uluwatu, Ubud to Nusa Dua — we come to your villa."
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {LOCATION_LINKS.map((loc) => (
              <Link key={loc.href} to={loc.href} className="px-4 py-2 bg-white rounded-full text-sm text-[#1A1A1A] border border-[#E8E6E3] hover:border-[#C5A028]/60 hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                {loc.label}
              </Link>
            ))}
            {['Jimbaran', 'Pererenan', 'Berawa', 'Tabanan'].map((area) => (
              <span key={area} className="px-4 py-2 bg-[#FAFAF8] rounded-full text-sm text-[#4A4745] border border-[#E8E6E3]">
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#4A4745] mt-6">
            The same packages and 8-guest minimum apply in every area — farther locations simply add a quoted travel fee.
          </p>
          <p className="text-sm text-[#4A4745] mt-6">
            Not sure if we cover your villa? <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded inline-block">Message us on WhatsApp</a> — we probably do.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 11: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'The Richardson Family', location: 'Canggu Villa', quote: 'We had the multi-day villa catering for 15 people over 4 days. The chef was incredible — every meal was different and delicious. The team left the kitchen spotless each night.', rating: 5 },
          { name: 'Mark & Lisa', location: 'Uluwatu Villa', quote: 'Villa dinner for 20 guests. The chef handled everything — from shopping to cleanup. We just sat by the pool and enjoyed. Best decision of our trip.', rating: 5 },
          { name: 'Corporate Group', location: 'Seminyak Villa', quote: 'Multi-day catering for our company offsite. Breakfast, lunch, and dinner for 25 people. Professional, punctual, and the food was outstanding.', rating: 5 },
        ]}
        title="What Villa Catering Guests Say"
        subtitle="Real reviews from villa groups across Bali."
      />

      {/* ═══════ SECTION 12: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Chapter 12 — FAQ" title="Villa Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SERVICE TEAM — staffing sized to the event, no fixed ratios ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <SectionHeader
            eyebrow="Service Team"
            title="Staffing Sized to Your Event"
            subtitle="The appropriate number of chefs, assistants, and service staff is included according to your guest count, menu, and service format."
          />
        </div>
      </section>

      {/* ═══════ POPULAR VILLA CATERING OPTIONS ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Plan Your Villa Dining</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Popular Villa Catering Options</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Villa catering in Canggu', href: '/locations/canggu', desc: 'Surf groups, long stays, relaxed shared menus.' },
              { label: 'Villa catering in Seminyak', href: '/locations/seminyak', desc: 'Polished lunches, dinners and birthdays.' },
              { label: 'Private chef dinner', href: '/private-chef-bali', desc: 'For smaller villa groups under eight guests.' },
              { label: 'Request a villa catering quote', href: '/book', desc: 'Dates, area and group size — that is all we need.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-catering-bali-villa-final.webp" alt="Indonesian chef and team preparing multi-day villa catering in a Bali villa kitchen" className="w-full h-full object-cover" loading="lazy" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book Villa Catering Bali
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Villa Catering?
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your villa, dates, and group size. We will send the right format and a clear quote on WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-catering-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Get Villa Menu & Quote
            </a>
            <a href="https://wa.me/6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 896-7407-2020
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 50% deposit only</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="catering-villa"
        serviceName="villa catering in Bali"
        intent="villa catering packages and pricing"
      />
    </div>
  )
}
