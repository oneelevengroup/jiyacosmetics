import type { Config } from "tailwindcss";

/**
 * JIYA design system.
 *
 * Inspired by grigoriak.doctor: luxury editorial layout, warm neutral palette,
 * high-contrast serif display paired with a clean humanist sans, generous space.
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
        // Warm neutral foundation
        ivory: "#F7F3ED", // page background
        sand: "#ECE3D6", // soft section background
        stone: "#D9CDBC", // borders / muted surfaces
        taupe: "#9C8C77", // secondary text
        clay: "#6B5D4D", // tertiary text
        ink: "#211C17", // primary text / dark sections
        espresso: "#2C2620", // dark surface alt
        // Accent
        gold: "#A9885F", // primary accent (bronze/gold)
        "gold-soft": "#C2A581", // hover / light accent
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial display scale
        "display-xl": ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        site: "1440px",
      },
      transitionTimingFunction: {
        lux: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slow-zoom": "slow-zoom 8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
