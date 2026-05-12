import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Users, Clock, ChefHat } from 'lucide-react'
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
      // Hero entrance
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.hub-hero-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      tl.fromTo('.hub-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
      tl.fromTo('.hub-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      tl.fromTo('.hub-hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')

      // Portals scroll reveal
      gsap.fromTo('.portal-card', { y: 60 }, {
        y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: portalsRef.current, start: 'top 85%', once: true },
      })

      // Trust bar
      gsap.fromTo('.trust-item', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: trustRef.current, start: 'top 80%', once: true },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hub-hero-v3.jpg"
            alt="Luxury Bali villa"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = '/hero-home.jpg' }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="hub-hero-label text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            myCHEF.id — Bali
          </p>
          <h1
            className="hub-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Extraordinary Food,<br />
            <span className="italic">Without Leaving Your Villa</span>
          </h1>
          <p className="hub-hero-subtitle text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            From a single intimate dinner to full-service event hospitality — a Michelin-trained team, in your kitchen.
          </p>
          <div className="hub-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/fine-dining"
              className="px-8 py-4 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#E8C84B] transition-all hover:scale-105"
            >
              Plan Your Experience
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/40 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase">Explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Three Portals */}
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
                <img
                  src={portal.image}
                  alt={portal.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ background: '#1a1a1a' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.4' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <h3 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {portal.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    {portal.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">{portal.price}</span>
                    <span className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-4" style={{ color: portal.accent }}>
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-opacity-100 pointer-events-none"
                  style={{ borderColor: portal.accent }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section ref={trustRef} className="py-16 md:py-20 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="trust-item text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-4 text-[#D4AF37]" />
                <p className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Introduction */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/generated/hub-chef.jpg"
                alt="Head Chef"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = '/chef-portrait.jpg' }}
              />
            </div>
            <div>
              <p className="u-label text-sm mb-4">The Chef Behind It All</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">
                Chef <span className="italic">Antonio</span>
              </h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Trained under a Michelin-starred chef in Milan, Antonio brings two decades of Italian culinary 
                mastery to Bali. His team of 12 Indonesian chefs has served over 12,000 guests across 500+ villas.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                "We don't just cook food. We create the feeling you came to Bali for."
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>20 Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>Michelin-Trained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hub-bali.jpg"
            alt="Bali landscape"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ready When You Are
          </p>
          <h2 className="text-4xl md:text-6xl text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Villa. Our Kitchen.<br />
            <span className="italic">One Extraordinary Evening.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#E8C84B] transition-all hover:scale-105"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  )
}
