import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Refund Reminder Marketing · Ange1a",
  description:
    "Marketing information for Refund Reminder. A private iOS utility for tracking return windows and receipt reminders.",
  alternates: {
    canonical: "https://ange1a.com/refund-reminder/marketing/",
  },
  openGraph: {
    title: "Refund Reminder",
    description:
      "Track purchases, attach receipts, and get reminded before a refund window closes.",
    url: "https://ange1a.com/refund-reminder/marketing/",
  },
};

export default function RefundReminderMarketingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Refund Reminder",
          description:
            "A private iOS utility for tracking return windows, receipt photos, and deadline reminders.",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "iOS",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "One-time purchase on the App Store",
          },
          author: { "@type": "Person", name: "Caroline Lee" },
          url: "https://ange1a.com/refund-reminder/",
        }}
      />

      <article className="mx-auto max-w-4xl px-4 pb-20 pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Caroline Lee
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
          Refund Reminder Marketing
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
          Refund Reminder is a one-time purchase iOS utility for people who want
          a calmer way to track return windows. Add a purchase, attach the
          receipt, set the final return date, and get notified before the window
          closes.
        </p>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Fast capture
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              Built for quick decisions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              The first screen gets you into the timeline quickly instead of
              burying you in settings.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Clear urgency
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              See what still matters
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Returned, safe, urgent, and expired states are visually distinct at
              a glance.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              No dark patterns
            </p>
            <h2 className="mt-3 text-lg font-semibold text-text-primary">
              Pay once, use forever
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              No subscriptions, no account setup, and no fake scarcity. Open the
              app and start tracking immediately.
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
                  Caroline Lee
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
                    href="/refund-reminder/privacy/"
                    className="text-accent underline"
                  >
                    ange1a.com/refund-reminder/privacy/
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-text-primary">
                  Marketing URL
                </th>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  <Link
                    href="/refund-reminder/marketing/"
                    className="text-accent underline"
                  >
                    ange1a.com/refund-reminder/marketing/
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/refund-reminder/"
            className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
          >
            Back to Refund Reminder
          </Link>
          <Link
            href="/refund-reminder/privacy/"
            className="rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent"
          >
            Read Privacy Policy
          </Link>
        </div>
      </article>
    </>
  );
}
