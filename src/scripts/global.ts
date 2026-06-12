// Global JS import system. Belongs on "/src/layouts/CommonHead.astro"
import "@scripts/global/theme-load";            // Loads the LocalStorage'd preferred theme from the user's browser
import "@scripts/global/theme-sync";            // Keeps theme togglers in sync (mobile & desktop)
import "@scripts/global/google-analytics";      // Google Analytics initializer

import AOS from "aos";
import { initGoogleAnalytics } from "@scripts/global/google-analytics";
import { initSW } from "@scripts/global/service_worker_reg";

// Manually initialize GA4 & AOS
initGoogleAnalytics(); initSW();
AOS.init({ duration: 800 });