#!/usr/bin/env python3
"""
Patch hardcoded <h1> inner text across the source tree to match the expected
H1s from the live metadata audit report.

For every audit entry where `! h1` is reported, the script:
  1. Extracts the live H1 and expected H1.
  2. Picks a short, distinctive token near the end of the live H1 (avoids the
     <br>-join boundary where words are concatenated).
  3. Finds candidate source files containing that token.
  4. Replaces the first <h1 ...>...</h1> block in each candidate with the
     expected H1 rendered as a JSX expression.

Run after updating page-meta.ts / 10-metadata-map.csv and before building.
"""

import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "src"
# Use the most recent audit report in reports/
AUDIT_DIR = REPO / "reports"


def find_audit_file() -> Path | None:
    files = sorted(AUDIT_DIR.glob("live-metadata-audit-*.txt"))
    return files[-1] if files else None


def parse_audit(path: Path) -> list[tuple[str, str, str]]:
    """Return [(path, live_h1, expected_h1), ...]."""
    text = path.read_text(encoding="utf-8")
    results: list[tuple[str, str, str]] = []
    blocks = re.split(r"\n(?=/)", text)
    for block in blocks:
        path_match = re.match(r"^(/[^\s]*)\n", block)
        if not path_match:
            continue
        url = path_match.group(1)
        h1_match = re.search(r"^\s*live h1:\s*(.*)\n", block, re.M)
        expected_match = re.search(r"! h1:\s*live='([^']*)'\s*expected='([^']*)'", block)
        if h1_match and expected_match:
            live_h1 = h1_match.group(1).strip()
            expected_h1 = expected_match.group(2)
            results.append((url, live_h1, expected_h1))
    return results


def choose_token(live: str) -> str:
    """Pick a token from the live H1 that is unlikely to cross a <br> boundary."""
    # Normalize punctuation
    cleaned = re.sub(r"[^\w\s'’]", " ", live)
    words = [w for w in cleaned.split() if w]
    # Prefer the last 3 words, then last 2, then last word
    for n in (3, 2, 1):
        if len(words) >= n:
            return " ".join(words[-n:])
    return live


def find_candidates(token: str) -> list[Path]:
    """Find source files containing the token (case-insensitive, word-separated)."""
    if not token:
        return []
    pattern = re.compile(
        r"(?i)(?<![\w])" + re.escape(token) + r"(?![\w])"
    )
    candidates: list[Path] = []
    for p in SRC.rglob("*"):
        if p.is_file() and p.suffix in {".ts", ".tsx", ".js", ".jsx", ".md"}:
            try:
                text = p.read_text(encoding="utf-8")
            except Exception:
                continue
            # Strip simple tags for matching; tokens may be split by <br>
            plain = re.sub(r"<[^>]+>", " ", text)
            if pattern.search(plain):
                candidates.append(p)
    return candidates


def patch_file(path: Path, expected: str) -> bool:
    text = path.read_text(encoding="utf-8")
    # Replace the first <h1 ...>...</h1> block. Preserve attributes.
    new_text, count = re.subn(
        r"(?s)(<h1\b[^>]*>)(.*?)(</h1>)",
        lambda m: f'{m.group(1)}{{"{expected}"}}{m.group(3)}',
        text,
        count=1,
    )
    if count:
        path.write_text(new_text, encoding="utf-8")
        return True
    return False


def main():
    audit_path = find_audit_file()
    if not audit_path:
        print("No audit report found in reports/")
        return
    print(f"Using audit: {audit_path.name}")
    entries = parse_audit(audit_path)
    print(f"Found {len(entries)} H1 mismatches")

    patched_total = 0
    skipped: list[tuple[str, str]] = []

    for url, live, expected in entries:
        token = choose_token(live)
        candidates = find_candidates(token)
        if not candidates:
            skipped.append((url, f"no candidate for token '{token}'"))
            continue
        # If multiple candidates, patch the one whose plain text is closest to the live H1
        best: Path | None = None
        if len(candidates) == 1:
            best = candidates[0]
        else:
            live_norm = re.sub(r"\s+", " ", live.lower())
            best_score = -1
            for c in candidates:
                plain = re.sub(r"<[^>]+>", " ", c.read_text(encoding="utf-8").lower())
                plain = re.sub(r"\s+", " ", plain)
                # simple inclusion score
                score = sum(1 for w in token.lower().split() if w in plain)
                if score > best_score:
                    best_score = score
                    best = c
        if best and patch_file(best, expected):
            print(f"PATCHED {url} -> {best.relative_to(REPO)}")
            patched_total += 1
        else:
            skipped.append((url, f"could not patch {best.relative_to(REPO) if best else 'unknown'}"))

    print(f"\nDone. Patched {patched_total}/{len(entries)} H1s.")
    if skipped:
        print("Skipped:")
        for url, reason in skipped:
            print(f"  {url}: {reason}")


if __name__ == "__main__":
    main()
