import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HER-OS",
  description:
    "HER-OS is a personal growth app for structured self-reflection, identity work, and daily rituals.",
  alternates: {
    canonical: "https://ange1a.com/her-os/",
  },
  openGraph: {
    title: "HER-OS",
    description:
      "Personal growth, self-reflection, and daily ritual support for iPhone users.",
    url: "https://ange1a.com/her-os/",
  },
};

export default function HerOsLandingPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 pb-24 pt-28">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Ange1a
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
          HER-OS
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          A personal growth companion for structured self-reflection, identity
          building, daily rituals, and private journaling.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/her-os/support/"
            className="rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent"
          >
            Support
          </Link>
          <Link
            href="/her-os/privacy/"
            className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        <div className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Identity
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Set your aspirational identity, name it, and shape the role you want
            to step into.
          </p>
        </div>
        <div className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Rituals
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Track daily actions, check-ins, and habits without changing the core
            app flow.
          </p>
        </div>
        <div className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Privacy
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Local-first by design, with support and policy pages published for
            App Store review.
          </p>
        </div>
      </section>
    </article>
  );
}
