export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="type-label">{kicker}</p>
      <h1 className="type-title mt-5">{title}</h1>
      {lede ? <p className="type-lede mt-6">{lede}</p> : null}
    </header>
  );
}
