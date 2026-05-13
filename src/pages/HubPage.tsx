import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Users, Clock, ChefHat, MessageCircle, Check, Phone, Utensils, Sparkles, Shield, Award } from 'lucide-react'
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
  { q: 'What is the cancellation policy?', a: 'Full refund 14+ days before. 50% refund 7–13 days before. No refund less than 7 days. See our full cancellation policy for details.' },
  { q: 'How does payment work?', a: 'A 25% deposit confirms your booking and locks your chef. The remaining 75% is paid when the chef arrives at your villa, before service begins.' },
]

const TRUST_STATS = [
  { icon: MapPin, value: '560+', label: 'Villas Served' },
  { icon: Users, value: '12,000+', label: 'Happy Guests' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Clock, value: '8+', label: 'Years in Bali' },
]

const REVIEWS = [
  { name: 'James & Sarah', location: 'London', dept: 'Fine Dining', text: 'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.' },
  { name: 'The Harrisons', location: 'Sydney', dept: 'Fine Dining', text: 'Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.' },
  { name: 'Marco & Elena', location: 'Milan', dept: 'Fine Dining', text: 'As Italians, we are picky about our food. Matteo\'s tagliatelle transported us back to Bologna. The wine pairing was impeccable.' },
  { name: 'The Wilson Family', location: 'Singapore', dept: 'Fine Dining', text: 'We booked the Wagyu Experience for my father\'s 70th. He has eaten at three Michelin stars. He said this was better because it was ours.' },
  { name: 'Priya & Rahul', location: 'Mumbai', dept: 'Fine Dining', text: 'The Mediterranean Sea menu was light, sophisticated, and deeply flavourful. Every plate looked like art. Every bite tasted like summer in Sicily.' },
  { name: 'David Chen', location: 'Hong Kong', dept: 'Fine Dining', text: 'Paco\s ribeye was the best piece of meat I have had in a decade. The fire, the technique, the timing — this man understands heat.' },
  { name: 'The O\'Briens', location: 'Dublin', dept: 'Catering', text: 'Seven breakfasts, five lunches, four dinners across ten days. Never the same dish twice. The kids asked if Chef Antonio could move in.' },
  { name: 'Lisa & Tom', location: 'Amsterdam', dept: 'Catering', text: 'We hired a villa chef for our honeymoon. Waking up to fresh croissants and Balinese coffee every morning — that is the definition of luxury.' },
  { name: 'The Nakamura Family', location: 'Tokyo', dept: 'Catering', text: 'Our chef adjusted every meal for our children\'s tastes without making it feel like kids\' food. The level of care was extraordinary.' },
  { name: 'Sophie & Pierre', location: 'Paris', dept: 'Catering', text: 'Ten days in Ubud with a private chef. We never went to a restaurant. Why would we? The best food in Bali was in our villa.' },
  { name: 'The Johnsons', location: 'New York', dept: 'Catering', text: 'We have used private chefs in Tuscany, Provence, and the Hamptons. The myCHEF team in Bali was the most professional of all.' },
  { name: 'Anna K.', location: 'Berlin', dept: 'Catering', text: 'As a vegetarian in Bali, I was worried. The chef created dishes I still dream about. Grilled tempeh with sambal mataku — unforgettable.' },
  { name: 'The Garcias', location: 'Barcelona', dept: 'Events', text: 'Our wedding dinner for 40 guests. Every plate came out perfect. Every server knew our names. It felt like a five-star restaurant in our garden.' },
  { name: 'Rebecca & Sam', location: 'Melbourne', dept: 'Events', text: 'We hosted a retreat for 25 executives. The myCHEF team handled everything — dietary restrictions, timing, presentation. Flawless.' },
  { name: 'Michael R.', location: 'Dubai', dept: 'Events', text: 'My 50th birthday party. They turned our villa pool deck into a dining room that looked like something from a magazine. And the food matched.' },
  { name: 'The Lims', location: 'Kuala Lumpur', dept: 'Events', text: 'Corporate dinner for 30. The team arrived at 2 PM and worked silently until service. Not a single detail was missed.' },
  { name: 'Clara & Felix', location: 'Zurich', dept: 'Events', text: 'We wanted something intimate for our engagement. They created a candlelit dinner for twelve that felt like a scene from a film.' },
  { name: 'The Patels', location: 'Mumbai', dept: 'Events', text: 'Our daughter\'s graduation dinner. The dessert table alone — Lukas\'s pastries are worth the flight to Bali.' },
  { name: 'Richard & Amanda', location: 'San Francisco', dept: 'Fine Dining', text: 'We have done tasting menus in Napa, Paris, and Tokyo. The Wagyu Experience at our villa rivalled all of them. Paco is a master.' },
  { name: 'The Müllers', location: 'Munich', dept: 'Catering', text: 'Two weeks in Canggu with daily chef service. The grocery receipts were transparent, the food was exceptional, and the kitchen was cleaner when they left than when they arrived.' },
  { name: 'Jessica & Ben', location: 'Toronto', dept: 'Fine Dining', text: 'The sommelier paired a Sicilian white with the lobster tagliatelle that made me cry. Not exaggerating. It was that good.' },
  { name: 'The Kwons', location: 'Seoul', dept: 'Events', text: '100 guests for our company anniversary. They served a seven-course plated dinner with military precision. Every guest commented on the food.' },
  { name: 'Olivia & Marcus', location: 'Stockholm', dept: 'Catering', text: 'Fresh juice every morning, poolside lunches, candlelit dinners. We felt like we were living in a luxury resort — except it was our villa.' },
  { name: 'The Fosters', location: 'Chicago', dept: 'Fine Dining', text: 'We asked for a surprise menu. What arrived was a journey through Adriano\'s career — Modena, Tokyo, Bali. Each course told a story.' },
  { name: 'Yuki & Kenji', location: 'Osaka', dept: 'Events', text: 'Traditional Japanese wedding ceremony followed by a Western-style reception. The team respected every ritual while delivering world-class cuisine.' },
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
            <a href="https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#E8C84B] transition-all hover:scale-105">
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
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105" style={{ background: 'var(--u-accent)', color: '#fff' }}>
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
                {['Michelin-trained leadership', '50+ staff', '560+ villas served', '12,000+ guests'].map((item) => (
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

      {/* TRUST BAR + AWARDS */}
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
          {/* Villa Awards */}
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-center gap-6" style={{ borderColor: 'var(--u-border)' }}>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--u-text)' }}>Villa Award 2025</p>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--u-text-muted)' }}>Best Choice — Private Dining</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--u-text)' }}>Villa Award 2026</p>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--u-text-muted)' }}>Best Choice — Private Dining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="u-label text-sm mb-4">Guest Words</p>
            <h2 className="u-heading text-4xl md:text-5xl mb-3">25 Reviews. One Truth.</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--u-text-muted)' }}>Real guests. Real villas. Real experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="p-6 rounded-2xl border transition-all hover:border-[#D4AF37]/30" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: 'var(--u-text)' }}>"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{review.name}</p>
                    <p className="text-xs" style={{ color: 'var(--u-text-muted)' }}>{review.location}</p>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase px-2 py-1 rounded-full border" style={{ borderColor: 'var(--u-border)', color: 'var(--u-text-muted)' }}>{review.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VILLA & AIRBNB OWNERS */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg-alt)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="u-label text-sm mb-4">Partnerships</p>
              <h2 className="u-heading text-4xl md:text-5xl mb-6">For Villa & Airbnb Owners</h2>
              <div className="gold-arc mb-8" />
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                Elevate your guests' experience by partnering with myCHEF. We currently work with 560+ luxury villas across Bali. Whatever your guests need, we lift everything we touch with excellence.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Premium Guest Service', desc: 'Offer exclusive dining without any effort on your part.' },
                  { title: 'Easy Partnership', desc: 'Simple setup with ongoing support for you and your guests.' },
                  { title: 'Higher Ratings', desc: 'Villas that offer private chef services see higher guest satisfaction and repeat bookings.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--u-accent)' }} />
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--u-text)' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/partners" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105" style={{ background: 'var(--u-accent)', color: '#fff' }}>
                Partner With myCHEF <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/generated/hub-villa.jpg" alt="Luxury villa partnership" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--u-bg)' }}>
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
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105" style={{ background: '#25D366', color: '#fff' }}>
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
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all hover:scale-105">
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
