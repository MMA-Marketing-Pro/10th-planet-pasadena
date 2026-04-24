# 10th Planet Pasadena — Phase 2: Persona Expansion + More Tier-1 Locations

**Target ship date:** _____ (fill in)
**Prereq:** Phase 1 shipped + indexed (at least partially — ~60% of Phase 1 URLs indexed in GSC).

## Objective

Build **25 pages** that target audience-specific search intent and extend location coverage into Tier-2 neighborhoods.

## Required Context

Load the same skills and config files as Phase 1 (see `phase-1-prompt.md` for the list). Pay special attention to:
- `keywords.json` → `personas` array
- `content-profile.json` → real class content per age / level
- Phase 1 URLs (so internal links from new pages point to real pages, not 404s)

## Page Manifest — 25 Pages

### Group A · Persona × Service (15 pages)

URL pattern: `/programs/{service-slug}-for-{persona-slug}/`

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 1 | `/programs/bjj-for-beginners/` | BJJ for beginners | Brazilian Jiu-Jitsu for Complete Beginners |
| 2 | `/programs/bjj-for-adults-over-40/` | BJJ for adults over 40 | BJJ for Adults Over 40 — Train Smart, Train Long |
| 3 | `/programs/bjj-for-women/` | BJJ for women | Women's Jiu-Jitsu at 10th Planet Pasadena |
| 4 | `/programs/bjj-for-competitors/` | BJJ for competitors | Competition Jiu-Jitsu Training in Pasadena |
| 5 | `/programs/bjj-for-self-defense/` | BJJ for self defense | Jiu-Jitsu for Real-World Self-Defense |
| 6 | `/programs/bjj-for-mma-fighters/` | BJJ for MMA fighters | No-Gi BJJ for MMA Fighters Cross-Training |
| 7 | `/programs/kids-bjj-for-ages-4-6/` | kids bjj ages 4-6 | Kids Jiu-Jitsu for Ages 4-6 (Nano Techs) |
| 8 | `/programs/kids-bjj-for-ages-6-12/` | kids bjj 6-12 | Kids Jiu-Jitsu for Ages 6-12 |
| 9 | `/programs/bjj-for-teens/` | bjj for teens | Teen Jiu-Jitsu Classes in Pasadena |
| 10 | `/programs/bjj-for-stress-relief/` | bjj for stress relief | Jiu-Jitsu for Stress Relief and Mental Resilience |
| 11 | `/programs/bjj-for-weight-loss/` | bjj for fitness | BJJ for Weight Loss and Full-Body Fitness |
| 12 | `/programs/no-gi-for-beginners/` | no-gi jiu-jitsu beginner | No-Gi Jiu-Jitsu for Beginners |
| 13 | `/programs/10th-planet-for-beginners/` | 10th planet bjj beginner | Starting 10th Planet Jiu-Jitsu as a Beginner |
| 14 | `/programs/nano-techs-for-ages-4/` | jiu-jitsu for 4 year olds | Nano Techs — Jiu-Jitsu Class for 4 Year Olds |
| 15 | `/programs/` | (hub) | Jiu-Jitsu Programs for Every Age and Goal |

### Group B · Tier-2 Locations (10 pages)

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 16 | `/locations/la-canada-flintridge/` | BJJ La Cañada Flintridge | Jiu-Jitsu Near La Cañada Flintridge |
| 17 | `/locations/la-canada-flintridge/no-gi-jiu-jitsu/` | no-gi bjj la cañada | No-Gi Jiu-Jitsu for La Cañada Locals |
| 18 | `/locations/eagle-rock/` | BJJ Eagle Rock | Jiu-Jitsu Near Eagle Rock |
| 19 | `/locations/eagle-rock/no-gi-jiu-jitsu/` | no-gi bjj eagle rock | No-Gi Jiu-Jitsu Near Eagle Rock LA |
| 20 | `/locations/highland-park/` | BJJ Highland Park LA | Jiu-Jitsu Near Highland Park, LA |
| 21 | `/locations/highland-park/kids-bjj/` | kids bjj highland park | Kids Jiu-Jitsu Near Highland Park |
| 22 | `/locations/sierra-madre/` | BJJ Sierra Madre | Jiu-Jitsu Near Sierra Madre |
| 23 | `/locations/monrovia/` | BJJ Monrovia | Jiu-Jitsu Near Monrovia, CA |
| 24 | `/locations/monrovia/no-gi-jiu-jitsu/` | no-gi bjj monrovia | No-Gi Jiu-Jitsu for Monrovia Residents |
| 25 | `/locations/san-marino/` | BJJ San Marino | Jiu-Jitsu Near San Marino |

## Title / Meta / Content Templates

Same templates as Phase 1 (see `phase-1-prompt.md`). For persona pages add this variant:

- Title: `{Service} for {Persona} | 10th Planet Pasadena`
- Meta: `Is {service} right for {persona}? Train with five 10P black belts in Altadena. Free trial class, welcoming community. Call (626) 708-0771.`

### Persona Page Outline (~800 words)

1. Hero — H1 + 2-sentence pitch tailored to persona
2. **"Is {service} right for {persona}?"** — 200 words directly addressing hesitations (e.g., for 40+: "Isn't BJJ dangerous at my age?")
3. What to expect — 200 words; call out persona-specific modifications (e.g., women get dedicated partner option, 40+ get lower-intensity drilling)
4. Coach spotlight — pick the most relevant coach for this persona (Lila for women, George Jáuregui for kids)
5. Real persona testimonial (sort from 3 testimonials or use a general one)
6. What training looks like week 1 / week 4 / month 3 — 150 words showing progression
7. FAQ (3 Qs, FAQPage schema)
8. Internal links — 2 related persona pages + 1 related service page + /free-trial.html
9. CTA — lead modal, `data-program` preset to match persona (e.g., `kids-jiu-jitsu` for kids personas, `adult-fundamentals` for beginners)

## Required Schema

- Persona pages: `Service` + `BreadcrumbList` + `FAQPage`
- Tier-2 location pages: same as Phase 1 location schema

## Internal Linking Updates

- Add `/programs/` to homepage secondary nav (or expanded footer column)
- Each Phase 1 page gets 1-3 new outbound links to relevant Phase 2 personas
  - `/classes.html` → link to 6 persona pages
  - `/locations/altadena/kids-bjj/` → link to `/programs/kids-bjj-for-ages-6-12/` + `/programs/kids-bjj-for-ages-4-6/`
  - Each adult service page → link to `/programs/bjj-for-beginners/` + `/programs/bjj-for-adults-over-40/`
- Persona pages link to 2 other personas + the parent service page + relevant glossary from Phase 1

## Shared Rules (unchanged from Phase 1)

- Same brand kit, same style, same `styles.css`/`scripts.js`
- Every CTA opens lead modal
- "Powered by MMA Marketing Pro" attribution on every page — NO EXCEPTIONS
- Mobile quality bar compliance
- Min 700 words per page; 800+ for persona pages
- 5 of 8 uniqueness elements required (see roadmap.md)

## Post-Build Checklist

- [ ] 25 pages built + linked from relevant Phase 1 pages
- [ ] `/programs/` hub added to nav or footer
- [ ] Phase 1 pages updated with new internal links to Phase 2 (don't skip this — it's 60% of the value)
- [ ] `/seo-audit 10th-planet-pasadena` run on new pages
- [ ] sitemap.xml updated (50 total URLs now)
- [ ] Commit: `Phase 2 SEO: 15 persona pages + 10 Tier-2 locations (+25 pages)`
- [ ] Push — Cloudflare auto-deploys
- [ ] Request indexing on top 5 persona pages in GSC

## Measure After 14 Days

- Target: 80%+ of Phase 1 indexed, 60%+ of Phase 2 indexed
- Rankings entering top 30 for persona keywords
- First organic lead-modal opens from persona pages (GA4 event `lead_modal_open`)
