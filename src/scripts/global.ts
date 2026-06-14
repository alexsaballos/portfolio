// Global JS import system. Belongs ONLY "/src/layouts/CommonHead.astro"
import "@scripts/global/google-analytics";
import AOS from "aos";

import { registerSW } from "virtual:pwa-register";
import { initGoogleAnalytics } from "@scripts/global/google-analytics";

// Manually initialize: GlobalThemeLoader, GA4, AstroPWA's Service Worker, AOS
initGoogleAnalytics();
registerSW({ immediate: true });
AOS.init({ duration: 800, disableMutationObserver: true });