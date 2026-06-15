import type { Metadata } from "next";
import { LuminaLanding } from "@/components/LuminaLanding";
import { JsonLd, luminaApplicationJsonLd } from "@/components/JsonLd";
import { copy } from "@/lib/content";

const zh = copy.lumina["zh-Hant"];

export const metadata: Metadata = {
  title: zh.title,
  description: zh.description,
  alternates: {
    canonical: "https://ange1a.com/lumina/",
    languages: {
      "zh-Hant": "https://ange1a.com/lumina/zh-Hant/",
      en: "https://ange1a.com/lumina/en/",
    },
  },
  openGraph: {
    title: zh.title,
    description: zh.description,
    url: "https://ange1a.com/lumina/",
    images: [
      {
        url: "/assets/lumina-logo.png",
        width: 512,
        height: 512,
        alt: zh.logoAlt,
      },
    ],
  },
};

export default function LuminaPage() {
  return (
    <>
      <JsonLd data={luminaApplicationJsonLd("zh-Hant")} />
      <LuminaLanding locale="zh-Hant" />
    </>
  );
}
