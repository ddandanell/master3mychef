import { useEffect, useRef } from 'react'
import {
  MessageCircle, Check, Phone, Calendar, Users,
  ChefHat, ShieldCheck, Sparkles,
  Heart, Utensils, Moon, Wind,
  ClipboardList, Zap, ShoppingBag, Home,
  Leaf, Coffee, CupSoda, Sun, MapPin, Clock, ArrowRight,
  Flower2, Flame, Wine, Camera, Music, UtensilsCrossed,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
  howToSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { Breadcrumb, PressStrip, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'retreat catering in Bali', intent: 'retreat proposal and planning' })
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
    desc: 'Yoga retreat catering Bali is the heart of our service. We understand that asana practice demands light, sattvic energy before class and complete replenishment after. Morning menus favour warm herbal tonics, fresh fruit, and small portions that do not weigh on the belly. Post-practice meals introduce plant proteins, healthy grains, and hydrating vegetables. We time service around sunrise and sunset sessions, and we keep caffeine options available without forcing stimulants on guests who prefer calm.',
  },
  {
    icon: Heart,
    title: 'Wellness Retreats',
    desc: 'Wellness retreat catering Bali balances nourishment with intention. Whether your program focuses on anti-inflammatory eating, gut health, hormonal balance, or mindful consumption, we design menus that reinforce your teaching. Meals are colourful, nutrient-dense, and free from hidden sugars or heavy processed oils. We work with retreat leaders to align food with workshops, spa treatments, and movement sessions so guests feel supported rather than distracted.',
  },
  {
    icon: Moon,
    title: 'Meditation Retreats',
    desc: 'Meditation retreat catering Bali calls for food that is grounding, easy to digest, and quietly satisfying. Overstimulation from spice, sugar, or caffeine can interrupt practice, so we calibrate flavours to support stillness. Silence at meals is respected, service is unobtrusive, and portions are designed to sustain long sits without creating drowsiness or restlessness.',
  },
  {
    icon: Zap,
    title: 'Fitness Retreats',
    desc: 'Fitness retreat catering Bali fuels training blocks, surf camps, and strength-focused programs. We build high-protein breakfasts, recovery lunches, and rehydrating snacks around your daily schedule. Macro balance matters here: lean proteins, complex carbohydrates, healthy fats, and targeted post-workout nutrition. Guests leave strong, not depleted.',
  },
  {
    icon: Sun,
    title: 'Surf Retreats',
    desc: 'Surf retreat catering Bali has to match ocean time. Early dawn-patrol breakfasts, substantial post-surf brunches, and relaxed evening meals keep energy consistent across long days in the water. We emphasise hydration, electrolytes, and anti-inflammatory ingredients to support joints and skin after sun exposure.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Corporate Retreats',
    desc: 'Corporate retreat catering Bali combines professional presentation with flexible logistics. We handle working lunches, coffee breaks, BBQ evenings, and formal celebration dinners. Menus are designed to sustain focus through strategy sessions while giving teams something to gather around at the end of the day. Invoicing, dietary reporting, and structured timelines are all available.',
  },
  {
    icon: Sparkles,
    title: 'Leadership Retreats',
    desc: 'Leadership retreat catering Bali is about understated quality. Executives expect consistent service, dietary discretion, and meals that feel refined without being fussy. We provide curated menus, polished presentation, and a team that understands professional hospitality standards.',
  },
  {
    icon: Flower2,
    title: 'Creative Retreats',
    desc: 'Creative retreat catering Bali keeps minds energised across long making, writing, or design sessions. We avoid heavy midday meals that induce afternoon slumps and instead serve colourful, brain-friendly plates with steady-release carbohydrates, fresh herbs, and vibrant vegetables.',
  },
  {
    icon: Home,
    title: 'Luxury Villa Retreats',
    desc: 'Luxury villa retreat catering Bali brings restaurant-standard dining into a private estate. Guests expect privacy, flexibility, and impeccable service. We match the tone of the villa, source premium ingredients, and provide discreet staff who understand high-end hospitality.',
  },
  {
    icon: Leaf,
    title: 'Detox Retreats',
    desc: 'Detox retreat catering Bali supports guided cleanses with cold-pressed juices, light broths, raw salads, steamed vegetables, and herbal infusions. We follow your protocol precisely, whether it is a full juice cleanse, a mono-diet day, or a gradual whole-food reset.',
  },
  {
    icon: Heart,
    title: "Women's Retreats",
    desc: "Women's retreat catering Bali creates communal tables where connection is as important as nutrition. Menus are nourishing, beautifully presented, and responsive to hormonal health, pregnancy, and postpartum needs where requested. We design shared meals that feel like ceremony.",
  },
  {
    icon: ShieldCheck,
    title: "Men's Retreats",
    desc: "Men's retreat catering Bali emphasises generous portions, strong flavours, and high-quality protein. Whether the retreat centres on fitness, brotherhood, leadership, or adventure, we provide satisfying food that matches the energy of the group without defaulting to unhealthy heaviness.",
  },
  {
    icon: Moon,
    title: 'Spiritual Retreats',
    desc: 'Spiritual retreat catering Bali respects the intention behind the gathering. We work with facilitators to align ingredients, preparation, and service with religious or energetic requirements. Fasting windows, ritual meals, and silent service can all be accommodated.',
  },
  {
    icon: Users,
    title: 'Teacher Trainings',
    desc: 'Yoga teacher training catering Bali requires reliability across 14 to 28 consecutive days. We keep menus varied, portions generous for long training days, and dietary records precise for large groups. The same team stays for the full program, becoming part of the training rhythm.',
  },
  {
    icon: Coffee,
    title: 'Digital Nomad Retreats',
    desc: 'Digital nomad retreat catering Bali blends coworking schedules with social dining. We provide strong coffee stations, working lunches, communal dinners, and flexible timing for guests who move between desks, calls, and excursions.',
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
  { time: '07:00', meal: 'Healthy Breakfast', desc: 'Tropical fruit platters, smoothie bowls, overnight oats, eggs any style, sourdough, homemade granola, herbal teas, and fresh Balinese coffee.' },
  { time: '10:00', meal: 'Coffee & Tea Break', desc: 'Herbal infusions, ginger tonics, espresso, plant milks, fresh fruit, and light energy balls served between morning sessions.' },
  { time: '12:30', meal: 'Lunch Buffet', desc: 'Colourful salads, grain bowls, grilled proteins, vegetarian curries, fermented vegetables, and hydrating fresh juices.' },
  { time: '15:30', meal: 'Smoothie & Snack Station', desc: 'Cold-pressed juices, coconut smoothies, raw nuts, seasonal fruit, and light protein snacks to bridge the afternoon.' },
  { time: '19:00', meal: 'Dinner', desc: 'Plated or family-style dinners featuring Balinese, Mediterranean, Italian, or globally inspired menus, adapted to the day\u2019s energy.' },
  { time: '20:30', meal: 'Herbal Tea & Healthy Dessert', desc: 'Caffeine-free evening blends, raw cacao treats, tropical fruit, and light desserts designed to support restful sleep.' },
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
      { name: 'Fine Dining Evening', desc: 'A multi-course plated dinner for a standout celebration night.', href: '/fine-dining/private-chef-bali' },
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
    desc: 'Full plant-based menus built around complete proteins, B12-rich ingredients, healthy fats, and satisfying textures. We do not simply remove animal products; we rebuild dishes from the ground up so vegan guests feel fully catered to.',
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
  { icon: UtensilsCrossed, title: 'Fine Dining Finale', desc: 'A multi-course plated dinner to mark the closing night of the retreat.', href: '/fine-dining/private-chef-bali' },
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
    desc: 'Ubud is the spiritual and wellness centre of Bali, home to the island\u2019s densest concentration of yoga and meditation retreats. Our Ubud retreat catering Bali service handles jungle logistics, early morning yoga schedules, and access to organic produce from the surrounding highlands.',
  },
  {
    slug: 'canggu',
    title: 'Canggu',
    desc: 'Canggu attracts surf, fitness, and digital nomad retreats with its open-plan villas and creative energy. We deliver flexible, health-focused retreat meals for groups that move between coworking, training, and beach time.',
  },
  {
    slug: 'pererenan',
    title: 'Pererenan',
    desc: 'Pererenan offers design-led villas and a quieter pace than central Canggu. It is ideal for intimate luxury retreats where privacy, aesthetics, and refined service matter.',
  },
  {
    slug: 'sanur',
    title: 'Sanur',
    desc: 'Sanur\u2019s calm east-coast atmosphere suits family-friendly, wellness, and long-stay retreats. Our Sanur catering provides gentle, consistent service and classic Mediterranean-Indonesian menus.',
  },
  {
    slug: 'uluwatu',
    title: 'Uluwatu',
    desc: 'Uluwatu\u2019s clifftop villas attract luxury and fitness retreats seeking dramatic settings. We plan around wind, lift access, and sunset timing to deliver polished clifftop dining.',
  },
  {
    slug: 'sidemen',
    title: 'Sidemen',
    desc: 'Sidemen\u2019s rice terraces and slower pace are perfect for immersive wellness and spiritual retreats. Our team manages the longer travel distances and limited local supplier access.',
  },
  {
    slug: 'amed',
    title: 'Amed',
    desc: 'Amed on Bali\u2019s east coast is known for diving, snorkelling, and quiet group retreats. We leverage fresh seafood and plan for the scenic but slower road access.',
  },
  {
    slug: 'nusa-dua',
    title: 'Nusa Dua',
    desc: 'Nusa Dua\u2019s resort estates and gated compounds suit corporate and luxury wellness retreats. We provide executive-level service, formal dining options, and invoicing support.',
  },
  {
    slug: 'jimbaran',
    title: 'Jimbaran',
    desc: 'Jimbaran\u2019s seafood market gives our retreat menus access to the freshest catch. It is a strong base for seafood nights, beachfront villas, and celebratory dinners.',
  },
  {
    slug: 'seminyak',
    title: 'Seminyak',
    desc: 'Seminyak offers high-end villas, excellent access, and a vibrant food scene. Our retreat catering here blends convenience with premium ingredients and polished presentation.',
  },
  {
    slug: 'munduk',
    title: 'Munduk',
    desc: 'Munduk\u2019s cool mountain air and jungle waterfalls attract nature and wellness retreats. We plan for the cooler climate and remote location with warming menus and full logistics.',
  },
  {
    slug: 'north-bali',
    title: 'North Bali',
    desc: 'North Bali, including Lovina and the surrounding coast, offers dolphin-watching, quiet beaches, and a relaxed pace. We coordinate longer travel logistics and source fresh local produce for multi-day stays.',
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
  { q: 'What is retreat catering Bali?', a: 'Retreat catering Bali is a specialised service providing multi-day, chef-prepared meals for yoga, wellness, corporate, and private retreats. It includes menu planning, dietary management, daily shopping, on-site cooking, service, and full kitchen cleanup.' },
  { q: 'Do you cater 7-day and 14-day retreats?', a: 'Yes. Multi-day retreat catering is our core service. We plan menu rotation, shopping cycles, and chef scheduling so quality and variety remain high across 7, 14, or even 21 consecutive days.' },
  { q: 'Can the chef stay on site for the full retreat?', a: 'Yes. For remote villas and large retreats, we arrange on-site or nearby accommodation for the culinary team, enabling early breakfasts, late dinners, and immediate response to schedule changes.' },
  { q: 'Do you provide yoga retreat menus?', a: 'Yes. Yoga retreat catering Bali is one of our specialities. We design light pre-practice meals, nourishing post-practice brunches, and grounding dinners that support asana, meditation, and energy work.' },
  { q: 'Can you create detox or juice-cleanse menus?', a: 'Yes. We design detox programs ranging from full juice cleanses to partial raw-food days, all integrated within a broader retreat menu for guests who are not cleansing.' },
  { q: 'Do menus change every day?', a: 'Yes. We actively rotate breakfast, lunch, dinner, and snacks so guests rarely eat the same dish twice within a standard retreat. Repetition only happens by request, for example a favourite breakfast bowl.' },
  { q: 'Can you mix cuisines across the retreat?', a: 'Absolutely. Many retreats feature themed nights such as Balinese Night, Italian Night, Mediterranean Night, Mexican Night, Japanese Night, Seafood Night, and BBQ Evening.' },
  { q: 'How do you handle allergies?', a: 'We collect allergy information before arrival, flag anaphylactic risks, prevent cross-contact in the kitchen, and label all dishes. Severe allergies are discussed directly with the retreat leader.' },
  { q: 'Can you cater to vegans and vegetarians?', a: 'Yes. Vegan retreat catering Bali and vegetarian retreat meals are standard for us. We build complete protein profiles and satisfying flavours for plant-based guests.' },
  { q: 'Do you offer gluten-free retreat catering?', a: 'Yes. Gluten-free retreat catering Bali uses rice, quinoa, buckwheat, and root vegetables. We control cross-contamination and provide bread and pastry alternatives.' },
  { q: 'Can you do keto, paleo, or low-carb?', a: 'Yes. We design keto, paleo, low-carb, and sugar-conscious menus with appropriate substitutions and clear labelling.' },
  { q: 'Do you cater kids\u2019 meals?', a: 'Yes. We provide milder, familiar options for children and teenagers, scaled portions, and kid-friendly snacks alongside adult retreat menus.' },
  { q: 'Is halal-friendly catering available?', a: 'Yes. Halal-friendly retreat catering Bali avoids pork and non-halal meats, sources from trusted suppliers, and can separate preparation where required.' },
  { q: 'Do you provide smoothie and juice stations?', a: 'Yes. Smoothie bars, cold-pressed juice stations, and wellness shots are available for breakfast, afternoon breaks, or all-day self-service.' },
  { q: 'Can you set up a coffee station?', a: 'Yes. We offer everything from self-service coffee and tea stations to a private barista preparing espresso, pour-over, and specialty drinks.' },
  { q: 'Do you do snack stations?', a: 'Yes. Wellness snack stations with raw nuts, dried fruit, energy balls, fresh coconut water, and herbal teas can be available throughout the day.' },
  { q: 'Can you serve late-night food?', a: 'Yes. Late dinners, post-event snacks, and evening herbal tea service can be scheduled for retreats with evening sessions or celebrations.' },
  { q: 'Do you cater corporate retreats?', a: 'Yes. Corporate retreat catering Bali includes working lunches, coffee breaks, BBQ nights, formal dinners, and invoicing support for business groups.' },
  { q: 'Can you cater yoga teacher trainings?', a: 'Yes. Teacher training catering Bali runs for 14 to 28 days with generous portions, menu variety, and precise dietary tracking for large groups.' },
  { q: 'Do you provide tax invoices?', a: 'Yes. We provide NPWP-ready tax invoices for corporate retreats, teacher trainings, and business clients on request.' },
  { q: 'Can you cater 150 guests?', a: 'Yes. We regularly cater retreats from 10 to 150 guests. Large groups receive a brigade-style team with multiple chefs, assistants, and service staff.' },
  { q: 'Can you work from a villa kitchen?', a: 'Yes. We assess the villa kitchen before arrival, bring missing equipment, and adapt our prep flow to the available space, power, and water.' },
  { q: 'Do you cater at retreat centres and boutique hotels?', a: 'Yes. We operate in private villas, retreat centres, boutique hotels, jungle lodges, and beachfront estates across Bali.' },
  { q: 'How far in advance should we book?', a: 'For retreat catering, 1 to 3 months is ideal. Peak season and large groups benefit from earlier booking to secure chef availability and plan dietary requirements.' },
  { q: 'Do you do excursions lunches?', a: 'Yes. We prepare packed lunches, cool boxes, and portable meals for temple visits, waterfall hikes, surf trips, and beach days.' },
  { q: 'Can you accommodate religious fasting or prayer schedules?', a: 'Yes. We respect religious requirements, fasting windows, Ramadan schedules, and prayer times, and adjust meal timing accordingly.' },
  { q: 'Do you use organic or local produce?', a: 'We use local, seasonal produce from Balinese markets and organic farms wherever possible. Specific organic requirements can be built into the menu plan.' },
  { q: 'Can we request the same chef for the whole retreat?', a: 'Yes. Consistency is part of our service. The same lead chef stays for the full retreat, supported by assistants as needed.' },
  { q: 'Do you handle kitchen cleanup?', a: 'Yes. Full kitchen cleanup is included after every service. The kitchen is reset and left spotless for villa staff or the next meal.' },
  { q: 'Can you provide waiters and butlers?', a: 'Yes. We can add uniformed waiters, butlers, bartenders, and hosts to any retreat meal or event.', href: '/in-villa-service' },
  { q: 'Do you offer BBQ or fine dining nights?', a: 'Yes. BBQ evenings, fine dining finales, seafood nights, and themed cuisine nights are popular highlights within a retreat program.', href: '/catering/bbq-catering' },
  { q: 'How are prices calculated?', a: 'Every retreat receives a customised proposal based on guest numbers, menu style, duration, location, service level, and dietary complexity. We do not publish fixed prices because every retreat is different.' },
  { q: 'Do you cater surf and fitness retreats?', a: 'Yes. Surf retreat catering Bali and fitness retreat catering Bali focus on high-protein recovery meals, hydration, and energy balance for active guests.' },
  { q: 'What areas of Bali do you cover?', a: 'We cover Ubud, Canggu, Pererenan, Sanur, Uluwatu, Sidemen, Amed, Nusa Dua, Jimbaran, Seminyak, Munduk, and North Bali, plus surrounding areas by arrangement.' },
  { q: 'Can guests with coeliac disease eat safely?', a: 'Yes. Coeliac disease is treated with strict cross-contamination controls, separate prep areas, and clear communication with the kitchen team.' },
  { q: 'Do you provide baristas and cocktail service?', a: 'Yes. Private baristas, coffee stations, bartenders, and cocktail evenings can be added to elevate any retreat day or celebration night.', href: '/in-villa-service/bartenders' },
  { q: 'How do we start planning?', a: 'Send us your retreat dates, location, estimated guest count, daily schedule, dietary profile, and preferred cuisines via WhatsApp. We will respond with a tailored retreat proposal and next steps.' },
]

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
        title="Luxury Retreat Catering Bali | Yoga, Wellness & Corporate Retreat Hospitality | myCHEF"
        description="Premium retreat catering across Bali for yoga, wellness, corporate and luxury retreats. Multi-day menu planning, healthy chef-prepared meals, dietary specialists and professional hospitality teams. Custom proposals for retreats of every size."
        canonical={`${SITE}/catering/retreat-catering`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-retreat.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Luxury Retreat Catering Bali',
            description: 'Premium retreat catering across Bali for yoga, wellness, corporate and luxury retreats. Multi-day menu planning, healthy chef-prepared meals, dietary specialists and professional hospitality teams.',
            url: `${SITE}/catering/retreat-catering`,
            lowPrice: '700000',
            highPrice: '2500000',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book Retreat Catering in Bali',
            description: 'Book luxury retreat catering for your Bali group in 4 easy steps.',
            totalTime: 'PT15M',
            steps: [
              { name: 'Share your retreat plan', text: 'Send dates, villa location, guest count, schedule, and dietary focus via WhatsApp.' },
              { name: 'Review your proposal', text: 'We design a multi-day menu with cuisine themes, dietary management, and staffing plan.' },
              { name: 'Confirm dietary details', text: 'Guest allergies, restrictions, and preferences are collected and built into the kitchen plan.' },
              { name: 'Chef team executes', text: 'The team arrives, sets up the kitchen, and delivers every meal from day one to checkout.' },
            ],
          }),
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
            Premium Retreat Catering & Hospitality in Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Luxury Retreat Catering<br />
            <span className="italic">for Yoga, Wellness & Corporate Retreats in Bali</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Premium retreat catering with Bali-wide coverage, multi-day capability, private chefs, healthy menus, and professional hospitality teams.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            Every retreat receives a customised proposal based on guest numbers, menu style and duration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Retreat Proposal
            </a>
            <a href="#retreat-types" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              Explore Retreat Types
            </a>
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
                Retreat catering in Bali is a specialised service. Unlike one-off events, multi-day retreats require a system: planned shopping cycles, prep schedules that adapt to villa kitchen limitations, and menus designed to sustain energy rather than spike it.
              </p>
              <p className="text-[#4A4745]">
                We design every retreat menu around digestion, energy, and sleep. Light before yoga. Stronger after training. Clean before workshops. Comforting at night. The food becomes part of the retreat experience — not a distraction from it.
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
                  { title: 'Recovery', desc: 'Anti-inflammatory ingredients, electrolytes, and light proteins after activity.' },
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
            title="Sample Retreat Schedule"
            subtitle="A complete day of retreat catering — breakfast, coffee break, lunch, smoothie, dinner, and herbal tea."
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
              <Calendar className="w-4 h-4" /> Request a Retreat Proposal
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
                <p className="text-sm text-[#4A4745] leading-relaxed mb-4">{loc.desc}</p>
                <a href={`/locations/${loc.slug}`} className="inline-flex items-center gap-1 text-xs font-medium text-[#1A1A1A] hover:text-[#C5A028] transition-colors">
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

      {/* ═══════ SECTION 14: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Yoga Retreat Center', location: 'Ubud', quote: 'We have worked with myCHEF for 3 years. Their retreat catering is exceptional — plant-based, delicious, and always on time. Our guests rave about the food.', rating: 5 },
          { name: 'Wellness Resort', location: 'Sidemen', quote: 'Multi-day wellness retreat for 25 guests. The chef created beautiful Ayurvedic meals that aligned perfectly with our program. Highly professional team.', rating: 5 },
          { name: 'Corporate Offsite', location: 'Canggu', quote: '5-day team offsite with 40 people. Breakfast, lunch, dinner, and snacks. The team adapted to our changing schedule without complaint. Food was outstanding.', rating: 5 },
        ]}
        title="What Retreat Organizers Say"
        subtitle="Real reviews from retreat centers and wellness resorts across Bali."
      />

      {/* ═══════ SECTION 15: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Retreat Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
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
            Request a Retreat Proposal
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your retreat length, guest count, daily schedule, villa location, dietary profile, and preferred food style. We will design a custom menu and confirm chef availability within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Retreat Proposal
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Phone className="w-4 h-4" /> Call +62 896-7407-2020
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
      <StickyMobileCTA
        pageSource="catering-retreat"
        serviceName="retreat catering in Bali"
        intent="retreat proposal and planning"
        label="Request a Retreat Proposal"
      />
    </div>
  )
}
