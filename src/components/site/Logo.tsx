import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2.5 text-ink",
        className,
      )}
      aria-label={`${site.brand}, home`}
    >
      <Image
        src="/brand/wicks-world-logo.png"
        alt=""
        width={290}
        height={297}
        className="h-10 w-auto object-contain sm:h-11"
        priority
      />
      <span className="type-nav hidden text-[0.72rem] tracking-[0.22em] sm:inline">
        Wick&apos;s World
      </span>
    </Link>
  );
}
