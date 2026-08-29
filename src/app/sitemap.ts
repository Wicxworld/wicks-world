import type { MetadataRoute } from "next";
import { journalPosts } from "@/content/journal";
import { services } from "@/content/services";
import { getSiteUrl } from "@/content/site";
import { solutions } from "@/content/solutions";
import { workStudies } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const lastModified = new Date("2026-08-29");

  const staticPaths = [
    "/",
    "/services",
    "/solutions",
    "/about",
    "/work",
    "/process",
    "/journal",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${url}${path === "/" ? "" : path}`,
      lastModified,
    })),
    ...services.map((service) => ({
      url: `${url}/services/${service.slug}`,
      lastModified,
    })),
    ...solutions.map((solution) => ({
      url: `${url}/solutions/${solution.slug}`,
      lastModified,
    })),
    ...workStudies.map((study) => ({
      url: `${url}/work/${study.slug}`,
      lastModified,
    })),
    ...journalPosts.map((post) => ({
      url: `${url}/journal/${post.slug}`,
      lastModified,
    })),
  ];
}
