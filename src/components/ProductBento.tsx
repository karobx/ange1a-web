"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/content";

type ProductBentoProps = {
  locale?: Locale;
};

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

  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/sparks/" className="group block h-full rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <div className="glass-panel flex h-full min-h-[300px] flex-col justify-between rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1 group-hover:border-accent/40 group-active:scale-[0.99] md:p-8">
            <div>
              <p className="text-sm font-medium text-accent">
                {isZh ? "現有產品" : "Available product"}
              </p>
              <div className="mt-4 flex items-start gap-5 md:gap-6">
                <div className="min-w-0 flex-1">
                  <h2 className="text-[1.8rem] font-semibold tracking-tight text-text-primary md:text-[2.25rem]">
                    {sparksTitle}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {sparksDesc}
                  </p>
                </div>
                <Image
                  src="/assets/logo.png"
                  alt="Sparks"
                  width={124}
                  height={124}
                  className="h-[105px] w-[105px] shrink-0 rounded-[1.1rem] md:h-[123px] md:w-[123px]"
                />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-glass-border pt-5">
              <span className="text-sm text-text-secondary">macOS + iOS</span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                {isZh ? "了解 Sparks" : "Explore Sparks"}
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">↗</span>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/memoryshot/" className="group block h-full rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <div className="glass-panel flex h-full min-h-[300px] flex-col justify-between rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1 group-hover:border-accent/40 group-active:scale-[0.99] md:p-8">
            <div>
              <p className="text-sm font-medium text-accent">{memoryDesc}</p>
              <div className="mt-4 flex items-start gap-5 md:gap-6">
                <div className="min-w-0 flex-1">
                  <h2 className="text-[1.8rem] font-semibold tracking-tight text-text-primary md:text-[2.25rem]">
                    {memoryTitle}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {memorySub}
                  </p>
                </div>
                <Image
                  src="/assets/memoryshot-logo.png"
                  alt="MemoryShot"
                  width={124}
                  height={124}
                  className="h-[105px] w-[105px] shrink-0 rounded-[1.1rem] md:h-[123px] md:w-[123px]"
                />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-glass-border pt-5">
              <span className="text-sm text-text-secondary">iOS</span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                {isZh ? "了解 MemoryShot" : "Explore MemoryShot"}
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">↗</span>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
