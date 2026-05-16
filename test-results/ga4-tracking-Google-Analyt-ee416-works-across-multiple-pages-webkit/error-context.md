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
  - link "Skip to main content" [ref=e4]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e5]:
    - generic [ref=e6]:
      - link "myCHEF Events" [ref=e7]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e10]:
          - generic [ref=e11]: myCHEF
          - generic [ref=e12]: Events
      - generic [ref=e13]:
        - link "Book" [ref=e14]:
          - /url: /book
        - button "Open menu" [ref=e15] [cursor=pointer]:
          - img [ref=e16]
  - main [ref=e17]:
    - generic [ref=e18]:
      - navigation "Breadcrumb" [ref=e19]:
        - list [ref=e20]:
          - listitem [ref=e21]:
            - link "Home" [ref=e22]:
              - /url: /
              - img [ref=e23]
              - generic [ref=e26]: Home
          - listitem [ref=e27]:
            - img [ref=e28]
            - generic [ref=e30]: Events
      - generic [ref=e31]:
        - img "Luxury villa event in Bali with styled dining and celebration setup" [ref=e32]
        - generic [ref=e34]:
          - paragraph [ref=e35]: Chapter 1 — Bali Events
          - heading "Events in Bali, run by one team. You just host." [level=1] [ref=e36]:
            - text: Events in Bali, run by one team.
            - text: You just host.
          - paragraph [ref=e37]: Villa weddings, birthdays, anniversaries, corporate events, retreats, baby showers, and villa parties. Food, drinks, staff, styling, and coordination — handled by one team, in your villa, anywhere in Bali.
          - generic [ref=e38]:
            - link "Plan My Event — Free Consultation" [ref=e39]:
              - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
              - img [ref=e40]
              - text: Plan My Event — Free Consultation
            - link "View Event Types" [ref=e42]:
              - /url: "#event-types"
              - text: View Event Types
              - img [ref=e43]
          - paragraph [ref=e45]: From IDR 600K++/guest · Free consultation · Same-day WhatsApp reply · Transparent proposal before deposit
      - generic [ref=e48]:
        - generic [ref=e49]:
          - img [ref=e51]
          - generic [ref=e53]:
            - paragraph [ref=e54]: Same-day WhatsApp
            - paragraph [ref=e55]: Confirmation within the hour
        - generic [ref=e56]:
          - img [ref=e58]
          - generic [ref=e61]:
            - paragraph [ref=e62]: 50% deposit only
            - paragraph [ref=e63]: Balance due before event
        - generic [ref=e64]:
          - img [ref=e66]
          - generic [ref=e71]:
            - paragraph [ref=e72]: 1 waiter per 10 guests
            - paragraph [ref=e73]: Industry-standard service
        - generic [ref=e74]:
          - img [ref=e76]
          - generic [ref=e79]:
            - paragraph [ref=e80]: Full cleanup
            - paragraph [ref=e81]: We pack up and leave
      - generic [ref=e84]:
        - generic [ref=e85]:
          - img [ref=e87]
          - generic [ref=e91]:
            - paragraph [ref=e92]: Dedicated event producer
            - paragraph [ref=e93]: One point of contact from planning to cleanup
        - generic [ref=e94]:
          - img [ref=e96]
          - generic [ref=e100]:
            - paragraph [ref=e101]: Full liability insurance
            - paragraph [ref=e102]: For events up to 200 guests
      - generic [ref=e104]:
        - paragraph [ref=e105]: Production, not catering
        - heading "We approach events the way a fine-dining kitchen approaches service." [level=2] [ref=e106]
        - paragraph [ref=e107]: "One brigade owns the night — chefs in the kitchen, waiters on the floor, bartenders on the bar, a coordinator on the timeline. Whether it is a six-person anniversary or a hundred-and-fifty-guest wedding, the standard is the same: hot food on time, full glasses, clean plates, and a host who never had to look at a watch."
      - generic [ref=e109]:
        - generic [ref=e110]:
          - paragraph [ref=e111]: Chapter 2 — All Events We Cover
          - heading "Four of the formats we run most often" [level=2] [ref=e112]
          - paragraph [ref=e113]: Weddings, birthdays, corporate events, and retreats each ask for a different service rhythm — but the same operational discipline.
        - generic [ref=e114]:
          - link "Villa Weddings in Bali by myCHEF The Once-In-A-Lifetime Villa Weddings Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance." [ref=e115]:
            - /url: /events/weddings
            - img "Villa Weddings in Bali by myCHEF" [ref=e117]
            - generic [ref=e118]:
              - paragraph [ref=e119]: The Once-In-A-Lifetime
              - heading "Villa Weddings" [level=3] [ref=e120]
              - paragraph [ref=e121]: Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance.
          - link "Birthday Parties in Bali by myCHEF The Milestone Birthday Parties Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless." [ref=e122]:
            - /url: /events/birthdays
            - img "Birthday Parties in Bali by myCHEF" [ref=e124]
            - generic [ref=e125]:
              - paragraph [ref=e126]: The Milestone
              - heading "Birthday Parties" [level=3] [ref=e127]
              - paragraph [ref=e128]: Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless.
          - link "Corporate Events in Bali by myCHEF The Off-Site Corporate Events Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued." [ref=e129]:
            - /url: /events/corporate-events
            - img "Corporate Events in Bali by myCHEF" [ref=e131]
            - generic [ref=e132]:
              - paragraph [ref=e133]: The Off-Site
              - heading "Corporate Events" [level=3] [ref=e134]
              - paragraph [ref=e135]: Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued.
          - link "Wellness & Yoga Retreats in Bali by myCHEF The Multi-Day Wellness & Yoga Retreats Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule." [ref=e136]:
            - /url: /events/retreats
            - img "Wellness & Yoga Retreats in Bali by myCHEF" [ref=e138]
            - generic [ref=e139]:
              - paragraph [ref=e140]: The Multi-Day
              - heading "Wellness & Yoga Retreats" [level=3] [ref=e141]
              - paragraph [ref=e142]: Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule.
      - generic [ref=e144]:
        - generic [ref=e145]:
          - paragraph [ref=e146]: Chapter 3 — Seven Kinds of Evening
          - heading "Choose the kind of event you are hosting" [level=2] [ref=e147]
          - paragraph [ref=e148]: Each pillar has its own page with full pricing, menus, and a tailored inquiry form.
        - generic [ref=e149]:
          - link "Villa Weddings in Bali by myCHEF The Once-In-A-Lifetime Villa Weddings From 600K++/pp ≈ IDR 726.000 all-in/pp Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance. Explore" [ref=e150]:
            - /url: /events/weddings
            - generic [ref=e151]:
              - img "Villa Weddings in Bali by myCHEF" [ref=e152]
              - generic [ref=e154]:
                - img [ref=e155]
                - generic [ref=e157]: The Once-In-A-Lifetime
            - generic [ref=e158]:
              - heading "Villa Weddings" [level=3] [ref=e159]
              - paragraph [ref=e160]:
                - generic [ref=e161]: From 600K++/pp
                - generic [ref=e162]: ≈ IDR 726.000 all-in/pp
              - paragraph [ref=e163]: Intimate ceremonies, full receptions, and luxury celebrations. Coordinator on the day, full styling, ceremony to last dance.
              - generic [ref=e164]:
                - text: Explore
                - img [ref=e165]
          - link "Birthday Parties in Bali by myCHEF The Milestone Birthday Parties From 850K++/pp ≈ IDR 1.0M all-in/pp Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless. Explore" [ref=e167]:
            - /url: /events/birthdays
            - generic [ref=e168]:
              - img "Birthday Parties in Bali by myCHEF" [ref=e169]
              - generic [ref=e171]:
                - img [ref=e172]
                - generic [ref=e175]: The Milestone
            - generic [ref=e176]:
              - heading "Birthday Parties" [level=3] [ref=e177]
              - paragraph [ref=e178]:
                - generic [ref=e179]: From 850K++/pp
                - generic [ref=e180]: ≈ IDR 1.0M all-in/pp
              - paragraph [ref=e181]: Intimate dinners, villa parties, and kids celebrations. Cake, themed setup, and a team that makes the day effortless.
              - generic [ref=e182]:
                - text: Explore
                - img [ref=e183]
          - link "Anniversary Dinners in Bali by myCHEF The Two Of You Anniversary Dinners From 1.2M++/pp ≈ IDR 1.5M all-in/pp Private candlelit dinners, vow renewals, and small-group celebrations. The opposite of a hotel package — built around your story. Explore" [ref=e185]:
            - /url: /events/anniversaries
            - generic [ref=e186]:
              - img "Anniversary Dinners in Bali by myCHEF" [ref=e187]
              - generic [ref=e189]:
                - img [ref=e190]
                - generic [ref=e192]: The Two Of You
            - generic [ref=e193]:
              - heading "Anniversary Dinners" [level=3] [ref=e194]
              - paragraph [ref=e195]:
                - generic [ref=e196]: From 1.2M++/pp
                - generic [ref=e197]: ≈ IDR 1.5M all-in/pp
              - paragraph [ref=e198]: Private candlelit dinners, vow renewals, and small-group celebrations. The opposite of a hotel package — built around your story.
              - generic [ref=e199]:
                - text: Explore
                - img [ref=e200]
          - link "Corporate Events in Bali by myCHEF The Off-Site Corporate Events From 1.2M++/pp ≈ IDR 1.5M all-in/pp Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued. Explore" [ref=e202]:
            - /url: /events/corporate-events
            - generic [ref=e203]:
              - img "Corporate Events in Bali by myCHEF" [ref=e204]
              - generic [ref=e206]:
                - img [ref=e207]
                - generic [ref=e210]: The Off-Site
            - generic [ref=e211]:
              - heading "Corporate Events" [level=3] [ref=e212]
              - paragraph [ref=e213]:
                - generic [ref=e214]: From 1.2M++/pp
                - generic [ref=e215]: ≈ IDR 1.5M all-in/pp
              - paragraph [ref=e216]: Executive dinners, conferences, retreats, product launches. Hospitality production grade — invoice-ready, NPWP-issued.
              - generic [ref=e217]:
                - text: Explore
                - img [ref=e218]
          - link "Wellness & Yoga Retreats in Bali by myCHEF The Multi-Day Wellness & Yoga Retreats From 1.5M++/pp/day ≈ IDR 1.8M all-in/pp/day Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule. Explore" [ref=e220]:
            - /url: /events/retreats
            - generic [ref=e221]:
              - img "Wellness & Yoga Retreats in Bali by myCHEF" [ref=e222]
              - generic [ref=e224]:
                - img [ref=e225]
                - generic [ref=e228]: The Multi-Day
            - generic [ref=e229]:
              - heading "Wellness & Yoga Retreats" [level=3] [ref=e230]
              - paragraph [ref=e231]:
                - generic [ref=e232]: From 1.5M++/pp/day
                - generic [ref=e233]: ≈ IDR 1.8M all-in/pp/day
              - paragraph [ref=e234]: Dietary-specialist meals across multi-day retreats. Plant-forward, gluten-free, raw, vegan — handled at scale, on schedule.
              - generic [ref=e235]:
                - text: Explore
                - img [ref=e236]
          - link "Baby Showers in Bali by myCHEF The Sweetest Baby Showers From 750K++/pp ≈ IDR 907.500 all-in/pp Brunch and high-tea showers, themed decor, mocktail bars, and styling so gentle it photographs itself. Explore" [ref=e238]:
            - /url: /events/baby-showers
            - generic [ref=e239]:
              - img "Baby Showers in Bali by myCHEF" [ref=e240]
              - generic [ref=e242]:
                - img [ref=e243]
                - generic [ref=e246]: The Sweetest
            - generic [ref=e247]:
              - heading "Baby Showers" [level=3] [ref=e248]
              - paragraph [ref=e249]:
                - generic [ref=e250]: From 750K++/pp
                - generic [ref=e251]: ≈ IDR 907.500 all-in/pp
              - paragraph [ref=e252]: Brunch and high-tea showers, themed decor, mocktail bars, and styling so gentle it photographs itself.
              - generic [ref=e253]:
                - text: Explore
                - img [ref=e254]
          - link "Villa Parties in Bali by myCHEF The Long Weekend Villa Parties From 650K++/pp ≈ IDR 786.500 all-in/pp Cocktail receptions, sundowner BBQs, hens & bucks weekends. Bar, music, decor, and Sofia keeping the night on rails. Explore" [ref=e256]:
            - /url: /events/villa-parties
            - generic [ref=e257]:
              - img "Villa Parties in Bali by myCHEF" [ref=e258]
              - generic [ref=e260]:
                - img [ref=e261]
                - generic [ref=e265]: The Long Weekend
            - generic [ref=e266]:
              - heading "Villa Parties" [level=3] [ref=e267]
              - paragraph [ref=e268]:
                - generic [ref=e269]: From 650K++/pp
                - generic [ref=e270]: ≈ IDR 786.500 all-in/pp
              - paragraph [ref=e271]: Cocktail receptions, sundowner BBQs, hens & bucks weekends. Bar, music, decor, and Sofia keeping the night on rails.
              - generic [ref=e272]:
                - text: Explore
                - img [ref=e273]
      - generic [ref=e276]:
        - generic [ref=e277]:
          - paragraph [ref=e278]: Chapter 4 — How It Works
          - heading "Three clear steps from first message to event day." [level=2] [ref=e279]
        - generic [ref=e280]:
          - generic [ref=e281]:
            - paragraph [ref=e282]: "01"
            - img [ref=e283]
            - heading "WhatsApp" [level=3] [ref=e285]
            - paragraph [ref=e286]: Send the date, guest count, villa, and event type. Sofia replies fast with availability, price direction, and the right format to shortlist.
          - generic [ref=e287]:
            - paragraph [ref=e288]: "02"
            - img [ref=e289]
            - heading "Proposal" [level=3] [ref=e293]
            - paragraph [ref=e294]: We turn the brief into one working document covering food, drinks, staffing, styling, timing, and all-in pricing for sign-off.
          - generic [ref=e295]:
            - paragraph [ref=e296]: "03"
            - img [ref=e297]
            - heading "Event Day" [level=3] [ref=e299]
            - paragraph [ref=e300]: Our team arrives, builds the setup, runs the service, and clears down after the event so you can focus on hosting instead of coordinating.
      - generic [ref=e302]:
        - generic [ref=e303]:
          - paragraph [ref=e304]: Chapter 4 — Why myCHEF
          - heading "The three reasons hosts hand us the whole evening" [level=2] [ref=e305]
        - generic [ref=e306]:
          - generic [ref=e307]:
            - img [ref=e309]
            - heading "One team, one bill, one contact" [level=3] [ref=e314]
            - paragraph [ref=e315]: Food, drinks, staff, styling, coordination — handled in-house. No supplier merry-go-round. One WhatsApp thread, one proposal, one invoice.
          - generic [ref=e316]:
            - img [ref=e318]
            - heading "Built for villa hospitality" [level=3] [ref=e323]
            - paragraph [ref=e324]: Most Bali events happen in private villas, not hotel ballrooms. Our entire operation is mobile — generator, prep stations, glassware, cold chain, the lot.
          - generic [ref=e325]:
            - img [ref=e327]
            - heading "International-standard execution" [level=3] [ref=e330]
            - paragraph [ref=e331]: Plated service, dietary mapping at scale, multi-course timing, allergy-line discipline. The fine-dining playbook applied to your living room.
      - generic [ref=e333]:
        - generic [ref=e334]:
          - paragraph [ref=e335]: Chapter 5 — Competitive Edge
          - heading "Why myCHEF for events" [level=2] [ref=e336]
          - paragraph [ref=e337]: How we compare to the alternatives you are probably researching.
        - generic [ref=e338]:
          - generic [ref=e339]:
            - img [ref=e341]
            - generic [ref=e343]:
              - heading "vs Mimpi / All-in-one operators" [level=4] [ref=e344]
              - paragraph [ref=e345]: We specialise in food + events, not real estate. Better menus, sharper pricing, no villa markup.
          - generic [ref=e346]:
            - img [ref=e348]
            - generic [ref=e350]:
              - heading "vs Single-service operators" [level=4] [ref=e351]
              - paragraph [ref=e352]: One contact for catering, bar, staff, and coordination. No chasing five vendors on WhatsApp.
          - generic [ref=e353]:
            - img [ref=e355]
            - generic [ref=e357]:
              - heading "vs Hotel packages" [level=4] [ref=e358]
              - paragraph [ref=e359]: Your villa, your rules, your timeline. No hotel curfews, no generic menus, no ballroom feel.
      - generic [ref=e361]:
        - generic [ref=e362]:
          - paragraph [ref=e363]: Chapter 6 — Pricing
          - heading "What an event actually costs" [level=2] [ref=e364]
          - paragraph [ref=e365]: Every price below is per guest, before tax and service. The proposal Sofia sends includes the all-in total — no surprises.
        - generic [ref=e366]:
          - generic [ref=e367]:
            - generic [ref=e368]: Event Type
            - generic [ref=e369]: From Price
            - generic [ref=e370]: Min Guests
            - generic [ref=e371]: Best For
          - generic [ref=e372]:
            - generic [ref=e373]: Villa Weddings (Intimate)
            - generic [ref=e375]:
              - generic [ref=e376]: IDR 600.000++/person
              - generic [ref=e377]: IDR 726.000 all-in/person
            - generic [ref=e378]: 10+
            - generic [ref=e379]: Elopements, micro-weddings
          - generic [ref=e380]:
            - generic [ref=e381]: Villa Weddings (Luxury)
            - generic [ref=e383]:
              - generic [ref=e384]: IDR 1.5M++/person
              - generic [ref=e385]: IDR 1.8M all-in/person
            - generic [ref=e386]: 40+
            - generic [ref=e387]: Full receptions, multi-day
          - generic [ref=e388]:
            - generic [ref=e389]: Birthday Parties
            - generic [ref=e391]:
              - generic [ref=e392]: IDR 850.000++/person
              - generic [ref=e393]: IDR 1.0M all-in/person
            - generic [ref=e394]: 15+
            - generic [ref=e395]: Milestone dinners, villa parties
          - generic [ref=e396]:
            - generic [ref=e397]: Anniversary Dinners
            - generic [ref=e399]:
              - generic [ref=e400]: IDR 1.2M++/person
              - generic [ref=e401]: IDR 1.5M all-in/person
            - generic [ref=e402]: 2+
            - generic [ref=e403]: Couples, vow renewals
          - generic [ref=e404]:
            - generic [ref=e405]: Corporate Events
            - generic [ref=e407]:
              - generic [ref=e408]: IDR 1.2M++/person
              - generic [ref=e409]: IDR 1.5M all-in/person
            - generic [ref=e410]: 10+
            - generic [ref=e411]: Conferences, exec dinners
          - generic [ref=e412]:
            - generic [ref=e413]: Wellness Retreats
            - generic [ref=e415]:
              - generic [ref=e416]: IDR 1.5M++/person/day
              - generic [ref=e417]: IDR 1.8M all-in/person/day
            - generic [ref=e418]: 8+
            - generic [ref=e419]: Yoga, wellness, dietary-led
          - generic [ref=e420]:
            - generic [ref=e421]: Baby Showers
            - generic [ref=e423]:
              - generic [ref=e424]: IDR 750.000++/person
              - generic [ref=e425]: IDR 907.500 all-in/person
            - generic [ref=e426]: 10+
            - generic [ref=e427]: Brunch, high tea, gender reveal
          - generic [ref=e428]:
            - generic [ref=e429]: Villa Parties
            - generic [ref=e431]:
              - generic [ref=e432]: IDR 650.000++/person
              - generic [ref=e433]: IDR 786.500 all-in/person
            - generic [ref=e434]: 20+
            - generic [ref=e435]: Sundowners, hens, cocktail
        - generic [ref=e436]:
          - generic [ref=e437]:
            - heading "Per-person base" [level=4] [ref=e438]
            - paragraph [ref=e439]: Covers chef, ingredients, service staff, and basic setup. Varies by event type and menu.
          - generic [ref=e440]:
            - heading "Add-ons" [level=4] [ref=e441]
            - paragraph [ref=e442]: Photography, custom cake, live music, premium bar, extended decor — all itemised in the proposal.
          - generic [ref=e443]:
            - heading "Tax & service" [level=4] [ref=e444]
            - paragraph [ref=e445]: 10% government service charge + 11% VAT added at proposal. No hidden fees.
          - generic [ref=e446]:
            - heading "Deposit" [level=4] [ref=e447]
            - paragraph [ref=e448]: 50% to confirm the date. Balance due the week of the event. Net-30 for repeat corporate clients.
        - paragraph [ref=e449]: All prices ++ (10% government service charge and 11% VAT added at proposal). Groceries billed at cost — no markup. 50% deposit to confirm.
      - generic [ref=e451]:
        - paragraph [ref=e452]: Chapter 7 — Your Coordinator
        - img [ref=e454]
        - heading "Sofia" [level=2] [ref=e456]
        - paragraph [ref=e457]: "\"I have coordinated 200+ events across Bali — from 2-person anniversary dinners to 200-guest weddings. My job is simple: make sure the host never has to look at a watch.\""
        - generic [ref=e458]:
          - link "Plan My Event — Free Consultation" [ref=e459]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
            - img [ref=e460]
            - text: Plan My Event — Free Consultation
          - link "Call +62 822 3756 5997" [ref=e462]:
            - /url: tel:+6282237565997
            - img [ref=e463]
            - text: Call +62 822 3756 5997
      - generic [ref=e466]:
        - paragraph [ref=e467]: Chapter 8 — Where We Work
        - heading "Mobile hospitality across Bali" [level=2] [ref=e468]
        - paragraph [ref=e469]: Generator, prep kitchen, cold chain, glassware, linens, and the team — packed and travelled to your villa. Same-island, same-day setups.
        - generic [ref=e470]:
          - generic [ref=e471]:
            - img [ref=e472]
            - text: Seminyak
          - generic [ref=e475]:
            - img [ref=e476]
            - text: Canggu
          - generic [ref=e479]:
            - img [ref=e480]
            - text: Ubud
          - generic [ref=e483]:
            - img [ref=e484]
            - text: Uluwatu
          - generic [ref=e487]:
            - img [ref=e488]
            - text: Sanur
          - generic [ref=e491]:
            - img [ref=e492]
            - text: Nusa Dua
          - generic [ref=e495]:
            - img [ref=e496]
            - text: Jimbaran
          - generic [ref=e499]:
            - img [ref=e500]
            - text: Berawa
          - generic [ref=e503]:
            - img [ref=e504]
            - text: Pererenan
          - generic [ref=e507]:
            - img [ref=e508]
            - text: Bukit
          - generic [ref=e511]:
            - img [ref=e512]
            - text: Bingin
          - generic [ref=e515]:
            - img [ref=e516]
            - text: Tabanan
        - paragraph [ref=e519]: Not on the list? We travel anywhere in Bali. Outer-island events on request.
      - generic [ref=e521]:
        - generic [ref=e522]:
          - paragraph [ref=e523]: Testimonials
          - heading "What event hosts say" [level=2] [ref=e524]
          - paragraph [ref=e525]: Real weddings, retreats, off-sites, and parties — from real villas across Bali.
        - generic [ref=e526]:
          - article [ref=e527]:
            - generic [ref=e528]:
              - generic "5 star review" [ref=e529]:
                - img [ref=e530]
                - img [ref=e532]
                - img [ref=e534]
                - img [ref=e536]
                - img [ref=e538]
              - generic [ref=e540]: Villa Experience
            - img [ref=e541]
            - paragraph [ref=e544]: “We compared three hotels and a wedding planner. myCHEF was half the price and twice the warmth. Sofia ran the day like a Swiss watch.”
            - generic [ref=e545]:
              - generic [ref=e547]: P&
              - generic [ref=e548]:
                - paragraph [ref=e549]: Priya & Raj
                - paragraph [ref=e550]: Uluwatu Villa Wedding
              - generic [ref=e551]:
                - img [ref=e552]
                - text: Recent stay
          - article [ref=e554]:
            - generic [ref=e555]:
              - generic "5 star review" [ref=e556]:
                - img [ref=e557]
                - img [ref=e559]
                - img [ref=e561]
                - img [ref=e563]
                - img [ref=e565]
              - generic [ref=e567]: Villa Experience
            - img [ref=e568]
            - paragraph [ref=e571]: “Twelve adults, six kids, three days, three meal services a day. Different dietary needs every meal. The team made it look easy.”
            - generic [ref=e572]:
              - generic [ref=e574]: TL
              - generic [ref=e575]:
                - paragraph [ref=e576]: The Larsen Family
                - paragraph [ref=e577]: Canggu — 3-day reunion
              - generic [ref=e578]:
                - img [ref=e579]
                - text: Recent stay
          - article [ref=e581]:
            - generic [ref=e582]:
              - generic "5 star review" [ref=e583]:
                - img [ref=e584]
                - img [ref=e586]
                - img [ref=e588]
                - img [ref=e590]
                - img [ref=e592]
              - generic [ref=e594]: Villa Experience
            - img [ref=e595]
            - paragraph [ref=e598]: “Two-day off-site for forty engineers. Coffee station never empty, lunch on time every time, gala dinner that landed. Invoice came with NPWP.”
            - generic [ref=e599]:
              - generic [ref=e601]: D—
              - generic [ref=e602]:
                - paragraph [ref=e603]: David — Series A Off-site
                - paragraph [ref=e604]: Berawa Villa Conference
              - generic [ref=e605]:
                - img [ref=e606]
                - text: Recent stay
      - generic [ref=e609]:
        - generic [ref=e610]:
          - paragraph [ref=e611]: Chapter 9 — Questions
          - heading "The eight questions every host asks" [level=2] [ref=e612]
        - generic [ref=e613]:
          - generic [ref=e614]:
            - button "How far in advance do we need to book?" [expanded] [ref=e615] [cursor=pointer]:
              - generic [ref=e616]: How far in advance do we need to book?
              - img [ref=e617]
            - region "How far in advance do we need to book?" [ref=e619]:
              - paragraph [ref=e620]: "Weddings and large retreats: 3–6 months for high season (July–August, December–January). Smaller events and corporate: 4–6 weeks is comfortable. Last-minute is possible — we have run a 30-guest dinner with 72 hours notice. WhatsApp Sofia and we will tell you what is still open."
          - generic [ref=e621]:
            - button "Is the price per person all-in or does tax come on top?" [expanded] [ref=e622] [cursor=pointer]:
              - generic [ref=e623]: Is the price per person all-in or does tax come on top?
              - img [ref=e624]
            - region "Is the price per person all-in or does tax come on top?" [ref=e626]:
              - paragraph [ref=e627]: Listed prices are ++ (before 10% government service charge and 11% VAT). We always show the all-in number in the proposal so you know the total — no surprises. Groceries are billed at cost with no markup.
          - generic [ref=e628]:
            - button "Do you handle dietary requirements at scale?" [expanded] [ref=e629] [cursor=pointer]:
              - generic [ref=e630]: Do you handle dietary requirements at scale?
              - img [ref=e631]
            - region "Do you handle dietary requirements at scale?" [ref=e633]:
              - paragraph [ref=e634]: Yes — this is one of the things we do best. Vegan, halal, gluten-free, raw, kosher-style, nut allergy, shellfish allergy, kids portions. We label every dish, run separate prep lines for allergies, and have done full halal weddings and dietary-led retreats for hundreds.
          - generic [ref=e635]:
            - button "Can you work at any villa in Bali?" [expanded] [ref=e636] [cursor=pointer]:
              - generic [ref=e637]: Can you work at any villa in Bali?
              - img [ref=e638]
            - region "Can you work at any villa in Bali?" [ref=e640]:
              - paragraph [ref=e641]: Yes. We are mobile hospitality — full kitchen, glassware, linens, generator, cold chain, the lot. We have worked at over 200 villas across Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Pererenan, Berawa, and the Bukit peninsula. If your villa is in Bali, we can run an event there.
          - generic [ref=e642]:
            - button "Do we pay a deposit, and what happens if we cancel?" [ref=e643] [cursor=pointer]:
              - generic [ref=e644]: Do we pay a deposit, and what happens if we cancel?
              - img [ref=e645]
            - region "Do we pay a deposit, and what happens if we cancel?":
              - paragraph [ref=e647]: 50% deposit to confirm the date, balance due the week of the event. Cancellation policy is in your proposal — full refund up to 30 days out, 50% inside 30 days, no refund inside 14 days. Force-majeure clauses are standard.
          - generic [ref=e648]:
            - button "Who is our point of contact?" [ref=e649] [cursor=pointer]:
              - generic [ref=e650]: Who is our point of contact?
              - img [ref=e651]
            - region "Who is our point of contact?":
              - paragraph [ref=e653]: Sofia handles events end-to-end — the same person from first WhatsApp to the day-of coordination on site. No handoffs, no losing context. For corporate accounts she works alongside Olivia for invoicing and NPWP paperwork.
          - generic [ref=e654]:
            - button "Can we customise the menu?" [ref=e655] [cursor=pointer]:
              - generic [ref=e656]: Can we customise the menu?
              - img [ref=e657]
            - region "Can we customise the menu?":
              - paragraph [ref=e659]: Every menu is built around the brief. Cuisine, courses, signature dishes, kids menu, dietary-specific lines, branded courses for corporate. Send the spec and we tailor it — and you taste the menu before you sign off when there is time.
          - generic [ref=e660]:
            - button "Do you provide staff, bartenders, and coordinators?" [ref=e661] [cursor=pointer]:
              - generic [ref=e662]: Do you provide staff, bartenders, and coordinators?
              - img [ref=e663]
            - region "Do you provide staff, bartenders, and coordinators?":
              - paragraph [ref=e665]: Yes — chefs, waiters (1 per 10 guests is our standard), bartenders, kitchen team, runners, and an on-site event coordinator are part of every package. For corporate and weddings we add a dedicated coordinator who manages timing, suppliers, and the run-sheet.
      - generic [ref=e667]:
        - generic [ref=e668]:
          - paragraph [ref=e669]: Chapter 10 — Inquire
          - heading "Tell Sofia about your event" [level=2] [ref=e670]
          - paragraph [ref=e671]: One message. Same-hour reply. A proposal in your inbox within 24 hours.
        - generic [ref=e672]:
          - heading "Event Inquiry" [level=3] [ref=e673]
          - paragraph [ref=e674]: The more you share, the sharper the proposal.
          - generic [ref=e675]:
            - generic [ref=e676]:
              - generic [ref=e677]: Event Type*
              - generic [ref=e678]:
                - img [ref=e679]
                - combobox "Event Type*" [ref=e681]:
                  - option "Select event type" [selected]
                  - option "Villa Weddings"
                  - option "Birthday Parties"
                  - option "Anniversary Dinners"
                  - option "Corporate Events"
                  - option "Wellness & Yoga Retreats"
                  - option "Baby Showers"
                  - option "Villa Parties"
            - generic [ref=e682]:
              - generic [ref=e683]: Event Date*
              - generic [ref=e684]:
                - img [ref=e685]
                - textbox "Event Date*" [ref=e687]
            - generic [ref=e688]:
              - generic [ref=e689]: Number of Guests*
              - generic [ref=e690]:
                - img [ref=e691]
                - spinbutton "Number of Guests*" [ref=e696]
            - generic [ref=e697]:
              - generic [ref=e698]: Villa / Location
              - generic [ref=e699]:
                - img [ref=e700]
                - textbox "Villa / Location" [ref=e703]:
                  - /placeholder: Canggu, Seminyak, TBC...
            - generic [ref=e704]:
              - generic [ref=e705]: Budget Range (optional)
              - textbox "Budget Range (optional)" [ref=e707]:
                - /placeholder: e.g. IDR 50M total
            - generic [ref=e708]:
              - generic [ref=e709]: Your Name*
              - textbox "Your Name*" [ref=e711]
            - generic [ref=e712]:
              - generic [ref=e713]: WhatsApp*
              - textbox "WhatsApp*" [ref=e715]
            - generic [ref=e716]:
              - generic [ref=e717]: Email
              - textbox "Email" [ref=e719]
            - generic [ref=e720]:
              - generic [ref=e721]: Tell us more
              - textbox "Tell us more" [ref=e723]:
                - /placeholder: Vibe, dietary needs, special requests, anything else we should know...
          - button "Send via WhatsApp" [ref=e724] [cursor=pointer]:
            - img [ref=e725]
            - text: Send via WhatsApp
          - paragraph [ref=e727]: No payment required now. We will confirm availability first.
      - generic [ref=e729]:
        - paragraph [ref=e730]: As Featured In
        - generic [ref=e731]:
          - generic [ref=e732]:
            - paragraph [ref=e733]: Honeycombers
            - paragraph [ref=e734]: Bali
          - generic [ref=e735]:
            - paragraph [ref=e736]: NOW! Bali
            - paragraph [ref=e737]: Magazine
          - generic [ref=e738]:
            - paragraph [ref=e739]: The Bali Bible
            - paragraph [ref=e740]: Guide
          - generic [ref=e741]:
            - paragraph [ref=e742]: Hello Bali
            - paragraph [ref=e743]: Lifestyle
          - generic [ref=e744]:
            - paragraph [ref=e745]: Tropical Life
            - paragraph [ref=e746]: Magazine
      - generic [ref=e747]:
        - img [ref=e749]
        - generic [ref=e751]:
          - img [ref=e752]
          - heading "One message and we’re running." [level=2] [ref=e755]
          - paragraph [ref=e756]: Sofia replies inside the hour. The proposal lands inside the day. The team arrives on the date — built, briefed, and ready.
          - generic [ref=e757]:
            - link "Plan My Event — Free Consultation" [ref=e758]:
              - /url: https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I'd%20like%20to%20plan%20an%20event%20in%20Bali.%20Could%20you%20walk%20me%20through%20the%20options%3F
              - img [ref=e759]
              - text: Plan My Event — Free Consultation
            - link "Call +62 822 3756 5997" [ref=e761]:
              - /url: tel:+6282237565997
              - img [ref=e762]
              - text: Call +62 822 3756 5997
      - generic [ref=e765]:
        - generic [ref=e766]:
          - paragraph [ref=e767]: Where We Serve
          - heading "Events Across Bali" [level=2] [ref=e768]
          - paragraph [ref=e769]: Weddings in Uluwatu. Corporate retreats in Ubud. Birthday parties in Canggu. We know every venue, every vendor, every regulation.
        - generic [ref=e770]:
          - link "Seminyak" [ref=e771]:
            - /url: /seminyak
            - img [ref=e772]
            - text: Seminyak
          - link "Canggu" [ref=e775]:
            - /url: /canggu
            - img [ref=e776]
            - text: Canggu
          - link "Ubud" [ref=e779]:
            - /url: /ubud
            - img [ref=e780]
            - text: Ubud
          - link "Uluwatu" [ref=e783]:
            - /url: /uluwatu
            - img [ref=e784]
            - text: Uluwatu
          - link "Sanur" [ref=e787]:
            - /url: /sanur
            - img [ref=e788]
            - text: Sanur
          - link "Nusa Dua" [ref=e791]:
            - /url: /nusa-dua
            - img [ref=e792]
            - text: Nusa Dua
          - link "Jimbaran" [ref=e795]:
            - /url: /jimbaran
            - img [ref=e796]
            - text: Jimbaran
          - link "Berawa" [ref=e799]:
            - /url: /berawa
            - img [ref=e800]
            - text: Berawa
          - link "Pererenan" [ref=e803]:
            - /url: /pererenan
            - img [ref=e804]
            - text: Pererenan
          - link "Bukit" [ref=e807]:
            - /url: /bukit
            - img [ref=e808]
            - text: Bukit
        - link "View All Locations →" [ref=e812]:
          - /url: /locations
          - text: View All Locations
          - generic [ref=e813]: →
  - generic [ref=e814]: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
  - contentinfo [ref=e815]:
    - generic [ref=e816]:
      - generic [ref=e817]:
        - generic [ref=e818]:
          - heading "myCHEF" [level=3] [ref=e819]
          - paragraph [ref=e820]: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
        - generic [ref=e821]:
          - link "+62 822-3756-5997" [ref=e822]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
            - img [ref=e823]
            - text: +62 822-3756-5997
          - link "indonesia@mychef.id" [ref=e825]:
            - /url: mailto:indonesia@mychef.id
      - generic [ref=e826]:
        - generic [ref=e827]:
          - heading "Fine Dining" [level=4] [ref=e828]
          - list [ref=e829]:
            - listitem [ref=e830]:
              - link "Overview" [ref=e831]:
                - /url: /fine-dining
            - listitem [ref=e832]:
              - link "Private Chef in Bali" [ref=e833]:
                - /url: /fine-dining/private-chef-bali
            - listitem [ref=e834]:
              - link "Tasting Menu" [ref=e835]:
                - /url: /fine-dining/tasting-menu
            - listitem [ref=e836]:
              - link "Romantic Dinner" [ref=e837]:
                - /url: /fine-dining/romantic-dinner
            - listitem [ref=e838]:
              - link "Chef’s Table" [ref=e839]:
                - /url: /fine-dining/chefs-table
            - listitem [ref=e840]:
              - link "Our Menus" [ref=e841]:
                - /url: /fine-dining/menus
            - listitem [ref=e842]:
              - link "Our Chefs" [ref=e843]:
                - /url: /fine-dining/our-chefs
        - generic [ref=e844]:
          - heading "Catering" [level=4] [ref=e845]
          - list [ref=e846]:
            - listitem [ref=e847]:
              - link "Overview" [ref=e848]:
                - /url: /catering
            - listitem [ref=e849]:
              - link "BBQ Catering" [ref=e850]:
                - /url: /catering/bbq-catering
            - listitem [ref=e851]:
              - link "Buffet Catering" [ref=e852]:
                - /url: /catering/buffet
            - listitem [ref=e853]:
              - link "Plated Set Menu" [ref=e854]:
                - /url: /catering/plated-catering
            - listitem [ref=e855]:
              - link "Drop-Off Catering" [ref=e856]:
                - /url: /catering/drop-off-catering
            - listitem [ref=e857]:
              - link "Babi Guling" [ref=e858]:
                - /url: /catering/babi-guling
            - listitem [ref=e859]:
              - link "Grazing Tables" [ref=e860]:
                - /url: /catering/grazing-tables
            - listitem [ref=e861]:
              - link "Floating Breakfast" [ref=e862]:
                - /url: /catering/floating-breakfast
            - listitem [ref=e863]:
              - link "Corporate Catering" [ref=e864]:
                - /url: /catering/corporate-catering
            - listitem [ref=e865]:
              - link "Retreat Catering" [ref=e866]:
                - /url: /catering/retreat-catering
        - generic [ref=e867]:
          - heading "Events" [level=4] [ref=e868]
          - list [ref=e869]:
            - listitem [ref=e870]:
              - link "Overview" [ref=e871]:
                - /url: /events
            - listitem [ref=e872]:
              - link "Weddings" [ref=e873]:
                - /url: /events/weddings
            - listitem [ref=e874]:
              - link "Birthdays" [ref=e875]:
                - /url: /events/birthdays
            - listitem [ref=e876]:
              - link "Anniversaries" [ref=e877]:
                - /url: /events/anniversaries
            - listitem [ref=e878]:
              - link "Corporate Events" [ref=e879]:
                - /url: /events/corporate-events
            - listitem [ref=e880]:
              - link "Retreats" [ref=e881]:
                - /url: /events/retreats
            - listitem [ref=e882]:
              - link "Villa Parties" [ref=e883]:
                - /url: /events/villa-parties
            - listitem [ref=e884]:
              - link "Baby Showers" [ref=e885]:
                - /url: /events/baby-showers
        - generic [ref=e886]:
          - heading "In-Villa Service" [level=4] [ref=e887]
          - list [ref=e888]:
            - listitem [ref=e889]:
              - link "Overview" [ref=e890]:
                - /url: /in-villa-service
            - listitem [ref=e891]:
              - link "Waiters" [ref=e892]:
                - /url: /in-villa-service/waiters
            - listitem [ref=e893]:
              - link "Butlers" [ref=e894]:
                - /url: /in-villa-service/butlers
            - listitem [ref=e895]:
              - link "Bartenders" [ref=e896]:
                - /url: /in-villa-service/bartenders
            - listitem [ref=e897]:
              - link "Mixology" [ref=e898]:
                - /url: /in-villa-service/mixology
            - listitem [ref=e899]:
              - link "Sommelier" [ref=e900]:
                - /url: /in-villa-service/sommelier
            - listitem [ref=e901]:
              - link "Host & Hostess" [ref=e902]:
                - /url: /in-villa-service/host-hostess
        - generic [ref=e903]:
          - heading "Staffing" [level=4] [ref=e904]
          - list [ref=e905]:
            - listitem [ref=e906]:
              - link "Overview" [ref=e907]:
                - /url: /staffing
            - listitem [ref=e908]:
              - link "Private Chef Placement" [ref=e909]:
                - /url: /staffing/private-chef-placement
            - listitem [ref=e910]:
              - link "Live-In Chef" [ref=e911]:
                - /url: /staffing/live-in-chef
            - listitem [ref=e912]:
              - link "Villa Staff" [ref=e913]:
                - /url: /staffing/villa-staff
            - listitem [ref=e914]:
              - link "Household Staff" [ref=e915]:
                - /url: /staffing/household-staff
            - listitem [ref=e916]:
              - link "For Villa Managers" [ref=e917]:
                - /url: /staffing/for-villa-managers
            - listitem [ref=e918]:
              - link "For Hotels & Restaurants" [ref=e919]:
                - /url: /staffing/for-hotels-restaurants
        - generic [ref=e920]:
          - heading "Locations" [level=4] [ref=e921]
          - list [ref=e922]:
            - listitem [ref=e923]:
              - link "All Locations" [ref=e924]:
                - /url: /locations
            - listitem [ref=e925]:
              - link "Seminyak" [ref=e926]:
                - /url: /locations/seminyak
            - listitem [ref=e927]:
              - link "Canggu" [ref=e928]:
                - /url: /locations/canggu
            - listitem [ref=e929]:
              - link "Uluwatu" [ref=e930]:
                - /url: /locations/uluwatu
            - listitem [ref=e931]:
              - link "Ubud" [ref=e932]:
                - /url: /locations/ubud
            - listitem [ref=e933]:
              - link "Nusa Dua" [ref=e934]:
                - /url: /locations/nusa-dua
            - listitem [ref=e935]:
              - link "Jimbaran" [ref=e936]:
                - /url: /locations/jimbaran
            - listitem [ref=e937]:
              - link "Sanur" [ref=e938]:
                - /url: /locations/sanur
            - listitem [ref=e939]:
              - link "Berawa" [ref=e940]:
                - /url: /locations/berawa
            - listitem [ref=e941]:
              - link "Pererenan" [ref=e942]:
                - /url: /locations/pererenan
            - listitem [ref=e943]:
              - link "Bukit Peninsula" [ref=e944]:
                - /url: /locations/bukit
      - generic [ref=e945]:
        - link "Catering" [ref=e946]:
          - /url: /catering
        - link "Locations" [ref=e947]:
          - /url: /locations
        - link "About" [ref=e948]:
          - /url: /about
        - link "Contact" [ref=e949]:
          - /url: /contact
        - link "Services" [ref=e950]:
          - /url: /services
        - link "Pricing" [ref=e951]:
          - /url: /pricing
        - link "Price Calculator" [ref=e952]:
          - /url: /calculator
        - link "FAQ" [ref=e953]:
          - /url: /faq
        - link "Reviews" [ref=e954]:
          - /url: /reviews
        - link "Why myCHEF" [ref=e955]:
          - /url: /why-mychef
        - link "Press" [ref=e956]:
          - /url: /press
        - link "Join the Team" [ref=e957]:
          - /url: /join-our-team
        - link "Partner Platform" [ref=e958]:
          - /url: /partner-platform
        - link "Journal" [ref=e959]:
          - /url: /journal
        - link "Blog & Guides" [ref=e960]:
          - /url: /blog
        - link "Book" [ref=e961]:
          - /url: /book
      - generic [ref=e962]:
        - link "+62 822-3756-5997" [ref=e963]:
          - /url: tel:+6282237565997
          - img [ref=e964]
          - text: +62 822-3756-5997
        - link "indonesia@mychef.id" [ref=e966]:
          - /url: mailto:indonesia@mychef.id
          - img [ref=e967]
          - text: indonesia@mychef.id
        - generic [ref=e970]:
          - img [ref=e971]
          - text: Bali, Indonesia
        - link "Instagram" [ref=e974]:
          - /url: https://instagram.com/mychef.id
          - img [ref=e975]
          - text: Instagram
        - link "WhatsApp" [ref=e978]:
          - /url: https://wa.me/6282237565997
          - img [ref=e979]
          - text: WhatsApp
      - generic [ref=e981]:
        - link "Staff Login" [ref=e982]:
          - /url: /partner-platform
          - img [ref=e983]
          - text: Staff Login
        - generic [ref=e986]:
          - link "Terms" [ref=e987]:
            - /url: /terms
          - link "Privacy" [ref=e988]:
            - /url: /privacy
          - link "Cancellation" [ref=e989]:
            - /url: /cancellation
      - paragraph [ref=e990]: © 2026 myCHEF.id. All rights reserved.
  - generic [ref=e992]:
    - generic: Chat with us on WhatsApp
    - link "Chat with us on WhatsApp" [ref=e993]:
      - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
      - img [ref=e994]
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