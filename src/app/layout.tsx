import type { Metadata } from "next";
import { Forum, Mulish } from "next/font/google";
import "./globals.css";
import { business } from "@/content/site";

// Display: Forum, elegant high-contrast serif with refined capitals (per client).
const display = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

// Body: Mulish, a clean geometric-humanist sans used as an Avenir stand-in
// until licensed Avenir web fonts are supplied (see public/fonts + PLACEHOLDERS.md).
const sans = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-fallback",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${business.name}, Facial Cosmetic Surgery in Raleigh, NC`,
    template: `%s, ${business.name}`,
  },
  description:
    "JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration. Look better, see better, feel better, luxury surgical and non-surgical care from Dr. Sumeet Jindal in Raleigh, NC.",
  metadataBase: new URL("https://jiyacosmetic.com"),
  openGraph: {
    title: `${business.name}, Facial Cosmetic Surgery in Raleigh, NC`,
    description: business.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
