"use client";

import { Widget } from "@typeform/embed-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CONSULT_FORM_ID,
  buildHidden,
  fireConsultConversion,
  type HiddenFields,
} from "@/lib/forms";

/** Inline (embedded) consultation Typeform for the Contact page. */
export default function ConsultForm({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState<HiddenFields>({});
  useEffect(() => {
    setHidden(buildHidden(undefined, pathname));
  }, [pathname]);

  return (
    <Widget
      id={CONSULT_FORM_ID}
      className={className}
      style={{ width: "100%", height: "100%" }}
      hidden={hidden}
      onSubmit={fireConsultConversion}
      inlineOnMobile
    />
  );
}
