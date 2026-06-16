import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, luminaApplicationJsonLd } from "@/components/JsonLd";
import { LuminaPageHeader } from "@/components/LuminaPageHeader";
import { copy } from "@/lib/content";

export const metadata: Metadata = {
  title: "晶靈 Lumina Marketing",
  description:
    "Marketing information for Lumina (晶靈) — an iOS crystal companion app by Ange1a. Bazi chart meets daily crystal guidance.",
  alternates: {
    canonical: "https://ange1a.com/lumina/marketing/",
  },
  openGraph: {
    title: "晶靈 Lumina",
    description:
      "Daily crystal guidance from your Bazi chart. Manage your collection, browse the encyclopedia, track cleansing.",
    url: "https://ange1a.com/lumina/marketing/",
    images: [
      {
        url: "/assets/lumina-logo.png",
        width: 512,
        height: 512,
        alt: "晶靈 Lumina app icon",
      },
    ],
  },
};

export default function LuminaMarketingPage() {
  const zh = copy.lumina["zh-Hant"];
  const en = copy.lumina.en;

  return (
    <>
      <JsonLd data={luminaApplicationJsonLd("zh-Hant")} />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28">
        <LuminaPageHeader
          title="行銷資訊 / Marketing"
          subtitle="晶靈 Lumina 的 App Store 行銷資訊頁。此 URL 會顯示於 App Store。"
          logoAlt={zh.logoAlt}
        />

        <section className="prose-marketing">
          <h2>{zh.marketingTitle}</h2>
          <p className="text-lg font-medium text-[#4A3D72]">{zh.marketingSubtitle}</p>
          <p>{zh.marketingIntro}</p>
          <h3>主要功能</h3>
          <ul>
            {zh.marketingHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <table>
            <tbody>
              <tr>
                <th>開發者</th>
                <td>{zh.marketingDeveloper}</td>
              </tr>
              <tr>
                <th>聯絡</th>
                <td>
                  <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
                </td>
              </tr>
              <tr>
                <th>平台</th>
                <td>{zh.marketingPlatform}</td>
              </tr>
              <tr>
                <th>類別</th>
                <td>{zh.marketingCategory}</td>
              </tr>
              <tr>
                <th>支援</th>
                <td>
                  <Link href="/lumina/support/">ange1a.com/lumina/support/</Link>
                </td>
              </tr>
              <tr>
                <th>私隱政策</th>
                <td>
                  <Link href="/lumina/privacy/">ange1a.com/lumina/privacy/</Link>
                </td>
              </tr>
              <tr>
                <th>產品官網</th>
                <td>
                  <Link href="/lumina/">ange1a.com/lumina/</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="prose-marketing mt-14 border-t border-[rgba(74,61,114,0.1)] pt-12">
          <h2>{en.marketingTitle}</h2>
          <p className="text-lg font-medium text-[#4A3D72]">{en.marketingSubtitle}</p>
          <p>{en.marketingIntro}</p>
          <h3>Key features</h3>
          <ul>
            {en.marketingHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <table>
            <tbody>
              <tr>
                <th>Developer</th>
                <td>{en.marketingDeveloper}</td>
              </tr>
              <tr>
                <th>Contact</th>
                <td>
                  <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
                </td>
              </tr>
              <tr>
                <th>Platform</th>
                <td>{en.marketingPlatform}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{en.marketingCategory}</td>
              </tr>
              <tr>
                <th>Support</th>
                <td>
                  <Link href="/lumina/support/">ange1a.com/lumina/support/</Link>
                </td>
              </tr>
              <tr>
                <th>Privacy Policy</th>
                <td>
                  <Link href="/lumina/privacy/">ange1a.com/lumina/privacy/</Link>
                </td>
              </tr>
              <tr>
                <th>Product site</th>
                <td>
                  <Link href="/lumina/">ange1a.com/lumina/</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-14 text-center">
          <Link
            href="/lumina/"
            className="inline-flex rounded-full border border-[rgba(74,61,114,0.12)] bg-white/50 px-5 py-2.5 text-sm font-medium text-[#141018] transition duration-300 hover:border-[rgba(74,61,114,0.25)]"
          >
            ← 返回晶靈 Lumina
          </Link>
        </div>
      </article>
    </>
  );
}
