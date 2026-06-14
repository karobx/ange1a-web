import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, faqPageJsonLd } from "@/components/JsonLd";
import { memoryshotFaqItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "MemoryShot Support",
  description:
    "MemoryShot FAQ and support. iOS memory management app by Ange1a.",
  alternates: {
    canonical: "https://ange1a.com/memoryshot/support/",
  },
};

export default function MemoryShotSupportPage() {
  const allFaq = [
    ...memoryshotFaqItems["zh-Hant"],
    ...memoryshotFaqItems.en,
  ];

  return (
    <>
      <JsonLd data={faqPageJsonLd(allFaq)} />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          MemoryShot
        </p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-text-primary">
          支援 / Support
        </h1>
        <p className="mt-3 text-text-secondary">
          Email:{" "}
          <Link
            href="mailto:info@ange1a.com"
            className="text-accent underline"
          >
            info@ange1a.com
          </Link>
        </p>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            繁體中文
          </h2>
          <dl className="mt-6 space-y-6">
            {memoryshotFaqItems["zh-Hant"].map((item) => (
              <div
                key={item.q}
                className="glass-panel rounded-2xl p-6"
              >
                <dt className="font-medium text-text-primary">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 border-t border-glass-border pt-12">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            English
          </h2>
          <dl className="mt-6 space-y-6">
            {memoryshotFaqItems.en.map((item) => (
              <div
                key={item.q}
                className="glass-panel rounded-2xl p-6"
              >
                <dt className="font-medium text-text-primary">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </>
  );
}
