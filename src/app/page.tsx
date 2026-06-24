import type { Metadata } from "next";
import Link from "next/link";
import { ProductBento } from "@/components/ProductBento";
import { Reveal } from "@/components/Reveal";
import { JsonLd, organizationJsonLd } from "@/components/JsonLd";
import { copy } from "@/lib/content";

const hub = copy.hub["zh-Hant"];

export const metadata: Metadata = {
  title: hub.title,
  description: hub.description,
  openGraph: {
    title: hub.title,
    description: hub.description,
    url: "https://ange1a.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      <section className="px-4 pb-16 pt-28 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-accent">Ange1a</p>
              <h1 className="font-display mt-6 max-w-3xl text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-6xl lg:text-[4.8rem]">
                為創作者設計安靜而有力的工具。
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                Ange1a 做跨平台 app，幫你把零散靈感收好、整理清楚，最後推進成可以執行的作品。
              </p>
              <Link
                href="#products"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                看產品
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/10 text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="products" className="px-4 py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-5">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-[2.75rem]">
                Products
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                Ange1a 的產品線會保持簡單。每個 app 都只負責一件清楚的事。
              </p>
            </div>
          </Reveal>
          <div className="mt-10">
            <ProductBento locale="zh-Hant" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-12 md:pb-28 md:pt-20">
        <Reveal>
          <div className="mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:px-5">
            <div className="glass-panel rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent/30 md:p-9">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                Sparks
              </p>
              <h2 className="font-display mt-3 text-[1.9rem] font-semibold tracking-tight text-text-primary md:text-[2.35rem]">
                先把念頭收好。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                iPhone 負責捕捉，Mac 負責整理和執行。
              </p>
              <Link
                href="/sparks/"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                了解 Sparks
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/10 text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </Link>
            </div>
            <div className="glass-panel rounded-[2rem] border-accent/20 bg-accent-muted p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent/35 md:p-9">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                MemoryShot
              </p>
              <h2 className="font-display mt-3 text-[1.9rem] font-semibold tracking-tight text-text-primary md:text-[2.35rem]">
                讓每一張照片都值得留下。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                拍照、語音備忘、自動定位，把截圖變成可搜尋的記憶。
              </p>
              <Link
                href="/memoryshot/"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/40 hover:text-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                了解 MemoryShot
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-muted text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </Link>
            </div>
            <div className="glass-panel rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent/30 md:p-9">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                晶靈 Lumina
              </p>
              <h2 className="font-display mt-3 text-[1.9rem] font-semibold tracking-tight text-text-primary md:text-[2.35rem]">
                懂水晶，更懂自己。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                依八字命盤同流日，每日推薦最適合配戴嘅水晶。
              </p>
              <Link
                href="/lumina/"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/40 hover:text-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                了解 Lumina
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-muted text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </Link>
            </div>
            <div className="glass-panel rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent/30 md:p-9">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                Refund Reminder
              </p>
              <h2 className="font-display mt-3 text-[1.9rem] font-semibold tracking-tight text-text-primary md:text-[2.35rem]">
                退貨期限，唔好再錯過。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                追蹤退貨期限、收據截圖同提醒，喺窗口關閉前收到通知。
              </p>
              <Link
                href="/refund-reminder/"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/40 hover:text-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                了解 Refund Reminder
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-muted text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </Link>
            </div>
            <div className="glass-panel rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent/30 md:p-9">
              <p className="text-xs font-medium uppercase tracking-widest text-text-hint">
                NearDrop · 即將上線
              </p>
              <h2 className="font-display mt-3 text-[1.9rem] font-semibold tracking-tight text-text-primary md:text-[2.35rem]">
                附近傳檔，無需網路。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                開啟個人熱點，掃 QR 即連 — Android、Windows、Mac 瀏覽器即可收檔，檔案不經雲端。
              </p>
              <Link
                href="/neardrop/"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/40 hover:text-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                了解 NearDrop
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-muted text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </Link>
            </div>
            <div className="glass-panel rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent/30 md:p-9">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                知行 Praxis
              </p>
              <h2 className="font-display mt-3 text-[1.9rem] font-semibold tracking-tight text-text-primary md:text-[2.35rem]">
                這裡不是讀書，是試方法。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                挑一個七日實驗，每天記錄觀察，自己下結論——沒有打卡壓力，沒有連續紀錄懲罰。
              </p>
              <Link
                href="/praxis/"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/40 hover:text-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                了解 Praxis
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-muted text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </Link>
            </div>
            <div className="glass-panel rounded-[2rem] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:p-9">
              <p className="text-xs font-medium uppercase tracking-widest text-text-hint">
                記一筆 · 即將上線
              </p>
              <h2 className="font-display mt-3 text-[1.9rem] font-semibold tracking-tight text-text-primary md:text-[2.35rem]">
                聚會分帳，一筆記清楚。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                朋友聚會、旅行分帳，最少轉賬筆數一次結清。
              </p>
              <span className="mt-8 inline-flex items-center rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-medium text-text-secondary">
                即將上線
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
