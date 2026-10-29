"use client";

import { createPopup, type Popup } from "@typeform/embed";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { INQUIRY_FORM_ID, buildHidden } from "@/lib/forms";

const hostedUrl = (id: string) => `https://form.typeform.com/to/${id}`;

/**
 * "Ask a Question" trigger (OQrT6f0r). Like BookButton, it's a real link to the
 * hosted Typeform so it still opens a form if the SDK fails to attach; when the
 * SDK is ready the click opens the in-page popup instead. No Google Ads
 * conversion (this is a general inquiry, not a consult booking).
 */
export default function AskButton({
  label = "Ask a Question",
  className = "btn-ghost",
  onOpen,
  onClose,
}: {
  label?: string;
  className?: string;
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
      popup = createPopup(INQUIRY_FORM_ID, {
        hidden: buildHidden(undefined, pathname),
        size: 75,
        onReady: () => cbRef.current.onOpen?.(),
        onClose: () => cbRef.current.onClose?.(),
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
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (popupRef.current) {
      e.preventDefault();
      popupRef.current.open();
    }
    // else: SDK not attached, let the href open the hosted form (the fallback)
  };

  return (
    <a
      href={hostedUrl(INQUIRY_FORM_ID)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${className} no-underline`}
    >
      {label}
    </a>
  );
}
