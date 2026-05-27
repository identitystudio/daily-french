import Link from "next/link";
import { CTA } from "./CTA";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/30-day-set", label: "30-Day Set" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/faq", label: "FAQ" },
  { href: "/press", label: "Press" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[color-mix(in_oklab,var(--background)_88%,transparent)] backdrop-blur border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-tight"
          aria-label={`${SITE.name} — home`}
        >
          The Daily French
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden sm:block text-[var(--muted)] hover:text-foreground transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <CTA className="hidden sm:inline-flex h-10 px-5 text-sm">
            {SITE.ctaLabel}
          </CTA>
        </div>
      </div>
    </header>
  );
}
