import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { websiteSchema, breadcrumb } from "@/lib/schema";

const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE.name };

export const metadata: Metadata = {
  title: `${SITE.name} — A fresh French manicure every morning`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} — ${SITE.tagline}`, description: SITE.description, images: ["/opengraph-image"] },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[websiteSchema, breadcrumb([{ name: "Home", path: "/" }])]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center">
        <Image
          src="/images/hero-section-home-page.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-6">
            Daily Disposable French Manicure
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.02] text-white">
            The Daily French
          </h1>
          <p className="mt-6 text-xl text-white/85">
            A fresh French manicure every morning.
          </p>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] leading-[1.75] text-white/75">
            The Daily French is a daily disposable French manicure brand for
            women who want clean, finished hands every morning. Each 30-Day Set
            includes fresh press-on French nails designed to be worn for one
            day, removed at night, and replaced the next morning.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <CTA href="/30-day-set" external={false}>
              Shop the 30-Day Set
            </CTA>
            <CTA href="/manifesto" external={false} variant="ghost-light">
              Read the Manifesto
            </CTA>
          </div>
        </div>
      </section>

      {/* Three pillars + image */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-4">
        <div className="grid md:grid-cols-[1fr_auto] md:gap-10 items-stretch">
          {/* Pillars */}
          <div className="border-t border-[var(--line)]">
            {[
              {
                num: "01",
                t: "Wear the day",
                b: "One fresh press-on French set, perfectly applied in minutes for a clean, finished look.",
              },
              {
                num: "02",
                t: "Toss the day",
                b: "Remove at night. No old glue, no reused nails that already touched sticky tabs.",
              },
              {
                num: "03",
                t: "Start fresh tomorrow",
                b: "Tomorrow morning, a new set. A fresh French manicure every morning, for thirty days.",
              },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <div className="grid grid-cols-[4rem_1fr_1fr] gap-10 items-start py-8 border-b border-[var(--line)]">
                  <span className="font-display text-4xl text-[var(--nude)] leading-none">
                    {p.num}
                  </span>
                  <p className="font-display text-2xl">{p.t}</p>
                  <p className="text-[var(--muted)] leading-relaxed text-[15px]">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Image — full height, right side */}
          <Reveal delay={80} className="hidden md:block w-64 lg:w-80 shrink-0">
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="The Daily French"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Explainer */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)] mt-16">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-5">
              The concept
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.08]">
              What is a daily disposable French manicure?
            </h2>
          </Reveal>
          <Reveal delay={150} className="pt-1 md:pt-12">
            <p className="text-[17px] leading-[1.8] text-foreground/85">
              A daily disposable French manicure is a one-day press-on French
              nail set worn for a single day and replaced the next morning.
              Instead of a two-week manicure that chips, lifts, and ages on
              your hands, you get a clean, finished French tip every day —
              softly glossy edge, matte milky base, medium-short almond shape,
              and a slightly shorter thumb for daily life.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <Link
                href="/manifesto"
                className="text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Read the manifesto →
              </Link>
              <Link
                href="/faq"
                className="text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Browse the FAQ →
              </Link>
              <Link
                href="/30-day-set"
                className="text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Explore the 30-Day Set →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal y={20}>
        <div className="relative rounded-3xl bg-[var(--foreground)] overflow-hidden px-10 sm:px-16 py-14 sm:py-20 text-center">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--pink-strong)]/10 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[var(--nude)]/10 pointer-events-none" />
          <div className="relative">
            <p className="uppercase tracking-[0.2em] text-xs text-white/40 mb-6">
              Limited founder batch
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.08]">
              Clean, finished hands.<br className="hidden sm:block" /> Every morning.
            </h2>
            <p className="mt-5 text-white/50 max-w-sm mx-auto text-[15px] leading-relaxed">
              The first limited release of The Daily French 30-Day Set.
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
