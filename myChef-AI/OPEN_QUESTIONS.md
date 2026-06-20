# myCHEF Peter System — Open Questions & Decisions

**Status**: Awaiting your decisions  
**Created**: 2026-06-08  
**Owner**: You (business decisions), Herms (technical implementation)

---

## Table of Contents
1. [Business Decisions](#business-decisions)
2. [Technical Decisions](#technical-decisions)
3. [Data Strategy Decisions](#data-strategy-decisions)
4. [Quality & Learning Decisions](#quality--learning-decisions)
5. [Operations Decisions](#operations-decisions)

---

## Business Decisions

### Q1: What's Your Definition of "Success"?

**Question**: You said "80% conversion rate" — but conversion to what?

**Options**:
- ☐ A) 80% of conversations → Customer provides name/email (lead captured)
- ☐ B) 80% of conversations → Customer expresses serious interest (booking intent)
- ☐ C) 80% of conversations → Customer actually books and deposits money
- ☐ D) 80% of conversations → Actual completed event (chef shows up, customer happy)

**Why it matters**: 
- Option A is easy to hit but doesn't mean profit
- Option C takes 2-3 months to measure (delayed feedback)
- Different Peter strategies optimize for different definitions

**Your answer**: ___________________

---

### Q2: Who Are Your Top 3 Customer Segments?

**Question**: What types of customers give you the most revenue (or highest potential)?

**Common segments**:
- Expat families staying long-term
- Corporate events (100+ people)
- Wealthy couples for special occasions
- Villa owners (hire regularly)
- Wedding/retreat organizers
- Budget travelers

**Your answer**: 
1. _________________ (% of revenue: ___)
2. _________________ (% of revenue: ___)
3. _________________ (% of revenue: ___)

**Why it matters**: Peter's tone, pricing strategy, and objection handling should differ by segment. If families are 60% of revenue, Peter should be especially good at serving families.

---

### Q3: What's Your Biggest Loss Reason?

**Question**: When customers DON'T book, what's the #1 reason?

**Common reasons**:
- ☐ Price too high
- ☐ Can't confirm chef/quality
- ☐ Need to talk to someone first (trust issue)
- ☐ Timeline doesn't work (need it too fast or too far away)
- ☐ Menu/dietary concerns
- ☐ Other: _________________

**Your answer**: _________________ 

**Follow-up**: What % of lost customers fall into this category? ____%

**Why it matters**: Peter should be specifically trained to overcome your #1 objection.

---

### Q4: Price Sensitivity by Segment?

**Question**: For each segment, what's the price threshold where customers ghost you?

|Segment | Budget range they ask for | Where they say "too expensive" |
|--------|--------------------------|-------------------------------|
| ______ | IDR ______ — ______ | IDR ______ |
| ______ | IDR ______ — ______ | IDR ______ |
| ______ | IDR ______ — ______ | IDR ______ |

**Your answer**: (Fill in table above)

**Why it matters**: Peter should lead with pricing from the segment's "comfortable range" instead of the most expensive option.

---

### Q5: Do You Want Peter to Remember Repeat Customers?

**Question**: If Maria came 3 months ago and didn't book, and now she's back asking about availability in July — should Peter say "Welcome back, Maria! I remember you from last time..."?

**Options**:
- ☐ A) Yes, always remember repeat customers (builds relationship)
- ☐ B) Only remember if they're "hot" prospects (high-value)
- ☐ C) Never mention past conversations (fresh start)
- ☐ D) Let me decide case-by-case (Peter asks you)

**Your answer**: _________________

**Why it matters**: 
- Repeat customers might feel special (A) or cornered (C)
- Your gut feeling matters here

---

### Q6: Calendar/Follow-up Strategy?

**Question**: When a customer says "I'm coming in 3 months" — what should Peter do?

**Options**:
- ☐ A) Offer to send a reminder 1 month before
- ☐ B) Offer to send a reminder 2 weeks before
- ☐ C) Take their email and YOU will follow up manually
- ☐ D) Ask for their preferred contact date and lock it in
- ☐ E) Other: _________________

**Your answer**: _________________

**Why it matters**: 
- Automated reminders = scalable but maybe too pushy
- Manual = personalized but doesn't scale
- Your myCHEF culture should dictate this

---

## Technical Decisions

### Q7: Which LLM Provider for Peter?

**Question**: You said "DeepSeek" — but how?

**Options**:
- ☐ A) DeepSeek API (cloud-based, costs $$ per call)
- ☐ B) DeepSeek run locally on my VPS (cheaper, but slower)
- ☐ C) Use a mix (fast responses use DeepSeek cloud, detailed analysis uses local)
- ☐ D) Switch to Claude/GPT-4 (more reliable but more expensive)

**Your answer**: _________________

**If cloud**: Budget for LLM costs: $______/month

**Why it matters**: 
- Cloud DeepSeek: ~$0.001-0.002 per conversation (fast)
- Local DeepSeek: free but needs GPU hardware
- If you're running 50-100 conversations/day, cloud costs ~$50-100/month

---

### Q8: Database: Self-Hosted or Managed?

**Question**: Where should PostgreSQL live?

**Options**:
- ☐ A) Managed service (AWS RDS, DigitalOcean) — costs $$, easier
- ☐ B) Self-hosted on your VPS — cheaper, you manage it
- ☐ C) Hybrid (backup to managed service)

**Your answer**: _________________

**If self-hosted**: Do you have DevOps experience? ___________

**Why it matters**: 
- Managed: $20-50/month, automatic backups, you don't worry
- Self-hosted: $0/month but needs maintenance, monitoring, backup strategy

---

### Q9: Vector Database Choice?

**Question**: For semantic search (finding relevant knowledge + patterns), which?

**Options**:
- ☐ A) Weaviate (self-hosted, free, requires maintenance)
- ☐ B) Pinecone (cloud, ~$0.04 per 1M vectors, easier)
- ☐ C) PgVector (PostgreSQL extension, simple, good for small scale)
- ☐ D) Don't use vector search yet (start with simple keyword search)

**Your answer**: _________________

**Why it matters**: 
- Vector search = find most relevant patterns/knowledge per customer
- Without it, Peter always loads ALL knowledge (slow, expensive)
- COption C is simplest to start with

---

### Q10: WhatsApp Integration: Ready or Not?

**Question**: Do you already have WhatsApp Business API set up?

**Options**:
- ☐ A) Yes, it's already connected (Twilio / Meta)
- ☐ B) No, but I know how to set it up
- ☐ C) No, and I need help setting it up
- ☐ D) Not ready yet — let's start with website chat only

**Your answer**: _________________

**If yes**: 
- Which provider (Twilio / Meta Cloud API)? ___________
- What's the WhatsApp number? ___________________

**Why it matters**: 
- Website chat only = simpler to build first
- WhatsApp = much higher volume of messages (harder to handle)
- Recommendation: Start website chat only, add WhatsApp in Phase 2

---

### Q11: Telegram Support?

**Question**: Do you want Peter on Telegram?

**Options**:
- ☐ A) Yes, add from day one
- ☐ B) Later (after website + WhatsApp working)
- ☐ C) No

**Your answer**: _________________

**Why it matters**: 
- Telegram is easier than WhatsApp to integrate
- But you probably have fewer customers on Telegram
- Recommendation: Not urgent

---

## Data Strategy Decisions

### Q12: How Many Conversations Before Trusting a Pattern?

**Question**: If Peter handles the "price objection" well 3 times in a row → should he use that pattern confidently?

**Options**:
- ☐ A) 3-5 conversations = good enough (fast learning)
- ☐ B) 10-20 conversations = moderate confidence
- ☐ C) 50+ conversations = high confidence
- ☐ D) 100+ conversations = only then trust it

**Your answer**: _________________

**Why it matters**: 
- Lower threshold = Peter learns faster but might use bad patterns
- Higher threshold = slower learning but more reliable
- Recommendation: Start with 10-20, then increase as you get more data

---

### Q13: Should Patterns Be Segment-Specific?

**Question**: Is a "winning response" to the price objection the same for:
- A rich expat family? 
- A budget backpacker?
- A corporate event organizer?

**Answer**: Probably not.

**Options**:
- ☐ A) Use same patterns for everyone (simpler)
- ☐ B) Have segment-specific patterns (more effective but complex)
- ☐ C) Start with universal patterns, then segment after 50+ conversations

**Your answer**: _________________

**Why it matters**: 
- Corporate buyers might respond to ROI language
- Families might respond to "your kids will remember this forever"
- Same response won't work for both

---

### Q14: How Often Should Peter Check the Knowledge Base?

**Question**: When you update `/knowledge/pricing.md` with new family pricing — when should Peter know about it?

**Options**:
- ☐ A) Immediately (reload knowledge base on every message) — slow, expensive
- ☐ B) Every morning at 6 AM (reload once per day) — fast, but 24-hour delay
- ☐ C) Every hour (good balance)
- ☐ D) Only on deployment (need to redeploy to update Peter)

**Your answer**: _________________

**Why it matters**: 
- Option A = always accurate but costs more in API calls
- Option D = you have control but slower iteration
- Recommendation: Every 6 hours (compromise)

---

### Q15: What Data Do You Keep Forever?

**Question**: How long should conversation history stay in the system?

**Options**:
- ☐ A) Forever (never delete)
- ☐ B) 1 year (then archive)
- ☐ C) 6 months (then delete)
- ☐ D) 3 months (then delete)

**Your answer**: _________________

**Why it matters**: 
- Longer history = better for learning, but storage costs more
- Shorter history = cheaper, but you lose long-term patterns
- Recommendation: Keep raw data 1 year, archive after

---

## Quality & Learning Decisions

### Q16: Should the Judge Be Strict or Lenient?

**Question**: If Peter gives a warm but vague response, should the Judge score it high or low?

**Current rubric**: Conversion drive (15 pts) — "Clear next step offered"

**Options**:
- ☐ A) Strict: Must have explicit action (book, call, email) — 15 pts or 0 pts
- ☐ B) Lenient: Warm tone and general engagement counts — give partial credit
- ☐ C) Segmented: Strict for serious leads, lenient for exploratory

**Your answer**: _________________

**Why it matters**: 
- Strict judges are critical, drive improvement
- Lenient judges encourage Peter but don't push him
- Your philosophy matters here

---

### Q17: Should You Review Peter's Self-Assessment?

**Question**: When Peter scores his own response with "confidence: 92%" — should you spot-check those?

**Options**:
- ☐ A) Yes, spot-check 10% of conversations (quality control)
- ☐ B) Yes, spot-check any score between 45-55 (uncertain ones)
- ☐ C) No, trust the Judge agent (let the system run)
- ☐ D) Monthly audit (once a month, review 20-30 conversations)

**Your answer**: _________________

**Why it matters**: 
- Spot-checking = you catch Peter's blind spots
- No review = faster but riskier (Peter could develop bad habits)
- Recommendation: Start with monthly audit, adjust based on what you find

---

### Q18: When Should Peter Ask for Your Help?

**Question**: Peter is uncertain about something. Should he:

**Options**:
- ☐ A) Always ask you (safe but sounds non-expert)
- ☐ B) Only ask if very unsure (<70% confidence)
- ☐ C) Never ask (always commit to an answer, even if guessing)
- ☐ D) Smart: Ask for high-value customers, commit for others

**Your answer**: _________________

**Why it matters**: 
- Option A = safe but sounds like a chatbot
- Option B = balance, sounds human
- Option D = smart (high-value customers get better service)
- Recommendation: Option B ("Let me check that for you quickly")

---

### Q19: Should You Have a "Feedback SLA"?

**Question**: When Peter asks for information, how fast should you answer?

**Options**:
- ☐ A) Within 24 hours (daily priority)
- ☐ B) Within 1 week (when you have time)
- ☐ C) No SLA (whenever you get to it)
- ☐ D) Different SLA by urgency (4 hours for "urgent", 1 week for "nice to have")

**Your answer**: _________________

**Why it matters**: 
- If Peter waits 1 week for info, he loses 7 days of improvement
- If you answer in 2 hours, next conversation uses new knowledge
- This is the speed of your learning loop

---

## Operations Decisions

### Q20: Who Will Manage the System Day-to-Day?

**Question**: After Herms builds it, who maintains it?

**Options**:
- ☐ A) You (handle feedback, monitor Peter)
- ☐ B) A team member (dedicated role)
- ☐ C) Split: You handle business decisions, someone else handles tech
- ☐ D) Not sure yet

**Your answer**: _________________

**If team member**: _________________ (name)

**Why it matters**: 
- The system needs someone to give feedback daily
- If nobody owns it, Peter stops improving

---

### Q21: Alert Thresholds — When Should You Be Notified?

**Question**: Peter makes a mistake. How serious should it be before alerting you?

**Options**:
- ☐ A) Alert on ANY mistake (too noisy, you'll ignore it)
- ☐ B) Alert if score drops below 30 (customer clearly not happy)
- ☐ C) Alert if same mistake happens 3x in a row (pattern failure)
- ☐ D) Weekly summary only (no real-time alerts)

**Your answer**: _________________

**Why it matters**: 
- Too many alerts = you ignore them
- Too few alerts = you miss real problems
- Recommendation: Alert on patterns (same mistake 3x), not individual errors

---

### Q22: Should Peter Log to Google Analytics?

**Question**: Do you want every conversation tracked in Google Analytics?

**Options**:
- ☐ A) Yes, full event logging (every message)
- ☐ B) Only bookings (conversion events)
- ☐ C) Bookings + abandonments (key events)
- ☐ D) Not yet (focus on building first)

**Your answer**: _________________

**Why it matters**: 
- Logging costs money (GA4 is cheap but adds up)
- Logging gives you visibility (which channels convert best?)
- Recommendation: Log bookings + abandonments, not every message

---

### Q23: Cost Budget Per Month?

**Question**: What's acceptable monthly spend on this system?

**Breakdown**:
| Component | Estimated Cost | Your Budget |
|-----------|-----------------|-------------|
| LLM API (DeepSeek) | $50-100 | $_____ |
| Database | $20-50 | $_____ |
| Vector DB | $0-50 | $_____ |
| Vector embeddings | $0-30 | $_____ |
| Email (SendGrid) | $0-10 | $_____ |
| Storage/backups | $10-20 | $_____ |
| VPS (if new) | $10-50 | $_____ |
| **TOTAL** | **$160-310** | **$_____** |

**Your answer**: 
- Maximum acceptable: $_____ /month
- Preferred range: $_____ - $_____ /month

**Why it matters**: 
- Costs scale with volume (100 conversations/month vs 1000/month)
- You should set a budget so Herms can optimize accordingly

---

### Q24: Privacy & Data Compliance?

**Question**: Are you handling customer data from specific countries with regulations?

**Relevant if**:
- ☐ Customers from EU (GDPR applies)
- ☐ Customers from UK (UK GDPR)
- ☐ Customers from California (CCPA)
- ☐ Customers from anywhere (you want to be safe)

**Options**:
- ☐ A) No compliance concerns (all voluntary customers)
- ☐ B) Need GDPR compliance (have EU customers)
- ☐ C) Need privacy framework (encrypted conversations, data retention policy)

**Your answer**: _________________

**Why it matters**: 
- GDPR = customer can request deletion of data
- You need to be able to delete conversations if asked
- Recommendation: Add a "Delete this conversation" feature to CRM

---

### Q25: When Do You Want to Go Live?

**Question**: Timeline for each phase?

**Phase 1: Manual Testing**
- Start: 2026-06-08 (now)
- You + Herms test for: _____ weeks
- Goal: 30-50 test conversations

**Phase 2: CRM + Backend**
- Start: 2026-06-__ (date?)
- Build website chat: _____ weeks
- Goal: Website live with real customers

**Phase 3: WhatsApp Integration**
- Start: 2026-06-__ (date?)
- Add WhatsApp: _____ weeks
- Goal: Multi-channel live

**Overall deadline**: 2026-_____  (when do you want full system live?)

**Your answer**: 
- Phase 1: _____ weeks
- Phase 2: _____ weeks
- Phase 3: _____ weeks
- Full launch: 2026-_____

**Why it matters**: 
- Timeline affects scope (what gets cut if time is tight?)
- Your business needs dictate urgency

---

## Summary: Fill-In-Order

**Herms**: Use this priority order to know which questions to ask first:

### **BLOCKING QUESTIONS** (Answer these before building)
- Q1: Definition of "success" 
- Q3: What's your biggest loss reason?
- Q10: WhatsApp integration status?
- Q25: Timeline?

### **IMPORTANT QUESTIONS** (Answer before Phase 2)
- Q2: Top 3 segments
- Q7: Which LLM provider?
- Q8: Database setup
- Q20: Who manages it?
- Q23: Budget

### **NICE-TO-KNOW** (Answer but doesn't block)
- Q4-6, Q9, Q11-24

---

**Next Steps**:
1. Print this document
2. Answer each question
3. Share answers with Herms
4. Herms builds system based on your answers

