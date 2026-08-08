export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  // "light" = dark text on a cream section, "dark" = cream text on a dark section.
  const headingColor = tone === "light" ? "text-foreground" : "text-cream";
  const introColor = tone === "light" ? "text-foreground/70" : "text-cream/70";

  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="text-xs tracking-[0.25em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-3xl tracking-[0.02em] sm:text-4xl ${headingColor}`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-4 max-w-xl text-sm leading-relaxed ${introColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
