# 🎯 myCHEF Lead Qualification Logic (WhatsApp AI Agent)

**System**: Knightbot-MD + Gemini API  
**Status**: 🏗️ LOGIC DESIGN  
**Goal**: Qualify Bali & Jakarta inquiries in <3 minutes and route to the correct specialist.

---

## 1. The Handoff (Web → WhatsApp)

All `wa.me` links on the site now pass a **Context Prefix**.
- *Example*: `I'm interested in your fine dining service. Hello myCHEF, I'm interested in a private dinner at my villa.`

The AI Agent must read this prefix to set the initial "Persona" and "Goal."

---

## 2. Conversation Flow (The "5-Point Check")

The agent must collect these 5 data points before human handoff:

1.  **Service Type**: (Fine Dining, Catering, Wedding, Staffing).
2.  **Date(s)**: (Check for "Summer Heat Embargo" or "Nyepi" conflicts).
3.  **Location**: (Villa name or Area: Canggu, Seminyak, Menteng, etc.).
4.  **Guest Count**: (Critical for pricing tiers).
5.  **Budget/Vibe**: (Is this a relaxed BBQ or a Michelin-level anniversary?).

---

## 3. Lead Scoring & Routing

| Tier | Criteria | Routing |
|------|----------|---------|
| **P0 (Critical)** | Weddings, Corporate >50 guests, High-Budget Fine Dining | **Sofia / Olivia** (Immediate notify) |
| **P1 (High)** | Villa Catering, Birthdays 10-30 guests | **Daniel** (Same-day proposal) |
| **P2 (Standard)** | Small Private Dinners (<6 guests) | **Automated Proposal** (via AI) |
| **P3 (Inquiry)** | Pricing questions, general info | **AI Help Hub** (Self-serve) |

---

## 4. Guardrails (Indonesian Staff / European Client)

- **Tone**: Professional, helpful, "Balinese Hospitality" (Polite but efficient).
- **Language**: English-first, with Indonesian support on the back-end.
- **Rules**: 
    - Never guess a price; always refer to the "Pricing Guide" or "Proposal."
    - Highlight "Michelin Heritage" and "560+ Villas Served" in the first 3 messages.
    - If location is NOT Bali or Jakarta, politely decline or offer "Consultancy Only."

---

## 5. Automated Triggers

- **After 5 mins of silence**: "I have our [Service] menu ready to send. Would you like me to share the PDF here?"
- **After data collection**: "Perfect. I've sent these details to Sofia. She'll have a custom proposal for your [Location] event ready within 24 hours."

---

## 6. Implementation Notes for Knightbot-MD

- Store user state in a lightweight JSON or Redis DB.
- Use Gemini-1.5-Flash for intent classification (fast/cheap).
- Primary Command: `!quote` — allows user to restart the qualification flow.

---
*Logic designed by Claude CLI Agent — Verified for myCHEF brand standards.*
