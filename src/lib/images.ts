/**
 * Central image manifest for the JIYA site.
 *
 * HOW TO SWAP IMAGES
 * ------------------
 * Every image used on the site is registered here by a logical `key`.
 * To replace a photo:
 *   1. Drop the new file into /public/images/<folder> using the documented name.
 *   2. Change that entry's `src` to the local path, e.g. "/images/home/hero.jpg".
 *   3. Set `placeholder: false`.
 * Nothing else in the codebase needs to change, components reference images by key.
 *
 * Entries marked `placeholder: true` currently use elevated stock imagery (or
 * are awaiting client-provided assets). See PLACEHOLDERS.md for the full swap list.
 */

export type SiteImage = {
  /** Stable logical key referenced by components. */
  key: string;
  /** Current image source (remote stock now; local /public path later). */
  src: string;
  /** Descriptive alt text for accessibility. */
  alt: string;
  /** Intended local path once the real asset is added. */
  target: string;
  /** True while using stock/placeholder imagery. */
  placeholder: boolean;
  /** Note about what the final asset should be. */
  note?: string;
};

export const images = {
  // ---- Brand ----
  "brand.logo": {
    key: "brand.logo",
    src: "/images/JIYA_logo.svg",
    alt: "JIYA, Facial Cosmetic Surgery",
    target: "/images/JIYA_logo.svg",
    placeholder: false,
    note: "Full vertical lockup (gold emblem + JIYA wordmark), transparent SVG.",
  },
  "brand.icon": {
    key: "brand.icon",
    src: "/images/JIYA_icon.svg",
    alt: "JIYA",
    target: "/images/JIYA_icon.svg",
    placeholder: false,
    note: "Emblem/icon only (gold floral mark), transparent SVG.",
  },
  "brand.logoHorizontal": {
    key: "brand.logoHorizontal",
    src: "/images/jiya-header-logo.png",
    alt: "JIYA, Jindal Institute for Youthful Aging",
    target: "/images/jiya-header-logo.png",
    placeholder: false,
    note: "Header lockup: cleaner transparent PNG (JIYAHORIZONTALTRANSPARENT), auto-trimmed of padding for tight sizing.",
  },

  // ---- Home ----
  "home.hero": {
    key: "home.hero",
    src: "/images/JIYAheropic.png",
    alt: "Cinematic profile portrait on a dark background",
    target: "/images/JIYAheropic.png",
    placeholder: false,
    note: "Client hero. Subject sits left with dark negative space right. Source is 6336x2688 (~16MB), consider exporting a web-optimized version later.",
  },
  "home.heroFront": {
    key: "home.heroFront",
    src: "/images/HEROIMAGEFRONTSHOT.png",
    alt: "Front-facing portrait, gaze to camera",
    target: "/images/HEROIMAGEFRONTSHOT.png",
    placeholder: false,
    note: "Front-facing shot of the hero subject. On scroll the profile cross-dissolves into this (head-turn effect).",
  },
  "home.philosophy": {
    key: "home.philosophy",
    src: "/images/home/philosophy.svg",
    alt: "Calm, light-filled treatment space",
    target: "/images/home/philosophy.jpg",
    placeholder: true,
    note: "Replace with real JIYA office / treatment room photo or elevated stock.",
  },
  "home.doctor": {
    key: "home.doctor",
    src: "/images/drjheadshot.png",
    alt: "Portrait of Dr. Sumeet Jindal",
    target: "/images/drjheadshot.png",
    placeholder: false,
    note: "Dr. Jindal headshot, transparent cutout, floats on the dark section.",
  },
  "provider.prabakaran": {
    key: "provider.prabakaran",
    src: "/images/providers/dr-prabakaran.png",
    alt: "Portrait of Dr. Samantha Prabakaran",
    target: "/images/providers/dr-prabakaran.png",
    placeholder: false,
    note: "Dr. Prabakaran headshot, transparent cutout, floats on the dark section (matches Dr. Jindal).",
  },

  "provider.katie": {
    key: "provider.katie",
    src: "/images/providers/katie-gambino.png",
    alt: "Portrait of Katie Gambino, PA-C",
    target: "/images/providers/katie-gambino.png",
    placeholder: true,
    note: "Katie Gambino PA-C headshot. Drop the file at /public/images/providers/katie-gambino.png and set placeholder:false. (Provided headshot: curly blonde hair, black top, warm studio background.)",
  },

  // ---- Service category imagery ----
  "service.eyelid": {
    key: "service.eyelid",
    src: "/images/services/eyelid.svg",
    alt: "Close-up of bright, rested eyes",
    target: "/images/services/eyelid.jpg",
    placeholder: true,
  },
  "service.face": {
    key: "service.face",
    src: "/images/services/face.svg",
    alt: "Profile portrait highlighting sculpted facial contours",
    target: "/images/services/face.jpg",
    placeholder: true,
  },
  "service.nonsurgical": {
    key: "service.nonsurgical",
    src: "/images/services/nonsurgical.svg",
    alt: "Luminous, healthy skin texture",
    target: "/images/services/nonsurgical.jpg",
    placeholder: true,
  },
  "service.hair": {
    key: "service.hair",
    src: "/images/services/hair.svg",
    alt: "Detail of full, healthy hair",
    target: "/images/services/hair.jpg",
    placeholder: true,
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

export const getImage = (key: ImageKey): SiteImage => images[key];
