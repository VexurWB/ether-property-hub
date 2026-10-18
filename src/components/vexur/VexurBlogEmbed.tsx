"use client";

import { useEffect } from "react";
import { vexurCalendarConfig } from "@/lib/vexur-calendar";

function refreshVexurWidgets() {
  window.VexurWidgetLoader?.refresh?.();
}

type VexurBlogEmbedProps =
  | { placement: "archive"; postSlug?: never; className?: string }
  | { placement: "post"; postSlug: string; className?: string };

export function VexurBlogEmbed({ placement, postSlug, className = "" }: VexurBlogEmbedProps) {
  useEffect(() => {
    // Nudge the loader a few times in case the script mounts after React.
    const timers = [0, 200, 800, 2000].map((ms) =>
      window.setTimeout(refreshVexurWidgets, ms),
    );
    return () => timers.forEach(clearTimeout);
  }, [placement, postSlug]);

  return (
    <div className={`vexur-blog-shell ${className}`.trim()}>
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
      />
    </div>
  );
}
