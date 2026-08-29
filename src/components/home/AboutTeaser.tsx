import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { aboutShort } from "@/content/home";

export function AboutTeaser() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <p className="type-label">{aboutShort.kicker}</p>
          <h2 className="type-section mt-4">{aboutShort.title}</h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          {aboutShort.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4 text-[1.02rem] leading-relaxed text-ink/80">
              {paragraph}
            </p>
          ))}
          <div className="mt-8">
            <ButtonLink href="/about" variant="ghost">
              About the studio
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
