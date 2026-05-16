import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'

const SOFTWARE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'myCHEF.id Pricing Calculator',
  applicationCategory: 'BusinessApplication',
  description: 'Free online calculator to estimate private chef, catering, and event costs in Bali.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'IDR',
  },
}

function PricingCalculator() {
  const [guests, setGuests] = useState(8)
  const [menu, setMenu] = useState<'mediterranean' | 'wagyu' | 'villa-chef'>('mediterranean')
  const [wine, setWine] = useState(false)
  const [days, setDays] = useState(1)

  const basePrice = menu === 'mediterranean' ? 2200000 : menu === 'wagyu' ? 2400000 : 600000
  const winePrice = wine ? 850000 : 0
  const serviceCharge = 0.10
  const tax = 0.11

  const subtotal = (basePrice + winePrice) * guests * (menu === 'villa-chef' ? days : 1)
  const total = Math.round(subtotal * (1 + serviceCharge + tax))

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 max-w-[600px] mx-auto">
      <h3 className="font-playfair text-2xl mb-6">Estimate Your Experience</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Experience Type</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { key: 'mediterranean', label: 'Mediterranean', price: 'IDR 2.2M++' },
              { key: 'wagyu', label: 'Wagyu', price: 'IDR 2.4M++' },
              { key: 'villa-chef', label: 'Villa Chef', price: 'IDR 600K/hr' },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setMenu(opt.key as 'mediterranean' | 'wagyu' | 'villa-chef')}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  menu === opt.key
                    ? 'border-[#C5A028] bg-[#C5A028]/10'
                    : 'border-black/10 hover:border-black/20'
                }`}
              >
                <div className="font-medium text-sm">{opt.label}</div>
                <div className="text-xs text-[#4A4745]">{opt.price}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Number of Guests: <span className="text-[#C5A028]">{guests}</span>
          </label>
          <input
            type="range"
            min={menu === 'villa-chef' ? 2 : 4}
            max={menu === 'villa-chef' ? 20 : 24}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full accent-[#C5A028]"
          />
        </div>

        {menu === 'villa-chef' && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Number of Days: <span className="text-[#C5A028]">{days}</span>
            </label>
            <input
              type="range"
              min={1}
              max={14}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full accent-[#C5A028]"
            />
          </div>
        )}

        {(menu === 'mediterranean' || menu === 'wagyu') && (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="wine"
              checked={wine}
              onChange={(e) => setWine(e.target.checked)}
              className="w-5 h-5 accent-[#C5A028]"
            />
            <label htmlFor="wine" className="text-sm">
              Add Wine Pairing (+IDR 850,000 per guest)
            </label>
          </div>
        )}

        <div className="border-t border-black/10 pt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>IDR {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm mb-2 text-[#4A4745]">
            <span>Service Charge (10%) + Tax (11%)</span>
            <span>IDR {Math.round(subtotal * 0.21).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xl font-semibold mt-4 pt-4 border-t border-black/10">
            <span>Estimated Total</span>
            <span className="text-[#C5A028]">IDR {total.toLocaleString()}</span>
          </div>
          <p className="text-xs text-[#4A4745] mt-2">
            * This is an estimate. Final pricing depends on menu customization, 
            location, and specific requirements. Contact us for a precise quote.
          </p>
        </div>

        <a
          href={`https://wa.me/6282237565997?text=${encodeURIComponent(
            `Hi myCHEF, I used your calculator and got an estimate of IDR ${total.toLocaleString()} for ${guests} guests (${menu}). Can you confirm?`
          )}`}
          target="_blank"
          rel="noopener noreferrer" data-source="calculator-cta" className="flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors w-full"
        >
          <MessageCircle className="w-4 h-4" />
          Confirm via WhatsApp
        </a>
      </div>
    </div>
  )
}

const SECTIONS = [
  {
    id: 'calculator',
    type: 'content' as const,
    subtitle: 'Estimate',
    title: 'Pricing Calculator',
    body: `<p>Use our calculator to estimate the cost of your private chef experience. Adjust guests, menu type, and add-ons to see a rough total. For a precise quote, message us on WhatsApp — we respond within the hour.</p>`,
    image: '/generated/catering-catering-hero-lg.webp',
    imageAlt: 'Fine dining dish',
  },
  {
    id: 'calc',
    type: 'features' as const,
    subtitle: 'Calculator',
    title: 'Get an Instant Estimate',
    features: [],
  },
]

// Override the features section to render the calculator
const CalculatorSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-[1200px] mx-auto px-6">
      <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">
        Calculator
      </p>
      <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
        Get an Instant Estimate
      </h2>
      <PricingCalculator />
    </div>
  </section>
)

const FAQS = [
  { question: 'Is this calculator accurate?', answer: 'This gives you a rough estimate. Final pricing depends on menu customization, villa location, seasonal ingredients, and specific requirements. Contact us for a precise quote.' },
  { question: 'What is not included in the estimate?', answer: 'Alcohol (except wine pairing), specialty equipment rentals, venue decorations, and transport outside standard service areas are not included.' },
  { question: 'Can I adjust the menu after getting a quote?', answer: 'Yes. Your proposal is not final until you pay the deposit. We can adjust menus, guest counts, and add-ons at any time before booking confirmation.' },
]

const RELATED_PAGES = [
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing breakdown for all services.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'In-villa tasting menus.' },
  { label: 'Catering', href: '/catering', desc: 'Villa chef and catering options.' },
  { label: 'Get a Quote', href: '/quote', desc: 'Detailed proposal within 24 hours.' },
  { label: 'Book Now', href: '/book', desc: 'Reserve your experience online.' },
]

export default function CalculatorPage() {
  return (
    <>
      <PremiumPage
        slug="calculator"
        title="Pricing Calculator"
        description="Estimate the cost of a private chef in Bali — adjust guests, meals, cuisine, and add-ons."
        seoTitle="Pricing Calculator | Private Chef Bali | myCHEF.id"
        seoDescription="Estimate your private chef, catering, or event costs instantly. Transparent IDR pricing, no hidden fees."
        canonicalUrl="https://mychef.id/calculator"
        h1="Pricing Calculator"
        subtitle="Estimate your private chef experience in 30 seconds."
        heroImage="/generated/catering-catering-hero-lg.webp"
        heroImageAlt="Fine dining dish"
        ogImage="https://mychef.id/generated/catering-catering-hero-lg.webp"
        keywords={['private chef bali price', 'bali catering calculator', 'villa chef cost']}
        highlights={['Instant Estimate', 'Adjust Guests & Menu', 'WhatsApp Confirmation', 'No Obligation']}
        sections={SECTIONS}
        faqs={FAQS}
        relatedPages={RELATED_PAGES}
        extraJsonLd={[
          breadcrumbSchema('Pricing Calculator', 'https://mychef.id/calculator'),
          SOFTWARE_APPLICATION_SCHEMA,
        ]}
        ctaText="Get a Precise Quote"
        ctaSubtext="Message us on WhatsApp for a detailed proposal."
      />
      <CalculatorSection />
    </>
  )
}
