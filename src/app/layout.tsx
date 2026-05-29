import type { Metadata } from "next";
import { Cormorant, Jost } from "next/font/google";
import "./globals.css";
import { business } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} — Facial Cosmetic Surgery in Raleigh, NC`,
    template: `%s — ${business.name}`,
  },
  description:
    "JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration. Look better, see better, feel better — luxury surgical and non-surgical care from Dr. Sumeet Jindal in Raleigh, NC.",
  metadataBase: new URL("https://jiyacosmetic.com"),
  openGraph: {
    title: `${business.name} — Facial Cosmetic Surgery in Raleigh, NC`,
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
