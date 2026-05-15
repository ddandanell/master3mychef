import { Link } from 'react-router-dom'
import { MessageCircle, Check } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

interface InfoPageProps {
  title: string
  description: string
  /** path without leading slash — e.g. "about" or "services/villa-parties" */
  slug: string
  /** Bullet list of value props shown under the H1 */
  highlights?: string[]
}

// Lightweight template for /about, /chefs, /faq, /pricing, /reviews, /why-mychef, /retreats, etc.
// Real bespoke pages can replace this later — this exists so every URL in the
// sitemap resolves immediately with valid SEO meta and CTAs.
export default function InfoPage({ title, description, slug, highlights }: InfoPageProps) {
  const canonical = `${SITE}/${slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like to know more about ${title}.`)}`

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${title} | myCHEF`} description={description} canonical={canonical} ogImage="/og-image.webp" jsonLd={[localBusinessSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema(title, canonical), faqPageSchema([
        { question: `Does myCHEF offer private chef services in ${title.replace(' | myCHEF', '').replace('Private Chef in ', '')}?`, answer: `Yes — myCHEF offers private chef dining, villa catering, and event services across Bali including ${title.replace('Private Chef in ', '').replace(' | myCHEF', '')}. Contact us via WhatsApp to discuss availability.` },
        { question: 'How do I book a private chef?', answer: 'Send a WhatsApp message to +62 822-3756-5997 with your date, location, and guest count. We reply within the hour and send a proposal within 24 hours.' },
      ])]} />

      <section className="px-8 pt-32 pb-16 max-w-[800px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">{title}</h1>
        <p className="text-lg text-[#4A4745] mb-8">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="space-y-3 mb-10">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-[#4A4745]">
                <Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
          <Link to="/quote" className="inline-flex items-center justify-center bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
