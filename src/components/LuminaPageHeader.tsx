import Image from "next/image";
import Link from "next/link";

type LuminaPageHeaderProps = {
  title: string;
  subtitle?: string;
  logoAlt: string;
};

export function LuminaPageHeader({
  title,
  subtitle,
  logoAlt,
}: LuminaPageHeaderProps) {
  return (
    <header className="mb-12 flex flex-col items-center text-center sm:mb-14">
      <Image
        src="/assets/lumina-logo.png"
        alt={logoAlt}
        width={112}
        height={112}
        className="h-24 w-24 rounded-[1.25rem] shadow-[0_16px_40px_rgba(74,61,114,0.16)]"
        priority
      />
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B8954A]">
        晶靈 Lumina
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[#141018] md:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 max-w-lg text-base leading-relaxed text-[#5C5368]">
          {subtitle}
        </p>
      ) : null}
      <p className="mt-4 text-sm text-[#5C5368]">
        Email:{" "}
        <Link href="mailto:info@ange1a.com" className="text-[#4A3D72] underline">
          info@ange1a.com
        </Link>
      </p>
    </header>
  );
}
