import type { VideosListType, PicturesListType, IconsListType, TechnologiesListType, FlagsListType, FaviconListType, PathsListType } from "../types/AssetsType";

// Picture used on OgImage & Intro.astro
import pfpPicture from "../images/intro/pfp.jpg"

// Pictures used on LanguageGate.astro
import de from "../images/flags/de.jpg";
import mx from "../images/flags/mx.jpg";
import us from "../images/flags/us.jpg";

// Pictures used on Categories.astro
import projectsPicture from "../images/categories/projects.jpg"
import experiencePicture from "../images/categories/experience.jpg"
import leadershipPicture from "../images/categories/leadership.jpg"
import certificationsPicture from "../images/categories/certifications.jpg"
import honorsPicture from "../images/categories/honors.jpg"

// TODO:
// Pictures used on Projects.astro
// Pictures used on Experience.astro
// Pictures used on Certifications.astro
// Pictures used on Honors.astro
// Pictures used on Contact.astro

const TECHNOLOGIES_COLORS = {
    embedded: "#D48D17",
    systems: "#3168B5",
    web: "#524391",
    databases: "#509636",
    administration: "#BA5656",
    tools: "#5E5E5E",
}

// COMPLETE ABSOLUTE PATHS REFERENCE
// Absolute Paths needed for all Client-side Assets & JS
export const PATHS: PathsListType = {
    scripts: "/scripts/",
    favicons: "/assets/favicons/",
    pictures: "/assets/pictures/",
    videos: "/assets/videos/"
} as const;

// COMPLETE PICTURES & VIDEOS REFERENCE
// Complete Pictures Reference
export const VIDEOS: VideosListType = {
    IntroVideo: `${PATHS.videos}intro.webm`
} as const;

// Complete Videos Reference
export const PICTURES: PicturesListType = {
    ogImage: `${PATHS.pictures}og_image.png`,
    PFP: pfpPicture,
    categories: {
        projects: projectsPicture,
        experience: experiencePicture,
        leadership: leadershipPicture,
        certifications: certificationsPicture,
        honors: honorsPicture
    }
} as const;

// COMPLETE SVG ASSETS REFERENCE
// Complete UI Icons Reference
export const ICONS: IconsListType = {
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

    // Coming soon
    hourglass: {
        href: "#hourglass",
        title: "Hourglass Icon",
        desc: "Coming soon item.",
        size: "dxl"
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
    hamburger_open: {
        href: "#hamburger_open",
        title: "Hamburger Open Icon",
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
} as const;

// Complete Technologies Reference
export const TECHNOLOGIES: TechnologiesListType = {
    antdesign: {
        name: "AntDesign",
        key: "antdesign",
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
        key: "arduino",
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
        key: "astro",
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
        key: "autocad",
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
        key: "axios",
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
        key: "baremetal",
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
    bootstrap: {
        name: "Bootstrap",
        key: "bootstrap",
        color: TECHNOLOGIES_COLORS.web,
        icon: {
            href: "#bootstrap",
            title: "Bootstrap Logo",
            desc: "UI Library used in Web Development",
            size: "md"
        },
        kind: "UI Library",
        domains: ["Web Development"]
    },
    c: {
        name: "C",
        key: "c",
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
        key: "cpanel",
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
        key: "cpp",
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
        key: "csharp",
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
        key: "css",
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
        key: "daisyui",
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
        key: "directus",
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
        key: "flask",
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
        key: "html",
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
        key: "java",
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
        key: "javascript",
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
        key: "kicad",
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
        key: "multisim",
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
        key: "mysql",
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
        key: "opencv",
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
        key: "php",
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
        key: "phpmyadmin",
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
        key: "python",
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
        key: "raspberrypi",
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
        key: "react",
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
        key: "sketchup",
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
        key: "sqlite",
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
        key: "tailwindcss",
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
        key: "typescript",
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
        key: "ultiboard",
        color: TECHNOLOGIES_COLORS.embedded,
        icon: {
            href: "#multisim",
            title: "UltiBoard Logo",
            desc: "Engineering CAD Tool used in PCB Creation",
            size: "md"
        },
        kind: "CAD Tool",
        domains: ["PCB Creation"]
    },
    winui: {
        name: "WinUI",
        key: "winui",
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
} as const;

// Complete Flag Icons Reference
export const FLAGS: FlagsListType = {
    de: {
        picture: de,
        icon: {
            href: "#de",
            title: "Germany Flag Icon",
            desc: "Rounded Minimalistic Germany Flag",
            size: "sm"
        }
    },
    mx: {
        picture: mx,
        icon: {
            href: "#mx",
            title: "Mexico Flag Icon",
            desc: "Rounded Minimalistic Mexico Flag",
            size: "sm"
        }
    },
    us: {
        picture: us,
        icon: {
            href: "#us",
            title: "United States Flag Icon",
            desc: "Rounded Minimalistic United States Flag",
            size: "sm"
        }
    }
} as const;

// COMPLETE WEBMANIFEST REFERENCE
// Complete manifest.webmanifest Reference - Android, Apple, Microsoft, and Safari
export const FAVICONS: FaviconListType = {
    android192: {
        src: `${PATHS.favicons}android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png"
    },
    android512: {
        src: `${PATHS.favicons}android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png"
    },
    apple120: {
        src: `${PATHS.favicons}apple-touch-icon-120x120.png`,
        sizes: "120x120",
        type: "image/png"
    },
    apple152: {
        src: `${PATHS.favicons}apple-touch-icon-152x152.png`,
        sizes: "152x152",
        type: "image/png"
    },
    apple167: {
        src: `${PATHS.favicons}apple-touch-icon-167x167.png`,
        sizes: "167x167",
        type: "image/png"
    },
    apple180: {
        src: `${PATHS.favicons}apple-touch-icon-180x180.png`,
        sizes: "180x180",
        type: "image/png"
    },
    mstile150: {
        src: `${PATHS.favicons}microsoft-tile-150x150.png`,
        sizes: "150x150",
        type: "image/png"
    },
    safari_mask: {
        src: `${PATHS.favicons}safari-pinned-tab.svg`,
        type: "image/svg+xml",
        purpose: "maskable"
    }
} as const;