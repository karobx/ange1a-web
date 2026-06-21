import type { Metadata } from "next";
import { NearDropLanding } from "@/components/NearDropLanding";
import { JsonLd, neardropApplicationJsonLd } from "@/components/JsonLd";
import { copy } from "@/lib/content";

const zh = copy.neardrop["zh-Hant"];

export const metadata: Metadata = {
  title: zh.title,
  description: zh.description,
  alternates: {
    canonical: "https://ange1a.com/neardrop/",
  },
  openGraph: {
    title: "NearDrop",
    description: zh.description,
    url: "https://ange1a.com/neardrop/",
    images: [
      {
        url: "/assets/neardrop/neardrop-section-01-hero.png",
        width: 1920,
        height: 1080,
        alt: zh.sections[0].alt,
      },
    ],
  },
};

export default function NearDropPage() {
  return (
    <>
      <JsonLd data={neardropApplicationJsonLd("zh-Hant")} />
      <NearDropLanding locale="zh-Hant" />
    </>
  );
}
