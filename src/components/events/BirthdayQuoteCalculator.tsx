import { useMemo, useState, type ComponentType, type CSSProperties } from 'react'
import {
  Camera,
  Cake,
  Check,
  ClipboardList,
  Minus,
  Music,
  Plus,
  Sparkles,
  Users,
  Wine,
} from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'
import {
  ADDON_PRICES,
  CAKE_UPGRADE_DEFAULT,
  CAKE_UPGRADE_MAX,
  CAKE_UPGRADE_MIN,
  FOOD_PACKAGES,
  MIN_GUESTS,
  buildBirthdayWhatsAppMessage,
  calculateBirthdayQuote,
  formatIDRFull,
  type DecorLevel,
  type FoodPackageId,
} from '@/lib/birthdayQuoteCalculator'

const FOOD_ORDER: FoodPackageId[] = ['indonesian', 'international', 'surfturf']

interface BirthdayQuoteCalculatorProps {
  accent?: string
  className?: string
}

export default function BirthdayQuoteCalculator({
  accent = '#2C5F7C',
  className = '',
}: BirthdayQuoteCalculatorProps) {
  const [guests, setGuests] = useState(20)
  const [food, setFood] = useState<FoodPackageId | null>(null)
  const [dj, setDj] = useState(false)
  const [decor, setDecor] = useState<DecorLevel>('none')
  const [openBar, setOpenBar] = useState(false)
  const [photographer, setPhotographer] = useState(false)
  const [coordinator, setCoordinator] = useState(false)
  const [cakeUpgrade, setCakeUpgrade] = useState(false)
  const [cakePrice, setCakePrice] = useState(CAKE_UPGRADE_DEFAULT)
  const [defaultsApplied, setDefaultsApplied] = useState(false)

  const result = useMemo(
    () =>
      calculateBirthdayQuote({
        guests,
        food,
        dj,
        decor,
        openBar,
        photographer,
        coordinator,
        cakeUpgrade,
        cakeUpgradePrice: cakePrice,
      }),
    [guests, food, dj, decor, openBar, photographer, coordinator, cakeUpgrade, cakePrice],
  )

  const selectFood = (id: FoodPackageId) => {
    setFood(id)
    // Smart defaults raise AOV once, then user can deselect
    if (!defaultsApplied) {
      setDj(true)
      setDecor('standard')
      setOpenBar(true)
      setDefaultsApplied(true)
    }
  }

  const clampGuests = (n: number) => Math.max(MIN_GUESTS, Math.floor(n) || MIN_GUESTS)

  const waHref = useMemo(() => {
    const msg = buildBirthdayWhatsAppMessage(result)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }, [result])

  const guestError = guests < MIN_GUESTS

  return (
    <div
      id="birthday-calculator"
      className={`rounded-2xl border border-[#E8E6E3] bg-white shadow-sm overflow-hidden scroll-mt-24 ${className}`}
    >
      <div className="px-5 sm:px-8 py-6 border-b border-[#E8E6E3] bg-[#FAFAF8]">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: accent, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          Live Birthday Quote
        </p>
        <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Build Your Birthday Night
        </h2>
        <p className="text-sm sm:text-base text-[#4A4745] mt-2 max-w-2xl leading-relaxed">
          Choose your food. Then add DJ, decoration, bar and photography. Subtotal updates live — fixed quote on WhatsApp within the hour.
        </p>
      </div>

      <div className="p-5 sm:p-8 space-y-8">
        {/* Step 1 — Guests */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4" style={{ color: accent }} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">1 · Guest count</h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              aria-label="Decrease guests"
              className="w-12 h-12 rounded-full border border-[#E8E6E3] flex items-center justify-center hover:bg-[#FAFAF8] active:scale-95 transition"
              onClick={() => setGuests((g) => clampGuests(g - 1))}
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="number"
              inputMode="numeric"
              min={MIN_GUESTS}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              onBlur={() => setGuests((g) => clampGuests(g))}
              aria-label="Number of guests"
              className="w-24 h-12 text-center text-xl font-semibold rounded-xl border border-[#E8E6E3] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            />
            <button
              type="button"
              aria-label="Increase guests"
              className="w-12 h-12 rounded-full border border-[#E8E6E3] flex items-center justify-center hover:bg-[#FAFAF8] active:scale-95 transition"
              onClick={() => setGuests((g) => clampGuests(g + 1))}
            >
              <Plus className="w-4 h-4" />
            </button>
            <span className="text-sm text-[#4A4745]">guests · minimum {MIN_GUESTS}</span>
          </div>
          {guestError && (
            <p className="text-sm text-red-600 mt-2" role="alert">
              Minimum 10 guests required
            </p>
          )}
          {result.discountLabel && (
            <p className="inline-flex mt-3 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              {result.discountLabel} (food only)
            </p>
          )}
          <p className="text-xs text-[#4A4745]/80 mt-2">
            Volume discount on food: 20–39 guests = 5% · 40+ guests = 10%. Add-ons stay full price.
          </p>
        </div>

        {/* Step 2 — Food */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] mb-3">2 · Food package (required)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {FOOD_ORDER.map((id) => {
              const pkg = FOOD_PACKAGES[id]
              const selected = food === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectFood(id)}
                  className={`text-left rounded-2xl border-2 p-3 sm:p-4 transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                    selected ? 'border-[#C5A028] bg-[#FFFBF0] shadow-md' : 'border-[#E8E6E3] hover:border-[#C5A028]/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-[#1A1A1A]">{pkg.name}</p>
                    {selected ? (
                      <span className="w-6 h-6 rounded-full bg-[#C5A028] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      </span>
                    ) : null}
                  </div>
                  {id === 'international' && (
                    <span className="inline-block mb-2 text-[10px] font-bold uppercase tracking-wider bg-[#C5A028] text-[#1A1A1A] px-2 py-0.5 rounded-full">
                      Most popular
                    </span>
                  )}
                  <p className="text-sm font-semibold mt-0.5" style={{ color: accent }}>
                    {formatIDRFull(pkg.baseRate)}++ / person
                  </p>
                  <p className="text-xs text-[#4A4745] mt-2 leading-relaxed">{pkg.description}</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 3 — Add-ons */}
        <div className={food ? '' : 'opacity-50 pointer-events-none'}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1">3 · Build the night (optional)</h3>
          <p className="text-xs text-[#4A4745] mb-4">
            {food
              ? 'Defaults selected for a complete villa party — remove anything you do not need.'
              : 'Select a food package first to unlock add-ons.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AddonToggle
              active={dj}
              onClick={() => setDj((v) => !v)}
              icon={Music}
              title="DJ Package (4 hours)"
              price={formatIDRFull(ADDON_PRICES.dj)}
              detail="Professional DJ + PA system (speakers + sub)"
              accent={accent}
            />
            <AddonToggle
              active={openBar}
              onClick={() => setOpenBar((v) => !v)}
              icon={Wine}
              title="Open Bar – 3 hours"
              price={`${formatIDRFull(ADDON_PRICES.openBarPerPerson)} / person`}
              detail="Bartender, spirits, mixers, glassware, ice, setup & cleanup"
              accent={accent}
            />
            <AddonToggle
              active={photographer}
              onClick={() => setPhotographer((v) => !v)}
              icon={Camera}
              title="Photographer – 2 hours"
              price={formatIDRFull(ADDON_PRICES.photographer)}
              detail="Professional coverage of the celebration"
              accent={accent}
            />
            <AddonToggle
              active={coordinator}
              onClick={() => setCoordinator((v) => !v)}
              icon={ClipboardList}
              title="Day-of Coordinator"
              price={formatIDRFull(ADDON_PRICES.coordinator)}
              detail="Timeline, cues, cake moment, staff orchestration"
              accent={accent}
            />
            <AddonToggle
              active={cakeUpgrade}
              onClick={() => setCakeUpgrade((v) => !v)}
              icon={Cake}
              title="Custom 3-Tier Cake Upgrade"
              price={`${formatIDRFull(CAKE_UPGRADE_MIN)} – ${formatIDRFull(CAKE_UPGRADE_MAX)}`}
              detail="Replaces standard cake"
              accent={accent}
            />
          </div>

          {cakeUpgrade && (
            <div className="mt-3 p-4 rounded-xl border border-[#E8E6E3] bg-[#FAFAF8]">
              <label className="text-sm text-[#4A4745] flex justify-between mb-2">
                <span>Cake upgrade budget</span>
                <span className="font-semibold text-[#1A1A1A]">{formatIDRFull(cakePrice)}</span>
              </label>
              <input
                type="range"
                min={CAKE_UPGRADE_MIN}
                max={CAKE_UPGRADE_MAX}
                step={100_000}
                value={cakePrice}
                onChange={(e) => setCakePrice(Number(e.target.value))}
                className="w-full"
                aria-label="Cake upgrade price"
              />
            </div>
          )}

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A4745] mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" style={{ color: accent }} /> Decoration (pick one)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(
                [
                  { id: 'essential' as const, title: 'Essential', price: ADDON_PRICES.decorEssential, detail: 'Balloons, banner, table accents, simple photo backdrop' },
                  { id: 'standard' as const, title: 'Standard Villa', price: ADDON_PRICES.decorStandard, detail: 'Entrance, photo corner, table styling, ambient lighting, cake table' },
                  { id: 'premium' as const, title: 'Premium Themed', price: ADDON_PRICES.decorPremium, detail: 'Full theme, arches, florals, statement lighting' },
                ] as const
              ).map((d) => {
                const active = decor === d.id
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDecor(active ? 'none' : d.id)}
                    className={`text-left rounded-xl border-2 p-3 transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                      active ? 'border-[#C5A028] bg-[#FFFBF0]' : 'border-[#E8E6E3] hover:border-[#C5A028]/40'
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#1A1A1A]">{d.title}</p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: accent }}>
                      {formatIDRFull(d.price)}
                    </p>
                    <p className="text-xs text-[#4A4745] mt-1 leading-relaxed">{d.detail}</p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Breakdown + CTA */}
        <div className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-4 sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] mb-3">Your running total</h3>
          {!result.valid ? (
            <p className="text-sm text-[#4A4745]">{result.error}</p>
          ) : (
            <>
              <ul className="space-y-2 text-sm">
                {result.lines.map((line) => (
                  <li key={line.key} className="flex justify-between gap-3 border-b border-[#E8E6E3]/80 pb-2">
                    <span className="text-[#4A4745]">
                      {line.label}
                      {line.detail ? <span className="block text-xs text-[#4A4745]/70">{line.detail}</span> : null}
                    </span>
                    <span className="font-semibold text-[#1A1A1A] whitespace-nowrap">{formatIDRFull(line.amount)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-baseline mt-4 pt-3 border-t border-[#1A1A1A]/10">
                <span className="text-sm font-semibold text-[#1A1A1A]">Subtotal (before ++)</span>
                <span className="text-2xl font-semibold" style={{ color: accent, fontFamily: "'Playfair Display', serif" }}>
                  {formatIDRFull(result.subtotal)}
                </span>
              </div>
              <p className="text-xs text-[#4A4745] mt-2 leading-relaxed">
                ++ = 11% government tax + 10% service charge. Final quote will include ++.
              </p>
              <p className="text-xs text-[#4A4745]/80 mt-1">
                Estimated total with tax &amp; service ≈ {formatIDRFull(result.estimatedWithTaxService)}
              </p>
            </>
          )}

          <a
            href={result.valid ? waHref : undefined}
            target="_blank"
            rel="noopener noreferrer"
            data-source="events-birthdays-calculator"
            aria-disabled={!result.valid}
            className={`mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition ${
              result.valid
                ? 'bg-[#C5A028] text-[#1A1A1A] hover:bg-[#D4B43A]'
                : 'bg-[#E8E6E3] text-[#4A4745] pointer-events-none'
            }`}
          >
            Get Fixed Quote on WhatsApp
          </a>
          <p className="text-center text-xs text-[#4A4745]/80 mt-2">
            No payment required to enquire · Fixed price before you commit
          </p>
        </div>
      </div>

      {/* Sticky mobile total bar */}
      {result.valid && (
        <div className="md:hidden fixed bottom-[72px] left-0 right-0 z-40 px-3 pointer-events-none">
          <div className="pointer-events-auto mx-auto max-w-lg rounded-2xl border border-[#E8E6E3] bg-white/95 backdrop-blur shadow-lg px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#4A4745]">Subtotal before ++</p>
              <p className="text-lg font-semibold" style={{ color: accent, fontFamily: "'Playfair Display', serif" }}>
                {formatIDRFull(result.subtotal)}
              </p>
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-source="events-birthdays-calculator-sticky"
              className="shrink-0 px-4 py-2.5 rounded-full bg-[#C5A028] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider"
            >
              WhatsApp quote
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

function AddonToggle({
  active,
  onClick,
  icon: Icon,
  title,
  price,
  detail,
  accent,
}: {
  active: boolean
  onClick: () => void
  icon: ComponentType<{ className?: string; style?: CSSProperties }>
  title: string
  price: string
  detail: string
  accent: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-xl border-2 p-3 sm:p-4 transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
        active ? 'border-[#C5A028] bg-[#FFFBF0]' : 'border-[#E8E6E3] hover:border-[#C5A028]/40'
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
            active ? 'bg-[#C5A028]/20' : 'bg-[#FAFAF8]'
          }`}
        >
          <Icon className="w-4 h-4" style={{ color: accent }} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-[#1A1A1A]">{title}</p>
            {active && <Check className="w-4 h-4 shrink-0 text-[#C5A028]" />}
          </div>
          <p className="text-sm font-semibold mt-0.5" style={{ color: accent }}>
            {price}
          </p>
          <p className="text-xs text-[#4A4745] mt-1 leading-relaxed">{detail}</p>
        </div>
      </div>
    </button>
  )
}
