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
        - generic [ref=e10]:
          - generic [ref=e11]: myCHEF
          - generic [ref=e12]: Events
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
        - link "In-Villa" [ref=e22] [cursor=pointer]:
          - /url: /in-villa-service
          - text: In-Villa
        - link "Staffing" [ref=e24] [cursor=pointer]:
          - /url: /staffing
          - text: Staffing
        - link "Locations" [ref=e26] [cursor=pointer]:
          - /url: /locations
          - text: Locations
        - link "About" [ref=e28] [cursor=pointer]:
          - /url: /about
          - text: About
        - link "Contact" [ref=e30] [cursor=pointer]:
          - /url: /contact
          - text: Contact
      - generic [ref=e31]:
        - link "Pricing" [ref=e32] [cursor=pointer]:
          - /url: /pricing
        - link "Book" [ref=e33] [cursor=pointer]:
          - /url: /book
  - main [ref=e34]:
    - generic [ref=e35]:
      - navigation "Breadcrumb" [ref=e36]:
        - list [ref=e37]:
          - listitem [ref=e38]:
            - link "Home" [ref=e39] [cursor=pointer]:
              - /url: /
              - img [ref=e40]
              - generic [ref=e43]: Home
          - listitem [ref=e44]:
            - img [ref=e45]
            - generic [ref=e47]: Events
      - generic [ref=e48]:
        - img "Luxury villa event in Bali with styled dining and celebration setup" [ref=e49]
        - generic [ref=e51]:
          - paragraph [ref=e52]: Chapter 1 — Bali Events
          - heading "Events in Bali, run by one team. You just host." [level=1] [ref=e53]:
            - text: Events in Bali, run by one team.
            - text: You just host.
          - paragraph [ref=e54]: Villa weddings, birthdays, anniversaries, corporate events, retreats, baby showers, and villa parties. Food, drinks, staff, styling, and coordination — handled by one team, in your villa, anywhere in Bali.
          - generic [ref=e55]:
            - link "Plan My Event — Free Consultation" [ref=e56] [cursor=pointer]:
              - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
              - img [ref=e57]
              - text: Plan My Event — Free Consultation
            - link "View Event Types" [ref=e59] [cursor=pointer]:
              - /url: "#event-types"
              - text: View Event Types
              - img [ref=e60]
          - paragraph [ref=e62]: From IDR 600K++/guest · Free consultation · Same-day WhatsApp reply · Transparent proposal before deposit
      - generic [ref=e65]:
        - generic [ref=e66]:
          - img [ref=e68]
          - generic [ref=e70]:
            - paragraph [ref=e71]: Same-day WhatsApp
            - paragraph [ref=e72]: Confirmation within the hour
        - generic [ref=e73]:
          - img [ref=e75]
          - generic [ref=e78]:
            - paragraph [ref=e79]: 50% deposit only
            - paragraph [ref=e80]: Balance due before event
        - generic [ref=e81]:
          - img [ref=e83]
          - generic [ref=e88]:
            - paragraph [ref=e89]: 1 waiter per 10 guests
            - paragraph [ref=e90]: Industry-standard service
        - generic [ref=e91]:
          - img [ref=e93]
          - generic [ref=e96]:
            - paragraph [ref=e97]: Full cleanup
            - paragraph [ref=e98]: We pack up and leave
      - generic [ref=e101]:
        - generic [ref=e102]:
          - img [ref=e104]
          - generic [ref=e108]:
            - paragraph [ref=e109]: Dedicated event producer
            - paragraph [ref=e110]: One point of contact from planning to cleanup
        - generic [ref=e111]:
          - img [ref=e113]
          - generic [ref=e117]:
            - paragraph [ref=e118]: Full liability insurance
            - paragraph [ref=e119]: For events up to 200 guests
      - generic [ref=e121]:
        - paragraph [ref=e122]: Production, not catering
        - heading "We approach events the way a fine-dining kitchen approaches service." [level=2] [ref=e123]
        - paragraph [ref=e124]: "One brigade owns the night — chefs in the kitchen, waiters on the floor, bartenders on the bar, a coordinator on the timeline. Whether it is a six-person anniversary or a hundred-and-fifty-guest wedding, the standard is the same: hot food on time, full glasses, clean plates, and a host who never had to look at a watch."
      - generic [ref=e126]:
        - generic [ref=e127]:
          - paragraph [ref=e128]: Chapter 2 — All Events We Cover
          - heading "Four of the formats we run most often" [level=2] [ref=e129]
          - paragraph [ref=e130]: Weddings, birthdays, corporate events, and retreats each ask for a different service rhythm — but the same operational discipline.
        - generic [ref=e131]:
          - link "Villa Weddings in Bali by myCHEF The Once-In-A-Lifetime Villa Weddings Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance." [ref=e132] [cursor=pointer]:
            - /url: /events/weddings
            - img "Villa Weddings in Bali by myCHEF" [ref=e134]
            - generic [ref=e135]:
              - paragraph [ref=e136]: The Once-In-A-Lifetime
              - heading "Villa Weddings" [level=3] [ref=e137]
              - paragraph [ref=e138]: Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance.
          - link "Birthday Parties in Bali by myCHEF The Milestone Birthday Parties Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless." [ref=e139] [cursor=pointer]:
            - /url: /events/birthdays
            - img "Birthday Parties in Bali by myCHEF" [ref=e141]
            - generic [ref=e142]:
              - paragraph [ref=e143]: The Milestone
              - heading "Birthday Parties" [level=3] [ref=e144]
              - paragraph [ref=e145]: Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless.
          - link "Corporate Events in Bali by myCHEF The Off-Site Corporate Events Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued." [ref=e146] [cursor=pointer]:
            - /url: /events/corporate-events
            - img "Corporate Events in Bali by myCHEF" [ref=e148]
            - generic [ref=e149]:
              - paragraph [ref=e150]: The Off-Site
              - heading "Corporate Events" [level=3] [ref=e151]
              - paragraph [ref=e152]: Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued.
          - link "Wellness & Yoga Retreats in Bali by myCHEF The Multi-Day Wellness & Yoga Retreats Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule." [ref=e153] [cursor=pointer]:
            - /url: /events/retreats
            - img "Wellness & Yoga Retreats in Bali by myCHEF" [ref=e155]
            - generic [ref=e156]:
              - paragraph [ref=e157]: The Multi-Day
              - heading "Wellness & Yoga Retreats" [level=3] [ref=e158]
              - paragraph [ref=e159]: Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule.
      - generic [ref=e161]:
        - generic [ref=e162]:
          - paragraph [ref=e163]: Chapter 3 — Seven Kinds of Evening
          - heading "Choose the kind of event you are hosting" [level=2] [ref=e164]
          - paragraph [ref=e165]: Each pillar has its own page with full pricing, menus, and a tailored inquiry form.
        - generic [ref=e166]:
          - link "Villa Weddings in Bali by myCHEF The Once-In-A-Lifetime Villa Weddings From 600K++/pp ≈ IDR 726.000 all-in/pp Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance. Explore" [ref=e167] [cursor=pointer]:
            - /url: /events/weddings
            - generic [ref=e168]:
              - img "Villa Weddings in Bali by myCHEF" [ref=e169]
              - generic [ref=e171]:
                - img [ref=e172]
                - generic [ref=e174]: The Once-In-A-Lifetime
            - generic [ref=e175]:
              - heading "Villa Weddings" [level=3] [ref=e176]
              - paragraph [ref=e177]:
                - generic [ref=e178]: From 600K++/pp
                - generic [ref=e179]: ≈ IDR 726.000 all-in/pp
              - paragraph [ref=e180]: Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance.
              - generic [ref=e181]:
                - text: Explore
                - img [ref=e182]
          - link "Birthday Parties in Bali by myCHEF The Milestone Birthday Parties From 850K++/pp ≈ IDR 1.0M all-in/pp Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless. Explore" [ref=e184] [cursor=pointer]:
            - /url: /events/birthdays
            - generic [ref=e185]:
              - img "Birthday Parties in Bali by myCHEF" [ref=e186]
              - generic [ref=e188]:
                - img [ref=e189]
                - generic [ref=e192]: The Milestone
            - generic [ref=e193]:
              - heading "Birthday Parties" [level=3] [ref=e194]
              - paragraph [ref=e195]:
                - generic [ref=e196]: From 850K++/pp
                - generic [ref=e197]: ≈ IDR 1.0M all-in/pp
              - paragraph [ref=e198]: Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless.
              - generic [ref=e199]:
                - text: Explore
                - img [ref=e200]
          - link "Anniversary Dinners in Bali by myCHEF The Two Of You Anniversary Dinners From 1.2M++/pp ≈ IDR 1.5M all-in/pp Private candlelit dinners, vow renewals, and small-group celebrations. The opposite of a hotel package — built around your story. Explore" [ref=e202] [cursor=pointer]:
            - /url: /events/anniversaries
            - generic [ref=e203]:
              - img "Anniversary Dinners in Bali by myCHEF" [ref=e204]
              - generic [ref=e206]:
                - img [ref=e207]
                - generic [ref=e209]: The Two Of You
            - generic [ref=e210]:
              - heading "Anniversary Dinners" [level=3] [ref=e211]
              - paragraph [ref=e212]:
                - generic [ref=e213]: From 1.2M++/pp
                - generic [ref=e214]: ≈ IDR 1.5M all-in/pp
              - paragraph [ref=e215]: Private candlelit dinners, vow renewals, and small-group celebrations. The opposite of a hotel package — built around your story.
              - generic [ref=e216]:
                - text: Explore
                - img [ref=e217]
          - link "Corporate Events in Bali by myCHEF The Off-Site Corporate Events From 1.2M++/pp ≈ IDR 1.5M all-in/pp Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued. Explore" [ref=e219] [cursor=pointer]:
            - /url: /events/corporate-events
            - generic [ref=e220]:
              - img "Corporate Events in Bali by myCHEF" [ref=e221]
              - generic [ref=e223]:
                - img [ref=e224]
                - generic [ref=e227]: The Off-Site
            - generic [ref=e228]:
              - heading "Corporate Events" [level=3] [ref=e229]
              - paragraph [ref=e230]:
                - generic [ref=e231]: From 1.2M++/pp
                - generic [ref=e232]: ≈ IDR 1.5M all-in/pp
              - paragraph [ref=e233]: Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued.
              - generic [ref=e234]:
                - text: Explore
                - img [ref=e235]
          - link "Wellness & Yoga Retreats in Bali by myCHEF The Multi-Day Wellness & Yoga Retreats From 1.5M++/pp/day ≈ IDR 1.8M all-in/pp/day Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule. Explore" [ref=e237] [cursor=pointer]:
            - /url: /events/retreats
            - generic [ref=e238]:
              - img "Wellness & Yoga Retreats in Bali by myCHEF" [ref=e239]
              - generic [ref=e241]:
                - img [ref=e242]
                - generic [ref=e245]: The Multi-Day
            - generic [ref=e246]:
              - heading "Wellness & Yoga Retreats" [level=3] [ref=e247]
              - paragraph [ref=e248]:
                - generic [ref=e249]: From 1.5M++/pp/day
                - generic [ref=e250]: ≈ IDR 1.8M all-in/pp/day
              - paragraph [ref=e251]: Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule.
              - generic [ref=e252]:
                - text: Explore
                - img [ref=e253]
          - link "Baby Showers in Bali by myCHEF The Sweetest Baby Showers From 750K++/pp ≈ IDR 907.500 all-in/pp Brunch and high-tea showers, themed decor, mocktail bars, and styling so gentle it photographs itself. Explore" [ref=e255] [cursor=pointer]:
            - /url: /events/baby-showers
            - generic [ref=e256]:
              - img "Baby Showers in Bali by myCHEF" [ref=e257]
              - generic [ref=e259]:
                - img [ref=e260]
                - generic [ref=e263]: The Sweetest
            - generic [ref=e264]:
              - heading "Baby Showers" [level=3] [ref=e265]
              - paragraph [ref=e266]:
                - generic [ref=e267]: From 750K++/pp
                - generic [ref=e268]: ≈ IDR 907.500 all-in/pp
              - paragraph [ref=e269]: Brunch and high-tea showers, themed decor, mocktail bars, and styling so gentle it photographs itself.
              - generic [ref=e270]:
                - text: Explore
                - img [ref=e271]
          - link "Villa Parties in Bali by myCHEF The Long Weekend Villa Parties From 650K++/pp ≈ IDR 786.500 all-in/pp Cocktail receptions, sundowner BBQs, hens & bucks weekends. Bar, music, decor, and Sofia keeping the night on rails. Explore" [ref=e273] [cursor=pointer]:
            - /url: /events/villa-parties
            - generic [ref=e274]:
              - img "Villa Parties in Bali by myCHEF" [ref=e275]
              - generic [ref=e277]:
                - img [ref=e278]
                - generic [ref=e282]: The Long Weekend
            - generic [ref=e283]:
              - heading "Villa Parties" [level=3] [ref=e284]
              - paragraph [ref=e285]:
                - generic [ref=e286]: From 650K++/pp
                - generic [ref=e287]: ≈ IDR 786.500 all-in/pp
              - paragraph [ref=e288]: Cocktail receptions, sundowner BBQs, hens & bucks weekends. Bar, music, decor, and Sofia keeping the night on rails.
              - generic [ref=e289]:
                - text: Explore
                - img [ref=e290]
      - generic [ref=e293]:
        - generic [ref=e294]:
          - paragraph [ref=e295]: Chapter 4 — How It Works
          - heading "Three clear steps from first message to event day." [level=2] [ref=e296]
        - generic [ref=e297]:
          - generic [ref=e298]:
            - paragraph [ref=e299]: "01"
            - img [ref=e300]
            - heading "WhatsApp" [level=3] [ref=e302]
            - paragraph [ref=e303]: Send the date, guest count, villa, and event type. Sofia replies fast with availability, price direction, and the right format to shortlist.
          - generic [ref=e304]:
            - paragraph [ref=e305]: "02"
            - img [ref=e306]
            - heading "Proposal" [level=3] [ref=e310]
            - paragraph [ref=e311]: We turn the brief into one working document covering food, drinks, staffing, styling, timing, and all-in pricing for sign-off.
          - generic [ref=e312]:
            - paragraph [ref=e313]: "03"
            - img [ref=e314]
            - heading "Event Day" [level=3] [ref=e316]
            - paragraph [ref=e317]: Our team arrives, builds the setup, runs the service, and clears down after the event so you can focus on hosting instead of coordinating.
      - generic [ref=e319]:
        - generic [ref=e320]:
          - paragraph [ref=e321]: Chapter 4 — Why myCHEF
          - heading "The three reasons hosts hand us the whole evening" [level=2] [ref=e322]
        - generic [ref=e323]:
          - generic [ref=e324]:
            - img [ref=e326]
            - heading "One team, one bill, one contact" [level=3] [ref=e331]
            - paragraph [ref=e332]: Food, drinks, staff, styling, coordination — handled in-house. No supplier merry-go-round. One WhatsApp thread, one proposal, one invoice.
          - generic [ref=e333]:
            - img [ref=e335]
            - heading "Built for villa hospitality" [level=3] [ref=e340]
            - paragraph [ref=e341]: Most Bali events happen in private villas, not hotel ballrooms. Our entire operation is mobile — generator, prep stations, glassware, cold chain, the lot.
          - generic [ref=e342]:
            - img [ref=e344]
            - heading "International-standard execution" [level=3] [ref=e347]
            - paragraph [ref=e348]: Plated service, dietary mapping at scale, multi-course timing, allergy-line discipline. The fine-dining playbook applied to your living room.
      - generic [ref=e350]:
        - generic [ref=e351]:
          - paragraph [ref=e352]: Chapter 5 — Competitive Edge
          - heading "Why myCHEF for events" [level=2] [ref=e353]
          - paragraph [ref=e354]: How we compare to the alternatives you are probably researching.
        - generic [ref=e355]:
          - generic [ref=e356]:
            - img [ref=e358]
            - generic [ref=e360]:
              - heading "vs Mimpi / All-in-one operators" [level=4] [ref=e361]
              - paragraph [ref=e362]: We specialise in food + events, not real estate. Better menus, sharper pricing, no villa markup.
          - generic [ref=e363]:
            - img [ref=e365]
            - generic [ref=e367]:
              - heading "vs Single-service operators" [level=4] [ref=e368]
              - paragraph [ref=e369]: One contact for catering, bar, staff, and coordination. No chasing five vendors on WhatsApp.
          - generic [ref=e370]:
            - img [ref=e372]
            - generic [ref=e374]:
              - heading "vs Hotel packages" [level=4] [ref=e375]
              - paragraph [ref=e376]: Your villa, your rules, your timeline. No hotel curfews, no generic menus, no ballroom feel.
      - generic [ref=e378]:
        - generic [ref=e379]:
          - paragraph [ref=e380]: Chapter 6 — Pricing
          - heading "What an event actually costs" [level=2] [ref=e381]
          - paragraph [ref=e382]: Every price below is per guest, before tax and service. The proposal Sofia sends includes the all-in total — no surprises.
        - generic [ref=e383]:
          - generic [ref=e384]:
            - generic [ref=e385]: Event Type
            - generic [ref=e386]: From Price
            - generic [ref=e387]: Min Guests
            - generic [ref=e388]: Best For
          - generic [ref=e389]:
            - generic [ref=e390]: Villa Weddings (Intimate)
            - generic [ref=e392]:
              - generic [ref=e393]: IDR 600.000++/person
              - generic [ref=e394]: IDR 726.000 all-in/person
            - generic [ref=e395]: 10+
            - generic [ref=e396]: Elopements, micro-weddings
          - generic [ref=e397]:
            - generic [ref=e398]: Villa Weddings (Luxury)
            - generic [ref=e400]:
              - generic [ref=e401]: IDR 1.5M++/person
              - generic [ref=e402]: IDR 1.8M all-in/person
            - generic [ref=e403]: 40+
            - generic [ref=e404]: Full receptions, multi-day
          - generic [ref=e405]:
            - generic [ref=e406]: Birthday Parties
            - generic [ref=e408]:
              - generic [ref=e409]: IDR 850.000++/person
              - generic [ref=e410]: IDR 1.0M all-in/person
            - generic [ref=e411]: 15+
            - generic [ref=e412]: Milestone dinners, villa parties
          - generic [ref=e413]:
            - generic [ref=e414]: Anniversary Dinners
            - generic [ref=e416]:
              - generic [ref=e417]: IDR 1.2M++/person
              - generic [ref=e418]: IDR 1.5M all-in/person
            - generic [ref=e419]: 2+
            - generic [ref=e420]: Couples, vow renewals
          - generic [ref=e421]:
            - generic [ref=e422]: Corporate Events
            - generic [ref=e424]:
              - generic [ref=e425]: IDR 1.2M++/person
              - generic [ref=e426]: IDR 1.5M all-in/person
            - generic [ref=e427]: 10+
            - generic [ref=e428]: Conferences, exec dinners
          - generic [ref=e429]:
            - generic [ref=e430]: Wellness Retreats
            - generic [ref=e432]:
              - generic [ref=e433]: IDR 1.5M++/person/day
              - generic [ref=e434]: IDR 1.8M all-in/person/day
            - generic [ref=e435]: 8+
            - generic [ref=e436]: Yoga, wellness, dietary-led
          - generic [ref=e437]:
            - generic [ref=e438]: Baby Showers
            - generic [ref=e440]:
              - generic [ref=e441]: IDR 750.000++/person
              - generic [ref=e442]: IDR 907.500 all-in/person
            - generic [ref=e443]: 10+
            - generic [ref=e444]: Brunch, high tea, gender reveal
          - generic [ref=e445]:
            - generic [ref=e446]: Villa Parties
            - generic [ref=e448]:
              - generic [ref=e449]: IDR 650.000++/person
              - generic [ref=e450]: IDR 786.500 all-in/person
            - generic [ref=e451]: 20+
            - generic [ref=e452]: Sundowners, hens, cocktail
        - generic [ref=e453]:
          - generic [ref=e454]:
            - heading "Per-person base" [level=4] [ref=e455]
            - paragraph [ref=e456]: Covers chef, ingredients, service staff, and basic setup. Varies by event type and menu.
          - generic [ref=e457]:
            - heading "Add-ons" [level=4] [ref=e458]
            - paragraph [ref=e459]: Photography, custom cake, live music, premium bar, extended decor — all itemised in the proposal.
          - generic [ref=e460]:
            - heading "Tax & service" [level=4] [ref=e461]
            - paragraph [ref=e462]: 10% government service charge + 11% VAT added at proposal. No hidden fees.
          - generic [ref=e463]:
            - heading "Deposit" [level=4] [ref=e464]
            - paragraph [ref=e465]: 50% to confirm the date. Balance due the week of the event. Net-30 for repeat corporate clients.
        - paragraph [ref=e466]: All prices ++ (10% government service charge and 11% VAT added at proposal). Groceries billed at cost — no markup. 50% deposit to confirm.
      - generic [ref=e468]:
        - paragraph [ref=e469]: Chapter 7 — Your Coordinator
        - img [ref=e471]
        - heading "Sofia" [level=2] [ref=e473]
        - paragraph [ref=e474]: "\"I have coordinated 200+ events across Bali — from 2-person anniversary dinners to 200-guest weddings. My job is simple: make sure the host never has to look at a watch.\""
        - generic [ref=e475]:
          - link "Plan My Event — Free Consultation" [ref=e476] [cursor=pointer]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
            - img [ref=e477]
            - text: Plan My Event — Free Consultation
          - link "Call +62 822 3756 5997" [ref=e479] [cursor=pointer]:
            - /url: tel:+6282237565997
            - img [ref=e480]
            - text: Call +62 822 3756 5997
      - generic [ref=e483]:
        - paragraph [ref=e484]: Chapter 8 — Where We Work
        - heading "Mobile hospitality across Bali" [level=2] [ref=e485]
        - paragraph [ref=e486]: Generator, prep kitchen, cold chain, glassware, linens, and the team — packed and travelled to your villa. Same-island, same-day setups.
        - generic [ref=e487]:
          - generic [ref=e488]:
            - img [ref=e489]
            - text: Seminyak
          - generic [ref=e492]:
            - img [ref=e493]
            - text: Canggu
          - generic [ref=e496]:
            - img [ref=e497]
            - text: Ubud
          - generic [ref=e500]:
            - img [ref=e501]
            - text: Uluwatu
          - generic [ref=e504]:
            - img [ref=e505]
            - text: Sanur
          - generic [ref=e508]:
            - img [ref=e509]
            - text: Nusa Dua
          - generic [ref=e512]:
            - img [ref=e513]
            - text: Jimbaran
          - generic [ref=e516]:
            - img [ref=e517]
            - text: Berawa
          - generic [ref=e520]:
            - img [ref=e521]
            - text: Pererenan
          - generic [ref=e524]:
            - img [ref=e525]
            - text: Bukit
          - generic [ref=e528]:
            - img [ref=e529]
            - text: Bingin
          - generic [ref=e532]:
            - img [ref=e533]
            - text: Tabanan
        - paragraph [ref=e536]: Not on the list? We travel anywhere in Bali. Outer-island events on request.
      - generic [ref=e538]:
        - generic [ref=e539]:
          - paragraph [ref=e540]: Testimonials
          - heading "What event hosts say" [level=2] [ref=e541]
          - paragraph [ref=e542]: Real weddings, retreats, off-sites, and parties — from real villas across Bali.
        - generic [ref=e543]:
          - article [ref=e544]:
            - generic [ref=e545]:
              - generic "5 star review" [ref=e546]:
                - img [ref=e547]
                - img [ref=e549]
                - img [ref=e551]
                - img [ref=e553]
                - img [ref=e555]
              - generic [ref=e557]: Villa Experience
            - img [ref=e558]
            - paragraph [ref=e561]: “We compared three hotels and a wedding planner. myCHEF was half the price and twice the warmth. Sofia ran the day like a Swiss watch.”
            - generic [ref=e562]:
              - generic [ref=e564]: P&
              - generic [ref=e565]:
                - paragraph [ref=e566]: Priya & Raj
                - paragraph [ref=e567]: Uluwatu Villa Wedding
              - generic [ref=e568]:
                - img [ref=e569]
                - text: Recent stay
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
            - paragraph [ref=e588]: “Twelve adults, six kids, three days, three meal services a day. Different dietary needs every meal. The team made it look easy.”
            - generic [ref=e589]:
              - generic [ref=e591]: TL
              - generic [ref=e592]:
                - paragraph [ref=e593]: The Larsen Family
                - paragraph [ref=e594]: Canggu — 3-day reunion
              - generic [ref=e595]:
                - img [ref=e596]
                - text: Recent stay
          - article [ref=e598]:
            - generic [ref=e599]:
              - generic "5 star review" [ref=e600]:
                - img [ref=e601]
                - img [ref=e603]
                - img [ref=e605]
                - img [ref=e607]
                - img [ref=e609]
              - generic [ref=e611]: Villa Experience
            - img [ref=e612]
            - paragraph [ref=e615]: “Two-day off-site for forty engineers. Coffee station never empty, lunch on time every time, gala dinner that landed. Invoice came with NPWP.”
            - generic [ref=e616]:
              - generic [ref=e618]: D—
              - generic [ref=e619]:
                - paragraph [ref=e620]: David — Series A Off-site
                - paragraph [ref=e621]: Berawa Villa Conference
              - generic [ref=e622]:
                - img [ref=e623]
                - text: Recent stay
      - generic [ref=e626]:
        - generic [ref=e627]:
          - paragraph [ref=e628]: Chapter 9 — Questions
          - heading "The eight questions every host asks" [level=2] [ref=e629]
        - generic [ref=e630]:
          - generic [ref=e631]:
            - button "How far in advance do we need to book?" [expanded] [ref=e632] [cursor=pointer]:
              - generic [ref=e633]: How far in advance do we need to book?
              - img [ref=e634]
            - region "How far in advance do we need to book?" [ref=e636]:
              - paragraph [ref=e637]: "Weddings and large retreats: 3–6 months for high season (July–August, December–January). Smaller events and corporate: 4–6 weeks is comfortable. Last-minute is possible — we have run a 30-guest dinner with 72 hours notice. WhatsApp Sofia and we will tell you what is still open."
          - generic [ref=e638]:
            - button "Is the price per person all-in or does tax come on top?" [expanded] [ref=e639] [cursor=pointer]:
              - generic [ref=e640]: Is the price per person all-in or does tax come on top?
              - img [ref=e641]
            - region "Is the price per person all-in or does tax come on top?" [ref=e643]:
              - paragraph [ref=e644]: Listed prices are ++ (before 10% government service charge and 11% VAT). We always show the all-in number in the proposal so you know the total — no surprises. Groceries are billed at cost with no markup.
          - generic [ref=e645]:
            - button "Do you handle dietary requirements at scale?" [expanded] [ref=e646] [cursor=pointer]:
              - generic [ref=e647]: Do you handle dietary requirements at scale?
              - img [ref=e648]
            - region "Do you handle dietary requirements at scale?" [ref=e650]:
              - paragraph [ref=e651]: Yes — this is one of the things we do best. Vegan, halal, gluten-free, raw, kosher-style, nut allergy, shellfish allergy, kids portions. We label every dish, run separate prep lines for allergies, and have done full halal weddings and dietary-led retreats for hundreds.
          - generic [ref=e652]:
            - button "Can you work at any villa in Bali?" [expanded] [ref=e653] [cursor=pointer]:
              - generic [ref=e654]: Can you work at any villa in Bali?
              - img [ref=e655]
            - region "Can you work at any villa in Bali?" [ref=e657]:
              - paragraph [ref=e658]: Yes. We are mobile hospitality — full kitchen, glassware, linens, generator, cold chain, the lot. We have worked at over 200 villas across Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Pererenan, Berawa, and the Bukit peninsula. If your villa is in Bali, we can run an event there.
          - generic [ref=e659]:
            - button "Do we pay a deposit, and what happens if we cancel?" [ref=e660] [cursor=pointer]:
              - generic [ref=e661]: Do we pay a deposit, and what happens if we cancel?
              - img [ref=e662]
            - region "Do we pay a deposit, and what happens if we cancel?":
              - paragraph [ref=e664]: 50% deposit to confirm the date, balance due the week of the event. Cancellation policy is in your proposal — full refund up to 30 days out, 50% inside 30 days, no refund inside 14 days. Force-majeure clauses are standard.
          - generic [ref=e665]:
            - button "Who is our point of contact?" [ref=e666] [cursor=pointer]:
              - generic [ref=e667]: Who is our point of contact?
              - img [ref=e668]
            - region "Who is our point of contact?":
              - paragraph [ref=e670]: Sofia handles events end-to-end — the same person from first WhatsApp to the day-of coordination on site. No handoffs, no losing context. For corporate accounts she works alongside Olivia for invoicing and NPWP paperwork.
          - generic [ref=e671]:
            - button "Can we customise the menu?" [ref=e672] [cursor=pointer]:
              - generic [ref=e673]: Can we customise the menu?
              - img [ref=e674]
            - region "Can we customise the menu?":
              - paragraph [ref=e676]: Every menu is built around the brief. Cuisine, courses, signature dishes, kids menu, dietary-specific lines, branded courses for corporate. Send the spec and we tailor it — and you taste the menu before you sign off when there is time.
          - generic [ref=e677]:
            - button "Do you provide staff, bartenders, and coordinators?" [ref=e678] [cursor=pointer]:
              - generic [ref=e679]: Do you provide staff, bartenders, and coordinators?
              - img [ref=e680]
            - region "Do you provide staff, bartenders, and coordinators?":
              - paragraph [ref=e682]: Yes — chefs, waiters (1 per 10 guests is our standard), bartenders, kitchen team, runners, and an on-site event coordinator are part of every package. For corporate and weddings we add a dedicated coordinator who manages timing, suppliers, and the run-sheet.
      - generic [ref=e684]:
        - generic [ref=e685]:
          - paragraph [ref=e686]: Chapter 10 — Inquire
          - heading "Tell Sofia about your event" [level=2] [ref=e687]
          - paragraph [ref=e688]: One message. Same-hour reply. A proposal in your inbox within 24 hours.
        - generic [ref=e689]:
          - heading "Event Inquiry" [level=3] [ref=e690]
          - paragraph [ref=e691]: The more you share, the sharper the proposal.
          - generic [ref=e692]:
            - generic [ref=e693]:
              - generic [ref=e694]: Event Type*
              - generic [ref=e695]:
                - img [ref=e696]
                - combobox "Event Type*" [ref=e698]:
                  - option "Select event type" [selected]
                  - option "Villa Weddings"
                  - option "Birthday Parties"
                  - option "Anniversary Dinners"
                  - option "Corporate Events"
                  - option "Wellness & Yoga Retreats"
                  - option "Baby Showers"
                  - option "Villa Parties"
            - generic [ref=e699]:
              - generic [ref=e700]: Event Date*
              - generic [ref=e701]:
                - img [ref=e702]
                - textbox "Event Date*" [ref=e704]
            - generic [ref=e705]:
              - generic [ref=e706]: Number of Guests*
              - generic [ref=e707]:
                - img [ref=e708]
                - spinbutton "Number of Guests*" [ref=e713]
            - generic [ref=e714]:
              - generic [ref=e715]: Villa / Location
              - generic [ref=e716]:
                - img [ref=e717]
                - textbox "Villa / Location" [ref=e720]:
                  - /placeholder: Canggu, Seminyak, TBC...
            - generic [ref=e721]:
              - generic [ref=e722]: Budget Range (optional)
              - textbox "Budget Range (optional)" [ref=e724]:
                - /placeholder: e.g. IDR 50M total
            - generic [ref=e725]:
              - generic [ref=e726]: Your Name*
              - textbox "Your Name*" [ref=e728]
            - generic [ref=e729]:
              - generic [ref=e730]: WhatsApp*
              - textbox "WhatsApp*" [ref=e732]
            - generic [ref=e733]:
              - generic [ref=e734]: Email
              - textbox "Email" [ref=e736]
            - generic [ref=e737]:
              - generic [ref=e738]: Tell us more
              - textbox "Tell us more" [ref=e740]:
                - /placeholder: Vibe, dietary needs, special requests, anything else we should know...
          - button "Send via WhatsApp" [ref=e741] [cursor=pointer]:
            - img [ref=e742]
            - text: Send via WhatsApp
          - paragraph [ref=e744]: No payment required now. We will confirm availability first.
      - generic [ref=e746]:
        - paragraph [ref=e747]: As Featured In
        - generic [ref=e748]:
          - generic [ref=e749]:
            - paragraph [ref=e750]: Honeycombers
            - paragraph [ref=e751]: Bali
          - generic [ref=e752]:
            - paragraph [ref=e753]: NOW! Bali
            - paragraph [ref=e754]: Magazine
          - generic [ref=e755]:
            - paragraph [ref=e756]: The Bali Bible
            - paragraph [ref=e757]: Guide
          - generic [ref=e758]:
            - paragraph [ref=e759]: Hello Bali
            - paragraph [ref=e760]: Lifestyle
          - generic [ref=e761]:
            - paragraph [ref=e762]: Tropical Life
            - paragraph [ref=e763]: Magazine
      - generic [ref=e764]:
        - img [ref=e766]
        - generic [ref=e768]:
          - img [ref=e769]
          - heading "One message and we’re running." [level=2] [ref=e772]
          - paragraph [ref=e773]: Sofia replies inside the hour. The proposal lands inside the day. The team arrives on the date — built, briefed, and ready.
          - generic [ref=e774]:
            - link "Plan My Event — Free Consultation" [ref=e775] [cursor=pointer]:
              - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
              - img [ref=e776]
              - text: Plan My Event — Free Consultation
            - link "Call +62 822 3756 5997" [ref=e778] [cursor=pointer]:
              - /url: tel:+6282237565997
              - img [ref=e779]
              - text: Call +62 822 3756 5997
      - generic [ref=e782]:
        - generic [ref=e783]:
          - paragraph [ref=e784]: Where We Serve
          - heading "Events Across Bali" [level=2] [ref=e785]
          - paragraph [ref=e786]: Weddings in Uluwatu. Corporate retreats in Ubud. Birthday parties in Canggu. We know every venue, every vendor, every regulation.
        - generic [ref=e787]:
          - link "Seminyak" [ref=e788] [cursor=pointer]:
            - /url: /seminyak
            - img [ref=e789]
            - text: Seminyak
          - link "Canggu" [ref=e792] [cursor=pointer]:
            - /url: /canggu
            - img [ref=e793]
            - text: Canggu
          - link "Ubud" [ref=e796] [cursor=pointer]:
            - /url: /ubud
            - img [ref=e797]
            - text: Ubud
          - link "Uluwatu" [ref=e800] [cursor=pointer]:
            - /url: /uluwatu
            - img [ref=e801]
            - text: Uluwatu
          - link "Sanur" [ref=e804] [cursor=pointer]:
            - /url: /sanur
            - img [ref=e805]
            - text: Sanur
          - link "Nusa Dua" [ref=e808] [cursor=pointer]:
            - /url: /nusa-dua
            - img [ref=e809]
            - text: Nusa Dua
          - link "Jimbaran" [ref=e812] [cursor=pointer]:
            - /url: /jimbaran
            - img [ref=e813]
            - text: Jimbaran
          - link "Berawa" [ref=e816] [cursor=pointer]:
            - /url: /berawa
            - img [ref=e817]
            - text: Berawa
          - link "Pererenan" [ref=e820] [cursor=pointer]:
            - /url: /pererenan
            - img [ref=e821]
            - text: Pererenan
          - link "Bukit" [ref=e824] [cursor=pointer]:
            - /url: /bukit
            - img [ref=e825]
            - text: Bukit
        - link "View All Locations →" [ref=e829] [cursor=pointer]:
          - /url: /locations
          - text: View All Locations
          - generic [ref=e830]: →
  - generic [ref=e831]: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
  - contentinfo [ref=e832]:
    - generic [ref=e833]:
      - generic [ref=e834]:
        - generic [ref=e835]:
          - heading "myCHEF" [level=3] [ref=e836]
          - paragraph [ref=e837]: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
        - generic [ref=e838]:
          - link "+62 822-3756-5997" [ref=e839] [cursor=pointer]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
            - img [ref=e840]
            - text: +62 822-3756-5997
          - link "indonesia@mychef.id" [ref=e842] [cursor=pointer]:
            - /url: mailto:indonesia@mychef.id
      - generic [ref=e843]:
        - generic [ref=e844]:
          - heading "Fine Dining" [level=4] [ref=e845]
          - list [ref=e846]:
            - listitem [ref=e847]:
              - link "Overview" [ref=e848] [cursor=pointer]:
                - /url: /fine-dining
            - listitem [ref=e849]:
              - link "Private Chef in Bali" [ref=e850] [cursor=pointer]:
                - /url: /fine-dining/private-chef-bali
            - listitem [ref=e851]:
              - link "Tasting Menu" [ref=e852] [cursor=pointer]:
                - /url: /fine-dining/tasting-menu
            - listitem [ref=e853]:
              - link "Romantic Dinner" [ref=e854] [cursor=pointer]:
                - /url: /fine-dining/romantic-dinner
            - listitem [ref=e855]:
              - link "Chef’s Table" [ref=e856] [cursor=pointer]:
                - /url: /fine-dining/chefs-table
            - listitem [ref=e857]:
              - link "Our Menus" [ref=e858] [cursor=pointer]:
                - /url: /fine-dining/menus
            - listitem [ref=e859]:
              - link "Our Chefs" [ref=e860] [cursor=pointer]:
                - /url: /fine-dining/our-chefs
        - generic [ref=e861]:
          - heading "Catering" [level=4] [ref=e862]
          - list [ref=e863]:
            - listitem [ref=e864]:
              - link "Overview" [ref=e865] [cursor=pointer]:
                - /url: /catering
            - listitem [ref=e866]:
              - link "BBQ Catering" [ref=e867] [cursor=pointer]:
                - /url: /catering/bbq-catering
            - listitem [ref=e868]:
              - link "Buffet Catering" [ref=e869] [cursor=pointer]:
                - /url: /catering/buffet
            - listitem [ref=e870]:
              - link "Plated Set Menu" [ref=e871] [cursor=pointer]:
                - /url: /catering/plated-catering
            - listitem [ref=e872]:
              - link "Drop-Off Catering" [ref=e873] [cursor=pointer]:
                - /url: /catering/drop-off-catering
            - listitem [ref=e874]:
              - link "Babi Guling" [ref=e875] [cursor=pointer]:
                - /url: /catering/babi-guling
            - listitem [ref=e876]:
              - link "Grazing Tables" [ref=e877] [cursor=pointer]:
                - /url: /catering/grazing-tables
            - listitem [ref=e878]:
              - link "Floating Breakfast" [ref=e879] [cursor=pointer]:
                - /url: /catering/floating-breakfast
            - listitem [ref=e880]:
              - link "Corporate Catering" [ref=e881] [cursor=pointer]:
                - /url: /catering/corporate-catering
            - listitem [ref=e882]:
              - link "Retreat Catering" [ref=e883] [cursor=pointer]:
                - /url: /catering/retreat-catering
        - generic [ref=e884]:
          - heading "Events" [level=4] [ref=e885]
          - list [ref=e886]:
            - listitem [ref=e887]:
              - link "Overview" [ref=e888] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e889]:
              - link "Weddings" [ref=e890] [cursor=pointer]:
                - /url: /events/weddings
            - listitem [ref=e891]:
              - link "Birthdays" [ref=e892] [cursor=pointer]:
                - /url: /events/birthdays
            - listitem [ref=e893]:
              - link "Anniversaries" [ref=e894] [cursor=pointer]:
                - /url: /events/anniversaries
            - listitem [ref=e895]:
              - link "Corporate Events" [ref=e896] [cursor=pointer]:
                - /url: /events/corporate-events
            - listitem [ref=e897]:
              - link "Retreats" [ref=e898] [cursor=pointer]:
                - /url: /events/retreats
            - listitem [ref=e899]:
              - link "Villa Parties" [ref=e900] [cursor=pointer]:
                - /url: /events/villa-parties
            - listitem [ref=e901]:
              - link "Baby Showers" [ref=e902] [cursor=pointer]:
                - /url: /events/baby-showers
        - generic [ref=e903]:
          - heading "In-Villa Service" [level=4] [ref=e904]
          - list [ref=e905]:
            - listitem [ref=e906]:
              - link "Overview" [ref=e907] [cursor=pointer]:
                - /url: /in-villa-service
            - listitem [ref=e908]:
              - link "Waiters" [ref=e909] [cursor=pointer]:
                - /url: /in-villa-service/waiters
            - listitem [ref=e910]:
              - link "Butlers" [ref=e911] [cursor=pointer]:
                - /url: /in-villa-service/butlers
            - listitem [ref=e912]:
              - link "Bartenders" [ref=e913] [cursor=pointer]:
                - /url: /in-villa-service/bartenders
            - listitem [ref=e914]:
              - link "Mixology" [ref=e915] [cursor=pointer]:
                - /url: /in-villa-service/mixology
            - listitem [ref=e916]:
              - link "Sommelier" [ref=e917] [cursor=pointer]:
                - /url: /in-villa-service/sommelier
            - listitem [ref=e918]:
              - link "Host & Hostess" [ref=e919] [cursor=pointer]:
                - /url: /in-villa-service/host-hostess
        - generic [ref=e920]:
          - heading "Staffing" [level=4] [ref=e921]
          - list [ref=e922]:
            - listitem [ref=e923]:
              - link "Overview" [ref=e924] [cursor=pointer]:
                - /url: /staffing
            - listitem [ref=e925]:
              - link "Private Chef Placement" [ref=e926] [cursor=pointer]:
                - /url: /staffing/private-chef-placement
            - listitem [ref=e927]:
              - link "Live-In Chef" [ref=e928] [cursor=pointer]:
                - /url: /staffing/live-in-chef
            - listitem [ref=e929]:
              - link "Villa Staff" [ref=e930] [cursor=pointer]:
                - /url: /staffing/villa-staff
            - listitem [ref=e931]:
              - link "Household Staff" [ref=e932] [cursor=pointer]:
                - /url: /staffing/household-staff
            - listitem [ref=e933]:
              - link "For Villa Managers" [ref=e934] [cursor=pointer]:
                - /url: /staffing/for-villa-managers
            - listitem [ref=e935]:
              - link "For Hotels & Restaurants" [ref=e936] [cursor=pointer]:
                - /url: /staffing/for-hotels-restaurants
        - generic [ref=e937]:
          - heading "Locations" [level=4] [ref=e938]
          - list [ref=e939]:
            - listitem [ref=e940]:
              - link "All Locations" [ref=e941] [cursor=pointer]:
                - /url: /locations
            - listitem [ref=e942]:
              - link "Seminyak" [ref=e943] [cursor=pointer]:
                - /url: /locations/seminyak
            - listitem [ref=e944]:
              - link "Canggu" [ref=e945] [cursor=pointer]:
                - /url: /locations/canggu
            - listitem [ref=e946]:
              - link "Uluwatu" [ref=e947] [cursor=pointer]:
                - /url: /locations/uluwatu
            - listitem [ref=e948]:
              - link "Ubud" [ref=e949] [cursor=pointer]:
                - /url: /locations/ubud
            - listitem [ref=e950]:
              - link "Nusa Dua" [ref=e951] [cursor=pointer]:
                - /url: /locations/nusa-dua
            - listitem [ref=e952]:
              - link "Jimbaran" [ref=e953] [cursor=pointer]:
                - /url: /locations/jimbaran
            - listitem [ref=e954]:
              - link "Sanur" [ref=e955] [cursor=pointer]:
                - /url: /locations/sanur
            - listitem [ref=e956]:
              - link "Berawa" [ref=e957] [cursor=pointer]:
                - /url: /locations/berawa
            - listitem [ref=e958]:
              - link "Pererenan" [ref=e959] [cursor=pointer]:
                - /url: /locations/pererenan
            - listitem [ref=e960]:
              - link "Bukit Peninsula" [ref=e961] [cursor=pointer]:
                - /url: /locations/bukit
      - generic [ref=e962]:
        - link "Catering" [ref=e963] [cursor=pointer]:
          - /url: /catering
        - link "Locations" [ref=e964] [cursor=pointer]:
          - /url: /locations
        - link "About" [ref=e965] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e966] [cursor=pointer]:
          - /url: /contact
        - link "Services" [ref=e967] [cursor=pointer]:
          - /url: /services
        - link "Pricing" [ref=e968] [cursor=pointer]:
          - /url: /pricing
        - link "Price Calculator" [ref=e969] [cursor=pointer]:
          - /url: /calculator
        - link "FAQ" [ref=e970] [cursor=pointer]:
          - /url: /faq
        - link "Reviews" [ref=e971] [cursor=pointer]:
          - /url: /reviews
        - link "Why myCHEF" [ref=e972] [cursor=pointer]:
          - /url: /why-mychef
        - link "Press" [ref=e973] [cursor=pointer]:
          - /url: /press
        - link "Join the Team" [ref=e974] [cursor=pointer]:
          - /url: /join-our-team
        - link "Partner Platform" [ref=e975] [cursor=pointer]:
          - /url: /partner-platform
        - link "Journal" [ref=e976] [cursor=pointer]:
          - /url: /journal
        - link "Blog & Guides" [ref=e977] [cursor=pointer]:
          - /url: /blog
        - link "Book" [ref=e978] [cursor=pointer]:
          - /url: /book
      - generic [ref=e979]:
        - link "+62 822-3756-5997" [ref=e980] [cursor=pointer]:
          - /url: tel:+6282237565997
          - img [ref=e981]
          - text: +62 822-3756-5997
        - link "indonesia@mychef.id" [ref=e983] [cursor=pointer]:
          - /url: mailto:indonesia@mychef.id
          - img [ref=e984]
          - text: indonesia@mychef.id
        - generic [ref=e987]:
          - img [ref=e988]
          - text: Bali, Indonesia
        - link "Instagram" [ref=e991] [cursor=pointer]:
          - /url: https://instagram.com/mychef.id
          - img [ref=e992]
          - text: Instagram
        - link "WhatsApp" [ref=e995] [cursor=pointer]:
          - /url: https://wa.me/6282237565997
          - img [ref=e996]
          - text: WhatsApp
      - generic [ref=e998]:
        - link "Staff Login" [ref=e999] [cursor=pointer]:
          - /url: /partner-platform
          - img [ref=e1000]
          - text: Staff Login
        - generic [ref=e1003]:
          - link "Terms" [ref=e1004] [cursor=pointer]:
            - /url: /terms
          - link "Privacy" [ref=e1005] [cursor=pointer]:
            - /url: /privacy
          - link "Cancellation" [ref=e1006] [cursor=pointer]:
            - /url: /cancellation
      - paragraph [ref=e1007]: © 2026 myCHEF.id. All rights reserved.
  - generic [ref=e1009]:
    - generic: Chat with us on WhatsApp
    - link "Chat with us on WhatsApp" [ref=e1010] [cursor=pointer]:
      - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
      - img [ref=e1011]
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