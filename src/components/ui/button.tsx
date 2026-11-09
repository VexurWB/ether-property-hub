"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useVexurCalendar } from "@/components/vexur/VexurCalendarProvider";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex shrink-0 items-center justify-center gap-2 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[10.5px]",
  md: "h-11 px-6 text-[11px]",
  lg: "h-12 px-8 text-[11.5px]",
};

const variants: Record<Variant, string> = {
  primary: "btn-cta",
  ghost: "btn-ghost-light",
  outline: "btn-outline",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsBooking = Common & {
  booking: true;
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonAsButton = Common & {
  href?: undefined;
  booking?: false;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonAsLink = Common & {
  href: string;
  booking?: never;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function Button(props: ButtonAsBooking | ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`.trim();

  if (props.booking) {
    const { open } = useVexurCalendar();
    const { booking: _b, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsBooking & { variant?: Variant; size?: Size };
    void _b;
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <button type="button" className={cls} onClick={open} {...rest}>
        {children}
      </button>
    );
  }

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink & { variant?: Variant; size?: Size };
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton & { variant?: Variant; size?: Size };
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
