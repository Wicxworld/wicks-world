import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PlaceholderFrame } from "@/components/ui/PlaceholderFrame";
import { Section } from "@/components/ui/Section";
import { workStudies } from "@/content/work";

export function SelectedWork() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="type-label">Selected work</p>
            <h2 className="type-section mt-4">Proof, not identity.</h2>
            <p className="type-lede mt-5">
              Capability studies. No named clients. Editorial photographs until
              commissioned work is cleared for the archive.
            </p>
          </div>
          <ButtonLink href="/work" variant="ghost">
            All studies
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-10 lg:grid-cols-3">
          {workStudies.map((study, index) => (
            <li key={study.slug}>
              <Reveal delay={index * 80}>
                <Link href={`/work/${study.slug}`} className="group block">
                  <PlaceholderFrame
                    label={study.title}
                    accent={study.accent}
                    ratio="portrait"
                    src={study.image}
                  />
                  <p className="type-label mt-5">{study.kicker}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight group-hover:text-teal">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {study.summary}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
