# Media Mantra Global — Client image & video delivery spec

Yeh document **pure site** ke hisaab se hai: har **page / section** jahan image/video chahiye, uska **recommended width × height (px)** aur format. Abhi jo Unsplash/Pexels placeholders hain unko isi size ke **final brand assets** se replace karna hai.

**Formats:** JPG (quality ~80–85) ya **WebP**; logos **SVG** preference + PNG fallback. Sab images **sRGB**.

---

## Site-wide / global (har jagah indirectly)

| Slot | Dimensions (px) | Notes |
|------|-----------------|--------|
| **Favicon** | **512 × 512** | PNG or ICO export; favicon.ico / icon |
| **JSON-LD / default logo URL** | **512 × 512** min (square PNG) | Abhi codebase `logo` URL favicon ko point karta hai — proper **square brand mark** bhejo |
| **Default OG / social share** (agar route-specific OG na ho) | **1200 × 630** | Fixed ratio JPG/WebP |

---

## `/` Homepage (sections top → bottom)

| # | Section / component | Asset type | Dimensions (width × height) | Count |
|---|----------------------|-----------|----------------------------|------|
| 1 | **Hero** background video | MP4 H.264, landscape | **1920 × 1080** (ya **3840 × 2160**) | **1** video |
| 2 | Hero **poster** (video fallback / slow network) | Still JPG/WebP | **2560 × 1440** (min **1920 × 1080**) | **1** |
| 3 | **Intro** | Editorial photo (team / culture / workspace) | **1200 × 900** (min **1000 × 750**); ~**4:3** crop | **1** JPG/WebP — matches `homeHopIntroSplit.imageSrc`; replace Unsplash when brand shot is ready |
| 4 | **Locations** band | _(text + links)_ | — | — |
| 5 | **Clients marquee** | Client **logo lockups** (SVG/PNG transparent) | Slot ~**140 × 40** visible; proportional lockup | Har client **1** file — map in `src/data/clients.ts` → `public/clients/` (see `public/clients/README.md`) |
| 6 | **Proven results** (metrics band) | _(no hero image — animated numerals)_ | — | — |
| 7 | **Work** (Hopscotch lead + grid) | Case study `heroImage` | Lead: **2560 × 1200** (min **1920 × 960**); grid cards same heroes **1920 × 1080** ok | Uses **case study** catalogue |
| 8 | **Contact strip** | _(no image)_ | — | — |

**Client logo pack:** Final transparent **SVG/PNG** lockups — track from the shared drive when coordinators share files; then drop under `public/clients/` per `public/clients/README.md` and keep `src/data/clients.ts` names aligned.

Blogs listing lives on **`/blog` only** (not on the homepage). **Media Mantra Framework** lives on **`/about`** only.

**Optional unused on home agar dubara lagao:** `global-cta-section` video → **1920 × 1080** MP4 (same spec as hero alternative).

---

## `/about`

| # | Section | Dimensions (px) | Notes |
|---|---------|-----------------|--------|
| 1 | Big split **team/collaboration** image | **1600 × 2000** (portrait-heavy; ya wider source se crop) | `aspect-[5/6]` lg column |
| 2 | **Founder 1** (Udit column) portrait | **1200 × 1500** min | Sidebar image |
| 3 | **Founder 2** (Puja column) portrait | **1200 × 1500** min | Sidebar image |

---

## `/services` (listing)

| Section | Images? | Spec |
|---------|---------|------|
| Full page | **Nahi** — sirf gradients + text | Baad mein har row par thumb add karoge to suggested **2400 × 1350** per row |

---

## `/services/[slug]` — har service × **1 hero** + influencer extras

Hero `heroImage`: **subject center-safe**, crop `object-cover`.

| Practice | Hero image dims | File note |
|----------|-----------------|-----------|
| Strategic PR & Media Relations | **2400 × 1350** | 16∶9 |
| Founder & Leadership Branding | **2400 × 1350** | |
| Digital & Social Media | **2400 × 1350** | |
| Reputation & Crisis Management | **2400 × 1350** | |
| SEO & Performance Marketing | **2400 × 1350** | |
| **Influencer Marketing** hero | **2400 × 1350** | Deliver as `public/services/influencer-marketing-hero.jpg` ya URL replace |
| Content Marketing | **2400 × 1350** | |
| Global Event Management | **2400 × 1350** | |

**Influencer page body** (`service-deep-content`):

| Inline | Dimensions |
|--------|------------|
| `influencer-inline-1.jpg` | **1600 × 1000** |
| `influencer-inline-2.jpg` | **1600 × 1000** |

---

## `/case-studies` (listing)

| Section | Dimensions | Notes |
|---------|------------|--------|
| Har card **`heroImage`** thumb | **1200 × 800** usable (source **1920 × 1080** bhejo) | Listing `sizes` ~45vw |

---

## `/case-studies/[slug]` — detail

| Slot | Dimensions (px) | Count per case |
|------|-----------------|----------------|
| **Top banner** hero | **2560 × 1200** (min **1920 × 960**); full-bleed | **1** (`study.heroImage`) |
| **Gallery strip** “Frame 1–3” | **1080 × 1350** (4∶5) *or* **1200 × 1200** (square) | **3** _(ab sab cases par same placeholders — ideally **per slug** unique 3)_ |

---

## `/blog`

| Slot | Dimensions (px) | Count |
|------|-----------------|-------|
| **Index cards** (`coverImage`) | **2400 × 1350** master; min **1600 × 900** | **Har post × 1** |
| **`/[slug]` hero** (`coverImage`) | Same as cover | Same file |
| **In-article** optional (`articleImage`) | **2400 × 1260** (wide) | Jab post mein ho — abhi **1** post |

**OG thumbnails:** derive **1200 × 630** from cover safe crop.

Posts in data (abhi **5**) — **5 covers** minimum; **`event-film-first-storytelling`** ke liye +**1 wide article** asset.

---

## `/industries`, `/contact`, `/careers`, `/terms`, `/privacy`

| Route | Photos required? |
|-------|-------------------|
| `/industries` | ❌ _(optional future sector art: **1200 × 675** block)_ |
| `/contact` | ❌ |
| `/careers` | ❌ _(optional culture banner: **2400 × 1000**)_ |
| `/terms`, `/privacy` | ❌ |

---

## `/in`, `/sg`, `/ae` (regional)

| Route | Photos required? |
|-------|-------------------|
| All three | ❌ _(optional city skyline / office: **1920 × 1080** per page)_ |

---

## Header / footer / logo (components)

| Asset | Dimensions |
|-------|------------|
| **Logo lockup** SVG | Vector master |
| Logo PNG fallback (light BG) | **800 × 200** canvas (logo proportional) |
| Logo PNG **reversed** (dark BG) | **800 × 200** |

---

## Quick totals (delivery checklist)

| Category | Rough count |
|---------|----------------|
| Home video + poster | **1 + 1** |
| People band photo | **1** |
| About stills | **3** |
| Service heroes | **8** |
| Influencer inline | **2** |
| Case study heroes | **5** |
| Case study galleries | **15** (3 × 5) if all unique |
| Blog covers | **5** (+ **1** in-article where used) |
| Client logos | **~34** (names in `src/data/clients.ts`) |
| Favicon + default OG | **512×512**, **1200×630** |

---

*Last synced with codebase structure — agar koi section add/remove ho to update karna.*
