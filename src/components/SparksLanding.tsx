"use client";

import Link from "next/link";
import Image from "next/image";
import { copy, type Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

export function SparksLanding({ locale }: { locale: Locale }) {
  const c = copy.sparks[locale];

  return (
    <>
      <section id="mac" className="px-4 pb-16 pt-28 md:pb-20 md:pt-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <Reveal>
            <div className="max-w-xl">
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary md:text-5xl lg:text-[2.75rem] lg:leading-[1.06]">
                {c.heroTitle}
                <span className="block text-accent">{c.heroTitleAccent}</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
                {c.heroSub}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#mac"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-background transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  {c.ctaMac}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-xs transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    ↗
                  </span>
                </a>
                <a
                  href="#ios"
                  className="inline-flex items-center rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition hover:bg-surface-elevated active:scale-[0.98]"
                >
                  {c.ctaIOS}
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center rounded-full border border-glass-border bg-surface/60 px-5 py-3 text-sm font-medium text-text-secondary transition hover:bg-surface hover:text-text-primary active:scale-[0.98]"
                >
                  {c.exploreWorkflow}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-none lg:justify-self-end">
            <div className="rounded-[1.35rem] bg-accent-muted p-1.5 ring-1 ring-glass-border">
              <div className="overflow-hidden rounded-[calc(1.35rem-0.375rem)] border border-glass-border bg-surface shadow-[0_20px_50px_var(--shadow-deep)]">
                <Image
                  src="/assets/sparks-mac-hero.png"
                  alt={c.macHeroAlt}
                  width={1024}
                  height={682}
                  className="h-auto w-full"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 420px"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="workflow"
        className="border-t border-glass-border px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {locale === "zh-Hant" ? "工作流程" : "Workflow"}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.workflow.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="glass-panel h-full rounded-2xl p-6">
                  <p className="text-lg font-semibold text-text-primary">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ios"
        className="border-t border-glass-border px-4 py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal className="order-2 mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:order-1 lg:max-w-none lg:justify-self-start">
            <div className="rounded-[1.35rem] bg-accent-muted p-1.5 ring-1 ring-glass-border">
              <div className="overflow-hidden rounded-[calc(1.35rem-0.375rem)] border border-glass-border bg-surface shadow-[0_20px_50px_var(--shadow-deep)]">
                <Image
                  src="/assets/sparks-ios-hero.png"
                  alt={c.iosHeroAlt}
                  width={1024}
                  height={682}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 420px"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                iOS
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.08] tracking-tight text-text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.06]">
                {c.iosHeroTitle}
                <span className="block text-accent">{c.iosHeroTitleAccent}</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
                {c.iosHeroSub}
              </p>
              <a
                href="#"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-background transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                {c.iosCaptureCta}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-xs transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  ↗
                </span>
              </a>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {c.iosFeatures.map((f) => (
                  <li
                    key={f}
                    className="rounded-xl border border-glass-border bg-surface/60 px-4 py-3 text-sm text-text-secondary"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-glass-border px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="glass-panel-elevated rounded-[1.5rem] p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                macOS
              </p>
              <h2 className="mt-2 text-xl font-semibold">{c.macTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {c.macBody}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                {c.macFeatures.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-glass-border px-4 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold">{c.syncTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
            {c.syncBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/sparks/support/"
              className="inline-flex rounded-full border border-glass-border px-5 py-2.5 text-sm text-text-primary transition hover:bg-surface active:scale-[0.98]"
            >
              {c.faqTeaser}
            </Link>
            <Link
              href="/sparks/privacy/"
              className="inline-flex rounded-full border border-glass-border px-5 py-2.5 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary active:scale-[0.98]"
            >
              {locale === "zh-Hant" ? "私隱政策" : "Privacy Policy"}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
