export const site = {
  brand: "Wick's World",
  legalName: "W's Creative Studios Ltd",
  tagline: "Creative studio and production house.",
  location: {
    city: "Lagos",
    country: "Nigeria",
    line: "Lagos, Nigeria",
  },
  founder: {
    name: "Babatunde Lawal",
    publicName: "Wick",
    role: "Founder / Creative Director",
  },
  /**
   * Public contact channels. Leave empty to hide from the site.
   * Do not invent addresses, phones, or social URLs.
   */
  contact: {
    email: "wicxworld@gmail.com",
    phone: "",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/wicxworld/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591639326678" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/babatunde-lawal-0b1ab9412/" },
      { label: "X", href: "https://x.com/WicxWorld" },
    ] as { label: string; href: string }[],
  },
  defaultTitle: "Wick's World — Creative Studio, Lagos",
  defaultDescription:
    "Wick's World is a Lagos creative studio helping businesses, brands, artists and organisations communicate through visual media and creative production.",
} as const;

export const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const cta = {
  start: { href: "/contact", label: "Start a Project" },
  explore: { href: "/services", label: "Explore What We Do" },
} as const;

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (raw && raw.length > 0 && !raw.includes("localhost")) return raw;
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/^https?:\/\//, "");
  if (vercelProd) return `https://${vercelProd}`;
  const vercelUrl = process.env.VERCEL_URL?.replace(/^https?:\/\//, "");
  if (vercelUrl) return `https://${vercelUrl}`;
  return raw && raw.length > 0 ? raw : "http://localhost:3000";
}

export const laterDivisions = [
  "Team",
  "Partners",
  "Shop",
  "Events",
  "Productions",
] as const;
