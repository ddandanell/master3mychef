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

interface MenuOption {
  id: string
  label: string
  price: number
}

interface FineDiningCategory {
  id: string
  label: string
  menus: MenuOption[]
}

type ServiceType = 'family' | 'fine' | 'rent'

const SERVICE_OPTIONS: { id: ServiceType; label: string; description: string }[] = [
  {
    id: 'family',
    label: 'Family Style',
    description:
      'A relaxed and social dining experience. The food is presented beautifully on shared platters in the centre of the table, allowing guests to serve themselves and enjoy the meal together.',
  },
  {
    id: 'fine',
    label: 'Fine Dining',
    description:
      'A formal private dining experience with additional service staff, professional table presentation, individually presented dishes, and several courses served in sequence.',
  },
  {
    id: 'rent',
    label: 'Rent a Chef',
    description:
      'Hire a private chef to prepare your daily meals in your villa. Choose breakfast, two meals, or complete daily meal service.',
  },
]

const FAMILY_STYLE_MENUS: MenuOption[] = [
  { id: 'indonesian-3course', label: 'Indonesian Three-Course', price: 850000 },
  { id: 'mediterranean-3course', label: 'Mediterranean Three-Course', price: 895000 },
  { id: 'seafood-3course', label: 'Seafood Three-Course', price: 1250000 },
  { id: 'italian-3course', label: 'Italian Three-Course', price: 1300000 },
  { id: 'western-3course', label: 'Western Three-Course', price: 1350000 },
  { id: 'bbq-3course', label: 'BBQ Three-Course', price: 1600000 },
  { id: 'french-3course', label: 'French Three-Course', price: 1650000 },
  { id: 'japanese-3course', label: 'Japanese Three-Course', price: 1750000 },
]

const FINE_DINING_CATEGORIES: FineDiningCategory[] = [
  {
    id: 'vegetarian',
    label: 'Vegetarian',
    menus: [
      { id: 'indonesian-vegetarian', label: 'Indonesian Vegetarian', price: 1250000 },
      { id: 'mediterranean-vegetarian', label: 'Mediterranean Vegetarian', price: 1350000 },
      { id: 'italian-vegetarian', label: 'Italian Vegetarian', price: 2100000 },
      { id: 'french-vegetarian', label: 'French Vegetarian', price: 2250000 },
      { id: 'healthy-breakfasts-vegetarian', label: 'Healthy Breakfasts Vegetarian', price: 2950000 },
      { id: 'japanese-fusion-vegetarian', label: 'Japanese Fusion Vegetarian', price: 3400000 },
    ],
  },
  {
    id: 'seafood',
    label: 'Seafood',
    menus: [
      { id: 'mediterranean-seafood', label: 'Mediterranean Seafood', price: 1350000 },
      { id: 'indonesian-seafood', label: 'Indonesian Seafood', price: 1350000 },
      { id: 'italian-seafood', label: 'Italian Seafood', price: 2300000 },
      { id: 'french-seafood', label: 'French Seafood', price: 2300000 },
      { id: 'japanese-fusion-seafood', label: 'Japanese Fusion Seafood', price: 3200000 },
      { id: 'surf-turf-seafood', label: 'Surf & Turf Seafood', price: 3600000 },
    ],
  },
  {
    id: 'mixed-meats',
    label: 'Mixed Meats',
    menus: [
      { id: 'bbq-evenings-mixed-meats', label: 'BBQ Evenings Mixed Meats', price: 1250000 },
      { id: 'mediterranean-mixed-meats', label: 'Mediterranean Mixed Meats', price: 1350000 },
      { id: 'indonesian-mixed-meats', label: 'Indonesian Mixed Meats', price: 1950000 },
      { id: 'western-classics-mixed-meats', label: 'Western Classics Mixed Meats', price: 2050000 },
      { id: 'italian-mixed-meats', label: 'Italian Mixed Meats', price: 3000000 },
      { id: 'surf-turf-mixed-meats', label: 'Surf & Turf Mixed Meats', price: 3100000 },
    ],
  },
  {
    id: 'single-meat',
    label: 'Single Meat',
    menus: [
      { id: 'healthy-breakfasts-chicken', label: 'Healthy Breakfasts Chicken', price: 1400000 },
      { id: 'french-duck', label: 'French Duck', price: 1450000 },
      { id: 'western-classics-pork', label: 'Western Classics Pork', price: 1950000 },
      { id: 'japanese-fusion-beef', label: 'Japanese Fusion Beef', price: 2100000 },
      { id: 'bbq-evenings-lamb', label: 'BBQ Evenings Lamb', price: 3000000 },
      { id: 'indonesian-wagyu-beef', label: 'Indonesian Wagyu Beef', price: 3200000 },
    ],
  },
]

const RENT_A_CHEF_MENUS: MenuOption[] = [
  { id: 'breakfast', label: 'Breakfast', price: 1000000 },
  { id: 'breakfast-dinner', label: 'Breakfast and Dinner', price: 1800000 },
  { id: 'breakfast-lunch-dinner', label: 'Breakfast, Lunch and Dinner', price: 2700000 },
]

const MIN_GUESTS = 5

const formatIDR = (value: number) => `IDR ${Math.round(value).toLocaleString('en-US')}`

const selectClasses =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:border-[#C5A028]'

function PricingCalculator() {
  const [service, setService] = useState<ServiceType>('family')
  const [guests, setGuests] = useState<number>(MIN_GUESTS)
  const [familyMenuId, setFamilyMenuId] = useState<string>(FAMILY_STYLE_MENUS[0].id)
  const [fineCategoryId, setFineCategoryId] = useState<string>(FINE_DINING_CATEGORIES[0].id)
  const [fineMenuId, setFineMenuId] = useState<string>(FINE_DINING_CATEGORIES[0].menus[0].id)
  const [rentMenuId, setRentMenuId] = useState<string>(RENT_A_CHEF_MENUS[0].id)

  const fineCategory =
    FINE_DINING_CATEGORIES.find((category) => category.id === fineCategoryId) ?? FINE_DINING_CATEGORIES[0]

  const handleFineCategoryChange = (categoryId: string) => {
    setFineCategoryId(categoryId)
    const category = FINE_DINING_CATEGORIES.find((c) => c.id === categoryId)
    if (category) setFineMenuId(category.menus[0].id)
  }

  const handleGuestsChange = (rawValue: string) => {
    const parsed = Number.parseInt(rawValue, 10)
    if (Number.isNaN(parsed)) {
      setGuests(MIN_GUESTS)
      return
    }
    setGuests(Math.max(MIN_GUESTS, parsed))
  }

  const selectedMenu: MenuOption | undefined =
    service === 'family'
      ? FAMILY_STYLE_MENUS.find((m) => m.id === familyMenuId)
      : service === 'fine'
        ? fineCategory.menus.find((m) => m.id === fineMenuId)
        : RENT_A_CHEF_MENUS.find((m) => m.id === rentMenuId)

  const pricePerUnit = selectedMenu?.price ?? 0
  const subtotal = service === 'rent' ? pricePerUnit : pricePerUnit * guests
  // Owner decision: show ++ prices only. Do not compute or display a
  // tax-inclusive total — the ++ suffix and the note below the total tell
  // the guest that 10% service and 11% government tax are added on the quote.

  const serviceLabel = SERVICE_OPTIONS.find((s) => s.id === service)?.label ?? ''

  const buildWhatsAppMessage = () => {
    const lines = [
      'Hello myCHEF, I would like to request availability for:',
      `Service: ${serviceLabel}`,
      `Menu: ${selectedMenu?.label ?? ''}`,
    ]
    if (service !== 'rent') {
      lines.push(`Guests: ${guests}`)
      lines.push(`Price per person: ${formatIDR(pricePerUnit)}++`)
    }
    lines.push(`Subtotal: ${formatIDR(subtotal)}++`)
    lines.push('Date:')
    lines.push('Villa area:')
    lines.push('Please confirm availability and the final quotation.')
    return lines.join('\n')
  }

  const whatsappHref = `https://wa.me/6289674072020?text=${encodeURIComponent(buildWhatsAppMessage())}`

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 max-w-[640px] mx-auto">
      <h3 className="font-playfair text-2xl mb-6">Estimate Your Experience</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">1. Choose a Service</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setService(opt.id)}
                className={`h-full p-4 rounded-xl border text-left transition-colors ${
                  service === opt.id
                    ? 'border-[#C5A028] bg-[#C5A028]/10'
                    : 'border-black/10 hover:border-black/20'
                }`}
              >
                <div className="font-playfair text-base mb-1">{opt.label}</div>
                <p className="text-xs text-[#4A4745] leading-relaxed">{opt.description}</p>
              </button>
            ))}
          </div>
        </div>

        {service === 'family' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="family-menu" className="block text-sm font-medium mb-2">
                Menu
              </label>
              <select
                id="family-menu"
                value={familyMenuId}
                onChange={(e) => setFamilyMenuId(e.target.value)}
                className={selectClasses}
              >
                {FAMILY_STYLE_MENUS.map((menu) => (
                  <option key={menu.id} value={menu.id}>
                    {menu.label} — {formatIDR(menu.price)} per person
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="family-guests" className="block text-sm font-medium mb-2">
                Guests <span className="text-[#4A4745] font-normal">(minimum {MIN_GUESTS})</span>
              </label>
              <input
                id="family-guests"
                type="number"
                inputMode="numeric"
                min={MIN_GUESTS}
                value={guests}
                onChange={(e) => handleGuestsChange(e.target.value)}
                className={selectClasses}
              />
            </div>
          </div>
        )}

        {service === 'fine' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="fine-category" className="block text-sm font-medium mb-2">
                Menu Family
              </label>
              <select
                id="fine-category"
                value={fineCategoryId}
                onChange={(e) => handleFineCategoryChange(e.target.value)}
                className={selectClasses}
              >
                {FINE_DINING_CATEGORIES.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="fine-menu" className="block text-sm font-medium mb-2">
                Menu
              </label>
              <select
                id="fine-menu"
                value={fineMenuId}
                onChange={(e) => setFineMenuId(e.target.value)}
                className={selectClasses}
              >
                {fineCategory.menus.map((menu) => (
                  <option key={menu.id} value={menu.id}>
                    {menu.label} — {formatIDR(menu.price)} per person
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="fine-guests" className="block text-sm font-medium mb-2">
                Guests <span className="text-[#4A4745] font-normal">(minimum {MIN_GUESTS})</span>
              </label>
              <input
                id="fine-guests"
                type="number"
                inputMode="numeric"
                min={MIN_GUESTS}
                value={guests}
                onChange={(e) => handleGuestsChange(e.target.value)}
                className={selectClasses}
              />
            </div>
          </div>
        )}

        {service === 'rent' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="rent-menu" className="block text-sm font-medium mb-2">
                Daily Package
              </label>
              <select
                id="rent-menu"
                value={rentMenuId}
                onChange={(e) => setRentMenuId(e.target.value)}
                className={selectClasses}
              >
                {RENT_A_CHEF_MENUS.map((menu) => (
                  <option key={menu.id} value={menu.id}>
                    {menu.label} — {formatIDR(menu.price)} per day
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xs text-[#4A4745] leading-relaxed">
              Groceries are not included. Ingredients are purchased at cost, and receipts are provided.
            </p>
          </div>
        )}

        <div className="border-t border-black/10 pt-6">
          <h4 className="font-playfair text-lg mb-3">Estimated price</h4>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-[#4A4745]">Service</span>
              <span className="font-medium">{serviceLabel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#4A4745]">Menu</span>
              <span className="font-medium text-right">{selectedMenu?.label ?? '—'}</span>
            </div>
            {service !== 'rent' && (
              <div className="flex justify-between">
                <span className="text-[#4A4745]">Guests</span>
                <span className="font-medium">{guests}</span>
              </div>
            )}
            {service !== 'rent' && (
              <div className="flex justify-between">
                <span className="text-[#4A4745]">Price per person</span>
                <span className="font-medium">{formatIDR(pricePerUnit)}++</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-baseline text-xl font-semibold mt-4 pt-4 border-t border-black/10">
            <span>Estimated price</span>
            <span className="text-[#C5A028]">{formatIDR(subtotal)}++</span>
          </div>

          <p className="text-xs text-[#4A4745] mt-2 leading-relaxed">
            ++ means 10% service charge and 11% government tax are added.
          </p>
          <p className="text-xs text-[#4A4745] mt-1 leading-relaxed">
            {service === 'rent'
              ? 'Rent a Chef is priced as a fixed daily rate — groceries are billed separately at cost.'
              : `Minimum booking: ${MIN_GUESTS} guests.`}
          </p>
          <p className="text-xs text-[#4A4745] mt-2 italic leading-relaxed">
            This is an estimated price, not a confirmed quotation. Final pricing is confirmed by our team.
          </p>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-source="calculator-cta"
          className="flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors w-full focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          Request via WhatsApp
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
    image: '/generated/mychef-catering-bali-catering-hero.webp',
    imageAlt: 'Plated fine dining course prepared by a private chef in a Bali villa',
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
  { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate events.' },
  { label: 'Villa Chef', href: '/villa-chef', desc: 'Daily chef for your villa stay.' },
  { label: 'Get a Quote', href: '/quote', desc: 'Detailed proposal within 24 hours.' },
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
        heroImage="/generated/mychef-catering-bali-catering-hero.webp"
        heroImageAlt="Plated fine dining course prepared by a private chef in a Bali villa"
        ogImage="https://mychef.id/generated/mychef-catering-bali-catering-hero.webp"
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
