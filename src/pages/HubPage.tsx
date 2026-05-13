import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Users, Clock, ChefHat, MessageCircle, Check, Phone, Utensils, Sparkles, Shield } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PORTALS = [
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    subtitle: 'Italian tasting menus in your villa. Two curated experiences.',
    price: 'From IDR 2,200,000++',
    path: '/fine-dining',
    image: '/generated/hub-hero-v2.jpg',
    accent: '#D4AF37',
  },
  {
    id: 'catering',
    title: 'Catering',
    subtitle: 'Private chef for breakfast, lunch, and dinner. No planning needed.',
    price: 'From IDR 600K per hour',
    path: '/villa-chef',
    image: '/generated/sol-hero-v2.jpg',
    accent: '#6B8E5A',
  },
  {
    id: 'events',
    title: 'Events',
    subtitle: 'Weddings, retreats, and celebrations. Fully hosted.',
    price: 'Custom quote',
    path: '/events',
    image: '/generated/aura-hero-v2.jpg',
    accent: '#2C5F7C',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Message Us on WhatsApp',
    desc: 'Tell us your dates, villa location, and how many guests. Takes two minutes.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'We Plan Everything',
    desc: 'Our concierge designs your menu or event. You approve — or we adjust. No pressure.',
    icon: Utensils,
  },
  {
    step: '03',
    title: 'We Shop, Prep & Cook',
    desc: 'Groceries sourced fresh that morning. We arrive at your villa ready to cook.',
    icon: ChefHat,
  },
  {
    step: '04',
    title: 'You Enjoy. We Clean.',
    desc: 'Sit back, eat, laugh. When you are done, we leave your kitchen spotless.',
    icon: Sparkles,
  },
]

const DIFFERENTIATORS = [
  { icon: ChefHat, title: 'Michelin-Trained Leadership', desc: 'Chef Antonio trained under a Michelin-starred chef in Milan. His standards are the baseline for every dish.' },
  { icon: Users, title: '50+ Indonesian Professionals', desc: 'Chefs, servers, bartenders, and event staff — all trained in-house, all passionate about hospitality.' },
  { icon: Shield, title: 'We Handle Everything', desc: 'Groceries, cooking, service, cleanup. You do not lift a finger. Not even to make a grocery list.' },
  { icon: MapPin, title: 'We Know Bali', desc: '8 years serving villas across Seminyak, Canggu, Ubud, Uluwatu, and Sanur. We know the markets, the kitchens, the rhythm.' },
  { icon: Clock, title: 'Same-Day Response', desc: 'Most inquiries confirmed within the hour. Proposals delivered within 24 hours. No waiting games.' },
  { icon: Star, title: '12,000+ Happy Guests', desc: 'Families, honeymooners, CEOs, wedding parties. A 4.9 average rating across 500+ villa experiences.' },
]

const FAQS = [
  { q: 'How far in advance should I book?', a: 'For fine dining, 7+ days is ideal. For villa chefs, 3+ days. For events, 4+ weeks. But message us anyway — we accommodate last-minute requests whenever possible.' },
  { q: 'Do you serve all areas of Bali?', a: 'Yes. Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, and everywhere in between. We have chefs based across the island.' },
  { q: 'What about dietary restrictions?', a: 'Every menu is tailored. Gluten-free, vegan, halal, nut allergies, pregnancy-friendly — just tell us. We have done it all.' },
  { q: 'Are groceries included in the price?', a: 'For fine dining and events, ingredients are included. For villa chef catering, groceries are billed at cost with no markup — you see every receipt.' },
  { q: 'How many staff will come to my villa?', a: 'Fine dining: 6–10 staff (chef, sous chef, servers, sommelier). Villa chef: 1–2 chefs. Events: depends on scale, quoted in your proposal.' },
  { q: 'What is the cancellation policy?', a: 'Full refund up to 72 hours before. 50% refund 24–72 hours. Within 24 hours, we work with you to reschedule.' },
]

const TRUST_STATS = [
  { icon: MapPin, value: '500+', label: 'Villas Served' },
  { icon: Users, value: '12,000+', label: 'Happy Guests' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Clock, value: '8+', label: 'Years in Bali' },
]

export default function HubPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const portalsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.hub-hero-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      tl.fromTo('.hub-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
      tl.fromTo('.hub-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      tl.fromTo('.hub-hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')

      gsap.fromTo('.portal-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: portalsRef.current, start: 'top 85%', once: true },
      })

      gsap.fromTo('.trust-item', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: trustRef.current, start: 'top 80%', once: true },
      })

      gsap.fromTo('.hiw-step', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.hiw-section', start: 'top 75%', once: true },
      })

      gsap.fromTo('.diff-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.diff-section', start: 'top 80%', once: true },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hub-hero-v3.jpg" alt="Luxury Bali villa" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/hero-home.jpg' }} />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="hub-hero-label text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            myCHEF.id — Bali
          </p>
          <h1 className="hub-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Extraordinary Food,<br />
            <span className="italic">Without Leaving Your Villa</span>
          </h1>
          <p className="hub-hero-subtitle text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Italian fine dining. Private villa chefs. Full-service events. A Michelin-trained team of 50+, in your kitchen.
          </p>
          <div className="hub-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#E8C84B] transition-all hover:scale-105">
              Book on WhatsApp
            </a>
            <Link to="/contact" className="px-8 py-4 border border-white/40 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              Ask a Question
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase">Explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* PORTALS */}
      <section ref={portalsRef} className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="u-heading text-4xl md:text-5xl lg:text-6xl mb-6">What We Do</h2>
            <div className="gold-arc mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {PORTALS.map((portal) => (
              <div key={portal.id} className="portal-card group relative rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Link to={portal.path} className="absolute inset-0 z-10" aria-label={portal.title} />
                <img src={portal.image} alt={portal.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ background: '#1a1a1a' }} onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.4' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <h3 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{portal.title}</h3>
                  <p className="text-sm text-white/70 mb-5 leading-relaxed">{portal.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">{portal.price}</span>
                    <span className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-4" style={{ color: portal.accent }}>
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-opacity-100 pointer-events-none" style={{ borderColor: portal.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hiw-section py-24 md:py-32 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label text-sm mb-4">Simple as It Gets</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">How It Works</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>From first message to first bite — four steps. No stress. No surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="hiw-step text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--u-accent)', color: '#fff' }}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase mb-2 block" style={{ color: 'var(--u-accent)', fontFamily: "'Cormorant Garamond', serif" }}>Step {item.step}</span>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105" style={{ background: 'var(--u-accent)', color: '#fff' }}>
              <MessageCircle className="w-4 h-4" /> Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/generated/team-photo.jpg" alt="The myCHEF team" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }} />
            </div>
            <div>
              <p className="u-label text-sm mb-4">Who We Are</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">A Team Built on Passion, Not Pitch Decks</h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                myCHEF.id was born when Chef Antonio — trained under a Michelin-starred chef in Milan — arrived in Bali and saw a gap. 
                The island had world-class villas. It had incredible ingredients. But the connection between them was missing.
              </p>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Today we are a team of 50+ Indonesian hospitality professionals. Chefs trained in Italian technique. Servers who anticipate 
                before you ask. Event producers who have handled 200+ weddings and corporate retreats. Every person on our team shares one belief: 
                extraordinary food should not require leaving your villa.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                We are not a marketplace. We are not an app. We are a kitchen that travels — and we take that seriously.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Michelin-trained leadership', '50+ staff', '500+ villas served', '12,000+ guests'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: 'var(--u-accent)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="diff-section py-24 md:py-32 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label text-sm mb-4">Why Choose Us</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">What Makes Us Different</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>Anyone can cook. We build experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="diff-card p-8 rounded-2xl border transition-all hover:shadow-lg" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <d.icon className="w-6 h-6 mb-4" style={{ color: 'var(--u-accent)' }} />
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section ref={trustRef} className="py-16 md:py-20 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="trust-item text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-4 text-[#D4AF37]" />
                <p className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{stat.value}</p>
                <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label text-sm mb-4">Questions</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">Frequently Asked</h2>
            <p className="mb-2" style={{ color: 'var(--u-text-muted)' }}>Still unsure? Message us on WhatsApp — we respond within the hour.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105" style={{ background: '#25D366', color: '#fff' }}>
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hub-bali.jpg" alt="Bali landscape" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ready When You Are</p>
          <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Villa. Our Kitchen.<br />
            <span className="italic">One Message Away.</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Most inquiries are answered within the hour. No deposit required to start planning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all hover:scale-105">
              <Phone className="w-4 h-4" /> WhatsApp Us Now
            </a>
            <Link to="/contact" className="inline-block px-10 py-5 border border-white/40 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              View All Contact Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
