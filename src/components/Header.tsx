"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useVexurCalendar } from "@/components/vexur/VexurCalendarProvider";
import { LogoWordmark } from "./Logo";
import { siteConfig } from "@/lib/site-data";
import { isNavActive, isNavGroup, primaryNavItems, type NavGroup, type NavLink } from "@/lib/navigation";

const desktopItemClass = "nav-link relative inline-flex h-[76px] items-center px-3.5 transition-colors duration-300";
const desktopTypeClass = "text-[11.5px] font-semibold uppercase tracking-[0.18em]";

const whiteText = { color: "#ffffff", WebkitTextFillColor: "#ffffff" } as const;

function ActiveRule({ active }: { active: boolean }) {
  return (
    <span
      className={`absolute bottom-[24px] left-1/2 h-px w-6 -translate-x-1/2 bg-gold transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function DesktopNavLink({ link, pathname }: { link: NavLink; pathname: string }) {
  const active = isNavActive(link.path, pathname);
  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      className={`${desktopItemClass} ${desktopTypeClass}`}
      style={whiteText}
    >
      {link.label}
      <ActiveRule active={active} />
    </Link>
  );
}

function DesktopNavDropdown({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = group.links.some((link) => isNavActive(link.path, pathname));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`${desktopItemClass} gap-1.5`}
        style={whiteText}
      >
        <span className={desktopTypeClass}>{group.label}</span>
        <svg
          className={`h-3 w-3 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M6 9l6 6 6-6" />
        </svg>
        <ActiveRule active={active} />
      </button>

      <div className={`absolute left-1/2 top-full -translate-x-1/2 ${open ? "block" : "hidden"}`}>
        <div
          className="min-w-[200px] py-2 shadow-[0_18px_44px_rgb(0_0_0/0.35)]"
          style={{
            background: "rgb(8 22 40 / 0.98)",
            border: "1px solid rgb(43 154 232 / 0.28)",
            borderTop: "none",
          }}
        >
          {group.links.map((link) => {
            const linkActive = isNavActive(link.path, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={linkActive ? "page" : undefined}
                className={`nav-link block border-l-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  linkActive ? "border-gold" : "border-transparent"
                }`}
                style={whiteText}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({ link, pathname, nested = false }: { link: NavLink; pathname: string; nested?: boolean }) {
  const active = isNavActive(link.path, pathname);
  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      className={`border-l-2 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:translate-x-0.5 ${
        nested ? "pl-8" : "pl-4"
      } ${active ? "border-gold text-gold" : "border-transparent text-white hover:text-gold-soft"}`}
      style={{ color: active ? "var(--color-gold)" : "#ffffff" }}
    >
      {link.label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const { open: openBooking } = useVexurCalendar();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-shadow duration-500 ${
        scrolled ? "shadow-[0_18px_44px_rgb(0_0_0/0.28)]" : ""
      }`}
      style={{
        background:
          "linear-gradient(90deg, rgb(11 28 51 / 0.97) 0%, rgb(8 22 40 / 0.97) 40%, rgb(7 21 37 / 0.97) 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgb(43 154 232 / 0.28)",
      }}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <LogoWordmark compact />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNavItems.map((item) =>
            isNavGroup(item) ? (
              <DesktopNavDropdown key={item.label} group={item} pathname={pathname} />
            ) : (
              <DesktopNavLink key={item.href} link={item} pathname={pathname} />
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openBooking}
            className="btn-cta hidden h-10 items-center px-5 text-[10.5px] sm:inline-flex"
          >
            {siteConfig.cta}
          </button>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-brand-secondary px-5 py-6 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {primaryNavItems.map((item) =>
              isNavGroup(item) ? (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="border-l-2 border-transparent py-2.5 pl-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    {item.label}
                  </span>
                  {item.links.map((link) => (
                    <MobileNavLink key={link.href} link={link} pathname={pathname} nested />
                  ))}
                </div>
              ) : (
                <MobileNavLink key={item.href} link={item} pathname={pathname} />
              ),
            )}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              className="btn-cta mt-4 h-11 w-full text-[11px]"
            >
              {siteConfig.cta}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
