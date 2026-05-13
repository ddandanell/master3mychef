import { useEffect, useRef, useState } from 'react'
import { Flame, Wine, Clock, Users, Star, Check, ChevronRight, MessageCircle, Phone, Sparkles, Truck } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BookingForm from '@/components/BookingForm'

gsap.registerPlugin(ScrollTrigger)

const MENUS = [
  {
    id: 'mediterranean',
    name: 'Mediterranean Sea Experience',
    price: 'IDR 2,200,000++',
    duration: '2.5 – 3 hours',
    desc: 'A refined Mediterranean tasting experience inspired by the southern coast of Italy. Delicate seafood, handmade pasta, citrus notes, basil, olive oil, and premium seasonal ingredients — light, sophisticated, and deeply connected to Mediterranean hospitality.',
    perfectFor: ['Private villa dinners', 'Celebrations', 'Romantic evenings', 'Luxury gatherings'],
    courses: {
      starter: [
        { name: 'Passione di Dentice', desc: 'Red snapper carpaccio, passion fruit sauce, basil gelato' },
        { name: 'Burrata', desc: 'Burrata cheese stuffed with prawn mousse, giardiniera' },
      ],
      main: [
        { name: 'Lobster', desc: 'Home-made tagliatelle pasta with lobster sauce, cherry tomatoes, fresh basil' },
        { name: 'Barramundi and the Sea', desc: 'Barramundi roll, clams, Mediterranean sauce, green beans' },
      ],
      dessert: [
        { name: 'Tiramisu', desc: 'Home-made lady finger, mascarpone cream, espresso coffee' },
      ],
    },
    wine: {
      white: 'Etna Bianco, Vermentino di Sardegna, or Sauvignon Blanc',
      red: 'Light Pinot Noir or elegant Nero d\'Avola',
      sparkling: 'Franciacorta or dry Prosecco for aperitif service',
    },
    accent: '#2C5F7C',
  },
  {
    id: 'wagyu',
    name: 'Wagyu Experience',
    price: 'IDR 2,400,000++',
    duration: '~3 hours',
    desc: 'A rich and elegant tasting experience centered around premium Wagyu Tokusen beef. Deep flavors, handmade elements, luxurious textures, and refined presentation. Every course balances richness, acidity, texture, and warmth.',
    perfectFor: ['Luxury celebrations', 'Executive dinners', 'Premium villa experiences', 'Wine-focused evenings'],
    courses: {
      starter: [
        { name: 'My Beef Tartare', desc: 'Wagyu Tokusen chuck tender tartare, polenta chips, cured egg, rocket salad, basil oil' },
        { name: 'Ravioli di Coda', desc: 'Wagyu Tokusen oxtail ragout stuffed ravioli, Grana Padano cheese sauce, kale foam' },
      ],
      main: [
        { name: 'Ribeye', desc: 'Grilled Wagyu Tokusen ribeye, topinambur cream, blue cheese sauce, walnuts' },
      ],
      dessert: [
        { name: 'Tenerina Cake', desc: 'Dark chocolate Callebaut 56% cake, salted caramel gelato' },
      ],
    },
    wine: {
      red: 'Barolo, Brunello di Montalcino, Amarone della Valpolicella, or Super Tuscan blends',
      white: 'Oaked Chardonnay for guests preferring white wine with richer dishes',
      sparkling: 'Franciacorta Rosé for aperitif and starter pairing',
    },
    accent: '#8B4513',
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Message Sofia on WhatsApp', desc: 'Share your date, villa location, and guest count. She replies within the hour.', icon: MessageCircle },
  { step: '02', title: 'Choose Your Menu', desc: 'Pick Mediterranean Sea or Wagyu. Add wine pairing. Dietary needs? We adjust everything.', icon: Wine },
  { step: '03', title: 'We Arrive & Transform', desc: 'Our team of 6–10 arrives 3 hours early. Table setting, kitchen prep, ambience — all handled.', icon: Truck },
  { step: '04', title: 'You Dine. We Disappear.', desc: 'Course after course, served at your villa. When you are done, we leave everything spotless.', icon: Sparkles },
]

const WHATS_INCLUDED = [
  'Michelin-trained executive chef',
  'Sous chef & kitchen team',
  'Professional service staff',
  'Sommelier wine pairing (optional)',
  'Premium ingredients & imports',
  'Table setting with linens & candles',
  'Full kitchen cleanup',
  'Dietary customization (no extra charge)',
]

const FAQS = [
  { q: 'What is the minimum number of guests?', a: 'Four guests minimum. We can accommodate up to 24 for the full fine dining experience.' },
  { q: 'Can I mix the two menus for my group?', a: 'Absolutely. Half your table can have Mediterranean Sea, half can have Wagyu. Just let Sofia know when booking.' },
  { q: 'What does "++" mean in the price?', a: 'Service charge and government tax are added. The final per-person price is approximately IDR 2.6M (Mediterranean) and IDR 2.85M (Wagyu).' },
  { q: 'How far in advance should I book?', a: '7+ days is ideal for peak season. We can sometimes accommodate 48-hour requests — message us and we will try.' },
  { q: 'Do you provide wine, or do I need to buy it?', a: 'We bring the wine. The pairing is IDR 850K per guest and includes 4–5 glasses matched to each course.' },
  { q: 'What if someone has allergies or dietary restrictions?', a: 'We adjust every course. Gluten-free, shellfish allergy, pregnancy-friendly, halal — just tell us. No extra charge.' },
  { q: 'Where do you cook? Do I need a big kitchen?', a: 'We cook in your villa kitchen. We bring any specialized equipment. We have worked in everything from pool villas to estates.' },
  { q: 'What time do you arrive?', a: 'Typically 3 hours before service for setup and prep. The tasting experience itself lasts 2.5–3 hours.' },
]

const TESTIMONIALS = [
  { name: 'James & Sarah', location: 'London', text: 'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.' },
  { name: 'The Harrisons', location: 'Sydney', text: 'Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.' },
]

export default function LunaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="luna-hero-label text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Fine Dining</p>
          <h1 className="luna-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
            An Extraordinary<br /><span className="italic">Evening</span>
          </h1>
          <p className="luna-hero-sub text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Italian fine dining, outdoors in a traditional Balinese village. Two curated tasting experiences. A team of white-clad professionals in your villa.
          </p>
          <div className="luna-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menus" className="px-8 py-4 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#E8C84B] transition-all">See the Menus</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> Message Sofia
            </a>
          </div>
        </div>
      </section>

      {/* Experience Intro */}
      <section className="luna-content py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
            <div className="luna-reveal">
              <img src="/generated/luna-table.jpg" alt="Table setting" className="rounded-2xl w-full aspect-[4/3] object-cover" />
            </div>
            <div className="luna-reveal">
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Experience</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>One Night.<br />Two Journeys.</h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-white/60 mb-6 leading-relaxed">
                We arrive as a team of white-clad professionals. We transform your villa garden or a Balinese village courtyard into an open-air Michelin-inspired dining room.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Every course is prepared in front of your guests. Every wine is paired. Every detail — from the hand-pressed linen to the gold-rimmed plates — is considered. Choose between two curated tasting experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Flame, label: 'Open-Flame Cooking' },
                  { icon: Wine, label: 'Sommelier Pairing' },
                  { icon: Clock, label: '2.5–3 Hour Journey' },
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

      {/* How It Works */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Process</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
            <p className="text-white/50">Four steps. Zero stress.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-2 block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Step {item.step}</span>
                <h3 className="text-lg text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <Phone className="w-4 h-4" /> Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Menus */}
      <section id="menus" className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Menus</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Two Experiences. One Extraordinary Evening.</h2>
            <p className="text-white/50">Every course is prepared in your villa. Every wine is paired by our sommelier.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MENUS.map((menu) => (
              <div key={menu.id} className="luna-reveal rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.name}</h3>
                      <p className="text-sm text-white/50">{menu.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-medium text-[#D4AF37]">{menu.price}</p>
                      <p className="text-xs text-white/40">per person</p>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6">{menu.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {menu.perfectFor.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/60">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10 border-t border-white/10">
                  <div className="mb-8">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Starter</p>
                    {menu.courses.starter.map((c) => (
                      <div key={c.name} className="mb-4 last:mb-0">
                        <h4 className="text-white font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                        <p className="text-white/50 text-sm">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-8">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Main Course</p>
                    {menu.courses.main.map((c) => (
                      <div key={c.name} className="mb-4 last:mb-0">
                        <h4 className="text-white font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                        <p className="text-white/50 text-sm">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-8">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Dessert</p>
                    {menu.courses.dessert.map((c) => (
                      <div key={c.name} className="mb-4 last:mb-0">
                        <h4 className="text-white font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                        <p className="text-white/50 text-sm">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Recommended Wine Pairing</p>
                    <div className="space-y-2 text-sm text-white/50">
                      {menu.wine.red && <p><span className="text-white/70">Red:</span> {menu.wine.red}</p>}
                      {menu.wine.white && <p><span className="text-white/70">White:</span> {menu.wine.white}</p>}
                      {menu.wine.sparkling && <p><span className="text-white/70">Sparkling:</span> {menu.wine.sparkling}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything Included</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <p className="text-white/50">No hidden fees. No surprises. One price, one extraordinary evening.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-white/10">
                <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <Phone className="w-4 h-4" /> Book This Experience
            </a>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Chef</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Chef <span className="italic">Antonio</span></h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-white/60 mb-6 leading-relaxed">
                Trained under a Michelin-starred chef in Milan. 20 years of experience. Antonio leads a team of 8 Indonesian fine dining specialists, each trained in classical Italian technique.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                "Fine dining is not about showing off. It is about making your guests feel like the most important people in the world for one evening."
              </p>
              <div className="space-y-3">
                {['Michelin-starred training, Milan', '8-person Indonesian fine dining team', '500+ fine dining experiences in Bali'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img src="/generated/luna-chef-portrait.jpg" alt="Chef Antonio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
            <p className="text-white/50">Still have questions? Message Sofia on WhatsApp — she responds within the hour.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-white font-medium pr-4" style={{ fontFamily: "'Playfair Display', serif" }}>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <MessageCircle className="w-4 h-4" /> Ask Sofia on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Reserve</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Book Your<br />Extraordinary Evening</h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-white/60 mb-8 leading-relaxed">
                Sofia, our fine dining concierge, will confirm your date and menu within the hour. We recommend booking 7+ days in advance for peak season.
              </p>
              <div className="space-y-4 mb-8">
                {MENUS.map((menu) => (
                  <div key={menu.id} className="flex items-center justify-between py-4 border-b border-white/10 group cursor-pointer">
                    <div>
                      <p className="text-white/80 font-medium">{menu.name}</p>
                      <p className="text-sm text-white/40">{menu.duration}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#D4AF37] font-medium">{menu.price}</span>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /><span className="text-sm text-white/80">Wine pairing available — IDR 850K per guest</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /><span className="text-sm text-white/80">Minimum 4 guests</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /><span className="text-sm text-white/80">Service charge and government tax included</span></div>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
                <Phone className="w-4 h-4" /> Book via WhatsApp
              </a>
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
