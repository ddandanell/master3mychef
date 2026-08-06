#!/usr/bin/env python3
"""Bulk-expand FAQs on existing mychef.id pages. No new pages. Keeps existing Qs."""
from __future__ import annotations
import re
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"

SKIP_FILES = {
    "FAQAccordion.tsx",
    "SeoHead.tsx",
    "PremiumPage.tsx",
    "ServicePage.tsx",
    "AreaPage.tsx",
    "LocationLandingPage.tsx",
    "PrivateChefAreaPage.tsx",  # data-driven from privateChefAreas
    "InfoPage.tsx",
    "JournalPage.tsx",
    "MenuPage.tsx",
    "CateringPage.tsx",  # legacy wrapper
}

# Universal + topic packs (Bali, existing routes only)
UNIVERSAL = [
    ("What deposit do you require?", "A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href=\"/cancellation\">cancellation policy</a>."),
    ("What does \"++\" mean on prices?", "\"++\" means 11% government tax and 10% service charge are added to the listed price. Written quotes show the all-in total before you pay."),
    ("Which areas of Bali do you cover?", "Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href=\"/locations\">locations</a>."),
    ("How far in advance should I book?", "A few days for most dinners; one to two weeks for larger events; longer for peak season and weddings. Last-minute is often possible — ask on WhatsApp."),
    ("Can you accommodate allergies and special diets?", "Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance, at no extra charge. Guide: <a href=\"/blog/food-allergies-dietary-requirements-private-chef-bali\">food allergies</a>."),
    ("Do you clean up after service?", "Yes on serviced chef, catering and fine-dining formats — kitchen and service areas restored before we leave."),
    ("How do I get a quote?", "WhatsApp date, guest count, villa area and what you want. Or use <a href=\"/quote\">quote</a> / <a href=\"/book\">book</a> / <a href=\"/faq\">FAQ</a>."),
    ("What if a chef or staff member cannot make it?", "We send a verified replacement of equivalent role or refund that service. Details: <a href=\"/why-mychef\">why myCHEF</a>."),
]

TOPIC_PACKS: dict[str, list[tuple[str, str]]] = {
    "wedding": [
        ("How much does wedding catering in Bali cost?", "Receptions typically IDR 1.5M–3M++ per person; intimate formats can start lower. See <a href=\"/events/weddings\">wedding catering</a> and <a href=\"/bali-wedding-catering-packages\">packages</a>."),
        ("Do you offer menu tastings for weddings?", "Yes — tastings are part of wedding planning for full receptions, scheduled before the day."),
        ("Can you handle banjar fees and villa permissions?", "We coordinate with villa managers on access, noise and banjar requirements and list third-party fees in the proposal."),
        ("Can guests bring their own alcohol?", "Yes — BYO with service staff, or full bar packages. <a href=\"/in-villa-service/bartenders\">Bartenders</a>."),
        ("What is the rain plan for outdoor receptions?", "Every outdoor wedding has a covered fallback (marquee/indoor) confirmed before the day."),
        ("Do you cater rehearsal and welcome dinners?", "Yes — BBQ, family-style or plated formats via <a href=\"/events\">events</a> and <a href=\"/catering\">catering</a>."),
        ("What staffing ratio do you use?", "About one waiter per 8–10 seated guests, plus kitchen lead; cocktail hours add tray staff."),
        ("Can you work with our wedding planner?", "Yes — daily collaboration with planners and villa managers."),
        ("Do you offer halal-friendly wedding menus?", "Yes — pork-free and halal-sensitive lines when specified at planning."),
        ("How is this different from a private chef dinner?", "Weddings are multi-guest production. Couples dinners: <a href=\"/fine-dining/romantic-dinner\">romantic dinner</a>."),
        ("Which areas host most villa weddings?", "Uluwatu, Canggu, Seminyak, Ubud, Nusa Dua and Jimbaran are common — we cover island-wide."),
        ("Can kids and elderly dietary needs be managed?", "Yes — labelled plates and briefed service for mixed multi-gen guest lists."),
    ],
    "bbq": [
        ("How much does BBQ catering cost in Bali?", "Packages often from IDR 700K–950K++ per person depending on menu. <a href=\"/catering/bbq-catering\">BBQ catering</a> · <a href=\"/bbq-grill\">BBQ grill menus</a>."),
        ("Do you bring the grill?", "Yes — grills, fuel, tools and stations. You do not need villa equipment."),
        ("What if it rains during a BBQ?", "Covered terraces or tents — plan B is confirmed before service."),
        ("Can you do seafood or vegetarian BBQ?", "Yes. Also <a href=\"/seafood-bbq-catering-bali\">seafood BBQ</a>."),
        ("Is alcohol included?", "Usually BYO or sourced at cost with optional cocktail packages."),
        ("What is the minimum guest count?", "Typically around 10 for full BBQ catering; smaller groups can use grill menus or private chef."),
        ("Can kids eat at a BBQ?", "Yes — milder items or <a href=\"/kids-menus\">kids menus</a>."),
        ("Is BBQ different from daily private chef?", "BBQ catering is event production; multi-day meals use <a href=\"/private-chef-bali\">private chef day rates</a>."),
        ("Do you clean up after BBQ?", "Yes on serviced packages."),
        ("Can BBQ be poolside?", "Yes — heat and smoke placement planned for guest comfort."),
        ("Pork-free options?", "Yes — fully pork-free/halal-friendly grills available."),
        ("How far ahead to book a villa BBQ?", "3–7 days typical; peak season longer. Last-minute often possible."),
    ],
    "catering": [
        ("How much does catering in Bali cost?", "Many villa formats start around IDR 700K++ per person. See <a href=\"/catering\">catering</a> and <a href=\"/pricing\">pricing</a>."),
        ("What formats do you offer?", "BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href=\"/catering\">catering</a>."),
        ("Is catering the same as private chef hire?", "No. Catering is usually one event; multi-day stays use <a href=\"/private-chef-bali\">private chef</a>."),
        ("Do prices include staff and cleanup?", "Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site."),
        ("Can you cook in an Airbnb villa?", "Yes with a workable kitchen — share the listing when booking."),
        ("Minimum guest counts?", "Vary by format (drop-off lower, buffet higher). We route you correctly."),
        ("Can menus be customised?", "Yes — proteins, spice, diets locked before shopping."),
        ("Travel fees?", "Remote areas may add a fee quoted upfront."),
        ("Can we add bartenders?", "Yes — <a href=\"/in-villa-service/bartenders\">bartenders</a>."),
        ("Kids and allergies?", "Yes — <a href=\"/kids-menus\">kids menus</a> and allergy protocols."),
        ("How do I book catering?", "WhatsApp date, guests, area and format — or <a href=\"/quote\">quote</a>."),
        ("Rain plan?", "Covered setups and indoor pivots planned ahead."),
    ],
    "private_chef": [
        ("How much is a private chef in Bali per day?", "From IDR 1,000,000++/day for one meal (chef + assistant). Two meals IDR 1.8M++, three IDR 2.7M++. Weekly −10%, monthly −20%. <a href=\"/private-chef-bali\">Private chef Bali</a>."),
        ("Are groceries included?", "Shopping work is included; food is billed at cost with receipts on daily hire."),
        ("What is Chef Rotation?", "On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge."),
        ("Can the chef cook in our villa kitchen?", "Yes — standard villa kitchens work; we bring specialised tools when needed."),
        ("Is this cheaper than restaurants for groups?", "For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis."),
        ("Can I request a specific chef?", "Yes for multi-day stays when available. Meet the team: <a href=\"/chefs\">chefs</a>."),
        ("Fine dining vs daily chef?", "Fine dining is multi-course event pricing; daily chef is meal-count day rates. <a href=\"/fine-dining\">Fine dining</a>."),
        ("Do you cover my area?", "Island-wide. <a href=\"/locations\">Locations</a>."),
        ("Kids menus with daily chef?", "Yes — <a href=\"/kids-menus\">kids menus</a> and parallel adult meals."),
        ("Live-in vs daily chef?", "Live-in is long-term placement (<a href=\"/staffing/live-in-chef\">live-in chef</a>); daily is holiday day-rate hire."),
        ("Payment methods?", "Bank transfer and major cards; deposit then balance as quoted."),
        ("Last-minute private chef?", "Often possible outside peak — WhatsApp availability."),
    ],
    "fine_dining": [
        ("How much is fine dining in a Bali villa?", "Signature tasting paths often from about IDR 2.2M–2.4M++ per person depending on menu. <a href=\"/fine-dining\">Fine dining</a> · <a href=\"/fine-dining/menus\">menus</a>."),
        ("What is included?", "Chef brigade, multi-course menu, ingredients (as quoted), service and full cleanup."),
        ("Wine pairing?", "Optional add-on (often ~IDR 850K/person) or BYO service."),
        ("Minimum guests?", "Tasting menus usually 4–24; couples use <a href=\"/fine-dining/romantic-dinner\">romantic dinner</a>."),
        ("Dietary adaptations?", "Yes at no extra charge when briefed."),
        ("How long does the evening take?", "Plan roughly 3–4 hours for a five-course tasting with pauses."),
        ("Chef's table option?", "Yes — <a href=\"/fine-dining/chefs-table\">chef's table</a>."),
        ("Can kids join?", "With adapted plates, or pair <a href=\"/kids-menus\">kids menus</a>."),
        ("Difference from daily private chef?", "Event multi-course vs multi-day meal plans on <a href=\"/private-chef-bali\">private chef</a>."),
        ("Where do you serve?", "Villas island-wide. <a href=\"/locations\">Locations</a>."),
        ("Surprise setups?", "Yes for proposals and anniversaries — coordinate empty-villa timing."),
        ("How to book?", "WhatsApp date, guests, area and menu path — <a href=\"/quote\">quote</a>."),
    ],
    "staffing": [
        ("What staffing services do you offer in Bali?", "Day-rate in-villa staff and long-term placement of chefs, managers, butlers and household teams. <a href=\"/staffing\">Staffing</a> · <a href=\"/in-villa-service\">in-villa service</a>."),
        ("How fast is placement?", "Often around 48 hours for roles with ready candidates; specialist searches take longer."),
        ("Replacement guarantee?", "Placement programmes typically include a replacement window (e.g. 30 days) in writing."),
        ("Live-in vs live-out?", "Live-in resides on property; live-out works set shifts. We help you choose."),
        ("Background checks?", "Candidates are interviewed, reference-checked and supervised through myCHEF systems."),
        ("Can we hire staff without catering?", "Yes for event staff. <a href=\"/in-villa-service\">In-villa service</a>."),
        ("Hotel and restaurant staffing?", "Yes — <a href=\"/staffing/hotels\">hotel staffing</a> and B2B kitchen solutions."),
        ("Trial days?", "Paid trials before long-term placement are common."),
        ("English-speaking staff?", "Guest-facing roles are English-capable; we match language needs."),
        ("What info starts a search?", "Role, location, live-in/out, languages, salary band, start date."),
        ("Backup if staff is sick?", "Temporary cover can be arranged through the network."),
        ("How to start?", "WhatsApp the brief or <a href=\"/contact\">contact</a>."),
    ],
    "in_villa": [
        ("How much do waiters and bartenders cost in Bali?", "Waiters from about IDR 250K/hour; cocktail packages from IDR 500,000++ per guest (min 10). <a href=\"/in-villa-service\">In-villa service</a>."),
        ("Minimum booking?", "Hourly roles usually 3-hour minimum; waiter bookings often start at two waiters."),
        ("Can we hire staff without food?", "Yes — self-catered or third-party caterer support is normal."),
        ("What do staff wear?", "Professional uniforms matched to event formality."),
        ("Alcohol included?", "No — BYO or sourced at cost; hire covers the professional."),
        ("Waiter ratio?", "About one waiter per 10 guests for formal service."),
        ("Butler service?", "Yes — <a href=\"/in-villa-service/butlers\">butlers</a>."),
        ("Mixology and signature cocktails?", "Yes — <a href=\"/in-villa-service/mixology\">mixology</a>."),
        ("Areas covered?", "Island-wide. <a href=\"/locations\">Locations</a>."),
        ("Combine with private chef?", "Yes — most common luxury setup."),
        ("Vetted staff?", "Employed/supervised teams with replacement-or-refund cover."),
        ("How to book staff?", "WhatsApp date, area, headcount and roles needed."),
    ],
    "experience": [
        ("What private experiences do you offer?", "Cocktail parties, sushi masterclass, cooking class, kids birthday chef party, champagne & oyster, proposal dinners. <a href=\"/experiences\">Experiences</a>."),
        ("Do you bring equipment?", "Yes — tools, stations and ingredients for the experience."),
        ("Can experiences be customised?", "Yes — duration, guest count and menu flow are tailored."),
        ("Setup and cleanup included?", "Yes — we run the experience end to end."),
        ("Hotels or only villas?", "Mostly villas; venues possible with permission."),
        ("Dietary needs?", "Built in when briefed at enquiry."),
        ("How far ahead to book?", "2–4 weeks ideal; peak and proposals longer."),
        ("Combine with dinner after?", "Yes — into fine dining, three-course or BBQ."),
        ("Kids allowed?", "Depends on format — kids parties and family cooking classes yes."),
        ("Deposit?", "50% typical to confirm."),
        ("Areas?", "Bali-wide. <a href=\"/locations\">Locations</a>."),
        ("How to book?", "WhatsApp experience, date, area, guests — <a href=\"/quote\">quote</a>."),
    ],
    "bar": [
        ("What bar services do you offer?", "Villa bartenders, mixology, and B2B bar solutions. <a href=\"/in-villa-service/bartenders\">Bartenders</a> · <a href=\"/bar-services/\">bar services</a>."),
        ("Bartender hourly rate?", "From about IDR 350,000/hour with a 3-hour minimum."),
        ("Do you supply alcohol?", "Usually client-supplied or sourced at cost."),
        ("Mobile bar setup?", "Yes — stations, glassware plans and tools as scoped."),
        ("Zero-proof cocktails?", "Yes — full zero-proof menus available."),
        ("Wedding bar teams?", "Yes — scaled for guest count."),
        ("B2B for venues?", "Yes — consulting and bar programmes on <a href=\"/bar-services/\">bar services</a>."),
        ("Cleanup?", "Stations broken down and guest areas cleared."),
        ("How many bartenders needed?", "Depends on headcount and free-flow vs order-based service — quoted per event."),
        ("Areas covered?", "Bali-wide."),
        ("Deposit?", "50% typical."),
        ("How to book?", "WhatsApp date, guests, villa/venue — <a href=\"/contact\">contact</a>."),
    ],
    "location": [
        ("Do you serve this Bali area?", "Yes — private chef, catering and events operate across major villa regions. Hub: <a href=\"/locations\">locations</a> · <a href=\"/private-chef-bali\">private chef</a>."),
        ("Is there a travel fee?", "Core South Bali is usually included; remote spots may add a distance fee quoted upfront."),
        ("Can you cook in Airbnb villas here?", "Yes with a workable kitchen — share the listing."),
        ("Same prices as other areas?", "Published day rates and menu starts apply; only remote logistics may differ."),
        ("Fine dining available here?", "Yes — <a href=\"/fine-dining\">fine dining</a>."),
        ("BBQ and parties?", "Yes — <a href=\"/catering/bbq-catering\">BBQ catering</a> · <a href=\"/events/villa-parties\">villa parties</a>."),
        ("Daily chef for a week?", "Yes — meal plans on <a href=\"/private-chef-bali\">private chef Bali</a>."),
        ("Staff and bartenders?", "Yes — <a href=\"/in-villa-service\">in-villa service</a>."),
        ("How far ahead to book here?", "A few days typical; peak season longer."),
        ("Last-minute possible?", "Often yes — WhatsApp the area and date."),
        ("Kids-friendly service?", "Yes — <a href=\"/kids-menus\">kids menus</a>."),
        ("How to book for this area?", "WhatsApp villa pin, dates and guests — <a href=\"/book\">book</a>."),
    ],
    "kids": [
        ("Kids menu prices?", "Often from about IDR 250K–350K per child ++. <a href=\"/kids-menus\">Kids menus</a>."),
        ("Nut-free?", "Kids menus are nut-free as standard; other allergies adapted when briefed."),
        ("Ages?", "Roughly 3–12 with milder flavours and child portions."),
        ("Adults at the same event?", "Yes — kids first, adults from dining styles collections."),
        ("Birthday chef parties?", "Yes — <a href=\"/experiences/kids-birthday-chef-party\">kids birthday chef party</a>."),
        ("Halal adaptable?", "Yes when specified."),
        ("Minimum children?", "Often around six for party menus; smaller groups can fold into family chef days."),
        ("Picky eaters?", "Pasta, pizza, burgers and familiar builds available."),
        ("Daily chef with kids?", "Yes on multi-day <a href=\"/private-chef-bali\">private chef</a> stays."),
        ("Cleanup?", "Included on serviced bookings."),
        ("Areas?", "Bali-wide."),
        ("How to book?", "WhatsApp ages, allergies, date and villa area."),
    ],
    "corporate": [
        ("Corporate catering price range?", "Dinners often IDR 700K–1.2M++ per person; multi-day programmes quoted. <a href=\"/events/corporate\">Corporate events</a>."),
        ("NPWP invoices?", "Yes on request."),
        ("Multi-day retreats?", "Yes — <a href=\"/catering/retreat-catering\">retreat catering</a>."),
        ("Guest counts?", "From leadership dinners to 100–200+ programmes."),
        ("Dietary for mixed teams?", "Yes when headcount by diet is shared."),
        ("Villa and venue work?", "Yes — share access rules."),
        ("Bartenders and waiters?", "Yes — <a href=\"/in-villa-service\">in-villa service</a>."),
        ("Case studies?", "Yes — <a href=\"/corporate-case-studies\">case studies</a>."),
        ("Book from overseas?", "Yes — WhatsApp/email planning before arrival."),
        ("Headcount changes?", "Re-quoted in writing with notice."),
        ("Alcohol?", "BYO or sourced at cost."),
        ("How to start?", "Share dates, headcount, venues, meal map — <a href=\"/quote\">quote</a>."),
    ],
    "pricing": [
        ("Where are full prices listed?", "On <a href=\"/pricing\">pricing</a> and the private chef meal-plan table at <a href=\"/private-chef-bali\">private chef Bali</a>."),
        ("Daily chef rates?", "IDR 1M++ / 1.8M++ / 2.7M++ for 1/2/3 meals per day."),
        ("What is included vs groceries?", "Daily hire: labor included, groceries at cost. Many event packages include food in the per-person price."),
        ("Weekly and monthly discounts?", "−10% at 7+ days, −20% at 28+ days on daily chef rates."),
        ("Deposit?", "Usually 50%."),
        ("Cancellation tiers?", "Full refund 14+ days, 50% at 7–13, none under 7. <a href=\"/cancellation\">Policy</a>."),
        ("Hidden fees?", "Quotes itemise travel, premium ingredients and add-ons before deposit."),
        ("Wedding price band?", "Often IDR 1.5M–3M++ per person for full receptions."),
        ("Staff hourly rates?", "Waiters ~IDR 250K/hour; bartenders ~IDR 350K/hour (minimums apply)."),
        ("How to get an exact total?", "Share date, guests, area and format for a fixed quote."),
        ("Currency?", "IDR pricing; international transfers accepted as invoiced."),
        ("Compare formats?", "Use <a href=\"/dining-styles\">dining styles</a> and <a href=\"/services\">services</a>."),
    ],
    "contact": [
        ("How fast do you reply?", "Usually within 2 hours on WhatsApp during operating hours."),
        ("Best way to book?", "WhatsApp with date, guests, area and service — or <a href=\"/book\">book</a> / <a href=\"/quote\">quote</a>."),
        ("Phone number?", "Published sitewide — WhatsApp +62 896-7407-2020."),
        ("Email?", "bali@mychef.id for written requests and invoices."),
        ("Office location?", "Denpasar, Bali — full address on the site footer and contact pages."),
        ("Languages?", "English and Indonesian service."),
        ("Corporate enquiries?", "Yes — mention NPWP needs and multi-day schedule."),
        ("Partner / villa manager enquiries?", "Yes — <a href=\"/partner\">partner</a> pathways."),
        ("Urgent same-day requests?", "Often possible — message ASAP with location."),
        ("What to include in first message?", "Date, villa area, guest count, service type, diets."),
        ("Can you call me?", "WhatsApp first is fastest; calls arranged when needed."),
        ("FAQ hub?", "Yes — <a href=\"/faq\">FAQ</a>."),
    ],
    "blog_guide": [
        ("Is this guide free?", "Yes — educational content to help you plan. Booking is optional."),
        ("Can myCHEF deliver what this guide describes?", "Yes — start at <a href=\"/services\">services</a> or <a href=\"/private-chef-bali\">private chef</a>."),
        ("How do I get prices after reading?", "See <a href=\"/pricing\">pricing</a> or WhatsApp a fixed quote request."),
        ("Does advice apply across Bali?", "Yes for major villa areas — confirm logistics for remote spots."),
        ("Allergies covered in real bookings?", "Yes — brief us at enquiry. <a href=\"/blog/food-allergies-dietary-requirements-private-chef-bali\">Allergy guide</a>."),
        ("Daily chef vs one dinner?", "Multi-day stays → private chef day rates; celebration nights → fine dining or catering."),
        ("How to book after this guide?", "WhatsApp date, guests, area — <a href=\"/book\">book</a>."),
        ("Related services?", "Browse <a href=\"/dining-styles\">dining styles</a> and <a href=\"/events\">events</a>."),
        ("Cancellation if I book?", "See <a href=\"/cancellation\">cancellation policy</a>."),
        ("Who writes the operational standards?", "myCHEF operations and chef leadership in Bali."),
        ("Can villa managers share this guide?", "Yes — free to share with guests."),
        ("More FAQs?", "Central hub: <a href=\"/faq\">FAQ</a>."),
    ],
    "default": [
        ("How do I book this with myCHEF in Bali?", "WhatsApp date, guest count, villa area and your goal. Or use <a href=\"/book\">book</a> / <a href=\"/quote\">quote</a>."),
        ("Where can I see prices?", "Published tables on <a href=\"/pricing\">pricing</a> and <a href=\"/private-chef-bali\">private chef</a> day rates."),
        ("Is service available island-wide?", "Yes across major villa regions. <a href=\"/locations\">Locations</a>."),
        ("Can you handle dietary requirements?", "Yes when briefed early — no extra charge for standard adaptations."),
        ("What is included vs extra?", "Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed."),
        ("Deposit and cancellation?", "Usually 50% deposit; refund tiers on <a href=\"/cancellation\">cancellation</a>."),
        ("How fast is a proposal?", "Often within 2–24 hours of a complete brief."),
        ("Can this combine with other services?", "Yes — chef, catering, staff and transport can stack in one plan."),
        ("Do you clean up?", "Yes on serviced formats."),
        ("Kids welcome?", "Yes with adapted menus when needed. <a href=\"/kids-menus\">Kids menus</a>."),
        ("Who is myCHEF?", "Bali villa hospitality company — chefs, catering, events and staffing. <a href=\"/about\">About</a> · <a href=\"/why-mychef\">Why myCHEF</a>."),
        ("More questions?", "See the central <a href=\"/faq\">FAQ</a>."),
    ],
}


def detect_topics(path: str, text: str) -> list[str]:
    p = path.lower()
    topics = []
    rules = [
        ("wedding", ["wedding", "rehearsal"]),
        ("bbq", ["bbq", "grill", "seafood-bbq"]),
        ("catering", ["catering", "buffet", "grazing", "plated", "drop-off", "floating", "babi-guling", "brunch"]),
        ("private_chef", ["private-chef", "privatechef", "daily-chef", "hire-private", "live-in-chef", "chef-for-hire", "how-to-hire"]),
        ("fine_dining", ["fine-dining", "tasting", "romantic-dinner", "chefs-table", "michelin"]),
        ("staffing", ["staffing", "placement", "household", "villa-manager", "hotel-restaurant", "live-in"]),
        ("in_villa", ["in-villa", "waiter", "bartender", "butler", "mixolog", "sommelier", "hostess"]),
        ("experience", ["experience", "cocktail-party", "cooking-class", "sushi", "champagne", "proposal", "kids-birthday"]),
        ("bar", ["bar-service", "bar-services", "mixolog"]),
        ("location", ["seminyak", "canggu", "ubud", "uluwatu", "jimbaran", "sanur", "nusa-dua", "pererenan", "denpasar", "kuta", "bukit", "location"]),
        ("kids", ["kids", "family-kids", "children"]),
        ("corporate", ["corporate", "retreat", "wellness-retreat", "yoga-retreat"]),
        ("pricing", ["pricing", "calculator", "cost"]),
        ("contact", ["contact", "getting-started", "partner", "join-team", "press"]),
        ("blog_guide", ["blog/", "guide", "vs-", "trends", "season-menu", "expats", "roles-responsibilities"]),
    ]
    for topic, keys in rules:
        if any(k in p for k in keys):
            topics.append(topic)
    if not topics:
        topics = ["default"]
    # always add default as filler last
    if "default" not in topics:
        topics.append("default")
    return topics


def normalize_q(q: str) -> str:
    q = q.lower()
    q = re.sub(r"[^a-z0-9\s]", "", q)
    q = re.sub(r"\s+", " ", q).strip()
    return q


def extract_existing(block: str) -> list[tuple[str, str, str]]:
    """Return list of (key, question, answer) where key is q or question."""
    items = []
    # q/a form
    for m in re.finditer(
        r"\{\s*(q|question)\s*:\s*(['\"])(.*?)\2\s*,\s*(a|answer)\s*:\s*(['\"])(.*?)\5\s*\}",
        block,
        flags=re.S,
    ):
        kq, q, ka, a = m.group(1), m.group(3), m.group(4), m.group(6)
        # unescape simple
        q = q.replace("\\'", "'").replace('\\"', '"').replace("\\n", " ")
        a = a.replace("\\'", "'").replace('\\"', '"').replace("\\n", " ")
        items.append((kq, q, a))
    return items


def js_escape(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace("'", "\\'")
        .replace("\n", " ")
        .replace("\r", "")
    )


def build_block(items: list[tuple[str, str]], key_style: str) -> str:
    lines = ["const FAQS = ["] if key_style == "q" else ["const FAQS = ["]
    # detect original const name later
    for q, a in items:
        if key_style == "question":
            lines.append(f"  {{ question: '{js_escape(q)}', answer: '{js_escape(a)}' }},")
        else:
            lines.append(f"  {{ q: '{js_escape(q)}', a: '{js_escape(a)}' }},")
    lines.append("]")
    return "\n".join(lines)


def find_faq_const(text: str) -> tuple[str, int, int, str] | None:
    """Return (const_name, start, end_exclusive, key_style)."""
    for name in ("FAQS", "faqs", "FAQ_ITEMS", "FAQ_DATA"):
        m = re.search(rf"const {name}\s*=\s*\[", text)
        if not m:
            continue
        start = m.start()
        # find matching ]
        i = m.end() - 1
        depth = 0
        for j in range(i, len(text)):
            if text[j] == "[":
                depth += 1
            elif text[j] == "]":
                depth -= 1
                if depth == 0:
                    end = j + 1
                    block = text[start:end]
                    key_style = "question" if re.search(r"\bquestion\s*:", block) else "q"
                    # include trailing ' as const' if present on same assignment? no
                    return name, start, end, key_style
    return None


def patch_accordion(text: str) -> str:
    def repl(m: re.Match) -> str:
        s = m.group(0)
        if "showToc" in s:
            return s
        # insert props before />
        if s.endswith("/>"):
            core = s[:-2].rstrip()
            if "defaultOpenCount" not in core:
                core += " defaultOpenCount={2}"
            core += " showToc ctaEvery={5} "
            return core + "/>"
        return s

    text = re.sub(r"<FAQAccordion\b[^>]*?/>", repl, text)
    return text


def process_file(path: Path) -> bool:
    if path.name in SKIP_FILES:
        return False
    text = path.read_text(encoding="utf-8")
    found = find_faq_const(text)
    if not found:
        return False
    name, start, end, key_style = found
    block = text[start:end]
    existing = extract_existing(block)
    # count questions even if extract failed
    qcount = len(existing)
    if qcount == 0:
        qcount = len(re.findall(r"\b(q|question)\s*:", block))
    if qcount >= 15:
        return False

    existing_qs = {normalize_q(q) for _, q, _ in existing}
    # preserve original items if extracted
    items: list[tuple[str, str]] = [(q, a) for _, q, a in existing]

    topics = detect_topics(str(path), text)
    pool: list[tuple[str, str]] = []
    for t in topics:
        pool.extend(TOPIC_PACKS.get(t, []))
    pool.extend(UNIVERSAL)

    for q, a in pool:
        nq = normalize_q(q)
        if nq in existing_qs:
            continue
        # soft dedupe similar
        if any(nq[:40] == eq[:40] for eq in existing_qs if len(eq) > 20):
            continue
        items.append((q, a))
        existing_qs.add(nq)
        if len(items) >= 20:
            break

    if len(items) <= qcount:
        return False

    new_block = build_block(items, key_style)
    # keep original const name
    new_block = new_block.replace("const FAQS = [", f"const {name} = [", 1)
    new_text = text[:start] + new_block + text[end:]
    new_text = patch_accordion(new_text)
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        return True
    return False


def main():
    changed = []
    for folder in (SRC / "pages", SRC / "components"):
        for path in folder.rglob("*.tsx"):
            try:
                if process_file(path):
                    changed.append(str(path.relative_to(ROOT)))
            except Exception as e:
                print("ERR", path, e)
    print(f"changed {len(changed)} files")
    for c in changed:
        print(c)


if __name__ == "__main__":
    main()
