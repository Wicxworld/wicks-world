import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cta } from "@/content/site";

export function CtaBand({
  title = "Let's build something.",
  body = "A film, a body of stills, a campaign system, a single sitting. Start with what you need.",
  tone = "charcoal",
}: {
  title?: string;
  body?: string;
  tone?: "charcoal" | "paper";
}) {
  const onDark = tone === "charcoal";

  return (
    <Section tone={tone}>
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="type-title">{title}</h2>
          <p className={`type-lede mt-5 ${onDark ? "text-paper/75" : ""}`}>{body}</p>
        </div>
        <ButtonLink href={cta.start.href} variant={onDark ? "onDark" : "primary"}>
          {cta.start.label}
        </ButtonLink>
      </Container>
    </Section>
  );
}
