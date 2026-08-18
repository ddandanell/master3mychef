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

interface BbqPackage {
  id: string
  label: string
  price: number
  description: string
  inclusions: string[]
}

type ServiceType = 'family' | 'fine' | 'bbq' | 'rent'

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
    id: 'bbq',
    label: 'BBQ',
    description:
      'A relaxed live-grill experience at your villa. Our chef prepares the food fresh on site while the service team manages the setup, serving, equipment, and cleanup.',
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

const BBQ_STANDARD_INCLUSIONS: string[] = [
  'Private chef',
  'Two service staff',
  'Ingredients',
  'Grilling equipment',
  'Setup',
  'Two to three hours of service',
  'Pack-up and cleanup',
]

const BBQ_PACKAGES: BbqPackage[] = [
  {
    id: 'indonesian-bbq',
    label: 'Indonesian BBQ',
    price: 700000,
    description:
      'Sate lilit, sate ayam, ikan bakar, jagung bakar, sambal matah, nasi kuning, sayur urap, gado-gado, and fresh fruit dessert.',
    inclusions: BBQ_STANDARD_INCLUSIONS,
  },
  {
    id: 'international-bbq',
    label: 'International BBQ',
    price: 850000,
    description:
      'Australian beef tenderloin, lamb chops, grilled prawns, salmon fillet, chicken thigh, gourmet salads, baked potato, garlic bread, and fresh fruit.',
    inclusions: BBQ_STANDARD_INCLUSIONS,
  },
  {
    id: 'premium-surf-turf',
    label: 'Premium Surf & Turf',
    price: 950000,
    description:
      'Wagyu steak, whole lobster tail, king prawns, salmon, mahi-mahi, premium sides, signature sauces, and a chocolate dessert station.',
    inclusions: [...BBQ_STANDARD_INCLUSIONS, 'Plated service'],
  },
]

// Rent a Chef has no guest-count concept (fixed daily rate), so its entry
// here is unused by any pricing logic — it only exists to satisfy the
// per-service Record type below.
const MIN_GUESTS_BY_SERVICE: Record<ServiceType, number> = {
  family: 5,
  fine: 5,
  bbq: 10,
  rent: 5,
}

const DIETARY_OPTIONS: string[] = [
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-free',
  'Dairy-free',
  'Lactose-free',
  'Nut allergy',
  'Shellfish allergy',
  'Seafood-free',
  'Pork-free',
  'Halal-sensitive',
  'Child-friendly',
  'Low spice',
  'Other allergy',
  'Other dietary requirement',
]

const ALLERGY_OPTIONS: string[] = ['Nut allergy', 'Shellfish allergy', 'Other allergy']

interface DietaryEntry {
  id: string
  requirement: string
  guestCount: number
  notes: string
  sameGuestAsAnother: boolean
  severeAllergy: boolean
}

let dietaryEntryCounter = 0

const createDietaryEntry = (): DietaryEntry => {
  dietaryEntryCounter += 1
  return {
    id: `dietary-${dietaryEntryCounter}`,
    requirement: DIETARY_OPTIONS[0],
    guestCount: 1,
    notes: '',
    sameGuestAsAnother: false,
    severeAllergy: false,
  }
}

const entryRequiresNotes = (entry: DietaryEntry): boolean =>
  entry.requirement === 'Other allergy' ||
  entry.requirement === 'Other dietary requirement' ||
  (ALLERGY_OPTIONS.includes(entry.requirement) && entry.severeAllergy)

const formatIDR = (value: number) => `IDR ${Math.round(value).toLocaleString('en-US')}`

const selectClasses =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:border-[#C5A028]'

interface DietaryRequirementsSectionProps {
  enabled: boolean
  onToggleEnabled: (value: boolean) => void
  entries: DietaryEntry[]
  onAddEntry: () => void
  onRemoveEntry: (id: string) => void
  onUpdateEntry: (id: string, patch: Partial<DietaryEntry>) => void
}

function DietaryRequirementsSection({
  enabled,
  onToggleEnabled,
  entries,
  onAddEntry,
  onRemoveEntry,
  onUpdateEntry,
}: DietaryRequirementsSectionProps) {
  return (
    <div className="border-t border-black/10 pt-4">
      <h4 className="font-playfair text-base mb-1">Dietary requirements</h4>
      <p className="text-xs text-[#4A4745] mb-3 leading-relaxed">
        Does anyone in your group require an adjusted meal? Tell us how many guests have dietary requirements so
        our chef can prepare suitable alternatives.
      </p>
      <label className="block text-sm font-medium mb-2">Do any guests have dietary requirements?</label>
      <div className="flex gap-3 mb-4">
        <button
          type="button"
          onClick={() => onToggleEnabled(false)}
          className={`px-5 py-2 rounded-full text-sm border transition-colors ${
            !enabled ? 'border-[#C5A028] bg-[#C5A028]/10' : 'border-black/10 hover:border-black/20'
          }`}
        >
          No
        </button>
        <button
          type="button"
          onClick={() => onToggleEnabled(true)}
          className={`px-5 py-2 rounded-full text-sm border transition-colors ${
            enabled ? 'border-[#C5A028] bg-[#C5A028]/10' : 'border-black/10 hover:border-black/20'
          }`}
        >
          Yes
        </button>
      </div>

      {enabled && (
        <div className="space-y-4">
          {entries.map((entry, index) => {
            const isAllergyOption = ALLERGY_OPTIONS.includes(entry.requirement)
            const requiresNotes = entryRequiresNotes(entry)
            return (
              <div key={entry.id} className="rounded-xl border border-black/10 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Requirement {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => onRemoveEntry(entry.id)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>

                <div>
                  <label htmlFor={`dietary-requirement-${entry.id}`} className="block text-sm font-medium mb-2">
                    Dietary requirement
                  </label>
                  <select
                    id={`dietary-requirement-${entry.id}`}
                    value={entry.requirement}
                    onChange={(e) => onUpdateEntry(entry.id, { requirement: e.target.value })}
                    className={selectClasses}
                  >
                    {DIETARY_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`dietary-guests-${entry.id}`} className="block text-sm font-medium mb-2">
                    Number of guests
                  </label>
                  <input
                    id={`dietary-guests-${entry.id}`}
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={entry.guestCount}
                    onChange={(e) => {
                      const parsed = Number.parseInt(e.target.value, 10)
                      onUpdateEntry(entry.id, { guestCount: Number.isNaN(parsed) ? 1 : Math.max(1, parsed) })
                    }}
                    className={selectClasses}
                  />
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={entry.sameGuestAsAnother}
                    onChange={(e) => onUpdateEntry(entry.id, { sameGuestAsAnother: e.target.checked })}
                    className="h-4 w-4"
                  />
                  This applies to the same guest as another requirement.
                </label>

                {isAllergyOption && (
                  <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 space-y-2">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Please provide complete allergy information. Our team will confirm whether the selected
                      menu can be adapted safely before the booking is accepted.
                    </p>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Final allergy accommodation is subject to confirmation by the chef.
                    </p>
                    <label className="flex items-center gap-2 text-xs text-amber-900">
                      <input
                        type="checkbox"
                        checked={entry.severeAllergy}
                        onChange={(e) => onUpdateEntry(entry.id, { severeAllergy: e.target.checked })}
                        className="h-4 w-4"
                      />
                      This is a severe or medically diagnosed allergy.
                    </label>
                  </div>
                )}

                <div>
                  <label htmlFor={`dietary-notes-${entry.id}`} className="block text-sm font-medium mb-2">
                    Notes{' '}
                    {requiresNotes ? (
                      <span className="text-red-600">(required)</span>
                    ) : (
                      <span className="text-[#4A4745] font-normal">(optional)</span>
                    )}
                  </label>
                  <textarea
                    id={`dietary-notes-${entry.id}`}
                    value={entry.notes}
                    onChange={(e) => onUpdateEntry(entry.id, { notes: e.target.value })}
                    rows={2}
                    className={selectClasses}
                  />
                </div>
              </div>
            )
          })}

          <button type="button" onClick={onAddEntry} className="text-sm font-medium text-[#C5A028] hover:underline">
            + Add another dietary requirement
          </button>

          <p className="text-xs text-[#4A4745] leading-relaxed">
            Dietary adaptations are subject to chef confirmation. Additional charges may apply only if special
            ingredients or a separate menu are required.
          </p>
        </div>
      )}
    </div>
  )
}

function PricingCalculator() {
  const [service, setService] = useState<ServiceType>('family')
  const [guests, setGuests] = useState<number>(MIN_GUESTS_BY_SERVICE.family)
  const [familyMenuId, setFamilyMenuId] = useState<string>(FAMILY_STYLE_MENUS[0].id)
  const [fineCategoryId, setFineCategoryId] = useState<string>(FINE_DINING_CATEGORIES[0].id)
  const [fineMenuId, setFineMenuId] = useState<string>(FINE_DINING_CATEGORIES[0].menus[0].id)
  const [bbqPackageId, setBbqPackageId] = useState<string>(BBQ_PACKAGES[0].id)
  const [rentMenuId, setRentMenuId] = useState<string>(RENT_A_CHEF_MENUS[0].id)
  const [dietaryEnabled, setDietaryEnabled] = useState<boolean>(false)
  const [dietaryEntries, setDietaryEntries] = useState<DietaryEntry[]>([])

  const fineCategory =
    FINE_DINING_CATEGORIES.find((category) => category.id === fineCategoryId) ?? FINE_DINING_CATEGORIES[0]

  const handleServiceChange = (nextService: ServiceType) => {
    setService(nextService)
    const min = MIN_GUESTS_BY_SERVICE[nextService]
    setGuests((current) => Math.max(current, min))
  }

  const handleFineCategoryChange = (categoryId: string) => {
    setFineCategoryId(categoryId)
    const category = FINE_DINING_CATEGORIES.find((c) => c.id === categoryId)
    if (category) setFineMenuId(category.menus[0].id)
  }

  const handleGuestsChange = (rawValue: string) => {
    const min = MIN_GUESTS_BY_SERVICE[service]
    const parsed = Number.parseInt(rawValue, 10)
    if (Number.isNaN(parsed)) {
      setGuests(min)
      return
    }
    setGuests(Math.max(min, parsed))
  }

  const handleDietaryToggle = (value: boolean) => {
    setDietaryEnabled(value)
    if (value && dietaryEntries.length === 0) {
      setDietaryEntries([createDietaryEntry()])
    }
  }

  const addDietaryEntry = () => setDietaryEntries((entries) => [...entries, createDietaryEntry()])

  const removeDietaryEntry = (id: string) =>
    setDietaryEntries((entries) => entries.filter((entry) => entry.id !== id))

  const updateDietaryEntry = (id: string, patch: Partial<DietaryEntry>) =>
    setDietaryEntries((entries) => entries.map((entry) => (entry.id === id ? { ...entry, ...patch } : entry)))

  const selectedBbqPackage = BBQ_PACKAGES.find((pkg) => pkg.id === bbqPackageId)

  const selectedMenu: MenuOption | undefined =
    service === 'family'
      ? FAMILY_STYLE_MENUS.find((m) => m.id === familyMenuId)
      : service === 'fine'
        ? fineCategory.menus.find((m) => m.id === fineMenuId)
        : service === 'bbq'
          ? selectedBbqPackage
          : RENT_A_CHEF_MENUS.find((m) => m.id === rentMenuId)

  const pricePerUnit = selectedMenu?.price ?? 0
  const subtotal = service === 'rent' ? pricePerUnit : pricePerUnit * guests
  // Owner decision: show ++ prices only. Do not compute or display a
  // tax-inclusive total — the ++ suffix and the note below the total tell
  // the guest that 10% service and 11% government tax are added on the quote.

  const dietaryApplicable = service !== 'rent'

  const totalDietaryPortions = dietaryEntries.reduce(
    (sum, entry) => (entry.sameGuestAsAnother ? sum : sum + entry.guestCount),
    0,
  )
  const standardPortions = guests - totalDietaryPortions

  const errors: string[] = []
  if (dietaryApplicable && dietaryEnabled) {
    if (totalDietaryPortions > guests) {
      errors.push('The number of dietary portions cannot be higher than the total number of guests.')
    }
    dietaryEntries.forEach((entry, index) => {
      if (entryRequiresNotes(entry) && !entry.notes.trim()) {
        errors.push(`Please add notes for dietary requirement ${index + 1} (${entry.requirement}).`)
      }
    })
  }
  const hasErrors = errors.length > 0

  const serviceLabel = SERVICE_OPTIONS.find((s) => s.id === service)?.label ?? ''

  const buildWhatsAppMessage = () => {
    const lines = [
      'Hello myCHEF, I would like to request availability for:',
      `Service: ${serviceLabel}`,
      `Menu: ${selectedMenu?.label ?? ''}`,
    ]
    if (dietaryApplicable) {
      lines.push(`Total guests: ${guests}`)
      lines.push(`Price per person: ${formatIDR(pricePerUnit)}++`)
      lines.push(`Standard portions: ${standardPortions}`)
      if (dietaryEnabled && dietaryEntries.length > 0) {
        lines.push('Dietary requirements:')
        dietaryEntries.forEach((entry) => {
          const guestWord = entry.guestCount === 1 ? 'guest' : 'guests'
          const sameGuestNote = entry.sameGuestAsAnother ? ' (same guest as another requirement)' : ''
          lines.push(`- ${entry.requirement}: ${entry.guestCount} ${guestWord}${sameGuestNote}`)
          if (entry.notes.trim()) lines.push(`  Notes: ${entry.notes.trim()}`)
        })
      } else {
        lines.push('Dietary requirements: None reported')
      }
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
                onClick={() => handleServiceChange(opt.id)}
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
                Guests{' '}
                <span className="text-[#4A4745] font-normal">(minimum {MIN_GUESTS_BY_SERVICE.family})</span>
              </label>
              <input
                id="family-guests"
                type="number"
                inputMode="numeric"
                min={MIN_GUESTS_BY_SERVICE.family}
                value={guests}
                onChange={(e) => handleGuestsChange(e.target.value)}
                className={selectClasses}
              />
            </div>
            <DietaryRequirementsSection
              enabled={dietaryEnabled}
              onToggleEnabled={handleDietaryToggle}
              entries={dietaryEntries}
              onAddEntry={addDietaryEntry}
              onRemoveEntry={removeDietaryEntry}
              onUpdateEntry={updateDietaryEntry}
            />
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
                Guests <span className="text-[#4A4745] font-normal">(minimum {MIN_GUESTS_BY_SERVICE.fine})</span>
              </label>
              <input
                id="fine-guests"
                type="number"
                inputMode="numeric"
                min={MIN_GUESTS_BY_SERVICE.fine}
                value={guests}
                onChange={(e) => handleGuestsChange(e.target.value)}
                className={selectClasses}
              />
            </div>
            <DietaryRequirementsSection
              enabled={dietaryEnabled}
              onToggleEnabled={handleDietaryToggle}
              entries={dietaryEntries}
              onAddEntry={addDietaryEntry}
              onRemoveEntry={removeDietaryEntry}
              onUpdateEntry={updateDietaryEntry}
            />
          </div>
        )}

        {service === 'bbq' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="bbq-package" className="block text-sm font-medium mb-2">
                Package
              </label>
              <select
                id="bbq-package"
                value={bbqPackageId}
                onChange={(e) => setBbqPackageId(e.target.value)}
                className={selectClasses}
              >
                {BBQ_PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.label} — {formatIDR(pkg.price)} per person
                  </option>
                ))}
              </select>
            </div>
            {selectedBbqPackage && (
              <div className="rounded-xl bg-black/[0.03] p-4 space-y-2">
                <p className="text-sm leading-relaxed">{selectedBbqPackage.description}</p>
                <div>
                  <p className="text-xs font-medium mb-1">Includes:</p>
                  <ul className="text-xs text-[#4A4745] leading-relaxed list-disc list-inside space-y-0.5">
                    {selectedBbqPackage.inclusions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <div>
              <label htmlFor="bbq-guests" className="block text-sm font-medium mb-2">
                Guests <span className="text-[#4A4745] font-normal">(minimum {MIN_GUESTS_BY_SERVICE.bbq})</span>
              </label>
              <input
                id="bbq-guests"
                type="number"
                inputMode="numeric"
                min={MIN_GUESTS_BY_SERVICE.bbq}
                value={guests}
                onChange={(e) => handleGuestsChange(e.target.value)}
                className={selectClasses}
              />
            </div>
            <DietaryRequirementsSection
              enabled={dietaryEnabled}
              onToggleEnabled={handleDietaryToggle}
              entries={dietaryEntries}
              onAddEntry={addDietaryEntry}
              onRemoveEntry={removeDietaryEntry}
              onUpdateEntry={updateDietaryEntry}
            />
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
            {dietaryApplicable && (
              <>
                <div className="flex justify-between">
                  <span className="text-[#4A4745]">Standard portions</span>
                  <span className="font-medium">{standardPortions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4A4745]">Dietary portions</span>
                  <span className="font-medium">{totalDietaryPortions}</span>
                </div>
              </>
            )}
          </div>

          {dietaryApplicable && (
            <div className="mt-3 text-xs text-[#4A4745] leading-relaxed">
              <span className="font-medium text-[#1A1A1A]">Dietary summary: </span>
              {dietaryEnabled && dietaryEntries.length > 0
                ? dietaryEntries
                    .map(
                      (entry) =>
                        `${entry.requirement} (${entry.guestCount}${
                          entry.sameGuestAsAnother ? ', same guest' : ''
                        })`,
                    )
                    .join('; ')
                : 'None reported'}
            </div>
          )}

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
              : `Minimum booking: ${MIN_GUESTS_BY_SERVICE[service]} guests.`}
          </p>
          <p className="text-xs text-[#4A4745] mt-2 italic leading-relaxed">
            This is an estimated price, not a confirmed quotation. Final pricing is confirmed by our team.
          </p>

          {hasErrors && (
            <div className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700 space-y-1">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>

        <a
          href={hasErrors ? undefined : whatsappHref}
          aria-disabled={hasErrors}
          onClick={(e) => {
            if (hasErrors) e.preventDefault()
          }}
          target="_blank"
          rel="noopener noreferrer"
          data-source="calculator-cta"
          className={`flex items-center justify-center gap-2 font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full transition-colors w-full focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5 ${
            hasErrors
              ? 'bg-black/10 text-black/30 cursor-not-allowed'
              : 'bg-[#C5A028] text-[#1A1A1A] hover:bg-[#D4B43A]'
          }`}
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
  { question: 'Where are full prices listed?', answer: 'On <a href="/pricing">pricing</a> and the private chef meal-plan table at <a href="/private-chef-bali">private chef Bali</a>.' },
  { question: 'Daily chef rates?', answer: 'IDR 1M++ / 1.8M++ / 2.7M++ for 1/2/3 meals per day.' },
  { question: 'What is included vs groceries?', answer: 'Daily hire: labor included, groceries at cost. Many event packages include food in the per-person price.' },
  { question: 'Weekly and monthly discounts?', answer: '−10% at 7+ days, −20% at 28+ days on daily chef rates.' },
  { question: 'Deposit?', answer: 'Usually 50%.' },
  { question: 'Cancellation tiers?', answer: 'Full refund 14+ days, 50% at 7–13, none under 7. <a href="/cancellation">Policy</a>.' },
  { question: 'Hidden fees?', answer: 'Quotes itemise travel, premium ingredients and add-ons before deposit.' },
  { question: 'Wedding price band?', answer: 'Often IDR 1.5M–3M++ per person for full receptions.' },
  { question: 'Staff hourly rates?', answer: 'Waiters and butlers priced on request. Cocktail packages from IDR 500,000++ per guest (min 10 guests).' },
  { question: 'How to get an exact total?', answer: 'Share date, guests, area and format for a fixed quote.' },
  { question: 'Currency?', answer: 'IDR pricing; international transfers accepted as invoiced.' },
  { question: 'Compare formats?', answer: 'Use <a href="/dining-styles">dining styles</a> and <a href="/services">services</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
]

const RELATED_PAGES = [
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing breakdown for all services.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'In-villa tasting menus.' },
  { label: 'Catering', href: '/catering', desc: 'Villa chef and catering options.' },
  { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate events.' },
  { label: 'Villa Chef', href: '/private-chef-bali', desc: 'Daily chef for your villa stay.' },
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
