/**
 * Typeform + Google Ads wiring for JIYA.
 *
 * FORM IDS (classic popup IDs):
 *   Book a Consult  -> CX8JrzZS   (fires the Google Ads conversion on submit)
 *   Ask a Question  -> OQrT6f0r   (no conversion)
 *
 * HIDDEN FIELDS passed on every popup/embed so leads stay attributable once
 * everything funnels into one form. These fields must also exist inside the
 * Typeform itself or Typeform drops them silently.
 *   provider   jindal | prabakaran | gambino | (absent)
 *   source     the page path the click came from
 *   utm_source, utm_medium, utm_campaign, gclid  (read from URL, persisted per session)
 */

export const CONSULT_FORM_ID = "CX8JrzZS";
export const INQUIRY_FORM_ID = "OQrT6f0r";

/** Google Ads conversion (bleph Search campaign). */
export const GADS_ID = "AW-18406910212";
export const GADS_SEND_TO = "AW-18406910212/0nrzCJady-ocEITSjMlE";

export type HiddenFields = Record<string, string>;

const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "gclid"] as const;
const STORAGE_KEY = "jiya_tracking";

/**
 * Read utm params and gclid from the current URL, persist them for the session
 * so they survive navigation, and return the merged set.
 */
export function getTrackingParams(): HiddenFields {
  if (typeof window === "undefined") return {};
  const out: HiddenFields = {};
  try {
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    if (stored && typeof stored === "object") Object.assign(out, stored);
    const sp = new URLSearchParams(window.location.search);
    let changed = false;
    for (const k of TRACK_KEYS) {
      const v = sp.get(k);
      if (v) {
        out[k] = v;
        changed = true;
      }
    }
    if (changed) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(out));
  } catch {
    /* private mode / blocked storage, ignore */
  }
  return out;
}

/** Build the hidden-field object for a popup/embed open. */
export function buildHidden(provider: string | undefined, source: string): HiddenFields {
  const path =
    source || (typeof window !== "undefined" ? window.location.pathname : "");
  const h: HiddenFields = { source: path };
  if (provider) h.provider = provider;
  return { ...h, ...getTrackingParams() };
}

/** Fire the Google Ads conversion for a Book-a-Consult submission. */
export function fireConsultConversion(): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "conversion", { send_to: GADS_SEND_TO });
  }
}
