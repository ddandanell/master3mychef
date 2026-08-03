import { useMemo, useState } from 'react'

/**
 * Educational ROI calculator — illustrative only, not a savings guarantee.
 */
export default function FoodCostRoiCalculator() {
  const [monthlySales, setMonthlySales] = useState(200_000_000)
  const [currentPct, setCurrentPct] = useState(38)
  const [targetPct, setTargetPct] = useState(32)
  const [investment, setInvestment] = useState(25_000_000)

  const { opportunity, paybackMonths, firstYearNet } = useMemo(() => {
    const gap = Math.max(0, (currentPct - targetPct) / 100)
    const monthlyOpportunity = monthlySales * gap
    const payback = monthlyOpportunity > 0 ? investment / monthlyOpportunity : null
    const firstYear = monthlyOpportunity * 12 - investment
    return {
      opportunity: monthlyOpportunity,
      paybackMonths: payback,
      firstYearNet: firstYear,
    }
  }, [monthlySales, currentPct, targetPct, investment])

  const idr = (n: number) =>
    `IDR ${Math.round(n).toLocaleString('en-US')}`

  return (
    <div className="rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8 shadow-sm">
      <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-2">
        Illustrative example only
      </p>
      <h3 className="font-playfair text-2xl md:text-3xl text-[#1A1A1A] mb-2">
        Food-cost opportunity calculator
      </h3>
      <p className="text-sm text-[#4A4745] mb-6 leading-relaxed">
        Educational estimates based on numbers you enter. Actual results depend on starting position,
        implementation quality, market conditions, pricing, staff behaviour, and management
        follow-through. This is not a guarantee of savings.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <label className="block text-sm">
          <span className="text-[#4A4745] font-medium">Monthly food sales (IDR)</span>
          <input
            type="number"
            min={0}
            value={monthlySales}
            onChange={(e) => setMonthlySales(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[#E8E6E3] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[#4A4745] font-medium">Project investment (IDR)</span>
          <input
            type="number"
            min={0}
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[#E8E6E3] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[#4A4745] font-medium">Current food-cost %</span>
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={currentPct}
            onChange={(e) => setCurrentPct(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[#E8E6E3] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[#4A4745] font-medium">Achievable food-cost %</span>
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={targetPct}
            onChange={(e) => setTargetPct(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[#E8E6E3] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-xl bg-[#FAFAF8] border border-[#E8E6E3] p-4">
          <p className="text-xs uppercase tracking-wider text-[#4A4745] mb-1">Monthly opportunity</p>
          <p className="font-playfair text-xl text-[#1A1A1A]">{idr(opportunity)}</p>
        </div>
        <div className="rounded-xl bg-[#FAFAF8] border border-[#E8E6E3] p-4">
          <p className="text-xs uppercase tracking-wider text-[#4A4745] mb-1">Est. payback</p>
          <p className="font-playfair text-xl text-[#1A1A1A]">
            {paybackMonths == null || !Number.isFinite(paybackMonths)
              ? '—'
              : `${paybackMonths.toFixed(1)} months`}
          </p>
        </div>
        <div className="rounded-xl bg-[#FAFAF8] border border-[#E8E6E3] p-4">
          <p className="text-xs uppercase tracking-wider text-[#4A4745] mb-1">First-year net (est.)</p>
          <p className="font-playfair text-xl text-[#1A1A1A]">{idr(firstYearNet)}</p>
        </div>
      </div>
    </div>
  )
}
