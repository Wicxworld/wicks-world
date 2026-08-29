import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cta } from "@/content/site";
import { finalCta } from "@/content/home";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-paper">
      <div className="pointer-events-none absolute inset-0 grain field-charcoal opacity-70" />
      <Container className="relative py-24 sm:py-32">
        <p className="type-label text-paper/50">Start</p>
        <h2 className="type-hero mt-6 max-w-4xl text-paper">{finalCta.title}</h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75">
          {finalCta.body}
        </p>
        <div className="mt-10">
          <ButtonLink href={cta.start.href} variant="onDark">
            {cta.start.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
