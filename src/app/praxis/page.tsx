import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd, praxisApplicationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "知行 Praxis",
  description:
    "知行 Praxis 不是讀書 App，是方法實驗室。挑一個七日實驗，每天記錄觀察，自己下結論——完全本地運作，無需帳號。",
  alternates: {
    canonical: "https://ange1a.com/praxis/",
  },
  openGraph: {
    title: "知行 Praxis",
    description:
      "不讀完一本書，也能驗證它。七日實驗、誠實記錄、自己下結論。",
    url: "https://ange1a.com/praxis/",
    images: [
      {
        url: "/assets/praxis-logo.png",
        width: 1024,
        height: 1024,
        alt: "知行 Praxis app icon",
      },
    ],
  },
};

export default function PraxisPage() {
  return (
    <>
      <JsonLd data={praxisApplicationJsonLd("zh-Hant")} />
      <article className="mx-auto max-w-5xl px-4 pb-24 pt-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/praxis-logo.png"
              alt="知行 Praxis"
              width={72}
              height={72}
              className="h-[4.5rem] w-[4.5rem] rounded-[1.1rem] shadow-[0_12px_40px_var(--shadow-tint)]"
            />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Caroline Lee
              </p>
              <h1 className="font-display mt-1 text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
                知行 Praxis
              </h1>
            </div>
          </div>
          <p className="mt-5 text-lg font-medium text-text-primary">
            不讀完一本書，也能驗證它。
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            知行 Praxis 不是讀書 App，是方法實驗室。你不需要讀完一整本書——挑一個你好奇的方法，用七天看它在你身上行不行得通。每天回來記錄一次就好。這裡在測試方法，不是你的意志力。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/praxis/marketing/"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-text-primary"
            >
              行銷資訊
            </Link>
            <Link
              href="/praxis/support/"
              className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
            >
              支援
            </Link>
            <Link
              href="/praxis/privacy/"
              className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
            >
              隱私權政策
            </Link>
          </div>
        </div>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              七日實驗
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              從九個主題分類挑一本書，選一個方法，七天驗證假設。首批 15 本書、16 個可立即開始的實驗。
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              四種類型
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Build 行為養成、Drill 思考練習、Hunt 捕捉偏誤、Lens 視角覺察——每種方法都有清楚的假設與每日一步。
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              完全本地
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              不需要帳號，不連網，不收集個人資料。沒有連續打卡，沒有獎勵徽章——結論留給你。
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
