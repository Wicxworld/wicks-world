import Link from "next/link";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/services";
import { serviceListJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Creative direction, photography, cinematography, editing, motion and visual design, and content production from Wick's World in Lagos.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceListJsonLd()} />
      <Section>
        <Container>
          <PageIntro
            kicker="Services"
            title="What we make."
            lede="Six practices, one conversation. Direction, stills, film, post, motion, and content produced so the pictures can carry the business."
          />
          <ul className="mt-16 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-4 py-10 no-underline lg:grid-cols-12 lg:items-start"
                >
                  <span className="type-meta lg:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="lg:col-span-4">
                    <span className="type-section block">{service.title}</span>
                  </span>
                  <span className="lg:col-span-5">
                    <span className="block text-sm leading-relaxed text-mist">
                      {service.summary}
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-ink/80">
                      {service.benefit}
                    </span>
                  </span>
                  <span className="type-nav text-gold lg:col-span-2 lg:pt-2 lg:text-right">
                    Read more
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand
        title="Tell us what you need."
        body="If the brief sits in more than one service, say so. We will tell you if we are the right studio for it."
      />
    </>
  );
}
