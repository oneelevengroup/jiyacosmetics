/**
 * YouTube Shorts feed for the homepage.
 *
 * Pulls the channel's uploads playlist, keeps only short (<= 3 min) videos, and
 * filters out the shared channel's eye-care / NCO content so only JIYA cosmetic
 * Shorts show on the cosmetic site.
 *
 * QUOTA: playlistItems.list (1 unit) + videos.list (1 unit) per refresh. We
 * cache for 6 hours (revalidate), so this is ~8 units/day, far under the
 * 10,000/day free quota. We never call search.list (100 units).
 *
 * KEY: read from the YOUTUBE_API_KEY env var (server only, never shipped to the
 * browser, never committed). Set it in the Vercel project settings.
 *
 * SOURCE PLAYLIST: defaults to the uploads playlist. To switch to a dedicated
 * JIYA playlist later, set YOUTUBE_PLAYLIST_ID in the env (one-line change) so
 * the eye-care content is excluded at the source, no keyword filter needed.
 */

const API_KEY = process.env.YOUTUBE_API_KEY;
const PLAYLIST_ID =
  process.env.YOUTUBE_PLAYLIST_ID || "UUMtuCV-4zO2rc4vM7ENcG1w"; // uploads
const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours
const SHORT_MAX_SECONDS = 180;

// Titles/descriptions matching these are the shared channel's eye-care brand
// (New Century Ophthalmology), not JIYA cosmetic. Excluded until a dedicated
// JIYA playlist exists.
const EXCLUDE =
  /\b(nco|cataract|lasik|icl|astigmatism|glaucoma|refractive lens|dry eye|vision correction|eye center)\b/i;

export type Short = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
};

function durationToSeconds(iso: string): number {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso ?? "");
  if (!m) return 0;
  const [h, mn, s] = [m[1], m[2], m[3]].map((x) => (x ? parseInt(x, 10) : 0));
  return h * 3600 + mn * 60 + s;
}

async function ytFetch(url: string): Promise<any | null> {
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/**
 * Returns up to `limit` recent JIYA Shorts. Returns [] if the key is missing or
 * the API fails (the section then simply doesn't render). On a transient failure
 * Next keeps serving the last successful cached response.
 */
export async function getShorts(limit = 6): Promise<Short[]> {
  if (!API_KEY) return [];

  const pl = await ytFetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`
  );
  const ids: string[] = (pl?.items ?? [])
    .map((i: any) => i?.contentDetails?.videoId)
    .filter(Boolean);
  if (ids.length === 0) return [];

  const vids = await ytFetch(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${ids.join(
      ","
    )}&maxResults=50&key=${API_KEY}`
  );
  const items: any[] = vids?.items ?? [];

  const shorts: Short[] = [];
  for (const v of items) {
    const dur = durationToSeconds(v?.contentDetails?.duration);
    if (dur > SHORT_MAX_SECONDS || dur === 0) continue;
    const sn = v?.snippet ?? {};
    const haystack = `${sn.title ?? ""} ${sn.description ?? ""}`;
    if (EXCLUDE.test(haystack)) continue;
    const thumbs = sn.thumbnails ?? {};
    const thumb =
      thumbs.maxres?.url ?? thumbs.high?.url ?? thumbs.medium?.url ?? thumbs.default?.url;
    if (!thumb) continue;
    shorts.push({
      id: v.id,
      title: (sn.title ?? "").replace(/^JIYA RALEIGH \|\s*/i, ""),
      thumbnail: thumb,
      url: `https://www.youtube.com/shorts/${v.id}`,
    });
    if (shorts.length >= limit) break;
  }
  return shorts;
}
