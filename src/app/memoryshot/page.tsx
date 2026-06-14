import type { Metadata } from "next";
import { MemoryShotLanding } from "@/components/MemoryShotLanding";
import { JsonLd, memoryshotApplicationJsonLd } from "@/components/JsonLd";
import { copy } from "@/lib/content";

const zh = copy.memoryshot["zh-Hant"];

export const metadata: Metadata = {
  title: zh.title,
  description: zh.description,
  alternates: {
    canonical: "https://ange1a.com/memoryshot/",
    languages: {
      "zh-Hant": "https://ange1a.com/memoryshot/zh-Hant/",
      en: "https://ange1a.com/memoryshot/en/",
    },
  },
  openGraph: {
    title: zh.title,
    description: zh.description,
    url: "https://ange1a.com/memoryshot/",
    images: [
      {
        url: "/assets/memoryshot-logo.png",
        width: 512,
        height: 512,
        alt: zh.logoAlt,
      },
    ],
  },
};

export default function MemoryShotPage() {
  return (
    <>
      <JsonLd data={memoryshotApplicationJsonLd("zh-Hant")} />
      <MemoryShotLanding locale="zh-Hant" />
    </>
  );
}
