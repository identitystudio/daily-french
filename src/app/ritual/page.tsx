import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, articleSchema as buildArticleSchema } from "@/lib/schema";

const TITLE = "Fresh Sheets. Fresh Flowers. Fresh French.";
const DESCRIPTION =
  "The Daily French is a morning ritual — the same way you make the bed, put fresh flowers in water, and pour the coffee. A fresh French manicure every morning.";
const DATE_PUBLISHED = "2026-05-22";
const DATE_MODIFIED = "2026-05-22";
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: TITLE };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ritual" },
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
  path: "/ritual",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
});

export default function RitualPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "The Ritual", path: "/ritual" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-2xl px-6 pt-20 pb-14 text-center">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-6">
              The morning ritual
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.1]">
              Fresh Sheets. Fresh Flowers. Fresh French.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Visual */}
      <section className="mx-auto max-w-3xl px-6 pt-12">
        <Reveal y={16}>
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
            <Image
              src="/images/placeholder.jpg"
              alt="The Daily French morning ritual"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Opening */}
      <article className="mx-auto max-w-lg px-6 pt-16">
        <Reveal>
          <div className="space-y-6 text-[18px] sm:text-[19px] leading-[1.9] text-foreground/88">
            <p>
              There is a kind of woman who begins her day deliberately. She
              does not just roll out of bed and react to whatever is next. She
              creates a moment — small, quiet, hers.
            </p>
            <p>
              She makes the coffee. She smooths the sheets. She opens the
              curtains. She puts fresh flowers in water, not because anyone
              will notice, but because ordinary life still deserves beauty.
            </p>
            <p>
              The Daily French is part of that morning. A daily ritual for
              clean, finished hands — the same category as fresh sheets, fresh
              flowers, a clean face. Not a luxury. A standard.
            </p>
          </div>
        </Reveal>
      </article>

      {/* The ritual steps */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)] mt-14">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-10">
              The morning
            </p>
          </Reveal>
          <div className="border-t border-[var(--line)]">
            {[
              {
                n: "01",
                t: "Pour the coffee",
                b: "The day hasn't started yet. The house is quiet. This is your moment.",
              },
              {
                n: "02",
                t: "Open a fresh set",
                b: "Tear open a new individually sealed daily French manicure. One day, one set. Always fresh.",
              },
              {
                n: "03",
                t: "Apply in minutes",
                b: "Prep, tab, press. Clean, finished hands — before the day asks anything of you.",
              },
              {
                n: "04",
                t: "Live the day",
                b: "Hold the coffee cup, the laundry basket, the laptop, the child. Your hands are ready.",
              },
              {
                n: "05",
                t: "Remove at night",
                b: "Warm soapy water, sixty seconds, done. No scraping. No acetone. No reused nails.",
              },
              {
                n: "06",
                t: "Start fresh tomorrow",
                b: "Tomorrow morning, a new set. A fresh French manicure every morning, for thirty days.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="flex flex-col sm:grid sm:grid-cols-[4rem_1fr_1.5fr] sm:gap-10 items-start py-7 border-b border-[var(--line)]">
                  <span className="font-display text-3xl text-[var(--nude)] mb-2 sm:mb-0 leading-none">
                    {step.n}
                  </span>
                  <p className="font-display text-xl mb-1 sm:mb-0">{step.t}</p>
                  <p className="text-[var(--muted)] text-[15px] leading-relaxed">{step.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The category */}
      <article className="mx-auto max-w-lg px-6 pt-16">
        <Reveal>
          <div className="space-y-6 text-[18px] leading-[1.9] text-foreground/88">
            <p>
              Fresh sheets are not a luxury. They are a standard. You wash
              them because you sleep in them. You change them because that is
              what a clean home looks like.
            </p>
            <p>
              Fresh flowers are not an indulgence. They are a choice about how
              you want to live inside your own life. A small, deliberate act of
              beauty for no one but yourself.
            </p>
            <p>
              A fresh French manicure is the same category. Not a treat for a
              special occasion. Not a two-week project you protect. A quiet
              daily act of finishing yourself before the day begins.
            </p>
            <p>
              Because she knows her hands touch everything. And clean hands can
              still be beautiful hands.
            </p>
          </div>
        </Reveal>
      </article>

      {/* Triple visual treatment */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="grid grid-cols-3 gap-5 text-center">
            {[
              { label: "Fresh sheets", sub: "Changed because you sleep in them" },
              { label: "Fresh flowers", sub: "Because ordinary life deserves beauty" },
              { label: "Fresh French", sub: "Clean, finished hands every morning" },
            ].map((item) => (
              <div key={item.label} className="border border-[var(--line)] rounded-2xl p-8 bg-[var(--surface)]">
                <p className="font-display text-xl mb-3">{item.label}</p>
                <p className="text-[var(--muted)] text-[13px] leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-5xl px-6 py-6 border-t border-[var(--line)]">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Keep reading
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {[
              { href: "/manifesto", label: "Read the Manifesto →" },
              { href: "/why-daily", label: "Why two-week nails stopped making sense →" },
              { href: "/shape", label: "The perfect daily French shape →" },
              { href: "/30-day-set", label: "Shop the 30-Day Set →" },
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
                Start your morning ritual.
              </h2>
              <p className="mt-5 text-white/50 max-w-sm mx-auto text-[15px] leading-relaxed">
                A fresh French manicure every morning, for thirty days.
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
