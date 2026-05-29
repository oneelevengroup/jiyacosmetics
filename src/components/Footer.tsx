import Link from "next/link";
import { business, nav, serviceCategories } from "@/content/site";
import Logo from "./Logo";

export default function Footer() {
  const { address } = business;
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-site py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand + tagline */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-xs font-display text-2xl font-light leading-snug text-ivory/90">
              {business.tagline}
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow text-ivory/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline font-sans text-sm text-ivory/80 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow text-ivory/50">Services</h3>
            <ul className="mt-5 space-y-3">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services#${cat.id}`}
                    className="link-underline font-sans text-sm text-ivory/80 hover:text-ivory"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow text-ivory/50">Visit</h3>
            <address className="mt-5 space-y-3 not-italic font-sans text-sm text-ivory/80">
              <p>
                {address.line1}
                <br />
                {address.city}, {address.state} {address.zip}
                <br />
                <span className="text-ivory/50">{address.neighborhood}</span>
              </p>
              <p>
                <a href={business.phoneHref} className="link-underline">
                  {business.phone}
                </a>
                <br />
                <a href={business.emailHref} className="link-underline">
                  {business.email}
                </a>
              </p>
              <p className="text-ivory/60">
                {business.hours}
                <br />
                {business.hoursNote}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-sans text-xs tracking-wide text-ivory/50">
            © {new Date().getFullYear()} {business.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="link-underline font-sans text-xs uppercase tracking-[0.18em] text-ivory/60">
              Instagram
            </a>
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="link-underline font-sans text-xs uppercase tracking-[0.18em] text-ivory/60">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
