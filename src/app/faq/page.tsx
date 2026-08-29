import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/content/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Practical questions about working with Wick's World — projects, process, estimates, and the studio in Lagos.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Section>
        <Container>
          <PageIntro
            kicker="FAQ"
            title="Questions we are actually asked."
            lede="Short answers. If yours is not here, write through Contact — we will tell you if we are a fit."
          />
          <div className="mt-16 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-8">
                <summary className="cursor-pointer list-none font-display text-2xl tracking-tight marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline justify-between gap-6">
                    <span>{item.question}</span>
                    <span className="type-nav text-mist group-open:text-gold">
                      Open
                    </span>
                  </span>
                </summary>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mist">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
