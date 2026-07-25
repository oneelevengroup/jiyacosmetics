import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import { business, socialFeed } from "@/content/site";

/**
 * "Follow Along" band (shown above the footer). Renders a live Instagram feed
 * when `socialFeed.instagramEmbedUrl` is set (widget embed URL); otherwise a
 * tasteful placeholder grid + follow links.
 */
export default function SocialBand() {
  const { instagramEmbedUrl, instagramHandle } = socialFeed;

  return (
    <section className="border-t border-cream/10 bg-noir-2 py-20 lg:py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">Follow Along</span>
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

        <div className="mt-12">
          {instagramEmbedUrl ? (
            <iframe
              title="Instagram feed"
              src={instagramEmbedUrl}
              loading="lazy"
              scrolling="no"
              className="w-full"
              style={{ border: 0, minHeight: 360 }}
            />
          ) : (
            <Reveal>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-64 w-full overflow-hidden border border-cream/15 transition-colors duration-500 hover:border-gold/40 md:h-80"
              >
                <Placeholder />
              </a>
              <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/40">
                Live feed coming soon. Follow {instagramHandle} for the latest.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
