import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HER-OS Terms of Service",
  description: "Terms of service for HER-OS.",
  alternates: {
    canonical: "https://ange1a.com/her-os/terms/",
  },
};

export default function HerOsTermsPage() {
  return (
    <article className="prose-marketing mx-auto max-w-3xl px-4 pb-20 pt-28">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent not-prose">
        HER-OS
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-text-secondary">
        Effective date: June 18, 2026 ·{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
      </p>

      <h2>1. Use of the app</h2>
      <p>
        HER-OS is a personal growth and self-reflection app. It is not medical
        advice, therapy, or a professional treatment tool.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>You may use Sign in with Apple or a local username/passcode.</li>
        <li>You are responsible for keeping your device and credentials secure.</li>
        <li>You may delete your account and local data from within the app.</li>
      </ul>

      <h2>3. Fees</h2>
      <p>
        The current build is offered as a free standalone app. If paid features
        are added later, they will be disclosed clearly before purchase.
      </p>

      <h2>4. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>.
      </p>
    </article>
  );
}
