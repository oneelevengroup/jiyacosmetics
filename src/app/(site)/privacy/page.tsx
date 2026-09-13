import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration in Raleigh, NC.",
};

const updated = "September 2025";

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Overview",
    body: [
      `This Privacy Policy explains how ${business.fullName} ("JIYA," "we," "us," or "our") collects, uses, and protects information when you visit our website or contact us. By using this site, you agree to the practices described here.`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect information you choose to provide, such as your name, email address, phone number, and any details you include when you submit a consultation request or general inquiry form, or when you call or email us.",
      "We also collect standard technical information automatically, such as your browser type, device, and pages visited, through cookies and similar technologies used to operate and improve the site.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the information you provide to respond to your questions, schedule and manage consultations and appointments, and communicate with you about our services. We use technical information to maintain site security, understand how the site is used, and improve your experience.",
    ],
  },
  {
    heading: "How your information is shared",
    body: [
      "We do not sell your personal information. We may share information with trusted service providers who help us operate the site and communicate with patients, such as our website host and our online form providers, and only to the extent needed to perform those services. We may also disclose information if required by law.",
    ],
  },
  {
    heading: "Protected health information",
    body: [
      "Any protected health information shared as part of your care is handled in accordance with applicable law, including HIPAA where it applies. This website's forms are intended for general scheduling and inquiries and should not be used to send detailed medical information. Please do not include sensitive health details in a web form.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "We may use cookies and analytics tools to understand site traffic and improve performance. You can control cookies through your browser settings. Disabling cookies may affect how parts of the site function.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You may opt out of marketing communications at any time by following the unsubscribe instructions in our messages or by contacting us. You may also request access to, correction of, or deletion of your personal information, subject to applicable law.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `If you have questions about this Privacy Policy, contact us at ${business.email} or ${business.phone}. ${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-12 lg:pb-16">
          <Reveal>
            <span className="eyebrow text-gold">Legal</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-display-lg font-light uppercase text-gold">
              Privacy Policy
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 font-sans text-sm font-light text-cream/50">
              Last updated: {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-site max-w-3xl">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.04}>
              <div className="mb-12">
                <h2 className="font-display text-2xl font-light uppercase text-cream">
                  {s.heading}
                </h2>
                {s.body.map((para, j) => (
                  <p
                    key={j}
                    className="mt-4 font-sans text-[0.95rem] font-light leading-relaxed text-cream/70"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
