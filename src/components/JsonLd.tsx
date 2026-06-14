import Script from "next/script";
import { MEMORYSHOT_APP_STORE_URL } from "@/lib/content";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ange1a",
    url: "https://ange1a.com",
    logo: "https://ange1a.com/assets/logo.png",
  };
}

export function sparksApplicationsJsonLd(locale: "zh-Hant" | "en") {
  const isZh = locale === "zh-Hant";
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: isZh ? "念頭" : "Sparks",
      alternateName: isZh ? "Sparks" : "念頭",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: "Ange1a" },
      url: "https://ange1a.com/sparks/",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: isZh ? "念頭" : "Sparks",
      alternateName: isZh ? "Sparks" : "念頭",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: "Ange1a" },
      url: "https://ange1a.com/sparks/",
    },
  ];
}

export function memoryshotApplicationJsonLd(locale: "zh-Hant" | "en") {
  const c = locale === "zh-Hant"
    ? {
        name: "MemoryShot",
        description:
          "把截圖同現場記錄變成可搜尋記憶：拍照、語音備忘、自動定位，回家再分類。",
      }
    : {
        name: "MemoryShot",
        description:
          "Turn screenshots and live captures into searchable memories with voice, location, and tags.",
      };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: c.name,
    description: c.description,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "Ange1a" },
    url: "https://ange1a.com/memoryshot/",
    downloadUrl: MEMORYSHOT_APP_STORE_URL,
  };
}

export function angelaProjectJsonLd(locale: "zh-Hant" | "en") {
  const isZh = locale === "zh-Hant";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Angela",
    description: isZh
      ? "Angela 是由 Queenmy Wong 與 Caroline Lee 共同創辦的個人成長陪伴系統，為迷惘、停滯或疲憊的時刻提供溫柔而清晰的支持。"
      : "Angela is a personal growth companion co-founded by Queenmy Wong and Caroline Lee, built to offer gentle clarity when someone feels lost, stuck, or exhausted.",
    url: `https://ange1a.com/angela/${locale}/`,
    inLanguage: isZh ? "zh-Hant" : "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Ange1a",
      url: "https://ange1a.com",
    },
    about: {
      "@type": "Thing",
      name: "Personal growth companion",
    },
    creator: [
      { "@type": "Person", name: "Queenmy Wong" },
      { "@type": "Person", name: "Caroline Lee" },
    ],
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
