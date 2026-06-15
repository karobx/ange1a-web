"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/content";

type ProductBentoProps = {
  locale?: Locale;
};

type ProductCardHeaderProps = {
  eyebrow: string;
  eyebrowMuted?: boolean;
  title: string;
  subtitle?: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
};

function ProductCardHeader({
  eyebrow,
  eyebrowMuted = false,
  title,
  subtitle,
  description,
  logoSrc,
  logoAlt,
}: ProductCardHeaderProps) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <p
          className={`text-sm font-medium ${
            eyebrowMuted ? "text-text-hint" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={72}
          height={72}
          className="h-14 w-14 shrink-0 rounded-[0.95rem] md:h-16 md:w-16"
        />
      </div>
      <h2 className="mt-4 text-balance text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-text-primary md:text-[1.85rem] lg:text-[1.7rem] xl:text-[2rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-1.5 text-sm font-medium text-accent">{subtitle}</p>
      ) : null}
      <p className="mt-3 text-base leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
}

function ProductCardFooter({
  platform,
  action,
}: {
  platform: string;
  action: React.ReactNode;
}) {
  return (
    <div className="mt-10 flex items-center justify-between gap-4 border-t border-glass-border pt-5">
      <span className="text-sm text-text-secondary">{platform}</span>
      {action}
    </div>
  );
}

const cardShell =
  "glass-panel flex h-full min-h-[300px] flex-col justify-between rounded-[2rem] p-7 md:p-8";

export function ProductBento({ locale = "zh-Hant" }: ProductBentoProps) {
  const reduce = useReducedMotion();
  const isZh = locale === "zh-Hant";

  const sparksTitle = isZh ? "念頭 / Sparks" : "Sparks / 念頭";
  const sparksDesc = isZh
    ? "跨平台想法孵化 app。iPhone 負責捕捉，Mac 負責整理、計劃和執行。"
    : "Capture on iPhone. Incubate, plan, and execute on Mac.";

  const memoryTitle = "MemoryShot";
  const memoryDesc = isZh ? "iOS 記憶 app" : "iOS memory app";
  const memorySub = isZh
    ? "拍照、語音備忘同自動定位，把截圖變成可搜尋的記憶。"
    : "Photo, voice memo, and auto location turn screenshots into searchable memories.";

  const jiyiTitle = isZh ? "記一筆" : "記一筆 / Jiyi";
  const jiyiDesc = isZh ? "iOS 分帳 app" : "iOS expense-splitting app";
  const jiyiSub = isZh
    ? "朋友聚會、旅行分帳，最少轉賬筆數一次結清。"
    : "Split group bills with the fewest transfers to settle everyone up.";

  const exploreLinkClass =
    "inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors group-hover:text-accent";

  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/sparks/"
          className="group block h-full rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div
            className={`${cardShell} transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1 group-hover:border-accent/40 group-active:scale-[0.99]`}
          >
            <ProductCardHeader
              eyebrow={isZh ? "現有產品" : "Available product"}
              title={sparksTitle}
              description={sparksDesc}
              logoSrc="/assets/logo.png"
              logoAlt="Sparks"
            />
            <ProductCardFooter
              platform="macOS + iOS"
              action={
                <span className={exploreLinkClass}>
                  {isZh ? "了解 Sparks" : "Explore Sparks"}
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    ↗
                  </span>
                </span>
              }
            />
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/memoryshot/"
          className="group block h-full rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div
            className={`${cardShell} transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1 group-hover:border-accent/40 group-active:scale-[0.99]`}
          >
            <ProductCardHeader
              eyebrow={memoryDesc}
              title={memoryTitle}
              description={memorySub}
              logoSrc="/assets/memoryshot-logo.png"
              logoAlt="MemoryShot"
            />
            <ProductCardFooter
              platform="iOS"
              action={
                <span className={exploreLinkClass}>
                  {isZh ? "了解 MemoryShot" : "Explore MemoryShot"}
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    ↗
                  </span>
                </span>
              }
            />
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={cardShell}>
          <ProductCardHeader
            eyebrow={isZh ? "即將上線" : "Coming soon"}
            eyebrowMuted
            title={jiyiTitle}
            subtitle={jiyiDesc}
            description={jiyiSub}
            logoSrc="/assets/jiyi-logo.png"
            logoAlt="記一筆"
          />
          <ProductCardFooter
            platform="iOS"
            action={
              <span className="inline-flex items-center rounded-full border border-glass-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
                {isZh ? "即將上線" : "Coming soon"}
              </span>
            }
          />
        </div>
      </motion.div>
    </div>
  );
}
