"use client";

import Image from "next/image";
import Link from "next/link";
import { copy, MEMORYSHOT_APP_STORE_URL, type Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

function AppStoreButton({
  eyebrow,
  label,
  className = "",
}: {
  eyebrow: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={MEMORYSHOT_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full bg-[#332b21] px-5 py-3 text-sm font-medium text-[#fcfaf4] shadow-[0_12px_28px_rgba(51,43,33,0.18)] transition duration-300 hover:bg-[#3d3428] hover:shadow-[0_16px_36px_rgba(51,43,33,0.22)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a3d] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 fill-current"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-normal opacity-75">{eyebrow}</span>
        <span>{label}</span>
      </span>
    </a>
  );
}

export function MemoryShotLanding({ locale }: { locale: Locale }) {
  const c = copy.memoryshot[locale];

  return (
    <>
      <section className="px-4 pb-20 pt-28 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b58a3d]">
                {c.eyebrow}
              </p>
              <h1 className="font-display mt-5 text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#332b21] md:text-6xl lg:text-[4.25rem]">
                {c.heroTitle}
                <span className="block text-[#b58a3d]">{c.heroTitleAccent}</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-[1.75] text-[#756b5a]">
                {c.heroSub}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <AppStoreButton
                  eyebrow={c.appStoreEyebrow}
                  label={c.ctaAppStore}
                />
                <a
                  href="#product-intro"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#332b21] underline decoration-[#b58a3d]/40 underline-offset-[5px] transition duration-300 hover:decoration-[#b58a3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b58a3d]"
                >
                  {locale === "zh-Hant" ? "閱讀產品說明" : "Read product overview"}
                  <span
                    aria-hidden
                    className="transition duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
            <div className="relative flex items-end justify-center gap-3 md:gap-5">
              <div className="glass-panel relative z-10 w-[42%] -rotate-6 rounded-[1.6rem] p-2 transition duration-500 hover:-rotate-3">
                <Image
                  src="/assets/memoryshot-memories.png"
                  alt={
                    locale === "zh-Hant"
                      ? "MemoryShot 記憶列表畫面"
                      : "MemoryShot memories screen"
                  }
                  width={390}
                  height={844}
                  className="w-full rounded-[1.35rem]"
                  priority
                />
              </div>
              <div className="glass-panel relative z-20 w-[48%] rotate-3 rounded-[1.6rem] p-2 shadow-[0_28px_60px_rgba(51,43,33,0.16)] transition duration-500 hover:rotate-1">
                <Image
                  src="/assets/memoryshot-cleanup.png"
                  alt={
                    locale === "zh-Hant"
                      ? "MemoryShot 清理畫面"
                      : "MemoryShot cleanup screen"
                  }
                  width={390}
                  height={844}
                  className="w-full rounded-[1.35rem]"
                  priority
                />
              </div>
              <div className="absolute -right-2 top-0 z-30 hidden sm:block">
                <Image
                  src="/assets/memoryshot-logo.png"
                  alt={c.logoAlt}
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-[1.1rem] shadow-[0_16px_40px_rgba(51,43,33,0.14)] md:h-24 md:w-24"
                />
              </div>
            </div>
            <p className="mt-6 text-center text-sm leading-relaxed text-[#a39684]">
              {c.heroVisualCaption}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="workflow"
        className="border-t border-[rgba(51,43,33,0.08)] px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-[#332b21] md:text-4xl">
                {c.workflowTitle}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-[1.75] text-[#756b5a]">
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
                >
                  <p className="font-mono text-xs tabular-nums text-[#b58a3d]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-display text-2xl font-semibold text-[#332b21]">
                    {step.title}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-[1.7] text-[#756b5a]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="memories"
        className="border-t border-[rgba(51,43,33,0.08)] px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b58a3d]">
                {c.memoriesEyebrow}
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#332b21] md:text-[2.6rem]">
                {c.memoriesTitle}
              </h2>
              <p className="mt-5 max-w-md text-base leading-[1.75] text-[#756b5a]">
                {c.memoriesBody}
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.memoriesFeatures.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 0.05}>
                  <div className="glass-panel h-full rounded-2xl p-6">
                    <h3 className="text-[15px] font-semibold text-[#332b21]">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.7] text-[#756b5a]">
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
        id="cleanup"
        className="border-t border-[rgba(51,43,33,0.08)] px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="glass-panel-elevated overflow-hidden rounded-[1.75rem] p-8 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:items-center md:gap-10 md:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b58a3d]">
                  {c.cleanupEyebrow}
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#332b21]">
                  {c.cleanupTitle}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-[1.75] text-[#756b5a]">
                  {c.cleanupBody}
                </p>
                <ul className="mt-7 space-y-3">
                  {c.cleanupFeatures.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#756b5a]"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b58a3d]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="rounded-[1.5rem] bg-[#b58a3d]/[0.06] p-2 ring-1 ring-[#b58a3d]/15">
                  <Image
                    src="/assets/memoryshot-cleanup.png"
                    alt={
                      locale === "zh-Hant"
                        ? "MemoryShot 清理介面預覽"
                        : "MemoryShot cleanup interface preview"
                    }
                    width={390}
                    height={844}
                    className="w-full rounded-[1.25rem]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[rgba(51,43,33,0.08)] px-4 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass-panel h-full rounded-2xl p-7 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b58a3d]">
                Widget
              </p>
              <h2 className="font-display mt-4 text-2xl font-semibold text-[#332b21]">
                {c.widgetTitle}
              </h2>
              <p className="mt-4 text-sm leading-[1.7] text-[#756b5a]">
                {c.widgetBody}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="glass-panel h-full rounded-2xl p-7 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b58a3d]">
                {locale === "zh-Hant" ? "設計" : "Design"}
              </p>
              <h2 className="font-display mt-4 text-2xl font-semibold text-[#332b21]">
                {c.designTitle}
              </h2>
              <p className="mt-4 text-sm leading-[1.7] text-[#756b5a]">
                {c.designBody}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="product-intro"
        className="border-t border-[rgba(51,43,33,0.08)] px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <figure className="glass-panel-elevated mx-auto max-w-3xl overflow-hidden rounded-[1.75rem]">
              <Image
                src="/assets/memoryshot-intro.png"
                alt={`${c.productIntroTitle} — ${c.productIntroTagline}. ${c.productIntroParagraphs.join(" ")}`}
                width={1536}
                height={1024}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </figure>
            <figcaption className="sr-only">
              <p>{c.productIntroEyebrow}</p>
              <h2>{c.productIntroTitle}</h2>
              <p>{c.productIntroTagline}</p>
              {c.productIntroParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              <p>{c.productIntroStack}</p>
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[rgba(51,43,33,0.08)] px-4 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-xl font-semibold text-[#332b21] md:text-2xl">
            {c.supportTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#756b5a] md:text-base">
            {c.supportBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/memoryshot/support/"
              className="inline-flex rounded-full border border-[rgba(51,43,33,0.12)] bg-white/50 px-5 py-2.5 text-sm font-medium text-[#332b21] transition duration-300 hover:border-[#b58a3d]/35 hover:bg-white/80 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a3d]"
            >
              {c.faqTeaser}
            </Link>
            <Link
              href="/memoryshot/privacy/"
              className="inline-flex rounded-full border border-[rgba(51,43,33,0.12)] bg-white/50 px-5 py-2.5 text-sm font-medium text-[#756b5a] transition duration-300 hover:border-[#b58a3d]/35 hover:bg-white/80 hover:text-[#332b21] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a3d]"
            >
              {locale === "zh-Hant" ? "私隱政策" : "Privacy Policy"}
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[rgba(51,43,33,0.08)] px-4 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-[#756b5a]">{c.statusNote}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AppStoreButton eyebrow={c.appStoreEyebrow} label={c.ctaAppStore} />
            <Link
              href="/"
              className="inline-flex rounded-full border border-[rgba(51,43,33,0.12)] bg-white/50 px-5 py-2.5 text-sm font-medium text-[#332b21] transition duration-300 hover:border-[#b58a3d]/35 hover:bg-white/80 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a3d]"
            >
              {c.backToHub}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
