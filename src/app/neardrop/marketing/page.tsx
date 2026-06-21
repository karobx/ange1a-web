import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NearDrop Marketing · Ange1a",
  description:
    "Marketing information for NearDrop — offline iOS file transfer via Personal Hotspot and QR code.",
  alternates: {
    canonical: "https://ange1a.com/neardrop/marketing/",
  },
  openGraph: {
    title: "NearDrop",
    description:
      "Transfer files offline with Personal Hotspot and QR code. Browser upload on Android, Windows, and Mac.",
    url: "https://ange1a.com/neardrop/marketing/",
  },
};

export default function NearDropMarketingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "NearDrop",
          description:
            "Offline P2P file transfer for iPhone using Personal Hotspot and a local HTTP server.",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "iOS",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free on the App Store (v1.0)",
          },
          author: { "@type": "Organization", name: "Ange1a" },
          url: "https://ange1a.com/neardrop/",
        }}
      />

      <article className="mx-auto max-w-4xl px-4 pb-20 pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Ange1a
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
          NearDrop Marketing
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
          NearDrop is a fast, offline file transfer app for iPhone. Create a
          room, turn on Personal Hotspot, and let nearby devices connect through
          a QR code — no internet and no cloud storage required.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
          附近傳檔，無需網路。開啟個人熱點，掃描 QR 即可連線 — Android、Windows、Mac
          瀏覽器即可收檔，檔案不經雲端。
        </p>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Offline first
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              No cloud, no account
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Files transfer device-to-device on your Personal Hotspot or local
              Wi‑Fi network. Nothing is uploaded to our servers.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Cross-platform
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              Any device can join
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              iPhone users can join with the NearDrop app. Android, Windows, and
              Mac connect through a browser upload page — no extra install.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Simple flow
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              Hotspot → QR → transfer
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Enable Personal Hotspot in Settings, show the QR code, and let the
              other side scan to connect and send or receive files.
            </p>
          </div>
        </section>

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-glass-border bg-surface/80">
          <div className="border-b border-glass-border px-6 py-5">
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              App Store Information
            </h2>
          </div>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b border-glass-border/70">
                <th className="w-40 px-6 py-4 text-sm font-medium text-text-primary">
                  Developer
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  Ange1a (Caroline Lee)
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Bundle ID
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  Ange1a.NearDrop
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Platform
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  iPhone · iOS 17 or later
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Pricing
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  Free (v1.0, no in-app purchases)
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Contact
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link
                    href="mailto:info@ange1a.com"
                    className="text-accent underline"
                  >
                    info@ange1a.com
                  </Link>
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Privacy Policy
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link
                    href="/neardrop/privacy/"
                    className="text-accent underline"
                  >
                    ange1a.com/neardrop/privacy/
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Marketing URL
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link
                    href="/neardrop/marketing/"
                    className="text-accent underline"
                  >
                    ange1a.com/neardrop/marketing/
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/neardrop/"
            className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
          >
            Back to NearDrop
          </Link>
          <Link
            href="/neardrop/privacy/"
            className="rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent"
          >
            Read Privacy Policy
          </Link>
        </div>
      </article>
    </>
  );
}
