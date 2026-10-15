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
  formId: "ff378c00-73b3-4233-b415-54846a00dd24",
  formWidgetBuildId: "form-ff378c00-73b3-4233-b415-54846a00dd24",
  version: "2026-07-13T10:04:32.973+00:00",
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
