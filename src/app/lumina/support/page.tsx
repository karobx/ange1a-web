import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, faqPageJsonLd } from "@/components/JsonLd";
import { LuminaPageHeader } from "@/components/LuminaPageHeader";
import { copy, luminaFaqItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "晶靈 Lumina Support",
  description:
    "晶靈 Lumina FAQ and support. iOS crystal companion app by Ange1a.",
  alternates: {
    canonical: "https://ange1a.com/lumina/support/",
  },
};

export default function LuminaSupportPage() {
  const allFaq = [...luminaFaqItems["zh-Hant"], ...luminaFaqItems.en];
  const zh = copy.lumina["zh-Hant"];

  return (
    <>
      <JsonLd data={faqPageJsonLd(allFaq)} />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28">
        <LuminaPageHeader
          title="支援 / Support"
          subtitle="晶靈 Lumina 使用支援與常見問題。此頁面會顯示於 App Store 產品頁。"
          logoAlt={zh.logoAlt}
        />

        <section>
          <h2 className="font-display text-xl font-semibold text-[#141018]">
            繁體中文
          </h2>
          <dl className="mt-6 space-y-6">
            {luminaFaqItems["zh-Hant"].map((item) => (
              <div
                key={item.q}
                className="glass-panel rounded-2xl p-6"
                style={{ borderColor: "rgba(74, 61, 114, 0.1)" }}
              >
                <dt className="font-medium text-[#141018]">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#5C5368]">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 border-t border-[rgba(74,61,114,0.1)] pt-12">
          <h2 className="font-display text-xl font-semibold text-[#141018]">
            English
          </h2>
          <dl className="mt-6 space-y-6">
            {luminaFaqItems.en.map((item) => (
              <div
                key={item.q}
                className="glass-panel rounded-2xl p-6"
                style={{ borderColor: "rgba(74, 61, 114, 0.1)" }}
              >
                <dt className="font-medium text-[#141018]">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#5C5368]">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-14 text-center">
          <Link
            href="/lumina/"
            className="inline-flex rounded-full border border-[rgba(74,61,114,0.12)] bg-white/50 px-5 py-2.5 text-sm font-medium text-[#141018] transition duration-300 hover:border-[rgba(74,61,114,0.25)]"
          >
            ← 返回晶靈 Lumina
          </Link>
        </div>
      </article>
    </>
  );
}
