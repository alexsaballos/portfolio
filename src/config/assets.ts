import { PERSONAL } from "./personal";

// Pictures used on Projects.astro
// Pictures used on Experience.astro
// Pictures used on Certifications.astro
// Pictures used on Honors.astro
// Pictures used on Contact.astro

// Base URL for all needed SVGs
const faviconsPath = `${PERSONAL.base}favicons/`;
const brandsPath = `${PERSONAL.base}assets/logos/brands/`;
const flagsPath = `${PERSONAL.base}assets/flags/`;

// Complete SVG Asset Reference - Icon sprites, main logos, and brands
export type IconKey = keyof typeof ASSETS.icons;
export type IconData = (typeof ASSETS.icons)[IconKey];
export const ASSETS = {
    icons: {
        // Main contact information
        email: {
            href: "#email",
            title: "Email Icon",
            desc: "Square with Round Corners - An envelope representing email communication.",
            size: "sm"
        },
        phone: {
            href: "#phone",
            title: "Phone Icon",
            desc: "A ringing phone representing mobile phone communication.",
            size: "sm"
        },

        // Social media icons
        linkedin: {
            href: "#linkedin",
            title: "LinkedIn Icon",
            desc: "Square with Rounded Corners - Linkedin Logo.",
            size: "md"
        },
        github: {
            href: "#github",
            title: "GitHub Icon",
            desc: "Square with Rounded Corners - GitHub Logo.",
            size: "md"
        },
        handshake: {
            href: "#handshake",
            title: "Handshake Icon",
            desc: "Square with Rounded Corners - Handshake Logo.",
            size: "md"
        },
        merit: {
            href: "#merit",
            title: "Merit Pages Icon",
            desc: "Square with Rounded Corners - Merit Pages Logo.",
            size: "md"
        },

        // Hamburger Menu available only on medium screens and downward to replace navbar
        hamburger_menu: {
            href: "#hamburger_menu",
            title: "Hamburger Menu Icon",
            desc: "Hamburger Menu Opening on Mobile Devices.",
            size: "md"
        },
        hamburger_close: {
            href: "#hamburger_close",
            title: "Hamburger Close Icon",
            desc: "Hamburger Meny Closing on Mobile Devices.",
            size: "md"
        },

        // Theme-controller icons for both hamburger menu and navbar
        sun: {
            href: "#sun",
            title: "Sun Icon",
            desc: "Representing Light Mode on Theme Toggles (NavBar & Hamburger Menu).",
            size: "xl"
        },
        moon: {
            href: "#moon",
            title: "Moon Icon",
            desc: "Representing Dark Mode on Theme Toggles (NavBar & Hamburger Menu).",
            size: "xl"
        },

        // Change language icon for border tab widget
        translate: {
            href: "#translate",
            title: "Change Language Icon",
            desc: "Translate Tab Icon inside a right-screen-border fixed widget.",
            size: "sm"
        },

        // Up & Down Elevator-styled icon scrollers
        chevron_up: {
            href: "#chevron_up",
            title: "Scroll Up Icon",
            desc: "Scroll to Top Icon represented by a Chevron Up Icon inside a button.",
            size: "lg"
        },
        chevron_down: {
            href: "#chevron_down",
            title: "Scroll Down Icon",
            desc: "Scroll to Bottom Icon represented by a Chevron Down Icon inside a button.",
            size: "lg"
        },

        // Supported Devices & Developer - Footer Copyright Notice
        devices: {
            href: "#devices",
            title: "Supported Devices Icon",
            desc: "All of our supported devices for this website",
            size: "md"
        }
    },
    brands: {
        light: {
            seloon_light: `${brandsPath}seloon_light.svg`,
            wells: `${brandsPath}wells.svg`,
            vesna_light: `${brandsPath}vesna_light.svg`,
            cedes_light: `${brandsPath}cedes_light.svg`,
            orona: `${brandsPath}orona.svg`,
            thyssenkrupp: `${brandsPath}thyssenkrupp.svg`,
            hidral: `${brandsPath}hidral.svg`
        },
        dark: {
            seloon_dark: `${brandsPath}seloon_dark.svg`,
            wells: `${brandsPath}wells.svg`,
            vesna_dark: `${brandsPath}vesna_dark.svg`,
            cedes_dark: `${brandsPath}cedes_dark.svg`,
            orona: `${brandsPath}orona.svg`,
            thyssenkrupp: `${brandsPath}thyssenkrupp.svg`,
            hidral: `${brandsPath}hidral.svg`
        }
    },
    flags: {
        de: `${flagsPath}de-de.svg`,
        en: `${flagsPath}en-us.svg`,
        es: `${flagsPath}es-mx.svg`
    }
} as const;

// Complete manifest.webmanifest Reference - Android, Apple, Microsoft, and Safari
export const FAVICONS = {
    android192: `${faviconsPath}android-chrome-192x192.png`,
    android512: `${faviconsPath}android-chrome-512x512.png`,
    apple120: `${faviconsPath}apple-touch-icon-120x120.png`,
    apple152: `${faviconsPath}apple-touch-icon-152x152.png`,
    apple167: `${faviconsPath}apple-touch-icon-167x167.png`,
    apple180: `${faviconsPath}apple-touch-icon-180x180.png`,
    mstile150: `${faviconsPath}microsoft-tile-150x150.png`,
    safari_mask: `${faviconsPath}safari-pinned-tab.svg`
} as const;