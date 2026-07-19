import { useState } from 'react'
import { Users, ChefHat, UserPlus, Calculator, Info } from 'lucide-react'

const TIERS = [
  { min: 6, max: 15, price: 650000, label: '6–15 guests' },
  { min: 16, max: 30, price: 600000, label: '16–30 guests' },
  { min: 31, max: 50, price: 550000, label: '31–50 guests' },
  { min: 51, max: 100, price: 525000, label: '51–100 guests' },
  { min: 101, max: 200, price: 500000, label: '101–200 guests' },
  { min: 201, max: 450, price: 475000, label: '201–450 guests' },
]

function formatIdr(n: number) {
  return 'IDR ' + n.toLocaleString('id-ID')
}

function getTier(guests: number) {
  if (guests >= 451) return null
  return TIERS.find((t) => guests >= t.min && guests <= t.max) ?? null
}

function calcStaff(guests: number) {
  if (guests >= 451) return { chefs: 'Custom', assistants: 'Custom' }
  return { chefs: Math.ceil(guests / 50), assistants: Math.ceil(guests / 10) }
}

export default function BabiGulingPricing() {
  const [guests, setGuests] = useState<number | ''>(15)
  const guestNum = typeof guests === 'number' ? guests : 0
  const tier = getTier(guestNum)
  const staff = calcStaff(guestNum)
  const total = tier ? guestNum * tier.price : 0

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Babi Guling Pricing Estimate
          </h2>
          <p className="text-[#4A4745]">
            Per-person pricing with a lower rate for larger groups. Minimum 6 guests. Final quote depends on add-ons, villa location, serving style, and equipment needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
            <h3 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Pricing tiers</h3>
            <div className="space-y-3">
              {TIERS.map((t) => (
                <div key={t.label} className="flex items-center justify-between py-2 border-b border-[#E8E6E3] last:border-0">
                  <span className="text-sm text-[#4A4745]">{t.label}</span>
                  <span className="font-semibold text-sm">{formatIdr(t.price)}<span className="text-[#4A4745] font-normal">/person</span></span>
                </div>
              ))}
              <div className="flex items-center justify-between py-2 border-b border-[#E8E6E3] last:border-0">
                <span className="text-sm text-[#4A4745]">450+ guests</span>
                <span className="font-semibold text-sm">Custom quote</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0F1111] text-white rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-[#C5A028]" />
              <h3 className="text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Quick estimate</h3>
            </div>
            <label className="block text-sm text-white/70 mb-2">Number of guests (min. 6)</label>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-[#C5A028]" />
              <input
                type="number"
                min={6}
                value={guests}
                onChange={(e) => setGuests(e.target.value === '' ? '' : Math.max(6, parseInt(e.target.value, 10) || 6))}
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C5A028]"
              />
            </div>

            {tier ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm">Rate</span>
                  <span className="font-semibold">{formatIdr(tier.price)}/person</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm">Estimated total</span>
                  <span className="font-semibold text-[#C5A028]">{formatIdr(total)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm flex items-center gap-2"><ChefHat className="w-4 h-4" /> Chefs</span>
                  <span className="font-semibold">{typeof staff.chefs === 'number' ? `${staff.chefs}` : staff.chefs}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70 text-sm flex items-center gap-2"><UserPlus className="w-4 h-4" /> Assistants</span>
                  <span className="font-semibold">{typeof staff.assistants === 'number' ? `${staff.assistants}` : staff.assistants}</span>
                </div>
              </div>
            ) : (
              <p className="text-white/70 text-sm">For events over 450 guests we prepare a custom quote and brigade plan.</p>
            )}

            <div className="flex items-start gap-2 mt-6 text-xs text-white/50">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>This is an estimate. Add-ons, travel, extra equipment, and special requests may change the final price.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
