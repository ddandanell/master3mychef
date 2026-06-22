# MYCHEF EXECUTION PROTOCOL — Claude Takes Control
## Real-Time Coordination via CLI + Chat

**Effective Date**: 17 May 2026  
**Authority**: David (Product Owner) + Claude (Execution Agent)  
**Coordination Channel**: This chat + your local CLI terminals  

---

## HOW THIS WORKS

### Claude's Role (Me)
I control the **planning, documentation, and monitoring** layer:
- ✅ Created MYCHEF_NORTHSTAR_REPORT_v1.0.md (master accountability doc)
- ✅ Created WEEKLY_STANDUP_TEMPLATE.md (governance)
- ✅ Created LAUNCH_DAY_MONITORING_CHECKLIST.md (verification protocol)
- ✅ Created CRITICAL_PATH_TASK_TRACKER.md (live status dashboard)
- ✅ Created launch_automation.sh (script to verify readiness)
- 🔄 Monitor progress from chat (you report, I track)
- 🔄 Update CRITICAL_PATH_TASK_TRACKER.md as tasks complete
- 🔄 Write status reports weekly

### Your Role (David + Team)
You control the **execution** layer:
- ✅ Run `launch_automation.sh` to verify build readiness
- ✅ Extract GA4 ID + GTM ID (in .env)
- ✅ Push branch to GitHub
- ✅ Deploy to Netlify (manual UI)
- ✅ Verify site live at https://mychef.id
- ✅ Run monitoring protocol (hourly checks T+1 to T+24)
- ✅ Report status back to me in chat
- ✅ Escalate blockers immediately

---

## IMMEDIATE ACTIONS (TODAY - 17 May)

### 1. Run Build Verification Script

**Open terminal in the app folder**:
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
bash launch_automation.sh
```

**Expected Output**:
```
✅ pnpm found
✅ git found
✅ .env file found
✅ Build successful
✅ dist/ folder exists (Size: 175 KB)
✅ VITE_GA_ID configured: G-XX...
✅ VITE_GTM_ID configured: GTM-XX...
✅ netlify.toml found
✅ sitemap.xml found (51 URLs)

🚀 ALL CHECKS PASSED - READY FOR DEPLOYMENT
```

**If script fails**: Report the error here, I'll debug.

---

### 2. Extract GA4 ID (David)

Go to: https://analytics.google.com → Admin → Property Settings → Property ID

**Copy the value** (format: `G-XXXXXXXXXX`)

**Add to .env**:
```bash
# In /Users/openclaw/Downloads/MYCHEF . MASTER/app/.env
VITE_GA_ID=G-XXXXXXXXXX
```

---

### 3. Extract GTM ID (David)

Go to: https://tagmanager.google.com → Admin → Container Settings → Container ID

**Copy the value** (format: `GTM-XXXXXXX`)

**Add to .env**:
```bash
# In /Users/openclaw/Downloads/MYCHEF . MASTER/app/.env
VITE_GTM_ID=GTM-XXXXXXX
```

---

### 4. Push to GitHub

```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
git status  # Should show clean working tree
git push origin auto-improve/core-web-vitals-phase4
```

**Expected**:
```
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
...
To github.com:ddandanell/master3mychef.git
  [your-commits] auto-improve/core-web-vitals-phase4 -> auto-improve/core-web-vitals-phase4
```

---

### 5. Report Back to Me

**Once you've completed 1-4**, paste in chat:

```
✅ Build verification script PASSED
✅ GA4 ID extracted and added to .env
✅ GTM ID extracted and added to .env
✅ Pushed to GitHub

READY FOR NETLIFY DEPLOYMENT
```

---

## THEN: NETLIFY DEPLOYMENT (18 May, T+0)

Once I confirm readiness, follow **DEPLOYMENT_QUICK_REFERENCE.md**:

1. app.netlify.com → "Add new site" → Connect GitHub
2. Select branch: `auto-improve/core-web-vitals-phase4`
3. Build command: `pnpm build`
4. Publish dir: `dist`
5. Add env vars (VITE_GA_ID, VITE_GTM_ID)
6. Click "Deploy site" → wait for ✅

---

## PARALLEL TRACK: CONTENT BLOCKERS

While Michael deploys, you execute these in parallel:

### David: Call Alessandro (TODAY)
```
Agenda:
1. Menus finalized? (scope: 3 signature menus)
2. Photographer booked? (timeline, dates, budget)
3. When can you deliver photos? (target: 28 May)
4. Any blockers or constraints I should know?

Decision: Proceed with timeline or escalate?
```

**Report back**: "Alessandro call completed — [summary]"

### David: Call Paco (TODAY)
```
Agenda:
1. Service flow timeline (T-7 to T+4h, with specific times)
2. Deposit structure (%, when due, cancellation policy)
3. Payment methods (Stripe, bank, cash at villa, WhatsApp)
4. Can you document this by 21 May?

Decision: Full scope or reduced scope?
```

**Report back**: "Paco call completed — [summary]"

### David: Schedule Antonio Test Dinner (TODAY)
```
Contact Antonio:
1. Available for test dinner [DATE RANGE]?
2. Will you prepare your menu or use myCHEF template?
3. Location: [specific villa or kitchen]?
4. Who evaluates: David, Paco, Alessandro

Timeline: Dinner 20-22 May, decision by 22 May EOD
```

**Report back**: "Antonio test dinner scheduled for [DATE]"

---

## DAILY STATUS UPDATES (17-30 May)

**Every morning, post in chat**:

```
DAY [X] STATUS UPDATE — [Date]

COMPLETED TODAY:
- [ ] Task [#]: ✅ [Brief status]
- [ ] Task [#]: ✅ [Brief status]

IN PROGRESS:
- [ ] Task [#]: [% complete], on track / at risk

BLOCKERS:
- [ ] [Issue]: Needs [Action], escalated to [Who]

NEXT 24H FOCUS:
1. [Task #]
2. [Task #]
```

---

## WEEKLY STANDUPS (Every Monday 10am UTC)

**Fill out this template**:

📋 **Reference**: WEEKLY_STANDUP_TEMPLATE.md (in project folder)

**Copy, fill, paste back to chat**:
```markdown
# Weekly Standup — [Date]

## Critical Blockers (Status)
- [ ] GA4/GTM: [Status]
- [ ] Alessandro Menus: [Status]
- [ ] Paco Service Flow: [Status]
- [ ] Antonio Decision: [Status]

## Progress (% complete)
- [ ] Technical: [%]
- [ ] Content: [%]
- [ ] Operations: [%]

## Risks & Escalations
- [ ] [Risk]: [Mitigation]

## Next Week's Top 3 Priorities
1. [Task]
2. [Task]
3. [Task]
```

---

## LAUNCH DAY PROTOCOL (18 May)

**Timing**: T+0 = deployment start

**Script**: Use LAUNCH_DAY_MONITORING_CHECKLIST.md

**Hourly Checks** (T+1, T+2, T+4, T+8, T+12, T+24):
```bash
# T+1h check
curl -I https://mychef.id  # Expect HTTP 200
```

**4-Hour Deep Check** (T+4h):
```
- [ ] GA4 firing (check DevTools Network)
- [ ] GTM firing (check GTM Assistant extension)
- [ ] CWV metrics (PageSpeed Insights)
- [ ] Site responsive (mobile test)
```

**24-Hour Report** (T+24h):
```
# Day 1 Launch Report

Uptime: [%]
GA4 Sessions: [#]
GA4 Organic Clicks: [#]
Avg Page Load: [Xs]
Core Web Vitals: [All Pass / Issue]

Issues Found:
- [Issue 1]: [Resolution]
- [Issue 2]: [Resolution]

Status: ✅ GO LIVE / 🔴 ROLLBACK NEEDED
```

---

## ESCALATION PROTOCOL

**If blocked** (can't resolve in < 30 min):

1. **Note the blocker** in chat with [BLOCKER] tag
2. **I acknowledge** and suggest fixes
3. **If unresolved in 48 hours** → Escalate to decision maker
4. **Decision made** → Document in MYCHEF_NORTHSTAR_REPORT_v1.0.md
5. **Continue execution**

Example:
```
[BLOCKER] Alessandro not responding to calls
- Attempted contact: [dates/times]
- Last response: [when]
- Impact: Menu delivery blocked
- Escalation: David to contact directly / alternative?
```

---

## LIVE DASHBOARD (Track Here)

I'll update CRITICAL_PATH_TASK_TRACKER.md as you report progress.

**Current Status** (as of today):
```
TIER 1: LAUNCH BLOCKERS — 0/10 COMPLETE
TIER 2: CONTENT BLOCKERS — 0/24 COMPLETE
TIER 3: B2B BLOCKERS — 0/10 COMPLETE
TIER 4: SEO/GROWTH — 0/10 STARTED
```

**After you report each day**, I'll update and reflect status back.

---

## YOUR IMMEDIATE NEXT STEPS (RIGHT NOW)

1. ✅ Run `launch_automation.sh` (should take 2 min)
2. ✅ Extract GA4 ID + GTM ID (should take 5 min)
3. ✅ Add to .env (should take 1 min)
4. ✅ Push to GitHub (should take 1 min)
5. ✅ Post status back to chat with: "READY FOR NETLIFY"

**Total time: ~10 minutes**

---

## I'M WAITING FOR YOUR REPORT

**Paste this back when done**:

```
✅ launch_automation.sh result: [PASSED / FAILED]
✅ GA4 ID: [G-XXXXXXXX]
✅ GTM ID: [GTM-XXXXXXX]
✅ GitHub push: [SUCCESS]
✅ Alessandro contacted: [YES/NO] — [summary]
✅ Paco contacted: [YES/NO] — [summary]
✅ Antonio test dinner: [SCHEDULED for DATE / PENDING]

STATUS: READY FOR NETLIFY DEPLOYMENT
```

**Once I see this, I'll:**
1. Verify all docs are in place
2. Give you DEPLOYMENT_QUICK_REFERENCE.md steps
3. Monitor your progress in real-time
4. Update the tracker as you execute

---

**Protocol Created**: 17 May 2026  
**Authority**: David (Owner) + Claude (Execution Agent)  
**Next Sync**: When you report back (step 1-5 complete)  

🚀 **Let's close this product.**

