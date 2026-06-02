import { initGoogleAnalytics } from "@scripts/google-analytics.ts";

const pageType = (document.head.getAttribute("data-analytics-type") ?? "standard") as ("standard" | "vanity" | "error");
initGoogleAnalytics(pageType);