import { vexurCalendarConfig } from "@/lib/vexur-calendar";

export function VexurCalendarEmbed({ className = "" }: { className?: string }) {
  return (
    <div
      className={`vexur-widget ${className}`.trim()}
      data-widget="calendar"
      data-agent={vexurCalendarConfig.agentId}
      data-loader="v2"
      data-theme={vexurCalendarConfig.theme}
      data-primary-color={vexurCalendarConfig.primaryColor}
      data-show-branding="true"
      data-consent="pending"
      data-vx-no-fallback="true"
      data-vx-param-calendar-widget-build-id={vexurCalendarConfig.buildId}
      data-vx-param-renderer="calendar-render-v2"
      data-vx-param-v={vexurCalendarConfig.version}
    />
  );
}
