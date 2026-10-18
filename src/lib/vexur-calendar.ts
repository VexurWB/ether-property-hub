export const vexurCalendarConfig = {
  agentId: "c031b3d4-f280-41dd-9503-b79122c9111d",
  primaryColor: "#b8860b",
  theme: "light",
  loaderUrl: "https://embed.vexur.com.au/v1/loader.js",
  embedOrigin: "https://embed.vexur.com.au",
  buildId: "calendar-1afed4b2",
  version: "2026-10-15T04:37:19.782205+00:00",
} as const;

export const vexurContactConfig = {
  formId: "dcf585c0-e9b9-4a27-a6a7-f7b86170426f",
  formWidgetBuildId: "form-dcf585c0-e9b9-4a27-a6a7-f7b86170426f",
  version: "2026-09-28T23:55:34.372365+00:00",
} as const;

declare global {
  interface Window {
    VexurWidgetLoader?: {
      version: string;
      mountAll: () => void;
      refresh: () => void;
    };
  }
}
