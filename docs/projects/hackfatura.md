# hackFatura

<div class="internal-badge">Internal Dashboard</div>

> The first product built by **Absolutely Plausible** — a full field management system designed for traveling mechanics. PCJ is the launch client.

---

## Overview

| Field | Value |
|-------|-------|
| **Client** | PCJ / Parazinho Chassis Jig |
| **Owner** | Thiago Pereira |
| **Built by** | Absolutely Plausible |
| **Relationship** | Luiz works at PCJ as a mechanic; hackFatura is built for the shop |
| **Brand** | PCJ palette — black/red/graphite. See [Brand](../brand.md). |
| **Live URL** | [github.com/wmestrinho/hackFatura](https://github.com/wmestrinho/hackFatura) |
| **App URL** | [wmestrinho.github.io/hackFatura](https://wmestrinho.github.io/hackFatura/) |
| **Subdomain** | mech.robotfantome.com (DNS pending) |

---

## What It Does

Full trackside field management covering:

- **New Customer** registration
- **Invoice Builder** — jsPDF client-side PDF generation, PCJ branded, works offline
- **Table Work** — event-based service logging (alignment, tuning, etc.)
- **Parts Work** — parts inventory and tracking per kart
- **Work Costs** — expense tracking per event
- **Dashboard** — event summary: revenue, costs, invoices pending

---

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Static HTML/CSS/JS — modular (4 JS files) |
| Backend | Google Apps Script (free, deploy as Web App) |
| Database | Google Sheets (free, auto-creates tabs + headers) |
| PDF generation | jsPDF — fully client-side, offline-capable |
| Hosting | GitHub Pages via GitHub Actions CI/CD |
| Custom domain | mech.robotfantome.com (CNAME pending) |

**Zero monthly cost.** No n8n. No paid services. No server.

---

## Team (5 users)

Wagner (Dev/Owner) · Thiago (Manager) · Bebeco (Dad) · Samuel (Supervisor) · Henrique (Mechanic)

---

## Status

- [x] Full app built — all 6 modules
- [x] Google Apps Script backend (GET-based, CORS-safe)
- [x] jsPDF invoice generator — PCJ branded, offline-capable
- [x] GitHub Actions CI/CD — auto-deploys on every push (~30s)
- [x] Live at [wmestrinho.github.io/hackFatura](https://wmestrinho.github.io/hackFatura/)
- [ ] Apps Script deployed with correct Spreadsheet ID
- [ ] Google Sheets connection verified end-to-end
- [ ] DNS: CNAME `mech → wmestrinho.github.io` at robotfantome.com DNS
- [ ] GitHub Pages custom domain → `mech.robotfantome.com`

---

## Files

```
projects/hackFatura/
├── index.html                       # Full app, all 6 modules
├── css/style.css                    # Cyberpunk theme, scanlines, glows
├── js/
│   ├── config.js                    # Pricing, team, business info (single source of truth)
│   ├── sheets.js                    # Google Apps Script API layer
│   ├── invoice.js                   # jsPDF invoice generator
│   └── app.js                       # All logic, forms, kart tags, events, dashboard
├── google-apps-script/
│   └── Code.gs                      # Backend: 6 actions, all sheet tabs
├── .github/workflows/deploy.yml     # GitHub Pages CI/CD
└── assets/                          # Logos, branding
```

---

## Business Logic (Pricing)

| Service | Price |
|---------|-------|
| Fine Tuning (1st visit, <5mm) | $150 |
| Significant (1st visit, >5mm / multi-area) | $180 |
| 2nd visit | $100 |
| 3rd visit | $50 |
| Weekend Package | $350 (regular customer: $300) |
| Salvage — 1 area | $150 → 2: $180 → 3: $210 → 4: $250 → 5+: $300 |
| Spindle | $40 |
| Column/Shaft | $30 |
| Axle 30mm / 40mm / 50mm | $40 / $50 / $60 |
| Chassis inspection | FREE |

---

## Notes

- Phone: 954-366-8641 | Email: pcj@gmail.com | Instagram: @parazinho_chassis_jig
- Invoice numbering: `PCJ-YYYY-MMDD-001`
- 80+ events/year, 22+ tracks, coast-to-coast North America
- Events are dynamic (created in-app) — NOT hardcoded
