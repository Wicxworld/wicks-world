import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/site/CtaBand";
import { Container } from "@/components/ui/Container";
import { PlaceholderFrame } from "@/components/ui/PlaceholderFrame";
import { Section } from "@/components/ui/Section";
import { getSolution, solutions } from "@/content/solutions";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) {
    return buildMetadata({ title: "Not found", noIndex: true, path: "/solutions" });
  }
  return buildMetadata({
    title: solution.seoTitle,
    description: solution.seoDescription,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const others = solutions.filter((item) => item.slug !== solution.slug);

  return (
    <>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="type-label">For {solution.audience}</p>
            <h1 className="type-title mt-5">{solution.title}</h1>
            <p className="type-lede mt-6">{solution.summary}</p>
            <p className="type-body mt-8 max-w-2xl text-mist">
              {solution.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderFrame
              accent="earth"
              label={solution.title}
              src={solution.image}
              caption="Editorial photograph illustrating this audience."
              ratio="portrait"
            />
          </div>
        </Container>
      </Section>

      <Section tone="inset">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-label">We work on</p>
            <ul className="mt-6 space-y-4">
              {solution.weWorkOn.map((item) => (
                <li
                  key={item}
                  className="border-t border-[var(--rule)] pt-4 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="type-label">How we work</p>
            <p className="type-section mt-5">{solution.howWeWork}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="type-label">Other audiences</p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/solutions/${item.slug}`} className="type-nav">
                  {item.title}
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
