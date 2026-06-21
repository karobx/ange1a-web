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
    logo: "https://ange1a.com/assets/ange1a-logo.png",
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

export function luminaApplicationJsonLd(locale: "zh-Hant" | "en") {
  const c = locale === "zh-Hant"
    ? {
        name: "晶靈 Lumina",
        alternateName: "Lumina",
        description:
          "依八字命盤同今日流日，每日推薦最適合配戴嘅水晶；管理收藏、查百科、追蹤淨化。",
      }
    : {
        name: "Lumina",
        alternateName: "晶靈",
        description:
          "Daily crystal guidance from your Bazi chart and elemental flow. Manage your collection, browse the encyclopedia, track cleansing.",
      };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: c.name,
    alternateName: c.alternateName,
    description: c.description,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "Ange1a" },
    url: "https://ange1a.com/lumina/",
    image: "https://ange1a.com/assets/lumina-logo.png",
  };
}

export function neardropApplicationJsonLd(locale: "zh-Hant" | "en") {
  const c = locale === "zh-Hant"
    ? {
        name: "NearDrop",
        description:
          "iPhone 離線快速傳檔：個人熱點 + QR Code，Android、Windows、Mac 瀏覽器即可收檔，檔案不經雲端。",
      }
    : {
        name: "NearDrop",
        description:
          "Fast offline file transfer for iPhone via Personal Hotspot and QR code. Browser upload on Android, Windows, and Mac.",
      };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: c.name,
    description: c.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "Ange1a" },
    url: "https://ange1a.com/neardrop/",
    image: "https://ange1a.com/assets/neardrop-logo.png",
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
