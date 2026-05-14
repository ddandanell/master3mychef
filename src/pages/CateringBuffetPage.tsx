import { useEffect, useRef } from 'react'
// Link used in navigation
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Flame, Wine, Beef, Map, Heart,
  ShieldCheck,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20buffet%20catering%20quote.'
const SITE = 'https://mychef.id'

const BUFFET_PACKAGES = [
  {
    image: '/generated/aura-buffet.webp',
    title: 'Indonesian Buffet',
    price: 'IDR 550,000/person',
    description: '8 hot dishes, 4 cold dishes, dessert, fresh fruit, 5 sambals, rice, noodles, breads.',
    includes: ['Chef', 'Service team (1 per 12 guests)', 'Full chafing setup', 'Serving tables', 'Linens', 'Cutlery', '2.5h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/pkg-italian.webp',
    title: 'International Buffet',
    price: 'IDR 750,000/person',
    description: 'Mediterranean dishes, Asian fusion, roast station, pasta station, global salads, dessert table.',
    includes: ['Chef', 'Service team (1 per 12 guests)', 'Full buffet setup', 'Tables', 'Linens', 'Cutlery', 'Serving equipment', '2.5h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/aura-corporate.webp',
    title: 'Premium Live-Station Buffet',
    price: 'IDR 950,000/person',
    description: '3 live food stations, chef\'s choice options, premium roast, full dessert bar.',
    includes: ['Chef', 'Live-station chefs', 'Service team (1 per 12 guests)', 'Full buffet & station setup', 'Premium serving equipment', 'Tables', 'Linens', 'Cutlery', '2.5h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 30 guests',
  },
]

const ADDONS = [
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', description: 'Professional cocktail station' },
  { title: 'Extra service staff', price: 'Quote based on guests', description: 'Additional servers as needed' },
  { title: 'Live station upgrade', price: 'Quote based on type', description: 'Sushi, pasta, carving, dim sum' },
  { title: 'Premium seafood upgrade', price: 'Quote based on menu', description: 'Lobster, prawns, fresh catch' },
  { title: 'Dessert table upgrade', price: 'Quote based on guests', description: 'Extended dessert selection' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', description: 'Depends on area and event size' },
]

const INCLUDED = [
  'Chef', 'Service team', '1 staff per 12 guests', 'Full buffet setup',
  'Chafing dishes', 'Serving equipment', 'Tables', 'Linens', 'Cutlery',
  'Food labels', '2.5h service', 'Pack-up', 'Cleanup',
]

const BEST_FOR = [
  { icon: Heart, title: 'Villa wedding buffet', desc: 'Elegant garden reception' },
  { icon: Users, title: 'Corporate dinner', desc: 'Professional event dining' },
  { icon: Flame, title: 'Birthday event', desc: 'Celebration with variety' },
  { icon: Wine, title: 'Retreat catering', desc: 'Multi-day group meals' },
  { icon: Map, title: 'Family gathering', desc: 'Large group dining' },
  { icon: Utensils, title: 'Venue event', desc: 'Event space catering' },
  { icon: Beef, title: 'Poolside party', desc: 'Casual villa celebration' },
  { icon: Heart, title: 'After-ceremony dinner', desc: 'Post-wedding reception' },
]

const REQUIREMENTS = [
  'Space for buffet table',
  'Access to kitchen or prep area',
  'Electricity where needed',
  'Water access if required',
  'Parking or loading access',
  'Rain backup for outdoor events',
  'Clear arrival time',
  'Contact person on-site',
]

const AREAS = [
  'Canggu', 'Seminyak', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Sanur', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar',
]

const FAQS = [
  { q: 'What is the minimum guest count for buffet catering?', a: 'Minimum 30 guests for all buffet packages. This ensures the food flow, service quality, and setup costs work properly.' },
  { q: 'Do you provide tables and linens?', a: 'Yes. All buffet packages include serving tables, linens, cutlery, and chafing dishes.' },
  { q: 'Do you bring chafing dishes?', a: 'Yes. Full chafing dish setup is included in every buffet package.' },
  { q: 'How many staff are included?', a: 'We provide 1 service staff per 12 guests, plus a head chef. For 50 guests, that is 4-5 service staff plus chef.' },
  { q: 'Can I choose the dishes?', a: 'Yes. After booking, we send a menu selection form. You can choose from Indonesian, International, or a mix of both.' },
  { q: 'Can you do Indonesian and international food together?', a: 'Absolutely. Many clients choose a mixed buffet with Indonesian mains and international sides, or vice versa.' },
  { q: 'Do you offer live stations?', a: 'Yes. Our Premium Live-Station Buffet includes 3 live cooking stations with chefs preparing food in front of guests.' },
  { q: 'Can you cater at villas?', a: 'Yes. We specialize in villa buffet catering across Bali. We bring all equipment and set up in your garden, terrace, or event space.' },
  { q: 'Do you clean up after service?', a: 'Yes. Full cleanup is included. We pack up all equipment, clear the buffet area, and leave your villa as we found it.' },
  { q: 'Do you charge travel fees?', a: 'Travel fees apply outside Seminyak/Canggu: IDR 250,000 to 700,000 depending on distance and event size.' },
  { q: 'Can you handle dietary restrictions?', a: 'Yes. We label all dishes and can prepare vegetarian, vegan, gluten-free, and halal options. Tell us when booking.' },
  { q: 'How far in advance should I book?', a: 'We recommend 1-2 weeks for buffet catering. For weddings and large events during peak season, 1+ month is ideal.' },
]

export default function CateringBuffetPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.buffet-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.buffet-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Buffet Catering Bali',
    description: 'Full-service buffet catering for villas, weddings, and events. Indonesian, International, and Premium Live-Station options.',
    price: '550000',
    priceCurrency: 'IDR',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: `${SITE}/catering/buffet`,
    seller: { '@id': 'https://mychef.id/#business' },
  }

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Buffet Catering Bali | Villa, Wedding & Event Buffet — myCHEF"
        description="Full-service buffet catering in Bali for villas, weddings, and events. Indonesian, International, and Premium Live-Station buffets. Chef, staff, setup & cleanup included. From IDR 550,000/person. Min. 30 guests."
        canonical={`${SITE}/catering/buffet`}
        ogImage={`${SITE}/generated/aura-buffet.webp`}
        jsonLd={[localBusinessSchema, offerSchema, breadcrumbSchema('Buffet Catering', `${SITE}/catering/buffet`)]}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/aura-buffet.webp"
            alt="Full buffet table at a Bali villa event with chafing dishes and staff"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Buffet Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Buffet Catering in Bali<br />
            <span className="italic">for Villas, Weddings & Private Events</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Full-service buffet catering for larger groups, villa events, weddings, birthdays, retreats, and corporate dinners. Choose Indonesian, International, or Premium Live-Station Buffet packages with chef, service team, setup, equipment, and cleanup included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Calendar className="w-4 h-4" /> Check buffet availability
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 550,000/person · Min. 30 guests · Chef & staff included</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ WHY BUFFET WORKS ═══════ */}
      <section className="buffet-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Why Buffet"
                title="The Easiest Way to Feed a Bigger Group"
                subtitle="Buffet catering works when you need food to move smoothly. Guests can eat at their own pace, the service team keeps the table clean, and the event does not stop every time food is served."
              />
              <div className="grid grid-cols-2 gap-3">
                {['Weddings', 'Birthdays', 'Villa parties', 'Corporate dinners', 'Retreats', 'Family gatherings', 'Venue events', 'Groups of 30+'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6B8E5A]" />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/hub-catering.webp"
                alt="Guests approaching a buffet table at a villa event"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Choose Your Buffet Package"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {BUFFET_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#6B8E5A" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Included"
            title="What Every Buffet Package Includes"
            subtitle="Buffet catering includes the food, people, and setup required to run the meal properly. The goal is simple: your guests eat, the table stays clean, and the event keeps moving."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Buffet Add-Ons"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <CateringAddOnCard key={addon.title} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BEST FOR ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Best For These Events"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#6B8E5A]" />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SETUP REQUIREMENTS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Logistics"
            title="What We Need From the Venue or Villa"
            subtitle="Buffet catering needs enough space for setup, food flow, staff movement, and safe serving. For private villas, we confirm the layout before finalizing the event."
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {REQUIREMENTS.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <ShieldCheck className="w-5 h-5 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING SUMMARY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Compare"
            title="Buffet Catering Prices"
            subtitle="Final price depends on guest count, location, setup needs, travel fee, add-ons, and selected menu direction."
          />
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Package</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Price</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Minimum</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Indonesian Buffet', price: 'IDR 550,000/person', min: '30 guests', best: 'Local-style villa events' },
                  { name: 'International Buffet', price: 'IDR 750,000/person', min: '30 guests', best: 'Mixed groups and weddings' },
                  { name: 'Premium Live-Station', price: 'IDR 950,000/person', min: '30 guests', best: 'Premium events and large parties' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.name}</td>
                    <td className="py-4 text-[#6B8E5A] font-semibold">{row.price}</td>
                    <td className="py-4">{row.min}</td>
                    <td className="py-4 text-[#4A4745]">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">
            {[
              { name: 'Indonesian Buffet', price: 'IDR 550,000/person', min: '30 guests', best: 'Local-style villa events' },
              { name: 'International Buffet', price: 'IDR 750,000/person', min: '30 guests', best: 'Mixed groups and weddings' },
              { name: 'Premium Live-Station', price: 'IDR 950,000/person', min: '30 guests', best: 'Premium events and large parties' },
            ].map((row) => (
              <div key={row.name} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{row.name}</span>
                  <span className="text-[#6B8E5A] font-semibold text-sm">{row.price}</span>
                </div>
                <p className="text-xs text-[#4A4745]">Min. {row.min} · {row.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AREA COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Buffet Catering Across Bali"
            subtitle="Some areas require a travel fee depending on distance, staff, equipment, and event time. Travel fee is confirmed before deposit."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#6B8E5A] hover:text-[#6B8E5A] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Book Now"
            title="Request Buffet Catering"
          />
          <BookingFormCatering
            title="Request Buffet Catering"
            subtitle="We will confirm availability, setup needs, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Buffet Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Event Time', type: 'text', icon: Flame, placeholder: 'e.g. 6:00 PM' },
              { name: 'area', label: 'Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'venue', label: 'Venue or Villa Address', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 50', required: true },
              { name: 'eventType', label: 'Event Type', type: 'text', placeholder: 'Wedding, corporate, birthday...' },
              { name: 'kitchen', label: 'Kitchen/Prep Space Available?', type: 'text', placeholder: 'Yes/No' },
              { name: 'indoor', label: 'Indoor or Outdoor?', type: 'text', placeholder: 'Indoor / Outdoor / Both' },
              { name: 'rain', label: 'Rain Backup?', type: 'text', placeholder: 'Yes/No' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Bartender, extra staff, live stations...' },
              { name: 'dietary', label: 'Dietary Notes', type: 'textarea', placeholder: 'Allergies, restrictions...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Indonesian Buffet', 'International Buffet', 'Premium Live-Station Buffet']}
            accent="#6B8E5A"
          />
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Sarah & James', location: 'Seminyak Villa', quote: 'The Indonesian buffet for 40 guests was incredible. The sate lilit and nasi kuning were authentic and delicious. Highly recommend myCHEF.', rating: 5 },
          { name: 'The Chen Family', location: 'Canggu Villa', quote: 'We booked the International buffet for our parents\' anniversary. The live stations were a hit and the service team was impeccable.', rating: 5 },
          { name: 'Emma R.', location: 'Uluwatu Villa', quote: 'Premium live-station buffet for our wedding reception. The pasta and carving stations kept everyone happy. Beautiful setup too.', rating: 5 },
        ]}
        title="What Buffet Guests Say"
        subtitle="Real reviews from villa buffet events across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Buffet FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/aura-corporate.webp"
            alt="Completed buffet table with food ready and staff"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need Buffet Catering for Your Event?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send your date, area, guest count, and preferred buffet style. We will confirm availability, setup needs, and final price by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Calendar className="w-4 h-4" /> Check buffet availability
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
