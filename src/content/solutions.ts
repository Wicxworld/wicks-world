export type Solution = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  description: string;
  weWorkOn: string[];
  howWeWork: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
};

export const solutions: Solution[] = [
  {
    slug: "brands",
    image: "/solutions/brands.jpg",
    title: "Brands",
    audience: "Brands",
    summary:
      "Visual language for brands that need pictures and film to feel like they belong to them.",
    description:
      "We work with brands that need stills, film, and design to carry a position — not to fill a calendar. The job is to find the language, produce it with care, and leave behind a system that can be continued.",
    weWorkOn: [
      "Brand films and campaign stills",
      "Look development and creative direction",
      "Content systems across stills, motion, and design",
      "Launch and season work",
    ],
    howWeWork:
      "We start with the idea and the constraint. Then production and post sit in the same conversation, so the work does not split into three dialects.",
    seoTitle: "For Brands",
    seoDescription:
      "Wick's World works with brands on film, photography, and campaign systems — creative production from Lagos with international standards.",
  },
  {
    slug: "businesses",
    image: "/solutions/businesses.jpg",
    title: "Businesses",
    audience: "Businesses",
    summary:
      "Commercial content that explains, sells, and holds up in a room — without looking like an advert factory.",
    description:
      "Businesses come to us when they need photography, film, or a body of content that can stand next to the product. We produce work that is commercially useful and visually serious: spaces, people, offers, and stories that have to be true.",
    weWorkOn: [
      "Product and space photography",
      "Commercial films and explainers with craft",
      "Campaign and launch packages",
      "Recurring content, scoped per cycle",
    ],
    howWeWork:
      "We scope from the job, not from a menu. Estimates follow a conversation. Production can sit beside an existing marketing team.",
    seoTitle: "For Businesses",
    seoDescription:
      "Commercial photography, film, and content production for businesses — Wick's World, a Lagos creative studio.",
  },
  {
    slug: "artists-creatives",
    image: "/solutions/artists-creatives.jpg",
    title: "Artists & Creatives",
    audience: "Artists & Creatives",
    summary:
      "Directed pictures and film for people whose work already has a voice.",
    description:
      "Artists, musicians, designers, and other makers come to us for portraits, films, and visual work that does not flatten them into a template. We listen first. The pictures should feel like the work, not like a press kit.",
    weWorkOn: [
      "Portraits and editorial stills",
      "Short films and performance capture",
      "Visual identity for a body of work",
      "Campaigns around a release or exhibition",
    ],
    howWeWork:
      "We treat the artist's existing language as the brief. Direction is collaboration, not overwrite.",
    seoTitle: "For Artists and Creatives",
    seoDescription:
      "Photography, film, and visual direction for artists and creatives — Wick's World, Lagos.",
  },
  {
    slug: "organizations",
    image: "/solutions/organizations.jpg",
    title: "Organisations",
    audience: "Organisations",
    summary:
      "Work for institutions and teams that need to communicate with dignity, not noise.",
    description:
      "Organisations — cultural, civic, commercial, educational — need pictures and film that respect the people in them. We produce documentary-led and directed work for programmes, places, and public-facing stories, without inventing a voice the organisation does not have.",
    weWorkOn: [
      "Programme and place photography",
      "Documentary-led films",
      "Campaigns for a public message",
      "Content systems for a season of communication",
    ],
    howWeWork:
      "We work with the people who already hold the story. Clear approvals, careful access, no theatrics.",
    seoTitle: "For Organisations",
    seoDescription:
      "Photography and film for organisations — documentary-led and directed communication from Wick's World in Lagos.",
  },
  {
    slug: "individuals",
    image: "/solutions/individuals.jpg",
    title: "Individuals",
    audience: "Individuals",
    summary:
      "Portraits and personal commissions made with the same standard as commercial work.",
    description:
      "Individuals commission portraits, personal films, and small productions. The standard does not change because the client is one person. We keep the process clear, the sitting directed, and the files usable.",
    weWorkOn: [
      "Portrait sittings",
      "Personal films, scoped tightly",
      "Family and life work where it is a fit",
      "Images for a professional or public presence",
    ],
    howWeWork:
      "A conversation, a clear scope, a sitting or shoot, a considered edit. No packages invented to upsell.",
    seoTitle: "For Individuals",
    seoDescription:
      "Portrait photography and personal commissions from Wick's World, a Lagos creative studio.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
