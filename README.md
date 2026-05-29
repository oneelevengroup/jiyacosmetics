# JIYA — Facial Cosmetic Surgery (Next.js)

A rebuild of [jiyacosmetic.com](https://jiyacosmetic.com) with an elevated,
editorial aesthetic inspired by [grigoriak.doctor](https://grigoriak.doctor).
Content is preserved from the existing JIYA site; the design is new.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **Framer Motion** (scroll reveals + light parallax/3D motion)
- **next/font** — Cormorant Garamond (display) + Jost (sans)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
src/
  app/            App Router pages (home is built; others are placeholders)
  components/     Header, Footer, motion primitives, home sections
  content/        site.ts — all copy & navigation (single source of truth)
  lib/            images.ts — central image manifest
public/images/    asset folders (home, services, gallery, about, brand)
```

## Editing content

All copy and navigation live in [`src/content/site.ts`](src/content/site.ts).
Edit text there — components read from it, so content stays separate from layout.

## Swapping images

Every image is registered by a logical key in
[`src/lib/images.ts`](src/lib/images.ts). To replace one, drop the file into the
documented `/public/images/...` path, point that entry's `src` at it, and set
`placeholder: false`. See **[PLACEHOLDERS.md](PLACEHOLDERS.md)** for the full
list of assets awaiting real photos.

## Status

- [x] Design system + global layout (header, footer, fonts, palette)
- [x] **Homepage**
- [ ] About · Services · Gallery · Specials · Contact (in progress, page by page)
