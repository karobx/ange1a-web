"use client";

import Image from "next/image";
import Link from "next/link";
import { copy, type Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

const purple = "#4A3D72";
const gold = "#B8954A";
const ink = "#141018";
const muted = "#5C5368";
const hint = "#8A8294";
const border = "rgba(74, 61, 114, 0.1)";

export function LuminaLanding({ locale }: { locale: Locale }) {
  const c = copy.lumina[locale];

  return (
    <>
      <section className="px-4 pb-20 pt-28 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <div className="max-w-xl">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: gold }}
              >
                {c.eyebrow}
              </p>
              <h1
                className="font-display mt-5 text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.02em] md:text-6xl lg:text-[4.25rem]"
                style={{ color: ink }}
              >
                {c.heroTitle}
                <span className="block" style={{ color: purple }}>
                  {c.heroTitleAccent}
                </span>
              </h1>
              <p
                className="mt-6 max-w-md text-base leading-[1.75]"
                style={{ color: muted }}
              >
                {c.heroSub}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(74,61,114,0.22)] transition duration-300 hover:shadow-[0_16px_36px_rgba(74,61,114,0.28)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ background: `linear-gradient(135deg, ${purple}, #2E2548)` }}
                >
                  {c.ctaPrimary}
                </a>
                <Link
                  href="/lumina/marketing/"
                  className="group inline-flex items-center gap-2 text-sm font-medium underline decoration-[rgba(74,61,114,0.25)] underline-offset-[5px] transition duration-300 hover:decoration-[rgba(74,61,114,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ color: ink }}
                >
                  {c.ctaMarketing}
                  <span
                    aria-hidden
                    className="transition duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
          >
            <div className="relative flex items-end justify-center gap-3 md:gap-5">
              <div
                className="glass-panel relative z-10 w-[42%] -rotate-6 rounded-[1.6rem] p-2 transition duration-500 hover:-rotate-3"
                style={{ borderColor: border }}
              >
                <Image
                  src="/assets/lumina-bazi.png"
                  alt={
                    locale === "zh-Hant"
                      ? "晶靈 Lumina 命盤畫面"
                      : "Lumina Bazi chart screen"
                  }
                  width={390}
                  height={844}
                  className="w-full rounded-[1.35rem]"
                  priority
                />
              </div>
              <div
                className="glass-panel relative z-20 w-[48%] rotate-3 rounded-[1.6rem] p-2 shadow-[0_28px_60px_rgba(74,61,114,0.14)] transition duration-500 hover:rotate-1"
                style={{ borderColor: border }}
              >
                <Image
                  src="/assets/lumina-crystals.png"
                  alt={
                    locale === "zh-Hant"
                      ? "晶靈 Lumina 水晶收藏畫面"
                      : "Lumina crystal collection screen"
                  }
                  width={390}
                  height={844}
                  className="w-full rounded-[1.35rem]"
                  priority
                />
              </div>
              <div className="absolute -right-2 top-0 z-30 hidden sm:block">
                <Image
                  src="/assets/lumina-logo.png"
                  alt={c.logoAlt}
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-[1.1rem] shadow-[0_16px_40px_rgba(74,61,114,0.18)] md:h-24 md:w-24"
                />
              </div>
            </div>
            <p
              className="mt-6 text-center text-sm leading-relaxed"
              style={{ color: hint }}
            >
              {c.heroVisualCaption}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="workflow"
        className="border-t px-4 py-20 md:py-28"
        style={{ borderColor: border }}
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                className="font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl"
                style={{ color: ink }}
              >
                {c.workflowTitle}
              </h2>
              <p
                className="mt-4 max-w-lg text-base leading-[1.75]"
                style={{ color: muted }}
              >
                {c.workflowSub}
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {c.workflow.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div
                  className={`glass-panel h-full rounded-2xl p-7 md:p-8 ${
                    i % 2 === 1 ? "md:translate-y-6" : ""
                  }`}
                  style={{ borderColor: border }}
                >
                  <p
                    className="font-mono text-xs tabular-nums"
                    style={{ color: gold }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    className="mt-4 font-display text-2xl font-semibold"
                    style={{ color: ink }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="mt-3 max-w-sm text-sm leading-[1.7]"
                    style={{ color: muted }}
                  >
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-t px-4 py-20 md:py-28"
        style={{ borderColor: border }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
            <Reveal>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: gold }}
              >
                {c.featuresEyebrow}
              </p>
              <h2
                className="font-display mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-[2.6rem]"
                style={{ color: ink }}
              >
                {c.featuresTitle}
              </h2>
              <p
                className="mt-5 max-w-md text-base leading-[1.75]"
                style={{ color: muted }}
              >
                {c.featuresBody}
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 0.05}>
                  <div
                    className="glass-panel h-full rounded-2xl p-6"
                    style={{ borderColor: border }}
                  >
                    <h3
                      className="text-[15px] font-semibold"
                      style={{ color: ink }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="mt-2.5 text-sm leading-[1.7]"
                      style={{ color: muted }}
                    >
                      {feature.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t px-4 py-20 md:py-24"
        style={{ borderColor: border }}
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div
              className="glass-panel h-full rounded-2xl p-7 md:p-8"
              style={{ borderColor: border }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: gold }}
              >
                {locale === "zh-Hant" ? "設計" : "Design"}
              </p>
              <h2
                className="font-display mt-4 text-2xl font-semibold"
                style={{ color: ink }}
              >
                {c.designTitle}
              </h2>
              <p
                className="mt-4 text-sm leading-[1.7]"
                style={{ color: muted }}
              >
                {c.designBody}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="product-intro"
        className="border-t px-4 py-20 md:py-28"
        style={{ borderColor: border }}
      >
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/lumina-logo.png"
                alt={c.logoAlt}
                width={120}
                height={120}
                className="h-24 w-24 rounded-[1.25rem] shadow-[0_16px_40px_rgba(74,61,114,0.16)]"
              />
              <p
                className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: gold }}
              >
                {c.productIntroEyebrow}
              </p>
              <h2
                className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
                style={{ color: ink }}
              >
                {c.productIntroTitle}
              </h2>
              <p
                className="mt-2 text-lg font-medium"
                style={{ color: purple }}
              >
                {c.productIntroTagline}
              </p>
            </div>
            <div className="mt-10 space-y-5 text-base leading-[1.8]" style={{ color: muted }}>
              {c.productIntroParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <p
              className="mt-8 text-center font-mono text-xs tracking-wide"
              style={{ color: hint }}
            >
              {c.productIntroStack}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="border-t px-4 py-16 md:py-20"
        style={{ borderColor: border }}
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            className="font-display text-xl font-semibold md:text-2xl"
            style={{ color: ink }}
          >
            {c.supportTitle}
          </h2>
          <p
            className="mt-3 text-sm leading-relaxed md:text-base"
            style={{ color: muted }}
          >
            {c.supportBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/lumina/support/"
              className="inline-flex rounded-full border bg-white/50 px-5 py-2.5 text-sm font-medium transition duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                color: ink,
                borderColor: border,
              }}
            >
              {c.faqTeaser}
            </Link>
            <Link
              href="/lumina/marketing/"
              className="inline-flex rounded-full border bg-white/50 px-5 py-2.5 text-sm font-medium transition duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                color: muted,
                borderColor: border,
              }}
            >
              {c.ctaMarketing}
            </Link>
          </div>
        </Reveal>
      </section>

      <section
        className="border-t px-4 py-16 md:py-20"
        style={{ borderColor: border }}
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm" style={{ color: muted }}>
            {c.statusNote}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex rounded-full border bg-white/50 px-5 py-2.5 text-sm font-medium transition duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                color: ink,
                borderColor: border,
              }}
            >
              {c.backToHub}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
