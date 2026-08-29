import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { journalPosts } from "@/content/journal";

export function JournalPreview() {
  const posts = journalPosts.slice(0, 3);

  return (
    <Section tone="inset">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="type-label">Journal</p>
            <h2 className="type-section mt-4">Notes on craft.</h2>
            <p className="type-lede mt-5">
              Process, photography, film, and the business of making pictures.
              Not client news.
            </p>
          </div>
          <ButtonLink href="/journal" variant="ghost">
            All writing
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <Reveal delay={index * 70}>
                <article className="flex h-full flex-col border-t border-[var(--rule)] pt-6">
                  <p className="type-meta">
                    {post.category} · {post.dateLabel}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight">
                    <Link href={`/journal/${post.slug}`} className="hover:text-teal">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="type-nav mt-6 inline-block text-gold"
                  >
                    Read
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
