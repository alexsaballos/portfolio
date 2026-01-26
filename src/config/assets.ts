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
    software: "#3168B5",
    web: "#524391",
    databases: "#509636",
    operations: "#BA5656",
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
    home: {
        href: "#home",
        title: "Home Icon",
        desc: "Home Icon that Redirects to the Main Page",
        size: "sm"
    },
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

    // Contact subject field icons
    id_card: {
        href: "#id_card",
        title: "ID Card Icon",
        desc: "ID Card used to represent a name entry.",
        size: "md"
    },
    at_sign: {
        href: "#at_sign",
        title: "@ Sign",
        desc: "At Sign used to represent an email entry.",
        size: "md"
    },
    rectangle_list: {
        href: "#rectangle_list",
        title: "Rectangle List Icon",
        desc: "Rectangle List used to represent a category list.",
        size: "md"
    },
    message: {
        href: "#message",
        title: "Message Icon",
        desc: "Message Icon used to represent a message list.",
        size: "md"
    },
    paper_plane: {
        href: "#paper_plane",
        title: "Paper Plane Icon",
        desc: "Paper Plane used to represent a button submission.",
        size: "md"
    },

    // Success & Failure icons for alerts
    spinner: {
        href: "#spinner",
        title: "Spinner Icon",
        desc: "Spinner to be animate-spin'ed to represent loading and processing.",
        size: "md"
    },
    envelope_check: {
        href: "#envelope_check",
        title: "Envelope Check Icon",
        desc: "Envelope Check Icon used to represent a sucessful message submission.",
        size: "md"
    },
    circle_check: {
        href: "#circle_check",
        title: "Circle Check Icon",
        desc: "Check Icon used to represent a sucessful operation.",
        size: "md"
    },
    circle_xmark: {
        href: "#circle_xmark",
        title: "Circle X Mark Icon",
        desc: "X Icon used to represent an operation failure.",
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
        visual: {
            name: "AntDesign",
            color: TECHNOLOGIES_COLORS.web,
            icon: {
                href: "#antdesign",
                title: "Ant Design Logo",
                desc: "UI Library used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#arduino",
                title: "Arduino Logo",
                desc: "Hardware Platform used in Robotics",
                size: "md"
            }
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
            icon: {
                href: "#astro",
                title: "Astro Logo",
                desc: "Framework used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#autocad",
                title: "AutoCAD Logo",
                desc: "Engineering CAD Tool used in Diagram Creation",
                size: "md"
            }
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
            icon: {
                href: "#axios",
                title: "Axios Logo",
                desc: "API Library used in Web Development",
                size: "md"
            },
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
            icon: {
                href: "#microprocessor",
                title: "Microprocessor Icon",
                desc: "Microprocessor/Microcontroller used in Embedded Systems",
                size: "md"
            }
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
            icon: {
                href: "#bootstrap",
                title: "Bootstrap Logo",
                desc: "UI Library used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#c",
                title: "C Logo",
                desc: "Programming Language used in Embedded Systems",
                size: "md"
            }
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
            icon: {
                href: "#cpanel",
                title: "cpanel Logo",
                desc: "Administration Panel used in Backend Management",
                size: "md"
            }
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
            icon: {
                href: "#cpp",
                title: "C++ Logo",
                desc: "Programming Language used in Desktop Apps",
                size: "md"
            }
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
            icon: {
                href: "#csharp",
                title: "C# Logo",
                desc: "Programming Language used in Desktop Apps",
                size: "md"
            }
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
            icon: {
                href: "#css",
                title: "CSS3 Logo",
                desc: "Styling Language used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#daisyui",
                title: "daisyUI Logo",
                desc: "UI Library used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#directus",
                title: "directus Logo",
                desc: "Administration Panel used in Content Management",
                size: "md"
            }
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
            icon: {
                href: "#flask",
                title: "Flask Logo",
                desc: "Framework used in Backend",
                size: "md"
            }
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
            icon: {
                href: "#html",
                title: "HTML5 Logo",
                desc: "Markup Language used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#java",
                title: "Java Logo",
                desc: "Programming Language used in Desktop Apps",
                size: "md"
            },
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
            icon: {
                href: "#javascript",
                title: "JavaScript Logo",
                desc: "Programming Language used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#jinja",
                title: "Jinja Logo",
                desc: "Templating Engine used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#kicad",
                title: "KiCAD Logo",
                desc: "Engineering CAD Tool used in PCB Creation",
                size: "md"
            }
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
            icon: {
                href: "#multisim",
                title: "MultiSim Logo",
                desc: "Simulation Tool used in Electronics & Schematics Creation",
                size: "md"
            }
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
            icon: {
                href: "#mysql",
                title: "MySQL Logo",
                desc: "Relational Database used in Backend",
                size: "md"
            }
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
            icon: {
                href: "#opencv",
                title: "OpenCV Logo",
                desc: "Library used in Robotics",
                size: "md"
            }
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
            icon: {
                href: "#php",
                title: "PHP Logo",
                desc: "Programming Language used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#phpmyadmin",
                title: "phpMyAdmin Logo",
                desc: "Administration Panel used in Backend Management",
                size: "md"
            }
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
            icon: {
                href: "#python",
                title: "Python Logo",
                desc: "Programming Language used in Backend & Robotics",
                size: "md"
            }
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
            icon: {
                href: "#raspberrypi",
                title: "Raspberry Pi Logo",
                desc: "Hardware Platform used in Robotics",
                size: "md"
            },
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
            icon: {
                href: "#react",
                title: "React Logo",
                desc: "UI Library used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#sketchup",
                title: "SketchUp Logo",
                desc: "Engineering CAD Tool used in 3D Modeling",
                size: "md"
            }
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
            icon: {
                href: "#sqlite",
                title: "SQLite Logo",
                desc: "Relational Database used in Backend",
                size: "md"
            }
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
            icon: {
                href: "#tailwindcss",
                title: "TailwindCSS Logo",
                desc: "CSS Library used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#typescript",
                title: "TypeScript Logo",
                desc: "Programming Language used in Web Development",
                size: "md"
            }
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
            icon: {
                href: "#multisim",
                title: "UltiBoard Logo",
                desc: "Engineering CAD Tool used in PCB Creation",
                size: "md"
            }
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
            icon: {
                href: "#winui",
                title: "WinUI Logo",
                desc: "Framework used in Desktop Apps",
                size: "md"
            }
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