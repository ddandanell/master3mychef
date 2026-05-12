import { useEffect, useRef } from 'react'
import { Flame, Wine, Clock, Users, Star, Check } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BookingForm from '@/components/BookingForm'

gsap.registerPlugin(ScrollTrigger)

const MENU_COURSES = [
  { num: '01', name: 'Amuse-Bouche', desc: 'Compressed watermelon, aged balsamic, edible flowers' },
  { num: '02', name: 'Crudo', desc: 'Line-caught tuna, Sicilian olive oil, finger lime' },
  { num: '03', name: 'Pasta', desc: 'Hand-rolled tagliolini, white truffle, Parmigiano Reggiano' },
  { num: '04', name: 'Risotto', desc: 'Carnaroli rice, saffron, bone marrow' },
  { num: '05', name: 'Pesce', desc: 'Mediterranean sea bass, fennel, citrus beurre blanc' },
  { num: '06', name: 'Carne', desc: 'Wagyu beef tenderloin, Barolo reduction, celeriac' },
  { num: '07', name: 'Formaggio', desc: 'Artisanal Italian cheeses, truffle honey, walnut bread' },
  { num: '08', name: 'Dolce', desc: 'Dark chocolate sphere, gold leaf, berry coulis' },
]

const TESTIMONIALS = [
  { name: 'James & Sarah', location: 'London', text: 'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the 11 courses — pure magic.' },
  { name: 'The Harrisons', location: 'Sydney', text: 'Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.' },
]

export default function LunaPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.luna-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      tl.fromTo('.luna-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
      tl.fromTo('.luna-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      tl.fromTo('.luna-hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')

      gsap.fromTo('.luna-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.luna-content', start: 'top 75%', once: true },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} data-universe="luna" className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/luna-hero-v2.jpg" alt="Fine dining in Balinese village" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="luna-hero-label text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Universe LUNA
          </p>
          <h1 className="luna-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
            An Extraordinary<br />
            <span className="italic">Evening</span>
          </h1>
          <p className="luna-hero-sub text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Italian fine dining, outdoors in a traditional Balinese village. White-clad professionals. Up to 11 courses.
          </p>
          <div className="luna-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="px-8 py-4 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#E8C84B] transition-all">
              Reserve Your Table
            </a>
            <a href="#menu" className="px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              Explore the Menu
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="luna-content py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
            <div className="luna-reveal">
              <img src="/generated/luna-table.jpg" alt="11-course table setting" className="rounded-2xl w-full aspect-[4/3] object-cover" />
            </div>
            <div className="luna-reveal">
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Experience</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                11 Courses.<br />One Unforgettable Night.
              </h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-white/60 mb-6 leading-relaxed">
                We arrive as a team of white-clad professionals. We transform your villa garden or a Balinese village courtyard into an open-air Michelin-inspired dining room.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Every course is prepared in front of your guests. Every wine is paired. Every detail — from the hand-pressed linen to the gold-rimmed plates — is considered.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Flame, label: 'Open-Flame Cooking' },
                  { icon: Wine, label: 'Sommelier Pairing' },
                  { icon: Clock, label: '3–4 Hour Journey' },
                  { icon: Users, label: '4–24 Guests' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Menu</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>A Journey Through Italy</h2>
            <p className="text-white/50">Sample 11-course tasting menu. Changes with the seasons.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            {MENU_COURSES.map((course) => (
              <div key={course.num} className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-sm font-medium mt-1">{course.num}</span>
                <div>
                  <h4 className="text-white font-medium mb-1">{course.name}</h4>
                  <p className="text-white/50 text-sm">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Chef</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Chef <span className="italic">Antonio</span>
              </h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-white/60 mb-6 leading-relaxed">
                Trained under a Michelin-starred chef in Milan. 20 years of experience. Antonio leads a team of 8 Indonesian fine dining specialists, each trained in classical Italian technique.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                "Fine dining is not about showing off. It is about making your guests feel like the most important people in the world for one evening."
              </p>
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-white/80">Michelin-starred training, Milan</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-white/80">8-person Indonesian fine dining team</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-white/80">500+ fine dining experiences in Bali</span>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img src="/generated/luna-chef-portrait.jpg" alt="Chef Antonio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['luna-plating', 'luna-flame', 'luna-dessert', 'luna-detail'].map((img) => (
              <div key={img} className="aspect-square rounded-xl overflow-hidden">
                <img src={`/generated/${img}.jpg`} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Words From Guests</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>They Came for Dinner.<br />They Left with Memories.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">"{t.text}"</p>
                <p className="text-sm text-white/50">{t.name}, {t.location}</p>
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
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Reserve</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Book Your<br />Extraordinary Evening
              </h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-white/60 mb-8 leading-relaxed">
                Sofia, our fine dining concierge, will confirm your date and menu within the hour. We recommend booking 7+ days in advance for peak season.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: '5-Course Journey', price: 'IDR 2.2M / guest' },
                  { label: '7-Course Experience', price: 'IDR 2.5M / guest' },
                  { label: '11-Course Tasting', price: 'IDR 3.2M / guest' },
                  { label: 'Bespoke Menu', price: 'Custom quote' },
                ].map((p) => (
                  <div key={p.label} className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-white/80">{p.label}</span>
                    <span className="text-[#D4AF37] font-medium">{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40">
                * Wine pairing available at IDR 850K per guest. Minimum 4 guests. Service charge and government tax included.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/10">
              <BookingForm universe="luna" compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
