# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility-audit.spec.ts >> Accessibility & Visual Audit >> verify headings hierarchy
- Location: tests/e2e/accessibility-audit.spec.ts:116:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "Skip to main content" [ref=e4] [cursor=pointer]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e5]:
    - generic [ref=e6]:
      - link "myCHEF" [ref=e7] [cursor=pointer]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e12]: myCHEF
      - generic [ref=e13]:
        - link "Fine Dining" [ref=e15] [cursor=pointer]:
          - /url: /fine-dining
          - text: Fine Dining
        - link "Catering" [ref=e17] [cursor=pointer]:
          - /url: /catering
          - text: Catering
        - link "Events" [ref=e19] [cursor=pointer]:
          - /url: /events
          - text: Events
        - link "In-Villa" [ref=e21] [cursor=pointer]:
          - /url: /in-villa-service
          - text: In-Villa
        - link "Staffing" [ref=e23] [cursor=pointer]:
          - /url: /staffing
          - text: Staffing
        - link "Locations" [ref=e25] [cursor=pointer]:
          - /url: /locations
          - text: Locations
        - link "About" [ref=e27] [cursor=pointer]:
          - /url: /about
          - text: About
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: /contact
          - text: Contact
      - generic [ref=e30]:
        - link "Pricing" [ref=e31] [cursor=pointer]:
          - /url: /pricing
        - link "Book" [ref=e32] [cursor=pointer]:
          - /url: /book
  - main [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - paragraph [ref=e38]: Your Villa. Our Kitchen.
          - heading "A Michelin-Trained Private Chef, in Your Bali Villa." [level=1] [ref=e39]
          - paragraph [ref=e41]: Private dining, catering & events across Bali. We shop, cook & clean. You just enjoy.
          - paragraph [ref=e42]: Founded by Adriano — trained under a Michelin-starred chef in Milan — myCHEF.id brings extraordinary dining to Bali's finest villas. A team of 50+ Indonesian hospitality professionals handles everything, from grocery sourcing to the last clean plate. We are not a marketplace. We are a kitchen that travels.
          - generic [ref=e43]:
            - link "Get My Free Quote" [ref=e44] [cursor=pointer]:
              - /url: https://wa.me/6282237565997?text=Hi%2C%20I%27d%20like%20to%20book%20a%20private%20chef%20for%20my%20Bali%20villa.
              - img [ref=e45]
              - text: Get My Free Quote
              - generic [ref=e47]: →
            - link "Browse Menus & Pricing" [ref=e48] [cursor=pointer]:
              - /url: /pricing
              - text: Browse Menus & Pricing
              - img [ref=e49]
          - paragraph [ref=e52]:
            - img "Available" [ref=e53]: 🟢
            - text: Available this weekend · Reply within 1 hour
          - paragraph [ref=e54]: Weekends fill fast — book early
          - paragraph [ref=e55]: No booking fee · Free consultation · Replies within 1 hour
          - generic [ref=e59]:
            - generic [ref=e60]:
              - img [ref=e62]
              - generic [ref=e65]:
                - paragraph [ref=e66]: Same-day confirmation or your money back
                - paragraph [ref=e67]: If your chef can't make it, we send a replacement within 2 hours or refund 100%
            - generic [ref=e68]:
              - img [ref=e70]
              - generic [ref=e75]:
                - paragraph [ref=e76]: Chef replacement guarantee
                - paragraph [ref=e77]: Same-day replacement or full refund — your evening is protected
          - generic [ref=e78]:
            - generic [ref=e79]: 560+ Villas Served
            - generic [ref=e80]: 12,000+ Happy Guests
            - generic [ref=e81]: 4.9 ★ Rating
            - generic [ref=e82]: 8+ Years in Bali
          - generic [ref=e84]:
            - generic [ref=e85]:
              - paragraph [ref=e86]: Still deciding?
              - paragraph [ref=e87]: Most guests book within 24h of inquiry. WhatsApp us — no commitment required.
            - generic [ref=e88]:
              - link "Message us" [ref=e89] [cursor=pointer]:
                - /url: https://wa.me/6282237565997
                - text: Message us
                - img [ref=e90]
              - link "Estimate price first →" [ref=e93] [cursor=pointer]:
                - /url: /calculator
        - generic [ref=e94]:
          - generic [ref=e95]:
            - link "Fine Dining" [ref=e96] [cursor=pointer]:
              - /url: /fine-dining
            - img "Fine Dining" [ref=e97]
            - generic:
              - heading "Fine Dining" [level=3]
              - paragraph: Italian tasting menus in your villa. Two curated experiences.
              - generic:
                - text: Explore
                - img
          - generic [ref=e99]:
            - link "Events & Catering" [ref=e100] [cursor=pointer]:
              - /url: /catering
            - img "Events & Catering" [ref=e101]
            - generic:
              - heading "Events & Catering" [level=3]
              - paragraph: BBQ, buffet, plated dinners, and hosted villa events for groups of 5+.
              - generic:
                - text: Explore
                - img
          - generic [ref=e103]:
            - link "Events" [ref=e104] [cursor=pointer]:
              - /url: /events
            - img "Events" [ref=e105]
            - generic:
              - heading "Events" [level=3]
              - paragraph: Weddings, retreats, and celebrations. Fully hosted.
              - generic:
                - text: Explore
                - img
      - generic [ref=e108]:
        - generic [ref=e109]:
          - paragraph [ref=e110]: Why myCHEF
          - heading "Built to be the new standard" [level=2] [ref=e111]
          - paragraph [ref=e112]: Six things every guest, host, and villa partner gets from the first message to the last plate.
        - generic [ref=e113]:
          - generic [ref=e114]:
            - generic [ref=e115]:
              - img "100% Experience Guarantee" [ref=e116]
              - generic [ref=e118]: Promise
            - generic [ref=e119]:
              - heading "100% Experience Guarantee" [level=3] [ref=e120]
              - paragraph [ref=e121]: If the execution is not what we promised, we make it right.
          - generic [ref=e122]:
            - generic [ref=e123]:
              - img "The New Standard for Private Dining in Bali" [ref=e124]
              - generic [ref=e126]: Standard
            - generic [ref=e127]:
              - heading "The New Standard for Private Dining in Bali" [level=3] [ref=e128]
              - paragraph [ref=e129]: Built for villas, families, weddings, and hosted experiences.
          - generic [ref=e130]:
            - generic [ref=e131]:
              - img "Verified Chefs. Real Accountability." [ref=e132]
              - generic [ref=e134]: Network
            - generic [ref=e135]:
              - heading "Verified Chefs. Real Accountability." [level=3] [ref=e136]
              - paragraph [ref=e137]: Every chef is selected, reviewed, and matched to the experience.
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img "Designed for Market Dominance" [ref=e140]
              - generic [ref=e142]: Leadership
            - generic [ref=e143]:
              - heading "Designed for Market Dominance" [level=3] [ref=e144]
              - paragraph [ref=e145]: Fine dining, catering, and events delivered through one premium system.
          - generic [ref=e146]:
            - generic [ref=e147]:
              - img "From Menu to Service Flow" [ref=e148]
              - generic [ref=e150]: Execution
            - generic [ref=e151]:
              - heading "From Menu to Service Flow" [level=3] [ref=e152]
              - paragraph [ref=e153]: We handle planning, food, staffing, setup, and guest experience.
          - generic [ref=e154]:
            - generic [ref=e155]:
              - img "Built for Villas, Hosts, and Private Guests" [ref=e156]
              - generic [ref=e158]: Hosts
            - generic [ref=e159]:
              - heading "Built for Villas, Hosts, and Private Guests" [level=3] [ref=e160]
              - paragraph [ref=e161]: Professional presentation, clear process, and repeatable quality.
      - generic [ref=e163]:
        - generic [ref=e164]:
          - paragraph [ref=e165]: Simple as It Gets
          - heading "How It Works" [level=2] [ref=e166]
          - paragraph [ref=e167]: From first message to first bite — four steps. No stress. No surprises.
        - generic [ref=e168]:
          - generic [ref=e169]:
            - img [ref=e171]
            - generic [ref=e173]: Step 01
            - heading "Message Us on WhatsApp" [level=3] [ref=e174]
            - paragraph [ref=e175]: Tell us your dates, villa location, and how many guests. Takes two minutes.
          - generic [ref=e176]:
            - img [ref=e178]
            - generic [ref=e182]: Step 02
            - heading "We Plan Everything" [level=3] [ref=e183]
            - paragraph [ref=e184]: Our concierge designs your menu or event. You approve — or we adjust. No pressure.
          - generic [ref=e185]:
            - img [ref=e187]
            - generic [ref=e190]: Step 03
            - heading "We Shop, Prep & Cook" [level=3] [ref=e191]
            - paragraph [ref=e192]: Groceries sourced fresh that morning. We arrive at your villa ready to cook.
          - generic [ref=e193]:
            - img [ref=e195]
            - generic [ref=e200]: Step 04
            - heading "You Enjoy. We Clean." [level=3] [ref=e201]
            - paragraph [ref=e202]: Sit back, eat, laugh. When you are done, we leave your kitchen spotless.
        - link "Start on WhatsApp" [ref=e204] [cursor=pointer]:
          - /url: https://wa.me/6282237565997
          - img [ref=e205]
          - text: Start on WhatsApp
      - generic [ref=e209]:
        - img "The myCHEF team" [ref=e211]
        - generic [ref=e212]:
          - paragraph [ref=e213]: Who We Are
          - heading "A Team Built on Passion, Not Pitch Decks" [level=2] [ref=e214]
          - paragraph [ref=e216]: myCHEF.id was born when Adriano — trained under a Michelin-starred chef in Milan — arrived in Bali and saw a gap. The island had world-class villas. It had incredible ingredients. But the connection between them was missing.
          - paragraph [ref=e217]: "Today we are a team of 50+ Indonesian hospitality professionals. Chefs trained in Italian technique. Servers who anticipate before you ask. Event producers who have handled 200+ weddings and corporate retreats. Every person on our team shares one belief: extraordinary food should not require leaving your villa."
          - paragraph [ref=e218]: We are not a marketplace. We are not an app. We are a kitchen that travels — and we take that seriously.
          - generic [ref=e219]:
            - generic [ref=e220]:
              - img [ref=e221]
              - generic [ref=e223]: Michelin-trained leadership
            - generic [ref=e224]:
              - img [ref=e225]
              - generic [ref=e227]: 50+ staff
            - generic [ref=e228]:
              - img [ref=e229]
              - generic [ref=e231]: 560+ villas served
            - generic [ref=e232]:
              - img [ref=e233]
              - generic [ref=e235]: 12,000+ guests
      - generic [ref=e237]:
        - generic [ref=e238]:
          - paragraph [ref=e239]: Why Choose Us
          - heading "What Makes Us Different" [level=2] [ref=e240]
          - paragraph [ref=e241]: Anyone can cook. We build experiences.
        - generic [ref=e242]:
          - generic [ref=e243]:
            - img [ref=e244]
            - heading "Michelin-Trained Leadership" [level=3] [ref=e247]
            - paragraph [ref=e248]: Adriano trained under a Michelin-starred chef in Milan. His standards are the baseline for every dish.
          - generic [ref=e249]:
            - img [ref=e250]
            - heading "50+ Indonesian Professionals" [level=3] [ref=e255]
            - paragraph [ref=e256]: Chefs, servers, bartenders, and event staff — all trained in-house, all passionate about hospitality.
          - generic [ref=e257]:
            - img [ref=e258]
            - heading "We Handle Everything" [level=3] [ref=e260]
            - paragraph [ref=e261]: Groceries, cooking, service, cleanup. You do not lift a finger. Not even to make a grocery list.
          - generic [ref=e262]:
            - img [ref=e263]
            - heading "We Know Bali" [level=3] [ref=e266]
            - paragraph [ref=e267]: 8 years serving villas across Seminyak, Canggu, Ubud, Uluwatu, and Sanur. We know the markets, the kitchens, the rhythm.
          - generic [ref=e268]:
            - img [ref=e269]
            - heading "Same-Day Response" [level=3] [ref=e272]
            - paragraph [ref=e273]: Most inquiries confirmed within the hour. Proposals delivered within 24 hours. No waiting games.
          - generic [ref=e274]:
            - img [ref=e275]
            - heading "12,000+ Happy Guests" [level=3] [ref=e277]
            - paragraph [ref=e278]: Families, honeymooners, CEOs, wedding parties. A 4.9 average rating across 500+ villa experiences.
      - generic [ref=e280]:
        - generic [ref=e281]:
          - generic [ref=e282]:
            - img [ref=e283]
            - paragraph [ref=e286]: 560+
            - paragraph [ref=e287]: Villas Served
          - generic [ref=e288]:
            - img [ref=e289]
            - paragraph [ref=e294]: 12,000+
            - paragraph [ref=e295]: Happy Guests
          - generic [ref=e296]:
            - img [ref=e297]
            - paragraph [ref=e299]: "4.9"
            - paragraph [ref=e300]: Average Rating
          - generic [ref=e301]:
            - img [ref=e302]
            - paragraph [ref=e305]: 8+
            - paragraph [ref=e306]: Years in Bali
        - button "Quick estimate Tap to get a fast starting price for dinner, catering, events or staffing before you open WhatsApp." [ref=e310] [cursor=pointer]:
          - generic [ref=e311]:
            - generic [ref=e312]:
              - img [ref=e313]
              - text: Quick estimate
            - paragraph [ref=e324]: Tap to get a fast starting price for dinner, catering, events or staffing before you open WhatsApp.
          - img [ref=e326]
        - generic [ref=e329]:
          - figure "Villa Award 2025 Best Choice — Private Dining" [ref=e330]:
            - img "Villa Award 2025 — Best Choice for Private Dining" [ref=e331]
            - generic [ref=e332]:
              - paragraph [ref=e333]: Villa Award 2025
              - paragraph [ref=e334]: Best Choice — Private Dining
          - img "Awarded Best Partner 2026 — myCHEF Private Villa Dining"
          - figure "Villa Award 2026 Best Choice — Private Dining" [ref=e335]:
            - img "Villa Award 2026 — Best Choice for Private Dining" [ref=e336]
            - generic [ref=e337]:
              - paragraph [ref=e338]: Villa Award 2026
              - paragraph [ref=e339]: Best Choice — Private Dining
      - generic [ref=e341]:
        - generic [ref=e342]:
          - paragraph [ref=e343]: Testimonials
          - heading "Guest moments worth repeating" [level=2] [ref=e344]
          - paragraph [ref=e345]: Private dinners, wedding weekends and hosted events — the details guests remember most.
        - generic [ref=e346]:
          - article [ref=e347]:
            - generic [ref=e348]:
              - generic "5 star review" [ref=e349]:
                - img [ref=e350]
                - img [ref=e352]
                - img [ref=e354]
                - img [ref=e356]
                - img [ref=e358]
              - generic [ref=e360]: Private Dinner
            - img [ref=e361]
            - paragraph [ref=e364]: “We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.”
            - generic [ref=e365]:
              - generic [ref=e367]: J&
              - generic [ref=e368]:
                - paragraph [ref=e369]: James & Sarah
                - paragraph [ref=e370]: Seminyak Villa
              - generic [ref=e371]:
                - img [ref=e372]
                - text: March 2026
          - article [ref=e383]:
            - generic [ref=e384]:
              - generic "5 star review" [ref=e385]:
                - img [ref=e386]
                - img [ref=e388]
                - img [ref=e390]
                - img [ref=e392]
                - img [ref=e394]
              - generic [ref=e396]: Anniversary Dinner
            - img [ref=e397]
            - paragraph [ref=e400]: “Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.”
            - generic [ref=e401]:
              - generic [ref=e403]: TH
              - generic [ref=e404]:
                - paragraph [ref=e405]: The Harrisons
                - paragraph [ref=e406]: Ubud Estate
              - generic [ref=e407]:
                - img [ref=e408]
                - text: February 2026
          - article [ref=e419]:
            - generic [ref=e420]:
              - generic "5 star review" [ref=e421]:
                - img [ref=e422]
                - img [ref=e424]
                - img [ref=e426]
                - img [ref=e428]
                - img [ref=e430]
              - generic [ref=e432]: Wedding Dinner
            - img [ref=e433]
            - paragraph [ref=e436]: “Our wedding dinner for 40 guests. Every plate came out perfect. Every server knew our names. It felt like a five-star restaurant in our garden.”
            - generic [ref=e437]:
              - generic [ref=e439]: TG
              - generic [ref=e440]:
                - paragraph [ref=e441]: The Garcias
                - paragraph [ref=e442]: Canggu Garden Villa
              - generic [ref=e443]:
                - img [ref=e444]
                - text: January 2026
      - generic [ref=e456]:
        - generic [ref=e457]:
          - paragraph [ref=e458]: Guest Words
          - heading "25 Reviews. One Truth." [level=2] [ref=e459]
          - paragraph [ref=e460]: Real guests. Real villas. Real experiences.
        - generic [ref=e461]:
          - generic [ref=e462]:
            - generic [ref=e463]:
              - img [ref=e464]
              - img [ref=e466]
              - img [ref=e468]
              - img [ref=e470]
              - img [ref=e472]
            - paragraph [ref=e474]: "\"We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.\""
            - generic [ref=e475]:
              - generic [ref=e476]:
                - paragraph [ref=e477]: James & Sarah
                - paragraph [ref=e478]: London
              - generic [ref=e479]: Fine Dining
          - generic [ref=e480]:
            - generic [ref=e481]:
              - img [ref=e482]
              - img [ref=e484]
              - img [ref=e486]
              - img [ref=e488]
              - img [ref=e490]
            - paragraph [ref=e492]: "\"Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.\""
            - generic [ref=e493]:
              - generic [ref=e494]:
                - paragraph [ref=e495]: The Harrisons
                - paragraph [ref=e496]: Sydney
              - generic [ref=e497]: Fine Dining
          - generic [ref=e498]:
            - generic [ref=e499]:
              - img [ref=e500]
              - img [ref=e502]
              - img [ref=e504]
              - img [ref=e506]
              - img [ref=e508]
            - paragraph [ref=e510]: "\"As Italians, we are picky about our food. The tagliatelle transported us back to Bologna. The wine pairing was impeccable.\""
            - generic [ref=e511]:
              - generic [ref=e512]:
                - paragraph [ref=e513]: Marco & Elena
                - paragraph [ref=e514]: Milan
              - generic [ref=e515]: Fine Dining
          - generic [ref=e516]:
            - generic [ref=e517]:
              - img [ref=e518]
              - img [ref=e520]
              - img [ref=e522]
              - img [ref=e524]
              - img [ref=e526]
            - paragraph [ref=e528]: "\"We booked the Wagyu Experience for my father's 70th. He has eaten at three Michelin stars. He said this was better because it was ours.\""
            - generic [ref=e529]:
              - generic [ref=e530]:
                - paragraph [ref=e531]: The Wilson Family
                - paragraph [ref=e532]: Singapore
              - generic [ref=e533]: Fine Dining
          - generic [ref=e534]:
            - generic [ref=e535]:
              - img [ref=e536]
              - img [ref=e538]
              - img [ref=e540]
              - img [ref=e542]
              - img [ref=e544]
            - paragraph [ref=e546]: "\"The Mediterranean Sea menu was light, sophisticated, and deeply flavourful. Every plate looked like art. Every bite tasted like summer in Sicily.\""
            - generic [ref=e547]:
              - generic [ref=e548]:
                - paragraph [ref=e549]: Priya & Rahul
                - paragraph [ref=e550]: Mumbai
              - generic [ref=e551]: Fine Dining
          - generic [ref=e552]:
            - generic [ref=e553]:
              - img [ref=e554]
              - img [ref=e556]
              - img [ref=e558]
              - img [ref=e560]
              - img [ref=e562]
            - paragraph [ref=e564]: "\"The ribeye was the best piece of meat I have had in a decade. The fire, the technique, the timing — this team understands heat.\""
            - generic [ref=e565]:
              - generic [ref=e566]:
                - paragraph [ref=e567]: David Chen
                - paragraph [ref=e568]: Hong Kong
              - generic [ref=e569]: Fine Dining
          - generic [ref=e570]:
            - generic [ref=e571]:
              - img [ref=e572]
              - img [ref=e574]
              - img [ref=e576]
              - img [ref=e578]
              - img [ref=e580]
            - paragraph [ref=e582]: "\"Seven breakfasts, five lunches, four dinners across ten days. Never the same dish twice. The kids asked if the chef could move in.\""
            - generic [ref=e583]:
              - generic [ref=e584]:
                - paragraph [ref=e585]: The O'Briens
                - paragraph [ref=e586]: Dublin
              - generic [ref=e587]: Catering
          - generic [ref=e588]:
            - generic [ref=e589]:
              - img [ref=e590]
              - img [ref=e592]
              - img [ref=e594]
              - img [ref=e596]
              - img [ref=e598]
            - paragraph [ref=e600]: "\"We hired a villa chef for our honeymoon. Waking up to fresh croissants and Balinese coffee every morning — that is the definition of luxury.\""
            - generic [ref=e601]:
              - generic [ref=e602]:
                - paragraph [ref=e603]: Lisa & Tom
                - paragraph [ref=e604]: Amsterdam
              - generic [ref=e605]: Catering
          - generic [ref=e606]:
            - generic [ref=e607]:
              - img [ref=e608]
              - img [ref=e610]
              - img [ref=e612]
              - img [ref=e614]
              - img [ref=e616]
            - paragraph [ref=e618]: "\"Our chef adjusted every meal for our children's tastes without making it feel like kids' food. The level of care was extraordinary.\""
            - generic [ref=e619]:
              - generic [ref=e620]:
                - paragraph [ref=e621]: The Nakamura Family
                - paragraph [ref=e622]: Tokyo
              - generic [ref=e623]: Catering
          - generic [ref=e624]:
            - generic [ref=e625]:
              - img [ref=e626]
              - img [ref=e628]
              - img [ref=e630]
              - img [ref=e632]
              - img [ref=e634]
            - paragraph [ref=e636]: "\"Ten days in Ubud with a private chef. We never went to a restaurant. Why would we? The best food in Bali was in our villa.\""
            - generic [ref=e637]:
              - generic [ref=e638]:
                - paragraph [ref=e639]: Sophie & Pierre
                - paragraph [ref=e640]: Paris
              - generic [ref=e641]: Catering
          - generic [ref=e642]:
            - generic [ref=e643]:
              - img [ref=e644]
              - img [ref=e646]
              - img [ref=e648]
              - img [ref=e650]
              - img [ref=e652]
            - paragraph [ref=e654]: "\"We have used private chefs in Tuscany, Provence, and the Hamptons. The myCHEF team in Bali was the most professional of all.\""
            - generic [ref=e655]:
              - generic [ref=e656]:
                - paragraph [ref=e657]: The Johnsons
                - paragraph [ref=e658]: New York
              - generic [ref=e659]: Catering
          - generic [ref=e660]:
            - generic [ref=e661]:
              - img [ref=e662]
              - img [ref=e664]
              - img [ref=e666]
              - img [ref=e668]
              - img [ref=e670]
            - paragraph [ref=e672]: "\"As a vegetarian in Bali, I was worried. The chef created dishes I still dream about. Grilled tempeh with sambal mataku — unforgettable.\""
            - generic [ref=e673]:
              - generic [ref=e674]:
                - paragraph [ref=e675]: Anna K.
                - paragraph [ref=e676]: Berlin
              - generic [ref=e677]: Catering
          - generic [ref=e678]:
            - generic [ref=e679]:
              - img [ref=e680]
              - img [ref=e682]
              - img [ref=e684]
              - img [ref=e686]
              - img [ref=e688]
            - paragraph [ref=e690]: "\"Our wedding dinner for 40 guests. Every plate came out perfect. Every server knew our names. It felt like a five-star restaurant in our garden.\""
            - generic [ref=e691]:
              - generic [ref=e692]:
                - paragraph [ref=e693]: The Garcias
                - paragraph [ref=e694]: Barcelona
              - generic [ref=e695]: Events
          - generic [ref=e696]:
            - generic [ref=e697]:
              - img [ref=e698]
              - img [ref=e700]
              - img [ref=e702]
              - img [ref=e704]
              - img [ref=e706]
            - paragraph [ref=e708]: "\"We hosted a retreat for 25 executives. The myCHEF team handled everything — dietary restrictions, timing, presentation. Flawless.\""
            - generic [ref=e709]:
              - generic [ref=e710]:
                - paragraph [ref=e711]: Rebecca & Sam
                - paragraph [ref=e712]: Melbourne
              - generic [ref=e713]: Events
          - generic [ref=e714]:
            - generic [ref=e715]:
              - img [ref=e716]
              - img [ref=e718]
              - img [ref=e720]
              - img [ref=e722]
              - img [ref=e724]
            - paragraph [ref=e726]: "\"My 50th birthday party. They turned our villa pool deck into a dining room that looked like something from a magazine. And the food matched.\""
            - generic [ref=e727]:
              - generic [ref=e728]:
                - paragraph [ref=e729]: Michael R.
                - paragraph [ref=e730]: Dubai
              - generic [ref=e731]: Events
          - generic [ref=e732]:
            - generic [ref=e733]:
              - img [ref=e734]
              - img [ref=e736]
              - img [ref=e738]
              - img [ref=e740]
              - img [ref=e742]
            - paragraph [ref=e744]: "\"Corporate dinner for 30. The team arrived at 2 PM and worked silently until service. Not a single detail was missed.\""
            - generic [ref=e745]:
              - generic [ref=e746]:
                - paragraph [ref=e747]: The Lims
                - paragraph [ref=e748]: Kuala Lumpur
              - generic [ref=e749]: Events
          - generic [ref=e750]:
            - generic [ref=e751]:
              - img [ref=e752]
              - img [ref=e754]
              - img [ref=e756]
              - img [ref=e758]
              - img [ref=e760]
            - paragraph [ref=e762]: "\"We wanted something intimate for our engagement. They created a candlelit dinner for twelve that felt like a scene from a film.\""
            - generic [ref=e763]:
              - generic [ref=e764]:
                - paragraph [ref=e765]: Clara & Felix
                - paragraph [ref=e766]: Zurich
              - generic [ref=e767]: Events
          - generic [ref=e768]:
            - generic [ref=e769]:
              - img [ref=e770]
              - img [ref=e772]
              - img [ref=e774]
              - img [ref=e776]
              - img [ref=e778]
            - paragraph [ref=e780]: "\"Our daughter's graduation dinner. The dessert table alone — those pastries are worth the flight to Bali.\""
            - generic [ref=e781]:
              - generic [ref=e782]:
                - paragraph [ref=e783]: The Patels
                - paragraph [ref=e784]: Mumbai
              - generic [ref=e785]: Events
          - generic [ref=e786]:
            - generic [ref=e787]:
              - img [ref=e788]
              - img [ref=e790]
              - img [ref=e792]
              - img [ref=e794]
              - img [ref=e796]
            - paragraph [ref=e798]: "\"We have done tasting menus in Napa, Paris, and Tokyo. The Wagyu Experience at our villa rivalled all of them. The team is world-class.\""
            - generic [ref=e799]:
              - generic [ref=e800]:
                - paragraph [ref=e801]: Richard & Amanda
                - paragraph [ref=e802]: San Francisco
              - generic [ref=e803]: Fine Dining
          - generic [ref=e804]:
            - generic [ref=e805]:
              - img [ref=e806]
              - img [ref=e808]
              - img [ref=e810]
              - img [ref=e812]
              - img [ref=e814]
            - paragraph [ref=e816]: "\"Two weeks in Canggu with daily chef service. The grocery receipts were transparent, the food was exceptional, and the kitchen was cleaner when they left than when they arrived.\""
            - generic [ref=e817]:
              - generic [ref=e818]:
                - paragraph [ref=e819]: The Müllers
                - paragraph [ref=e820]: Munich
              - generic [ref=e821]: Catering
          - generic [ref=e822]:
            - generic [ref=e823]:
              - img [ref=e824]
              - img [ref=e826]
              - img [ref=e828]
              - img [ref=e830]
              - img [ref=e832]
            - paragraph [ref=e834]: "\"The sommelier paired a Sicilian white with the lobster tagliatelle that made me cry. Not exaggerating. It was that good.\""
            - generic [ref=e835]:
              - generic [ref=e836]:
                - paragraph [ref=e837]: Jessica & Ben
                - paragraph [ref=e838]: Toronto
              - generic [ref=e839]: Fine Dining
          - generic [ref=e840]:
            - generic [ref=e841]:
              - img [ref=e842]
              - img [ref=e844]
              - img [ref=e846]
              - img [ref=e848]
              - img [ref=e850]
            - paragraph [ref=e852]: "\"100 guests for our company anniversary. They served a seven-course plated dinner with military precision. Every guest commented on the food.\""
            - generic [ref=e853]:
              - generic [ref=e854]:
                - paragraph [ref=e855]: The Kwons
                - paragraph [ref=e856]: Seoul
              - generic [ref=e857]: Events
          - generic [ref=e858]:
            - generic [ref=e859]:
              - img [ref=e860]
              - img [ref=e862]
              - img [ref=e864]
              - img [ref=e866]
              - img [ref=e868]
            - paragraph [ref=e870]: "\"Fresh juice every morning, poolside lunches, candlelit dinners. We felt like we were living in a luxury resort — except it was our villa.\""
            - generic [ref=e871]:
              - generic [ref=e872]:
                - paragraph [ref=e873]: Olivia & Marcus
                - paragraph [ref=e874]: Stockholm
              - generic [ref=e875]: Catering
          - generic [ref=e876]:
            - generic [ref=e877]:
              - img [ref=e878]
              - img [ref=e880]
              - img [ref=e882]
              - img [ref=e884]
              - img [ref=e886]
            - paragraph [ref=e888]: "\"We asked for a surprise menu. What arrived was a journey through Adriano's career — Modena, Tokyo, Bali. Each course told a story.\""
            - generic [ref=e889]:
              - generic [ref=e890]:
                - paragraph [ref=e891]: The Fosters
                - paragraph [ref=e892]: Chicago
              - generic [ref=e893]: Fine Dining
          - generic [ref=e894]:
            - generic [ref=e895]:
              - img [ref=e896]
              - img [ref=e898]
              - img [ref=e900]
              - img [ref=e902]
              - img [ref=e904]
            - paragraph [ref=e906]: "\"Traditional Japanese wedding ceremony followed by a Western-style reception. The team respected every ritual while delivering world-class cuisine.\""
            - generic [ref=e907]:
              - generic [ref=e908]:
                - paragraph [ref=e909]: Yuki & Kenji
                - paragraph [ref=e910]: Osaka
              - generic [ref=e911]: Events
        - link "Read All Reviews" [ref=e913] [cursor=pointer]:
          - /url: /reviews
          - text: Read All Reviews
          - img [ref=e914]
      - generic [ref=e918]:
        - generic [ref=e919]:
          - paragraph [ref=e920]: Where We Serve
          - heading "Private Chef Across Bali" [level=2] [ref=e921]
          - paragraph [ref=e922]: From Seminyak's beachfront villas to Ubud's jungle retreats — we know every kitchen, every market, every road.
        - generic [ref=e923]:
          - link "Private chef in Seminyak, Bali Seminyak Private Chef" [ref=e924] [cursor=pointer]:
            - /url: /seminyak
            - img "Private chef in Seminyak, Bali" [ref=e925]
            - generic [ref=e928]:
              - paragraph [ref=e929]: Seminyak
              - paragraph [ref=e930]: Private Chef
          - link "Private chef in Canggu, Bali Canggu Private Chef" [ref=e931] [cursor=pointer]:
            - /url: /canggu
            - img "Private chef in Canggu, Bali" [ref=e932]
            - generic [ref=e935]:
              - paragraph [ref=e936]: Canggu
              - paragraph [ref=e937]: Private Chef
          - link "Private chef in Ubud, Bali Ubud Private Chef" [ref=e938] [cursor=pointer]:
            - /url: /ubud
            - img "Private chef in Ubud, Bali" [ref=e939]
            - generic [ref=e942]:
              - paragraph [ref=e943]: Ubud
              - paragraph [ref=e944]: Private Chef
          - link "Private chef in Uluwatu, Bali Uluwatu Private Chef" [ref=e945] [cursor=pointer]:
            - /url: /uluwatu
            - img "Private chef in Uluwatu, Bali" [ref=e946]
            - generic [ref=e949]:
              - paragraph [ref=e950]: Uluwatu
              - paragraph [ref=e951]: Private Chef
          - link "Private chef in Sanur, Bali Sanur Private Chef" [ref=e952] [cursor=pointer]:
            - /url: /sanur
            - img "Private chef in Sanur, Bali" [ref=e953]
            - generic [ref=e956]:
              - paragraph [ref=e957]: Sanur
              - paragraph [ref=e958]: Private Chef
          - link "Private chef in Nusa Dua, Bali Nusa Dua Private Chef" [ref=e959] [cursor=pointer]:
            - /url: /nusa-dua
            - img "Private chef in Nusa Dua, Bali" [ref=e960]
            - generic [ref=e963]:
              - paragraph [ref=e964]: Nusa Dua
              - paragraph [ref=e965]: Private Chef
          - link "Private chef in Jimbaran, Bali Jimbaran Private Chef" [ref=e966] [cursor=pointer]:
            - /url: /jimbaran
            - img "Private chef in Jimbaran, Bali" [ref=e967]
            - generic [ref=e970]:
              - paragraph [ref=e971]: Jimbaran
              - paragraph [ref=e972]: Private Chef
          - link "Private chef in Berawa, Bali Berawa Private Chef" [ref=e973] [cursor=pointer]:
            - /url: /berawa
            - img "Private chef in Berawa, Bali" [ref=e974]
            - generic [ref=e977]:
              - paragraph [ref=e978]: Berawa
              - paragraph [ref=e979]: Private Chef
          - link "Private chef in Pererenan, Bali Pererenan Private Chef" [ref=e980] [cursor=pointer]:
            - /url: /pererenan
            - img "Private chef in Pererenan, Bali" [ref=e981]
            - generic [ref=e984]:
              - paragraph [ref=e985]: Pererenan
              - paragraph [ref=e986]: Private Chef
          - link "Private chef in Bukit, Bali Bukit Private Chef" [ref=e987] [cursor=pointer]:
            - /url: /bukit
            - img "Private chef in Bukit, Bali" [ref=e988]
            - generic [ref=e991]:
              - paragraph [ref=e992]: Bukit
              - paragraph [ref=e993]: Private Chef
        - link "View All Locations" [ref=e995] [cursor=pointer]:
          - /url: /locations
          - text: View All Locations
          - img [ref=e996]
      - generic [ref=e1001]:
        - generic [ref=e1002]:
          - paragraph [ref=e1003]: Partnerships
          - heading "For Villa & Airbnb Owners" [level=2] [ref=e1004]
          - paragraph [ref=e1006]: Elevate your guests' experience by partnering with myCHEF. We currently work with 560+ luxury villas across Bali. Whatever your guests need, we lift everything we touch with excellence.
          - generic [ref=e1007]:
            - generic [ref=e1008]:
              - img [ref=e1009]
              - generic [ref=e1011]:
                - paragraph [ref=e1012]: Premium Guest Service
                - paragraph [ref=e1013]: Offer exclusive dining without any effort on your part.
            - generic [ref=e1014]:
              - img [ref=e1015]
              - generic [ref=e1017]:
                - paragraph [ref=e1018]: Easy Partnership
                - paragraph [ref=e1019]: Simple setup with ongoing support for you and your guests.
            - generic [ref=e1020]:
              - img [ref=e1021]
              - generic [ref=e1023]:
                - paragraph [ref=e1024]: Higher Ratings
                - paragraph [ref=e1025]: Villas that offer private chef services see higher guest satisfaction and repeat bookings.
          - link "Partner With myCHEF" [ref=e1026] [cursor=pointer]:
            - /url: /partners
            - text: Partner With myCHEF
            - img [ref=e1027]
        - img "Luxury villa partnership" [ref=e1031]
      - generic [ref=e1033]:
        - generic [ref=e1034]:
          - paragraph [ref=e1035]: Questions
          - heading "Frequently Asked" [level=2] [ref=e1036]
          - paragraph [ref=e1037]: Still unsure? Message us on WhatsApp — we respond within the hour.
        - generic [ref=e1038]:
          - generic [ref=e1039]:
            - button "How far in advance should I book?" [expanded] [ref=e1040] [cursor=pointer]:
              - generic [ref=e1041]: How far in advance should I book?
              - img [ref=e1042]
            - region "How far in advance should I book?" [ref=e1044]:
              - paragraph [ref=e1045]: For fine dining, 7+ days is ideal. For villa chefs, 3+ days. For events, 4+ weeks. But message us anyway — we accommodate last-minute requests whenever possible.
          - generic [ref=e1046]:
            - button "Do you serve all areas of Bali?" [expanded] [ref=e1047] [cursor=pointer]:
              - generic [ref=e1048]: Do you serve all areas of Bali?
              - img [ref=e1049]
            - region "Do you serve all areas of Bali?" [ref=e1051]:
              - paragraph [ref=e1052]: Yes. Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, and everywhere in between. We have chefs based across the island.
          - generic [ref=e1053]:
            - button "What about dietary restrictions?" [expanded] [ref=e1054] [cursor=pointer]:
              - generic [ref=e1055]: What about dietary restrictions?
              - img [ref=e1056]
            - region "What about dietary restrictions?" [ref=e1058]:
              - paragraph [ref=e1059]: Every menu is tailored. Gluten-free, vegan, halal, nut allergies, pregnancy-friendly — just tell us. We have done it all.
          - generic [ref=e1060]:
            - button "Are groceries included in the price?" [expanded] [ref=e1061] [cursor=pointer]:
              - generic [ref=e1062]: Are groceries included in the price?
              - img [ref=e1063]
            - region "Are groceries included in the price?" [ref=e1065]:
              - paragraph [ref=e1066]: For fine dining and events, ingredients are included. For villa chef catering, groceries are billed at cost with no markup — you see every receipt.
          - generic [ref=e1067]:
            - button "How many staff will come to my villa?" [ref=e1068] [cursor=pointer]:
              - generic [ref=e1069]: How many staff will come to my villa?
              - img [ref=e1070]
            - region "How many staff will come to my villa?":
              - paragraph [ref=e1072]: "Fine dining: 6–10 staff (chef, sous chef, servers, sommelier). Villa chef: 1–2 chefs. Events: depends on scale, quoted in your proposal."
          - generic [ref=e1073]:
            - button "What is the cancellation policy?" [ref=e1074] [cursor=pointer]:
              - generic [ref=e1075]: What is the cancellation policy?
              - img [ref=e1076]
            - region "What is the cancellation policy?":
              - paragraph [ref=e1078]: Full refund 14+ days before. 50% refund 7–13 days before. No refund less than 7 days. See our full cancellation policy for details.
          - generic [ref=e1079]:
            - button "How does payment work?" [ref=e1080] [cursor=pointer]:
              - generic [ref=e1081]: How does payment work?
              - img [ref=e1082]
            - region "How does payment work?":
              - paragraph [ref=e1084]: A 25% deposit confirms your booking and locks your chef. The remaining 75% is paid when the chef arrives at your villa, before service begins.
        - link "Ask on WhatsApp" [ref=e1086] [cursor=pointer]:
          - /url: https://wa.me/6282237565997
          - img [ref=e1087]
          - text: Ask on WhatsApp
      - generic [ref=e1090]:
        - generic [ref=e1091]:
          - generic [ref=e1092]:
            - paragraph [ref=e1093]: Journal
            - heading "Explore Our Journal" [level=2] [ref=e1094]
            - paragraph [ref=e1095]: Planning a villa dinner, wedding weekend, or Bali breakfast setup? Browse our latest guides for practical hosting tips.
          - link "Visit the Journal" [ref=e1096] [cursor=pointer]:
            - /url: /journal
            - text: Visit the Journal
            - img [ref=e1097]
        - generic [ref=e1100]:
          - link "How to Host a Villa Dinner Party in Bali (Complete Guide)" [ref=e1101] [cursor=pointer]:
            - /url: /journal/bali-villa-dinner-party-guide
          - 'link "Bali Wedding Catering Cost: What to Budget in 2025" [ref=e1102] [cursor=pointer]':
            - /url: /journal/wedding-catering-bali-cost
          - 'link "The Bali Floating Breakfast: History, Recipes & How to Order One" [ref=e1103] [cursor=pointer]':
            - /url: /journal/floating-breakfast-bali
      - generic [ref=e1104]:
        - img "Bali landscape" [ref=e1106]
        - generic [ref=e1108]:
          - paragraph [ref=e1109]: Ready When You Are
          - heading "Your Villa. Our Kitchen. One Message Away." [level=2] [ref=e1110]:
            - text: Your Villa. Our Kitchen.
            - text: One Message Away.
          - paragraph [ref=e1111]: Most inquiries are answered within the hour. No deposit required to start planning.
          - generic [ref=e1112]:
            - link "Get My Free Quote" [ref=e1113] [cursor=pointer]:
              - /url: https://wa.me/6282237565997
              - img [ref=e1114]
              - text: Get My Free Quote
              - generic [ref=e1116]: →
            - link "View All Contact Options" [ref=e1117] [cursor=pointer]:
              - /url: /contact
  - generic [ref=e1118]: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
  - contentinfo [ref=e1119]:
    - generic [ref=e1120]:
      - generic [ref=e1121]:
        - generic [ref=e1122]:
          - heading "myCHEF" [level=3] [ref=e1123]
          - paragraph [ref=e1124]: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
        - generic [ref=e1125]:
          - link "+62 822-3756-5997" [ref=e1126] [cursor=pointer]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
            - img [ref=e1127]
            - text: +62 822-3756-5997
          - link "indonesia@mychef.id" [ref=e1129] [cursor=pointer]:
            - /url: mailto:indonesia@mychef.id
      - generic [ref=e1130]:
        - generic [ref=e1131]:
          - heading "Fine Dining" [level=4] [ref=e1132]
          - list [ref=e1133]:
            - listitem [ref=e1134]:
              - link "Overview" [ref=e1135] [cursor=pointer]:
                - /url: /fine-dining
            - listitem [ref=e1136]:
              - link "Private Chef in Bali" [ref=e1137] [cursor=pointer]:
                - /url: /fine-dining/private-chef-bali
            - listitem [ref=e1138]:
              - link "Tasting Menu" [ref=e1139] [cursor=pointer]:
                - /url: /fine-dining/tasting-menu
            - listitem [ref=e1140]:
              - link "Romantic Dinner" [ref=e1141] [cursor=pointer]:
                - /url: /fine-dining/romantic-dinner
            - listitem [ref=e1142]:
              - link "Chef’s Table" [ref=e1143] [cursor=pointer]:
                - /url: /fine-dining/chefs-table
            - listitem [ref=e1144]:
              - link "Our Menus" [ref=e1145] [cursor=pointer]:
                - /url: /fine-dining/menus
            - listitem [ref=e1146]:
              - link "Our Chefs" [ref=e1147] [cursor=pointer]:
                - /url: /fine-dining/our-chefs
        - generic [ref=e1148]:
          - heading "Catering" [level=4] [ref=e1149]
          - list [ref=e1150]:
            - listitem [ref=e1151]:
              - link "Overview" [ref=e1152] [cursor=pointer]:
                - /url: /catering
            - listitem [ref=e1153]:
              - link "BBQ Catering" [ref=e1154] [cursor=pointer]:
                - /url: /catering/bbq-catering
            - listitem [ref=e1155]:
              - link "Buffet Catering" [ref=e1156] [cursor=pointer]:
                - /url: /catering/buffet
            - listitem [ref=e1157]:
              - link "Plated Set Menu" [ref=e1158] [cursor=pointer]:
                - /url: /catering/plated-catering
            - listitem [ref=e1159]:
              - link "Drop-Off Catering" [ref=e1160] [cursor=pointer]:
                - /url: /catering/drop-off-catering
            - listitem [ref=e1161]:
              - link "Babi Guling" [ref=e1162] [cursor=pointer]:
                - /url: /catering/babi-guling
            - listitem [ref=e1163]:
              - link "Grazing Tables" [ref=e1164] [cursor=pointer]:
                - /url: /catering/grazing-tables
            - listitem [ref=e1165]:
              - link "Floating Breakfast" [ref=e1166] [cursor=pointer]:
                - /url: /catering/floating-breakfast
            - listitem [ref=e1167]:
              - link "Corporate Catering" [ref=e1168] [cursor=pointer]:
                - /url: /catering/corporate-catering
            - listitem [ref=e1169]:
              - link "Retreat Catering" [ref=e1170] [cursor=pointer]:
                - /url: /catering/retreat-catering
        - generic [ref=e1171]:
          - heading "Events" [level=4] [ref=e1172]
          - list [ref=e1173]:
            - listitem [ref=e1174]:
              - link "Overview" [ref=e1175] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e1176]:
              - link "Weddings" [ref=e1177] [cursor=pointer]:
                - /url: /events/weddings
            - listitem [ref=e1178]:
              - link "Birthdays" [ref=e1179] [cursor=pointer]:
                - /url: /events/birthdays
            - listitem [ref=e1180]:
              - link "Anniversaries" [ref=e1181] [cursor=pointer]:
                - /url: /events/anniversaries
            - listitem [ref=e1182]:
              - link "Corporate Events" [ref=e1183] [cursor=pointer]:
                - /url: /events/corporate-events
            - listitem [ref=e1184]:
              - link "Retreats" [ref=e1185] [cursor=pointer]:
                - /url: /events/retreats
            - listitem [ref=e1186]:
              - link "Villa Parties" [ref=e1187] [cursor=pointer]:
                - /url: /events/villa-parties
            - listitem [ref=e1188]:
              - link "Baby Showers" [ref=e1189] [cursor=pointer]:
                - /url: /events/baby-showers
        - generic [ref=e1190]:
          - heading "In-Villa Service" [level=4] [ref=e1191]
          - list [ref=e1192]:
            - listitem [ref=e1193]:
              - link "Overview" [ref=e1194] [cursor=pointer]:
                - /url: /in-villa-service
            - listitem [ref=e1195]:
              - link "Waiters" [ref=e1196] [cursor=pointer]:
                - /url: /in-villa-service/waiters
            - listitem [ref=e1197]:
              - link "Butlers" [ref=e1198] [cursor=pointer]:
                - /url: /in-villa-service/butlers
            - listitem [ref=e1199]:
              - link "Bartenders" [ref=e1200] [cursor=pointer]:
                - /url: /in-villa-service/bartenders
            - listitem [ref=e1201]:
              - link "Mixology" [ref=e1202] [cursor=pointer]:
                - /url: /in-villa-service/mixology
            - listitem [ref=e1203]:
              - link "Sommelier" [ref=e1204] [cursor=pointer]:
                - /url: /in-villa-service/sommelier
            - listitem [ref=e1205]:
              - link "Host & Hostess" [ref=e1206] [cursor=pointer]:
                - /url: /in-villa-service/host-hostess
        - generic [ref=e1207]:
          - heading "Staffing" [level=4] [ref=e1208]
          - list [ref=e1209]:
            - listitem [ref=e1210]:
              - link "Overview" [ref=e1211] [cursor=pointer]:
                - /url: /staffing
            - listitem [ref=e1212]:
              - link "Private Chef Placement" [ref=e1213] [cursor=pointer]:
                - /url: /staffing/private-chef-placement
            - listitem [ref=e1214]:
              - link "Live-In Chef" [ref=e1215] [cursor=pointer]:
                - /url: /staffing/live-in-chef
            - listitem [ref=e1216]:
              - link "Villa Staff" [ref=e1217] [cursor=pointer]:
                - /url: /staffing/villa-staff
            - listitem [ref=e1218]:
              - link "Household Staff" [ref=e1219] [cursor=pointer]:
                - /url: /staffing/household-staff
            - listitem [ref=e1220]:
              - link "For Villa Managers" [ref=e1221] [cursor=pointer]:
                - /url: /staffing/for-villa-managers
            - listitem [ref=e1222]:
              - link "For Hotels & Restaurants" [ref=e1223] [cursor=pointer]:
                - /url: /staffing/for-hotels-restaurants
        - generic [ref=e1224]:
          - heading "Locations" [level=4] [ref=e1225]
          - list [ref=e1226]:
            - listitem [ref=e1227]:
              - link "All Locations" [ref=e1228] [cursor=pointer]:
                - /url: /locations
            - listitem [ref=e1229]:
              - link "Seminyak" [ref=e1230] [cursor=pointer]:
                - /url: /locations/seminyak
            - listitem [ref=e1231]:
              - link "Canggu" [ref=e1232] [cursor=pointer]:
                - /url: /locations/canggu
            - listitem [ref=e1233]:
              - link "Uluwatu" [ref=e1234] [cursor=pointer]:
                - /url: /locations/uluwatu
            - listitem [ref=e1235]:
              - link "Ubud" [ref=e1236] [cursor=pointer]:
                - /url: /locations/ubud
            - listitem [ref=e1237]:
              - link "Nusa Dua" [ref=e1238] [cursor=pointer]:
                - /url: /locations/nusa-dua
            - listitem [ref=e1239]:
              - link "Jimbaran" [ref=e1240] [cursor=pointer]:
                - /url: /locations/jimbaran
            - listitem [ref=e1241]:
              - link "Sanur" [ref=e1242] [cursor=pointer]:
                - /url: /locations/sanur
            - listitem [ref=e1243]:
              - link "Berawa" [ref=e1244] [cursor=pointer]:
                - /url: /locations/berawa
            - listitem [ref=e1245]:
              - link "Pererenan" [ref=e1246] [cursor=pointer]:
                - /url: /locations/pererenan
            - listitem [ref=e1247]:
              - link "Bukit Peninsula" [ref=e1248] [cursor=pointer]:
                - /url: /locations/bukit
      - generic [ref=e1249]:
        - link "Catering" [ref=e1250] [cursor=pointer]:
          - /url: /catering
        - link "Locations" [ref=e1251] [cursor=pointer]:
          - /url: /locations
        - link "About" [ref=e1252] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e1253] [cursor=pointer]:
          - /url: /contact
        - link "Services" [ref=e1254] [cursor=pointer]:
          - /url: /services
        - link "Pricing" [ref=e1255] [cursor=pointer]:
          - /url: /pricing
        - link "Price Calculator" [ref=e1256] [cursor=pointer]:
          - /url: /calculator
        - link "FAQ" [ref=e1257] [cursor=pointer]:
          - /url: /faq
        - link "Reviews" [ref=e1258] [cursor=pointer]:
          - /url: /reviews
        - link "Why myCHEF" [ref=e1259] [cursor=pointer]:
          - /url: /why-mychef
        - link "Press" [ref=e1260] [cursor=pointer]:
          - /url: /press
        - link "Join the Team" [ref=e1261] [cursor=pointer]:
          - /url: /join-our-team
        - link "Partner Platform" [ref=e1262] [cursor=pointer]:
          - /url: /partner-platform
        - link "Journal" [ref=e1263] [cursor=pointer]:
          - /url: /journal
        - link "Blog & Guides" [ref=e1264] [cursor=pointer]:
          - /url: /blog
        - link "Book" [ref=e1265] [cursor=pointer]:
          - /url: /book
      - generic [ref=e1266]:
        - link "+62 822-3756-5997" [ref=e1267] [cursor=pointer]:
          - /url: tel:+6282237565997
          - img [ref=e1268]
          - text: +62 822-3756-5997
        - link "indonesia@mychef.id" [ref=e1270] [cursor=pointer]:
          - /url: mailto:indonesia@mychef.id
          - img [ref=e1271]
          - text: indonesia@mychef.id
        - generic [ref=e1274]:
          - img [ref=e1275]
          - text: Bali, Indonesia
        - link "Instagram" [ref=e1278] [cursor=pointer]:
          - /url: https://instagram.com/mychef.id
          - img [ref=e1279]
          - text: Instagram
        - link "WhatsApp" [ref=e1283] [cursor=pointer]:
          - /url: https://wa.me/6282237565997
          - img [ref=e1284]
          - text: WhatsApp
      - generic [ref=e1286]:
        - link "Staff Login" [ref=e1287] [cursor=pointer]:
          - /url: /partner-platform
          - img [ref=e1288]
          - text: Staff Login
        - generic [ref=e1292]:
          - link "Terms" [ref=e1293] [cursor=pointer]:
            - /url: /terms
          - link "Privacy" [ref=e1294] [cursor=pointer]:
            - /url: /privacy
          - link "Cancellation" [ref=e1295] [cursor=pointer]:
            - /url: /cancellation
      - paragraph [ref=e1296]: © 2026 myCHEF.id. All rights reserved.
  - generic [ref=e1298]:
    - generic: Chat with us on WhatsApp
    - link "Chat with us on WhatsApp" [ref=e1299] [cursor=pointer]:
      - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
      - img [ref=e1300]
```

# Test source

```ts
  23  |       const isVisible = await element.isVisible();
  24  |       if (!isVisible) continue;
  25  | 
  26  |       const style = await element.evaluate(el => {
  27  |         const computed = window.getComputedStyle(el);
  28  |         return {
  29  |           color: computed.color,
  30  |           backgroundColor: computed.backgroundColor,
  31  |           tagName: el.tagName,
  32  |           textContent: el.textContent?.substring(0, 50) || ''
  33  |         };
  34  |       });
  35  | 
  36  |       // Check for black/very dark text on black/very dark backgrounds
  37  |       const isBlackOrDarkText = isColorDark(style.color);
  38  |       const isBlackOrDarkBg = isColorDark(style.backgroundColor);
  39  | 
  40  |       if (isBlackOrDarkText && isBlackOrDarkBg && style.textContent.trim().length > 0) {
  41  |         issues.push({
  42  |           element: style.tagName,
  43  |           bg: style.backgroundColor,
  44  |           color: style.color,
  45  |           content: style.textContent
  46  |         });
  47  |       }
  48  |     }
  49  | 
  50  |     if (issues.length > 0) {
  51  |       console.log('Found potential contrast issues:');
  52  |       issues.forEach(issue => {
  53  |         console.log(`  Element: ${issue.element}, Text: "${issue.content}", BG: ${issue.bg}, Color: ${issue.color}`);
  54  |       });
  55  |     }
  56  | 
  57  |     expect(issues.length).toBe(0);
  58  |   });
  59  | 
  60  |   test('fine-dining page has no accessibility violations', async ({ page }) => {
  61  |     await page.goto('/fine-dining');
  62  |     await injectAxe(page);
  63  |     await checkA11y(page, null, {
  64  |       detailedReport: true
  65  |     });
  66  |   });
  67  | 
  68  |   test('fine-dining/our-chefs page loads correctly', async ({ page }) => {
  69  |     await page.goto('/fine-dining/our-chefs');
  70  | 
  71  |     // Check page title and heading
  72  |     const heading = page.locator('h1, h2').first();
  73  |     await expect(heading).toBeVisible();
  74  | 
  75  |     // Check for content
  76  |     const content = page.locator('body');
  77  |     const text = await content.textContent();
  78  |     expect(text).toBeTruthy();
  79  |     expect(text?.length).toBeGreaterThan(0);
  80  |   });
  81  | 
  82  |   test('check all major pages for contrast issues', async ({ page }) => {
  83  |     const pages = ['/', '/fine-dining', '/catering', '/events', '/in-villa-service', '/staffing', '/locations'];
  84  | 
  85  |     for (const pagePath of pages) {
  86  |       await page.goto(pagePath);
  87  | 
  88  |       // Simple contrast check
  89  |       const lowContrastElements: string[] = [];
  90  | 
  91  |       const elements = await page.locator('[style*="color"]').all();
  92  |       for (const element of elements.slice(0, 20)) { // Check first 20 for performance
  93  |         const isVisible = await element.isVisible().catch(() => false);
  94  |         if (!isVisible) continue;
  95  | 
  96  |         const hasLowContrast = await element.evaluate(el => {
  97  |           const style = window.getComputedStyle(el);
  98  |           const color = style.color;
  99  |           const bgColor = style.backgroundColor;
  100 | 
  101 |           return isColorDark(color) && isColorDark(bgColor);
  102 |         }).catch(() => false);
  103 | 
  104 |         if (hasLowContrast) {
  105 |           const text = await element.textContent();
  106 |           lowContrastElements.push(`${pagePath}: "${text?.substring(0, 30)}"`);
  107 |         }
  108 |       }
  109 | 
  110 |       if (lowContrastElements.length > 0) {
  111 |         console.warn(`Page ${pagePath} has potential contrast issues:`, lowContrastElements);
  112 |       }
  113 |     }
  114 |   });
  115 | 
  116 |   test('verify headings hierarchy', async ({ page }) => {
  117 |     await page.goto('/');
  118 | 
  119 |     const h1Count = await page.locator('h1').count();
  120 |     const h2Count = await page.locator('h2').count();
  121 | 
  122 |     // Should have proper heading hierarchy
> 123 |     expect(h1Count).toBeGreaterThan(0);
      |                     ^ Error: expect(received).toBeGreaterThan(expected)
  124 |     expect(h2Count).toBeGreaterThan(0);
  125 |   });
  126 | 
  127 |   test('check image alt text', async ({ page }) => {
  128 |     await page.goto('/');
  129 | 
  130 |     const images = await page.locator('img').all();
  131 |     const missingAltText: string[] = [];
  132 | 
  133 |     for (const image of images) {
  134 |       const alt = await image.getAttribute('alt');
  135 |       const src = await image.getAttribute('src');
  136 | 
  137 |       if (!alt || alt.trim() === '') {
  138 |         missingAltText.push(src || 'unknown');
  139 |       }
  140 |     }
  141 | 
  142 |     console.log(`Total images: ${images.length}, Missing alt text: ${missingAltText.length}`);
  143 |     if (missingAltText.length > 0) {
  144 |       console.warn('Images missing alt text:', missingAltText.slice(0, 5));
  145 |     }
  146 |   });
  147 | 
  148 |   test('verify links are keyboard accessible', async ({ page }) => {
  149 |     await page.goto('/');
  150 | 
  151 |     // Tab through links
  152 |     const links = await page.locator('a').all();
  153 |     expect(links.length).toBeGreaterThan(0);
  154 | 
  155 |     // First link should be focusable
  156 |     const firstLink = page.locator('a').first();
  157 |     await firstLink.focus();
  158 | 
  159 |     const isFocused = await firstLink.evaluate(el => {
  160 |       return document.activeElement === el;
  161 |     });
  162 | 
  163 |     expect(isFocused).toBe(true);
  164 |   });
  165 | });
  166 | 
  167 | function isColorDark(rgbColor: string): boolean {
  168 |   if (!rgbColor || rgbColor === 'rgba(0, 0, 0, 0)' || rgbColor === 'transparent') {
  169 |     return false; // Transparent/no color
  170 |   }
  171 | 
  172 |   // Parse rgb/rgba
  173 |   const matches = rgbColor.match(/\d+/g);
  174 |   if (!matches || matches.length < 3) return false;
  175 | 
  176 |   const r = parseInt(matches[0]);
  177 |   const g = parseInt(matches[1]);
  178 |   const b = parseInt(matches[2]);
  179 | 
  180 |   // Calculate luminance
  181 |   const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  182 |   return luminance < 0.5; // Dark if luminance < 50%
  183 | }
  184 | 
```