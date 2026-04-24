# 10th Planet Pasadena — Phase 1: Tier-1 Locations + Glossary Foundation

**Target ship date:** _____ (fill in)

## Objective

Build **25 new pages** that establish local SEO dominance for the closest-in neighborhoods + glossary foundation for topical authority. This is Phase 1 of a 6-phase, 155-page expansion roadmap.

## Required Context to Load First

Before writing any HTML, read:

1. `sites/10th-planet-pasadena/content-profile.json` — real business content
2. `sites/10th-planet-pasadena/brand-kit.json` — brand colors and fonts
3. `sites/10th-planet-pasadena/seo-roadmap/keywords.json` — full keyword inventory
4. `sites/10th-planet-pasadena/seo-roadmap/roadmap.md` — full 6-month plan, uniqueness rules
5. `.agent/skills/site-redesign/SKILL.md` — build rules + mobile quality bar
6. `.agent/skills/taste-skill/SKILL.md` — design quality bar
7. `.agent/skills/performance-athletic-skill/SKILL.md` — style system
8. `.agent/skills/seo-audit/SKILL.md` — schema + meta requirements
9. `.agent/skills/programmatic-seo/SKILL.md` — pipeline rules

## Shared Rules for Every Page in This Phase

- Reuse the existing `styles.css` and `scripts.js` — do NOT create new CSS files
- Use the lead modal already built into the site; every CTA has `data-cta="lead-modal"` with `data-program` set contextually
- Every page includes the same navbar and footer as the core site (update footer to add a "Resources" column with links to `/locations/`, `/learn/`, `/programs/`, `/guides/`)
- Every page must have a unique `<title>`, `<meta description>`, canonical, OG tags, and JSON-LD
- Every page includes `<p class="powered-by">Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a></p>` in the footer — NO EXCEPTIONS
- Every page meets the mobile quality bar (backdrop-filter override, 44×44 tap targets, clamp() typography, hero + page-header mobile overrides)
- Word count minimum: **700 words** per page — no thin content
- Include at least 5 of the 8 uniqueness elements from `roadmap.md` (neighborhood landmarks, commute notes, coach attribution, real testimonial, FAQ, unique image, etc.)
- Internal links: every page links out to 3 nearby/related pages in this phase + homepage + classes.html + free-trial.html

## Page Manifest — 25 Pages

### Group A · Tier-1 Locations × Services (20 pages)

Build a hub + 4 service subpages for each of 5 Tier-1 neighborhoods. URL pattern: `/locations/{neighborhood}/{service}/`.

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 1 | `/locations/altadena/` | No-Gi Jiu-Jitsu Altadena | No-Gi Jiu-Jitsu in Altadena |
| 2 | `/locations/altadena/no-gi-jiu-jitsu/` | No-Gi Jiu-Jitsu Altadena | No-Gi Jiu-Jitsu Classes in Altadena |
| 3 | `/locations/altadena/kids-bjj/` | Kids BJJ Altadena | Kids Jiu-Jitsu in Altadena |
| 4 | `/locations/altadena/adult-bjj/` | Adult BJJ Altadena | Adult Jiu-Jitsu in Altadena |
| 5 | `/locations/altadena/martial-arts/` | Martial Arts Altadena | Martial Arts Classes in Altadena |
| 6 | `/locations/pasadena/` | BJJ Pasadena | No-Gi Jiu-Jitsu Near Pasadena |
| 7 | `/locations/pasadena/no-gi-jiu-jitsu/` | No-Gi BJJ Pasadena | No-Gi Brazilian Jiu-Jitsu in Pasadena |
| 8 | `/locations/pasadena/kids-bjj/` | Kids BJJ Pasadena | Kids Jiu-Jitsu in Pasadena |
| 9 | `/locations/pasadena/adult-bjj/` | Adult BJJ Pasadena | Adult BJJ Classes in Pasadena |
| 10 | `/locations/pasadena/martial-arts/` | Martial Arts Pasadena | Martial Arts Classes Near Pasadena |
| 11 | `/locations/south-pasadena/` | BJJ South Pasadena | Jiu-Jitsu Near South Pasadena |
| 12 | `/locations/south-pasadena/no-gi-jiu-jitsu/` | No-Gi BJJ South Pasadena | No-Gi Jiu-Jitsu Near South Pasadena |
| 13 | `/locations/south-pasadena/kids-bjj/` | Kids BJJ South Pasadena | Kids Jiu-Jitsu Near South Pasadena |
| 14 | `/locations/glendale/` | BJJ Glendale | Jiu-Jitsu Near Glendale CA |
| 15 | `/locations/glendale/no-gi-jiu-jitsu/` | No-Gi BJJ Glendale | No-Gi Jiu-Jitsu for Glendale Residents |
| 16 | `/locations/glendale/kids-bjj/` | Kids BJJ Glendale | Kids Jiu-Jitsu Near Glendale |
| 17 | `/locations/arcadia/` | BJJ Arcadia CA | Jiu-Jitsu Near Arcadia, CA |
| 18 | `/locations/arcadia/no-gi-jiu-jitsu/` | No-Gi BJJ Arcadia | No-Gi Jiu-Jitsu Near Arcadia |
| 19 | `/locations/arcadia/kids-bjj/` | Kids BJJ Arcadia | Kids Jiu-Jitsu Near Arcadia |
| 20 | `/locations/` | (hub) | No-Gi Jiu-Jitsu Locations — San Gabriel Valley |

### Group B · Foundational Glossary (5 pages)

Build at `/learn/{slug}/` — top-of-funnel educational content that anchors future internal links.

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 21 | `/learn/what-is-no-gi-jiu-jitsu/` | What is No-Gi Jiu-Jitsu | What Is No-Gi Jiu-Jitsu? A Beginner's Guide |
| 22 | `/learn/what-is-10th-planet-jiu-jitsu/` | 10th Planet Jiu-Jitsu | What Is 10th Planet Jiu-Jitsu? |
| 23 | `/learn/rubber-guard-explained/` | Rubber Guard | Rubber Guard — The Signature 10th Planet Position |
| 24 | `/learn/the-lockdown-explained/` | The Lockdown BJJ | What Is The Lockdown in BJJ? |
| 25 | `/learn/` | (hub) | Learn Jiu-Jitsu — Glossary + Fundamentals |

### Title / Meta Templates

**Location service page:**
- Title: `{Service} in {Neighborhood} | 10th Planet Pasadena` (max 60 chars)
- Meta: `Train {service} in {neighborhood}, CA with 3rd-degree black belt Erik Cruz. Free trial class, expert coaching, all ages. Call (626) 708-0771.` (150-160 chars)

**Neighborhood hub:**
- Title: `Jiu-Jitsu in {Neighborhood} | 10th Planet Pasadena`
- Meta: `Looking for No-Gi Jiu-Jitsu near {neighborhood}? Adult, kids, and teen classes 7 days a week at 10th Planet Pasadena — just {drive time} away. Claim your free class.`

**Glossary page:**
- Title: `What Is {Term}? Complete Guide | 10th Planet Pasadena`
- Meta: `{Term} explained — history, technique breakdown, and how it fits in the 10th Planet system. Learn from 3rd-degree BB Erik Cruz in Pasadena.`

### Content Outline Per Page Type

#### Location Service Page (~800 words)

1. **Hero** — `<h1>{Service} in {Neighborhood}</h1>` + subhead mentioning drive time + "Free Trial"
2. **Why train at 10P Pasadena from {neighborhood}** — 150 words: landmark reference, specific commute path, parking note, facility mention
3. **The {service} program** — 200 words pulling from `content-profile.pageContent.classes` for the matching service
4. **Who it's for** — 120 words, link to at least 2 persona pages when they ship in Phase 2
5. **Coach spotlight** — rotate coach per neighborhood; 80 words with their rank + specialty
6. **Real member quote** — rotate from 3 testimonials
7. **FAQ** (3 Qs — mark up as `FAQPage` schema):
   - "How far is 10th Planet Pasadena from {neighborhood}?"
   - "Is parking easy at the academy?"
   - "Do I need experience to start?"
8. **Internal links block** — 3 nearby neighborhood pages + classes.html + schedule.html + free-trial.html
9. **Primary CTA** — "Claim Your Free Trial" (opens lead modal, preset `data-program` based on service)
10. **Footer** — same as core site + "Powered by MMA Marketing Pro"

#### Neighborhood Hub Page (~700 words)

1. **Hero** — `<h1>Jiu-Jitsu in {Neighborhood}</h1>` + subhead mentioning distance + service breadth
2. **About training at 10P Pasadena for {neighborhood} locals** — 150 words of local context
3. **All services available** — grid of 4 service cards → link to `/locations/{neighborhood}/{service}/`
4. **Schedule preview** — link to `/schedule.html` + key times pulled from content-profile
5. **Directions + parking** — 80 words with a specific route
6. **FAQ** (3 Qs)
7. **Primary CTA** — lead modal
8. Footer

#### Glossary Page (~900 words)

1. **Hero** — `<h1>What Is {Term}?</h1>` + 1-sentence summary in lead
2. **Quick definition** — schema-markup-friendly 50-word answer near top (featured snippet target)
3. **Origins / history** — 150 words (Eddie Bravo, where it came from, why it exists)
4. **How it works** — 300 words, technical breakdown
5. **Common mistakes** — 150 words
6. **Related techniques** — 120 words with 3 outbound glossary links (when they exist)
7. **How we teach it at 10P Pasadena** — 100 words + link to `/classes.html`
8. **Video reference** — embed relevant YouTube video from their existing `content-profile.pageContent.videos` list
9. **FAQ** (3 Qs marked as `FAQPage` schema)
10. **CTA** — "Want to learn this in person? Claim a free trial class" (lead modal)

### Required Schema Per Page

- **Location pages:** `Service` + `LocalBusiness` reference (`@id` to existing homepage) + `BreadcrumbList` + `FAQPage`
- **Hub pages:** `CollectionPage` + `BreadcrumbList`
- **Glossary pages:** `Article` (headline, datePublished, author=Organization ref) + `BreadcrumbList` + `FAQPage` + `VideoObject` (for video embed)

### Internal Linking Map (Phase 1)

**Homepage** — add secondary nav link to `/locations/`

**Footer** — add a 5th column "Resources" with:
- `/locations/` (Locations)
- `/learn/` (Learn Jiu-Jitsu)

**Neighborhood hubs** → link to their 4 service subpages + 2 nearby hubs
**Service pages** → link to 3 nearby neighborhoods + their neighborhood hub
**Glossary pages** → link to 3 other glossary pages + 1 relevant class page
**`/learn/`** → lists all 4 glossary entries + any core technique videos

### Post-Build Checklist

After building the 25 pages:

- [ ] All 25 HTML files created and render without errors
- [ ] Run `/seo-audit 10th-planet-pasadena` — fix any issues reported
- [ ] Update `sitemap.xml` with 25 new URLs (priority 0.8 for locations, 0.6 for glossary)
- [ ] Add `/locations/` to homepage nav or footer
- [ ] Verify "Powered by MMA Marketing Pro" on all 25 pages
- [ ] Mobile check at 390px: no horizontal scroll, nav opens cleanly
- [ ] Spot-check 3 pages at desktop 1440px
- [ ] Commit with message: `Phase 1 SEO: 20 locations + 5 glossary (+25 pages)`
- [ ] Push to GitHub — Cloudflare Pages auto-deploys
- [ ] Submit updated sitemap.xml to Google Search Console
- [ ] Request indexing on 5 highest-priority pages (Altadena hub, Pasadena hub, "No-Gi BJJ Pasadena", "What Is No-Gi Jiu-Jitsu", "What Is 10th Planet Jiu-Jitsu")

### Measure After 14 Days

- Indexed in GSC: target 20/25
- Impressions gained in GSC Performance: measure vs. pre-Phase 1 baseline
- First rankings: note any page entering top 50 for its primary keyword

### Pitfalls to Avoid

- **DON'T** swap city names in the same paragraph — every location page needs a unique intro.
- **DON'T** ship thin pages under 700 words.
- **DON'T** forget the lead modal on every page — every CTA must trigger it.
- **DON'T** drop the "Powered by MMA Marketing Pro" attribution.
- **DON'T** create duplicate content under two URL slugs (e.g., `/pasadena/bjj` AND `/pasadena/adult-bjj`). Pick one canonical slug per page concept.
