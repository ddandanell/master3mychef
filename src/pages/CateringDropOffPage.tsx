import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { MessageCircle, Check, Calendar, Users, MapPin, Utensils, Package, CreditCard, ChefHat, Truck, Clock, ShieldCheck, X, Home, Baby, Umbrella, Cake, Sparkles, Plane, Thermometer, ClipboardList, Box, Wine, Coffee, Leaf, Dumbbell, Waves, Repeat, Sunrise, Building2, HeartPulse } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, CateringDiscoverySection } from '@/components/shared'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'drop-off catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'
const PAGE_URL = `${SITE}/catering/drop-off-catering`
const ACCENT = '#C5A028'

/* ───────── Packages ─────────
 * All packages are listed at the brief's stated IDR 700,000/person base;
 * final totals including 11% government tax + 10% service charge are confirmed in the guest quote.
 */
const DROPOFF_PACKAGES = [
  {
    title: 'Family Dinner Drop-Off',
    price: 'IDR 700,000/person',
    priceNum: 700000,
    people: '5 to 8 people',
    format: ['Hot main', '2 sides', 'Bread', 'Dessert'],
    bestFor: 'Families, relaxed nights in, kid-friendly dinners',
  },
  {
    title: 'Dinner Party Drop-Off',
    price: 'IDR 700,000/person',
    priceNum: 700000,
    people: '8 to 16 people',
    format: ['Starter', 'Main', '3 sides', 'Dessert', 'Plating instructions'],
    bestFor: 'Birthdays, friends\' nights, better food without staff',
  },
  {
    title: 'Grazing Dinner Drop-Off',
    price: 'IDR 700,000/person',
    priceNum: 700000,
    people: '8+ people',
    format: ['Charcuterie', 'Cheese board', '2 hot mains', 'Sides', 'Dessert'],
    bestFor: 'Poolside evenings, welcome dinners, entertaining without staff',
  },
]

/* ───────── Included / Not Included ───────── */
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

/* ───────── How It Works ───────── */
const HOW_IT_WORKS = [
  { step: '01', title: 'Choose package', desc: 'Family, dinner party, or grazing.', icon: Package },
  { step: '02', title: 'Send details', desc: 'Date, time, area, guest count.', icon: Calendar },
  { step: '03', title: 'Confirm dietary', desc: 'Vegetarian, gluten-free, etc.', icon: Utensils },
  { step: '04', title: 'Pay deposit', desc: '50% to confirm your order.', icon: CreditCard },
  { step: '05', title: 'We prepare', desc: 'Fresh food cooked that day.', icon: ChefHat },
  { step: '06', title: 'Delivered', desc: 'In your selected 90-min window.', icon: Truck },
  { step: '07', title: 'You serve', desc: 'Reheat, plate, and enjoy privately.', icon: Sparkles },
]

/* ───────── Delivery Rules ───────── */
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

/* ───────── Menu Examples ───────── */
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

/* ───────── Best For / Use Cases ───────── */
const BEST_FOR = [
  { icon: Home, title: 'Villa lunches', desc: 'Quiet meal at home' },
  { icon: Users, title: 'Staff meals', desc: 'Reliable crew food' },
  { icon: Cake, title: 'Casual birthdays', desc: 'Intimate celebration' },
  { icon: Umbrella, title: 'Beach house meals', desc: 'Relaxed by the water' },
  { icon: Plane, title: 'Crew food', desc: 'Production team dining' },
  { icon: Box, title: 'Production meals', desc: 'Film and event crews' },
  { icon: Baby, title: 'Family gatherings', desc: 'Comfort food for all ages' },
  { icon: Sparkles, title: 'Pre-event food', desc: 'Greet villa guests' },
]

/* ───────── Menu Options ───────── */
const MENU_OPTIONS = [
  { icon: Utensils, title: 'Indonesian meals', desc: 'Nasi campur, sate, lawar, and local favorites' },
  { icon: ChefHat, title: 'Western meals', desc: 'Roasts, grills, and continental classics' },
  { icon: Leaf, title: 'Salads', desc: 'Fresh greens, grain bowls, and composed salads' },
  { icon: Box, title: 'Sandwiches', desc: 'Gourmet wraps, baguettes, and finger rolls' },
  { icon: Utensils, title: 'Rice bowls', desc: 'Build-your-own with proteins and toppings' },
  { icon: Utensils, title: 'Pasta trays', desc: 'Baked and sauced pasta for easy serving' },
  { icon: Clock, title: 'Breakfast boxes', desc: 'Pastries, eggs, fruit, and coffee packs' },
  { icon: Box, title: 'Snack platters', desc: 'Dips, crudités, and grazing bites' },
  { icon: Cake, title: 'Dessert boxes', desc: 'Brownies, tarts, and tropical sweets' },
]

/* ───────── Drop-Off vs Full Service ───────── */
const VS_COMPARISON = [
  { label: 'Drop-Off Catering', points: ['Client manages serving', 'Lower cost', 'No staff in villa', 'Flexible timing', 'Private dining'] },
  { label: 'Full-Service Catering', points: ['Staff handle everything', 'Better for formal events', 'Precise hot food timing', 'Setup and cleanup included', 'Live cooking available'] },
]

/* ───────── Food Safety & Timing ───────── */
const SAFETY_ITEMS = [
  { icon: Clock, title: 'Delivery windows', desc: 'We schedule a 90-minute window so food arrives fresh, not sitting idle.' },
  { icon: Thermometer, title: 'Warm food limits', desc: 'Hot dishes are packed insulated and should be served within 60 minutes of delivery.' },
  { icon: ShieldCheck, title: 'Cold storage', desc: 'Cold items travel in chilled boxes. Refrigerate immediately if not serving right away.' },
  { icon: ClipboardList, title: 'Reheating', desc: 'Printed instructions included. Most dishes reheat in 10–15 minutes in a standard oven.' },
  { icon: Calendar, title: 'Same-day ordering', desc: 'Small orders may be possible same-day before 10am. We recommend 24–48 hours notice.' },
]

/* ───────── Guest Count & Portions ───────── */
const GUEST_COUNTS = [
  { range: 'Small group', count: '5–8 guests', tip: 'Order per-person packages with one shared starter.' },
  { range: 'Medium group', count: '8–16 guests', tip: 'Mix packages and add a grazing board for variety.' },
  { range: 'Large delivery', count: '16–40 guests', tip: 'Combine multiple packages and add-on trays to avoid under-ordering.' },
]

/* ───────── Add-Ons ───────── */
const ADDONS = [
  { icon: Wine, title: 'Drinks', desc: 'Juice, soft drinks, wine, and beer packs' },
  { icon: Leaf, title: 'Fruit platters', desc: 'Seasonal tropical fruit for a fresh finish' },
  { icon: Box, title: 'Grazing boxes', desc: 'Cheese, charcuterie, and cracker selections' },
  { icon: Cake, title: 'Dessert', desc: 'Cakes, tarts, and individual sweet boxes' },
  { icon: Coffee, title: 'Coffee', desc: 'Cold brew or hot coffee carafes' },
  { icon: Utensils, title: 'Disposable plates', desc: 'Eco-friendly cutlery, napkins, and serveware' },
  { icon: Box, title: 'Reusable equipment', desc: 'Chafing dishes and serving utensils for hire' },
  { icon: Users, title: 'Extra portions', desc: 'Additional trays and portions for unexpected guests' },
]

/* ───────── Trust Strip — drop-off specific (no staff, no cleanup) ───────── */
const TRUST_ITEMS = [
  { icon: MessageCircle, label: 'Delivery confirmation', desc: 'WhatsApp update on arrival' },
  { icon: ClipboardList, label: 'Clearly labelled dishes', desc: 'Every container identified' },
  { icon: Thermometer, label: 'Reheating instructions', desc: 'Printed in every order' },
  { icon: Package, label: 'Recyclable packaging', desc: 'Insulated and chilled boxes' },
  { icon: Home, label: 'No staff remaining on site', desc: 'Total privacy after delivery' },
  { icon: Repeat, label: 'Optional recurring delivery', desc: 'Weekly rhythms for long stays' },
]

/* ───────── Healthy Menu Categories ───────── */
const HEALTHY_MENU_CATEGORIES = [
  'High-protein meal boxes',
  'Macro-friendly rice bowls',
  'Healthy salad bowls',
  'Grilled protein packages',
  'Vegan power bowls',
  'Low-carb meals',
  'Keto-friendly options',
  'Gluten-free meals',
  'Plant-based retreat menus',
  'Breakfast & recovery boxes',
  'Healthy snack boxes',
  'Family wellness meals',
  "Children's healthy meals",
  'Surf & fitness group packages',
  'Weekly villa meal packages',
]

/* ───────── Healthy Drop-Off Catering ───────── */
const HEALTHY_DROPOFF = [
  'Fresh, chef-prepared meals delivered directly to your villa',
  'Balanced proteins, vegetables, carbohydrates, and healthy fats',
  'Lighter meals for lunches, training days, and active holidays',
  'Available as individual portions or shared family-style trays',
  'Suitable for villa stays, retreats, offices, and production teams',
  'Clearly labelled meals with storage and reheating instructions',
]

/* ───────── Fitness & High-Protein Meal Delivery ───────── */
const FITNESS_DELIVERY = [
  'High-protein chicken, fish, beef, egg, tofu, and tempeh meals',
  'Protein-focused breakfasts, lunches, dinners, and snack boxes',
  'Balanced carbohydrates for training and active days',
  'Lighter cooking methods with less unnecessary oil',
  'Portions adapted for smaller or larger appetites',
  'Optional individual packaging for easy daily use',
]

/* ───────── Meals for Gym, Surf & Active Holidays ───────── */
const ACTIVE_HOLIDAY_MEALS = [
  'Pre-training breakfast boxes',
  'Post-workout protein meals',
  'Healthy lunches for surf groups',
  'Recovery dinners after active days',
  'Group meals for fitness camps and sports teams',
  'Convenient villa meals without restaurant waiting times',
  'Flexible orders for one day, several days, or a complete stay',
]

/* ───────── Yoga, Wellness & Fitness Retreat Catering ───────── */
const RETREAT_CATERING = [
  'Breakfast, lunch, dinner, snacks, and drinks',
  'Plant-based, high-protein, gluten-free, and dairy-free options',
  'Individual meal boxes or shared buffet-style trays',
  'Meals coordinated around yoga, training, workshops, and excursions',
  'Multi-day rotating menus',
  'Separate labelling for dietary requirements',
  'Delivery to villas and retreat venues throughout Bali',
]

/* ───────── Weekly Drop-Off Meals for Long Stays ───────── */
const WEEKLY_MEALS = [
  'Order several lunches or dinners together',
  'Choose recurring deliveries throughout your stay',
  'Meals selected specifically for safe storage and reheating',
  'Individual portions available',
  'Family and child-friendly alternatives',
  'Suitable for digital nomads, expats, families, and villa guests',
  'Reduce daily ordering and restaurant costs',
]

/* ───────── Build Your Healthy Meal Package ───────── */
const BUILD_PACKAGE = [
  { title: 'Choose your protein', desc: 'Chicken, fish, beef, eggs, tofu, or tempeh.' },
  { title: 'Choose your carbohydrate', desc: 'Rice, potatoes, grains, or low-carb alternatives.' },
  { title: 'Choose your vegetables', desc: 'Seasonal vegetables, cooked or fresh.' },
  { title: 'Choose your salad or side', desc: 'Salads, grain bowls, and lighter sides.' },
  { title: 'Individual or shared packaging', desc: 'Portioned meal boxes or family-style trays.' },
  { title: 'Add extras', desc: 'Breakfast, snacks, fruit, juice, or dessert.' },
  { title: 'Tell us your dietary needs', desc: 'Allergies and dietary restrictions labelled separately.' },
]

/* ───────── Healthy Breakfast & Snack Boxes ───────── */
const BREAKFAST_SNACKS = [
  'Egg and vegetable breakfast boxes',
  'Overnight oats and chia pudding',
  'Tropical fruit and yoghurt',
  'Smoothie ingredient packs',
  'Protein snack boxes',
  'Sandwiches and wraps',
  'Salads and grain bowls',
  'Healthy office and retreat snacks',
]

/* ───────── Corporate Teams & Production Crews ───────── */
const CORPORATE_TEAMS = [
  'Individually packed staff lunches',
  'Healthy crew meals',
  'Office lunch delivery',
  'Film production catering',
  'Event setup-team meals',
  'Workshop and conference lunches',
  'Multi-day team catering',
  'Vegetarian and allergy-labelled boxes',
]

/* ───────── FAQ ───────── */
const FAQS = [
  { q: "What's the minimum order?", a: 'Five people for the family dinner package; eight for dinner party and grazing packages. The minimum is the same in every delivery area — remote locations simply carry a quoted travel fee. Custom sizes on request.' },
  { q: 'Is any staff included?', a: 'No — that\'s the product. No chef, no waiters, no setup crew, no cleanup team. You serve yourself, privately. If you\'d like staff for one night, see <a href="/catering">full-service catering</a>.' },
  { q: 'How much notice do you need?', a: 'Order by 4pm for next-day delivery. We recommend 24–48 hours, especially for groups over 12 or peak season. Same-day is sometimes possible before 10am.' },
  { q: 'Which areas do you deliver to?', a: 'All major Bali villa areas — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Jimbaran, Nusa Dua, and more. Remote deliveries may carry a quoted travel fee.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes — vegetarian, vegan, gluten-free, pork-free, seafood-free, nut-free, and child-friendly meals, confirmed before preparation and labelled separately.' },
  { q: 'How is the food packed?', a: 'In premium recyclable containers — hot items insulated, cold items chilled — with printed reheating and plating notes in every order.' },
  { q: 'Do you offer recurring deliveries for long stays?', a: 'Yes — many long-stay guests set a weekly rhythm (e.g., three dinners a week). For daily nutrition-focused plans, see our <a href="/healthy-meal-delivery-indonesia">healthy meal plans</a>.' },
  { q: "What's the payment and cancellation policy?", a: 'A 50% deposit confirms your order. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
  { q: 'Do you offer healthy drop-off catering in Bali?', a: 'Yes — balanced, chef-prepared meals with quality proteins, vegetables, carbohydrates, and healthy fats, delivered to your villa as individual portions or shared trays. Lighter menus are available for training days and active holidays.' },
  { q: 'Can you prepare high-protein or macro-friendly meals?', a: 'Yes — protein-focused meals built around chicken, fish, beef, eggs, tofu, and tempeh, with balanced carbohydrates and portion-conscious sizing. Tell us your training routine and appetite and we will suggest suitable options.' },
  { q: 'Do you provide meals for fitness or yoga retreats?', a: 'Yes — we deliver breakfast, lunch, dinner, snacks, and drinks to retreat venues across Bali, with multi-day rotating menus, plant-based and high-protein options, and meals timed around yoga, training, and workshop schedules.' },
  { q: 'Can meals be individually portioned and labelled?', a: 'Yes — individual meal boxes are available for every menu, each labelled with the dish name, dietary notes, and storage and reheating instructions. Shared family-style trays are also available.' },
  { q: 'Can you prepare low-carb or keto meals?', a: 'Yes — low-carb and keto-friendly options are available across most menus, with extra vegetables or salads replacing rice, bread, and potatoes. Vegan and gluten-free guests can be accommodated in the same order with separate labelling.' },
  { q: 'How many days can delivered meals be stored?', a: 'Most dishes keep well for up to 2–3 days refrigerated in their sealed containers. For recurring orders we recommend scheduling deliveries across the week so everything is eaten at its freshest.' },
  { q: 'Can meals be delivered cold for reheating later?', a: 'Yes — meals can be delivered chilled with printed reheating instructions, which is ideal for long stays, late arrivals, and groups eating at different times. Most dishes reheat in 10–15 minutes in a standard oven.' },
]

/* ───────── Schema FAQ (matches visible FAQ content) ───────── */
const SCHEMA_FAQS = [
  { question: 'What is the minimum order for drop-off catering?', answer: 'Five people for the family dinner package; eight for dinner party and grazing packages. The minimum is the same in every delivery area — remote locations simply carry a quoted travel fee. Custom sizes on request.' },
  { question: 'Is any staff included with drop-off catering?', answer: 'No. Drop-off includes no chef, waiters, setup or cleanup staff — food is delivered ready to serve and you serve yourself privately.' },
  { question: 'How much notice do you need?', answer: 'Order by 4pm for next-day delivery. 24–48 hours is recommended, especially for groups over 12 or peak season. Same-day is sometimes possible before 10am.' },
  { question: 'Which areas do you deliver to?', answer: 'All major Bali villa areas — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Jimbaran, Nusa Dua and more. Remote deliveries may carry a quoted travel fee.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes — vegetarian, vegan, gluten-free, pork-free, seafood-free, nut-free and child-friendly meals, confirmed before preparation and labelled separately.' },
  { question: 'Do you offer recurring deliveries for long stays?', answer: 'Yes — weekly rhythms such as three dinners a week can be arranged for long-stay guests.' },
  { question: 'What is the payment and cancellation policy?', answer: 'A 50% deposit confirms your order. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
  { question: 'Do you offer healthy drop-off catering in Bali?', answer: 'Yes — balanced, chef-prepared meals with quality proteins, vegetables, carbohydrates and healthy fats, delivered to your villa as individual portions or shared trays.' },
  { question: 'Can you prepare high-protein or macro-friendly meals?', answer: 'Yes — protein-focused meals built around chicken, fish, beef, eggs, tofu and tempeh, with balanced carbohydrates and portion-conscious sizing.' },
  { question: 'Do you provide meals for fitness or yoga retreats?', answer: 'Yes — breakfast, lunch, dinner, snacks and drinks delivered to retreat venues across Bali, with multi-day rotating menus and plant-based and high-protein options.' },
  { question: 'Can meals be individually portioned and labelled?', answer: 'Yes — individual meal boxes are available for every menu, each labelled with the dish name, dietary notes, and storage and reheating instructions.' },
  { question: 'Can you prepare low-carb or keto meals?', answer: 'Yes — low-carb and keto-friendly options are available across most menus, and vegan and gluten-free guests can be accommodated in the same order with separate labelling.' },
  { question: 'How many days can delivered meals be stored?', answer: 'Most dishes keep well for up to 2–3 days refrigerated in their sealed containers. Recurring deliveries across the week keep everything at its freshest.' },
  { question: 'Can meals be delivered cold for reheating later?', answer: 'Yes — meals can be delivered chilled with printed reheating instructions. Most dishes reheat in 10–15 minutes in a standard oven.' },
]

const DROPOFF_GALLERY = [
  '/generated/mychef-catering-bali-hero-dropoff.webp',
  '/generated/mychef-catering-bali-dropoff-family.webp',
  '/generated/mychef-catering-bali-dropoff-dinner-party.webp',
  '/generated/mychef-catering-bali-dropoff-grazing.webp',
  '/generated/mychef-catering-bali-hero-dropoff.webp',
  '/generated/mychef-catering-bali-dropoff-family.webp',
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
        title="Drop-Off Catering Bali | Chef Food Delivered to Your Villa"
        description="Drop-off catering in Bali: premium chef-prepared food delivered to your villa, ready to serve. From per-person pricing. WhatsApp myCHEF."
        canonical={PAGE_URL}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-dropoff.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Drop-Off Catering Bali',
            description: 'Chef-prepared food delivered to Bali villas, ready to serve — no staff, no setup. Family dinner, dinner party and grazing packages; order by 4pm for next-day delivery.',
            url: PAGE_URL,
            lowPrice: '700000',
            highPrice: '700000',
          }),
          faqPageSchema(SCHEMA_FAQS),
          cateringBreadcrumbSchema('Drop-Off Catering Bali', PAGE_URL),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Drop-Off Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-dropoff.webp"
            alt="Premium drop-off catering containers arranged on a Bali villa kitchen island"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Drop-Off Catering Bali' }]} theme="dark" className="justify-center mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Drop-Off Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Drop-Off Catering Bali — Chef-Prepared Dinners, Delivered. No Staff, No Fuss.
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-2xl mx-auto">
            Restaurant-quality food, cooked by our chefs that day, delivered to your villa ready to serve — and then we leave. No chef in your kitchen, no waiters at your table, no cleanup crew. Just a proper dinner and total privacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
              style={{ background: ACCENT }}
            >
              <Package className="w-4 h-4" /> Order Drop-Off Catering
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-drop-off-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp availability
            </a>
          </div>
          <p className="text-white/[60%] text-sm">From IDR 700,000/person · Min. 5 guests · Order by 4pm for next-day delivery</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP — drop-off specific (no staff, no cleanup) ═══════ */}
      <div className="bg-white border-y border-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {TRUST_ITEMS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="bg-[#6B8E5A]/10 rounded-xl p-2.5 shrink-0">
                  <Icon className="w-5 h-5 text-[#6B8E5A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{label}</p>
                  <p className="text-xs text-[#4A4745] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ SECTION 1 — WHY DROP-OFF ═══════ */}
      <section className="do-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Why Choose Drop-Off"
                title="Cheaper, Faster, Simpler Than Full-Service Catering"
                subtitle="Drop-off catering in Bali is built for villa guests who want proper food delivered without chefs, waiters, or service staff staying inside the villa."
              />
              <p className="mt-4 text-sm text-[#4A4745] max-w-2xl">
                Not sure whether drop-off is right for your villa night? Our <Link to="/blog/drop-off-catering-bali" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">drop-off catering guide</Link> explains the formats, timing and when to choose delivery over full service.
              </p>
              <div className="space-y-3">
                {['No staff in your villa — total privacy', 'Lower cost than full-service catering', 'Next-day delivery available', 'Ready to reheat or serve on arrival', 'Ideal for casual and low-effort hosting'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span className="text-[#4A4745]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-catering-bali-dropoff-family.webp"
                alt="Family dinner drop-off spread served on a calm Bali villa dining table"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2 — BEST USE CASES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Best Use Cases"
            title="When Drop-Off Catering Works Best in Bali"
            subtitle="From villa lunches and staff meals to casual birthdays and pre-event food — drop-off delivery fits dozens of real situations."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${ACCENT}1A` }}>
                  <item.icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — WHAT IS INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="What Is Included"
            title="Everything That Comes With Your Drop-Off Order"
            subtitle="Prepared dishes, serving containers, labels, reheating instructions, disposable or upgraded serviceware, and delivery to your villa."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-[800px] mx-auto">
            <h3 className="text-lg font-medium mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Not Included</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {NOT_INCLUDED.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                  <X className="w-5 h-5 text-[#4A4745]/40" />
                  <span className="text-[#4A4745] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — MENU OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Menu Options"
            title="Drop-Off Menu Styles for Every Taste"
            subtitle="Indonesian meals, Western meals, salads, sandwiches, rice bowls, pasta trays, breakfast boxes, snack platters, and dessert boxes."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {MENU_OPTIONS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: `${ACCENT}1A` }}>
                  <item.icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-center font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Healthy &amp; Fitness Menu Categories
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {HEALTHY_MENU_CATEGORIES.map((cat) => (
                <span key={cat} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            For daily nutrition-focused plans, see our{' '}
            <Link to="/healthy-meal-delivery-indonesia" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">healthy meal plans</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 4B — HEALTHY DROP-OFF CATERING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Healthy Catering Bali"
            title="Healthy Drop-Off Catering in Bali"
            subtitle="Fresh, balanced, chef-prepared meals delivered directly to your villa — healthy food delivery without the restaurant wait or the cleanup."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {HEALTHY_DROPOFF.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4C — FITNESS & HIGH-PROTEIN MEAL DELIVERY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Fitness Catering Bali"
            title="Fitness and High-Protein Meal Delivery"
            subtitle="Macro-friendly, protein-focused meals for training days — portion-conscious without promising clinical precision."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {FITNESS_DELIVERY.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Dumbbell className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4D — GYM, SURF & ACTIVE HOLIDAYS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Active Holidays"
            title="Meals for Gym, Surf and Active Holidays"
            subtitle="Pre-training breakfasts, post-workout protein meals, and recovery dinners — fuel for Bali's active crowd, delivered to the villa."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {ACTIVE_HOLIDAY_MEALS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Waves className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4E — RETREAT CATERING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Retreat Catering Bali"
            title="Yoga, Wellness and Fitness Retreat Catering"
            subtitle="Nutrition-focused drop-off meals for yoga retreats, fitness retreats, wellness workshops, and multi-day programs across Bali."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {RETREAT_CATERING.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <HeartPulse className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            Hosting a retreat with on-site service? See our <Link to="/catering/retreat-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">retreat catering</Link> page for staffed multi-day options.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 4F — WEEKLY MEALS FOR LONG STAYS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Meal Prep Bali"
            title="Weekly Drop-Off Meals for Long Stays"
            subtitle="Fridge-ready, pre-portioned meals and recurring delivery rhythms for digital nomads, expats, families, and long-stay villa guests."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {WEEKLY_MEALS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Repeat className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            For structured daily nutrition plans, see our dedicated <Link to="/healthy-meal-delivery-indonesia" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">healthy meal delivery</Link> page.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 4G — BUILD YOUR HEALTHY MEAL PACKAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Custom Meal Plan Bali"
            title="Build Your Healthy Meal Package"
            subtitle="Mix and match proteins, carbohydrates, vegetables, and sides into a custom healthy catering package — individual boxes or shared trays."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {BUILD_PACKAGE.map((step, idx) => (
              <div key={step.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5">
                <span className="text-xs font-bold tracking-wider" style={{ color: ACCENT }}>{String(idx + 1).padStart(2, '0')}</span>
                <h4 className="font-medium text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4H — HEALTHY BREAKFAST & SNACK BOXES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Breakfast & Snacks"
            title="Healthy Breakfast and Snack Boxes"
            subtitle="Morning boxes and daytime snacks that travel well — for villas, offices, retreats, and training days."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {BREAKFAST_SNACKS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Sunrise className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4I — CORPORATE TEAMS & PRODUCTION CREWS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Teams & Crews"
            title="Food for Corporate Teams and Production Crews"
            subtitle="Reliable, individually packed meals for offices, workshops, film productions, and event setup teams — delivered on schedule."
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {CORPORATE_TEAMS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Building2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — DROP-OFF VS FULL SERVICE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Drop-Off vs Full Service"
            title="Choose the Right Catering Format for Your Event"
            subtitle="Drop-off works best when you manage serving yourself. Full service is better for formal events, precise hot food timing, and cleanup."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {VS_COMPARISON.map((col) => (
              <div key={col.label} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{col.label}</h3>
                <div className="space-y-3">
                  {col.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                      <span className="text-sm text-[#4A4745]">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            Halfway option: many groups book drop-off for quiet nights and a{' '}
            <Link to="/catering/villa-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">full-service villa catering</Link>{' '}
            dinner for the celebration night. See all{' '}
            <Link to="/catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">catering services</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 6 — FOOD SAFETY & TIMING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Food Safety & Timing"
            title="Delivery Windows, Storage & Reheating"
            subtitle="We manage delivery windows, warm food limits, cold storage, reheating guidance, and same-day ordering limitations so your food stays safe and delicious."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SAFETY_ITEMS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: `${ACCENT}1A` }}>
                  <item.icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7 — GUEST COUNT & PORTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Guest Count & Portions"
            title="Plan Portions by Group Size"
            subtitle="Small group, medium group, or large delivery — per-person planning helps you avoid under-ordering and keeps every guest satisfied."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {GUEST_COUNTS.map((g) => (
              <div key={g.range} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center">
                <Users className="w-8 h-8 mx-auto mb-3" style={{ color: ACCENT }} />
                <h4 className="font-medium text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{g.range}</h4>
                <p className="text-sm font-semibold mb-3" style={{ color: ACCENT }}>{g.count}</p>
                <p className="text-sm text-[#4A4745]">{g.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8 — ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Add-Ons"
            title="Extras to Complete Your Drop-Off Order"
            subtitle="Drinks, fruit platters, grazing boxes, dessert, coffee, disposable plates, reusable equipment, and extra portions."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ADDONS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${ACCENT}1A` }}>
                  <item.icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES (retained for conversion) ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Choose Your Drop-Off Package"
            subtitle={<>All packages are per person and include freshly prepared dishes, recyclable packaging, printed reheating and plating instructions, and delivery. Final totals including tax and service are confirmed in your quote. See full <Link to="/pricing" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">pricing</Link>.</>}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {DROPOFF_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="font-semibold text-lg mb-1" style={{ color: ACCENT }}>{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-1"><AllInPrice price={pkg.priceNum} showPlusPlus={false} suffix="/person" /></p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.people}</p>
                <div className="space-y-2 mb-4">
                  {pkg.format.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4" style={{ color: ACCENT }} /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#4A4745]/80 pt-3 border-t border-[#E8E6E3]">
                  <strong>Best for:</strong> {pkg.bestFor}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            Add <Link to="/catering/grazing-tables" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">grazing boxes & tables</Link> to any dinner package for a styled start.
          </p>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="How It Works"
            title="How Drop-Off Catering Works"
            subtitle={<>From order to delivery — a simple process. Read the full <Link to="/blog/drop-off-catering-bali" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">drop-off catering Bali guide</Link>.</>}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `${ACCENT}1A` }}>
                  <step.icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <span className="text-xs font-bold tracking-wider" style={{ color: ACCENT }}>{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
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
                      <Check className="w-4 h-4" style={{ color: ACCENT }} /> {item}
                    </div>
                  ))}
                </div>
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
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DIETARY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <Utensils className="w-10 h-10 mx-auto mb-4" style={{ color: ACCENT }} />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Dietary Options</h2>
          <p className="text-[#4A4745] mb-6">
            We can adjust menus for vegetarian, vegan, gluten-free, dairy-free, keto, low-carb, high-protein, plant-based, pork-free, halal-friendly, nut-free, and child-friendly needs when confirmed before preparation — mixed diets in one order, labelled separately.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Vegetarian', 'Vegan', 'Plant-based', 'Gluten-free', 'Dairy-free', 'Keto-friendly', 'Low-carb', 'High-protein', 'Pork-free', 'Halal-friendly', 'Seafood-free', 'Nut-free', 'Low-sugar', 'Child-friendly'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PHOTO GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Gallery"
            title="Drop-Off Catering Gallery"
            subtitle="Prepared food, delivery boxes, and finished villa tables from drop-off catering across Bali."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {DROPOFF_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <OptimizedImage src={src} alt={`Drop-off catering setup ${i + 1} at a Bali villa`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9 — FAQ (7 questions) ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Drop-Off Catering FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
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

      <PressStrip />

      {/* ═══════ SECTION 10 — CTA + BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Order Now"
            title="Order Drop-Off Catering"
            subtitle="Order by date, time, location, guest count, food style, and dietary needs. We will confirm delivery window and final price by WhatsApp."
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
            accent={ACCENT}
          />
        </div>
      </section>

      <CateringDiscoverySection page="dropOff" />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-dropoff-dinner-party.webp"
            alt="Dinner party drop-off spread arranged on a Bali villa dining table"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Want Dinner Delivered to Your Villa?
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Choose your package, send your area and guest count, and we will confirm the final price and delivery window by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
              style={{ background: ACCENT }}
            >
              <Package className="w-4 h-4" /> Order Drop-Off Catering
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-drop-off-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Explore More
          </p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Villa', href: '/villa-chef', desc: 'Daily chef service for your stay.' },
              { label: 'BBQ Catering', href: '/catering/bbq-catering', desc: 'Live-fire grilling at your villa.' },
              { label: 'grazing boxes & tables', href: '/catering/grazing-tables', desc: 'Styled spreads for events.' },
              { label: 'Buffet Catering', href: '/catering/buffet', desc: 'Large-group buffet service.' },
              { label: 'Plated Dinners', href: '/catering/plated-catering', desc: 'Formal course service.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />

      <StickyMobileCTA
        pageSource="catering-dropoff"
        serviceName="drop-off catering in Bali"
        intent="drop-off menu and pricing"
      />
    </div>
  )
}