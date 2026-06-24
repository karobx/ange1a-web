import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd, praxisApplicationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "知行 Praxis Marketing",
  description:
    "Marketing information for Praxis (知行) — an iOS method lab for testing book ideas in 7-day experiments.",
  alternates: {
    canonical: "https://ange1a.com/praxis/marketing/",
  },
  openGraph: {
    title: "知行 Praxis",
    description:
      "不讀完一本書，也能驗證它。七日實驗、誠實記錄、自己下結論。",
    url: "https://ange1a.com/praxis/marketing/",
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

const highlights = [
  "15 本精選書目、16 個七日實驗，涵蓋九個主題分類",
  "四種實驗類型：Build、Drill、Hunt、Lens",
  "七日記錄、結案反思與個人裁決",
  "跨實驗自我形狀洞察（完成多個實驗後浮現）",
  "完全本地運作，無需帳號、無需網路",
];

const audience = [
  "書櫃很多、但真正用起來很少的人",
  "試過習慣 App，卻被連續打卡壓垮的人",
  "想快速驗證一個方法，而不是再買一本不會讀完的書的人",
  "喜歡用實驗思維了解自己，而不是被貼標籤的人",
];

export default function PraxisMarketingPage() {
  return (
    <>
      <JsonLd data={praxisApplicationJsonLd("zh-Hant")} />
      <article className="mx-auto max-w-4xl px-4 pb-20 pt-28">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/praxis-logo.png"
            alt="知行 Praxis"
            width={56}
            height={56}
            className="h-14 w-14 rounded-2xl shadow-[0_12px_40px_var(--shadow-tint)]"
          />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Caroline Lee
            </p>
            <h1 className="font-display mt-1 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              行銷資訊 / Marketing
            </h1>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
          此 URL 會顯示於 App Store。書裡的方法，值得在你身上試一次。挑一個七日實驗，每天記錄觀察，第七天自己下結論——沒有打卡壓力，沒有連續紀錄懲罰。
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            知行 Praxis
          </h2>
          <p className="mt-2 text-lg font-medium text-accent">
            不讀完一本書，也能驗證它。
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            知行 Praxis 不是讀書 App，是方法實驗室。你不需要讀完一整本書。挑一個你好奇的方法，用七天看它在你身上行不行得通。每天回來記錄一次就好——斷了一天不是失敗，是有用的數據。這裡在測試方法，不是你的意志力。
          </p>
        </section>

        <section className="mt-10">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            主要功能
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            適合誰
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-glass-border bg-surface/80">
          <div className="border-b border-glass-border px-6 py-5">
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              App Store Information
            </h2>
          </div>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b border-glass-border/70">
                <th className="w-40 px-6 py-4 text-sm font-medium text-text-primary">
                  開發者
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  Caroline Lee
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  聯絡
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link
                    href="mailto:info@ange1a.com"
                    className="text-accent underline"
                  >
                    info@ange1a.com
                  </Link>
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  平台
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  iOS（iPhone）
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  類別
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  教育
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  支援
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link href="/praxis/support/" className="text-accent underline">
                    ange1a.com/praxis/support/
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  隱私權政策
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link href="/praxis/privacy/" className="text-accent underline">
                    ange1a.com/praxis/privacy/
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/praxis/"
            className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
          >
            返回知行 Praxis
          </Link>
          <Link
            href="/praxis/privacy/"
            className="rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent"
          >
            閱讀隱私權政策
          </Link>
        </div>
      </article>
    </>
  );
}
