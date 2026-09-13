import Reveal from "@/components/Reveal";
import { socialFeed } from "@/content/site";

/**
 * "Follow Dr. Jindal on YouTube" homepage section. Shows a featured video embed
 * when `socialFeed.youtube.featuredVideoId` is set; otherwise it collapses to a
 * single-column Subscribe CTA (no empty video box).
 * The Subscribe button links to `socialFeed.youtube.channelUrl` when provided.
 */
export default function YouTubePromo() {
  const { channelUrl, featuredVideoId, blurb } = socialFeed.youtube;

  return (
    <section className="bg-noir-2 py-24 lg:py-32">
      <div
        className={`container-site grid items-center gap-12 lg:gap-16 ${
          featuredVideoId ? "lg:grid-cols-12" : ""
        }`}
      >
        {/* Copy */}
        <div className={featuredVideoId ? "lg:col-span-5" : "max-w-2xl"}>
          <Reveal>
            <span className="eyebrow text-gold">On YouTube</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              Follow Dr. Jindal
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream/70">
              {blurb}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href={channelUrl || "#"}
              target={channelUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-disabled={!channelUrl}
              className={`btn-primary mt-9 ${channelUrl ? "" : "pointer-events-none opacity-60"}`}
            >
              Subscribe on YouTube
            </a>
          </Reveal>
        </div>

        {/* Featured video (only when one is set) */}
        {featuredVideoId && (
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden border border-cream/15 bg-noir">
              <iframe
                title="Featured video, Dr. Jindal"
                src={`https://www.youtube.com/embed/${featuredVideoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
