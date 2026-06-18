import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Reminder Privacy Policy · Ange1a",
  description: "Privacy policy for Refund Reminder.",
  alternates: {
    canonical: "https://ange1a.com/refund-reminder/privacy/",
  },
};

export default function RefundReminderPrivacyPage() {
  return (
    <article className="prose-marketing mx-auto max-w-3xl px-4 pb-20 pt-28">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent not-prose">
        Refund Reminder
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-text-secondary">
        Effective date: June 18, 2026 ·{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
      </p>

      <h2>1. Overview</h2>
      <p>
        Refund Reminder is designed as a private, on-device utility. The app helps
        you track purchases, return deadlines, receipt images, and local
        reminders. We do not operate a cloud account system for this app.
      </p>

      <h2>2. What the app stores on your device</h2>
      <ul>
        <li>Purchase names, amounts, store details, and return deadlines</li>
        <li>Receipt screenshots or photos you attach to a purchase</li>
        <li>Returned status, filters, and other in-app preferences</li>
        <li>Local notification schedules for upcoming return deadlines</li>
      </ul>

      <h2>3. Permissions</h2>
      <ul>
        <li>
          Photo Library: used only when you choose to attach a receipt image to
          a purchase
        </li>
        <li>
          Notifications: used only to remind you before a return window closes
        </li>
      </ul>

      <h2>4. Data collection and sharing</h2>
      <ul>
        <li>
          Your purchase data stays on your iPhone unless you back it up through
          Apple&apos;s normal device backup services
        </li>
        <li>We do not collect, sell, or rent your personal data</li>
        <li>
          We do not require an account, login, or email address to use the app
        </li>
        <li>We do not run analytics or advertising trackers inside the app</li>
      </ul>

      <h2>5. Purchases</h2>
      <p>
        If you buy Refund Reminder on the App Store, payment is handled entirely
        by Apple. We do not receive your payment card details.
      </p>

      <h2>6. Deletion</h2>
      <p>
        You can delete individual purchases, receipt images, and reminders from
        within the app. Deleting the app from your device removes the locally
        stored data associated with it. If you need help, email{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>.
      </p>

      <h2>7. Contact</h2>
      <p>
        For privacy questions about Refund Reminder, contact{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>.
      </p>
    </article>
  );
}
