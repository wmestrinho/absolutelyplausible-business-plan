# Business Strategy — Robot Fantôme Ventures

> *"A mechanic who codes, builds AI agents, and plays punk rock walks into a market gap..."*

**Author:** Fantome 👻 + Luiz Mestrinho
**Created:** 2026-03-01
**Last updated:** 2026-03-01
**Review cycle:** Monthly

---

## Business Structure — The Distinction

**Robot Fantôme** is OUR business — the umbrella brand for everything we build, sell, and create.

**hackFatura** is a CLIENT PROJECT — built for **Parazinho Chassis Jig (PCJ)**, owned by **Thiago Pereira** (Luiz's current boss). hackFatura uses PCJ's brand (black/red/graphite cyberpunk). It is NOT our brand.

| | Robot Fantôme (Us) | Client Projects (hackFatura, etc.) |
|---|---|---|
| **Brand** | Clean, white, editorial, minimalist | Client's own (PCJ = cyberpunk dark) |
| **Domain** | robotfantome.com | mech.robotfantome.com (subdomain) |
| **Revenue** | Consulting, content, SaaS, products | Client deliverable → portfolio + case study |
| **Music** | Infused in OUR content only | Not in client deliverables |

See `BRAND.md` for full visual identity guide.

---

## The Unfair Advantage

Most founders have one skill. You have a rare stack:

- **19 years** in niche motorsport mechanics (karting chassis — since 2007)
- **Builder** — you ship real software (hackFatura for PCJ: zero-cost field app, live in a single session)
- **AI-native** — you run your own agent infrastructure, understand automation deeply
- **100% OSS + sustainability values** — this is a brand differentiator, not a constraint
- **Original music** — robot fantôme tracks infused into OUR content (unique sonic brand, no licensing costs, no one else sounds like you)
- **Brand identity** — "robot fantôme" is memorable, clean editorial aesthetic, the mechanic-coder-musician story

The play: **monetize the intersection**, not any single skill in isolation.

---

## Revenue Acceleration Philosophy

Speed to first dollar matters more than perfection. Every plan below has a **Quick Win** — something that can generate revenue in Week 1-2 with zero new infrastructure.

Three rules:
1. **Sell before you build.** Pre-sell, consult, audit — validate with money, not likes.
2. **Charge on Day 1.** Free tiers come later. Early adopters pay because the alternative (paper, spreadsheets, doing nothing) costs them more in time.
3. **Stack income sources.** No single stream needs to be huge. Five streams at $500 > one stream at $2,500 (more stable, more resilient).

---

## PLAN A: hackFatura → SaaS Product

### Thesis

hackFatura started as a client project for PCJ (Thiago's business). But the problem it solves — field invoicing, chassis tracking, event management for traveling mechanics — is **universal in motorsport.** Every other mechanic has the same problem. There is no good tool for this. They use paper.

The play: **turn the architecture into a SaaS product** that any mechanic can sign up for, under the Robot Fantôme brand. PCJ was the first customer. Everyone else pays.

### 🔥 Quick Win (Week 1-2): Sell Custom Builds

You don't need multi-tenancy to make money. **Sell custom-branded builds right now.**

- Take the hackFatura architecture (not PCJ's branding)
- Build the client's version with THEIR branding, THEIR colors, THEIR business info
- Set up their Google Sheet + Apps Script
- Deploy to their GitHub Pages
- **Price: $300-500 per setup** (takes you 2-3 hours with Fantome helping)
- Target: other karting mechanics you already know
- **Credit line:** "Built by Robot Fantôme" in the footer

This is money in the door while you build the SaaS version. Every custom build is also a beta tester and a case study. And every one of them becomes a portfolio piece on robotfantome.com.

### Target Market

- **Primary:** Traveling karting mechanics in North America (~200-500 active operators)
- **Secondary:** Karting teams and shops that do trackside service (~1,000+)
- **Tertiary:** Other motorsport field mechanics (sprint cars, dirt track, motocross pit crews)
- **Long tail:** Any mobile/field service business (mobile welders, on-site repair, event-based trades)

### Revenue Model (SaaS — Month 3+)

| Tier | Price | Features |
|------|-------|----------|
| **Starter** | $9/mo | Single user, 100 invoices/mo, basic dashboard, "Powered by hackFatura" footer |
| **Pro** | $29/mo | Multi-user (up to 5), unlimited invoices, custom branding, PDF export, full event dashboard |
| **Team** | $59/mo | Unlimited users, multi-location, analytics, priority support, API access |

*Note: No free tier at launch. People who pay give better feedback than people who don't. Add a free tier later (Month 6+) once the product is proven and you want volume.*

### Why This Works

- **You ARE the customer.** You know the pain better than any product manager ever will.
- **Zero CAC potential.** You're AT the tracks 80+ events/year. Every mechanic you talk to is a potential user.
- **Switching cost is high** once someone's invoices and customer data live in your system.
- **Zero-cost stack** means you're profitable from customer #1.
- **Custom builds generate cash flow** while SaaS catches up.

### What Needs to Change (for SaaS)

1. **Multi-tenancy** — each business gets their own workspace (PocketBase or Supabase for real DB — both free tier)
2. **Auth** — Google OAuth (free, everyone has Google)
3. **Onboarding flow** — sign up → name your business → set pricing → upload logo → go
4. **Branding customization** — logo, colors, business info
5. **Landing page** — `hackfatura.com` or `mech.robotfantome.com`
6. **Payment** — Stripe (2.9% + 30¢, no monthly fee)

### Revenue Projection

| Month | Custom Builds | SaaS Users | MRR |
|-------|--------------|------------|-----|
| 1 | 1-2 ($300-1,000) | 0 | $300-1,000 (one-time) |
| 2 | 2-3 ($600-1,500) | 0 | $600-1,500 (one-time) |
| 3 | 1-2 | 5 (Starter/Pro) | $100-200 + builds |
| 6 | on-demand | 15-25 | $300-600 |

### Risks

- Niche market = ceiling on growth (mitigated by expanding to other motorsports)
- Google Sheets backend won't scale past ~50 concurrent users (migration planned)
- Custom builds don't scale (transition to SaaS by Month 3)

---

## PLAN B: AI Automation Consulting — Sell What You Know

### Thesis

You built an entire business app in one session using AI agents, zero-cost architecture, and open-source tools. Most small business owners can't do that. Most developers don't think about zero-cost stacks. You sit at the intersection of **"understands real business problems"** and **"can automate them with AI."**

### 🔥 Quick Win (Week 1): AI Audits

An AI Audit is the lowest-friction sale possible:
- 30-minute call (Zoom/Google Meet — free)
- You look at their business, identify 3-5 things to automate
- Deliver a 1-page written report with recommendations and cost estimates
- **Price: $150** (or $0 if they commit to a project within 30 days — "free audit" becomes lead gen)
- **Time to deliver: 1 hour total** (30 min call + 30 min writing)

You can do your first AI Audit **this week**. Anyone in your network running a small business qualifies.

### Target Market

- **Primary:** Small business owners (1-20 employees) drowning in manual processes
- **Secondary:** Solopreneurs and freelancers who want to automate back office
- **Tertiary:** Non-technical founders who need an MVP built fast and cheap
- **Karting adjacent:** Karting shop owners, team managers, event organizers (you already know them)

### Service Offerings

| Service | Price | Deliverable | Time to Deliver |
|---------|-------|-------------|-----------------|
| **AI Audit** | $150 | 30-min call + written report | 1 hour |
| **Workflow Build** | $500-2,000 | Custom automation (Sheets + Apps Script + integrations) | 1-3 days |
| **Zero-Cost MVP** | $2,000-5,000 | Full app like hackFatura (frontend + backend + CI/CD) | 1-2 weeks |
| **Monthly Retainer** | $500-1,000/mo | Ongoing maintenance, new automations, support | ~5-10 hrs/mo |

### The Robot Fantôme Positioning

**Anti-agency. Anti-bloat. Anti-vendor-lock-in.**

- "I build real business tools for $0/month. No subscriptions. No hosting fees. You own everything."
- "I'm a mechanic who automates his own business. I'll do the same for yours."
- "Open-source, zero-waste, zero-bullshit."

All consulting work ships under the **Robot Fantôme** brand. Client deliverables use the CLIENT's brand — we're the builder behind the scenes. Our name shows up as a subtle credit + portfolio entry on robotfantome.com.

This positioning attracts cost-conscious small business owners who are sick of paying $200/mo for tools they barely use. That's a massive market.

### Client Acquisition (Priority Order)

1. **Warm network** — people you already know (karting community, local businesses, friends of friends)
2. **LinkedIn** — "Building in public" content (Plan C drives this)
3. **robotfantome.com/consulting** — portfolio + booking page
4. **Upwork/Fiverr** (temporary) — take 2-3 gigs to build reviews, then graduate to direct clients
5. **Referrals** — every happy client refers 1-2 more

### Revenue Projection

| Month | AI Audits | Projects | Retainers | Revenue |
|-------|-----------|----------|-----------|---------|
| 1 | 2-3 | 0-1 | 0 | $300-950 |
| 2 | 3-4 | 1-2 | 0 | $650-2,600 |
| 3 | 3-4 | 1-2 | 1 | $1,150-3,600 |
| 6 | 2-3 | 2-3 | 2-3 | $2,300-6,450 |

### Risks

- Feast-or-famine income cycle (mitigated by retainers — push for these early)
- Time conflict with mechanic work (mitigated by async delivery and AI-assisted builds)
- Need to build reputation first (mitigated by warm network + LinkedIn content)

---

## PLAN C: Content + Education — Build in Public

### Thesis

Your story is genuinely interesting: a traveling karting mechanic who builds his own AI-powered business tools, runs his own agent infrastructure, and makes his own music. Content is the **force multiplier** for Plans A and B. But it also has its own revenue path.

### 🔥 Quick Win (Week 2): Sell a Digital Product

You already have the knowledge. Package it immediately:

**Product: "Zero-Cost Business App Blueprint"** — $19-29
- A step-by-step guide: how to build a business app with $0/mo running costs
- Includes: architecture template, Google Apps Script starter, GitHub Pages setup, jsPDF invoice template
- Sell on Gumroad (free until you make money — they take 10%)
- Write it in 2-3 hours. Sell it forever.

This is money on autopilot while you sleep.

### Content Pillars

1. **"Zero-Cost Tech"** — How to build real business tools for $0/month
   - hackFatura breakdowns, Google Apps Script tricks, GitHub Pages deployments
   - Target: indie hackers, bootstrappers, non-technical founders

2. **"AI for Real Work"** — Practical AI automation (not hype)
   - Agent workflows, prompt engineering for business, automation case studies
   - Target: small business owners, solopreneurs, developers

3. **"Mechanic Who Codes"** — The personal brand story
   - Behind-the-scenes at karting events, building tools trackside, the traveling life
   - Target: general audience, karting community, maker culture

4. **"OSS & Sustainability"** — Open-source everything, zero-waste tech
   - Why free beats paid, reducing cloud waste, sustainability in tech
   - Target: OSS community, sustainability-minded builders

### 🎵 Music as a Content Weapon

robot fantôme music is infused into **everything**:
- YouTube video intros/outros — unique sonic identity
- Tutorial background music — your tracks, your brand
- Podcast/content jingles — instant recognition
- Product launch moments — drop a new track with a product launch
- No licensing costs, no copyright strikes, 100% owned

This is a moat. No other tech content creator has their own punk rock soundtrack. It makes every piece of content feel different and memorable.

### Channels (Priority Order)

| Channel | Content Type | Frequency | Why |
|---------|-------------|-----------|-----|
| **LinkedIn** | Written posts, case studies | 3-4x/week | Highest ROI for B2B consulting leads |
| **YouTube** | Tutorials, build sessions | 1-2x/week | Long-form discovery, evergreen SEO, music showcase |
| **Newsletter** | Weekly digest + insights | 1x/week | Owned audience, direct relationship |
| **GitHub** | Open-source tools, templates | Ongoing | Developer credibility |
| **Twitter/X** | Short takes, threads | Daily | Discoverability, networking |
| **Gumroad** | Digital products | Ongoing | Passive income |

### Monetization Timeline

| When | What | Revenue |
|------|------|---------|
| Week 2 | "Zero-Cost Business App Blueprint" on Gumroad | $19-29/sale |
| Month 2 | Consulting leads from LinkedIn content | $500-1,500/mo (attributed) |
| Month 3 | hackFatura landing page + signup from content | $100-300/mo |
| Month 4 | Template pack: "5 Google Apps Script Business Templates" ($39) | Passive |
| Month 5 | Course pre-sale: "Build Your Business Tools with AI" ($99-149) | $1,000-3,000 (launch) |
| Month 6 | Newsletter sponsorships (750+ subscribers) | $200-400/issue |

### Revenue Projection

| Month | Digital Products | Course | Sponsorships | Total |
|-------|-----------------|--------|-------------|-------|
| 1 | $50-150 | $0 | $0 | $50-150 |
| 2 | $100-300 | $0 | $0 | $100-300 |
| 3 | $150-400 | $0 | $0 | $150-400 |
| 6 | $300-600 | $1,000-3,000 (launch) | $200-400 | $1,500-4,000 |

### Risks

- Content takes time to compound (3-6 months before real traction)
- Consistency is hard while traveling for mechanic work
- Video production requires equipment and editing time (mitigated by AI tools + phone recording + your own music)

---

## THE STACK: How They Reinforce Each Other

```
Month 1 (NOW):
├── [PLAN B] First AI Audits → immediate cash
├── [PLAN A] hackFatura custom builds → cash + case studies
├── [PLAN C] First LinkedIn posts + Gumroad product → leads + passive income
└── [MUSIC] Record intro/outro clips for future content

Month 2-3:
├── [PLAN B] Projects + first retainer → stable recurring
├── [PLAN A] Multi-tenant SaaS launch → MRR begins
├── [PLAN C] YouTube launches with original music → audience grows
└── Content → drives consulting leads AND SaaS signups

Month 4-6:
├── All three streams generating revenue
├── Content flywheel spinning (leads → clients → case studies → content)
├── Course launch amplifies everything
└── Target: $2,500-5,000/mo combined
```

### The Flywheel

```
     Content + Music (Plan C)
          ↙         ↘
     Credibility    Audience
          ↓            ↓
     Consulting     hackFatura
     (Plan B)       (Plan A)
          ↘         ↙
       Case Studies + Revenue
          ↓
       More Content → repeat
```

### The Brand Umbrella: robotfantome.com

| Page | Purpose |
|------|---------|
| `/` | Who you are, what you do (portfolio + story) |
| `/consulting` | AI automation services, booking, packages |
| `/hackfatura` | SaaS product (or redirect to mech.robotfantome.com) |
| `/blog` | Content hub (repurposed from LinkedIn/YouTube) |
| `/newsletter` | Signup + archive |
| `/shop` | Digital products (or redirect to Gumroad) |
| `/music` | robot fantôme — the band, the sound, the vibe |

---

## Total Revenue Projection (Hybrid, 6 Months)

| Source | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| hackFatura (builds + SaaS) | $300-1,000 | $400-1,200 | $300-600 MRR |
| Consulting | $300-950 | $1,150-3,600 | $2,300-6,450 |
| Digital Products + Content | $50-150 | $150-400 | $1,500-4,000 |
| **Monthly Total** | **$650-2,100** | **$1,700-5,200** | **$4,100-11,050** |

**6-month cumulative (conservative): $12,000-25,000**

---

## Core Principles (Non-Negotiable)

- **$0 infrastructure** until revenue justifies spend
- **Open-source first** — always. Use it, contribute to it, build on it.
- **Sustainability** — zero-waste stack, minimal cloud footprint, no unnecessary services
- **Build in public** — transparency is the brand
- **Original music everywhere** — robot fantôme is the soundtrack
- **Mechanic work stays** until online revenue replaces it (no burning bridges)
- **Charge early, charge often** — validate with money, not likes

---

## Decision Framework

When evaluating any opportunity, ask:

1. Does it generate revenue in < 2 weeks? (if not, what does it unlock?)
2. Does it feed the flywheel? (content → credibility → clients → case studies → content)
3. Can it run at $0/mo until proven?
4. Does it align with OSS + sustainability values?
5. Can it be built with AI assistance in hours, not weeks?
6. Can robot fantôme music enhance it?

If yes to 4+, do it. If no to #4, hard pass.

---

*This strategy is alive. Review monthly. Update as reality hits.*
