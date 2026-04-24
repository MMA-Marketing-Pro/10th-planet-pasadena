# 10th Planet Pasadena — Phase 3: Authority (Curation + Comparisons) + More Locations

**Target ship date:** _____
**Prereq:** Phases 1–2 shipped; 70%+ indexed.

## Objective

Build **25 pages** that capture commercial and authority intent: "best X in Y" listicles, style-vs-style comparisons, and another round of Tier-2 locations.

## Page Manifest — 25 Pages

### Group A · Curation / "Best of" Listicles (8 pages)

URL pattern: `/guides/best-{thing}-in-{city}/`

> Before shipping, client must confirm comfort with naming competitors. Default: be honest but gracious — list 3–4 real local BJJ schools, explain what each is known for, then position 10P Pasadena by its differentiator (No-Gi specialization, 6 black belts, Nano Techs program).

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 1 | `/guides/best-bjj-gym-in-pasadena/` | best bjj gym pasadena | Best BJJ Gym in Pasadena, CA (2026 Guide) |
| 2 | `/guides/best-no-gi-bjj-in-los-angeles/` | best no-gi jiu-jitsu los angeles | Best No-Gi Jiu-Jitsu in Los Angeles |
| 3 | `/guides/best-kids-martial-arts-in-pasadena/` | best kids martial arts pasadena | Best Kids Martial Arts in Pasadena |
| 4 | `/guides/best-10th-planet-affiliates-southern-california/` | 10th planet affiliates california | Best 10th Planet Affiliates in Southern California |
| 5 | `/guides/best-bjj-for-beginners-san-gabriel-valley/` | best bjj for beginners san gabriel valley | Best Beginner-Friendly BJJ in the SGV |
| 6 | `/guides/best-martial-arts-schools-altadena/` | martial arts altadena | Best Martial Arts Schools in Altadena |
| 7 | `/guides/best-womens-self-defense-pasadena/` | women's self defense pasadena | Best Women's Self-Defense Classes in Pasadena |
| 8 | `/guides/` | (hub) | Jiu-Jitsu + Martial Arts Guides |

### Group B · Comparison Pages (7 pages)

URL pattern: `/compare/{x}-vs-{y}/`

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 9 | `/compare/no-gi-vs-gi-jiu-jitsu/` | no gi vs gi jiu jitsu | No-Gi vs Gi Jiu-Jitsu — Which Should You Train? |
| 10 | `/compare/bjj-vs-wrestling/` | bjj vs wrestling | BJJ vs Wrestling — What's the Difference? |
| 11 | `/compare/bjj-vs-judo/` | bjj vs judo | BJJ vs Judo — Side-by-Side Comparison |
| 12 | `/compare/10th-planet-vs-traditional-bjj/` | 10th planet vs traditional bjj | 10th Planet vs Traditional BJJ |
| 13 | `/compare/bjj-vs-mma/` | bjj vs mma | BJJ vs MMA — Which Is Right for You? |
| 14 | `/compare/bjj-vs-krav-maga-self-defense/` | bjj vs krav maga | BJJ vs Krav Maga for Real Self-Defense |
| 15 | `/compare/` | (hub) | Jiu-Jitsu Comparisons |

### Group C · Additional Locations (10 pages)

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 16 | `/locations/alhambra/` | BJJ Alhambra | Jiu-Jitsu Near Alhambra, CA |
| 17 | `/locations/alhambra/adult-bjj/` | adult bjj alhambra | Adult BJJ Near Alhambra |
| 18 | `/locations/san-gabriel/` | BJJ San Gabriel | Jiu-Jitsu Near San Gabriel |
| 19 | `/locations/san-gabriel/kids-bjj/` | kids bjj san gabriel | Kids Jiu-Jitsu Near San Gabriel |
| 20 | `/locations/burbank/` | BJJ Burbank | Jiu-Jitsu Near Burbank, CA |
| 21 | `/locations/burbank/no-gi-jiu-jitsu/` | no-gi bjj burbank | No-Gi Jiu-Jitsu for Burbank Locals |
| 22 | `/locations/la-crescenta/` | BJJ La Crescenta | Jiu-Jitsu Near La Crescenta-Montrose |
| 23 | `/locations/la-crescenta/kids-bjj/` | kids bjj la crescenta | Kids Jiu-Jitsu Near La Crescenta |
| 24 | `/locations/pasadena/nano-techs/` | nano techs pasadena | Nano Techs Jiu-Jitsu (Ages 4-6) in Pasadena |
| 25 | `/locations/pasadena/teen-bjj/` | teen bjj pasadena | Teen Jiu-Jitsu Classes in Pasadena |

## Content Outlines

### Curation / "Best of" Page (~1100 words — needs depth to rank)

1. Hero — H1 + subhead + last-updated date
2. Short intro — 120 words: what makes a "best" X in this context
3. **Ranked list** — 5–7 schools with 150 words each:
   - Name + location (with honest acknowledgment of their strengths)
   - Best for: (e.g., "Best for kids under 6", "Best for competition")
   - Website / link
   - For 10P Pasadena: position as winner for No-Gi specialization + black-belt-heavy staff
4. How to choose — 150 words of decision criteria
5. FAQ — 4 questions (marked as FAQPage)
6. CTA — "Come see what a 10P mat room looks like — free trial"

Required schema: `ItemList` (for the ranked list) + `BreadcrumbList` + `Article` + `FAQPage`

### Comparison Page (~900 words)

1. Hero — H1 + side-by-side summary table (visual)
2. What each is — 180 words per side
3. **Key differences** — 250 words in a comparison table format
4. Which is right for you — 150 words (split by goal: self-defense, competition, fitness, kids)
5. Can you train both? — 100 words (often yes; mention how 10P integrates)
6. FAQ — 3 Qs
7. CTA — lead modal for "Try No-Gi BJJ with us"

Required schema: `Article` + `BreadcrumbList` + `FAQPage`

## Internal Linking Strategy

- Curation pages link OUT to competitor sites (external) + DOWN to 5 relevant 10P Pasadena service pages
- Comparison pages link to the 2 core services being compared + 2 related glossary terms
- Add `/guides/` and `/compare/` to footer's "Resources" column
- Update Phase 1 glossary pages to link to relevant comparisons (e.g., "What is No-Gi" → "No-Gi vs Gi")

## Shared Rules (unchanged from Phase 1/2)

Same brand, same style, same mobile bar, "Powered by MMA Marketing Pro" attribution required, lead modal on every CTA, min 700 words (1100 for curation).

## Post-Build Checklist

- [ ] 25 pages built
- [ ] Phase 1 + 2 pages updated with inbound links to new comparisons + curation
- [ ] `/guides/` and `/compare/` added to footer
- [ ] `/seo-audit 10th-planet-pasadena` run
- [ ] sitemap.xml updated (75 total URLs)
- [ ] Commit: `Phase 3 SEO: 8 curation + 7 comparisons + 10 locations (+25 pages)`
- [ ] Push, auto-deploy
- [ ] Request indexing on curation pages (highest commercial intent)

## Measure After 21 Days

- Expect 5-7 of the Phase 3 pages to rank in top 50
- Curation pages especially may take 60-90 days (highly competitive)
- Track lead conversions attributed to guides + compare URLs
