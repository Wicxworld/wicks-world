import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getJournalPost, journalPosts } from "@/content/journal";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) {
    return buildMetadata({ title: "Not found", noIndex: true, path: "/journal" });
  }
  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/journal/${post.slug}`,
  });
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const others = journalPosts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <Section>
        <Container className="max-w-3xl">
          <p className="type-label">{post.category}</p>
          <h1 className="type-title mt-5">{post.title}</h1>
          <p className="type-meta mt-6">{post.dateLabel}</p>
          <p className="type-lede mt-8">{post.excerpt}</p>
          <div className="mt-12 space-y-6">
            {post.body.map((paragraph) => (
              <p key={paragraph} className="type-body">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {others.length > 0 ? (
        <Section tone="inset">
          <Container>
            <p className="type-label">Also in the Journal</p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/journal/${item.slug}`} className="no-underline">
                    <p className="type-meta">{item.dateLabel}</p>
                    <h2 className="mt-3 font-display text-2xl tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {item.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
