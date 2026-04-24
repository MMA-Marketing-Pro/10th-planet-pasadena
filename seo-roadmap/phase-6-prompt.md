# 10th Planet Pasadena — Phase 6: Gap Fill + Phase 1 Optimization

**Target ship date:** _____
**Prereq:** Phases 1–5 shipped. Site ~130 pages, 6 months of GSC data to analyze.

## Objective

Build **15 gap-fill pages** + optimize **10 of the earliest Phase 1 pages** based on real 6-month GSC performance data. This is decay defense + maturity — filling holes the matrix missed and compounding wins on high-potential Phase 1 pages that just need a boost.

## Before Writing Any Pages

Do this data pull first:

1. **GSC Performance (last 90 days):**
   - Export URL-level data: impressions, clicks, avg position
   - Identify the 10 Phase 1–3 pages with **highest impressions but avg position > 15** (stuck on page 2 — these win the most from optimization)
   - Identify the 10 pages with **declining impressions** over the last 30 days (refresh candidates)
   - Use these lists to pick the 10 refresh targets below.

2. **Keyword gap analysis:**
   - Export queries GSC shows the site ranking for but WITHOUT a dedicated page (query → landing page mismatch)
   - Build gap-fill pages for the top 10-15 such queries.

3. **Backlink check (bonus, if you have Ahrefs/Semrush):**
   - Any Phase 1-5 page has earned a backlink? Optimize those first — they already have momentum.

## Page Manifest — 25 Pages

### Group A · Gap Fill (15 pages)

These are placeholder structures. **Replace with real GSC gap data before shipping.** Example gaps typical for this type of business:

| # | Likely URL | Typical Missing Keyword |
|---|-----|---|
| 1 | `/learn/ibjjf-belt-requirements/` | IBJJF belt requirements / time to black belt |
| 2 | `/learn/how-long-to-get-bjj-blue-belt/` | how long blue belt bjj |
| 3 | `/learn/bjj-for-tall-people/` | bjj for tall guys |
| 4 | `/learn/bjj-for-short-people/` | bjj for short guys |
| 5 | `/learn/bjj-after-injury/` | training bjj after injury |
| 6 | `/learn/bjj-cardio-conditioning/` | bjj conditioning |
| 7 | `/learn/bjj-diet-nutrition/` | bjj diet |
| 8 | `/learn/how-to-tap-in-bjj/` | tapping in bjj |
| 9 | `/learn/bjj-etiquette-rules/` | bjj gym etiquette |
| 10 | `/learn/bjj-mat-injuries-prevention/` | bjj injury prevention |
| 11 | `/guides/best-summer-bjj-camp-pasadena/` | summer bjj camp pasadena |
| 12 | `/guides/best-bjj-birthday-party-pasadena/` | bjj birthday party pasadena |
| 13 | `/learn/competing-in-bjj-first-tournament/` | first bjj tournament |
| 14 | `/programs/bjj-for-first-responders/` | bjj for police military |
| 15 | `/programs/bjj-after-work-evening-classes-pasadena/` | evening bjj classes pasadena |

> Swap any of these with actual GSC-discovered gaps. The goal is to target proven demand, not speculative.

### Group B · Phase 1 Optimization (10 pages)

Pick 10 of the Phase 1 / 2 / 3 pages that meet the criteria from the data pull above. For each one, perform a **full optimization pass** — not just tweak-and-ship:

#### Optimization Checklist Per Page

- [ ] **Title tag** — rewrite if it's not capturing the actual ranking query (use GSC "queries" filter per URL)
- [ ] **Meta description** — rewrite to pull the actual CTR pattern (add question-form, specific numbers)
- [ ] **H1** — confirm matches primary keyword from GSC
- [ ] **Intro rewrite** — 150-word new opening that directly answers the search intent (featured-snippet-friendly)
- [ ] **Add 200+ words** of new unique content (new FAQ Qs, expanded section, case study, specific commute example from a real member)
- [ ] **Update testimonials** — add 2 new Google reviews (client should pull fresh ones by Phase 6)
- [ ] **Add 4 new internal links** from newer Phase 2-5 pages
- [ ] **Update schema** — add any newer review data to `aggregateRating` (more reviews by now)
- [ ] **Update images** — if client has added real academy photos by now, swap Unsplash placeholders for real ones
- [ ] **Verify Core Web Vitals** — check PSI, fix any LCP regressions
- [ ] **Last-updated date** — add "Last updated: {today}" visible on page + `dateModified` in Article schema

#### Example Optimization Targets (based on typical patterns)

| # | URL | Typical Problem | Typical Fix |
|---|-----|---|---|
| 16 | `/locations/pasadena/no-gi-jiu-jitsu/` | Avg position 18, impressions 400/mo | Rewrite intro with "No-Gi" variants; add 3 new FAQ Qs |
| 17 | `/locations/altadena/` | High impressions, low CTR | Rewrite title tag with more specific hook ("6 Black Belts on Staff") |
| 18 | `/learn/what-is-no-gi-jiu-jitsu/` | Ranks for long-tail, not primary | Add dedicated H2 for "No-Gi vs Gi" (internal pointer) |
| 19 | `/locations/glendale/no-gi-jiu-jitsu/` | Lost rankings | Fresh content block + new testimonial |
| 20 | `/programs/bjj-for-beginners/` | Avg position 25 | Add competitor comparison section |
| 21 | `/guides/best-bjj-gym-in-pasadena/` | Stuck on page 2 | Add 3 new competitors; update positioning statement |
| 22 | `/learn/rubber-guard-explained/` | Missed featured snippet | Rewrite first 50 words as direct-answer schema-ready paragraph |
| 23 | `/locations/arcadia/kids-bjj/` | High exit rate | Add interactive schedule block + parent testimonial |
| 24 | `/compare/no-gi-vs-gi-jiu-jitsu/` | Bouncing | Add decision flowchart at top |
| 25 | `/learn/` (hub) | Low time-on-page | Restructure as a proper learning path (beginner → intermediate → advanced) |

## Shared Rules (unchanged)

Brand, style, mobile, attribution, lead modal everywhere, 700+ words minimum.

## Additional Phase 6 Rule — Schema Maturity

By Phase 6, the site should have:
- **AggregateRating** with 20+ real reviews (client should collect Google reviews actively between phases)
- **VideoObject** schemas updated with any new YouTube content
- **Dynamic dateModified** on Article schema — not stuck in 2026-01
- **Local pack signals** — verify GBP (Google Business Profile) matches NAP everywhere

## Post-Build Checklist

- [ ] 15 gap-fill pages built
- [ ] 10 Phase 1-3 optimizations completed (each one a proper 1-hour rewrite, not a 5-minute tweak)
- [ ] `/seo-audit 10th-planet-pasadena` run on all new + updated pages
- [ ] sitemap.xml updated (155 URLs total — the final roadmap number)
- [ ] Commit: `Phase 6 SEO: 15 gap-fill + 10 optimizations (+25 pages)`
- [ ] Push, auto-deploy
- [ ] Request re-indexing on the 10 optimized pages in GSC (forces re-crawl for the fresh content)

## Final State Review

At end of Phase 6, site is:
- **155 pages** total (12 core + 143 programmatic)
- **8 neighborhood hubs** + **~50 location service pages** covering the full SGV + LA edge
- **15 persona × service pages** for precise audience targeting
- **20 glossary entries** forming a topical-authority graph
- **8 tutorial pages** with video embeds (content moat)
- **8 curation pages** with competitive intent
- **7 comparison pages** for style-vs-style queries
- **6 pricing / commercial** pages
- Unified brand, mobile-quality, lead-modal → booking.html funnel
- "Powered by MMA Marketing Pro" attribution on every single page

## 12-Month Forward Look (Beyond Phase 6)

- **Refresh cadence:** Revisit Phase 1-2 pages every 6 months with updated testimonials + GSC-informed tweaks
- **Seasonal:** Add holiday / seasonal content (Summer Camp, Back-to-School Kids BJJ, New Year Fitness Push)
- **New content types:** consider short-form video landing pages per technique (1 per week for 52 weeks → 52 new pages of low-effort content)
- **Backlink outreach:** with 155 pages, start targeted outreach (local newspapers, parenting blogs, BJJ forums)
- **Proprietary data:** "X% of our students competed in 2026" — own metrics that become authority signals
