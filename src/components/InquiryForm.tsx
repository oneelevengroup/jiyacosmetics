"use client";

import { useState } from "react";
import { business } from "@/content/site";

/**
 * General inquiry form (client memo #21).
 *
 * A short, native, on-page form so visitors can ask a quick question WITHOUT
 * opening their email client, the client's specific complaint. Submissions post
 * to Formspree, which forwards them to the practice inbox.
 *
 * TO ACTIVATE DELIVERY:
 *   1. Create a free form at https://formspree.io (set the recipient to the
 *      practice inbox, e.g. info@jiyacosmetic.com).
 *   2. Paste the form's endpoint below OR set NEXT_PUBLIC_FORMSPREE_ENDPOINT in
 *      the Vercel project env (Production + Preview).
 * Until then the form renders but tells the visitor to call/email instead.
 */
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ""; // e.g. "https://formspree.io/f/abcdwxyz"

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const configured = FORMSPREE_ENDPOINT.length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setError(
          body?.errors?.[0]?.message ??
            "Something went wrong. Please try again or call us."
        );
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <div className="border border-gold/40 bg-noir p-8 text-center">
          <p className="font-display text-2xl font-light text-gold">Thank you.</p>
          <p className="mt-3 font-sans text-sm font-light leading-relaxed text-cream/70">
            Your message is on its way. Our team will get back to you shortly. For
            anything urgent, call{" "}
            <a href={business.phoneHref} className="link-underline text-cream">
              {business.phone}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="mt-5">
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="mt-5">
        <label
          htmlFor="inquiry-message"
          className="label mb-2 block text-cream/70"
        >
          How can we help?
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={4}
          required
          placeholder="Ask us anything, a question about a procedure, pricing, or scheduling."
          className="w-full resize-y border border-cream/20 bg-noir px-4 py-3 font-sans text-[0.95rem] font-light text-cream placeholder:text-cream/35 transition-colors duration-300 focus:border-gold focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 font-sans text-sm text-gold-soft">{error}</p>
      )}

      {!configured && (
        <p className="mt-4 font-sans text-xs font-light leading-relaxed text-cream/45">
          Form delivery isn&apos;t connected yet. In the meantime, reach us at{" "}
          <a href={business.phoneHref} className="link-underline text-cream/70">
            {business.phone}
          </a>{" "}
          or{" "}
          <a href={business.emailHref} className="link-underline text-cream/70">
            {business.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={!configured || status === "submitting"}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `inquiry-${name}`;
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block text-cream/70">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-cream/20 bg-noir px-4 py-3 font-sans text-[0.95rem] font-light text-cream placeholder:text-cream/35 transition-colors duration-300 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
