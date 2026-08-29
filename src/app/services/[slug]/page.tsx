import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PlaceholderFrame } from "@/components/ui/PlaceholderFrame";
import { Section } from "@/components/ui/Section";
import { getService, services } from "@/content/services";
import { serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return buildMetadata({ title: "Not found", noIndex: true, path: "/services" });
  }
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          title: service.title,
          description: service.description,
          path: `/services/${service.slug}`,
        })}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="type-label">Service</p>
            <h1 className="type-title mt-5">{service.title}</h1>
            <p className="type-lede mt-6">{service.summary}</p>
            <p className="type-body mt-8 max-w-2xl text-mist">
              {service.description}
            </p>
            <div className="mt-10">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderFrame
              accent="teal"
              label={service.title}
              caption="Placeholder still. Real production frames replace this when they are cleared."
              ratio="portrait"
            />
          </div>
        </Container>
      </Section>

      <Section tone="inset">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-label">Why it matters</p>
            <h2 className="type-section mt-4">{service.benefit}</h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7">
            <div>
              <p className="type-label">What we deliver</p>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-mist">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="type-label">Offerings</p>
              <ul className="mt-5 space-y-3">
                {service.offerings.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-mist">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="type-label">When it is a fit</p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3">
            {service.useCases.map((item) => (
              <li key={item} className="border-t border-[var(--rule)] pt-5">
                <p className="text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="inset">
        <Container>
          <p className="type-label">Other services</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="block border border-[var(--rule)] p-6 no-underline transition-colors hover:bg-paper"
                >
                  <h2 className="font-display text-2xl tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {item.summary}
                  </p>
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
