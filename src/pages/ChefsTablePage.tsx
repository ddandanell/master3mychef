import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ChevronRight, Star, Lock, Clock, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
  serviceWithOfferSchema,
  howToSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: "the Chef's Table experience in Bali", intent: 'availability and pricing' })

const TIMELINE = [
  { time: '17:00', event: 'Team arrives', note: 'Kitchen assessment, equipment setup, counter arrangement.' },
  { time: '18:00', event: 'Counter set. Introductions.', note: 'Adriano presents the evening\'s ingredients and the market selection of the day.' },
  { time: '18:30', event: 'Aperitif. First amuse.', note: 'Franciacorta poured at the counter. Adriano explains the technique for the evening.' },
  { time: '19:00', event: 'First course begins.', note: 'Seven courses with commentary. Q&A is encouraged between each.' },
  { time: '21:30', event: 'Digestif at the counter.', note: 'The kitchen is yours for 15 minutes. Ask anything.' },
  { time: '22:00', event: 'Team departs.', note: 'Villa immaculate. You have the evening.' },
]

const MENU_FRAMEWORK = [
  { num: '01', course: 'Cold Opens (×2)', desc: 'Market-driven. What Adriano finds in the morning shapes what arrives first. Two precision bites.' },
  { num: '02', course: 'The Pasta', desc: 'Handmade that afternoon. One serving — enough to say what needs to be said.' },
  { num: '03', course: 'The Protein', desc: 'The centrepiece. The technique made visible. Adriano explains the decision: temperature, flame, rest.' },
  { num: '04', course: 'Pre-Dessert', desc: 'The bridge. Acidic, light, a signal to the palate that the evening is turning.' },
  { num: '05', course: 'Dessert', desc: 'Restrained. Always earned. Never too sweet.' },
  { num: '06', course: 'Petit Fours', desc: 'One or two. House-made. The period at the end of the sentence.' },
]

const REQUIREMENTS = [
  'Kitchen with counter space for 6 — or an island we can arrange stools at',
  'Access for the team 4 hours before service',
  'Maximum 6 guests — this is non-negotiable',
  'Friday or Saturday evenings only (Adriano is on service)',
  '50% deposit to secure the date',
  'Villa assessment call or message prior to confirmation',
]

const TESTIMONIALS = [
  {
    name: 'Marco R.',
    location: 'Milan, Italy',
    quote: "I am Italian. I know what good cooking looks like. Watching Adriano work at the counter, explaining every choice in real time — it was a masterclass. The seven courses were technically perfect. I did not expect to feel this way about a dinner in Bali.",
    rating: 5,
    event: "Chef's Table — 4 guests",
  },
  {
    name: 'Sophie & James',
    location: 'London',
    quote: "We booked the Chef's Table for our 10th anniversary. It was the most considered meal we have ever had — not just the food, but the entire architecture of the evening. Adriano is extraordinary.",
    rating: 5,
    event: "Chef's Table — 2 guests",
  },
  {
    name: 'Michael V.',
    location: 'New York',
    quote: "I have sat at chef's tables at three Michelin-starred restaurants. The intimacy here was different — 6 people, no other tables, a chef who had nothing to hide behind. Genuinely world-class.",
    rating: 5,
    event: "Chef's Table — 6 guests",
  },
]

const FAQS = [
  { q: 'What is the Chef\'s Table experience?', a: 'The Chef\'s Table is myCHEF\'s most exclusive offering — a 7-course market-led menu prepared by Adriano at your villa counter, with live commentary between each course. Maximum 6 guests. Available Friday and Saturday evenings only.' },
  { q: 'Can I request a different chef?', a: 'No. The Chef\'s Table is only available with Adriano. If he is unavailable on your date, we will offer to rebook — not replace him.' },
  { q: 'What does the menu look like?', a: 'The menu is built the morning of your dinner around what Adriano finds at the market. The framework is 7 courses: 2 cold opens, pasta, protein, pre-dessert, dessert, and petit fours. No two evenings are identical. This is by design.' },
  { q: 'Is my villa kitchen suitable?', a: 'We assess every villa before confirming. You need counter space for 6 guests, or an island we can arrange stools around. Kitchen size is less important than seating configuration. Send us photos and we\'ll tell you within an hour.' },
  { q: 'What does "++" mean in IDR 3,500,000++?', a: '"++" adds 10% service charge and 11% government tax. All-in total is approximately IDR 4,165,000 per person.' },
  { q: 'Can we photograph or film the evening?', a: 'Yes — personal photography is welcome throughout. We ask that any commercial use or publication be discussed in advance.' },
  { q: 'How far in advance do I need to book?', a: 'We take 2 Chef\'s Table bookings per weekend. Peak season (July–August, December) books 3+ weeks ahead. Message Sofia as early as possible — availability is genuinely limited.' },
  { q: 'Is wine pairing included?', a: 'Wine pairing is optional at +IDR 1,100,000 per guest (extended pours, 6–7 glasses, matched by course). The Franciacorta aperitif is always included.' },
]

export default function ChefsTablePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>('.ct-reveal').forEach((el) => {
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
        title="Chef's Table Bali | Adriano 7-Course Exclusive Dining — myCHEF"
        description="Book Adriano's Chef's Table in Bali: 7-course market menu, counter seating & live commentary. Max 6 guests. IDR 3.5M/pp. WhatsApp to reserve."
        canonical={`${SITE}/fine-dining/chefs-table`}
        ogImage={`${SITE}/generated/mychef-misc-bali-chefs-table-hero-luxury.webp`}
        jsonLd={[
          serviceWithOfferSchema({
            name: "Chef's Table Bali — Adriano's Private 7-Course Experience",
            description: "The most exclusive myCHEF experience. Counter seating at your Bali villa with Adriano, live 7-course market-led tasting menu with commentary between each course. Maximum 6 guests. Available Friday and Saturday evenings only.",
            url: `${SITE}/fine-dining/chefs-table`,
            price: '3500000',
            unitText: 'per 6 seats',
          }),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema("Chef's Table Bali", `${SITE}/fine-dining/chefs-table`, 'Fine Dining', `${SITE}/fine-dining`),
          howToSchema({
            name: "How to Book Adriano's Chef's Table in Bali",
            description: 'Reserve the most exclusive myCHEF experience: a 7-course market-led menu with live commentary at your villa counter.',
            steps: [
              { name: 'Check Availability', text: "Message Sofia with your preferred Friday or Saturday date. Only 2 Chef's Table evenings happen per weekend — availability is limited." },
              { name: 'Villa Assessment & Menu', text: 'We confirm your villa kitchen is suitable and Adriano builds the 7-course menu around that morning\'s market selection.' },
              { name: 'Deposit & Confirmation', text: 'A 50% deposit secures your date. The remaining balance is settled before the evening. Maximum 6 guests.' },
              { name: 'The Evening Arrives', text: 'Adriano and the team arrive at 17:00. Counter seating, live commentary, 7 courses, and the kitchen is immaculate when they leave.' },
            ],
          }),
        ]}
      />


      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-misc-bali-chefs-table-hero-luxury.webp"
            alt="Fine dining private villa dinner service in Bali with candlelight and wine pairing"
            width={1920} height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.30) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Breadcrumb items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: "Chef's Table" }]} theme="dark" className="py-6" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            By Adriano · Maximum 6 Guests · Bali
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.0] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Chef's Table
          </h1>
          <p className="text-xl md:text-2xl text-white/[75%] mb-3 max-w-2xl mx-auto leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Counter seating. Live narrative. The full technique made visible.
          </p>
          <p className="text-white/[50%] text-sm mb-10 tracking-wide">
            IDR 3,500,000++ per person · Friday & Saturday only · 6 seats maximum
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="chefs-table-hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Check Adriano's Availability
            </a>
            <Link
              to="/fine-dining"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              Full Fine Dining <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[40%] text-xs">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-[#C5A028]" /> Adriano only — no substitutes</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#C5A028]" /> 6 guests maximum</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C5A028]" /> 2 bookings per weekend</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ══════════════════════════════════ WHAT IS DIFFERENT ══════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1A1A1A]">
        <div className="max-w-[800px] mx-auto text-center ct-reveal">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            What Makes This Different
          </p>
          <p className="text-white/[0.85] leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}>
            "At a restaurant, you eat. The chef stays in the kitchen. Here, there is no separation."
          </p>
          <p className="text-white/[60%] text-base leading-relaxed mb-6">
            You sit at the counter. Adriano works in front of you. Every decision — the salt, the flame, the rest — is explained as it happens. This is not theatre. This is how a chef actually works.
          </p>
          <p className="text-white/[40%] text-xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
            Six seats. One chef. One evening.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ THE FORMAT ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 ct-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Evening
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>How the Evening Unfolds</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <div key={i} className="ct-reveal flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-[#C5A028] mt-1.5 flex-shrink-0" />
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-[#E5E3E0] mt-2" />}
                  </div>
                  <div>
                    <p className="text-[#C5A028] text-xs tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.time}
                    </p>
                    <p className="font-medium mb-0.5">{item.event}</p>
                    <p className="text-[#4A4745] text-sm">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ct-reveal">
              <img
                src="/generated/mychef-finedining-bali-luna-chef-portrait.webp"
                alt="Adriano — executive chef at myCHEF private dining, Bali"
                width={700} height={900} loading="lazy" decoding="async"
                className="w-full h-auto rounded-[20px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ THE MENU ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-6 ct-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Seven Courses
            </p>
            <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Menu
            </h2>
          </div>
          <p className="text-center text-white/[55%] text-sm mb-12 max-w-[640px] mx-auto ct-reveal">
            Unlike the two set menus (La Riviera and L&apos;Odyssée), the Chef&apos;s Table menu is built around what Adriano finds at the market that morning. The framework below is fixed. What fills it changes every time.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {MENU_FRAMEWORK.map((item) => (
              <div key={item.num} className="ct-reveal rounded-[20px] border border-white/10 p-7">
                <p className="text-[#C5A028] text-3xl font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.num}</p>
                <h3 className="text-white font-medium text-base mb-2">{item.course}</h3>
                <p className="text-white/[50%] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/[30%] text-xs mt-8 ct-reveal">
            "No two Chef's Table evenings are identical. This is by design."
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ ONLY ADRIANO ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[900px] mx-auto ct-reveal">
          <div className="rounded-[28px] border-2 border-[#C5A028]/30 p-10 md:p-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Non-Negotiable
            </p>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              This Experience Is Only Available With Adriano
            </h2>
            <p className="text-[#4A4745] text-base leading-relaxed mb-4">
              Michelin-trained in Milan. Ten years in restaurants across Italy and Japan before coming to Bali. He still leads every tasting menu, every Chef's Table, and every kitchen training.
            </p>
            <p className="text-[#4A4745] text-base leading-relaxed mb-8">
              If Adriano is unavailable on your date, we will offer to rebook — not replace him. Two of these evenings happen per weekend. That is all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank" rel="noopener noreferrer"
                data-source="chefs-table-adriano-cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
              >
                <MessageCircle className="w-4 h-4" /> Check Adriano's Availability
              </a>
              <Link
                to="/chefs/adriano"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#1A1A1A]/20 text-[#1A1A1A] text-sm tracking-widest uppercase rounded-full hover:bg-[#1A1A1A]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] rounded px-0.5"
              >
                Meet Adriano <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ GALLERY ══════════════════════════════════ */}
      <section className="py-8 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-16">
          {[
            { src: '/generated/luna-flame.webp', alt: 'Open flame cooking — Chef\'s Table Bali' },
            { src: '/generated/mychef-finedining-bali-luna-chef-portrait.webp', alt: 'Adriano — private chef, Bali' },
            { src: '/generated/mychef-finedining-bali-luna-plating.webp', alt: 'Plated fine dining course' },
            { src: '/generated/luna-ingredients.webp', alt: 'Fresh market ingredients for Chef\'s Table' },
          ].map((img) => (
            <div key={img.src} className="aspect-square overflow-hidden rounded-[16px]">
              <img src={img.src} alt={img.alt} width={600} height={600} loading="lazy" decoding="async"
                className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════ PRICING ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-10 ct-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Pricing</h2>
          </div>
          <div className="ct-reveal rounded-[28px] border border-[#C5A028]/30 bg-white p-8 md:p-10">
            <div className="flex flex-col sm:flex-row gap-8 pb-8 border-b border-[#E5D9B5] mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Chef's Table</p>
                <p className="text-4xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>IDR 3,500,000++</p>
                <p className="text-[#4A4745] text-sm mt-1">per guest · ~IDR 4.165M all-in</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Wine Pairing</p>
                <p className="text-4xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>+IDR 1,100,000</p>
                <p className="text-[#4A4745] text-sm mt-1">6–7 pours · paired by course</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {REQUIREMENTS.map((r) => (
                <div key={r} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="chefs-table-pricing-cta"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Inquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-12 text-center ct-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What Guests Say
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              After the Chef's Table
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="ct-reveal rounded-[24px] border border-[#E8E2CF] bg-[#FAFAF8] p-7 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
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
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[720px] mx-auto">
          <div className="mb-12 text-center ct-reveal">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Common Questions</h2>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ══════════════════════════════════ FINAL CTA ══════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1A1A1A] text-center">
        <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Two evenings per week
        </p>
        <h2 className="text-white text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Tell us your date.
        </h2>
        <p className="text-white/[60%] text-lg mb-10 max-w-[500px] mx-auto">
          We take two Chef's Table bookings per weekend. Availability goes fast — especially in peak season.
        </p>
        <a
          href={WA_LINK}
          target="_blank" rel="noopener noreferrer"
          data-source="chefs-table-final-cta"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
        >
          <MessageCircle className="w-5 h-5" /> Check Adriano's Availability
        </a>
        <p className="text-white/[30%] text-xs mt-6">Friday & Saturday evenings · 6 guests maximum · 50% deposit to confirm</p>
      </section>

      <section className="py-10 px-6 bg-[#141414]">
        <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: 'Fine Dining Overview', href: '/fine-dining' },
            { label: 'Tasting Menu', href: '/fine-dining/tasting-menu' },
            { label: 'Our Menus', href: '/fine-dining/menus' },
            { label: 'Our Chefs', href: '/fine-dining/our-chefs' },
            { label: 'Meet Adriano', href: '/chefs/adriano' },
            { label: 'Pricing', href: '/pricing' },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="text-white/[40%] text-sm hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
      <StickyMobileCTA
        pageSource="chefs-table"
        serviceName="chef's table in Bali"
        intent="chef's table experience and pricing"
      />
    </div>
  )
}