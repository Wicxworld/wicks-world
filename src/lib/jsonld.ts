import { services } from "@/content/services";
import { getSiteUrl, site } from "@/content/site";

export function organizationJsonLd() {
  const url = getSiteUrl();
  const socials = site.contact.socials.map((item) => item.href);
  const email = site.contact.email;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand,
    legalName: site.legalName,
    url,
    image: `${url}/brand/wicks-world-logo.png`,
    logo: `${url}/brand/wicks-world-logo.png`,
    description: site.defaultDescription,
    ...(email ? { email } : {}),
    ...(socials.length > 0 ? { sameAs: socials } : {}),
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.city,
        addressCountry: "NG",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: "NG",
    },
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "Country", name: "Nigeria" },
    ],
    knowsAbout: services.map((service) => service.title),
  };
}

export function serviceListJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.brand} services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: `${url}/services/${service.slug}`,
        areaServed: {
          "@type": "City",
          name: "Lagos",
        },
        provider: {
          "@type": "Organization",
          name: site.brand,
          legalName: site.legalName,
        },
      },
    })),
  };
}

export function serviceJsonLd(input: {
  title: string;
  description: string;
  path: string;
}) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.title,
    description: input.description,
    url: `${url}${input.path}`,
    areaServed: {
      "@type": "City",
      name: "Lagos",
    },
    provider: {
      "@type": "Organization",
      name: site.brand,
      legalName: site.legalName,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.city,
        addressCountry: "NG",
      },
    },
  };
}
