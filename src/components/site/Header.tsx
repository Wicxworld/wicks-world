"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/site/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { cta, navigation } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "type-nav transition-colors hover:text-ink",
                  active ? "text-ink" : "text-mist",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={cta.start.href}
            className="type-nav hidden text-gold sm:inline"
          >
            {cta.start.label}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
