#!/usr/bin/env python3
"""
Publish mychef-seo/content/*.md files into the myCHEF landing-page system.

For every content file whose slug matches an entry in landingPages.ts:
  - Patch title / description / h1 from the metadata map CSV (preserves jsonLd etc.)
  - Convert the FULL REPLACEMENT CONTENT section to HTML
  - Store the HTML in articleContent.ts keyed by route path

Run: python3 scripts/publish-content.py
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
LANDING_PAGES_PATH = REPO / "src/data/content/landingPages.ts"
ARTICLE_CONTENT_PATH = REPO / "src/data/content/articleContent.ts"


def path_for_slug(slug: str) -> str:
    return f"/{slug}"


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


def find_object_block(text: str, slug: str) -> tuple[int, int] | None:
    """Find the start/end indices of the object containing the given slug."""
    slug_pat = f'"slug"\\s*:\\s*"{re.escape(slug)}"'
    m = re.search(slug_pat, text)
    if not m:
        return None

    # Walk backward to the opening brace of this object
    i = m.start()
    while i > 0 and text[i] != "{":
        i -= 1
    start = i

    # Walk forward to the matching closing brace
    depth = 1
    i = start + 1
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
    end = i + 1
    return start, end


def escape_ts_string(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def patch_field(block: str, field: str, value: str | None) -> str:
    if not value:
        return block
    escaped = escape_ts_string(value)
    # Replace an existing "field": "..." line
    pattern = rf'(\n\s*"{re.escape(field)}"\s*:\s*)"(?:[^"\\]|\\.)*"'
    def repl(m: re.Match) -> str:
        return f'{m.group(1)}"{escaped}"'
    new_block, count = re.subn(pattern, repl, block)
    if count:
        return new_block
    # If field not present, insert before the closing brace.
    # Ensure the line before the closing brace ends with a comma.
    indent = "    "
    insert = f'{indent}"{field}": "{escaped}",\n'
    # Add comma to the previous line if missing
    block = re.sub(r"([^{,\s])(\n\s*\})$", r"\1,\2", block)
    return re.sub(r"\n\s*\}$", f"\n{insert}}}", block)


def extract_replacement_content(text: str) -> str:
    """Return the publishable markdown after the FULL REPLACEMENT CONTENT marker,
    stopping at the first '---' separator (e.g. before JSON-LD sections)."""
    markers = [
        r"##\s+FULL REPLACEMENT CONTENT",
        r"#\s+FULL REPLACEMENT CONTENT",
        r"##\s+2\.\s*FULL REPLACEMENT CONTENT",
    ]
    for marker in markers:
        m = re.search(marker, text, re.IGNORECASE)
        if m:
            content = text[m.end():]
            # Stop at the first horizontal-rule separator that follows the marker
            content = re.split(r"\n---\s*\n", content, maxsplit=1)[0]
            content = re.sub(r"\*\*Title tag:\*\*.*?\n", "", content)
            content = re.sub(r"\*\*Meta description:\*\*.*?\n", "", content)
            return content.strip()
    parts = re.split(r"\n---\s*\n", text, maxsplit=2)
    if len(parts) >= 2:
        return parts[-1].strip()
    return text.strip()


def md_to_html(text: str) -> str:
    md = markdown.Markdown(extensions=["tables", "fenced_code", "toc"])
    return md.convert(text)


def read_article_content(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    m = re.search(r"export const ARTICLE_CONTENT: Record<string, string> = (\{.*\})\n", text, re.DOTALL)
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


def main():
    metadata = parse_metadata_map(CSV_PATH)
    lp_text = LANDING_PAGES_PATH.read_text(encoding="utf-8")
    article_content = read_article_content(ARTICLE_CONTENT_PATH)

    updated = 0
    skipped = 0

    # Find all slugs in landingPages.ts
    slugs = re.findall(r'"slug"\s*:\s*"([^"]+)"', lp_text)

    for slug in slugs:
        path = path_for_slug(slug)
        md_path = CONTENT_DIR / f"{slug}.md"

        if not md_path.exists():
            skipped += 1
            print(f"SKIP (no content file): {slug}")
            continue

        block_span = find_object_block(lp_text, slug)
        if not block_span:
            skipped += 1
            print(f"SKIP (could not locate object): {slug}")
            continue

        start, end = block_span
        block = lp_text[start:end]

        md_text = md_path.read_text(encoding="utf-8")
        replacement_md = extract_replacement_content(md_text)
        html = md_to_html(replacement_md)

        meta = metadata.get(path)
        if meta:
            block = patch_field(block, "title", meta["title"])
            block = patch_field(block, "description", meta["description"])
            block = patch_field(block, "h1", meta["h1"])

        lp_text = lp_text[:start] + block + lp_text[end:]
        article_content[path] = html
        updated += 1
        print(f"PUBLISHED: {slug} ({len(html)} chars HTML)")

    LANDING_PAGES_PATH.write_text(lp_text, encoding="utf-8")
    ARTICLE_CONTENT_PATH.write_text(serialize_article_content(article_content), encoding="utf-8")

    print(f"\nDone. Updated {updated} landing pages, skipped {skipped}.")


if __name__ == "__main__":
    main()
