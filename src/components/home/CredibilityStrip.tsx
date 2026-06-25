import { credibility } from "@/content/site";

export default function CredibilityStrip() {
  return (
    <section className="border-y border-cream/10 bg-noir-2">
      <div className="container-site flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-7 lg:gap-x-16">
        {credibility.map((item) => (
          <span
            key={item}
            className="flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-cream/65"
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
