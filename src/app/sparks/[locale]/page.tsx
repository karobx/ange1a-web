import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SparksLanding } from "@/components/SparksLanding";
import {
  JsonLd,
  sparksApplicationsJsonLd,
} from "@/components/JsonLd";
import { copy, localeFromParam, type Locale } from "@/lib/content";

type Props = {
  params: Promise<{ locale: string }>;
};

function sparksMetadata(locale: Locale): Metadata {
  const c = copy.sparks[locale];
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `https://ange1a.com/sparks/${locale}/`,
      languages: {
        "zh-Hant": "https://ange1a.com/sparks/zh-Hant/",
        en: "https://ange1a.com/sparks/en/",
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://ange1a.com/sparks/${locale}/`,
      locale: locale === "zh-Hant" ? "zh_Hant" : "en_US",
      images: [
        {
          url: "/assets/sparks-mac-hero.png",
          width: 1024,
          height: 682,
          alt: c.macHeroAlt,
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
  return sparksMetadata(locale);
}

export default async function SparksLocalePage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = localeFromParam(raw);
  if (!locale) notFound();

  return (
    <>
      <JsonLd data={sparksApplicationsJsonLd(locale)} />
      <SparksLanding locale={locale} />
    </>
  );
}
