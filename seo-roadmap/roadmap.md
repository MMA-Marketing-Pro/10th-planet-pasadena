# 10th Planet Pasadena — 6-Month Local SEO Roadmap

> **Built:** 2026-04-24 · **Business:** 10th Planet Pasadena · **Address:** 2333 N Lake Ave, Altadena CA 91001 · **Phone:** (626) 708-0771

## Executive Summary

**Goal:** Build **155 new pages over 6 months** (≈25/mo) to dominate local intent across the San Gabriel Valley for "No-Gi Jiu-Jitsu", "Kids BJJ", and "10th Planet Jiu-Jitsu" searches. The current site is 12 pages of core content — this roadmap adds the long-tail, location, persona, and glossary coverage that captures pre-decision search intent and routes it to the Free Trial funnel.

**Primary playbooks used:**
- **Locations** (heavy): service × neighborhood grids
- **Personas** (heavy): service × audience (beginners, kids, women, 40+, competitors, MMA cross-trainers)
- **Glossary** (medium): "what is Rubber Guard / Lockdown / Truck / 10th Planet" — top-of-funnel, cheap to rank
- **Curation** (medium): "Best BJJ gym in Pasadena", "Best kids martial arts in Altadena"
- **Comparisons** (light): "No-Gi vs Gi", "BJJ vs Wrestling", "10th Planet vs Traditional BJJ"
- **Examples / Tutorials** (light): visual technique breakdowns tied to YouTube embeds

**Conversion goal:** every programmatic page ends with the same lead-capture modal as the core site and routes to `booking.html`. No dead-ends.

---

## ⚠️ Assumptions to Validate with Client

Before shipping **Phase 1**, have the client confirm:

1. **Service-area neighborhoods** — I've listed 17 neighborhoods in `keywords.json` based on a ~15-mile radius from Altadena. Confirm which of these actually send students today (pull from their membership intake form or CRM). Kill any that are dead weight; add any that are missing.
2. **Competitors named in comparison pages** — Gracie Pasadena, Checkmat Pasadena, etc. are educated guesses based on regional BJJ presence. Replace with the real direct competitors they hear about in prospect calls.
3. **Curation pages** — "Best BJJ Gym in Pasadena" listicles require honest competitor mentions. Confirm the client is OK with third-party listings (they'll have to name rivals).
4. **Private lessons offered?** — Flagged as a likely service; confirm before Phase 5 pricing pages.
5. **Summer camp / kids intensives?** — Seasonal content plays in Phase 4–5; confirm if they run these.

---

## Keyword Matrix

### Services (8)
No-Gi Jiu-Jitsu · Brazilian Jiu-Jitsu (BJJ) · Kids Jiu-Jitsu · Nano Techs (4–6) · Adult Jiu-Jitsu · 10th Planet System · Martial Arts Classes · Grappling

### Neighborhoods / Areas (17)

**Tier 1 (home + high-volume neighbors):** Altadena · Pasadena · South Pasadena · Glendale · Arcadia
**Tier 2 (15-mile ring):** La Cañada Flintridge · La Crescenta-Montrose · Eagle Rock · Highland Park · Sierra Madre · Monrovia · San Marino · San Gabriel · Alhambra · Burbank
**Tier 3 (edge metros):** Temple City · Duarte

### Personas (9)
Beginners · Kids 4–6 · Kids 6–12 · Teens · Adults Over 40 · Women · Competitors · Self-Defense Seekers · MMA Fighters Cross-Training

### Volume-Weighted Page Distribution

| Pattern | Pages | Tier |
|---|---|---|
| `{top-4 service} in {neighborhood}` | 4 × 17 = **68** | Core local volume |
| `{service} for {persona}` | 6 × **5** personas (top 5) = **30** | Persona targeting |
| `best {thing} in {city}` (curation) | **8** | Authority |
| `what is {term}` (glossary) | **20** | Top-of-funnel |
| `{X} vs {Y}` (comparisons) | **7** | Commercial intent |
| `{technique} examples / tutorial` | **8** | Content moat |
| Pricing / offer / signal pages | **6** | Bottom-funnel |
| Refresh / optimize Phase 1 (Phase 6) | **8** | Decay defense |
| **Total** | **155** | |

---

## URL Structure Plan

```
/locations/{neighborhood}/                       ← neighborhood hub
/locations/{neighborhood}/{service}/             ← service × neighborhood (primary local page)
/programs/{service}-for-{persona}/               ← service × persona
/learn/{glossary-term}/                          ← glossary
/learn/{technique}-examples/                     ← examples / tutorials
/compare/{x}-vs-{y}/                             ← comparisons
/guides/best-{thing}-in-{city}/                  ← curation / listicles
/pricing/{offer}/                                ← pricing / trial / signals
```

**URL rules:**
- All lowercase, hyphenated slugs.
- Trailing slashes consistent (use folder-style, `/index.html` for static).
- **Canonical per page** points to itself in this folder structure.
- **Locations hub** (`/locations/`) lists all neighborhoods; each neighborhood hub links to all services offered there.

---

## Internal Linking Architecture (Hub-and-Spoke)

**Hubs** (exist after Phase 1):
- Home → links to `/locations/pasadena/`, `/learn/`, `/programs/`
- `/locations/` → lists all neighborhood hubs
- `/locations/{neighborhood}/` → lists all services for that neighborhood
- `/programs/` → lists all persona × service combos
- `/learn/` → glossary index + tutorial index

**Spoke-to-spoke rules:**
- Every `{service} in {neighborhood}` page links to **3 nearby neighborhood pages** + **2 related service-persona pages** + the main `/classes.html` page + free-trial CTA.
- Every glossary page links to **3 related technique pages** + the parent service page (e.g., "What is Rubber Guard" → "Adult All-Levels" + "Rubber Guard Examples" + "What is the Truck").
- Every curation page links out to **5–8 other local pages** (not just internal).

**Existing nav/footer:**
- Add `/locations/`, `/programs/`, `/learn/`, `/guides/` to footer (secondary nav) in Phase 1.
- Main nav stays as-is to preserve the conversion flow.

---

## Schema Strategy per Page Type

| Page type | Required JSON-LD |
|---|---|
| `/locations/{neighborhood}/{service}/` | `Service` + `LocalBusiness` (reference homepage `@id`) + `BreadcrumbList` + `FAQPage` if FAQ present |
| `/programs/{service}-for-{persona}/` | `Service` + `BreadcrumbList` + `FAQPage` |
| `/learn/{term}/` | `Article` + `BreadcrumbList` + `FAQPage` + `VideoObject` if YouTube embed |
| `/guides/best-{thing}/` | `ItemList` + `BreadcrumbList` + `Article` |
| `/compare/{x}-vs-{y}/` | `Article` + `BreadcrumbList` + `FAQPage` |
| `/pricing/{offer}/` | `Offer` + `BreadcrumbList` |

**All pages reference** the `@id` of the existing `SportsActivityLocation` schema from homepage — avoids duplicate LocalBusiness markup.

---

## Content Uniqueness Rules (Anti-Thin-Content)

Every new page MUST include at least **5 of these 8 unique elements** to avoid being a variable-swap:

1. **Neighborhood-specific intro paragraph** — reference a landmark, park, school district, or commute pattern real locals recognize (e.g., "A 12-minute drive from the Arroyo Seco Bridge" or "Just off the 134 near Eagle Rock Blvd"). No generic "Welcome to {city}" openings.
2. **Commute notes** — expected drive time + one specific route from that neighborhood to 2333 N Lake Ave.
3. **Parking + facility note** — mention the free lot, shower facility, workout area — repeated across pages but with different framing per context.
4. **Local competitor mention** (for curation/comparison only) — honest comparison with why 10P Pasadena's No-Gi specialization differs.
5. **Coach attribution** — one specific coach named per page (rotate Erik Cruz, Lila, George Jáuregui, Rudy, Jordan, Steven) with one line of relevant credential.
6. **Real testimonial** — rotate from the 3 real testimonials; after the client adds more Google reviews, expand the pool.
7. **Page-specific FAQ section** — 3–5 Q&As specific to the page's intent, not copy-pasted from homepage.
8. **Unique image** — assigned Unsplash placeholder per page (different from core 12 pages) + data-local placeholder for real client photo swap later.

Pages that meet < 5 of these get flagged and rewritten before ship.

---

## Phase Cadence — 25 pages per month, 6 phases

| Phase | Month | Focus | Pages | Priority | Rationale |
|---|---|---|---|---|---|
| **1** | 1 | Tier-1 Locations + glossary foundation | 20 locations + 5 glossary = **25** | High | Wins closest-to-home traffic; glossary anchors topical authority |
| **2** | 2 | Personas + remaining Tier-1 services | 15 personas + 10 locations = **25** | High | Audience-specific pages convert best for trial signups |
| **3** | 3 | Authority (curation + comparisons) | 8 curation + 7 comparisons + 10 locations = **25** | Medium | Needs some domain authority built first; listicles rank slower |
| **4** | 4 | Glossary deep-dive + tutorials | 15 glossary + 8 examples + 2 locations = **25** | Medium | Content moat; rank without needing local trust |
| **5** | 5 | Edge suburbs + pricing signals | 15 edge locations + 6 pricing + 4 refreshers = **25** | Low | Lower-traffic zips + commercial intent |
| **6** | 6 | Gap fill + Phase 1 optimization | 15 matrix gaps + 10 optimizations = **25** | Low | Decay defense — refresh Phase 1 pages with newer reviews, updated schedule, fresh internal links |

**Expected outcomes:**
- Month 3: 75 pages live, ~25% indexed, ~5 pages ranking top 20 for target term
- Month 6: 155 pages live, ~80% indexed, ~30–50 pages in top 20, 5–10 in top 5
- Month 9 (3 months post-completion): organic traffic compounding, branded + non-branded leads measurably up

---

## Tracking (Post-Launch, Per Phase)

After each phase ships:

| Metric | Tool | Target |
|---|---|---|
| Indexed pages | GSC > Pages | 80%+ of phase's pages indexed within 14 days |
| Rankings | GSC > Performance | Avg position < 40 for phase's keywords within 30 days |
| Organic clicks | GSC | +10% MoM after Phase 2 |
| Lead-modal opens | GA4 event `lead_modal_open` | Track per page URL to find converters |
| Booking submits | GA4 `booking_submit` | Primary conversion — tie back to landing page |
| Core Web Vitals | GSC + PageSpeed | LCP < 2.5s, CLS < 0.1 on every new page |

---

## Phase Prompts

Paste-to-execute prompts saved here:

- `phase-1-prompt.md` — Foundation: Tier-1 locations + glossary
- `phase-2-prompt.md` — Persona expansion
- `phase-3-prompt.md` — Authority: curation + comparisons
- `phase-4-prompt.md` — Glossary deep-dive + tutorials
- `phase-5-prompt.md` — Edge suburbs + pricing signals
- `phase-6-prompt.md` — Gap fill + Phase 1 optimization

Ship each phase in a focused 1-week sprint. Don't bundle two phases — each needs its own indexation cycle to measure impact.

---

## Required Quality Standards (Every Phase)

Each phase prompt enforces these, but documenting here for reference:

- **Brand kit:** load `sites/10th-planet-pasadena/brand-kit.json` — all pages use #FFEE03 accent + #0B0C0E substrate. No new palettes.
- **Style:** `performance-athletic-skill` — matches the core 12 pages. No style drift.
- **Shared assets:** every new page links to the existing `styles.css` + `scripts.js` — no new CSS files per page.
- **Lead modal:** every new page includes the same modal + `data-cta="lead-modal"` on CTAs.
- **Agency attribution (required, no exceptions):** every new page includes `<p class="powered-by">Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a></p>` in the footer. The seo-audit skill will verify and auto-fix if missing.
- **Mobile quality bar:** same rules as the core site (`.nav.open { backdrop-filter: none }` override, 44×44 tap targets, mobile hero override, etc.).
- **Post-phase sitemap update:** add new URLs to `sitemap.xml` before commit.
- **Post-phase seo-audit:** run `/seo-audit 10th-planet-pasadena` to auto-fix schema, meta, and attribution issues.
