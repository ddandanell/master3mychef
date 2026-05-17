import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, MapPin, ChevronRight, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema, breadcrumbSchema, offerSchema,
  faqPageSchema, aggregateRatingSchema, detailedServiceSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA = '6282237565997'
const WA_LINK = `https://wa.me/${WA}?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20hire%20a%20private%20chef%20for%20my%20Bali%20villa.`

const HOW_IT_WORKS = [
  { step: '01', title: 'Message Sofia on WhatsApp', body: 'Tell us your date, villa location, guest count, and menu preference. We reply within 1 hour.' },
  { step: '02', title: 'Choose your menu', body: 'Mediterranean Sea (IDR 2.2M++) or Wagyu Experience (IDR 2.4M++). Both include full grocery sourcing.' },
  { step: '03', title: 'We arrive 3 hours early', body: 'A team of 6–10 professionals sets up your dining experience while you relax elsewhere in the villa.' },
  { step: '04', title: 'You dine. We clean.', body: 'The meal, the service, the cleanup. You walk back into a spotless kitchen.' },
]

const MENUS = [
  {
    id: 'mediterranean',
    name: 'Mediterranean Sea',
    price: 'IDR 2,200,000++',
    tagline: 'Five courses. Italian seafood. Open kitchen.',
    accent: '#2C5F7C',
    image: '/generated/menu-mediterranean-sea.webp',
    courses: [
      'Passione di Dentice — red snapper carpaccio, passion fruit, basil gelato',
      'Burrata — prawn mousse, giardiniera, extra virgin olive oil',
      'Lobster Tagliatelle — handmade pasta, lobster reduction, cherry tomatoes, basil',
      'Barramundi and the Sea — barramundi roll, clams, Mediterranean sauce, green beans',
      'Tiramisu — house-made lady fingers, mascarpone, Illy espresso, dark cocoa',
    ],
  },
  {
    id: 'wagyu',
    name: 'Wagyu Experience',
    price: 'IDR 2,400,000++',
    tagline: 'Wagyu Tokusen in three forms. Open flame.',
    accent: '#8B4513',
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    courses: [
      'My Beef Tartare — Wagyu chuck tender, polenta chips, cured egg, rocket, basil oil',
      'Ravioli di Coda — oxtail ragout, Grana Padano sauce, kale foam',
      'Ribollita — white bean, kale, rosemary, Parmigiano Reggiano',
      'Wagyu Ribeye — Tokusen, open flame, topinambur cream, blue cheese sauce, walnuts',
      'Tenerina Cake — Callebaut 56% chocolate, salted caramel gelato, sea salt',
    ],
  },
]

const INCLUDED = [
  { icon: '🍽️', label: 'Chef team of 6–10', desc: 'Executive chef, sous chef, line cook, server, and kitchen assistant' },
  { icon: '🛒', label: 'Grocery sourcing', desc: 'Same-day market and premium supplier runs included' },
  { icon: '🕯️', label: 'Full table setup', desc: 'Linens, glassware, tableware, and presentation candles' },
  { icon: '🍷', label: 'Wine service', desc: 'Bring your own wine or add our pairing at +IDR 850K/person' },
  { icon: '✨', label: 'Kitchen cleanup', desc: 'We restore your villa kitchen to exactly how we found it' },
  { icon: '🥗', label: 'Dietary adaptation', desc: 'Vegan, gluten-free, halal, allergy-friendly — no extra charge' },
]

const LOCATIONS = [
  'Seminyak', 'Canggu', 'Berawa', 'Pererenan', 'Ubud', 'Tegallalang',
  'Uluwatu', 'Ungasan', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Kerobokan',
]

const TESTIMONIALS = [
  {
    name: 'Charlotte B.',
    location: 'Perth, Australia',
    quote: "We hired myCHEF for our family reunion dinner in Canggu. The chef arrived, transformed our villa kitchen into something out of a culinary show, and produced food that silenced 18 very opinionated Australians. Booked again the same trip.",
    rating: 5,
    event: 'Family dinner, 18 guests',
  },
  {
    name: 'Hugo & Laura',
    location: 'Amsterdam',
    quote: "The Mediterranean tasting menu in our Uluwatu cliffside villa was one of the best meals of our lives. The barramundi dish in particular — restaurant-quality doesn't cover it.",
    rating: 5,
    event: 'Romantic dinner for 2',
  },
  {
    name: 'Daniel K.',
    location: 'Singapore',
    quote: "I organise quarterly offsites for my team. myCHEF has done three of them now. Consistency is remarkable — every meal, every time. The setup is effortless on our side.",
    rating: 5,
    event: 'Corporate retreat, 14 guests',
  },
]

const FAQS = [
  { q: 'What does a private chef cost in Bali?', a: 'myCHEF private chef dinners start at IDR 2,200,000 per person for the Mediterranean Sea menu, or IDR 2,400,000 for the Wagyu Experience. Both prices include the full chef team, all groceries, table service, and kitchen cleanup. Add-ons like wine pairing (IDR 850K/person) are optional.' },
  { q: 'Is there a minimum number of guests?', a: 'Our standard minimum is 4 guests. For 2-person romantic dinners, message Sofia — we can usually accommodate with a small premium for the setup cost.' },
  { q: 'Do you come to any villa in Bali?', a: 'Yes — we cover all major villa areas: Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur, and surrounding areas. There may be a small travel surcharge for very remote locations.' },
  { q: 'How far in advance do I need to book?', a: '7+ days is ideal. Peak season (July–August, December) often books 2 weeks out. For last-minute needs, message us — we sometimes accommodate 48-hour requests.' },
  { q: 'What kitchen equipment do you need?', a: 'Any villa kitchen works. We bring specialized equipment when needed — induction burners, sous vide, plating tools. We assess every villa before confirming.' },
  { q: 'Can you cook for guests with dietary restrictions?', a: 'Every course is adaptable. Gluten-free, vegan, halal, shellfish allergy, pregnancy-safe, nut-free — no extra charge. Tell us when booking.' },
  { q: 'Does the price include wine?', a: 'No — wine is optional. Add our sommelier wine pairing at IDR 850,000 per person, or bring your own bottles and we will open and serve them.' },
  { q: 'What is "++" in the pricing?', a: '"++" means 10% service charge and 11% government tax are added. So IDR 2,200,000++ equals approximately IDR 2,640,000 per person all-in.' },
]

export default function PrivateChefBaliPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>('.pcb-reveal').forEach((el) => {
        gsap.fromTo(el, { y: 35, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Private Chef Bali | Michelin-Trained Villa Dining — myCHEF"
        description="Hire a private chef for your Bali villa from IDR 2,200,000 per person. Ingredients included, 560+ villas served, 12,000+ guests, all Bali areas covered."
        canonical={`${SITE}/fine-dining/private-chef-bali`}
        ogImage={`${SITE}/generated/luna-hero-v2.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema(
            'Private Chef Bali',
            'Hire a Michelin-trained private chef for your Bali villa. myCHEF serves all villa areas across Bali including Seminyak, Canggu, Ubud, Uluwatu, and Nusa Dua. From IDR 2,200,000 per person including all groceries, table service, and kitchen cleanup.',
            `${SITE}/fine-dining/private-chef-bali`
          ),
          offerSchema('Private Chef Bali — Mediterranean Sea', 2200000, 'IDR', `${SITE}/fine-dining/private-chef-bali`),
          offerSchema('Private Chef Bali — Wagyu Experience', 2400000, 'IDR', `${SITE}/fine-dining/private-chef-bali`),
          aggregateRatingSchema(4.9, 560),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Private Chef Bali', `${SITE}/fine-dining/private-chef-bali`, 'Fine Dining', `${SITE}/fine-dining`),
        ]}
      />


      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/luna-hero-v2.webp"
            alt="Michelin-trained private chef preparing dinner in a Bali villa — myCHEF"
            width={1920} height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.25) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Breadcrumb items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Private Chef Bali' }]} theme="dark" className="py-6" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            myCHEF.id · Private Chef Service · Bali
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Michelin-Trained Private Chef.<br />
            <span className="italic">At Your Space.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-3 max-w-2xl mx-auto leading-relaxed">
            We arrive at your villa 3 hours early. We cook, serve every course, and leave your kitchen spotless.
          </p>
          <p className="text-white/[55%] text-sm mb-10 tracking-wide">
            From IDR 2,200,000 per person · All ingredients included · Bali-wide service
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="private-chef-bali-hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </a>
            <Link
              to="/menus"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              Browse Menus <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Michelin-trained chef team</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> All groceries included</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full cleanup after dinner</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ══════════════════════════════════ THE EXPERIENCE ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="pcb-reveal">
            <img
              src="/generated/luna-table.webp"
              alt="Private chef dinner table in a Bali villa — elegant setting, myCHEF"
              width={800} height={600} loading="lazy" decoding="async"
              className="w-full h-auto object-cover rounded-[20px]" />
          </div>
          <div className="pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What This Is
            </p>
            <h2 className="text-white text-3xl md:text-4xl mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              No other table.<br />No other guests.
            </h2>
            <p className="text-white/[70%] text-base leading-relaxed mb-6">
              Just your space, your people, and a chef who trained for a decade in Michelin kitchens in Milan and Modena. The menu is Italian in technique, Balinese in setting — adapted to your preferences, your dietary needs, and the season.
            </p>
            <p className="text-white/[70%] text-base leading-relaxed mb-8">
              We bring the kitchen to you. The team arrives 3 hours before your first course — setting the table, preparing the mise en place, sourcing that morning's freshest catch. You arrive to a table already set.
            </p>
            <Link to="/fine-dining" className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              See the full fine dining experience <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ HOW IT WORKS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Simple Process
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="pcb-reveal">
                <p className="text-5xl font-light text-[#C5A028] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.step}</p>
                <h3 className="text-lg mb-3 font-medium">{item.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ THE TWO MENUS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Two Menus
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>Choose Your Dinner</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {MENUS.map((menu) => (
              <div key={menu.id} className="pcb-reveal rounded-[28px] overflow-hidden border border-[#E5E3E0]">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={menu.image} alt={menu.name} width={800} height={450} loading="lazy" decoding="async"
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.3em] mb-2 font-semibold" style={{ color: menu.accent, fontFamily: "'Cormorant Garamond', serif" }}>
                    {menu.tagline}
                  </p>
                  <h3 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.name}</h3>
                  <p className="text-[#C5A028] font-semibold mb-5">{menu.price}</p>
                  <ul className="space-y-2 mb-7">
                    {menu.courses.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[#4A4745]">
                        <span className="text-[#C5A028] flex-shrink-0">—</span>
                        <span className="italic">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/fine-dining" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5" style={{ color: menu.accent }}>
                    See full experience <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ ADRIANO'S STORY ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="pcb-reveal order-2 md:order-1">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Founder
            </p>
            <h2 className="text-white text-3xl md:text-4xl mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              He left Italy with a knife, a notebook, and a decade in Michelin kitchens.
            </h2>
            <p className="text-white/[70%] text-base leading-relaxed mb-4">
              Adriano trained under a Michelin-starred chef in Milan. He worked in Modena, staged in Tokyo, and opened in Bali not to build a restaurant — but to take restaurant-quality technique directly into the homes of people who deserved it.
            </p>
            <p className="text-white/[70%] text-base leading-relaxed mb-8">
              He still leads every tasting menu, every Chef's Table, and every training session for the team of 50+ Indonesian hospitality professionals he has built.
            </p>
            <Link to="/chefs" className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              Meet all our chefs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="pcb-reveal order-1 md:order-2">
            <img
              src="/generated/mychef-finedining-bali-luna-chef-portrait.webp"
              alt="Adriano — myCHEF executive chef, Michelin-trained, Bali private dining"
              width={800} height={1000} loading="lazy" decoding="async"
              className="w-full h-auto object-cover rounded-[20px]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ WHAT'S INCLUDED ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Everything Included
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {INCLUDED.map((item) => (
              <div key={item.label} className="pcb-reveal rounded-[20px] bg-white border border-[#E5E3E0] p-7">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-base mb-2">{item.label}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ WHERE WE COOK ══════════════════════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center pcb-reveal">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Where We Cook
          </p>
          <h2 className="text-2xl md:text-3xl mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bali-Wide. Your Villa.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {LOCATIONS.map((loc) => (
              <span key={loc} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C5A028]/30 text-sm text-[#1A1A1A]">
                <MapPin className="w-3 h-3 text-[#C5A028]" /> {loc}
              </span>
            ))}
          </div>
          <p className="text-[#4A4745] text-sm">Not listed? Message us — we cover all of Bali.</p>
        </div>
      </section>

      {/* ══════════════════════════════════ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-12 text-center pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              560+ Villas Served
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>What Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="pcb-reveal rounded-[24px] bg-white border border-[#E8E2CF] p-7 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A028] text-[#C5A028]" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-[#4A4745] mt-0.5">{t.location} · {t.event}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ FAQ ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[720px] mx-auto">
          <div className="mb-12 text-center pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ══════════════════════════════════ FINAL CTA ══════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1A1A1A] text-center">
        <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Bali-Wide Private Chef Service
        </p>
        <h2 className="text-white text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to Book Your Private Chef?
        </h2>
        <p className="text-white/[60%] text-lg mb-10 max-w-[540px] mx-auto">
          Tell us your date, villa area, guest count, and menu preference. We confirm availability within 1 hour.
        </p>
        <a
          href={WA_LINK}
          target="_blank" rel="noopener noreferrer"
          data-source="private-chef-bali-final-cta"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
        >
          <MessageCircle className="w-5 h-5" /> Hire a Private Chef — WhatsApp
        </a>
        <p className="text-white/[30%] text-xs mt-6">Replies within 1 hour · No booking fee · Bali-wide</p>
      </section>

      <section className="py-10 px-6 bg-[#141414]">
        <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: 'Fine Dining Overview', href: '/fine-dining' },
            { label: 'Tasting Menu', href: '/fine-dining/tasting-menu' },
            { label: 'Romantic Dinner', href: '/fine-dining/romantic-dinner' },
            { label: "Chef's Table", href: '/fine-dining/chefs-table' },
            { label: 'Our Menus', href: '/menus' },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="text-white/[40%] text-sm hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
