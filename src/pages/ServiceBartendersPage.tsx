import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Star, ShieldCheck, Award, Wine } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'bartender service in Bali', intent: 'availability and pricing' })

const briefJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Private Bartender Hire Bali",
      "serviceType": "Private bartender hire",
      "provider": {
        "@type": "Organization",
        "name": "myCHEF",
        "url": "https://mychef.id",
        "telephone": "+62 896-7407-2020",
        "email": "bali@mychef.id"
      },
      "areaServed": ["Seminyak", "Canggu", "Ubud", "Uluwatu", "Nusa Dua", "Jimbaran", "Sanur", "Bali"],
      "description": "Hire a private bartender for your Bali villa party, wedding or event. Classic and signature cocktails, full bar setup, glassware, ice and garnish prep — from IDR 350,000 per hour, 3-hour minimum.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "IDR",
        "price": "350000",
        "unitText": "per hour",
        "description": "Private bartender, 3-hour minimum. Alcohol separate: BYO from shopping list or full sourcing at +15% service fee. Subject to 11% tax + 10% service charge."
      },
      "url": "https://mychef.id/in-villa-service/bartenders"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does a private bartender cost in Bali?", "acceptedAnswer": { "@type": "Answer", "text": "IDR 350,000 per hour with a 3-hour minimum, covering the bartender, full bar kit, glassware, ice and garnishes. Alcohol is separate — BYO from a shopping list or full sourcing at a 15% service fee. Rates are subject to 11% tax + 10% service charge." } },
        { "@type": "Question", "name": "Is the alcohol included?", "acceptedAnswer": { "@type": "Answer", "text": "No — the hourly rate covers staff, equipment and setup. You buy from a precise shopping list or we source everything for a 15% service fee." } },
        { "@type": "Question", "name": "Is the alcohol you source genuine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We purchase only from licensed distributors with excise-stamped stock, and local spirits such as arak come only from licensed Balinese producers." } },
        { "@type": "Question", "name": "What cocktails can your bartenders make?", "acceptedAnswer": { "@type": "Answer", "text": "All classics (Martini, Old Fashioned, Mojito, Margarita) plus signature cocktails designed for your event; premium bartenders offer molecular and flair techniques." } },
        { "@type": "Question", "name": "Do you offer non-alcoholic options?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — mocktails, fresh juices, infused waters and zero-proof cocktails are standard." } },
        { "@type": "Question", "name": "Can you do a themed bar?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Tiki, Prohibition, Tropical, Mediterranean and more, with menu, garnishes and presentation designed to match." } },
        { "@type": "Question", "name": "What happens if we run low on alcohol?", "acceptedAnswer": { "@type": "Answer", "text": "We monitor stock throughout service and alert you early; for remote villas we recommend a 20% buffer on initial purchases." } },
        { "@type": "Question", "name": "How far in advance should I book, and which areas do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "3–7 days standard; 2–4 weeks for premium peak-season events; same-day often possible. All Bali covered, with a modest travel fee for remote areas quoted upfront." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mychef.id" },
        { "@type": "ListItem", "position": 2, "name": "In-Villa Service", "item": "https://mychef.id/in-villa-service" },
        { "@type": "ListItem", "position": 3, "name": "Bartenders", "item": "https://mychef.id/in-villa-service/bartenders" }
      ]
    }
  ]
}

const PRICING_TIERS = [
  {
    title: 'Bartender Service',
    price: 'IDR 350,000',
    unit: '/hour',
    features: ['Minimum 3 hours', 'Classic & signature cocktails', 'Full bar setup', 'Glassware, ice & garnish prep', 'Beer & wine service'],
    bestFor: 'Villa parties, dinners, and weddings',
  },
]

const WHAT_INCLUDED = [
  'Professional, experienced bartender',
  'English-speaking service',
  'Full bar equipment and tools',
  'Glassware and garnishes',
  'Ice supply and management',
  'Custom cocktail menu design',
  'Responsible service standards',
  'Complete bar breakdown',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Event details', desc: 'Date, guest count, venue, and drink preferences.', icon: Calendar },
  { step: '02', title: 'Menu design', desc: 'We create a cocktail menu matched to your theme and guest profile.', icon: Wine },
  { step: '03', title: 'Shopping list', desc: 'Detailed spirits, mixers, and garnish list. You buy or we source.', icon: ShieldCheck },
  { step: '04', title: 'Setup & service', desc: 'Bar built 1 hour before guests arrive. Service until last call.', icon: Award },
  { step: '05', title: 'Breakdown', desc: 'Bar packed, glassware cleaned, space restored.', icon: Star },
]

const FAQS = [
  { q: "How much does a private bartender cost in Bali?", a: "IDR 350,000 per hour with a 3-hour minimum, covering the bartender, full bar kit, glassware, ice and garnishes. Alcohol is separate — bring your own from our shopping list, or we source everything for a 15% service fee. Rates are ++ (11% tax + 10% service)." },
  { q: "Is the alcohol included?", a: "Not in the hourly rate — this keeps pricing fair, since you only pay for the bottles you actually want. We provide an exact shopping list, or source certified, licensed-distributor stock for you." },
  { q: "Is the alcohol you source genuine?", a: "Yes. We purchase only from licensed distributors with excise-stamped stock, and local spirits such as arak come only from licensed Balinese producers. Bali's counterfeit spirits market is real — sourcing is the one place never to cut corners." },
  { q: "What cocktails can your bartenders make?", a: "All the classics — Martini, Old Fashioned, Mojito, Margarita — plus signature cocktails designed for your event. Premium bartenders offer molecular and flair techniques." },
  { q: "Do you offer non-alcoholic options?", a: "Absolutely. Mocktails, fresh juices, infused waters and zero-proof cocktails are standard, and increasingly popular." },
  { q: "Can you do a themed bar?", a: "Yes — Tiki, Prohibition, Tropical, Mediterranean and more. We design the menu, garnishes and presentation to match." },
  { q: "What happens if we run low on alcohol?", a: "We monitor stock through service and alert you early. For remote villas we recommend a 20% buffer on initial purchases." },
  { q: "How far in advance should I book, and which areas do you cover?", a: "3–7 days for standard service; 2–4 weeks for premium events in peak season. Same-day bookings are often possible. We cover all of Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and beyond; remote areas may carry a modest travel fee." },
]

export default function ServiceBartendersPage() {
  const ref = useRef<HTMLDivElement>(null)
  const pageMeta = getPageMeta('in-villa-service-bartenders')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bartender-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bartender-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pageMeta.title}
        description={pageMeta.description}
        canonical={pageMeta.canonical}
        ogImage={pageMeta.ogImage}
        jsonLd={briefJsonLd}
      />
{/* Hero */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img src="/generated/mychef-service-bali-hero-bartenders.webp" alt="Bartender hire Bali shaking a cocktail at a premium villa poolside bar" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
      }}
    />
    <div className="absolute inset-0 bg-black/20 md:hidden" />
  </div>
  <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
    <Breadcrumb items={[
      { label: 'In-Villa Service', href: '/in-villa-service' },
      { label: 'Bartenders' },
    ]} theme="dark" className="px-0 pt-0 pb-8" />
    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Private Bartender Hire for Villas &amp; Events in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            A professional bartender at your villa — classic cocktails, signature serves, full bar setup and complete breakdown. From IDR 350,000 per hour, 3-hour minimum, for villa parties, weddings, sundowners and dinners across Bali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-bartenders-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Book Bartenders via WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <Calendar className="w-4 h-4" /> Book a Bartender
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Pricing" title="Bartender Pricing" subtitle="One simple net hourly rate — minimum 3 hours." />
          <div className="grid gap-6 mt-12 max-w-md mx-auto">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.title} className="rounded-2xl p-8 bg-[#1A1A1A] text-white">
                <h3 className="font-playfair text-2xl mb-2">{tier.title}</h3>
                <p className="text-3xl font-semibold mb-1 text-[#C5A028]">{tier.price}</p>
                <p className="text-sm mb-6 text-white/[60%]">{tier.unit}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C5A028]" />
                      <span className="text-white/[80%]">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/[50%]">Best for: {tier.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every bartender booking comes fully equipped." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {WHAT_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From menu design to last call — five smooth steps." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <p className="font-cormorant text-[#C5A028] text-sm mb-2">{step.step}</p>
                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Playbooks" title="Event Playbooks" subtitle="Three ways we run the bar, matched to your occasion." />
          <div className="space-y-10 mt-12">
            <div>
              <h3 className="font-playfair text-2xl text-[#1A1A1A] mb-3">The Villa Party (20–60 guests)</h3>
              <p className="text-[#4A4745] leading-relaxed">
                One or two bartenders, a themed menu (Tiki, Tropical, Prohibition, Mediterranean), mocktails running in parallel for non-drinkers and kids. Pair with <Link to="/in-villa-service/waiters" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">floor service waiters</Link> and it becomes a real party — see the <Link to="/experiences/private-cocktail-party" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">full cocktail party experience</Link>.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl text-[#1A1A1A] mb-3">The Wedding Bar (40–150 guests)</h3>
              <p className="text-[#4A4745] leading-relaxed">
                A two-bartender team, a signature cocktail named for the couple, beer and wine service through dinner, and a bar that stays composed at peak volume. We coordinate timing with your planner and catering team.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl text-[#1A1A1A] mb-3">The Dinner Cocktail Hour (6–14 guests)</h3>
              <p className="text-[#4A4745] leading-relaxed">
                One bartender for an aperitivo hour before a chef-led dinner — a Negroni on the terrace as the sun drops, then wine handed to the table. The natural companion to our <Link to="/fine-dining" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">chef-led fine dining</Link> experiences. For bespoke cocktail design beyond service, see our <Link to="/in-villa-service/mixology" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">mixologist programs</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="In the mix" subtitle="Real villa-bar moments across Bali." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: '/generated/mychef-service-bali-bartenders-gallery-1.webp', alt: 'Bartender hire Bali pouring a craft cocktail at a private villa party' },
              { src: '/generated/mychef-service-bali-bartenders-gallery-2.webp', alt: 'Bartender hire Bali shaking drinks at a poolside villa bar at dusk' },
              { src: '/generated/mychef-service-bali-bartenders-gallery-3.webp', alt: 'Bartender hire Bali serving cocktails to guests at a private villa event' },
              { src: '/generated/mychef-service-bali-bartenders-gallery-4.webp', alt: 'Premium bar setup with copper tools and tropical garnishes at a private Bali villa' },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'Tom & Lisa', location: 'Melbourne', quote: 'The bartender created a signature cocktail for our wedding. Guests are still talking about it six months later. Absolute professional.', rating: 5 },
          { name: 'Corporate Team', location: 'Nusa Dua', quote: 'Hired two bartenders for our 80-person offsite. Service was seamless, cocktails were outstanding, and the bar looked incredible.', rating: 5 },
          { name: 'The Patel Family', location: 'Mumbai', quote: 'Bartender for our villa reunion. Made amazing mocktails for the kids and proper cocktails for the adults. Everyone was happy.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from villa events across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Bartender Hire FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Content depth section: Why Bartender Hire in Bali */}
      <section className="py-12 bg-[#FAFAF8] border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mb-6">Why Hire a Professional Bartender in Bali?</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Bali's villa event scene is unlike anywhere else in the world. Your guests expect quality — not a self-service drinks table. A professional Indonesian bartender brings the craft, equipment, and presentation that transforms a villa gathering into a genuine hospitality experience. They manage the bar from setup to breakdown, keep stock flowing, and free the host to actually enjoy the event.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Beyond the practical, there is a social dimension. A skilled bartender becomes a natural focal point — guests gather at the bar, conversations start, the atmosphere lifts. In a villa setting where there is no restaurant or hotel team running the room, a bartender anchors the guest experience. Our Indonesian bartenders are trained to international cocktail standards, fluent in English, and experienced with the rhythms of private villa events across Seminyak, Canggu, Ubud, Uluwatu, and Jimbaran.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Whether you need one bartender for a sunset dinner party or a full bar team for a 100-person wedding, myCHEF matches you with the right professional for your event size, style, and budget — all priced in IDR with no surprises.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">What's Included in Your Bartender Hire Experience</h2>
          <ul className="space-y-3 text-[#4A4745]">
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Custom cocktail menu:</strong> We design a drink menu matched to your event theme, cuisine, and guest profile — before the day, so guests receive a polished printed or digital menu.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Full bar equipment:</strong> Shakers, jiggers, strainers, muddlers, cutting boards, and tools arrive with the bartender. You don't need to source anything beyond the spirits.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Glassware and garnishes:</strong> Appropriate glassware for each cocktail type, plus garnishes (citrus, herbs, fresh fruit) prepared by the bartender on arrival.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Ice management:</strong> Ice is sourced, transported, and managed throughout the event. This matters more than most guests realise — a bartender who runs out of ice loses the bar.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Shopping list:</strong> A precise spirits and mixer list is sent in advance so you purchase exactly what is needed — no guessing, no overspend.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Bar breakdown and cleanup:</strong> The bartender packs down the bar, washes all equipment, and leaves your villa kitchen as they found it.</span></li>
          </ul>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Bartender Hire Pricing in Bali</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Bartender hire in Bali is priced at one simple net hourly rate of <strong className="text-[#1A1A1A]">IDR 350,000 per hour</strong>, with a <strong className="text-[#1A1A1A]">3-hour minimum</strong>. The same rate covers classic and signature cocktails, beer and wine service, flair techniques, and high-volume events — you only pay for the hours your bartender works.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            For large events with 50 or more guests, a second bartender is recommended, billed at the same <strong className="text-[#1A1A1A]">IDR 350,000 per hour</strong> rate. All fees cover the bartender's time, equipment, glassware, ice, and garnishes. Alcohol is purchased separately based on the shopping list we provide. Optionally, we can source all spirits and mixers for a 15% service fee.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Final pricing is confirmed after we understand your event date, guest count, venue, and cocktail requirements. WhatsApp us for a fast custom quote — we respond within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/in-villa-service/mixology" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">mixologist for custom cocktail programs</h4>
              <p className="text-xs text-[#4A4745]">Go beyond service with signature cocktails and interactive masterclasses.</p>
            </Link>
            <Link to="/experiences/private-cocktail-party" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">full cocktail party experience</h4>
              <p className="text-xs text-[#4A4745]">A dedicated cocktail party package with menu, bar, and service.</p>
            </Link>
            <Link to="/bar-services/temporary-bartender-staffing/" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">temporary bar staffing for venues</h4>
              <p className="text-xs text-[#4A4745]">Bars, hotels, and event venues: vetted bartenders on demand.</p>
            </Link>
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">in-villa service hub</h4>
              <p className="text-xs text-[#4A4745]">Browse the full staffing hub for drinks, dining, and guest-facing support.</p>
            </Link>
            <Link to="/in-villa-service/waiters" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">floor service waiters</h4>
              <p className="text-xs text-[#4A4745]">Add smooth floor service for plated dinners, parties, and receptions.</p>
            </Link>
            <Link to="/events/villa-parties" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">villa party catering</h4>
              <p className="text-xs text-[#4A4745]">Plan the full event experience around your bar concept and guest count.</p>
            </Link>
            <Link to="/fine-dining" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">chef-led dinners with cocktail hour</h4>
              <p className="text-xs text-[#4A4745]">Pair your bartender with a private chef-led dinner.</p>
            </Link>
          </div>
          <p className="mt-8 text-sm text-[#4A4745]">
            Looking for bar training, cocktail menu development or venue consultancy?{' '}
            <Link to="/bar-services/" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore MyChef Bar Services
            </Link>.
          </p>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-service-bali-bartenders-cta.webp" alt="Bartender hire Bali working at an illuminated private villa bar at night" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Bartender</h2>
          <p className="text-white/[80%] text-lg mb-8">
            From a sunset dinner party in Uluwatu to a 100-person wedding in Canggu, myCHEF matches you with the right bartender for your event size, style and budget — priced in IDR, confirmed in writing, backed by a replacement guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-bartenders-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
          <p className="text-white/[70%] text-sm">
            Venue, hotel or event company looking for shift cover? See our{' '}
            <Link to="/bar-services/temporary-bartender-staffing/" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">temporary bar staffing for venues</Link>.
            Planning the whole party? Explore{' '}
            <Link to="/events/villa-parties" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">villa party catering</Link> and the{' '}
            <Link to="/in-villa-service" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">in-villa service hub</Link>.
          </p>
        </div>
      </section>

      <TaxFooter className="py-6" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Waiters', href: '/in-villa-service/waiters', desc: 'Professional table service.' },
              { label: 'Butlers', href: '/in-villa-service/butlers', desc: 'Discreet villa hosting.' },
              { label: 'Sommelier', href: '/in-villa-service/sommelier', desc: 'Wine pairing and service.' },
              { label: 'Mixology', href: '/in-villa-service/mixology', desc: 'Signature cocktail programs.' },
              { label: 'Events', href: '/events', desc: 'Full-service event production.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="in-villa-bartenders"
        serviceName="bartender in Bali"
        intent="bartender service and pricing"
      />
    </div>
  )
}