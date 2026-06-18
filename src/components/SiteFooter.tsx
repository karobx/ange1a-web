"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, type Locale } from "@/lib/content";

function detectLocale(pathname: string): Locale {
  if (pathname.includes("/en")) return "en";
  return "zh-Hant";
}

export function SiteFooter() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const nav = copy.nav[locale];
  const footer = copy.footer[locale];

  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[2rem] border border-glass-border bg-surface px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-sm text-text-secondary">{footer.rights}</p>
        <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
          <Link href="/angela/" className="hover:text-text-primary">
            Angela
          </Link>
          <Link href="/sparks/" className="hover:text-text-primary">
            {nav.sparks}
          </Link>
          <Link href="/memoryshot/" className="hover:text-text-primary">
            {nav.memoryshot}
          </Link>
          <Link href="/lumina/" className="hover:text-text-primary">
            {nav.lumina}
          </Link>
          <Link href="/refund-reminder/" className="hover:text-text-primary">
            {nav.refundReminder}
          </Link>
          <span className="text-text-hint">{nav.jiyi} · {locale === "zh-Hant" ? "即將上線" : "Coming soon"}</span>
        </div>
      </div>
    </footer>
  );
}
