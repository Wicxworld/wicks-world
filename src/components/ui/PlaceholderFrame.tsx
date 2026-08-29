import { cn } from "@/lib/cn";

const accents = {
  charcoal: "field-charcoal",
  teal: "field-teal",
  earth: "field-earth",
  gold: "field-gold",
} as const;

export function PlaceholderFrame({
  label,
  caption,
  accent = "charcoal",
  className,
  ratio = "wide",
}: {
  label: string;
  caption?: string;
  accent?: keyof typeof accents;
  className?: string;
  ratio?: "wide" | "square" | "portrait";
}) {
  const minH =
    ratio === "square" ? "min-h-[22rem]" : ratio === "portrait" ? "min-h-[28rem]" : "min-h-[18rem] sm:min-h-[24rem]";

  return (
    <figure className={cn("frame", className)}>
      <div
        className={cn(
          "placeholder-still grain text-paper",
          accents[accent],
          minH,
        )}
        role="img"
        aria-label={label}
      >
        <span className="geometry left-[8%] top-[14%] h-[42%] w-[28%]" />
        <span className="geometry right-[12%] top-[22%] h-[18%] w-[18%] rounded-full" />
        <span className="geometry bottom-[12%] left-[18%] right-[22%] h-px" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <p className="type-label text-paper/70">Placeholder</p>
          <p className="mt-3 max-w-md font-display text-2xl leading-tight tracking-tight sm:text-3xl">
            {label}
          </p>
        </div>
      </div>
      {caption ? (
        <figcaption className="type-caption px-1 py-3">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
