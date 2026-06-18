import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Reminder · Ange1a",
  description:
    "Refund Reminder is a private iOS utility for tracking return windows, receipt photos, and deadline reminders.",
  alternates: {
    canonical: "https://ange1a.com/refund-reminder/",
  },
  openGraph: {
    title: "Refund Reminder",
    description:
      "Track purchases, attach receipts, and get reminded before a refund window closes.",
    url: "https://ange1a.com/refund-reminder/",
    images: [
      {
        url: "/assets/refund-reminder-logo.png",
        width: 1024,
        height: 1024,
        alt: "Refund Reminder app icon",
      },
    ],
  },
};

export default function RefundReminderPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 pb-24 pt-28">
      <div className="max-w-3xl">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/refund-reminder-logo.png"
            alt="Refund Reminder"
            width={72}
            height={72}
            className="h-[4.5rem] w-[4.5rem] rounded-[1.1rem] shadow-[0_12px_40px_var(--shadow-tint)]"
          />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Caroline Lee
            </p>
            <h1 className="font-display mt-1 text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
              Refund Reminder
            </h1>
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          A calm, private timeline for purchases you might still return. Add a
          receipt, set the final return date, and let the app warn you before the
          window closes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/refund-reminder/marketing/"
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-text-primary"
          >
            Marketing
          </Link>
          <Link
            href="/refund-reminder/privacy/"
            className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        <div className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Timeline
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Keep active, urgent, safe, and returned purchases visually distinct
            so you can decide fast.
          </p>
        </div>
        <div className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Receipts
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Attach a screenshot or receipt photo to every item so the proof stays
            next to the deadline.
          </p>
        </div>
        <div className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Private by default
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            One-time purchase, no account, no subscription, and no cloud
            dependency. Everything stays on your device.
          </p>
        </div>
      </section>
    </article>
  );
}
