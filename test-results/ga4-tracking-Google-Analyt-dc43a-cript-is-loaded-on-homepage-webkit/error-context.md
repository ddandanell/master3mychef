# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ga4-tracking.spec.ts >> Google Analytics 4 Tracking >> gtag script is loaded on homepage
- Location: tests/e2e/ga4-tracking.spec.ts:4:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('script[src*="googletagmanager.com/gtag"]')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('script[src*="googletagmanager.com/gtag"]')
    13 × locator resolved to <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-W0PQH8ZKTF"></script>
       - unexpected value "hidden"

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- navigation "Main navigation":
  - link "myCHEF":
    - /url: /
  - link "Book":
    - /url: /book
  - button "Open menu"
- main:
  - paragraph: Your Villa. Our Kitchen.
  - heading "A Michelin-Trained Private Chef, in Your Bali Villa." [level=1]
  - paragraph: Private dining, catering & events across Bali. We shop, cook & clean. You just enjoy.
  - paragraph: Founded by Adriano — trained under a Michelin-starred chef in Milan — myCHEF.id brings extraordinary dining to Bali's finest villas. A team of 50+ Indonesian hospitality professionals handles everything, from grocery sourcing to the last clean plate. We are not a marketplace. We are a kitchen that travels.
  - link "Get My Free Quote":
    - /url: https://wa.me/6282237565997?text=Hi%2C%20I%27d%20like%20to%20book%20a%20private%20chef%20for%20my%20Bali%20villa.
  - link "Browse Menus & Pricing":
    - /url: /pricing
  - paragraph:
    - img "Available": 🟢
    - text: Available this weekend · Reply within 1 hour
  - paragraph: Weekends fill fast — book early
  - paragraph: No booking fee · Free consultation · Replies within 1 hour
  - paragraph: Same-day confirmation or your money back
  - paragraph: If your chef can't make it, we send a replacement within 2 hours or refund 100%
  - paragraph: Chef replacement guarantee
  - paragraph: Same-day replacement or full refund — your evening is protected
  - text: 560+ Villas Served 12,000+ Happy Guests 4.9 ★ Rating 8+ Years in Bali
  - paragraph: Still deciding?
  - paragraph: Most guests book within 24h of inquiry. WhatsApp us — no commitment required.
  - link "Message us":
    - /url: https://wa.me/6282237565997
  - link "Estimate price first →":
    - /url: /calculator
  - link "Fine Dining":
    - /url: /fine-dining
  - img "Fine Dining"
  - heading "Fine Dining" [level=3]
  - paragraph: Italian tasting menus in your villa. Two curated experiences.
  - text: Explore
  - link "Events & Catering":
    - /url: /catering
  - img "Events & Catering"
  - heading "Events & Catering" [level=3]
  - paragraph: BBQ, buffet, plated dinners, and hosted villa events for groups of 5+.
  - text: Explore
  - link "Events":
    - /url: /events
  - img "Events"
  - heading "Events" [level=3]
  - paragraph: Weddings, retreats, and celebrations. Fully hosted.
  - text: Explore
  - paragraph: Why myCHEF
  - heading "Built to be the new standard" [level=2]
  - paragraph: Six things every guest, host, and villa partner gets from the first message to the last plate.
  - img "100% Experience Guarantee"
  - text: Promise
  - heading "100% Experience Guarantee" [level=3]
  - paragraph: If the execution is not what we promised, we make it right.
  - img "The New Standard for Private Dining in Bali"
  - text: Standard
  - heading "The New Standard for Private Dining in Bali" [level=3]
  - paragraph: Built for villas, families, weddings, and hosted experiences.
  - img "Verified Chefs. Real Accountability."
  - text: Network
  - heading "Verified Chefs. Real Accountability." [level=3]
  - paragraph: Every chef is selected, reviewed, and matched to the experience.
  - img "Designed for Market Dominance"
  - text: Leadership
  - heading "Designed for Market Dominance" [level=3]
  - paragraph: Fine dining, catering, and events delivered through one premium system.
  - img "From Menu to Service Flow"
  - text: Execution
  - heading "From Menu to Service Flow" [level=3]
  - paragraph: We handle planning, food, staffing, setup, and guest experience.
  - img "Built for Villas, Hosts, and Private Guests"
  - text: Hosts
  - heading "Built for Villas, Hosts, and Private Guests" [level=3]
  - paragraph: Professional presentation, clear process, and repeatable quality.
  - paragraph: Simple as It Gets
  - heading "How It Works" [level=2]
  - paragraph: From first message to first bite — four steps. No stress. No surprises.
  - text: Step 01
  - heading "Message Us on WhatsApp" [level=3]
  - paragraph: Tell us your dates, villa location, and how many guests. Takes two minutes.
  - text: Step 02
  - heading "We Plan Everything" [level=3]
  - paragraph: Our concierge designs your menu or event. You approve — or we adjust. No pressure.
  - text: Step 03
  - heading "We Shop, Prep & Cook" [level=3]
  - paragraph: Groceries sourced fresh that morning. We arrive at your villa ready to cook.
  - text: Step 04
  - heading "You Enjoy. We Clean." [level=3]
  - paragraph: Sit back, eat, laugh. When you are done, we leave your kitchen spotless.
  - link "Start on WhatsApp":
    - /url: https://wa.me/6282237565997
  - img "The myCHEF team"
  - paragraph: Who We Are
  - heading "A Team Built on Passion, Not Pitch Decks" [level=2]
  - paragraph: myCHEF.id was born when Adriano — trained under a Michelin-starred chef in Milan — arrived in Bali and saw a gap. The island had world-class villas. It had incredible ingredients. But the connection between them was missing.
  - paragraph: "Today we are a team of 50+ Indonesian hospitality professionals. Chefs trained in Italian technique. Servers who anticipate before you ask. Event producers who have handled 200+ weddings and corporate retreats. Every person on our team shares one belief: extraordinary food should not require leaving your villa."
  - paragraph: We are not a marketplace. We are not an app. We are a kitchen that travels — and we take that seriously.
  - text: Michelin-trained leadership 50+ staff 560+ villas served 12,000+ guests
  - paragraph: Why Choose Us
  - heading "What Makes Us Different" [level=2]
  - paragraph: Anyone can cook. We build experiences.
  - heading "Michelin-Trained Leadership" [level=3]
  - paragraph: Adriano trained under a Michelin-starred chef in Milan. His standards are the baseline for every dish.
  - heading "50+ Indonesian Professionals" [level=3]
  - paragraph: Chefs, servers, bartenders, and event staff — all trained in-house, all passionate about hospitality.
  - heading "We Handle Everything" [level=3]
  - paragraph: Groceries, cooking, service, cleanup. You do not lift a finger. Not even to make a grocery list.
  - heading "We Know Bali" [level=3]
  - paragraph: 8 years serving villas across Seminyak, Canggu, Ubud, Uluwatu, and Sanur. We know the markets, the kitchens, the rhythm.
  - heading "Same-Day Response" [level=3]
  - paragraph: Most inquiries confirmed within the hour. Proposals delivered within 24 hours. No waiting games.
  - heading "12,000+ Happy Guests" [level=3]
  - paragraph: Families, honeymooners, CEOs, wedding parties. A 4.9 average rating across 500+ villa experiences.
  - paragraph: 560+
  - paragraph: Villas Served
  - paragraph: 12,000+
  - paragraph: Happy Guests
  - paragraph: "4.9"
  - paragraph: Average Rating
  - paragraph: 8+
  - paragraph: Years in Bali
  - button "Quick estimate Tap to get a fast starting price for dinner, catering, events or staffing before you open WhatsApp.":
    - text: Quick estimate
    - paragraph: Tap to get a fast starting price for dinner, catering, events or staffing before you open WhatsApp.
  - figure "Villa Award 2025 Best Choice — Private Dining":
    - img "Villa Award 2025 — Best Choice for Private Dining"
    - paragraph: Villa Award 2025
    - paragraph: Best Choice — Private Dining
  - img "Awarded Best Partner 2026 — myCHEF Private Villa Dining"
  - figure "Villa Award 2026 Best Choice — Private Dining":
    - img "Villa Award 2026 — Best Choice for Private Dining"
    - paragraph: Villa Award 2026
    - paragraph: Best Choice — Private Dining
  - paragraph: Testimonials
  - heading "Guest moments worth repeating" [level=2]
  - paragraph: Private dinners, wedding weekends and hosted events — the details guests remember most.
  - article:
    - text: Private Dinner
    - paragraph: “We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.”
    - text: J&
    - paragraph: James & Sarah
    - paragraph: Seminyak Villa
    - text: March 2026
  - article:
    - text: Anniversary Dinner
    - paragraph: “Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.”
    - text: TH
    - paragraph: The Harrisons
    - paragraph: Ubud Estate
    - text: February 2026
  - article:
    - text: Wedding Dinner
    - paragraph: “Our wedding dinner for 40 guests. Every plate came out perfect. Every server knew our names. It felt like a five-star restaurant in our garden.”
    - text: TG
    - paragraph: The Garcias
    - paragraph: Canggu Garden Villa
    - text: January 2026
  - paragraph: Guest Words
  - heading "25 Reviews. One Truth." [level=2]
  - paragraph: Real guests. Real villas. Real experiences.
  - paragraph: "\"We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.\""
  - paragraph: James & Sarah
  - paragraph: London
  - text: Fine Dining
  - paragraph: "\"Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.\""
  - paragraph: The Harrisons
  - paragraph: Sydney
  - text: Fine Dining
  - paragraph: "\"As Italians, we are picky about our food. The tagliatelle transported us back to Bologna. The wine pairing was impeccable.\""
  - paragraph: Marco & Elena
  - paragraph: Milan
  - text: Fine Dining
  - paragraph: "\"We booked the Wagyu Experience for my father's 70th. He has eaten at three Michelin stars. He said this was better because it was ours.\""
  - paragraph: The Wilson Family
  - paragraph: Singapore
  - text: Fine Dining
  - paragraph: "\"The Mediterranean Sea menu was light, sophisticated, and deeply flavourful. Every plate looked like art. Every bite tasted like summer in Sicily.\""
  - paragraph: Priya & Rahul
  - paragraph: Mumbai
  - text: Fine Dining
  - paragraph: "\"The ribeye was the best piece of meat I have had in a decade. The fire, the technique, the timing — this team understands heat.\""
  - paragraph: David Chen
  - paragraph: Hong Kong
  - text: Fine Dining
  - paragraph: "\"Seven breakfasts, five lunches, four dinners across ten days. Never the same dish twice. The kids asked if the chef could move in.\""
  - paragraph: The O'Briens
  - paragraph: Dublin
  - text: Catering
  - paragraph: "\"We hired a villa chef for our honeymoon. Waking up to fresh croissants and Balinese coffee every morning — that is the definition of luxury.\""
  - paragraph: Lisa & Tom
  - paragraph: Amsterdam
  - text: Catering
  - paragraph: "\"Our chef adjusted every meal for our children's tastes without making it feel like kids' food. The level of care was extraordinary.\""
  - paragraph: The Nakamura Family
  - paragraph: Tokyo
  - text: Catering
  - paragraph: "\"Ten days in Ubud with a private chef. We never went to a restaurant. Why would we? The best food in Bali was in our villa.\""
  - paragraph: Sophie & Pierre
  - paragraph: Paris
  - text: Catering
  - paragraph: "\"We have used private chefs in Tuscany, Provence, and the Hamptons. The myCHEF team in Bali was the most professional of all.\""
  - paragraph: The Johnsons
  - paragraph: New York
  - text: Catering
  - paragraph: "\"As a vegetarian in Bali, I was worried. The chef created dishes I still dream about. Grilled tempeh with sambal mataku — unforgettable.\""
  - paragraph: Anna K.
  - paragraph: Berlin
  - text: Catering
  - paragraph: "\"Our wedding dinner for 40 guests. Every plate came out perfect. Every server knew our names. It felt like a five-star restaurant in our garden.\""
  - paragraph: The Garcias
  - paragraph: Barcelona
  - text: Events
  - paragraph: "\"We hosted a retreat for 25 executives. The myCHEF team handled everything — dietary restrictions, timing, presentation. Flawless.\""
  - paragraph: Rebecca & Sam
  - paragraph: Melbourne
  - text: Events
  - paragraph: "\"My 50th birthday party. They turned our villa pool deck into a dining room that looked like something from a magazine. And the food matched.\""
  - paragraph: Michael R.
  - paragraph: Dubai
  - text: Events
  - paragraph: "\"Corporate dinner for 30. The team arrived at 2 PM and worked silently until service. Not a single detail was missed.\""
  - paragraph: The Lims
  - paragraph: Kuala Lumpur
  - text: Events
  - paragraph: "\"We wanted something intimate for our engagement. They created a candlelit dinner for twelve that felt like a scene from a film.\""
  - paragraph: Clara & Felix
  - paragraph: Zurich
  - text: Events
  - paragraph: "\"Our daughter's graduation dinner. The dessert table alone — those pastries are worth the flight to Bali.\""
  - paragraph: The Patels
  - paragraph: Mumbai
  - text: Events
  - paragraph: "\"We have done tasting menus in Napa, Paris, and Tokyo. The Wagyu Experience at our villa rivalled all of them. The team is world-class.\""
  - paragraph: Richard & Amanda
  - paragraph: San Francisco
  - text: Fine Dining
  - paragraph: "\"Two weeks in Canggu with daily chef service. The grocery receipts were transparent, the food was exceptional, and the kitchen was cleaner when they left than when they arrived.\""
  - paragraph: The Müllers
  - paragraph: Munich
  - text: Catering
  - paragraph: "\"The sommelier paired a Sicilian white with the lobster tagliatelle that made me cry. Not exaggerating. It was that good.\""
  - paragraph: Jessica & Ben
  - paragraph: Toronto
  - text: Fine Dining
  - paragraph: "\"100 guests for our company anniversary. They served a seven-course plated dinner with military precision. Every guest commented on the food.\""
  - paragraph: The Kwons
  - paragraph: Seoul
  - text: Events
  - paragraph: "\"Fresh juice every morning, poolside lunches, candlelit dinners. We felt like we were living in a luxury resort — except it was our villa.\""
  - paragraph: Olivia & Marcus
  - paragraph: Stockholm
  - text: Catering
  - paragraph: "\"We asked for a surprise menu. What arrived was a journey through Adriano's career — Modena, Tokyo, Bali. Each course told a story.\""
  - paragraph: The Fosters
  - paragraph: Chicago
  - text: Fine Dining
  - paragraph: "\"Traditional Japanese wedding ceremony followed by a Western-style reception. The team respected every ritual while delivering world-class cuisine.\""
  - paragraph: Yuki & Kenji
  - paragraph: Osaka
  - text: Events
  - link "Read All Reviews":
    - /url: /reviews
  - paragraph: Where We Serve
  - heading "Private Chef Across Bali" [level=2]
  - paragraph: From Seminyak's beachfront villas to Ubud's jungle retreats — we know every kitchen, every market, every road.
  - link "Private chef in Seminyak, Bali Seminyak Private Chef":
    - /url: /seminyak
    - img "Private chef in Seminyak, Bali"
    - paragraph: Seminyak
    - paragraph: Private Chef
  - link "Private chef in Canggu, Bali Canggu Private Chef":
    - /url: /canggu
    - img "Private chef in Canggu, Bali"
    - paragraph: Canggu
    - paragraph: Private Chef
  - link "Private chef in Ubud, Bali Ubud Private Chef":
    - /url: /ubud
    - img "Private chef in Ubud, Bali"
    - paragraph: Ubud
    - paragraph: Private Chef
  - link "Private chef in Uluwatu, Bali Uluwatu Private Chef":
    - /url: /uluwatu
    - img "Private chef in Uluwatu, Bali"
    - paragraph: Uluwatu
    - paragraph: Private Chef
  - link "Private chef in Sanur, Bali Sanur Private Chef":
    - /url: /sanur
    - img "Private chef in Sanur, Bali"
    - paragraph: Sanur
    - paragraph: Private Chef
  - link "Private chef in Nusa Dua, Bali Nusa Dua Private Chef":
    - /url: /nusa-dua
    - img "Private chef in Nusa Dua, Bali"
    - paragraph: Nusa Dua
    - paragraph: Private Chef
  - link "Private chef in Jimbaran, Bali Jimbaran Private Chef":
    - /url: /jimbaran
    - img "Private chef in Jimbaran, Bali"
    - paragraph: Jimbaran
    - paragraph: Private Chef
  - link "Private chef in Berawa, Bali Berawa Private Chef":
    - /url: /berawa
    - img "Private chef in Berawa, Bali"
    - paragraph: Berawa
    - paragraph: Private Chef
  - link "Private chef in Pererenan, Bali Pererenan Private Chef":
    - /url: /pererenan
    - img "Private chef in Pererenan, Bali"
    - paragraph: Pererenan
    - paragraph: Private Chef
  - link "Private chef in Bukit, Bali Bukit Private Chef":
    - /url: /bukit
    - img "Private chef in Bukit, Bali"
    - paragraph: Bukit
    - paragraph: Private Chef
  - link "View All Locations":
    - /url: /locations
  - paragraph: Partnerships
  - heading "For Villa & Airbnb Owners" [level=2]
  - paragraph: Elevate your guests' experience by partnering with myCHEF. We currently work with 560+ luxury villas across Bali. Whatever your guests need, we lift everything we touch with excellence.
  - paragraph: Premium Guest Service
  - paragraph: Offer exclusive dining without any effort on your part.
  - paragraph: Easy Partnership
  - paragraph: Simple setup with ongoing support for you and your guests.
  - paragraph: Higher Ratings
  - paragraph: Villas that offer private chef services see higher guest satisfaction and repeat bookings.
  - link "Partner With myCHEF":
    - /url: /partners
  - img "Luxury villa partnership"
  - paragraph: Questions
  - heading "Frequently Asked" [level=2]
  - paragraph: Still unsure? Message us on WhatsApp — we respond within the hour.
  - button "How far in advance should I book?" [expanded]
  - region "How far in advance should I book?":
    - paragraph: For fine dining, 7+ days is ideal. For villa chefs, 3+ days. For events, 4+ weeks. But message us anyway — we accommodate last-minute requests whenever possible.
  - button "Do you serve all areas of Bali?" [expanded]
  - region "Do you serve all areas of Bali?":
    - paragraph: Yes. Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, and everywhere in between. We have chefs based across the island.
  - button "What about dietary restrictions?" [expanded]
  - region "What about dietary restrictions?":
    - paragraph: Every menu is tailored. Gluten-free, vegan, halal, nut allergies, pregnancy-friendly — just tell us. We have done it all.
  - button "Are groceries included in the price?" [expanded]
  - region "Are groceries included in the price?":
    - paragraph: For fine dining and events, ingredients are included. For villa chef catering, groceries are billed at cost with no markup — you see every receipt.
  - button "How many staff will come to my villa?"
  - region "How many staff will come to my villa?":
    - paragraph: "Fine dining: 6–10 staff (chef, sous chef, servers, sommelier). Villa chef: 1–2 chefs. Events: depends on scale, quoted in your proposal."
  - button "What is the cancellation policy?"
  - region "What is the cancellation policy?":
    - paragraph: Full refund 14+ days before. 50% refund 7–13 days before. No refund less than 7 days. See our full cancellation policy for details.
  - button "How does payment work?"
  - region "How does payment work?":
    - paragraph: A 25% deposit confirms your booking and locks your chef. The remaining 75% is paid when the chef arrives at your villa, before service begins.
  - link "Ask on WhatsApp":
    - /url: https://wa.me/6282237565997
  - paragraph: Journal
  - heading "Explore Our Journal" [level=2]
  - paragraph: Planning a villa dinner, wedding weekend, or Bali breakfast setup? Browse our latest guides for practical hosting tips.
  - link "Visit the Journal":
    - /url: /journal
  - link "How to Host a Villa Dinner Party in Bali (Complete Guide)":
    - /url: /journal/bali-villa-dinner-party-guide
  - 'link "Bali Wedding Catering Cost: What to Budget in 2025"':
    - /url: /journal/wedding-catering-bali-cost
  - 'link "The Bali Floating Breakfast: History, Recipes & How to Order One"':
    - /url: /journal/floating-breakfast-bali
  - img "Bali landscape"
  - paragraph: Ready When You Are
  - heading "Your Villa. Our Kitchen. One Message Away." [level=2]
  - paragraph: Most inquiries are answered within the hour. No deposit required to start planning.
  - link "Get My Free Quote":
    - /url: https://wa.me/6282237565997
  - link "View All Contact Options":
    - /url: /contact
- text: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
- contentinfo:
  - heading "myCHEF" [level=3]
  - paragraph: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
  - link "+62 822-3756-5997":
    - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
  - link "indonesia@mychef.id":
    - /url: mailto:indonesia@mychef.id
  - heading "Fine Dining" [level=4]
  - list:
    - listitem:
      - link "Overview":
        - /url: /fine-dining
    - listitem:
      - link "Private Chef in Bali":
        - /url: /fine-dining/private-chef-bali
    - listitem:
      - link "Tasting Menu":
        - /url: /fine-dining/tasting-menu
    - listitem:
      - link "Romantic Dinner":
        - /url: /fine-dining/romantic-dinner
    - listitem:
      - link "Chef’s Table":
        - /url: /fine-dining/chefs-table
    - listitem:
      - link "Our Menus":
        - /url: /fine-dining/menus
    - listitem:
      - link "Our Chefs":
        - /url: /fine-dining/our-chefs
  - heading "Catering" [level=4]
  - list:
    - listitem:
      - link "Overview":
        - /url: /catering
    - listitem:
      - link "BBQ Catering":
        - /url: /catering/bbq-catering
    - listitem:
      - link "Buffet Catering":
        - /url: /catering/buffet
    - listitem:
      - link "Plated Set Menu":
        - /url: /catering/plated-catering
    - listitem:
      - link "Drop-Off Catering":
        - /url: /catering/drop-off-catering
    - listitem:
      - link "Babi Guling":
        - /url: /catering/babi-guling
    - listitem:
      - link "Grazing Tables":
        - /url: /catering/grazing-tables
    - listitem:
      - link "Floating Breakfast":
        - /url: /catering/floating-breakfast
    - listitem:
      - link "Corporate Catering":
        - /url: /catering/corporate-catering
    - listitem:
      - link "Retreat Catering":
        - /url: /catering/retreat-catering
  - heading "Events" [level=4]
  - list:
    - listitem:
      - link "Overview":
        - /url: /events
    - listitem:
      - link "Weddings":
        - /url: /events/weddings
    - listitem:
      - link "Birthdays":
        - /url: /events/birthdays
    - listitem:
      - link "Anniversaries":
        - /url: /events/anniversaries
    - listitem:
      - link "Corporate Events":
        - /url: /events/corporate-events
    - listitem:
      - link "Retreats":
        - /url: /events/retreats
    - listitem:
      - link "Villa Parties":
        - /url: /events/villa-parties
    - listitem:
      - link "Baby Showers":
        - /url: /events/baby-showers
  - heading "In-Villa Service" [level=4]
  - list:
    - listitem:
      - link "Overview":
        - /url: /in-villa-service
    - listitem:
      - link "Waiters":
        - /url: /in-villa-service/waiters
    - listitem:
      - link "Butlers":
        - /url: /in-villa-service/butlers
    - listitem:
      - link "Bartenders":
        - /url: /in-villa-service/bartenders
    - listitem:
      - link "Mixology":
        - /url: /in-villa-service/mixology
    - listitem:
      - link "Sommelier":
        - /url: /in-villa-service/sommelier
    - listitem:
      - link "Host & Hostess":
        - /url: /in-villa-service/host-hostess
  - heading "Staffing" [level=4]
  - list:
    - listitem:
      - link "Overview":
        - /url: /staffing
    - listitem:
      - link "Private Chef Placement":
        - /url: /staffing/private-chef-placement
    - listitem:
      - link "Live-In Chef":
        - /url: /staffing/live-in-chef
    - listitem:
      - link "Villa Staff":
        - /url: /staffing/villa-staff
    - listitem:
      - link "Household Staff":
        - /url: /staffing/household-staff
    - listitem:
      - link "For Villa Managers":
        - /url: /staffing/for-villa-managers
    - listitem:
      - link "For Hotels & Restaurants":
        - /url: /staffing/for-hotels-restaurants
  - heading "Locations" [level=4]
  - list:
    - listitem:
      - link "All Locations":
        - /url: /locations
    - listitem:
      - link "Seminyak":
        - /url: /locations/seminyak
    - listitem:
      - link "Canggu":
        - /url: /locations/canggu
    - listitem:
      - link "Uluwatu":
        - /url: /locations/uluwatu
    - listitem:
      - link "Ubud":
        - /url: /locations/ubud
    - listitem:
      - link "Nusa Dua":
        - /url: /locations/nusa-dua
    - listitem:
      - link "Jimbaran":
        - /url: /locations/jimbaran
    - listitem:
      - link "Sanur":
        - /url: /locations/sanur
    - listitem:
      - link "Berawa":
        - /url: /locations/berawa
    - listitem:
      - link "Pererenan":
        - /url: /locations/pererenan
    - listitem:
      - link "Bukit Peninsula":
        - /url: /locations/bukit
  - link "Catering":
    - /url: /catering
  - link "Locations":
    - /url: /locations
  - link "About":
    - /url: /about
  - link "Contact":
    - /url: /contact
  - link "Services":
    - /url: /services
  - link "Pricing":
    - /url: /pricing
  - link "Price Calculator":
    - /url: /calculator
  - link "FAQ":
    - /url: /faq
  - link "Reviews":
    - /url: /reviews
  - link "Why myCHEF":
    - /url: /why-mychef
  - link "Press":
    - /url: /press
  - link "Join the Team":
    - /url: /join-our-team
  - link "Partner Platform":
    - /url: /partner-platform
  - link "Journal":
    - /url: /journal
  - link "Blog & Guides":
    - /url: /blog
  - link "Book":
    - /url: /book
  - link "+62 822-3756-5997":
    - /url: tel:+6282237565997
  - link "indonesia@mychef.id":
    - /url: mailto:indonesia@mychef.id
  - text: Bali, Indonesia
  - link "Instagram":
    - /url: https://instagram.com/mychef.id
  - link "WhatsApp":
    - /url: https://wa.me/6282237565997
  - link "Staff Login":
    - /url: /partner-platform
  - link "Terms":
    - /url: /terms
  - link "Privacy":
    - /url: /privacy
  - link "Cancellation":
    - /url: /cancellation
  - paragraph: © 2026 myCHEF.id. All rights reserved.
- text: Chat with us on WhatsApp
- link "Chat with us on WhatsApp":
  - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Google Analytics 4 Tracking', () => {
  4   |   test('gtag script is loaded on homepage', async ({ page }) => {
  5   |     await page.goto('/');
  6   | 
  7   |     // Check gtag script exists in DOM
  8   |     const gtagScript = page.locator('script[src*="googletagmanager.com/gtag"]');
> 9   |     await expect(gtagScript).toBeVisible();
      |                              ^ Error: expect(locator).toBeVisible() failed
  10  |   });
  11  | 
  12  |   test('gtag global function is available', async ({ page }) => {
  13  |     await page.goto('/');
  14  | 
  15  |     // Verify gtag is available in window
  16  |     const gtagAvailable = await page.evaluate(() => {
  17  |       return typeof (window as any).gtag === 'function';
  18  |     });
  19  |     expect(gtagAvailable).toBe(true);
  20  |   });
  21  | 
  22  |   test('GA4 measurement ID is configured correctly', async ({ page }) => {
  23  |     await page.goto('/');
  24  | 
  25  |     // Verify measurement ID G-W0PQH8ZKTF is in the gtag.js script
  26  |     const scriptContent = await page.locator('script[src*="googletagmanager.com/gtag"]').getAttribute('src');
  27  |     expect(scriptContent).toContain('G-W0PQH8ZKTF');
  28  |   });
  29  | 
  30  |   test('dataLayer is initialized', async ({ page }) => {
  31  |     await page.goto('/');
  32  | 
  33  |     // Verify dataLayer array exists
  34  |     const dataLayerExists = await page.evaluate(() => {
  35  |       return Array.isArray((window as any).dataLayer);
  36  |     });
  37  |     expect(dataLayerExists).toBe(true);
  38  |   });
  39  | 
  40  |   test('gtag config is called with correct measurement ID', async ({ page }) => {
  41  |     const gtdataPushCalls: any[] = [];
  42  | 
  43  |     // Intercept gtag calls
  44  |     await page.evaluate(() => {
  45  |       const originalPush = (window as any).dataLayer.push;
  46  |       (window as any).dataLayer.push = function(...args: any[]) {
  47  |         (window as any).__gtag_calls = (window as any).__gtag_calls || [];
  48  |         (window as any).__gtag_calls.push(args);
  49  |         return originalPush.apply(this, args);
  50  |       };
  51  |     });
  52  | 
  53  |     await page.goto('/');
  54  | 
  55  |     // Check that config was called
  56  |     const configCalled = await page.evaluate(() => {
  57  |       const calls = (window as any).__gtag_calls || [];
  58  |       return calls.some((call: any[]) => {
  59  |         const firstArg = call[0];
  60  |         return Array.isArray(firstArg) && firstArg[0] === 'config' && firstArg[1] === 'G-W0PQH8ZKTF';
  61  |       });
  62  |     });
  63  | 
  64  |     expect(configCalled).toBe(true);
  65  |   });
  66  | 
  67  |   test('page views are tracked on navigation', async ({ page }) => {
  68  |     // Listen for network requests to Google Analytics
  69  |     const gaTracks: string[] = [];
  70  |     page.on('request', request => {
  71  |       if (request.url().includes('google-analytics') || request.url().includes('googletagmanager')) {
  72  |         gaTracks.push(request.url());
  73  |       }
  74  |     });
  75  | 
  76  |     await page.goto('/');
  77  |     await page.waitForTimeout(500);
  78  | 
  79  |     // Navigate to another page
  80  |     await page.goto('/fine-dining');
  81  |     await page.waitForTimeout(500);
  82  | 
  83  |     // GA request should have been made
  84  |     expect(gaTracks.length).toBeGreaterThan(0);
  85  |   });
  86  | 
  87  |   test('GA4 tracking works across multiple pages', async ({ page }) => {
  88  |     const gaTracks: { url: string, timestamp: number }[] = [];
  89  | 
  90  |     page.on('request', request => {
  91  |       if (request.url().includes('collect')) {
  92  |         gaTracks.push({
  93  |           url: request.url(),
  94  |           timestamp: Date.now()
  95  |         });
  96  |       }
  97  |     });
  98  | 
  99  |     // Visit multiple pages
  100 |     const pages = ['/', '/fine-dining', '/catering', '/events'];
  101 | 
  102 |     for (const pagePath of pages) {
  103 |       await page.goto(pagePath);
  104 |       await page.waitForTimeout(300);
  105 |     }
  106 | 
  107 |     // Should have tracking requests
  108 |     expect(gaTracks.length).toBeGreaterThan(0);
  109 |   });
```