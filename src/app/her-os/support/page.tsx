import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HER-OS Support",
  description: "Support information and contact details for HER-OS.",
  alternates: {
    canonical: "https://ange1a.com/her-os/support/",
  },
};

export default function HerOsSupportPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-28">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        HER-OS
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-text-primary">
        Support
      </h1>
      <p className="mt-4 text-base leading-relaxed text-text-secondary">
        For help with HER-OS, please email{" "}
        <Link href="mailto:info@ange1a.com" className="text-accent underline">
          info@ange1a.com
        </Link>
        .
      </p>

      <section className="mt-12 space-y-4">
        <div className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Contact
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Email: info@ange1a.com
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Developer: Caroline Lee
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            What this page covers
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary">
            <li>Account access and login questions</li>
            <li>App Store review follow-up</li>
            <li>Privacy or deletion requests</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
