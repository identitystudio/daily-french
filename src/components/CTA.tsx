import Link from "next/link";
import { SITE } from "@/lib/site";

type Variant = "primary" | "ghost" | "ghost-light";

export function CTA({
  href = SITE.funnelUrl,
  children = SITE.ctaLabel,
  variant = "primary",
  external,
  className = "",
}: {
  href?: string;
  children?: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center h-12 px-7 rounded-full text-[15px] tracking-wide transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-[#2b2622]"
      : variant === "ghost-light"
      ? "border border-white/50 text-white hover:bg-white/10"
      : "border border-[var(--line)] text-foreground hover:bg-[var(--pink)]";

  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
