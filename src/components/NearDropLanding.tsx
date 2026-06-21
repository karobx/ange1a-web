"use client";

import Image from "next/image";
import Link from "next/link";
import { copy, type Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

export function NearDropLanding({ locale }: { locale: Locale }) {
  const c = copy.neardrop[locale];

  return (
    <>
      <section className="px-4 pb-16 pt-28 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/neardrop-logo.png"
                    alt={c.logoAlt}
                    width={72}
                    height={72}
                    className="h-[4.5rem] w-[4.5rem] rounded-[1.1rem] shadow-[0_12px_40px_var(--shadow-tint)]"
                    priority
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {c.eyebrow}
                    </p>
                    <h1 className="font-display mt-1 text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
                      NearDrop
                    </h1>
                  </div>
                </div>
                <p className="font-display mt-8 text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary md:text-[2.5rem]">
                  {c.heroTitle}
                  <span className="block text-accent">{c.heroTitleAccent}</span>
                </p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
                  {c.heroSub}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-medium text-text-secondary">
                    {c.comingSoonLabel}
                  </span>
                  <Link
                    href="/neardrop/marketing/"
                    className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-text-primary"
                  >
                    {locale === "zh-Hant" ? "Marketing" : "Marketing"}
                  </Link>
                  <Link
                    href="/neardrop/privacy/"
                    className="rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
                  >
                    {locale === "zh-Hant" ? "私隱政策" : "Privacy Policy"}
                  </Link>
                </div>
              </div>

              <Reveal delay={0.08} className="w-full max-w-2xl md:max-w-[52%]">
                <figure className="glass-panel-elevated overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={c.sections[0].src}
                    alt={c.sections[0].alt}
                    width={1920}
                    height={1080}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 52vw"
                    priority
                  />
                </figure>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-glass-border px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {c.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.05}>
                <div className="glass-panel h-full rounded-2xl p-6 md:p-7">
                  <h2 className="text-[15px] font-semibold text-text-primary">
                    {feature.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-glass-border px-4 py-12 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-10">
          {c.sections.slice(1).map((section, i) => (
            <Reveal key={section.id} delay={i * 0.04}>
              <figure className="glass-panel-elevated overflow-hidden rounded-[1.75rem]">
                <Image
                  src={section.src}
                  alt={section.alt}
                  width={1920}
                  height={1080}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-glass-border px-4 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-text-secondary">{c.statusNote}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {c.backToHub}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
