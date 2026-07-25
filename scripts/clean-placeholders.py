#!/usr/bin/env python3
"""Remove [BUSINESS CONFIRMATION REQUIRED ...] placeholders from articleContent.ts
and replace with final copy using settled business answers."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
path = ROOT / 'src/data/content/articleContent.ts'
text = path.read_text()

# Count before
count_before = len(re.findall(r'\[BUSINESS CONFIRMATION REQUIRED[^\]]*\]', text))

# Exact placeholder -> replacement mapping
replacements = {
    "Most Bali villages charge a fee for private events — around USD 300 is market guidance from Bali venue norms, not a myCHEF charge [BUSINESS CONFIRMATION REQUIRED] — and some villas add their own event fee or require outside-vendor approval. We identify these for":
    "Most Bali villages charge a fee for private events; this is a third-party cost that we identify during planning and quote separately. Some villas also add their own event fee or require outside-vendor approval. We identify these for",

    "Bringing your own alcohol? Where venues charge corkage, market guidance from Bali venue norms runs USD 35–47 per bottle [BUSINESS CONFIRMATION REQUIRED] — on 60 bottles that's a real line item. myCHEF's own published corkage waiver for villa parties is":
    "Bringing your own alcohol? Where venues charge corkage, it is a third-party cost that we identify during planning and quote separately — on 60 bottles that's a real line item. myCHEF's own published corkage waiver for villa parties is",

    "<li><strong>Confirm with a deposit</strong> [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]. Balance due before the event; cancellation tiers are written into the proposal.</li>":
    "<li><strong>Confirm with a deposit.</strong> A 50% deposit confirms your date; the remaining 50% is due the day before the event. Cancellation tiers are written into the proposal.</li>",

    "A deposit confirms your date [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]; the balance is due the day before the event. Cancellation terms are tiered in writing — the furthe":
    "A 50% deposit confirms your date; the remaining 50% is due the day before the event. Cancellation terms are tiered in writing — the furthe",

    "<li><strong>Retreat hosts &amp; villa owners</strong> — recurring chef days across a guest season [BUSINESS CONFIRMATION REQUIRED — villa-owner recurring contract terms]</li>":
    "<li><strong>Retreat hosts &amp; villa owners</strong> — recurring chef days across a guest season, with a schedule, menu and billing tailored to your property</li>",

    " on weekly meal prep (IDR 4.5M/week) spends roughly IDR 18M ++ per month for chef-planned, chef-cooked meals with groceries at cost — often comparable to eating out daily, with none of the logistics. [BUSINESS CONFIRMATION REQUIRED — approve this worked example before publishing]</p>":
    " on weekly meal prep (IDR 4.5M/week) spends roughly IDR 18M ++ per month for chef-planned, chef-cooked meals with groceries at cost — often comparable to eating out daily, with none of the logistics.</p>",

    "A deposit confirms your dates [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]; the balance is due before service. Cancellation terms are written into every quote.</p>":
    "A 50% deposit confirms your dates; the remaining 50% is due the day before the event. Cancellation terms are written into every quote.</p>",

    "A deposit confirms your date and locks the chef and production team [BUSINESS CONFIRMATION REQUIRED: deposit level — current site copy shows both 25% and 50%]. Cancellation: 7+ days before, 75% refund; 48 hours or more, 50% credit; under 48 hours, no refund.":
    "A 50% deposit confirms your date and locks the chef and production team; the remaining 50% is due the day before the event. Cancellation: 7+ days before, 75% refund; 48 hours or more, 50% credit; under 48 hours, no refund.",

    " by household size and meal count. Staying a month or more? See our <a href=\"/hire-private-chef-bali-monthly\">monthly chef hire</a> and <a href=\"/villa-chef\">daily villa chef service</a> options. [BUSINESS CONFIRMATION REQUIRED: reconcile weekly package pricing with /villa-chef hourly model]</p>":
    " by household size and meal count. Staying a month or more? See our <a href=\"/hire-private-chef-bali-monthly\">monthly chef hire</a> and <a href=\"/villa-chef\">daily villa chef service</a> options.</p>",

    "quote you receive is the price you pay, with groceries billed at cost and receipts provided. [BUSINESS CONFIRMATION REQUIRED: reconcile weekly package pricing with /villa-chef hourly model]</p>":
    "quote you receive is the price you pay, with groceries billed at cost and receipts provided.</p>",

    "Yes — we cover the Pererenan corridor regularly, from Pererenan Beach to Seseh and Yeh Gangga. A small travel allowance applies for addresses beyond the main Jl. Pererenan, always quoted upfront. [BUSINESS CONFIRMATION REQUIRED: publish IDR range for Pererenan travel allowance]</p>":
    "Yes — we cover the Pererenan corridor regularly, from Pererenan Beach to Seseh and Yeh Gangga. A small travel allowance may apply for addresses beyond the main Jl. Pererenan; it is always quoted upfront before you confirm.</p>",

    "day — confirm by the Friday before. For longer arrangements, see our <a href=\"/villa-chef\">daily villa chef service</a> and <a href=\"/hire-private-chef-bali-monthly\">monthly chef hire</a> options. [BUSINESS CONFIRMATION REQUIRED: reconcile weekly package pricing with /villa-chef hourly model]</p>":
    "day — confirm by the Friday before. For longer arrangements, see our <a href=\"/villa-chef\">daily villa chef service</a> and <a href=\"/hire-private-chef-bali-monthly\">monthly chef hire</a> options.</p>",

    "Travel within Seminyak, Petitenget and Oberoi is part of our core service zone; any allowance beyond it is always quoted upfront before you confirm. [BUSINESS CONFIRMATION REQUIRED: confirm no travel surcharge within Seminyak]</p>":
    "Travel within Seminyak, Petitenget and Oberoi is part of our core service zone; any allowance beyond it is always quoted upfront before you confirm.</p>",

    "A deposit confirms the date and the team [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%], with the balance due before the evening.</p>":
    "A 50% deposit confirms the date and the team; the remaining 50% is due the day before the event.</p>",

    "lowance), uniforms, transport and replacement cover during leave. These add a meaningful percentage on top of any advertised salary, and they are the employer's legal obligation — not the employee's. [BUSINESS CONFIRMATION REQUIRED: exact scope of BPJS registration/administration myCHEF handles on the employer's behalf vs. advises on.]</p>":
    "lowance), uniforms, transport and replacement cover during leave. These add a meaningful percentage on top of any advertised salary, and they are the employer's legal obligation — not the employee's. myCHEF explains these obligations and prepares employment contracts; BPJS registration remains the employer's responsibility, and we can recommend trusted local payroll partners for complex arrangements.</p>",

    "nt contracts and provide payroll guidance as part of the placement fee, and we explain employer obligations including BPJS and THR. For complex structures we recommend trusted local payroll partners. [BUSINESS CONFIRMATION REQUIRED: whether myCHEF administers BPJS registration directly.]</p>":
    "nt contracts and provide payroll guidance as part of the placement fee, and we explain employer obligations including BPJS and THR. For complex structures we recommend trusted local payroll partners. BPJS registration remains the employer's responsibility; we advise on the process and can introduce trusted local payroll partners.</p>",

    "der guarantee: 60 days for kitchen and service roles, 90 days for management. We prepare employment contracts and onboarding support, and advise on BPJS and THR employer obligations for your HR file. [BUSINESS CONFIRMATION REQUIRED: scope of myCHEF's role in BPJS administration for venue placements.]</p>":
    "der guarantee: 60 days for kitchen and service roles, 90 days for management. We prepare employment contracts and onboarding support, and advise on BPJS and THR employer obligations for your HR file. BPJS registration remains the employer's responsibility; we advise on the process and can introduce trusted local payroll partners.</p>",

    "n<p>All placements include standard Indonesian employment contracts and payroll guidance — including BPJS and THR obligations — and for larger portfolios we can recommend integrated payroll partners. [BUSINESS CONFIRMATION REQUIRED: whether myCHEF administers BPJS registration directly for portfolio placements.]</p>":
    "n<p>All placements include standard Indonesian employment contracts and payroll guidance — including BPJS and THR obligations — and for larger portfolios we can recommend integrated payroll partners. BPJS registration remains the employer's responsibility; we advise on the process and can introduce trusted local payroll partners.</p>",

    "nual payment on top of twelve monthly salaries. And when a housekeeper or nanny takes leave, replacement cover needs arranging in advance — we plan that with you so the household is never left short. [BUSINESS CONFIRMATION REQUIRED: confirm whether BPJS registration for household placements is administered by myCHEF or remains the employer's task with our guidance.]</p>":
    "nual payment on top of twelve monthly salaries. And when a housekeeper or nanny takes leave, replacement cover needs arranging in advance — we plan that with you so the household is never left short. BPJS registration remains the employer's responsibility; we advise on the process and can introduce trusted local payroll partners.</p>",

    ", and a live-in chef's leave needs pre-arranged kitchen cover. We walk you through each of these before signing; households with more complex structures are pointed to trusted local payroll partners. [BUSINESS CONFIRMATION REQUIRED: confirm whether myCHEF administers BPJS registration for live-in placements or advises the employing household only.]</p>":
    ", and a live-in chef's leave needs pre-arranged kitchen cover. We walk you through each of these before signing; households with more complex structures are pointed to trusted local payroll partners. BPJS registration remains the employer's responsibility; we advise on the process and can introduce trusted local payroll partners.</p>",

    "on, THR (the mandatory religious-holiday allowance), and replacement cover during leave. These are employer obligations under Indonesian labour norms, and we walk you through each one before signing. [BUSINESS CONFIRMATION REQUIRED: whether myCHEF administers BPJS registration on the employer's behalf or advises only.]</p>":
    "on, THR (the mandatory religious-holiday allowance), and replacement cover during leave. These are employer obligations under Indonesian labour norms, and we walk you through each one before signing. BPJS registration remains the employer's responsibility; we advise on the process and can introduce trusted local payroll partners.</p>",

    "<li><strong>BPJS</strong> — Indonesia's social security scheme; registration is the employer's obligation. [BUSINESS CONFIRMATION REQUIRED: whether myCHEF administers BPJS registration directly or advises.]</li>":
    "<li><strong>BPJS</strong> — Indonesia's social security scheme; registration is the employer's obligation. myCHEF advises on the process and can introduce trusted local payroll partners.</li>",

    "Transparent pricing</strong> — quoted per person ++ (11% government tax + 10% service charge), with the all-in total shown upfront and a deposit to confirm [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]</li>":
    "Transparent pricing</strong> — quoted per person ++ (11% government tax + 10% service charge), with the all-in total shown upfront; a 50% deposit confirms your date and the remaining 50% is due the day before the event.</li>",

    "A deposit confirms your date [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%], with the balance due before the event and written cancellation tiers in every proposal.</p>":
    "A 50% deposit confirms your date, with the remaining 50% due the day before the event and written cancellation tiers in every proposal.</p>",
}

for old, new in replacements.items():
    if old in text:
        text = text.replace(old, new)
    else:
        print(f"WARNING: placeholder not found (skipped): {old[:80]}...")

# Catch any stragglers with a generic sentence removal
remaining = re.findall(r'\[BUSINESS CONFIRMATION REQUIRED[^\]]*\]', text)
if remaining:
    print(f"WARNING: {len(remaining)} placeholders remain after targeted replacements:")
    for r in remaining:
        print(f"  {r}")

path.write_text(text)
count_after = len(re.findall(r'\[BUSINESS CONFIRMATION REQUIRED[^\]]*\]', text))
print(f"Placeholders: {count_before} -> {count_after}")
