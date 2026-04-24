# 10th Planet Pasadena — Phase 4: Glossary Deep-Dive + Technique Tutorials

**Target ship date:** _____
**Prereq:** Phases 1–3 shipped. Core local SEO foundation set.

## Objective

Build **25 content-moat pages** — deep glossary + technique tutorials that become the definitive 10P Pasadena resources for searches like "what is the truck bjj", "rubber guard tutorial", "leg lock system". These build topical authority, get shared, and earn backlinks naturally.

## Page Manifest — 25 Pages

### Group A · Glossary Deep-Dive (15 pages)

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 1 | `/learn/what-is-the-truck/` | the truck bjj | The Truck Position in BJJ — Explained |
| 2 | `/learn/what-is-the-twister/` | bjj twister | The Twister — Eddie Bravo's Signature Submission |
| 3 | `/learn/leg-lock-system-bjj/` | leg lock system bjj | The Leg Lock System — A Modern No-Gi Essential |
| 4 | `/learn/what-is-a-heel-hook/` | heel hook bjj | What Is a Heel Hook? (And Why They're Legal in No-Gi) |
| 5 | `/learn/what-is-ashi-garami/` | ashi garami | Ashi Garami — The Gateway to the Leg Lock Game |
| 6 | `/learn/what-is-the-peruvian-necktie/` | peruvian necktie | The Peruvian Necktie — Setup & Details |
| 7 | `/learn/knee-slice-pass-explained/` | knee slice pass | The Knee Slice Pass — A Fundamental BJJ Guard Pass |
| 8 | `/learn/guard-retention-basics/` | guard retention bjj | Guard Retention — 5 Principles Every Beginner Needs |
| 9 | `/learn/submission-grappling-vs-bjj/` | submission grappling | Submission Grappling vs. BJJ — What's the Difference? |
| 10 | `/learn/bjj-belt-ranks-explained/` | bjj belt ranks | BJJ Belt Ranks — The Complete Timeline |
| 11 | `/learn/what-is-open-mat/` | bjj open mat | What Is Open Mat? A Guide for New BJJ Students |
| 12 | `/learn/bjj-sparring-rolling-guide/` | bjj rolling guide | BJJ Rolling — A Beginner's Guide to Live Sparring |
| 13 | `/learn/what-is-adcc/` | adcc grappling | What Is ADCC? The World Championship of No-Gi |
| 14 | `/learn/who-is-eddie-bravo/` | eddie bravo | Who Is Eddie Bravo? The Founder of 10th Planet |
| 15 | `/learn/ibjjf-rules-no-gi/` | ibjjf no-gi rules | IBJJF No-Gi Rules — A Complete Breakdown |

### Group B · Technique Tutorial Pages (8 pages)

URL pattern: `/learn/{technique}-examples/` or `/learn/{topic}-for-beginners/`

Each tutorial page embeds a YouTube video from the client's existing video library (use URLs from `content-profile.pageContent.videos`).

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 16 | `/learn/rubber-guard-examples-for-beginners/` | rubber guard beginner | Rubber Guard for Beginners — 5 Essential Positions |
| 17 | `/learn/leg-lock-examples/` | leg lock examples | 5 Essential Leg Locks for No-Gi Jiu-Jitsu |
| 18 | `/learn/back-take-from-side-control/` | back take side control | Back Take From Side Control (Video Breakdown) |
| 19 | `/learn/toe-hold-from-ashi-garami/` | toe hold ashi garami | Toe Hold from Inside Ashi Garami |
| 20 | `/learn/the-lockdown-step-by-step/` | the lockdown bjj | The Lockdown — Step-by-Step Breakdown |
| 21 | `/learn/passing-open-guard-series/` | passing open guard | Passing the Open Guard — M1 to M4 Series |
| 22 | `/learn/escaping-side-control-no-gi/` | escaping side control | How to Escape Side Control (No-Gi) |
| 23 | `/learn/kids-bjj-drills-at-home/` | kids bjj drills at home | Kids BJJ Drills You Can Practice at Home |

### Group C · Edge Locations (2 pages)

| # | URL | Primary Keyword | H1 |
|---|-----|-----------------|-----|
| 24 | `/locations/duarte/` | BJJ Duarte | Jiu-Jitsu Near Duarte, CA |
| 25 | `/locations/temple-city/` | BJJ Temple City | Jiu-Jitsu Near Temple City |

## Content Outline — Glossary Deep-Dive (~1000 words)

1. **Featured-snippet-friendly answer** at top — 40-50 word definition in a `<div class="answer-box">`
2. Origin story — 200 words (who invented it, when, why)
3. **Technical breakdown** — 300 words with step-by-step mechanics
4. Common mistakes — 150 words
5. When to use it — 150 words (positional context)
6. Related techniques — 120 words with 3 outbound links to other glossary pages
7. How we teach it at 10P Pasadena — 80 words
8. Video embed from existing YouTube library
9. FAQ (3-4 Qs, FAQPage schema)
10. CTA — lead modal

Schema: `Article` + `BreadcrumbList` + `FAQPage` + `VideoObject`

## Content Outline — Technique Tutorial (~900 words)

1. Intro — 120 words, state the problem the technique solves
2. **Video embed** (YouTube) from the existing content-profile video list
3. **Step-by-step written breakdown** — 400 words with numbered phases
4. Common errors — 150 words
5. When it fails / what to switch to — 100 words
6. Related techniques / what to drill next — 100 words
7. FAQ — 3 Qs
8. CTA — "Want a coach to walk you through this live? Free trial class"

Schema: `HowTo` + `VideoObject` + `BreadcrumbList` + `FAQPage`

## Internal Linking Updates

- Every glossary page → 3 related glossary + 1 tutorial + 1 class page
- Every tutorial page → the related glossary term + the "Adult All-Levels" page + 2 related tutorials
- **Add 3 internal links from existing homepage** to: `/learn/leg-lock-system-bjj/`, `/learn/rubber-guard-examples-for-beginners/`, `/learn/who-is-eddie-bravo/` — these 3 will be your highest-ranking Phase 4 pages
- Update `/videos.html` to link to every tutorial page (gives each video 2 discovery paths)
- Update Phase 1 glossary hub `/learn/` to list all 20 total glossary entries

## Shared Rules (unchanged)

Same brand, style, mobile bar, attribution, lead modal everywhere, 700+ words.

## Post-Build Checklist

- [ ] 25 pages built + all YouTube embeds verified working
- [ ] Phase 1-3 pages updated with new inbound links (prioritize glossary hub, videos page)
- [ ] `/seo-audit 10th-planet-pasadena` run
- [ ] sitemap.xml updated (100 URLs)
- [ ] Commit: `Phase 4 SEO: 15 glossary + 8 tutorials + 2 edge locations (+25 pages)`
- [ ] Push, auto-deploy
- [ ] Request indexing on the 5 tutorials with the strongest video embeds

## Measure After 14 Days

- Phase 4 indexation target: 75%
- Tutorial pages should pick up Google video-pack rankings (visually indicated in SERP)
- Glossary pages target featured snippets for "what is X" queries — check GSC appearance
