# myCHEF Peter System — Complete Documentation

**Last Updated**: 2026-06-08  
**Status**: Ready for implementation  
**For**: [You] + Herms

---

## 📋 Quick Navigation

You have 4 main documents. Here's what each is for:

| Document | Purpose | For Whom | Read Time |
|----------|---------|----------|-----------|
| **README_SYSTEM_OVERVIEW.md** | This file — explains what to read and when | Everyone | 5 min |
| **SYSTEM_SETUP_REQUIREMENTS.md** | Complete technical specs — what to build | Herms | 30 min |
| **OPEN_QUESTIONS.md** | 25 business/tech decisions you need to make | You (as owner) | 45 min |
| **IMPLEMENTATION_ROADMAP.md** | Step-by-step how to build it, in order | Herms (as builder) | 30 min |

### ⭐ New daily files & build spec (added 2026-06-08)

| File | Purpose | For whom |
|------|---------|----------|
| **CONTROL_PANEL.md** | The ONE place to change names, prices, deposit, contact, channels | You |
| **QUESTIONS_FOR_DAVID.md** | Living Q&A log — we ask, you answer over time | You |
| **WEBSITE_ALIGNMENT.md** | Live mychef.id vs what Peter says (site is healthy — correction logged) | You + Hermes |
| **FEEDBACK_APP_SPEC.md** | Your private login panel: feedback, chat, calendar, upload + Telegram alerts | Hermes |
| **HERMES_BRIEFING.md** | Developer onboarding + build order — Hermes starts here | Hermes |
| **setup/** | VPS, email, Google Analytics, vector DB, database/CRM connection guides | Hermes |

**Architecture locked:** always-on VPS · one shared Postgres · standalone feedback panel ·
real-time Telegram operator line. See `HERMES_BRIEFING.md` for how it all connects.

---

## 🎯 What This System Does

**Problem**: You get lots of customer inquiries, but many go nowhere. People ask for prices, ghost you, or waste your team's time. You need to:
- Qualify leads automatically
- Learn what questions/objections matter
- Get faster to "yes" or "no"
- Build institutional knowledge

**Solution**: Peter (AI chatbot) + Judge (scoring) + Hermes (learning loop)

```
Customers message Peter on website/WhatsApp
           ↓
Peter gives warm, informed response
           ↓
Judge scores the conversation (0-100)
           ↓
You review & give feedback in CRM dashboard
           ↓
Hermes learns nightly, updates knowledge base
           ↓
Next customer gets a smarter Peter
```

**Goal**: 80% conversion rate + learn what your customers actually need

---

## 🚀 Where to Start

### If you're [You] (Business Owner/Manager)

**You need to do this FIRST:**

1. **Read**: OPEN_QUESTIONS.md (45 minutes)
   - Answer all 25 questions (or at least the "BLOCKING" ones)
   - Print it out, take your time
   
2. **Share answers** with Herms
   - These answers become the blueprint for building
   
3. **Plan your feedback process**
   - How often will you review conversations? (Daily? Weekly?)
   - Who will give feedback? (Just you? A team member?)
   - What's an acceptable error rate from Peter?

4. **Test with Herms** (Phase 1)
   - You + Herms run 20-30 manual test conversations
   - You see if Peter sounds good to you
   - You score conversations to calibrate the Judge
   - You're testing the *quality* before building the *infrastructure*

**Deliverable**: You've answered OPEN_QUESTIONS.md → Herms can now build with confidence

---

### If you're Herms (Developer)

**You need to do this:**

1. **Read**: SYSTEM_SETUP_REQUIREMENTS.md (30 minutes)
   - Understand the architecture
   - Understand the data model
   - Know what components exist

2. **Read**: IMPLEMENTATION_ROADMAP.md (30 minutes)
   - This is your step-by-step todo list
   - Phase 1 = foundation (weeks 1-2)
   - Phase 2 = dashboard + website chat (weeks 2-3)
   - Phase 3 = WhatsApp + automation (weeks 3-4)

3. **Ask [You] the BLOCKING questions** (from OPEN_QUESTIONS.md)
   - Q1, Q3, Q10, Q25 — you need answers before starting
   - The other questions can be decided as you build

4. **Start with Phase 1** (don't jump to Phase 3 yet)
   - Week 1: Database + Peter agent + Judge agent + CLI testing
   - Test with [You] running manual conversations
   - Make sure Peter sounds good before building the UI
   - Iterate on prompts/knowledge based on feedback

5. **Then Phase 2** (after Phase 1 works)
   - Build CRM dashboard
   - Build website chat widget
   - Launch with real customers
   - Iterate on [You]'s feedback

6. **Then Phase 3** (after Phase 2 stable)
   - Add WhatsApp
   - Add email reports
   - Full automation

---

## 📊 System Architecture (Visual)

```
┌─────────────────────────────────────────────────────────────────┐
│                    CUSTOMER TOUCHPOINTS                         │
│  ┌──────────────────┬──────────────────┬──────────────────┐    │
│  │  Website Chat    │   WhatsApp       │   (Future: Telegram) │
│  └────────┬─────────┴────────┬─────────┴──────────────────┘    │
│           │                  │                                   │
└───────────┼──────────────────┼───────────────────────────────────┘
            │                  │
            ▼                  ▼
        ┌──────────────────────────────┐
        │    PETER AGENT (DeepSeek)    │
        │  ┌──────────────────────────┐│
        │  │ System Prompt:           ││
        │  │ • Peter's personality    ││
        │  │ • Knowledge base         ││
        │  │ • Top patterns (3-5)     ││
        │  │ • Customer history       ││
        │  │ • Segment info           ││
        │  └──────────────────────────┘│
        │  Output:                     │
        │  • Warm response            │
        │  • Confidence score         │
        │  • "I need X" requests      │
        └────────────┬─────────────────┘
                     │
         ┌───────────┴──────────────┐
         │                          │
         ▼                          ▼
    STORE IN DB              GOOGLE ANALYTICS
    - Full conversation       (event logging)
    - Peter response
    - Customer message
    - Metadata
         │
         ▼
    ┌──────────────────────────────┐
    │   JUDGE AGENT (Claude/GPT)   │
    │  Scores 0-100 on 6 dimensions│
    │  • Accuracy                  │
    │  • Needs discovery           │
    │  • Recommendation fit        │
    │  • Objection handling        │
    │  • Conversion drive          │
    │  • Tone & policy             │
    └────────────┬─────────────────┘
                 │
         ┌───────┴────────┐
         │                │
         ▼                ▼
    STORE SCORE    ┌──────────────────────┐
                   │  CRM DASHBOARD       │
                   │  (Your web UI)       │
                   │  Shows:              │
                   │  • All conversations │
                   │  • Scores            │
                   │  • Feedback form     │
                   │  • Peter requests    │
                   └────────┬─────────────┘
                            │
                    ┌───────▼──────────┐
                    │  YOU GIVE        │
                    │  FEEDBACK        │
                    │  • What worked   │
                    │  • What missed   │
                    │  • Answers to    │
                    │    Peter's Q's   │
                    │  • Customer      │
                    │    segment info  │
                    └────────┬─────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
      UPDATE KNOWLEDGE BASE       STORE YOUR FEEDBACK
      /knowledge/                 (in database)
      • pricing.md
      • faq.md
      • policies.md
              │
              └──────────────┬──────────────┐
                             │              │
                    ┌────────▼─────────┐   │
                    │  NIGHTLY LOOP    │   │
                    │  (Hermes)        │   │
                    │  1. Read data    │◄──┘
                    │  2. Extract      │
                    │     patterns     │
                    │  3. Update       │
                    │     learning/    │
                    │  4. Generate     │
                    │     daily report │
                    │  5. Email report │
                    │     to you       │
                    └────────┬─────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
      NEXT CUSTOMER        YOUR DAILY REPORT
      Gets smarter Peter    Email shows:
                            • What worked today
                            • Peter still needs
                            • Emerging patterns
                            • Conversion rate
                            • Top objections
```

---

## 📂 File Structure (What You'll Have)

```
myChef-AI/
├── README_SYSTEM_OVERVIEW.md ← YOU ARE HERE
├── SYSTEM_SETUP_REQUIREMENTS.md (Herms' spec doc)
├── OPEN_QUESTIONS.md (Your decisions)
├── IMPLEMENTATION_ROADMAP.md (Herms' step-by-step)
├── CONFIG.md (API keys, secrets — DO NOT COMMIT)
│
├── backend/                    ← Herms builds this
│   ├── api/
│   ├── agents/
│   ├── db/
│   └── server.js
│
├── frontend/                   ← Herms builds this
│   ├── pages/
│   ├── components/
│   └── App.jsx
│
├── prompts/                    ← You + Herms refine this
│   ├── peter_persona.md (Peter's character)
│   ├── judge_agent.md (Scoring rubric)
│   └── hermes_guardrail.md (Learning loop)
│
├── knowledge/                  ← YOU UPDATE THIS
│   ├── pricing.md (All pricing options)
│   ├── faq.md (Frequently asked questions)
│   ├── policies.md (Business rules)
│   ├── services.md (What you offer)
│   └── company_knowledge.md (Who you are)
│
├── learning/                   ← HERMES UPDATES THIS NIGHTLY
│   ├── customer_patterns.md (Winning responses)
│   ├── objections.md (What kills deals)
│   ├── customer_patterns_by_segment.md
│   └── best_replies.md
│
├── training/
│   ├── sessions/ (All conversations as JSON)
│   ├── good_conversations/
│   ├── bad_conversations/
│   └── golden_examples/
│
├── analytics/
│   ├── scores.csv (Session scores over time)
│   ├── successful_bookings.csv
│   └── failed_bookings.csv
│
└── vector-db/
    └── embeddings/ (For semantic search)
```

---

## 🔄 The Daily Workflow (After Phase 2+)

### Morning
1. Wake up, check email for **Daily Learning Report**
2. See: What worked yesterday, what Peter struggled with, what he needs

### During Day
1. Customers message Peter on website/WhatsApp
2. Peter responds (you don't see it yet, happening in background)

### Evening (when you have 15 minutes)
1. Log into **CRM Dashboard**
2. See all conversations from today
3. Review ones you want to give feedback on (maybe 5-10)
4. Click "Give Feedback" and spend 2 min per conversation:
   - "What did Peter do well?" → ___
   - "What did Peter miss?" → ___
   - "Here's the answer to his question:" → ___
   - "This is a [family/corporate/etc] customer" → ___
5. Save feedback

### Next Morning
1. Hermes ran overnight (23:00 UTC)
2. Hermes read today's conversations + your feedback
3. Hermes updated `/learning/` and `/knowledge/`
4. Hermes generated daily report
5. Next customer Peter talks to uses updated knowledge

**Result**: Every day, Peter gets smarter.

---

## 💰 Rough Costs

| Phase | LLM | Database | Vector Search | Total |
|-------|-----|----------|----------------|-------|
| Phase 1 (manual) | $0 (testing) | $0 | $0 | $0 |
| Phase 2 (website) | $20-30/mo | $20/mo | $0 | $40-50/mo |
| Phase 3 (full) | $50-75/mo | $20/mo | $20/mo | $90-115/mo |

**Notes**:
- Costs assume 500-1000 conversations/month
- Can optimize down to $60-80/mo with cheaper models
- Your VPS might already have the database capability

---

## ✅ Checklist: Before Starting Phase 1

**[You] must:**
- [ ] Answer BLOCKING questions in OPEN_QUESTIONS.md
  - [ ] Q1: Definition of success?
  - [ ] Q3: Biggest objection?
  - [ ] Q10: WhatsApp ready?
  - [ ] Q25: Timeline?
- [ ] Share answers with Herms
- [ ] Commit to reviewing conversations 3-4x/week (Phase 1 testing)

**Herms must:**
- [ ] Review SYSTEM_SETUP_REQUIREMENTS.md
- [ ] Review IMPLEMENTATION_ROADMAP.md
- [ ] Ask [You] any clarifying questions
- [ ] Set up development environment
- [ ] Create git repo with proper .gitignore

**Then**: Start Phase 1 (week 1-2)

---

## 🎓 Learning Resources for Herms

### For Node.js Backend
- Express.js: [expressjs.com](https://expressjs.com)
- PostgreSQL + node-postgres: [node-postgres.com](https://node-postgres.com)
- LLM integration: [LangChain JS docs](https://js.langchain.com)

### For React Frontend
- React docs: [react.dev](https://react.dev)
- Next.js: [nextjs.org](https://nextjs.org)

### For Specific Integrations
- DeepSeek API: [platform.deepseek.com](https://platform.deepseek.com)
- Twilio WhatsApp: [twilio.com/whatsapp](https://twilio.com/whatsapp)
- SendGrid: [sendgrid.com](https://sendgrid.com)
- Pinecone/Weaviate: Vector DB docs

---

## 🆘 Troubleshooting Guide

**Q: Peter is sounding robotic**
- A: He needs a better system prompt. See `prompts/peter_persona.md`. Make it more casual, shorter responses, WhatsApp-style.

**Q: Judge is scoring too high/low**
- A: Recalibrate. You + Herms score 10 test conversations together. Adjust rubric based on disagreements.

**Q: Conversations aren't being stored**
- A: Check: 1) Is database running? 2) Is schema created? 3) Are connection strings correct?

**Q: DeepSeek API is slow**
- A: 1) Switch to cached knowledge/patterns (don't load all). 2) Use cheaper model (DeepSeek has multiple). 3) Add local fallback.

**Q: Customers complain Peter isn't answering their question**
- A: 1) Check if knowledge base has the answer. 2) If not, add it via CRM feedback. 3) Check if Peter's system prompt is including the knowledge correctly.

---

## 📞 Communication Plan

**[You] ↔ Herms Weekly Checklist**:

Each week, check in on:
1. [ ] Is Phase still on track?
2. [ ] Any blockers Herms needs help with?
3. [ ] Any customer feedback that changes the direction?
4. [ ] Review test conversations (if Phase 1)
5. [ ] Update timeline/scope if needed

---

## 🎉 Success = When You See This

✅ Website chat working (real customers can message)  
✅ You review 5 conversations in CRM dashboard  
✅ You give feedback, next Peter conversation uses updated knowledge  
✅ Daily report shows you what worked/didn't  
✅ Conversion rate trending toward 80%  
✅ Peter recognizing repeat customers  
✅ New FAQ questions appearing from customer messages  
✅ Pricing strategy documented from what customers ask  
✅ Your team spending less time on initial qualification  

---

## 📞 Questions? Start Here

**If [You] are unsure about a business decision**:
→ See OPEN_QUESTIONS.md (it probably has your question)

**If Herms is unsure about architecture**:
→ See SYSTEM_SETUP_REQUIREMENTS.md (scroll to relevant section)

**If Herms is unsure about next step**:
→ See IMPLEMENTATION_ROADMAP.md (phase-by-phase)

**If both are stuck**:
→ Look at existing `/KUNDE TEST/` folder for examples

---

## 🚀 Ready? Let's Go

1. **[You]**: Spend 45 min → Answer OPEN_QUESTIONS.md
2. **Herms**: Spend 30 min → Read SYSTEM_SETUP_REQUIREMENTS.md
3. **Herms**: Spend 30 min → Read IMPLEMENTATION_ROADMAP.md
4. **Both**: Sync on blocking questions
5. **Both**: Start Phase 1 (next Monday?)

---

**Document Version**: 1.0  
**Last Updated**: 2026-06-08  
**Status**: Ready for implementation

Good luck! 🎯

