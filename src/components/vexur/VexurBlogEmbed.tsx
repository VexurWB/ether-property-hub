"use client";

import { useEffect, useRef } from "react";
import { reviewedPosts } from "@/lib/reviewed-posts";
import { vexurCalendarConfig } from "@/lib/vexur-calendar";

function refreshVexurWidgets() {
  window.VexurWidgetLoader?.refresh?.();
}

type VexurBlogEmbedProps =
  | { placement: "archive"; postSlug?: never; className?: string }
  | { placement: "post"; postSlug: string; className?: string };

export function VexurBlogEmbed({ placement, postSlug, className = "", initialHtml = "" }: VexurBlogEmbedProps & { initialHtml?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const repair = () => {
      const host = hostRef.current;
      if (!host) return;
      const roots: (Element | ShadowRoot)[] = [host];
      for (let i = 0; i < roots.length; i++) {
        roots[i].querySelectorAll("*").forEach(element => { if (element.shadowRoot) roots.push(element.shadowRoot); });
        roots[i].querySelectorAll<HTMLAnchorElement>("a.blog-card").forEach(card => {
          const entry = Object.entries(reviewedPosts).find(([slug]) => card.href.includes("/blog/" + slug));
          if (!entry) return;
          const title = card.querySelector(".blog-card-title"), excerpt = card.querySelector(".blog-card-excerpt");
          if (title) title.textContent = entry[1].title;
          if (excerpt) excerpt.textContent = entry[1].description;
        });
      }
    };
    const interval = window.setInterval(repair, 400);
    const stop = window.setTimeout(() => window.clearInterval(interval), 12000);
    return () => { window.clearInterval(interval); window.clearTimeout(stop); };
  }, [placement, postSlug]);
  useEffect(() => {
    // Nudge the loader a few times in case the script mounts after React.
    const timers = [0, 200, 800, 2000].map((ms) =>
      window.setTimeout(refreshVexurWidgets, ms),
    );
    return () => timers.forEach(clearTimeout);
  }, [placement, postSlug]);

  return (
    <div ref={hostRef} className={`vexur-blog-shell ${className}`.trim()}>
      <div
        key={`${placement}:${postSlug ?? ""}`}
        className="vexur-widget w-full"
        data-widget="blog"
        data-agent={vexurCalendarConfig.agentId}
        data-loader="v2"
        data-theme={vexurCalendarConfig.theme}
        data-primary-color={vexurCalendarConfig.primaryColor}
        data-consent="pending"
        data-vx-no-fallback="true"
        data-vx-param-placement={placement}
        {...(postSlug ? { "data-vx-param-slug": postSlug } : {})}
        dangerouslySetInnerHTML={{ __html: initialHtml }}
      />
    </div>
  );
}
