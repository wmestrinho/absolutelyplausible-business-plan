# Roadmap & Weekly Checklist

> Living tracker. Update by making a commit. History = git log.
> Check off items as they're done. New week = new section at the top.
> **Max 5 tasks per week. Revenue tasks first.**

---

## Week of 2026-03-01

### Revenue (Priority)

- [ ] Contact 3 mechanics about custom hackFatura builds ($500 each)
- [ ] Contact 3 small business owners about AI Audits ($200 each)
- [ ] Book and deliver first AI Audit

### hackFatura (PCJ)

- [x] Full app built — all 6 modules live at wmestrinho.github.io/hackFatura
- [x] GitHub Actions CI/CD — auto-deploys on push
- [x] Google Apps Script backend rewritten (GET-based, CORS-safe)
- [ ] Redeploy Apps Script → confirm Sheets backend works end-to-end
- [ ] DNS: CNAME `mech → wmestrinho.github.io` at robotfantome.com
- [ ] GitHub Pages custom domain → `mech.robotfantome.com`
- [ ] Test full workflow: create event → log work → generate invoice → verify in Sheets

### Content

- [ ] Publish first LinkedIn post: "I built my own business app in one night for $0/month"
- [ ] Record 15-sec intro + 30-sec outro clips from robot fantôme tracks

---

## Week of 2026-03-08

### Revenue

- [ ] Deliver first AI Audit ($200) — write 1-page report, ask for testimonial
- [ ] Start first custom hackFatura build (if mechanic committed)
- [ ] Follow up on all audit leads — scope projects if interested

### Content

- [ ] Create "Zero-Cost Business App Blueprint" on Gumroad ($29)
- [ ] Publish 2 LinkedIn posts (batch write both on one day)

---

## Week of 2026-03-15

### Brand

- [ ] Deploy robotfantome.com v1 (Astro + GitHub Pages)
  - Hero (mechanic + coder + musician)
  - `/consulting` with packages + Cal.com booking link
  - `/hackfatura` teaser
- [ ] Set up DNS for mech.robotfantome.com

### Revenue

- [ ] Follow up all open leads, book 1-2 more audits
- [ ] Deliver custom hackFatura build if in progress

### Content

- [ ] LinkedIn: 2 posts

---

## Week of 2026-03-22

### Revenue

- [ ] Deliver audits + follow up on project leads
- [ ] Collect feedback from hackFatura users

### Content

- [ ] LinkedIn: 2 posts
- [ ] Set up Buttondown newsletter (free tier)

### Review

- [ ] Monthly retrospective: actual revenue vs target ($950-2,050)
- [ ] Hours spent per stream
- [ ] What worked? What didn't? Adjust.
- [ ] Update STRATEGY.md + TIMELINE.md with real numbers

---

## Backlog

### hackFatura — Future Features

- [ ] Multi-tenant SaaS version — ONLY after 5+ custom builds sold + demand signal
- [ ] Self-serve onboarding flow
- [ ] PWA / mobile-first improvements
- [ ] Data export (CSV/PDF)
- [ ] Database migration: Google Sheets → Supabase (when needed)

### Absolutely Plausible

- [ ] Portfolio: 2+ case studies
- [ ] Gumroad #2: "Google Apps Script Business Templates" ($39) — Month 3
- [ ] Course: "Build Your Business Tools with AI" — ONLY if 500+ newsletter subs
- [ ] YouTube channel setup — Month 2

### Music

- [ ] Renew distributor subscription to keep EP online
- [ ] Self-host option: embed tracks on robotfantome.com/music

---

## Decision Gates

| When | Question | YES → | NO → |
|------|----------|-------|------|
| End Month 1 | Anyone paid for an audit? | Keep going | Rework offer |
| End Month 2 | Which stream earns more $/hour? | 50% time to winner | Keep balanced |
| End Month 3 | 5+ builds sold + SaaS demand? | Start SaaS dev | Keep custom builds |
| End Month 3 | Retainer clients? | Consulting is core | Diagnose why not |
| End Month 5 | 500+ newsletter subs? | Build the course | Skip course |

---

## Completed (Archive)

### 2026-02-24 — First Contact

- [x] Fantome agent infrastructure set up
- [x] Ollama models installed
- [x] Cron jobs created (daily summaries, memory maintenance, project status)

### 2026-02-26 — Cleanup & Foundation

- [x] Hallucinated paths from previous session fixed
- [x] GitHub CLI authenticated
- [x] Workspace connected to private repo
- [x] USER.md and MEMORY.md updated with full life context

### 2026-02-27 — hackFatura Full Build

- [x] Full hackFatura revamp (from karting-mvp prototype)
- [x] Cyberpunk UI: Orbitron + Share Tech Mono, scanlines, glows
- [x] Stack: static HTML/JS + Google Apps Script + Google Sheets + jsPDF
- [x] Zero monthly cost — no n8n, no paid services
- [x] Repo live: github.com/wmestrinho/hackFatura
- [x] Pages live: wmestrinho.github.io/hackFatura (HTTP 200 confirmed)

### 2026-03-01 — Business Plan + Cleanup

- [x] Business strategy written: 3-plan flywheel (hackFatura SaaS + AI Consulting + Content)
- [x] 6-month timeline with weekly tasks written
- [x] Brand guide updated: Robot Fantôme editorial vs PCJ cyberpunk
- [x] karting-mvp folder deleted (superseded by hackFatura)
- [x] Apps Script rewritten for GET-based CORS-safe operation
- [x] business-plan repo synced with absolutelyplausible-business-plan on GitHub

### 2026-03-01 — Strategy v2 Improvements

- [x] Financial reality check added ($1,750/mo survival, $750/mo PCJ, $1,500/mo online target)
- [x] Fixed experience attribution (19 years is Thiago/PCJ, not Luiz)
- [x] Raised prices: AI Audit $200, retainers $750-1,500, SaaS $19/$39/$79
- [x] Added decision gates (if/then triggers for SaaS, course, price raises)
- [x] Reduced content volume to realistic 10-15 hrs/week capacity
- [x] Delayed SaaS to Month 4+ (custom builds validate first)
- [x] Priority ranking: Consulting #1, hackFatura #2, Content #3
- [x] Added travel week protocol: outreach + follow-ups only
