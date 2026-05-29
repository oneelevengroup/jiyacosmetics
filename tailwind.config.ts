import type { Config } from "tailwindcss";

/**
 * JIYA design system — dark cinematic edition.
 *
 * Modeled on grigoriak.doctor: warm near-black backgrounds, full-bleed moody
 * portraiture, a tall elegant serif for display, and small uppercase
 * letter-spaced labels with hairline dividers. Primary text is CREAM (never
 * brown); a refined gold is a sparing accent for the largest display moments.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm near-black foundation
        noir: "#14100D", // page background
        "noir-2": "#1B1510", // lifted section
        "noir-3": "#241C16", // raised surface / card
        // Text
        cream: "#F2EADD", // primary text + headings
        // Accent — sampled from the JIYA logo's gold (use sparingly)
        gold: "#D4A853", // core logo gold (JIYA1 mid-tone)
        "gold-soft": "#E8C774", // logo highlight gold
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial display scale (elegant, airy caps)
        "display-xl": ["clamp(2.75rem, 8vw, 8rem)", { lineHeight: "1.0", letterSpacing: "0.02em" }],
        "display-lg": ["clamp(2.25rem, 5.5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "0.015em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "0.01em" }],
      },
      letterSpacing: {
        eyebrow: "0.32em",
        label: "0.22em",
      },
      maxWidth: {
        site: "1440px",
      },
      transitionTimingFunction: {
        lux: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "slow-zoom": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 9s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
