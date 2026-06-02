import { SYSTEM } from "@config/links";
import type {
    VideosListType, PicturesListType, IconsListType, TechnologiesListType, FlagsListType, FaviconListType, PathsListType,
    ScreenshotsListType
} from "@typing/AssetsType";

// Picture used on OgImage & Intro.astro
import pfpPicture from "@images/intro/pfp.jpg"

// Pictures used on LanguageGate.astro
import de from "@images/flags/de.jpg";
import mx from "@images/flags/mx.jpg";
import us from "@images/flags/us.jpg";

// Pictures used on Categories.astro
import projectsPicture from "@images/categories/projects.jpg"
import experiencePicture from "@images/categories/experience.jpg"
import leadershipPicture from "@images/categories/leadership.jpg"
import certificationsPicture from "@images/categories/certifications.jpg"
import honorsPicture from "@images/categories/honors.jpg"
import contactPicture from "@images/categories/contact.jpg"

// TODO:
// Pictures used on Projects.astro
// Pictures used on Experience.astro
// Pictures used on Certifications.astro
import iasscPicture from "@images/logos/iassc.png"
import arpelsPicture from "@images/logos/arpels.png"
import cs50Picture from "@images/logos/cs50.png"
import courseraPicture from "@images/logos/coursera.png"

// Pictures used on Honors.astro
import nceesPicture from "@images/logos/ncees.png"
import huPicture from "@images/logos/hu.png"
import wispPicture from "@images/logos/wisp.png"

const TECHNOLOGIES_COLORS = {
    embedded: "#D48D17",
    software: "#3168B5",
    web: "#524391",
    databases: "#509636",
    operations: "#BA5656",
    tools: "#5E5E5E",
}

// COMPLETE ABSOLUTE PATHS REFERENCE
// Absolute Paths needed for all Client-side Assets
export const PATHS = {
    docs: "/assets/docs/",
    resume: "/assets/docs/resume/",
    favicons: "/assets/favicons/",
    screenshots: "/assets/screenshots/",
    pictures: "/assets/pictures/",
    videos: "/assets/videos/"
} as const satisfies PathsListType;

// Helper function to get a publicly served file (Astro/Vite untouched)
export const getPublicFile =
    (predefinedPath: keyof typeof PATHS, file: string): string => `${PATHS[predefinedPath]}${file}`;

// COMPLETE PICTURES & VIDEOS REFERENCE
// Complete Pictures Reference
export const VIDEOS = {
    IntroVideo: `${PATHS.videos}intro.webm`
} as const satisfies VideosListType;

// Complete Videos Reference
export const PICTURES = {
    ogImage: `${SYSTEM.domain}${PATHS.pictures}og_image.png`,
    PFP: pfpPicture,
    categories: {
        projects: projectsPicture,
        experience: experiencePicture,
        leadership: leadershipPicture,
        certifications: certificationsPicture,
        honors: honorsPicture,
        contact: contactPicture
    },
    certifications: {
        iassc: iasscPicture,
        arpels: arpelsPicture,
        cs50: cs50Picture,
        coursera: courseraPicture
    },
    honors: {
        ncees: nceesPicture,
        wisp: wispPicture,
        hu: huPicture
    }
} as const satisfies PicturesListType;

// COMPLETE SVG ASSETS REFERENCE
// Complete UI Icons Reference
export const ICONS = {
    // FLAGS GROUPING
    de: {
        name: "de",
        group: "flags",
        title: "Germany Flag Icon",
        desc: "Rounded Minimalistic Germany Flag",
        size: "sm"
    },
    mx: {
        name: "mx",
        group: "flags",
        title: "Mexico Flag Icon",
        desc: "Rounded Minimalistic Mexico Flag",
        size: "sm"
    },
    us: {
        name: "us",
        group: "flags",
        title: "United States Flag Icon",
        desc: "Rounded Minimalistic United States Flag",
        size: "sm"
    },

    // PROFILE GROUPING - Vanity Links
    linkedin: {
        name: "linkedin",
        group: "profiles",
        title: "LinkedIn Icon",
        desc: "Square with Rounded Corners - Linkedin Logo.",
        size: "lg"
    },
    github: {
        name: "github",
        group: "profiles",
        title: "GitHub Icon",
        desc: "Square with Rounded Corners - GitHub Logo.",
        size: "lg"
    },
    handshake: {
        name: "handshake",
        group: "profiles",
        title: "Handshake Icon",
        desc: "Square with Rounded Corners - Handshake Logo.",
        size: "lg"
    },
    merit: {
        name: "merit",
        group: "profiles",
        title: "Merit Pages Icon",
        desc: "Square with Rounded Corners - Merit Pages Logo.",
        size: "lg"
    },
    credly: {
        name: "credly",
        group: "profiles",
        title: "Credly Icon",
        desc: "Square with Rounded Corners - Credly Logo.",
        size: "lg"
    },
    wisp: {
        name: "wisp",
        group: "profiles",
        title: "WISP Icon",
        desc: "Square with Rounded Corners - WISP Logo.",
        size: "lg"
    },
    hu: {
        name: "hu",
        group: "profiles",
        title: "Harding University Icon",
        desc: "Square with Rounded Corners - Harding University Logo.",
        size: "lg"
    },
    coursera: {
        name: "coursera",
        group: "profiles",
        title: "Coursera Icon",
        desc: "Square with Rounded Corners - Coursera Logo.",
        size: "lg"
    },
    edx: {
        name: "edx",
        group: "profiles",
        title: "EdX Icon",
        desc: "Square with Rounded Corners - EdX Logo.",
        size: "lg"
    },
    googledev: {
        name: "googledev",
        group: "profiles",
        title: "Google Developers Icon",
        desc: "Square with Rounded Corners - Google Developers Logo.",
        size: "lg"
    },
    figma: {
        name: "figma",
        group: "profiles",
        title: "Figma Icon",
        desc: "Square with Rounded Corners - Figma Logo.",
        size: "lg"
    },
    gravatar: {
        name: "gravatar",
        group: "profiles",
        title: "Gravatar Icon",
        desc: "Square with Rounded Corners - Gravatar Logo.",
        size: "lg"
    },
    khanacademy: {
        name: "khanacademy",
        group: "profiles",
        title: "Khan Academy Icon",
        desc: "Square with Rounded Corners - Khan Academy Logo.",
        size: "lg"
    },
    orcid: {
        name: "orcid",
        group: "profiles",
        title: "Orcid Icon",
        desc: "Square with Rounded Corners - Orcid Logo.",
        size: "lg"
    },
    peoplecert: {
        name: "peoplecert",
        group: "profiles",
        title: "PeopleCert Icon",
        desc: "Square with Rounded Corners - PeopleCert Logo.",
        size: "lg"
    },
    quizlet: {
        name: "quizlet",
        group: "profiles",
        title: "Quizlet Icon",
        desc: "Square with Rounded Corners - Quizlet Logo.",
        size: "lg"
    },
    sidimaqsa: {
        name: "sidimaqsa",
        group: "profiles",
        title: "SIDIMAQSA Icon",
        desc: "Square with Rounded Corners - SIDIMAQSA Logo.",
        size: "lg"
    },

    // TECHNOLOGIES GROUPING
    antdesign: {
        name: "antdesign",
        group: "technologies",
        title: "Ant Design Logo",
        desc: "UI Library used in Web Development",
        size: "md"
    },
    arduino: {
        name: "arduino",
        group: "technologies",
        title: "Arduino Logo",
        desc: "Hardware Platform used in Robotics",
        size: "md"
    },
    astro: {
        name: "astro",
        group: "technologies",
        title: "Astro Logo",
        desc: "Framework used in Web Development",
        size: "md"
    },
    autocad: {
        name: "autocad",
        group: "technologies",
        title: "AutoCAD Logo",
        desc: "Engineering CAD Tool used in Diagram Creation",
        size: "md"
    },
    axios: {
        name: "axios",
        group: "technologies",
        title: "Axios Logo",
        desc: "API Library used in Web Development",
        size: "md"
    },
    baremetal: {
        name: "microchip",
        group: "gui",
        title: "Microprocessor Icon",
        desc: "Microprocessor/Microcontroller used in Embedded Systems",
        size: "md"
    },
    bootstrap: {
        name: "bootstrap",
        group: "technologies",
        title: "Bootstrap Logo",
        desc: "UI Library used in Web Development",
        size: "md"
    },
    c: {
        name: "c",
        group: "technologies",
        title: "C Logo",
        desc: "Programming Language used in Embedded Systems",
        size: "md"
    },
    cpanel: {
        name: "cpanel",
        group: "technologies",
        title: "cpanel Logo",
        desc: "Administration Panel used in Backend Management",
        size: "md"
    },
    cpp: {
        name: "cpp",
        group: "technologies",
        title: "C++ Logo",
        desc: "Programming Language used in Desktop Apps",
        size: "md"
    },
    csharp: {
        name: "csharp",
        group: "technologies",
        title: "C# Logo",
        desc: "Programming Language used in Desktop Apps",
        size: "md"
    },
    css: {
        name: "css",
        group: "technologies",
        title: "CSS3 Logo",
        desc: "Styling Language used in Web Development",
        size: "md"
    },
    daisyui: {
        name: "daisyui",
        group: "technologies",
        title: "daisyUI Logo",
        desc: "UI Library used in Web Development",
        size: "md"
    },
    directus: {
        name: "directus",
        group: "technologies",
        title: "directus Logo",
        desc: "Administration Panel used in Content Management",
        size: "md"
    },
    flask: {
        name: "flask",
        group: "technologies",
        title: "Flask Logo",
        desc: "Framework used in Backend",
        size: "md"
    },
    html: {
        name: "html",
        group: "technologies",
        title: "HTML5 Logo",
        desc: "Markup Language used in Web Development",
        size: "md"
    },
    java: {
        name: "java",
        group: "technologies",
        title: "Java Logo",
        desc: "Programming Language used in Desktop Apps",
        size: "md"
    },
    javascript: {
        name: "javascript",
        group: "technologies",
        title: "JavaScript Logo",
        desc: "Programming Language used in Web Development",
        size: "md"
    },
    jinja: {
        name: "jinja",
        group: "technologies",
        title: "Jinja Logo",
        desc: "Templating Engine used in Web Development",
        size: "md"
    },
    kicad: {
        name: "kicad",
        group: "technologies",
        title: "KiCAD Logo",
        desc: "Engineering CAD Tool used in PCB Creation",
        size: "md"
    },
    multisim: {
        name: "multisim",
        group: "technologies",
        title: "MultiSim Logo",
        desc: "Simulation Tool used in Electronics & Schematics Creation",
        size: "md"
    },
    mysql: {
        name: "mysql",
        group: "technologies",
        title: "MySQL Logo",
        desc: "Relational Database used in Backend",
        size: "md"
    },
    opencv: {
        name: "opencv",
        group: "technologies",
        title: "OpenCV Logo",
        desc: "Library used in Robotics",
        size: "md"
    },
    php: {
        name: "php",
        group: "technologies",
        title: "PHP Logo",
        desc: "Programming Language used in Web Development",
        size: "md"
    },
    phpmyadmin: {
        name: "phpmyadmin",
        group: "technologies",
        title: "phpMyAdmin Logo",
        desc: "Administration Panel used in Backend Management",
        size: "md"
    },
    python: {
        name: "python",
        group: "technologies",
        title: "Python Logo",
        desc: "Programming Language used in Backend & Robotics",
        size: "md"
    },
    raspberrypi: {
        name: "raspberrypi",
        group: "technologies",
        title: "Raspberry Pi Logo",
        desc: "Hardware Platform used in Robotics",
        size: "md"
    },
    react: {
        name: "react",
        group: "technologies",
        title: "React Logo",
        desc: "UI Library used in Web Development",
        size: "md"
    },
    sketchup: {
        name: "sketchup",
        group: "technologies",
        title: "SketchUp Logo",
        desc: "Engineering CAD Tool used in 3D Modeling",
        size: "md"
    },
    sqlite: {
        name: "sqlite",
        group: "technologies",
        title: "SQLite Logo",
        desc: "Relational Database used in Backend",
        size: "md"
    },
    tailwindcss: {
        name: "tailwindcss",
        group: "technologies",
        title: "TailwindCSS Logo",
        desc: "CSS Library used in Web Development",
        size: "md"
    },
    typescript: {
        name: "typescript",
        group: "technologies",
        title: "TypeScript Logo",
        desc: "Programming Language used in Web Development",
        size: "md"
    },
    ultiboard: {
        name: "multisim",
        group: "technologies",
        title: "UltiBoard Logo",
        desc: "Engineering CAD Tool used in PCB Creation",
        size: "md"
    },
    winui: {
        name: "winui",
        group: "technologies",
        title: "WinUI Logo",
        desc: "Framework used in Desktop Apps",
        size: "md"
    },

    // Coming soon
    hourglass: {
        name: "hourglass",
        group: "gui",
        title: "Hourglass Icon",
        desc: "Coming soon item.",
        size: "exl"
    },

    // Porfolio categories icons
    microchip: {
        name: "microchip",
        group: "gui",
        title: "Microprocessor Projects Icon",
        desc: "Microprocessor Symbolizing Electrical Engineering & Software Projects",
        size: "md"
    },
    briefcase: {
        name: "briefcase",
        group: "gui",
        title: "Briefcase Icon",
        desc: "Representing Work Experience Across Different Industries",
        size: "md"
    },
    leadership: {
        name: "leadership",
        group: "gui",
        title: "Users with Gear Icon",
        desc: "Representing Leadership Experience Across Different Areas",
        size: "md"
    },
    certifications: {
        name: "certifications",
        group: "gui",
        title: "Certifications Icon",
        desc: "Licences & Certifications Obtained Throughout my Career",
        size: "md"
    },
    award: {
        name: "award",
        group: "gui",
        title: "Award Icon",
        desc: "Awards to Reinforce my Current Portfolio",
        size: "md"
    },
    envelope_closed: {
        name: "envelope_closed",
        group: "gui",
        title: "Envelope Icon",
        desc: "Contact Information for my Portfolio's Viewers",
        size: "md"
    },

    // Hamburger Menu available only on medium screens and downward to replace navbar
    home: {
        name: "home",
        group: "gui",
        title: "Home Icon",
        desc: "Home Icon that Redirects to the Main Page",
        size: "sm"
    },
    hamburger_open: {
        name: "hamburger_open",
        group: "gui",
        title: "Hamburger Open Icon",
        desc: "Hamburger Menu Opening on Mobile Devices.",
        size: "md"
    },
    hamburger_close: {
        name: "hamburger_close",
        group: "gui",
        title: "Hamburger Close Icon",
        desc: "Hamburger Menu Closing on Mobile Devices.",
        size: "md"
    },

    // Resume icons
    download: {
        name: "download",
        group: "gui",
        title: "Download to Device Icon",
        desc: "Download to Device Icon.",
        size: "sm"
    },
    fullscreen: {
        name: "fullscreen",
        group: "gui",
        title: "Open Fullscreen View Externally Icon",
        desc: "Open Fullscreen View Externally Icon.",
        size: "sm"
    },

    // Link & Read More icons
    link: {
        name: "link",
        group: "gui",
        title: "Link Icon",
        desc: "Link Icon used to represent an external website.",
        size: "sm"
    },
    angles_down: {
        name: "angles_down",
        group: "gui",
        title: "Read More Icon",
        desc: "Angles pointing downward used to represent a read-more option.",
        size: "xs"
    },

    // Contact subject field icons
    id_card: {
        name: "id_card",
        group: "gui",
        title: "ID Card Icon",
        desc: "ID Card used to represent a name entry.",
        size: "sm"
    },
    at: {
        name: "at",
        group: "gui",
        title: "@ Sign",
        desc: "At Sign used to represent an email entry.",
        size: "sm"
    },
    list: {
        name: "list",
        group: "gui",
        title: "Rectangle List Icon",
        desc: "Rectangle List used to represent a category list.",
        size: "sm"
    },
    message: {
        name: "message",
        group: "gui",
        title: "Message Icon",
        desc: "Message Icon used to represent a message list.",
        size: "sm"
    },
    paper_plane: {
        name: "paper_plane",
        group: "gui",
        title: "Paper Plane Icon",
        desc: "Paper Plane used to represent a button submission.",
        size: "sm"
    },

    // Success & Failure icons for alerts
    spinner: {
        name: "spinner",
        group: "gui",
        title: "Spinner Icon",
        desc: "Spinner to be animate-spin'ed to represent loading and processing.",
        size: "sm"
    },
    circle_check: {
        name: "circle_check",
        group: "gui",
        title: "Circle Check Icon",
        desc: "Check Icon used to represent a sucessful operation.",
        size: "sm"
    },
    circle_xmark: {
        name: "circle_xmark",
        group: "gui",
        title: "Circle X Mark Icon",
        desc: "X Icon used to represent an operation failure.",
        size: "sm"
    },
    envelope_check: {
        name: "envelope_check",
        group: "gui",
        title: "Envelope Check Icon",
        desc: "Envelope Check Icon used to represent a sucessful message submission.",
        size: "exl"
    },

    // Theme-controller icons for both hamburger menu and navbar
    sun: {
        name: "sun",
        group: "gui",
        title: "Sun Icon",
        desc: "Representing Light Mode on Theme Toggles (NavBar & Hamburger Menu).",
        size: "sm"
    },
    moon: {
        name: "moon",
        group: "gui",
        title: "Moon Icon",
        desc: "Representing Dark Mode on Theme Toggles (NavBar & Hamburger Menu).",
        size: "sm"
    },

    // Change language icon for border tab widget
    globe: {
        name: "globe",
        group: "gui",
        title: "Change Language Icon",
        desc: "Translate Tab Icon inside a right-screen-border fixed widget.",
        size: "sm"
    },

    // Up & Down icon scrollers
    chevron_up: {
        name: "chevron_up",
        group: "gui",
        title: "Scroll Up Icon",
        desc: "Scroll to Top Icon represented by a Chevron Up Icon inside a button.",
        size: "sm"
    },
    chevron_down: {
        name: "chevron_down",
        group: "gui",
        title: "Scroll Down Icon",
        desc: "Scroll to Bottom Icon represented by a Chevron Down Icon inside a button.",
        size: "sm"
    },

    // Supported Devices & Developer - Footer Copyright Notice
    devices: {
        name: "devices",
        group: "gui",
        title: "Supported Devices Icon",
        desc: "All of our supported devices for this website",
        size: "md"
    }
} as const satisfies IconsListType;

// Complete Technologies Reference
export const TECHNOLOGIES = {
    antdesign: {
        visual: {
            name: "AntDesign",
            color: TECHNOLOGIES_COLORS.web,
            icon: "antdesign"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "antdesign",
            kind: "library",
            domains: ["web"]
        }
    },
    arduino: {
        visual: {
            name: "Arduino",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: "arduino"
        },
        hierarchy: {
            tier: "core",
            subheader: "embedded"
        },
        metadata: {
            key: "arduino",
            kind: "embedded_platform",
            domains: ["robotics"]
        }
    },
    astro: {
        visual: {
            name: "Astro",
            color: TECHNOLOGIES_COLORS.web,
            icon: "astro"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "astro",
            kind: "framework",
            domains: ["web"]
        }
    },
    autocad: {
        visual: {
            name: "AutoCAD",
            color: TECHNOLOGIES_COLORS.tools,
            icon: "autocad"
        },
        hierarchy: {
            tier: "core",
            subheader: "cad"
        },
        metadata: {
            key: "autocad",
            kind: "cad_tool",
            domains: ["cad"]
        }
    },
    axios: {
        visual: {
            name: "Axios",
            color: TECHNOLOGIES_COLORS.web,
            icon: "axios",
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "axios",
            kind: "library",
            domains: ["web"]
        }
    },
    baremetal: {
        visual: {
            name: "Bare-Metal Embedded",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: "baremetal"
        },
        hierarchy: {
            tier: "core",
            subheader: "embedded"
        },
        metadata: {
            key: "baremetal",
            kind: "hardware",
            domains: ["embedded", "firmware", "robotics", "systems"]
        }
    },
    bootstrap: {
        visual: {
            name: "Bootstrap",
            color: TECHNOLOGIES_COLORS.web,
            icon: "bootstrap"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "bootstrap",
            kind: "library",
            domains: ["web"]
        }
    },
    c: {
        visual: {
            name: "C",
            color: TECHNOLOGIES_COLORS.software,
            icon: "c"
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "c",
            kind: "programming_language",
            domains: ["embedded", "systems"]
        }
    },
    cpanel: {
        visual: {
            name: "cPanel",
            color: TECHNOLOGIES_COLORS.operations,
            icon: "cpanel"
        },
        hierarchy: {
            tier: "production",
            subheader: "operations"
        },
        metadata: {
            key: "cpanel",
            kind: "operating_tool",
            domains: ["backend", "operations"]
        }
    },
    cpp: {
        visual: {
            name: "C++",
            color: TECHNOLOGIES_COLORS.software,
            icon: "cpp"
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "cpp",
            kind: "programming_language",
            domains: ["desktop", "systems"]
        }
    },
    csharp: {
        visual: {
            name: "C#",
            color: TECHNOLOGIES_COLORS.software,
            icon: "csharp"
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "csharp",
            kind: "programming_language",
            domains: ["desktop", "systems"]
        }
    },
    css: {
        visual: {
            name: "CSS",
            color: TECHNOLOGIES_COLORS.web,
            icon: "css"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "css",
            kind: "library",
            domains: ["web", "frontend"]
        }
    },
    daisyui: {
        visual: {
            name: "daisyUI",
            color: TECHNOLOGIES_COLORS.web,
            icon: "daisyui"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "daisyui",
            kind: "library",
            domains: ["web", "frontend"]
        }
    },
    directus: {
        visual: {
            name: "Directus",
            color: TECHNOLOGIES_COLORS.operations,
            icon: "directus"
        },
        hierarchy: {
            tier: "production",
            subheader: "operations"
        },
        metadata: {
            key: "directus",
            kind: "operating_tool",
            domains: ["backend", "operations"]
        }
    },
    flask: {
        visual: {
            name: "Flask",
            color: TECHNOLOGIES_COLORS.web,
            icon: "flask"
        },
        hierarchy: {
            tier: "production",
            subheader: "frameworks"
        },
        metadata: {
            key: "flask",
            kind: "framework",
            domains: ["web", "backend"]
        }
    },
    html: {
        visual: {
            name: "HTML",
            color: TECHNOLOGIES_COLORS.web,
            icon: "html"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "html",
            kind: "library",
            domains: ["web", "frontend"]
        }
    },
    java: {
        visual: {
            name: "Java",
            color: TECHNOLOGIES_COLORS.software,
            icon: "java",
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "java",
            kind: "programming_language",
            domains: ["desktop", "systems"]
        }
    },
    javascript: {
        visual: {
            name: "JavaScript",
            color: TECHNOLOGIES_COLORS.software,
            icon: "javascript"
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "javascript",
            kind: "programming_language",
            domains: ["web", "frontend"]
        }
    },
    jinja: {
        visual: {
            name: "Jinja",
            color: TECHNOLOGIES_COLORS.web,
            icon: "jinja"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "jinja",
            kind: "library",
            domains: ["web", "frontend"]
        }
    },
    kicad: {
        visual: {
            name: "KiCAD",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: "kicad"
        },
        hierarchy: {
            tier: "core",
            subheader: "embedded"
        },
        metadata: {
            key: "kicad",
            kind: "cad_tool",
            domains: ["pcb", "cad"]
        }
    },
    multisim: {
        visual: {
            name: "MultiSim",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: "multisim"
        },
        hierarchy: {
            tier: "core",
            subheader: "embedded"
        },
        metadata: {
            key: "multisim",
            kind: "simulation_tool",
            domains: ["electronics", "cad"]
        }
    },
    mysql: {
        visual: {
            name: "MySQL",
            color: TECHNOLOGIES_COLORS.databases,
            icon: "mysql"
        },
        hierarchy: {
            tier: "production",
            subheader: "databases"
        },
        metadata: {
            key: "mysql",
            kind: "database",
            domains: ["backend", "databases"]
        }
    },
    opencv: {
        visual: {
            name: "OpenCV",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: "opencv"
        },
        hierarchy: {
            tier: "core",
            subheader: "embedded"
        },
        metadata: {
            key: "opencv",
            kind: "library",
            domains: ["robotics", "embedded"]
        }
    },
    php: {
        visual: {
            name: "PHP",
            color: TECHNOLOGIES_COLORS.software,
            icon: "php"
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "php",
            kind: "programming_language",
            domains: ["web", "backend"]
        }
    },
    phpmyadmin: {
        visual: {
            name: "phpMyAdmin",
            color: TECHNOLOGIES_COLORS.operations,
            icon: "phpmyadmin"
        },
        hierarchy: {
            tier: "production",
            subheader: "operations"
        },
        metadata: {
            key: "phpmyadmin",
            kind: "operating_tool",
            domains: ["operations", "backend"]
        }
    },
    python: {
        visual: {
            name: "Python",
            color: TECHNOLOGIES_COLORS.software,
            icon: "python"
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "python",
            kind: "programming_language",
            domains: ["backend", "robotics"]
        }
    },
    raspberrypi: {
        visual: {
            name: "Raspberry Pi",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: "raspberrypi",
        },
        hierarchy: {
            tier: "core",
            subheader: "embedded"
        },
        metadata: {
            key: "raspberrypi",
            kind: "hardware",
            domains: ["robotics", "embedded"]
        }
    },
    react: {
        visual: {
            name: "React",
            color: TECHNOLOGIES_COLORS.web,
            icon: "react"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "react",
            kind: "library",
            domains: ["web", "frontend"]
        }
    },
    sketchup: {
        visual: {
            name: "SketchUp",
            color: TECHNOLOGIES_COLORS.tools,
            icon: "sketchup"
        },
        hierarchy: {
            tier: "core",
            subheader: "cad"
        },
        metadata: {
            key: "sketchup",
            kind: "cad_tool",
            domains: ["cad"]
        }
    },
    sqlite: {
        visual: {
            name: "SQLite",
            color: TECHNOLOGIES_COLORS.databases,
            icon: "sqlite"
        },
        hierarchy: {
            tier: "production",
            subheader: "databases"
        },
        metadata: {
            key: "sqlite",
            kind: "database",
            domains: ["backend", "databases"]
        }
    },
    tailwindcss: {
        visual: {
            name: "TailwindCSS",
            color: TECHNOLOGIES_COLORS.web,
            icon: "tailwindcss"
        },
        hierarchy: {
            tier: "production",
            subheader: "web"
        },
        metadata: {
            key: "tailwindcss",
            kind: "library",
            domains: ["web", "frontend"]
        }
    },
    typescript: {
        visual: {
            name: "TypeScript",
            color: TECHNOLOGIES_COLORS.software,
            icon: "typescript"
        },
        hierarchy: {
            tier: "core",
            subheader: "software"
        },
        metadata: {
            key: "typescript",
            kind: "programming_language",
            domains: ["web", "frontend"]
        }
    },
    ultiboard: {
        visual: {
            name: "UltiBoard",
            color: TECHNOLOGIES_COLORS.embedded,
            icon: "ultiboard"
        },
        hierarchy: {
            tier: "core",
            subheader: "embedded"
        },
        metadata: {
            key: "ultiboard",
            kind: "cad_tool",
            domains: ["pcb", "cad"]
        }
    },
    winui: {
        visual: {
            name: "WinUI",
            color: TECHNOLOGIES_COLORS.software,
            icon: "winui"
        },
        hierarchy: {
            tier: "production",
            subheader: "frameworks"
        },
        metadata: {
            key: "winui",
            kind: "framework",
            domains: ["desktop", "systems"]
        }
    }
} as const satisfies TechnologiesListType;

// Complete Flag Icons Reference
export const FLAGS = {
    de: {
        picture: de,
        icon: "de"
    },
    mx: {
        picture: mx,
        icon: "mx"
    },
    us: {
        picture: us,
        icon: "us"
    }
} as const satisfies FlagsListType;

// COMPLETE WEBMANIFEST REFERENCE
// Complete manifest.webmanifest Reference - Android, Apple, Microsoft, and Safari
export const FAVICONS = {
    manifest: {
        android192: {
            src: `${PATHS.favicons}android-chrome-192x192.png`,
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
        },
        android512: {
            src: `${PATHS.favicons}android-chrome-512x512.png`,
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
        },
        apple120: {
            src: `${PATHS.favicons}apple-touch-icon-120x120.png`,
            sizes: "120x120",
            type: "image/png",
            purpose: "maskable"
        },
        apple152: {
            src: `${PATHS.favicons}apple-touch-icon-152x152.png`,
            sizes: "152x152",
            type: "image/png",
            purpose: "any"
        },
        apple167: {
            src: `${PATHS.favicons}apple-touch-icon-167x167.png`,
            sizes: "167x167",
            type: "image/png",
            purpose: "any"
        },
        apple180: {
            src: `${PATHS.favicons}apple-touch-icon-180x180.png`,
            sizes: "180x180",
            type: "image/png",
            purpose: "any"
        },
        mstile150: {
            src: `${PATHS.favicons}microsoft-tile-150x150.png`,
            sizes: "150x150",
            type: "image/png",
            purpose: "any"
        },
        manifest: {
            src: `${PATHS.favicons}manifest-shortcut-96x96.png`,
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable"
        }
    },
    browser: {
        safari_mask: {
            src: `${PATHS.favicons}safari-pinned-tab.svg`,
            type: "image/svg+xml",
            purpose: "maskable"
        },
        svg: {
            src: "/favicon.svg",
            type: "image/svg+xml",
            purpose: "maskable"
        },
        ico: {
            src: "/favicon.ico",
            type: "image/x-icon",
            purpose: "non-maskable"
        }
    }
} as const satisfies FaviconListType;

// Screenshots for Richer PWA on Webmanifest
export const SCREENSHOTS = {
    home: {
        desktop:{
            src: `${PATHS.screenshots}home-desktop.png`,
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
            label: "Professional portfolio homepage on desktop"
        },
        mobile: {
            src: `${PATHS.screenshots}home-mobile.png`,
            sizes: "1290x2796",
            type: "image/png",
            form_factor: "narrow",
            label: "Professional portfolio homepage on mobile"
        }
    }
} as const satisfies ScreenshotsListType;