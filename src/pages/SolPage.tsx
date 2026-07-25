import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, Utensils, Star, MessageCircle, Phone, ShoppingBag, Sparkles } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceWithAggregateOfferSchema } from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ArticleContentSection } from '@/components/shared'

const HOW_IT_WORKS = [
  { step: '01', title: 'Message Us on WhatsApp', desc: 'Tell us your villa, dates, and how many people. We reply within 2 hours.', icon: MessageCircle },
  { step: '02', title: 'We Design Your Meal Plan', desc: 'Menus tailored to your preferences, dietary needs, and schedule. You approve everything.', icon: Utensils },
  { step: '03', title: 'Chef Shops & Cooks Fresh', desc: 'Groceries sourced that morning. Chef arrives, cooks, serves, and handles everything.', icon: ShoppingBag },
  { step: '04', title: 'You Relax. We Clean.', desc: 'No grocery runs. No dishes. No planning. Just great food, every day of your stay.', icon: Sparkles },
]

const WHATS_INCLUDED = [
  'Professional chef + dedicated assistant (every booking)',
  'Full grocery shopping & ingredient sourcing',
  'Breakfast, lunch & dinner preparation',
  'Table service & presentation',
  'Full kitchen cleanup after every meal',
  'Menu planning based on your preferences',
  'Dietary customization at no extra cost',
  'Fresh, local ingredients + premium imports',
]

const MEAL_PLANS = [
  { name: 'Half Day', price: 'IDR 2,500,000++', period: '/day', desc: 'Cook and serve one meal, plus one additional meal prepared for later (no service for the prepared meal). Weekly rate IDR 2,250,000++/day · monthly rate IDR 2,000,000++/day.' },
  { name: 'Full Day', price: 'IDR 3,500,000++', period: '/day', desc: 'Cook and serve two meals, plus one additional meal prepared for later. Weekly rate IDR 3,150,000++/day · monthly rate IDR 2,800,000++/day.' },
  { name: 'Complete Full Day', price: 'IDR 4,200,000++', period: '/day', desc: 'Cook and serve breakfast, lunch and dinner — the complete villa experience. Weekly rate IDR 3,780,000++/day · monthly rate IDR 3,360,000++/day.' },
  { name: 'Custom', price: 'Quoted', period: '', desc: 'Dietary programmes, special occasions, extended stays' },
]

const FAQS = [
  { q: 'What does the meal-plan rate include?', a: 'One professional chef and one dedicated assistant, menu planning, cooking, table service and a full kitchen cleanup after every meal. Groceries are charged separately at cost, supported by receipts. Prices are subject to a 10% service charge and 11% tax.' },
  { q: 'How long does the chef stay each day?', a: 'Breakfast service runs about 2 hours and dinner about 3. Half- and full-day plans cover the day\'s cooking from breakfast through dinner.' },
  { q: 'Which areas do you serve?', a: 'Villas across Bali\'s main areas — Seminyak, Canggu, Pererenan, Ubud, Uluwatu, Sanur, Jimbaran and surrounds. Share your villa name and location pin when you enquire.' },
  { q: 'Can the chef handle dietary requirements and kids\' meals?', a: 'Yes — halal, vegan, gluten-free, keto, allergies and children\'s menus are part of the service at no extra charge.' },
  { q: 'Do we need to buy groceries or equipment?', a: 'No. Your chef shops for everything and works in your villa kitchen, bringing any specialist tools the menu needs.' },
  { q: 'How far ahead should we book?', a: 'Three or more days is comfortable for daily service; for peak season (July–August and December), two weeks ahead is recommended. A 50% deposit confirms your dates.' },
  { q: 'Is this the right service for a party or wedding?', a: 'No — daily villa dining is designed for everyday meals for up to about 10 guests. For celebrations, BBQs and events, our events & catering team is the right fit.' },
]

const TESTIMONIALS = [
  { name: 'The Chen Family', location: 'Singapore', text: 'Having a dedicated villa chef changed our entire holiday. The kids looked forward to every meal. We did not cook once, shop once, or clean once. Pure bliss.' },
  { name: 'Marco & Elena', location: 'Milan', text: 'We came for a week and extended to ten days just because of the food. Fresh, healthy, and always surprising. It felt like having a friend who happens to be an incredible chef.' },
]

const RELATED_SERVICES = [
  {
    title: 'Weekly Chef Service in Canggu',
    desc: 'Per-session pricing for one-off dinners and special evenings.',
    href: '/private-chef/canggu',
  },
  {
    title: 'Weekly Chef Service in Pererenan',
    desc: 'Private chef sessions for longer stays and intimate dinners.',
    href: '/private-chef/pererenan',
  },
  {
    title: 'Monthly Villa Chef Hire',
    desc: 'For stays of a month or more, with dedicated chef arrangements.',
    href: '/hire-private-chef-bali-monthly',
  },
  {
    title: 'Event Catering',
    desc: 'Weddings, parties, and retreats with full staffing.',
    href: '/events',
  },
  {
    title: 'All Pricing',
    desc: 'Compare every myCHEF service and pricing model.',
    href: '/pricing',
  },
  {
    title: 'How Hiring Works',
    desc: 'A plain-English guide to booking a private chef in Bali.',
    href: '/guide/private-chef-bali',
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
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Villa Chef Bali',
            description: getPageMeta('villa-chef').description,
            url: getPageMeta('villa-chef').canonical,
            lowPrice: '2500000',
            highPrice: '4200000',
            priceCurrency: 'IDR',
            unitText: 'per day',
          }),
          breadcrumbSchema('Villa Chef', getPageMeta('villa-chef').canonical),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
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
            {"Your Private Chef for Everyday Villa Dining"}
          </h1>
          <p className="sol-hero-sub text-lg md:text-xl text-white/[80%] mb-8 max-w-3xl mx-auto">
            The best part of a Bali villa stay should not be the daily logistics of eating. A villa chef changes that: breakfast appears after your swim, lunch when the kids are hungry, dinner when the light turns golden — all cooked fresh in your kitchen, every day of your stay, with the shopping, cooking and cleaning completely handled. This service is built for couples, families and groups of friends on multi-day stays: everyday dining, done beautifully. (Hosting a party or event for 10+ guests? That's our <Link to="/events" className="underline hover:text-[#C5A028]">events &amp; catering</Link> team.)
          </p>
          <div className="sol-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="sol-hero" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Plan My Villa Chef
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              See All Pricing
            </Link>
          </div>
          <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-white/15 bg-black/25 p-5 md:p-6 text-left backdrop-blur-sm">
            <p className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Not sure which service?
            </p>
            <p className="text-sm md:text-base text-white/[85%] leading-relaxed mb-4">
              Daily villa dining is designed for everyday meals for up to about 10 guests. For celebrations, BBQs and events, our <Link to="/events" className="font-semibold text-white hover:text-[#C5A028]">events &amp; catering team</Link> is the right fit.
            </p>
            <Link to="/events" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              Explore events &amp; catering →
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
            <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="sol-howitworks" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
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
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Meal Plans and Prices</h2>
            <p style={{ color: '#8A7B6B' }}>One clear rate per plan. Groceries billed at cost — no markup, receipts provided.</p>
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
          <p className="text-center mt-10 text-sm" style={{ color: '#8A7B6B' }}>
            Every booking includes one professional chef and one dedicated assistant. Groceries are charged separately at cost, supported by receipts. Weekly rate (7+ days): 10% off the standard daily rates · monthly rate (28+ days): 20% off. Prices are subject to a 10% service charge and 11% tax.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything Included</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <p style={{ color: '#8A7B6B' }}>One daily rate. Everything handled. You just show up hungry.</p>
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
            <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="sol-pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Book Your Chef
            </a>
          </div>
        </div>
      </section>

      {/* What a Villa Chef Does */}
      <section id="team" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-[75%] mx-auto">
              <img
                src="/generated/mychef-finedining-bali-sol-chef-portrait.webp"
                alt="myCHEF villa chef preparing a family meal in a Bali villa kitchen"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
            </div>
            <div>
              <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Daily Service</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What a Villa Chef Does</h2>
              <div className="w-12 h-[2px] bg-[#6B8E5A] mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: '#8A7B6B' }}>
                Your chef is dedicated to your villa for the hours you book. They plan menus around your tastes, shop fresh each morning, cook in your kitchen, serve at your table, and leave the kitchen spotless after every meal.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: '#8A7B6B' }}>
                You approve every menu in advance — dietary needs, allergies, kids' favourites and must-have dishes included at no extra charge. It is everyday dining, done beautifully, by a vetted myCHEF team member. See <Link to="/pricing" className="text-[#6B8E5A] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">all pricing</Link>, <Link to="/hire-private-chef-bali-monthly" className="text-[#6B8E5A] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">monthly arrangements</Link>, <Link to="/private-chef/pererenan" className="text-[#6B8E5A] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">weekly chef service</Link> in Pererenan, read <Link to="/guide/private-chef-bali" className="text-[#6B8E5A] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">how hiring works</Link>, or book a <Link to="/blog/holiday-chef-bali" className="text-[#6B8E5A] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">holiday chef in Bali</Link> for Christmas and New Year.
              </p>
              <div className="space-y-3">
                {['Dedicated chef for your villa stay', 'Fresh daily shopping with receipts', 'All dietary requirements accommodated', 'Groceries billed at cost — no markup'].map((item) => (
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

      {/* A Day With Your Villa Chef */}
      <section id="day-itinerary" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Sample Day</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>A Day With Your Villa Chef</h2>
          </div>
          <div className="space-y-6">
            {[
              { time: '07:00', text: 'Your chef is already at the market, choosing the day\'s produce and seafood.' },
              { time: '08:30', text: 'Breakfast service: fruits, pastries, eggs to order, proper coffee, kids sorted first.' },
              { time: '10:00', text: 'Kitchen cleaned and reset; tomorrow\'s menu confirmed with you.' },
              { time: '12:30', text: 'Lunch around the pool: salads, grills, Indonesian plates, something the children actually eat.' },
              { time: '18:30', text: 'Dinner as the sky changes: family-style sharing or plated courses, your call.' },
              { time: '21:00', text: 'Dessert, a tidy kitchen, and nothing left on your list.' },
            ].map((item) => (
              <div key={item.time} className="flex gap-4 md:gap-6 p-5 rounded-2xl bg-white border border-[#E5E0D8]">
                <span className="text-[#6B8E5A] font-medium text-sm md:text-base whitespace-nowrap" style={{ fontFamily: "'Cormorant Garamond', serif", minWidth: '3.5rem' }}>{item.time}</span>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#2C2419' }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{ color: '#8A7B6B' }}>
            You only pay for the days and meals you use. Eating out one night? Simply skip it — flexibility is the point of the service.
          </p>
        </div>
      </section>

      {/* Groceries at Cost */}
      <section id="groceries" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Transparency</p>
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Groceries at Cost, With Receipts</h2>
          <p className="leading-relaxed" style={{ color: '#8A7B6B' }}>
            Your chef shops daily at local markets and trusted suppliers, and you pay exactly what the market charges — every receipt is yours to review. There is no markup and no mystery line item. It is the difference between a professional villa chef service and the informal alternatives: transparent money, vetted staff, and food-safety discipline in your kitchen.
          </p>
        </div>
      </section>

      {/* How Our Pricing Fits Together */}
      <section id="pricing-fit" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Models</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How Our Pricing Fits Together</h2>
            <p style={{ color: '#8A7B6B' }}>Different stay shapes, different pricing models — one standard.</p>
          </div>
          <div className="space-y-4 mb-8">
            {[
              { label: 'Daily meal plans (this page)', desc: 'Villa chef service across every day of your stay.' },
              { label: 'Half-day chef hire', desc: 'Cook and serve one meal, plus one additional meal prepared for later — IDR 2,500,000++ per day. Weekly rate IDR 2,250,000++/day · monthly rate IDR 2,000,000++/day.' },
              { label: 'Full-day and complete full-day hire', desc: 'Two meals cooked and served plus one prepared for later — IDR 3,500,000++ per day; breakfast, lunch and dinner — IDR 4,200,000++ per day. Weekly −10% · monthly −20%. See ', link: { text: 'daily villa dining rates', to: '/villa-chef' }, end: '.' },
              { label: 'Monthly arrangements', desc: 'For stays of a month or more, see ', link: { text: 'monthly villa chef hire', to: '/hire-private-chef-bali-monthly' }, end: '.' },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-2xl bg-white border border-[#E5E0D8]">
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8A7B6B' }}>
                  {item.desc}
                  {item.link && <Link to={item.link.to} className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">{item.link.text}</Link>}
                  {item.end}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mb-4" style={{ color: '#8A7B6B' }}>
            Your written quote states exactly which model applies. Prices are subject to a 10% service charge and 11% tax — a 50% deposit confirms your dates.
          </p>
        </div>
      </section>

      {/* Staying Longer? */}
      <section id="staying-longer" className="py-24 md:py-32 px-6 scroll-mt-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Extended Stays</p>
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Staying Longer?</h2>
          <p className="leading-relaxed mb-8" style={{ color: '#8A7B6B' }}>
            Daily service is where most guests start; a week in, many ask about the rest of the season. Weekly rates take 10% off the daily price and monthly rates take 20% off, with the same groceries-at-cost promise — tell us your stay length and we will recommend the most economical structure for it.
          </p>
          <Link to="/hire-private-chef-bali-monthly" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
            Plan a Monthly Chef
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6" style={{ background: '#F5F0E8' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { slug: 'mychef-catering-bali-floating-breakfast', alt: 'Private villa chef breakfast spread in a Bali villa' },
              { slug: 'mychef-catering-bali-villa-final', alt: 'Bali villa catering lunch table served by a private chef' },
              { slug: 'mychef-location-bali-locations-sunset', alt: 'Sunset villa dining set up by myCHEF in Bali' },
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
            <p style={{ color: '#8A7B6B' }}>Still unsure? Message us on WhatsApp — we reply within 2 hours.</p>
          </div>
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
          <div className="text-center mt-12">
            <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="sol-testimonials" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
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
                Send your villa, dates and how many people are eating. We will match the right chef and confirm your plan — most bookings are confirmed within 2 hours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Half Day', price: 'IDR 2,500,000++ / day' },
                  { label: 'Full Day', price: 'IDR 3,500,000++ / day' },
                  { label: 'Complete Full Day', price: 'IDR 4,200,000++ / day' },
                ].map((p) => (
                  <div key={p.label} className="flex items-center justify-between py-3 border-b border-[#E5E0D8]">
                    <span style={{ color: '#2C2419' }}>{p.label}</span>
                    <span className="font-medium" style={{ color: '#6B8E5A' }}>{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mb-6" style={{ color: '#8A7B6B' }}>
                * Every booking includes one professional chef and one dedicated assistant. Groceries are charged separately at cost, supported by receipts. Weekly rate 10% off · monthly rate 20% off the daily rates. Prices are subject to a 10% service charge and 11% tax. A 50% deposit confirms your dates.
              </p>
              <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="sol-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                <Phone className="w-4 h-4" /> Book My Villa Chef on WhatsApp
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" style={{ color: '#8A7B6B' }}>
                <Link to="/hire-private-chef-bali-monthly" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">Planning a Longer Stay?</Link>
                <span>·</span>
                <a href="mailto:bali@mychef.id" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">Email bali@mychef.id</a>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
