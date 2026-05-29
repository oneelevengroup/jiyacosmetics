import Link from "next/link";
import { business, nav, serviceCategories } from "@/content/site";
import Logo from "./Logo";

export default function Footer() {
  const { address } = business;
  return (
    <footer className="border-t border-cream/10 bg-noir text-cream">
      <div className="container-site py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand + tagline */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-7 max-w-xs font-display text-3xl font-light uppercase leading-tight text-gold">
              {business.tagline}
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline font-sans text-sm text-cream/70 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow">Services</h3>
            <ul className="mt-6 space-y-3">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services#${cat.id}`}
                    className="link-underline font-sans text-sm text-cream/70 hover:text-cream"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow">Visit</h3>
            <address className="mt-6 space-y-3 not-italic font-sans text-sm text-cream/70">
              <p>
                {address.line1}
                <br />
                {address.city}, {address.state} {address.zip}
                <br />
                <span className="text-cream/45">{address.neighborhood}</span>
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
              <p className="text-cream/45">
                {business.hours}
                <br />
                {business.hoursNote}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-sans text-xs tracking-wide text-cream/45">
            © {new Date().getFullYear()} {business.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="link-underline label text-cream/55">
              Instagram
            </a>
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="link-underline label text-cream/55">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
