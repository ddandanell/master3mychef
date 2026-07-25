#!/usr/bin/env python3
"""Remove or neutralise hard prices on retreat-related pages."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# --- articleContent.ts ---
art = ROOT / 'src/data/content/articleContent.ts'
text = art.read_text()

# /events hub table: wellness retreats price
old1 = '<tr>\n<td><a href="/events/retreats">Wellness retreats</a></td>\n<td>IDR 1.5M/day</td>'
new1 = '<tr>\n<td><a href="/events/retreats">Wellness retreats</a></td>\n<td>Contact us for pricing</td>'
if old1 in text:
    text = text.replace(old1, new1)
else:
    print('WARNING: /events wellness retreat row not found')

# /hire-private-chef-bali-monthly: full-board retreat packages price
old2 = '<td>Full-board retreat packages</td>\n<td>IDR 700K / person / day</td>'
new2 = '<td>Full-board retreat packages</td>\n<td>Contact us for pricing</td>'
if old2 in text:
    text = text.replace(old2, new2)
else:
    print('WARNING: Full-board retreat price not found')

# /hire-private-chef-bali-monthly: remove worked example
old3 = '<p><strong>Worked example:</strong> a couple in Pererenan on weekly meal prep (IDR 4.5M/week) spends roughly IDR 18M ++ per month for chef-planned, chef-cooked meals with groceries at cost — often comparable to eating out daily, with none of the logistics.</p>'
new3 = '<p>Every monthly arrangement is quoted as one fixed figure based on meals, household size and service days — message us for a tailored monthly plan.</p>'
if old3 in text:
    text = text.replace(old3, new3)
else:
    print('WARNING: Worked example not found')

# /hire-private-chef-bali-monthly: FAQ prices
old4 = 'Weekly meal prep starts from IDR 4.5M per week for two people; a full-time live-in chef starts from IDR 8M per month. Recurring chef-day arrangements are quoted as one fixed monthly figure based on meals and household size.'
new4 = 'Monthly arrangements are quoted individually based on meals, household size and service days. Contact us for a tailored monthly plan.'
if old4 in text:
    text = text.replace(old4, new4)
else:
    print('WARNING: Monthly FAQ prices not found')

art.write_text(text)
print('articleContent.ts updated')
