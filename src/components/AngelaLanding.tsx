"use client";

import { useState } from "react";
import { Tabs } from "@heroui/react";
import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

type AngelaCopy = {
  eyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroSub: string;
  primaryCta: string;
  secondaryCta: string;
  labTitle: string;
  labSubtitle: string;
  labHint: string;
  labModes: {
    id: string;
    label: string;
    title: string;
    body: string;
    note: string;
  }[];
  storyEyebrow: string;
  storyTitle: string;
  storyParagraphs: string[];
  pillarsTitle: string;
  pillarsSub: string;
  pillars: {
    title: string;
    body: string;
  }[];
  momentsTitle: string;
  moments: string[];
  closingTitle: string;
  closingBody: string;
  closingCta: string;
};

const copy: Record<Locale, AngelaCopy> = {
  "zh-Hant": {
    eyebrow: "Angela · 個人成長陪伴系統",
    heroTitle: "為每一個正在努力前行的人，",
    heroAccent: "留下一盞溫柔的燈。",
    heroSub:
      "Angela 由 Queenmy Wong 與 Caroline Lee 共同創辦。它不是生產力工具，也不是 AI 助手，而是一個在你迷惘、停滯或疲憊時，能夠安靜陪伴你看清下一步的成長項目。",
    primaryCta: "認識 Angela",
    secondaryCta: "查看互動示意",
    labTitle: "Angela Lab",
    labSubtitle: "一個不催促、不評判，只協助你重新看清狀態的互動示意。",
    labHint: "點選不同時刻，感受 Angela 會如何陪伴你。",
    labModes: [
      {
        id: "lost",
        label: "迷惘時",
        title: "先不用急著證明自己。",
        body: "也許你需要的不是更多壓力，而是一個更清晰、更小的下一步。",
        note: "Angela 會保持語氣溫和，協助你把混亂收回可前進的範圍。",
      },
      {
        id: "tired",
        label: "疲憊時",
        title: "休息不是倒退。",
        body: "當你已經走得太久，真正的支持不是再推你一把，而是提醒你可以先穩住自己。",
        note: "Angela 重視可持續的成長，而不是短暫的硬撐。",
      },
      {
        id: "ready",
        label: "準備好時",
        title: "你可以慢慢回到節奏裡。",
        body: "當力量回來，Angela 會幫你看見可以開始的地方，而不是要求你立即追上所有進度。",
        note: "每一次重新開始，都可以是一種成長。",
      },
    ],
    storyEyebrow: "創辦故事",
    storyTitle: "Angela 的源頭，是一份真實的陪伴。",
    storyParagraphs: [
      "Angela 並不是從冷冰冰的產品概念開始，而是源於 Queenmy 對身邊朋友的關心。當她看見有人在人生與工作中失去方向、感到無助時，她選擇一步一步站在對方身邊。",
      "她沒有用壓力催促，也沒有急於替對方下結論；她做的是陪伴、理解、等待，並在合適的時刻給出一點點清晰。",
      "對 Caroline 而言，Queenmy 就像那個一直在身邊的 Angela：在混亂中帶來穩定，在低落時給予支持，在需要前進時提供溫柔而堅定的力量。Angela 因此承載著一個願望：讓更多人也能擁有這樣的陪伴。",
    ],
    pillarsTitle: "Angela 相信的事",
    pillarsSub:
      "Angela 不以壓力推動人，也不以表現定義人。它關心的是：一個人如何以更溫和、更可持續的方式成長。",
    pillars: [
      {
        title: "不是更快，而是更清楚",
        body: "Angela 希望協助你分辨自己需要繼續、暫停，還是換一條更合適的路。",
      },
      {
        title: "不是監控，而是陪伴",
        body: "它不把你變成數字，也不把停滯視為失敗；它尊重每個人成長的節奏。",
      },
      {
        title: "不是打擾，而是適時出現",
        body: "Angela 的理想狀態，是在你真正需要支持時出現，在你需要空間時保持安靜。",
      },
    ],
    momentsTitle: "Angela 可以陪伴的時刻",
    moments: [
      "當你做了很多，卻仍然覺得沒有前進。",
      "當你不知道自己應該堅持，還是應該休息。",
      "當你以為自己不夠好，其實只是走在不適合的路上。",
      "當你需要有人提醒你：你不是失敗，你只是需要下一個更清楚的步驟。",
    ],
    closingTitle: "每個人都值得在迷惘時，被溫柔地接住。",
    closingBody:
      "Angela 是 Queenmy Wong 與 Caroline Lee 共同建立的個人成長願景。它從友誼出發，走向一個更長遠的目標：讓支持不再只依賴偶然出現的人，而能成為更多人日常裡可靠的一部分。",
    closingCta: "開始認識 Angela",
  },
  en: {
    eyebrow: "Angela · Personal growth companion",
    heroTitle: "A quiet light",
    heroAccent: "for people finding their way forward.",
    heroSub:
      "Co-founded by Queenmy Wong and Caroline Lee, Angela is not a productivity tool and not an AI assistant. It is a personal growth project built to offer calm, timely support when someone feels lost, stuck, or quietly exhausted.",
    primaryCta: "Meet Angela",
    secondaryCta: "Explore the interaction",
    labTitle: "Angela Lab",
    labSubtitle:
      "An interactive glimpse of a companion that does not rush, judge, or over-explain.",
    labHint: "Choose a moment to see how Angela would show up.",
    labModes: [
      {
        id: "lost",
        label: "When lost",
        title: "You do not have to prove yourself right now.",
        body: "What you may need is not more pressure, but a smaller and clearer next step.",
        note: "Angela keeps the tone gentle and brings uncertainty back into motion.",
      },
      {
        id: "tired",
        label: "When tired",
        title: "Rest is not falling behind.",
        body: "When you have been pushing for too long, support should help you steady yourself first.",
        note: "Angela is built around sustainable growth, not temporary force.",
      },
      {
        id: "ready",
        label: "When ready",
        title: "You can return to your rhythm slowly.",
        body: "When energy comes back, Angela helps you find where to begin, without asking you to catch up all at once.",
        note: "Every gentle restart can still be growth.",
      },
    ],
    storyEyebrow: "Founder story",
    storyTitle: "Angela began with a real act of care.",
    storyParagraphs: [
      "Angela did not begin as a cold product concept. It began with the way Queenmy cared for people around her when they felt directionless, overwhelmed, or unsure of how to continue.",
      "She did not push with pressure or rush to define the answer. She stayed, understood, waited, and offered a little clarity at the right moment.",
      "For Caroline, Queenmy represents the kind of presence Angela hopes to become: steady in confusion, supportive in low moments, and gently strong when it is time to move forward. Angela carries that wish forward, so more people can feel held through the process of becoming.",
    ],
    pillarsTitle: "What Angela Believes",
    pillarsSub:
      "Angela does not push people through pressure or define them by output. It cares about how a person can grow with more clarity, gentleness, and continuity.",
    pillars: [
      {
        title: "Not faster, but clearer",
        body: "Angela helps you sense whether to continue, pause, or choose a better path.",
      },
      {
        title: "Not monitoring, but companionship",
        body: "It does not reduce you to numbers or treat stuck moments as failure.",
      },
      {
        title: "Not interruption, but timely presence",
        body: "Angela should appear when support matters, and stay quiet when space matters.",
      },
    ],
    momentsTitle: "Moments Angela Is Made For",
    moments: [
      "When you have done a lot, yet still feel no closer.",
      "When you cannot tell whether to keep going or rest.",
      "When you think you are not enough, but the path may simply be wrong.",
      "When you need a reminder that you are not failing; you may just need a clearer next step.",
    ],
    closingTitle: "Everyone deserves to feel held when the path becomes unclear.",
    closingBody:
      "Angela is a personal growth vision co-founded by Queenmy Wong and Caroline Lee. It begins with friendship, and grows toward something larger: making steady, respectful support a more reliable part of everyday life.",
    closingCta: "Begin with Angela",
  },
};

export function AngelaLanding({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const reduce = useReducedMotion();
  const [activeMode, setActiveMode] = useState(c.labModes[0].id);

  return (
    <>
      <section id="top" className="px-4 pb-16 pt-28 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.78fr)] lg:gap-16">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                {c.eyebrow}
              </p>
              <h1 className="font-display mt-5 text-[2.65rem] font-semibold leading-[1.03] tracking-[-0.032em] text-text-primary md:text-6xl lg:text-[4.8rem]">
                {c.heroTitle}
                <span className="block text-accent">{c.heroAccent}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
                {c.heroSub}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#story"
                  className="group inline-flex items-center gap-3 rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {c.primaryCta}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/10 text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    ↘
                  </span>
                </a>
                <a
                  href="#lab"
                  className="inline-flex items-center rounded-full border border-glass-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/40 hover:text-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {c.secondaryCta}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <AngelaLabCard
              copy={c}
              activeMode={activeMode}
              onSelect={setActiveMode}
              reduce={Boolean(reduce)}
            />
          </Reveal>
        </div>
      </section>

      <section id="story" className="border-t border-glass-border px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.86fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                {c.storyEyebrow}
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-[2.75rem]">
                {c.storyTitle}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-5">
            {c.storyParagraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p className="text-base leading-8 text-text-secondary md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-[2.75rem]">
                {c.pillarsTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-text-secondary md:text-lg">
                {c.pillarsSub}
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {c.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <div className="glass-panel h-full rounded-[1.7rem] p-6 md:p-7">
                  <p className="font-display text-2xl font-semibold tracking-tight text-text-primary">
                    {pillar.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-glass-border px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-[2.75rem]">
              {c.momentsTitle}
            </h2>
          </Reveal>
          <div className="grid gap-3">
            {c.moments.map((moment, index) => (
              <Reveal key={moment} delay={index * 0.05}>
                <div className="group flex items-start gap-4 rounded-2xl border border-glass-border bg-surface/70 p-5 transition-colors hover:border-accent/30 hover:bg-surface-elevated">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-muted text-xs font-semibold text-accent">
                    {index + 1}
                  </span>
                  <p className="text-base leading-7 text-text-secondary group-hover:text-text-primary">
                    {moment}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 md:pb-32">
        <Reveal>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-glass-border bg-text-primary p-8 text-background shadow-[0_28px_70px_var(--shadow-deep)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.75rem]">
                  {c.closingTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-background/72 md:text-lg">
                  {c.closingBody}
                </p>
              </div>
              <a
                href="#top"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-background px-5 py-3 text-sm font-semibold text-text-primary transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent hover:text-background active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background lg:justify-self-end"
              >
                {c.closingCta}
                <span>↑</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function AngelaLabCard({
  copy,
  activeMode,
  onSelect,
  reduce,
}: {
  copy: AngelaCopy;
  activeMode: string;
  onSelect: (id: string) => void;
  reduce: boolean;
}) {
  return (
    <div className="glass-panel-elevated relative overflow-hidden rounded-[2rem] p-4">
      <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative rounded-[1.45rem] border border-glass-border bg-background/72 p-5">
        <div className="flex items-center justify-between gap-4 border-b border-glass-border pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              {copy.labTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {copy.labSubtitle}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-text-primary text-lg font-semibold text-background">
            A
          </div>
        </div>

        <Tabs.Root
          selectedKey={activeMode}
          onSelectionChange={(key) => onSelect(String(key))}
          className="mt-5"
        >
          <Tabs.ListContainer className="rounded-2xl bg-surface/80 p-1.5">
            <Tabs.List
              aria-label={copy.labTitle}
              className="grid grid-cols-3 gap-1"
            >
              {copy.labModes.map((mode) => (
                <Tabs.Tab
                  key={mode.id}
                  id={mode.id}
                  className="rounded-xl px-3 py-3 text-center text-sm font-medium text-text-secondary outline-none transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-elevated hover:text-text-primary active:scale-[0.98] data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent/50 data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background data-[selected]:bg-text-primary data-[selected]:text-background data-[selected]:shadow-[0_16px_32px_var(--shadow-tint)]"
                >
                  {mode.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>

          {copy.labModes.map((mode) => (
            <Tabs.Panel key={mode.id} id={mode.id} className="outline-none">
              <motion.div
                key={mode.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 rounded-[1.25rem] border border-glass-border bg-surface-elevated p-5"
              >
                <div className="mb-4 h-1.5 rounded-full bg-accent-muted">
                  <div className="h-full w-1/2 rounded-full bg-accent" />
                </div>
                <p className="font-display text-[1.6rem] font-semibold leading-tight tracking-tight text-text-primary">
                  {mode.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {mode.body}
                </p>
                <p className="mt-5 rounded-2xl bg-accent-muted px-4 py-3 text-sm leading-6 text-text-primary">
                  {mode.note}
                </p>
              </motion.div>
            </Tabs.Panel>
          ))}
        </Tabs.Root>

        <p className="mt-4 text-xs leading-5 text-text-hint">{copy.labHint}</p>
      </div>
    </div>
  );
}
