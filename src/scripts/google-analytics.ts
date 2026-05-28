import { METADATA } from "@config/meta";

const GA_ID = METADATA.api_keys.google_analytics.measurement_id;

// Sends a raw pageview payload to Google's servers
const configureGoogleTag = (sendPageview: boolean): void => {
    if (typeof window.gtag === "function") {
        window.gtag("js", new Date());
        window.gtag("config", GA_ID, {
            send_page_view: sendPageview,
            transport_type: "beacon",
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
};

// Fires custom events safely anywhere app-wide
export const logAnalyticsEvent = (eventName: string, params: Record<string, any> = {}): void => {
    if (typeof window.gtag === "function")
        window.gtag("event", eventName, { ...params, transport_type: "beacon" });
};

// GA Initialization system handling standard paths, errors, and redirects
export const initGoogleAnalytics = (pageType: "standard" | "error" | "vanity" = "standard"): void => {
    
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
    
    switch (pageType) {
        case "vanity": {
            configureGoogleTag(false);
            logAnalyticsEvent("vanity_redirect", { target_vanity_profile: window.location.pathname });
            return;
        }
        case "error": {
            configureGoogleTag(false);
            logAnalyticsEvent("server_error", { server_error_code: document.title });
            return;
        }
        default: {
            // Standard Pages: Check for active background pre-rendering states
            if (document.prerendering) {
                configureGoogleTag(false);
                document.addEventListener("prerenderingchange", () => { configureGoogleTag(true); }, { once: true });
            }
            else configureGoogleTag(true);
        }
    }
};