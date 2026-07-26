import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceWithAggregateOfferSchema } from './SeoHead'
import { PILLARS } from '@/data/siteArchitecture'

const SITE = 'https://mychef.id'
const WA = '6289674072020'

const CATERING_FAQS = faqPageSchema([
  { question: 'How much does catering in Bali cost per person?', answer: 'Most formats start from IDR 700,000 per person. Buffets start from IDR 475,000++ per person (min. 30 guests), plated dinners from IDR 800,000++ (min. spend IDR 5M), and babi guling from IDR 3,900,000 total. Every quote is itemised and fixed before you pay a deposit.' },
  { question: 'What is the minimum group size?', answer: 'It depends on the format: 4 for drop-off, 6 for babi guling, 8–10 for villa catering and BBQ, and 30 for buffets. Tell us your headcount and we\'ll point you to the right service.' },
  { question: 'Can you handle vegan, halal, or gluten-free guests?', answer: 'Yes — mixed dietary groups are the norm in Bali villas. We plan vegan and vegetarian mains, gluten-free adaptations, pork-free and halal-friendly menus, and nut-free prep zones when you tell us at booking.' },
  { question: 'What does "++" mean on your prices?', answer: '"++" means 11% government tax and 10% service charge are added to the listed price. Every quote states the full total including tax and service before you confirm, so the number you approve is the number you pay.' },
  { question: 'How far ahead should I book, and what\'s the deposit?', answer: 'A few days to two weeks is ideal; peak season and weddings need more. A 50% deposit confirms your date. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
  { question: 'What happens if it rains on an outdoor event?', answer: 'Every outdoor booking has a plan B: covered terrace setups, pop-up tents, or an indoor service reconfiguration at no extra charge.' },
  { question: 'Do you offer tastings before big events?', answer: 'Yes — pre-event tastings are available for larger bookings (typically 40+ guests) and can be arranged when you confirm.' },
])

export default function CateringPage() {
  const pillar = PILLARS.catering
  const canonical = `${SITE}/catering`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like a catering quote for my villa.')}`

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pillar.title}
        description={pillar.description}
        ogImage="/hero-catering.webp"
        canonical={canonical}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Catering Bali',
            description: 'Full-service catering in Bali: BBQ nights, buffets, plated dinners, babi guling, grazing tables and drop-off delivery for groups of 10–150+. Transparent per-person pricing.',
            url: canonical,
            lowPrice: '700000',
            highPrice: '3700000',
            unitText: 'per person',
          }),
          breadcrumbSchema('Catering Bali', canonical),
          CATERING_FAQS,
        ]}
      />

      <section className="px-6 pt-32 pb-16 max-w-[900px] mx-auto">
        <p className="font-cormorant text-[#6B8E5A] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">{pillar.h1}</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-4">{pillar.intro}</p>
        <p className="text-sm text-[#4A4745] max-w-[640px] mb-8">
          <strong>From IDR 700,000/person · Groups of 10 to 150+ · Bali-wide</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-source="catering-hero"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Get a Catering Quote via WhatsApp
          </a>
          <Link
            to="/catering/bbq-catering"
            className="inline-flex items-center justify-center gap-2 bg-[#6B8E5A] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            BBQ catering
          </Link>
        </div>
        <p className="text-xs text-[#4A4745]/70 mt-4">Free to enquire — no deposit until your menu and date are confirmed. We reply within the hour (07:00–22:00 WITA).</p>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-4">Choose Your Catering Style</h2>
          <p className="text-[#4A4745] mb-8">
            Every service line is chef-led, fully staffed, and priced per person before you commit. Pick the format that fits your occasion — or tell us the occasion and we&apos;ll recommend the format.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { slug: 'bbq-catering', label: 'BBQ catering', desc: 'From IDR 700,000/person · min. 10 guests. Live grill at your villa poolside, garden, or terrace.', price: 'IDR 700K/person' },
              { slug: 'buffet', label: 'buffet catering', desc: 'From IDR 475,000++/person · min. 30 guests. Practical, elegant way to feed bigger groups.', price: 'IDR 475K++/person' },
              { slug: 'plated-catering', label: 'plated dinner catering', desc: 'From IDR 800,000++/person · min. spend IDR 5M. Multi-course fine dining with white-glove service.', price: 'IDR 800K++/person' },
              { slug: 'villa-catering', label: 'villa catering for multi-day stays', desc: 'From IDR 450,000++/person · 8–200 guests. Multi-day meal plans for villa stays.', price: 'IDR 450K++/person' },
              { slug: 'babi-guling', label: 'babi guling feast', desc: 'From IDR 3,900,000 total · 6–50 guests. Whole pig slow-roasted and carved at your villa.', price: 'IDR 3.9M total' },
              { slug: 'grazing-tables', label: 'grazing tables', desc: 'From IDR 650,000 · 2–150 guests. Styled artisan spreads for welcome drinks and events.', price: 'From IDR 650K' },
              { slug: 'drop-off-catering', label: 'drop-off catering', desc: 'From IDR 700,000/person · 4–40 guests. Chef-prepared food delivered ready to serve.', price: 'IDR 700K/person' },
            ].map((sub) => (
              <Link
                key={sub.slug}
                to={`/catering/${sub.slug}`}
                className="group flex items-center justify-between p-5 rounded-xl bg-white border border-[#E8E6E3] hover:border-[#6B8E5A] transition-colors"
              >
                <div>
                  <h3 className="font-medium text-[#1A1A1A] mb-1">{sub.label}</h3>
                  <p className="text-xs text-[#4A4745]">{sub.desc}</p>
                  <p className="text-xs text-[#6B8E5A] font-semibold mt-1">{sub.price}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#6B8E5A] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-4" />
              </Link>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E3]">
            <p className="text-sm text-[#4A4745]">
              Planning a dedicated villa BBQ party night? See our{' '}
              <Link to="/villa-bbq-catering-bali" className="text-[#C5A028] hover:underline font-medium">in-villa BBQ party packages</Link>
              , or go all-in on the catch of the day with a{' '}
              <Link to="/seafood-bbq-catering-bali" className="text-[#C5A028] hover:underline font-medium">seafood BBQ</Link>{' '}
              sourced from Jimbaran&apos;s morning markets.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-8">What Every myCHEF Catering Booking Includes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Chef and service team sized to your group (one waiter per 10 guests as standard)',
              'All equipment — grills, chafing dishes, linens, porcelain, glassware, prep stations',
              'Ingredient sourcing — fresh shopping the morning of your event; premium upgrades quoted separately',
              'Setup, service, and full cleanup — we leave the villa as we found it',
              'Dietary handling — vegan, gluten-free, halal-friendly, nut-free, and children\'s menus planned in advance',
              'Itemised fixed quote — no hidden fees; prices quoted ++ (11% government tax + 10% service charge)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E6E3]">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-6">Which Format Fits Your Group?</h2>
          <div className="overflow-x-auto bg-white rounded-2xl border border-[#E8E6E3] p-6 mb-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 font-semibold uppercase tracking-normal">Format</th>
                  <th className="pb-3 font-semibold uppercase tracking-normal">Best for</th>
                  <th className="pb-3 font-semibold uppercase tracking-normal">Group size</th>
                  <th className="pb-3 font-semibold uppercase tracking-normal">From price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">BBQ</td><td className="py-3">Villa parties, birthdays, poolside</td><td className="py-3">10–80</td><td className="py-3">IDR 700K/person</td></tr>
                <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">Buffet</td><td className="py-3">Weddings, retreats, 30+ groups</td><td className="py-3">30–200+</td><td className="py-3">Contact us for pricing</td></tr>
                <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">Plated</td><td className="py-3">Formal dinners, milestones</td><td className="py-3">10–60</td><td className="py-3">IDR 800K++/person</td></tr>
                <tr><td className="py-3 font-medium">Drop-Off</td><td className="py-3">Private nights in, no staff</td><td className="py-3">4–40</td><td className="py-3">IDR 700K/person</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#4A4745]">
            Still deciding? Message us your guest count, villa area, and occasion — we recommend one format and quote it within the hour. Full details on our{' '}
            <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent pricing</Link>{' '}
            page.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-8">How Booking Works</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Send your details', desc: 'Date, villa or venue area, guest count, and occasion via WhatsApp.' },
              { step: '2', title: 'Receive a tailored proposal', desc: 'Menu, staffing, and an itemised quote within the hour.' },
              { step: '3', title: 'Confirm with a 50% deposit', desc: 'Locks your chef team and date; balance due before the event.' },
              { step: '4', title: 'We handle the rest', desc: 'Villa-manager coordination, sourcing, setup, service, and cleanup.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-[#E8E6E3] p-5">
                <span className="w-8 h-8 rounded-full bg-[#6B8E5A] text-white flex items-center justify-center text-sm font-bold mb-3">{s.step}</span>
                <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#4A4745] mt-6">
            If your assigned chef is ever unavailable on the day, we send a verified replacement or refund you in full.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-6">Areas We Cater Across Bali</h2>
          <p className="text-[#4A4745] mb-6">
            Seminyak, Canggu, Berawa, Pererenan, Uluwatu and the Bukit, Jimbaran, Nusa Dua, Ubud, Sanur, Kuta/Legian, and Denpasar. Events outside the Seminyak–Canggu core carry a quoted travel allowance (typically IDR 250K–700K depending on area) — always confirmed in your quote, never added after.
          </p>
          <p className="text-sm text-[#4A4745]">
            For larger villa events, check with your villa manager about outside-vendor permission and any banjar (village) function fee — we coordinate directly with villa management and flag these costs upfront. Planning a full event with production support? See our{' '}
            <Link to="/events" className="text-[#C5A028] hover:underline font-medium">event production</Link>.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-6">Get a Catering Quote</h2>
          <p className="text-[#4A4745] mb-6">
            Tell us your <strong>date, villa area, guest count, and occasion</strong>. We&apos;ll reply on WhatsApp within the hour with a recommended format and an itemised quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              data-source="catering-footer"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Get a Catering Quote via WhatsApp
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-[#6B8E5A] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Transparent Pricing
            </Link>
          </div>
          <p className="text-xs text-[#4A4745]/70 mt-4">Prefer email? bali@mychef.id · +62 896-7407-2020</p>
        </div>
      </section>
    </div>
  )
}
