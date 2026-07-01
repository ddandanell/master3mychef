import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, Utensils, Star, MessageCircle, Phone, ShoppingBag, Sparkles } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceSchema, aggregateRatingSchema } from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import FAQAccordion from '@/components/catering/FAQAccordion'

const HOW_IT_WORKS = [
  { step: '01', title: 'Message Daniel on WhatsApp', desc: 'Tell us your villa, dates, and how many people. Most replies within the hour.', icon: MessageCircle },
  { step: '02', title: 'We Design Your Meal Plan', desc: 'Menus tailored to your preferences, dietary needs, and schedule. You approve everything.', icon: Utensils },
  { step: '03', title: 'Chef Shops & Cooks Fresh', desc: 'Groceries sourced that morning. Chef arrives, cooks, serves, and handles everything.', icon: ShoppingBag },
  { step: '04', title: 'You Relax. We Clean.', desc: 'No grocery runs. No dishes. No planning. Just great food, every day of your stay.', icon: Sparkles },
]

const WHATS_INCLUDED = [
  'Private villa chef (dedicated to your villa)',
  'Full grocery shopping & ingredient sourcing',
  'Breakfast, lunch & dinner preparation',
  'Table service & presentation',
  'Full kitchen cleanup after every meal',
  'Menu planning based on your preferences',
  'Dietary customization at no extra cost',
  'Fresh, local ingredients + premium imports',
]

const MEAL_PLANS = [
  { name: 'Breakfast Only', price: 'IDR 600K', period: '/hour', desc: 'Fresh tropical fruits, pastries, eggs any style, Balinese coffee' },
  { name: 'Half Board', price: 'IDR 1.1M', period: '/hour', desc: 'Breakfast + dinner. Perfect for families who lunch out.' },
  { name: 'Full Board', price: 'IDR 1.5M', period: '/hour', desc: 'Breakfast, lunch, and dinner. The complete villa experience.' },
  { name: 'Custom', price: 'Quote', period: '', desc: 'Special occasions, dietary programs, or extended stays.' },
]

const FAQS = [
  { q: 'What does the hourly rate include?', a: 'Chef time, cooking, service, and cleanup. Groceries are billed separately at cost — no markup. You see every receipt.' },
  { q: 'How many hours per day do I need?', a: 'Breakfast takes ~2 hours. Dinner ~3 hours. For full board, most families book 6–8 hours per day.' },
  { q: 'Can the chef cook for dietary restrictions?', a: 'Absolutely. Gluten-free, vegan, halal, keto, allergies — our chefs are trained for all dietary needs. No extra charge.' },
  { q: 'Do I need to buy groceries?', a: 'No. Your chef shops for everything and brings receipts. You only pay what the market charges.' },
  { q: 'Will the chef use my kitchen equipment?', a: 'Yes, your kitchen. We bring any specialized tools we need. We have worked in every type of villa kitchen.' },
  { q: 'Can I request specific dishes?', a: 'Of course. Before your stay, Daniel will ask about your favorites, allergies, and must-haves. Every menu is customized.' },
  { q: 'What if I want to eat out one night?', a: 'No problem. You only pay for the days and meals you use. Flexibility is the whole point.' },
  { q: 'How far in advance should I book?', a: '3+ days for villa chef. For peak season (July–August, December), 2+ weeks is recommended.' },
]

const TESTIMONIALS = [
  { name: 'The Chen Family', location: 'Singapore', text: 'Having Daniel as our villa chef changed our entire holiday. The kids looked forward to every meal. We did not cook once, shop once, or clean once. Pure bliss.' },
  { name: 'Marco & Elena', location: 'Milan', text: 'We came for a week and extended to ten days just because of the food. Fresh, healthy, and always surprising. It felt like having a friend who happens to be an incredible chef.' },
]

const RELATED_SERVICES = [
  {
    title: 'Fine Dining in Your Villa',
    desc: 'Michelin-trained chefs for private tasting evenings.',
    href: '/fine-dining',
  },
  {
    title: 'Event Catering',
    desc: 'Weddings, parties, and retreats with full staffing.',
    href: '/events',
  },
  {
    title: 'Villa Hospitality Services',
    desc: 'Butlers, bartenders, and service teams beyond the kitchen.',
    href: '/services',
  },
]

export default function SolPage() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let cancelled = false
    let cleanup: (() => void) | undefined

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)
      const ctx = gsap.context(() => {
        gsap.fromTo('.sol-reveal', { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.sol-content', start: 'top 75%', once: true },
        })
      }, ref)

      cleanup = () => ctx.revert()
    })()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return (
    <div ref={ref} data-universe="sol" className="min-h-screen" style={{ background: '#F5F0E8', color: '#2C2419' }}>
      <SeoHead
        title={getPageMeta('villa-chef').title}
        description={getPageMeta('villa-chef').description}
        canonical={getPageMeta('villa-chef').canonical}
        ogImage={getPageMeta('villa-chef').ogImage}
        jsonLd={[serviceSchema('Villa Chef Bali', getPageMeta('villa-chef').description, getPageMeta('villa-chef').canonical), aggregateRatingSchema(4.9, 320), breadcrumbSchema('Villa Chef', getPageMeta('villa-chef').canonical), faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a })))]}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-catering-hero.webp"
            alt="Villa chef plating a family-style brunch at a Bali villa, golden morning light"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="sol-hero-label text-white text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Private Villa Dining</p>
          <h1 className="sol-hero-title text-[2.5rem] md:text-7xl lg:text-8xl leading-[1.05] text-white mb-6 " style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Private Chef<br /><span className="italic">for Everyday Villa Dining</span>
          </h1>
          <p className="sol-hero-sub text-lg md:text-xl text-white/[80%] mb-8 max-w-3xl mx-auto">
            This page is for couples, families, and villa guests who want breakfast, lunch, or dinner cooked in their villa. Best for 1–4 guests and longer stays — not parties, weddings, or large catered events.
          </p>
          <div className="sol-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/628113803488" target="_blank" rel="noopener noreferrer" data-source="sol-hero" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Message myCHEF
            </a>
            <Link to="/catering" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              Planning a Group Event?
            </Link>
          </div>
          <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-white/15 bg-black/25 p-5 md:p-6 text-left backdrop-blur-sm">
            <p className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Not sure which service?
            </p>
            <p className="text-sm md:text-base text-white/[85%] leading-relaxed mb-4">
              Choose <span className="font-semibold text-white">Private Villa Dining</span> if you want a chef dedicated to your villa stay, daily meals, or an intimate dinner at home. Choose Events & Catering if you are hosting 5+ guests, a celebration, or need buffet, BBQ, plated service, or wedding-style setup.
            </p>
            <Link to="/catering" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              View Events & Catering →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="sol-content py-24 md:py-32 px-6 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Process</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
            <p style={{ color: '#8A7B6B' }}>Four steps. Zero grocery runs. Zero cleanup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="sol-reveal text-center p-6 rounded-2xl bg-white shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#6B8E5A]" />
                </div>
                <span className="text-[#6B8E5A] text-xs tracking-[0.2em] uppercase mb-2 block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Step {item.step}</span>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8A7B6B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://wa.me/628113803488" target="_blank" rel="noopener noreferrer" data-source="sol-howitworks" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section id="plans" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Pricing</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Meal Plans</h2>
            <p style={{ color: '#8A7B6B' }}>Per hour, per chef. Groceries billed at cost — no markup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEAL_PLANS.map((plan, i) => (
              <div key={plan.name} className={`p-8 rounded-2xl border transition-all hover:shadow-lg ${i === 2 ? 'border-[#6B8E5A] bg-[#6B8E5A]/5' : 'border-[#E5E0D8]'}`}>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-medium" style={{ color: '#2C2419' }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: '#8A7B6B' }}>{plan.period}</span>
                </div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: '#8A7B6B' }}>{plan.desc}</p>
                <a
                  href={`#book?plan=${encodeURIComponent(plan.name)}`}
                  onClick={() => {
                    // Pre-fill the booking form's meal plan field then scroll
                    const target = document.querySelector('#book select[name="mealPlan"], #book select') as HTMLSelectElement | null
                    if (target) {
                      const match = Array.from(target.options).find((o) => o.text.toLowerCase().includes(plan.name.toLowerCase()))
                      if (match) {
                        target.value = match.value || match.text
                        target.dispatchEvent(new Event('change', { bubbles: true }))
                      }
                    }
                    // The default anchor jump will handle scroll
                  }}
                  className="block text-center py-3 rounded-xl text-sm font-medium tracking-wider uppercase transition-all hover:scale-[1.02]"
                  style={{ background: i === 2 ? '#6B8E5A' : '#F5F0E8', color: i === 2 ? '#FFFFFF' : '#2C2419' }}
                >
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything Included</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <p style={{ color: '#8A7B6B' }}>One hourly rate. Everything handled. You just show up hungry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E5E0D8]">
                <Check className="w-5 h-5 text-[#6B8E5A] flex-shrink-0" />
                <span className="text-sm" style={{ color: '#2C2419' }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/628113803488" target="_blank" rel="noopener noreferrer" data-source="sol-pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Book Your Chef
            </a>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section id="team" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-[75%] mx-auto">
              <img
                src="/generated/mychef-finedining-bali-sol-chef-portrait.webp"
                alt="Chef Daniel"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
            </div>
            <div>
              <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Chef</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Chef <span className="italic">Daniel</span></h2>
              <div className="w-12 h-[2px] bg-[#6B8E5A] mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: '#8A7B6B' }}>
                Daniel has been a private villa chef in Bali for 12 years. He knows every market, every villa kitchen, and exactly how to make a family feel at home.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: '#8A7B6B' }}>
                His team of 6 rotating chefs covers Seminyak, Canggu, Ubud, Uluwatu, and Sanur. Every chef is trained in hygiene, presentation, and the art of invisible service.
              </p>
              <div className="space-y-3">
                {['12 years villa chef experience', '6-chef rotating team', 'All dietary requirements accommodated', 'Groceries sourced fresh daily'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#6B8E5A]" />
                    <span className="text-sm" style={{ color: '#2C2419' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { slug: 'sol-breakfast', alt: 'Private villa chef breakfast spread in a Bali villa' },
              { slug: 'sol-lunch', alt: 'Bali villa catering lunch table served by a private chef' },
              { slug: 'sol-sunset', alt: 'Sunset villa dining set up by myCHEF in Bali' },
              { slug: 'sol-bbq', alt: 'Poolside BBQ catering in a private Bali villa' },
            ].map((img) => (
              <div key={img.slug} className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={`/generated/${img.slug}.webp`}
                  alt={img.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Guest Stories</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>Families Who Never<br />Want to Leave</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl border border-[#E5E0D8]">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-[#6B8E5A] text-[#6B8E5A]" />)}
                </div>
                <p className="mb-6 leading-relaxed italic" style={{ color: '#2C2419' }}>"{t.text}"</p>
                <p className="text-sm" style={{ color: '#8A7B6B' }}>{t.name}, {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
            <p style={{ color: '#8A7B6B' }}>Still unsure? Message Daniel on WhatsApp — he responds within the hour.</p>
          </div>
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
          <div className="text-center mt-12">
            <a href="https://wa.me/628113803488" target="_blank" rel="noopener noreferrer" data-source="sol-testimonials" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Ask Daniel on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Book</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Start Your<br />Effortless Stay</h2>
              <div className="w-12 h-[2px] bg-[#6B8E5A] mb-8" />
              <p className="mb-8 leading-relaxed" style={{ color: '#8A7B6B' }}>
                Daniel will match you with the perfect chef for your villa and dates. Most bookings confirmed within 2 hours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Breakfast Only', price: 'IDR 600K / hour' },
                  { label: 'Half Board', price: 'IDR 1.1M / hour' },
                  { label: 'Full Board', price: 'IDR 1.5M / hour' },
                ].map((p) => (
                  <div key={p.label} className="flex items-center justify-between py-3 border-b border-[#E5E0D8]">
                    <span style={{ color: '#2C2419' }}>{p.label}</span>
                    <span className="font-medium" style={{ color: '#6B8E5A' }}>{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mb-6" style={{ color: '#8A7B6B' }}>
                * Groceries billed at cost — no markup. Minimum 4-hour booking. Service charge included.
              </p>
              <a href="https://wa.me/628113803488" target="_blank" rel="noopener noreferrer" data-source="sol-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                <Phone className="w-4 h-4" /> Book via WhatsApp
              </a>
            </div>
            <div className="p-8 rounded-2xl border border-[#E5E0D8] bg-white">
              <BookingForm universe="sol" compact />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Complete Your Stay</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
            <p style={{ color: '#8A7B6B' }} className="max-w-2xl mx-auto">Private dinners, event teams, and hospitality staff when your stay needs more than daily meals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_SERVICES.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-2xl border border-[#E5E0D8] bg-white p-6 transition-all duration-200 hover:border-[#6B8E5A] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
              >
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#8A7B6B' }}>{item.desc}</p>
                <span className="text-[#6B8E5A] text-xs uppercase tracking-[0.25em]">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
