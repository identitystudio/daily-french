import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, articleSchema as buildArticleSchema } from "@/lib/schema";

const TITLE = "Why Two-Week Nails Stopped Making Sense";
const DESCRIPTION =
  "Two-week manicures chip, lift, and grow out. Old glue collects. Reused sticky tabs lose their grip. There is a better way: a fresh daily disposable French manicure every morning.";
const DATE_PUBLISHED = "2026-05-22";
const DATE_MODIFIED = "2026-05-22";
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: TITLE };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/why-daily" },
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
  path: "/why-daily",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
});

const reasons = [
  {
    n: "01",
    t: "A two-week manicure ages with you",
    b: "By day six it looks tired. By day ten it looks like a decision you regret. Chips. Lifting edges. A grow-out gap that gets wider every morning. That is what a two-week manicure actually is — a manicure you have to protect and apologize for.",
  },
  {
    n: "02",
    t: "Old glue doesn't belong on your nails",
    b: "Every reusable press-on you reapply carries old glue from the last wear. Dried adhesive. Residue from wherever those nails have been. A fresh start should actually be fresh — not yesterday's application over again.",
  },
  {
    n: "03",
    t: "Reused sticky tabs lose everything",
    b: "Sticky tabs are single-use by design. Reusing them means weaker adhesion, an uneven surface, and nails that lift before noon. No reused nails that already touched sticky tabs. That is the standard.",
  },
  {
    n: "04",
    t: "Real life doesn't stop for your manicure",
    b: "Dishes. Laundry. Packages. Meals. Workouts. Real life happens with your hands. A two-week manicure asks you to be careful around your own life. A daily disposable French manicure is designed for the life you actually live.",
  },
  {
    n: "05",
    t: "Hygiene is part of beauty too",
    b: "Once you start thinking differently about what's sitting under a lifted press-on, you don't go back. Clean hands can still be beautiful hands — and they should be both at the same time.",
  },
];

export default function WhyDailyPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Why Daily", path: "/why-daily" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 md:gap-16 items-end">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-5">
              The case for daily disposable
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.02]">
              Why Two-Week Nails Stopped Making Sense
            </h1>
          </Reveal>
          <Reveal delay={150} className="pb-1">
            <p className="text-[17px] leading-[1.8] text-foreground/85">
              A two-week manicure chips, lifts, grows out, and ages on your
              hands. Old glue sits around. Reused sticky tabs lose their grip.
              There is a better standard: a fresh daily disposable French
              manicure every morning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reasons */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="border-t border-[var(--line)]">
          {reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 80}>
              <div className="flex flex-col sm:grid sm:grid-cols-[4rem_1fr_1.5fr] sm:gap-10 items-start py-10 border-b border-[var(--line)]">
                <span className="font-display text-3xl text-[var(--nude)] mb-2 sm:mb-0 leading-none">
                  {r.n}
                </span>
                <p className="font-display text-2xl mb-2 sm:mb-0 leading-snug">{r.t}</p>
                <p className="text-[var(--muted)] text-[16px] leading-[1.8]">{r.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The alternative */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
              The alternative
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.08] max-w-2xl mb-10">
              A fresh start, every morning.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Wear the day",
                b: "One fresh press-on French set, applied in minutes. Clean, finished hands from the moment you leave the house.",
              },
              {
                t: "Toss the day",
                b: "Remove at night. No old glue, no reused nails that already touched sticky tabs. Nothing carries over.",
              },
              {
                t: "Start fresh tomorrow",
                b: "Tomorrow morning, a new set. A fresh daily disposable French manicure — every single day.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 80}>
                <div className="border border-[var(--line)] rounded-2xl p-7 bg-[var(--background)]">
                  <p className="font-display text-xl mb-3">{item.t}</p>
                  <p className="text-[var(--muted)] text-[15px] leading-relaxed">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Keep reading
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {[
              { href: "/compare", label: "Compare The Daily French to salon and reusable nails →" },
              { href: "/ritual", label: "The morning ritual →" },
              { href: "/30-day-set", label: "Shop the 30-Day Set →" },
              { href: "/faq", label: "FAQ →" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal y={20}>
          <div className="relative rounded-3xl bg-[var(--foreground)] overflow-hidden px-10 sm:px-16 py-14 sm:py-20 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--pink-strong)]/10 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[var(--nude)]/10 pointer-events-none" />
            <div className="relative">
              <p className="uppercase tracking-[0.2em] text-xs text-white/40 mb-6">Limited founder batch</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.08]">
                Clean, finished hands. Every morning.
              </h2>
              <p className="mt-5 text-white/50 max-w-sm mx-auto text-[15px] leading-relaxed">
                The Founder Batch is the first limited release of The Daily French 30-Day Set.
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
