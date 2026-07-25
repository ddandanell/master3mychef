#!/usr/bin/env python3
"""Remove visible IDR prices from staffing content markdown files."""

from pathlib import Path
import re

SEO_DIR = Path("/Users/openclaw/Movies/LIve website/mychef-seo/content")

FILES = [
    "staffing.md",
    "staffing_private-chef-placement.md",
    "staffing_live-in-chef.md",
    "staffing_villa-staff.md",
    "staffing_household-staff.md",
    "staffing_for-villa-managers.md",
    "staffing_for-hotels-restaurants.md",
    "villa-staff-bali-agency.md",
]

# Heading price replacements: "Role — from IDR X/month" -> "Role — Tailored quote"
def soften_heading_prices(text: str) -> str:
    # "from IDR 5,500,000/month" or "from IDR 5.5M/month" or "IDR 5,500,000/month"
    text = re.sub(r"from IDR [\d.,]+(?:M|K)?/month", "Tailored quote", text)
    text = re.sub(r"IDR [\d.,]+(?:M|K)?/month", "Tailored quote", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)? one-time", "Tailored quote", text)
    text = re.sub(r"IDR [\d.,]+(?:M|K)? one-time", "Tailored quote", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)? per month", "Tailored quote", text)
    text = re.sub(r"IDR [\d.,]+(?:M|K)? per month", "Tailored quote", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)?/person", "Tailored quote", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)? per person", "Tailored quote", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)?/hour", "by the hour", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)? per hour", "by the hour", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)? per session", "Tailored quote", text)
    text = re.sub(r"from IDR [\d.,]+(?:M|K)? per booking", "Tailored quote", text)
    return text


def remove_offers_block(text: str) -> str:
    """Remove Schema.org offers / AggregateOffer blocks from JSON-LD snippets."""
    # Match "offers": { ... } including nested braces
    pattern = re.compile(r'\s*"offers"\s*:\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\},?', re.DOTALL)
    text = pattern.sub("", text)
    return text


def soften_inline_prices(text: str) -> str:
    # Specific salary ranges like IDR 5.5M / 9.5M / 15M
    text = re.sub(r"IDR [\d.]+M\s*/\s*IDR [\d.]+M\s*/\s*IDR [\d.]+M", "Tailored quote", text)
    text = re.sub(r"IDR [\d.]+M\s*\(\s*part-time\s*\)\s*,\s*IDR [\d.]+M\s*\(\s*full-time\s*\)\s*or\s*IDR [\d.]+M\s*\(\s*executive\s*\)", "Tailored quote", text)
    text = re.sub(r"IDR [\d.]+M\s*\(part-time\),\s*IDR [\d.]+M\s*\(full-time\)\s*or\s*IDR [\d.]+M\s*\(executive\)", "Tailored quote", text)
    text = re.sub(r"IDR [\d,]+\s*/\s*IDR [\d,]+\s*/\s*IDR [\d,]+", "Tailored quote", text)
    text = re.sub(r"IDR [\d,]+\s*\/\s*IDR [\d,]+\s*\/\s*IDR [\d,]+", "Tailored quote", text)
    text = re.sub(r"Monthly salaries start from IDR [\d,]+ for household roles and IDR [\d,]+ for a part-time private chef", "Monthly salaries are quoted individually based on role, experience and schedule", text)
    text = re.sub(r"Monthly salaries start from IDR [\d,]+", "Monthly salaries are quoted individually", text)
    text = re.sub(r"starts from IDR [\d,]+ per month", "is quoted individually", text)
    text = re.sub(r"from IDR [\d.]+M/month part-time", "Tailored quote", text)
    text = re.sub(r"from IDR [\d.]+M/month", "Tailored quote", text)
    text = re.sub(r"from IDR [\d,]+/month", "Tailored quote", text)
    text = re.sub(r"Salaries from IDR [\d,]+ per month", "Salaries quoted individually", text)
    text = re.sub(r"Salaries from IDR [\d,]+/month", "Salaries quoted individually", text)
    text = re.sub(r"from IDR [\d,]+/hour", "by the hour", text)
    text = re.sub(r"IDR [\d,]+/hour", "by the hour", text)
    # Salary ranges in tables like IDR 4,000,000–4,500,000
    text = re.sub(r"IDR [\d,]+[–-]IDR? [\d,]+", "Tailored quote", text)
    text = re.sub(r"IDR [\d,]+[–-][\d,]+", "Tailored quote", text)
    text = re.sub(r"IDR [\d.]+M[–-]IDR [\d.]+M", "Tailored quote", text)
    text = re.sub(r"IDR [\d.]+M[–-][\d.]+M", "Tailored quote", text)
    # Remove business-confirmation notes that contain IDR prices
    text = re.sub(r"\s*\[BUSINESS CONFIRMATION REQUIRED:[^\]]*IDR[^\]]*\]", "", text, flags=re.IGNORECASE)
    # Job-board market context with specific ranges
    text = re.sub(r"Bali job-board listings currently advertise housekeeping roles around IDR [\d.]+[–-][\d.]+M per month and villa manager roles around IDR [\d.]+[–-][\d.]+M per month\.", "Bali job-board listings move quickly; we benchmark every role against current market rates before quoting.", text)
    text = re.sub(r"Current Bali job-board ads put villa managers at roughly IDR [\d.]+[–-][\d.]+M per month; our placements price at the top of that band because the vetting has already been done — references checked, skills assessed, backgrounds verified before a profile ever reaches you\.", "Current Bali job-board ads give a wide range; our placements sit at the vetted, referenced end of the market because the vetting has already been done — references checked, skills assessed, backgrounds verified before a profile ever reaches you.", text)
    text = re.sub(r"Open-market ads for domestic housekeepers in Bali cluster around IDR [\d.]+[–-][\d.]+M per month; we recruit from the vetted, referenced end of that market, because a person inside your family home must be more than a CV\.", "Open-market ads for domestic housekeepers in Bali cluster across a wide band; we recruit from the vetted, referenced end of that market, because a person inside your family home must be more than a CV.", text)
    text = re.sub(r"from IDR [\d.]+M to IDR [\d.]+M per month", "Tailored quote", text)
    # Fix double "by the hour, by the hour"
    text = re.sub(r"by the hour, by the hour", "by the hour", text)
    # General remaining IDR X,000,000 in prose (not headings caught above)
    text = re.sub(r"IDR [\d,]+,000", "Tailored quote", text)
    return text


def soften_meta_descriptions(text: str) -> str:
    text = re.sub(r"From IDR \d+M/month\. ", "", text)
    text = re.sub(r"from IDR \d+M/month", "Tailored quote", text)
    return text


def replace_salary_tables(text: str) -> str:
    """Replace the staffing.md salary table with a softer version."""
    old = """## What Placement Costs

We publish our pricing because agencies that hide fees waste your time. Monthly rates below are the staff member's salary range for myCHEF-placed candidates; our **placement fee is one month's salary**, covering sourcing, vetting, trials, contract preparation and six months of ongoing support.

| Role | Monthly salary (from) |
|---|---|
| Housekeeper | IDR 4,000,000–4,500,000 |
| Private chef (part-time / full-time / executive) | IDR 5,500,000 / 9,500,000 / 15,000,000 |
| Live-in chef | IDR 8,000,000 |
| Villa manager | IDR 12,000,000 |
| Estate manager | IDR 15,000,000 |
| Full villa team | IDR 25,000,000 |

For market context, Bali job-board listings currently advertise housekeeping roles around IDR 3.5–5M per month and villa manager roles around IDR 8–12M per month. Placed candidates through a specialist agency sit at the qualified, vetted end of that range — you are paying for verified experience, not a gamble on an unscreened applicant.

All figures are confirmed in a written quote before anything is signed."""

    new = """## What Placement Costs

Rather than publish fixed figures that can be out of date before you read them, we quote every role individually. Monthly salaries depend on experience, language level, scope and live-in requirements; our **placement fee is one month's salary**, covering sourcing, vetting, trials, contract preparation and six months of ongoing support.

| Role | Pricing |
|---|---|
| Housekeeper | Tailored quote |
| Private chef (part-time / full-time / executive) | Tailored quote |
| Live-in chef | Tailored quote |
| Villa manager | Tailored quote |
| Estate manager | Tailored quote |
| Full villa team | Tailored quote |

Bali job-board listings move quickly; we benchmark every role against current market rates before quoting. Placed candidates through a specialist agency sit at the qualified, vetted end of that range — you are paying for verified experience, not a gamble on an unscreened applicant.

All figures are confirmed in a written quote before anything is signed."""
    return text.replace(old, new)


def main():
    for fname in FILES:
        path = SEO_DIR / fname
        if not path.exists():
            print(f"Skip (missing): {fname}")
            continue
        text = path.read_text(encoding="utf-8")
        original = text
        text = soften_heading_prices(text)
        text = soften_inline_prices(text)
        text = soften_meta_descriptions(text)
        text = replace_salary_tables(text)
        text = remove_offers_block(text)
        if text != original:
            path.write_text(text, encoding="utf-8")
            print(f"Updated: {fname}")
        else:
            print(f"No changes: {fname}")


if __name__ == "__main__":
    main()
