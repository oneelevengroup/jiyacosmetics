"use client";

import { createPopup, type Popup } from "@typeform/embed";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { CONSULT_FORM_ID, buildHidden, fireConsultConversion } from "@/lib/forms";

export { CONSULT_FORM_ID };

const hostedUrl = (id: string) => `https://form.typeform.com/to/${id}`;

/**
 * "Book a Consult" trigger (CX8JrzZS).
 *
 * Rendered as a REAL link to the hosted Typeform so it degrades gracefully: if
 * the Typeform SDK is slow/blocked/fails to attach (common on mobile Safari with
 * tracking protection), tapping still opens the hosted form instead of doing
 * nothing. When the SDK is ready, the click opens the in-page popup instead
 * (preventDefault), passes hidden attribution fields, and fires the Google Ads
 * conversion on submit.
 */
export default function BookButton({
  label = "Book a Consultation",
  className = "btn-primary",
  provider,
  onOpen,
  onClose,
}: {
  label?: string;
  className?: string;
  provider?: string;
  onOpen?: () => void;
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const popupRef = useRef<Popup | null>(null);
  const cbRef = useRef({ onOpen, onClose });
  cbRef.current = { onOpen, onClose };

  useEffect(() => {
    let popup: Popup | null = null;
    try {
      popup = createPopup(CONSULT_FORM_ID, {
        hidden: buildHidden(provider, pathname),
        size: 75,
        onReady: () => cbRef.current.onOpen?.(),
        onClose: () => cbRef.current.onClose?.(),
        onSubmit: fireConsultConversion,
      });
      popupRef.current = popup;
    } catch {
      popupRef.current = null;
    }
    return () => {
      popupRef.current = null;
      try {
        popup?.unmount();
      } catch {
        /* no-op */
      }
    };
  }, [provider, pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (popupRef.current) {
      e.preventDefault();
      popupRef.current.open();
    }
    // else: SDK not attached, let the href open the hosted form (the fallback)
  };

  return (
    <a
      href={hostedUrl(CONSULT_FORM_ID)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${className} no-underline`}
    >
      {label}
    </a>
  );
}
