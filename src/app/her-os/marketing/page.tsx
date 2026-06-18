import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "HER-OS Marketing",
  description:
    "Marketing information for HER-OS. Personal growth, identity work, and daily rituals for iPhone.",
  alternates: {
    canonical: "https://ange1a.com/her-os/marketing/",
  },
  openGraph: {
    title: "HER-OS",
    description:
      "Structured self-reflection, identity shaping, and daily rituals for iPhone users.",
    url: "https://ange1a.com/her-os/marketing/",
  },
};

export default function HerOsMarketingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "HER-OS",
          description:
            "A personal growth companion for identity building, journaling, and daily rituals.",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "iOS",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          author: { "@type": "Organization", name: "Ange1a" },
          url: "https://ange1a.com/her-os/",
        }}
      />

      <article className="mx-auto max-w-4xl px-4 pb-20 pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Ange1a
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
          HER-OS Marketing
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
          HER-OS is a personal growth app built for structured self-reflection.
          It helps users define the identity they want to grow into, keep track
          of daily rituals, and stay consistent with private, local-first
          journaling.
        </p>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Identity
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              Build a self-image with intention
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Capture the person you want to become, define your title, and keep
              the structure visible as you grow.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Rituals
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              Keep daily action simple
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Track check-ins, habits, and reminders without changing the core
              experience or adding noise.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Privacy
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              Local-first by design
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              User content stays on device, with public policy pages published
              for App Store review and customer support.
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
                  Caroline Lee / Ange1a
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Contact
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link href="mailto:info@ange1a.com" className="text-accent underline">
                    info@ange1a.com
                  </Link>
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Support
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link href="/her-os/support/" className="text-accent underline">
                    ange1a.com/her-os/support/
                  </Link>
                </td>
              </tr>
              <tr className="border-b border-glass-border/70">
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Privacy Policy
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link href="/her-os/privacy/" className="text-accent underline">
                    ange1a.com/her-os/privacy/
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Terms and Conditions
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link href="/her-os/terms/" className="text-accent underline">
                    ange1a.com/her-os/terms/
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/her-os/"
            className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
          >
            Back to HER-OS
          </Link>
          <Link
            href="/her-os/privacy/"
            className="rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent"
          >
            Read Privacy Policy
          </Link>
        </div>
      </article>
    </>
  );
}
