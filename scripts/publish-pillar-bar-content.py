#!/usr/bin/env python3
"""
Publish mychef-seo/content/*.md files for pillar sub-pages and bar-services
into the myCHEF article content system.

For every content file whose route matches a batch page:
  - Convert the FULL REPLACEMENT CONTENT section to HTML
  - Apply resolved business blocker rules
  - Store the HTML in src/data/content/articleContent.ts keyed by route path
  - Patch title/description/h1 in src/data/siteArchitecture.ts for pillar sub-pages

Run: python3 scripts/publish-pillar-bar-content.py
"""

import csv
import json
import re
from pathlib import Path
import markdown

REPO = Path(__file__).resolve().parent.parent
SEO = Path("/Users/openclaw/Movies/LIve website/mychef-seo")
CSV_PATH = SEO / "10-metadata-map.csv"
CONTENT_DIR = SEO / "content"
ARTICLE_CONTENT_PATH = REPO / "src/data/content/articleContent.ts"
SITE_ARCH_PATH = REPO / "src/data/siteArchitecture.ts"

PILLAR_SLUGS = {"fine-dining", "catering", "events", "in-villa-service", "staffing", "experiences"}


def parse_metadata_map(path: Path) -> dict[str, dict]:
    rows = {}
    with path.open(encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = (row.get("url") or "").strip()
            if not url:
                continue
            rows[url] = {
                "title": (row.get("recommended_title") or "").strip(),
                "description": (row.get("recommended_meta") or "").strip(),
                "h1": (row.get("recommended_h1") or "").strip(),
            }
    return rows


def route_for_file(filename: str) -> str | None:
    """Map a content filename to its canonical route path."""
    if filename == "bar-services.md":
        return "/bar-services/"
    if filename.startswith("bar-services_"):
        slug = filename[len("bar-services_"):-3]
        return f"/bar-services/{slug}/"
    if filename.startswith("_"):
        # Location/private-chef files are not in this batch.
        return None
    if "_" in filename:
        parts = filename[:-3].split("_", 1)
        pillar, sub = parts
        if pillar in PILLAR_SLUGS:
            return f"/{pillar}/{sub}"
    return None


def extract_replacement_content(text: str) -> str:
    """Return the publishable markdown after the FULL REPLACEMENT CONTENT marker."""
    markers = [
        r"##\s+FULL REPLACEMENT CONTENT",
        r"#\s+FULL REPLACEMENT CONTENT",
        r"##\s+2\.\s*FULL REPLACEMENT CONTENT",
    ]
    for marker in markers:
        m = re.search(marker, text, re.IGNORECASE)
        if m:
            return text[m.end():].strip()
    parts = re.split(r"\n---\s*\n", text, maxsplit=2)
    if len(parts) >= 2:
        return parts[-1].strip()
    return text.strip()


def apply_business_blockers(html: str, route: str = "") -> str:
    """Apply the resolved business-blocker facts and strip unresolved placeholders."""
    # Deposit: wherever a deposit is mentioned, it is 50%.
    html = re.sub(
        r"\[BUSINESS CONFIRMATION REQUIRED[^\]]*deposit[^\]]*\]",
        "A 50% deposit confirms your date",
        html,
        flags=re.IGNORECASE,
    )
    # Founding year: 2019
    html = re.sub(
        r"\[BUSINESS CONFIRMATION REQUIRED[^\]]*(?:found|established|since)[^\]]*\]",
        "2019",
        html,
        flags=re.IGNORECASE,
    )
    # Villa chef half-day 2M / full-day 4M
    html = re.sub(
        r"\[BUSINESS CONFIRMATION REQUIRED[^\]]*villa chef[^\]]*\]",
        "Villa chef service starts from IDR 2,000,000 for a half-day and IDR 4,000,000 for a full day",
        html,
        flags=re.IGNORECASE,
    )
    # Corporate minimum spend IDR 50,000,000
    html = re.sub(
        r"\[BUSINESS CONFIRMATION REQUIRED[^\]]*corporate[^\]]*minimum[^\]]*\]",
        "Corporate events have a minimum spend of IDR 50,000,000",
        html,
        flags=re.IGNORECASE,
    )
    # Placement fee hidden — replace with contact-for-pricing language
    html = re.sub(
        r"\[BUSINESS CONFIRMATION REQUIRED[^\]]*placement fee[^\]]*\]",
        "Placement fees are discussed once we understand the role and candidate requirements",
        html,
        flags=re.IGNORECASE,
    )

    # Enforce corporate minimum spend on corporate pages.
    if route in ("/catering/corporate-catering", "/events/corporate-events"):
        html = re.sub(
            r"Minimum spend\s*(?:is|:)?\s*IDR\s*[0-9.,]+[MK]?",
            "Minimum spend is IDR 50,000,000",
            html,
            flags=re.IGNORECASE,
        )
        html = re.sub(
            r"Min\.? spend\s*(?:is|:)?\s*IDR\s*[0-9.,]+[MK]?",
            "Minimum spend is IDR 50,000,000",
            html,
            flags=re.IGNORECASE,
        )

    # Hide retreat prices: strip price paragraphs, headings, add-ons and JSON-LD.
    if route in ("/catering/retreat-catering", "/events/retreats"):
        # Drop JSON-LD code blocks and any other code blocks.
        html = re.sub(r"<pre>.*?</pre>", "", html, flags=re.DOTALL)
        html = re.sub(r"<code>.*?</code>", "", html, flags=re.DOTALL)
        # Drop the JSON-LD section heading that survives the code fence.
        html = re.sub(r"<hr />\s*<h2 id=\"json-ld\">JSON-LD</h2>", "", html, flags=re.DOTALL)
        html = re.sub(r"<h2 id=\"json-ld\">JSON-LD</h2>", "", html, flags=re.IGNORECASE)

        # Remove strong/paragraph lines that lead with a price tagline.
        html = re.sub(
            r"<p><strong>From IDR [^<]*?(?:person|day)[^<]*?</strong></p>",
            "",
            html,
            flags=re.IGNORECASE,
        )
        html = re.sub(
            r"<p><strong>Full-board meal programs from IDR [^<]*?</strong>[^<]*?</p>",
            "",
            html,
            flags=re.IGNORECASE,
        )

        # Strip price suffixes from H2/H3 headings while keeping the plan/format name.
        def _strip_price_heading(m: re.Match) -> str:
            open_tag, text, close_tag = m.group(1), m.group(2), m.group(3)
            text = re.sub(
                r"\s*(?:&mdash;|—|–|-)\s*(?:from\s+)?IDR[\d\s,./+A-Za-z-]+?(?=(?:\s*\([^)]*\)\s*)?$)",
                "",
                text,
                flags=re.IGNORECASE,
            )
            text = re.sub(
                r"\s*(?:&mdash;|—|–|-)\s*(?:per person, per day|per person per day|per-day)\s*$",
                "",
                text,
                flags=re.IGNORECASE,
            )
            text = re.sub(r"\s*per-day\s+pricing", " pricing", text, flags=re.IGNORECASE)
            return open_tag + text + close_tag

        html = re.sub(
            r"(<h[23][^>]*>)(.*?)(</h[23]>)",
            _strip_price_heading,
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )

        # Remove "from IDR .../person/day" snippets that survive in cross-link text.
        html = re.sub(
            r"\s+from\s+IDR\s*[\d.,]+[MK]?\+\+?\s*/person/day",
            "",
            html,
            flags=re.IGNORECASE,
        )

        # Remove add-on list items that contain +IDR prices.
        html = re.sub(
            r"<li>\s*<strong>[^<]*</strong>\s*—\s*\+?IDR.*?</li>",
            "",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        # Drop any empty lists left behind.
        html = re.sub(r"<ul>\s*</ul>", "", html, flags=re.DOTALL)

        # Replace FAQ answers that quote a per-person/day price (question and answer
        # are often emitted inside a single <p> by the markdown converter).
        def _replace_faq_cost(m: re.Match) -> str:
            return (
                f'<p>{m.group(1)} Pricing is tailored to your retreat length, group size '
                "and dietary profile. Contact us for a fixed quote.</p>"
            )

        html = re.sub(
            r"<p>(<strong>What does [^<]*cost\?</strong>).*?</p>",
            _replace_faq_cost,
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )

        # Catch any other standalone paragraph that still exposes a retreat price.
        html = re.sub(
            r"<p>[^<]*IDR\s*[\d.,]+[MK]?\+\+?[^<]*(?:/person/day|per person per day)[^<]*</p>",
            "<p>Pricing is tailored to your retreat. Contact us for a fixed quote.</p>",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )

    # Placement fee not shown on staffing placement page.
    if route == "/staffing/private-chef-placement":
        # Drop JSON-LD code blocks.
        html = re.sub(r"<pre>.*?</pre>", "", html, flags=re.DOTALL)
        html = re.sub(r"<code>.*?</code>", "", html, flags=re.DOTALL)
        # Drop the JSON-LD section heading that survives the code fence.
        html = re.sub(r"<hr />\s*<h2[^>]*>[^<]*JSON-LD[^<]*</h2>", "", html, flags=re.DOTALL | re.IGNORECASE)
        html = re.sub(r"<h2[^>]*>[^<]*JSON-LD[^<]*</h2>", "", html, flags=re.IGNORECASE)

        # Rename the placement-fee section heading.
        html = re.sub(
            r"<h2 id=\"chef-salaries-the-placement-fee\">Chef Salaries &amp; the Placement Fee</h2>",
            '<h2 id="chef-salaries-the-placement-fee">Chef Salaries &amp; Placement</h2>',
            html,
        )

        # Replace the placement-fee bullet.
        html = re.sub(
            r"<li>\s*<strong>Placement fee:</strong>.*?</li>",
            "<li><strong>Placement fee:</strong> discussed once we understand the role and candidate requirements.</li>",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        # Replace the FAQ answer about placement fees.
        html = re.sub(
            r"<p>(<strong>What is your placement fee\?</strong>).*?</p>",
            r"<p>\1 Placement fees are discussed once we understand the role and candidate requirements.</p>",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        # Catch any plain "one month of the chef's salary" placement fee sentence.
        html = re.sub(
            r"placement fee[^.]*?one month of the chef['\u2019]s salary[^.]*\.",
            "placement fee is discussed once we understand the role and candidate requirements",
            html,
            flags=re.IGNORECASE,
        )

    # Strip any remaining [BUSINESS CONFIRMATION REQUIRED ...] placeholders
    html = re.sub(r"\[BUSINESS CONFIRMATION REQUIRED[^\]]*\]", "", html, flags=re.IGNORECASE)
    # Normalize whitespace left by removed placeholders
    html = re.sub(r"\n{3,}", "\n\n", html)
    return html


def md_to_html(text: str) -> str:
    md = markdown.Markdown(extensions=["tables", "fenced_code", "toc"])
    return md.convert(text)


def read_article_content(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    m = re.search(
        r"export const ARTICLE_CONTENT: Record<string, string> = (\{.*\})\n",
        text,
        re.DOTALL,
    )
    if not m:
        return {}
    data: dict[str, str] = {}
    for km in re.finditer(r'"([^"]+)"\s*:\s*"((?:[^"\\]|\\.)*)"', m.group(1)):
        # Parse the captured JSON string literal properly so UTF-8 content is preserved.
        data[km.group(1)] = json.loads('"' + km.group(2) + '"')
    return data


def serialize_article_content(data: dict[str, str]) -> str:
    lines = [
        "// AUTO-GENERATED by scripts/publish-content.py — edit source markdown, not this file.\n",
        "/** Full article HTML bodies, keyed by route path. Imported ONLY by the lazy",
        " *  article renderer and the build-time inject-meta step — never the eager nav bundle. */",
        "export const ARTICLE_CONTENT: Record<string, string> = {",
    ]
    for i, (key, value) in enumerate(sorted(data.items())):
        comma = "," if i < len(data) - 1 else ""
        lines.append(f'  "{key}": {json.dumps(value, ensure_ascii=False)}{comma}')
    lines.append("}\n")
    return "\n".join(lines)


def escape_ts_string(value: str, quote: str = "'") -> str:
    """Escape a value for a TypeScript string literal using the given quote."""
    escaped = value.replace("\\", "\\\\")
    if quote == "'":
        escaped = escaped.replace("'", "\\'")
    else:
        escaped = escaped.replace('"', '\\"')
    return escaped.replace("\n", "\\n")


def patch_field(block: str, field: str, value: str | None) -> str:
    if not value:
        return block
    # Use double quotes when the value contains an apostrophe so we don't have to
    # escape every occurrence; the regexes below handle both existing quote styles.
    if "'" in value:
        escaped = escape_ts_string(value, '"')
        # field: "..."
        pattern = rf'(\s*{re.escape(field)}\s*:\s*)"(?:[^"\\]|\\.)*"'
        new_block, count = re.subn(pattern, rf'\g<1>"{escaped}"', block)
        if count:
            return new_block
        # field: '...' → convert to double quotes
        pattern = rf"(\s*{re.escape(field)}\s*:\s*)'(?:[^'\\]|\\.)*'"
        new_block, count = re.subn(pattern, rf'\g<1>"{escaped}"', block)
        if count:
            return new_block
        # "field": "..."
        pattern = rf'(\s*"{re.escape(field)}"\s*:\s*)"(?:[^"\\]|\\.)*"'
        new_block, count = re.subn(pattern, rf'\g<1>"{escaped}"', block)
        if count:
            return new_block
        # Field not present — insert before closing brace.
        indent = "    "
        insert = f'{indent}{field}: "{escaped}",\n'
        block = re.sub(r"([^{,\s])(\n\s*\})$", r"\1,\2", block)
        return re.sub(r"\n\s*\}$", f"\n{insert}}}", block)

    escaped = escape_ts_string(value, "'")
    # field: '...'
    pattern = rf"(\s*{re.escape(field)}\s*:\s*)'(?:[^'\\]|\\.)*'"
    new_block, count = re.subn(pattern, rf"\g<1>'{escaped}'", block)
    if count:
        return new_block
    # field: "..." → convert to single quotes
    pattern = rf'(\s*{re.escape(field)}\s*:\s*)"(?:[^"\\]|\\.)*"'
    new_block, count = re.subn(pattern, rf"\g<1>'{escaped}'", block)
    if count:
        return new_block
    # "field": "..."
    pattern = rf'(\s*"{re.escape(field)}"\s*:\s*)"[^"]*"'
    new_block, count = re.subn(pattern, rf'\g<1>"{escaped}"', block)
    if count:
        return new_block
    # Field not present — insert before closing brace.
    indent = "    "
    insert = f"{indent}{field}: '{escaped}',\n"
    block = re.sub(r"([^{,\s])(\n\s*\})$", r"\1,\2", block)
    return re.sub(r"\n\s*\}$", f"\n{insert}}}", block)


def find_pillar_block(text: str, pillar: str) -> tuple[int, int] | None:
    """Find the start/end of a pillar object block in PILLARS."""
    # Pillar keys may be quoted or unquoted (e.g. 'fine-dining' vs catering)
    pat = rf"\n\s*['\"]?{re.escape(pillar)}['\"]?\s*:\s*\{{"
    m = re.search(pat, text)
    if not m:
        return None
    start = m.start()
    # Walk to matching close brace
    depth = 1
    i = m.end()
    while i < len(text) and depth > 0:
        c = text[i]
        if c in ('"', "'", "`"):
            quote = c
            i += 1
            while i < len(text):
                if text[i] == "\\":
                    i += 2
                    continue
                if text[i] == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                break
        i += 1
    return start, i + 1


def patch_site_architecture(text: str, metadata: dict[str, dict]) -> str:
    """Patch title/description/h1 for pillar sub-pages in siteArchitecture.ts."""
    for route, meta in metadata.items():
        parts = route.strip("/").split("/")
        if len(parts) != 2:
            continue
        pillar, sub = parts
        if pillar not in PILLAR_SLUGS:
            continue
        block_span = find_pillar_block(text, pillar)
        if not block_span:
            continue
        start, end = block_span
        pillar_block = text[start:end]

        # Find the subPage object containing slug: 'sub' (no nested braces).
        slug_pat = rf"\{{[^{{}}]*?slug\s*:\s*['\"]{re.escape(sub)}['\"][^{{}}]*?\}}"
        m = re.search(slug_pat, pillar_block, re.DOTALL)
        if not m:
            continue

        sub_block = m.group(0)
        sub_block = patch_field(sub_block, "title", meta["title"])
        sub_block = patch_field(sub_block, "description", meta["description"])
        sub_block = patch_field(sub_block, "h1", meta["h1"])

        pillar_block = pillar_block[: m.start()] + sub_block + pillar_block[m.end():]
        text = text[:start] + pillar_block + text[end:]
    return text


def main():
    metadata = parse_metadata_map(CSV_PATH)
    article_content = read_article_content(ARTICLE_CONTENT_PATH)

    updated = 0
    skipped = 0
    batch_files = []

    for md_path in sorted(CONTENT_DIR.glob("*.md")):
        route = route_for_file(md_path.name)
        if route:
            batch_files.append((md_path, route))

    for md_path, route in batch_files:
        md_text = md_path.read_text(encoding="utf-8")
        replacement_md = extract_replacement_content(md_text)
        if not replacement_md:
            skipped += 1
            print(f"SKIP (empty content): {route}")
            continue
        html = md_to_html(replacement_md)
        html = apply_business_blockers(html, route)
        article_content[route] = html
        updated += 1
        print(f"PUBLISHED: {route} ({len(html)} chars HTML)")

    ARTICLE_CONTENT_PATH.write_text(
        serialize_article_content(article_content), encoding="utf-8"
    )

    # Patch siteArchitecture.ts metadata for pillar sub-pages
    site_text = SITE_ARCH_PATH.read_text(encoding="utf-8")
    site_text = patch_site_architecture(site_text, metadata)
    SITE_ARCH_PATH.write_text(site_text, encoding="utf-8")

    print(f"\nDone. Updated {updated} article entries, skipped {skipped}.")


if __name__ == "__main__":
    main()
