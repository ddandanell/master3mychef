import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import Breadcrumb from './shared/Breadcrumb'

const SITE = 'https://mychef.id'
const WA = '491635080236'

interface InfoPageProps {
  title: string
  description: string
  /** path without leading slash — e.g. "about" or "services/villa-parties" */
  slug: string
  /** Bullet list of value props shown under the H1 */
  highlights?: string[]
  /** Optional full-bleed hero image path */
  heroImage?: string
}

export default function InfoPage({ title, description, slug, highlights, heroImage }: InfoPageProps) {
  const canonical = `${SITE}/${slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like to know more about ${title}.`)}`

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${title} | myCHEF`} description={description} canonical={canonical} ogImage={heroImage || "/mychef-misc-bali-og-image.webp"} jsonLd={[aggregateRatingSchema(4.9, 560), breadcrumbSchema(title, canonical), faqPageSchema([
        { question: `Does myCHEF offer private chef services in ${title.replace(' | myCHEF', '').replace('Private Chef in ', '')}?`, answer: `Yes — myCHEF offers private chef dining, villa catering, and event services including ${title.replace('Private Chef in ', '').replace(' | myCHEF', '')}. Contact us via WhatsApp to discuss availability.` },
        { question: 'How do I book a private chef?', answer: 'Send a WhatsApp message to +49 163 5080236 with your date, location, and guest count. We reply within the hour and send a proposal within 24 hours.' },
      ])]} />

      {/* Hero */}
      <section className={`relative overflow-hidden flex items-center ${heroImage ? 'min-h-[85vh] text-white' : 'pt-32 pb-16 bg-[#0D0C0A] text-white'}`}>
        {heroImage && (
          <>
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                fetchPriority="high"
                decoding="async"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/20 md:hidden" />
            </div>
          </>
        )}
        <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-4xl mx-auto text-center">
          <Breadcrumb items={[{ label: title }]} theme="dark" className="justify-center mb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF Expansion</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">{description}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" data-source={`info-${slug}-cta`} className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Message our Team
            </a>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              <ArrowRight className="w-4 h-4" /> View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {highlights && highlights.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-xl shadow-black/5">
            <h2 className="font-playfair text-2xl md:text-3xl mb-8">Service Highlights</h2>
            <ul className="grid md:grid-cols-1 gap-6">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-4 text-lg text-[#4A4745]">
                  <div className="h-6 w-6 rounded-full bg-[#C5A028]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#C5A028]" strokeWidth={2.5} />
                  </div>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Common Trust Row */}
      <section className="py-20 border-t border-black/5 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[3px] mb-8">Reliability at Scale</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="text-sm font-semibold uppercase tracking-wider">Michelin Standards</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Vetted Chefs</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Managed Logistics</div>
            <div className="text-sm font-semibold uppercase tracking-wider">English Speaking</div>
          </div>
        </div>
      </section>
    </main>
  )
}
