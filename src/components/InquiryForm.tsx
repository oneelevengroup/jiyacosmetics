"use client";

import { Widget } from "@typeform/embed-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { INQUIRY_FORM_ID, buildHidden, type HiddenFields } from "@/lib/forms";

export { INQUIRY_FORM_ID };

/**
 * Inline (embedded) general-inquiry Typeform for the Contact page.
 * A quick "ask us anything" form so visitors don't have to open their email
 * client, kept separate from the consultation booking form. Passes source/utm
 * hidden fields for attribution (no consult conversion).
 */
export default function InquiryForm({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState<HiddenFields>({});
  useEffect(() => {
    setHidden(buildHidden(undefined, pathname));
  }, [pathname]);

  return (
    <Widget
      id={INQUIRY_FORM_ID}
      className={className}
      style={{ width: "100%", height: "100%" }}
      hidden={hidden}
      inlineOnMobile
    />
  );
}
