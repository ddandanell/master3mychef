import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Users, Baby, Heart, Flower2,
  Check, Camera, Music, Sparkles,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20to%20book%20a%20baby%20shower.'
const SITE = 'https://mychef.id'

const FORMATS = [
  {
    title: 'Intimate Baby Shower Brunch',
    price: 'IDR 750,000/person',
    guestRange: '10–15 guests',
    description: 'Grazing brunch + mocktail bar + pastel decor + signage + photographer 1h. Perfect for close friends and family.',
    features: ['Grazing brunch (sweet + savoury)', 'Mocktail bar (3 signature drinks)', 'Pastel decor + signage', 'Photographer 1h', 'Service staff', 'Setup + cleanup'],
  },
  {
    title: 'Larger Baby Shower',
    price: 'IDR 1,100,000/person',
    guestRange: '16–30 guests',
    description: 'Full brunch + mocktail bar + premium decor + signage + guest table setup + photographer 2h + custom cake.',
    features: ['Full brunch + mocktail bar', 'Premium decor + signage', 'Guest table setup', 'Photographer 2h', 'Custom cake', 'Games setup', 'Service staff'],
    highlighted: true,
  },
]

const THEMES = ['Boho', 'Pastel', 'Botanical', 'Classic / Gender-Reveal']

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
        jsonLd={[localBusinessSchema, breadcrumbSchema('Baby Showers', `${SITE}/events/baby-showers`, 'Events', `${SITE}/events`)]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/aura-corporate.webp" alt="Baby shower brunch at Bali villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Baby Showers</p>
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
          <SectionHeader eyebrow="Formats" title="Two Baby Shower Formats" subtitle="Intimate gathering or larger celebration — both beautifully styled." />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {FORMATS.map((f) => <EventFormatCard key={f.title} {...f} accent="#C5A028" />)}
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader eyebrow="Themes" title="Choose Your Style" subtitle="Pastel, boho, botanical, or classic gender-reveal." />
          <div className="flex flex-wrap justify-center gap-3">
            {THEMES.map((t) => (
              <span key={t} className="px-5 py-3 bg-white border border-[#E8E6E3] rounded-full text-sm font-medium text-[#1A1A1A]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Extras" title="Baby Shower Add-Ons" subtitle="Personalise your celebration with these beautiful upgrades." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map((a) => (
              <div key={a.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
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
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Baby Shower FAQ" subtitle="Everything you need to know about baby shower brunches with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 bg-white">
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
