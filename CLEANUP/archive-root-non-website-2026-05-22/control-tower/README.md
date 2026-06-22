# MYCHEF CONTROL TOWER
**Autonomous project management system — always on, always listening**
Last updated: 2026-05-17 | Watcher PID: see `state/watcher.pid`

---

## HOW IT WORKS

```
Everyone drops update files → inbox/ → watcher picks up in 5s → hooks fire → blockers unblock → agents auto-execute → log recorded
```

---

## HOW TO REPORT PROGRESS (for David, Alessandro, Paco, Antonio, Michael)

Drop a `.txt` file in `control-tower/inbox/` named:

```
UPDATE_<task-id>_<STATUS>.txt
```

File **contents** = your notes, IDs, or confirmation.

### STATUS options
| Status | Meaning |
|--------|---------|
| `DONE` | Task complete |
| `IN_PROGRESS` | Working on it |
| `BLOCKED` | Stuck — explain in the file |
| `WAITING` | Waiting on someone else |

### Examples

```bash
# David delivers GA4 ID:
echo "G-ABC123XYZ" > control-tower/inbox/UPDATE_t01-ga4-id_DONE.txt

# David confirms Alessandro call scheduled:
echo "Call booked for May 18 at 10am WIB" > control-tower/inbox/UPDATE_t11-call-alessand_DONE.txt

# Paco says he's blocked:
echo "Need menu draft from Alessandro first" > control-tower/inbox/UPDATE_t16-paco-session_BLOCKED.txt

# Antonio decision (May 22):
echo "GO — dinner went well, partnership agreed" > control-tower/inbox/UPDATE_t22-antonio-decision_DONE.txt
```

The watcher picks it up **within 5 seconds**, logs it, fires the relevant hook, and auto-unblocks downstream tasks.

---

## TASK IDs — OWNER REFERENCE

| ID | Task | Owner | Deadline |
|----|------|-------|---------|
| **t01-ga4-id** | Extract GA4 ID from Analytics | **David** | ⚠️ 17 May OVERDUE |
| **t02-gtm-id** | Extract GTM ID from Tag Manager | **David** | ⚠️ 17 May OVERDUE |
| t03-netlify-ga | Add VITE_GA_ID to Netlify | Michael | 17 May |
| t04-netlify-gtm | Add VITE_GTM_ID to Netlify | Michael | 17 May |
| t05-netlify-deploy | Deploy to Netlify | Michael | 18 May |
| t06-dns-cname | Configure DNS CNAME | Michael | 18 May |
| t07-verify-live | Verify site live at mychef.id | Michael | 18 May |
| t08-verify-ga4 | Verify GA4 firing | Michael+David | 18 May |
| t09-verify-gtm | Verify GTM firing | Michael | 18 May |
| t10-whatsapp-bot | Deploy WhatsApp Bot | Michael | 18 May |
| **t11-call-alessand** | Schedule Alessandro call | **David** | ⚠️ 17 May OVERDUE |
| t12-menus | Finalize 3 signature menus | Alessandro | 28 May |
| t13-photographer | Book photographer | David+Alessandro | 20 May |
| t14-photo-shoot | Execute photo shoot | Alessandro | 28 May |
| t15-photos-site | Integrate photos into site | Michael | 29 May |
| **t16-paco-session** | Schedule Paco working session | **David** | 18 May |
| t17-paco-draft | Document service flow | Paco | 21 May |
| t18-paco-copy | Convert to website copy | David | 23 May |
| t19-paco-integrate | Integrate into site | Michael | 25 May |
| **t20-antonio-dinner** | Schedule Antonio test dinner | **David** | 18 May |
| t21-antonio-eval | Execute evaluation dinner | Paco+Alessandro+Antonio | 20-22 May |
| **t22-antonio-decision** | **GO/NO-GO Antonio decision** | **David+Paco+Alessandro** | **22 May EOD** |
| t23-antonio-deal | Draft partner agreement | David | 25 May |
| t24-antonio-page | Create Antonio chef page | Michael | 28 May |
| t25-partners-copy | Write /partners copy | David | 24 May |
| t26-partners-ui | Design /partners page | Michael | 25 May |
| t27-partners-nav | Integrate nav + CTA | Michael | 26 May |
| t28-partner-form | Build partner form | Michael | 27 May |
| t29-social-cal | 8-week social calendar | David | 23 May |
| t30-social-audit | Audit social accounts | David | 20 May |

---

## VIEW LIVE STATUS

```bash
bash "control-tower/status.sh"
```

---

## WHAT IS ALREADY DONE (by Control Tower)

| Date | Action | Commit/Link |
|------|--------|-------------|
| 2026-05-17 | Commission structure (12%/7%) surfaced on /partners with comparison table | `06289b0` |
| 2026-05-17 | Fixed build-breaking `use-reduced-motion` hook (6 pages affected) | `06289b0` |
| 2026-05-17 | Accessibility: visible labels + focus rings across forms | `06289b0` |
| 2026-05-17 | GitHub Issue #3 opened: David → GA4+GTM IDs | [#3](https://github.com/ddandanell/master3mychef/issues/3) |
| 2026-05-17 | GitHub PR #4 opened for review + merge | [PR#4](https://github.com/ddandanell/master3mychef/pull/4) |
| 2026-05-17 | Control tower watcher daemon started (PID 49783) | `state/watcher.pid` |

---

## MODEL ROUTING (cost-aware)
| Task type | Model used |
|-----------|-----------|
| Code changes, debugging, architecture | claude-sonnet-4.6 |
| Content generation, copy, social | claude-haiku-4.5 |
| Simple status updates, summaries | claude-haiku-4.5 |

---

## ANTONIO UPDATE — 22 MAY CHECK
**On 22 May**, drop this file:
```bash
echo "GO or NO-GO + reason" > control-tower/inbox/UPDATE_t22-antonio-decision_DONE.txt
```
The system will automatically unblock t23 (agreement draft) if GO, and log the decision.

---

## WATCHER MANAGEMENT
```bash
# Check if running:
cat control-tower/state/watcher.pid | xargs ps -p

# View live log:
tail -f control-tower/logs/watcher.log

# Restart watcher:
kill $(cat control-tower/state/watcher.pid)
nohup bash control-tower/watcher.sh > control-tower/logs/watcher.log 2>&1 &
echo $! > control-tower/state/watcher.pid
```
