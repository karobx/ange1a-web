import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AngelaLanding } from "@/components/AngelaLanding";
import { JsonLd, angelaProjectJsonLd } from "@/components/JsonLd";
import { localeFromParam, type Locale } from "@/lib/content";

type Props = {
  params: Promise<{ locale: string }>;
};

const metadataCopy: Record<
  Locale,
  {
    title: string;
    description: string;
    openGraphTitle: string;
  }
> = {
  "zh-Hant": {
    title: "Angela",
    description:
      "Angela 是由 Queenmy Wong 與 Caroline Lee 共同創辦的個人成長陪伴系統，為迷惘、停滯或疲憊的時刻提供溫柔而清晰的支持。",
    openGraphTitle: "Angela · 個人成長陪伴系統",
  },
  en: {
    title: "Angela",
    description:
      "Angela is a personal growth companion co-founded by Queenmy Wong and Caroline Lee, built to offer gentle clarity when someone feels lost, stuck, or exhausted.",
    openGraphTitle: "Angela · Personal Growth Companion",
  },
};

function angelaMetadata(locale: Locale): Metadata {
  const c = metadataCopy[locale];
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `https://ange1a.com/angela/${locale}/`,
      languages: {
        "zh-Hant": "https://ange1a.com/angela/zh-Hant/",
        en: "https://ange1a.com/angela/en/",
      },
    },
    openGraph: {
      title: c.openGraphTitle,
      description: c.description,
      url: `https://ange1a.com/angela/${locale}/`,
      locale: locale === "zh-Hant" ? "zh_Hant" : "en_US",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "zh-Hant" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = localeFromParam(raw);
  if (!locale) return {};
  return angelaMetadata(locale);
}

export default async function AngelaLocalePage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = localeFromParam(raw);
  if (!locale) notFound();

  return (
    <>
      <JsonLd data={angelaProjectJsonLd(locale)} />
      <AngelaLanding locale={locale} />
    </>
  );
}
