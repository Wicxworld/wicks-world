import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pillars } from "@/content/home";

export function Pillars() {
  return (
    <Section id="what-we-do">
      <Container>
        <div className="max-w-2xl">
          <p className="type-label">What we do</p>
          <h2 className="type-section mt-4">
            Visual systems, content, productions.
          </h2>
          <p className="type-lede mt-5">
            Four connected practices. Not departments that hand work over a wall.
          </p>
        </div>
        <ol className="mt-14 grid gap-px bg-[var(--rule)] sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <li key={pillar.title} className="bg-[var(--bg)] p-8 sm:p-10">
              <Reveal delay={index * 80}>
                <p className="type-meta">{pillar.number}</p>
                <h3 className="mt-4 font-display text-3xl tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-ink/75">
                  {pillar.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
