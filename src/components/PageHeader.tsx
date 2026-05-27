import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
      <Reveal>
        {eyebrow && (
          <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl leading-[1.05]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-[var(--muted)] text-lg leading-relaxed">
            {intro}
          </p>
        )}
      </Reveal>
    </section>
  );
}
