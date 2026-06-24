import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "知行 Praxis Privacy Policy",
  description: "知行 Praxis 隱私權政策。完全本地運作，不收集個人資料。",
  alternates: {
    canonical: "https://ange1a.com/praxis/privacy/",
  },
};

export default function PraxisPrivacyPage() {
  return (
    <article className="prose-marketing mx-auto max-w-3xl px-4 pb-20 pt-28">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent not-prose">
        知行 Praxis
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
        隱私權政策
      </h1>
      <p className="mt-3 text-sm text-text-secondary">
        最後更新日期：2026 年 6 月 24 日 ·{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
      </p>

      <p>
        感謝你使用知行 Praxis（以下簡稱「本 App」）。我們重視你的隱私。本政策說明本
        App 如何處理（以及不處理）你的資料。
      </p>

      <h2>1. 總則</h2>
      <p>
        知行 Praxis 是一款<strong>完全在裝置本地運作</strong>的應用程式。本 App{" "}
        <strong>不需要帳號登入</strong>，<strong>不連接網際網路</strong>
        傳輸你的個人資料，<strong>不使用第三方分析或廣告 SDK</strong>。
      </p>

      <h2>2. 我們收集哪些資料</h2>
      <p>
        <strong>我們不收集任何可識別你身份的個人資料。</strong>
      </p>
      <p>本 App 不會向我們或任何第三方傳送：</p>
      <ul>
        <li>姓名、電子郵件、電話號碼</li>
        <li>裝置識別碼（用於追蹤目的）</li>
        <li>位置資訊</li>
        <li>健康或財務資料</li>
        <li>使用行為分析資料</li>
      </ul>

      <h2>3. 儲存在你裝置上的資料</h2>
      <p>
        你在本 App 中建立的內容——包括實驗記錄、每日觀察、反思文字、實驗結論等——僅儲存在你的
        iPhone 本機（透過 Apple SwiftData 框架）。
      </p>
      <p>這些資料：</p>
      <ul>
        <li>
          <strong>不會</strong>上傳至我們的伺服器（我們沒有伺服器接收這些資料）
        </li>
        <li>
          <strong>不會</strong>與其他使用者或第三方分享
        </li>
        <li>
          當你刪除本 App 時，將一併從裝置移除（除非你透過 iCloud 備份還原）
        </li>
      </ul>

      <h2>4. 內建內容</h2>
      <p>
        本 App 內建的書籍摘要、方法說明與實驗指引（bundled content）隨 App
        安裝包提供，為靜態內容，不涉及你的個人資料。
      </p>

      <h2>5. 兒童隱私</h2>
      <p>
        本 App 不針對 13 歲以下兒童收集個人資料，亦無意收集此類資料。
      </p>

      <h2>6. 第三方服務</h2>
      <p>本 App 目前<strong>不使用</strong>任何第三方服務來處理或收集使用者資料。</p>

      <h2>7. 你的權利</h2>
      <p>由於所有資料僅存於你的裝置：</p>
      <ul>
        <li>你可隨時在 App 內查看、修改或刪除你的實驗記錄</li>
        <li>你可隨時刪除本 App 以移除所有本地資料</li>
        <li>
          我們無法代你存取、匯出或刪除裝置上的資料（因為我們從未收到這些資料）
        </li>
      </ul>

      <h2>8. 政策變更</h2>
      <p>
        若本 App 未來加入需要連網或收集資料的功能（例如雲端同步、帳號系統），我們將更新本隱私權政策，並在
        App 內或 App Store 頁面告知你變更內容。重大變更將在生效前提供合理通知。
      </p>

      <h2>9. 聯絡我們</h2>
      <p>若對本隱私權政策有任何疑問，請聯絡：</p>
      <p>
        <strong>Caroline Lee</strong>
        <br />
        電子郵件：{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
      </p>

      <p className="text-sm text-text-secondary">
        <em>本政策以繁體中文為準。</em>
      </p>

      <div className="not-prose mt-14">
        <Link
          href="/praxis/"
          className="inline-flex rounded-full border border-glass-border bg-surface px-5 py-2.5 text-sm font-medium text-text-primary transition hover:border-accent/40 hover:text-accent"
        >
          ← 返回知行 Praxis
        </Link>
      </div>
    </article>
  );
}
