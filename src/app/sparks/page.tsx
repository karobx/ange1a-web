import type { Metadata } from "next";
import { JsonLd, sparksApplicationsJsonLd } from "@/components/JsonLd";
import { SparksLanding } from "@/components/SparksLanding";

export const metadata: Metadata = {
  title: "Sparks / 念頭",
  description:
    "Sparks (念頭) cross-platform idea incubation app by Ange1a.",
  alternates: {
    canonical: "https://ange1a.com/sparks/",
  },
  openGraph: {
    title: "Sparks / 念頭",
    description:
      "捕捉碎片，孵化成計劃。從靈感、拼圖到每日回顧，Sparks 把創意整理成可執行下一步。",
    url: "https://ange1a.com/sparks/",
    images: [
      {
        url: "/assets/sparks-mac-hero.png",
        width: 1024,
        height: 682,
        alt: "Sparks Mac 版介面",
      },
    ],
  },
};

export default function SparksIndexPage() {
  return (
    <>
      <JsonLd data={sparksApplicationsJsonLd("zh-Hant")} />
      <SparksLanding locale="zh-Hant" />
    </>
  );
}
