import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Heart, Star, Flower2, Camera, Music2, Wine, ChevronRight, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
  serviceWithAggregateOfferSchema,
  howToSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { ArticleContentSection, Breadcrumb } from '@/components/shared'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'a romantic dinner in Bali', intent: 'pricing and availability' })

const MEDITERRANEAN_COURSES = [
  { act: 'Amuse', name: 'Welcome Bite', desc: "Chef's arrival greeting — a single, perfect bite prepared in your kitchen." },
  { act: 'I', name: 'Passione di Dentice', desc: 'Red snapper carpaccio · passion fruit sauce · basil gelato · sea salt' },
  { act: 'II', name: 'Burrata', desc: 'House burrata stuffed with prawn mousse · giardiniera · cold-pressed olive oil' },
  { act: 'III', name: 'Lobster Tagliatelle', desc: 'Handmade tagliatelle · lobster sauce · cherry tomatoes · fresh basil · rolled that afternoon' },
  { act: 'IV', name: 'Barramundi and the Sea', desc: 'Barramundi roll · clams · Mediterranean sauce · green beans · lemon oil' },
  { act: 'V', name: 'Tiramisu', desc: 'House-made lady fingers · mascarpone cream · Illy espresso · dark cocoa' },
]

const SPECIAL_TOUCHES = [
  { icon: Flower2, label: 'Fresh Tropical Flowers', price: '+IDR 350,000', desc: 'Seasonal arrangement placed on the table before you arrive.' },
  { icon: Wine, label: 'Champagne on Arrival', price: '+IDR 850,000', desc: 'Bottle of sparkling wine or champagne, chilled, opened when you sit.' },
  { icon: Heart, label: 'Custom Dessert Message', price: '+IDR 150,000', desc: 'Handwritten or plated message on the dessert course.' },
  { icon: Camera, label: 'Villa Photographer 1 Hour', price: '+IDR 1,500,000', desc: 'Professional photographer during the opening and first courses.' },
  { icon: Music2, label: 'Acoustic Musician', price: 'We coordinate', desc: 'Guitarist or violinist for the first 90 minutes. Available on request.' },
  { icon: Sparkles, label: 'Petal Pathway', price: '+IDR 250,000', desc: 'Rose petals along the path to the table and across the table surface.' },
]

const OCCASIONS = [
  'Anniversary', 'Honeymoon', 'Proposal', "Valentine's Night",
  'Birthday Dinner', 'First Night in Bali', 'Babymoon', 'Just Because',
]

const TESTIMONIALS = [
  {
    name: 'James & Sarah',
    location: 'Seminyak clifftop villa',
    eventType: 'Anniversary Dinner',
    date: 'February 2026',
    quote: 'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.',
    rating: 5,
  },
  {
    name: 'Olivia · Seminyak',
    location: 'Seminyak villa',
    eventType: 'Private dinner for 2',
    date: 'February 2026',
    quote: 'Chef Bayu adjusted the menu for my partner\'s dietary needs without making it feel like a compromise. The snapper, the tiramisu, the way they left the kitchen spotless — unbelievably polished.',
    rating: 5,
  },
  {
    name: 'The Harrisons',
    location: 'Ubud jungle estate',
    eventType: 'Honeymoon Dinner',
    date: 'January 2026',
    quote: 'Our honeymoon dinner under the stars in a Balinese garden. It felt like we had stepped into another world. Every course was a revelation.',
    rating: 5,
  },
]

const FAQS = [
  { q: 'Is 2 guests the minimum?', a: 'Yes — romantic dinners are designed for 2. For intimate group dinners of 4–12, we run the same fine dining menu as a private villa experience. Message us for details.' },
  { q: 'Can you arrange a surprise setup?', a: 'Absolutely. Tell us when the villa is empty and we arrive, set the table, and everything is ready before your partner walks out. We coordinate with villa reception.' },
  { q: 'Can I propose during the dinner?', a: 'We have set up proposals before. Tell us your plan and we will coordinate the timing, the champagne moment, and keep the photographer ready for the right second.' },
  { q: 'What if I want the Wagyu menu instead?', a: 'Both tasting menus are available. Mediterranean Sea is our most romantic menu — lighter, seafood-forward, beautiful plating. Wagyu is heavier and more dramatic. We recommend Mediterranean for most couples, Wagyu if your partner loves beef.' },
  { q: 'How far in advance should I book?', a: '3–7 days is ideal. For peak season (July–August, December–January) or if you want Adriano specifically, 2+ weeks is better. We can sometimes accommodate 48-hour requests — message us.' },
  { q: 'What time does the team arrive?', a: 'Typically 3 hours before your service time. They prepare, set the table, and will be invisible in the kitchen by the time you sit down.' },
  { q: 'What is included in the price?', a: 'Chef and kitchen team, all premium ingredients (grocery sourced same-day), table linens and candles, service staff, full kitchen cleanup. Flowers, champagne, photographer, and musician are optional add-ons.' },
  { q: 'Can you accommodate allergies?', a: 'Yes — every course is adaptable. Gluten-free, shellfish allergy, pregnancy-friendly, vegan, halal — no extra charge. Tell us when booking and we plan the menu around you.' },
]

export default function RomanticDinnerPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.romantic-reveal', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.romantic-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Romantic Dinner Bali Villa | Private Chef Date Night — myCHEF"
        description="Book a romantic dinner in your Bali villa: private chef, candlelit setup, 5-course menu, flowers & champagne optional. From IDR 2.2M/pp. WhatsApp us."
        canonical={`${SITE}/fine-dining/romantic-dinner`}
        ogImage={`${SITE}/generated/section-romantic-dinner.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Romantic Private Dinner Bali',
            description: 'A private candlelit villa dinner in Bali for two — Michelin-trained chef, five-course tasting menu, table setting, flowers on request, and full cleanup. myCHEF.id serves romantic dinners across Seminyak, Canggu, Ubud, Uluwatu, and all Bali villa areas.',
            url: `${SITE}/fine-dining/romantic-dinner`,
            lowPrice: '2200000',
            highPrice: '2400000',
          }),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Romantic Dinner Bali', `${SITE}/fine-dining/romantic-dinner`, 'Fine Dining', `${SITE}/fine-dining`),
          howToSchema({
            name: 'How to Book a Romantic Dinner in Bali',
            description: 'Simple 3-step process to book a private romantic dinner with myCHEF in your Bali villa.',
            steps: [
              { name: 'Choose Your Date & Villa', text: 'Pick your preferred evening and confirm your villa address. We serve across Seminyak, Canggu, Ubud, Uluwatu, and all Bali areas.' },
              { name: 'Select Your Menu', text: 'Choose between our Mediterranean Sea menu or Wagyu-focused menu. Both are 5-course tasting experiences prepared by a Michelin-trained chef.' },
              { name: 'Chef Arrives & Prepares', text: 'Your chef arrives 3 hours before service with all ingredients, prepares the meal in your villa kitchen, and leaves everything spotless.' },
            ],
          }),
        ]}
      />


      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-misc-bali-section-romantic-dinner.webp"
            alt="Candlelit romantic dinner table in a Bali villa at dusk with flowers and wine"
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
          <Breadcrumb items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Romantic Dinner' }]} theme="dark" className="py-6" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            For Two · Romantic Dinner Bali
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Romantic Dinner Bali<br />
            <span className="italic">Built for Two</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto leading-relaxed">
            Romantic dinner Bali means no other table, no other guests — a candlelit setting in your own villa, five Michelin-trained courses, and a team that becomes invisible the moment you sit down. For larger at-home evenings see{' '}
            <Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline">private dining</Link>.
          </p>
          <p className="text-white/[60%] text-sm mb-10 tracking-wide">
            From IDR 2,200,000 per person · Table setting included · Flowers on request · Bali-wide — <a href="/pricing" className="text-[#C5A028] hover:underline">see full pricing</a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="romantic-dinner-hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Plan Our Romantic Dinner
            </a>
            <Link
              to="/fine-dining"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              See the Full Experience <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Michelin-trained chef</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Table setting + candles included</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full kitchen cleanup</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ══════════════════════════════════ RESTAURANT VS VILLA ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-center text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Why Villa Beats Every Restaurant
          </p>
          <h2 className="text-center text-white text-3xl md:text-5xl mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            The best romantic dinner in Bali<br /><span className="italic">is not in a restaurant.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[24px] border border-white/10 p-8">
              <p className="text-white/[40%] text-xs uppercase tracking-[0.3em] mb-6 font-semibold">The restaurant</p>
              <ul className="space-y-4 text-white/[65%] text-sm leading-relaxed">
                {[
                  'Other couples at the next table — they can hear everything',
                  'Kitchen noise, rushed service, tight timing',
                  'Menu chosen by a chef who has never met you',
                  'A taxi back. The mood breaks.',
                  'No flexibility for allergies or preferences',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-white/[25%] text-lg leading-none">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#C5A028]/30 bg-[#C5A028]/5 p-8">
              <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] mb-6 font-semibold">Your villa</p>
              <ul className="space-y-4 text-white/[85%] text-sm leading-relaxed">
                {[
                  'Your table only — the entire dining space is yours',
                  'The pace is yours. Courses arrive when you are ready.',
                  'Menu built around your preferences before we arrive',
                  'The evening ends where you are. No taxi, no interruption.',
                  'Every dietary need accommodated, no extra charge',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 w-4 h-4 text-[#C5A028] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-white/[50%] text-sm mt-10 italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>
            "The privacy, the pacing, the fact that the chef was cooking three meters from our table — my partner still talks about it."
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ TABLE SETUP EDITORIAL ══════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-end">
        <img
          src="/generated/mychef-experience-bali-luna-table.webp"
          alt="Candlelit private dining table set for two in a Bali villa with white linens and flowers"
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
            <span className="italic text-white/[75%]">When you walk out, the table is already set.</span>
          </h2>
          <p className="text-white/[70%] text-base md:text-lg max-w-[640px]">
            White linens, candles lit, flowers placed, wine breathing. Your chef is quietly working in the kitchen. You do nothing except arrive to it.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════ THE MENU ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8] romantic-content">
        <div className="max-w-[960px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Menu for the Evening
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Mediterranean Sea Experience
            </h2>
            <p className="text-[#4A4745] max-w-[560px] mx-auto text-base leading-relaxed">
              The coast Adriano grew up on, in five movements. Our most romantic menu — light, beautifully plated, and built around the sea. The pasta is rolled in your kitchen the afternoon of your dinner.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {MEDITERRANEAN_COURSES.map((course, i) => (
              <div key={i} className="romantic-reveal flex items-start gap-6 py-6 border-b border-[#1A1A1A]/10 last:border-0">
                <div className="w-16 flex-shrink-0 text-center">
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
              <p className="text-white/[50%] text-xs uppercase tracking-[0.3em] mb-2">Price per person</p>
              <p className="text-white text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>IDR 2,200,000 <span className="text-white/[50%] text-lg">++</span></p>
              <p className="text-white/[50%] text-xs mt-1">Wagyu Experience also available at IDR 2,400,000++</p>
            </div>
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="romantic-dinner-menu-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Book This Menu
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ SPECIAL TOUCHES ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Make It Unforgettable
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Special Touches
            </h2>
            <p className="text-[#4A4745] max-w-[520px] mx-auto">
              Add any of these when you message us. We handle all of them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIAL_TOUCHES.map((touch) => (
              <div key={touch.label} className="romantic-reveal rounded-[20px] border border-[#E5E3E0] p-6 hover:border-[#C5A028]/40 transition-all">
                <touch.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="font-semibold text-[#1A1A1A] mb-1">{touch.label}</h3>
                <p className="text-[#C5A028] text-sm font-medium mb-2">{touch.price}</p>
                <p className="text-[#4A4745] text-sm leading-relaxed">{touch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ OCCASIONS ══════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We Build This For
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {OCCASIONS.map((occ) => (
              <span
                key={occ}
                className="px-5 py-2.5 rounded-full border border-[#1A1A1A]/15 text-sm text-[#1A1A1A] font-medium hover:border-[#C5A028] hover:text-[#8B6F1A] transition-all cursor-default"
              >
                {occ}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ GALLERY ══════════════════════════════════ */}
      <section className="py-4 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/generated/mychef-events-bali-anniversary-romantic.webp', alt: 'Romantic anniversary dinner in Bali villa' },
              { src: '/generated/mychef-experience-bali-luna-detail.webp', alt: 'Elegant plated dish from myCHEF private dining' },
              { src: '/generated/luna-dessert.webp', alt: 'Tiramisu dessert from private villa dinner' },
              { src: '/generated/mychef-experience-bali-luna-wine.webp', alt: 'Wine pairing for romantic villa dinner Bali' },
            ].map((img) => (
              <div key={img.src} className="aspect-square overflow-hidden rounded-[16px]">
                <img
                  src={img.src} alt={img.alt}
                  width={600} height={600}
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ HOW TO PLAN ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[960px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Three Steps
            </p>
            <h2 className="text-white text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              How to Plan Your Romantic Dinner
            </h2>
            <p className="text-white/[50%] text-sm mt-4">
              Explore our <Link to="/fine-dining" className="text-[#C5A028] hover:underline">full fine dining menu</Link>, <Link to="/fine-dining/menus" className="text-[#C5A028] hover:underline">signature set menus</Link>, or <Link to="/chefs" className="text-[#C5A028] hover:underline">meet our chefs</Link>. Planning a proposal? See our <Link to="/proposal-dinner" className="text-[#C5A028] hover:underline">proposal dinner</Link> options, or book a <Link to="/private-chef/uluwatu" className="text-[#C5A028] hover:underline">private chef in Uluwatu</Link>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Message Sofia on WhatsApp',
                desc: 'Tell us your date, villa area, and the occasion. She replies within the hour.',
              },
              {
                n: '02',
                title: 'We Propose the Evening',
                desc: 'We suggest the menu, any special touches, and confirm availability and pricing.',
              },
              {
                n: '03',
                title: 'You Just Arrive',
                desc: 'We handle everything else — setup, cooking, service, cleanup. You enjoy.',
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <p className="text-[#C5A028] text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{step.n}</p>
                <h3 className="text-white text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-white/[60%] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              data-source="romantic-dinner-howitworks-cta"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Start Planning
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What Guests Say
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              560+ events · 500+ villa bookings
            </h2>
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

      {/* ══════════════════════════════════ PRICING ══════════════════════════════════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            What's Included
          </h2>
          <div className="rounded-[28px] border border-[#E5D9B5] p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Michelin-trained chef + kitchen team',
                'All premium ingredients (grocery included)',
                'Table linens, candles, and glassware',
                'Full service during the meal',
                'Kitchen cleanup before we leave',
                'Dietary customization — no extra charge',
                'Wine pairing available +IDR 850,000/person',
                'Optional add-ons: flowers, champagne, photographer',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#E5D9B5] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Starting from</p>
                <p className="text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  IDR 2,200,000 <span className="text-[#4A4745] text-lg">++ / person</span>
                </p>
                <p className="text-xs text-[#4A4745] mt-1">Minimum 2 guests · Maximum 12 guests</p>
              </div>
              <a
                href={WA_LINK}
                target="_blank" rel="noopener noreferrer"
                data-source="romantic-dinner-pricing-cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
              >
                <MessageCircle className="w-4 h-4" /> Get a Quote
              </a>
            </div>
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
          alt="Romantic private fine dining table set for two in a Bali villa"
          width={1920} height={800}
          loading="lazy" decoding="async"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60" />
        <div className="relative z-10 text-center max-w-[720px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ready When You Are
          </p>
          <h2 className="text-white text-4xl md:text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Build Your Perfect Evening
          </h2>
          <p className="text-white/[70%] text-lg mb-10 leading-relaxed">
            Tell us your date, your villa, and the occasion.<br />We handle everything else.
          </p>
          <a
            href={WA_LINK}
            target="_blank" rel="noopener noreferrer"
            data-source="romantic-dinner-final-cta"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
          >
            <MessageCircle className="w-5 h-5" /> Message Sofia on WhatsApp
          </a>
          <p className="text-white/[40%] text-xs mt-6">Replies within 1 hour · No booking fee · Free consultation</p>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 px-6 bg-[#1A1A1A]">
        <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: 'Fine Dining Overview', href: '/fine-dining' },
            { label: 'Tasting Menu', href: '/fine-dining/tasting-menu' },
            { label: "Chef's Table", href: '/fine-dining/chefs-table' },
            { label: 'Our Menus', href: '/fine-dining/menus' },
            { label: 'Our Chefs', href: '/fine-dining/our-chefs' },
            { label: 'Proposal Dinner', href: '/proposal-dinner' },
            { label: 'Private Chef Uluwatu', href: '/private-chef/uluwatu' },
            { label: 'Pricing', href: '/pricing' },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="text-white/[50%] text-sm hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="romantic-dinner"
        serviceName="romantic dinner in Bali"
        intent="dinner packages and pricing"
      />
    </div>
  )
}