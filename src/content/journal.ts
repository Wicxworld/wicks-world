export type JournalCategory =
  | "Creative Process"
  | "Photography"
  | "Film"
  | "Business & Creativity"
  | "Culture"
  | "Production";

export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  category: JournalCategory;
  excerpt: string;
  body: string[];
  seoTitle: string;
  seoDescription: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "the-work-has-to-survive-the-room",
    title: "The work has to survive the room",
    date: "2026-08-12",
    dateLabel: "12 August 2026",
    category: "Business & Creativity",
    excerpt:
      "A picture that only works in the presentation does not work. Notes on making visual work that still holds after the meeting ends.",
    body: [
      "Most commercial pictures are built for the room they will be approved in. The lights are even. The faces are agreeable. The edit is paced for people who are half-watching with a laptop open. Then the work goes out — onto a site, a wall, a phone in traffic — and it disappears, because it was never made for that second life.",
      "We are not interested in pictures that only survive a deck. The test is ordinary: would you still believe this if the logo were covered? Does the still hold if it is cropped badly by a platform? Does the film still have a point of view without the music doing all of the feeling?",
      "This is not a moral position. It is a commercial one. Work that depends on the meeting will need another meeting. Work that has a grammar can be reused, cut down, and continued without starting from embarrassment.",
      "At Wick's World the job is to make visuals that carry the business after everyone has left the table. That means fewer frames, clearer decisions, and a willingness to refuse the version that only looks expensive in the room.",
    ],
    seoTitle: "The work has to survive the room",
    seoDescription:
      "Notes from Wick's World on making commercial pictures and film that still hold after the approval meeting.",
  },
  {
    slug: "what-lagos-asks-of-a-picture",
    title: "What Lagos asks of a picture",
    date: "2026-08-19",
    dateLabel: "19 August 2026",
    category: "Culture",
    excerpt:
      "Making from Lagos with international standards is not a costume. It is a way of seeing that does not perform the city, and does not hide it.",
    body: [
      "Lagos is not a backdrop, and it is not a brand asset. It is where we work: light that turns hard in the afternoon, rooms that were not dressed for a camera, streets that do not pause because a production has arrived. The city asks the picture to be specific. Generalised 'African excellence' is as empty as a stock skyline.",
      "International standards, as we mean them, are not a borrowed accent. They are craft: exposure, pace, finishing, the discipline of a treatment. You can hold that standard here. You do not have to sand the place off the frame to be taken seriously, and you do not have to decorate the frame with the place to be taken as authentic.",
      "The useful question is smaller. What is the light actually doing. Who is in front of the camera, and did they agree to the version of themselves being made. What will this image do for the person who commissioned it, tomorrow, when the crew has gone.",
      "Wick's World is Lagos-born. The work is allowed to look like it was made here, and it is required to be made well. Those two things are not in conflict unless you decide they are.",
    ],
    seoTitle: "What Lagos asks of a picture",
    seoDescription:
      "A note from Wick's World on making photography and film from Lagos without performing the city or hiding it.",
  },
  {
    slug: "edit-is-a-second-shoot",
    title: "Edit is a second shoot",
    date: "2026-08-26",
    dateLabel: "26 August 2026",
    category: "Film",
    excerpt:
      "Post-production is not where footage is rescued. It is where the work takes a position — or admits it never had one.",
    body: [
      "There is a comforting myth that production gathers possibilities and the edit merely chooses. In practice the edit is a second shoot: duration, order, sound, the decision to hold a face longer than is comfortable. If those decisions were not already implied on set, the timeline will invent a film that nobody directed.",
      "We try to shoot for an edit we can already describe. That does not mean we storyboard the life out of a day. It means we know what the picture is for, how close we are willing to get, and what we will not solve later with type. Coverage without a point of view is not safety. It is a bill for hours in a dark room.",
      "The same is true of stills. A dump of frames is not an edit. Selects are a sequence. The photograph that looked sharp on the camera is not always the one that holds in a layout. Finishing should not invent a different picture; it should complete the one that was made.",
      "This is why strategy, production, and post sit in one conversation at the studio. The person who will cut the film should not be meeting the film for the first time at handover. And the client should not be meeting it for the first time in a version that has already gone too far to turn.",
    ],
    seoTitle: "Edit is a second shoot",
    seoDescription:
      "On video editing and post-production as authorship — a craft note from Wick's World, Lagos.",
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
