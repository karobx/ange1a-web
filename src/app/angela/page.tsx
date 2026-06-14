import type { Metadata } from "next";
import { AngelaLanding } from "@/components/AngelaLanding";
import { JsonLd, angelaProjectJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Angela",
  description:
    "Angela 是由 Queenmy Wong 與 Caroline Lee 共同創辦的個人成長陪伴系統，為迷惘、停滯或疲憊的時刻提供溫柔而清晰的支持。",
  alternates: {
    canonical: "https://ange1a.com/angela/",
    languages: {
      "zh-Hant": "https://ange1a.com/angela/zh-Hant/",
      en: "https://ange1a.com/angela/en/",
    },
  },
  openGraph: {
    title: "Angela · 個人成長陪伴系統",
    description:
      "由 Queenmy Wong 與 Caroline Lee 共同創辦，Angela 以友誼與陪伴為起點，協助人在迷惘時看清下一步。",
    url: "https://ange1a.com/angela/",
  },
};

export default function AngelaPage() {
  return (
    <>
      <JsonLd data={angelaProjectJsonLd("zh-Hant")} />
      <AngelaLanding locale="zh-Hant" />
    </>
  );
}
