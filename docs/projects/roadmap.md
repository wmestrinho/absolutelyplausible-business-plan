# Roadmap & Weekly Checklist

<div class="internal-badge">Internal Dashboard</div>

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
- [x] DNS: CNAME `mech → wmestrinho.github.io` set at robotfantome.com *(propagating)*
- [x] GitHub Pages custom domain → `mech.robotfantome.com` configured *(waiting on DNS)*
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
- [ ] Verify `mech.robotfantome.com` fully resolves after DNS propagation

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
- [ ] Update strategy + timeline with real numbers

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
- [ ] Collect testimonials — ask PCJ / Thiago for hackFatura testimonial after first month of use
- [ ] Gather social proof: LinkedIn recommendations, client quotes, event photos
- [ ] Link social media profiles across all public-facing properties
- [ ] Gumroad #2: "Google Apps Script Business Templates" ($39) — Month 3
- [ ] Course: "Build Your Business Tools with AI" — ONLY if 500+ newsletter subs
- [ ] YouTube channel setup — Month 2

### Infrastructure & Domains

- [ ] DNS migration: Dreamhost → Namecheap (registrar) + Cloudflare (DNS) — when ready
- [ ] robotfantome.crypto: IPFS full deploy via Fleek + GitHub Action auto-update — after robotfantome.com v1 is live. See [Domain Strategy](../brand.md#domain-strategy) for full plan.

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

### 2026-03-03 — Identity & Documentation Overhaul

- [x] CLAUDE.md created — guidance for Claude Code in this repo
- [x] Docs structure consolidated — root STRATEGY/TIMELINE/BRAND.md deleted, docs/ is single source of truth
- [x] Vestigial jekyll-gh-pages.yml workflow deleted — MkDocs only
- [x] docs/strategy.md promoted to full version — all missing sections added (Unfair Advantage, Two music identities, Revenue Philosophy, Decision Gates, Monthly Review Checklist, Brand Umbrella plan, Time Allocation by Phase)
- [x] docs/timeline.md promoted to full version — Planning Principles, per-stream weekly breakdowns, Decision Gates summary, What to Track Weekly, concert week note
- [x] docs/brand.md promoted to full version — typography, design principles, brand voice, logo/wordmark
- [x] docs/identity.md — complete profile built from LinkedIn + resume + education + certifications + volunteering:
  - Full career background table (2005–present)
  - Education section (Fatec Sebrae Brazil 2002 → Purdue Global AS IT 2025)
  - Certifications (freeCodeCamp Front End + Responsive Web Design, Jan 2023)
  - Volunteering section (Bach Festival Musician + Usher, Wildlife Refuge, Pathlight HOME, Vipassana Center)
  - Trilingual: English · Portuguese · Spanish documented as strategic advantage
  - Absolutely Plausible founding date corrected to July 2014

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

### 2026-03-01 — Business Plan + Strategy v2

- [x] Business strategy written: 3-plan flywheel (hackFatura + AI Consulting + Content)
- [x] 6-month timeline with weekly tasks written
- [x] Brand guide updated: Robot Fantôme editorial vs PCJ cyberpunk
- [x] Financial reality check added ($1,750/mo survival, $750/mo PCJ, $1,500/mo online target)
- [x] Raised prices: AI Audit $200, retainers $750-1,500, SaaS $19/$39/$79
- [x] Added decision gates (if/then triggers for SaaS, course, price raises)
- [x] Priority ranking: Consulting #1, hackFatura #2, Content #3
- [x] Travel week protocol added
