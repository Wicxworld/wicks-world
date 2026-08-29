import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { journalPosts } from "@/content/journal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Journal",
  description:
    "Notes on craft, process, and making visual work from Wick's World, a creative studio in Lagos.",
  path: "/journal",
});

export default function JournalPage() {
  const posts = [...journalPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Section>
      <Container>
        <PageIntro
          kicker="Journal"
          title="A public record of craft."
          lede="Notes on process, pictures, and the business of making them. Not a newsroom. Not a blog of announcements."
        />
        <ul className="mt-16 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/journal/${post.slug}`}
                className="grid gap-4 py-10 no-underline lg:grid-cols-12 lg:items-baseline"
              >
                <span className="type-meta lg:col-span-3">
                  {post.dateLabel}
                </span>
                <span className="lg:col-span-6">
                  <span className="type-label block">{post.category}</span>
                  <span className="type-section mt-3 block">{post.title}</span>
                  <span className="mt-4 block text-sm leading-relaxed text-mist">
                    {post.excerpt}
                  </span>
                </span>
                <span className="type-nav text-gold lg:col-span-3 lg:text-right">
                  Read
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
