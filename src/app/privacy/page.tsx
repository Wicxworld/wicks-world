import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { privacy } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: privacy.title,
  description: privacy.seoDescription,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="type-label">Legal</p>
        <h1 className="type-title mt-5">{privacy.title}</h1>
        <p className="type-meta mt-4">Updated {privacy.updated}</p>
        <div className="mt-14 space-y-12">
          {privacy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="type-section">{section.title}</h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="type-body text-mist">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
