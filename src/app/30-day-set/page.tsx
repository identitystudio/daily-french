import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, howToSchema } from "@/lib/schema";

const PRODUCT_NAME = "The Daily French 30-Day Set";
const PRODUCT_DESC =
  "A 30-day capsule manicure: one fresh French press-on set for every morning. Matte milky base, softly glossy French tip, medium-short softly rounded almond shape, and a slightly shorter thumb for daily life.";

const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: PRODUCT_NAME };

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} — Daily Disposable French Press-On Nails`,
  description: PRODUCT_DESC,
  alternates: { canonical: "/30-day-set" },
  openGraph: {
    title: PRODUCT_NAME,
    description: PRODUCT_DESC,
    url: `${SITE.url}/30-day-set`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: PRODUCT_NAME, description: PRODUCT_DESC, images: ["/opengraph-image"] },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT_NAME,
  category: "Daily Disposable French Press-On Nails",
  description: PRODUCT_DESC,
  brand: { "@type": "Brand", name: SITE.name },
  image: [`${SITE.url}/opengraph-image`],
  url: `${SITE.url}/30-day-set`,
  offers: {
    "@type": "Offer",
    url: SITE.funnelUrl,
    availability: "https://schema.org/PreOrder",
    priceCurrency: "USD",
    price: "0.00",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "0.00",
    },
  },
};

export default function ThirtyDaySetPage() {
  return (
    <>
      <JsonLd
        data={[
          productSchema,
          howToSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "30-Day Set", path: "/30-day-set" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[580px] sm:min-h-[680px] flex items-end">
        <Image
          src="/images/daily-french-hero-section.jpg"
          alt="The Daily French 30-Day Set"
          fill
          priority
          className="object-cover object-center"
        />
        {/* left-to-right gradient keeps text readable without darkening the whole image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative z-10 w-full px-6 sm:px-10 pb-14 pt-32">
          <div className="max-w-md">
            <Reveal>
              <p className="uppercase tracking-[0.25em] text-xs text-white/55 mb-5">
                Daily Disposable French Press-On Nails
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-5xl sm:text-6xl leading-[1.02] text-white">
                The Daily French
                <br />
                30-Day Set
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-[16px] leading-[1.8] text-white/70 max-w-sm">
                {PRODUCT_DESC}
              </p>
              <div className="mt-8">
                <CTA>{SITE.ctaLabel}</CTA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's in the set */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-10">
            What comes in the set
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              n: "01",
              t: "30 individually sealed daily sets",
              b: "One fresh, unworn set for every morning of the month.",
            },
            {
              n: "02",
              t: "Adhesive tabs + prep kit",
              b: "Everything needed for a clean, lasting application each morning.",
            },
            {
              n: "03",
              t: "Daily French nails",
              b: "Matte milky base, softly glossy French tip, medium-short almond shape.",
            },
            {
              n: "04",
              t: "Editorial keepsake box",
              b: "Designed for the vanity — a box built to display.",
            },
          ].map((item, i) => (
            <Reveal key={item.n} delay={i * 80}>
              <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-7 h-full">
                <span className="font-display text-3xl text-[var(--nude)] block mb-5 leading-none">
                  {item.n}
                </span>
                <p className="font-display text-xl mb-3">{item.t}</p>
                <p className="text-[var(--muted)] text-[15px] leading-relaxed">
                  {item.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-10">
              How it works
            </p>
          </Reveal>
          <div className="border-t border-[var(--line)]">
            {[
              {
                n: "01",
                t: "Open a fresh set",
                b: "Every morning, open a new individually sealed daily French manicure.",
              },
              {
                n: "02",
                t: "Apply in minutes",
                b: "Prep, tab, press. A full set takes only minutes. Clean, finished hands.",
              },
              {
                n: "03",
                t: "Wear it all day",
                b: "The adhesive holds from morning meetings through evening plans.",
              },
              {
                n: "04",
                t: "Remove at night",
                b: "Soak in warm soapy water, lift from the side. No acetone, no damage.",
              },
              {
                n: "05",
                t: "Start fresh tomorrow",
                b: "Reach for a new set the next morning. No old glue. No reused nails.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="flex flex-col sm:grid sm:grid-cols-[4rem_1fr_1.5fr] sm:gap-10 items-start py-7 border-b border-[var(--line)]">
                  <span className="font-display text-3xl text-[var(--nude)] mb-2 sm:mb-0 leading-none">
                    {step.n}
                  </span>
                  <p className="font-display text-xl mb-1 sm:mb-0">{step.t}</p>
                  <p className="text-[var(--muted)] text-[15px] leading-relaxed">
                    {step.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="The Daily French"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
              Who it&#39;s for
            </p>
            <p className="font-display text-3xl sm:text-4xl leading-[1.2]">
              Women who want clean, finished hands every morning — without the
              upkeep of a two-week manicure.
            </p>
            <p className="mt-8 text-[16px] leading-relaxed text-[var(--muted)]">
              Founders, mothers, brides, hostesses, travelers, professionals —
              anyone who gets dressed for the day and wants her hands to match.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Apply + Remove */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-7">
              How to apply
            </p>
            <ol className="space-y-5">
              {[
                "Wash hands and gently push back cuticles.",
                "Buff lightly and wipe the nail plate clean.",
                "Place the adhesive tab on the natural nail.",
                "Press the daily French nail down firmly for 10 seconds, starting at the cuticle.",
                "Repeat for each finger. Done in minutes.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-display text-lg text-[var(--nude)] w-5 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[16px] leading-relaxed text-foreground/85">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={130}>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-7">
              How to remove
            </p>
            <p className="text-[17px] leading-[1.8] text-foreground/85">
              At night, soak fingertips in warm soapy water for a minute, then
              gently lift each press-on from the side. Discard the used set.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-foreground/85">
              No scraping, no acetone soak, and no damage to the natural nail.
            </p>
            <p className="mt-8 font-display text-2xl">
              Then start fresh tomorrow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why daily disposable */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
            Why daily disposable
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal delay={60}>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.08]">
              A two-week manicure ages with you.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-[17px] leading-[1.8] text-foreground/85">
              It chips, lifts, grows out, looks tired by day six. The Daily
              French is the opposite: a fresh French manicure every morning.
              Clean, finished hands on day one and on day thirty.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-foreground/85">
              No old glue. No reused nails that already touched sticky tabs.
              Just a new daily disposable French manicure, every morning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal y={20}>
          <div className="relative rounded-3xl bg-[var(--foreground)] overflow-hidden px-10 sm:px-16 py-14 sm:py-20 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--pink-strong)]/10 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[var(--nude)]/10 pointer-events-none" />
            <div className="relative">
              <p className="uppercase tracking-[0.2em] text-xs text-white/40 mb-6">
                Limited founder batch
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.08]">
                Ready for a fresh French
                <br className="hidden sm:block" /> every morning?
              </h2>
              <p className="mt-5 text-white/50 max-w-sm mx-auto text-[15px] leading-relaxed">
                The Founder Batch is the first limited release of The Daily
                French 30-Day Set.
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
