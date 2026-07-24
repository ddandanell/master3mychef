#!/usr/bin/env python3
"""Audit live mychef.id pages against the metadata map CSV using curl."""
import csv
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import urljoin

CSV_PATH = Path("/Users/openclaw/Movies/LIve website/mychef-seo/10-metadata-map.csv")
BASE_URL = "https://mychef.id"


def fetch(url: str) -> str:
    result = subprocess.run(
        ["curl", "-s", "-L", "--max-time", "30", url],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or f"curl failed with {result.returncode}")
    return result.stdout


def strip_html(text: str) -> str:
    return re.sub(r"<[^>]+>", "", text).replace("&amp;", "&").strip()


def main():
    rows = []
    with open(CSV_PATH, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(row)

    mismatches = []
    errors = []
    ok = 0

    for i, row in enumerate(rows, 1):
        path = row["url"].strip()
        expected_title = row.get("recommended_title", "").strip()
        expected_desc = row.get("recommended_meta", "").strip()
        expected_h1 = row.get("recommended_h1", "").strip()
        url = urljoin(BASE_URL, path)
        try:
            html = fetch(url)
            title_match = re.search(r"<title>(.*?)</title>", html, re.S)
            title = title_match.group(1).replace("&amp;", "&") if title_match else ""
            desc_match = re.search(r'<meta name="description" content="(.*?)"', html, re.S)
            desc = desc_match.group(1).replace("&amp;", "&") if desc_match else ""
            h1_match = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.S)
            h1 = strip_html(h1_match.group(1)) if h1_match else ""

            issues = []
            if expected_title and title != expected_title:
                issues.append(f"title: live='{title}' expected='{expected_title}'")
            if expected_desc and desc != expected_desc:
                issues.append(f"desc mismatch")
            if expected_h1 and h1 != expected_h1:
                issues.append(f"h1: live='{h1}' expected='{expected_h1}'")

            if issues:
                mismatches.append({"url": path, "issues": issues, "title": title, "desc": desc, "h1": h1})
            else:
                ok += 1
        except Exception as e:
            errors.append({"url": path, "error": str(e)})

        if i % 20 == 0:
            print(f"Progress: {i}/{len(rows)} OK={ok} mismatch={len(mismatches)} error={len(errors)}", file=sys.stderr)

    print(f"\n=== Audit Summary ===")
    print(f"Total: {len(rows)}  OK: {ok}  Mismatch: {len(mismatches)}  Errors: {len(errors)}")

    if mismatches:
        print("\n=== Mismatches ===")
        for m in mismatches:
            print(f"\n{m['url']}")
            print(f"  live title: {m['title']}")
            print(f"  live desc:  {m['desc']}")
            print(f"  live h1:    {m['h1']}")
            for issue in m["issues"]:
                print(f"  ! {issue}")

    if errors:
        print("\n=== Errors ===")
        for e in errors:
            print(f"{e['url']}: {e['error']}")


if __name__ == "__main__":
    main()
