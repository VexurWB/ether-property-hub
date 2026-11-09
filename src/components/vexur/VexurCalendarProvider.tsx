"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Script from "next/script";
import { vexurCalendarConfig } from "@/lib/vexur-calendar";
import { VexurCalendarEmbed } from "./VexurCalendarEmbed";

type VexurCalendarContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const VexurCalendarContext = createContext<VexurCalendarContextValue | null>(null);

export function useVexurCalendar() {
  const context = useContext(VexurCalendarContext);
  if (!context) {
    throw new Error("useVexurCalendar must be used within VexurCalendarProvider");
  }
  return context;
}

function refreshVexurWidgets() {
  window.VexurWidgetLoader?.refresh?.();
}

export function VexurCalendarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  const open = useCallback(() => {
    setIsOpen(true);
    requestAnimationFrame(refreshVexurWidgets);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <VexurCalendarContext.Provider value={{ open, close, isOpen }}>
      {children}

      <Script
        src={vexurCalendarConfig.loaderUrl}
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onReady={refreshVexurWidgets}
        onLoad={refreshVexurWidgets}
      />

      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-[visibility,opacity] duration-200 ${
          isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-ink/70 backdrop-blur-[3px] transition-opacity ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-label="Close booking calendar"
          tabIndex={isOpen ? 0 : -1}
          onClick={close}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a discovery call"
          className={`relative z-10 w-full max-w-[680px] max-h-[min(90vh,820px)] overflow-y-auto transition-transform duration-200 ${
            isOpen ? "pointer-events-auto scale-100" : "pointer-events-none scale-[0.98]"
          }`}
        >
          <button
            type="button"
            onClick={close}
            className="absolute -right-1 -top-1 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-white/90 backdrop-blur-sm transition-colors hover:bg-ink hover:text-white sm:right-0 sm:top-0"
            aria-label="Close"
            tabIndex={isOpen ? 0 : -1}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <VexurCalendarEmbed />
        </div>
      </div>
    </VexurCalendarContext.Provider>
  );
}
