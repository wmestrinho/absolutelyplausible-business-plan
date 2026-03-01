# hackFatura

> Full shop management system built for PCJ / Parazinho Chassis Jig.

---

## Overview

| Field | Value |
|-------|-------|
| **Client** | PCJ / Parazinho Chassis Jig |
| **Owner** | Thiago Pereira |
| **Built by** | Absolutely Plausible |
| **Relationship** | Luiz works at PCJ as a mechanic; hackFatura is built for the shop |
| **Brand** | PCJ palette — black/red/graphite. See [Brand](../brand.md). |

---

## What It Does

Full shop management system covering:

- **New Customer** registration
- **Invoice Builder** (manual entry or paste mode)
- **Table Work** tracking (event-based karting service)
- **Parts Work** inventory and tracking
- **Work Costs** expense tracking

---

## Stack

| Layer | Tech |
|-------|------|
| Backend / Automation | n8n Cloud |
| Data persistence | Google Sheets |
| Frontend | Pure HTML/CSS/JS (single file) |
| Hosting | Netlify / Vercel (planned) |

**Webhooks:**
- `/new-customer`
- `/invoice`
- `/table-work`
- `/parts-work`
- `/work-costs`

---

## Status

- [x] MVP UI built (`karting-mvp-ui.html`)
- [x] n8n workflow scaffolded (`karting-mvp-workflow.json`)
- [ ] n8n Cloud setup and webhook activation
- [ ] Google Sheets connection configured
- [ ] PDF invoice generation
- [ ] Email notifications
- [ ] Mobile-optimized hosting (Netlify/Vercel)
- [ ] Dashboard / reporting view

---

## Files

```
projects/karting-mvp/
├── karting-mvp-ui.html       # Frontend UI
├── karting-mvp-workflow.json # n8n workflow
└── SETUP-GUIDE.md            # Setup instructions
```

---

## Notes

- Pending: Luiz to give further instructions to Coder agent before next build phase
- Color scheme must follow PCJ palette — not AP cyberpunk
