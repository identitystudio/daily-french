import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, articleSchema as buildArticleSchema } from "@/lib/schema";

const TITLE = "Press — The Daily French";
const DESCRIPTION =
  "Press resources for The Daily French, a daily disposable French manicure brand. Brand description, founder quote, product summary, launch date, pricing, and media contact.";
const DATE_PUBLISHED = "2026-05-22";
const DATE_MODIFIED = "2026-05-22";
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: TITLE };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/press" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    authors: [SITE.name],
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

const articleSchema = buildArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: "/press",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
});

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Press", path: "/press" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 md:gap-16 items-end">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-5">
              Press
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.02]">
              Press Kit
            </h1>
          </Reveal>
          <Reveal delay={150} className="pb-1">
            <p className="text-[17px] leading-[1.8] text-foreground/85">
              {SITE.pressLine}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder quote */}
      <section className="bg-[var(--surface)] border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-8">
              Founder
            </p>
            <blockquote className="font-display text-3xl sm:text-4xl leading-[1.25] max-w-3xl">
              &#8220;Clean, finished hands shouldn&#39;t be a two-week project.
              They should be the way you start the morning.&#8221;
            </blockquote>
            <footer className="mt-7 text-sm text-[var(--muted)] uppercase tracking-[0.15em]">
              — Founder, The Daily French
            </footer>
          </Reveal>
        </div>
      </section>

      {/* Key info grid */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-10">
            Product details
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { label: "Product", value: "The Daily French 30-Day Set" },
            {
              label: "Category",
              value: "Daily Disposable French Press-On Nails",
            },
            { label: "Launch", value: SITE.launchDate },
            { label: "Pricing", value: SITE.pricePlaceholder },
            {
              label: "Availability",
              value: "Founder Batch — First Limited Release",
            },
            { label: "Media contact", value: SITE.mediaContact },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="border border-[var(--line)] rounded-2xl p-6 bg-[var(--surface)]">
                <p className="uppercase tracking-[0.15em] text-[11px] text-[var(--muted)] mb-3">
                  {item.label}
                </p>
                <p className="font-display text-xl leading-snug">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brand description */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-5">
              Brand description
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.08] mb-8">
              A fresh French manicure, every morning.
            </h2>
            <div className="space-y-4 text-[17px] leading-[1.8] text-foreground/85">
              <p>{SITE.description}</p>
              <p>
                Built around a single idea: wear the day, toss the day, start
                fresh tomorrow — no old glue, no reused nails that already
                touched sticky tabs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
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

      {/* Media contact + Assets + Further reading */}
      <section className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-10 md:gap-8 border-b border-[var(--line)]">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Media contact
          </p>
          <p className="text-[15px] leading-relaxed text-foreground/80 mb-4">
            For press inquiries, samples, and interviews:
          </p>
          <a
            href={`mailto:${SITE.mediaContact}`}
            className="font-display text-xl underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
          >
            {SITE.mediaContact}
          </a>
        </Reveal>

        <Reveal delay={80}>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Brand assets
          </p>
          <ul className="space-y-3 text-[15px]">
            <li>
              <a
                href="/press/logo.zip"
                className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Logo pack (.zip)
              </a>
            </li>
            <li>
              <a
                href="/press/product-photos.zip"
                className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Product photography (.zip)
              </a>
            </li>
            <li>
              <a
                href="/press/founder-portraits.zip"
                className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Founder portraits (.zip)
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-[var(--muted)]">
            Assets available upon request.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Further reading
          </p>
          <ul className="space-y-3 text-[15px]">
            <li>
              <Link
                href="/30-day-set"
                className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                30-Day Set product page →
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Full FAQ →
              </Link>
            </li>
            <li>
              <Link
                href="/manifesto"
                className="underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
              >
                Read the manifesto →
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* Bottom CTA */}
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
                Clean, finished hands.
                <br className="hidden sm:block" /> Every morning.
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
