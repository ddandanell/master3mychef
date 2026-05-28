import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema, serviceSchema } from './SeoHead'
import { PILLARS } from '@/data/siteArchitecture'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

const CATERING_FAQS = faqPageSchema([
  { question: 'How much does villa catering cost in Bali?', answer: 'Villa catering in Bali starts from IDR 250,000 per person for drop-off catering, IDR 350,000 for buffet, IDR 450,000 for BBQ, and IDR 600,000 per hour for a private villa chef. All prices are transparent — no markup on groceries.' },
  { question: 'What is included in myCHEF catering packages?', answer: 'All catering packages include menu design, grocery shopping at cost (no markup), chef and service staff, all equipment and serveware, setup, table service, and full kitchen cleanup. Dietary customization is included at no extra cost.' },
  { question: 'How many guests can you cater for in a Bali villa?', answer: 'myCHEF caters from 2 to 200+ guests. We scale staffing, equipment, and production to your exact guest count. Minimum for BBQ is 10 guests, buffet 15 guests, and villa chef bookings are 4 hours minimum.' },
  { question: 'Do you cater in all areas of Bali?', answer: 'Yes. We serve Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Berawa, Pererenan, and the Bukit Peninsula. WhatsApp us for same-day availability checks.' },
])

export default function CateringPage() {
  const pillar = PILLARS.catering
  const canonical = `${SITE}/catering`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like a catering quote for my villa.')}`

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pillar.title}
        description={pillar.description}
        ogImage="/hero-catering.webp"
        canonical={canonical}
        jsonLd={[localBusinessSchema, aggregateRatingSchema(4.9, 560), serviceSchema('Villa Catering Bali', pillar.description, canonical), breadcrumbSchema('Catering', canonical), CATERING_FAQS]}
      />

      <section className="px-6 pt-32 pb-16 max-w-[900px] mx-auto">
        <p className="font-cormorant text-[#6B8E5A] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">{pillar.h1}</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-10">{pillar.intro}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-source="catering-hero"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center gap-2 bg-[#6B8E5A] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            {pillar.ctaPrimary}
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-8">Catering Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {pillar.subPages.map((sub) => (
              <Link
                key={sub.slug}
                to={`/catering/${sub.slug}`}
                className="group flex items-center justify-between p-5 rounded-xl bg-white border border-[#E8E6E3] hover:border-[#6B8E5A] transition-colors"
              >
                <div>
                  <h3 className="font-medium text-[#1A1A1A] mb-1">{sub.label}</h3>
                  <p className="text-xs text-[#4A4745]">{sub.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#6B8E5A] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-8">What’s included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Menu design tailored to your group',
              'All equipment, chafing dishes & serveware',
              'Grocery shopping at cost — no markup',
              'Setup, service and full clean-up',
              'Dietary customization at no extra cost',
              'Scalable from 8 to 200 guests',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E6E3]">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
