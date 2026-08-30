"use client";

import { Widget } from "@typeform/embed-react";

/** General inquiry Typeform ID (form.typeform.com/to/OQrT6f0r) — client memo #21. */
export const INQUIRY_FORM_ID = "OQrT6f0r";

/**
 * Inline (embedded) general-inquiry Typeform for the Contact page.
 * A quick "ask us anything" form so visitors don't have to open their email
 * client, kept separate from the consultation booking form.
 */
export default function InquiryForm({ className = "" }: { className?: string }) {
  return (
    <Widget
      id={INQUIRY_FORM_ID}
      className={className}
      style={{ width: "100%", height: "100%" }}
      inlineOnMobile
    />
  );
}
