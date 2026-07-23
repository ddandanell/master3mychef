import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ChevronRight, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead, {
  breadcrumbSchema, offerSchema,
  faqPageSchema, aggregateRatingSchema, detailedServiceSchema,
  howToSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA = 6289674072020
const WA_LINK = buildWhatsAppUrl({ serviceName: 'a private tasting menu in Bali', intent: 'pricing and availability' })

const ACTS = [
  {
    act: 'Act I — Arrival',
    image: '/generated/mychef-experience-bali-luna-detail.webp',
    title: 'The aperitif on your terrace.',
    body: 'Before anyone sits down. The chef introduces himself. A single amuse-bouche from the kitchen — the first signal of the evening ahead. You are not in a restaurant. You are already in the meal.',
    medi: 'Welcome bite + sparkling wine aperitif',
    wagyu: 'Welcome bite + Franciacorta Rosé aperitif',
  },
  {
    act: 'Act II — The Opening',
    image: '/generated/mychef-experience-bali-luna-gallery-1.webp',
    title: 'Cold, sharp, perfumed.',
    body: 'The starter wakes the palate. It arrives precise and cold — the sea or the grill in a single bite. The plating is exact. Nothing is accidental.',
    medi: 'Passione di Dentice — red snapper carpaccio, passion fruit, basil gelato',
    wagyu: 'My Beef Tartare — Wagyu chuck tender, polenta chips, cured egg, basil oil',
  },
  {
    act: 'Act III — The Build',
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    title: 'Handmade pasta. Rolled here, this afternoon.',
    body: 'The middle course is where the evening settles. Pasta that was made in your kitchen earlier that day. A sauce that took hours. This is the centre of the meal — the moment the format justifies itself.',
    medi: 'Lobster Tagliatelle — handmade pasta, lobster reduction, cherry tomatoes, basil',
    wagyu: 'Ravioli di Coda — oxtail ragout, Grana Padano sauce, kale foam',
  },
  {
    act: 'Act IV — The Centrepiece',
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    title: 'The main. The reason the menu exists.',
    body: 'One protein. Cooked correctly. No compromise on ingredient quality or technique. This is where the Wagyu ribeye meets open flame, or the barramundi answers the sea it came from.',
    medi: 'Barramundi and the Sea — barramundi roll, clams, Mediterranean sauce, green beans',
    wagyu: 'Ribeye — Wagyu Tokusen, open flame, topinambur cream, blue cheese, walnuts',
  },
  {
    act: 'Act V — The Close',
    image: '/generated/mychef-experience-bali-luna-gallery-2.webp',
    title: 'Restrained. Earned.',
    body: 'Not too sweet. The dessert honours the meal that came before it. The kitchen is already quietly breaking down. The evening is closing at its own pace.',
    medi: 'Tiramisu — house-made lady fingers, mascarpone, Illy espresso, dark cocoa',
    wagyu: 'Tenerina Cake — Callebaut 56% chocolate, salted caramel gelato, sea salt',
  },
]

const TIMELINE = [
  { time: '17:30', event: 'Chef team arrives', note: '6–10 professionals. You will not see them working.' },
  { time: '18:30', event: 'Mise en place complete', note: 'Table set. Wine breathing. Kitchen ready.' },
  { time: '19:00', event: 'Aperitif on the terrace', note: 'The chef introduces himself and the evening.' },
  { time: '19:30', event: 'First course served', note: 'Courses arrive at your pace.' },
  { time: '21:30', event: 'Dessert and digestif', note: 'The kitchen begins quietly breaking down.' },
  { time: '22:00', event: 'Team departs', note: 'Villa immaculate. Evening yours.' },
]

const MENUS = [
  {
    id: 'mediterranean',
    name: 'Mediterranean Sea',
    price: 'IDR 2,200,000++',
    tagline: 'Italian seafood, in five movements.',
    accent: '#2C5F7C',
    courses: [
      'Passione di Dentice — snapper carpaccio, passion fruit, basil gelato',
      'Burrata — prawn mousse, giardiniera, olive oil',
      'Lobster Tagliatelle — handmade pasta, lobster sauce, basil',
      'Barramundi and the Sea — clams, Mediterranean sauce',
      'Tiramisu — house-made, mascarpone, Illy espresso',
    ],
    wine: 'Etna Bianco or Vermentino · light Pinot Noir · Franciacorta aperitif',
  },
  {
    id: 'wagyu',
    name: 'Wagyu Experience',
    price: 'IDR 2,400,000++',
    tagline: 'Wagyu Tokusen in three forms. Open flame.',
    accent: '#8B4513',
    courses: [
      'Wagyu Tartare — polenta chips, cured egg, rocket, basil oil',
      'Ravioli di Coda — oxtail ragout, Grana Padano, kale foam',
      'Ribeye — Wagyu Tokusen, open flame, topinambur cream, blue cheese',
      'Tenerina Cake — Callebaut 56%, salted caramel gelato',
    ],
    wine: 'Barolo or Brunello · oaked Chardonnay alternative · Franciacorta Rosé aperitif',
  },
]

const TESTIMONIALS = [
  {
    name: 'Marcus Chen',
    location: 'Uluwatu ocean villa',
    eventType: 'Executive Tasting Dinner',
    quote: 'I have hosted client dinners at Michelin restaurants across Asia. This was better. The privacy, the pacing, the fact that the chef was cooking three meters from our table — my client still talks about it.',
    rating: 5,
  },
  {
    name: 'Jessica & Ben',
    location: 'Toronto',
    eventType: 'Fine Dining — Mediterranean',
    quote: 'The sommelier paired a Sicilian white with the lobster tagliatelle that made me cry. Not exaggerating. It was that good.',
    rating: 5,
  },
  {
    name: 'Richard & Amanda',
    location: 'San Francisco',
    eventType: 'Wagyu Experience',
    quote: 'We have done tasting menus in Napa, Paris, and Tokyo. The Wagyu Experience at our villa rivalled all of them. The team is world-class.',
    rating: 5,
  },
]

const FAQS = [
  { q: 'What is the minimum number of guests?', a: 'Four guests minimum for the full tasting experience. For intimate two-person romantic evenings, message Sofia — we can arrange the experience for two.' },
  { q: 'Can I mix the two menus at the same table?', a: 'Yes. Half your table can have Mediterranean Sea, the other half Wagyu. Just let us know when booking.' },
  { q: 'What does "++" mean in the price?', a: '"++ " means service charge (10%) and government tax (11%) are added. The all-in total is approximately IDR 2.6M (Mediterranean) and IDR 2.85M (Wagyu). Wine pairing is IDR 850K additional per guest.' },
  { q: 'How long does the evening last?', a: 'From first course to last digestif: approximately 2.5–3 hours. The full experience including arrival is 4–4.5 hours.' },
  { q: 'Is the wine pairing required?', a: 'No — it is optional at IDR 850,000 per guest. If you prefer to provide your own wine, we open and serve it. We can also recommend specific bottles to source.' },
  { q: 'How far ahead should I book?', a: '7+ days is ideal. Peak season (July–August, December) books 2+ weeks ahead. We occasionally accommodate 48-hour requests — message us and we will try.' },
  { q: 'Can you accommodate allergies or dietary restrictions?', a: 'Yes — every course is adaptable. Gluten-free, shellfish allergy, vegan, halal, pregnancy-friendly. No extra charge. Tell us when booking.' },
  { q: 'Do I need a large villa kitchen?', a: 'We have worked in everything from compact pool villas to estate kitchens. We bring specialized equipment when needed. As long as there is a kitchen and a dining area, we can make it work.' },
]

export default function TastingMenuPage() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll('.tasting-reveal').forEach(el => {
        (el as HTMLElement).style.opacity = '1'
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.tasting-reveal', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.tasting-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Tasting Menu Bali | 5-Course Private Villa Dining — myCHEF"
        description="Private tasting menu in your Bali villa: Michelin-trained chef, 5 courses, handmade pasta, Mediterranean or Wagyu path. From IDR 2.2M/pp. WhatsApp us."
        canonical={`${SITE}/fine-dining/tasting-menu`}
        ogImage={`${SITE}/generated/mychef-finedining-bali-luna-plating.webp`}
        jsonLd={[
          detailedServiceSchema(
            'Private Tasting Menu Bali',
            'A private multi-course tasting menu experience in your Bali villa. Choose Mediterranean Sea or Wagyu Experience — Michelin-trained chefs, handmade pasta, premium ingredients, and full service in your villa. myCHEF.id serves across all Bali villa areas.',
            `${SITE}/fine-dining/tasting-menu`
          ),
          offerSchema('Mediterranean Sea Tasting Menu', 2200000, 'IDR', `${SITE}/fine-dining/tasting-menu`),
          offerSchema('Wagyu Tasting Experience', 2400000, 'IDR', `${SITE}/fine-dining/tasting-menu`),
          aggregateRatingSchema(4.9, 560),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Tasting Menu Bali', `${SITE}/fine-dining/tasting-menu`, 'Fine Dining', `${SITE}/fine-dining`),
          howToSchema({
            name: 'How to Book a Private Tasting Menu in Bali',
            description: 'Book a 5-course private tasting menu in your Bali villa with a Michelin-trained chef.',
            steps: [
              { name: 'Message Us Your Details', text: 'Tell us your date, villa location, and guest count. We confirm availability and pricing within 1 hour.' },
              { name: 'Choose Your Menu Path', text: 'Select Mediterranean Sea (IDR 2.2M++) or Wagyu Experience (IDR 2.4M++). Half the table can have each menu.' },
              { name: 'Chef Arrives & Prepares', text: 'The team arrives 3 hours before dinner, sets the table, sources fresh ingredients, and leaves your villa immaculate.' },
            ],
          }),
        ]}
      />


      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-finedining-bali-luna-plating.webp"
            alt="Perfectly plated private tasting menu dish in a Bali villa — myCHEF fine dining"
            width={1920} height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.30) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Breadcrumb items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Tasting Menu' }]} theme="dark" className="py-6" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            The Luna Experience · Private Dining Bali
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Private Tasting Menu<br />
            <span className="italic">In Your Bali Villa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-3 max-w-2xl mx-auto leading-relaxed">
            Five courses. A Michelin-trained team. Handmade pasta rolled in your kitchen the afternoon of your dinner.
          </p>
          <p className="text-white/[55%] text-sm mb-10 tracking-wide">
            From IDR 2,200,000++ per person · Wine pairing +IDR 850,000 · 4 guests minimum
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="tasting-menu-hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Book Your Tasting Evening
            </a>
            <Link
              to="/fine-dining"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              The Full Experience <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Michelin-trained kitchen</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> All ingredients included</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full table service + cleanup</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ══════════════════════════════════ THE PHILOSOPHY ══════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1A1A1A]">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Idea
          </p>
          <blockquote className="text-white/[90%] leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.5 }}>
            "A tasting menu is not a meal.<br />
            <span className="italic">It is a story told in courses</span> — cold to warm, delicate to bold, and back again. Every plate is a decision, not just an ingredient."
          </blockquote>
          <p className="text-white/[40%] text-sm mt-8 tracking-wide uppercase">— Adriano · Executive Chef · Michelin-trained, Modena</p>
        </div>
      </section>

      {/* ══════════════════════════════════ THE FIVE ACTS ══════════════════════════════════ */}
      <section className="py-8 bg-[#FAFAF8] tasting-content">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-16 pt-16">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Five Acts
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Tasting Menu, Course by Course
            </h2>
          </div>

          {ACTS.map((act, i) => (
            <div
              key={act.act}
              className={`tasting-reveal flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 mb-4 rounded-[28px] overflow-hidden bg-white border border-[#E5E3E0]`}
            >
              <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={act.image} alt={act.title}
                  width={800} height={600}
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {act.act}
                </p>
                <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {act.title}
                </h3>
                <p className="text-[#4A4745] text-sm leading-relaxed mb-6">{act.body}</p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#2C5F7C] uppercase tracking-wider mb-1">Mediterranean</div>
                  <p className="text-sm text-[#1A1A1A] italic">{act.medi}</p>
                  <div className="text-xs font-semibold text-[#8B4513] uppercase tracking-wider mt-3 mb-1">Wagyu</div>
                  <p className="text-sm text-[#1A1A1A] italic">{act.wagyu}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════ WINE PAIRING ══════════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="/generated/mychef-experience-bali-luna-wine.webp"
          alt="Wine pairing for private tasting menu in Bali villa"
          width={1920} height={900}
          loading="lazy" decoding="async"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60" />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Optional · +IDR 850,000 per guest
            </p>
            <h2 className="text-white text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wine Pairing
            </h2>
            <p className="text-white/[70%] text-base mt-4 max-w-[540px] mx-auto">
              Our sommelier selects 4–5 pours — one per course, matched to the menu you choose. The aperitif is always Franciacorta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {MENUS.map((menu) => (
              <div key={menu.id} className="rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-sm p-8">
                <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: menu.accent, fontFamily: "'Cormorant Garamond', serif" }}>
                  {menu.name}
                </p>
                <p className="text-white text-sm leading-relaxed">{menu.wine}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/[40%] text-xs mt-8">Prefer to provide your own wine? We open and serve it. We can recommend specific bottles to source.</p>
        </div>
      </section>

      {/* ══════════════════════════════════ EVENING TIMELINE ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Evening
            </p>
            <h2 className="text-white text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              How the Evening Unfolds
            </h2>
          </div>
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-8 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-[#C5A028] mt-1.5 flex-shrink-0" />
                  {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
                </div>
                <div className="pb-2">
                  <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.time}
                  </p>
                  <p className="text-white font-medium mb-0.5">{item.event}</p>
                  <p className="text-white/[50%] text-sm">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CHOOSE YOUR MENU ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Choose Your Menu
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Two Menus. One Standard.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {MENUS.map((menu) => (
              <div key={menu.id} className="rounded-[28px] border-2 p-8 md:p-10" style={{ borderColor: `${menu.accent}30` }}>
                <p className="text-xs uppercase tracking-[0.3em] mb-3 font-semibold" style={{ color: menu.accent, fontFamily: "'Cormorant Garamond', serif" }}>
                  {menu.tagline}
                </p>
                <h3 className="text-3xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.name}</h3>
                <p className="text-[#C5A028] font-semibold text-lg mb-6">{menu.price}</p>
                <ul className="space-y-3 mb-8">
                  {menu.courses.map((course) => (
                    <li key={course} className="flex items-start gap-3 text-sm text-[#4A4745]">
                      <span className="text-[#C5A028] mt-0.5">—</span>
                      <span className="italic">{course}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like to book the ${menu.name} tasting menu in my Bali villa.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  data-source={`tasting-menu-${menu.id}-cta`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
                  style={{ background: menu.accent }}
                >
                  <MessageCircle className="w-4 h-4" /> Book {menu.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ PRICING ══════════════════════════════════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pricing & What's Included
          </h2>
          <div className="rounded-[28px] border border-[#E5D9B5] p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="sm:col-span-2 flex gap-6 pb-6 border-b border-[#E5D9B5] flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Mediterranean Sea</p>
                  <p className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>IDR 2,200,000++</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Wagyu Experience</p>
                  <p className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>IDR 2,400,000++</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Wine Pairing</p>
                  <p className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>+IDR 850,000</p>
                </div>
              </div>
              {[
                'Michelin-trained chef + kitchen team of 6–10',
                'All premium ingredients (grocery sourced same-day)',
                'Table linens, candles, glassware, and tableware',
                'Full service across all courses',
                'Sommelier wine service (if pairing added)',
                'Kitchen cleanup and restoration',
                'Dietary customization — no extra charge',
                'Min. 4 guests · Max. 24 guests',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="tasting-menu-pricing-cta"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Book Your Tasting Evening
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What Guests Say
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>560+ Villa Dinners Served</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="rounded-[24px] border border-[#E8E2CF] bg-white p-7 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
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

      {/* ══════════════════════════════════ FAQ ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[720px] mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Common Questions</h2>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ══════════════════════════════════ FINAL CTA ══════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1A1A1A] text-center">
        <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Ready to Book
        </p>
        <h2 className="text-white text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Book Your Tasting Evening
        </h2>
        <p className="text-white/[60%] text-lg mb-10 max-w-[540px] mx-auto">
          Tell us your date, villa, and guest count. We confirm the menu and availability within the hour.
        </p>
        <a
          href={WA_LINK}
          target="_blank" rel="noopener noreferrer"
          data-source="tasting-menu-final-cta"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
        >
          <MessageCircle className="w-5 h-5" /> Message Sofia on WhatsApp
        </a>
        <p className="text-white/[30%] text-xs mt-6">Replies within 1 hour · No booking fee</p>
      </section>

      <section className="py-10 px-6 bg-[#141414]">
        <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: 'Fine Dining Overview', href: '/fine-dining' },
            { label: 'Romantic Dinner', href: '/fine-dining/romantic-dinner' },
            { label: "Chef's Table", href: '/fine-dining/chefs-table' },
            { label: 'Our Menus', href: '/fine-dining/menus' },
            { label: 'Our Chefs', href: '/chefs' },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="text-white/[40%] text-sm hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
      <StickyMobileCTA
        pageSource="tasting-menu"
        serviceName="tasting menu in Bali"
        intent="tasting menu options and pricing"
      />
    </div>
  )
}