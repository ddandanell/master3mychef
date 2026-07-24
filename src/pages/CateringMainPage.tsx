import { useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  MessageCircle, Check, ArrowRight, Phone, Calendar, Users, MapPin,
  Utensils, CreditCard, ChefHat, Sparkles, ShieldCheck, HelpCircle,
  Home, PartyPopper, Flame, Wine, Flower2, CakeSlice,
} from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
  howToSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import LocationChips from '@/components/LocationChips'
import TrustRow from '@/components/catering/TrustRow'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { CateringRiskReversal } from '@/components/shared'

import OptimizedImage from '@/components/OptimizedImage'

const WA_LINK = buildWhatsAppUrl({ serviceName: 'catering in Bali', intent: 'menu options and pricing' })
const WA_DAILY_CHEF_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF,%20I%20would%20like%20to%20book%20a%20daily%20villa%20chef.'
const SITE = 'https://mychef.id'
const bookingHref = (packageName: string) => `?package=${encodeURIComponent(packageName)}#book`

/* ── DATA ── */

const CATERING_STYLES = [
  {
    image: '/generated/mychef-catering-style-bbq.webp',
    title: 'BBQ Catering',
    price: 'From IDR 700,000/person',
    description: 'BBQ catering is the most social, flexible format for villa dinners, birthday groups, family holidays, and relaxed celebrations in Bali. A myCHEF chef arrives at your villa three hours before service, sets up a live grill by the pool or garden, and cooks meats, seafood, satay, and vegetarian options to order while guests mingle. It works beautifully for 10 to 60 guests, needs only basic outdoor space, and creates a relaxed party atmosphere where people can eat at their own pace. We provide the grill, fuel, utensils, serving platters, napkins, and cleanup crew. Popular upgrades include Wagyu beef, lobster tails, whole fish, and live sate stations. For villa BBQ catering Bali, this is the crowd-pleasing choice that keeps the kitchen out of the house and the energy high.',
    href: '/catering/bbq-catering',
    accent: '#C5A028',
  },
  {
    image: '/generated/mychef-catering-style-buffet.webp',
    title: 'Buffet Catering',
    price: 'From IDR 700,000/person',
    description: 'Buffet catering is the practical, elegant way to feed larger groups at weddings, villa events, corporate dinners, and milestone celebrations. With a minimum of 30 guests, we set up a full buffet line at your venue, keep dishes at the correct temperature in chafing units, and serve guests through a smooth queue so the party never stops. Menus range from Indonesian classics such as nasi kuning, sate lilit, rendang, and gado-gado to international roasts, pasta stations, carved meats, and live cooking counters. Every buffet package includes a head chef, service staff, all equipment, linens, porcelain, glassware, setup, service, and full cleanup. Buffet catering Bali is ideal when you want variety, predictable portions, and a structured flow for 30 to 250 guests.',
    href: '/catering/buffet',
    accent: '#6B8E5A',
  },
  {
    image: '/generated/mychef-catering-style-plated.webp',
    title: 'Plated Set Menus',
    price: 'From IDR 800,000/person',
    description: 'Plated set menus turn your villa dinner, anniversary, engagement party, or intimate wedding into a fine-dining experience. Guests remain seated while our chef and service team deliver each course with precise timing, polished presentation, and attentive table service. Choose a 3-course, 4-course, or 5-course menu built around Mediterranean, Italian, French, Japanese, Indonesian, or seafood themes. Plated catering suits 10 to 80 guests and works best when you want a slower, more controlled pace, elegant plating, and a sense of occasion. We supply English-speaking chefs, a service manager, one waiter per ten guests, tables, linens, cutlery, porcelain, glassware, and a kitchen tent if required. For luxury catering Bali with a restaurant feel in your own space, plated service is hard to beat.',
    href: '/catering/plated-catering',
    accent: '#2C5F7C',
  },
  {
    image: '/generated/mychef-catering-style-dropoff.webp',
    title: 'Drop-Off Catering',
    price: 'From IDR 700,000/person',
    description: 'Drop-off catering is designed for villa guests who want restaurant-quality food without any staff staying in the property. We prepare your menu in our commissary kitchen, pack it in recyclable containers with clear reheating instructions, and deliver it within a 90-minute window so you can serve yourself when it suits you. This option suits 4 to 16 guests for family dinners, small celebrations, honeymoon meals, or relaxed nights when the group wants privacy. Choose from family dinner drop-off, dinner party drop-off, or grazing dinner drop-off with charcuterie, cheese, hot mains, sides, and dessert. Drop-off catering Bali is also popular with guests who want to plate the food themselves and create a private, intimate atmosphere without the cost of full service.',
    href: '/catering/drop-off-catering',
    accent: '#8B5A2B',
  },
  {
    image: '/generated/mychef-catering-style-villa.webp',
    title: 'Villa Catering',
    price: 'From IDR 700,000/person',
    description: 'Villa catering is our core service: a professional chef and service team come to your Bali villa to prepare and serve lunch, dinner, or a multi-day dining program. Whether you are hosting a casual poolside lunch, a formal anniversary dinner, or a week of meals for an extended family, villa catering Bali adapts to your kitchen, your schedule, and your guest count. We handle grocery shopping, menu planning, dietary restrictions, equipment, table setup, service, and cleanup, so you never have to think about where to eat. It is the perfect middle ground between restaurant dining and a full-time private chef: restaurant-quality food, but served in your own space, on your own timeline, with no transport or tipping complications.',
    href: '/catering/villa-catering',
    accent: '#2C5F7C',
  },
  {
    image: '/generated/mychef-catering-style-corporate.webp',
    title: 'Corporate Catering',
    price: 'From IDR 700,000/person',
    description: 'Corporate catering Bali supports offsites, board dinners, conference lunches, team-building events, product launches, and seminar catering with menus, staffing, and invoicing designed for business groups. We understand that corporate events need punctuality, dietary flexibility, clear pricing, and tax documentation. Our corporate packages include breakfast spreads, working lunches, buffet dinners, plated board meals, coffee stations, and grazing setups. We can brand the service, provide uniformed staff, and coordinate with your event schedule. Whether you are hosting twenty executives in a Seminyak villa or two hundred delegates at a Ubud conference venue, corporate catering Bali from myCHEF keeps the food professional, the service discreet, and the accounting simple.',
    href: '/catering/corporate-catering',
    accent: '#2C5F7C',
  },
  {
    image: '/generated/mychef-catering-style-babi-guling.webp',
    title: 'Babi Guling',
    price: 'From IDR 3,700,000 total',
    description: 'Babi Guling is the iconic Balinese whole-pig roast, served with lawar, nasi kuning, sate, crackling, sambals, and fresh fruit. It is a dramatic, culturally rich centerpiece for villa parties, birthdays, anniversaries, and group celebrations of 10 to 50 guests. Our team prepares the pig in the traditional style and serves it buffet-style so guests can build their own plates. Babi Guling contains pork and is not suitable for halal groups, but we can provide halal alternatives such as Nasi Campur or Ayam Betutu upon request. If you want an authentic Balinese food experience that guests talk about for years, Babi Guling catering Bali is the unmistakable choice for traditional celebrations.',
    href: '/catering/babi-guling',
    accent: '#C5A028',
  },
  {
    image: '/generated/mychef-catering-style-grazing.webp',
    title: 'Grazing Tables',
    price: 'From IDR 650,000',
    description: 'Grazing tables and charcuterie platters create an instant visual focal point for weddings, welcome drinks, poolside parties, bridal showers, and villa entertaining. We arrange artisan cheeses, cured meats, marinated vegetables, dips, honeycomb, fresh and dried fruit, nuts, crackers, sourdough, and edible flowers across a styled surface so guests can graze throughout the event. Options range from a mini grazing box for two to wedding-scale spreads for fifty or more. Vegan, vegetarian, and halal-friendly versions are available. Grazing tables Bali work especially well as a pre-dinner starter, a cocktail-hour companion, or a relaxed alternative to a formal sit-down meal when you want guests to mingle freely.',
    href: '/catering/grazing-tables',
    accent: '#6B8E5A',
  },
  {
    image: '/generated/mychef-catering-style-retreat.webp',
    title: 'Retreat Catering',
    price: 'From IDR 700,000/person/day',
    description: 'Retreat catering Bali is built for yoga retreats, wellness centers, corporate wellness trips, and multi-day group stays where nutrition, consistency, and dietary inclusivity matter. We design plant-forward menus with abundant vegetables, whole grains, lean proteins, fermented foods, and low-sugar options, while still offering indulgent treats for guests who want them. Pricing is typically per person per day and covers breakfast, lunch, dinner, snacks, and drinks across the full retreat. Our team understands retreat rhythms: early breakfasts, light lunches, nourishing dinners, and flexibility for fasting or ayurvedic preferences. We also provide buffet, family-style, or plated service depending on your schedule and group size.',
    href: '/catering/retreat-catering',
    accent: '#6B8E5A',
  },
  {
    image: '/generated/mychef-catering-style-floating.webp',
    title: 'Floating Breakfast',
    price: 'From IDR 950,000/couple',
    description: 'Floating breakfast Bali brings the island\'s most Instagram-famous dining experience directly to your private villa pool. We prepare a beautifully styled tray loaded with tropical fruit, eggs, pastries, granola, yogurt, Balinese coffee, fresh juice, and flowers, then set it floating in the water for couples, honeymooners, birthday celebrants, or small groups. Packages start for two people and can scale up to group brunches for four to ten guests on larger floating setups. Delivery, styling, and retrieval are all included, and we request 48 hours notice to arrange the freshest flowers and produce. It is a memorable, photo-ready way to start a special day in Bali without leaving your villa.',
    href: '/catering/floating-breakfast',
    accent: '#2C5F7C',
  },
]

const BBQ_PACKAGES = [
  {
    image: '/generated/pkg-bbq.webp',
    title: 'Indonesian BBQ',
    price: 'IDR 700,000/person',
    description: 'Sate lilit, sate ayam, ikan bakar, jagung bakar, sambal matah, nasi kuning, sayur urap, gado-gado, fresh fruit dessert.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
  {
    image: '/generated/sol-bbq.webp',
    title: 'International BBQ',
    price: 'IDR 700,000/person',
    description: 'Australian beef tenderloin, lamb chops, grilled prawns, salmon fillet, chicken thigh, gourmet salads, baked potato, garlic bread.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
  {
    image: '/generated/pkg-seafood.webp',
    title: 'Surf & Turf BBQ',
    price: 'IDR 850,000/person',
    description: 'Wagyu steak, lobster tail, king prawns, salmon, Mahi-mahi, larger-format sides, signature sauces, chocolate dessert station.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Plated service', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
]

const ADDONS = [
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', description: 'Professional bartender with full cocktail setup' },
  { title: 'Wagyu upgrade', price: '+ IDR 250,000/person', description: 'Upgrade any BBQ to Wagyu beef' },
  { title: 'Gluten-free upgrade', price: '+ IDR 50,000/adult', description: 'Full gluten-free menu adaptation' },
  { title: 'Plated service', price: '+ IDR 50,000/person', description: 'Upgrade from buffet to full plated service' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', description: 'Travel fee depending on area and event size' },
]

const BUFFET_PACKAGES = [
  {
    image: '/generated/aura-buffet.webp',
    title: 'Indonesian Buffet',
    price: 'IDR 700,000/person',
    description: '8 hot dishes, 4 cold dishes, dessert, fresh fruit, sambals, rice, noodles, breads.',
    includes: ['Chef', '3 service staff', 'Chafing dishes', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/pkg-italian.webp',
    title: 'International Buffet',
    price: 'IDR 750,000/person',
    description: 'Mediterranean, Asian fusion, roast station, pasta station, salads, dessert table.',
    includes: ['Chef', '4 service staff', 'Live stations', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/aura-corporate.webp',
    title: 'Live-Station Buffet',
    price: 'IDR 950,000/person',
    description: '3 live food stations, roast station, full dessert bar.',
    includes: ['Head chef', '5 service staff', 'Live stations', 'Event linens', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
]

const PLATED_PACKAGES = [
  { title: '3-Course Plated', price: 'IDR 800,000/person', description: 'Starter, main, dessert. Full table service.' },
  { title: '4-Course Plated', price: 'IDR 1,000,000/person', description: 'Amuse-bouche, starter, main, dessert.' },
  { title: '5-Course Dinner', price: 'IDR 1,300,000/person', description: 'Amuse-bouche, starter, fish, meat, dessert.' },
]

const DROPOFF_PACKAGES = [
  { title: 'Family Dinner Drop-Off', price: 'IDR 700,000/person', description: '4 to 8 people. Hot main, 2 sides, dessert, bread.' },
  { title: 'Dinner Party Drop-Off', price: 'IDR 700,000/person', description: '8 to 16 people. Starter, main, 3 sides, dessert.' },
  { title: 'Grazing Dinner Drop-Off', price: 'IDR 700,000/person', description: '8+ people. Charcuterie, cheese board, 2 hot mains, sides, dessert.' },
]

const BABIGULING_PACKAGES = [
  { title: 'Small', price: 'IDR 3,700,000', description: '10 to 15 guests. Whole pig, lawar, nasi kuning, sate, sambals, dessert, fruit.' },
  { title: 'Medium', price: 'IDR 5,000,000', description: '25 to 30 guests. Extended sides and larger portions.' },
  { title: 'Large', price: 'IDR 7,000,000', description: '40 to 50 guests. Full spread with extended sides.' },
]

const GRAZING_PACKAGES = [
  { title: 'Mini Grazing Box', price: 'IDR 650,000', description: '2 pax. Perfect for couples or small welcome.' },
  { title: 'Cheese & Cold Cuts Platter', price: 'IDR 2,700,000', description: '10 pax. 4-6 cheeses, 3-4 cured meats, dips, fruit, nuts.' },
  { title: 'Wedding-Scale Grazing', price: 'IDR 700,000/person', description: '20 to 50 pax. Full visual spread with edible flowers.' },
]

const FLOATING_PACKAGES = [
  { title: 'Floating Breakfast for 2', price: 'IDR 950,000/couple', description: 'Tropical fruit, eggs, pastries, coffee, juice, flowers.' },
  { title: 'Floating Brunch for 2', price: 'IDR 1,400,000/couple', description: 'Extended brunch with champagne option.' },
  { title: 'Floating Group Brunch', price: 'IDR 750,000/person', description: '4 to 10 guests. Large floating tray setup.' },
]

const DAILY_CHEF_PACKAGES = [
  {
    title: 'Breakfast Only',
    price: 'IDR 600,000',
    period: '/hour',
    desc: 'Fresh tropical fruits, pastries, eggs any style, Balinese coffee. ~2 hours/day.',
    bestFor: 'Couples, light mornings, villa guests who lunch out',
  },
  {
    title: 'Half Board',
    price: 'IDR 1,100,000',
    period: '/hour',
    desc: 'Breakfast + dinner. Perfect for families who lunch out. ~4–5 hours/day.',
    bestFor: 'Families, groups who explore Bali during the day',
  },
  {
    title: 'Full Board',
    price: 'IDR 1,500,000',
    period: '/hour',
    desc: 'Breakfast, lunch, and dinner. The complete villa experience. ~6–8 hours/day.',
    bestFor: 'Extended stays, retreats, families who want full coverage',
  },
  {
    title: 'Custom',
    price: 'Quote',
    period: '',
    desc: 'Special occasions, dietary programs, or extended stays. We design around you.',
    bestFor: 'Multi-week stays, wellness programs, special diets',
  },
]

const DAILY_CHEF_INCLUDES = [
  'Private villa chef (dedicated to your villa)',
  'Full grocery shopping & ingredient sourcing',
  'Breakfast, lunch & dinner preparation',
  'Table service & presentation',
  'Full kitchen cleanup after every meal',
  'Menu planning based on your preferences',
  'Dietary customization at no extra cost',
  'Fresh, local ingredients + select imports',
]

const DAILY_CHEF_ADDONS = [
  { icon: Wine, title: 'Bartender & Cocktails', desc: 'Mixologist, full bar setup, signature drinks. From IDR 850K.' },
  { icon: Users, title: 'Waiters & Service Staff', desc: 'Professional waiters for plated or buffet service. 1 per 10 guests.' },
  { icon: Flower2, title: 'Table Styling & Flowers', desc: 'Linens, candles, floral arrangements, and table decor.' },
  { icon: CakeSlice, title: 'Custom Cakes', desc: 'Birthday, anniversary, or celebration cakes. 3-day notice.' },
  { icon: Utensils, title: 'Breakfast Service', desc: 'Morning after? We do villa breakfast too. Continental or full.' },
  { icon: Flame, title: 'Live BBQ Station', desc: 'Chef grills at your villa. Whole fish, ribs, prawns, skewers.' },
]

const PRICING_TABLE = [
  { name: 'Indonesian BBQ', price: 'IDR 700,000/person', min: '10 guests', bestFor: 'Villa BBQ' },
  { name: 'International BBQ', price: 'IDR 700,000/person', min: '10 guests', bestFor: 'Villa BBQ' },
  { name: 'Surf & Turf BBQ', price: 'IDR 850,000/person', min: '10 guests', bestFor: 'Special occasions' },
  { name: 'Indonesian Buffet', price: 'IDR 700,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'International Buffet', price: 'IDR 750,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'Live-Station Buffet', price: 'IDR 950,000/person', min: '30 guests', bestFor: 'Larger-format events' },
  { name: '3-Course Plated', price: 'IDR 800,000/person', min: '10 guests', bestFor: 'Seated dinners' },
  { name: '4-Course Plated', price: 'IDR 1,000,000/person', min: '10 guests', bestFor: 'Milestone dinners' },
  { name: '5-Course Dinner', price: 'IDR 1,300,000/person', min: '10 guests', bestFor: 'Fine dining' },
  { name: 'Family Drop-Off', price: 'IDR 700,000/person', min: '4 guests', bestFor: 'Private meals' },
  { name: 'Dinner Party Drop-Off', price: 'IDR 700,000/person', min: '8 guests', bestFor: 'Small parties' },
  { name: 'Babi Guling Small', price: 'IDR 3,700,000 total', min: '10 guests', bestFor: 'Traditional events' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose your package', desc: 'Pick BBQ, buffet, plated, drop-off, or specialty catering.', icon: Utensils },
  { step: '02', title: 'Send details', desc: 'Share date, area, guest count, and any dietary needs.', icon: Calendar },
  { step: '03', title: 'Add extras', desc: 'Bartender, Wagyu upgrade, gluten-free, plated service.', icon: Sparkles },
  { step: '04', title: 'Confirm price', desc: 'We send final quote including travel fees and add-ons.', icon: CreditCard },
  { step: '05', title: 'Pay deposit', desc: '50% deposit to lock your date. Balance due on the day.', icon: ShieldCheck },
  { step: '06', title: 'We handle everything', desc: 'Chef arrives, cooks, serves, and cleans up. You relax.', icon: ChefHat },
]

const AREAS = [
  'Canggu', 'Seminyak', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Sanur', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar',
]

const FAQS = [
  { q: 'Do your prices include chef and staff?', a: 'Yes. All BBQ, buffet, and plated packages include a private chef and service staff. Drop-off catering does not include on-site staff — that is the point.' },
  { q: 'Do you provide catering at villas?', a: 'Yes. We specialize in villa catering across Bali. We bring all equipment, set up in your villa garden or pool area, and clean up after.' },
  { q: 'Can I book only drop-off food?', a: 'Absolutely. Our drop-off catering is designed for guests who want great food without staff staying in the villa.' },
  { q: 'What is the minimum guest count?', a: 'BBQ: 10 guests (Seminyak/Canggu & Ubud), 20 (Uluwatu). Buffet: 30 guests. Plated: 10 guests. Drop-off: 4 guests. Babi Guling: 10 guests.' },
  { q: 'Do you offer halal or pork-free menus?', a: 'Yes. We offer fully halal and pork-free BBQ, buffet, and plated menus. Babi Guling contains pork and is not halal.' },
  { q: 'Does Babi Guling contain pork?', a: 'Yes. Babi Guling is a traditional Balinese whole-pig roast and contains pork. It is not suitable for halal groups.' },
  { q: 'Can you handle gluten-free or allergies?', a: 'Yes. We accommodate gluten-free, nut-free, dairy-free, shellfish-free, and other allergies. Please tell us when booking.' },
  { q: 'Do you bring equipment?', a: 'Yes. We bring grills, chafing dishes, tables, linens, cutlery, glassware, and everything needed for service.' },
  { q: 'Do you clean up after the event?', a: 'Yes. Full cleanup is included in all serviced packages (BBQ, buffet, plated). Drop-off does not include cleanup.' },
  { q: 'Do you charge travel fees?', a: 'Travel fees apply for areas outside Seminyak/Canggu: IDR 250,000 to 700,000 depending on distance and event size.' },
  { q: 'How much deposit is required?', a: 'A 50% deposit is required to confirm your booking. The balance is due on the day of the event.' },
  { q: 'How far in advance should I book?', a: 'We recommend 3-7 days for BBQ and buffet. 2+ weeks for weddings and large events. Drop-off can often be arranged next-day if ordered by 4pm.' },
  { q: 'Is this a real chef or just delivered food?', a: 'A real chef grills at your villa. Not pre-cooked. Not delivered from a kitchen. Live fire, your pool, your garden. The chef arrives 3 hours early, preps everything on site, and serves course by course.' },
  { q: 'How do I know the food is safe?', a: 'All chefs are food-safety certified. We use separate prep for allergies. We have served 500+ villa events with a strong safety record. Every ingredient is purchased fresh the morning of your event.' },
  { q: 'What if it rains?', a: 'We bring a kitchen tent for outdoor setups. Or we move indoors if your villa has covered space. We plan for Bali weather — it is part of the service, not an extra charge.' },
  { q: 'Can I see a menu before booking?', a: 'Yes. We send a full menu proposal with exact pricing before you pay anything. No commitment required to review. Most quotes are sent within 2 hours.' },
  { q: 'What if my guest count changes?', a: 'Final headcount is due 48 hours before your event. We adjust portions and staffing. No penalty for small changes. Large increases may affect minimums.' },
  { q: 'Why myCHEF and not another caterer?', a: 'We own the full stack — chefs, equipment, logistics, staff training. No middlemen. That is why we can quote fast, deliver consistently, and fix issues immediately. Most other caterers outsource at least one layer.' },
  { q: 'What is the difference between One-Time Catering and Daily Chef Service?', a: 'One-Time Catering is for a single event — a BBQ night, a birthday dinner, a wedding buffet. The chef arrives, cooks, serves, and leaves. Daily Chef Service is for ongoing stays — the same chef comes to your villa every day for breakfast, lunch, and dinner throughout your holiday. Daily chef is billed hourly; one-time catering is billed per person.' },
  { q: 'Which service is right for me?', a: 'If you are celebrating one special occasion, choose One-Time Catering. If you are staying in a villa for multiple days and want every meal handled, choose Daily Chef Service. Not sure? Message us on WhatsApp and we will guide you in under 2 minutes.' },
  { q: 'How much does catering in Bali cost?', a: 'Most of our catering packages start around IDR 700,000 per person for BBQ, buffet, and drop-off options. Plated set menus start at IDR 800,000 per person, live-station buffets around IDR 950,000 per person, and premium add-ons such as Wagyu or lobster increase the price. All quotes include chef, staff, ingredients, equipment, setup, service, cleanup, and 21% tax. Travel fees are added for areas outside Canggu and Seminyak.' },
  { q: 'Is the 21% tax included in your published prices?', a: 'Yes. The prices shown on our website include tax and service charge. The quote you receive before paying is the final price, unless you add guests or upgrade ingredients after booking.' },
  { q: 'Can I get a quote without committing?', a: 'Yes. We send menu proposals and quotes with no obligation. You can review, request changes, or decline without any pressure.' },
  { q: 'Do you cater for children?', a: 'Yes. We can prepare milder spice levels, smaller portions, familiar dishes such as pasta or chicken, and early meal times for children. Let us know ages and preferences when booking.' },
  { q: 'Do you offer vegetarian catering?', a: 'Yes. We offer fully vegetarian BBQ, buffet, plated, and grazing menus. Dishes are designed as complete meals, not just side salads.' },
  { q: 'Do you offer vegan catering?', a: 'Yes. Our vegan menus use plant proteins, coconut-based sauces, dairy alternatives, and creative vegetables. We also label dishes clearly so vegan guests can eat with confidence.' },
  { q: 'Can you provide halal-friendly catering?', a: 'Yes. We offer halal and pork-free menus. Please note that Babi Guling contains pork and is not halal. For halal groups we suggest Indonesian BBQ, Nasi Campur, or Ayam Betutu.' },
  { q: 'Can we bring our own alcohol?', a: 'Yes. You can supply your own alcohol. We can also arrange bartenders, mixologists, glassware, and ice as add-ons.' },
  { q: 'Do you provide bar service and cocktails?', a: 'Yes. We offer bartender packages, mixology services, open-bar setups, and signature cocktail design. See our Bartender Service page for details.' },
  { q: 'What kitchen facilities does my villa need?', a: 'For drop-off catering, a basic kitchen is enough. For BBQ, buffet, and plated service, we bring our own grills, burners, chafing dishes, and prep tables. We just need access to water, power, and enough outdoor or covered space for setup.' },
  { q: 'Can you cater on the beach or at a venue without a kitchen?', a: 'Yes. We can build a mobile kitchen at beach clubs, gardens, and event spaces. Larger off-site events may require a generator and advance planning.' },
  { q: 'Do you cater weddings in Bali?', a: 'Yes. We cater rehearsal dinners, welcome drinks, wedding receptions, and post-wedding brunches across Bali. See our Wedding Catering options for package details.' },
  { q: 'Do you cater corporate retreats and offsites?', a: 'Yes. We provide multi-day retreat catering, corporate dinners, conference lunches, and team-building BBQs with tax invoicing.' },
  { q: 'Can you cater a small dinner for 4 to 6 guests?', a: 'Yes. For very small groups we recommend drop-off catering, a private chef dinner, or a romantic dining experience. plated menus can also work for intimate celebrations.' },
  { q: 'What is the largest event you can cater?', a: 'We regularly cater events for 100 to 250 guests and can scale beyond that for large weddings, conferences, and celebrations with sufficient lead time.' },
  { q: 'Do I need to provide plates, cutlery, and glassware?', a: 'No. We bring all necessary plates, cutlery, glassware, napkins, and serving equipment as part of serviced packages.' },
  { q: 'What happens to leftovers?', a: 'We pack safe leftovers in containers for you to keep. Perishable items that have been sitting out too long are discarded for food safety reasons.' },
  { q: 'How long does setup and cleanup take?', a: 'Setup usually takes 2 to 3 hours before service. Cleanup takes 1 to 2 hours after the last guest finishes. For large events we may arrive earlier.' },
  { q: 'Can I change the menu after booking?', a: 'Yes, within reason. Final menus are confirmed several days before the event. Small adjustments are usually free; major ingredient changes may affect pricing.' },
  { q: 'Do you offer tastings before a wedding or large event?', a: 'Yes. Complimentary tastings are available for events over 40 guests. Smaller tastings can be arranged for a fee that is credited against your booking.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfer, credit card, and Wise. Deposits confirm your date; balances are settled on or before the event day.' },
  { q: 'Can I book last-minute catering?', a: 'Drop-off catering can often be arranged next-day if ordered by 4pm. BBQ and buffet require 3 to 7 days notice. Weddings and large events should be booked 2+ weeks ahead.' },
  { q: 'Do you cater outside Bali?', a: 'Our primary service area is Bali. Large or special events in Jakarta, Surabaya, or Lombok can sometimes be arranged by request.' },
  { q: 'What if a guest has a severe allergy?', a: 'Tell us when booking. We prepare allergy-safe meals separately, use clean utensils, and label dishes. For severe allergies we may ask to confirm an emergency plan with the guest.' },
  { q: 'Do you provide waiting staff?', a: 'Yes. Waiters are included or available for buffet, plated, and canape service. We typically provide one waiter per ten guests for seated events.' },
  { q: 'Can you arrange a butler for a formal dinner?', a: 'Yes. We can provide trained butlers for formal villa dinners, wine service, and VIP events. See our Butler Service page.' },
  { q: 'Do you do floating breakfast outside villas?', a: 'Floating breakfast is designed for private villa pools. We can also create styled brunch setups for garden or terrace locations.' },
  { q: 'Can you create a themed menu?', a: 'Yes. We can design menus around Italian, French, Japanese, Indonesian, Mexican, Middle Eastern, or fully customised themes.' },
  { q: 'How do I confirm my booking?', a: 'Confirm by paying the 50% deposit. We then send a booking summary with date, menu, guest count, location, and balance due.' },
  { q: 'What information do you need for a quote?', a: 'Date, location, number of guests, event type, preferred cuisine, dietary needs, and whether you want full service or drop-off.' },
  { q: 'Can you provide event planning as well as catering?', a: 'Yes. For complex events we coordinate timeline, furniture, flowers, entertainment, photography, and additional staff. See our Event Planning and Optional Services sections.' },
  { q: 'Do you cater breakfast and brunch?', a: 'Yes. We offer villa breakfast service, floating breakfast, brunch buffets, and healthy retreat breakfast spreads.' },
  { q: 'What makes villa catering better than going to a restaurant?', a: 'No transport, no fixed menu, no closing time, no splitting the group, and no surprises. You get privacy, custom menus, and full service in your own space.' },
]

/* ── Decision Helper Data ── */
const DECISION_QUESTIONS = [
  {
    question: 'How long are you staying in the villa?',
    options: [
      { label: '1–2 nights', result: 'one-time' },
      { label: '3+ nights', result: 'daily' },
    ],
  },
  {
    question: 'What kind of meal experience do you want?',
    options: [
      { label: 'One special dinner or party', result: 'one-time' },
      { label: 'Every meal handled during my stay', result: 'daily' },
    ],
  },
  {
    question: 'How important is having the same chef every day?',
    options: [
      { label: 'Not important — I want the best chef for each event', result: 'one-time' },
      { label: 'Very important — I want consistency', result: 'daily' },
    ],
  },
]

/* ── Catering Style Decision Guide Data ── */
const GUEST_RANGES = [
  { value: '2-4', label: '2–4 guests', min: 2, max: 4 },
  { value: '5-10', label: '5–10 guests', min: 5, max: 10 },
  { value: '10-20', label: '10–20 guests', min: 10, max: 20 },
  { value: '20-50', label: '20–50 guests', min: 20, max: 50 },
  { value: '50-100', label: '50–100 guests', min: 50, max: 100 },
  { value: '100-250', label: '100–250 guests', min: 100, max: 250 },
  { value: '250+', label: '250+ guests', min: 250, max: 9999 },
]

const EVENT_TYPES = [
  { value: 'birthday', label: 'Birthday party' },
  { value: 'wedding', label: 'Wedding or reception' },
  { value: 'corporate', label: 'Corporate event or dinner' },
  { value: 'retreat', label: 'Wellness or yoga retreat' },
  { value: 'villa-holiday', label: 'Luxury villa holiday' },
  { value: 'family', label: 'Family gathering' },
  { value: 'christmas-nye', label: 'Christmas or New Year' },
  { value: 'shower', label: 'Baby or bridal shower' },
  { value: 'anniversary', label: 'Anniversary or milestone' },
  { value: 'engagement', label: 'Engagement party' },
  { value: 'networking', label: 'Networking event' },
  { value: 'product-launch', label: 'Product launch' },
  { value: 'seminar', label: 'Seminar or training' },
]

function getCateringRecommendation(guests: string, event: string): { title: string; description: string; href: string } {
  const map: Record<string, Record<string, { title: string; description: string; href: string }>> = {
    '2-4': {
      default: { title: 'Private Chef or Fine Dining', description: 'An intimate multi-course meal prepared in your villa. Perfect for couples, honeymoons, and small celebrations.', href: '/villa-chef' },
      birthday: { title: 'Private Chef Dinner or Grazing Table', description: 'A chef-prepared meal or styled grazing platter for a relaxed birthday in your villa.', href: '/catering/grazing-tables' },
      wedding: { title: 'Private Chef Tasting Menu', description: 'An elegant tasting menu for a tiny wedding party or elopement dinner.', href: '/catering/plated-catering' },
      anniversary: { title: 'Romantic Private Dining', description: 'A candlelit multi-course dinner with your own chef and waiter.', href: '/blog/romantic-dinner-bali-private-chef' },
    },
    '5-10': {
      default: { title: 'BBQ or Plated Dinner', description: 'Live grilling or a seated set menu for a small group. Great energy and easy logistics.', href: '/catering/bbq-catering' },
      birthday: { title: 'BBQ Catering', description: 'Casual, social, and ideal for a villa birthday party with friends.', href: '/catering/bbq-catering' },
      'villa-holiday': { title: 'Daily Villa Chef', description: 'Have a chef handle breakfast, lunch, and dinner across your stay.', href: '/villa-chef' },
      family: { title: 'Family-Style Villa Catering', description: 'Shared dishes served to the table for a relaxed family meal.', href: '/catering/villa-catering' },
      breakfast: { title: 'Floating Breakfast', description: 'Photo-ready breakfast served in your private pool.', href: '/catering/floating-breakfast' },
    },
    '10-20': {
      default: { title: 'BBQ or Plated Set Menu', description: 'A live grill party or a seated multi-course dinner with table service.', href: '/catering/bbq-catering' },
      wedding: { title: 'Plated Dinner or Grazing Table', description: 'Elegant plated service for a rehearsal dinner or grazing for welcome drinks.', href: '/catering/plated-catering' },
      corporate: { title: 'Plated Board Dinner or Buffet', description: 'Professional service with flexible menu choices.', href: '/catering/corporate-catering' },
      birthday: { title: 'BBQ Catering with Grazing Starter', description: 'Grazing table for arrival, followed by live grill.', href: '/catering/bbq-catering' },
    },
    '20-50': {
      default: { title: 'BBQ, Buffet, or Plated Dinner', description: 'The sweet spot where almost every format works. Choose based on formality.', href: '/catering/bbq-catering' },
      wedding: { title: 'Buffet or Plated Reception', description: 'Structured service for wedding meals with multiple courses.', href: '/catering/buffet' },
      corporate: { title: 'International Buffet', description: 'Efficient service, varied menu, and easy dietary accommodation.', href: '/catering/corporate-catering' },
      birthday: { title: 'Live BBQ or Babi Guling', description: 'A festive, social centerpiece for villa birthday parties.', href: '/catering/bbq-catering' },
      retreat: { title: 'Retreat Buffet or Family-Style', description: 'Nourishing, plant-forward menus served for wellness groups.', href: '/catering/retreat-catering' },
    },
    '50-100': {
      default: { title: 'Buffet or Live-Station Catering', description: 'Smooth service for larger groups with multiple food stations.', href: '/catering/buffet' },
      wedding: { title: 'Wedding Buffet or Live Stations', description: 'Variety, visual impact, and efficient guest flow.', href: '/catering/buffet' },
      corporate: { title: 'Corporate Buffet or Plated Dinner', description: 'Scalable formats with full staffing and tax invoicing.', href: '/catering/corporate-catering' },
      'christmas-nye': { title: 'Festive Buffet or Grazing Tables', description: 'Large celebratory spreads with canapes, mains, and desserts.', href: '/catering/buffet' },
    },
    '100-250': {
      default: { title: 'Large-Format Buffet with Live Stations', description: 'Full event catering with multiple stations, large service team, and event coordination.', href: '/catering/buffet' },
      wedding: { title: 'Wedding Catering Buffet', description: 'Complete reception catering with starters, mains, desserts, and service.', href: '/catering/buffet' },
      corporate: { title: 'Corporate Event Catering', description: 'Conference lunch, gala dinner, or product launch with full logistics.', href: '/catering/corporate-catering' },
      retreat: { title: 'Retreat Catering Program', description: 'Multi-day catering with breakfast, lunch, dinner, and snacks.', href: '/catering/retreat-catering' },
    },
    '250+': {
      default: { title: 'Large Event Catering', description: 'Bespoke large-scale catering with custom kitchen setup, extensive staffing, and event management support.', href: '/events' },
      wedding: { title: 'Large Wedding Catering', description: 'Full-service wedding catering for 250+ guests.', href: '/catering/buffet' },
      corporate: { title: 'Conference & Large Corporate Catering', description: 'Gala dinners, multi-day conferences, and large-scale catering.', href: '/catering/corporate-catering' },
    },
  }
  const byGuests = map[guests] || map['20-50']
  return byGuests[event] || byGuests.default
}

export default function CateringMainPage() {
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<'one-time' | 'daily'>('one-time')
  const [decisionAnswers, setDecisionAnswers] = useState<(string | null)[]>([null, null, null])
  const [decisionResult, setDecisionResult] = useState<'one-time' | 'daily' | null>(null)

  // Catering style decision guide state
  const [styleGuests, setStyleGuests] = useState<string>('')
  const [styleEvent, setStyleEvent] = useState<string>('')
  const styleRecommendation = styleGuests && styleEvent ? getCateringRecommendation(styleGuests, styleEvent) : null

  /* Scroll to #daily-chef on mount if hash present */
  useLayoutEffect(() => {
    if (location.hash === '#daily-chef') {
      setActiveTab('daily')
      const timer = setTimeout(() => {
        const el = document.getElementById('daily-chef')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location.hash])

  // No GSAP animations are wired on this page currently.

  const handleDecisionAnswer = (qIndex: number, result: 'one-time' | 'daily') => {
    const next = [...decisionAnswers]
    next[qIndex] = result
    setDecisionAnswers(next)

    const counts: Record<string, number> = { 'one-time': 0, daily: 0 }
    next.forEach((a) => { if (a) counts[a]++ })
    if (counts['one-time'] + counts.daily >= 2) {
      setDecisionResult(counts['one-time'] >= counts.daily ? 'one-time' : 'daily')
    }
  }

  const resetDecision = () => {
    setDecisionAnswers([null, null, null])
    setDecisionResult(null)
  }

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title={getPageMeta('catering').title}
        description={getPageMeta('catering').description}
        canonical={getPageMeta('catering').canonical}
        ogImage={getPageMeta('catering').ogImage}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Villa Catering Bali',
            description: 'Chef-led catering for Bali villas, events, BBQ nights, and private gatherings with flexible formats from buffet to plated service. myCHEF.id manages menus, staffing, setup, and cleanup across Bali.',
            url: `${SITE}/catering`,
            lowPrice: '350000',
            highPrice: '3700000',
            unitText: 'per person',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book Catering in Bali',
            description: 'Book professional catering for your Bali villa or event in 6 easy steps.',
            totalTime: 'PT15M',
            steps: HOW_IT_WORKS.map(s => ({ name: s.title, text: s.desc })),
          }),
          breadcrumbSchema('Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering' }]} />

      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-catering-hero.webp"
            alt="Private chef grilling seafood at a Bali villa poolside sunset catering by myCHEF"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high" loading="eager"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/25 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="bg-black/60 rounded-3xl px-8 md:px-12 py-12 md:py-16 backdrop-blur-sm">
            <Breadcrumb items={[{ label: 'Catering' }]} theme="dark" className="justify-center mb-8" decorative />
            <p className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              myCHEF Events & Catering
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Events & Catering Services<br />
              <span className="italic">Built for Groups, Parties & Hosted Dinners.</span>
            </h1>
            <div className="text-base md:text-lg text-white/[85%] max-w-3xl mx-auto space-y-4">
              <p>
                myCHEF is Bali's premium catering partner for villas, weddings, corporate events, wellness retreats, and private celebrations. From an intimate poolside BBQ for ten in Canggu to a multi-course plated wedding reception for two hundred in Uluwatu, we bring the entire kitchen, service team, and dining experience to your location. Our chef-led catering covers every detail: menu design, ingredient sourcing, on-site cooking, professional service, full cleanup, and even bartenders, waiters, and grazing tables if your event calls for more.
              </p>
              <p>
                What makes our Catering Bali service different is that we own the full stack. We employ and train our own chefs, service staff, and logistics team. There are no middlemen, no outsourced crews, and no last-minute surprises. Every dish is cooked fresh at your villa, every allergy is logged, and every quote is confirmed in writing before you pay a deposit. Whether you need luxury catering Bali for a high-end villa holiday, event catering Bali for a product launch, or private catering Bali for a family birthday, we match the service style, menu, and staffing to your guest count and venue.
              </p>
              <p>
                We operate across Seminyak, Canggu, Berawa, Pererenan, Ubud, Sanur, Nusa Dua, Jimbaran, Uluwatu, Ungasan, Kerobokan, Sidemen, Munduk, and North Bali. Travel fees are disclosed upfront, menus are customised to your group, and our team has delivered over five hundred villa events since we started. Browse our catering styles below, use the decision guide to choose the right format, or message us on WhatsApp for a same-day quote.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                data-source="catering-hero"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
              </a>
              <Link
                to="/villa-chef"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ArrowRight className="w-4 h-4" /> Need a Private Villa Chef?
              </Link>
            </div>
            <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-white/15 bg-black/25 p-5 md:p-6 text-left backdrop-blur-sm">
              <p className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Not sure which service?
              </p>
              <p className="text-sm md:text-base text-white/[85%] leading-relaxed mb-4">
                Choose Events & Catering for BBQs, buffet service, plated group dinners, weddings, and formal villa setups. Choose <span className="font-semibold text-white">Private Villa Dining</span> for 1–4 guests, family stays, and everyday breakfast, lunch, or dinner with a chef in your villa.
              </p>
              <Link
                to="/villa-chef"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              >
                <ArrowRight className="w-4 h-4" /> View Private Villa Dining
              </Link>
            </div>
            <TrustRow
              items={['500+ villa events served', 'Guest-loved service', 'Chef + staff included', 'Same-day quotes', 'Bali-wide service']}
              dark
            />
          </div>
        </div>
      </section>

      {/* ═══════ CROSS-PROMOTION: FINE DINING ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#FAFAF8] rounded-3xl border border-[#E8E6E3] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p
                  className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  Elevated Experience
                </p>
                <h2
                  className="text-2xl md:text-3xl mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Looking for a Multi-Course Tasting Menu?
                </h2>
                <p className="text-[#4A4745] text-sm md:text-base leading-relaxed mb-6">
                  For groups of 6 or more, our Private Fine Dining experience offers Italian, French, Mediterranean, and Wagyu tasting menus prepared by a Michelin-trained chef in your villa.
                </p>
                <Link
                  to="/fine-dining"
                  data-source="catering-cross-promotion"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A028] uppercase tracking-wider hover:text-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Explore Fine Dining <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative min-h-[240px] md:min-h-full">
                <OptimizedImage
                  src="/generated/mychef-misc-bali-hub-fine-dining.webp"
                  alt="Elegant plated fine dining course served at a Bali villa by myCHEF"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ RISK REVERSAL ═══════ */}
      <CateringRiskReversal />

      {/* ═══════ SECTION 2: SERVICE TABS ═══════ */}
      <section id="service-tabs" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHOOSE YOUR SERVICE"
            title="Two Ways to Eat Well in Your Villa"
            subtitle="Whether you need one spectacular meal or a chef every day of your stay — we have you covered."
          />

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#FAFAF8] rounded-full p-1 border border-[#E8E6E3]">
              <button
                type="button"
                onClick={() => setActiveTab('one-time')}
                className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] ${
                  activeTab === 'one-time'
                    ? 'bg-[#6B8E5A] text-white shadow-md'
                    : 'text-[#4A4745] hover:text-[#1A1A1A]'
                }`}
              >
                <PartyPopper className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                One-Time Catering
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('daily')}
                className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                  activeTab === 'daily'
                    ? 'bg-[#C5A028] text-[#1A1A1A] shadow-md'
                    : 'text-[#4A4745] hover:text-[#1A1A1A]'
                }`}
              >
                <Home className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                Daily Chef Service
              </button>
            </div>
          </div>

          {/* ONE-TIME CATERING PANEL */}
          {activeTab === 'one-time' && (
            <div className="space-y-16">
              {/* One-time intro */}
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  One-Time Catering
                </h3>
                <p className="text-[#4A4745] mb-2">
                  For events, parties, special occasions, and single meals. The chef arrives, cooks, serves, and cleans up — then leaves.
                </p>
                <p className="text-[#6B8E5A] font-semibold">Starting from IDR 700,000 per person</p>
              </div>

              {/* Styles grid */}
              <div>
                <h4 className="text-center text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-8 font-semibold">
                  Choose Your Catering Style
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {CATERING_STYLES.map((style) => (
                    <CateringPackageCard key={style.title} {...style} />
                  ))}
                </div>
              </div>

              {/* BBQ Preview */}
              <div className="bg-[#FAFAF8] rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h4 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>BBQ Catering: The Villa Crowd-Pleaser</h4>
                  <p className="text-[#4A4745] text-sm max-w-2xl mx-auto">
                    BBQ is the easiest way to feed a villa group properly. Live, social, flexible — works for family dinners, birthdays, and villa parties.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {BBQ_PACKAGES.map((pkg) => (
                    <CateringPackageCard key={pkg.title} {...pkg} href={bookingHref(pkg.title)} cta="Select package" />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    to="/catering/bbq-catering"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    View BBQ packages <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Buffet Preview */}
              <div className="bg-white rounded-3xl border border-[#E8E6E3] p-8 md:p-12">
                <div className="text-center mb-8">
                  <h4 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Buffet Catering for Larger Groups</h4>
                  <p className="text-[#4A4745] text-sm max-w-2xl mx-auto">
                    For weddings, villa events, corporate dinners, and larger groups. Smooth service, food available without slowing the event.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {BUFFET_PACKAGES.map((pkg) => (
                    <CateringPackageCard key={pkg.title} {...pkg} href={bookingHref(pkg.title)} cta="Select package" />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    to="/catering/buffet"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    View buffet packages <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* One-time CTA */}
              <div className="text-center">
                <a
                  href={WA_LINK}
                  target="_blank"
              data-source="catering-package"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
                </a>
              </div>
            </div>
          )}

          {/* DAILY CHEF SERVICE PANEL */}
          {activeTab === 'daily' && (
            <div id="daily-chef" className="space-y-16">
              {/* Daily intro */}
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Daily Chef Service
                </h3>
                <p className="text-[#4A4745] mb-2">
                  Your chef shops, cooks, and cleans — breakfast, lunch, and dinner. You see every grocery receipt. No meal planning. No dishes. Just great food every day.
                </p>
                <p className="text-[#C5A028] font-semibold">IDR 600K/hour · Groceries at cost</p>
              </div>

              {/* Daily packages */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {DAILY_CHEF_PACKAGES.map((pkg) => (
                  <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center hover:shadow-lg transition-all flex flex-col">
                    <h4 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h4>
                    <p className="text-[#C5A028] font-semibold text-lg mb-1">{pkg.price}<span className="text-sm">{pkg.period}</span></p>
                    <p className="text-[#4A4745] text-sm mb-4 flex-1">{pkg.desc}</p>
                    <p className="text-xs text-[#4A4745]/80 mb-4">Best for: {pkg.bestFor}</p>
                    <a
                      href={WA_DAILY_CHEF_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all"
                    >
                      <Calendar className="w-4 h-4" /> Enquire
                    </a>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div className="bg-white rounded-3xl border border-[#E8E6E3] p-8 md:p-12">
                <h4 className="text-center text-xl md:text-2xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What Is Included
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {DAILY_CHEF_INCLUDES.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl">
                      <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4A4745]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Groceries billed at cost.</strong> You see every receipt. No markup, no hidden fees. The hourly rate covers chef time, cooking, service, and cleanup.
                  </p>
                </div>
              </div>

              {/* Daily chef add-ons */}
              <div>
                <h4 className="text-center text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-8 font-semibold">
                  Optional Add-Ons
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {DAILY_CHEF_ADDONS.map((addon) => (
                    <div key={addon.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                      <addon.icon className="w-6 h-6 text-[#C5A028] mb-3" />
                      <h5 className="font-semibold text-sm mb-1">{addon.title}</h5>
                      <p className="text-sm text-[#4A4745]">{addon.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How daily chef works */}
              <div className="bg-[#FAFAF8] rounded-3xl p-8 md:p-12">
                <h4 className="text-center text-xl md:text-2xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  How Daily Chef Works
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {[
                    { step: '01', title: 'Message us', desc: 'Send your villa, dates, and guest count. We reply within the hour.', icon: MessageCircle },
                    { step: '02', title: 'We build your plan', desc: 'Menus designed for your dietary needs and daily schedule.', icon: Utensils },
                    { step: '03', title: 'Chef shops & cooks', desc: 'Groceries sourced that morning. Chef arrives, cooks, serves, cleans.', icon: ChefHat },
                    { step: '04', title: 'You relax', desc: 'No grocery runs. No dishes. No planning. Great food every day.', icon: Sparkles },
                  ].map((step) => (
                    <div key={step.step} className="text-center">
                      <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-[#C5A028]" />
                      </div>
                      <span className="text-[#C5A028] text-xs font-bold tracking-wider">{step.step}</span>
                      <h5 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h5>
                      <p className="text-xs text-[#4A4745]">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily CTA */}
              <div className="text-center">
                <a
                  href={WA_DAILY_CHEF_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Get Your Daily Chef Quote in 1 Hour
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MID-PAGE CTA: After service tabs */}
      <section className="py-16 md:py-20 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#6B8E5A] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Not Sure What You Need?</p>
          <h3 className="text-2xl md:text-3xl mb-4 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>We Will Match the Right Service to Your Stay</h3>
          <p className="text-[#4A4745] max-w-xl mx-auto mb-6">
            One-time BBQ for a birthday, or a daily chef for your whole holiday? Tell us your dates and guest count and we will recommend the right option — with a clear quote within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-service-tabs-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
              <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
            </a>
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E6E3] text-[#1A1A1A] text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white transition-all">
              Get a Structured Quote
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#4A4745]">
            <Link to="/recommended-services" className="underline-offset-4 hover:text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">
              Not sure? Let us recommend →
            </Link>
            <Link to="/villa-event-packages" className="underline-offset-4 hover:text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">
              Want it all handled? See villa event packages →
            </Link>
            <Link to="/contact" className="underline-offset-4 hover:text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">
              View contact options
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: WHAT IS CATERING? ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="THE BASICS"
            title="What Is Catering?"
            subtitle="Catering means bringing prepared food, service staff, equipment, and the full dining experience to a location of your choice. In Bali, that usually means your villa, event space, retreat venue, or beach club."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Catering vs Restaurants</h3>
              <p className="text-sm leading-relaxed">
                A restaurant fixes the menu, the pace, the seating, and the noise level. You travel to it, wait for a table, and split large groups across several tables. Catering flips that model: the restaurant comes to you. You choose the location, the menu, the timing, and the service style. The kitchen is built on-site, the staff works only for your guests, and the event moves at your pace. For villa holidays, weddings, and corporate events in Bali, catering is usually more relaxed, more private, and often more cost-effective for groups of eight or more.
              </p>
            </div>
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Private Chef vs Catering</h3>
              <p className="text-sm leading-relaxed">
                A private chef typically works inside your villa kitchen for a small group or daily service, buying groceries and cooking meals throughout your stay. Catering is event-based: a larger team arrives for a specific occasion, brings additional equipment, and handles service and cleanup for a one-off meal or multi-day program. A private chef is perfect for 2–8 guests who want everyday meals; catering is the right choice when you have a larger group, a special occasion, or when you want a full service team rather than one chef.
              </p>
            </div>
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Buffet vs Plated Service</h3>
              <p className="text-sm leading-relaxed">
                Buffet catering lets guests serve themselves from a decorated line of hot and cold dishes. It is efficient for large groups, offers variety, and keeps the kitchen separate from the dining area. Plated service means guests remain seated and each course is brought to them by waiters. It feels more formal, controls portion sizes, and creates a slower, restaurant-style experience. Buffets suit weddings and big celebrations; plated menus suit anniversaries, board dinners, and milestone events. Both can be combined: a grazing table starter followed by a seated main course is a popular hybrid.
              </p>
            </div>
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Drop-Off vs Full-Service</h3>
              <p className="text-sm leading-relaxed">
                Drop-off catering delivers ready-to-eat food in packaging with reheating instructions. No staff stays at your villa, which is ideal for small, private meals or guests who want total solitude. Full-service catering includes chefs, waiters, equipment, setup, service during the meal, and complete cleanup. It costs more than drop-off but removes every operational burden. Many clients choose drop-off for quiet family nights and full-service for birthdays, weddings, and corporate events. Whatever format you prefer, myCHEF can provide the right level of support.
              </p>
            </div>
          </div>
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              In short, <strong>catering Bali</strong> is the simplest way to host a memorable meal without leaving your villa. It combines restaurant-quality food, professional hospitality, and complete flexibility. Whether you want a casual <Link to="/catering/bbq-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">BBQ Catering</Link> night, an elegant <Link to="/catering/plated-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Plated Catering</Link> dinner, or a large <Link to="/catering/buffet" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Buffet Catering</Link> spread, the format is built around your event, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: DECISION HELPER ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="NOT SURE?"
            title="Which Service Is Right for Me?"
            subtitle="Answer 3 quick questions and we will point you to the right option."
          />

          <div className="bg-white rounded-3xl border border-[#E8E6E3] p-6 md:p-10">
            {!decisionResult ? (
              <div className="space-y-8">
                {DECISION_QUESTIONS.map((q, qIdx) => (
                  <div key={qIdx} className={qIdx > 0 && !decisionAnswers[qIdx - 1] ? 'opacity-40 pointer-events-none' : ''}>
                    <p className="font-semibold text-[#1A1A1A] mb-4">
                      <span className="text-[#6B8E5A] mr-2">{qIdx + 1}.</span>
                      {q.question}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {q.options.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => handleDecisionAnswer(qIdx, opt.result as 'one-time' | 'daily')}
                          className={`px-5 py-4 rounded-xl border text-left text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] ${
                            decisionAnswers[qIdx] === opt.result
                              ? 'border-[#6B8E5A] bg-[#6B8E5A]/5 text-[#1A1A1A] font-medium'
                              : 'border-[#E8E6E3] hover:border-[#6B8E5A]/40 hover:bg-[#FAFAF8]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-[#6B8E5A]" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We Recommend: {decisionResult === 'one-time' ? 'One-Time Catering' : 'Daily Chef Service'}
                </h3>
                <p className="text-[#4A4745] mb-8 max-w-md mx-auto">
                  {decisionResult === 'one-time'
                    ? 'Based on your answers, a single-event catering package is the best fit. Browse BBQ, buffet, plated, or drop-off options above.'
                    : 'Based on your answers, having a dedicated chef for your entire stay will give you the best experience. Explore daily chef packages above.'}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(decisionResult)
                      setTimeout(() => {
                        const el = document.getElementById('service-tabs')
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 100)
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                  >
                    <ArrowRight className="w-4 h-4" /> View {decisionResult === 'one-time' ? 'One-Time Catering' : 'Daily Chef Service'}
                  </button>
                  <button
                    type="button"
                    onClick={resetDecision}
                    className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E6E3] text-[#4A4745] text-sm tracking-widest uppercase rounded-full hover:bg-[#FAFAF8] transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CATERING STYLE DECISION GUIDE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader
            eyebrow="DECISION GUIDE"
            title="Which Catering Style Is Right For You?"
            subtitle="Pick your guest count and event type. We will suggest the best catering format, staffing level, and menu approach."
          />
          <div className="bg-[#FAFAF8] rounded-3xl border border-[#E8E6E3] p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="style-guests" className="block text-sm font-semibold text-[#1A1A1A] mb-2">How many guests?</label>
                <select
                  id="style-guests"
                  value={styleGuests}
                  onChange={(e) => setStyleGuests(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                >
                  <option value="">Select guest range</option>
                  {GUEST_RANGES.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="style-event" className="block text-sm font-semibold text-[#1A1A1A] mb-2">What type of event?</label>
                <select
                  id="style-event"
                  value={styleEvent}
                  onChange={(e) => setStyleEvent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                >
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map((event) => (
                    <option key={event.value} value={event.value}>{event.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {!styleRecommendation ? (
              <div className="text-center py-6 text-[#4A4745] text-sm">
                <p>Select both options above to see a recommended catering style.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <p className="text-[#6B8E5A] text-xs font-bold tracking-widest uppercase mb-2">Recommended for you</p>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{styleRecommendation.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed mb-6">{styleRecommendation.description}</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to={styleRecommendation.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                  >
                    View package <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source="catering-style-decision-cta"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
                  >
                    <MessageCircle className="w-4 h-4" /> Get a personalised quote
                  </a>
                </div>
              </div>
            )}

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-[#4A4745]">
              <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <strong className="block text-[#1A1A1A] mb-1">Small groups (2–10)</strong>
                Private chef, plated dinner, BBQ, or grazing table.
              </div>
              <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <strong className="block text-[#1A1A1A] mb-1">Medium events (20–50)</strong>
                BBQ, buffet, plated, or live-station catering.
              </div>
              <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <strong className="block text-[#1A1A1A] mb-1">Large events (50+)</strong>
                Full buffet, live stations, and dedicated event manager.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CATERING BY EVENT TYPE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="EVENTS"
            title="Catering by Event Type"
            subtitle="Every event has its own rhythm. Here is how we match catering style, menu, and staffing to the occasion."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Birthdays',
                style: 'BBQ, buffet, or grazing table',
                menu: 'Live grill stations, satay, sliders, tropical fruit, birthday cake.',
                staffing: 'Chef + 2–4 staff for setup, service, and cleanup.',
                experience: 'Birthday catering Bali should feel like a party, not a restaurant reservation. A live BBQ by the pool, a grazing table for arrival, and a styled cake create the right energy. We handle the food so you can focus on candles, speeches, and dancing.',
              },
              {
                title: 'Weddings',
                style: 'Buffet, plated dinner, or live stations',
                menu: 'Welcome canapes, 3–5 course meal or buffet, wedding cake, late-night snacks.',
                staffing: 'Head chef, service manager, waiters 1:10, bartenders optional.',
                experience: 'Wedding catering Bali from myCHEF covers rehearsal dinners, welcome drinks, the reception, and post-wedding brunch. We coordinate timings with your planner, serve on your schedule, and adapt menus for guests with allergies, vegetarians, and children.',
              },
              {
                title: 'Corporate Events',
                style: 'Buffet, plated board dinner, or drop-off lunch',
                menu: 'International buffet, working lunch boxes, coffee stations, dietary-friendly options.',
                staffing: 'Uniformed chef and service team; tax invoicing provided.',
                experience: 'Corporate catering Bali needs punctuality, dietary flexibility, and discreet service. Whether it is a board dinner in a Seminyak villa or a conference lunch for 200 in Ubud, we deliver professional food and clear accounting.',
              },
              {
                title: 'Retreats',
                style: 'Plant-forward buffet or family-style',
                menu: 'Breakfast smoothie bowls, grain salads, grilled proteins, vegan desserts, herbal drinks.',
                staffing: 'Retreat chef + service team for multi-day coverage.',
                experience: 'Retreat catering Bali is about consistency and nourishment. We design menus around yoga schedules, fasting windows, and wellness goals, then serve the same quality across every meal of the retreat.',
              },
              {
                title: 'Luxury Villa Holidays',
                style: 'Daily chef or villa catering',
                menu: 'Mixed cuisine across the stay: Indonesian, Mediterranean, seafood, BBQ, healthy breakfasts.',
                staffing: 'Dedicated chef; additional waiters for dinner events.',
                experience: 'A luxury villa holiday is not complete without effortless meals. Our team shops, cooks, and cleans daily so you can enjoy poolside lunches, sunset dinners, and late brunches without leaving the property.',
              },
              {
                title: 'Family Gatherings',
                style: 'BBQ, buffet, or family-style sharing',
                menu: 'Shared plates, rice dishes, grilled meats, fresh vegetables, kid-friendly options.',
                staffing: 'Chef + 2–3 staff depending on group size.',
                experience: 'Family gatherings often span generations and eating times. We create flexible menus with early kids portions, adult courses, and relaxed service so everyone eats when they are hungry and what they like.',
              },
              {
                title: 'Christmas & NYE',
                style: 'Festive buffet, plated dinner, or grazing',
                menu: 'Roasted meats, seafood, holiday sides, desserts, champagne pairings.',
                staffing: 'Full service team for peak-season events.',
                experience: 'Christmas and New Year in Bali deserve a celebration that feels familiar and special. We build festive menus, source premium ingredients, and provide full staffing so you can toast under the stars.',
              },
              {
                title: 'Baby Showers',
                style: 'Grazing table, high tea, or light buffet',
                menu: 'Finger sandwiches, fruit platters, pastries, mocktails, themed cake.',
                staffing: 'Chef + 1–2 staff for a relaxed afternoon.',
                experience: 'Baby shower catering Bali is usually daytime, elegant, and social. Grazing tables and high-tea setups let guests nibble, chat, and move around while the mother-to-be is celebrated.',
              },
              {
                title: 'Bridal Showers',
                style: 'Grazing table, canapes, or plated brunch',
                menu: 'Artisan cheeses, charcuterie, champagne, salads, desserts.',
                staffing: 'Chef + service staff for styled presentation.',
                experience: 'Bridal showers call for beautiful food and a light atmosphere. We style grazing tables with flowers, provide elegant glassware, and keep the menu fresh and photogenic.',
              },
              {
                title: 'Anniversaries',
                style: 'Private chef or plated set menu',
                menu: 'Multi-course tasting menu, wine pairings, personalized dessert.',
                staffing: 'Chef and dedicated waiter for intimate service.',
                experience: 'Anniversary catering is about intimacy and attention. A private chef prepares a tasting menu at your villa while a waiter ensures every course arrives at the perfect moment.',
              },
              {
                title: 'Engagement Parties',
                style: 'Grazing + BBQ or buffet',
                menu: 'Canapes, grazing table, live grill or buffet, dessert.',
                staffing: 'Chef + 2–4 staff for mixed service.',
                experience: 'Engagement parties are celebratory and social. A grazing table for arrival followed by a BBQ or buffet lets guests mingle early and eat heartily later.',
              },
              {
                title: 'Networking Events',
                style: 'Canapes, grazing, or standing buffet',
                menu: 'Bite-sized finger food, sliders, skewers, desserts, coffee and cocktails.',
                staffing: 'Waiters with trays and bar staff as needed.',
                experience: 'Networking events need food that can be eaten standing up while conversations flow. Canapes and grazing tables keep guests circulating and make introductions easier.',
              },
              {
                title: 'Product Launches',
                style: 'Branded grazing, buffet, or plated dinner',
                menu: 'Custom menu aligned with brand theme, logo cake, signature drinks.',
                staffing: 'Chef, service team, and bartenders for polished presentation.',
                experience: 'Product launch catering Bali should reflect your brand. We can style the food display, coordinate colours, and create signature dishes or drinks that reinforce your message.',
              },
              {
                title: 'Seminars & Training',
                style: 'Working lunch buffet or boxed meals',
                menu: 'Light, energising dishes: salads, proteins, vegetarian options, fruit, coffee.',
                staffing: 'Drop-off or full service depending on venue and schedule.',
                experience: 'Seminar catering needs to be efficient, healthy, and on time. Boxed lunches keep sessions moving; buffets give attendees choice during longer breaks.',
              },
            ].map((event) => (
              <div key={event.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{event.title}</h3>
                <div className="space-y-3 text-sm text-[#4A4745]">
                  <p><span className="font-semibold text-[#1A1A1A]">Recommended style:</span> {event.style}</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Typical menu:</span> {event.menu}</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Staffing:</span> {event.staffing}</p>
                  <p className="leading-relaxed">{event.experience}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              Explore dedicated pages for <Link to="/events/weddings" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Wedding Catering</Link>, <Link to="/catering/corporate-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Corporate Catering</Link>, <Link to="/catering/retreat-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Retreat Catering</Link>, and <Link to="/catering/villa-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Villa Catering</Link> for more detail on each format.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CATERING BY GUEST NUMBERS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="GROUP SIZE"
            title="Catering by Guest Numbers"
            subtitle="The right format depends on how many people you are feeding. Here is how we scale service, kitchen, and staffing."
          />
          <div className="space-y-6">
            {[
              {
                range: '2–4 guests',
                style: 'Private chef, drop-off, or romantic dinner',
                kitchen: 'Uses your villa kitchen or delivered ready-to-serve.',
                staffing: 'One chef, optional waiter.',
                menus: 'Tasting menus, seafood grills, intimate BBQs, floating breakfast.',
              },
              {
                range: '5–10 guests',
                style: 'BBQ, plated dinner, or grazing table',
                kitchen: 'Small outdoor grill or villa kitchen.',
                staffing: 'Chef + 1–2 service staff.',
                menus: 'Shared starters, grilled mains, salads, dessert. Family-style service works well.',
              },
              {
                range: '10–20 guests',
                style: 'BBQ, plated set menu, or grazing + hot mains',
                kitchen: 'Mobile grill and prep tables; villa kitchen for finishing.',
                staffing: 'Chef + 2–3 staff, one waiter per 10 guests.',
                menus: 'Live satay, ribs, whole fish, pasta, plated courses, or buffet line.',
              },
              {
                range: '20–50 guests',
                style: 'BBQ, buffet, plated, or Babi Guling',
                kitchen: 'Full mobile kitchen tent, grill station, chafing dishes.',
                staffing: 'Head chef + 3–5 staff, dedicated service manager.',
                menus: 'Indonesian or international buffet, live carving, dessert table.',
              },
              {
                range: '50–100 guests',
                style: 'Buffet or live-station catering',
                kitchen: 'Expanded outdoor kitchen, multiple heat sources, refrigeration.',
                staffing: 'Head chef, sous chef, 6–10 service staff, event manager.',
                menus: 'Multi-station buffet with live cooking, salads, roasts, vegetarian station, desserts.',
              },
              {
                range: '100–250 guests',
                style: 'Large-format buffet with live stations or plated service',
                kitchen: 'Full off-site prep + on-site finishing kitchen, generator if needed.',
                staffing: 'Brigade of chefs, service manager, 15–25 front-of-house staff, bartenders.',
                menus: 'Extensive buffet lines, themed stations, plated starter + buffet main, late-night snacks.',
              },
              {
                range: '250+ guests',
                style: 'Bespoke large-event catering',
                kitchen: 'Custom kitchen build, dedicated logistics team, refrigerated transport.',
                staffing: 'Full culinary brigade, event coordinator, service captains, bar team, runners.',
                menus: 'Fully customised menu with multiple cuisines, dietary stations, VIP plated options.',
              },
            ].map((row) => (
              <div key={row.range} className="grid md:grid-cols-12 gap-4 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <div className="md:col-span-2">
                  <h3 className="text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{row.range}</h3>
                </div>
                <div className="md:col-span-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#4A4745]">
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Service style</p>
                    <p>{row.style}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Kitchen needs</p>
                    <p>{row.kitchen}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Staffing</p>
                    <p>{row.staffing}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Recommended menus</p>
                    <p>{row.menus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: WHO THIS IS FOR ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 1 — THE INQUIRY"
            title="Who Villa Catering Is For"
            subtitle="If you are staying in a villa in Canggu, Seminyak, Uluwatu or Ubud — this is designed for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Family Holidays', desc: 'Kids eat early. Adults eat later. No restaurant logistics. No transport. No splitting the group across tables.' },
              { title: 'Birthday Groups', desc: 'Private space, your music, no closing time. Bring the celebration to your villa instead of renting a venue.' },
              { title: 'Wedding Parties', desc: 'Rehearsal dinners, welcome drinks, post-wedding brunch. One caterer for every meal around the big day.' },
              { title: 'Corporate Retreats', desc: 'Team dinners that do not require transport. Dietary needs handled. Invoiced and documented.' },
              { title: 'Bachelor / Bachelorette', desc: 'Poolside BBQ without venue restrictions. Your playlist, your timeline, your rules.' },
              { title: 'Villa Owners & Hosts', desc: 'Repeat bookings, consistent quality, one point of contact. We know your kitchen and your guests.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: VILLA VS RESTAURANT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 3 — THE COMPARISON"
            title="Skip the Restaurant. Eat at Your Villa."
            subtitle="A restaurant dinner for 10 in Seminyak costs IDR 8–12M with drinks and transport. Our Indonesian BBQ for 10: IDR 7M. At your villa. With a chef."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <h3 className="text-xl mb-6 text-[#4A4745]" style={{ fontFamily: "'Playfair Display', serif" }}>Restaurant Dinner</h3>
              <div className="space-y-4">
                {['Transport for 8+ people across Bali traffic', 'Split tables, noisy room, other guests', 'Fixed menu, fixed time, fixed pace', '21% tax and service charge on top', 'Tip expected, parking extra'].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#4A4745]">
                    <span role="img" aria-label="Not included" className="mt-0.5 font-bold text-red-400">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#6B8E5A]/5 rounded-2xl border border-[#6B8E5A]/20 p-6 md:p-8">
              <h3 className="text-xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>myCHEF Villa Catering</h3>
              <div className="space-y-4">
                {['Walk to your garden — zero transport', 'One long table, your music, your guests only', 'Custom menu, your pace, no rush', 'All-inclusive pricing — no surprises', 'Gratuity included, no extra fees'].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                    <Check className="w-4 h-4 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-mid-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Upgrade Your Catering"
            subtitle="Add drinks, specific ingredients, plated service, or dietary adjustments directly when you book."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <CateringAddOnCard key={addon.title} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: PLATED PREVIEW ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 6 — THE PLATED"
            title="Plated Set Menus for Seated Events"
            subtitle="For milestone dinners, birthdays, villa owner events, and intimate weddings, plated menus create a more controlled dining experience with table service and stronger presentation."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {PLATED_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold text-lg mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-3xl mx-auto">
            <h4 className="font-medium text-[#1A1A1A] mb-4">Includes:</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'English-speaking chef', 'Service manager', '1 waiter per 10 guests',
                'Tables, linens, cutlery, porcelain, glassware', 'Kitchen tent if required',
                'Free tasting at 40+ guests', 'Minimum spend IDR 5,000,000',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#6B8E5A]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: DROP-OFF PREVIEW ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 7 — THE DROP-OFF"
            title="Drop-Off Catering Without Staff Inside Your Villa"
            subtitle="For families and villa guests who want proper food without staff staying in the villa, drop-off catering is the cleanest option."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {DROPOFF_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link
                  to={bookingHref(pkg.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
                >
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-sm text-[#4A4745]">
            {['Order by 4pm for next-day delivery', '90-minute delivery window', 'No on-site staff', 'Reheating instructions included', 'Recyclable containers'].map((r) => (
              <span key={r} className="flex items-center gap-1.5 bg-[#FAFAF8] px-3 py-1.5 rounded-full border border-[#E8E6E3]">
                <Check className="w-3.5 h-3.5 text-[#6B8E5A]" /> {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: BABI GULING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 8 — THE TRADITION"
            title="Babi Guling Whole-Pig Catering"
            subtitle="A traditional Balinese whole-pig experience for villa parties, birthdays, and larger group meals."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {BABIGULING_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> Babi Guling contains pork and is not suitable for halal groups. We offer halal alternatives — ask us about our Nasi Campur and Ayam Betutu packages.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: GRAZING TABLES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Visual"
            title="Grazing Tables & Charcuterie"
            subtitle="For weddings, welcome drinks, villa parties, poolside events, and easy entertaining, grazing tables create a strong visual food setup with minimal service friction."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {GRAZING_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto text-sm text-[#4A4745]">
            {['Sourdough & crackers', '4-6 cheeses', '3-4 cured meats', 'Marinated vegetables', 'Dips & honey', 'Fresh & dried fruit', 'Nuts & edible flowers', 'Vegan version available'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6B8E5A]" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 11: FLOATING BREAKFAST ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Instagram-Ready"
            title="Floating Breakfast & Brunch"
            subtitle="Photo-ready floating breakfast and brunch setups for villa pools, couples, birthdays, honeymoon mornings, and small groups."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {FLOATING_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all text-center">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-sm text-[#4A4745]">
            {['Floating pool tray', 'Bamboo & flower styling', 'Delivery and retrieval', 'Photo-ready setup', '48h lead time'].map((r) => (
              <span key={r} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8E6E3]">
                <Check className="w-3.5 h-3.5 text-[#6B8E5A]" /> {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 12: PRICING TRANSPARENCY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Why We Publish Our Prices</h2>
          <p className="text-[#4A4745] mb-6">
            Most Bali caterers hide pricing behind contact forms and phone calls. We do not. Publishing our prices saves you time, sets clear expectations, and lets you compare formats before reaching out. Every price you see includes chef, staff, ingredients, equipment, setup, service, and cleanup — so there are no surprises on the day. If your group size or location changes the math, we tell you upfront.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['No hidden fees', 'All-inclusive quotes', '21% tax included', 'Travel fee disclosed upfront', 'Final price before deposit'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: PRICING SUMMARY ═══════ */}
      <section id="book" className="scroll-mt-24 py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Compare"
            title="Catering Prices in Bali"
            subtitle="Final price confirmed before you pay. No hidden fees. No surprises."
          />
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Package</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Price</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Min. Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Best For</th>
                  <th className="pb-3"><span className="sr-only">Action</span></th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row) => (
                  <tr key={row.name} className="border-b border-[#E8E6E3] hover:bg-white transition-colors">
                    <td className="py-4 font-medium">{row.name}</td>
                    <td className="py-4 text-[#6B8E5A] font-semibold">{row.price}</td>
                    <td className="py-4 text-[#4A4745]">{row.min}</td>
                    <td className="py-4 text-[#4A4745]">{row.bestFor}</td>
                    <td className="py-4">
                      <a href={WA_LINK} target="_blank" data-source="catering-table-check" rel="noopener noreferrer" className="text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">Check date</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {PRICING_TABLE.map((row) => (
              <div key={row.name} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{row.name}</h4>
                  <span className="text-[#6B8E5A] font-semibold text-sm">{row.price}</span>
                </div>
                <p className="text-xs text-[#4A4745] mb-3">Min. {row.min} · {row.bestFor}</p>
                <a href={WA_LINK} target="_blank" data-source="catering-card-check" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6B8E5A] focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Check date <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 14: HOW BOOKING WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 9 — THE PROCESS"
            title="How Booking Works"
            subtitle="From first message to finished dinner — six steps, zero stress."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#6B8E5A]" />
                </div>
                <span className="text-[#6B8E5A] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 max-w-xl mx-auto">
            <p className="text-sm text-[#4A4745] mb-4">
              Questions? Fast replies during Bali business hours (9am–6pm).
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-chat-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
            >
              <MessageCircle className="w-4 h-4" /> Chat now
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: COMPLETE BOOKING PROCESS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="FROM ENQUIRY TO EVENT"
            title="The Complete 12-Step Booking Process"
            subtitle="We keep the process transparent so you always know what happens next."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Initial enquiry', desc: 'Message us on WhatsApp with your date, location, guest count, and event type. Most replies arrive within minutes during Bali business hours.' },
              { step: '02', title: 'Needs assessment', desc: 'We ask about dietary needs, allergies, preferred cuisine, budget, and villa access so we can match the right chef and format.' },
              { step: '03', title: 'Menu proposal', desc: 'You receive a tailored menu with options for starters, mains, desserts, service style, and add-ons such as bartenders or grazing tables.' },
              { step: '04', title: 'Quote confirmation', desc: 'We send a written quote covering food, chef, staff, equipment, travel fees, and taxes. No hidden costs.' },
              { step: '05', title: 'Contract & deposit', desc: 'Confirm your booking with a 50% deposit. The deposit locks your date and chef team.' },
              { step: '06', title: 'Final headcount', desc: 'Guest numbers are confirmed 48 hours before the event. We adjust portions, staffing, and ingredients accordingly.' },
              { step: '07', title: 'Grocery sourcing', desc: 'We shop fresh the morning of your event, selecting local produce and imported items needed for your menu.' },
              { step: '08', title: 'On-site setup', desc: 'The team arrives early, builds the mobile kitchen, sets tables, arranges décor, and briefs villa staff if needed.' },
              { step: '09', title: 'Cooking & service', desc: 'The chef cooks live while waiters serve courses, refill stations, and attend to guest requests throughout the meal.' },
              { step: '10', title: 'Dietary management', desc: 'We serve allergy-safe plates separately and label buffet dishes so every guest eats with confidence.' },
              { step: '11', title: 'Cleanup', desc: 'After service we clear tables, wash equipment, remove rubbish, and leave your villa kitchen as we found it.' },
              { step: '12', title: 'Follow-up', desc: 'We check in after the event, settle the balance, and gather feedback so we can keep improving.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <span className="text-[#6B8E5A] text-xs font-bold tracking-widest">STEP {item.step}</span>
                <h3 className="text-lg mt-1 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-process-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Start Your Booking Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 15: AREAS SERVED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Catering Across Bali"
            subtitle={
              <>
                We serve villas and event spaces across{' '}
                <Link to="/locations" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  all Bali regions
                </Link>
                . Popular areas include{' '}
                <Link to="/locations/seminyak" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  Seminyak
                </Link>
                ,{' '}
                <Link to="/locations/canggu" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  Canggu
                </Link>
                , and{' '}
                <Link to="/locations/ubud" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  Ubud
                </Link>
                . Travel fees apply outside Canggu and Seminyak.
              </>
            }
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 text-center">
              <h3 className="font-medium text-[#1A1A1A] mb-2">Canggu & Seminyak</h3>
              <p className="text-sm text-[#4A4745] mb-3">No travel fee. Same-day booking often available.</p>
              <span className="inline-block px-3 py-1 bg-[#6B8E5A]/10 text-[#6B8E5A] text-xs font-semibold rounded-full">Most Popular</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 text-center">
              <h3 className="font-medium text-[#1A1A1A] mb-2">Uluwatu & Ubud</h3>
              <p className="text-sm text-[#4A4745] mb-3">IDR 250K–500K travel fee. Book 3+ days ahead.</p>
              <span className="inline-block px-3 py-1 bg-[#E8E6E3] text-[#4A4745] text-xs font-semibold rounded-full">3+ Days Ahead</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 text-center">
              <h3 className="font-medium text-[#1A1A1A] mb-2">Nusa Dua, Sanur, Jimbaran</h3>
              <p className="text-sm text-[#4A4745] mb-3">IDR 400K–700K travel fee. Book 5+ days ahead.</p>
              <span className="inline-block px-3 py-1 bg-[#E8E6E3] text-[#4A4745] text-xs font-semibold rounded-full">5+ Days Ahead</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                area: 'Seminyak',
                events: 'Birthdays, bachelorette parties, corporate dinners, romantic dinners.',
                villas: 'Designer villas with open kitchens and pool decks close to restaurants and beach clubs.',
                notes: 'No travel fee. Same-day BBQ and drop-off often possible. Ideal for first-time Bali catering clients.',
              },
              {
                area: 'Canggu',
                events: 'Villa parties, family holidays, surf trips, wellness retreats, influencer events.',
                villas: 'Rice-field view villas, bamboo architecture, large gardens, and poolside decks.',
                notes: 'No travel fee. Very high demand; book 3–7 days ahead for weekends.',
              },
              {
                area: 'Berawa',
                events: 'Beachfront birthdays, family brunches, sunset BBQs.',
                villas: 'Modern villas near Finns and Berawa Beach, often with rooftop terraces.',
                notes: 'Treated as Canggu zone for travel. Great for beach-club style events at home.',
              },
              {
                area: 'Pererenan',
                events: 'Intimate weddings, yoga retreats, small villa dinners.',
                villas: 'Quieter rice-field villas and boutique estates with space for ceremonies.',
                notes: 'Rural roads can affect large-truck access; we scout access before big events.',
              },
              {
                area: 'Ubud',
                events: 'Retreats, jungle weddings, corporate offsites, wellness programs.',
                villas: 'Jungle villas, rice-paddy estates, and riverside resorts with dramatic views.',
                notes: 'Travel fee IDR 250K–500K. Jungle humidity affects outdoor setups; we plan covered kitchens.',
              },
              {
                area: 'Sanur',
                events: 'Family reunions, expat dinners, seminar catering, long-stay villa meals.',
                villas: 'Calm beachside villas, older-established estates, and family-friendly compounds.',
                notes: 'Travel fee IDR 400K–700K. Preferred by guests who want a quieter, more local atmosphere.',
              },
              {
                area: 'Nusa Dua',
                events: 'Weddings, corporate events, golf resort gatherings, luxury villa dinners.',
                villas: 'Gated resort villas, cliff-top estates, and beachfront compounds.',
                notes: 'Travel fee IDR 400K–700K. Security gates require advance guest-list coordination.',
              },
              {
                area: 'Jimbaran',
                events: 'Seafood dinners, family gatherings, beach celebrations, rehearsal dinners.',
                villas: 'Hillside villas with ocean views and beachfront compounds.',
                notes: 'Travel fee IDR 400K–700K. Seafood is a natural menu choice here; we source fresh daily.',
              },
              {
                area: 'Uluwatu',
                events: 'Cliff-top weddings, sunset parties, luxury villa holidays, milestone birthdays.',
                villas: 'Cliff-front villas with infinity pools and panoramic ocean views.',
                notes: 'Travel fee IDR 250K–500K. Wind and access stairs can affect setup; we arrive early.',
              },
              {
                area: 'Ungasan',
                events: 'Large villa weddings, multi-day retreats, private celebrations.',
                villas: 'Spacious estates on the Bukit peninsula with big gardens and parking.',
                notes: 'Travel fee IDR 250K–500K. Great for events that need space and privacy.',
              },
              {
                area: 'Kerobokan',
                events: 'Villa dinners, birthday BBQs, family gatherings.',
                villas: 'A mix of budget and luxury villas between Seminyak and Canggu.',
                notes: 'Treated as Seminyak/Canggu zone for travel. Quick access to most villa clusters.',
              },
              {
                area: 'Sidemen',
                events: 'Retreats, intimate weddings, photography dinners, cultural experiences.',
                villas: 'Rice-terrace villas and boutique eco-lodges with mountain views.',
                notes: 'Travel fee applies. Remote location suits multi-day retreats and exclusive small events.',
              },
              {
                area: 'Munduk',
                events: 'Retreats, nature escapes, small group dinners.',
                villas: 'Cool-climate mountain lodges and jungle cabins.',
                notes: 'Travel fee applies. Cooler weather is ideal for hot buffets and plated comfort food.',
              },
              {
                area: 'North Bali',
                events: 'Beachfront weddings, diving groups, family reunions, fishing-villa dinners.',
                villas: 'Black-sand beach villas, quiet coastal estates, and traditional compounds.',
                notes: 'Travel fee applies and may require overnight crew for large events. Book early.',
              },
            ].map((loc) => (
              <div key={loc.area} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{loc.area}</h3>
                <div className="space-y-2 text-sm text-[#4A4745]">
                  <p><span className="font-semibold text-[#1A1A1A]">Popular events:</span> {loc.events}</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Villa styles:</span> {loc.villas}</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Catering notes:</span> {loc.notes}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#6B8E5A] hover:text-[#6B8E5A] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: FOOD PHILOSOPHY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="INGREDIENTS & STANDARDS"
            title="Our Food Philosophy"
            subtitle="Great catering starts with great ingredients, handled by people who care about every plate."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Fresh Ingredients & Seasonal Sourcing</h3>
              <p className="text-sm leading-relaxed">
                We shop for most ingredients on the day of your event. Produce comes from local markets in Denpasar and Ubud, seafood is selected daily from Jimbaran and Kedonganan suppliers, and meats are sourced from trusted butchers who understand our quality standards. Seasonality matters in Bali: mangoes, passion fruit, snake fruit, and tropical greens change throughout the year, and we let those rhythms shape the menu.
              </p>
            </div>
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Local Produce Meets Imported Specialties</h3>
              <p className="text-sm leading-relaxed">
                Balinese ingredients form the backbone of our Indonesian and BBQ menus, while imported cheeses, cured meats, olive oils, wines, and specialty proteins support Mediterranean, French, and Italian dishes. We balance cost and authenticity: if a local ingredient is superior, we use it; if an imported product is essential for the dish, we source it properly.
              </p>
            </div>
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Presentation & Food Safety</h3>
              <p className="text-sm leading-relaxed">
                Every dish is plated or arranged to suit the event style. Buffets are garnished and kept at safe temperatures. Plated courses are timed and wiped before leaving the pass. All chefs are trained in food safety, allergens are segregated during prep, and we maintain cold-chain discipline from market to table.
              </p>
            </div>
            <div className="space-y-4 text-[#4A4745]">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Menu Customisation & Dietary Flexibility</h3>
              <p className="text-sm leading-relaxed">
                Menus are not fixed. We adjust for vegan, vegetarian, gluten-free, dairy-free, nut-free, shellfish-free, halal-friendly, and low-sodium diets. We also adapt spice levels, portion sizes, and children's meals. Your final menu is confirmed in writing before the event so there are no surprises for you or your guests.
              </p>
            </div>
          </div>
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              Our philosophy is simple: cook fresh, serve beautifully, and treat every dietary requirement seriously. Whether you choose <Link to="/catering/bbq-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">BBQ Catering</Link>, <Link to="/catering/buffet" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Buffet Catering</Link>, or a <Link to="/catering/plated-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Plated Dinner</Link>, the same standards apply.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: MENU STYLE OVERVIEW ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CUISINES"
            title="Menu Style Overview"
            subtitle="Mix and match cuisines, courses, and service styles to create a menu that fits your event and your guests."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Mediterranean', desc: 'Olive oil, grilled fish, mezze, fresh salads, flatbreads, and herbs. Light, colourful, and perfect for daytime events.' },
              { title: 'Italian', desc: 'Homemade pasta, risotto, antipasti, wood-fired flavours, and classic desserts like tiramisu.' },
              { title: 'French', desc: 'Refined sauces, elegant plating, cheese courses, and pastry-led desserts for milestone dinners.' },
              { title: 'Japanese', desc: 'Sashimi, sushi, teriyaki, miso, and delicate small plates. Ideal for tasting menus and cocktail hours.' },
              { title: 'Indonesian', desc: 'Satay, rendang, nasi goreng, gado-gado, sambals, and Balinese specialities. Always a crowd favourite.' },
              { title: 'Seafood', desc: 'Grilled prawns, lobster, snapper, barramundi, squid, and ocean-fresh platters by the pool.' },
              { title: 'BBQ', desc: 'Live-fire grilling with global flavours: Indonesian, Australian, American, and surf-and-turf combinations.' },
              { title: 'Healthy', desc: 'Lean proteins, whole grains, fermented foods, low-sugar options, and abundant vegetables.' },
              { title: 'Vegetarian', desc: 'Creative plant-based menus that do not feel like an afterthought. Cheese, grains, vegetables, and pulses.' },
              { title: 'Vegan', desc: 'Fully plant-based dishes with balanced proteins, dairy alternatives, and bold flavours.' },
              { title: 'Buffet', desc: 'A service format rather than a cuisine, available in Indonesian, international, or themed stations.' },
              { title: 'Fine Dining', desc: 'Multi-course tasting menus with precise plating, wine pairings, and dedicated service.' },
              { title: 'Family Style', desc: 'Large sharing plates passed around the table. Relaxed, social, and great for mixed groups.' },
            ].map((style) => (
              <div key={style.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{style.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-[#4A4745] mb-4 max-w-2xl mx-auto">
              Not sure which cuisine suits your group? Many clients combine Indonesian starters with Western mains, or add a Japanese sashimi course to a Mediterranean buffet. We can build a mixed menu around your preferences.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="catering-menu-overview-cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
            >
              <MessageCircle className="w-4 h-4" /> Discuss menu ideas
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: OPTIONAL SERVICES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="ADD-ONS"
            title="Optional Services"
            subtitle="Build a complete event experience by adding service staff, drinks, styling, and entertainment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Private Chefs', desc: 'A dedicated chef for daily meals, tasting menus, or special occasions in your villa.', href: '/villa-chef' },
              { title: 'Bartenders', desc: 'Professional bartenders with full bar setup, cocktail menus, and responsible service.', href: '/in-villa-service/bartenders' },
              { title: 'Mixologists', desc: 'Signature cocktails, molecular techniques, and premium spirits for upscale events.', href: '/in-villa-service/mixology' },
              { title: 'Waiters', desc: 'Uniformed waiters for plated service, tray canapes, and buffet assistance.', href: '/in-villa-service/waiters' },
              { title: 'Butlers', desc: 'Discreet, polished butlers for formal dinners, villa hosting, and VIP service.', href: '/in-villa-service/butlers' },
              { title: 'Coffee Stations', desc: 'Barista-style coffee, teas, and pastries for morning events and conference breaks.' },
              { title: 'Dessert Tables', desc: 'Styled cakes, pastries, tropical fruit, and sweet stations for weddings and birthdays.' },
              { title: 'Furniture Rental', desc: 'Tables, chairs, lounge setups, and dining furniture for outdoor villa events.' },
              { title: 'Glassware & Tableware', desc: 'Wine glasses, champagne flutes, porcelain, and cutlery to match your event style.' },
              { title: 'Decoration & Flowers', desc: 'Table florals, candles, linens, and styling to transform your villa into an event venue.' },
              { title: 'Entertainment', desc: 'DJ, acoustic musicians, fire dancers, and cultural performers coordinated through our network.' },
              { title: 'Photography', desc: 'Event photographers who understand villa lighting and candid celebration moments.' },
              { title: 'Event Planning', desc: 'Full coordination of timeline, vendors, setup, and guest flow for complex events.', href: '/events' },
            ].map((service) => (
              <div key={service.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed mb-3">{service.desc}</p>
                {service.href && (
                  <Link to={service.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              Optional services can be added to any catering package. Tell us your vision and we will recommend the right staffing and styling to match. For event service teams, see our <Link to="/staffing/villa-staff" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Event Staffing</Link> page. For full villa staffing and long-term placements, see our <Link to="/staffing" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Staffing</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: TRUST / E-E-A-T ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="WHY MYCHEF"
            title="Experience, Expertise & Trust"
            subtitle="We combine culinary skill, event planning discipline, and hospitality standards to deliver catering you can rely on."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Professional Culinary Experience', desc: 'Our chefs come from hotel, restaurant, private villa, and Michelin-trained backgrounds. They understand Western palates, Indonesian flavours, and high-volume service.' },
              { title: 'Event Planning Expertise', desc: 'We have catered over five hundred villa events in Bali. That means we know how to read a venue, manage timelines, and adapt when the weather or guest count changes.' },
              { title: 'Hospitality Standards', desc: 'Uniformed staff, polite service, clear communication, and attention to guest comfort are non-negotiable parts of every booking.' },
              { title: 'Food Safety Processes', desc: 'Allergen separation, temperature logs, certified food handlers, and hygiene checks are built into every event. We take safety as seriously as taste.' },
              { title: 'Ingredient Sourcing', desc: 'We buy fresh, verify suppliers, and keep receipts visible for daily chef services. Quality ingredients are the foundation of every menu.' },
              { title: 'Operational Planning', desc: 'From kitchen tent placement to power supply and parking, we plan logistics before we arrive so setup is smooth and service is on time.' },
              { title: 'Large-Event Capability', desc: 'We have the team, equipment, and supplier network to handle events for 250+ guests, including multi-station buffets and plated service.' },
              { title: 'Transparent Booking Process', desc: 'Every quote is itemised, every menu is confirmed in writing, and every deposit is acknowledged with a booking summary. No ambiguity.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="catering-trust-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Speak with the Catering Team
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      {/* Photo gallery */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="Catering across Bali" subtitle="From villa buffets to plated dinners." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: '/generated/mychef-catering-1.webp', alt: 'Balinese chefs plating gourmet dishes at a Bali villa buffet' },
              { src: '/generated/mychef-catering-2.webp', alt: 'Lavish catering buffet on a Bali villa terrace with Indonesian staff serving' },
              { src: '/generated/mychef-catering-3.webp', alt: 'Indonesian catering team preparing food at a Bali villa event' },
              { src: '/generated/mychef-catering-4.webp', alt: 'Elegant plated dinner service by a Balinese waiter at a Bali villa' },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'Sarah & James', location: 'Seminyak Villa', quote: 'The BBQ was incredible — the Wagyu was perfectly cooked and the team handled everything. We did not lift a finger.', rating: 5 },
          { name: 'The Chen Family', location: 'Canggu Villa', quote: 'We booked the Indonesian buffet for 40 guests. The sate lilit and nasi kuning were authentic and delicious. Highly recommend.', rating: 5 },
          { name: 'Emma R.', location: 'Uluwatu Villa', quote: 'The grazing table was the highlight of our wedding cocktail hour. Every guest commented on how beautiful (and tasty) it was.', rating: 5 },
        ]}
        title="What Our Guests Say"
        subtitle="Real reviews from real villa events across Bali."
      />

      {/* ═══════ SECTION 16: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Catering FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ SECTION 17: BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Book Now"
            title="Get Your Catering Quote"
            subtitle="Tell us your date, guests, and villa. We will reply on WhatsApp with availability and exact pricing in under 2 hours."
          />
          <BookingFormCatering
            title="Get Your Catering Quote"
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 12', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'duration', label: 'Stay Length / Service Window', type: 'text', icon: Calendar, placeholder: 'e.g. 12 days, dinner only, breakfast + dinner' },
              { name: 'meals', label: 'Meals Needed', type: 'text', icon: Utensils, placeholder: 'Breakfast, lunch, dinner, BBQ, special event...' },
              { name: 'budget', label: 'Budget Range (optional)', type: 'text', icon: CreditCard, placeholder: 'e.g. IDR 40M total' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'notes', label: 'Dietary Notes / Special Requests', type: 'textarea', rows: 4 },
            ]}
            packageOptions={[
              ...CATERING_STYLES.map((s) => s.title),
              ...BBQ_PACKAGES.map((p) => p.title),
              ...BUFFET_PACKAGES.map((p) => p.title),
              ...PLATED_PACKAGES.map((p) => p.title),
              ...DROPOFF_PACKAGES.map((p) => p.title),
              ...BABIGULING_PACKAGES.map((p) => p.title),
              ...GRAZING_PACKAGES.map((p) => p.title),
              ...FLOATING_PACKAGES.map((p) => p.title),
            ]}
            submitLabelBuilder={(formData) => {
              const guestLabel = formData.guests?.trim() ? `${formData.guests.trim()} Guests` : 'Your Guests'
              return `Get Catering Quote for ${guestLabel}`
            }}
            messageIntro="Hi myCHEF, I'd like a catering quote for my stay in Bali."
          />
          <p className="text-center text-xs text-[#4A4745]/80 mt-6">
            No spam. No calls unless you ask. Just a clear quote you can book or ignore.
          </p>
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 18: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/generated/mychef-catering-bali-hub-catering.webp"
            alt="Completed villa catering table with chef-prepared dishes ready to serve in Bali by myCHEF"
            className="w-full h-full object-cover"
            loading="lazy" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Still Deciding?
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Here Is What Happens Next
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { step: '1', text: 'Send your details' },
              { step: '2', text: 'Get a quote in 2 hours' },
              { step: '3', text: 'Pay 25% to lock it' },
              { step: '4', text: 'Show up and eat' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-[#C5A028] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.step}</span>
                <p className="text-white/[80%] text-sm mt-1">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-final-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
            </a>
            <a
              href="tel:+6289674072020"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone className="w-4 h-4" /> Call +62 896-7407-2020
            </a>
          </div>
          <p className="text-sm text-white/[60%] mb-8">
            No booking fee · Free consultation · Exact quote within 2 hours
          </p>
          <TrustRow
            items={['Guest-loved service', '500+ villa events served', '8 years in Bali', 'Same-day quotes when possible']}
            dark
          />
        </div>
      </section>

      <StaffingInfo />
      <BookingProcess />

      <LocationChips
        title="Catering Across Bali"
        subtitle="BBQ on the beach in Jimbaran. Buffet in a Canggu villa. Plated dinner in Uluwatu. We bring the kitchen to you — wherever you are."
      />

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="catering-main"
        serviceType="catering"
        label="Get a Catering Quote via WhatsApp"
        serviceName="catering in Bali"
        intent="menu options and pricing"
      />
    </div>
  )
}