import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { solutions } from "@/content/solutions";

export function SolutionsOverview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="type-label">Solutions</p>
            <h2 className="type-section mt-4">Who the work is for.</h2>
            <p className="type-lede mt-5">
              Same studio. Different constraints. We do not invent a department
              for each audience.
            </p>
          </div>
          <ButtonLink href="/solutions" variant="ghost">
            All audiences
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <li key={solution.slug} className={index === 4 ? "lg:col-span-1" : undefined}>
              <Reveal delay={index * 60}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="frame block h-full p-6 transition-colors hover:bg-[var(--bg-elevated)] sm:p-8"
                >
                  <p className="type-meta">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 font-display text-2xl tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {solution.summary}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
