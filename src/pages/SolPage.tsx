import { useEffect, useRef } from 'react'
import { Check, Sun, Coffee, Utensils, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BookingForm from '@/components/BookingForm'

gsap.registerPlugin(ScrollTrigger)

const HOW_IT_WORKS = [
  { icon: Coffee, step: '01', title: 'Tell Us Your Villa', desc: 'Share your villa location and dates. We handle the rest.' },
  { icon: Utensils, step: '02', title: 'We Plan Every Meal', desc: 'Your chef designs menus based on your preferences and dietary needs.' },
  { icon: Sun, step: '03', title: 'Relax and Enjoy', desc: 'Groceries, cooking, service, and cleanup — all handled by your private chef.' },
]

const MEAL_PLANS = [
  { name: 'Breakfast Only', price: 'IDR 600K', period: '/hour', desc: 'Fresh tropical fruits, pastries, eggs any style, Balinese coffee' },
  { name: 'Half Board', price: 'IDR 1.1M', period: '/hour', desc: 'Breakfast + dinner. Perfect for families who lunch out.' },
  { name: 'Full Board', price: 'IDR 1.5M', period: '/hour', desc: 'Breakfast, lunch, and dinner. The complete villa experience.' },
  { name: 'Custom', price: 'Quote', period: '', desc: 'Special occasions, dietary programs, or extended stays.' },
]

const TESTIMONIALS = [
  { name: 'The Chen Family', location: 'Singapore', text: 'Having Daniel as our villa chef changed our entire holiday. The kids looked forward to every meal. We did not cook once, shop once, or clean once. Pure bliss.' },
  { name: 'Marco & Elena', location: 'Milan', text: 'We came for a week and extended to ten days just because of the food. Fresh, healthy, and always surprising. It felt like having a friend who happens to be an incredible chef.' },
]

export default function SolPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.sol-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      tl.fromTo('.sol-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
      tl.fromTo('.sol-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      tl.fromTo('.sol-hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')

      gsap.fromTo('.sol-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sol-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} data-universe="sol" className="min-h-screen" style={{ background: '#F5F0E8', color: '#2C2419' }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/sol-hero.jpg" alt="Villa chef on terrace" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2C2419]/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="sol-hero-label text-white text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Universe SOL
          </p>
          <h1 className="sol-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Private<br />
            <span className="italic">Villa Chef</span>
          </h1>
          <p className="sol-hero-sub text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Wake up to breakfast. Swim through lunch. Dine at sunset. We handle everything.
          </p>
          <div className="sol-hero-cta">
            <a href="#book" className="inline-block px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
              Book Your Chef
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="sol-content py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>How It Works</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Effortless. From Day One.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="sol-reveal text-center p-8 rounded-2xl bg-white shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#6B8E5A]" />
                </div>
                <span className="text-[#6B8E5A] text-sm font-medium mb-2 block">{item.step}</span>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8A7B6B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
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
                <a href="#book" className="block text-center py-3 rounded-xl text-sm font-medium tracking-wider uppercase transition-all hover:scale-[1.02]" style={{ background: i === 2 ? '#6B8E5A' : '#F5F0E8', color: i === 2 ? '#FFFFFF' : '#2C2419' }}>
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/generated/sol-chef-portrait.jpg" alt="Chef Daniel" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Chef</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Chef <span className="italic">Daniel</span>
              </h2>
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
      <section className="py-12 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['sol-breakfast', 'sol-lunch', 'sol-sunset', 'sol-bbq'].map((img) => (
              <div key={img} className="aspect-square rounded-xl overflow-hidden">
                <img src={`/generated/${img}.jpg`} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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

      {/* Booking */}
      <section id="book" className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Book</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Start Your<br />Effortless Stay
              </h2>
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
              <p className="text-xs" style={{ color: '#8A7B6B' }}>
                * Groceries billed at cost — no markup. Minimum 4-hour booking. Service charge included.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E5E0D8] bg-white">
              <BookingForm universe="sol" compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
