/**
 * Enriches per-area FAQ sets for /private-chef/[slug] pages.
 * Keeps area-authored unique FAQs first, then fills to 16–20 with shared
 * commercial + cluster-local intents. HTML answers for FAQAccordion.
 */

import type { AreaFaq, PrivateChefArea } from './privateChefAreas'
import { MEAL_PLANS, formatIDRPlusPlus, siteFacts } from './siteFacts'

function norm(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function escName(name: string): string {
  return name
}

/** Strip tags for FAQPage JSON-LD. */
export function stripFaqHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

function link(href: string, label: string): string {
  return `<a href="${href}">${label}</a>`
}

function sharedFaqs(area: PrivateChefArea): AreaFaq[] {
  const n = escName(area.name)
  const one = formatIDRPlusPlus(MEAL_PLANS[0].daily)
  const two = formatIDRPlusPlus(MEAL_PLANS[1].daily)
  const three = formatIDRPlusPlus(MEAL_PLANS[2].daily)

  return [
    {
      q: `How much does a private chef cost in ${n}?`,
      a: `One meal a day starts from <strong>${one}</strong> (chef + dedicated assistant); two meals from ${two}; three meals from ${three}. Groceries are billed at cost with receipts. Villa catering often from IDR 700,000 per person; tasting menus from IDR 980,000 per person. Prices are ++ (11% tax + 10% service). Your itemised quote is fixed before you commit. ${link('/pricing', 'Pricing guide')} · ${link('/quote', 'Request a quote')}.`,
    },
    {
      q: `What is included in a private chef booking in ${n}?`,
      a: `Menu planning, market shopping, cooking in your villa kitchen, plating/table service and full cleanup. Optional waiters and butlers via ${link('/in-villa-service', 'in-villa service')}; party drinks via ${link('/in-villa-service/bartenders', 'mobile cocktail bar packages')}. ${siteFacts.groceryPolicy}.`,
    },
    {
      q: `Do you cook for kids, allergies and special diets in ${n}?`,
      a: `Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed early, at no extra charge. Child plates and earlier seatings are standard. ${link('/kids-menus', "Kids' menus")} · ${link('/fine-dining/menus', 'Villa menus')} · ${link('/blog/food-allergies-dietary-requirements-private-chef-bali', 'Allergy guide')}.`,
    },
    {
      q: `Will our villa or villa manager in ${n} allow a private chef?`,
      a: `Almost always. We coordinate access and house rules with your villa manager before the day, bring specialised equipment when kitchens are compact, and leave everything as we found it.`,
    },
    {
      q: `How far in advance should I book a private chef in ${n}?`,
      a: `${area.bookingNote || '1–3 days for dinners; 2–4 weeks for events.'} Peak season (July–August and December) fills first — book early for those dates. Same-day and next-day are often possible outside peak.`,
    },
    {
      q: `How do deposit and cancellation work for ${n} bookings?`,
      a: `A ${siteFacts.depositPercent}% deposit confirms your chef and date; balance is due ${siteFacts.balanceTiming}. ${siteFacts.cancellationPolicyShort} Full detail: ${link('/cancellation', 'cancellation policy')}.`,
    },
    {
      q: `Can you cater a villa party or large group in ${n}?`,
      a: `Yes — groups from 8 to 100+ with chef, sous, waiters and a mobile bar as needed. Formats: ${link('/catering/villa-catering', 'villa catering')}, ${link('/catering/bbq-catering', 'BBQ catering')}, ${link('/events/villa-parties', 'villa parties')}, ${link('/in-villa-service/bartenders', 'mobile cocktail bar')} and ${link('/group-villa-dinner-packages-bali', 'group dinner packages')}.`,
    },
    {
      q: `Can we add a mobile cocktail bar with private chef in ${n}?`,
      a: `Yes — the strongest F&amp;B stack: daily chef or party catering plus a mobile bar we bring to the villa (packages from IDR 500,000++ per guest, min 10). ${link('/in-villa-service/bartenders', 'Mobile cocktail bar packages')} · ${link('/experiences/private-cocktail-party', 'private cocktail party')} · ${link('/catering', 'catering')}.`,
    },
    {
      q: `Can we book multi-day or weekly private chef service in ${n}?`,
      a: `Yes. Weekly bookings take 10% off the daily rate; monthly 20% off. Meal plans cover one, two or three meals a day. For long-term households see ${link('/staffing/live-in-chef', 'live-in chef placement')}. Rates: ${link('/private-chef-bali', 'private chef Bali')}.`,
    },
    {
      q: `How do I get a fixed quote for ${n}?`,
      a: `WhatsApp your date, guest count, villa pin in ${n} and menu intent — or use ${link('/quote', 'request a quote')} / ${link('/book', 'book')}. We reply with availability and an all-in total.`,
    },
    {
      q: `Is fine dining available in ${n} villas?`,
      a: `Yes — multi-course tasting menus, romantic dinners and chef’s table formats. Explore ${link('/fine-dining', 'fine dining')}, ${link('/fine-dining/tasting-menu', 'tasting menu')} and ${link('/fine-dining/romantic-dinner', 'romantic dinner')}.`,
    },
  ]
}

function clusterFaqs(area: PrivateChefArea): AreaFaq[] {
  const n = escName(area.name)
  const slug = area.slug
  const land = area.landmarks.join(' · ')
  const nearby = area.nearbyAreas
    .slice(0, 4)
    .map((a) => link(`/private-chef/${a.slug}`, a.name))
    .join(', ')

  const out: AreaFaq[] = []

  // Geography / character
  out.push({
    q: `What is private chef dining like in ${n}?`,
    a: `${area.intro.slice(0, 280)}${area.intro.length > 280 ? '…' : ''} Villa character: ${area.villaDensity.slice(0, 160)}${area.villaDensity.length > 160 ? '…' : ''} Compare formats on ${link('/private-chef-bali', 'private chef Bali')} and ${link('/dining-styles', 'dining styles')}.`,
  })

  out.push({
    q: `Who typically books a private chef in ${n}?`,
    a: `${area.guestProfile} Tell us your group type when you enquire so we match cuisine, pacing and staffing.`,
  })

  if (land) {
    out.push({
      q: `Which parts of ${n} do you cover?`,
      a: `We serve villas across ${n} and the surrounding belt, including landmarks guests recognise: ${land}. Share your villa pin so we confirm access and any remote logistics upfront.`,
    })
  }

  // Service-gated uniques
  if (area.services.includes('bbq')) {
    out.push({
      q: `Can you run a BBQ or poolside grill in ${n}?`,
      a: `Yes — live-fire BBQ and pool/terrace grills with our own equipment. See ${link('/catering/bbq-catering', 'BBQ catering')} and ${link('/bbq-grill', 'BBQ grill menus')}.`,
    })
  }
  if (area.services.includes('events')) {
    out.push({
      q: `Do you cater weddings or celebrations in ${n}?`,
      a: `Intimate villa weddings, rehearsals, birthdays and celebrations are common here. Start with ${link('/events/weddings', 'wedding catering')}, ${link('/events/birthdays', 'birthdays')} or ${link('/events', 'all events')}.`,
    })
  }
  if (area.services.includes('staffing') || area.services.includes('fine-dining')) {
    out.push({
      q: `Can we add a mobile bar or butler in ${n}?`,
      a: `Yes — waiters and butlers contact for pricing; party drinks use complete ${link('/in-villa-service/bartenders', 'mobile cocktail bar packages')} from IDR 500,000++ per guest (min 10), not hourly bartender-only hire. ${link('/in-villa-service', 'In-villa service')} · ${link('/experiences/private-cocktail-party', 'cocktail party plan')}.`,
    })
  }

  // Cluster-specific extras
  const belt = slug
  if (['seminyak', 'petitenget', 'legian', 'kuta', 'batu-belig', 'oberoi'].includes(belt)) {
    out.push({
      q: `Can you time dinner to the ${n} sunset?`,
      a: `Yes — west-facing beach villas are perfect for golden-hour pacing. Tell us your villa’s aspect and we land the main course after the sun drops.`,
    })
  }
  if (['canggu', 'berawa', 'pererenan', 'umalas', 'echo-beach'].includes(belt)) {
    out.push({
      q: `Can a private chef cover our whole ${n} villa stay?`,
      a: `Yes — multi-day meal prep is one of the most booked formats here for surf families and remote workers. Weekly rates discount 10%. ${link('/private-chef-bali', 'Meal plans')} · ${link('/staffing/live-in-chef', 'live-in options')}.`,
    })
  }
  if (['ubud', 'sayan', 'penestanan', 'tegallalang', 'mas', 'payangan'].includes(belt)) {
    out.push({
      q: `Do you cook for yoga retreats or wellness groups in ${n}?`,
      a: `Yes — plant-forward, gluten-free and programme-aligned menus for retreat villas. See ${link('/catering/retreat-catering', 'retreat catering')} and ${link('/events/retreats', 'retreat events')}.`,
    })
  }
  if (['uluwatu', 'pecatu', 'ungasan', 'bingin', 'balangan', 'padang-padang', 'bukit'].includes(belt)) {
    out.push({
      q: `Can you cook in a compact clifftop kitchen in ${n}?`,
      a: `Yes — Bukit villas often have smaller kitchens. We assess the space, bring specialised gear, and design menus that fit power and bench limits without compromising the plate.`,
    })
  }
  if (['jimbaran', 'nusa-dua', 'tanjung-benoa', 'sanur'].includes(belt)) {
    out.push({
      q: `Is seafood a speciality for private chefs in ${n}?`,
      a: `Yes — market-fresh fish and shellfish are a natural fit here. Ask for seafood-forward menus or ${link('/seafood-bbq-catering-bali', 'seafood BBQ catering')}.`,
    })
  }
  if (['denpasar', 'renon', 'sanur'].includes(belt)) {
    out.push({
      q: `Can you invoice companies for ${n} dinners?`,
      a: `Yes — corporate dinners and offsites can receive NPWP-ready documentation on request. ${link('/events/corporate', 'Corporate events')} · ${link('/catering/corporate-catering', 'corporate catering')}.`,
    })
  }

  if (nearby) {
    out.push({
      q: `Which nearby areas do you also cover from ${n}?`,
      a: `The same team serves neighbouring villa belts including ${nearby}. Full directory: ${link('/private-chef-bali', 'private chef Bali')} · ${link('/locations', 'locations')}.`,
    })
  }

  out.push({
    q: `Why book myCHEF rather than a freelance chef in ${n}?`,
    a: `You get a chef + assistant model, named specialists, grocery receipts at cost, supervised backup cover and fixed quotes — not a one-person marketplace booking. ${link('/why-mychef', 'Why myCHEF')} · ${link('/chefs', 'Meet the chefs')} · ${link('/reviews', 'Reviews')}.`,
  })

  return out
}

/**
 * Merge authored area FAQs with shared + cluster FAQs up to `target` items.
 * Authored questions win on intent collision.
 */
export function buildAreaFaqs(area: PrivateChefArea, target = 18): AreaFaq[] {
  const seen = new Set<string>()
  const out: AreaFaq[] = []

  const push = (faq: AreaFaq) => {
    const key = norm(faq.q)
    // soft dedupe: first 48 chars of normalised question
    const soft = key.slice(0, 48)
    if ([...seen].some((s) => s.slice(0, 48) === soft)) return
    seen.add(key)
    out.push(faq)
  }

  for (const f of area.faqs) push(f)
  for (const f of sharedFaqs(area)) {
    if (out.length >= target) break
    push(f)
  }
  for (const f of clusterFaqs(area)) {
    if (out.length >= target) break
    push(f)
  }

  return out.slice(0, target)
}
