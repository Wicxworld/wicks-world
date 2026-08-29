import { Container } from "@/components/ui/Container";

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-[var(--rule)] py-16 sm:py-24">
      <Container>
        {kicker ? <p className="type-label">{kicker}</p> : null}
        <h1 className="type-title mt-4 max-w-4xl">{title}</h1>
        {lede ? <p className="type-lede mt-6 max-w-2xl">{lede}</p> : null}
      </Container>
    </header>
  );
}
