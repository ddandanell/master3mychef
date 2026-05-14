import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Baby, Heart, Flower2,
  Camera, Music, Sparkles, GlassWater,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, serviceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20to%20book%20a%20baby%20shower.'
const SITE = 'https://mychef.id'

const FORMATS = [
  {
    title: 'Intimate Baby Shower Brunch',
    price: <AllInPrice price={750000} />,
    guestRange: '10–15 guests',
    description: 'Grazing brunch + mocktail bar + pastel decor + signage + photographer 1h. Perfect for close friends and family.',
    features: ['Grazing brunch (sweet + savoury)', 'Mocktail bar (3 signature drinks)', 'Pastel decor + signage', 'Photographer 1h', 'Service staff', 'Setup + cleanup'],
  },
  {
    title: 'Larger Baby Shower',
    price: <AllInPrice price={1100000} />,
    guestRange: '16–30 guests',
    description: 'Full brunch + mocktail bar + premium decor + signage + guest table setup + photographer 2h + custom cake.',
    features: ['Full brunch + mocktail bar', 'Premium decor + signage', 'Guest table setup', 'Photographer 2h', 'Custom cake', 'Games setup', 'Service staff'],
    highlighted: true,
  },
]

const THEMES = ['Boho', 'Pastel', 'Botanical', 'Classic / Gender-Reveal']

const THEME_CARDS = [
  { name: 'Boho', desc: 'Macramé, dried florals, earthy tones, rattan accents, dreamcatchers.', colour: 'from-[#D7CCC8]/40 to-[#BCAAA4]/20' },
  { name: 'Pastel', desc: 'Soft pinks, blues, lavenders, balloon arches, candy bar.', colour: 'from-[#F8BBD0]/30 to-[#E1BEE7]/20' },
  { name: 'Botanical', desc: 'Greenery walls, eucalyptus, white flowers, natural wood.', colour: 'from-[#C8E6C9]/40 to-[#A5D6A7]/20' },
  { name: 'Classic Gender-Reveal', desc: 'Pink vs blue reveal moment, countdown signage, surprise cake.', colour: 'from-[#BBDEFB]/30 to-[#F8BBD0]/30' },
]

const DECOR_DETAILS = [
  { icon: Flower2, title: 'Floral Arrangements', desc: 'Table centrepieces, entrance garlands, and accent blooms matched to your theme.' },
  { icon: Sparkles, title: 'Signage & Stationery', desc: 'Welcome board, menu cards, place cards, and custom messages.' },
  { icon: Baby, title: 'Table Styling', desc: 'Linens, runners, charger plates, napkin folds, and themed tableware.' },
  { icon: Heart, title: 'Photo Backdrop', desc: 'Themed backdrop with props for guest photos and memories.' },
]

const MOCKTAIL_BAR = [
  { name: 'Tropical Sunrise', desc: 'Mango, passionfruit, and coconut cream. Vibrant and refreshing.' },
  { name: 'Berry Bliss', desc: 'Mixed berries, lime, and sparkling water. Tart and beautiful.' },
  { name: 'Cucumber Mint Cooler', desc: 'Fresh cucumber, mint, and elderflower. Light and elegant.' },
]

const REAL_BABY_SHOWERS = [
  { title: 'Pastel Brunch', location: 'Seminyak Villa', image: '/generated/party-white.webp' },
  { title: 'Botanical Garden', location: 'Ubud Villa', image: '/generated/aura-setup.webp' },
  { title: 'Boho Afternoon', location: 'Canggu Villa', image: '/generated/aura-tablescape.webp' },
  { title: 'Gender-Reveal Surprise', location: 'Sanur Villa', image: '/generated/party-birthday.webp' },
]

const ADDONS = [
  { icon: Camera, title: 'Photographer Extended', price: '+IDR 3.6M (3h)' },
  { icon: Music, title: 'Live Acoustic Guitarist', price: '+IDR 2.4M (1h)' },
  { icon: Flower2, title: 'Premium Florals + Arch', price: '+IDR 3M – 6M' },
  { icon: Heart, title: 'Maternity Photoshoot', price: '+IDR 3.5M' },
  { icon: Baby, title: 'Henna Artist', price: '+IDR 1.5M' },
  { icon: Sparkles, title: 'Custom 2-Tier Cake', price: '+IDR 2.5M – 4.5M' },
]

const FAQS = [
  { q: 'Is the mocktail bar truly alcohol-free?', a: 'Yes — mocktail bar is fully alcohol-free by default. We can add a separate alcohol bar for non-expecting guests at +IDR 350K/pp.' },
  { q: 'Can you do a gender-reveal moment?', a: 'Yes — we can coordinate a gender-reveal cake (pink/blue inside) or a balloon-pop reveal. Tell us at booking.' },
  { q: 'Is one hour of photography enough?', a: 'For intimate baby showers (10–15 guests) one hour captures the key moments. For larger showers, recommend 2–3 hours.' },
  { q: 'Can the mother-to-be be involved in menu choice?', a: 'Yes — we coordinate dietary preferences with the mother-to-be specifically (avoiding pregnancy-cautioned foods).' },
  { q: 'What\'s the typical group size?', a: '10–30. Most baby showers we cater are 15–22 guests.' },
  { q: 'How far in advance?', a: '10–14 days standard. 21 days for full custom decor / cake design.' },
  { q: 'Can it be evening instead of brunch?', a: 'Yes — evening baby shower with cocktail-style menu available; same price band.' },
  { q: 'Do you handle the surprise factor?', a: 'Yes — we coordinate discreetly with the host. Suggest the location of the brunch reveal.' },
]

export default function EventsBabyShowersPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.baby-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.baby-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Baby Shower Catering Bali — Villa Brunches | myCHEF"
        description="Baby shower brunches at your Bali villa. Pastel decor, grazing tables, mocktail bar, 10–30 guests from IDR 750K/pp. Photography optional."
        canonical={`${SITE}/events/baby-showers`}
        ogImage={`${SITE}/generated/hero-baby-showers.jpg`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Baby Shower Catering Bali', 'Baby shower brunch catering at Bali villas. Pastel decor, grazing tables, mocktail bar, and photography.', `${SITE}/events/baby-showers`, 'IDR'),
          offerSchema('Intimate Baby Shower Brunch', 750000, 'IDR', `${SITE}/events/baby-showers`),
          offerSchema('Larger Baby Shower', 1100000, 'IDR', `${SITE}/events/baby-showers`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Baby Showers', `${SITE}/events/baby-showers`, 'Events', `${SITE}/events`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Baby Showers' }]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hero-baby-showers.jpg" alt="Baby shower brunch at Bali villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Chapter 1 — Baby Showers</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Baby Showers<br /><span className="italic">Bali Villas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Pastel decor, grazing brunch, mocktail bar, signage. We handle setup, photography optional. 10–30 guests, daytime, elegant.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all">
              <Calendar className="w-4 h-4" /> Book Baby Shower
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* FORMATS */}
      <section className="py-20 md:py-28 bg-white baby-content">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Two Baby Shower Formats" subtitle="Intimate gathering or larger celebration — both beautifully styled." />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {FORMATS.map((f) => <EventFormatCard key={f.title} {...f} accent="#C5A028" />)}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GroupTotalCalculator pricePerPerson={750000} minGuests={10} maxGuests={15} defaultGuests={12} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={1100000} minGuests={16} maxGuests={30} defaultGuests={20} accent="#C5A028" />
          </div>
        </div>
      </section>

      {/* THEME GALLERY */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Themes" title="Choose Your Style" subtitle="Four signature themes. Custom designs available on request." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THEME_CARDS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className={`aspect-[4/3] bg-gradient-to-br ${t.colour}`} />
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{t.name}</h3>
                  <p className="text-[#4A4745] text-xs">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {THEMES.map((t) => (
              <span key={t} className="px-5 py-3 bg-white border border-[#E8E6E3] rounded-full text-sm font-medium text-[#1A1A1A]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DECOR + SETUP DETAIL */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 4 — Decor" title="What's Included" subtitle="A visual breakdown of the decor and setup in every baby shower package." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DECOR_DETAILS.map((d) => (
              <div key={d.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h4 className="font-medium text-[#1A1A1A] mb-2">{d.title}</h4>
                <p className="text-sm text-[#4A4745]">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOCKTAIL BAR */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 5 — Mocktails" title="Mocktail Bar Option" subtitle="Beautiful, alcohol-free drinks crafted for the mother-to-be and all guests." />
          <div className="bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden">
            {MOCKTAIL_BAR.map((m) => (
              <div key={m.name} className="flex items-start gap-4 px-6 py-5 border-t border-[#E8E6E3] first:border-t-0">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center flex-shrink-0">
                  <GlassWater className="w-4 h-4 text-[#C5A028]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">{m.name}</h4>
                  <p className="text-[#4A4745] text-xs">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4A4745] text-xs mt-4">Alcohol-free by default. Separate alcohol bar for non-expecting guests available at +IDR 350K/pp.</p>
        </div>
      </section>

      {/* REAL BABY SHOWER GALLERY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 6 — Real Showers" title="Celebration Gallery" subtitle="Real baby showers, real villas, real joy." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_BABY_SHOWERS.map((b) => (
              <div key={b.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{b.title}</h3>
                  <p className="text-[#4A4745] text-xs">{b.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Extras" title="Baby Shower Add-Ons" subtitle="Personalise your celebration with these beautiful upgrades." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
                <div className="bg-[#C5A028]/10 rounded-xl p-2.5 shrink-0"><a.icon className="w-5 h-5 text-[#C5A028]" /></div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{a.title}</h3>
                  <p className="text-[#C5A028] font-semibold text-sm">{a.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock title="What New Mothers Say" testimonials={[
        { name: 'Emily R.', location: 'Seminyak Baby Shower', quote: 'The pastel decor was stunning. Every detail was perfect — from the grazing table to the mocktail bar. My guests were amazed.', rating: 5 },
        { name: 'Sophie & Friends', location: 'Canggu Baby Shower', quote: 'Sofia coordinated everything discreetly for my surprise shower. I walked in and cried. Absolutely beautiful.', rating: 5 },
        { name: 'Anna K.', location: 'Ubud Baby Shower', quote: 'The botanical theme matched my villa perfectly. The photographer captured every moment. Highly recommend.', rating: 5 },
      ]} />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Baby Shower FAQ" subtitle="Everything you need to know about baby shower brunches with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Book Your Baby Shower"
            subtitle="We are so excited for you. Tell us about your shower and we will make it beautiful."
            packageOptions={['Intimate Baby Shower', 'Larger Baby Shower']}
            fields={[
              { name: 'format', label: 'Format', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests', type: 'number', placeholder: 'e.g. 18', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'theme', label: 'Theme', type: 'text', placeholder: 'e.g. Pastel, Boho, Gender-Reveal' },
              { name: 'dietary', label: 'Dietary Needs', type: 'textarea', placeholder: 'Mother-to-be preferences, allergies...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent="#C5A028"
          />
        </div>
      </section>

      <PressStrip />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Celebrate?</h2>
          <p className="text-white/70 text-lg mb-8">Send your date, guest count, and theme. We will create a beautiful baby shower brunch.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all"><Calendar className="w-4 h-4" /> Book Baby Shower</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp Sofia</a>
          </div>
        </div>
      </section>

      <TaxFooter />
    </div>
  )
}
