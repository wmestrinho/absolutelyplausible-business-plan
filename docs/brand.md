# Brand Guidelines

## The Rule

> **Our work** (Absolutely Plausible / robotfantome.com) → Robot Fantôme clean editorial palette
> **Client work** → client's own palette
> Check this page before building any UI.

**Never mix the two.**

---

## Robot Fantôme — Clean Editorial

White space-forward, content-driven, editorial. The art and music provide the color. The frame stays neutral.

### Colors

| Role | Hex | Usage |
|------|-----|-------|
| **White** | `#FFFFFF` | Primary background |
| **Off-White** | `#F5F5F5` | Subtle section backgrounds |
| **Black** | `#000000` | Primary text, headings |
| **Dark Gray** | `#333333` | Secondary text, body copy |
| **Mid Gray** | `#888888` | Captions, metadata, subtle UI |
| **Light Gray** | `#E2E2E2` | Borders, dividers, cards |

Monochrome-first. Content (art, music, collages, photos) provides the color. The frame stays neutral.

### Typography

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| **Display / Brand** | Playfair Display or Libre Baskerville | Georgia, "Times New Roman", serif | Bold / Black |
| **Headings** | Same serif or clean sans | system-ui, sans-serif | Medium-Bold |
| **Body** | Inter or DM Sans | system-ui, -apple-system, sans-serif | Regular |
| **Mono (code/tech)** | JetBrains Mono | monospace | Regular |

### Design Principles

1. **White space is a feature.** Let things breathe.
2. **Content is the color.** Art, collages, music, photos bring the vibrancy. The UI is the frame.
3. **Minimal chrome.** Few borders, no heavy shadows, no gradients. Clean lines.
4. **Typography-driven.** Big, confident headings. Readable body text. The words matter.
5. **Open-source aesthetic.** Feels like a zine, a manifesto, an art project — not a corporate site.

### Brand Voice

- Community-first ("we" not "I" when talking about the mission)
- Open-source advocate
- Sustainability-forward
- Artsy but approachable
- Punk ethos: DIY, anti-corporate, build your own tools
- "Absolutely plausible" — anything is possible with the right tools

### Logo / Wordmark

- **"ROBOT FANTÔME"** — uppercase, serif, tracked out
- **"absolutely plausible"** — tagline, lowercase, lighter weight
- Ghost emoji 👻 as casual icon (not a formal logo element)

---

## Client: PCJ / Parazinho Chassis Jig { #pcj }

Industrial, mechanical. Bold, grounded. Used in **hackFatura**.

| Role | Hex |
|------|-----|
| Background | `#0A0A0F` |
| Primary Red | `#E74C3C` / `#C0392B` |
| Graphite Surface | `#333333` |
| Text | `#F0F0F0` |

**Typography:** Orbitron (display), Share Tech Mono (body). Cyberpunk, dark theme, scanlines, glow effects.

!!! warning "Color Rule"
    All work for PCJ must use the PCJ palette — never the Robot Fantôme editorial palette.

---

## Domain Strategy

### Current Setup

| Domain | Purpose | Status |
|--------|---------|--------|
| `robotfantome.com` | Main brand site (robotfantome.com v1 — to be built) | DNS at Dreamhost → moving to Namecheap + Cloudflare |
| `plan.robotfantome.com` | This business plan site (MkDocs on GitHub Pages) | Live |
| `mech.robotfantome.com` | hackFatura (PCJ field management app) | DNS propagating |
| `robotfantome.crypto` | Web3 / blockchain domain (Unstoppable Domains, Polygon) | Redirect → plan.robotfantome.com |

### DNS & Hosting

**DNS:** Cloudflare (active) — `robotfantome.com` is live on Cloudflare nameservers.
**Registrar:** Moving to Namecheap (planned — low priority while Cloudflare DNS is working).

**Hosting:** All projects deploy via **Cloudflare Pages** — direct GitHub integration, no GitHub Actions workflows needed.

| Subdomain | Hosted on | Deploy trigger |
|-----------|-----------|---------------|
| `plan.robotfantome.com` | Cloudflare Pages | Push to `main` |
| `mech.robotfantome.com` | Cloudflare Pages (or GitHub Pages) | Push to `main` |
| `robotfantome.com` | Cloudflare Pages (when built) | Push to `main` |

!!! note "Cloudflare Pages + DNS"
    Since DNS is already on Cloudflare, adding a custom domain in Cloudflare Pages automatically creates the DNS record. No manual CNAME setup needed.

### robotfantome.crypto — Web3 Domain

`robotfantome.crypto` is a blockchain domain registered with [Unstoppable Domains](https://unstoppabledomains.com) on the Polygon network.

**Current:** Redirect to `https://plan.robotfantome.com` (set in Unstoppable Domains dashboard).

**Future — Full IPFS Deploy (planned):**

The goal is to serve the site from IPFS so `robotfantome.crypto` resolves to a truly decentralized, censorship-resistant version. This fits the OSS + zero-waste + cyberpunk ethos of the brand — no servers, no hosting fees, no single point of failure.

**Planned implementation:**

1. **Fleek** (fleek.co) — GitHub integration that auto-deploys `site/` to IPFS on every push to `main`
2. **GitHub Action** — after MkDocs build, pin `site/` to IPFS via Pinata or Fleek API, retrieve new CID
3. **Unstoppable Domains API** — auto-update the `dweb.ipfs.hash` record on-chain with the new CID
4. **Result** — every `git push` updates both GitHub Pages (`plan.robotfantome.com`) AND IPFS (`robotfantome.crypto`) automatically

**Decision trigger:** Implement IPFS deploy when `robotfantome.com` v1 is live and the full site is worth decentralizing. Not before.

See [Roadmap](projects/roadmap.md) for the backlog task.

---

## Adding a New Client

Copy this template and fill it in before building any client UI:

```markdown
## Client: [Business Name]

**Owner:** [Name]
**Project:** [Project name and what it does]
**Relationship:** Built by Absolutely Plausible for [client]

| Role | Hex |
|------|-----|
| Background | `` |
| Primary | `` |
| Text | `` |

**Typography:** [describe]
```
