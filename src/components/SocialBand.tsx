import Reveal from "@/components/Reveal";
import { getSite, getUI, type Locale } from "@/content/i18n";

/**
 * "Follow Along" band (shown above the footer). Renders a live Instagram feed
 * when `socialFeed.instagramEmbedUrl` is set (widget embed URL); otherwise a
 * prominent Instagram follow CTA.
 */
export default function SocialBand({ locale = "en" }: { locale?: Locale }) {
  const { business, socialFeed } = getSite(locale);
  const ui = getUI(locale);
  const { instagramEmbedUrl, instagramHandle } = socialFeed;

  return (
    <section className="border-t border-cream/10 bg-noir-2 py-20 lg:py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">{ui.followAlong}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                {instagramHandle}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div className="flex gap-6">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline label text-cream/70 hover:text-cream"
              >
                Instagram
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline label text-cream/70 hover:text-cream"
              >
                Facebook
              </a>
              {business.social.youtube && (
                <a
                  href={business.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline label text-cream/70 hover:text-cream"
                >
                  YouTube
                </a>
              )}
            </div>
          </Reveal>
        </div>

        {instagramEmbedUrl && (
          <div className="mt-12">
            <iframe
              title="Instagram feed"
              src={instagramEmbedUrl}
              loading="lazy"
              scrolling="no"
              className="w-full"
              style={{ border: 0, minHeight: 360 }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
