"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/site/Logo";
import { cta, navigation } from "@/content/site";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const titleId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="type-nav inline-flex min-h-11 items-center px-1 text-ink"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="flex items-center justify-between border-b border-[var(--rule)] px-5 py-3">
            <Logo onClick={() => setOpen(false)} />
            <button
              type="button"
              className="type-nav min-h-11 px-1"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col justify-between px-5 py-8"
            aria-label="Mobile"
          >
            <div>
              <p id={titleId} className="type-label mb-8">
                Menu
              </p>
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const active =
                    pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-2 font-display text-4xl tracking-tight",
                          active ? "text-ink" : "text-ink/55",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link href={cta.start.href} className="btn btn-primary w-full">
              {cta.start.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
