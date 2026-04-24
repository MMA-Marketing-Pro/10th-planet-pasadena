# 10th Planet Pasadena — Phase 5: Edge Suburbs + Pricing/Offer Signals

**Target ship date:** _____
**Prereq:** Phases 1–4 shipped. Content moat established.

## Objective

Build **25 pages** targeting the bottom of the funnel: commercial intent (pricing / trial / cost queries) plus edge-suburb location coverage beyond the core 15-mile radius.

## Page Manifest — 25 Pages

### Group A · Commercial / Pricing Pages (6 pages)

URL pattern: `/pricing/{offer-slug}/` or `/offers/{slug}/`

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 1 | `/pricing/` | bjj pricing pasadena | BJJ Membership Pricing in Pasadena |
| 2 | `/pricing/kids-bjj-cost/` | kids bjj cost pasadena | How Much Does Kids BJJ Cost in Pasadena? |
| 3 | `/pricing/adult-bjj-membership/` | adult bjj membership pricing | Adult BJJ Membership Pricing at 10P Pasadena |
| 4 | `/offers/free-trial-class-pasadena/` | free bjj trial pasadena | Free BJJ Trial Class in Pasadena, CA |
| 5 | `/pricing/family-bjj-pricing/` | family bjj pricing | Family BJJ Membership Options |
| 6 | `/pricing/private-bjj-lessons/` | private bjj lessons pasadena | Private BJJ Lessons in Pasadena |

> Before Phase 5 ships, **confirm private-lesson pricing and availability with client** — flagged as assumption in the roadmap.

### Group B · Tier-3 Edge Locations (15 pages)

Extend into zip codes and neighborhoods outside the core 15-mile ring. These have lower individual traffic but compound for "near me" searches.

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 7 | `/locations/pasadena/91101/` | bjj 91101 | Jiu-Jitsu Near Central Pasadena (91101) |
| 8 | `/locations/pasadena/91103/` | bjj 91103 | Jiu-Jitsu Near Pasadena 91103 |
| 9 | `/locations/pasadena/91106/` | bjj 91106 | Jiu-Jitsu Near Caltech / Pasadena 91106 |
| 10 | `/locations/pasadena/old-town/` | bjj old town pasadena | Jiu-Jitsu Near Old Town Pasadena |
| 11 | `/locations/pasadena/playhouse-district/` | bjj playhouse district | Jiu-Jitsu Near Playhouse District |
| 12 | `/locations/altadena/91001/` | bjj 91001 | Jiu-Jitsu in Altadena 91001 |
| 13 | `/locations/la-canada-flintridge/kids-bjj/` | kids bjj la canada | Kids Jiu-Jitsu for La Cañada Families |
| 14 | `/locations/glendale/adult-bjj/` | adult bjj glendale | Adult BJJ Near Glendale |
| 15 | `/locations/glendale/kids-bjj/` | kids bjj glendale | Kids Jiu-Jitsu Near Glendale |
| 16 | `/locations/arcadia/adult-bjj/` | adult bjj arcadia | Adult BJJ Near Arcadia |
| 17 | `/locations/south-pasadena/kids-bjj/` | kids bjj south pasadena | Kids Jiu-Jitsu Near South Pasadena |
| 18 | `/locations/eagle-rock/kids-bjj/` | kids bjj eagle rock | Kids Jiu-Jitsu Near Eagle Rock |
| 19 | `/locations/highland-park/adult-bjj/` | adult bjj highland park | Adult BJJ Near Highland Park, LA |
| 20 | `/locations/sierra-madre/kids-bjj/` | kids bjj sierra madre | Kids Jiu-Jitsu Near Sierra Madre |
| 21 | `/locations/san-marino/kids-bjj/` | kids bjj san marino | Kids Jiu-Jitsu Near San Marino |

### Group C · Refresher Pages (4 pages — update Phase 1 content with 2026 data)

| # | URL | Action |
|---|-----|--------|
| 22 | `/locations/altadena/no-gi-jiu-jitsu/` | Refresh: add 2 new testimonials (when available), update schedule block, 2025 → 2026 date references, new internal links from Phase 4 |
| 23 | `/locations/pasadena/no-gi-jiu-jitsu/` | Same refresh treatment |
| 24 | `/learn/what-is-no-gi-jiu-jitsu/` | Add 2 new internal links to Phase 4 glossary pages; update video embed if the client's YouTube has new content |
| 25 | `/learn/what-is-10th-planet-jiu-jitsu/` | Same treatment |

## Content Outlines

### Pricing Page (~800 words)

> These pages must answer the searcher's question. If you don't list numbers, list ranges + the actual intake process honestly.

1. Hero — H1 + "Straight answers, no bait-and-switch" subhead
2. **Quick answer box** — 50 words at top with the headline: "Most members pay between $__ and $__/month depending on program"
3. What's included — 150 words: unlimited classes, open mat, events, coaching
4. Plan breakdown — Match the 4 plans from `memberships.html` with short summaries
5. Family / multi-member discounts — 100 words
6. No contract explanation — 80 words (mentioned honestly — "month-to-month, pause anytime")
7. How to confirm exact pricing — 100 words (the short intake call)
8. FAQ — 4 Qs ("Is there a sign-up fee?", "Can I cancel anytime?", "Do you offer discounts?", "Is my first class really free?")
9. Primary CTA — lead modal opens on submit

Schema: `Offer` + `BreadcrumbList` + `FAQPage`

### Free Trial Offer Page (~700 words)

Highly conversion-focused; competes with competitor "free trial" pages. Mention explicit offer terms.

1. Hero — H1 + "100% free, no card required" subhead + countdown or urgency signal (optional)
2. What's included in the free class — 150 words
3. What to wear / bring — 100 words
4. What to expect in your first class — 200 words
5. FAQ — 3 Qs (no credit card? any strings? what if I can't make it?)
6. Multi-CTA — lead modal + tel: link as alternative

Schema: `Offer` + `FAQPage`

### Zip / Micro-Neighborhood Location Page (~700 words)

Same template as Phase 1 location pages BUT:
- Open with the zip / micro-neighborhood's defining landmark (e.g., "Near Old Pasadena's Colorado Blvd shops" or "Just west of Caltech")
- 100 more words of micro-local context than broader neighborhood pages
- Link to the parent neighborhood hub, don't duplicate

### Refresher Pages

Not a rebuild. Edit 3–4 sections per page:
- Replace 1 testimonial
- Add 2 internal links pointing to Phase 4 glossary
- Update schedule block if changed
- Bump dated references (2025 → 2026)
- Rerun `/seo-audit` on the updated page

## Internal Linking Updates

- Homepage → link to `/pricing/` and `/offers/free-trial-class-pasadena/`
- Every existing page's lead modal still routes to `booking.html`, but add a `/pricing/` link in the footer
- Zip-level pages link UP to their parent neighborhood hub (avoid circular references)
- Refreshed pages get 2 new outbound links to Phase 4 glossary

## Shared Rules (unchanged)

Brand, style, mobile, attribution, modal, min 700 words (800 for pricing).

## Post-Build Checklist

- [ ] 25 pages built (21 new + 4 refreshers)
- [ ] Homepage updated with pricing + trial links
- [ ] `/seo-audit 10th-planet-pasadena` run
- [ ] sitemap.xml updated (125 URLs)
- [ ] Commit: `Phase 5 SEO: 6 pricing + 15 edge locations + 4 refreshers (+25 pages)`
- [ ] Push, auto-deploy
- [ ] Request indexing on pricing + free trial pages (commercial intent priority)

## Measure After 14 Days

- Commercial intent pages should show conversion lift in GA4 `booking_submit` event
- Edge-suburb pages slower to index; target 60%+ after 21 days
- Pricing page should capture branded + non-branded "{business} cost" queries
