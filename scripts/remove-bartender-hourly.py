#!/usr/bin/env python3
"""Replace retired hourly bartender hire (350K/h) with cocktail package pricing."""
from __future__ import annotations

import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"

# Order matters: longer patterns first
REGEX = [
    (
        r"[Ww]aiters and hosts from (?:about |around )?IDR 250[kK](?:/hour| per hour), plus bartenders from (?:about |around )?IDR 350[kK](?:/hour| per hour)",
        "waiters and hosts from IDR 250K/hour; complete cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"[Ww]aiters,? butlers,? hosts,? and sommeliers from around IDR 250k per hour, plus bartenders from around IDR 350k per hour",
        "waiters, butlers, hosts and sommeliers from IDR 250K/hour; complete cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"waiters, a host, even a sommelier — is available from around IDR 250k per hour, with bartenders from around IDR 350k per hour",
        "waiters, a host, even a sommelier — is available from IDR 250K/hour, with complete cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"Waiters and servers from IDR 250K/hour \(minimum 3 hours\) · Bartenders from IDR 350K/hour",
        "Waiters and servers from IDR 250K/hour (minimum 3 hours) · Cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"Waiters ~IDR 250K/hour; bartenders ~IDR 350K/hour \(minimums apply\)\.",
        "Waiters ~IDR 250K/hour; cocktail packages from IDR 500,000++ per guest (min 10 guests).",
    ),
    (
        r"[Ww]aiters from about IDR 250K/hour; bartenders from IDR 350K/hour \(3-hour minimums\)\.",
        "Waiters from about IDR 250K/hour; cocktail packages from IDR 500,000++ per guest (min 10).",
    ),
    (
        r"Waiters, hosts, butlers and sommeliers from IDR 250K/hour; bartenders from IDR 350K/hour \(3-hour minimums\)",
        "Waiters, hosts, butlers and sommeliers from IDR 250K/hour; cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"Private villa bartenders from about IDR 350,000/hour with a 3-hour minimum\.",
        "Villa cocktail packages from IDR 500,000++ per guest (min 10). Not hourly hire.",
    ),
    (
        r"From about IDR 350K/hour \(3-hour minimum\)\.",
        "Cocktail packages from IDR 500,000++ per guest (min 10).",
    ),
    (
        r"Add a bartender to craft cocktails as the sun drops over the Indian Ocean from around IDR 350k per hour",
        "Add luxury cocktail service as the sun drops over the Indian Ocean from IDR 500,000++ per guest",
    ),
    (
        r"bartender rates from IDR 350,000/hour \(3-hour minimum\)",
        "cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"Rates from IDR 350,000/hour \(3-hour minimum\)",
        "Packages from IDR 500,000++ per guest",
    ),
    (
        r"\['Bartenders', 'IDR 350K', 'per hour'\]",
        "['Cocktail packages', 'From IDR 500K++', 'per guest (min 10)']",
    ),
    (
        r"<td>Bartenders</td>\s*<td>IDR 350K</td>\s*<td>per hour</td>",
        "<td>Cocktail packages</td>\n<td>From IDR 500K++</td>\n<td>per guest (min 10)</td>",
    ),
    (
        r"bartenders from IDR 350K/hour \(3-hour minimums\)",
        "cocktail packages from IDR 500,000++ per guest (min 10)",
    ),
    (
        r"bartenders from IDR 350K/hour",
        "cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"Bartenders from IDR 350K/hour",
        "Cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"bartender from around IDR 350k per hour",
        "cocktail package from IDR 500,000++ per guest",
    ),
    (
        r"a bartender from around IDR 350k per hour",
        "cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"or a bartender from around IDR 350k per hour",
        "or cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"bartenders from around IDR 350k per hour",
        "cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"bartenders from about IDR 350[kK](?:/hour| per hour)",
        "cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"Bartenders from about IDR 350,000/hour",
        "Cocktail packages from IDR 500,000++ per guest",
    ),
    (
        r"· Bartenders from IDR 350K/hour ·",
        "· Cocktail packages from IDR 500,000++ per guest ·",
    ),
    (
        r"bartenderRateLegacyHourly: 'IDR 350,000/hour'",
        "bartenderRateLegacyHourly: 'RETIRED — cocktail packages from IDR 500,000++ per guest'",
    ),
]

SIMPLE = [
    ("bartenders from IDR 350K/hour", "cocktail packages from IDR 500,000++ per guest"),
    ("Bartenders from IDR 350K/hour", "Cocktail packages from IDR 500,000++ per guest"),
    ("bartender from IDR 350K/hour", "cocktail packages from IDR 500,000++ per guest"),
    ("Bartender from IDR 350K/hour", "Cocktail packages from IDR 500,000++ per guest"),
    ("from IDR 350,000/hour (3-hour minimum)", "from IDR 500,000++ per guest (cocktail packages)"),
    ("from IDR 350,000/hour", "from IDR 500,000++ per guest (cocktail packages)"),
    ("From IDR 350,000/hour", "From IDR 500,000++ per guest (cocktail packages)"),
    ("IDR 350,000/hour", "IDR 500,000++ per guest (cocktail packages)"),
    ("IDR 350,000 per hour", "IDR 500,000++ per guest"),
    ("IDR 350K/hour", "IDR 500,000++ per guest"),
    ("IDR 350k/hour", "IDR 500,000++ per guest"),
    ("IDR 350k per hour", "IDR 500,000++ per guest"),
    ("IDR 350K per hour", "IDR 500,000++ per guest"),
    ("around IDR 350k per hour", "from IDR 500,000++ per guest"),
    ("about IDR 350k per hour", "from IDR 500,000++ per guest"),
    ("about IDR 350K/hour", "from IDR 500,000++ per guest"),
    ("350,000/hour", "500,000++ per guest (packages)"),
    ("350K/hour", "500,000++ per guest"),
    ("350k/hour", "500,000++ per guest"),
]


def should_process(text: str) -> bool:
    if "350" not in text:
        return False
    low = text.lower()
    return any(
        k in low
        for k in (
            "bartender",
            "350k/hour",
            "350k per hour",
            "350,000/hour",
            "350k', 'per hour",
            "idr 350k",
        )
    )


def clean(text: str) -> str:
    text = text.replace("cocktail packages packages", "cocktail packages")
    text = text.replace("Cocktail packages packages", "Cocktail packages")
    text = text.replace("(cocktail packages) (cocktail packages)", "(cocktail packages)")
    text = text.replace(
        "from IDR 500,000++ per guest (cocktail packages) (min 10)",
        "from IDR 500,000++ per guest (min 10)",
    )
    text = text.replace(
        "IDR 500,000++ per guest (cocktail packages) (cocktail packages)",
        "IDR 500,000++ per guest (cocktail packages)",
    )
    return text


def main() -> None:
    changed: list[str] = []
    for path in SRC.rglob("*"):
        if path.suffix not in {".ts", ".tsx", ".js", ".jsx", ".md"}:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except OSError:
            continue
        if not should_process(text):
            continue
        orig = text
        for pat, rep in REGEX:
            text = re.sub(pat, rep, text)
        for a, b in SIMPLE:
            text = text.replace(a, b)
        text = clean(text)
        if text != orig:
            path.write_text(text, encoding="utf-8")
            changed.append(str(path.relative_to(ROOT)))

    print(f"Updated {len(changed)} files")
    for f in sorted(changed):
        print(f"  {f}")

    print("\n=== Remaining bartender/hourly 350 hits ===")
    r = subprocess.run(
        ["rg", "-n", "350.?000|350[Kk]", "src", "-g", "*.{ts,tsx}"],
        capture_output=True,
        text=True,
        cwd=ROOT,
    )
    for line in r.stdout.splitlines():
        if re.search(r"3,?500,?000|35,?000,?000|35000000", line):
            continue
        if "RETIRED" in line:
            continue
        if re.search(r"bartender|350[Kk]/hour|350[Kk] per hour|350,000/hour|/hour", line, re.I):
            print(line)


if __name__ == "__main__":
    main()
