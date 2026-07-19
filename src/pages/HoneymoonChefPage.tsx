import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Heart, Star, Sunrise, Wine, Camera, Sparkles, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
  aggregateRatingSchema,
  detailedServiceSchema,
  offerSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'a honeymoon private chef experience in Bali', intent: 'pricing and availability' })

const HONEYMOON_COURSES = [
  { act: 'Welcome', name: 'Arrival Canapés', desc: "Two bites to open the evening — tropical ceviche on cassava crisp, and a shot of chilled lemongrass consommé." },
  { act: 'I', name: 'Ocean Ceviche', desc: 'Fresh local snapper · coconut leche de tigre · finger lime caviar · micro herbs · edible hibiscus' },
  { act: 'II', name: 'Burrata & Heirloom Tomato', desc: 'Buffalo burrata · Balinese heirloom tomatoes · aged balsamic · Lombok sea salt · basil oil' },
  { act: 'Pre', name: 'Passion Fruit Sorbet', desc: 'A palate cleanser of frozen passion fruit sorbet with a pinch of black lava salt and fresh mint.' },
  { act: 'III', name: 'Charcoal-Grilled Wagyu Tenderloin', desc: 'Australian Wagyu MB5 · truffle jus · roasted bone marrow butter · Balinese black pepper · seasonal vegetables' },
  { act: 'IV', name: 'Signature Honeymoon Dessert', desc: 'Dark Javan chocolate sphere · salted caramel core · rose petal gelato · edible gold · "Just Married" calligraphy in cacao' },
]

const FEATURES = [
  {
    icon: Sunrise,
    title: 'Sunrise Breakfast Service',
    desc: 'Your Balinese chef arrives before you wake. Fresh tropical fruits, eggs any style, house-made granola, and cold-pressed juice — ready when you open your eyes.',
  },
  {
    icon: Wine,
    title: 'Private Poolside Dinner',
    desc: 'A table set at the edge of your infinity pool. Candlelight, white linens, champagne breathing. Your chef stays discreetly in the kitchen until each course is ready.',
  },
  {
    icon: Heart,
    title: 'Daily Menu Personalisation',
    desc: 'Over a 7–14 day stay, our team learns your preferences — what you loved, what you want again, what to try next. Each day builds on the last.',
  },
  {
    icon: Sparkles,
    title: 'Champagne & Wine Cellar Access',
    desc: 'We source and chill your preferred bottles. Champagne on arrival, Burgundy with dinner, local Bintang by the pool — all handled without you lifting a finger.',
  },
  {
    icon: Camera,
    title: 'Villa Decor & Fresh Flowers',
    desc: 'Tropical blooms, rose petal arrangements, and candle paths. We coordinate with your villa to ensure the setting matches the occasion every single evening.',
  },
  {
    icon: Star,
    title: 'Zero Interruptions',
    desc: "Our Balinese team arrives, prepares everything, and disappears. You never hear kitchen noise. You never wait. You just live inside the experience.",
  },
]

const FAQS = [
  {
    q: 'How early should we book our honeymoon chef?',
    a: 'We recommend booking 6–8 weeks before your trip, especially if you are travelling in July, August, or December–January. These months are peak season in Bali and our full-stay honeymoon packages fill quickly. That said, message us even with 2–3 weeks notice and we will do our best.',
  },
  {
    q: 'Can the chef be there every day of our stay?',
    a: 'Yes — for a full-stay honeymoon package our chef is assigned to your villa for the duration. You can have them every day, or select specific days. Many couples choose breakfast daily and dinner on 4–5 evenings, with a few nights off to explore Bali\'s restaurants.',
  },
  {
    q: 'Do you accommodate breakfast AND dinner?',
    a: 'Absolutely. Our full-day honeymoon option covers morning breakfast service, afternoon snacks and cold-pressed juice preparation, and a rotating evening dinner. We can also add a mid-afternoon cooking demonstration if you want to learn a Balinese dish together as an activity.',
  },
  {
    q: 'Is there a minimum number of guests for a honeymoon package?',
    a: 'No minimum beyond 2 — in fact, we specialise in couples. Two people is the ideal size for a honeymoon private chef. The entire experience is designed for intimacy: two-person tastings, couples-only menus, and service timed entirely around you.',
  },
  {
    q: 'What is included in the honeymoon package price?',
    a: 'Your package includes the private chef and service team, all groceries sourced fresh at market cost (passed through at cost, no markup), cooking equipment, full table setup with linens and candles, and complete kitchen cleanup after each meal. Fresh flowers, champagne, and villa decor are available as add-ons.',
  },
  {
    q: 'Can you customise the menu for dietary needs or allergies?',
    a: 'Yes — always. Vegan, vegetarian, gluten-free, dairy-free, nut allergy, shellfish allergy, pregnancy-safe menus — all handled without extra charge. We collect your full dietary profile before the stay and build every menu around it. You never have to ask twice.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Emma & Tom',
    location: 'Uluwatu clifftop villa',
    eventType: 'Honeymoon — 10-night stay',
    date: 'May 2026',
    quote: 'We had Chef Bayu for our entire honeymoon. Every morning he left something beautiful on the terrace. Every evening felt like a private restaurant just for us. I will never eat at a hotel buffet again.',
    rating: 5,
  },
  {
    name: 'Chloe & Marcus',
    location: 'Seminyak garden villa',
    eventType: '7-night honeymoon package',
    date: 'March 2026',
    quote: 'The poolside dinner on night three was our favourite memory of the entire trip. White tablecloth, champagne, the sound of frogs — and a five-course meal that our chef had built specifically for us. Extraordinary.',
    rating: 5,
  },
  {
    name: 'Rachel & James',
    location: 'Ubud jungle retreat',
    eventType: 'Honeymoon breakfast + dinner',
    date: 'February 2026',
    quote: 'Waking up to a Balinese breakfast already set on the balcony — fruits we had never tried, fresh juice, perfect eggs. Then dinner under the stars each evening. Our honeymoon was perfect because of myCHEF.',
    rating: 5,
  },
]

const AREAS = [
  {
    name: 'Uluwatu',
    href: '/locations/uluwatu',
    desc: 'Clifftop infinity pools with Indian Ocean views. The most dramatic setting for a candlelit poolside dinner.',
  },
  {
    name: 'Seminyak',
    href: '/locations/seminyak',
    desc: 'Garden villas with lush tropical grounds. Ideal for couples who want to be close to Bali\'s energy but completely private at home.',
  },
  {
    name: 'Ubud',
    href: '/locations/ubud',
    desc: 'Jungle seclusion and rice terrace views. Breakfast with birdsong, dinner under a canopy of stars.',
  },
  {
    name: 'Jimbaran',
    href: '/locations/jimbaran',
    desc: 'Beach-facing villas with sunset views across Jimbaran Bay. Perfect for an evening dinner timed to the golden hour.',
  },
]

export default function HoneymoonChefPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.honeymoon-reveal', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.honeymoon-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Honeymoon Private Chef Bali | Romantic Villa Dining | myCHEF"
        description="A private chef for your Bali honeymoon. Sunset dinners, breakfast in bed, custom romantic menus. Michelin-trained team. From IDR 2.5M++ per person. WhatsApp us."
        canonical={`${SITE}/blog/honeymoon-private-chef-bali`}
        ogImage={`${SITE}/generated/mychef-experience-bali-luna-gallery-1.webp`}
        jsonLd={[
          detailedServiceSchema(
            'Honeymoon Private Chef Bali',
            'A private chef for your Bali honeymoon — Michelin-trained Balinese team, sunrise breakfasts, rotating romantic dinner menus, and full-stay villa packages. Serving Uluwatu, Seminyak, Ubud, Jimbaran and all Bali villa areas.',
            `${SITE}/blog/honeymoon-private-chef-bali`
          ),
          offerSchema('Honeymoon Dinner — per person', 2500000, 'IDR', `${SITE}/blog/honeymoon-private-chef-bali`),
          offerSchema('7-Night Full-Stay Honeymoon Package', 18000000, 'IDR', `${SITE}/blog/honeymoon-private-chef-bali`),
          aggregateRatingSchema(4.9, 560),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Honeymoon Private Chef Bali', `${SITE}/blog/honeymoon-private-chef-bali`, 'Blog', `${SITE}/blog`),
        ]}
      />

      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-experience-bali-luna-gallery-1.webp"
            alt="Private chef serving a romantic candlelit dinner for two at a Bali villa poolside"
            width={1920} height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.22) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Breadcrumb items={[{ label: 'Blog', href: '/journal' }, { label: 'Honeymoon Private Chef Bali' }]} theme="dark" className="py-6" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Honeymoon Dining · Bali Private Villas
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Private Chef<br />
            <span className="italic">For Your Bali Honeymoon</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto leading-relaxed">
            Sunrise breakfasts prepared at your villa. Rotating romantic dinner menus. A Michelin-trained team that learns your preferences and builds every meal around you — for 5 to 14 nights.
          </p>
          <p className="text-white/[60%] text-sm mb-10 tracking-wide">
            From IDR 2,500,000++ per person · Full-stay packages available · All Bali villa areas — <a href="/pricing" className="text-[#C5A028] hover:underline">see pricing</a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="honeymoon-chef-hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Plan Our Honeymoon Dining
            </a>
            <Link
              to="/fine-dining/romantic-dinner"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              Romantic Dinner Options <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Michelin-trained Balinese team</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Breakfast + dinner packages</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full kitchen cleanup included</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ══════════════════════════════════ INTRO — THE EXPERIENCE ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                What It Actually Feels Like
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                More than a dinner.<br /><span className="italic">A stay-long experience.</span>
              </h2>
              <div className="space-y-4 text-[#4A4745] text-base leading-relaxed">
                <p>
                  A single candlelit dinner is beautiful. But a private chef for your entire honeymoon is something different — it transforms where you are staying into the finest restaurant you have ever visited, every single day.
                </p>
                <p>
                  When you book a myCHEF honeymoon package, our Balinese team becomes an invisible part of your stay. They arrive before you wake. They prepare your breakfast as the sun rises over the rice terraces or the Indian Ocean. They leave quietly. They return in the evening and build a dinner that is different from the night before — learning what you love, what surprised you, what you want more of.
                </p>
                <p>
                  Dining out in Bali means sharing a restaurant with strangers, waiting for tables, and losing the mood on the drive home. A private chef means every meal happens in your villa, at your pace, with a team whose entire job is to make your honeymoon unforgettable.
                </p>
              </div>
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-xl">
              <img
                src="/generated/mychef-experience-bali-luna-gallery-1.webp"
                alt="Romantic poolside dinner table set for two at a Bali villa with candles and tropical flowers"
                width={700} height={800}
                loading="lazy" decoding="async"
                className="w-full h-full object-cover aspect-[7/8]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ MULTI-DAY PACKAGE MODEL ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[960px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Honeymoon Chef Model
            </p>
            <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your chef. Every day.<br /><span className="italic">For your entire stay.</span>
            </h2>
            <p className="text-white/[60%] max-w-[560px] mx-auto text-base leading-relaxed">
              A honeymoon private chef is not a one-night arrangement. It is a 5 to 14-day companion for your villa — adapting, evolving, and building toward the best meal of your trip.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                time: 'Morning',
                icon: Sunrise,
                title: 'Sunrise Breakfast',
                desc: 'Fresh tropical fruits, eggs prepared to order, house-made granola, cold-pressed juice, Balinese coffee or tea. Set on your terrace before you step outside.',
              },
              {
                time: 'Afternoon',
                icon: Sparkles,
                title: 'Snack & Juice Bar',
                desc: 'A rotating selection of light bites, smoothie bowls, fresh coconuts, and afternoon treats left in your villa. Energy for exploring — or doing nothing at all.',
              },
              {
                time: 'Evening',
                icon: Wine,
                title: 'Romantic Dinner',
                desc: 'A new menu every night. Night one is an introduction. By night seven, your chef knows exactly what you love and the meal reflects it.',
              },
            ].map((item) => (
              <div key={item.time} className="rounded-[24px] border border-white/10 bg-white/5 p-8">
                <item.icon className="w-7 h-7 text-[#C5A028] mb-5" />
                <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] mb-2">{item.time}</p>
                <h3 className="text-white text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-white/[60%] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[24px] border border-[#C5A028]/20 bg-[#C5A028]/5 p-8">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] mb-3">How the Stay Evolves</p>
            <p className="text-white/[75%] text-sm leading-relaxed max-w-[760px]">
              Night one: a classic welcome — the five-course honeymoon tasting menu. Night three: the menu shifts based on your feedback — perhaps more seafood, perhaps the Wagyu you mentioned over breakfast. By night seven, your chef is cooking for <em>you</em>, not from a template. That evolution is what separates a honeymoon package from a single restaurant booking.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ TASTING MENU ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8] honeymoon-content">
        <div className="max-w-[960px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Opening Menu
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Honeymoon Tasting Experience
            </h2>
            <p className="text-[#4A4745] max-w-[560px] mx-auto text-base leading-relaxed">
              A six-movement menu built around Balinese ingredients and Michelin-trained technique. Champagne pairing available. This is the menu we recommend for your first evening — your chef will build from here.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {HONEYMOON_COURSES.map((course, i) => (
              <div key={i} className="honeymoon-reveal flex items-start gap-6 py-6 border-b border-[#1A1A1A]/10 last:border-0">
                <div className="w-20 flex-shrink-0 text-center">
                  <span className="text-[#C5A028] text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {course.act}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem' }}>
                    {course.name}
                  </h3>
                  <p className="text-[#4A4745] text-sm leading-relaxed italic">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1A1A1A] rounded-[24px] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/[50%] text-xs uppercase tracking-[0.3em] mb-2">Dinner — per person</p>
              <p className="text-white text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>IDR 2,500,000 <span className="text-white/[50%] text-lg">++</span></p>
              <p className="text-white/[50%] text-xs mt-1">Champagne pairing available · Full-stay packages from IDR 18,000,000</p>
            </div>
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="honeymoon-chef-menu-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Book This Menu
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ FEATURES ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What You Get
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Honeymoon Package
            </h2>
            <p className="text-[#4A4745] max-w-[520px] mx-auto">
              Every element of your dining experience is handled by our Balinese team. You focus entirely on each other.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="honeymoon-reveal rounded-[20px] border border-[#E5E3E0] p-6 hover:border-[#C5A028]/40 transition-all">
                <feature.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ EDITORIAL IMAGE ══════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-end">
        <img
          src="/generated/mychef-experience-bali-luna-table.webp"
          alt="Romantic poolside dinner table set for two in a Bali villa with white linens and candles"
          width={1920} height={1080}
          loading="lazy" decoding="async"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
        <div className="relative z-10 px-8 pb-16 md:pb-24 pt-32 max-w-[900px] mx-auto w-full">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Setup
          </p>
          <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            We arrive 3 hours before you sit down.<br />
            <span className="italic text-white/[75%]">The table is ready. The champagne is cold.</span>
          </h2>
          <p className="text-white/[70%] text-base md:text-lg max-w-[640px]">
            White linens, petals, candles lit — and your Balinese chef quietly working in the kitchen. You walk out to it. You never had to arrange a thing.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What Honeymooners Say
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              560+ events · 4.9 ★ average rating
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="rounded-[24px] border border-[#E8E2CF] bg-white p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A028] text-[#C5A028]" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm text-[#1A1A1A]">{t.name}</p>
                  <p className="text-xs text-[#4A4745] mt-0.5">{t.location} · {t.eventType}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ AREAS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Where We Work
            </p>
            <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Best Honeymoon Villa Areas in Bali
            </h2>
            <p className="text-white/[60%] max-w-[560px] mx-auto">
              Each part of Bali offers a completely different setting for your honeymoon. Our team serves all areas — and knows how to adapt the experience to each one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AREAS.map((area) => (
              <Link
                key={area.name}
                to={area.href}
                className="group rounded-[20px] border border-white/10 bg-white/5 p-6 hover:border-[#C5A028]/40 hover:bg-white/10 transition-all"
              >
                <h3 className="text-white text-xl mb-3 group-hover:text-[#C5A028] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {area.name}
                </h3>
                <p className="text-white/[55%] text-sm leading-relaxed">{area.desc}</p>
                <p className="text-[#C5A028] text-xs mt-4 uppercase tracking-[0.2em]">Explore area →</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-white/[40%] text-sm mt-8">
            Also serving Canggu, Nusa Dua, Kuta, Sanur, and all Bali villa locations. <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#C5A028] hover:underline">Ask us about your villa.</a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ PRICING ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Honeymoon Package Investment
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: 'Single Romantic Dinner',
                price: 'IDR 2,500,000++',
                unit: 'per person',
                desc: 'One evening — five courses, table setup, candles, full service. Perfect if you want to try before committing to a package.',
              },
              {
                label: '7-Night Full-Stay Package',
                price: 'IDR 18,000,000',
                unit: 'for two guests',
                desc: 'Breakfast daily + dinner 5 evenings. Rotating menus, daily personalisation, all setup and cleanup. Our most popular honeymoon option.',
                highlight: true,
              },
            ].map((pkg) => (
              <div
                key={pkg.label}
                className={`rounded-[24px] p-8 border ${pkg.highlight ? 'border-[#C5A028]/40 bg-[#FBF8F0]' : 'border-[#E5E3E0] bg-white'}`}
              >
                {pkg.highlight && (
                  <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] mb-3">Most Popular</p>
                )}
                <h3 className="text-[#1A1A1A] text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.label}</h3>
                <p className="text-3xl font-light mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.price}</p>
                <p className="text-[#4A4745] text-xs mb-4">{pkg.unit}</p>
                <p className="text-[#4A4745] text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[24px] border border-[#E5D9B5] bg-white p-8">
            <h3 className="text-[#1A1A1A] text-lg mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>What Is Always Included</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Private Michelin-trained Balinese chef',
                'All groceries, sourced fresh daily (at cost)',
                'Cooking equipment and utensils',
                'Full table setup — linens, candles, glassware',
                'Complete kitchen cleanup after every meal',
                'Dietary customisation at no extra charge',
                'Daily menu variation and personalisation',
                'Champagne, flowers, and décor available as add-ons',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#E5D9B5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Custom packages also available</p>
                <p className="text-sm text-[#4A4745]">10-night, 14-night, or tailor-made. We quote based on your villa, dates, and preferences.</p>
              </div>
              <a
                href={WA_LINK}
                target="_blank" rel="noopener noreferrer"
                data-source="honeymoon-chef-pricing-cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MessageCircle className="w-4 h-4" /> Get a Quote
              </a>
            </div>
          </div>
          <p className="text-center text-[#4A4745] text-sm mt-6">
            See full pricing details at <Link to="/pricing" className="text-[#C5A028] hover:underline">mychef.id/pricing</Link> or explore our <Link to="/staffing/live-in-chef" className="text-[#C5A028] hover:underline">live-in chef staffing options</Link> for longer stays.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ HOW TO BOOK ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[960px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Three Steps
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              How to Book Your Honeymoon Chef
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Message Us on WhatsApp',
                desc: 'Share your travel dates, villa area, and what you are hoping for. We reply within the hour.',
              },
              {
                n: '02',
                title: 'We Design Your Package',
                desc: 'We propose a menu plan, schedule, and full quote tailored to your stay. No generic packages.',
              },
              {
                n: '03',
                title: 'Arrive and Enjoy',
                desc: 'Your Balinese chef handles everything. You simply turn up and be a honeymooner.',
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <p className="text-[#C5A028] text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{step.n}</p>
                <h3 className="text-[#1A1A1A] text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="honeymoon-chef-howitworks-cta"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Start Planning
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ FAQ ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[720px] mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Common Questions</h2>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ══════════════════════════════════ FINAL CTA ══════════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="/generated/mychef-experience-bali-luna-detail.webp"
          alt="Private fine dining in Bali villa — elegant plated course"
          width={1920} height={800}
          loading="lazy" decoding="async"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60" />
        <div className="relative z-10 text-center max-w-[720px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ready When You Are
          </p>
          <h2 className="text-white text-4xl md:text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Make Your Honeymoon<br /><span className="italic">Truly Extraordinary</span>
          </h2>
          <p className="text-white/[70%] text-lg mb-10 leading-relaxed">
            Tell us your dates, your villa, and what you are dreaming of.<br />We will make sure it happens — every single morning and evening.
          </p>
          <a
            href={WA_LINK}
            target="_blank" rel="noopener noreferrer"
            data-source="honeymoon-chef-final-cta"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <MessageCircle className="w-5 h-5" /> Plan Our Honeymoon Dining
          </a>
          <p className="text-white/[40%] text-xs mt-6">Replies within 1 hour · No booking fee · Packages from IDR 18,000,000</p>
        </div>
      </section>

      {/* ══════════════════════════════════ RELATED LINKS ══════════════════════════════════ */}
      <section className="py-12 px-6 bg-[#1A1A1A]">
        <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner' },
            { label: 'Tasting Menu', href: '/fine-dining/tasting-menu' },
            { label: 'Private Chef Pricing', href: '/pricing' },
            { label: 'Live-In Chef Staffing', href: '/staffing/live-in-chef' },
            { label: 'Fine Dining Overview', href: '/fine-dining' },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="text-white/[50%] text-sm hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
