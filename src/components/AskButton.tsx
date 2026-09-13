"use client";

import { PopupButton } from "@typeform/embed-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { INQUIRY_FORM_ID, buildHidden, type HiddenFields } from "@/lib/forms";

/**
 * Opens the "Ask a Question" Typeform (OQrT6f0r) as a popup. Passes the same
 * hidden attribution fields as BookButton, but does NOT fire the Google Ads
 * consult conversion (this is a general inquiry, not a consult booking).
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
  const [hidden, setHidden] = useState<HiddenFields>({});
  useEffect(() => {
    setHidden(buildHidden(undefined, pathname));
  }, [pathname]);

  return (
    <PopupButton
      id={INQUIRY_FORM_ID}
      size={75}
      className={className}
      hidden={hidden}
      onReady={onOpen}
      onClose={onClose}
    >
      {label}
    </PopupButton>
  );
}
