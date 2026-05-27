import { Reveal } from "@/components/Reveal";

export function Section({
  title,
  children,
  id,
}: {
  title?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-10">
      <Reveal>
        {title && (
          <h2 className="font-display text-2xl sm:text-3xl mb-5">{title}</h2>
        )}
        <div className="prose-like text-[17px] leading-[1.75] text-foreground/90 space-y-4">
          {children}
        </div>
      </Reveal>
    </section>
  );
}
