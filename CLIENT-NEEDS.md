# 📋 Client Needs — Assets & Content by Page

A running checklist of what's needed from JIYA to finish each page (photos,
copy approvals, etc.). Image placeholders are also tracked technically in
[PLACEHOLDERS.md](PLACEHOLDERS.md).

---

## Global
- [ ] **Web-optimized hero images** — the two hero photos are large PNGs (16 MB & 21 MB). Export ~400–600 KB WebP/JPEG versions for faster load.
- [ ] **Final logo confirmation** — currently using the uploaded gold logos (horizontal in header, vertical in footer, icon as accents). Confirm these are final.
- [ ] **Favicon / browser tab icon** (can be generated from the JIYA icon).
- [ ] **Brand copy review** — confirm tone/wording across the site.

## Home page
- [ ] Approve hero head‑turn photos (profile + front) — or supply higher‑res/retouched versions.
- [ ] **Service category photos** (4) — Eyelid, Facial, Skin & Non‑Surgical, Hair (shown when an accordion item expands). Currently placeholders.
- [ ] **Real patient testimonials** (3+) — approved quotes for the "In their words" section (currently placeholder text). Google/RealSelf reviews ideal; confirm any attribution/privacy preferences.
- [ ] **Before & After photos** for the Results teaser (links to Gallery) — with patient consent.
- [ ] Confirm the **credibility strip** wording (Board-Certified · Oculofacial Fellowship · Regenerative Medicine · Raleigh).
- [ ] Confirm homepage copy: hero tagline, intro band, "Why JIYA" highlights.

## About page
- [ ] **Practice/office photo(s)** — interior, treatment room, or Brier Creek exterior (for the "Our Story" image). Currently a placeholder.
- [ ] **Dr. Jindal portrait** — current transparent headshot works; supply a higher‑end editorial portrait if desired.
- [ ] **Approve/edit copy** — Our Story, Philosophy, and Dr. Jindal bio (pulled from the current site; confirm accuracy).
- [ ] Any **team members** to feature (photos + short bios) if a team section is wanted.
- [ ] Any **awards / press / affiliations** beyond the current "Member of" logos.

## Contact page
- [ ] **Confirm NAP** — name, address (7901 ACC Blvd, Suite 201, Raleigh, NC 27617), phone (984) 275-3818, email. Correct the email if `info@jiyacosmetic.com` isn't right.
- [ ] **Confirm hours** (currently Mon–Fri 8am–5pm; after hours/weekends by appointment).
- [ ] **Confirm the Typeform** is the correct/live consultation form (embedded inline here + popup elsewhere).
- [ ] Confirm the **map pin** location is correct.
- [ ] Any **parking/directions** notes to add.

## Gallery page
- [ ] **Before & After photo pairs** — the whole page depends on these. Organize by procedure/category (Eyelid, Facial, Skin & Non-Surgical, Hair). Each case needs a *before* and an *after* image, with **patient photo-release/consent**.
- [ ] As pairs arrive, add them to `src/content/gallery.ts` (files in `/public/images/gallery/`). The page filters by category and gracefully shows "coming soon" until then.

## Specials page
- [ ] **No action needed right now** — "Specials" is removed from the nav while there are no active offers; the page shows a graceful "no current specials" message.
- [ ] When a promotion launches, send the **offer details** and I'll build the offer + re-add "Specials" to the nav.

## Ad Landing Page — Upper Blepharoplasty ($4,000 special)
`/blepharoplasty-special` — standalone campaign page (no site nav), for paid traffic.
- [ ] **Confirm offer details & fine print** — exactly what the $4,000 upper blepharoplasty special includes, any expiration/terms to display.
- [ ] **Before & After photos** of upper blepharoplasty (with consent) for the results section.
- [ ] **Eye-focused hero image** (optional) — a striking eye/eyelid close-up works best; currently using the front hero portrait.
- [ ] Confirm the FAQ answers and procedure copy.

## Ad Landing Page — Ziplyft
`/ziplyft` — standalone campaign page (no site nav), lead-gen focused.
- [ ] **Before & After photos** of Ziplyft / upper eyelid results (with consent).
- [ ] **Confirm copy & medical claims** — how-it-works steps, benefits, and FAQ (drafted from public Ziplyft info; the practice should verify).
- [ ] **Offer/price** (optional) — if there's a Ziplyft promo, send it and I'll add a badge + sticky-bar price like the bleph page.
- [ ] **Eye/eyelid close-up hero image** (optional) — currently using the front hero portrait.
- [ ] Confirm brand spelling/usage of "Ziplyft" and any trademark requirements.

## Services (hub + 28 procedure pages)
- [ ] **Medical copy review** — every procedure description was drafted and must be reviewed/approved by the practice (`src/content/services.ts`).
- [ ] **Per‑procedure photos** and **before & after galleries** (with patient consent) for each procedure.
- [ ] Confirm the **procedure list** is complete/correct (28 procedures across 4 categories).

---

_Legend: unchecked = still needed. Update as items are delivered._
