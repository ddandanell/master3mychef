import { useEffect, useRef, useState } from 'react'
import { Check, Heart, Building2, PartyPopper, Star, MessageCircle, Phone, Sparkles, Truck, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BookingForm from '@/components/BookingForm'

gsap.registerPlugin(ScrollTrigger)

const HOW_IT_WORKS = [
  { step: '01', title: 'Share Your Vision', desc: 'Tell Olivia your event type, guest count, and dream. Wedding? Corporate retreat? Celebration? We have done them all.', icon: MessageCircle },
  { step: '02', title: 'Receive Your Proposal', desc: 'Within 24 hours, you get a detailed proposal: menu, staffing, décor, timeline, and transparent pricing.', icon: PartyPopper },
  { step: '03', title: 'We Handle Everything', desc: 'Catering, bar, décor, AV, staffing, logistics — all coordinated by our events team. You approve, we execute.', icon: Truck },
  { step: '04', title: 'You Arrive as a Guest', desc: 'On the day, every detail is set. You walk in and enjoy your own event. That is the point.', icon: Sparkles },
]

const WHATS_INCLUDED = [
  'Event director & on-site coordination',
  'Custom menu design by executive chef',
  'Full bar service & bartenders',
  'Wait staff & service team',
  'Table setup, linens & floral décor',
  'AV, lighting & sound coordination',
  'Timeline & vendor management',
  'Setup, service, and full breakdown',
]

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

const FAQS = [
  { q: 'How far in advance should I book an event?', a: '4+ weeks is ideal. For weddings during peak season (June–September, December), 3+ months is recommended. But message us anyway — we have pulled off miracles in less time.' },
  { q: 'What is included in the event price?', a: 'All packages include catering, bar service, staffing, basic décor, and on-site coordination. AV, specialty floral, and entertainment are quoted separately based on your needs.' },
  { q: 'Can you work at any villa in Bali?', a: 'Yes. We have produced events at over 200 villas across Seminyak, Canggu, Ubud, Uluwatu, and Nusa Dua. We know the spaces, the vendors, and the logistics.' },
  { q: 'Do you handle décor and floral?', a: 'Yes. Our Villa Celebration and Grand packages include floral and décor. For Intimate events, we can add it as an upgrade. We work with Bali\'s best floral designers.' },
  { q: 'Can we taste the menu before the event?', a: 'For events over IDR 50M, we offer a complimentary tasting session at your villa. For smaller events, we can arrange a paid tasting.' },
  { q: 'What about dietary restrictions for large groups?', a: 'We handle it seamlessly. Vegetarian, halal, gluten-free, nut allergies — we label everything and ensure every guest is cared for.' },
  { q: 'Do you provide alcohol and bar service?', a: 'Yes. Full bar service with professional bartenders. We can source premium spirits, wines, and craft cocktails. You can also provide your own alcohol and we handle service.' },
  { q: 'What happens if it rains?', a: 'We always have a backup plan. Bali villas have covered areas, and we bring tenting for outdoor events. Olivia will walk you through contingencies in your proposal.' },
]

const TESTIMONIALS = [
  { name: 'Priya & Raj', location: 'Mumbai', text: 'Our wedding at the villa was beyond anything we imagined. Olivia and her team handled 120 guests flawlessly. The food, the service, the atmosphere — our families are still talking about it.' },
  { name: 'David Chen', location: 'Shanghai', text: 'We hosted a 3-day corporate retreat for 45 executives. myCHEF managed every meal, every cocktail hour, every dietary restriction. Our CEO called it the best retreat we have ever done.' },
]

export default function AuraPage() {
  const ref = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
          <img src="/generated/aura-hero-v2.jpg" alt="Event setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="aura-hero-label text-white text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Events</p>
          <h1 className="aura-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Events,<br /><span className="italic">Perfectly Hosted</span>
          </h1>
          <p className="aura-hero-sub text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            From intimate vow exchanges to 200-guest galas. We handle catering, bar, décor, staffing, and every detail.
          </p>
          <div className="aura-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1e4a63] transition-all">
              <MessageCircle className="w-4 h-4" /> Message Olivia
            </a>
            <a href="#packages" className="inline-block px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              See Packages
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="aura-content py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Process</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
            <p style={{ color: '#4A4745' }}>Four steps. One extraordinary event. You just show up.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="aura-reveal text-center p-6 rounded-2xl border border-[#E5E3E0] hover:border-[#2C5F7C] transition-all">
                <div className="w-14 h-14 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#2C5F7C]" />
                </div>
                <span className="text-[#2C5F7C] text-xs tracking-[0.2em] uppercase mb-2 block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Step {item.step}</span>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4745' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <Phone className="w-4 h-4" /> Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Every Occasion,<br />Elevated</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENT_TYPES.map((item) => (
              <div key={item.title} className="aura-reveal text-center p-8 rounded-2xl border border-[#E5E3E0] bg-white hover:border-[#2C5F7C] transition-all hover:shadow-lg">
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
      <section id="packages" className="py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
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
                      <Check className="w-4 h-4 text-[#2C5F7C]" />{f}
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

      {/* What's Included */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything Included</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <p style={{ color: '#4A4745' }}>Full-service event production. You dream it. We build it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E5E3E0]">
                <Check className="w-5 h-5 text-[#2C5F7C] flex-shrink-0" />
                <span className="text-sm" style={{ color: '#1A1A1A' }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <Phone className="w-4 h-4" /> Get Your Quote
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/generated/aura-team.jpg" alt="Events team" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Team</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}><span className="italic">Olivia</span> & The Events Team</h2>
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
      <section className="py-12 px-6" style={{ background: '#F8F7F5' }}>
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
      <section className="py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
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

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
            <p style={{ color: '#4A4745' }}>Planning an event is a big decision. Here are the answers you need.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-[#E5E3E0] bg-white overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-medium pr-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-[#2C5F7C] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: '#4A4745' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <MessageCircle className="w-4 h-4" /> Ask Olivia on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-24 md:py-32 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Inquire</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Let's Plan<br />Something Extraordinary</h2>
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
              <p className="text-xs mb-6" style={{ color: '#4A4745' }}>
                * Custom quotes include catering, bar, staffing, and basic décor. AV, floral, and specialty items quoted separately.
              </p>
              <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
                <Phone className="w-4 h-4" /> Get a Quote on WhatsApp
              </a>
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
