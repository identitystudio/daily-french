import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, articleSchema as buildArticleSchema } from "@/lib/schema";

const TITLE = "The Perfect Daily French Shape";
const DESCRIPTION =
  "Medium-short, softly rounded almond, matte milky base, softly glossy French tip, slightly shorter thumb. The Daily French shape is designed to be lived in every day.";
const DATE_PUBLISHED = "2026-05-22";
const DATE_MODIFIED = "2026-05-22";
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: TITLE };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/shape" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

const articleSchema = buildArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: "/shape",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
});

const details = [
  {
    label: "Shape",
    value: "Medium-short, softly rounded almond",
    detail:
      "Not so short it reads as plain. Not so long it catches on everything. The almond is gently rounded — feminine without drama, finished without fuss.",
  },
  {
    label: "Length",
    value: "Medium-short",
    detail:
      "Long enough to look intentional. Short enough to type, text, cook, clean, and live a full day without a single thought about your nails.",
  },
  {
    label: "Thumb",
    value: "Slightly shorter",
    detail:
      "The thumb is proportionally shorter than the fingers — a small detail that makes an enormous difference in how natural the set feels on real hands doing real things.",
  },
  {
    label: "Base",
    value: "Matte milky",
    detail:
      "A soft, opaque milky white — not stark, not sheer. The matte finish keeps it modern and understated. Quiet. Clean. Finished.",
  },
  {
    label: "French tip",
    value: "Softly glossy",
    detail:
      "The French tip carries a gentle gloss that contrasts the matte base without shouting. The classic French line — clean, precise, softened for daily wear.",
  },
  {
    label: "Wearability",
    value: "Built for daily life",
    detail:
      "Every design decision — the length, the shape, the thumb proportion, the finish — was made for a woman who lives in her hands. No babying required.",
  },
];

export default function ShapePage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "The Shape", path: "/shape" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 md:gap-16 items-end">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-5">
              The nail design
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.02]">
              The Perfect Daily French Shape
            </h1>
          </Reveal>
          <Reveal delay={150} className="pb-1">
            <p className="text-[17px] leading-[1.8] text-foreground/85">
              Medium-short softly rounded almond. Matte milky base. Softly
              glossy French tip. A slightly shorter thumb for daily life. Every
              detail was designed to be worn — not protected.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual */}
      <section className="mx-auto max-w-3xl px-6 pt-12">
        <Reveal y={16}>
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
            <Image
              src="/images/placeholder.jpg"
              alt="The Daily French nail shape"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Intro */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="space-y-5 text-[18px] leading-[1.9] text-foreground/88">
            <p>
              Most press-on nails are designed to look good in photos. The
              Daily French was designed to be worn every day — by a woman with
              a full life who uses her hands for everything.
            </p>
            <p>
              The shape is not about drama. It is about finishing your look
              quietly, confidently, and without a single nail catching on
              anything before noon.
            </p>
          </div>
        </Reveal>
      </article>

      {/* Detail breakdown */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)] mt-14">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-10">
              The design details
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 70}>
                <div className="border border-[var(--line)] rounded-2xl p-7 bg-[var(--background)]">
                  <p className="uppercase tracking-[0.15em] text-[11px] text-[var(--muted)] mb-2">
                    {d.label}
                  </p>
                  <p className="font-display text-xl mb-3">{d.value}</p>
                  <p className="text-[var(--muted)] text-[15px] leading-relaxed">{d.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The philosophy */}
      <article className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-5">
              Why it matters
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.08]">
              A shape built for real life.
            </h2>
          </Reveal>
          <Reveal delay={150} className="space-y-4 text-[17px] leading-[1.8] text-foreground/85 md:pt-12">
            <p>
              A French manicure has always been the standard for clean,
              finished hands. But traditional French nails — long, square,
              stark white — belong to a different era of beauty.
            </p>
            <p>
              The Daily French is the modern version. Shorter. Softer. More
              wearable. A matte milky base instead of a harsh opaque white. A
              softly glossy French tip instead of a crisp edge. An almond
              shape instead of a square.
            </p>
            <p>
              It is a French manicure for the way women actually live now —
              clean, minimal, finished, and completely at home on hands that
              do real things every day.
            </p>
          </Reveal>
        </div>
      </article>

      {/* Internal links */}
      <section className="mx-auto max-w-5xl px-6 py-6 border-t border-[var(--line)]">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Keep reading
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {[
              { href: "/30-day-set", label: "Shop the 30-Day Set →" },
              { href: "/ritual", label: "The morning ritual →" },
              { href: "/why-daily", label: "Why two-week nails stopped making sense →" },
              { href: "/compare", label: "Compare The Daily French →" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal y={20}>
          <div className="relative rounded-3xl bg-[var(--foreground)] overflow-hidden px-10 sm:px-16 py-14 sm:py-20 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--pink-strong)]/10 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[var(--nude)]/10 pointer-events-none" />
            <div className="relative">
              <p className="uppercase tracking-[0.2em] text-xs text-white/40 mb-6">Limited founder batch</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.08]">
                The perfect shape. Every morning.
              </h2>
              <p className="mt-5 text-white/50 max-w-sm mx-auto text-[15px] leading-relaxed">
                Thirty days of fresh daily French manicures. One set per morning.
              </p>
              <div className="mt-10">
                <a
                  href={SITE.funnelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-[var(--foreground)] text-[15px] tracking-wide hover:bg-[var(--pink)] transition-colors duration-200"
                >
                  {SITE.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
