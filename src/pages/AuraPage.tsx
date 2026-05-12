import { useEffect, useRef } from 'react'
import { Check, Heart, Building2, PartyPopper, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BookingForm from '@/components/BookingForm'

gsap.registerPlugin(ScrollTrigger)

const EVENT_TYPES = [
  { icon: Heart, title: 'Weddings', desc: 'Intimate villa ceremonies to 200-guest garden receptions. Every detail handled.' },
  { icon: Building2, title: 'Corporate Retreats', desc: 'Team dinners, gala nights, and multi-day hospitality programs.' },
  { icon: PartyPopper, title: 'Celebrations', desc: 'Birthdays, anniversaries, reunions. Custom themes and menus.' },
]

const PACKAGES = [
  { name: 'Intimate', guests: '10–30', price: 'From IDR 15M', desc: 'Cocktail reception, seated dinner, full service staff. Perfect for small gatherings.', features: ['Private chef team', 'Wait staff (2)', 'Bar setup', 'Table décor', 'Sound system'] },
  { name: 'Villa Celebration', guests: '30–80', price: 'From IDR 35M', desc: 'Multi-course dinner, open bar, live station, full event coordination.', features: ['Executive chef + sous chef', 'Wait staff (4)', 'Bartender', 'Event coordinator', 'Floral arrangement', 'Lighting design'] },
  { name: 'Grand', guests: '80–200', price: 'From IDR 75M', desc: 'Full-scale event production. Catering, bar, décor, staffing, and logistics.', features: ['Head chef + team of 6', 'Full service staff (8+)', 'Multiple bartenders', 'Event director', 'Custom décor & floral', 'AV & lighting', 'Valet service'] },
]

const TESTIMONIALS = [
  { name: 'Priya & Raj', location: 'Mumbai', text: 'Our wedding at the villa was beyond anything we imagined. Olivia and her team handled 120 guests flawlessly. The food, the service, the atmosphere — our families are still talking about it.' },
  { name: 'David Chen', location: 'Shanghai', text: 'We hosted a 3-day corporate retreat for 45 executives. myCHEF managed every meal, every cocktail hour, every dietary restriction. Our CEO called it the best retreat we have ever done.' },
]

export default function AuraPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.aura-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      tl.fromTo('.aura-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
      tl.fromTo('.aura-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      tl.fromTo('.aura-hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')

      gsap.fromTo('.aura-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.aura-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} data-universe="aura" className="min-h-screen" style={{ background: '#FFFFFF', color: '#1A1A1A' }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/aura-hero.jpg" alt="Event setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A1A1A]/45" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="aura-hero-label text-white text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Universe AURA
          </p>
          <h1 className="aura-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Events,<br />
            <span className="italic">Perfectly Hosted</span>
          </h1>
          <p className="aura-hero-sub text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            From intimate vow exchanges to 200-guest galas. Every detail, handled.
          </p>
          <div className="aura-hero-cta">
            <a href="#book" className="inline-block px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1e4a63] transition-all">
              Plan Your Event
            </a>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="aura-content py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Every Occasion,<br />Elevated</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENT_TYPES.map((item) => (
              <div key={item.title} className="aura-reveal text-center p-8 rounded-2xl border border-[#E5E3E0] hover:border-[#2C5F7C] transition-all hover:shadow-lg">
                <div className="w-14 h-14 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#2C5F7C]" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4745' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Packages</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Choose Your Scale</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div key={pkg.name} className={`p-8 rounded-2xl border transition-all hover:shadow-xl ${i === 1 ? 'border-[#2C5F7C] bg-white' : 'border-[#E5E3E0] bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.name}</h3>
                  {i === 1 && <span className="text-xs px-3 py-1 rounded-full bg-[#2C5F7C] text-white">Most Popular</span>}
                </div>
                <p className="text-sm mb-4" style={{ color: '#4A4745' }}>{pkg.guests} guests</p>
                <p className="text-2xl font-medium mb-4" style={{ color: '#1A1A1A' }}>{pkg.price}</p>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: '#4A4745' }}>{pkg.desc}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#1A1A1A' }}>
                      <Check className="w-4 h-4 text-[#2C5F7C]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#book" className="block text-center py-3 rounded-xl text-sm font-medium tracking-wider uppercase transition-all hover:scale-[1.02]" style={{ background: i === 1 ? '#2C5F7C' : '#F8F7F5', color: i === 1 ? '#FFFFFF' : '#1A1A1A' }}>
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/generated/aura-team.jpg" alt="Events team" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Team</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="italic">Olivia</span> & The AURA Team
              </h2>
              <div className="w-12 h-[2px] bg-[#2C5F7C] mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: '#4A4745' }}>
                Olivia has produced over 200 events in Bali — from intimate villa weddings to 200-guest corporate galas. Her team of 15 Indonesian event professionals handles everything: catering, bar, décor, staffing, and logistics.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: '#4A4745' }}>
                "The best events are the ones where the host never worries. We make sure you are always the guest of honor at your own event."
              </p>
              <div className="space-y-3">
                {['200+ events produced', '15-person events team', 'Full-service: catering, bar, décor, AV', 'On-site event director'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C]" />
                    <span className="text-sm" style={{ color: '#1A1A1A' }}>{item}</span>
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
            {['aura-wedding', 'aura-corporate', 'aura-toast', 'aura-tablescape'].map((img) => (
              <div key={img} className="aspect-square rounded-xl overflow-hidden">
                <img src={`/generated/${img}.jpg`} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Client Stories</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>Events They Will<br />Never Forget</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl border border-[#E5E3E0] bg-white">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-[#2C5F7C] text-[#2C5F7C]" />)}
                </div>
                <p className="mb-6 leading-relaxed italic" style={{ color: '#1A1A1A' }}>"{t.text}"</p>
                <p className="text-sm" style={{ color: '#4A4745' }}>{t.name}, {t.location}</p>
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
              <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Inquire</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Plan<br />Something Extraordinary
              </h2>
              <div className="w-12 h-[2px] bg-[#2C5F7C] mb-8" />
              <p className="mb-8 leading-relaxed" style={{ color: '#4A4745' }}>
                Olivia will design a custom proposal based on your event type, guest count, and vision. Most proposals delivered within 24 hours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Intimate (10–30)', price: 'From IDR 15M' },
                  { label: 'Villa Celebration (30–80)', price: 'From IDR 35M' },
                  { label: 'Grand (80–200)', price: 'From IDR 75M' },
                ].map((p) => (
                  <div key={p.label} className="flex items-center justify-between py-3 border-b border-[#E5E3E0]">
                    <span style={{ color: '#1A1A1A' }}>{p.label}</span>
                    <span className="font-medium" style={{ color: '#2C5F7C' }}>{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: '#4A4745' }}>
                * Custom quotes include catering, bar, staffing, and basic décor. AV, floral, and specialty items quoted separately.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E5E3E0] bg-white">
              <BookingForm universe="aura" compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
