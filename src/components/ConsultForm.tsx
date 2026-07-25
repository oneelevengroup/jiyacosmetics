"use client";

import { Widget } from "@typeform/embed-react";
import { CONSULT_FORM_ID } from "./BookButton";

/** Inline (embedded) consultation Typeform for the Contact page. */
export default function ConsultForm({ className = "" }: { className?: string }) {
  return (
    <Widget
      id={CONSULT_FORM_ID}
      className={className}
      style={{ width: "100%", height: "100%" }}
      inlineOnMobile
    />
  );
}
