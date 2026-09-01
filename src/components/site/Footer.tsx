import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import {
  footerNav,
  legalNav,
  site,
} from "@/content/site";

export function Footer() {
  const year = 2026;
  const socials = site.contact.socials;
  const email = site.contact.email;

  return (
    <footer className="border-t border-[var(--rule)] bg-charcoal text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/wicks-world-logo.png"
              alt=""
              width={290}
              height={297}
              className="h-12 w-auto object-contain"
            />
            <p className="type-nav tracking-[0.22em] text-paper">Wick&apos;s World</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            {site.legalName}
            <br />
            {site.location.line}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
            Creative production, commercial content, photography, cinematography,
            editing, motion, and direction.
          </p>
          {email ? (
            <p className="mt-6">
              <a className="text-sm text-paper underline" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          ) : null}
          {socials.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-4">
              {socials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="type-nav text-paper/70 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="type-label text-paper/50">Studio</p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/80 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="type-label text-paper/50">Services</p>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-paper/80 hover:text-paper"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="type-label text-paper/50">Legal</p>
            <ul className="mt-4 space-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/80 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.legalName}. {site.brand}.
          </p>
          <p>{site.location.line}</p>
        </div>
      </div>
    </footer>
  );
}
