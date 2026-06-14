import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MemoryShotLanding } from "@/components/MemoryShotLanding";
import { JsonLd, memoryshotApplicationJsonLd } from "@/components/JsonLd";
import { copy, localeFromParam, type Locale } from "@/lib/content";

type Props = {
  params: Promise<{ locale: string }>;
};

function memoryshotMetadata(locale: Locale): Metadata {
  const c = copy.memoryshot[locale];
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `https://ange1a.com/memoryshot/${locale}/`,
      languages: {
        "zh-Hant": "https://ange1a.com/memoryshot/zh-Hant/",
        en: "https://ange1a.com/memoryshot/en/",
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://ange1a.com/memoryshot/${locale}/`,
      locale: locale === "zh-Hant" ? "zh_Hant" : "en_US",
      images: [
        {
          url: "/assets/memoryshot-logo.png",
          width: 512,
          height: 512,
          alt: c.logoAlt,
        },
      ],
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
  return memoryshotMetadata(locale);
}

export default async function MemoryShotLocalePage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = localeFromParam(raw);
  if (!locale) notFound();

  return (
    <>
      <JsonLd data={memoryshotApplicationJsonLd(locale)} />
      <MemoryShotLanding locale={locale} />
    </>
  );
}
