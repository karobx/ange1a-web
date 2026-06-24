"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, Chip } from "@heroui/react";
import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/content";

type ProductBentoProps = {
  locale?: Locale;
};

type ProductItem = {
  id: string;
  href?: string;
  eyebrow: string;
  eyebrowTone: "accent" | "muted";
  title: string;
  subtitle?: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  platform: string;
  ctaLabel?: string;
  comingSoon?: boolean;
};

function ProductCardFace({ item, isZh }: { item: ProductItem; isZh: boolean }) {
  return (
    <Card
      variant="transparent"
      className={`product-card ${item.comingSoon ? "product-card--static" : "product-card--interactive"} !gap-0 !shadow-none`}
    >
      <Card.Header className="product-card-header !gap-0 !p-0">
        <Chip
          variant="soft"
          color={item.eyebrowTone === "accent" ? "accent" : "default"}
          size="sm"
          className={
            item.eyebrowTone === "muted"
              ? "inline-flex !rounded-full !border !border-glass-border !bg-[rgba(51,43,33,0.04)] !px-2.5 !py-0.5 !text-xs !font-medium !text-text-hint"
              : "inline-flex !rounded-full !bg-accent-muted !px-2.5 !py-0.5 !text-xs !font-medium !text-accent"
          }
        >
          {item.eyebrow}
        </Chip>
        <div className="product-card-logo-wrap" aria-hidden={false}>
          <Image
            src={item.logoSrc}
            alt={item.logoAlt}
            width={64}
            height={64}
            className="product-card-logo h-12 w-12 md:h-14 md:w-14"
          />
        </div>
      </Card.Header>

      <Card.Content className="product-card-body !mt-5 !gap-0 !p-0">
        <h2 className="text-balance text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-text-primary md:text-[1.85rem] lg:text-[1.7rem] xl:text-[2rem]">
          {item.title}
        </h2>
        {item.subtitle ? (
          <p className="mt-1.5 text-sm font-medium text-accent">{item.subtitle}</p>
        ) : null}
        <Card.Description className="!mt-3 !p-0 !text-base !leading-relaxed !text-text-secondary">
          {item.description}
        </Card.Description>
      </Card.Content>

      <Card.Footer className="product-card-footer !mt-auto !justify-between !gap-4 !border-t !border-glass-border !p-0 !pt-5">
        <Chip
          variant="tertiary"
          size="sm"
          className="inline-flex !bg-transparent !px-0 !text-sm !font-normal !text-text-secondary"
        >
          {item.platform}
        </Chip>
        {item.comingSoon ? (
          <Chip
            variant="soft"
            color="default"
            size="sm"
            className="inline-flex !rounded-full !border !border-glass-border !bg-surface !px-3 !py-1 !text-xs !font-medium !text-text-secondary"
          >
            {isZh ? "即將上線" : "Coming soon"}
          </Chip>
        ) : (
          <span className="product-card-cta pointer-events-none">
            {item.ctaLabel}
            <span className="product-cta-arrow" aria-hidden>
              ↗
            </span>
          </span>
        )}
      </Card.Footer>
    </Card>
  );
}

function ProductCardShell({
  item,
  isZh,
  children,
}: {
  item: ProductItem;
  isZh: boolean;
  children: React.ReactNode;
}) {
  if (item.href) {
    return (
      <Link
        href={item.href}
        className="group block h-full rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`${item.title} — ${item.description}`}
      >
        {children}
      </Link>
    );
  }

  return <div className="h-full">{children}</div>;
}

export function ProductBento({ locale = "zh-Hant" }: ProductBentoProps) {
  const reduce = useReducedMotion();
  const isZh = locale === "zh-Hant";

  const products: ProductItem[] = [
    {
      id: "sparks",
      href: "/sparks/",
      eyebrow: isZh ? "現有產品" : "Available product",
      eyebrowTone: "accent",
      title: isZh ? "念頭 / Sparks" : "Sparks / 念頭",
      description: isZh
        ? "跨平台想法孵化 app。iPhone 負責捕捉，Mac 負責整理、計劃和執行。"
        : "Capture on iPhone. Incubate, plan, and execute on Mac.",
      logoSrc: "/assets/logo.png",
      logoAlt: "Sparks",
      platform: "macOS + iOS",
      ctaLabel: isZh ? "了解 Sparks" : "Explore Sparks",
    },
    {
      id: "memoryshot",
      href: "/memoryshot/",
      eyebrow: isZh ? "iOS 記憶 app" : "iOS memory app",
      eyebrowTone: "accent",
      title: "MemoryShot",
      description: isZh
        ? "拍照、語音備忘同自動定位，把截圖變成可搜尋的記憶。"
        : "Photo, voice memo, and auto location turn screenshots into searchable memories.",
      logoSrc: "/assets/memoryshot-logo.png",
      logoAlt: "MemoryShot",
      platform: "iOS",
      ctaLabel: isZh ? "了解 MemoryShot" : "Explore MemoryShot",
    },
    {
      id: "lumina",
      href: "/lumina/",
      eyebrow: isZh ? "iOS 水晶 app" : "iOS crystal app",
      eyebrowTone: "accent",
      title: isZh ? "晶靈 / Lumina" : "Lumina / 晶靈",
      description: isZh
        ? "依八字命盤同流日，每日推薦最適合配戴嘅水晶。"
        : "Daily crystal guidance from your Bazi chart and today's elemental flow.",
      logoSrc: "/assets/lumina-logo.png",
      logoAlt: isZh ? "晶靈 Lumina" : "Lumina",
      platform: "iOS",
      ctaLabel: isZh ? "了解 Lumina" : "Explore Lumina",
    },
    {
      id: "refund-reminder",
      href: "/refund-reminder/",
      eyebrow: isZh ? "iOS 退貨提醒" : "iOS return tracker",
      eyebrowTone: "accent",
      title: "Refund Reminder",
      description: isZh
        ? "追蹤退貨期限、收據截圖同提醒，喺窗口關閉前收到通知。"
        : "Track return windows, receipt photos, and reminders before deadlines close.",
      logoSrc: "/assets/refund-reminder-logo.png",
      logoAlt: "Refund Reminder",
      platform: "iOS",
      ctaLabel: isZh ? "了解 Refund Reminder" : "Explore Refund Reminder",
    },
    {
      id: "neardrop",
      href: "/neardrop/",
      eyebrow: isZh ? "即將上線" : "Coming soon",
      eyebrowTone: "muted",
      title: "NearDrop",
      subtitle: isZh ? "iOS 離線傳檔" : "Offline iOS file transfer",
      description: isZh
        ? "開啟個人熱點，掃 QR 即連 — Android、Windows、Mac 瀏覽器即可收檔，檔案不經雲端。"
        : "Personal Hotspot + QR code. Browser upload on Android, Windows, and Mac — no cloud.",
      logoSrc: "/assets/neardrop-logo.png",
      logoAlt: "NearDrop",
      platform: "iOS",
      ctaLabel: isZh ? "了解 NearDrop" : "Explore NearDrop",
      comingSoon: true,
    },
    {
      id: "praxis",
      href: "/praxis/",
      eyebrow: isZh ? "iOS 方法實驗室" : "iOS method lab",
      eyebrowTone: "accent",
      title: isZh ? "知行 Praxis" : "Praxis",
      subtitle: isZh ? "七日驗證書中方法" : "Test book methods in 7 days",
      description: isZh
        ? "不讀完一本書，也能驗證它。挑七日實驗，誠實記錄，自己下結論。"
        : "Pick a 7-day experiment, log honestly, and decide for yourself—no streaks, no guilt.",
      logoSrc: "/assets/praxis-logo.png",
      logoAlt: isZh ? "知行 Praxis" : "Praxis",
      platform: "iOS",
      ctaLabel: isZh ? "了解 Praxis" : "Explore Praxis",
    },
    {
      id: "jiyi",
      eyebrow: isZh ? "即將上線" : "Coming soon",
      eyebrowTone: "muted",
      title: isZh ? "記一筆" : "記一筆 / Jiyi",
      subtitle: isZh ? "iOS 分帳 app" : "iOS expense-splitting app",
      description: isZh
        ? "朋友聚會、旅行分帳，最少轉賬筆數一次結清。"
        : "Split group bills with the fewest transfers to settle everyone up.",
      logoSrc: "/assets/jiyi-logo.png",
      logoAlt: "記一筆",
      platform: "iOS",
      comingSoon: true,
    },
  ];

  return (
    <div className="product-bento grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
      {products.map((item, index) => (
        <motion.div
          key={item.id}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.06 + index * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ProductCardShell item={item} isZh={isZh}>
            <ProductCardFace item={item} isZh={isZh} />
          </ProductCardShell>
        </motion.div>
      ))}
    </div>
  );
}
