import type { Metadata } from "next";
import Link from "next/link";
import { LuminaPageHeader } from "@/components/LuminaPageHeader";
import { copy, luminaPrivacySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "晶靈 Lumina Privacy Policy",
  description:
    "晶靈 Lumina privacy policy. How Ange1a handles your data on iOS.",
  alternates: {
    canonical: "https://ange1a.com/lumina/privacy/",
  },
};

export default function LuminaPrivacyPage() {
  const zh = luminaPrivacySections["zh-Hant"];
  const en = luminaPrivacySections.en;
  const c = copy.lumina["zh-Hant"];

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28">
        <LuminaPageHeader
          title={`${zh.title} / ${en.title}`}
          subtitle="晶靈 Lumina 私隱政策。此 URL 會顯示於 App Store。"
          logoAlt={c.logoAlt}
        />

        <p className="mt-2 text-sm text-[#5C5368]">
          Effective date: 2026-06-16 ·{" "}
          <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
        </p>

        <section className="prose-marketing mt-10">
          <h2>繁體中文</h2>
          {zh.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </section>

        <section className="prose-marketing mt-12 border-t border-[rgba(74,61,114,0.1)] pt-10">
          <h2>English</h2>
          {en.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
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
