import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Wine, Camera, Music, CandlestickChart, Flower2, Signpost } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { providerRef } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { ArticleContentSection, Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'an anniversary celebration in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: "Couple's Intimate Dinner",
    price: <AllInPrice price={1500000} />,
    guestRange: '2 guests',
    description: 'Custom or fine-dining menu in-villa, candle setup, petal pathway, welcome sparkling wine, photographer for 1 hour, personalised toast.',
    features: ['Custom or Fine Dining menu', 'Candle + ambient lighting', 'Petal pathway', 'Welcome sparkling wine', 'Photographer 1h', 'Personalised toast'],
  },
  {
    title: 'Small-Group Anniversary',
    price: <AllInPrice price={1200000} />,
    guestRange: '4–16 guests',
    description: 'Four-course plated dinner with family and friends, service team, table styling, personalised toast moment, photographer for 2 hours.',
    features: ['4-course plated dinner', 'Service team', 'Table styling', 'Personalised toast', 'Photographer 2h', 'Soft music'],
    highlighted: true,
  },
  {
    title: 'Renewal of Vows + Dinner',
    price: <AllInPrice price={2500000} />,
    guestRange: '10–30 guests',
    description: 'Officiant and ceremony, floral arch, ceremony setup, plated reception, day-of coordinator, photographer for 4 hours.',
    features: ['Officiant + ceremony', 'Floral arch', 'Ceremony setup', 'Plated reception', 'Day-of coordinator', 'Photographer 4h'],
  },
]

const REAL_ANNIVERSARIES = [
  { names: 'Anna & Michael', years: '10 Years', location: 'Seminyak Villa', image: '/generated/mychef-events-bali-hero-anniversaries.webp' },
  { names: 'Sarah & Tom', years: '25 Years', location: 'Uluwatu Villa', image: '/generated/mychef-events-bali-anniversaries-chef.webp' },
  { names: 'Jenny & David', years: '5 Years', location: 'Canggu Villa', image: '/generated/mychef-events-bali-anniversaries-tablescape.webp' },
  { names: 'Maria & Carlos', years: 'Vow Renewal', location: 'Ubud Villa', image: '/generated/mychef-events-bali-anniversaries-toast.webp' },
]

const SETUP_DETAILS = [
  { icon: CandlestickChart, title: 'Candle Landscape', desc: '50+ candles in varied heights around your table.' },
  { icon: Flower2, title: 'Petal Pathway', desc: 'Fresh rose or frangipani petals from villa entrance to table.' },
  { icon: Signpost, title: 'Personalised Signage', desc: 'Your names and anniversary year, kept as a keepsake.' },
]

const ADDONS = [
  { icon: Camera, title: 'Anniversary Cake', price: 'IDR 1.5M – 3M' },
  { icon: Wine, title: 'Champagne Veuve', price: 'IDR 2.5M' },
  { icon: Wine, title: 'Champagne Krug', price: 'IDR 5.5M' },
  { icon: Music, title: 'Acoustic Musician', price: 'IDR 2.4M (1h)' },
  { icon: Music, title: 'Saxophonist', price: 'IDR 3M (1h)' },
  { icon: Camera, title: 'Extended Photography', price: 'IDR 2.4M (2h)' },
]

const FAQS = [
  { q: 'How much does an anniversary dinner in Bali cost?', a: 'From IDR 1.2M–1.5M++ per person for dinners (minimum 2 guests) and IDR 2.5M++ per person for vow renewals with reception. ++ adds 11% government tax and 10% service charge; quotes always state the full total including tax and service before you confirm.' },
  { q: "What's the difference between an anniversary dinner and a regular private chef dinner?", a: 'The occasion layer: styled table and candle landscape, petal pathway, personalised signage and toast, a photographer to capture it, and surprise coordination — bundled into the package rather than improvised.' },
  { q: 'Can you arrange the whole thing as a surprise?', a: 'Yes — it is our specialty on this page. We coordinate with one person only, stage everything while your partner is out, and time the reveal with you in advance.' },
  { q: 'Can the dinner be on a beach instead of at our villa?', a: 'Yes — a partner beach venue is available with a IDR 1.5M surcharge plus the local beach permit, which we arrange. Villa dinners remain the most private option.' },
  { q: 'Can we use your fine-dining menus?', a: 'Yes — the Mediterranean Sea (IDR 2.2M++) and Wagyu (IDR 2.4M++) menus are available for anniversary dinners, or we design a custom menu at no extra planning cost.' },
  { q: 'How far in advance should we book?', a: 'Seven days minimum, fourteen recommended. Vow renewals need 21+ days for officiant and permit coordination. Peak-season dates go earlier.' },
  { q: 'What is the cancellation policy?', a: 'Full refund 14+ days before, 50% refund 7–13 days before, no refund under 7 days. Terms are written into every quote.' },
  { q: 'What deposit is required?', a: '50% confirms your date, with the balance due before the event.' },
]

const ANNIVERSARY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Anniversary Dinner Bali',
      provider: providerRef,
      areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
      serviceType: 'Anniversary dinner catering',
      description: 'Private chef anniversary dinners and vow renewals at Bali villas: styled tables, custom menus, photography and surprise coordination, from IDR 1.2M++/person.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'IDR',
        lowPrice: '1200000',
        highPrice: '2500000',
        offers: [
          { '@type': 'Offer', name: "Couple's Intimate Dinner", price: '1500000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Small-Group Anniversary', price: '1200000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Renewal of Vows + Dinner', price: '2500000', priceCurrency: 'IDR' },
        ],
      },
      url: `${SITE}/events/anniversaries`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does an anniversary dinner in Bali cost?', acceptedAnswer: { '@type': 'Answer', text: 'From IDR 1.2M–1.5M++ per person for dinners (minimum 2 guests) and IDR 2.5M++ per person for vow renewals. ++ adds 11% government tax and 10% service charge; quotes state the full total including tax and service before you confirm.' } },
        { '@type': 'Question', name: "What's different from a regular private chef dinner?", acceptedAnswer: { '@type': 'Answer', text: 'The occasion layer: styled table, candle landscape, petal pathway, personalised signage and toast, photographer, and surprise coordination — bundled into the package.' } },
        { '@type': 'Question', name: 'Can you arrange the whole thing as a surprise?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — one contact person only, staging while your partner is out, and a reveal timed with you in advance.' } },
        { '@type': 'Question', name: 'Can the dinner be on a beach instead of at our villa?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — a partner beach venue is available with a IDR 1.5M surcharge plus the local beach permit, which is arranged for you.' } },
        { '@type': 'Question', name: 'Can we use your fine-dining menus?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Mediterranean Sea (IDR 2.2M++) and Wagyu (IDR 2.4M++) menus are available, or a custom menu at no extra planning cost.' } },
        { '@type': 'Question', name: 'How far in advance should we book?', acceptedAnswer: { '@type': 'Answer', text: 'Seven days minimum, fourteen recommended; vow renewals need 21+ days for officiant and permit coordination.' } },
        { '@type': 'Question', name: 'What is the cancellation policy?', acceptedAnswer: { '@type': 'Answer', text: 'Full refund 14+ days before, 50% refund 7–13 days before, no refund under 7 days.' } },
        { '@type': 'Question', name: 'What deposit is required?', acceptedAnswer: { '@type': 'Answer', text: '50% confirms the date, with the balance due before the event.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Events', item: `${SITE}/events` },
        { '@type': 'ListItem', position: 3, name: 'Anniversaries', item: `${SITE}/events/anniversaries` },
      ],
    },
  ],
}

export default function EventsAnniversariesPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.anniversary-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.anniversary-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Anniversary Dinner Bali | Private Romantic Catering | myCHEF"
        description="Celebrate your anniversary with an intimate styled dinner under the stars — custom menus and sommelier pairing at your Bali villa. WhatsApp myCHEF."
        canonical={`${SITE}/events/anniversaries`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-anniversaries.webp`}
        jsonLd={ANNIVERSARY_SCHEMA}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-hero-anniversaries.webp" alt="Romantic candlelit anniversary dinner for two by a Bali villa pool" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Anniversaries' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Anniversary Dinners
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Anniversary Dinners in Bali — Built Around Your Story
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            Some anniversaries deserve more than a reservation. Whether it's your first year or your fiftieth, a myCHEF anniversary dinner brings the celebration to your Bali villa: a private chef, a table styled for the occasion, a menu built around your history together — and, if you want it, a surprise your partner never sees coming.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-anniversaries-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Book Your Anniversary Dinner
            </a>
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Open Inquiry Form
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Surprise coordination is our specialty — we plan only with you.
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white anniversary-content anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Built Around You
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                From a candlelit dinner for two to a vow renewal with family and friends
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                From a candlelit dinner for two to a vow renewal with family and friends, one team handles food, service, styling and coordination. You just show up and celebrate.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Celebrating something else? See our <Link to="/fine-dining/romantic-dinner" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">romantic dinners for two</Link>, <Link to="/proposal-dinner" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">planning a proposal instead?</Link>, <Link to="/honeymoon-chef" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">honeymoon private chef</Link> packages, or <Link to="/events" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">all event catering</Link>.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-hero-anniversaries.webp" alt="Intimate anniversary dinner table set for two by a Bali villa pool at sunset" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Packages" title="Anniversary Packages & Prices" subtitle="Three tiers built around privacy, pacing, and how visible you want the celebration to feel." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            All prices ++ (11% government tax + 10% service charge). Your quote states the full total including tax and service before you commit. Premium ingredient upgrades — lobster, imported beef, oysters — quoted separately at cost.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={2} maxGuests={4} defaultGuests={2} label=" guests" accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={1200000} minGuests={4} maxGuests={16} defaultGuests={8} label=" guests" accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={2500000} minGuests={10} maxGuests={30} defaultGuests={16} label=" guests" accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                The Evening
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What the Evening Looks Like
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                For most couples the magic starts before the first plate. The chef arrives to prep quietly in your villa kitchen, the floor team lays candles and glassware, and the table is styled so the reveal lands the moment you walk in. A welcome drink and a small canapé course open the evening; then a five- or six-course dinner unfolds at the pace of your conversation — not a restaurant's turnover schedule.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Service is attentive but unobtrusive. Courses are fired to order, wine is managed for you, and if there's a toast, a speech or a surprise reveal, the evening slows down around it.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-anniversaries-chef.webp" alt="Private Indonesian chef plating an elegant anniversary course in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-anniversaries-plated.webp" alt="Fine plated anniversary dish on a candlelit table in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Menu & Wine
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Menus & Wine
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Anniversary menus sit between restaurant refinement and private-villa comfort. Choose one of our signature fine-dining menus — the <strong>Mediterranean Sea</strong> (IDR 2.2M++/person) or the <strong>Wagyu</strong> (IDR 2.4M++/person) — or have our chefs design something entirely around you: the cuisine from your honeymoon, the dish from your first date, a menu that tells your story in courses.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Wine pairing is available with every package, and we're equally happy to brief the evening around champagne, a favourite label, or a thoughtful alcohol-free pairing. See our <Link to="/in-villa-service/sommelier" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">sommelier & wine pairing</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Styling
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Styling & Celebration Add-Ons
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Concentrated, intentional styling — the arrival path, the dining table, the one or two moments that matter in photos:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {SETUP_DETAILS.map((detail) => (
                  <div key={detail.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center mx-auto mb-4">
                      <detail.icon className="w-5 h-5 text-[#2C5F7C]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{detail.title}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{detail.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => (
                  <div key={`${addon.title}-${addon.price}`} className="rounded-2xl border border-[#E8E6E3] bg-white p-4 flex items-start gap-3">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><addon.icon className="w-4 h-4 text-[#2C5F7C]" /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A]">{addon.title}</h4>
                      <p className="text-sm font-semibold text-[#2C5F7C]">{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-anniversaries-tablescape.webp" alt="Romantic anniversary tablescape with candles and flowers in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Surprise Planning
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Planning a Surprise Anniversary
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Surprise anniversaries work because the operational side stays invisible — and that's precisely what we do. We brief one contact person only. The table is staged while your partner is at a spa, on a beach walk or out for the afternoon. Chef arrival, candles, flowers, the chilled champagne and the photographer are all timed backwards from the reveal. And when the moment lands, the evening flows straight into dinner without an awkward reset.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                If there's a speech, a vow reading or a ring presentation, the service pace slows so nothing feels rushed. <Link to="/proposal-dinner" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">Planning a proposal instead?</Link>
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-anniversaries-toast.webp" alt="Couple toasting with champagne at an intimate Bali villa anniversary dinner" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-anniversaries-toast.webp" alt="Vow renewal ceremony and reception at a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Vow Renewals
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Vow Renewals in Your Villa
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                For milestone years, the vow renewal package wraps a ceremony and reception into one evening: an officiant, a floral arch, ceremony styling, then a plated reception for 10–30 guests with full coordination. We recommend booking 21+ days ahead so officiant and any permit coordination is unhurried. Prefer sand to stone? A partner beach venue is available with a IDR 1.5M surcharge plus the applicable beach permit.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Looking for a full wedding reception? See <Link to="/events/weddings" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">villa wedding catering</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Real Anniversaries" title="Celebration Gallery" subtitle="Real couple dinners, styled tables, and vow-renewal moments across Bali villas." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            The images below show the different tones anniversary clients usually choose: deeply private dinners, chef-led table service, more visual styling, and bigger celebration moments when friends or family join. All four formats are handled by the same core team — chef, floor staff, and coordinator — so the level of execution stays consistent even as the mood changes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_ANNIVERSARIES.map((anniversary) => (
              <div key={anniversary.names} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={anniversary.image} alt={`${anniversary.names} anniversary in ${anniversary.location}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{anniversary.names}</h3>
                  <p className="text-[#4A4745] text-xs">{anniversary.years} · {anniversary.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="What Couples Say"
        subtitle="Private enough to feel personal, structured enough to feel easy."
        testimonials={[
          { name: 'Anna & Michael', location: 'Seminyak Anniversary', quote: 'The surprise setup was timed perfectly. We walked in, had our moment, and dinner just flowed naturally from there.', rating: 5 },
          { name: 'Sarah & Tom', location: 'Uluwatu Vow Renewal', quote: 'We renewed our vows with family and the team managed ceremony, reception, and the dinner service without it ever feeling over-produced.', rating: 5 },
          { name: 'Jenny & David', location: 'Canggu Intimate Dinner', quote: 'It felt far more personal than going to a hotel restaurant. The chef, the pacing, and the table styling were exactly right.', rating: 5 },
        ]}
      />

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Anniversary Dinner Bali — FAQ" subtitle="Everything you need to know about anniversary dinners with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#C5A028] mb-3">Also available</p>
          <h2 className="text-2xl font-semibold text-[#1A1916] mb-8">Explore More myCHEF Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/fine-dining/romantic-dinner', label: 'Romantic Dinners' },
              { to: '/proposal-dinner', label: 'Proposal Dinner' },
              { to: '/honeymoon-chef', label: 'Honeymoon Chef' },
              { to: '/pricing', label: 'full pricing guide' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 px-4 rounded border border-[#C5A028]/30 text-[#1A1916] hover:bg-[#C5A028]/10 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-3xl mx-auto mt-8 leading-relaxed">
            For <Link to="/fine-dining/romantic-dinner" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">romantic dinners for two</Link>,{' '}
            <Link to="/proposal-dinner" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">planning a proposal instead?</Link>,{' '}
            or a <Link to="/honeymoon-chef" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">honeymoon private chef</Link>. Browse{' '}
            <Link to="/events" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">all event catering</Link>,{' '}
            <Link to="/events/weddings" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">villa wedding catering</Link>,{' '}
            <Link to="/in-villa-service/sommelier" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">sommelier & wine pairing</Link>, and our{' '}
            <Link to="/pricing" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">full pricing guide</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Get Started" title="Tell Us What You're Celebrating" subtitle="Share the date, the year you're marking, and whether there's a surprise involved. We'll build the evening around that brief — usually confirmed within a day." />
          <BookingFormCatering
            title="Tell Us About Your Anniversary"
            subtitle="Share the date, the feeling you want, and whether there is a surprise element. We will build the evening around that brief."
            packageOptions={["Couple's Intimate Dinner", 'Small-Group Anniversary', 'Renewal of Vows + Dinner']}
            fields={[
              { name: 'package', label: 'Package', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests', type: 'number', placeholder: 'e.g. 2', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'occasion', label: 'What Are You Celebrating?', type: 'text', placeholder: 'e.g. 10th anniversary, surprise dinner' },
              { name: 'wine', label: 'Wine / Drinks Preference', type: 'text', placeholder: 'Champagne, wine pairing, no alcohol...' },
              { name: 'surprise', label: 'Surprise Element?', type: 'textarea', placeholder: 'Tell us about any reveal, speech, or discreet setup needs...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
          />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ RELATED EVENTS ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Other Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'villa wedding catering', href: '/events/weddings', desc: 'Villa wedding catering and planning.' },
              { label: 'Birthdays', href: '/events/birthdays', desc: 'Milestone birthday celebrations.' },
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Private celebrations and mixers.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained private dinners.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, bartenders, and staff.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="events-anniversaries"
        serviceName="anniversary dinner in Bali"
        intent="anniversary packages and pricing"
      />
    </div>
  )
}
