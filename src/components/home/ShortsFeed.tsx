import Reveal from "@/components/Reveal";
import { getShorts } from "@/lib/youtube";
import { getUI, type Locale } from "@/content/i18n";
import { socialFeed } from "@/content/site";

/**
 * Homepage YouTube Shorts row. Auto-pulls the newest JIYA Shorts (server-side,
 * cached 6h). Renders nothing if the feed is empty (e.g. API key not set yet),
 * so the page is never left with an empty section. Change `count` to show more.
 */
export default async function ShortsFeed({
  locale = "en",
  count = 6,
}: {
  locale?: Locale;
  count?: number;
}) {
  const shorts = await getShorts(count);
  if (shorts.length === 0) return null;

  const ui = getUI(locale);
  const channelUrl = socialFeed.youtube.channelUrl;

  return (
    <section className="bg-noir py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">{ui.shortsEyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl font-display text-display-md font-light uppercase text-cream">
                {ui.shortsHeading}
              </h2>
            </Reveal>
          </div>
          {channelUrl && (
            <Reveal delay={0.16}>
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost shrink-0"
              >
                {ui.subscribeYouTube}
              </a>
            </Reveal>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {shorts.map((s, i) => (
            <Reveal as="div" key={s.id} delay={(i % 6) * 0.06}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="group relative block aspect-[9/16] w-full overflow-hidden border border-cream/15 bg-noir-2 transition-colors duration-500 hover:border-gold/50"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.thumbnail}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                />
                {/* dark gradient + play glyph */}
                <span className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/70 bg-noir/40 backdrop-blur-sm transition-colors duration-500 group-hover:border-gold group-hover:bg-noir/60">
                  <span className="ml-0.5 border-y-[7px] border-l-[11px] border-y-transparent border-l-cream transition-colors duration-500 group-hover:border-l-gold" />
                </span>
                <span className="absolute inset-x-0 bottom-0 line-clamp-2 p-3 font-sans text-[0.7rem] font-light leading-snug text-cream/90">
                  {s.title}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
