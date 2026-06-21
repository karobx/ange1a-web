import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NearDrop Privacy Policy · Ange1a",
  description:
    "Privacy policy for NearDrop — offline iOS file transfer via Personal Hotspot and local network.",
  alternates: {
    canonical: "https://ange1a.com/neardrop/privacy/",
  },
};

export default function NearDropPrivacyPage() {
  return (
    <article className="prose-marketing mx-auto max-w-3xl px-4 pb-20 pt-28">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent not-prose">
        NearDrop
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-text-secondary">
        Effective date: June 21, 2026 ·{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>
      </p>

      <h2>1. Overview</h2>
      <p>
        NearDrop is an offline file transfer application developed by Ange1a
        (Caroline Lee). The app helps you send files between nearby devices
        using Personal Hotspot and a local HTTP server. We do not operate a
        cloud account system, and we do not upload your files to our servers.
      </p>

      <h2>2. What we collect</h2>
      <p>
        We do not require an account. We do not upload your files, photos, or
        documents to our servers. File transfers occur directly between devices
        on your local Personal Hotspot or same-Wi‑Fi network.
      </p>

      <h2>3. Data stored on your device</h2>
      <ul>
        <li>
          Hotspot Wi‑Fi credentials (SSID and password) stored securely in the
          iOS Keychain for convenience when reconnecting
        </li>
        <li>Transfer history stored locally on your device</li>
        <li>Device display name and in-app preferences</li>
        <li>Received files saved to your device&apos;s local storage</li>
      </ul>

      <h2>4. Permissions</h2>
      <ul>
        <li>
          <strong>Camera</strong>: scan QR codes to join transfer rooms
          (optional; manual entry is available)
        </li>
        <li>
          <strong>Local Network</strong>: run a local HTTP server to receive
          files on your hotspot or LAN
        </li>
        <li>
          <strong>Photo Library</strong>: select files to send or save received
          media when you choose to
        </li>
        <li>
          <strong>Notifications</strong>: optional local alerts when transfers
          complete
        </li>
      </ul>

      <h2>5. Data collection and sharing</h2>
      <ul>
        <li>
          Your files and transfer metadata stay on your devices unless you back
          them up through Apple&apos;s normal device backup services
        </li>
        <li>We do not collect, sell, or rent your personal data</li>
        <li>We do not require login or an email address to use the app</li>
        <li>We do not run analytics or advertising trackers inside the app</li>
      </ul>

      <h2>6. Purchases</h2>
      <p>
        NearDrop v1.0 is free with no in-app purchases. If paid features are
        added in the future, purchases will be handled entirely by Apple through
        the App Store. We do not receive your payment card details.
      </p>

      <h2>7. Children</h2>
      <p>NearDrop is not directed at children under 13.</p>

      <h2>8. Deletion</h2>
      <p>
        You can delete transfer history and received files from within the app.
        Deleting the app from your device removes locally stored data associated
        with it. If you need help, email{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>.
      </p>

      <h2>9. Contact</h2>
      <p>
        For privacy questions about NearDrop, contact{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>.
      </p>

      <hr className="my-10 border-glass-border" />

      <h2>繁體中文摘要</h2>
      <p>
        NearDrop 由 Ange1a 開發，無需註冊帳號，不會將您的檔案上傳至我們的伺服器。檔案僅在個人熱點或同一 Wi‑Fi
        的本地網絡中點對點傳輸。熱點憑證存於 iOS Keychain；傳輸歷史與接收檔案存於本機。v1.0
        完全免費，無 App 內購買。如有私隱問題，請聯絡{" "}
        <Link href="mailto:info@ange1a.com">info@ange1a.com</Link>。
      </p>

      <div className="not-prose mt-10 flex flex-wrap gap-3">
        <Link
          href="/neardrop/"
          className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
        >
          Back to NearDrop
        </Link>
        <Link
          href="/neardrop/marketing/"
          className="rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent"
        >
          Marketing Information
        </Link>
      </div>
    </article>
  );
}
