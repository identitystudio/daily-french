import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, articleSchema as buildArticleSchema } from "@/lib/schema";

const TITLE = "The Daily French Manifesto";
const DESCRIPTION =
  "Why we believe in a fresh French manicure every morning. The thinking behind The Daily French — a daily disposable French manicure brand for clean, finished hands.";
const DATE_PUBLISHED = "2026-05-22";
const DATE_MODIFIED = "2026-05-22";
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: TITLE };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/manifesto" },
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
  path: "/manifesto",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
});

export default function ManifestoPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Manifesto", path: "/manifesto" },
          ]),
        ]}
      />

      {/* Header */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-2xl px-6 pt-20 pb-14 text-center">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-6">
              Manifesto
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.02]">
              A fresh French manicure every morning.
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
              alt="The Daily French"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Opening — refusal */}
      <article className="mx-auto max-w-lg px-6 pt-16">
        <Reveal>
          <p className="text-[19px] sm:text-[21px] font-display leading-[1.5] text-foreground mb-8">
            We are not here for two-week nails.
          </p>
          <div className="space-y-1 text-[16px] text-[var(--muted)] leading-[1.9] mb-10">
            <p>Not for old glue.</p>
            <p>Not for chipped confidence.</p>
            <p>Not for trapped germs.</p>
            <p>Not for beauty that asks us to protect it.</p>
          </div>
          <p className="text-[19px] sm:text-[21px] font-display leading-[1.5] text-foreground">
            We are here for a fresh start.
          </p>
        </Reveal>
      </article>

      {/* What it is */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-12">
            <div className="space-y-1 text-[16px] text-[var(--muted)] leading-[1.9] mb-4">
              <p>The Daily French is not a color.</p>
              <p>Not a style.</p>
              <p>Not a drop.</p>
            </div>
            <p className="font-display text-3xl text-foreground">A behavior.</p>
          </div>
        </Reveal>
      </article>

      {/* The woman */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-12 space-y-6 text-[17px] leading-[1.9] text-foreground/85">
            <p>
              It is for the woman who wants to feel clean, polished, and put
              together every single morning.
            </p>
            <div className="space-y-1 text-[16px] text-[var(--muted)]">
              <p>The woman who wakes up and opens the curtains.</p>
              <p>Who pours the coffee.</p>
              <p>Who smooths the sheets.</p>
              <p>Who chooses the simple sweater.</p>
              <p>Who puts fresh flowers in water because ordinary life still deserves beauty.</p>
            </div>
            <div className="space-y-1 text-[16px] text-[var(--muted)]">
              <p>The woman who answers the emails.</p>
              <p>Who types the proposal.</p>
              <p>Who builds the empire.</p>
              <p>Who opens the packages.</p>
              <p>Who makes the meals.</p>
              <p>Who wipes the counters.</p>
              <p>Who resets the house.</p>
              <p>Who holds the coffee cup, the laundry basket, the laptop, the child, the life.</p>
            </div>
            <p>And still wants beautiful hands.</p>
          </div>
        </Reveal>
      </article>

      {/* Because */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-12 space-y-5 text-[17px] leading-[1.9] text-foreground/85">
            <p>
              Because she knows her hands touch everything. And once you start
              thinking differently about hygiene, you don&#39;t go back.
            </p>
            <div className="space-y-1 text-[16px] text-[var(--muted)]">
              <p>She does not want a manicure she has to baby for two weeks.</p>
              <p>She does not want old glue sitting around.</p>
              <p>She does not want reused sticky tabs.</p>
              <p>She does not want yesterday&#39;s nails following her into today.</p>
            </div>
            <p>She wants beauty that can keep up with her life.</p>
            <p className="font-display text-2xl text-foreground">So she starts fresh.</p>
          </div>
        </Reveal>
      </article>

      {/* Fresh sheets — special section */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)] mt-14">
        <div className="mx-auto max-w-lg px-6 py-14 text-center">
          <Reveal>
            <p className="font-display text-4xl sm:text-5xl leading-[1.3] text-foreground">
              Fresh sheets.
              <br />
              Fresh flowers.
              <br />
              Fresh French.
            </p>
            <p className="mt-8 text-[17px] text-[var(--muted)]">
              A fresh, modern French manicure every morning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Soft. Clean. Finished. */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="grid grid-cols-3 gap-4 text-center mb-10">
            {["Soft.", "Clean.", "Finished."].map((word) => (
              <div key={word} className="border border-[var(--line)] rounded-xl py-6">
                <p className="font-display text-xl">{word}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {["Minimal.", "Capsule.", "Luxury."].map((word) => (
              <div key={word} className="border border-[var(--line)] rounded-xl py-6 bg-[var(--surface)]">
                <p className="font-display text-xl">{word}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </article>

      {/* No old glue */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-12 space-y-2 text-[16px] text-[var(--muted)] leading-[1.9]">
            <p>No old glue.</p>
            <p>No two-week commitment.</p>
            <p>No trying to make yesterday&#39;s beauty survive today&#39;s mess.</p>
            <p>No choosing between practical hands and beautiful hands.</p>
          </div>
        </Reveal>
      </article>

      {/* Real life */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-12 space-y-5 text-[17px] leading-[1.9] text-foreground/85">
            <p>
              If one pops off while she&#39;s doing laundry, washing dishes,
              cleaning up breakfast, or taking care of her family, she does not
              stress.
            </p>
            <p className="font-display text-2xl text-foreground">That is the point.</p>
            <p>The manicure is not in charge anymore.</p>
          </div>
        </Reveal>
      </article>

      {/* She wears the day */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-12 space-y-1 text-[16px] text-[var(--muted)] leading-[1.9] mb-8">
            <p>She wears the day.</p>
            <p>She lives the day.</p>
            <p>She tosses the day.</p>
          </div>
          <p className="text-[17px] leading-[1.9] text-foreground/85">
            Tomorrow, she starts fresh.
          </p>
        </Reveal>
      </article>

      {/* Beauty that serves */}
      <article className="mx-auto max-w-lg px-6 pt-14">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-12 space-y-5 text-[17px] leading-[1.9] text-foreground/85">
            <p>
              This is beauty that serves her life. Not the other way around.
            </p>
            <div className="space-y-1 text-[16px] text-[var(--muted)]">
              <p>Not a $20 press-on pack she is supposed to stretch.</p>
              <p>Not a salon appointment she has to protect.</p>
              <p>Not high-maintenance beauty pretending real life doesn&#39;t happen.</p>
            </div>
            <div className="space-y-1 text-[16px] text-[var(--muted)]">
              <p>A capsule manicure.</p>
              <p>A daily ritual.</p>
              <p>A quiet luxury.</p>
              <p>
                A clean standard for women who want to feel like themselves
                again before the day begins.
              </p>
            </div>
            <p>Because clean hands can still be beautiful hands.</p>
          </div>
        </Reveal>
      </article>

      {/* Closing tagline */}
      <section className="mx-auto max-w-lg px-6 py-16">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-14 text-center">
            <p className="font-display text-3xl sm:text-4xl leading-[1.5] text-foreground">
              Wear the day.
              <br />
              Toss the day.
              <br />
              Start fresh tomorrow.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Sign-off + CTA */}
      <section className="mx-auto max-w-lg px-6 pb-20 text-center">
        <Reveal>
          <p className="font-display text-2xl text-foreground mb-2">
            The Daily French
          </p>
          <p className="text-[var(--muted)] text-[15px] mb-14">
            A fresh French manicure every morning.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="border-t border-[var(--line)] pt-12">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-6">
              Limited founder batch
            </p>
            <CTA>{SITE.ctaLabel}</CTA>
          </div>
        </Reveal>
      </section>
    </>
  );
}
