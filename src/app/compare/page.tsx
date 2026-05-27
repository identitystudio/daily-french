import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, articleSchema as buildArticleSchema } from "@/lib/schema";

const TITLE = "Press-On Nails vs Salon Nails vs The Daily French";
const DESCRIPTION =
  "How does The Daily French compare to salon nails and reusable press-ons? A side-by-side look at wear time, freshness, hygiene, cost, and daily life fit.";
const DATE_PUBLISHED = "2026-05-22";
const DATE_MODIFIED = "2026-05-22";
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: TITLE };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/compare" },
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
  path: "/compare",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
});

const rows: { label: string; salon: string; reusable: string; daily: string }[] = [
  {
    label: "Wear time",
    salon: "2–3 weeks",
    reusable: "1–2 weeks",
    daily: "One day",
  },
  {
    label: "Freshness",
    salon: "Chips by day 6–8",
    reusable: "Lifts and ages with reuse",
    daily: "Fresh every single morning",
  },
  {
    label: "Old glue / reuse",
    salon: "Grows out and lifts",
    reusable: "Old glue, reused sticky tabs",
    daily: "No old glue. No reused nails. Ever.",
  },
  {
    label: "Hygiene",
    salon: "Dirt traps under lifted acrylic",
    reusable: "Reused tabs collect bacteria",
    daily: "New set every morning. Nothing reused.",
  },
  {
    label: "Cost model",
    salon: "$50–$120+ every 2–3 weeks",
    reusable: "$10–$30 per pack, stretched",
    daily: "One 30-Day Set, one month covered",
  },
  {
    label: "Maintenance",
    salon: "Baby it for 2 weeks",
    reusable: "Soak off, store, reapply",
    daily: "Wear it. Remove it. Done.",
  },
  {
    label: "Daily life fit",
    salon: "Avoid water, dishes, cleaning",
    reusable: "Careful handling to preserve tabs",
    daily: "Live your day. Toss it at night.",
  },
  {
    label: "Removal",
    salon: "Acetone soak, nail damage risk",
    reusable: "Warm soak, store for reuse",
    daily: "Warm soapy water, 60 seconds, done",
  },
  {
    label: "Morning routine fit",
    salon: "N/A — already on",
    reusable: "Re-applies if lifted overnight",
    daily: "Open, apply in minutes, go",
  },
  {
    label: "Hygiene mindset",
    salon: "Two-week beauty",
    reusable: "Stretch and reuse",
    daily: "Fresh start, every morning",
  },
];

export default function ComparePage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Compare", path: "/compare" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-5">
              The comparison
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.02] max-w-3xl">
              Press-On Nails vs Salon Nails vs The Daily French
            </h1>
          </Reveal>
          <Reveal delay={120} className="mt-8 max-w-xl">
            <p className="text-[17px] leading-[1.8] text-foreground/85">
              The Daily French is not trying to be a two-week manicure. It is a
              fresh French manicure every morning — a completely different idea
              about what beautiful hands can mean.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-[var(--line)]">
                  <th className="text-left py-4 pr-6 font-medium uppercase tracking-[0.15em] text-[11px] text-[var(--muted)] w-36">
                    Category
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-[var(--muted)] text-base">
                    Salon nails
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-[var(--muted)] text-base">
                    Reusable press-ons
                  </th>
                  <th className="text-left py-4 px-6 font-display text-lg text-foreground bg-[var(--pink)]/20 rounded-t-xl">
                    The Daily French
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-[var(--line)] ${i % 2 === 0 ? "" : "bg-[var(--surface)]"}`}
                  >
                    <td className="py-5 pr-6 font-medium text-[var(--foreground)] text-[13px] uppercase tracking-[0.1em] align-top">
                      {row.label}
                    </td>
                    <td className="py-5 px-6 text-[var(--muted)] leading-relaxed align-top">
                      {row.salon}
                    </td>
                    <td className="py-5 px-6 text-[var(--muted)] leading-relaxed align-top">
                      {row.reusable}
                    </td>
                    <td className="py-5 px-6 text-foreground leading-relaxed align-top font-medium bg-[var(--pink)]/10">
                      {row.daily}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* The point */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-5">
              The difference
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.08]">
              Not a two-week manicure. A fresh one every morning.
            </h2>
          </Reveal>
          <Reveal delay={150} className="space-y-4 text-[17px] leading-[1.8] text-foreground/85 md:pt-12">
            <p>
              Salon nails and reusable press-ons are built around the same
              idea: make one application last as long as possible. Protect it.
              Baby it. Hope it holds.
            </p>
            <p>
              The Daily French is built around the opposite idea. One fresh
              daily disposable French manicure every morning. No old glue. No
              reused nails that already touched sticky tabs. No two-week
              story aging on your hands.
            </p>
            <p>
              Wear the day, toss the day, start fresh tomorrow. Clean,
              finished hands — every single morning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Related links */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Learn more
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {[
              { href: "/why-daily", label: "Why two-week nails stopped making sense →" },
              { href: "/30-day-set", label: "Shop the 30-Day Set →" },
              { href: "/faq", label: "Read the FAQ →" },
              { href: "/manifesto", label: "Read the Manifesto →" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
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
                Ready to start fresh tomorrow?
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
