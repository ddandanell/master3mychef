import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { hasLocationPage } from '@/data/siteArchitecture'
import { MessageCircle, Check, MapPin, ChevronRight, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema, offerSchema,
  faqPageSchema, detailedServiceSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { siteFacts } from '@/data/siteFacts'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20private%20chef%20fine-dining%20evening.%20Date%3A%20%20Guests%3A%20%20Villa%3A%20'

const HOW_IT_WORKS = [
  { step: '01', title: 'Message the team on WhatsApp', body: 'Date, villa, guest count, menu preference. We reply within 2 hours with a fixed quote.' },
  { step: '02', title: 'Confirm your menu', body: 'A 50% deposit locks your date, your chef, and your arrival plan.' },
  { step: '03', title: 'We arrive three hours early', body: 'The brigade sets the table, preps the kitchen, sources nothing you haven\'t approved.' },
  { step: '04', title: 'You dine. We clean.', body: 'Courses at your pace; the kitchen restored before we leave.' },
]

const MENUS = [
  {
    id: 'mediterranean',
    name: 'Mediterranean Sea',
    price: 'IDR 2,200,000++',
    tagline: 'Five courses from the coast Adriano grew up on. Italian technique, Bali\'s morning catch.',
    accent: '#2C5F7C',
    image: '/generated/mychef-experience-bali-luna-gallery-1.webp',
    courses: [
      'Passione di Dentice — red snapper carpaccio, passion fruit, basil gelato',
      'Burrata — prawn mousse, giardiniera, cold-pressed olive oil',
      'Lobster Tagliatelle — handmade pasta rolled in your kitchen that afternoon, lobster reduction, cherry tomatoes',
      'Barramundi and the Sea — barramundi roll, clams, Mediterranean sauce, green beans',
      'Tiramisu — house-made ladyfingers, mascarpone, Illy espresso, dark cocoa',
    ],
  },
  {
    id: 'wagyu',
    name: 'Wagyu Experience',
    price: 'IDR 2,400,000++',
    tagline: 'Wagyu Tokusen in three forms. Open flame, live in front of your guests.',
    accent: '#8B4513',
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    courses: [
      'My Beef Tartare — Wagyu chuck tender, polenta chips, cured egg, rocket, basil oil',
      'Ravioli di Coda — oxtail ragout, Grana Padano sauce, kale foam',
      'Ribollita — white bean, kale, rosemary, Parmigiano Reggiano',
      'Wagyu Ribeye — Tokusen over open flame, topinambur cream, blue cheese, walnuts',
      'Tenerina Cake — Callebaut 56% chocolate, salted caramel gelato, sea salt',
    ],
  },
]

const INCLUDED = [
  { icon: '👨‍🍳', label: 'Michelin-trained executive chef', desc: 'Plus kitchen and service brigade' },
  { icon: '🛒', label: 'All ingredients', desc: 'Premium suppliers and same-morning market runs' },
  { icon: '🕯️', label: 'Full table setting', desc: 'Linens, glassware, tableware, candles' },
  { icon: '🍷', label: 'Service across every course', desc: 'At your pace, with wine service included' },
  { icon: '🥗', label: 'Dietary adaptation', desc: 'Vegan, halal, gluten-free, allergies — no extra charge' },
  { icon: '✨', label: 'Complete kitchen cleanup', desc: 'Before departure' },
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
  { q: 'Is your chef really Michelin-trained?', a: 'Adriano trained under a Michelin-starred chef in Milan and worked in Michelin-level kitchens in Modena and Tokyo. He trains every myCHEF chef personally for six to twelve months. Bali has no Michelin Guide — we describe training, not stars.' },
  { q: 'What does a Michelin private chef in Bali cost?', a: 'The two signature menus are IDR 2,200,000++ (Mediterranean Sea) and IDR 2,400,000++ (Wagyu Experience) per person, including the full brigade, all ingredients, service and cleanup. The wider set-menu library starts at IDR 1,250,000++ per guest.' },
  { q: 'What is the minimum group size?', a: 'Four guests for the signature menus. For two-person dinners, message us — we arrange them with a small setup premium. See our <a href="/fine-dining/romantic-dinner">romantic dinner for two</a>.' },
  { q: 'What does "++" mean?', a: 'Eleven percent government tax plus ten percent service charge, added to the listed price. IDR 2,200,000++ is approximately IDR 2,662,000 all-in.' },
  { q: 'How far ahead should we book?', a: 'Seven days or more is ideal; July–August and December book out two weeks ahead. We occasionally accommodate 48-hour requests — ask.' },
  { q: 'Which villas do you cover?', a: 'All of Bali — Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur and beyond. Remote locations may carry a small travel allowance, quoted upfront.' },
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
        title="Michelin Private Chef Bali | Fine Dining at Your Villa"
        description="Book a Michelin-trained private chef for your Bali villa. Tasting menus, wine pairing & full chef team. Transparent pricing. WhatsApp myCHEF."
        canonical={`${SITE}/fine-dining/private-chef-bali`}
        ogImage={`${SITE}/generated/mychef-experience-bali-luna-hero-v2.webp`}
        jsonLd={[
          {
            ...detailedServiceSchema(
              'Michelin-Trained Private Chef Bali',
              'A Michelin-trained executive chef and full brigade serve two signature five-course menus — Mediterranean Sea and Wagyu Experience — privately in Bali villas.',
              `${SITE}/fine-dining/private-chef-bali`
            ),
            offers: [
              offerSchema('Mediterranean Sea (5 courses)', 2200000, 'IDR', `${SITE}/fine-dining/private-chef-bali`),
              offerSchema('Wagyu Experience (5 courses)', 2400000, 'IDR', `${SITE}/fine-dining/private-chef-bali`),
            ],
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Michelin Private Chef Bali', `${SITE}/fine-dining/private-chef-bali`, 'Fine Dining', `${SITE}/fine-dining`),
        ]}
      />


      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
              src="/generated/mychef-experience-bali-luna-hero-v2.webp"
            alt="Michelin-trained private chef preparing dinner in a Bali villa — myCHEF"
            width={1920} height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Breadcrumb items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Private Chef Bali' }]} theme="dark" className="py-6" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            myCHEF.id · Michelin-Trained Private Chef · Bali
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Michelin-Trained Private Chef.<br />
            <span className="italic">At Your Villa.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-3 max-w-2xl mx-auto leading-relaxed">
            A full chef brigade arrives at your villa three hours before the first course. Everything is cooked in your kitchen, plated at your table, and cleaned away before you notice. Two signature menus, one fixed standard: the discipline of a decade in Michelin kitchens, delivered privately.
          </p>
          <p className="text-white/[55%] text-sm mb-10 tracking-wide">
            Mediterranean Sea — IDR 2,200,000++ per person · Wagyu Experience — IDR 2,400,000++ per person · Minimum 4 guests · Bali-wide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="private-chef-bali-hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Check Availability with the Fine-Dining Team
            </a>
            <Link
              to="/fine-dining/menus"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              Browse All 24 Set Menus <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Michelin-trained chef team</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> All ingredients included</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full cleanup after dinner</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ══════════════════════════════════ WHAT MICHELIN-TRAINED MEANS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="pcb-reveal">
            <img
              src="/generated/mychef-experience-bali-luna-table.webp"
              alt="Michelin-trained private chef dinner table in a Bali villa — elegant setting, myCHEF"
              width={800} height={600} loading="lazy" decoding="async"
              className="w-full h-auto object-cover rounded-[20px]" />
          </div>
          <div className="pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Standard
            </p>
            <h2 className="text-white text-3xl md:text-4xl mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              What "Michelin-Trained"<br />Means Here
            </h2>
            <p className="text-white/[70%] text-base leading-relaxed mb-6">
              Bali has no Michelin Guide — anyone promising you a "Michelin-starred dinner in Bali" is inventing it. What exists here is Michelin-calibre training, and it is worth being precise about what that means.
            </p>
            <p className="text-white/[70%] text-base leading-relaxed mb-6">
              It means your menu is led by chefs trained inside Michelin-starred kitchens — kitchens where seasoning is measured, sauces are passed, and a plate goes back if it is not exact. It means mise en place done three hours before you sit down, ingredients bought that morning, and a brigade that has cooked the same menu together until the timing is reflex.
            </p>
            <p className="text-white/[70%] text-base leading-relaxed mb-8">
              It is a standard of work, not a sticker. We would rather show it to you than claim it.
            </p>
            <Link to="/fine-dining" className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              See the fine dining collection <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ THE CHEF BEHIND THE STANDARD ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="pcb-reveal order-2 md:order-1">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Chef Behind the Standard
            </p>
            <h2 className="text-[#1A1A1A] text-3xl md:text-4xl mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              He left Italy with a knife, a notebook, and a decade in Michelin kitchens.
            </h2>
            <p className="text-[#4A4745] text-base leading-relaxed mb-4">
              Adriano, myCHEF's founder and executive chef, trained under a Michelin-starred chef in Milan and spent over a decade in fine-dining kitchens across Italy and Japan — including Modena and a formative stage in Tokyo — before moving to Bali.
            </p>
            <p className="text-[#4A4745] text-base leading-relaxed mb-8">
              He did not come to open a restaurant. He came to take restaurant-grade technique out of the dining room and into private villas — and to build a team that could hold his standard without him in the room. Every myCHEF chef trains under him for six to twelve months before leading a booking. He still leads the signature tasting menus, the <Link to="/fine-dining/chefs-table" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">Chef's Table</Link>, and every training session for a team of 50+ Indonesian hospitality professionals.
            </p>
            <Link to="/chefs/adriano" className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              Read Adriano's full profile <ChevronRight className="w-4 h-4" />
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

      {/* ══════════════════════════════════ THE TWO MENUS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Two Menus
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>Two Signature Menus</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {MENUS.map((menu) => (
              <div key={menu.id} className="pcb-reveal rounded-[28px] overflow-hidden border border-[#E5E3E0]">
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
                  <Link to="/fine-dining/menus" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5" style={{ color: menu.accent }}>
                    Browse all 24 set menus <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-[#4A4745] text-sm leading-relaxed max-w-2xl mx-auto pcb-reveal">
            Add sommelier wine pairing at <strong>+IDR 850,000 per guest</strong>, or bring your own bottles and we open and serve them. Both menus adapt fully to dietary needs at no extra charge. Looking for a progression built course-by-course around you? See <Link to="/fine-dining/tasting-menu" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">the five-act tasting menu</Link>.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ HOW AN EVENING WORKS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Simple Process
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>How an Evening Works</h2>
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

      {/* ══════════════════════════════════ WHO BOOKS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[900px] mx-auto text-center pcb-reveal">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Who Books
          </p>
          <h2 className="text-3xl md:text-4xl mb-8 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Who Books a Michelin Private Chef</h2>
          <p className="text-white/[70%] text-base leading-relaxed mb-8">
            Guests who would otherwise book Bali's top restaurants — and want the same standard without the room. Milestone birthdays and anniversaries. Executive dinners where the conversation is private. VIP stays where the villa is the point. And food-focused travellers who want the <Link to="/fine-dining/chefs-table" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">Chef's Table</Link>: six seats, Adriano at the counter, Friday and Saturday only.
          </p>
          <Link to="/fine-dining/our-chefs" className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
            Meet the fine-dining brigade <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════ WHAT'S INCLUDED ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Everything Included
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>What's Included</h2>
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
          <p className="text-center mt-12 text-[#4A4745] text-sm leading-relaxed max-w-2xl mx-auto pcb-reveal">
            "++" adds 11% government tax and 10% service charge — your quote is fixed in writing before you commit. See <Link to="/pricing" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">full pricing</Link> for the wider menu library.
          </p>
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
            {LOCATIONS.filter((loc) => hasLocationPage(loc.toLowerCase().replace(/\s+/g, '-'))).map((loc) => {
              const slug = loc.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={loc}
                  to={`/locations/${slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C5A028]/30 text-sm text-[#1A1A1A] hover:bg-[#C5A028]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  <MapPin className="w-3 h-3 text-[#C5A028]" /> {loc}
                </Link>
              )
            })}
          </div>
          <p className="text-[#4A4745] text-sm">Not listed? Message us — we cover all of Bali.</p>
        </div>
      </section>

      {/* ══════════════════════════════════ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-12 text-center pcb-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {siteFacts.eventsServed}
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
          Book Your Michelin-Trained Chef
        </h2>
        <p className="text-white/[60%] text-lg mb-10 max-w-[540px] mx-auto">
          Tell us your date, villa, and guest count. Availability confirmed within 2 hours — fixed quote, no booking fee, no obligation.
        </p>
        <a
          href={WA_LINK}
          target="_blank" rel="noopener noreferrer"
          data-source="private-chef-bali-final-cta"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
        >
          <MessageCircle className="w-5 h-5" /> Check Availability on WhatsApp
        </a>
        <p className="text-white/[30%] text-xs mt-6">+62 896-7407-2020 · Replies within 2 hours · No booking fee · Bali-wide</p>
      </section>

      <section className="py-10 px-6 bg-[#141414]">
        <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: 'Fine Dining', href: '/fine-dining' },
            { label: 'Our Menus', href: '/fine-dining/menus' },
            { label: 'Tasting Menu', href: '/fine-dining/tasting-menu' },
            { label: "Chef's Table", href: '/fine-dining/chefs-table' },
            { label: 'Our Chefs', href: '/fine-dining/our-chefs' },
            { label: 'Adriano', href: '/chefs/adriano' },
            { label: 'Pricing', href: '/pricing' },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="text-white/[40%] text-sm hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
      <StickyMobileCTA
        pageSource="private-chef-bali"
        serviceType="private-chef"
        label="Check Availability via WhatsApp"
        message="Hi myCHEF, I'd like to check availability for a private chef fine-dining evening. Date:  Guests:  Villa: "
      />
    </div>
  )
}
