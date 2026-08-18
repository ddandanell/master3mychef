import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { MessageCircle, Check, Calendar, Users, ChefHat, ShieldCheck, Sparkles, Heart, Utensils, Moon, Wind, ClipboardList, Zap, ShoppingBag, Home, Leaf, Coffee, CupSoda, Sun, MapPin, Clock, ArrowRight, Flower2, Flame, Wine, Camera, Music, UtensilsCrossed } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'

import FAQAccordion from '@/components/catering/FAQAccordion'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { ArticleContentSection, Breadcrumb, PressStrip, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({
  serviceName: 'retreat catering in Bali',
  intent: 'a multi-day retreat meal plan and pricing',
})
const SITE = 'https://mychef.id'

/* ── DATA ── */

const WHY_CHOOSE = [
  {
    icon: ClipboardList,
    title: 'One Dedicated Coordinator',
    desc: 'A single point of contact from first enquiry through final checkout. Your coordinator holds the menu, dietary records, villa logistics, and daily schedule so nothing is lost between messages.',
  },
  {
    icon: ChefHat,
    title: 'Consistent Chefs for the Full Retreat',
    desc: 'The same head chef and core team stay with your retreat for its entire duration. They learn guest preferences, refine timing, and build rhythm with your program.',
  },
  {
    icon: Clock,
    title: 'Flexible Meal Times',
    desc: 'Early breakfast before 6am yoga, a 10am coffee break, a late lunch after an excursion, or dinner served at 8:30pm. We align service to your agenda, not the other way around.',
  },
  {
    icon: Sun,
    title: 'Early Breakfasts & Late Dinners',
    desc: 'Silent pre-dawn meals, post-meditation brunches, and candlelit evening feasts are all standard for us. We schedule prep so quality never suffers at odd hours.',
  },
  {
    icon: MapPin,
    title: 'Excursion Lunches & Beach Drops',
    desc: 'Packed lunches, cool boxes, and portable meals for temple visits, waterfall hikes, surf trips, or beach days. Guests return to base without hunger or disruption.',
  },
  {
    icon: ShieldCheck,
    title: 'Dietary Management at Scale',
    desc: 'We collect, label, and cross-check allergies, intolerances, religious requirements, and lifestyle diets before arrival. Every plate is prepared with the guest profile in mind.',
  },
  {
    icon: ShoppingBag,
    title: 'Daily Procurement & Market Runs',
    desc: 'Fresh produce is bought daily from local markets and trusted suppliers. Dry goods, specialty items, and imported products are planned in advance to avoid last-minute gaps.',
  },
  {
    icon: Utensils,
    title: 'Kitchen Management & Cleanup',
    desc: 'We assess, organise, and operate your villa or retreat centre kitchen from arrival to departure. Every service ends with a full reset, respecting villa staff and house rules.',
  },
  {
    icon: Home,
    title: 'Staff Accommodation Planning',
    desc: 'For remote estates and large retreats, we help plan on-site or nearby accommodation for the culinary team so early starts and late finishes are never a problem.',
  },
]

const RETREAT_TYPES = [
  {
    icon: Wind,
    title: 'Yoga Retreats',
    desc: 'Yoga retreat catering Bali is the heart of our service. We understand that asana practice demands light, sattvic energy before class and complete replenishment after. Morning menus favour warm herbal tonics, fresh fruit, and small portions that do not weigh on the belly. Post-practice meals introduce plant proteins, healthy grains, and hydrating vegetables. We time service around sunrise and sunset sessions, and we keep caffeine options available without forcing stimulants on guests who prefer calm. Our chefs learn the retreat schedule, adapt to silent mornings, and design weekly menus that avoid repetition while supporting the physical work of the retreat.',
  },
  {
    icon: Heart,
    title: 'Wellness Retreats',
    desc: 'Wellness retreat catering Bali balances nourishment with intention. Whether your program focuses on balanced eating, gut-friendly menus, or mindful consumption, we design menus that reinforce your teaching. Meals are colourful, nutrient-dense, and free from hidden sugars or heavy processed oils. We work with retreat leaders to align food with workshops, spa treatments, and movement sessions so guests feel supported rather than distracted. From turmeric-ginger shots at breakfast to magnesium-rich evening meals, every dish contributes to the wellness narrative of the retreat.',
  },
  {
    icon: Moon,
    title: 'Meditation Retreats',
    desc: 'Meditation retreat catering Bali calls for food that is grounding, easy to digest, and quietly satisfying. Overstimulation from spice, sugar, or caffeine can interrupt practice, so we calibrate flavours to support stillness. Silence at meals is respected, service is unobtrusive, and portions are designed to sustain long sits without creating drowsiness or restlessness. We favour warm, cooked foods, gentle seasoning, and herbal teas that encourage inward focus. The kitchen becomes a silent partner in the retreat, producing meals that complement rather than compete with the work being done.',
  },
  {
    icon: Zap,
    title: 'Fitness Retreats',
    desc: 'Fitness retreat catering Bali fuels training blocks, surf camps, and strength-focused programs. We build high-protein breakfasts, recovery lunches, and rehydrating snacks around your daily schedule. Macro balance matters here: lean proteins, complex carbohydrates, healthy fats, and targeted post-workout nutrition. Guests leave strong, not depleted. We also track hydration, electrolyte intake, and recovery-focused ingredients to support guests between sessions. Whether the program is HIIT, boxing, CrossFit, or functional training, the food keeps pace with the output.',
  },
  {
    icon: Sun,
    title: 'Surf Retreats',
    desc: 'Surf retreat catering Bali has to match ocean time. Early dawn-patrol breakfasts, substantial post-surf brunches, and relaxed evening meals keep energy consistent across long days in the water. We emphasise hydration, electrolytes, and recovery-focused ingredients after long days in the sun. Packed lunches and cool boxes can be prepared for boat trips or beach days. Our team understands that surf schedules change with tides and swell, so meal timing remains flexible and food stays fresh even when guests return late and hungry.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Corporate Retreats',
    desc: 'Corporate retreat catering Bali combines professional presentation with flexible logistics. We handle working lunches, coffee breaks, BBQ evenings, and formal celebration dinners. Menus are designed to sustain focus through strategy sessions while giving teams something to gather around at the end of the day. Invoicing, dietary reporting, and structured timelines are all available. We also accommodate mixed dietary profiles common in international teams, from halal and kosher-friendly options to vegan, gluten-free, and low-carb preferences, all clearly labelled and served efficiently.',
  },
  {
    icon: Sparkles,
    title: 'Leadership Retreats',
    desc: 'Leadership retreat catering Bali is about understated quality. Executives expect consistent service, dietary discretion, and meals that feel refined without being fussy. We provide curated menus, polished presentation, and a team that understands professional hospitality standards. Meals can be served family-style to encourage conversation or plated for a more formal tone. Dietary preferences are handled privately and precisely, and the service team is briefed on guest profiles so every interaction feels natural and unobtrusive.',
  },
  {
    icon: Flower2,
    title: 'Creative Retreats',
    desc: 'Creative retreat catering Bali keeps minds energised across long making, writing, or design sessions. We avoid heavy midday meals that induce afternoon slumps and instead serve colourful, brain-friendly plates with steady-release carbohydrates, fresh herbs, and vibrant vegetables. Communal dinners become part of the creative process, giving participants a natural place to share work and build connections. We also adapt to irregular schedules, providing late-night snacks or early-morning coffee for groups working through deadlines or inspiration.',
  },
  {
    icon: Home,
    title: 'Luxury Villa Retreats',
    desc: 'Luxury villa retreat catering Bali brings restaurant-standard dining into a private estate. Guests expect privacy, flexibility, and impeccable service. We match the tone of the villa, source premium ingredients, and provide discreet staff who understand high-end hospitality. From floating breakfasts and poolside lunches to candlelit tasting menus, every meal is designed to feel like a natural extension of the villa experience. We coordinate closely with villa managers to respect house rules, access times, and service expectations.',
  },
  {
    icon: Leaf,
    title: 'Detox Retreats',
    desc: 'Detox retreat catering Bali supports guided cleanses with cold-pressed juices, light broths, raw salads, steamed vegetables, and herbal infusions. We follow your protocol precisely, whether it is a full juice cleanse, a mono-diet day, or a gradual whole-food reset. Our team prepares cleanse kits, labels every item, and ensures that detox guests are not accidentally served off-protocol foods. For retreats with mixed participants, we can run detox menus alongside regular nourishing meals so everyone feels included.',
  },
  {
    icon: Heart,
    title: "Women's Retreats",
    desc: "Women's retreat catering Bali creates communal tables where connection is as important as nutrition. Menus are nourishing, beautifully presented, and responsive to guest needs where requested. We design shared meals that feel like ceremony, with floral styling, gentle lighting, and dishes that invite conversation. Dietary conversations are handled with care, and the kitchen is flexible enough to support individual requests or simply a group of friends celebrating together.",
  },
  {
    icon: ShieldCheck,
    title: "Men's Retreats",
    desc: "Men's retreat catering Bali emphasises generous portions, strong flavours, and high-quality protein. Whether the retreat centres on fitness, brotherhood, leadership, or adventure, we provide satisfying food that matches the energy of the group without defaulting to unhealthy heaviness. Steak nights, live-fire BBQs, hearty breakfasts, and recovery-focused dinners can all be part of the plan. We also respect quieter emotional work by offering grounding, comforting meals that support both physical and mental stamina.",
  },
  {
    icon: Moon,
    title: 'Spiritual Retreats',
    desc: 'Spiritual retreat catering Bali respects the intention behind the gathering. We work with facilitators to align ingredients, preparation, and service with religious or energetic requirements. Fasting windows, ritual meals, and silent service can all be accommodated. Our team understands that food is part of the spiritual container, and we approach these retreats with reverence, discretion, and attention to detail. Whether the gathering follows Balinese Hindu tradition, yoga philosophy, or another path, the menu supports the practice.',
  },
  {
    icon: Users,
    title: 'Teacher Trainings',
    desc: 'Yoga teacher training catering Bali requires reliability across 14 to 28 consecutive days. We keep menus varied, portions generous for long training days, and dietary records precise for large groups. The same team stays for the full program, becoming part of the training rhythm. We understand the intensity of teacher training schedules and design meals that sustain physical practice, long lectures, and late-night study sessions. Special celebration meals can mark graduation or mid-course milestones.',
  },
  {
    icon: Coffee,
    title: 'Digital Nomad Retreats',
    desc: 'Digital nomad retreat catering Bali blends coworking schedules with social dining. We provide strong coffee stations, working lunches, communal dinners, and flexible timing for guests who move between desks, calls, and excursions. Meals are designed to be social without being distracting, encouraging networking and friendship while respecting the workday. We also cater to diverse international palates and dietary trends common in remote-work communities, from vegan and keto to halal and gluten-free.',
  },
]

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

const DAILY_MEALS = [
  { time: '07:00–09:00', meal: 'Breakfast', desc: 'Tropical fruit bowls, smoothie bowls, eggs, granola, herbal tea and fresh coffee.' },
  { time: 'All day', meal: 'Snacks & juices', desc: 'Fresh fruit, raw nuts, energy balls, cold-pressed juices, coconut water.' },
  { time: '12:00–14:00', meal: 'Lunch', desc: 'Light, balanced plates — salads, grain bowls, grilled proteins, fresh vegetables.' },
  { time: 'Post-activity', meal: 'Recovery', desc: 'Hydration, electrolytes and light proteins timed after yoga or training.' },
  { time: '18:00–20:00', meal: 'Dinner', desc: 'Comforting, nourishing curries, grilled fish, roasted vegetables and rice.' },
]

const MENU_DIRECTIONS = [
  {
    category: 'Breakfast',
    items: [
      { name: 'Healthy Breakfast', desc: 'Balanced plates of eggs, greens, whole grains, and seasonal fruit.' },
      { name: 'Balinese Breakfast', desc: 'Nasi campur, bubur, fresh sambal, and tropical fruit for an authentic local start.' },
      { name: 'Mediterranean Breakfast', desc: 'Olives, feta, tomatoes, eggs, labneh, and olive oil-dressed greens.' },
      { name: 'Vegan Breakfast', desc: '100% plant-based with tofu scrambles, cashew cheeses, and coconut yoghurts.' },
      { name: 'Protein Breakfast', desc: 'High-protein eggs, Greek yoghurt, smoked fish, and lean meats for active guests.' },
      { name: 'Detox Breakfast', desc: 'Green juices, raw fruit, chia puddings, and alkalising herbal tonics.' },
      { name: 'Brunch', desc: 'A relaxed late-morning spread combining breakfast and lunch favourites.' },
    ],
  },
  {
    category: 'Lunch',
    items: [
      { name: 'Lunch Buffet', desc: 'A generous, colourful buffet with salads, proteins, grains, and hot dishes.' },
      { name: 'Sharing Lunch', desc: 'Communal platters designed for connection and conversation at the table.' },
      { name: 'Plated Lunch', desc: 'Refined, portion-controlled lunch service for more formal retreat days.' },
      { name: 'Healthy Bowls', desc: 'Build-your-own grain, poke, or nourish bowls with fresh toppings and dressings.' },
    ],
  },
  {
    category: 'Evening',
    items: [
      { name: 'BBQ Evening', desc: 'Live-fire grilling with seafood, meats, vegetables, and vibrant sides.', href: '/catering/bbq-catering' },
      { name: 'Fine Dining Evening', desc: 'A multi-course plated dinner for a standout celebration night.', href: '/' },
      { name: 'Balinese Night', desc: 'Traditional Balinese feast with lawar, sate, urap, and ceremonial presentation.' },
      { name: 'Seafood Night', desc: 'Fresh catch from Jimbaran market, grilled and dressed simply.', href: '/catering/bbq-catering' },
      { name: 'Italian Night', desc: 'Handmade pasta, antipasti, and Mediterranean grills.', href: '/fine-dining/menus' },
      { name: 'Mediterranean Night', desc: 'Olive oil, herbs, grilled fish, and vegetable-forward dishes.' },
      { name: 'Mexican Night', desc: 'Fresh tacos, salsas, guacamole, and slow-cooked beans.' },
      { name: 'Japanese Night', desc: 'Clean, light Japanese-inspired dishes with fresh fish and umami broths.' },
    ],
  },
]

const DIETARY_EXPERTISE = [
  {
    title: 'Vegan Retreat Catering',
    desc: 'Full plant-based menus built around complete plant proteins, healthy fats, and satisfying textures. We do not simply remove animal products; we rebuild dishes from the ground up so vegan guests feel fully catered to.',
  },
  {
    title: 'Vegetarian Retreat Meals',
    desc: 'Vegetarian retreat catering Bali uses eggs, dairy, and local tempeh to create nourishing, protein-balanced plates. Ideal for groups with mixed dietary profiles.',
  },
  {
    title: 'Gluten-Free Catering',
    desc: 'Gluten-free retreat catering Bali replaces wheat with rice, quinoa, buckwheat, and root vegetables. Cross-contamination is controlled in the villa kitchen, and bread and pastry alternatives are provided.',
  },
  {
    title: 'Dairy-Free & Lactose-Free',
    desc: 'We use coconut, oat, and nut milks in cooking and coffee service, and label all dishes clearly. Creamy textures are recreated with plant-based alternatives without sacrificing richness.',
  },
  {
    title: 'Keto & Low-Carb',
    desc: 'Keto-friendly retreat meals emphasise quality fats, leafy greens, eggs, seafood, and non-starchy vegetables. Carb-heavy sides are replaced with cauliflower rice, courgette noodles, and avocado-forward dishes.',
  },
  {
    title: 'Paleo Retreat Meals',
    desc: 'Paleo retreat catering Bali focuses on whole foods: lean meats, fish, eggs, vegetables, fruits, nuts, and seeds. No grains, legumes, refined sugars, or processed oils.',
  },
  {
    title: 'High-Protein Catering',
    desc: 'For fitness, surf, and active retreats, we design high-protein breakfasts, recovery lunches, and protein-rich snacks that support muscle repair and sustained energy.',
  },
  {
    title: 'Plant-Based Whole Foods',
    desc: 'A broader approach than vegan alone, plant-based whole-food menus minimise processed ingredients and maximise vegetables, legumes, whole grains, nuts, and seeds in their natural forms.',
  },
  {
    title: 'Halal-Friendly',
    desc: 'Halal-friendly retreat catering Bali avoids pork and non-halal meats, sources poultry and beef from trusted halal suppliers, and keeps preparation separate where required.',
  },
  {
    title: 'Sugar-Conscious & Low-Carb',
    desc: 'We reduce added sugars across all meals, use natural fruit sweetness for desserts, and provide low-carb alternatives for guests managing blood sugar or metabolic goals.',
  },
  {
    title: 'Nut Allergies & Anaphylaxis',
    desc: 'Nut allergies are recorded, flagged, and communicated to every team member. We prevent cross-contact, substitute nuts with seeds or coconut where possible, and keep emergency records visible in the kitchen.',
  },
  {
    title: 'Coeliac & Religious Requirements',
    desc: 'Coeliac disease is treated with the same rigour as anaphylaxis. Religious requirements, including fasting windows, prayer schedules, and permitted ingredients, are built into the service plan from day one.',
  },
]

const MULTI_DAY_STEPS = [
  {
    step: '01',
    title: 'Ingredient Sourcing',
    desc: 'We map suppliers by region, season, and quality. Produce comes from local markets and organic farms; proteins and specialty items are ordered from trusted vendors with reliable cold-chain delivery.',
  },
  {
    step: '02',
    title: 'Daily Shopping',
    desc: 'Fresh ingredients are purchased daily for peak flavour and nutrition. Shopping lists are generated each evening based on the next day\u2019s menu, guest count, and dietary requirements.',
  },
  {
    step: '03',
    title: 'Fresh Prep Each Morning',
    desc: 'Mise en place begins before guests wake. Sauces, marinades, stocks, and bases are made fresh so every meal tastes as good on day seven as it did on day one.',
  },
  {
    step: '04',
    title: 'Menu Rotation',
    desc: 'We plan seven to fourteen distinct days of food before any repetition. Breakfast, lunch, dinner, and snacks rotate proteins, cuisines, textures, and colours to keep guests engaged.',
  },
  {
    step: '05',
    title: 'Seasonality',
    desc: 'Menus adapt to what is best at the market. Mangoes in rainy season, passion fruit in dry season, fresh corn, snake beans, and heirloom tomatoes all influence the week\u2019s plan.',
  },
  {
    step: '06',
    title: 'Chef Scheduling',
    desc: 'The same lead chef stays for the full retreat, supported by assistants scaled to guest count. Rest days and shift coverage are planned in advance so consistency never drops.',
  },
  {
    step: '07',
    title: 'Kitchen Organisation',
    desc: 'We claim, clean, and organise the villa or retreat kitchen on arrival. Stations for prep, dietary separation, plating, and service are set up to run smoothly across multiple consecutive days.',
  },
]

const VILLA_EXPERIENCE = [
  {
    title: 'Private Villas',
    desc: 'From intimate four-bedroom estates to sprawling twelve-bedroom compounds, we adapt our team, equipment, and service style to the villa\u2019s layout and house rules.',
  },
  {
    title: 'Boutique Hotels',
    desc: 'We partner with boutique hotel kitchens or operate satellite prep spaces to deliver consistent retreat meals for resident guests.',
  },
  {
    title: 'Retreat Centres',
    desc: 'Purpose-built retreat centres benefit from dedicated dining halls and larger kitchens. We integrate with centre staff and respect the rules of the venue.',
  },
  {
    title: 'Jungle Lodges',
    desc: 'Remote jungle venues in Ubud, Sidemen, and Munduk require logistics planning for access, power, water, and refrigeration. We visit ahead where possible and bring contingency equipment.',
  },
  {
    title: 'Beachfront Villas',
    desc: 'Beachfront retreat catering Bali handles wind, sand, and open-air dining. We design menus and service flow that suit al fresco settings.',
  },
  {
    title: 'Large Estates',
    desc: 'Estates hosting 50 to 150 guests require brigade-style planning. We assign multiple chefs, service captains, and assistants to maintain quality and timing.',
  },
]

const KITCHEN_ASSESSMENT = [
  { title: 'Stove Capacity', desc: 'Gas hobs, ovens, and grills are counted to ensure we can produce hot food for the full guest count without delay.' },
  { title: 'Refrigeration', desc: 'Fridge and freezer space is assessed; portable refrigeration is arranged if the villa cannot hold multi-day stock.' },
  { title: 'Power & Water', desc: 'Remote venues are checked for generator backup and water pressure so service is not interrupted.' },
  { title: 'Equipment Gaps', desc: 'Missing pots, pans, blenders, or serving ware are brought by the team or hired locally.' },
]

const WHY_FOOD = [
  {
    title: 'Energy',
    desc: 'The right food stabilises blood sugar, sustains focus, and prevents the afternoon crash that derails workshops and practice.',
  },
  {
    title: 'Connection',
    desc: 'Shared meals are where retreat guests become a group. Communal tables and family-style service create natural conversation and bonding.',
  },
  {
    title: 'Recovery',
    desc: 'Post-activity nutrition rebuilds muscle, rehydrates the body, and helps guests feel ready for the next session.',
  },
  {
    title: 'Community',
    desc: 'A retreat that eats well together strengthens its own culture. Food becomes a shared language of care and intention.',
  },
  {
    title: 'Memory',
    desc: 'Guests rarely forget the meal served by candlelight after a silent day or the breakfast bowl enjoyed after sunrise yoga.',
  },
  {
    title: 'Retreat Success',
    desc: 'When food is unreliable, guests notice. When it is excellent, the whole program feels more valuable, professional, and complete.',
  },
]

const OPTIONAL_SERVICES = [
  { icon: Coffee, title: 'Private Barista & Coffee Station', desc: 'Specialty coffee, espresso, pour-over, and plant-based milks served by a trained barista.' },
  { icon: CupSoda, title: 'Juice Station', desc: 'Cold-pressed juices, wellness shots, and fresh citrus blends available throughout the day.' },
  { icon: Leaf, title: 'Smoothie Bar', desc: 'Made-to-order smoothies with protein, greens, fruit, and superfood add-ons.' },
  { icon: Wine, title: 'Bartenders & Cocktail Evening', desc: 'Professional bartenders for a celebration night or poolside service.', href: '/in-villa-service/bartenders' },
  { icon: Flame, title: 'BBQ Night', desc: 'Live-fire BBQ dinner with grilled seafood, meats, and vegetable skewers.', href: '/catering/bbq-catering' },
  { icon: UtensilsCrossed, title: 'Fine Dining Finale', desc: 'A multi-course plated dinner to mark the closing night of the retreat.', href: '/' },
  { icon: Camera, title: 'Food Photography', desc: 'Styled food and table photography to support your retreat marketing.' },
  { icon: Flower2, title: 'Flowers & Table Styling', desc: 'Tropical flowers, candles, linens, and natural tablescapes for special meals.' },
  { icon: Users, title: 'Waiters', desc: 'Uniformed waiters for plated service, buffet support, and drink refills.', href: '/in-villa-service/waiters' },
  { icon: Home, title: 'Butlers', desc: 'Discreet butler service for luxury villas and executive retreats.', href: '/in-villa-service/butlers' },
  { icon: Music, title: 'Live Music', desc: 'Acoustic musicians, gamelan, or DJs arranged for welcome or celebration evenings.' },
  { icon: Heart, title: 'Wellness Snack Station', desc: 'All-day access to raw nuts, dried fruit, energy balls, herbal teas, and fresh coconut water.' },
  { icon: Sparkles, title: 'Dessert Table', desc: 'A styled display of healthy desserts, tropical fruits, and small indulgences for a final-night celebration.' },
]

const LOCATIONS = [
  {
    slug: 'ubud',
    title: 'Ubud',
    desc: 'Ubud is the spiritual and wellness centre of Bali, home to the island\u2019s densest concentration of yoga and meditation retreats. Our Ubud retreat catering Bali service handles jungle logistics, early morning yoga schedules, and access to organic produce from the surrounding highlands. We regularly cook in open-air villas overlooking rice terraces, bamboo shalas, and riverside estates where groups practise sunrise asana before a nourishing brunch. Most of our retreat work is in Ubud and the surrounding villages — see our ',
    link: { to: '/private-chef/ubud', anchor: 'private chef in Ubud' },
    descAfter: ' page for jungle-villa logistics — and we cater retreats island-wide.',
  },
  {
    slug: 'canggu',
    title: 'Canggu',
    desc: 'Canggu attracts surf, fitness, and digital nomad retreats with its open-plan villas and creative energy. We deliver flexible, health-focused retreat meals for groups that move between coworking, training, and beach time. Whether your guests need a protein-packed post-surf breakfast, a light lunch between workshops, or a family-style dinner after sunset, we adjust portions and timing to match the rhythm of the day. Our Canggu retreat catering teams understand villa kitchen layouts, pool-deck service, and the area\u2019s health-food culture, so menus feel contemporary without losing Balinese soul.'
  },
  {
    slug: 'pererenan',
    title: 'Pererenan',
    desc: 'Pererenan offers design-led villas and a quieter pace than central Canggu. It is ideal for intimate luxury retreats where privacy, aesthetics, and refined service matter. Many retreats here combine daily yoga, meditation, and small-group coaching with long lunches by the pool and candlelit dinners under the palms. Our Pererenan catering respects the villa\u2019s architecture and vibe, plating beautifully and serving discreetly so the space still feels like a private home. We coordinate closely with villa managers to protect guest privacy and maintain seamless schedules.'
  },
  {
    slug: 'sanur',
    title: 'Sanur',
    desc: 'Sanur\u2019s calm east-coast atmosphere suits family-friendly, wellness, and long-stay retreats. Our Sanur catering provides gentle, consistent service and classic Mediterranean-Indonesian menus. The flat beach paths and relaxed pace make it a favourite for multi-generational groups and older guests who want sunrise walks, poolside breakfasts, and early dinners. We plan comforting, familiar flavours for children while keeping adult menus interesting, and we adapt quickly to villa compounds that host several families at once.'
  },
  {
    slug: 'uluwatu',
    title: 'Uluwatu',
    desc: 'Uluwatu\u2019s clifftop villas attract luxury and fitness retreats seeking dramatic settings. We plan around wind, lift access, and sunset timing to deliver polished clifftop dining. Many Uluwatu venues feature infinity pools, glass-fronted gyms, and private cliff-edge decks where guests train, meditate, and socialise. Our team times seafood deliveries, buffet setups, and plated courses around coastal breezes and golden-hour photography so every meal feels effortless. We also provide heartier recovery portions for fitness retreats that train twice daily.'
  },
  {
    slug: 'sidemen',
    title: 'Sidemen',
    desc: 'Sidemen\u2019s rice terraces and slower pace are perfect for immersive wellness and spiritual retreats. Our team manages the longer travel distances and limited local supplier access. Retreats here often focus on silence, ceremony, meditation, and deep rest, so we keep meal service calm, nourishing, and unobtrusive. We source vegetables from local growers, prepare warming curries and grain bowls, and plan ahead for dry-goods deliveries because convenience stores are scarce. The result is honest, farm-close food that matches Sidemen\u2019s grounded energy.'
  },
  {
    slug: 'amed',
    title: 'Amed',
    desc: 'Amed on Bali\u2019s east coast is known for diving, snorkelling, and quiet group retreats. We leverage fresh seafood and plan for the scenic but slower road access. Amed\u2019s black-sand bays and coral reefs draw groups who want a digital detox, freediving intensives, or simply a slower rhythm away from the south. Our Amed retreat catering includes grilled reef fish, tropical fruit breakfasts, and packed lunches for boat trips. We leave extra time for procurement and travel so quality never depends on rushed logistics.'
  },
  {
    slug: 'nusa-dua',
    title: 'Nusa Dua',
    desc: 'Nusa Dua\u2019s resort estates and gated compounds suit corporate and luxury wellness retreats. We provide executive-level service, formal dining options, and invoicing support. These venues often require coordination with resort security, scheduled loading-bay access, and adherence to house rules, all of which our team manages discreetly. We can deliver plated gala dinners, buffet conferences, and daily healthy dining for international business groups who expect consistent quality and professional reporting.'
  },
  {
    slug: 'jimbaran',
    title: 'Jimbaran',
    desc: 'Jimbaran\u2019s seafood market gives our retreat menus access to the freshest catch. It is a strong base for seafood nights, beachfront villas, and celebratory dinners. We buy fish at dawn for same-day preparation, then grill it simply with Balinese sambal, lemon, and coconut sides. Jimbaran\u2019s calm bay and wide beaches also make it ideal for retreats that want a relaxed seafood finale without travelling far from the airport. Our team can set up beachfront BBQs or elegant villa banquets depending on the occasion.'
  },
  {
    slug: 'seminyak',
    title: 'Seminyak',
    desc: 'Seminyak offers high-end villas, excellent access, and a vibrant food scene. Our retreat catering here blends convenience with premium ingredients and polished presentation. It is a practical choice for retreats that want boutique shopping, spas, and restaurants within walking distance while still enjoying private villa dining. We design menus that feel restaurant-quality, source specialty ingredients quickly, and coordinate service around the area\u2019s lively schedule so guests never feel rushed.'
  },
  {
    slug: 'munduk',
    title: 'Munduk',
    desc: 'Munduk\u2019s cool mountain air and jungle waterfalls attract nature and wellness retreats. We plan for the cooler climate and remote location with warming menus and full logistics. Groups come here for trekking, canyoning, meditation, and digital detox, so food needs to be hearty, grounding, and easy to serve after outdoor activities. Our Munduk catering includes warming soups, spiced rice dishes, herbal teas, and fire-cooked options that suit the mountain temperature. We also bring backup equipment because mountain weather can shift quickly.'
  },
  {
    slug: 'north-bali',
    title: 'North Bali',
    desc: 'North Bali, including Lovina and the surrounding coast, offers dolphin-watching, quiet beaches, and a relaxed pace. We coordinate longer travel logistics and source fresh local produce for multi-day stays. Retreats in this region often last a week or more and focus on yoga, spirituality, or nature immersion away from tourist crowds. Our North Bali catering plans every delivery in advance, uses reef-safe packaging for beach outings, and builds menus around local bananas, root vegetables, freshwater fish, and tropical fruit so the food feels connected to the landscape.'
  },
]

const TIMELINE = [
  { time: '6 months before', title: 'Initial Planning', desc: 'Confirm retreat dates, venue, estimated guest count, and preferred food philosophy. We reserve chef availability and outline a preliminary menu direction.' },
  { time: '3 months before', title: 'Menu Design', desc: 'We develop a full multi-day menu plan with cuisine themes, dietary frameworks, and service style for each meal.' },
  { time: '1 month before', title: 'Dietary Requirements', desc: 'Guest dietary forms are collected, reviewed, and built into the kitchen plan. Allergies, restrictions, and preferences are flagged.' },
  { time: '2 weeks before', title: 'Final Guest Count', desc: 'Numbers are confirmed, chef and assistant counts are finalised, and any last-minute dietary additions are incorporated.' },
  { time: '3 days before', title: 'Shopping & Prep', desc: 'Dry goods and specialty items are ordered. The team confirms access, equipment, and villa kitchen readiness.' },
  { time: 'Day 1', title: 'Execution Begins', desc: 'The team arrives, sets up the kitchen, and begins the first day of service. Your coordinator remains on call throughout the retreat.' },
]

const FAQS = [
  { q: 'What does retreat catering in Bali cost?', a: 'Every retreat meal plan is quoted individually based on group size, menu intensity, dietary complexity and length of programme. Contact us for a fixed, itemised proposal.' },
  { q: 'How many guests do you cater for, and is there a minimum?', a: 'The minimum is five guests. We regularly cater retreats from 10 to 60 guests, and up to 100 for larger programmes. For 30 guests we typically assign a head chef plus two assistants, scaled to your villa kitchen.' },
  { q: 'Can you do fully vegan, sattvic or detox retreat menus?', a: 'Yes. Fully vegan service is one of our most requested formats, and we design sattvic, juice-cleanse and partial-detox programmes with the same care — full protein profiles and menus that feel abundant, not restrictive.' },
  { q: 'Can you cater five to seven days continuously?', a: 'Yes — multi-day continuity is the core of this service. Shopping cycles, menu rotation and staff scheduling are planned so quality on day seven matches day one.' },
  { q: 'What if our villa kitchen is small?', a: 'We assess stove capacity, fridge space and equipment before arrival and bring whatever is missing. Most Bali villa kitchens are fully workable with minor preparation.' },
  { q: 'What deposit is required?', a: 'A 50% deposit confirms your chef and dates; the balance is due before the retreat begins.' },
  { q: 'How far ahead should we book?', a: 'Two to four weeks is ideal; for peak season (June–September), earlier is better so we can reserve the right chef for your full dates.' },
  { q: 'Can guests have alcohol at a wellness retreat?', a: 'That is your call as the organiser — we serve to your programme rules, from fully dry retreats to a single wine-paired closing dinner.' },
  { q: 'Can you guarantee an allergen-free environment?', a: 'No. We take reasonable precautions — intake forms, dish labelling and separation procedures — but we cannot guarantee an entirely allergen-free environment, particularly in third-party villa or venue kitchens. Guests with serious allergies should provide complete written requirements before the event.' },
  { q: 'How much does catering in Bali cost?', a: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { q: 'What formats do you offer?', a: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { q: 'Is catering the same as private chef hire?', a: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { q: 'Do prices include staff and cleanup?', a: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { q: 'Can you cook in an Airbnb villa?', a: 'Yes with a workable kitchen — share the listing when booking.' },
  { q: 'Minimum guest counts?', a: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { q: 'Can menus be customised?', a: 'Yes — proteins, spice, diets locked before shopping.' },
  { q: 'Travel fees?', a: 'Remote areas may add a fee quoted upfront.' },
  { q: 'Can we add a mobile cocktail bar?', a: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
  { q: 'Kids and allergies?', a: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { q: 'How do I book catering?', a: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
]

/**
 * Retreat areas are not all /locations/ pages. Three of the slugs in LOCATIONS above
 * (sidemen, munduk, north-bali) have no page under /locations/, so the previous
 * `/locations/${loc.slug}` template linked every visitor to a 404 — confirmed live
 * 2026-08-05 by crawling all 243 sitemap URLs. Map those three to the real page that
 * covers the area; everything else keeps the /locations/ destination.
 */
const RETREAT_AREA_HREF: Record<string, string> = {
  sidemen: '/private-chef/sidemen',
  munduk: '/private-chef/munduk',
  'north-bali': '/private-chef/lovina', // North Bali → live Lovina service page (/locations/lovina 308-redirects to Sanur, wrong geography — SEO audit 2026-08)
}

function retreatAreaHref(slug: string): string {
  return RETREAT_AREA_HREF[slug] ?? `/locations/${slug}`
}

export default function CateringRetreatPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.retreat-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.retreat-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Retreat Catering Bali | Workshops, Wellness & Multi-Day Events"
        description="Retreat catering in Bali for one-day workshops, wellness programs and multi-day events. Chefs, service staff, dietary management and full coordination. WhatsApp myCHEF."
        canonical={`${SITE}/catering/retreat-catering`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-retreat.webp`}
        jsonLd={[
          serviceSchema(
            'Retreat Catering Bali',
            'Retreat catering in Bali for one-day workshops, wellness programs, corporate offsites and multi-day group events, with dietary intake, daily fresh shopping and a dedicated retreat chef.',
            `${SITE}/catering/retreat-catering`
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          cateringBreadcrumbSchema('Retreat Catering Bali', `${SITE}/catering/retreat-catering`),
        ]}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-retreat.webp"
            alt="Luxury retreat catering Bali breakfast spread by a villa pool at sunrise"
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
          <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Retreat Catering Bali' }]} theme="dark" className="justify-center mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Retreat & Workshop Catering in Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Retreat Catering Bali for Workshops, Wellness Programs and Group Events
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Chef-led retreat catering in Bali for workshops, yoga and wellness programs, corporate offsites, creative retreats and private groups. We coordinate menus, chefs, service staff, timing, kitchen management, setup and cleanup — for one-day and multi-day programs alike.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            One-day & multi-day programs · Chefs, waiters & coordination · Bali-wide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Retreat Meal Plan
            </a>
            <Link to="/events/retreats" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              full wellness retreat support
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Bali-wide coverage</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Multi-day capable</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dedicated retreat chef</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ SECTION 1: RETREAT CATERING IN BALI ═══════ */}
      <section className="retreat-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="The Service"
            title="Retreat Catering in Bali"
            subtitle="Multi-day retreats need more than good food. They need consistency, timing, energy management, and dietary control — all delivered by a team that understands the rhythm of retreat life."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <p className="text-[#4A4745]">
                Feeding a retreat is a system, not a series of meals. Multi-day groups need planned shopping cycles, prep schedules adapted to the villa kitchen, menus that never repeat, and food timed to the programme — light before morning practice, stronger after training, clean before workshops, comforting at night.
              </p>
              <p className="text-[#4A4745]">
                We assign a dedicated chef for your full retreat duration, supported by assistants scaled to your group. Before arrival, every guest's dietary profile is collected through our intake process. During the retreat, menus rotate daily, the kitchen is reset spotless after every service, and your organiser has one point of contact for any schedule change. If you also need ceremony coordination, experience add-ons and full event support around the meals, that is our <Link to="/events/retreats" className="text-[#C5A028] hover:underline">full wellness retreat support</Link> service. Running a company offsite instead? See <Link to="/corporate-retreat-catering-bali" className="text-[#C5A028] hover:underline">corporate retreat catering</Link>.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Multi-day system', 'Energy-focused menus', 'Digestion-aware', 'Dietary control', 'Consistent quality', 'Villa kitchen adapted'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What Makes Our Retreat Catering Different</h3>
              <div className="space-y-3">
                {[
                  'Chef assigned for the full retreat duration',
                  'Menus planned around your daily schedule',
                  'Dietary intake before arrival — no surprises',
                  'Daily market shopping for peak freshness',
                  'Kitchen left spotless after every service',
                  'Menu rotation so nothing repeats',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1a: ONE-DAY WORKSHOP & RETREAT CATERING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="One-Day Programs"
            title="One-Day Workshop & Retreat Catering"
            subtitle="Full catering for single-day workshops, trainings and retreats — timed to your agenda from registration to closing."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What a One-Day Program Can Include</h3>
              <div className="space-y-3">
                {[
                  'Registration breakfast or welcome coffee',
                  'All-day coffee and tea station',
                  'Morning snack or fruit break',
                  'Working lunch — buffet, bowls or boxes',
                  'Afternoon refreshments and hydration',
                  'Networking drinks after the final session',
                  'Closing dinner where required',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>How We Run It</h3>
              <div className="space-y-3">
                {[
                  'Meal times coordinated with your agenda blocks',
                  'Quiet setup and reset during sessions',
                  'Fast service designed for short breaks',
                  'Labelled dietary meals for every guest',
                  'Flexible timing if the program runs late',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#4A4745] mt-6">
                Multi-day retreat programs are planned separately with rotating menus, daily procurement and a dedicated chef — see the planning section below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1c: EXAMPLE SCHEDULES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Example Schedules"
            title="Example Catering Schedules"
            subtitle="Illustrative timings — every schedule is customised to your program."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>One-Day Workshop</h3>
              <div className="space-y-3">
                {[
                  ['08:00', 'Welcome coffee, tea and pastries at registration'],
                  ['10:30', 'Morning break — fruit, snacks, coffee refill'],
                  ['12:30', 'Working lunch — buffet or individual boxes'],
                  ['15:30', 'Afternoon snacks, juices and hydration'],
                  ['18:30', 'Closing dinner or networking drinks'],
                ].map(([time, item]) => (
                  <div key={time} className="flex items-start gap-3 text-sm text-[#4A4745]">
                    <span className="font-semibold text-[#C5A028] w-12 flex-shrink-0">{time}</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Three-Day Retreat</h3>
              <div className="space-y-3">
                {[
                  ['Day 1', 'Arrival refreshments and a welcome dinner'],
                  ['Day 2', 'Full day — breakfast, snacks, lunch, recovery, dinner'],
                  ['Day 3', 'Breakfast, closing lunch and farewell drinks'],
                ].map(([time, item]) => (
                  <div key={time} className="flex items-start gap-3 text-sm text-[#4A4745]">
                    <span className="font-semibold text-[#C5A028] w-12 flex-shrink-0">{time}</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1d: INCLUDED VS ADDITIONAL ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Scope"
            title="What's Included — and What's Additional"
            subtitle="Clear scope so there are no surprises on either side."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Included in Retreat Catering</h3>
              <div className="space-y-3">
                {[
                  'Menu planning with the retreat organizer',
                  'Professional chefs scaled to your group',
                  'Daily fresh grocery shopping (normal groceries included)',
                  'Cooking, plating and meal service',
                  'Dietary intake, mapping and dish labelling',
                  'Kitchen organisation and full cleanup after service',
                  'One designated catering contact throughout the program',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Available as Additional Services</h3>
              <div className="space-y-3">
                {[
                  'Waiters, bartenders and butlers',
                  'Barista coffee stations and juice bars',
                  'Premium ingredients and imported specialty items',
                  'BBQ nights, seafood nights and fine-dining finales',
                  'Table styling, flowers and event decoration',
                  'Photography, live music and entertainment',
                  'Equipment hire beyond standard kitchen kit',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1b: PRICING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Retreat Catering Packages"
            subtitle="Every retreat is priced per group, length and menu. Contact us for a tailored proposal with a fixed quote."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Plant-Forward Retreat Plan</h3>
              <p className="text-sm text-[#C5A028] font-semibold mb-4">Tailored quote</p>
              <p className="text-sm text-[#4A4745] leading-relaxed mb-4">
                Vegetables, legumes and grains at the centre of every plate. Breakfast, lunch, dinner, snacks, juices and herbal teas for groups of 10–40. Sattvic-inspired or Ayurvedic-style menus can be developed in consultation with the retreat organizer. Gluten-free throughout, no refined sugar. Best for yoga retreats, meditation groups and holistic programmes.
              </p>
              <ul className="space-y-2 text-sm text-[#4A4745]">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> 100% plant-forward base</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> Gluten-free throughout</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> Ideal for 10–40 guests</li>
              </ul>
            </div>
            <div className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Wellness & Detox Retreat Plan</h3>
              <p className="text-sm text-[#C5A028] font-semibold mb-4">Tailored quote</p>
              <p className="text-sm text-[#4A4745] leading-relaxed mb-4">
                Balanced-macro, anti-inflammatory menus with organic produce where possible, cold-pressed juices and superfood options for groups of 10–60. Supports full juice-cleanse days or partial detox windows inside a broader menu. Best for detox retreats, spa programmes and fitness groups.
              </p>
              <ul className="space-y-2 text-sm text-[#4A4745]">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> Balanced-macro focus</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> Juice-cleanse compatible</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> Ideal for 10–60 guests</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-[#4A4745] mt-8 text-center">
            Normal groceries are included in every plan. Premium upgrades — imported superfoods, oyster or seafood nights, an elevated closing dinner — are quoted separately in advance.
          </p>
          <p className="text-xs text-[#4A4745]/70 mt-4 text-center">
            Retreat programmes are priced per group, length and menu, with a five-guest minimum. One-day and multi-day retreat packages are available. Applicable service charge and government tax are shown clearly in your quotation. Contact us for a fixed quote.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 2: WHY CHOOSE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Service"
            title="Why Retreat Organisers Choose myCHEF"
            subtitle="A dedicated team, consistent chefs, and flexible hospitality designed around the real needs of multi-day retreats."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
                <item.icon className="w-7 h-7 text-[#C5A028] mb-4" />
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: TYPES OF RETREATS ═══════ */}
      <section id="retreat-types" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Retreat Types"
            title="Retreats We Cater"
            subtitle="Yoga, wellness, business, creative, fitness, and private villa groups — each with menus calibrated to the retreat's purpose and energy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {RETREAT_TYPES.map((rt) => (
              <div key={rt.title} className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-4">
                  <rt.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-semibold text-base mb-2">{rt.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{rt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: RETREAT MEAL PHILOSOPHY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Philosophy"
            title="Retreat Meal Philosophy"
            subtitle="Food that supports the arc of the day: energising mornings, focused midday meals, restorative afternoons, and grounding evenings."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4 text-[#4A4745]">
              <p>
                Retreat meal planning is different from event catering. Each meal has a job to do. Breakfast sets the tone for morning practice. Lunch sustains focus without inducing sleep. Snacks bridge the afternoon energy dip. Dinner creates community and prepares the body for rest.
              </p>
              <p>
                We build every day around fresh, whole ingredients. Tropical fruits, local vegetables, heritage rice, free-range eggs, sustainably caught seafood, and quality proteins form the base. Herbs, spices, and ferments add flavour without relying on excessive salt, sugar, or processed oils.
              </p>
              <p>
                Hydration is treated as seriously as food. Fresh juices, coconut water, herbal teas, and filtered water stations are available throughout the day. Caffeine is offered but never forced; decaffeinated and adaptogenic options are always present.
              </p>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Daily Pillars</h3>
              <div className="space-y-4">
                {[
                  { title: 'Breakfast', desc: 'Light proteins, fresh fruit, whole grains, and herbal tonics.' },
                  { title: 'Lunch', desc: 'Balanced macros, raw and cooked vegetables, lean proteins, and complex carbs.' },
                  { title: 'Snacks', desc: 'Fresh fruit, raw nuts, energy balls, and hydrating juices.' },
                  { title: 'Dinner', desc: 'Grounding proteins, warming vegetables, and comforting starches.' },
                  { title: 'Recovery', desc: 'Electrolytes, light proteins and fresh ingredients after activity.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028] mt-2" />
                    <div>
                      <span className="font-medium text-sm">{item.title}</span>
                      <p className="text-sm text-[#4A4745]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: SAMPLE RETREAT SCHEDULE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Daily Rhythm"
            title="A Sample Retreat Day on the Plate"
            subtitle="A complete day of retreat catering — breakfast, snacks and juices, lunch, recovery, and dinner."
          />
          <div className="space-y-4 mt-10">
            {DAILY_MEALS.map((item, i) => (
              <div key={i} className="retreat-reveal flex flex-col md:flex-row md:items-center gap-4 bg-white rounded-xl border border-[#E8E6E3] p-5">
                <div className="md:w-28 flex-shrink-0">
                  <span className="text-sm font-semibold text-[#C5A028]">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.meal}</h3>
                  <p className="text-sm text-[#4A4745]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745] mt-8">
            Schedules are customised to your program. Silent breakfasts, working lunches, and late celebratory dinners are all possible.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 6: MENUS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Menus"
            title="Retreat Menus"
            subtitle="A wide range of breakfast, lunch, and evening menus, each adaptable to dietary requirements and retreat goals."
          />
          <div className="space-y-12 mt-10">
            {MENU_DIRECTIONS.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-semibold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>{category.category}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="retreat-reveal bg-[#FAFAF8] rounded-xl p-5 border border-[#E8E6E3]">
                      <h4 className="font-semibold text-sm mb-1 text-[#C5A028]">{item.name}</h4>
                      <p className="text-sm text-[#4A4745] mb-3">{item.desc}</p>
                      {item.href && (
                        <a href={item.href} className="inline-flex items-center gap-1 text-xs font-medium text-[#1A1A1A] hover:text-[#C5A028] transition-colors">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Request a Retreat Meal Plan
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: DIETARY EXPERTISE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Dietary"
            title="Dietary Expertise"
            subtitle="Vegan, vegetarian, gluten-free, dairy-free, keto, paleo, halal-friendly, and more — explained as processes, not just labels."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {DIETARY_EXPERTISE.map((item) => (
              <div key={item.title} className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#4A4745] mt-8 text-center">
            For guests who want chef-prepared nourishment outside the retreat schedule, we also offer <Link to="/healthy-meal-delivery-indonesia" className="text-[#C5A028] hover:underline">chef-prepared healthy meal delivery</Link> across Bali.
          </p>
          <p className="text-xs text-[#4A4745]/70 mt-4 text-center max-w-2xl mx-auto">
            We take reasonable precautions with allergies and dietary restrictions, but we cannot guarantee an entirely allergen-free environment, particularly in third-party villa or venue kitchens. Guests with serious allergies or medically prescribed diets should provide complete written requirements before the event.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 8: MULTI-DAY PLANNING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Planning"
            title="Multi-Day Retreat Planning"
            subtitle="Ingredient sourcing, daily shopping, fresh prep, menu rotation, seasonality, and kitchen organisation — managed end to end."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {MULTI_DAY_STEPS.map((step) => (
              <div key={step.step} className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <span className="text-xs text-[#C5A028] font-semibold tracking-wider uppercase">Step {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
            <h3 className="font-semibold text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Backup Planning</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Backup staff available if team members fall ill',
                'Alternative menus if ingredients are unavailable',
                'Extra equipment for limited villa kitchens',
                'Contingency timing when workshops run late',
                'Weather and rain backup for outdoor dining',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-[#4A4745] mt-8 text-center">
            For lighter-touch programmes, combine an on-site chef for key meals with <Link to="/catering/drop-off-catering" className="text-[#C5A028] hover:underline">drop-off catering</Link> for the rest.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 9: VILLA & RETREAT CENTRE EXPERIENCE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Venues"
            title="Villa & Retreat Centre Experience"
            subtitle="Private villas, boutique hotels, retreat centres, jungle lodges, and beachfront estates — each assessed and equipped for professional catering."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {VILLA_EXPERIENCE.map((item) => (
              <div key={item.title} className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <Home className="w-6 h-6 text-[#C5A028] mb-3" />
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
            <h3 className="font-semibold text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Kitchen Assessment</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {KITCHEN_ASSESSMENT.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-[#4A4745]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: WHY FOOD SHAPES THE RETREAT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Impact"
            title="Why Food Shapes the Retreat Experience"
            subtitle="Energy, connection, recovery, community, memory, and retreat success — food is never just fuel on a retreat."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {WHY_FOOD.map((item) => (
              <div key={item.title} className="retreat-reveal bg-[#FAFAF8] rounded-xl p-5 border border-[#E8E6E3]">
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 11: OPTIONAL SERVICES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Add-Ons"
            title="Optional Services"
            subtitle="Elevate specific retreat moments with baristas, juice bars, bartenders, BBQ nights, fine dining finales, photography, flowers, and live music."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {OPTIONAL_SERVICES.map((item) => (
              <div key={item.title} className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <item.icon className="w-6 h-6 text-[#C5A028] mb-3" />
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4745] mb-3 leading-relaxed">{item.desc}</p>
                {item.href && (
                  <a href={item.href} className="inline-flex items-center gap-1 text-xs font-medium text-[#1A1A1A] hover:text-[#C5A028] transition-colors">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 12: LOCATIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Locations"
            title="Retreat Catering Across Bali"
            subtitle="From Ubud to North Bali, we deliver consistent retreat hospitality in every major retreat destination on the island."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#C5A028]" />
                  <h3 className="font-semibold text-base">{loc.title}</h3>
                </div>
                <p className="text-sm text-[#4A4745] leading-relaxed mb-4">
                  {loc.desc}
                  {loc.link && (
                    <Link to={loc.link.to} className="text-[#C5A028] hover:underline">{loc.link.anchor}</Link>
                  )}
                  {loc.descAfter}
                </p>
                <a href={retreatAreaHref(loc.slug)} className="inline-flex items-center gap-1 text-xs font-medium text-[#1A1A1A] hover:text-[#C5A028] transition-colors">
                  Retreat catering in {loc.title} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: RETREAT PLANNING TIMELINE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Timeline"
            title="Retreat Planning Timeline"
            subtitle="From six months out to day one, here is how we build a seamless catering plan for your retreat."
          />
          <div className="space-y-4 mt-10">
            {TIMELINE.map((item, i) => (
              <div key={i} className="retreat-reveal flex flex-col md:flex-row md:items-start gap-4 bg-white rounded-xl border border-[#E8E6E3] p-5">
                <div className="md:w-40 flex-shrink-0">
                  <span className="text-sm font-semibold text-[#C5A028]">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 14: RETREAT CASE STUDIES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Case Studies"
            title="Retreat Case Studies"
            subtitle="Recent retreats and workshops we have catered across Bali."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Wellness Retreat — Ubud',
                scope: ['24 guests over 3 days', 'Full meal plan — breakfast, lunch, dinner, snacks', 'Vegan, gluten-free, and nut-free requirements managed'],
                result: 'Every dietary guest was served labelled, varied meals across all three days; the organizer has rebooked annually.',
              },
              {
                title: 'Corporate Offsite — Canggu',
                scope: ['40 people over 5 days', 'Breakfast, lunch, dinner, and snacks', 'Schedule adapted daily around sessions and excursions'],
                result: 'The team adjusted to last-minute schedule changes without disruption; food quality held across all five days.',
              },
              {
                title: 'Wellness Retreat — Sidemen',
                scope: ['25 guests, multi-day program', 'Ayurvedic-style menus developed with the retreat leader', 'Remote-venue logistics and procurement planning'],
                result: 'Menus aligned with the program philosophy and service stayed calm and unobtrusive throughout.',
              },
            ].map((cs) => (
              <div key={cs.title} className="retreat-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 flex flex-col">
                <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{cs.title}</h3>
                <ul className="space-y-2 mb-4 flex-1">
                  {cs.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[#4A4745]/80"><span className="font-semibold text-[#1A1A1A]">Result:</span> {cs.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 15: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Retreat Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={6} showToc ctaEvery={5} />
        </div>
      </section>

      <PressStrip />

      <StaffingInfo />
      <BookingProcess />

      <CateringDiscoverySection page="retreat" />

      {/* ═══════ SECTION 16: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-retreats-communal.webp" alt="Communal retreat dining table in Bali" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/68" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book Retreat Catering Bali
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Request a Retreat Meal Plan
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your retreat or workshop details and we reply on WhatsApp within the hour with chef availability, then a tailored proposal within 24 hours.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-white font-semibold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>What to Send Us</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                'Retreat or workshop type', 'One-day or multi-day', 'Dates', 'Venue and area',
                'Guest count (incl. staff meals)', 'Program agenda', 'Meals required', 'Dietary requirements',
                'Preferred service format', 'Drinks and beverages', 'Kitchen facilities available', 'Service staff needed',
                'Indicative budget', 'Invoice details',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/[80%]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Retreat Meal Plan
            </a>
            <a href="https://wa.me/6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 896-7407-2020
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 24h proposal turnaround</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dedicated retreat chef</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Custom menus</span>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="catering-retreat"
        serviceName="retreat catering in Bali"
        intent="retreat proposal and planning"
        label="Request a Retreat Meal Plan"
      />
    </div>
  )
}
