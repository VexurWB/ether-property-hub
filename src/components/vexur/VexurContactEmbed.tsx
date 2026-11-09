"use client";

import { useEffect } from "react";
import { vexurCalendarConfig, vexurContactConfig } from "@/lib/vexur-calendar";

function refreshVexurWidgets() {
  window.VexurWidgetLoader?.refresh?.();
}

export function VexurContactEmbed({ className = "" }: { className?: string }) {
  useEffect(() => {
    // Nudge the loader a few times in case the script mounts after React.
    const timers = [0, 200, 800, 2000].map((ms) =>
      window.setTimeout(refreshVexurWidgets, ms),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={`vexur-contact-shell ${className}`.trim()}>
      <div
        className="vexur-widget w-full"
        data-widget="contact"
        data-agent={vexurCalendarConfig.agentId}
        data-loader="v2"
        data-theme={vexurCalendarConfig.theme}
        data-primary-color={vexurCalendarConfig.primaryColor}
        data-show-branding="true"
        data-consent="pending"
        data-vx-no-fallback="true"
        data-vx-param-form-widget-build-id={vexurContactConfig.formWidgetBuildId}
        data-vx-param-form-id={vexurContactConfig.formId}
        data-vx-param-v={vexurContactConfig.version}
      />
    </div>
  );
}
