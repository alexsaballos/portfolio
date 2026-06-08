// Global JS import system. Belongs on "/src/layouts/CommonHead.astro"
import "@scripts/loader.ts";                // Enables and executes a loading bar at the website's top
import "@scripts/theme-load.ts";            // Loads the LocalStorage'd preferred theme from the user's browser
import "@scripts/theme-sync.ts";            // Keeps theme togglers in sync (mobile & desktop)
import "@scripts/google-analytics.ts";      // Google Analytics initializer

import AOS from "aos";
import { initGoogleAnalytics } from "@scripts/google-analytics.ts";
import { initSW } from "@scripts/service_worker_reg.ts";

// Manually initialize GA4 & AOS
initGoogleAnalytics(); //initSW();
AOS.init({ duration: 800 });