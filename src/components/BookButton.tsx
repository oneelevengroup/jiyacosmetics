"use client";

import { PopupButton } from "@typeform/embed-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CONSULT_FORM_ID,
  buildHidden,
  fireConsultConversion,
  type HiddenFields,
} from "@/lib/forms";

export { CONSULT_FORM_ID };

/**
 * Opens the JIYA "Book a Consult" Typeform (CX8JrzZS) as a popup, passes hidden
 * attribution fields, and fires the Google Ads conversion on submit.
 * Pass `provider` (jindal | prabakaran | gambino) on provider-specific buttons.
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
  /** Fires when the popup opens (e.g. to close a mobile menu). */
  onOpen?: () => void;
  /** Fires when the popup closes. */
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState<HiddenFields>({});
  useEffect(() => {
    setHidden(buildHidden(provider, pathname));
  }, [provider, pathname]);

  return (
    <PopupButton
      id={CONSULT_FORM_ID}
      size={75}
      className={className}
      hidden={hidden}
      onReady={onOpen}
      onClose={onClose}
      onSubmit={fireConsultConversion}
    >
      {label}
    </PopupButton>
  );
}
