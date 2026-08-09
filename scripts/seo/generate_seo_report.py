#!/usr/bin/env python3
"""
mychef.id multi-engine SEO report generator.

Pulls live data from:
  - Google Search Console (queries, pages, query×page, sitemaps, optional inspect)
  - Bing Webmaster (sites, crawl stats, query/page stats)
  - PageSpeed Insights via google-psi MCP (lab scores for money URLs)
  - Live HTML titles/H1s/canonicals for ownership checks

Writes timestamped Markdown + JSON under reports/seo/ and a latest symlink.

Usage:
  python3 scripts/seo/generate_seo_report.py
  python3 scripts/seo/generate_seo_report.py --days 28 --out reports/seo
  python3 ~/.agents/skills/mychef-seo-report/scripts/generate_seo_report.py
"""

from __future__ import annotations

import argparse
import json
import os
import re
import select
import ssl
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

try:
    import certifi

    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except Exception:
    SSL_CTX = ssl.create_default_context()

HOME = Path.home()
GSC_CLI = HOME / ".agents/skills/gsc-api/scripts/gsc_cli.py"
GSC_CONNECT = HOME / ".agents/skills/gsc-api/scripts/gsc_connect.py"
BING_ENV = HOME / ".config/claude-seo/bing-webmaster.env"
PSI_BIN = HOME / ".agents/tools/google-psi-mcp/bin/psi-mcp-go-darwin-arm64"
PSI_ENV = HOME / ".config/claude-seo/google-psi.env"

SITE = "https://mychef.id"
DEFAULT_PROPERTY = "sc-domain:mychef.id"
MONEY_URLS = [
    f"{SITE}/",
    f"{SITE}/private-chef-bali",
    f"{SITE}/bali-wedding-catering-packages",
    f"{SITE}/locations/canggu",
    f"{SITE}/private-chef/canggu",
    f"{SITE}/blog/private-chef-cost-bali",
    f"{SITE}/in-villa-service/butlers",
    f"{SITE}/catering/bbq-catering",
]


def load_dotenv(path: Path) -> dict[str, str]:
    out: dict[str, str] = {}
    if not path.is_file():
        return out
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        out[k.strip()] = v.strip().strip('"').strip("'")
    return out


def http_json(url: str, timeout: int = 60) -> dict:
    req = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "mychef-seo-report/1.0"})
    with urllib.request.urlopen(req, timeout=timeout, context=SSL_CTX) as r:
        return json.loads(r.read().decode())


def run_json(cmd: list[str], timeout: int = 120) -> dict:
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
    text = (r.stdout or "").strip() or (r.stderr or "").strip()
    try:
        return json.loads(text)
    except Exception:
        return {"ok": False, "error": "non-json", "stdout": text[:2000], "code": r.returncode}


def gsc_analytics(days: int, dimensions: str) -> dict:
    if not GSC_CLI.is_file():
        return {"ok": False, "error": "gsc_cli missing"}
    return run_json(
        [
            "python3",
            str(GSC_CLI),
            "analytics",
            "--days",
            str(days),
            "--dimensions",
            dimensions,
            "--json",
        ],
        timeout=180,
    )


def gsc_sitemaps() -> dict:
    if not GSC_CLI.is_file():
        return {"ok": False, "error": "gsc_cli missing"}
    return run_json(["python3", str(GSC_CLI), "sitemaps", "--json"], timeout=90)


def gsc_connect() -> dict:
    if not GSC_CONNECT.is_file():
        return {"ok": False, "error": "gsc_connect missing"}
    return run_json(["python3", str(GSC_CONNECT), "--json"], timeout=90)


def bing_get(api_key: str, path: str, params: dict | None = None) -> dict:
    q = {"apikey": api_key}
    if params:
        q.update(params)
    url = f"https://ssl.bing.com/webmaster/api.svc/json/{path}?" + urllib.parse.urlencode(q)
    try:
        return http_json(url, timeout=60)
    except Exception as e:
        body = e.read().decode()[:400] if hasattr(e, "read") else str(e)
        return {"error": str(e), "body": body}


def load_psi_key() -> str:
    env = load_dotenv(PSI_ENV)
    return os.environ.get("GOOGLE_PSI_API_KEY") or env.get("GOOGLE_PSI_API_KEY") or env.get("GOOGLE_API_KEY") or ""


def psi_analyze(url: str, key: str) -> dict:
    if not PSI_BIN.is_file() or not key:
        return {"ok": False, "url": url, "error": "psi binary or key missing"}
    env = {**os.environ, "GOOGLE_PSI_API_KEY": key, "GOOGLE_API_KEY": key}
    proc = subprocess.Popen(
        [str(PSI_BIN), "--api-key", key],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        bufsize=1,
        env=env,
    )

    def send(obj: dict) -> None:
        assert proc.stdin
        proc.stdin.write(json.dumps(obj) + "\n")
        proc.stdin.flush()

    def recv(timeout: float = 120.0):
        assert proc.stdout and proc.stderr
        end = time.time() + timeout
        while time.time() < end:
            r, _, _ = select.select([proc.stdout, proc.stderr], [], [], 0.3)
            for stream in r:
                line = stream.readline()
                if not line:
                    continue
                if stream is proc.stderr:
                    continue
                line = line.strip()
                if not line:
                    continue
                try:
                    return json.loads(line)
                except json.JSONDecodeError:
                    continue
        return None

    try:
        send(
            {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "initialize",
                "params": {
                    "protocolVersion": "2024-11-05",
                    "capabilities": {},
                    "clientInfo": {"name": "seo-report", "version": "1.0"},
                },
            }
        )
        if not recv(20):
            return {"ok": False, "url": url, "error": "psi init failed"}
        send({"jsonrpc": "2.0", "method": "notifications/initialized"})
        send(
            {
                "jsonrpc": "2.0",
                "id": 2,
                "method": "tools/call",
                "params": {
                    "name": "analyze_page",
                    "arguments": {
                        "url": url,
                        "strategy": "mobile",
                        "categories": ["performance", "seo"],
                    },
                },
            }
        )
        res = recv(180)
        out: dict = {"ok": True, "url": url}
        if res and "result" in res:
            for part in res["result"].get("content") or []:
                if part.get("type") == "text":
                    try:
                        parsed = json.loads(part["text"])
                        results = parsed.get("results") or []
                        if results:
                            lab = (results[0].get("labData") or {}).get("categories") or {}
                            field = (results[0].get("fieldData") or {}).get("page") or {}
                            out["performance"] = (lab.get("performance") or {}).get("score")
                            out["seo"] = (lab.get("seo") or {}).get("score")
                            out["field_overall"] = field.get("overallRating")
                        out["errors"] = parsed.get("errors") or []
                    except json.JSONDecodeError:
                        out["raw"] = (part.get("text") or "")[:300]
        else:
            out["ok"] = False
            out["error"] = "analyze timeout"
        return out
    except Exception as e:
        return {"ok": False, "url": url, "error": str(e)}
    finally:
        try:
            proc.kill()
        except Exception:
            pass


def live_html(url: str) -> dict:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "mychef-seo-report/1.0"})
        with urllib.request.urlopen(req, timeout=30, context=SSL_CTX) as r:
            body = r.read(250_000).decode("utf-8", "replace")
            code = r.status
        title = re.search(r"<title[^>]*>(.*?)</title>", body, re.I | re.S)
        h1 = re.search(r"<h1[^>]*>(.*?)</h1>", body, re.I | re.S)
        canon = re.search(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)', body, re.I)

        def clean(m):
            if not m:
                return None
            return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", m.group(1))).strip()[:160]

        return {
            "url": url,
            "status": code,
            "title": clean(title),
            "h1": clean(h1),
            "canonical": canon.group(1) if canon else None,
        }
    except Exception as e:
        status = getattr(e, "code", None)
        return {"url": url, "status": status, "error": str(e)[:200]}


def top_rows(payload: dict, n: int = 15) -> list:
    rows = payload.get("rows") or []
    return rows[:n]


def find_money_landings(qp: dict) -> list:
    rows = qp.get("rows") or []
    out = []
    for r in rows:
        keys = r.get("keys") or []
        if len(keys) >= 2 and keys[0].lower() == "private chef bali":
            out.append(r)
    return sorted(out, key=lambda x: -x.get("clicks", 0))


def ownership_checks(live: list[dict]) -> list[dict]:
    checks = []
    by_url = {x.get("url"): x for x in live}
    home = by_url.get(f"{SITE}/") or {}
    pillar = by_url.get(f"{SITE}/private-chef-bali") or {}
    checks.append(
        {
            "id": "home_not_money_title",
            "pass": home.get("title") is not None
            and not str(home.get("title", "")).lower().startswith("private chef bali"),
            "detail": f"Home title: {home.get('title')}",
        }
    )
    checks.append(
        {
            "id": "pillar_h1_private_chef_bali",
            "pass": "private chef bali" in str(pillar.get("h1", "")).lower().replace("  ", " "),
            "detail": f"Pillar H1: {pillar.get('h1')}",
        }
    )
    idx = next((x for x in live if "3c9a2f07" in x.get("url", "")), None)
    checks.append(
        {
            "id": "indexnow_key_live",
            "pass": idx is not None and idx.get("status") == 200,
            "detail": f"IndexNow key status: {idx.get('status') if idx else 'missing check'}",
        }
    )
    return checks


def build_markdown(data: dict) -> str:
    gen = data["generated_at"]
    days = data["days"]
    gsc_q = data.get("gsc_queries") or {}
    gsc_p = data.get("gsc_pages") or {}
    gsc_qp = data.get("gsc_query_page") or {}
    money = data.get("money_term_landings") or []
    checks = data.get("ownership_checks") or []
    psi = data.get("psi") or []
    bing = data.get("bing") or {}
    live = data.get("live_html") or []

    lines = [
        f"# mychef.id SEO Report",
        "",
        f"- **Generated:** {gen}",
        f"- **GSC window:** last {days} days",
        f"- **Property:** `{DEFAULT_PROPERTY}`",
        f"- **Bing site:** `{SITE}/`",
        "",
        "## Executive snapshot",
        "",
    ]

    # money ownership
    if money:
        top = money[0]
        page = top["keys"][1] if len(top.get("keys") or []) > 1 else "?"
        lines.append(
            f"- **Money term “private chef bali”** currently lands on `{page}` "
            f"({top.get('clicks')} clicks / {top.get('impressions')} imp / pos {top.get('position', 0):.1f})."
        )
        pillar_share = sum(
            r.get("clicks", 0)
            for r in money
            if len(r.get("keys") or []) > 1 and "private-chef-bali" in r["keys"][1]
        )
        total_m = sum(r.get("clicks", 0) for r in money) or 1
        lines.append(
            f"- **Pillar share of those clicks:** {pillar_share}/{total_m} "
            f"({100 * pillar_share / total_m:.0f}%). Target ≥ 40%."
        )
    else:
        lines.append("- Money term landings: no rows in top query×page sample.")

    page_sum = (gsc_p.get("sumRows") or {})
    lines.append(
        f"- **GSC top pages sample:** {page_sum.get('clicks', '—')} clicks / "
        f"{page_sum.get('impressions', '—')} impressions "
        f"(CTR {100 * (page_sum.get('ctr') or 0):.1f}%)."
    )
    lines.append(
        f"- **Bing:** connected={bing.get('connected')} · verified={bing.get('verified')} · "
        f"latest index≈{bing.get('in_index_latest')} · crawl errors latest={bing.get('crawl_errors_latest')}."
    )
    lines.append("")
    lines.append("### Ownership checks (live HTML)")
    lines.append("")
    for c in checks:
        mark = "PASS" if c.get("pass") else "FAIL"
        lines.append(f"- **{mark}** `{c['id']}` — {c.get('detail')}")
    lines.append("")

    lines += ["## GSC top queries", ""]
    lines += ["| Query | Clicks | Imp | CTR | Pos |", "|---|---:|---:|---:|---:|"]
    for r in top_rows(gsc_q, 15):
        q = (r.get("keys") or ["?"])[0]
        lines.append(
            f"| {q} | {r.get('clicks', 0)} | {r.get('impressions', 0)} | "
            f"{100 * (r.get('ctr') or 0):.1f}% | {r.get('position', 0):.1f} |"
        )
    lines.append("")

    lines += ["## GSC top pages", ""]
    lines += ["| Page | Clicks | Imp | CTR | Pos |", "|---|---:|---:|---:|---:|"]
    for r in top_rows(gsc_p, 15):
        page = (r.get("keys") or ["?"])[0].replace(SITE, "")
        lines.append(
            f"| `{page or '/'}` | {r.get('clicks', 0)} | {r.get('impressions', 0)} | "
            f"{100 * (r.get('ctr') or 0):.1f}% | {r.get('position', 0):.1f} |"
        )
    lines.append("")

    lines += ["## Money term landings (query×page)", ""]
    lines += ["| Query | Page | Clicks | Imp | Pos |", "|---|---|---:|---:|---:|"]
    for r in money[:10]:
        keys = r.get("keys") or ["?", "?"]
        lines.append(
            f"| {keys[0]} | `{keys[1]}` | {r.get('clicks', 0)} | {r.get('impressions', 0)} | "
            f"{r.get('position', 0):.1f} |"
        )
    if not money:
        lines.append("| — | — | — | — | — |")
    lines.append("")

    lines += ["## PageSpeed (mobile lab)", ""]
    lines += ["| URL | Perf | SEO | Field |", "|---|---:|---:|---|"]
    for p in psi:
        lines.append(
            f"| `{p.get('url')}` | {p.get('performance', '—')} | {p.get('seo', '—')} | "
            f"{p.get('field_overall', p.get('error', '—'))} |"
        )
    lines.append("")

    lines += ["## Live titles / H1", ""]
    lines += ["| URL | Status | Title | H1 |", "|---|---:|---|---|"]
    for row in live:
        if "3c9a2f07" in row.get("url", "") or row.get("url", "").endswith(".txt"):
            lines.append(
                f"| `{row.get('url')}` | {row.get('status')} | _(key file)_ | {row.get('error', 'OK')} |"
            )
        else:
            lines.append(
                f"| `{row.get('url')}` | {row.get('status')} | {row.get('title') or row.get('error')} | "
                f"{row.get('h1') or '—'} |"
            )
    lines.append("")

    lines += [
        "## Priority actions (auto checklist)",
        "",
        "1. **P0 ownership:** Keep homepage as brand hub; pillar `/private-chef-bali` must own “private chef bali”.",
        "2. **Deploy lag:** If ownership checks FAIL, production is behind the SEO branch — deploy immediately.",
        "3. **Locations handoff:** Chef intent must land on `/private-chef/{area}`, not `/locations/{area}`.",
        "4. **CTR harvest:** Improve snippets on wedding packages + cost blog (high imp, low CTR).",
        "5. **IndexNow + Bing submit** after deploys; GSC URL inspection on pillar + home.",
        "6. **PSI:** Homepage lab performance mid-50s/60s — optimize after ownership, not instead of it.",
        "",
        "## How to refresh this report",
        "",
        "```bash",
        "python3 scripts/seo/generate_seo_report.py --days 28",
        "# or skill:",
        "python3 ~/.agents/skills/mychef-seo-report/scripts/generate_seo_report.py",
        "```",
        "",
        f"_Raw JSON: `{data.get('json_path', 'reports/seo/…json')}`_",
        "",
    ]
    return "\n".join(lines)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=28)
    ap.add_argument(
        "--out",
        default=str(Path(__file__).resolve().parents[2] / "reports" / "seo"),
        help="Output directory",
    )
    ap.add_argument("--skip-psi", action="store_true")
    ap.add_argument("--psi-urls", nargs="*", default=[f"{SITE}/", f"{SITE}/private-chef-bali", f"{SITE}/bali-wedding-catering-packages"])
    args = ap.parse_args()

    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    generated_at = datetime.now(timezone.utc).isoformat()

    print("GSC connect…", flush=True)
    gsc_c = gsc_connect()
    print("GSC queries…", flush=True)
    gsc_q = gsc_analytics(args.days, "query")
    print("GSC pages…", flush=True)
    gsc_p = gsc_analytics(args.days, "page")
    print("GSC query×page…", flush=True)
    gsc_qp = gsc_analytics(args.days, "query,page")
    print("GSC sitemaps…", flush=True)
    gsc_sm = gsc_sitemaps()

    print("Bing…", flush=True)
    bing_env = load_dotenv(BING_ENV)
    bkey = os.environ.get("BING_WEBMASTER_API_KEY") or bing_env.get("BING_WEBMASTER_API_KEY") or ""
    bsite = bing_env.get("BING_SITE_URL") or f"{SITE}/"
    bing: dict = {"connected": False}
    if bkey:
        sites = bing_get(bkey, "GetUserSites")
        crawl = bing_get(bkey, "GetCrawlStats", {"siteUrl": bsite})
        issues = bing_get(bkey, "GetCrawlIssues", {"siteUrl": bsite})
        qstats = bing_get(bkey, "GetQueryStats", {"siteUrl": bsite})
        pstats = bing_get(bkey, "GetPageStats", {"siteUrl": bsite})
        rows = crawl.get("d") if isinstance(crawl, dict) else None
        latest = rows[-1] if isinstance(rows, list) and rows else {}
        bing = {
            "connected": "error" not in sites,
            "site": bsite,
            "verified": True,
            "sites": sites.get("d") if isinstance(sites, dict) else sites,
            "in_index_latest": latest.get("InIndex") if isinstance(latest, dict) else None,
            "crawl_errors_latest": latest.get("CrawlErrors") if isinstance(latest, dict) else None,
            "crawled_pages_latest": latest.get("CrawledPages") if isinstance(latest, dict) else None,
            "issues_count": len(issues.get("d") or []) if isinstance(issues, dict) else None,
            "query_sample": (qstats.get("d") or [])[:10] if isinstance(qstats, dict) else [],
            "page_sample": (pstats.get("d") or [])[:10] if isinstance(pstats, dict) else [],
        }

    print("Live HTML…", flush=True)
    live = [live_html(u) for u in MONEY_URLS]
    live.append(live_html(f"{SITE}/3c9a2f07c1b66e36ccc3060247766403.txt"))

    psi_results = []
    if not args.skip_psi:
        key = load_psi_key()
        for u in args.psi_urls:
            print(f"PSI {u}…", flush=True)
            psi_results.append(psi_analyze(u, key))

    money = find_money_landings(gsc_qp if gsc_qp.get("ok") else {})
    checks = ownership_checks(live)

    payload = {
        "generated_at": generated_at,
        "days": args.days,
        "property": DEFAULT_PROPERTY,
        "gsc_connect": gsc_c,
        "gsc_queries": gsc_q,
        "gsc_pages": gsc_p,
        "gsc_query_page": gsc_qp,
        "gsc_sitemaps": gsc_sm,
        "money_term_landings": money,
        "bing": bing,
        "psi": psi_results,
        "live_html": live,
        "ownership_checks": checks,
    }

    json_path = out_dir / f"seo-report-{stamp}.json"
    md_path = out_dir / f"seo-report-{stamp}.md"
    payload["json_path"] = str(json_path)
    md = build_markdown(payload)
    json_path.write_text(json.dumps(payload, indent=2) + "\n")
    md_path.write_text(md + "\n")

    latest_json = out_dir / "latest.json"
    latest_md = out_dir / "latest.md"
    latest_json.write_text(json_path.read_text())
    latest_md.write_text(md_path.read_text())

    # also copy to skill reports dir for agents
    skill_reports = HOME / ".agents/skills/mychef-seo-report/reports"
    skill_reports.mkdir(parents=True, exist_ok=True)
    (skill_reports / "latest.md").write_text(md_path.read_text())
    (skill_reports / "latest.json").write_text(json_path.read_text())

    print(json.dumps({"ok": True, "markdown": str(md_path), "json": str(json_path), "latest_md": str(latest_md)}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
