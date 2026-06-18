import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HER-OS Privacy Policy",
  description: "Privacy policy for HER-OS.",
  alternates: {
    canonical: "https://ange1a.com/her-os/privacy/",
  },
};

export default function HerOsPrivacyPage() {
  return (
    <article className="prose-marketing mx-auto max-w-3xl px-4 pb-20 pt-28">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent not-prose">
        HER-OS
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-text-secondary">
        Effective date: June 18, 2026 ·{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
      </p>

      <h2>1. What we collect</h2>
      <ul>
        <li>Name, username, and optionally an email address from Sign in with Apple</li>
        <li>Identity setup fields, journals, goals, and vision board content</li>
        <li>Notification preferences and local app settings</li>
      </ul>

      <h2>2. How we use data</h2>
      <ul>
        <li>To save your content on the device you use</li>
        <li>To support reminders, check-ins, and app personalization</li>
        <li>To let you edit or delete your data inside the app</li>
      </ul>

      <h2>3. Storage and sharing</h2>
      <ul>
        <li>HER-OS stores user data locally on device</li>
        <li>We do not run a server-side account system for this app</li>
        <li>We do not sell personal data to third parties</li>
      </ul>

      <h2>4. Deletion</h2>
      <p>
        You may delete your account and associated data from within the app. If
        you need help, email{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>.
      </p>
    </article>
  );
}
