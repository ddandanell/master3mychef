# KB-03 — myCHEF Bali: Verbatim Reply Templates

**Source:** myCHEF Bali WhatsApp corpus, 2 Jul – 12 Aug 2026. The reply-template library came into existence 3–4 Aug 2026.

**Reproduction rule:** every template below is reproduced **exactly** as sent, including line breaks, bullet characters, spacing, punctuation and typos. Do not "improve" them. Where a template contains a known defect it is flagged underneath — fix the defect, keep the wording.

**Variable convention used in this file:** square brackets `[Name]`, `[Date]`, `[N]` mark slots that must be filled. Where the original sent a real value (e.g. `Adella`, `22 August 2026`), the original is preserved verbatim and the variable is described in the notes.

---

## T1 — Auto-acknowledgement (fires on any inbound)

```
👋 Hello, and thank you for contacting myCHEF Bali.

We have received your message. One of our coordinators will review your request and get back to you as soon as possible.

Best regards,

myCHEF Bali
Customer Care Team
```

**Variables:** none.
**Bug:** fired a *second* time after a human had already replied, becoming the answer to a substantive pricing question. Suppress this template once a human/AI reply exists in the thread.

---

## T2 — Auto-acknowledgement, quote-form variant

```
Thanks for reaching out to myCHEF Bali! We got your message and will get back to you within a few minutes with dates, menu options, and pricing.
```

**Trigger:** the structured "quote request from the website" block.
**Variables:** none.
**Caution:** promises "within a few minutes". Only send if that is achievable.

---

## T3 — MASTER QUALIFIER / first touch (~28–35 sends; the most reused template)

```
Hi [Name], thank you for contacting myCHEF Bali.

My name is Dede, Event Coordinator at myCHEF Bali.

Are you looking for a fine-dining experience, a family-style dinner, or to rent a private chef with a service team?

Once I have this information, I'll send you the suitable options and prices..

Best regards,
Dede
Event Coordinator | myCHEF Bali
```

**Trigger:** any new lead not stating a service type.
**Variables:** `[Name]`.
**Defects:** produces `Hi ,` (stray space before comma) when no name is known — **use T3b instead when the name is unknown**. The `prices..` double full stop is in the live template.

---

## T3b — Same opener + date/location ask (newest variant, 11–12 Aug; use when no name is known)

```
Hi, thank you for contacting myCHEF Bali.

My name is Dede, Event Coordinator at myCHEF Bali.

Are you looking for a fine-dining experience, a family-style dinner, or to rent a private chef with a service team?

Could you also please let me know your preferred date and the location of your villa?

Once I have this information, I'll send you the suitable options and prices.

Best regards,
Dede
Event Coordinator | myCHEF Bali
```

**Variables:** none — safe when the name is unknown.

---

## T3c — Named variant with explicit date + guest ask

```
Hi Adella, thank you for contacting myCHEF Bali.

My name is Dede, Event Coordinator at myCHEF Bali.

Are you looking for a fine-dining experience, a family-style dinner, or to rent a private chef with a service team?

Please also let me know:

* The date
* The number of guests

Once I have this information, I'll send you the suitable options and prices very quickly.

Best regards,
Dede
Event Coordinator | myCHEF Bali
```

**Variables:** `Adella` → `[Name]`.
**Note:** this variant uses `*` bullets, not `•`.

---

## T4 — Intro, "Coordinator" version (lead-magnet / price-guide trigger)

```
Hello, my name is Dede, and I'm the Coordinator at myCHEF Bali.

How can I help you today? Are you looking for a private chef, fine dining experience, family-style dinner, or BBQ?

Please let me know what you have in mind, and I'll recommend the best option and provide the pricing.

Kind regards,
Dede
Coordinator | myCHEF Bali
```

**Trigger:** price-guide / lead-magnet enquiries.
**Variables:** none.
**⚠️ Known gap:** the price guide itself is **never actually delivered over WhatsApp**, despite this being the most common opener. See KB-04.

---

## T5 — FOUR-QUESTION QUALIFIER (used when the enquiry is fully open)

```
Hi, thank you for contacting myCHEF Bali.

My name is Dede, Event Coordinator at myCHEF Bali. Of course, we can help. We offer private chef rental, complete catering, family-style dining, fine dining, BBQ experiences, and event services.

To recommend the right option and provide accurate pricing, could you please let me know:

What date are you considering?
How many guests will there be?
Which area or villa will you be staying in?
What type of food or experience are you looking for?

Once I understand what you would like, I can send you the most suitable options, pricing, and availability.

Kind regards,
Dede
Event Coordinator | myCHEF Bali
```

**Variables:** none.

---

## T6 — FOLLOW-UP NUDGE (~26 sends, in cold bulk batches after ~48h)

```
Hi Again

Should I keep your inquiry open ?

I haven't heard back. If you still need our service, simply reply here and I'll be happy to assist.

Best regards 
Dede
Coordinator I myCHEF
```

**Variables:** none.
**Defects to fix before reuse:** `Coordinator I myCHEF` uses a capital `I` instead of a pipe `|`. There is also a trailing space after `Best regards`. The space before `?` in `open ?` is in the original.

---

## T7 — PRIVATE CHEF DAY-RATE CARD (the single most-used pricing message)

```
Thank you, Adella. I have noted 22 August 2026 for five guests.

Our private-chef rates per day are:

• One meal: IDR 1,000,000++
• Two meals: IDR 1,800,000++
• Three meals: IDR 2,700,000++

This includes a senior private chef and an assistant. Groceries are separate and charged at the exact purchase price with receipts.

We have chefs specializing in Indonesian, Balinese, Japanese, Western, and other cuisines, so you can tell us what you prefer.

Are you looking to hire a private chef for the day, or would you prefer a complete quotation for one dinner with the menu, ingredients, chef, service, and cleanup included?

Please also send me the villa name or location, and I will prepare the best option for you.

Best regards,
Dede
Event Coordinator | myCHEF Bali
```

**Variables:** `Adella` → `[Name]`; `22 August 2026` → `[Date]`; `five guests` → `[N] guests` (written as a word in the original).

---

## T7b — Day-rate card, canonical "meals per day" version

```
For private chef we have a few different options depending on how many meals you would like each day:

• Breakfast only: IDR 1,000,000++ per day
• Breakfast + Dinner: IDR 1,800,000++ per day
• Full-day service (Breakfast, Lunch & Dinner): IDR 2,700,000++ per day

All options include one professional private chef and one kitchen assistant. They will take care of the menu planning, food preparation, cooking, serving, and cleaning the kitchen after each meal.

Groceries are charged separately at cost, depending on the menu you choose, so you only pay for the ingredients you would like us to buy.

Before I can confirm the booking, I just need to know the exact dates, as we already have several bookings and I need to check which chef team is available. I also need to know which cuisine you would like, such as Chinese, Indonesian, Western, Japanese, or another style, so I can match you with the most suitable chef.

Dede
Coordinator
myCHEF
```

**Variables:** none.

---

## T7c — Day-rate card, VAT-inclusive version (used when quoting 2 guests / below minimum)

```
Our minimum is six people if we're doing fine dinner at peoples home but what we could offer was for two guests, these are our private chef options:

• One meal: IDR 1,000,000++
IDR 1,210,000 including service charge and VAT

• Lunch and dinner: IDR 1,800,000++
IDR 2,178,000 including service charge and VAT

• Breakfast, lunch, and dinner: IDR 2,700,000++
IDR 3,267,000 including service charge and VAT

Each option includes a specialist head chef and an assistant. They handle the menu planning, preparation, cooking, restaurant-style serving, and complete cleanup.

We can provide a Japanese specialist, Indonesian specialist, or another chef depending on your preferred cuisine.

Groceries are separate and purchased fresh at the actual cost. You will receive all original receipts, so you only pay the exact amount spent.

For the full-day service, we recommend a villa visit the day before. The chef will sit down with you, discuss exactly what you would like for every meal, and plan everything. The additional fee for this visit is IDR 200,000. The following morning, the team will arrive with the fresh groceries and prepare breakfast, lunch, and dinner.

If you choose lunch and dinner, the chef can meet you in the morning, plan both meals with you, purchase the fresh groceries, and then prepare and serve lunch and a special dinner.

Which cuisine would you prefer: Japanese, Indonesian, or something else?
```

**Variables:** `two guests` → `[N] guests`.
**⚠️ Flagged internally as the worst opener in the corpus** — broken grammar in the first line, leads with the minimum, and left the customer's actual question unanswered. **Prefer T17 for below-minimum situations.** Kept here because the price structure and the villa-visit paragraph are correct and reusable.

---

## T7d — Day-rate card, multi-day maths version

```
Perfect, for a family-style private chef we have a few different options depending on how many meals you would like each day:

• Breakfast only: IDR 1,000,000++ per day
• Breakfast + Dinner: IDR 1,800,000++ per day
• Full-day service (Breakfast, Lunch & Dinner): IDR 2,700,000++ per day

For three days, the total service fee would be:

• Breakfast only: IDR 3,000,000++
• Breakfast + Dinner: IDR 5,400,000++
• Full-day service: IDR 8,100,000++

All options include one professional private chef and one kitchen assistant. They will take care of the menu planning, food preparation, cooking, serving, and cleaning the kitchen after each meal.

Groceries are charged separately at cost, depending on the menu you choose, so you only pay for the ingredients you would like us to buy.

Before I can confirm the booking, I just need to know the exact dates, as we already have several bookings and I need to check which chef team is available. I also need to know which cuisine you would like, such as Chinese, Indonesian, Western, Japanese, or another style, so I can match you with the most suitable chef.
```

**Variables:** `three days` → `[N] days`, and the three multiplied totals must be recomputed for the actual number of days.

---

## T8 — GROCERY COST EXPLANATION (five phrasings, all in rotation)

**T8a — shortest:**
```
Yes, but you only pay what it cost from the supermarket you will receive the receipts.
```

**T8b — standard:**
```
Groceries are separate and purchased fresh at the actual cost. You will receive all original receipts, so you only pay the exact amount spent.
```

**T8c — "no markup" emphasis:**
```
We keep the grocery cost completely transparent — there is no markup on the groceries. You will simply pay the actual cost of the ingredients, and the chef will provide the grocery receipt afterward.
```

**T8d — deposit / reconciliation form:**
```
Please note that groceries are not included in the chef service fee. We will purchase the groceries on your behalf based on the agreed menu, using a grocery deposit provided by you. Any remaining balance from the grocery deposit will be returned/reconciled accordingly.
```

**T8e — deposit amount + recipes:**
```
For the groceries, we would usually request a deposit of around IDR 500,000–1,000,000, depending on the menu and ingredients you choose. The chef will do the shopping for you, and we don't add any markup to the groceries. You'll receive the actual grocery receipts, and we'll also share the recipes with you afterward.
```

**Variables:** none.

---

## T9 — COST BREAKDOWN FOR A SMALL BOOKING

```
For one meal for two guests:

• Private head chef and assistant: IDR 1,210,000, including service charge and VAT
• Transport: IDR 200,000
• Estimated groceries: IDR 500,000 to IDR 800,000

Estimated total: IDR 1,910,000 to IDR 2,210,000

The chef will arrive before the meal, sit down with you, and discuss exactly what you would like. The team will then purchase the fresh groceries, prepare and cook the meal, serve it restaurant-style, and clean everything afterward.

Groceries are charged at the actual purchase cost, and you will receive all original receipts.
```

**Variables:** guest count, transport figure (area-dependent — see KB-01 Section 4, conflict 3), grocery estimate, and the recomputed total.

---

## T10 — AVAILABILITY CHECK + SOFT URGENCY CLOSE

```
Thank you. We currently have availability on all the dates you mentioned. We can provide the full-day private chef service on 7, 8, 9, or 10 August. On 11 August, we may be able to arrange breakfast only if that suits you.

Please let me know whether you would like the full-day service once you have confirmed with your friends.

Bookings are coming in quickly, so I would appreciate your confirmation as soon as possible. I can then prepare the quotation and deposit invoice to secure your preferred date.

Kind regards,
Dede
Coordinator | myCHEF Bali
```

**Variables:** the date list, the service tier, and the constrained-date sentence.

---

## T10b — HOLDING MESSAGES while checking availability

**T10b-i:**
```
Give me 20 minutes I will get back to you. I'm just checking with a different head chef to see what is possible.
```

**T10b-ii:**
```
Could you please give me a moment? I just need to recheck and confirm with the chef. I'll get back to you as soon as I hear from the chef. Thank you for your patience!
```

**T10b-iii (peak-date variant):**
```
Sorry for the waiting time. I just realized it's for New Year, so I'm checking with the team now to make sure we're not already fully booked. I'll get back to you as soon as I have confirmation.
```

**Variables:** `20 minutes`; `New Year` → `[peak occasion]`.

---

## T11 — VILLA / KITCHEN INSPECTION (five forms — the most distinctive myCHEF motif)

### T11a — short form, appended to quotes
```
Before the event, we will also arrange a complimentary villa inspection. This allows us to check the kitchen, equipment, power, gas supply and overall setup, so we can ensure everything runs smoothly on the day of your lunch.
```
**Variables:** `lunch` → `[meal / event]`.

### T11b — answer to "have you been to my villa?" (post-deposit form)
```
I haven't inspected your villa yet, but thank you for sharing it with me.

Once we receive the deposit, we will contact the villa manager and arrange an inspection. We will check the kitchen, gas, glassware, and necessary equipment to ensure everything is properly prepared and runs smoothly during your holiday.
```
**Variables:** none.

### T11c — OBJECTION HANDLER when the customer resists the pre-visit (best version; won the argument outright)
```
Nearly every villa tells us the kitchen is fully equipped, but we check much more than that. We check the pans, oven, gas, equipment, glasses, plates and that there is enough of everything for the fine dining setup.

We do this because we have experienced many times that something is missing or not working, and then it can take hours to solve on the day and affect the whole service.

If this is a surprise and she does not know about it yet, or you are not staying at the villa yet, I completely understand. In that case, we just need the villa owner or management contact and we can arrange the inspection directly with their team.

Trust me, we are only doing this to give you the best possible day and make everything easier, not more complicated. It is included in the service and I would definitely recommend it.
```
**Variables:** `she` → adjust to the actual surprise recipient, or drop the clause.

### T11d — details-to-lock-a-booking checklist (Dee's version)
```
Amazing! 😊 We're excited to lock in Friday for you!

Before we finalize everything, we just need a few details from you:

• Villa name & location
• Villa management contact number — we'll contact them to confirm that a private chef is allowed at the villa.
• If you're already at the villa, could you please send us a few photos of the kitchen, including the cooking area and available equipment such as pans, pots, knives, etc.? This will help us make sure the chef has everything needed.

Once we have these details, we can proceed with the booking and send you the payment details for the grocery deposit.

We'll take care of the rest, including the grocery shopping, and there will be no markup on the groceries. 😊

Best,
Dee
Coordinator | myCHEF
```
**Variables:** `Friday` → `[day/date]`.

### T11e — fine-dining closing block appended to quotes
```
Because this is a fine-dining service, the chef will come together with a chef assistant. They will prepare everything at the villa and serve each course individually throughout the dinner, so you can enjoy a proper restaurant-style fine-dining experience in your own villa.

Before the dinner, we will also need the contact number for your villa management or villa manager.

We always check the villa beforehand to make sure the kitchen, gas, oven, pans, plates and other equipment are working properly and that we have everything we need for the dinner.

Normally everything is completely fine, but we always prefer to check before a fine-dining service. If something is missing or not functioning 100%, it can make the service more difficult on the day, and we want everything to run smoothly for you.
```
**Variables:** none.

### T11f — short villa-contact asks
```
Hi, could you please share the Villa manager number ? Just wanna ask them if we could do that event there.
```
```
And also we need your name, villa name also villa's management contact to check the equipment there
```
**Variables:** none. Both are informal; grammar is as sent.

---

## T12 — CUISINE PREFERENCE QUESTION (four forms)

**T12a:**
```
Could you please let me know what kind of food you're looking for, so I can create a menu that fits what you need?

We have chefs specializing in Indonesian, Chinese, Japanese, Western cuisine, and more. Once I know your preference, I can prepare a suitable menu suggestion for you.
```

**T12b — conversational, with allergy ask:**
```
Okay, that makes sense. Before I come up with some suggestions for a menu, could you come up with guidelines for what kind of food you're looking for: Indonesian, Japanese, Western, or so on? We have a lot of options, but I just want to go in the right direction. Do you have any allergies I need to know so I can plan the menu around that.
```

**T12c — one-liner:**
```
Would you prefer Italian, Indonesian, Japanese, or another cuisine? This will help me recommend the most suitable menu and chef for you.
```

**T12d — full intake with kids' menu and inspection:**
```
Thank you for reaching out.

We have different head chefs who specialize in different cuisines, including Indonesian, Japanese, Chinese, Western, and more.

Before I can prepare the right option for you, could you please let me know:

• What kind of food would you like?
• Are you looking for fine dining or family-style?
• For the children, would you like a separate kids' menu or the same menu as the adults?
• What is the name of your villa?

For the service, we would normally send 1 head chef and 2 assistants. Our team will handle the cooking, serving, cleaning, and the full kitchen service.

Before the event, we will also arrange a kitchen inspection to make sure the villa has everything needed. We will handle this directly with the villa management, so you do not need to organize it yourself.

Dede
Event Coordinator | myCHEF
```

**T12e — chef-availability variant:**
```
We work with a wide range of professional chefs, and each chef comes with a complete service setup, including cooking, serving, and full kitchen cleanup.

We have chefs specializing in Japanese, Indonesian, Western, Mediterranean, Asian cuisine, and more.

If you can point me in the right direction regarding the type of food and experience you're looking for, I can check the availability and find the best fit for you.
```

**Variables:** none in T12a/b/c/e; team size in T12d.

---

## T13 — LARGE-GROUP BBQ PROPOSAL, standard (10% group discount version)

```
Hi, my name is Dede, Event Coordinator at myCHEF Bali.

Thank you for reaching out. We would be happy to arrange a live BBQ experience at your villa.

We currently offer three different BBQ packages, and we can provide a 10% group discount:

• Indonesian BBQ
Normal price: IDR 700,000++ per guest
Discounted price: IDR 630,000++ per guest

• International BBQ
Normal price: IDR 850,000++ per guest
Discounted price: IDR 765,000++ per guest

• Premium Surf & Turf BBQ
Normal price: IDR 950,000++ per guest
Discounted price: IDR 855,000++ per guest

Are you also looking for a bartender and cocktail service for the event, or would you only require the food and BBQ service?

For the live BBQ, we will bring and set up the grill at your villa. There is an additional IDR 500,000 fee for grill transportation.

For your group, the service team will include:

• 1 Head Chef
• 3 Assistants
• Live grilling and food preparation
• Serving and complete cleanup

Before the event, we will also arrange a villa inspection to check the kitchen, electricity, gas, access, serving area, and overall setup. This allows us to organize everything properly and ensure the event runs smoothly.

Please send us:

• The villa name
• The event date
• The final number of guests
• Your preferred BBQ package

Looking forward to hearing from you.

Best regards,
Dede
Event Coordinator | myCHEF Bali
```

**Variables:** the discount tier (5% / 10% / 20%) and its recomputed prices; the grill transportation fee (**conflicting: 500,000 / 700,000 / 1,000,000 — see KB-01 Section 4**); team size.

---

## T13b — LARGE-GROUP BBQ + 20% max discount + BUDGET OBJECTION (single most valuable script)

```
Hello, my name is Dede, Event Coordinator at myCHEF Bali.

Thank you for contacting us. For a live BBQ in Kerobokan on 29 August at 19:00 for 43 to 45 guests, we can offer three packages:

• Indonesian BBQ: IDR 700,000 per person
With our maximum group discount of 20%: IDR 560,000 per person

• International BBQ: IDR 850,000 per person
After discount: IDR 680,000 per person

• Premium Surf & Turf: IDR 950,000 per person
After discount: IDR 760,000 per person

There is also an additional IDR 1,000,000 charge for transporting and setting up the professional grill. All prices are subject to tax and service charge.

For the Indonesian BBQ, the total for 43 to 45 guests would be IDR 25,080,000 to IDR 26,200,000++.

I completely understand your budget is around IDR 15,000,000. However, we would not be able to provide our required quality and service standard within that budget.

The price covers much more than the food itself. We use fresh, high-quality meat, seafood, and ingredients, which represent a significant part of the cost. For an event of this size, we also provide:

• One professional chef and four assistants
• Villa inspection and event planning
• Ingredient sourcing and preparation
• Professional grill transportation and setup
• Live cooking at the villa
• Service coordination, pack-up, and complete cleanup

We will inspect the villa beforehand to check the kitchen, grill area, electricity, water, access, and service flow. This allows us to plan everything properly and provide a smooth, high-quality experience for all your guests.

The 20% group discount is already the best price we can offer without reducing the quality of the ingredients or the service team.

If the budget is flexible, I can send you the complete menus and prepare a formal quotation.

Dede
Event Coordinator | myCHEF Bali
```

**Variables:** `Kerobokan` → `[area]`; `29 August at 19:00` → `[date and time]`; `43 to 45 guests` → `[N]`; the computed totals; `IDR 15,000,000` → `[customer's stated budget]`.
**This is the canonical value-stack rebuttal to a price objection.** Hold the price, itemise the value, never discount below the stated maximum.

---

## T13c — Large-group (~45 pax) buffet qualification opener

```
Hi! 😊

Just to make sure we prepare the right proposal.

For groups of around 45 guests, we normally recommend a BBQ or buffet setup, as it works best for larger events. We usually bring and set up our own cooking station, so we don't need a fully equipped kitchen.

Could you let me know if you're looking for a complete catering solution, or just the food?

For example:
• Do you need us to provide plates, cutlery and glasses?
• Would you like our team to serve the food, or is a buffet setup enough?
• Will you handle the drinks yourselves, or would you like us to set up a bar with bartenders as well?

Once I know how much you'd like us to handle, I'll prepare the most suitable proposal for you.
```

**Variables:** `45 guests` → `[N] guests`.

---

## T14 — DEPOSIT / INVOICE / PAYMENT TERMS

```
Once you confirm the booking, we will send you an invoice for a 50% deposit. After the deposit is received, we will arrange a site inspection to check the location, discuss where everything should be set up, and make sure the event runs smoothly.

Most clients pay by bank transfer, and payment can be made from any bank. Cash payment is also possible, but bank transfer is normally the easiest option.

At the moment, we do not offer card payments, as card processing for catering companies in Indonesia can be quite complicated.

The remaining 50% is due on the day of the event.
```

**Variables:** none.

---

## T14b — Last-minute booking = full prepayment

```
Here is your invoice for the Balinese Cooking Class.

As this is a last-minute booking, we require the full payment to confirm the reservation. Once we receive the payment, I will send you the booking confirmation and everything will be arranged and ready for you on the day.

After making the payment, please send me the payment confirmation so I can finalize everything with our team.

Kind regards,
Dede
Event Coordinator | myCHEF Bali
```

**Variables:** `Balinese Cooking Class` → `[service name]`.

---

## T14c — Urgency close after a menu is sent

```
Please let me know if you would like any adjustments. Otherwise, I will send you the full invoice for immediate payment. Once payment is received, I will confirm your booking, and our team will begin purchasing the fresh ingredients straight away. As this is a last-minute booking for this evening, we need to get started now to ensure everything is ready on time.
```

**Variables:** `this evening` → `[timeframe]`.

---

## T14d — Payment received confirmation

```
Thank you. We confirm that we have received your payment, and your cooking class booking is now confirmed.

Thank you for choosing myCHEF. We are here to help with anything else you may need.

Best regards,
Dede
Coordinator | myCHEF Bali
www.mychef.id
```

**Variables:** `cooking class` → `[service]`.

---

## T14e — Bank details block (verbatim, as sent)

```
Bank Name: Bank Central Asia (BCA)
SWIFT Code: CENAIDJA
Account Name: Diniza Nur Soraya Khairani
Account Number: 1692045968

Bank Address:
PT Bank Central Asia Tbk (BCA)
Menara BCA, Grand Indonesia
Jl. MH Thamrin No. 1
Jakarta 10310
Indonesia
```

**Variables:** none.
**⚠️ Risk flag:** this is a **personal** account name, while high-value customers are asking for company name + NPWP + business account. A wrong BCA branch address was also once sent and contradicted 60 seconds later. **Escalate all company-legitimacy and invoicing questions to a human.**

---

## T15 — DECLINE / TOO-LATE-NOTICE (eight variants, escalating in polish)

### T15a — bluntest, same-day
```
Sorry guys, not possible. Please book 1 to 2 days ahead next time then we can help you. All the groceries and everything we buy fresh at the morning.
```
**Note:** offered no alternative — yet that lead **returned the next day and converted**. Keep the polite versions as default, but this register is not fatal.

### T15b — warm, explains why
```
Hello! Thank you for reaching out! No, we don't offer that because we have to do villa inspections, and groceries need to be fresh and everything, and we are very booked! Please let us know at least 2-3 days before, and then we will gladly help you out. Hope you find a solution!
```

### T15c — standard fully-booked
```
Thank you so much for reaching out. Unfortunately, we are fully booked, and with such short notice it is very difficult for us to arrange the service properly.

I'm sorry we can't help you this time. If you need us again in the future, please feel free to reach out. With a little more notice, we would be happy to arrange everything for you.

Dede
Event Coordinator | myCHEF
```

### T15d — fully booked + 2–3 day rule
```
Thank you for reaching out. Unfortunately, we are fully booked at the moment.

If you would like to use myCHEF in the future, we recommend booking at least 2 to 3 days in advance so we can make sure we have the right chef and team available for you.

Dede
Event Coordinator | myCHEF Bali
```

### T15e — fully booked + 1-week rule + emoji
```
Hi, thank you for contacting myCHEF. Unfortunately, we're fully booked for tonight, so we won't be able to accommodate a private chef at such short notice.

For future bookings, we recommend making the reservation at least 1 week in advance so we can check availability and arrange the chef and menu for you.

We'd be happy to assist if you have another date in mind. 😊

Dede
Coordinator
myCHEF
```

### T15f — out-of-territory (Jakarta)
```
Hi, I'm very sorry for not getting back to you sooner.

At the moment, we are extremely busy and primarily operating in Bali due to the high season. We do open our services in Jakarta during selected periods throughout the year, but right now our full focus and team capacity are here in Bali.

Unfortunately, this means we are unable to assist with your party in Jakarta at this time. I'm genuinely sorry, and I appreciate your understanding.

Best regards,
Dede
Event Coordinator | myCHEF Bali
```
**Variables:** `Jakarta` → `[city]`; `your party` → `[event type]`.

### T15g — below-minimum + peak date + WAITLIST (strongest pattern — should be the default for below-minimum declines)
```
Thank you for reaching out. We would love to help, but 24 December is one of our busiest Christmas dates, and our minimum booking is six guests. Unfortunately, we're unable to confirm this booking for four guests at the moment.

If it is okay with you, I can place your request on our waiting list. If we receive a cancellation or another opportunity becomes available within the next week, I will contact you immediately. Availability is limited, so I cannot guarantee it, but I will do my best to help.

Alternatively, if you are flexible with the date, we would be happy to arrange the dinner on another day.
```
**Variables:** `24 December` → `[date]`; `Christmas` → `[peak period]`; `four guests` → `[N] guests`.

### T15h — out-of-scope (one-day meal prep / delivery)
```
Sorry, is this only for one day?

Normally, when we do meal preparation, we create a program for the full week based on what the client wants, and then we prepare and deliver the meals accordingly.

For only one day, especially with such short notice, it becomes a little difficult for us to arrange properly.

Our specialty is premium in-home service with private chefs, including everything from fine dining to family-style dinners and longer meal-preparation programs.

Because of that, I do not think we can help you as well as I would like to in this case. I am sorry.

-Dede
```

### T15i — cheerful short-notice recovery line
```
Of course! 😊 Totally understandable. it's always worth trying your luck! Hopefully we can cook for you another time.
```

---

## T16 — LOST-LEAD GRACEFUL CLOSE

**T16a:**
```
Thank you so much for taking the time to contact us. We truly appreciate your interest and wish you all the best.

Kind regards 
Dede
```
*(a typo variant `Thank you si much…` was also sent — do not reproduce the typo.)*

**T16b — with lead-time education:**
```
Great, If you would like to use our services in the future, kindly let us know at least one week in advance so we can make the necessary arrangements and ensure everything is well prepared.

Thank you very much for your understanding.

Best regards,
Dede
Coordinator | myCHEF
```

---

## T17 — THE "HONEST" BELOW-MINIMUM STEER (best objection script in the corpus)

```
Thank you. I want to explain the two options honestly.

Our private chef service is mainly priced according to the time reserved:

• One meal: IDR 1,000,000++
• Two meals: IDR 1,800,000++
• Three meals: IDR 2,700,000++

Groceries are charged separately at the actual purchase price, and you receive all receipts.

Option 1: Full-Day Private Chef

This is honestly the option I recommend, and realistically the only one that gives you good value.

For IDR 2,700,000++ or IDR 3,267,000 all-in, you'll have a specialist head chef and assistant for the full day.

For an additional IDR 200,000, the chef can visit your villa the day before, sit down with you, and plan everything precisely around your preferences and dietary requirements.

The team will then prepare breakfast, lunch, an earlier dinner for the children, and a later Western or Italian birthday dinner for the adults.

We have Western and Italian specialist head chefs in-house. The team handles the shopping, cooking, serving, and complete cleanup, giving you the feeling of having a five-star service in your villa for the entire day.

Option 2: Dinner Only

For dinner-only bookings, we normally have a minimum of six guests. Sending a head chef and assistant involves almost the same preparation, transport, and working time regardless of whether they cook for two or six guests.

We could charge the six-guest minimum, but I honestly don't think that would make financial sense for you. You would receive much better value from the full-day package.

We can also arrange the Victoria Sponge with vanilla sponge, buttercream, and jam. If that's his favorite cake, we'll make sure it can either be sourced or specially made, while taking his dietary requirements into account.

Kind regards,
Dede
Coordinator | myCHEF Bali
```

**Variables:** the meal-plan paragraph (`breakfast, lunch, an earlier dinner for the children, and a later Western or Italian birthday dinner for the adults`) is occasion-specific; the cuisine specialists named; the final cake paragraph is entirely occasion-specific and should be dropped or replaced.

---

## T18 — FULL PERSONALISED PROPOSAL (structure to copy)

```
Hi Doug,

Thank you for contacting myCHEF Bali. My name is Dede, Coordinator at myCHEF.

We would be delighted to create a private Indonesian fine dining experience for your group.

PERSONALISED PROPOSAL

Date: Thursday, 15 October 2026
Guests: 7
Location: Sibu Sibu, Uluwatu
Experience: Indonesian Fine Dining with Cocktail Service

What is included

We bring the complete restaurant experience to your villa. A Master Chef specialising in Indonesian cuisine and two assistants will prepare, plate, present, and serve every course individually.

The team handles all fresh ingredients, preparation, service, kitchen organisation, and complete cleanup. Before the event, we will coordinate a villa inspection with the villa management to check the kitchen, equipment, and service setup.

OPTION 1: INDONESIAN SIGNATURE EXPERIENCE
[4 courses listed]
IDR 950,000++ per guest
Dinner for 7 guests: IDR 6,650,000++

This is ideal for a relaxed but elegant evening with four generous, individually presented courses.

OPTION 2: PREMIUM INDONESIAN JOURNEY
[6 courses listed]
IDR 1,450,000++ per guest
Dinner for 7 guests: IDR 10,150,000++

This is our recommended option if you want dinner to be the main experience of the evening. The smaller courses create a longer, more exclusive culinary journey.

PRIVATE COCKTAIL SERVICE

IDR 600,000++ per guest
Total for 7 guests: IDR 4,200,000++

The package includes:

• Two professional bartenders
• Up to three hours of cocktail service
• Complete mobile bar and professional equipment
• Cocktail glassware
• Ice, mixers, tonic, soda, and soft drinks
• Fresh juices and homemade syrups
• Fresh fruit, citrus, herbs, and garnishes
• Cocktail napkins, straws, and serving accessories
• A personalised menu card featuring 4 to 6 of your favourite cocktails

We provide everything required for the cocktails except the alcohol. Once you select your favourite cocktails, we will send you an exact shopping list for the alcohol only.

Transportation to Uluwatu: IDR 500,000

Complete investment

• Option 1 with bartender and transportation: IDR 13,628,500 all-inclusive
• Option 2 with bartender and transportation: IDR 17,863,500 all-inclusive

The totals include 10% service charge and 11% VAT.

All dishes can be adjusted to your preferences and are subject to the quality and availability of fresh market ingredients.

A 50% deposit confirms the booking. Once received, we will reserve the team, coordinate the villa inspection, and begin finalising your menu and favourite cocktails.

Which experience would you prefer for your evening, the four-course Signature Experience or the six-course Premium Journey?

Best regards,
Dede
Coordinator | myCHEF Bali
```

**Variables:** `Doug` → `[Name]`; date, guest count, location, experience type; the two menu option names and their course lists (`[4 courses listed]` / `[6 courses listed]` must be replaced with the actual dishes); all totals; the transport figure.
**⚠️ Note:** this proposal states `10% service charge and 11% VAT` — every other computed total in the corpus uses 10% + 10%. See KB-01 Section 4, conflict 1.

---

## T19 — MENU LINK WITHOUT ANCHORING ON MENU PRICES (used constantly)

```
I'll send you one of our menu collections so you can see the style of food we offer. Please don't look at the prices on that page, as those prices are for individual menu bookings.

With your booking, you're hiring our chef team, so you're not limited to those menus. You can choose anything you like, and our chefs can create completely customized menus based on your preferences, whether that's Indonesian, Western, Japanese, Italian, or a mix of different cuisines.

You'll have a Head Chef with an assistant, and together we'll plan all your meals before we start. This allows us to optimize the grocery shopping, purchase everything in one trip, reduce waste, and make the entire experience smooth and efficient. The groceries are charged at cost, and you'll receive all the original receipts.

This menu is simply to give you inspiration. If you see dishes you like, just let us know, and our chef will prepare them for you, or we can create something completely different.

https://mychef.id/fine-dining/menus
```

**Variables:** the menu URL.
**⚠️ This is a workaround, not an approved answer, to the website-price-vs-quote problem. See KB-01 Section 4, conflict 10 and KB-04.**

---

## T20 — PRODUCT DIFFERENTIATOR EXPLAINER (most reusable education message)

```
Absolutely. All three options mean the chef comes to your villa and cooks for you. The main difference is how the service works.

Fine Dining is best for a special one-time dinner. We create the menu, bring the ingredients, cook at your villa, serve the courses, and handle everything for you.

Family Style is more relaxed. The chef prepares several dishes that are placed on the table for everyone to share rather than serving individual courses.

Private Chef Hire is different. You hire the chef for a longer period, usually for several meals or most of the day. You pay for the chef service, and groceries are purchased separately at cost with the original receipts. This normally becomes the more economical option if you want breakfast, lunch and/or dinner rather than just one meal.

So if you are looking for one special dinner on October 16, I would normally recommend Fine Dining or Family Style.

If you tell me how many guests you are and whether this is a special occasion or simply a nice dinner at the villa, I can recommend the best option and send you the pricing.
```

**Variables:** `October 16` → `[date]`.

---

## T21 — PARTNER / AGENCY REPLY (B2B) — three forms

### T21a — full partner pitch
```
Yes, you can read more about our partnership program on the Partners page of our website.

We offer a 10% commission and already work with several villa and property management companies.

For events, the minimum booking is six guests. Every private chef booking includes an assistant.

For longer stays, we can rotate specialist teams. For example, the client can have a Chinese chef team one week, followed by Western, Japanese, sushi, Indonesian, or another cuisine the next week. This gives the client more variety and ensures the team stays fresh during longer bookings.

Before the service starts, we arrange a villa inspection and coordinate everything directly with you or the villa team.

Whenever you receive a client request, send me the details and I will prepare a quotation. We provide premium catering and private chef services, and I can guarantee professional service and high-quality food.

Best regards,
Dede
Event Coordinator | myCHEF Bali
```

### T21b — new partner, 7% starting commission
```
For this first booking, we can offer you a 7% partner commission based on the full service amount, excluding service charge and VAT.

As we build the cooperation and if you are bringing us bookings regularly, we can increase the commission up to 10%.

For new partners, we normally start at 7% so we can first build the working relationship and make sure everything runs smoothly for both sides.

We would be very happy to work together not only for this booking, but also for future private chef, catering, and event requests from your villas.

Dede
Event Coordinator | myCHEF Bali
```

### T21c — agency commission mechanics
```
As you are an agency, there is also a 10% agency commission. Once the service has been completed, this 10% will be released to you. Alternatively, if you are paying the invoice directly, we can deduct the 10% from the invoice.
```

### T21d — agency-detection probes (verbatim)
```
May I also ask if you are contacting us as an agency or are you booking directly as the client?
```
```
What is your company name, and have you already used us before?
```

**Owner-only register:** B2B and partnership threads are the **owner's** lane (`David` / `David Dandanell`, `myCHEF Bali`, `www.mychef.id`). Casual opener on record: `hey, nice to meet you. My name is David. How can I help you`.
**⚠️ Never repeat this mistake:** a partnership reply once leaked a third party's phone number unprompted.

---

## T22 — COOKING CLASS INTAKE

```
Hi! Thank you for reaching out to myCHEF 😊

We'd be happy to help with a private Balinese & Indonesian cooking class at your villa in Bali.

Could you please share:
📍 Your villa/location
👥 Number of guests
📅 Preferred date
⏰ Preferred time

Once we have these details, we can check availability and send you the options and pricing.

Thank you! 😊

Dede
Coordinator 
myCHEF
```

**Variables:** none. Note the trailing space after `Coordinator`.

---

## T22b — Cooking class details + price

```
The private cooking experience is around 3 hours and includes a full introduction to Indonesian cuisine, ingredients and dishes, guided in English by the chef.

You will wear chef clothing, prepare and cook the dishes together, serve and enjoy the meal, and finish the experience with a diploma for each guest.

The price is IDR 2,800,000++ total for up to 4 guests. The experience can also be booked for 2 guests at the same total price, with the setup adjusted accordingly.

Ingredients, equipment, chef clothing and service are all included.
```

**⚠️ Do not send "chef clothing" unqualified.** The corrected wording must be used — see T22c.

---

## T22c — Cooking class over-promise repair (issued after T22b)

```
Just a small clarification regarding the "chef clothing" mentioned earlier, this refers to an apron and chef cap/head covering provided for guests to wear during the cooking experience, rather than full chef or safety clothing. 😊
```

---

## T23 — POST-SERVICE THANK-YOU + REVIEW REQUEST

**T23a — thank you:**
```
Hi Shannen, thank you so much to you and your partner for choosing myCHEF for your cooking class today! 😊

It was such a pleasure having you both with us, and we hope you had a wonderful time cooking, learning, and enjoying the dishes together.

Thank you for choosing myCHEF to be part of your Bali experience. We hope you enjoy the rest of your time in Bali and take some delicious memories home with you! ❤️

Warm regards,
Dede & the myCHEF Bali team
```
**Variables:** `Shannen` → `[Name]`; `you and your partner` → `[group description]`; `cooking class` → `[service]`.

**T23b — review request:**
```
If you have a moment, we would be very grateful if you could leave us a short review. A photo would be lovely, but even a few words about your experience would mean a lot to the whole myCHEF team. It helps us keep doing what we love and continue improving our service.

Leave your review here:
https://g.page/r/CcIKSelkhzGEEAE/review

Thank you again from the whole myCHEF team.
```

---

## T24 — NUMBER-BANNED / NUMBER-CHANGE NOTICE

```
Hi! Just a quick update 😊

Our previous WhatsApp number has been temporarily banned, so if you need to send your payment confirmation or contact us, please send to this number instead.

We apologize for the inconvenience, and thank you for your understanding. We look forward to assisting you as usual. 🙏
```

**⚠️ Never broadcast this mid-transaction to a paying customer** — it happened once and required `Hi yes apologies for this confusion`.

---

## T25 — AI ASSISTANT OPENERS (new, 11 Aug — noticeably more corporate voice)

**T25a:**
```
Hello and welcome to myCHEF Bali! I'm the myCHEF Bali AI Assistant. It looks like your last message didn't come through clearly. Could you please resend your request or let me know how I can assist you with your private chef or catering experience in Bali?
To get started, may I ask:

What type of dining experience are you interested in? (e.g., fine dining, family-style dinner, private chef hire, BBQ/catering)
For which date are you planning your event?
How many guests will be attending?
Which villa or area in Bali will this take place?
Do you have any cuisine preferences or dietary requirements?
```

**T25b:**
```
Hi! Welcome to myCHEF Bali 👋

I'm the myCHEF booking assistant, and I'd be happy to help with a private chef.

Which area is your villa located in, and what date or period are you looking for?
```

**Note:** these openers read more corporate than the Dede house voice. Prefer the Dede templates (T3b / T5) unless the assistant is explicitly branded.

---

## T26 — INTERNAL ROUTING / WHOLESALE-BUYER QUERY

```
In that case, we need to speak with David, as he is in charge of that area. Before I send it over to him, I just need a little information: • Which buyer or company are we talking about? • What is the issue or situation? • What exactly are you looking for help with?
```

**Variables:** none.

---

## T27 — ENTERPRISE / VIP CREDIBILITY PITCH (due-diligence response)

```
You do not need to worry about backup staff. We are a large team and have chefs, assistants, butlers, and backup available if needed… He has also been involved with MasterChef Indonesia productions and has many years of experience as Head Chef in some of the larger hotels here in Bali.
```

**Variables:** the chef's credentials paragraph.
**Note:** the ellipsis is in the source record — this is an excerpt, not a complete message.

---

## T28 — CANCELLATION-RECOVERY (model to reuse; the customer thanked staff afterwards)

```
Hi, I completely understand, and thank you for explaining it so clearly.

I'm really sorry that we weren't able to make the experience work in the way you originally envisioned, especially with the rooftop pool setting and golden-hour dinner being such important parts of it. I completely understand your decision, and I respect that you'd rather not proceed if we can't confidently deliver the experience you were expecting at this price point.

Thank you as well for your patience and understanding throughout all the arrangements. I'm sorry again that we couldn't make this one work, and I hope we'll have the opportunity to create a beautiful experience for you another time. 🤍
```

**Variables:** `the rooftop pool setting and golden-hour dinner` → `[the specific elements that mattered to them]`.

---

## T29 — OVERPAYMENT / REFUND (proactive)

```
Hi, it looks like you may have overpaid, so there will be a balance to return to you. The chef will bring the change with him on the day of the cooking class.
```
```
It's 120k the change, and the chef will bring it with him on the day
```

**Variables:** the amount; the service name.

---

## T30 — BUTLER SERVICE

**⚠️ NO STANDALONE VERBATIM TEMPLATE EXISTS.** Butler service is sold as a website enquiry type but is priced only inside a bundle, and one standalone butler request went unanswered at window close.

The only verbatim butler material in the corpus:
```
Complete staffing service: IDR 8,500,000++
```
(1 chef + 1 assistant + 1 dedicated butler, overnight), plus the enterprise credibility line in T27 (`We are a large team and have chefs, assistants, butlers, and backup available if needed`).

**A proposed draft in the house voice is in KB-04.**

---

## T31 — KIDS' BIRTHDAY PARTY

**⚠️ NO VERBATIM TEMPLATE EXISTS.** Kids' party enquiries arrive via a dedicated website form and an emoji set exists for the template (`🎂🎈👧👦👨‍👩‍👧‍👦📅`), but **no template text was captured**.

Related verbatim material that can be reused:
- `For the children, would you like a separate kids' menu or the same menu as the adults?`
- Children's pricing: `Children aged 4 to 11: 50% price`; BBQ `4 children at IDR 400,000++`
- Add-ons: `Medium custom birthday cake: IDR 1,500,000`, `Birthday decoration package: IDR 2,000,000`, `Chocolate birthday cake: IDR 500,000`

**A proposed draft in the house voice is in KB-04.**

---

## T32 — MIXOLOGY / CHAMPAGNE SABERING

The cocktail package block from T18 is the reusable verbatim asset:
```
PRIVATE COCKTAIL SERVICE

IDR 600,000++ per guest
Total for 7 guests: IDR 4,200,000++

The package includes:

• Two professional bartenders
• Up to three hours of cocktail service
• Complete mobile bar and professional equipment
• Cocktail glassware
• Ice, mixers, tonic, soda, and soft drinks
• Fresh juices and homemade syrups
• Fresh fruit, citrus, herbs, and garnishes
• Cocktail napkins, straws, and serving accessories
• A personalised menu card featuring 4 to 6 of your favourite cocktails

We provide everything required for the cocktails except the alcohol. Once you select your favourite cocktails, we will send you an exact shopping list for the alcohol only.
```

**Champagne sabering, verbatim fragments (no full template exists):**
```
The fee for our team to come to Pullman and perform the sabering experience would be IDR 3,000,000. This is separate from the cost of the bottles.
```
```
The estimated total with Hatten Tunjung Brut would therefore be IDR 10,080,000
```
```
champagne sabering would need to be combined with additional services to meet our minimum booking requirement
```
```
Alcohol is not included in the menu price
```

**⚠️ The minimum-booking gate above was contradicted two messages later when sabering was quoted standalone. Two champagne-sabrage enquiries were still unanswered at window close. Escalate.**

---

## T33 — LONG-TERM / FULL-TIME CHEF PROPOSAL

**No complete verbatim template exists.** The reusable verbatim components are:

```
Monthly Investment: IDR 32,000,000
```
(two chefs, rotating 7-day schedule, fully managed)

```
For longer stays, we can rotate specialist teams. For example, the client can have a Chinese chef team one week, followed by Western, Japanese, sushi, Indonesian, or another cuisine the next week. This gives the client more variety and ensures the team stays fresh during longer bookings.
```

Long-stay discount pattern actually applied: 11 days full-day `IDR 35,937,000` → −10% `IDR 3,593,700` → `IDR 32,343,300`; 11 days two-meal `IDR 2,178,000 per day` → `IDR 23,958,000` → −10% `IDR 2,395,800` → `IDR 21,562,200`.

**A proposed full draft in the house voice is in KB-04.**

---

## T34 — BAHASA INDONESIA FRAGMENTS

**⚠️ No Bahasa version of the master qualifier exists.** Staff replied in English to Indonesian leads until roughly 9 Aug. These are the only verbatim Indonesian lines in the corpus:

```
Selamat siang / Untuk lokasi dimana kak?
```
```
Untuk 20 pax bisa di buffet
```
```
Start from 600k/pack kak
```
```
Sudah termasuk kak
```
```
Ini private chef pak
```
```
Untuk dinner saja 1.000.000++
```
```
Untuk hari ini terlalu mepet pak, jadi mohon maaf tidak bisa.
```
```
Harga itu hanya untuk rent private chef saja, groceries dibelanjakan dari client.
```

**A proposed Bahasa first-touch draft is in KB-04.**
