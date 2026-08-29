import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { reasons } from "@/content/home";

export function Why() {
  return (
    <Section tone="charcoal">
      <Container>
        <p className="type-label text-paper/50">Why Wick&apos;s World</p>
        <h2 className="type-section mt-4 max-w-2xl text-paper">
          A studio that holds the idea and the picture.
        </h2>
        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <li key={reason.title}>
              <Reveal delay={index * 70}>
                <p className="type-meta text-paper/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight text-paper">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/70">
                  {reason.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
