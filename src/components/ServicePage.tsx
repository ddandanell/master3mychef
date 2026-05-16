import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle, Check } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import { SERVICES } from '@/data/sitemap'
import { trackWhatsAppClick } from '../lib/analytics'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

export default function ServicePage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/services\//, '').replace(/\/$/, '')
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/404" replace />

  const title = `${service.name} — Private Chef in Bali`
  const canonical = `${SITE}/services/${slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like to enquire about ${service.name}.`)}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: canonical,
    provider: { '@id': `${SITE}/#business` },
    areaServed: [
      { '@type': 'Place', name: 'Seminyak, Bali' },
      { '@type': 'Place', name: 'Canggu, Bali' },
      { '@type': 'Place', name: 'Ubud, Bali' },
      { '@type': 'Place', name: 'Uluwatu, Bali' },
      { '@type': 'Place', name: 'Sanur, Bali' },
      { '@type': 'Place', name: 'Nusa Dua, Bali' },
      { '@type': 'Place', name: 'Jimbaran, Bali' },
      { '@type': 'Place', name: 'Berawa, Bali' },
      { '@type': 'Place', name: 'Pererenan, Bali' },
      { '@type': 'Place', name: 'Bukit Peninsula, Bali' },
    ],
  }

  const serviceFaq = faqPageSchema([
    {
      question: `How much does ${service.name} cost in Bali?`,
      answer: `Pricing for ${service.name} in Bali depends on guest count, menu selection, and duration. Starting from IDR 250,000 per person. Request a free custom quote via WhatsApp.`,
    },
    {
      question: `How do I book ${service.name} with myCHEF?`,
      answer: `WhatsApp us at +62 822-3756-5997 with your date, villa location, guest count, and any dietary requirements. We respond within 1 hour and confirm same-day.`,
    },
    {
      question: `Does myCHEF handle grocery shopping for ${service.name}?`,
      answer: `Yes. Our chefs handle all grocery shopping at market cost — no markup. You receive a full receipt for transparency.`,
    },
  ])

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${title} | myCHEF`} description={service.description} canonical={canonical} ogImage="/og-image.webp" jsonLd={[localBusinessSchema, serviceSchema, aggregateRatingSchema(4.9, 560), serviceFaq, breadcrumbSchema(service.name, canonical)]} />

      <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Services</p>
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">{service.name}</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-8">{service.description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={waLink} onClick={() => trackWhatsAppClick(`service-${slug}-cta`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
          <Link to="/quote" className="inline-flex items-center justify-center bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-white">
        <div className="max-w-[960px] mx-auto">
          <h2 className="font-playfair text-3xl mb-6">What is included</h2>
          <ul className="space-y-3 text-[#4A4745] mb-12">
            {['Dedicated private chef', 'Custom menu design', 'Fresh groceries sourced that morning', 'Table service and presentation', 'Full kitchen cleanup', 'Dietary customization at no extra cost'].map((it) => (
              <li key={it} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {it}</li>
            ))}
          </ul>

          <h2 className="font-playfair text-3xl mb-6">Other services</h2>
          <div className="flex flex-wrap gap-3">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm border border-[#1A1A1A]/15 px-4 py-2 rounded-full hover:border-[#C5A028] hover:text-[#C5A028] transition-all">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
