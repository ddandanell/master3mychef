# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ga4-tracking.spec.ts >> Google Analytics 4 Tracking >> GA4 tracking works across multiple pages
- Location: tests/e2e/ga4-tracking.spec.ts:87:3

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
      - link "myCHEF Events" [ref=e7] [cursor=pointer]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e11]:
          - generic [ref=e12]: myCHEF
          - generic [ref=e13]: Events
      - generic [ref=e14]:
        - link "Fine Dining" [ref=e16] [cursor=pointer]:
          - /url: /fine-dining
          - text: Fine Dining
        - link "Catering" [ref=e18] [cursor=pointer]:
          - /url: /catering
          - text: Catering
        - link "Events" [ref=e20] [cursor=pointer]:
          - /url: /events
          - text: Events
        - link "In-Villa" [ref=e23] [cursor=pointer]:
          - /url: /in-villa-service
          - text: In-Villa
        - link "Staffing" [ref=e25] [cursor=pointer]:
          - /url: /staffing
          - text: Staffing
        - link "Locations" [ref=e27] [cursor=pointer]:
          - /url: /locations
          - text: Locations
        - link "About" [ref=e29] [cursor=pointer]:
          - /url: /about
          - text: About
        - link "Contact" [ref=e31] [cursor=pointer]:
          - /url: /contact
          - text: Contact
      - generic [ref=e32]:
        - link "Pricing" [ref=e33] [cursor=pointer]:
          - /url: /pricing
        - link "Book" [ref=e34] [cursor=pointer]:
          - /url: /book
  - main [ref=e35]:
    - generic [ref=e36]:
      - navigation "Breadcrumb" [ref=e37]:
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Home" [ref=e40] [cursor=pointer]:
              - /url: /
              - img [ref=e41]
              - generic [ref=e44]: Home
          - listitem [ref=e45]:
            - img [ref=e46]
            - generic [ref=e48]: Events
      - generic [ref=e49]:
        - img "Luxury villa event in Bali with styled dining and celebration setup" [ref=e50]
        - generic [ref=e52]:
          - paragraph [ref=e53]: Chapter 1 — Bali Events
          - heading "Events in Bali, run by one team. You just host." [level=1] [ref=e54]:
            - text: Events in Bali, run by one team.
            - text: You just host.
          - paragraph [ref=e55]: Villa weddings, birthdays, anniversaries, corporate events, retreats, baby showers, and villa parties. Food, drinks, staff, styling, and coordination — handled by one team, in your villa, anywhere in Bali.
          - generic [ref=e56]:
            - link "Plan My Event — Free Consultation" [ref=e57] [cursor=pointer]:
              - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
              - img [ref=e58]
              - text: Plan My Event — Free Consultation
            - link "View Event Types" [ref=e60] [cursor=pointer]:
              - /url: "#event-types"
              - text: View Event Types
              - img [ref=e61]
          - paragraph [ref=e63]: From IDR 600K++/guest · Free consultation · Same-day WhatsApp reply · Transparent proposal before deposit
      - generic [ref=e66]:
        - generic [ref=e67]:
          - img [ref=e69]
          - generic [ref=e71]:
            - paragraph [ref=e72]: Same-day WhatsApp
            - paragraph [ref=e73]: Confirmation within the hour
        - generic [ref=e74]:
          - img [ref=e76]
          - generic [ref=e79]:
            - paragraph [ref=e80]: 50% deposit only
            - paragraph [ref=e81]: Balance due before event
        - generic [ref=e82]:
          - img [ref=e84]
          - generic [ref=e89]:
            - paragraph [ref=e90]: 1 waiter per 10 guests
            - paragraph [ref=e91]: Industry-standard service
        - generic [ref=e92]:
          - img [ref=e94]
          - generic [ref=e99]:
            - paragraph [ref=e100]: Full cleanup
            - paragraph [ref=e101]: We pack up and leave
      - generic [ref=e104]:
        - generic [ref=e105]:
          - img [ref=e107]
          - generic [ref=e111]:
            - paragraph [ref=e112]: Dedicated event producer
            - paragraph [ref=e113]: One point of contact from planning to cleanup
        - generic [ref=e114]:
          - img [ref=e116]
          - generic [ref=e120]:
            - paragraph [ref=e121]: Full liability insurance
            - paragraph [ref=e122]: For events up to 200 guests
      - generic [ref=e124]:
        - paragraph [ref=e125]: Production, not catering
        - heading "We approach events the way a fine-dining kitchen approaches service." [level=2] [ref=e126]
        - paragraph [ref=e127]: "One brigade owns the night — chefs in the kitchen, waiters on the floor, bartenders on the bar, a coordinator on the timeline. Whether it is a six-person anniversary or a hundred-and-fifty-guest wedding, the standard is the same: hot food on time, full glasses, clean plates, and a host who never had to look at a watch."
      - generic [ref=e129]:
        - generic [ref=e130]:
          - paragraph [ref=e131]: Chapter 2 — All Events We Cover
          - heading "Four of the formats we run most often" [level=2] [ref=e132]
          - paragraph [ref=e133]: Weddings, birthdays, corporate events, and retreats each ask for a different service rhythm — but the same operational discipline.
        - generic [ref=e134]:
          - link "Villa Weddings in Bali by myCHEF The Once-In-A-Lifetime Villa Weddings Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance." [ref=e135] [cursor=pointer]:
            - /url: /events/weddings
            - img "Villa Weddings in Bali by myCHEF" [ref=e137]
            - generic [ref=e138]:
              - paragraph [ref=e139]: The Once-In-A-Lifetime
              - heading "Villa Weddings" [level=3] [ref=e140]
              - paragraph [ref=e141]: Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance.
          - link "Birthday Parties in Bali by myCHEF The Milestone Birthday Parties Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless." [ref=e142] [cursor=pointer]:
            - /url: /events/birthdays
            - img "Birthday Parties in Bali by myCHEF" [ref=e144]
            - generic [ref=e145]:
              - paragraph [ref=e146]: The Milestone
              - heading "Birthday Parties" [level=3] [ref=e147]
              - paragraph [ref=e148]: Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless.
          - link "Corporate Events in Bali by myCHEF The Off-Site Corporate Events Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued." [ref=e149] [cursor=pointer]:
            - /url: /events/corporate-events
            - img "Corporate Events in Bali by myCHEF" [ref=e151]
            - generic [ref=e152]:
              - paragraph [ref=e153]: The Off-Site
              - heading "Corporate Events" [level=3] [ref=e154]
              - paragraph [ref=e155]: Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued.
          - link "Wellness & Yoga Retreats in Bali by myCHEF The Multi-Day Wellness & Yoga Retreats Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule." [ref=e156] [cursor=pointer]:
            - /url: /events/retreats
            - img "Wellness & Yoga Retreats in Bali by myCHEF" [ref=e158]
            - generic [ref=e159]:
              - paragraph [ref=e160]: The Multi-Day
              - heading "Wellness & Yoga Retreats" [level=3] [ref=e161]
              - paragraph [ref=e162]: Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule.
      - generic [ref=e164]:
        - generic [ref=e165]:
          - paragraph [ref=e166]: Chapter 3 — Seven Kinds of Evening
          - heading "Choose the kind of event you are hosting" [level=2] [ref=e167]
          - paragraph [ref=e168]: Each pillar has its own page with full pricing, menus, and a tailored inquiry form.
        - generic [ref=e169]:
          - link "Villa Weddings in Bali by myCHEF The Once-In-A-Lifetime Villa Weddings From 600K++/pp ≈ IDR 726.000 all-in/pp Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance. Explore" [ref=e170] [cursor=pointer]:
            - /url: /events/weddings
            - generic [ref=e171]:
              - img "Villa Weddings in Bali by myCHEF" [ref=e172]
              - generic [ref=e174]:
                - img [ref=e175]
                - generic [ref=e177]: The Once-In-A-Lifetime
            - generic [ref=e178]:
              - heading "Villa Weddings" [level=3] [ref=e179]
              - paragraph [ref=e180]:
                - generic [ref=e181]: From 600K++/pp
                - generic [ref=e182]: ≈ IDR 726.000 all-in/pp
              - paragraph [ref=e183]: Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance.
              - generic [ref=e184]:
                - text: Explore
                - img [ref=e185]
          - link "Birthday Parties in Bali by myCHEF The Milestone Birthday Parties From 850K++/pp ≈ IDR 1.0M all-in/pp Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless. Explore" [ref=e188] [cursor=pointer]:
            - /url: /events/birthdays
            - generic [ref=e189]:
              - img "Birthday Parties in Bali by myCHEF" [ref=e190]
              - generic [ref=e192]:
                - img [ref=e193]
                - generic [ref=e203]: The Milestone
            - generic [ref=e204]:
              - heading "Birthday Parties" [level=3] [ref=e205]
              - paragraph [ref=e206]:
                - generic [ref=e207]: From 850K++/pp
                - generic [ref=e208]: ≈ IDR 1.0M all-in/pp
              - paragraph [ref=e209]: Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless.
              - generic [ref=e210]:
                - text: Explore
                - img [ref=e211]
          - link "Anniversary Dinners in Bali by myCHEF The Two Of You Anniversary Dinners From 1.2M++/pp ≈ IDR 1.5M all-in/pp Private candlelit dinners, vow renewals, and small-group celebrations. The opposite of a hotel package — built around your story. Explore" [ref=e214] [cursor=pointer]:
            - /url: /events/anniversaries
            - generic [ref=e215]:
              - img "Anniversary Dinners in Bali by myCHEF" [ref=e216]
              - generic [ref=e218]:
                - img [ref=e219]
                - generic [ref=e224]: The Two Of You
            - generic [ref=e225]:
              - heading "Anniversary Dinners" [level=3] [ref=e226]
              - paragraph [ref=e227]:
                - generic [ref=e228]: From 1.2M++/pp
                - generic [ref=e229]: ≈ IDR 1.5M all-in/pp
              - paragraph [ref=e230]: Private candlelit dinners, vow renewals, and small-group celebrations. The opposite of a hotel package — built around your story.
              - generic [ref=e231]:
                - text: Explore
                - img [ref=e232]
          - link "Corporate Events in Bali by myCHEF The Off-Site Corporate Events From 1.2M++/pp ≈ IDR 1.5M all-in/pp Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued. Explore" [ref=e235] [cursor=pointer]:
            - /url: /events/corporate-events
            - generic [ref=e236]:
              - img "Corporate Events in Bali by myCHEF" [ref=e237]
              - generic [ref=e239]:
                - img [ref=e240]
                - generic [ref=e243]: The Off-Site
            - generic [ref=e244]:
              - heading "Corporate Events" [level=3] [ref=e245]
              - paragraph [ref=e246]:
                - generic [ref=e247]: From 1.2M++/pp
                - generic [ref=e248]: ≈ IDR 1.5M all-in/pp
              - paragraph [ref=e249]: Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued.
              - generic [ref=e250]:
                - text: Explore
                - img [ref=e251]
          - link "Wellness & Yoga Retreats in Bali by myCHEF The Multi-Day Wellness & Yoga Retreats From 1.5M++/pp/day ≈ IDR 1.8M all-in/pp/day Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule. Explore" [ref=e254] [cursor=pointer]:
            - /url: /events/retreats
            - generic [ref=e255]:
              - img "Wellness & Yoga Retreats in Bali by myCHEF" [ref=e256]
              - generic [ref=e258]:
                - img [ref=e259]
                - generic [ref=e262]: The Multi-Day
            - generic [ref=e263]:
              - heading "Wellness & Yoga Retreats" [level=3] [ref=e264]
              - paragraph [ref=e265]:
                - generic [ref=e266]: From 1.5M++/pp/day
                - generic [ref=e267]: ≈ IDR 1.8M all-in/pp/day
              - paragraph [ref=e268]: Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule.
              - generic [ref=e269]:
                - text: Explore
                - img [ref=e270]
          - link "Baby Showers in Bali by myCHEF The Sweetest Baby Showers From 750K++/pp ≈ IDR 907.500 all-in/pp Brunch and high-tea showers, themed decor, mocktail bars, and styling so gentle it photographs itself. Explore" [ref=e273] [cursor=pointer]:
            - /url: /events/baby-showers
            - generic [ref=e274]:
              - img "Baby Showers in Bali by myCHEF" [ref=e275]
              - generic [ref=e277]:
                - img [ref=e278]
                - generic [ref=e283]: The Sweetest
            - generic [ref=e284]:
              - heading "Baby Showers" [level=3] [ref=e285]
              - paragraph [ref=e286]:
                - generic [ref=e287]: From 750K++/pp
                - generic [ref=e288]: ≈ IDR 907.500 all-in/pp
              - paragraph [ref=e289]: Brunch and high-tea showers, themed decor, mocktail bars, and styling so gentle it photographs itself.
              - generic [ref=e290]:
                - text: Explore
                - img [ref=e291]
          - link "Villa Parties in Bali by myCHEF The Long Weekend Villa Parties From 650K++/pp ≈ IDR 786.500 all-in/pp Cocktail receptions, sundowner BBQs, hens & bucks weekends. Bar, music, decor, and Sofia keeping the night on rails. Explore" [ref=e294] [cursor=pointer]:
            - /url: /events/villa-parties
            - generic [ref=e295]:
              - img "Villa Parties in Bali by myCHEF" [ref=e296]
              - generic [ref=e298]:
                - img [ref=e299]
                - generic [ref=e303]: The Long Weekend
            - generic [ref=e304]:
              - heading "Villa Parties" [level=3] [ref=e305]
              - paragraph [ref=e306]:
                - generic [ref=e307]: From 650K++/pp
                - generic [ref=e308]: ≈ IDR 786.500 all-in/pp
              - paragraph [ref=e309]: Cocktail receptions, sundowner BBQs, hens & bucks weekends. Bar, music, decor, and Sofia keeping the night on rails.
              - generic [ref=e310]:
                - text: Explore
                - img [ref=e311]
      - generic [ref=e315]:
        - generic [ref=e316]:
          - paragraph [ref=e317]: Chapter 4 — How It Works
          - heading "Three clear steps from first message to event day." [level=2] [ref=e318]
        - generic [ref=e319]:
          - generic [ref=e320]:
            - paragraph [ref=e321]: "01"
            - img [ref=e322]
            - heading "WhatsApp" [level=3] [ref=e324]
            - paragraph [ref=e325]: Send the date, guest count, villa, and event type. Sofia replies fast with availability, price direction, and the right format to shortlist.
          - generic [ref=e326]:
            - paragraph [ref=e327]: "02"
            - img [ref=e328]
            - heading "Proposal" [level=3] [ref=e332]
            - paragraph [ref=e333]: We turn the brief into one working document covering food, drinks, staffing, styling, timing, and all-in pricing for sign-off.
          - generic [ref=e334]:
            - paragraph [ref=e335]: "03"
            - img [ref=e336]
            - heading "Event Day" [level=3] [ref=e341]
            - paragraph [ref=e342]: Our team arrives, builds the setup, runs the service, and clears down after the event so you can focus on hosting instead of coordinating.
      - generic [ref=e344]:
        - generic [ref=e345]:
          - paragraph [ref=e346]: Chapter 4 — Why myCHEF
          - heading "The three reasons hosts hand us the whole evening" [level=2] [ref=e347]
        - generic [ref=e348]:
          - generic [ref=e349]:
            - img [ref=e351]
            - heading "One team, one bill, one contact" [level=3] [ref=e356]
            - paragraph [ref=e357]: Food, drinks, staff, styling, coordination — handled in-house. No supplier merry-go-round. One WhatsApp thread, one proposal, one invoice.
          - generic [ref=e358]:
            - img [ref=e360]
            - heading "Built for villa hospitality" [level=3] [ref=e365]
            - paragraph [ref=e366]: Most Bali events happen in private villas, not hotel ballrooms. Our entire operation is mobile — generator, prep stations, glassware, cold chain, the lot.
          - generic [ref=e367]:
            - img [ref=e369]
            - heading "International-standard execution" [level=3] [ref=e374]
            - paragraph [ref=e375]: Plated service, dietary mapping at scale, multi-course timing, allergy-line discipline. The fine-dining playbook applied to your living room.
      - generic [ref=e377]:
        - generic [ref=e378]:
          - paragraph [ref=e379]: Chapter 5 — Competitive Edge
          - heading "Why myCHEF for events" [level=2] [ref=e380]
          - paragraph [ref=e381]: How we compare to the alternatives you are probably researching.
        - generic [ref=e382]:
          - generic [ref=e383]:
            - img [ref=e385]
            - generic [ref=e387]:
              - heading "vs Mimpi / All-in-one operators" [level=4] [ref=e388]
              - paragraph [ref=e389]: We specialise in food + events, not real estate. Better menus, sharper pricing, no villa markup.
          - generic [ref=e390]:
            - img [ref=e392]
            - generic [ref=e394]:
              - heading "vs Single-service operators" [level=4] [ref=e395]
              - paragraph [ref=e396]: One contact for catering, bar, staff, and coordination. No chasing five vendors on WhatsApp.
          - generic [ref=e397]:
            - img [ref=e399]
            - generic [ref=e401]:
              - heading "vs Hotel packages" [level=4] [ref=e402]
              - paragraph [ref=e403]: Your villa, your rules, your timeline. No hotel curfews, no generic menus, no ballroom feel.
      - generic [ref=e405]:
        - generic [ref=e406]:
          - paragraph [ref=e407]: Chapter 6 — Pricing
          - heading "What an event actually costs" [level=2] [ref=e408]
          - paragraph [ref=e409]: Every price below is per guest, before tax and service. The proposal Sofia sends includes the all-in total — no surprises.
        - generic [ref=e410]:
          - generic [ref=e411]:
            - generic [ref=e412]: Event Type
            - generic [ref=e413]: From Price
            - generic [ref=e414]: Min Guests
            - generic [ref=e415]: Best For
          - generic [ref=e416]:
            - generic [ref=e417]: Villa Weddings (Intimate)
            - generic [ref=e419]:
              - generic [ref=e420]: IDR 600.000++/person
              - generic [ref=e421]: IDR 726.000 all-in/person
            - generic [ref=e422]: 10+
            - generic [ref=e423]: Elopements, micro-weddings
          - generic [ref=e424]:
            - generic [ref=e425]: Villa Weddings (Luxury)
            - generic [ref=e427]:
              - generic [ref=e428]: IDR 1.5M++/person
              - generic [ref=e429]: IDR 1.8M all-in/person
            - generic [ref=e430]: 40+
            - generic [ref=e431]: Full receptions, multi-day
          - generic [ref=e432]:
            - generic [ref=e433]: Birthday Parties
            - generic [ref=e435]:
              - generic [ref=e436]: IDR 850.000++/person
              - generic [ref=e437]: IDR 1.0M all-in/person
            - generic [ref=e438]: 15+
            - generic [ref=e439]: Milestone dinners, villa parties
          - generic [ref=e440]:
            - generic [ref=e441]: Anniversary Dinners
            - generic [ref=e443]:
              - generic [ref=e444]: IDR 1.2M++/person
              - generic [ref=e445]: IDR 1.5M all-in/person
            - generic [ref=e446]: 2+
            - generic [ref=e447]: Couples, vow renewals
          - generic [ref=e448]:
            - generic [ref=e449]: Corporate Events
            - generic [ref=e451]:
              - generic [ref=e452]: IDR 1.2M++/person
              - generic [ref=e453]: IDR 1.5M all-in/person
            - generic [ref=e454]: 10+
            - generic [ref=e455]: Conferences, exec dinners
          - generic [ref=e456]:
            - generic [ref=e457]: Wellness Retreats
            - generic [ref=e459]:
              - generic [ref=e460]: IDR 1.5M++/person/day
              - generic [ref=e461]: IDR 1.8M all-in/person/day
            - generic [ref=e462]: 8+
            - generic [ref=e463]: Yoga, wellness, dietary-led
          - generic [ref=e464]:
            - generic [ref=e465]: Baby Showers
            - generic [ref=e467]:
              - generic [ref=e468]: IDR 750.000++/person
              - generic [ref=e469]: IDR 907.500 all-in/person
            - generic [ref=e470]: 10+
            - generic [ref=e471]: Brunch, high tea, gender reveal
          - generic [ref=e472]:
            - generic [ref=e473]: Villa Parties
            - generic [ref=e475]:
              - generic [ref=e476]: IDR 650.000++/person
              - generic [ref=e477]: IDR 786.500 all-in/person
            - generic [ref=e478]: 20+
            - generic [ref=e479]: Sundowners, hens, cocktail
        - generic [ref=e480]:
          - generic [ref=e481]:
            - heading "Per-person base" [level=4] [ref=e482]
            - paragraph [ref=e483]: Covers chef, ingredients, service staff, and basic setup. Varies by event type and menu.
          - generic [ref=e484]:
            - heading "Add-ons" [level=4] [ref=e485]
            - paragraph [ref=e486]: Photography, custom cake, live music, premium bar, extended decor — all itemised in the proposal.
          - generic [ref=e487]:
            - heading "Tax & service" [level=4] [ref=e488]
            - paragraph [ref=e489]: 10% government service charge + 11% VAT added at proposal. No hidden fees.
          - generic [ref=e490]:
            - heading "Deposit" [level=4] [ref=e491]
            - paragraph [ref=e492]: 50% to confirm the date. Balance due the week of the event. Net-30 for repeat corporate clients.
        - paragraph [ref=e493]: All prices ++ (10% government service charge and 11% VAT added at proposal). Groceries billed at cost — no markup. 50% deposit to confirm.
      - generic [ref=e495]:
        - paragraph [ref=e496]: Chapter 7 — Your Coordinator
        - img [ref=e498]
        - heading "Sofia" [level=2] [ref=e500]
        - paragraph [ref=e501]: "\"I have coordinated 200+ events across Bali — from 2-person anniversary dinners to 200-guest weddings. My job is simple: make sure the host never has to look at a watch.\""
        - generic [ref=e502]:
          - link "Plan My Event — Free Consultation" [ref=e503] [cursor=pointer]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
            - img [ref=e504]
            - text: Plan My Event — Free Consultation
          - link "Call +62 822 3756 5997" [ref=e506] [cursor=pointer]:
            - /url: tel:+6282237565997
            - img [ref=e507]
            - text: Call +62 822 3756 5997
      - generic [ref=e510]:
        - paragraph [ref=e511]: Chapter 8 — Where We Work
        - heading "Mobile hospitality across Bali" [level=2] [ref=e512]
        - paragraph [ref=e513]: Generator, prep kitchen, cold chain, glassware, linens, and the team — packed and travelled to your villa. Same-island, same-day setups.
        - generic [ref=e514]:
          - generic [ref=e515]:
            - img [ref=e516]
            - text: Seminyak
          - generic [ref=e519]:
            - img [ref=e520]
            - text: Canggu
          - generic [ref=e523]:
            - img [ref=e524]
            - text: Ubud
          - generic [ref=e527]:
            - img [ref=e528]
            - text: Uluwatu
          - generic [ref=e531]:
            - img [ref=e532]
            - text: Sanur
          - generic [ref=e535]:
            - img [ref=e536]
            - text: Nusa Dua
          - generic [ref=e539]:
            - img [ref=e540]
            - text: Jimbaran
          - generic [ref=e543]:
            - img [ref=e544]
            - text: Berawa
          - generic [ref=e547]:
            - img [ref=e548]
            - text: Pererenan
          - generic [ref=e551]:
            - img [ref=e552]
            - text: Bukit
          - generic [ref=e555]:
            - img [ref=e556]
            - text: Bingin
          - generic [ref=e559]:
            - img [ref=e560]
            - text: Tabanan
        - paragraph [ref=e563]: Not on the list? We travel anywhere in Bali. Outer-island events on request.
      - generic [ref=e565]:
        - generic [ref=e566]:
          - paragraph [ref=e567]: Testimonials
          - heading "What event hosts say" [level=2] [ref=e568]
          - paragraph [ref=e569]: Real weddings, retreats, off-sites, and parties — from real villas across Bali.
        - generic [ref=e570]:
          - article [ref=e571]:
            - generic [ref=e572]:
              - generic "5 star review" [ref=e573]:
                - img [ref=e574]
                - img [ref=e576]
                - img [ref=e578]
                - img [ref=e580]
                - img [ref=e582]
              - generic [ref=e584]: Villa Experience
            - img [ref=e585]
            - paragraph [ref=e588]: “We compared three hotels and a wedding planner. myCHEF was half the price and twice the warmth. Sofia ran the day like a Swiss watch.”
            - generic [ref=e589]:
              - generic [ref=e591]: P&
              - generic [ref=e592]:
                - paragraph [ref=e593]: Priya & Raj
                - paragraph [ref=e594]: Uluwatu Villa Wedding
              - generic [ref=e595]:
                - img [ref=e596]
                - text: Recent stay
          - article [ref=e607]:
            - generic [ref=e608]:
              - generic "5 star review" [ref=e609]:
                - img [ref=e610]
                - img [ref=e612]
                - img [ref=e614]
                - img [ref=e616]
                - img [ref=e618]
              - generic [ref=e620]: Villa Experience
            - img [ref=e621]
            - paragraph [ref=e624]: “Twelve adults, six kids, three days, three meal services a day. Different dietary needs every meal. The team made it look easy.”
            - generic [ref=e625]:
              - generic [ref=e627]: TL
              - generic [ref=e628]:
                - paragraph [ref=e629]: The Larsen Family
                - paragraph [ref=e630]: Canggu — 3-day reunion
              - generic [ref=e631]:
                - img [ref=e632]
                - text: Recent stay
          - article [ref=e643]:
            - generic [ref=e644]:
              - generic "5 star review" [ref=e645]:
                - img [ref=e646]
                - img [ref=e648]
                - img [ref=e650]
                - img [ref=e652]
                - img [ref=e654]
              - generic [ref=e656]: Villa Experience
            - img [ref=e657]
            - paragraph [ref=e660]: “Two-day off-site for forty engineers. Coffee station never empty, lunch on time every time, gala dinner that landed. Invoice came with NPWP.”
            - generic [ref=e661]:
              - generic [ref=e663]: D—
              - generic [ref=e664]:
                - paragraph [ref=e665]: David — Series A Off-site
                - paragraph [ref=e666]: Berawa Villa Conference
              - generic [ref=e667]:
                - img [ref=e668]
                - text: Recent stay
      - generic [ref=e680]:
        - generic [ref=e681]:
          - paragraph [ref=e682]: Chapter 9 — Questions
          - heading "The eight questions every host asks" [level=2] [ref=e683]
        - generic [ref=e684]:
          - generic [ref=e685]:
            - button "How far in advance do we need to book?" [expanded] [ref=e686] [cursor=pointer]:
              - generic [ref=e687]: How far in advance do we need to book?
              - img [ref=e688]
            - region "How far in advance do we need to book?" [ref=e690]:
              - paragraph [ref=e691]: "Weddings and large retreats: 3–6 months for high season (July–August, December–January). Smaller events and corporate: 4–6 weeks is comfortable. Last-minute is possible — we have run a 30-guest dinner with 72 hours notice. WhatsApp Sofia and we will tell you what is still open."
          - generic [ref=e692]:
            - button "Is the price per person all-in or does tax come on top?" [expanded] [ref=e693] [cursor=pointer]:
              - generic [ref=e694]: Is the price per person all-in or does tax come on top?
              - img [ref=e695]
            - region "Is the price per person all-in or does tax come on top?" [ref=e697]:
              - paragraph [ref=e698]: Listed prices are ++ (before 10% government service charge and 11% VAT). We always show the all-in number in the proposal so you know the total — no surprises. Groceries are billed at cost with no markup.
          - generic [ref=e699]:
            - button "Do you handle dietary requirements at scale?" [expanded] [ref=e700] [cursor=pointer]:
              - generic [ref=e701]: Do you handle dietary requirements at scale?
              - img [ref=e702]
            - region "Do you handle dietary requirements at scale?" [ref=e704]:
              - paragraph [ref=e705]: Yes — this is one of the things we do best. Vegan, halal, gluten-free, raw, kosher-style, nut allergy, shellfish allergy, kids portions. We label every dish, run separate prep lines for allergies, and have done full halal weddings and dietary-led retreats for hundreds.
          - generic [ref=e706]:
            - button "Can you work at any villa in Bali?" [expanded] [ref=e707] [cursor=pointer]:
              - generic [ref=e708]: Can you work at any villa in Bali?
              - img [ref=e709]
            - region "Can you work at any villa in Bali?" [ref=e711]:
              - paragraph [ref=e712]: Yes. We are mobile hospitality — full kitchen, glassware, linens, generator, cold chain, the lot. We have worked at over 200 villas across Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Pererenan, Berawa, and the Bukit peninsula. If your villa is in Bali, we can run an event there.
          - generic [ref=e713]:
            - button "Do we pay a deposit, and what happens if we cancel?" [ref=e714] [cursor=pointer]:
              - generic [ref=e715]: Do we pay a deposit, and what happens if we cancel?
              - img [ref=e716]
            - region "Do we pay a deposit, and what happens if we cancel?":
              - paragraph [ref=e718]: 50% deposit to confirm the date, balance due the week of the event. Cancellation policy is in your proposal — full refund up to 30 days out, 50% inside 30 days, no refund inside 14 days. Force-majeure clauses are standard.
          - generic [ref=e719]:
            - button "Who is our point of contact?" [ref=e720] [cursor=pointer]:
              - generic [ref=e721]: Who is our point of contact?
              - img [ref=e722]
            - region "Who is our point of contact?":
              - paragraph [ref=e724]: Sofia handles events end-to-end — the same person from first WhatsApp to the day-of coordination on site. No handoffs, no losing context. For corporate accounts she works alongside Olivia for invoicing and NPWP paperwork.
          - generic [ref=e725]:
            - button "Can we customise the menu?" [ref=e726] [cursor=pointer]:
              - generic [ref=e727]: Can we customise the menu?
              - img [ref=e728]
            - region "Can we customise the menu?":
              - paragraph [ref=e730]: Every menu is built around the brief. Cuisine, courses, signature dishes, kids menu, dietary-specific lines, branded courses for corporate. Send the spec and we tailor it — and you taste the menu before you sign off when there is time.
          - generic [ref=e731]:
            - button "Do you provide staff, bartenders, and coordinators?" [ref=e732] [cursor=pointer]:
              - generic [ref=e733]: Do you provide staff, bartenders, and coordinators?
              - img [ref=e734]
            - region "Do you provide staff, bartenders, and coordinators?":
              - paragraph [ref=e736]: Yes — chefs, waiters (1 per 10 guests is our standard), bartenders, kitchen team, runners, and an on-site event coordinator are part of every package. For corporate and weddings we add a dedicated coordinator who manages timing, suppliers, and the run-sheet.
      - generic [ref=e738]:
        - generic [ref=e739]:
          - paragraph [ref=e740]: Chapter 10 — Inquire
          - heading "Tell Sofia about your event" [level=2] [ref=e741]
          - paragraph [ref=e742]: One message. Same-hour reply. A proposal in your inbox within 24 hours.
        - generic [ref=e743]:
          - heading "Event Inquiry" [level=3] [ref=e744]
          - paragraph [ref=e745]: The more you share, the sharper the proposal.
          - generic [ref=e746]:
            - generic [ref=e747]:
              - generic [ref=e748]: Event Type*
              - generic [ref=e749]:
                - img [ref=e750]
                - combobox "Event Type*" [ref=e752]:
                  - option "Select event type" [selected]
                  - option "Villa Weddings"
                  - option "Birthday Parties"
                  - option "Anniversary Dinners"
                  - option "Corporate Events"
                  - option "Wellness & Yoga Retreats"
                  - option "Baby Showers"
                  - option "Villa Parties"
            - generic [ref=e753]:
              - generic [ref=e754]: Event Date*
              - generic [ref=e755]:
                - img [ref=e756]
                - textbox "Event Date*" [ref=e761]
            - generic [ref=e762]:
              - generic [ref=e763]: Number of Guests*
              - generic [ref=e764]:
                - img [ref=e765]
                - spinbutton "Number of Guests*" [ref=e770]
            - generic [ref=e771]:
              - generic [ref=e772]: Villa / Location
              - generic [ref=e773]:
                - img [ref=e774]
                - textbox "Villa / Location" [ref=e777]:
                  - /placeholder: Canggu, Seminyak, TBC...
            - generic [ref=e778]:
              - generic [ref=e779]: Budget Range (optional)
              - textbox "Budget Range (optional)" [ref=e781]:
                - /placeholder: e.g. IDR 50M total
            - generic [ref=e782]:
              - generic [ref=e783]: Your Name*
              - textbox "Your Name*" [ref=e785]
            - generic [ref=e786]:
              - generic [ref=e787]: WhatsApp*
              - textbox "WhatsApp*" [ref=e789]
            - generic [ref=e790]:
              - generic [ref=e791]: Email
              - textbox "Email" [ref=e793]
            - generic [ref=e794]:
              - generic [ref=e795]: Tell us more
              - textbox "Tell us more" [ref=e797]:
                - /placeholder: Vibe, dietary needs, special requests, anything else we should know...
          - button "Send via WhatsApp" [ref=e798] [cursor=pointer]:
            - img [ref=e799]
            - text: Send via WhatsApp
          - paragraph [ref=e801]: No payment required now. We will confirm availability first.
      - generic [ref=e803]:
        - paragraph [ref=e804]: As Featured In
        - generic [ref=e805]:
          - generic [ref=e806]:
            - paragraph [ref=e807]: Honeycombers
            - paragraph [ref=e808]: Bali
          - generic [ref=e809]:
            - paragraph [ref=e810]: NOW! Bali
            - paragraph [ref=e811]: Magazine
          - generic [ref=e812]:
            - paragraph [ref=e813]: The Bali Bible
            - paragraph [ref=e814]: Guide
          - generic [ref=e815]:
            - paragraph [ref=e816]: Hello Bali
            - paragraph [ref=e817]: Lifestyle
          - generic [ref=e818]:
            - paragraph [ref=e819]: Tropical Life
            - paragraph [ref=e820]: Magazine
      - generic [ref=e821]:
        - img [ref=e823]
        - generic [ref=e825]:
          - img [ref=e826]
          - heading "One message and we’re running." [level=2] [ref=e831]
          - paragraph [ref=e832]: Sofia replies inside the hour. The proposal lands inside the day. The team arrives on the date — built, briefed, and ready.
          - generic [ref=e833]:
            - link "Plan My Event — Free Consultation" [ref=e834] [cursor=pointer]:
              - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
              - img [ref=e835]
              - text: Plan My Event — Free Consultation
            - link "Call +62 822 3756 5997" [ref=e837] [cursor=pointer]:
              - /url: tel:+6282237565997
              - img [ref=e838]
              - text: Call +62 822 3756 5997
      - generic [ref=e841]:
        - generic [ref=e842]:
          - paragraph [ref=e843]: Where We Serve
          - heading "Events Across Bali" [level=2] [ref=e844]
          - paragraph [ref=e845]: Weddings in Uluwatu. Corporate retreats in Ubud. Birthday parties in Canggu. We know every venue, every vendor, every regulation.
        - generic [ref=e846]:
          - link "Seminyak" [ref=e847] [cursor=pointer]:
            - /url: /seminyak
            - img [ref=e848]
            - text: Seminyak
          - link "Canggu" [ref=e851] [cursor=pointer]:
            - /url: /canggu
            - img [ref=e852]
            - text: Canggu
          - link "Ubud" [ref=e855] [cursor=pointer]:
            - /url: /ubud
            - img [ref=e856]
            - text: Ubud
          - link "Uluwatu" [ref=e859] [cursor=pointer]:
            - /url: /uluwatu
            - img [ref=e860]
            - text: Uluwatu
          - link "Sanur" [ref=e863] [cursor=pointer]:
            - /url: /sanur
            - img [ref=e864]
            - text: Sanur
          - link "Nusa Dua" [ref=e867] [cursor=pointer]:
            - /url: /nusa-dua
            - img [ref=e868]
            - text: Nusa Dua
          - link "Jimbaran" [ref=e871] [cursor=pointer]:
            - /url: /jimbaran
            - img [ref=e872]
            - text: Jimbaran
          - link "Berawa" [ref=e875] [cursor=pointer]:
            - /url: /berawa
            - img [ref=e876]
            - text: Berawa
          - link "Pererenan" [ref=e879] [cursor=pointer]:
            - /url: /pererenan
            - img [ref=e880]
            - text: Pererenan
          - link "Bukit" [ref=e883] [cursor=pointer]:
            - /url: /bukit
            - img [ref=e884]
            - text: Bukit
        - link "View All Locations →" [ref=e888] [cursor=pointer]:
          - /url: /locations
          - text: View All Locations
          - generic [ref=e889]: →
  - generic [ref=e890]: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
  - contentinfo [ref=e891]:
    - generic [ref=e892]:
      - generic [ref=e893]:
        - generic [ref=e894]:
          - heading "myCHEF" [level=3] [ref=e895]
          - paragraph [ref=e896]: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
        - generic [ref=e897]:
          - link "+62 822-3756-5997" [ref=e898] [cursor=pointer]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
            - img [ref=e899]
            - text: +62 822-3756-5997
          - link "indonesia@mychef.id" [ref=e901] [cursor=pointer]:
            - /url: mailto:indonesia@mychef.id
      - generic [ref=e902]:
        - generic [ref=e903]:
          - heading "Fine Dining" [level=4] [ref=e904]
          - list [ref=e905]:
            - listitem [ref=e906]:
              - link "Overview" [ref=e907] [cursor=pointer]:
                - /url: /fine-dining
            - listitem [ref=e908]:
              - link "Private Chef in Bali" [ref=e909] [cursor=pointer]:
                - /url: /fine-dining/private-chef-bali
            - listitem [ref=e910]:
              - link "Tasting Menu" [ref=e911] [cursor=pointer]:
                - /url: /fine-dining/tasting-menu
            - listitem [ref=e912]:
              - link "Romantic Dinner" [ref=e913] [cursor=pointer]:
                - /url: /fine-dining/romantic-dinner
            - listitem [ref=e914]:
              - link "Chef’s Table" [ref=e915] [cursor=pointer]:
                - /url: /fine-dining/chefs-table
            - listitem [ref=e916]:
              - link "Our Menus" [ref=e917] [cursor=pointer]:
                - /url: /fine-dining/menus
            - listitem [ref=e918]:
              - link "Our Chefs" [ref=e919] [cursor=pointer]:
                - /url: /fine-dining/our-chefs
        - generic [ref=e920]:
          - heading "Catering" [level=4] [ref=e921]
          - list [ref=e922]:
            - listitem [ref=e923]:
              - link "Overview" [ref=e924] [cursor=pointer]:
                - /url: /catering
            - listitem [ref=e925]:
              - link "BBQ Catering" [ref=e926] [cursor=pointer]:
                - /url: /catering/bbq-catering
            - listitem [ref=e927]:
              - link "Buffet Catering" [ref=e928] [cursor=pointer]:
                - /url: /catering/buffet
            - listitem [ref=e929]:
              - link "Plated Set Menu" [ref=e930] [cursor=pointer]:
                - /url: /catering/plated-catering
            - listitem [ref=e931]:
              - link "Drop-Off Catering" [ref=e932] [cursor=pointer]:
                - /url: /catering/drop-off-catering
            - listitem [ref=e933]:
              - link "Babi Guling" [ref=e934] [cursor=pointer]:
                - /url: /catering/babi-guling
            - listitem [ref=e935]:
              - link "Grazing Tables" [ref=e936] [cursor=pointer]:
                - /url: /catering/grazing-tables
            - listitem [ref=e937]:
              - link "Floating Breakfast" [ref=e938] [cursor=pointer]:
                - /url: /catering/floating-breakfast
            - listitem [ref=e939]:
              - link "Corporate Catering" [ref=e940] [cursor=pointer]:
                - /url: /catering/corporate-catering
            - listitem [ref=e941]:
              - link "Retreat Catering" [ref=e942] [cursor=pointer]:
                - /url: /catering/retreat-catering
        - generic [ref=e943]:
          - heading "Events" [level=4] [ref=e944]
          - list [ref=e945]:
            - listitem [ref=e946]:
              - link "Overview" [ref=e947] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e948]:
              - link "Weddings" [ref=e949] [cursor=pointer]:
                - /url: /events/weddings
            - listitem [ref=e950]:
              - link "Birthdays" [ref=e951] [cursor=pointer]:
                - /url: /events/birthdays
            - listitem [ref=e952]:
              - link "Anniversaries" [ref=e953] [cursor=pointer]:
                - /url: /events/anniversaries
            - listitem [ref=e954]:
              - link "Corporate Events" [ref=e955] [cursor=pointer]:
                - /url: /events/corporate-events
            - listitem [ref=e956]:
              - link "Retreats" [ref=e957] [cursor=pointer]:
                - /url: /events/retreats
            - listitem [ref=e958]:
              - link "Villa Parties" [ref=e959] [cursor=pointer]:
                - /url: /events/villa-parties
            - listitem [ref=e960]:
              - link "Baby Showers" [ref=e961] [cursor=pointer]:
                - /url: /events/baby-showers
        - generic [ref=e962]:
          - heading "In-Villa Service" [level=4] [ref=e963]
          - list [ref=e964]:
            - listitem [ref=e965]:
              - link "Overview" [ref=e966] [cursor=pointer]:
                - /url: /in-villa-service
            - listitem [ref=e967]:
              - link "Waiters" [ref=e968] [cursor=pointer]:
                - /url: /in-villa-service/waiters
            - listitem [ref=e969]:
              - link "Butlers" [ref=e970] [cursor=pointer]:
                - /url: /in-villa-service/butlers
            - listitem [ref=e971]:
              - link "Bartenders" [ref=e972] [cursor=pointer]:
                - /url: /in-villa-service/bartenders
            - listitem [ref=e973]:
              - link "Mixology" [ref=e974] [cursor=pointer]:
                - /url: /in-villa-service/mixology
            - listitem [ref=e975]:
              - link "Sommelier" [ref=e976] [cursor=pointer]:
                - /url: /in-villa-service/sommelier
            - listitem [ref=e977]:
              - link "Host & Hostess" [ref=e978] [cursor=pointer]:
                - /url: /in-villa-service/host-hostess
        - generic [ref=e979]:
          - heading "Staffing" [level=4] [ref=e980]
          - list [ref=e981]:
            - listitem [ref=e982]:
              - link "Overview" [ref=e983] [cursor=pointer]:
                - /url: /staffing
            - listitem [ref=e984]:
              - link "Private Chef Placement" [ref=e985] [cursor=pointer]:
                - /url: /staffing/private-chef-placement
            - listitem [ref=e986]:
              - link "Live-In Chef" [ref=e987] [cursor=pointer]:
                - /url: /staffing/live-in-chef
            - listitem [ref=e988]:
              - link "Villa Staff" [ref=e989] [cursor=pointer]:
                - /url: /staffing/villa-staff
            - listitem [ref=e990]:
              - link "Household Staff" [ref=e991] [cursor=pointer]:
                - /url: /staffing/household-staff
            - listitem [ref=e992]:
              - link "For Villa Managers" [ref=e993] [cursor=pointer]:
                - /url: /staffing/for-villa-managers
            - listitem [ref=e994]:
              - link "For Hotels & Restaurants" [ref=e995] [cursor=pointer]:
                - /url: /staffing/for-hotels-restaurants
        - generic [ref=e996]:
          - heading "Locations" [level=4] [ref=e997]
          - list [ref=e998]:
            - listitem [ref=e999]:
              - link "All Locations" [ref=e1000] [cursor=pointer]:
                - /url: /locations
            - listitem [ref=e1001]:
              - link "Seminyak" [ref=e1002] [cursor=pointer]:
                - /url: /locations/seminyak
            - listitem [ref=e1003]:
              - link "Canggu" [ref=e1004] [cursor=pointer]:
                - /url: /locations/canggu
            - listitem [ref=e1005]:
              - link "Uluwatu" [ref=e1006] [cursor=pointer]:
                - /url: /locations/uluwatu
            - listitem [ref=e1007]:
              - link "Ubud" [ref=e1008] [cursor=pointer]:
                - /url: /locations/ubud
            - listitem [ref=e1009]:
              - link "Nusa Dua" [ref=e1010] [cursor=pointer]:
                - /url: /locations/nusa-dua
            - listitem [ref=e1011]:
              - link "Jimbaran" [ref=e1012] [cursor=pointer]:
                - /url: /locations/jimbaran
            - listitem [ref=e1013]:
              - link "Sanur" [ref=e1014] [cursor=pointer]:
                - /url: /locations/sanur
            - listitem [ref=e1015]:
              - link "Berawa" [ref=e1016] [cursor=pointer]:
                - /url: /locations/berawa
            - listitem [ref=e1017]:
              - link "Pererenan" [ref=e1018] [cursor=pointer]:
                - /url: /locations/pererenan
            - listitem [ref=e1019]:
              - link "Bukit Peninsula" [ref=e1020] [cursor=pointer]:
                - /url: /locations/bukit
      - generic [ref=e1021]:
        - link "Catering" [ref=e1022] [cursor=pointer]:
          - /url: /catering
        - link "Locations" [ref=e1023] [cursor=pointer]:
          - /url: /locations
        - link "About" [ref=e1024] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e1025] [cursor=pointer]:
          - /url: /contact
        - link "Services" [ref=e1026] [cursor=pointer]:
          - /url: /services
        - link "Pricing" [ref=e1027] [cursor=pointer]:
          - /url: /pricing
        - link "Price Calculator" [ref=e1028] [cursor=pointer]:
          - /url: /calculator
        - link "FAQ" [ref=e1029] [cursor=pointer]:
          - /url: /faq
        - link "Reviews" [ref=e1030] [cursor=pointer]:
          - /url: /reviews
        - link "Why myCHEF" [ref=e1031] [cursor=pointer]:
          - /url: /why-mychef
        - link "Press" [ref=e1032] [cursor=pointer]:
          - /url: /press
        - link "Join the Team" [ref=e1033] [cursor=pointer]:
          - /url: /join-our-team
        - link "Partner Platform" [ref=e1034] [cursor=pointer]:
          - /url: /partner-platform
        - link "Journal" [ref=e1035] [cursor=pointer]:
          - /url: /journal
        - link "Blog & Guides" [ref=e1036] [cursor=pointer]:
          - /url: /blog
        - link "Book" [ref=e1037] [cursor=pointer]:
          - /url: /book
      - generic [ref=e1038]:
        - link "+62 822-3756-5997" [ref=e1039] [cursor=pointer]:
          - /url: tel:+6282237565997
          - img [ref=e1040]
          - text: +62 822-3756-5997
        - link "indonesia@mychef.id" [ref=e1042] [cursor=pointer]:
          - /url: mailto:indonesia@mychef.id
          - img [ref=e1043]
          - text: indonesia@mychef.id
        - generic [ref=e1046]:
          - img [ref=e1047]
          - text: Bali, Indonesia
        - link "Instagram" [ref=e1050] [cursor=pointer]:
          - /url: https://instagram.com/mychef.id
          - img [ref=e1051]
          - text: Instagram
        - link "WhatsApp" [ref=e1055] [cursor=pointer]:
          - /url: https://wa.me/6282237565997
          - img [ref=e1056]
          - text: WhatsApp
      - generic [ref=e1058]:
        - link "Staff Login" [ref=e1059] [cursor=pointer]:
          - /url: /partner-platform
          - img [ref=e1060]
          - text: Staff Login
        - generic [ref=e1064]:
          - link "Terms" [ref=e1065] [cursor=pointer]:
            - /url: /terms
          - link "Privacy" [ref=e1066] [cursor=pointer]:
            - /url: /privacy
          - link "Cancellation" [ref=e1067] [cursor=pointer]:
            - /url: /cancellation
      - paragraph [ref=e1068]: © 2026 myCHEF.id. All rights reserved.
  - generic [ref=e1070]:
    - generic: Chat with us on WhatsApp
    - link "Chat with us on WhatsApp" [ref=e1071] [cursor=pointer]:
      - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
      - img [ref=e1072]
```

# Test source

```ts
  8   |     const gtagScript = page.locator('script[src*="googletagmanager.com/gtag"]');
  9   |     await expect(gtagScript).toBeVisible();
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
> 108 |     expect(gaTracks.length).toBeGreaterThan(0);
      |                             ^ Error: expect(received).toBeGreaterThan(expected)
  109 |   });
  110 | });
  111 | 
```