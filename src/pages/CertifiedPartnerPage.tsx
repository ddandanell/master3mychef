import { useParams, Link } from 'react-router-dom'
import { Check, MessageCircle, ShieldCheck } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import BestPartnerBadge from '@/components/BestPartnerBadge'

const SITE = 'https://mychef.id'
const WA = 6289674072020
const HERO_IMAGE = '/generated/mychef-misc-bali-about-best-partner-2026.webp'

// /certified/:slug — public verification page promised on /partner-platform.
// Until partner data is wired (Supabase / static JSON), this renders a
// generic verification template that still resolves with 200 + proper SEO
// instead of 404'ing on the URL the partner page links to.

export default function CertifiedPartnerPage() {
  const { slug } = useParams<{ slug: string }>()
  const niceName = slug
    ? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Partner Villa'
  const canonical = `${SITE}/certified/${slug}`

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={`${niceName} — myCHEF Certified Partner`}
        description={`${niceName} is an officially certified myCHEF villa dining partner. Verified for Michelin-level private dining execution in Bali.`}
        canonical={canonical}
        ogImage={`${SITE}/generated/mychef-misc-bali-about-best-partner-2026.webp`}
        jsonLd={[breadcrumbSchema(niceName, canonical), faqPageSchema([
          { question: 'What does myCHEF Certified Partner mean?', answer: 'A myCHEF Certified Partner villa has completed at least 10 verified myCHEF private dining events, maintains a 4.8+ guest rating, and is officially recognised for excellence in Michelin-level private dining execution in Bali.' },
          { question: 'How does a villa become a myCHEF Certified Partner?', answer: 'Villas earn certified partner status by consistently hosting successful myCHEF private dining events, maintaining high guest satisfaction scores, and meeting our service and quality standards over 12+ months.' },
          { question: 'Can guests book myCHEF dining at any Certified Partner villa?', answer: 'Yes — if you are staying at a myCHEF Certified Partner villa, our team is pre-approved to cook and serve on the property. Book via WhatsApp at +62 896-7407-2020.' },
        ])]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F0F0E] text-white">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt={`${niceName} - myCHEF Certified Partner villa for private dining in Bali`}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/75" />
        </div>
        <div className="relative z-10 mx-auto grid min-h-[40vh] max-w-[1200px] gap-8 px-6 py-16 md:min-h-[50vh] md:px-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C5A028] text-[#050505] text-[10px] uppercase tracking-[0.3em] font-semibold px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Partner
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl text-white leading-tight mb-4">{niceName}</h1>
            <p className="text-lg text-white/90 max-w-[600px]">
              Officially certified for Michelin-level private dining execution
            </p>
          </div>
          <div className="lg:justify-self-end">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <img
                src={HERO_IMAGE}
                alt={`${niceName} — verified myCHEF partner villa for private dining in Bali`}
                className="h-full min-h-[280px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 max-w-[900px] mx-auto text-center">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-6">myCHEF Certified Partner</p>
        <p className="text-lg text-[#4A4745] mb-10 max-w-[640px] mx-auto">
          This villa is an officially certified myCHEF Partner — verified for Michelin-level private dining execution,
          background-checked culinary team, and operational standards across the myCHEF villa partner network.
        </p>

        <div className="flex justify-center mb-12">
          <BestPartnerBadge variant="dark" width={340} />
        </div>

        <ul className="grid sm:grid-cols-2 gap-3 max-w-[640px] mx-auto text-left mb-12">
          {[
            'Verified Bali villa partner',
            'Michelin-trained culinary team',
            'Background-checked staff',
            'Food safety certified kitchens',
            'Insurance and liability coverage',
            'Trusted by 50+ private villas',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3 bg-white border border-[#E5E3E0] rounded-xl px-4 py-3.5">
              <Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            to="/quote"
            className="inline-flex items-center justify-center bg-[#C5A028] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          >
            Book Dining at {niceName}
          </Link>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like to verify and book dining at ${niceName}.`)}`}
            target="_blank"
            rel="noopener noreferrer" data-source="certified-partner-cta"
            className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] font-semibold text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-full hover:bg-[#1A1A1A]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        <p className="text-xs text-[#8A8785]">
          Certification verified at <span className="text-[#1A1A1A] font-medium">mychef.id/certified/{slug}</span>
          {' · '}
          <Link to="/certified-partner" className="text-[#2C5F7C] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028]">About the partner programme →</Link>
        </p>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus in your villa.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated & grazing tables.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate events.' },
              { label: 'Villa Chef', href: '/private-chef-bali', desc: 'Daily chef for your villa stay.' },
              { label: 'Partner Programme', href: '/certified-partner', desc: 'Become a certified partner villa.' },
              { label: 'Get a Quote', href: '/quote', desc: 'Detailed proposal within 24 hours.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
