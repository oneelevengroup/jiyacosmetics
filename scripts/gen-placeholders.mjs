/**
 * Generates elegant, on-brand SVG placeholder images for every asset slot.
 * These are temporary tonal placeholders (see PLACEHOLDERS.md) meant to be
 * replaced with elevated stock or real client photos. Run: `node scripts/gen-placeholders.mjs`
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Dark cinematic brand palette (matches tailwind.config.ts)
// [gradient top, gradient bottom, accent]
const palettes = [
  ["#1B1510", "#0D0A07", "#C9A695"], // warm near-black, blush accent
  ["#241C16", "#120E0A", "#D9C2B6"], // espresso, soft blush
  ["#15100D", "#0A0706", "#C9A695"], // deepest noir, blush accent
];

const assets = [
  { path: "home/hero.svg", label: "Hero — brand portrait", ratio: [16, 10], p: 1 },
  { path: "home/philosophy.svg", label: "Treatment space", ratio: [4, 5], p: 0 },
  { path: "home/dr-jindal.svg", label: "Dr. Sumeet Jindal", ratio: [4, 5], p: 2 },
  { path: "services/eyelid.svg", label: "Eyelid Surgery", ratio: [4, 3], p: 0 },
  { path: "services/face.svg", label: "Facial Surgery", ratio: [4, 3], p: 1 },
  { path: "services/nonsurgical.svg", label: "Skin & Non-Surgical", ratio: [4, 3], p: 2 },
  { path: "services/hair.svg", label: "Hair Restoration", ratio: [4, 3], p: 0 },
];

const svg = ({ label, ratio, p }) => {
  const [rw, rh] = ratio;
  const w = rw * 200;
  const h = rh * 200;
  const [c1, c2, accent] = palettes[p];
  const textColor = "#F2EADD"; // cream on dark
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label} placeholder">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <circle cx="${w * 0.5}" cy="${h * 0.42}" r="${Math.min(w, h) * 0.16}" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.6"/>
  <text x="50%" y="${h * 0.42}" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-family="Georgia, serif" font-size="${Math.min(w, h) * 0.05}" letter-spacing="6">JIYA</text>
  <text x="50%" y="${h * 0.6}" text-anchor="middle" fill="${textColor}" font-family="Georgia, serif" font-size="${Math.min(w, h) * 0.045}" opacity="0.85">${label}</text>
  <text x="50%" y="${h * 0.66}" text-anchor="middle" fill="${textColor}" font-family="Arial, sans-serif" font-size="${Math.min(w, h) * 0.022}" letter-spacing="3" opacity="0.5">PLACEHOLDER · REPLACE IN /public/images</text>
</svg>`;
};

for (const a of assets) {
  const out = join(root, "public/images", a.path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, svg(a));
  console.log("wrote", a.path);
}
