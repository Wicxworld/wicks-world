import { CtaBand } from "@/components/site/CtaBand";
import { Container } from "@/components/ui/Container";
import { PlaceholderFrame } from "@/components/ui/PlaceholderFrame";
import { Section } from "@/components/ui/Section";
import { about } from "@/content/about";
import { laterDivisions, site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: about.seoTitle,
  description: about.seoDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <p className="type-label">{about.company.kicker}</p>
          <h1 className="type-title mt-5">{about.company.title}</h1>
          <p className="type-lede mt-6 max-w-2xl">
            Public brand: {about.company.brand}. {site.location.line}.
          </p>
          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="max-w-2xl space-y-5 lg:col-span-7">
              {about.company.paragraphs.map((paragraph) => (
                <p key={paragraph} className="type-body text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <PlaceholderFrame
                accent="charcoal"
                label="Wick's World · Lagos"
                src="/about/lagos.jpg"
                caption="Lagos, where the studio works. Photography of the practice will replace this when it exists to show."
                ratio="square"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="inset">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="type-label">{about.founder.kicker}</p>
            <h2 className="type-section mt-4">{about.founder.name}</h2>
            <p className="mt-3 text-sm text-mist">{about.founder.role}</p>
            {about.founder.legalName ? (
              <p className="mt-2 text-sm text-mist">{about.founder.legalName}</p>
            ) : null}
          </div>
          <div className="max-w-2xl space-y-5 lg:col-span-7 lg:col-start-6">
            {about.founder.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="type-label">{about.story.kicker}</p>
            <h2 className="type-section mt-4">{about.story.title}</h2>
          </div>
          <div className="max-w-2xl space-y-5 lg:col-span-7 lg:col-start-6">
            {about.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body text-mist">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="charcoal">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="type-label text-paper/50">{about.vision.kicker}</p>
            <h2 className="type-section mt-4 text-paper">{about.vision.title}</h2>
          </div>
          <div className="max-w-2xl space-y-5 lg:col-span-7 lg:col-start-6">
            {about.vision.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body text-paper/75">
                {paragraph}
              </p>
            ))}
            <div className="mt-10">
              <p className="type-label text-paper/50">Not live yet</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {laterDivisions.map((item) => (
                  <li key={item} className="text-sm text-paper/55">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand tone="paper" />
    </>
  );
}
