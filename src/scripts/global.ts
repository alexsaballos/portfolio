// Global JS import system. Belongs on "/src/layouts/CommonHead.astro"
import "@scripts/aos.ts";               // Enables and executes AOS (Animate on Scroll)
import "@scripts/loader.ts";            // Enables and executes a loading bar at the website's top
import "@scripts/theme-load.ts";        // Loads the LocalStorage'd preferred theme from the user's browser
import "@scripts/theme-sync.ts";        // Keeps theme togglers in sync (mobile & desktop)
import "@scripts/google-analytics.ts";  // Google Analytics initializer

import { initGoogleAnalytics } from "@scripts/google-analytics.ts";
import { initAOS } from "@scripts/aos.ts";

initAOS(); initGoogleAnalytics();