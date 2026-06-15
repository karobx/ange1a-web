import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LuminaLanding } from "@/components/LuminaLanding";
import { JsonLd, luminaApplicationJsonLd } from "@/components/JsonLd";
import { copy, localeFromParam, type Locale } from "@/lib/content";

type Props = {
  params: Promise<{ locale: string }>;
};

function luminaMetadata(locale: Locale): Metadata {
  const c = copy.lumina[locale];
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `https://ange1a.com/lumina/${locale}/`,
      languages: {
        "zh-Hant": "https://ange1a.com/lumina/zh-Hant/",
        en: "https://ange1a.com/lumina/en/",
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://ange1a.com/lumina/${locale}/`,
      locale: locale === "zh-Hant" ? "zh_Hant" : "en_US",
      images: [
        {
          url: "/assets/lumina-logo.png",
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
  return luminaMetadata(locale);
}

export default async function LuminaLocalePage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = localeFromParam(raw);
  if (!locale) notFound();

  return (
    <>
      <JsonLd data={luminaApplicationJsonLd(locale)} />
      <LuminaLanding locale={locale} />
    </>
  );
}
