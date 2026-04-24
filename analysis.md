# 10th Planet Pasadena — Site Analysis

## Business
- **Type:** No-Gi Brazilian Jiu-Jitsu academy (10th Planet / Eddie Bravo system)
- **Location:** 2333 North Lake Avenue, Altadena, CA 91001 (Pasadena metro)
- **Phone:** (626) 708-0771
- **Email:** 10thplanetpasadena@gmail.com
- **Instagram:** @10thplanetpasadena
- **YouTube:** Channel with free technique library

## Brand Vibe
Competitive-but-inclusive jiu-jitsu academy. Eddie Bravo 10P lineage = technical, unapologetic, no-gi-only. But the marketing tone is welcoming ("community," "all ages," "character building for kids"). Visual identity hinges on electric yellow (#FFEE03) and deep navy (#223855) — sportswear/athletic palette.

## Coaching Staff (Real Credentials — Use Them)
1. **Erik "Compella" Cruz** — Founder & Head Instructor. 3rd-degree 10th Planet Black Belt. (Eddie Bravo Black Belt.)
2. **Lila Smadja-Cruz** — Founder of 10th Planet Women's Self Defense. 1st-degree Black Belt.
3. **George Jáuregui** — Head Kids Coach. 1st-degree Black Belt.
4. **Rudy Garcia** — Instructor. 10P Black Belt.
5. **Jordan Gaskins** — Instructor. 10P Black Belt.
6. **Steven Belanger** — Instructor. 10P Brown Belt.

## Programs
- **Adult Fundamentals** (14+) — takedowns, submissions, positional control, intro to Rubber Guard/Truck/Lockdown/Leg Locks
- **Adult All-Levels** (14+) — advanced 10P system, live sparring
- **Nano Techs** (4–6) — twice/week, 45 min, character + first movements
- **Kids Jiu-Jitsu** (6–12) — structured 10P curriculum with sparring

## Design Recommendation: `performance-athletic-skill`
**Why:** This style delivers bold sportswear-brand energy — kinetic marquees, oversized typography, one electric accent. It maps directly onto the existing brand (yellow + navy) while elevating the presentation. 10P Pasadena's brand is inclusive-but-serious (all ages, all levels, real black belts) — a brutalist treatment would alienate the kids/family audience, and cinematic-fight-skill would overstate a pro-only positioning they don't claim.

Alternative considered: `cinematic-fight-skill` — more on-brand for the 10P parent identity, but 10P Pasadena's own copy leads with community and kids programs, so we stay accessible.

## Current Site's Biggest Problems
1. **Generic template.** Duda/SiteSwan build. No visual identity investment beyond the yellow accent.
2. **Hero is cramped.** Logo lockup is small, hero image is buried, CTA is lost.
3. **Testimonials buried.** Three strong testimonials — presented as small stacked blocks.
4. **No facility or coach photography.** Credentials aren't visually reinforced.
5. **Mobile experience is cramped.** Classes are hard to scan on a phone.
6. **'RETAIL' nav link goes nowhere.** Dead link.
7. **No schema markup, no local SEO signals.** Missing LocalBusiness / MartialArtsSchool schema, no review markup.
8. **Weak conversion path.** "Start Your Free Trial" exists but the form is a separate page with a basic embed.

## Pages to Build (12 total — matches `siteStructure.totalPages`)
| # | Slug | Type | Priority |
|---|------|------|----------|
| 1 | `index` | home | Essential |
| 2 | `classes` | services | Essential |
| 3 | `instructors` | team | Essential |
| 4 | `schedule` | schedule | Essential |
| 5 | `memberships` | pricing | Essential |
| 6 | `gallery` | gallery | Nice-to-have |
| 7 | `videos` | video-library | Content moat |
| 8 | `kids-video` | video | Nice-to-have |
| 9 | `nano-techs-video` | video | Nice-to-have |
| 10 | `promo-video` | video | Nice-to-have |
| 11 | `free-trial` | trial | **Critical conversion page** |
| 12 | `contact` | contact | Essential |
| 13 | `booking` | booking | **Step 2 of 2 — required on every site** |

Total HTML files to generate: **13** (12 source pages + booking.html).
