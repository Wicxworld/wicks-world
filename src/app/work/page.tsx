import Link from "next/link";
import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { PlaceholderFrame } from "@/components/ui/PlaceholderFrame";
import { Section } from "@/components/ui/Section";
import { workStudies } from "@/content/work";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Capability studies from Wick's World — how the Lagos studio thinks through film language, commercial stills, and campaign systems.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Section>
        <Container>
          <PageIntro
            kicker="Work"
            title="How we think, shown as studies."
            lede="These are capability studies, not client cases. No brands are named. Frames are editorial placeholders until commissioned work is cleared for the archive."
          />
          <ul className="mt-16 grid gap-14 lg:grid-cols-1">
            {workStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="grid gap-8 no-underline lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-7">
                    <PlaceholderFrame
                      accent={study.accent}
                      label={study.title}
                    />
                  </div>
                  <div className="lg:col-span-5">
                    <p className="type-label">{study.kicker}</p>
                    <h2 className="type-section mt-4">{study.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-mist">
                      {study.summary}
                    </p>
                    <p className="type-nav mt-6 text-gold">Open study</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
