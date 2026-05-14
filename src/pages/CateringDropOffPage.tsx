import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Package, CreditCard, ChefHat, Truck, Clock, ShieldCheck,
  X, Home, Baby, Umbrella, Cake, Sparkles, Plane,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20order%20drop-off%20catering.'
const SITE = 'https://mychef.id'

const DROPOFF_PACKAGES = [
  {
    title: 'Family Dinner Drop-Off',
    price: 'IDR 350,000/person',
    priceNum: 350000,
    people: '4 to 8 people',
    format: ['Hot main', '2 sides', 'Dessert', 'Bread', 'Ready to reheat'],
    bestFor: 'Families, simple villa dinners, children-friendly meals, relaxed nights in',
  },
  {
    title: 'Dinner Party Drop-Off',
    price: 'IDR 500,000/person',
    priceNum: 500000,
    people: '8 to 16 people',
    format: ['Starter', 'Main', '3 sides', 'Dessert', 'Plating instructions included'],
    bestFor: 'Villa dinner parties, birthdays, friends, small groups who want better food without staff',
  },
  {
    title: 'Grazing Dinner Drop-Off',
    price: 'IDR 650,000/person',
    priceNum: 650000,
    people: '8+ people',
    format: ['Charcuterie', 'Cheese board', '2 hot mains', 'Sides', 'Dessert'],
    bestFor: 'Entertaining without staff, poolside evenings, villa parties, welcome dinners',
  },
]

const INCLUDED = [
  'Freshly prepared food',
  'Ready-to-serve or ready-to-reheat format',
  'Printed reheating instructions',
  'Plating notes where needed',
  'Recyclable containers',
  'Delivery to villa',
  '90-minute delivery window',
  'WhatsApp confirmation',
]

const NOT_INCLUDED = [
  'No chef on-site',
  'No waiters',
  'No table setup',
  'No live cooking',
  'No cleanup',
  'No service after delivery',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose package', desc: 'Family, dinner party, or grazing.', icon: Package },
  { step: '02', title: 'Send details', desc: 'Date, time, area, guest count.', icon: Calendar },
  { step: '03', title: 'Confirm dietary', desc: 'Vegetarian, gluten-free, etc.', icon: Utensils },
  { step: '04', title: 'Pay deposit', desc: '25% to confirm your order.', icon: CreditCard },
  { step: '05', title: 'We prepare', desc: 'Fresh food cooked that day.', icon: ChefHat },
  { step: '06', title: 'Delivered', desc: 'In your selected 90-min window.', icon: Truck },
  { step: '07', title: 'You serve', desc: 'Reheat, plate, and enjoy privately.', icon: Sparkles },
]

const DELIVERY_RULES = [
  'Order by 4pm for next-day delivery',
  'Delivery window is 90 minutes',
  'Exact time depends on area and traffic',
  'Villa access must be available during window',
  'No on-site staff included',
  'Reheating instructions are printed',
  'Recyclable containers are used',
  'Large orders may require earlier confirmation',
]

const MENU_EXAMPLES = [
  {
    title: 'Family Dinner Example',
    items: ['Roasted chicken or grilled fish', 'Vegetable side', 'Potato/rice side', 'Fresh salad', 'Bread', 'Dessert'],
  },
  {
    title: 'Dinner Party Example',
    items: ['Starter platter', 'Seafood or meat main', '3 sides', 'Dessert', 'Sauces', 'Plating notes'],
  },
  {
    title: 'Grazing Dinner Example',
    items: ['Cheese and charcuterie', 'Vegetable dips', 'Bread and crackers', '2 hot mains', 'Side dishes', 'Dessert'],
  },
]

const BEST_FOR = [
  { icon: Home, title: 'Family villa dinner', desc: 'Quiet meal at home' },
  { icon: Plane, title: 'After travel day', desc: 'Food ready on arrival' },
  { icon: ShieldCheck, title: 'Private dinner', desc: 'No staff in villa' },
  { icon: Cake, title: 'Small birthday', desc: 'Intimate celebration' },
  { icon: Baby, title: 'Kids-friendly meal', desc: 'Comfort food for children' },
  { icon: Umbrella, title: 'Poolside grazing', desc: 'Relaxed by the pool' },
  { icon: Sparkles, title: 'Welcome dinner', desc: 'Greet villa guests' },
  { icon: Users, title: 'Next-day group meal', desc: 'Easy follow-up dinner' },
]

const UPGRADE_PATH = [
  { title: 'BBQ Catering', price: 'From IDR 450,000/person', href: '/catering/bbq-catering', image: '/generated/pkg-bbq.webp' },
  { title: 'Buffet Catering', price: 'From IDR 550,000/person', href: '/catering/buffet-catering', image: '/generated/aura-buffet.webp' },
  { title: 'Plated Dinner', price: 'From IDR 800,000/person', href: '/catering/plated-menus', image: '/generated/hub-catering.webp' },
]

const FAQS = [
  { q: 'What is drop-off catering?', a: 'Drop-off catering is prepared food delivered to your villa in ready-to-serve or ready-to-reheat containers. No chef, no waiters, no setup — just great food and clear instructions.' },
  { q: 'Is staff included?', a: 'No. Drop-off catering does not include on-site chef, waiters, or service staff. That is the whole point — privacy and no interruption.' },
  { q: 'Do I need to reheat the food?', a: 'Some items are ready to serve (salads, grazing items). Hot dishes come with printed reheating instructions. Most take 10-15 minutes in your villa oven.' },
  { q: 'Do you include instructions?', a: 'Yes. Every drop-off order includes printed reheating and plating instructions. We also send a WhatsApp message with tips.' },
  { q: 'Can I order for tomorrow?', a: 'Yes, if you order by 4pm for next-day delivery. Large orders or peak season may need more notice.' },
  { q: 'What areas do you deliver to?', a: 'We deliver across Bali: Canggu, Seminyak, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, and more. Travel fees may apply for remote areas.' },
  { q: 'Do you deliver to villas?', a: 'Yes. We specialize in villa delivery. Just provide the villa name and access instructions.' },
  { q: 'Can I request vegetarian or gluten-free?', a: 'Absolutely. Tell us when ordering and we will adapt the menu. No extra charge for most dietary needs.' },
  { q: 'Are containers recyclable?', a: 'Yes. We use premium recyclable and compostable containers. They are designed to keep food fresh and look good on your table.' },
  { q: 'Do you set up the table?', a: 'No. Drop-off does not include table setup or service. You arrange the food yourself using our plating notes.' },
  { q: 'Can I upgrade to chef service?', a: 'Yes. If you change your mind and want a chef, waiters, and full service, we can switch you to BBQ, buffet, or plated catering.' },
  { q: 'Do I need to pay a deposit?', a: 'Yes. A 25% deposit confirms your order. The balance is due before delivery.' },
]

export default function CateringDropOffPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.do-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.do-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Drop-Off Catering Bali | Food Delivered to Your Villa — myCHEF"
        description="Drop-off catering in Bali without staff inside your villa. Prepared food delivered ready to reheat or serve. Family dinners, dinner parties, grazing boxes. From IDR 350,000/person."
        canonical={`${SITE}/catering/drop-off-catering`}
        ogImage={`${SITE}/generated/pkg-dropoff.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Drop-Off Catering Bali', 'Prepared catering delivered to your villa without staff. Ready to reheat, plate, or serve.', `${SITE}/catering/drop-off-catering`, 'IDR'),
          offerSchema('Family Dinner Drop-Off', 350000, 'IDR', `${SITE}/catering/drop-off-catering`),
          offerSchema('Dinner Party Drop-Off', 500000, 'IDR', `${SITE}/catering/drop-off-catering`),
          offerSchema('Grazing Dinner Drop-Off', 650000, 'IDR', `${SITE}/catering/drop-off-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Drop-Off Catering', `${SITE}/catering/drop-off-catering`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Drop-Off Catering' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/catering/dropoff-hero-v2.webp"
            alt="Premium catering boxes opened on a villa dining table"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#8B5A2B] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Drop-Off Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Drop-Off Catering in Bali<br />
            <span className="italic">Without Staff Inside Your Villa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Prepared catering delivered to your villa, ready to reheat, plate, or serve. No on-site staff, no service team, no interruption. Just proper food, clear instructions, and private dining on your terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5A2B] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#7a4f25] transition-all"
            >
              <Package className="w-4 h-4" /> Order drop-off catering
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp availability
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 350,000/person · No staff · Next-day delivery</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ WHY DROP-OFF ═══════ */}
      <section className="do-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Privacy First"
                title="For People Who Want Good Food Without a Team in the Villa"
                subtitle="Drop-off catering is built for villa guests who want a proper meal but do not want chefs, waiters, or service staff staying inside the villa."
              />
              <div className="space-y-3">
                {['Families', 'Villa renters', 'Small dinner parties', 'Privacy-focused guests', 'Next-day meals', 'Groups with children', 'People who do not want restaurant delivery'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#8B5A2B] flex-shrink-0" />
                    <span className="text-[#4A4745]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/hub-catering.webp"
                alt="Calm villa dining table with food served family-style"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Choose Your Drop-Off Package"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {DROPOFF_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#8B5A2B] font-semibold text-lg mb-1">{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-1"><AllInPrice price={pkg.priceNum} showPlusPlus={false} suffix="/person" /></p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.people}</p>
                <div className="space-y-2 mb-4">
                  {pkg.format.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#8B5A2B]" /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#4A4745]/70 pt-3 border-t border-[#E8E6E3]">
                  <strong>Best for:</strong> {pkg.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Included"
            title="What You Receive"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#8B5A2B]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S NOT INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Clear Expectations"
            title="What Drop-Off Does Not Include"
            subtitle="Drop-off catering does not include on-site chef, service staff, table setup, live cooking, cleanup, or waiting service. That is the point. If you want staff inside the villa, choose BBQ, buffet, or plated catering."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {NOT_INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <X className="w-5 h-5 text-[#4A4745]/40" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How Drop-Off Catering Works"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#8B5A2B]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#8B5A2B]" />
                </div>
                <span className="text-[#8B5A2B] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY RULES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Delivery"
            title="Delivery Rules"
          />
          <div className="space-y-3">
            {DELIVERY_RULES.map((rule) => (
              <div key={rule} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Clock className="w-5 h-5 text-[#8B5A2B] flex-shrink-0 mt-0.5" />
                <span className="text-[#4A4745] text-sm">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MENU EXAMPLES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Menus"
            title="Example Drop-Off Menus"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {MENU_EXAMPLES.map((menu) => (
              <div key={menu.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h4 className="font-medium text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.title}</h4>
                <div className="space-y-2">
                  {menu.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#8B5A2B]" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DIETARY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <Utensils className="w-10 h-10 text-[#8B5A2B] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Dietary Options</h2>
          <p className="text-[#4A4745] mb-6">
            We can adjust menus for vegetarian, vegan, gluten-free, pork-free, seafood-free, nut-free, and child-friendly needs when confirmed before preparation.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Vegetarian', 'Vegan', 'Gluten-free', 'Pork-free', 'Seafood-free', 'Nut-free', 'Child-friendly'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BEST FOR ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Use Cases"
            title="Best For"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#8B5A2B]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#8B5A2B]" />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ UPGRADE PATH ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Need More?"
            title="Need Staff Instead?"
            subtitle="If you want chef service, waiters, live cooking, setup, and cleanup, choose one of our serviced catering options instead."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {UPGRADE_PATH.map((path) => (
              <Link
                key={path.title}
                to={path.href}
                className="group bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={path.image} alt={path.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-medium text-[#1A1A1A] mb-1">{path.title}</h4>
                  <p className="text-[#6B8E5A] text-sm font-semibold">{path.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Order Now"
            title="Order Drop-Off Catering"
          />
          <BookingFormCatering
            title="Order Drop-Off Catering"
            subtitle="Fast ordering. We will confirm delivery window and final price by WhatsApp."
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Package, required: true },
              { name: 'date', label: 'Delivery Date', type: 'date', icon: Calendar, required: true },
              { name: 'window', label: 'Preferred Delivery Window', type: 'text', icon: Clock, placeholder: 'e.g. 5:00-6:30 PM' },
              { name: 'area', label: 'Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu...', required: true },
              { name: 'villa', label: 'Villa / Address', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 6', required: true },
              { name: 'dietary', label: 'Dietary Notes', type: 'textarea', placeholder: 'Allergies, restrictions...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Family Dinner Drop-Off', 'Dinner Party Drop-Off', 'Grazing Dinner Drop-Off']}
            accent="#8B5A2B"
          />
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Laura & Ben', location: 'Pererenan Villa', quote: 'The drop-off dinner party package was perfect. Food arrived on time, reheating instructions were clear, and everything tasted fresh. Zero stress.', rating: 5 },
          { name: 'The Miller Family', location: 'Canggu Villa', quote: 'Family dinner drop-off for 6. The roasted chicken was juicy and the kids loved the dessert. Great option when you want privacy.', rating: 5 },
          { name: 'Sophie T.', location: 'Seminyak Villa', quote: 'Grazing dinner drop-off for our girls\' night. The charcuterie board was beautiful and the hot mains were delicious. Will order again.', rating: 5 },
        ]}
        title="What Drop-Off Guests Say"
        subtitle="Real reviews from villa drop-off catering across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Drop-Off FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hub-catering.webp"
            alt="Beautiful finished villa table after drop-off catering"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Want Dinner Delivered to Your Villa?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Choose your package, send your area and guest count, and we will confirm the final price and delivery window by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5A2B] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#7a4f25] transition-all"
            >
              <Package className="w-4 h-4" /> Order drop-off catering
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
