import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, faqPageJsonLd } from "@/components/JsonLd";
import { faqItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Sparks (念頭) FAQ and support. Cross-platform idea incubation by Ange1a.",
  alternates: {
    canonical: "https://ange1a.com/sparks/support/",
  },
};

export default function SupportPage() {
  const allFaq = [...faqItems["zh-Hant"], ...faqItems.en];

  return (
    <>
      <JsonLd data={faqPageJsonLd(allFaq)} />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28">
        <h1 className="text-3xl font-semibold tracking-tight">
          支援 / Support
        </h1>
        <p className="mt-3 text-text-secondary">
          Email:{" "}
          <Link href="mailto:info@ange1a.com" className="text-accent underline">
            info@ange1a.com
          </Link>
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">繁體中文</h2>
          <dl className="mt-6 space-y-6">
            {faqItems["zh-Hant"].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-glass-border bg-surface p-6"
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
          <h2 className="text-xl font-semibold">English</h2>
          <dl className="mt-6 space-y-6">
            {faqItems.en.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-glass-border bg-surface p-6"
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
