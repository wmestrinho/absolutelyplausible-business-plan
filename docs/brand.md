# Brand Manifesto

> We build tools, not empires. We write code, not contracts. We play punk, not politics.
> This is a living document. Part philosophy, part style guide, part declaration of intent.

---

## The Philosophy

Everything we make starts from two beliefs:

**1. Anything is absolutely plausible with the right tools.**
Not optimism. Not hustle culture. A practical statement. If you can build the tool, you can solve the problem. If you can't find the tool, you build it yourself. If you build it yourself, you open-source it so someone else doesn't have to.

**2. The best technology disappears.**
A ghost in the machine. Robot Fantome is French for *robot ghost* — a force that moves fast, fixes things, and doesn't leave a trace of waste. The interface gets out of the way. The frame stays neutral. The content provides the color.

---

## Two Names, One DNA

There are two brands here. They share visual DNA but serve completely different purposes. Never confuse them.

### Robot Fantome — The Music Project

Luiz Wagner Mestrinho's punk, indie, and rock project. Released via *stolenghost recordings*. Five-track EP, fully owned, zero licensing costs. Original music woven into everything — intros, outros, backgrounds, presentations. A creative moat no other tech operation has.

Robot Fantome is the **soundtrack**. It is not a business. It is the thing that makes the business human.

### Absolutely Plausible — The Business Entity

The freelance agency and creative umbrella. Web development, AI tooling, consulting, hackFatura, client work. Creative collective roots since 2008. Formally incorporated July 2014. Running for 11+ years.

Absolutely Plausible is the **engine**. It ships software, signs contracts, sends invoices. It does the work.

!!! note "The connection"
    They share the same visual identity — warm off-white, amber and orange, Share Tech Mono throughout. Robot Fantome provides the creative soul. Absolutely Plausible provides the structure. Neither works without the other.

---

## What We Stand For

### Community-first
"We" not "I" when talking about the mission. Open-source advocate — not as a marketing strategy, as a way of life. If we build something useful, we share it. Full stop.

### Sustainability-forward
Not a marketing claim. A lived practice. Wildlife refuge volunteer. Composting at a silent meditation retreat. Culinary training at a social enterprise. The zero-waste principle predates this business plan by years.

### Punk ethos
DIY. Anti-corporate. Build your own tools. Question the defaults. Ship it ugly, ship it fast, make it yours. The aesthetic of a zine, a manifesto, an art project — not a corporate site. If it feels too polished, something is wrong.

### Original music everywhere
Robot Fantome is the soundtrack to everything we build. Every demo, every presentation, every product — scored with music we own, recorded ourselves, released independently. No stock audio. No licensing fees. No compromise.

---

## Visual Identity

### The Warm Palette

White space is a feature. Content is the color. Art, collages, music, photos bring the vibrancy. The UI is the frame — and the frame stays neutral.

| Role | Hex | Swatch |
|------|-----|--------|
| **Background** | `#f0eeeb` | Warm off-white. The canvas. |
| **Surface** | `#ffffff` | Cards, inputs, overlays. |
| **Card** | `#f8f6f3` | Subtle elevation. Code blocks. |
| **Accent (Orange)** | `#d4621a` | Links, highlights, the heartbeat. |
| **Copper** | `#9c5220` | Subheadings, secondary warmth. |
| **Rust** | `#6b3310` | Warnings, deep emphasis. |
| **Text** | `#2c2924` | Primary text. Warm charcoal. |

### Typography

One font. Everywhere. No exceptions.

| Role | Font | Fallback |
|------|------|----------|
| **Everything** | Share Tech Mono | `'JetBrains Mono', monospace` |

Share Tech Mono for headings, body, code, navigation, captions, metadata. The monospace grid gives everything a mechanical, editorial rhythm — like a typewriter, a terminal, a zine layout. This is intentional. The uniformity is the brand.

### Design Principles

1. **White space is a feature.** Let things breathe. If it feels crowded, remove something.
2. **Content is the color.** The frame is neutral. Art, music, photos, and projects bring vibrancy.
3. **Minimal chrome.** Few borders, no heavy shadows, no gradients. Clean lines. Warm surfaces.
4. **Typography-driven.** Big, confident headings. Readable body text. The words matter more than the decoration.
5. **Open-source aesthetic.** Feels like a zine, a manifesto, an art project — not a corporate site.

### Logo / Wordmark

- **"ROBOT FANTOME"** — uppercase, Share Tech Mono, tracked out
- **"absolutely plausible"** — tagline, lowercase, lighter weight
- Ghost emoji as casual icon (not a formal logo element)

---

## The Rule

!!! warning "Never mix our brand with client brands"
    **Our work** (Robot Fantome / Absolutely Plausible) = warm off-white `#f0eeeb`, orange `#d4621a`, editorial Share Tech Mono.

    **Client work** = the client's own palette. Always. No exceptions.

    Check this page before building any UI. If you are touching client-facing code, you are using the client's colors, not ours.

---

## Client: PCJ / Parazinho Chassis Jig { #pcj }

Industrial. Mechanical. Bold and grounded. Used in **hackFatura**.

| Role | Hex |
|------|-----|
| **Background** | `#0A0A0F` |
| **Primary Red** | `#E74C3C` / `#C0392B` |
| **Graphite Surface** | `#333333` |
| **Text** | `#F0F0F0` |

**Typography:** Orbitron (display), Share Tech Mono (body). Dark theme, cyberpunk, scanlines, glow effects.

PCJ is the opposite end of the spectrum — black backgrounds, red accents, graphite surfaces. That contrast is the point. Their brand is theirs. We build it faithfully.

!!! warning "Color Rule"
    All work for PCJ must use the PCJ palette — never the Robot Fantome / Absolutely Plausible editorial palette.

---

## Domain Strategy

### Current Setup

| Domain | Purpose | Status |
|--------|---------|--------|
| `robotfantome.com` | Main brand site (v1 — to be built) | DNS at Dreamhost, moving to Namecheap + Cloudflare |
| `plan.robotfantome.com` | This business plan site (MkDocs on Cloudflare Pages) | Live |
| `mech.robotfantome.com` | hackFatura (PCJ field management app) | DNS propagating |
| `robotfantome.crypto` | Web3 / blockchain domain (Unstoppable Domains, Polygon) | Redirect to plan.robotfantome.com |

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

The goal is to serve the site from IPFS so `robotfantome.crypto` resolves to a truly decentralized, censorship-resistant version. No servers, no hosting fees, no single point of failure. This fits the open-source, zero-waste, punk ethos of the brand.

**Planned implementation:**

1. **Fleek** (fleek.co) — GitHub integration that auto-deploys `site/` to IPFS on every push to `main`
2. **GitHub Action** — after MkDocs build, pin `site/` to IPFS via Pinata or Fleek API, retrieve new CID
3. **Unstoppable Domains API** — auto-update the `dweb.ipfs.hash` record on-chain with the new CID
4. **Result** — every `git push` updates both Cloudflare Pages (`plan.robotfantome.com`) AND IPFS (`robotfantome.crypto`) automatically

**Decision trigger:** Implement IPFS deploy when `robotfantome.com` v1 is live and the full site is worth decentralizing. Not before.

See [Roadmap](projects/roadmap.md) for the backlog task.

---

## Adding a New Client

Before building any client UI, copy this template and fill it in. Every client gets their own palette. No client ever inherits ours.

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

---

> *The ghost in the machine. Open source. Zero waste. Absolutely plausible.*
