import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
  tone = "paper",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "charcoal" | "inset";
}) {
  const tones = {
    paper: "bg-[var(--bg)] text-[var(--fg)]",
    charcoal: "bg-charcoal text-paper",
    inset: "bg-[var(--bg-elevated)] text-[var(--fg)]",
  } as const;

  return (
    <section id={id} className={cn("py-20 sm:py-28", tones[tone], className)}>
      {children}
    </section>
  );
}
