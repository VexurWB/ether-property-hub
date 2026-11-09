import type { ElementType, ReactNode } from "react";

export function Container({
  as: Component = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Component className={`mx-auto w-full max-w-[1240px] px-5 md:px-8 ${className}`}>
      {children}
    </Component>
  );
}
