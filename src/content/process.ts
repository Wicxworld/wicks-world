export type ProcessStep = {
  number: string;
  title: string;
  summary: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    summary: "What the work is for, who it has to hold, and what it must not become.",
    detail:
      "A conversation, not a questionnaire. We listen for the actual job: the audience, the constraint, the date, the feeling that would make the work fail. We look at what already exists so we do not invent a language you do not have.",
  },
  {
    number: "02",
    title: "Define",
    summary: "Scope, treatment, and a point of view written down.",
    detail:
      "We write the brief back to you. Treatment, look, deliverables, and what is out of scope. Estimates come from this, not from a public rate card. If the idea is not clear here, production will not save it.",
  },
  {
    number: "03",
    title: "Create",
    summary: "Production. The camera, the room, the people.",
    detail:
      "Photography, cinematography, and directed making. We keep the set as small as the work allows. Direction is specific. We shoot for the edit we already described, not for a folder of options.",
  },
  {
    number: "04",
    title: "Refine",
    summary: "Edit, design, and the second round of decisions.",
    detail:
      "Post is where the work takes a position. Picture lock, motion, finishing. Feedback is structured — not a pile of notes from a group chat. We refine toward the treatment, not away from it.",
  },
  {
    number: "05",
    title: "Deliver",
    summary: "Files organised by use, not by leftover folders.",
    detail:
      "Masters, cutdowns, stills, and graphic assets named and versioned for the channels that matter. We do not disappear at export. Delivery is part of the job.",
  },
  {
    number: "06",
    title: "Grow",
    summary: "The language can continue. The calendar does not have to erase it.",
    detail:
      "If the work is ongoing — a content system, a next film, a season — we keep the grammar. Recurring work is scoped per cycle. There is no invented retainership. Growth means the studio, and the work, getting more precise, not merely more content.",
  },
];
