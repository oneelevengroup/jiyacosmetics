import type { Metadata } from "next";
import ZiplyftSections from "@/components/ZiplyftSections";

export const metadata: Metadata = {
  title: "Ziplyft — The 10-Minute Upper Eyelid Lift",
  description:
    "Ziplyft at JIYA in Raleigh, NC — a minimally invasive, in-office upper eyelid lift in about 10 minutes per eye. No scalpel, no sutures, minimal downtime, with Dr. Sumeet Jindal.",
};

// Main-site Ziplyft page (with global header/footer). The no-nav ad version
// lives at /ziplyft.
export default function ZiplyftServicePage() {
  return <ZiplyftSections />;
}
