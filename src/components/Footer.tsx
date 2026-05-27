import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <p className="font-display text-xl">The Daily French</p>
          <p className="mt-3 text-[var(--muted)] max-w-sm">
            {SITE.tagline}
          </p>
        </div>
        <div>
          <p className="font-medium mb-3">Explore</p>
          <ul className="space-y-2 text-[var(--muted)]">
            <li><Link href="/30-day-set" className="hover:text-foreground">30-Day Set</Link></li>
            <li><Link href="/manifesto" className="hover:text-foreground">Manifesto</Link></li>
            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link href="/compare" className="hover:text-foreground">Compare</Link></li>
            <li><Link href="/why-daily" className="hover:text-foreground">Why Daily</Link></li>
            <li><Link href="/ritual" className="hover:text-foreground">The Ritual</Link></li>
            <li><Link href="/shape" className="hover:text-foreground">The Shape</Link></li>
            <li><Link href="/press" className="hover:text-foreground">Press</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Shop</p>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>
              <a
                href={SITE.funnelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {SITE.ctaLabel}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.mediaContact}`}
                className="hover:text-foreground"
              >
                Press inquiries
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-[var(--muted)] flex flex-col sm:flex-row gap-3 justify-between items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--muted)] hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <p>{SITE.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
