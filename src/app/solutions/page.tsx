import Link from "next/link";
import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { solutions } from "@/content/solutions";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Wick's World works with brands, businesses, artists, organisations, and individuals — visual production from Lagos.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <Section>
        <Container>
          <PageIntro
            kicker="Solutions"
            title="Who the work is for."
            lede="Same studio, different briefs. We do not invent a department for each audience. We listen, then produce."
          />
          <ul className="mt-16 grid gap-px bg-[var(--rule)] sm:grid-cols-2">
            {solutions.map((solution) => (
              <li key={solution.slug} className="bg-paper">
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="flex h-full flex-col justify-between p-8 no-underline sm:min-h-[18rem] sm:p-10"
                >
                  <p className="type-label">{solution.audience}</p>
                  <div className="mt-10">
                    <h2 className="type-section">{solution.title}</h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
                      {solution.summary}
                    </p>
                    <p className="type-nav mt-6 text-gold">Read</p>
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
