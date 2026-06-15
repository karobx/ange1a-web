"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, type Locale } from "@/lib/content";

function detectLocale(pathname: string): Locale {
  if (pathname.includes("/en")) return "en";
  return "zh-Hant";
}

function localizedPath(pathname: string, locale: Locale) {
  if (pathname.startsWith("/angela")) {
    return `/angela/${locale}/`;
  }
  if (pathname.startsWith("/memoryshot")) {
    return `/memoryshot/${locale}/`;
  }
  return `/sparks/${locale}/`;
}

function productItems(locale: Locale) {
  const isZh = locale === "zh-Hant";

  return [
    {
      href: "/sparks/",
      title: isZh ? "念頭 / Sparks" : "Sparks / 念頭",
      desc: isZh
        ? "跨平台想法孵化 app。iPhone 捕捉，Mac 整理執行。"
        : "Capture on iPhone. Incubate, plan, and execute on Mac.",
      platform: "macOS + iOS",
      logo: "/assets/logo.png",
      logoAlt: "Sparks",
      accent: false,
    },
    {
      href: "/memoryshot/",
      title: "MemoryShot",
      desc: isZh
        ? "拍照、語音備忘同自動定位，把截圖變成可搜尋的記憶。"
        : "Photo, voice memo, and auto location turn screenshots into searchable memories.",
      platform: "iOS",
      logo: "/assets/memoryshot-logo.png",
      logoAlt: "MemoryShot",
      accent: true,
    },
    {
      href: null,
      title: isZh ? "記一筆" : "記一筆 / Jiyi",
      desc: isZh
        ? "朋友聚會、旅行分帳，最少轉賬筆數一次結清。"
        : "Split group bills with the fewest transfers to settle everyone up.",
      platform: isZh ? "iOS · 即將上線" : "iOS · Coming soon",
      logo: "/assets/jiyi-logo.png",
      logoAlt: "記一筆",
      accent: false,
      comingSoon: true,
    },
  ] as const;
}

export function SiteNav() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const nav = copy.nav[locale];
  const products = productItems(locale);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:pt-5">
      <nav
        className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-glass-border bg-background/80 px-4 shadow-[0_18px_50px_var(--shadow-tint)] backdrop-blur-2xl md:px-5"
        aria-label="Main"
      >
        <Link
          href="/"
          className="inline-flex items-center transition-opacity hover:opacity-80"
          aria-label="Ange1a"
        >
          <Image
            src="/assets/ange1a-logo.png"
            alt="Ange1a"
            width={300}
            height={89}
            className="h-7 w-auto rounded-md"
            priority
          />
        </Link>
        <div className="flex items-center gap-3 text-sm text-text-secondary sm:gap-5">
          <div className="relative group/products">
            <Link
              href="/#products"
              className="inline-flex items-center gap-1 transition-colors hover:text-text-primary sm:hidden"
            >
              {nav.products}
            </Link>
            <span
              className="hidden cursor-default items-center gap-1 transition-colors group-hover/products:text-text-primary sm:inline-flex"
              aria-hidden
            >
              {nav.products}
              <span className="text-[10px] opacity-60">▾</span>
            </span>
            <div className="pointer-events-none absolute left-1/2 top-full z-50 hidden w-[min(calc(100vw-2rem),22rem)] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover/products:pointer-events-auto group-hover/products:opacity-100 sm:block">
              <div className="overflow-hidden rounded-2xl border border-glass-border bg-background/95 p-2 shadow-[0_18px_50px_var(--shadow-deep)] backdrop-blur-2xl">
                {products.map((item) => {
                  const inner = (
                    <>
                      <Image
                        src={item.logo}
                        alt={item.logoAlt}
                        width={48}
                        height={48}
                        className="h-12 w-12 shrink-0 rounded-[0.85rem]"
                      />
                      <div className="min-w-0">
                        <p className="font-medium text-text-primary transition-colors group-hover/item:text-text-primary group-hover/item:text-accent">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                          {item.desc}
                        </p>
                        <p className="mt-2 text-[11px] text-text-hint">
                          {item.platform}
                        </p>
                      </div>
                    </>
                  );

                  if ("comingSoon" in item && item.comingSoon) {
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-xl p-3 opacity-80"
                      >
                        {inner}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href!}
                      className={`group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent-muted ${
                        item.accent ? "hover:bg-accent/10" : ""
                      }`}
                    >
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="inline-flex rounded-full border border-glass-border bg-surface p-1 text-[11px] font-medium"
            aria-label="Language"
          >
            {(["zh-Hant", "en"] as const).map((option) => {
              const isActive = locale === option;
              return (
                <Link
                  key={option}
                  href={localizedPath(pathname, option)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    isActive
                      ? "bg-text-primary text-background"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {option === "zh-Hant" ? "中文" : "EN"}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
