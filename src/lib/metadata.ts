import type { Metadata } from "next";
import { getSiteUrl, site } from "@/content/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = getSiteUrl();
  const canonical = `${url}${path === "/" ? "/" : path}`;
  const fullTitle = title ? `${title} — ${site.brand}` : site.defaultTitle;
  const desc = description ?? site.defaultDescription;
  const ogImage = `${url}/opengraph-image`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_NG",
      url: canonical,
      siteName: site.brand,
      title: fullTitle,
      description: desc,
      images: [{ url: ogImage, alt: `${site.brand} — ${site.legalName}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}
