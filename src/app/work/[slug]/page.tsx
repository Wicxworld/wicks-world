import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/site/CtaBand";
import { Container } from "@/components/ui/Container";
import { PlaceholderFrame } from "@/components/ui/PlaceholderFrame";
import { Section } from "@/components/ui/Section";
import { getWorkStudy, workStudies } from "@/content/work";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workStudies.map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getWorkStudy(slug);
  if (!study) {
    return buildMetadata({ title: "Not found", noIndex: true, path: "/work" });
  }
  return buildMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    path: `/work/${study.slug}`,
  });
}

export default async function WorkStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getWorkStudy(slug);
  if (!study) notFound();

  const others = workStudies.filter((item) => item.slug !== study.slug);

  return (
    <>
      <Section>
        <Container>
          <p className="type-label">{study.kicker}</p>
          <h1 className="type-title mt-5 max-w-4xl">{study.title}</h1>
          <p className="type-lede mt-6 max-w-2xl">{study.summary}</p>
          <div className="mt-12">
            <PlaceholderFrame
              accent={study.accent}
              label={study.title}
              caption="Editorial placeholder. Not a production still from a named client."
            />
          </div>
        </Container>
      </Section>

      <Section tone="inset">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-label">The challenge</p>
            <p className="type-body mt-5">{study.challenge}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="type-label">The approach</p>
            <p className="type-body mt-5 text-mist">{study.approach}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-label">Execution</p>
            <ol className="mt-6 space-y-4">
              {study.execution.map((item, index) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed">
                  <span className="type-meta w-8 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="type-label">Outcome</p>
            <p className="type-section mt-5">{study.outcome}</p>
            <ul className="mt-8 space-y-3">
              {study.notes.map((note) => (
                <li key={note} className="type-caption">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="inset">
        <Container className="grid gap-8 sm:grid-cols-2">
          <PlaceholderFrame
            accent={study.accent}
            label="Sequence study"
            ratio="square"
          />
          <PlaceholderFrame
            accent="gold"
            label="Finishing note"
            ratio="square"
          />
        </Container>
      </Section>

      {others.length > 0 ? (
        <Section>
          <Container>
            <p className="type-label">Other studies</p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/work/${item.slug}`} className="no-underline">
                    <PlaceholderFrame accent={item.accent} label={item.title} />
                    <h2 className="mt-4 font-display text-2xl tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-mist">{item.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
