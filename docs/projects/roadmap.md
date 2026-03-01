# Roadmap & Weekly Checklist

> Living tracker. Update by making a commit. History = git log.
> Check off items as they're done. New week = new section at the top.

---

## Week of 2026-03-01

### hackFatura (PCJ)

- [x] Full app built — all 6 modules live at wmestrinho.github.io/hackFatura
- [x] GitHub Actions CI/CD — auto-deploys on push
- [x] Google Apps Script backend rewritten (GET-based, CORS-safe)
- [ ] Redeploy Apps Script → confirm Sheets backend works end-to-end
- [ ] DNS: CNAME `mech → wmestrinho.github.io` at robotfantome.com
- [ ] GitHub Pages custom domain → `mech.robotfantome.com`
- [ ] Test full workflow: create event → log work → generate invoice → verify in Sheets

### Business / Revenue

- [ ] Identify 3 mechanics who'd pay $300-500 for a custom hackFatura build
- [ ] DM or call them this week
- [ ] Write consulting offer (AI Audit $150, Workflow Build $500-2k, Zero-Cost MVP $2-5k)
- [ ] Book and deliver first AI Audit

### Content

- [ ] Publish first LinkedIn post: "I built my own business app in one night for $0/month"
- [ ] Set up Gumroad account

### Music

- [ ] Record 15-sec intro + 30-sec outro clips from robot fantôme tracks

### robotfantome.com

- [ ] Decide stack (recommendation: Astro on GitHub Pages)
- [ ] Plan content structure

---

## Backlog

### hackFatura — Future Features

- [ ] Multi-tenant SaaS version (Google OAuth, tenant isolation, Stripe)
- [ ] Self-serve onboarding flow
- [ ] PWA / mobile-first improvements
- [ ] Data export (CSV/PDF)
- [ ] Database migration: Google Sheets → PocketBase/Supabase (when needed)

### Absolutely Plausible

- [ ] robotfantome.com v1: hero + /consulting + /hackfatura + /music
- [ ] Portfolio: 2+ case studies
- [ ] Course: "Build Your Business Tools with AI" (Month 5)
- [ ] Gumroad: "Zero-Cost Business App Blueprint" (Week 2)
- [ ] YouTube channel setup

### Music

- [ ] Renew distributor subscription to keep EP online
- [ ] Self-host option: embed tracks on robotfantome.com/music

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
