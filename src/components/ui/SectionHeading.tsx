import type { ReactNode } from "react";

export function Eyebrow({
  children,
  align = "start",
  tone = "muted",
  className = "",
}: {
  children: ReactNode;
  align?: "start" | "center";
  tone?: "muted" | "gold";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="gold-rule" />
      <span className={`eyebrow ${tone === "gold" ? "text-gold" : ""}`}>{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  tone = "dark-text",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  tone?: "dark-text" | "light-text";
  className?: string;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && <Eyebrow align={align}>{eyebrow}</Eyebrow>}
      <h2
        className={`premium-h2 mt-5 text-balance ${
          tone === "light-text" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`premium-lead mt-4 ${align === "center" ? "mx-auto" : ""} ${
            tone === "light-text" ? "text-white/72" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
