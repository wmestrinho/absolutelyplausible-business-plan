# Business Strategy — Robot Fantôme Ventures

> *"A mechanic who codes, builds AI agents, and plays punk rock walks into a market gap..."*

**Created:** 2026-03-01 | **Review cycle:** Monthly (first Sunday of each month)

---

## Business Structure

**Robot Fantôme** (Absolutely Plausible) is OUR business — the umbrella brand for everything we build, sell, and create. **Founded July 2014. 11+ years running.**

**hackFatura** is a CLIENT PROJECT — built for **Parazinho Chassis Jig (PCJ)**, owned by **Thiago Pereira**. It uses PCJ's brand (black/red/graphite cyberpunk). It is NOT our brand.

| | Robot Fantôme (Us) | Client Projects (hackFatura, etc.) |
|---|---|---|
| **Brand** | Clean, white, editorial, minimalist | Client's own |
| **Domain** | robotfantome.com | mech.robotfantome.com (subdomain) |
| **Revenue** | Consulting, content, SaaS, products | Client deliverable → portfolio + case study |
| **Music** | Infused in OUR content only | Not in client deliverables |

See [Brand](brand.md) for full visual identity guide.

---

## Financial Reality Check

Before strategy, set the floor:

| | Amount | Notes |
|---|---|---|
| **Monthly survival minimum** | $1,750/mo | Rent + food + bills + car payment + supplies |
| **Mechanic income** | $750/mo | Current baseline from PCJ |
| **Online income needed** | $1,500/mo | What the gap is (or what replaces mechanic work) |
| **Runway without mechanic work** | 0-1 months | No meaningful savings buffer |

**Rule:** Mechanic work stays — period. PCJ is the foundation, not something to quit. Online revenue is additive income, not a replacement plan. No burning bridges. No gambling.

---

## The Unfair Advantage

Most founders have one skill. This is a rare stack:

- **Deep karting industry access** — works for Thiago Pereira (PCJ), who has 19 years in karting chassis (since 2007). Embedded in the industry at 80+ events/year, 22+ tracks. Knows the people, the pain, the workflow.
- **Builder** — ships real software (hackFatura for PCJ: zero-cost field app, live in a single session)
- **AI-native** — runs own agent infrastructure, understands automation deeply
- **Trilingual: English, Portuguese, Spanish** — the Brazilian karting community is the dominant force in US karting. Being able to pitch, sell, support, and build relationships in Portuguese is an insurmountable moat. No competitor has this without a translator.
- **100% OSS + sustainability values** — brand differentiator, not a constraint
- **Two original music careers** — robot fantôme punk/rock tracks in ALL content (zero licensing costs, unique sonic brand). AND ~10 years in the Bach Festival Choir of Winter Park — one of the finest choral organizations in America. Two completely different musical identities, both genuine.
- **Zero CAC at the track** — physically at 80+ karting events/year surrounded by potential customers
- **Bach Festival Choir network** — ~150 musicians, music educators, soloists, and community leaders in Central Florida. Audition-only ensemble (WSJ: "one of the finest of its kind in America"). PBS appearances, European tours (London Symphony Orchestra, Italian tour 2025). 10 years of membership = deep credibility and trust. Zero overlap with the typical tech founder audience — a warm, untapped referral network.

The play: **monetize the intersection**, not any single skill in isolation.

The story that no one else has: *classical choir singer + punk musician + karting mechanic + AI builder + trilingual hospitality veteran*. Each one alone is interesting. All together it's unforgettable — and completely unreplicable.

---

## Revenue Philosophy

Three rules:

1. **Sell before you build.** Pre-sell, consult, audit — validate with money, not likes.
2. **Charge on Day 1.** Free tiers come later. Early adopters pay because the alternative (paper, spreadsheets, doing nothing) costs them more in time.
3. **Stack income sources.** Five streams at $500 > one stream at $2,500 (more stable, more resilient).

**Time budget reality:** Traveling mechanic. Assume 10-15 productive hours/week for online work. Not 40. Not 25. Plan accordingly.

---

## Priority Order

| Priority | Stream | Why First |
|----------|--------|-----------|
| **#1** | Consulting (Plan B) | Fastest to revenue, highest $/hour, builds case studies |
| **#2** | hackFatura (Plan A) | Product already exists, customers are in your network |
| **#3** | Content (Plan C) | Force multiplier but slowest to monetize — do NOT lead with this |

When time is scarce (travel weeks), work ONLY on #1 and #2. Content can pause. Revenue can't.

---

## PLAN A: hackFatura — From Client Project to Product

### Phase 1 (Month 1-3): Custom Builds — Cash Now

You don't need SaaS to make money. Sell what you already have.

**The offer:**

- Take the hackFatura architecture (NOT PCJ's branding)
- Build the client's version with THEIR branding, colors, business info
- Set up their Google Sheet + Apps Script
- Deploy to their GitHub Pages
- **Price: $500 per setup** (takes 2-3 hours with AI assistance)
- **Credit line:** "Built by Robot Fantôme" in footer

**Target:** Karting mechanics you already know. You see them at the track. You don't need ads.

**Sales script:** *"Hey [name], I built this invoicing app for trackside work — creates PDFs, tracks events, everything on your phone. Want me to set up one for your business? $500, I handle everything."*

**Realistic target:** 1-2 builds per month = $500-1,000/mo

### Phase 2 (Month 4-6): SaaS — Only If Custom Builds Prove Demand

**Decision trigger:** If you've sold 5+ custom builds AND 3+ people have asked "can I just sign up online?" — then build the SaaS version. Otherwise, keep selling custom builds.

Do NOT start SaaS development before Month 4. Custom builds are the validation.

**SaaS pricing (when ready):**

| Tier | Price | Features |
|------|-------|----------|
| **Starter** | $19/mo | Single user, 100 invoices/mo, basic dashboard |
| **Pro** | $39/mo | Multi-user (up to 5), unlimited invoices, custom branding, PDF export |
| **Team** | $79/mo | Unlimited users, multi-location, analytics, API access |

**SaaS tech decisions (make these in Month 3, not now):**

- Auth: Google OAuth (free, everyone has Google)
- DB: Supabase free tier (replaces Google Sheets)
- Payments: Stripe
- Hosting: GitHub Pages (frontend) + Supabase (backend)
- Landing: robotfantome.com/hackfatura or mech.robotfantome.com

### Target Market

- **Primary:** Traveling karting mechanics in North America (~200-500 active)
- **Brazilian karting community** — dominant segment in US karting, reachable in Portuguese. Zero extra effort, zero translation cost. No competitor has this access.
- **Secondary:** Karting teams and shops doing trackside service (~1,000+)
- **Tertiary:** Other motorsport field mechanics (sprint cars, dirt track, motocross)
- **Long tail:** Any mobile/field service business

### Revenue Projection

| Month | Custom Builds | SaaS MRR | Total |
|-------|--------------|----------|-------|
| 1-3 | $500-1,000/mo | $0 | $500-1,000/mo |
| 4 | $500 | $0-200 (beta) | $500-700 |
| 5-6 | on-demand | $200-500 | $500-1,000/mo |

### Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Niche market ceiling | Expand to adjacent motorsports after proving karting |
| Google Sheets won't scale | Migrate to Supabase only when you have 10+ users |
| Custom builds don't scale | That's fine — they fund SaaS development |
| No one wants to pay | If <3 builds sell in 3 months, pivot to consulting-only |

---

## PLAN B: AI Automation Consulting — The Cash Engine

### Thesis

Built an entire business app in one session using AI, zero-cost architecture, and open-source tools. Most small business owners can't do this. Sitting at the intersection of "understands real business problems" and "can solve them with AI."

### Service Ladder (Start at the Top)

| Service | Price | Deliverable | Time | Priority |
|---------|-------|-------------|------|----------|
| **AI Audit** | $200 | 30-min call + written report with 3-5 automation recommendations | 1 hour | Do these FIRST |
| **Workflow Build** | $750-2,500 | Custom automation (Sheets + Apps Script + integrations) | 1-3 days | When audits convert |
| **Zero-Cost MVP** | $3,000-7,000 | Full app like hackFatura (frontend + backend + CI/CD) | 1-2 weeks | Premium offer |
| **Monthly Retainer** | $750-1,500/mo | Ongoing maintenance, new automations, support (~5-10 hrs/mo) | Recurring | Push for these aggressively |

### Positioning

**Anti-agency. Anti-bloat. Anti-vendor-lock-in.**

> "I build real business tools for $0/month. No subscriptions. No hosting fees. You own everything."

> "I'm a mechanic who automates his own business. I'll do the same for yours."

> "Open-source, zero-waste, zero-bullshit."

### Client Acquisition (Priority Order)

1. **Warm network first** — karting community, local businesses, friends of friends. You need 5 names this week.
2. **LinkedIn** — "build in public" content drives inbound leads. But this is Month 2+, not Day 1.
3. **robotfantome.com/consulting** — portfolio + booking page (Cal.com, open-source, free tier)
4. **Referrals** — every happy client refers 1-2 more. Ask explicitly.
5. **Upwork/Fiverr** — only if pipeline is dry in Month 2. Take 2-3 gigs for reviews, then leave.

### Decision Triggers

| Signal | Action |
|--------|--------|
| 3+ audits → 0 projects | Your pitch is wrong. Rework the audit → project conversion |
| Demand > capacity | Raise prices 25%. Do NOT add hours. |
| 2+ retainer clients by Month 3 | This is working. Double down on consulting, scale content to drive more leads |
| 0 retainer clients by Month 4 | Re-evaluate service offering. Talk to past clients — why didn't they retain? |

### Revenue Projection

| Month | Audits | Projects | Retainers | Total |
|-------|--------|----------|-----------|-------|
| 1 | 2-3 ($400-600) | 0-1 ($0-750) | 0 | $400-1,350 |
| 2 | 2-3 | 1 ($750-2,500) | 0 | $950-3,100 |
| 3 | 2-3 | 1-2 | 1 ($750-1,500) | $1,700-4,600 |
| 4-6 | 1-2 | 1-2 | 2-3 | $2,500-6,500/mo |

### Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Feast-or-famine income | Push for retainers early — recurring revenue is the goal |
| Time conflict with mechanic work | Async delivery. Use AI to draft reports. Batch calls on non-travel days |
| No reputation yet | Warm network first. Case studies from hackFatura. Build in public on LinkedIn |

---

## PLAN C: Content + Education — The Force Multiplier

### Thesis

The story is genuinely interesting. Content is the force multiplier for Plans A and B. But it is NOT the primary revenue driver in the first 3 months. Content builds the audience that eventually buys everything else.

### Content Pillars (Pick 2 First)

For the first 3 months, focus on ONLY these two:

1. **"Zero-Cost Tech"** — How to build real business tools for $0/month
   - hackFatura breakdowns, Google Apps Script tricks, GitHub Pages deploys
   - Target: indie hackers, bootstrappers, non-technical founders

2. **"The Whole Life"** — The personal brand story that no one else has
   - Classical choir singer on Monday. Punk rock on the weekend. Karting mechanic on the road. AI builder at night.
   - Behind-the-scenes at karting events, choir rehearsal life, building tools trackside
   - Target: general audience, maker culture, musicians, karting community
   - **This IS the moat.** No one else has this combination. Lean into all of it.

Add these in Month 4+ only if the first two are working:

3. "AI for Real Work" — Practical AI automation case studies
4. "OSS & Sustainability" — Open-source everything, zero-waste tech

### Channel Strategy

| Channel | Frequency | Priority | Notes |
|---------|-----------|----------|-------|
| **LinkedIn** | 2x/week | HIGH | Highest ROI for B2B consulting leads. Batch write on Sundays. |
| **Newsletter** | 2x/month | MEDIUM | Owned audience. Buttondown (free, no self-hosting). |
| **YouTube** | 2x/month | MEDIUM | Evergreen content. Record at track when possible. |
| **GitHub** | Ongoing | LOW | Open-source tools as they come. Don't force it. |
| **Twitter/X** | When natural | LOW | Repurpose LinkedIn posts. Don't create original content here. |

### Music — Two Identities, Both Real

**robot fantôme (punk/indie/rock):**

- Tracks go into ALL video content — YouTube intros/outros, tutorial backgrounds, course content
- No licensing costs, 100% owned, unique sonic brand
- Month 2: Renew distributor OR self-host at robotfantome.com/music
- Month 5-6: New single release timed with product/SaaS launch

**Bach Festival Choir (classical, world-class):**

- ~10 years in the [Bach Festival Society of Winter Park](https://www.bachfestivalflorida.org) — audition-only, 150 voices, PBS, European tours
- Monday evening rehearsals (mid-August through May) — hard schedule constraint
- Network of ~150 musicians = warm consulting leads, referral source, community
- Content angle: the contrast between choir and punk **is** the story. Use it.
- Choir concerts and behind-the-scenes = authentic content that no tech creator has

**The combined story:** Bach on Monday. Punk on the weekend. AI on Sunday. Karting everywhere in between. This is not a persona — it's your actual life. Own it fully.

### Digital Products (Start Simple)

| When | Product | Price | Effort |
|------|---------|-------|--------|
| Month 1 | "Zero-Cost Business App Blueprint" on Gumroad | $29 | 3-4 hours to create |
| Month 3 | "Google Apps Script Business Templates" (5-pack) | $39 | 4-5 hours |
| Month 5-6 | Course: "Build Your Business Tools with AI" | $99-149 | Only if 500+ newsletter subs |

**Decision trigger for course:** Do NOT build a course until you have 500+ newsletter subscribers. Courses without an audience don't sell.

### Revenue Projection

| Month | Digital Products | Course | Total |
|-------|-----------------|--------|-------|
| 1-2 | $50-200 | $0 | $50-200 |
| 3-4 | $100-400 | $0 | $100-400 |
| 5-6 | $200-500 | $0-3,000 (if audience exists) | $200-3,700 |

---

## The Flywheel: How Everything Connects

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

### Time Allocation by Phase

**Months 1-2 (Revenue Sprint):**

- 50% Consulting (audits, projects, outreach)
- 30% hackFatura (custom builds, backend fixes)
- 20% Content (LinkedIn, Gumroad product)

**Months 3-4 (System Building):**

- 40% Consulting (retainers, projects)
- 30% hackFatura (SaaS decision + possible build)
- 30% Content (YouTube, newsletter growth)

**Months 5-6 (Scaling):**

- 35% Consulting (retainers on autopilot)
- 35% hackFatura (SaaS growth or custom builds)
- 30% Content (course if audience exists, otherwise double down on what works)

### The Brand Umbrella: robotfantome.com

| Page | Purpose | When to Build |
|------|---------|---------------|
| `/` | Who you are, what you do | Month 1 (Week 3) |
| `/consulting` | AI automation services + booking link | Month 1 (Week 3) |
| `/hackfatura` | Product page or redirect to subdomain | Month 2 |
| `/blog` | Content hub (repurposed from LinkedIn) | Month 3 |
| `/music` | Embed tracks, streaming links | Month 2-3 |
| `/newsletter` | Signup + archive | Month 2 |

**Stack decision:** Astro on GitHub Pages. Free, fast, supports MDX for blog. Decide now, build Week 3.

---

## Total Revenue Projection

| Month | hackFatura | Consulting | Content | Total |
|-------|-----------|------------|---------|-------|
| Mar | $500 | $400-1,350 | $50-200 | **$950-2,050** |
| Apr | $500-1,000 | $950-3,100 | $100-300 | **$1,550-4,400** |
| May | $500-1,000 | $1,700-4,600 | $100-400 | **$2,300-6,000** |
| Jun | $500-1,000 | $2,000-5,000 | $100-500 | **$2,600-6,500** |
| Jul | $500-1,000 | $2,500-5,500 | $200-600 | **$3,200-7,100** |
| Aug | $500-1,000 | $2,500-6,000 | $200-4,500 | **$3,200-11,500** |

**6-month cumulative (conservative): ~$14,000**
**6-month cumulative (realistic mid): ~$24,000**
**6-month cumulative (optimistic): ~$37,500**

### Monthly Income Milestones

| Milestone | Target | What It Means |
|-----------|--------|---------------|
| First $1,000/mo online | Month 1-2 | Proof of concept. Keep going. |
| First $2,500/mo online | Month 3-4 | This is a real business. Start reducing mechanic hours if possible. |
| First $5,000/mo online | Month 5-6 | Mechanic work becomes optional. Begin transition planning. |

---

## Decision Gates

| When | Decision | If YES | If NO |
|------|----------|--------|-------|
| End Month 1 | Anyone paid for an audit? | Keep going, refine pitch | Rework offer, get feedback |
| End Month 2 | Which stream generates more $/hour? | Allocate 50% time to winner | Both equal? Keep balanced |
| End Month 3 | 5+ hackFatura builds sold + SaaS demand? | Start SaaS development | Keep selling custom builds |
| End Month 3 | Any retainer clients? | Consulting is your core business | Diagnose why not, adjust offer |
| End Month 4 | At capacity? | Raise prices 25% | More outreach needed |
| End Month 5 | 500+ newsletter subscribers? | Build the course | Skip course, keep growing audience |
| End Month 5 | Online income > 80% of survival minimum? | Begin planning mechanic work reduction | Keep mechanic work, keep building |

---

## Core Principles (Non-Negotiable)

- **$0 infrastructure** until revenue justifies spend
- **Open-source first** — always
- **Zero-waste stack** — minimal cloud footprint
- **Build in public** — transparency is the brand
- **Original music everywhere** — robot fantôme is the soundtrack
- **PCJ mechanic work stays** — online revenue is additive
- **Charge early, charge often** — validate with money
- **10-15 hours/week** — plan for reality, not fantasy

---

## Decision Framework

When evaluating any opportunity, ask:

1. Does it generate revenue in < 2 weeks? (if not, what does it unlock?)
2. Does it feed the flywheel? (content → credibility → clients → case studies → content)
3. Can it run at $0/mo until proven?
4. Does it align with OSS + sustainability values?
5. Can it be done in 10-15 hours/week alongside mechanic work?
6. Can robot fantôme music enhance it?

If yes to 4+, do it. If no to #4 (values), hard pass.

---

## Monthly Review Checklist

On the first Sunday of each month:

- [ ] Actual revenue vs projections — adjust targets
- [ ] Which stream generated the most $/hour? — allocate more time there
- [ ] Decision triggers hit? — execute the corresponding action
- [ ] What content performed best? — make more of that
- [ ] Client feedback collected? — improve offers
- [ ] Update strategy + timeline with real numbers

---

*This strategy is alive. Review monthly. Kill what doesn't work. Double down on what does.*
