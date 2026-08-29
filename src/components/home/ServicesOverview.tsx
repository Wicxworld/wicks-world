import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <Section tone="inset">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="type-label">Services</p>
            <h2 className="type-section mt-4">What the studio makes.</h2>
          </div>
          <ButtonLink href="/services" variant="ghost">
            All services
          </ButtonLink>
        </div>
        <ul className="mt-12 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Reveal delay={index * 40}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline"
                >
                  <span className="type-meta sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl tracking-tight sm:col-span-4">
                    {service.title}
                  </span>
                  <span className="text-sm leading-relaxed text-ink/70 sm:col-span-6">
                    {service.summary}
                  </span>
                  <span className="type-nav text-gold sm:col-span-1 sm:text-right">
                    View
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
