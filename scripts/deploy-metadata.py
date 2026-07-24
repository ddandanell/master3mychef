#!/usr/bin/env python3
"""
Bulk-deploy SEO metadata from the external CSV metadata map into
src/data/page-meta.ts.

This script regenerates the entire PAGE_META object from the CSV while
preserving existing ogImage expressions (matched by URL path).
"""

import csv
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
CSV_PATH = Path("/Users/openclaw/Movies/LIve website/mychef-seo/10-metadata-map.csv")
PAGE_META_PATH = REPO / "src/data/page-meta.ts"

SITE = "https://mychef.id"


def safe_key(url: str) -> str:
    key = re.sub(r"^/+|/+$", "", url)
    key = re.sub(r"[^a-zA-Z0-9]+", "-", key)
    key = re.sub(r"^-|-$", "", key)
    return key or "page"


def key_literal(key: str) -> str:
    if re.match(r"^[A-Za-z_$][\w$]*$", key):
        return key
    return f"'{key.replace(chr(39), '\\' + chr(39))}'"


def escape_single(value: str) -> str:
    return value.replace("\\", "\\\\").replace("'", "\\'")


def sq(value: str) -> str:
    return f"'{escape_single(value)}'"


def parse_existing(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    entries = {}

    # Match top-level key followed by { block
    for m in re.finditer(
        r"^\s+([A-Za-z_$][\w$]*|'[^']*'|\"[^\"]*\"):\s*\{", text, re.M
    ):
        key_raw = m.group(1)
        if key_raw.startswith(("'", '"')):
            key = key_raw[1:-1]
        else:
            key = key_raw

        start = text.find("{", m.end() - 1)
        depth = 1
        i = start + 1
        while i < len(text) and depth > 0:
            c = text[i]
            if c in ('"', "'", "`"):
                # skip string/template literal
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

        block = text[start : i + 1]
        path_match = re.search(r"path:\s*(['\"`])(.+?)\1,", block)
        og_match = re.search(r"ogImage:\s*(.+?),\s*\n", block)
        if path_match:
            entries[path_match.group(2)] = {
                "key": key,
                "ogImage": og_match.group(1) if og_match else None,
            }
    return entries


def read_csv(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    # csv module handles quoted fields
    reader = csv.DictReader(text.splitlines())
    rows = []
    for row in reader:
        action = (row.get("action") or "").strip().lower()
        if action not in ("rewrite", "keep"):
            continue
        rows.append(row)
    return rows


def canonical_expr(canonical: str, url: str) -> str:
    c = canonical.strip()
    if c == "self":
        return f"`${{SITE}}{url}`"
    if c.startswith("/"):
        return f"`${{SITE}}{c}`"
    return sq(c)


def format_entry(key: str, path: str, title: str, description: str, h1: str, canonical: str, og_image: str | None) -> str:
    lines = [
        f"  {key_literal(key)}: {{",
        f"    path: {sq(path)},",
        f"    title: {sq(title)},",
        f"    description:",
        f"      {sq(description)},",
        f"    canonical: {canonical_expr(canonical, path)},",
        f"    h1: {sq(h1)},",
    ]
    if og_image:
        lines.append(f"    ogImage: {og_image},")
    lines.append("  },")
    return "\n".join(lines)


def main():
    if not CSV_PATH.exists():
        raise FileNotFoundError(f"CSV not found: {CSV_PATH}")

    existing = parse_existing(PAGE_META_PATH)
    rows = read_csv(CSV_PATH)

    # Preserve existing ogImage by path
    og_by_path: dict[str, str | None] = {
        path: data.get("ogImage") for path, data in existing.items()
    }
    existing_key_by_path: dict[str, str] = {
        path: data["key"] for path, data in existing.items()
    }

    csv_paths = set()
    blocks: list[str] = []

    for row in rows:
        url = (row.get("url") or "").strip()
        if not url:
            continue
        csv_paths.add(url)

        title = (row.get("recommended_title") or "").strip()
        description = (row.get("recommended_meta") or "").strip()
        h1 = (row.get("recommended_h1") or "").strip()
        canonical = (row.get("canonical") or "self").strip()

        key = existing_key_by_path.get(url) or safe_key(url)
        og = og_by_path.get(url)

        blocks.append(format_entry(key, url, title, description, h1, canonical, og))

    # Append any existing entries not present in CSV, unchanged
    extra_blocks = []
    for path, data in existing.items():
        if path in csv_paths:
            continue
        # We don't have the full block text, but we can keep the ogImage.
        # Since these are extras, reconstruct with current title/desc/h1 from existing
        # is not possible from parse_existing. Better: preserve raw block.
        # For simplicity, skip reconstructing extras; instead keep them by reading raw.
        pass

    joined = "\n\n".join(blocks)

    # Handle extras by raw preservation
    text = PAGE_META_PATH.read_text(encoding="utf-8")
    extra_sections: list[str] = []
    for m in re.finditer(
        r"^\s+([A-Za-z_$][\w$]*|'[^']*'|\"[^\"]*\"):\s*\{", text, re.M
    ):
        key_raw = m.group(1)
        key = key_raw[1:-1] if key_raw.startswith(("'", '"')) else key_raw
        start = m.start()
        brace_start = text.find("{", m.end() - 1)
        depth = 1
        i = brace_start + 1
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
        block_end = i + 1
        # include trailing comma
        comma_end = block_end
        while comma_end < len(text) and text[comma_end] in ", \n":
            if text[comma_end] == ",":
                comma_end += 1
                break
            comma_end += 1

        path_match = re.search(r"path:\s*(['\"`])(.+?)\1,", text[brace_start : block_end])
        if path_match:
            p = path_match.group(2)
            if p not in csv_paths:
                extra_sections.append(text[start : comma_end])

    if extra_sections:
        joined += "\n\n" + "\n\n".join(extra_sections)

    new_file = f"""/**
 * myCHEF — PAGE META DATA
 *
 * Centralised, unique title / description / H1 for every primary route.
 * Prevents duplicate title tag catastrophes and keeps SEO data in one
 * typed source of truth.
 */

import {{ LOCATION_LANDING_PAGES }} from './locationLandingPages'

export interface PageMeta {{
  /** Route path (e.g. '/', '/fine-dining') */
  path: string
  /** HTML <title> — must be unique site-wide, ≤ 60 chars ideal */
  title: string
  /** Meta description — ≤ 160 chars ideal */
  description: string
  /** Canonical URL */
  canonical: string
  /** Primary H1 heading — must be unique and keyword-rich */
  h1: string
  /** Open Graph / social image */
  ogImage?: string
}}

const SITE = '{SITE}'

export const PAGE_META: Record<string, PageMeta> = {{
{joined}
}} as const

/** Helper to retrieve meta by route key with strict typing */
export function getPageMeta(key: keyof typeof PAGE_META): PageMeta {{
  return PAGE_META[key]
}}

/** All page meta entries as an array for bulk operations (sitemaps, audits, etc.) */
export const ALL_PAGE_META: PageMeta[] = Object.values(PAGE_META)
"""

    PAGE_META_PATH.write_text(new_file, encoding="utf-8")

    print(f"Metadata deploy complete")
    print(f"  CSV rows deployed: {len(rows)}")
    print(f"  Existing entries preserved (not in CSV): {len(extra_sections)}")


if __name__ == "__main__":
    main()
