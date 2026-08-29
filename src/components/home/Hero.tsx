import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cta } from "@/content/site";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--rule)] bg-charcoal text-paper">
      <div className="pointer-events-none absolute inset-0 grain field-charcoal opacity-80" />
      <Container className="relative py-24 sm:py-32 lg:py-40">
        <p className="type-label text-paper/55">Lagos · Creative studio</p>
        <h1 className="type-hero mt-8 max-w-5xl text-paper">
          {hero.line.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
          {hero.subcopy}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={cta.start.href} variant="onDark">
            {cta.start.label}
          </ButtonLink>
          <ButtonLink href={cta.explore.href} variant="ghostOnDark">
            {cta.explore.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
