import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/content/process";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Process",
  description:
    "How Wick's World works: discover, define, create, refine, deliver, and grow — a Lagos creative studio process.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <Section>
        <Container>
          <PageIntro
            kicker="Process"
            title="How a job moves through the studio."
            lede="Six stages. Estimates come from a conversation, not a public rate card. If the idea is not clear in Define, production will not save it."
          />
          <ol className="mt-16 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="grid gap-6 py-12 lg:grid-cols-12 lg:items-start"
              >
                <p className="type-meta lg:col-span-2">{step.number}</p>
                <div className="lg:col-span-4">
                  <h2 className="type-section">{step.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {step.summary}
                  </p>
                </div>
                <p className="type-body max-w-xl text-mist lg:col-span-6">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <CtaBand
        title="Start with a conversation."
        body="Tell us what the work is for. We will tell you if we are the right studio, and what the next step would actually be."
      />
    </>
  );
}
