import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "onDark" | "ghostOnDark";

const variants: Record<Variant, string> = {
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
  onDark: "btn btn-on-dark",
  ghostOnDark: "btn btn-ghost-on-dark",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(variants[variant], className)}>
      {children}
    </Link>
  );
}
