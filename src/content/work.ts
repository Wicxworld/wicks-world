export type WorkStudy = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  challenge: string;
  approach: string;
  execution: string[];
  outcome: string;
  notes: string[];
  placeholder: true;
  accent: "charcoal" | "teal" | "earth" | "gold";
  seoTitle: string;
  seoDescription: string;
};

export const workStudies: WorkStudy[] = [
  {
    slug: "brand-film-language",
    title: "Brand Film Language",
    kicker: "Capability study",
    summary:
      "How we build a grammar for moving image — pace, light, lensing — before a shot list exists.",
    challenge:
      "A brand needs film that feels like it belongs to them. Most commercial video fails here: coverage without a point of view, music doing the feeling, graphics compensating for pictures that were never directed.",
    approach:
      "We write the language first. Not a moodboard dump — a small set of decisions: how close we get, how long we hold, what the light is allowed to do, what we will not shoot. The treatment is a set of refusals as much as it is a set of images. Production then has something to obey.",
    execution: [
      "Treatment and reference distilled to a short list of rules",
      "Tests where the budget and time allow — a lens, a room, a pace",
      "Directed cinematography, not coverage for safety",
      "An edit that continues the same decisions, rather than inventing new ones",
    ],
    outcome:
      "A film language that can be reused: the next piece does not have to start from zero. We do not attach metrics or named clients to this study. The proof is in the grammar, not in a case-study scoreboard.",
    notes: [
      "This is a capability study, not a client case. No brand is named.",
      "Stills and frames shown on this page are editorial placeholders until commissioned work is cleared for the archive.",
    ],
    placeholder: true,
    accent: "charcoal",
    seoTitle: "Brand Film Language",
    seoDescription:
      "A Wick's World capability study on building visual grammar for branded film — treatment, cinematography, and edit as one language.",
  },
  {
    slug: "commercial-stills",
    title: "Commercial Stills",
    kicker: "Capability study",
    summary:
      "Photography made to be used: people, product, and place, in sequences rather than single hero frames.",
    challenge:
      "Commercial stills are often asked to do two opposing jobs: look expensive, and look true. Over-lighting and over-retouching solve the first and kill the second. Under-direction produces pictures that cannot survive a layout.",
    approach:
      "We treat light and location as the brief. People are directed, not extracted. Product is given the same attention as a portrait. The edit is a sequence — a set of pictures that can move between campaign, web, and print without looking stranded.",
    execution: [
      "A stills language agreed before the sitting: colour, distance, how much the room is allowed in",
      "Directed sessions with room for the accident that is actually good",
      "Selects as an edit, not a dump",
      "Finishing that does not invent a different photograph",
    ],
    outcome:
      "A body of stills that can be laid out without apology. Qualitative, not counted. No named clients, no invented conversion rates.",
    notes: [
      "This is a capability study, not a client case. No brand is named.",
      "Frames on this page are placeholders. Real photography will replace them when it is cleared for public use.",
    ],
    placeholder: true,
    accent: "earth",
    seoTitle: "Commercial Stills",
    seoDescription:
      "A Wick's World capability study on commercial photography — directed stills for campaign, web, and print.",
  },
  {
    slug: "campaign-content-systems",
    title: "Campaign Content Systems",
    kicker: "Capability study",
    summary:
      "Stills, film, and design produced as one system so a campaign does not speak in three dialects.",
    challenge:
      "Campaigns come apart when photography, film, and motion are commissioned as separate jobs. Colour drifts. Type argues with the picture. Cutdowns feel like they were made by someone who did not see the master.",
    approach:
      "One conversation before production: subject, colour, pace, type, and what the work is for. Then stills, moving image, and design are made inside that system — or at least finished inside it. Recurring content, when we take it, uses the same rules so the calendar does not erode the language.",
    execution: [
      "A short system document: look, pace, graphic posture, delivery list",
      "Production days designed for stills and motion together where it helps",
      "Edit and design in parallel, not in a relay",
      "Assets organised by use — campaign, web, short-form — from the same source",
    ],
    outcome:
      "A set of assets that hold together across formats. The system is the deliverable as much as any single film or frame. No named clients. No reach figures.",
    notes: [
      "This is a capability study, not a client case. No brand is named.",
      "Visuals on this page are editorial placeholders, not production stills.",
    ],
    placeholder: true,
    accent: "teal",
    seoTitle: "Campaign Content Systems",
    seoDescription:
      "A Wick's World capability study on producing stills, film, and design as one campaign system.",
  },
];

export function getWorkStudy(slug: string) {
  return workStudies.find((study) => study.slug === slug);
}
