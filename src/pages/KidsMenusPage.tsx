import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, localBusinessSchema, serviceWithOfferSchema, faqPageSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { MenuOverview } from '@/components/menus'
import { KIDS_MENUS } from '@/data/menus'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { ArticleContentSection } from '@/components/shared'

const SITE = 'https://mychef.id'
const WA_KIDS = buildWhatsAppUrl({ serviceName: "Kids' Party Menus" })

const FAQS = [
  {
    q: "How much do kids' menus cost?",
    a: 'From IDR 250,000 to IDR 350,000 per child depending on the menu, including starter, main, dessert, the chef, ingredients and cleanup. Prices are subject to 11% government tax + 10% service charge.',
  },
  {
    q: 'What is the minimum number of children?',
    a: 'Six children per booking. We regularly cater parties of 20+ children with advance notice.',
  },
  {
    q: 'How do you handle allergies?',
    a: 'Every menu is nut-free as standard. For any other allergy — gluten, dairy, egg, shellfish — our chefs adapt the menu in advance, at no extra charge.',
  },
  {
    q: 'Are the menus halal?',
    a: "Yes, all kids' menus are halal adaptable. Tell us your requirements when booking and we source and prepare accordingly. (Any non-halal add-on, such as bacon, is always clearly marked.)",
  },
  {
    q: 'What ages are the menus designed for?',
    a: 'Roughly 3–12, with mild flavours and child-sized portions throughout. Younger children can be served simpler plates from the same menus — just ask.',
  },
  {
    q: 'Can adults eat at the same event?',
    a: 'Absolutely. Kids are usually served first from these menus; adults order separately from our main menu collections, and one team runs both.',
  },
  {
    q: 'What deposit is required?',
    a: 'A 50% deposit confirms your booking; the balance is due the day before the event.',
  },
]

const RELATED_COLLECTIONS = [
  { label: 'kids', href: '/experiences/kids-birthday-chef-party', price: 'Full party planning' },
  { label: 'family cooking class', href: '/experiences/private-cooking-class', price: 'Holiday activity' },
  { label: 'birthday catering', href: '/events/birthdays', price: 'Parties & milestones' },
  { label: 'group villa dinner packages', href: '/group-villa-dinner-packages-bali', price: 'Kids table within groups' },
  { label: 'BBQ grill menus', href: '/bbq-grill', price: 'From IDR 950K' },
  { label: 'transparent pricing', href: '/pricing', price: 'See all rates' },
]

const WHY_PARENTS = [
  'Nut-free as standard',
  'Halal adaptable',
  'Mild flavours (no chilli)',
  "Interactive 'build your own' options",
  'Allergen-friendly',
  'Portion-sized for children',
]

export default function KidsMenusPage() {
  const canonical = `${SITE}/kids-menus`

  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Kids' Party Menus Bali | 6 Chef-Cooked Options | myCHEF"
        description="Fun, healthy kids' party menus in Bali — pizza, pasta, burgers, seafood & Indonesian. From IDR 250K/child. Nut-free options."
        canonical={canonical}
        ogImage="/generated/mychef-events-bali-party-birthday.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema("Kids' Menus", canonical, 'Dining Styles', `${SITE}/dining-styles`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          serviceWithOfferSchema({
            name: "Kids' Party Menus",
            description: "Six fun, healthy kids' party menus for Bali villas — nut-free as standard, halal adaptable, with interactive build-your-own options. Cooked fresh in your villa by our private chefs. From IDR 250,000 per child, minimum 6 children.",
            url: canonical,
            price: '250000',
            unitText: 'per child',
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Menu',
            name: "myCHEF Kids' Menus Bali",
            hasMenuSection: [
              {
                '@type': 'MenuSection',
                name: "Kids' Collection",
                hasMenuItem: KIDS_MENUS.map((menu) => ({
                  '@type': 'MenuItem',
                  name: menu.name,
                  description: menu.description,
                  offers: { '@type': 'Offer', price: String(menu.priceIdr), priceCurrency: 'IDR' },
                })),
              },
            ],
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-events-bali-party-birthday.webp"
            alt="Children's birthday party table in a Bali villa with cake, candles and warm golden lights"
            width={1280}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <Breadcrumb items={[{ label: "Kids' Menus" }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#E8985E] text-sm uppercase tracking-[4px] mb-4">Kids&apos; Villa Dining</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            {"Little Guests. Big Flavours."}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Fun, healthy menus designed just for children — cooked fresh in your villa by our private chefs. Pizza parties, build-your-own burger bars and a gentle taste of Bali, every one nut-free as standard.
          </p>
          <p className="text-base md:text-xl text-[#E8985E] font-medium mb-10">
            From IDR 250,000 per child &middot; Minimum 6 children &middot; Nut-free as standard &middot; Halal adaptable
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_KIDS}
              target="_blank"
              rel="noopener noreferrer"
              data-source="kids-hero"
              className="inline-flex items-center gap-2 bg-[#E8985E] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#f0a76f] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Kids&apos; Menu Quote
            </a>
            <Link
              to="/experiences/kids-birthday-chef-party"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Plan a Kids&apos; Birthday Chef Party
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* Menus */}
      <section id="menus" className="py-20 px-6" style={{ background: '#111111' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">The Kids&apos; Collection</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">Six Menus Children Actually Finish</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Every menu includes starter, main and dessert, cooked fresh in your villa kitchen, with ingredients, equipment and full cleanup included. Optional add-ons per child include extra portions, juice boxes, smoothies and a birthday cake slice (+IDR 50,000).
            </p>
          </div>
          <MenuOverview menus={KIDS_MENUS} dataSource="kids-menus" accent="warm" />
        </div>
      </section>

      {/* Why Parents Love Us */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Why Parents Love Us</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white">Built for Children. Approved by Parents.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_PARENTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8985E] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen Note */}
      <section className="py-16 px-6" style={{ background: '#111111' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Allergy Safety: Nut-Free as Standard</p>
          <h2 className="font-playfair text-3xl text-white mb-6">Nut-Free as Standard</h2>
          <p className="text-white/70 leading-relaxed">
            Every kids&apos; menu is nut-free as standard and halal adaptable. Tell us about any allergy — gluten, dairy, egg, shellfish — and our chefs adapt the menu before your date. There is <strong>no extra charge for dietary adjustments</strong>. Our pesto uses sunflower seeds instead of pine nuts to protect nut-free status, and every allergen is listed per menu so you can choose with confidence.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Frequently Asked Questions</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white">Before You Book</h2>
          </div>
          <FAQAccordion items={FAQS} dark />
        </div>
      </section>

      {/* Related Menu Collections */}
      <section className="py-16 px-6" style={{ background: '#0B0B0B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Related Menu Collections</p>
          <h2 className="font-playfair text-2xl md:text-3xl text-white mb-10">Explore More Menus</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED_COLLECTIONS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-[#E8985E]/60 hover:bg-white/[0.07] transition-all"
              >
                <p className="text-white font-medium text-sm mb-2">{item.label}</p>
                <p className="text-[#E8985E] text-xs uppercase tracking-[2px]">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-[#E8985E] text-sm uppercase tracking-[4px] mb-4">Book a Kids&apos; Chef</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">Book a Kids&apos; Chef</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send your date, number of children, ages and any allergies. We confirm your menu and chef on WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_KIDS}
              target="_blank"
              rel="noopener noreferrer"
              data-source="kids-final-cta"
              className="inline-flex items-center gap-2 bg-[#E8985E] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#f0a76f] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Kids&apos; Menu Quote on WhatsApp
            </a>
            <Link
              to="/recommended-services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Not sure? Let us recommend
            </Link>
          </div>
          <p className="mt-6 text-white/40 text-sm">
            Prefer email? <a href="mailto:bali@mychef.id" className="text-[#E8985E] hover:underline">bali@mychef.id</a> &middot; Or call +62 896-7407-2020
          </p>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="kids-menus"
        serviceName="kids' party menu in Bali"
        intent="menu and pricing"
      />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
