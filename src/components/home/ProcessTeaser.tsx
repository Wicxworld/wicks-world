import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/content/process";

export function ProcessTeaser() {
  return (
    <Section tone="inset">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="type-label">Process</p>
            <h2 className="type-section mt-4">From conversation to files.</h2>
          </div>
          <ButtonLink href="/process" variant="ghost">
            The full process
          </ButtonLink>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 50}>
                <p className="font-display text-4xl text-ink/20">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {step.summary}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
