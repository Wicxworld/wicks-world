export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  description: string;
  benefit: string;
  deliverables: string[];
  offerings: string[];
  useCases: string[];
  seoTitle: string;
  seoDescription: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "creative-direction",
    image: "/services/creative-direction.jpg",
    title: "Creative Direction",
    navLabel: "Creative Direction",
    summary:
      "Shape the idea before the camera moves. Treatments, look, and a clear point of view.",
    description:
      "Creative direction at Wick's World is the work of deciding what a project is for, how it should feel, and what it must refuse. We write treatments, set visual language, and stay with the work through production and post so the idea does not dissolve on set.",
    benefit:
      "A single point of view. Teams stop arguing in the dark. The pictures, the edit, and the design answer to the same brief.",
    deliverables: [
      "Creative treatment and reference map",
      "Look development for stills and moving image",
      "Art direction through production",
      "Editorial supervision in post",
      "A language the work can be continued in",
    ],
    offerings: [
      "Campaign ideas and visual strategy",
      "Art direction for photography and film",
      "Look development and colour posture",
      "Treatment writing",
      "On-set and in-edit creative supervision",
    ],
    useCases: [
      "A brand that needs a film or campaign to feel like itself, not like a template",
      "A business launching a product or space that requires a coherent visual system",
      "An artist or organisation commissioning work that must hold a specific tone",
    ],
    seoTitle: "Creative Direction",
    seoDescription:
      "Creative direction from Wick's World in Lagos — treatments, look development, and visual language for photography, film, and campaigns.",
  },
  {
    slug: "photography",
    image: "/services/photography.jpg",
    title: "Photography",
    navLabel: "Photography",
    summary:
      "Stills with commercial weight. People, product, place — made to be used.",
    description:
      "We make photographs for brands, businesses, and people who need images that hold: campaign stills, portraits, product, and location work. Light and location do the heavy lifting. Retouching stays honest. Sequences matter more than a single hero frame.",
    benefit:
      "Pictures that can live in a campaign, a website, a deck, and print without looking like they were made for only one slot.",
    deliverables: [
      "Directed stills sessions",
      "Selects and a usable edit",
      "Colour and restrained finishing",
      "Web and print-ready files",
      "A sequence, not a dump of frames",
    ],
    offerings: [
      "Editorial and campaign stills",
      "Portrait and people work",
      "Product and object photography",
      "Location and atmosphere studies",
      "Commercial content stills",
    ],
    useCases: [
      "A brand needing a stills language for a launch or season",
      "A business documenting a space, product, or team with care",
      "An artist or public figure requiring portraits that do not flatten them",
    ],
    seoTitle: "Photography",
    seoDescription:
      "Commercial and editorial photography from Wick's World, Lagos — campaign stills, portraits, product, and location work.",
  },
  {
    slug: "cinematography-film",
    image: "/services/cinematography-film.jpg",
    title: "Cinematography & Film",
    navLabel: "Cinematography & Film",
    summary:
      "Moving image with a point of view. Branded films, commercial cinematography, short-form.",
    description:
      "We shoot and direct films for commercial and cultural use: brand films, short-form, and documentary-led commissions. The camera is not decoration. Pace, light, and lensing are decided before the first setup so the picture has a grammar, not just coverage.",
    benefit:
      "Film that can represent a brand or body of work without looking rented. A visual language you can return to.",
    deliverables: [
      "Treatment and shot approach",
      "Cinematography and directed production",
      "Picture edit through lock",
      "Finishing and delivery versions",
      "A grammar that can be reused",
    ],
    offerings: [
      "Branded films and short-form",
      "Commercial cinematography",
      "Documentary-led commissions",
      "Direction of photography",
      "Multi-format capture",
    ],
    useCases: [
      "A brand film that has to feel authored, not assembled from stock",
      "A product or space that needs moving image with the same care as stills",
      "An organisation telling a story that should not be flattened into a promo",
    ],
    seoTitle: "Cinematography and Film",
    seoDescription:
      "Cinematography and branded film from Wick's World in Lagos — commercial moving image with a clear visual grammar.",
  },
  {
    slug: "video-editing-post",
    image: "/services/video-editing-post.jpg",
    title: "Video Editing & Post",
    navLabel: "Video Editing & Post",
    summary:
      "The edit is a second shoot. Picture, pace, and finishing with intent.",
    description:
      "Post-production is authorship, not cleanup. We edit picture, build pace, and finish work so it holds on a phone and in a room. We work with footage we shot and with material brought to us — provided the brief is clear and the files are usable.",
    benefit:
      "An edit that decides, rather than a timeline that accumulates. Versions you can actually publish.",
    deliverables: [
      "Assembly through picture lock",
      "Sound editorial within the scope of the brief",
      "Colour and finishing as agreed",
      "Titles and simple motion where needed",
      "Delivery versions for the channels that matter",
    ],
    offerings: [
      "Picture edit",
      "Finishing and versioning",
      "Work from existing footage",
      "Campaign cutdowns",
      "Editorial supervision",
    ],
    useCases: [
      "A shoot that needs an editor who will take a position",
      "A campaign requiring a master and cutdowns that still feel like one film",
      "An organisation with existing footage that has not yet become a piece",
    ],
    seoTitle: "Video Editing and Post-Production",
    seoDescription:
      "Video editing and post-production from Wick's World, Lagos — picture lock, finishing, and delivery versions with intent.",
  },
  {
    slug: "motion-visual-design",
    image: "/services/motion-visual-design.jpg",
    title: "Motion & Visual Design",
    navLabel: "Motion & Visual Design",
    summary:
      "Type, image, and movement as one system. Titles, sequences, campaign graphics.",
    description:
      "Motion and visual design sit with the pictures, not on top of them. We design titles, sequences, and graphic treatments that share a language with the photography and film — colour, type, and pace agreed, then applied.",
    benefit:
      "Graphics that belong to the work. Campaign assets that do not look like they came from a different studio.",
    deliverables: [
      "Motion sequences and titles",
      "Graphic treatments over live action",
      "Still layouts where the brief requires them",
      "A small, reusable visual system",
      "Export packages for the channels in play",
    ],
    offerings: [
      "Motion graphics",
      "Title design and sequences",
      "Visual systems for campaigns",
      "Graphic treatments",
      "Type and image composition",
    ],
    useCases: [
      "A film that needs titles and graphic language, not a default font",
      "A campaign requiring stills, motion, and design to speak as one",
      "A brand building a short-form system that should not look generic",
    ],
    seoTitle: "Motion and Visual Design",
    seoDescription:
      "Motion and visual design from Wick's World in Lagos — titles, sequences, and campaign graphics that belong to the pictures.",
  },
  {
    slug: "content-production",
    image: "/services/content-production.jpg",
    title: "Content Production",
    navLabel: "Content Production",
    summary:
      "Stills, film, and design produced as a package. Recurring or campaign.",
    description:
      "Content production is the making of usable assets — photography, film, and design — as a connected package rather than as isolated jobs. We produce campaign sets and, where it makes sense, recurring work. The standard does not drop because the format is short.",
    benefit:
      "A body of work that holds together across formats, instead of a folder of unrelated files.",
    deliverables: [
      "Scoped stills and moving-image packages",
      "A shared look across assets",
      "Edit and design as part of the same job",
      "Delivery organised by use, not by file type",
      "Room to continue the system later",
    ],
    offerings: [
      "Campaign content packages",
      "Recurring content retainers, scoped honestly",
      "Still and motion pairs",
      "Multi-asset production days",
      "Commercial content for brand and business use",
    ],
    useCases: [
      "A brand that needs a season of assets, not a single film",
      "A business without an in-house production team",
      "A marketing team that wants production sitting beside them, not replacing them",
    ],
    seoTitle: "Content Production",
    seoDescription:
      "Content production from Wick's World, Lagos — photography, film, and design produced as connected commercial packages.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const projectTypes = [
  "Creative Direction",
  "Photography",
  "Cinematography & Film",
  "Video Editing & Post",
  "Motion & Visual Design",
  "Content Production",
  "More than one / not sure",
] as const;

export const budgetRanges = [
  "Prefer to discuss",
  "Focused job",
  "Mid-scale production",
  "Campaign / multi-asset",
  "Not sure yet",
] as const;

export const timelines = [
  "Flexible",
  "Tied to a specific date",
  "Within the next month",
  "One to three months",
  "Not sure yet",
] as const;

export const hearAboutOptions = [
  "Referral",
  "Search",
  "Journal / writing",
  "Word of mouth",
  "Social",
  "Other",
] as const;
