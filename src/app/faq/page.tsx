import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumb, speakableSchema } from "@/lib/schema";

const TITLE = "FAQ — The Daily French";
const DESCRIPTION =
  "Common questions about The Daily French, a daily disposable French manicure brand. How the 30-Day Set works, who it is for, and how to apply and remove your fresh French manicure every morning.";
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: TITLE };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "What is The Daily French?",
    a: "The Daily French is a daily disposable French manicure brand for women who want clean, finished hands every morning. The 30-Day Set includes thirty individually sealed press-on French manicures — one fresh French manicure every morning, designed to be worn for one day and replaced the next.",
  },
  {
    q: "What is a daily disposable French manicure?",
    a: "A daily disposable French manicure is a one-day press-on French nail set worn for a single day and then discarded. Instead of a two-week manicure that chips and lifts, you wear the day, toss the day, and start fresh tomorrow — no old glue, no reused nails that already touched sticky tabs.",
  },
  {
    q: "How does the 30-Day Set work?",
    a: "Each 30-Day Set contains thirty individually sealed daily French manicures. Every morning you open a new set, apply it in minutes, wear it for the day, remove it at night, and reach for a fresh set the next morning. The result is clean, finished hands, every morning, for thirty days.",
  },
  {
    q: "Are The Daily French nails reusable?",
    a: "No. The Daily French is intentionally daily disposable. Reusing press-ons means working with old glue and nails that already touched sticky tabs. Our promise is a fresh French manicure every morning — one set, one day, then replaced.",
  },
  {
    q: "Why daily disposable instead of two-week nails?",
    a: "A two-week manicure ages with you. It chips, lifts, grows out, and looks tired by day six. The Daily French is the opposite: a fresh French manicure every morning. Clean, finished hands on day one and on day thirty — no old glue, no reused nails.",
  },
  {
    q: "Who is The Daily French for?",
    a: "The Daily French is for women who want clean, finished hands every morning without the upkeep of a two-week manicure. Founders, mothers, brides, hostesses, travelers, professionals — anyone who gets dressed for the day and wants her hands to match.",
  },
  {
    q: "What shape are the nails?",
    a: "Medium-short, softly rounded almond, with a slightly shorter thumb for daily life. Quiet, finished, and easy to live in.",
  },
  {
    q: "What color are the nails?",
    a: "A matte milky base with a softly glossy French tip — a clean, modern take on the classic French manicure.",
  },
  {
    q: "How do I apply The Daily French?",
    a: "Wash your hands, gently push back cuticles, lightly buff and wipe the nail plate, place an adhesive tab, then press your daily French nail down firmly for about ten seconds, starting at the cuticle. Most mornings, the full set takes only a few minutes.",
  },
  {
    q: "How do I remove them at night?",
    a: "Soak your fingertips in warm soapy water for a minute, then gently lift each press-on from the side. Discard the used set. No scraping, no acetone soak, and no damage to the natural nail. Then start fresh tomorrow.",
  },
  {
    q: "Is this a subscription?",
    a: "The first release of The Daily French is the Founder Batch — a one-time 30-Day Set. Ongoing 30-Day Sets will be available for women who want clean, finished hands every morning, all year round.",
  },
  {
    q: "What makes The Daily French different from regular press-on nails?",
    a: "Regular press-on nails are designed to be worn for one to two weeks and reused. The Daily French is built around the opposite idea: one set per day. A fresh French manicure every morning. No old glue, no reused nails that already touched sticky tabs — just clean, finished hands, every single day.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema,
          speakableSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-5">
              Questions
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.02]">
              The Daily French,
              <br />
              answered.
            </h1>
            <p className="mt-8 text-[17px] leading-[1.8] text-foreground/85">
              Everything you might want to know about a daily disposable French
              manicure and the 30-Day Set.
            </p>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-5xl text-[var(--nude)]">
                {FAQ.length}
              </span>
              <span className="uppercase tracking-[0.2em] text-xs text-[var(--muted)]">
                questions answered
              </span>
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

      {/* FAQ accordion */}
      <Reveal className="mx-auto max-w-3xl px-6 py-14">
        <dl className="border-b border-[var(--line)]">
          {FAQ.map((f) => (
            <details key={f.q} className="group border-t border-[var(--line)]">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-6 py-6 pr-1">
                <dt className="font-display text-xl leading-snug">{f.q}</dt>
                <span
                  aria-hidden
                  className="mt-1.5 text-[var(--muted)] text-2xl leading-none transition-transform duration-300 group-open:rotate-45 shrink-0 select-none"
                >
                  +
                </span>
              </summary>
              <dd className="pb-7 -mt-1 text-[var(--muted)] leading-[1.85] text-[16px] max-w-2xl">
                {f.a}
              </dd>
            </details>
          ))}
        </dl>
      </Reveal>

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
                Ready to start fresh tomorrow?
              </h2>
              <p className="mt-5 text-white/50 max-w-sm mx-auto text-[15px] leading-relaxed">
                Shop the Founder Batch — the first limited release of The Daily
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
