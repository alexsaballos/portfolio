import { PERSONAL } from "./personal";

// Pictures used on Intro.astro & Categories.astro
import profilePicture from "../images/pfp.jpg"
import projects from "../images/projects.jpg"
import experience from "../images/experience.jpg"
import certifications from "../images/certifications.jpg"
import honors from "../images/honors.jpg"

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
    pictures: {
        PFP: profilePicture,
        categories: {
            projects: projects,
            experience: experience,
            certifications: certifications,
            honors: honors
        }
    },
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
        wisp: {
            href: "#wisp",
            title: "WISP Icon",
            desc: "Square with Rounded Corners - WISP Logo.",
            size: "md"
        },
        hu: {
            href: "#hu",
            title: "Harding University Icon",
            desc: "Square with Rounded Corners - Harding University Logo.",
            size: "md"
        },

        // Porfolio categories icons
        projects: {
            href: "#projects",
            title: "Microprocessor Projects Icon",
            desc: "Microprocessor Symbolizing Electrical Engineering & Software Projects",
            size: "md"
        },
        experience: {
            href: "#experience",
            title: "Briefcase Icon",
            desc: "Representing Work Experience Across Different Industries",
            size: "md"
        },
        certifications: {
            href: "#certifications",
            title: "Certifications Icon",
            desc: "Licences & Certifications Obtained Throughout my Career",
            size: "md"
        },
        honors: {
            href: "#honors",
            title: "Award Icon",
            desc: "Awards to Reinforce my Current Portfolio",
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
            size: "sm"
        },
        moon: {
            href: "#moon",
            title: "Moon Icon",
            desc: "Representing Dark Mode on Theme Toggles (NavBar & Hamburger Menu).",
            size: "sm"
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
    technologies: {
        antdesign: {
            href: "#antdesign",
            title: "Ant Design Logo",
            desc: "UI Library used in Web Development",
            size: "md"
        },
        arduino: {
            href: "#arduino",
            title: "Arduino Logo",
            desc: "Hardware Platform used in Robotics",
            size: "md"
        },
        astro: {
            href: "#astro",
            title: "Astro Logo",
            desc: "Framework used in Web Development",
            size: "md"
        },
        axios: {
            href: "#axios",
            title: "Axios Logo",
            desc: "API Library used in Web Development",
            size: "md"
        },
        c: {
            href: "#c",
            title: "C Logo",
            desc: "Programming Language used in Embedded Systems",
            size: "md"
        },
        cpp: {
            href: "#cpp",
            title: "C++ Logo",
            desc: "Programming Language used in Desktop Apps",
            size: "md"
        },
        csharp: {
            href: "#csharp",
            title: "C# Logo",
            desc: "Programming Language used in Desktop Apps",
            size: "md"
        },
        css: {
            href: "#css",
            title: "CSS3 Logo",
            desc: "Styling Language used in Web Development",
            size: "md"
        },
        daisyui: {
            href: "#daisyui",
            title: "daisyUI Logo",
            desc: "UI Library used in Web Development",
            size: "md"
        },
        flask: {
            href: "#flask",
            title: "Flask Logo",
            desc: "Framework used in Backend",
            size: "md"
        },
        html: {
            href: "#html",
            title: "HTML5 Logo",
            desc: "Markup Language used in Web Development",
            size: "md"
        },
        java: {
            href: "#java",
            title: "Java Logo",
            desc: "Programming Language used in Desktop Apps",
            size: "md"
        },
        javascript: {
            href: "#javascript",
            title: "JavaScript Logo",
            desc: "Programming Language used in Web Development",
            size: "md"
        },
        mysql: {
            href: "#mysql",
            title: "MySQL Logo",
            desc: "Relational Database used in Backend",
            size: "md"
        },
        opencv: {
            href: "#opencv",
            title: "OpenCV Logo",
            desc: "Library used in Robotics",
            size: "md"
        },
        php: {
            href: "#php",
            title: "PHP Logo",
            desc: "Programming Language used in Web Development",
            size: "md"
        },
        python: {
            href: "#python",
            title: "Python Logo",
            desc: "Programming Language used in Backend & Robotics",
            size: "md"
        },
        raspberrypi: {
            href: "#raspberrypi",
            title: "Raspberry Pi Logo",
            desc: "Hardware Platform used in Robotics",
            size: "md"
        },
        react: {
            href: "#react",
            title: "React Logo",
            desc: "UI Library used in Web Development",
            size: "md"
        },
        sqlite: {
            href: "#sqlite",
            title: "SQLite Logo",
            desc: "Relational Database used in Backend",
            size: "md"
        },
        tailwindcss: {
            href: "#tailwindcss",
            title: "TailwindCSS Logo",
            desc: "CSS Library used in Web Development",
            size: "md"
        },
        typescript: {
            href: "#typescript",
            title: "TypeScript Logo",
            desc: "Programming Language used in Web Development",
            size: "md"
        },
        winui: {
            href: "#winui",
            title: "WinUI Logo",
            desc: "Framework used in Desktop Apps",
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