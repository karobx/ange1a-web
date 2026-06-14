import type { Metadata } from "next";
import Link from "next/link";
import { memoryshotPrivacySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "MemoryShot Privacy Policy",
  description:
    "MemoryShot privacy policy. How Ange1a handles your data on iOS.",
  alternates: {
    canonical: "https://ange1a.com/memoryshot/privacy/",
  },
};

export default function MemoryShotPrivacyPage() {
  const zh = memoryshotPrivacySections["zh-Hant"];
  const en = memoryshotPrivacySections.en;

  return (
    <>
      <article className="prose-marketing mx-auto max-w-3xl px-4 pb-20 pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          MemoryShot
        </p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-text-primary">
          {zh.title} / {en.title}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Effective date: 2026-06-14 ·{" "}
          <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
        </p>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            繁體中文
          </h2>
          {zh.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 border-t border-glass-border pt-10">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            English
          </h2>
          {en.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </section>
      </article>
    </>
  );
}
