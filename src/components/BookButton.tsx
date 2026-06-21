"use client";

import { PopupButton } from "@typeform/embed-react";

/** Typeform consultation form ID (form.typeform.com/to/ZJCdEhfD). */
export const CONSULT_FORM_ID = "ZJCdEhfD";

/**
 * Opens the JIYA consultation Typeform as a popup. Use anywhere a
 * "Book a Consultation / Book an Appointment" action is needed.
 * Pass `className` to match the surrounding button style (e.g. "btn-primary").
 */
export default function BookButton({
  label = "Book a Consultation",
  className = "btn-primary",
  onOpen,
}: {
  label?: string;
  className?: string;
  /** Fires when the popup opens (e.g. to close a mobile menu). */
  onOpen?: () => void;
}) {
  return (
    <PopupButton
      id={CONSULT_FORM_ID}
      size={75}
      className={className}
      onReady={onOpen}
    >
      {label}
    </PopupButton>
  );
}
