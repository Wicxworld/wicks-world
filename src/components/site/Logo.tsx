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
        "type-nav text-[0.72rem] tracking-[0.22em] text-ink",
        className,
      )}
      aria-label={`${site.brand}, home`}
    >
      Wick&apos;s World
    </Link>
  );
}
