import type { Metadata } from "next";
import Link from "next/link";
import { privacySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Sparks (念頭) privacy policy. How Ange1a handles your data on iPhone and Mac.",
  alternates: {
    canonical: "https://ange1a.com/sparks/privacy/",
  },
};

export default function PrivacyPage() {
  const zh = privacySections["zh-Hant"];
  const en = privacySections.en;

  return (
    <>
      <article className="prose-marketing mx-auto max-w-3xl px-4 pb-20 pt-28">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          {zh.title} / {en.title}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Effective date: 2026-06-14 ·{" "}
          <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-text-primary">繁體中文</h2>
          {zh.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 border-t border-glass-border pt-10">
          <h2 className="text-xl font-semibold text-text-primary">English</h2>
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
