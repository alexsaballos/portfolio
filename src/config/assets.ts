import { PERSONAL } from "./personal";
import type { AssetsType } from "../types/AssetsType";

// Pictures used on Intro.astro & Categories.astro
import profilePicture from "../images/pfp.jpg"
import projects from "../images/projects.jpg"
import experience from "../images/experience.jpg"
import leadership from "../images/leadership.jpg"
import certifications from "../images/certifications.jpg"
import honors from "../images/honors.jpg"

// Pictures used on Projects.astro
// Pictures used on Experience.astro
// Pictures used on Certifications.astro
// Pictures used on Honors.astro
// Pictures used on Contact.astro

// Base URL for all needed Favicons
const faviconsPath: string = `${PERSONAL.base}favicons/`;

const TECHNOLOGIES_COLORS = {
    embedded: "#D48D17",
    systems: "#3168B5",
    web: "#524391",
    databases: "#509636",
    administration: "#BA5656",
    tools: "#5E5E5E",
}

// Complete SVG Asset Reference - Icon sprites, main logos, and brands
export const ASSETS: AssetsType = {
    pictures: {
        PFP: profilePicture,
        categories: {
            projects: projects,
            experience: experience,
            leadership: leadership,
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
        leadership: {
            href: "#leadership",
            title: "Users with Gear Icon",
            desc: "Representing Leadership Experience Across Different Areas",
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
        contact: {
            href: "#contact",
            title: "Envelope Icon",
            desc: "Contact Information for my Portfolio's Viewers",
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
            desc: "Hamburger Menu Closing on Mobile Devices.",
            size: "md"
        },
        home: {
            href: "#home",
            title: "Home Icon",
            desc: "Home Icon that Redirects to the Main Page",
            size: "sm"
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

        // Up & Down icon scrollers
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
        angles_down: {
            href: "#angles_down",
            title: "Scroll Down into the Website",
            desc: "Scroll Down Invitation denoted by a Double Down Angle Icon.",
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
            name: "AntDesign",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#antdesign",
                title: "Ant Design Logo",
                desc: "UI Library used in Web Development",
                size: "md"
            },
            kind: "UI Library",
            domains: ["Web Development"]
        },
        arduino: {
            name: "Arduino",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: {
                href: "#arduino",
                title: "Arduino Logo",
                desc: "Hardware Platform used in Robotics",
                size: "md"
            },
            kind: "Embedded Platfrom",
            domains: ["Robotics"]
        },
        astro: {
            name: "Astro",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#astro",
                title: "Astro Logo",
                desc: "Framework used in Web Development",
                size: "md"
            },
            kind: "Framework",
            domains: ["Web Development"]
        },
        autocad: {
            name: "AutoCAD",
            color: TECHNOLOGIES_COLORS.tools,
            icon: {
                href: "#autocad",
                title: "AutoCAD Logo",
                desc: "Engineering CAD Tool used in Diagram Creation",
                size: "md"
            },
            kind: "CAD Tool",
            domains: ["Diagram Creation"]
        },
        axios: {
            name: "Axios",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#axios",
                title: "Axios Logo",
                desc: "API Library used in Web Development",
                size: "md"
            },
            kind: "Library",
            domains: ["Web Development"]
        },
        baremetal: {
            name: "Bare-Metal Embedded",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: {
                href: "#microprocessor",
                title: "Microprocessor Icon",
                desc: "Microprocessor/Microcontroller used in Embedded Systems",
                size: "md"
            },
            kind: "Embedded Systems",
            domains: ["Microcontrollers", "Firmware", "Robotics"]
        },
        c: {
            name: "C",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#c",
                title: "C Logo",
                desc: "Programming Language used in Embedded Systems",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Embedded Systems"]
        },
        cpanel: {
            name: "cPanel",
            color: TECHNOLOGIES_COLORS.administration,
            icon: {
                href: "#cpanel",
                title: "cpanel Logo",
                desc: "Administration Panel used in Backend Management",
                size: "md"
            },
            kind: "Administration Panel",
            domains: ["Backend"]
        },
        cpp: {
            name: "C++",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#cpp",
                title: "C++ Logo",
                desc: "Programming Language used in Desktop Apps",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Desktop Apps"]
        },
        csharp: {
            name: "C#",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#csharp",
                title: "C# Logo",
                desc: "Programming Language used in Desktop Apps",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Desktop Apps"]
        },
        css: {
            name: "CSS",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#css",
                title: "CSS3 Logo",
                desc: "Styling Language used in Web Development",
                size: "md"
            },
            kind: "Styling Language",
            domains: ["Web Development"]
        },
        daisyui: {
            name: "daisyUI",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#daisyui",
                title: "daisyUI Logo",
                desc: "UI Library used in Web Development",
                size: "md"
            },
            kind: "UI Library",
            domains: ["Web Development"]
        },
        directus: {
            name: "Directus",
            color: TECHNOLOGIES_COLORS.administration,
            icon: {
                href: "#directus",
                title: "directus Logo",
                desc: "Administration Panel used in Content Management",
                size: "md"
            },
            kind: "Administration Panel",
            domains: ["Backend"]
        },
        flask: {
            name: "Flask",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#flask",
                title: "Flask Logo",
                desc: "Framework used in Backend",
                size: "md"
            },
            kind: "Framework",
            domains: ["Backend"]
        },
        html: {
            name: "HTML",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#html",
                title: "HTML5 Logo",
                desc: "Markup Language used in Web Development",
                size: "md"
            },
            kind: "Markup Language",
            domains: ["Web Development"]
        },
        java: {
            name: "Java",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#java",
                title: "Java Logo",
                desc: "Programming Language used in Desktop Apps",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Desktop Apps"]
        },
        javascript: {
            name: "JavaScript",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#javascript",
                title: "JavaScript Logo",
                desc: "Programming Language used in Web Development",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Web Development"]
        },
        kicad: {
            name: "KiCAD",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: {
                href: "#kicad",
                title: "KiCAD Logo",
                desc: "Engineering CAD Tool used in PCB Creation",
                size: "md"
            },
            kind: "CAD Tool",
            domains: ["PCB Creation"]
        },
        multisim: {
            name: "MultiSim",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: {
                href: "#multisim",
                title: "MultiSim Logo",
                desc: "Simulation Tool used in Electronics & Schematics Creation",
                size: "md"
            },
            kind: "Simulation Tool",
            domains: ["Electronics", "Schematics Generation"]
        },
        mysql: {
            name: "MySQL",
            color: TECHNOLOGIES_COLORS.databases,
            icon: {
                href: "#mysql",
                title: "MySQL Logo",
                desc: "Relational Database used in Backend",
                size: "md"
            },
            kind: "Relational Database",
            domains: ["Backend"]
        },
        opencv: {
            name: "OpenCV",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: {
                href: "#opencv",
                title: "OpenCV Logo",
                desc: "Library used in Robotics",
                size: "md"
            },
            kind: "Library",
            domains: ["Robotics"]
        },
        php: {
            name: "PHP",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#php",
                title: "PHP Logo",
                desc: "Programming Language used in Web Development",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Web Development"]
        },
        phpmyadmin: {
            name: "phpMyAdmin",
            color: TECHNOLOGIES_COLORS.administration,
            icon: {
                href: "#phpmyadmin",
                title: "phpMyAdmin Logo",
                desc: "Administration Panel used in Backend Management",
                size: "md"
            },
            kind: "Administration Panel",
            domains: ["Backend"]
        },
        python: {
            name: "Python",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#python",
                title: "Python Logo",
                desc: "Programming Language used in Backend & Robotics",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Backend", "Robotics"]
        },
        raspberrypi: {
            name: "Raspberry Pi",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: {
                href: "#raspberrypi",
                title: "Raspberry Pi Logo",
                desc: "Hardware Platform used in Robotics",
                size: "md"
            },
            kind: "Hardware",
            domains: ["Robotics"]
        },
        react: {
            name: "React",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#react",
                title: "React Logo",
                desc: "UI Library used in Web Development",
                size: "md"
            },
            kind: "UI Library",
            domains: ["Web Development"]
        },
        sketchup: {
            name: "SketchUp",
            color: TECHNOLOGIES_COLORS.tools,
            icon: {
                href: "#sketchup",
                title: "SketchUp Logo",
                desc: "Engineering CAD Tool used in 3D Modeling",
                size: "md"
            },
            kind: "CAD Tool",
            domains: ["3D Modeling"]
        },
        sqlite: {
            name: "SQLite",
            color: TECHNOLOGIES_COLORS.databases,
            icon: {
                href: "#sqlite",
                title: "SQLite Logo",
                desc: "Relational Database used in Backend",
                size: "md"
            },
            kind: "Relational Database",
            domains: ["Backend"]
        },
        tailwindcss: {
            name: "TailwindCSS",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#tailwindcss",
                title: "TailwindCSS Logo",
                desc: "CSS Library used in Web Development",
                size: "md"
            },
            kind: "CSS Library",
            domains: ["Web Development"]
        },
        typescript: {
            name: "TypeScript",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#typescript",
                title: "TypeScript Logo",
                desc: "Programming Language used in Web Development",
                size: "md"
            },
            kind: "Programming Language",
            domains: ["Web Development"]
        },
        ultiboard: {
            name: "UltiBoard",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: {
                href: "#ultiboard",
                title: "UltiBoard Logo",
                desc: "Engineering CAD Tool used in PCB Creation",
                size: "md"
            },
            kind: "CAD Tool",
            domains: ["PCB Creation"]
        },
        winui: {
            name: "WinUI",
            color: TECHNOLOGIES_COLORS.systems,
            icon: {
                href: "#winui",
                title: "WinUI Logo",
                desc: "Framework used in Desktop Apps",
                size: "md"
            },
            kind: "Framework",
            domains: ["Desktop Apps"]
        }
    },
    flags: {
        de: {
            href: "#de",
            title: "Germany Flag Icon",
            desc: "Rounded Minimalistic Germany Flag",
            size: "sm"
        },
        us: {
            href: "#us",
            title: "United States Flag Icon",
            desc: "Rounded Minimalistic United States Flag",
            size: "sm"
        },
        mx: {
            href: "#mx",
            title: "Mexico Flag Icon",
            desc: "Rounded Minimalistic Mexico Flag",
            size: "sm"
        }
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