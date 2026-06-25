// Localized information: title, description, and other notes
import { PICTURES } from "../assets";
import { LINKS, SYSTEM } from "../routes/links";
import type { ProjectsSSOT } from "@src/types/pages/ProjectsType";

const projPics = PICTURES.projects;

export const PROJECTS = {
    // Postgrad Projects
    pcs: {
        key: "pcs",
        images: {
            cover: projPics.pcs,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["csharp", "javascript", "winui", "kotlin", "mysql", "cpanel", "php", "phpmyadmin"],
        categories: ["business", "windows_app", "android_app"],
        privacy: "private",
        client: "contract",
        organization: "sidimaqsa",
        status: "ongoing",
        featured: true,
        startDate: "2025",
        endDate: "2026",
        links: undefined
    },
    portfolio: {
        key: "portfolio",
        images: {
            cover: projPics.portfolio,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["astro", "tailwindcss", "daisyui", "typescript", "html", "css", "cpanel", "php", "opengraph", "schemaorg", "resend", "google_wallet", "google_analytics", "nfc"],
        categories: ["web_development", "backend", "frontend"],
        privacy: "public",
        client: "personal",
        organization: "personal",
        status: "ongoing",
        featured: false,
        startDate: "2026",
        links: {
            website: SYSTEM.domain,
            github: LINKS.projects.github_portfolio
        }
    },
    sidimaqsa: {
        key: "sidimaqsa",
        images: {
            cover: projPics.sidimaqsa,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["astro", "tailwindcss", "daisyui", "typescript", "html", "css", "cpanel", "php", "opengraph", "schemaorg", "resend", "google_maps", "google_analytics"],
        categories: ["business", "web_development", "backend", "frontend"],
        privacy: "private",
        client: "contract",
        organization: "sidimaqsa",
        status: "ongoing",
        featured: false,
        startDate: "2026",
        links: {
            website: LINKS.organizations.sidimaqsa
        }
    },

    // Electrical Engineering Projects
    // ToDO: Introduction to Engineering
    domotics: {
        key: "domotics",
        images: {
            cover: projPics.domotics,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["arduino", "bluetooth", "electronics_digital", "cpp"],
        categories: ["robotics", "automation"],
        hardware: ["arduino_uno_r3"],
        privacy: "public",
        client: "personal",
        organization: "personal",
        status: "completed",
        featured: false,
        startDate: "2026",
        endDate: "2026",
        links: undefined
    },
    atx: {
        key: "atx",
        images: {
            cover: projPics.atx,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["a3", "embedded", "electronics_analog", "electronics_digital", "multisim", "ultiboard", "c", "autocad"],
        categories: ["robotics", "automation", "embedded_systems", "cad"],
        hardware: ["pic32", "pic18", "pickit5", "ni_elvis"],
        privacy: "private",
        client: "academic",
        organization: "harding",
        status: "completed",
        featured: true,
        startDate: "2024",
        endDate: "2025",
        links: undefined
    },
    arctos: {
        key: "arctos",
        images: {
            cover: projPics.arctos,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["a3", "arduino", "electronics_analog", "electronics_digital", "cpp"],
        categories: ["robotics"],
        hardware: ["arduino_mega_2560_r3", "ni_elvis"],
        privacy: "private",
        client: "academic",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2025",
        endDate: "2025",
        links: {
            website: LINKS.projects.arctos
        }
    },
    maze_robot: {
        key: "maze_robot",
        images: {
            cover: projPics.maze_robot,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["embedded", "electronics_analog", "electronics_digital", "multisim", "ultiboard", "c"],
        categories: ["robotics", "automation", "embedded_systems", "cad"],
        hardware: ["pic18", "pickit5", "ni_elvis"],
        privacy: "private",
        client: "academic",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2024",
        endDate: "2024",
        links: undefined
    },
    asgc: {
        key: "asgc",
        images: {
            cover: projPics.asgc,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["a3", "opencv", "raspberrypi", "electronics_analog", "electronics_digital", "python"],
        categories: ["robotics", "automation", "computer_vision"],
        hardware: ["raspberrypi_4b", "ni_elvis"],
        privacy: "private",
        client: "academic",
        organization: "nasa",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2024",
        links: {
            website: LINKS.organizations.asgc
        }
    },
    instrumentation: {
        key: "instrumentation",
        images: {
            cover: projPics.instrumentation,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["electronics_analog", "electronics_digital", "labview"],
        categories: ["measurement_systems"],
        hardware: ["ni_elvis"],
        privacy: "private",
        client: "academic",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2023",
        endDate: "2023",
        links: undefined
    },
    digital_clock: {
        key: "digital_clock",
        images: {
            cover: projPics.digital_clock,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["electronics_digital"],
        categories: ["digital_logic_design"],
        hardware: ["ni_elvis"],
        privacy: "private",
        client: "academic",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2023",
        endDate: "2023",
        links: undefined
    },
    prog_engr: {
        key: "prog_engr",
        images: {
            cover: projPics.prog_engr,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["arduino", "cpp", "matlab", "labview"],
        categories: ["robotics"],
        hardware: ["arduino_uno_r3"],
        privacy: "private",
        client: "academic",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2022",
        links: undefined
    },
    habitar: {
        key: "habitar",
        images: {
            cover: projPics.habitar,
            album: undefined
        },
        discipline: "electrical_engineering",
        stack: ["autocad", "sketchup"],
        categories: ["cad"],
        privacy: "public",
        client: "academic",
        organization: "habitar",
        status: "completed",
        featured: false,
        startDate: "2020",
        endDate: "2021",
        links: undefined
    },

    // HU Brackett Library
    hu_remembers: {
        key: "hu_remembers",
        images: {
            cover: projPics.hu_remembers,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["react", "javascript", "axios", "directus", "bootstrap", "google_maps", "sass", "php", "mysql"],
        categories: ["web_development", "backend", "frontend"],
        privacy: "private",
        client: "contract",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2023",
        endDate: "2025",
        links: {
            website: LINKS.projects.hu_remembers
        }
    },
    hu_bison: {
        key: "hu_bison",
        images: {
            cover: projPics.hu_bison,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["react", "javascript", "axios", "antdesign", "php", "mysql"],
        categories: ["web_development", "backend", "frontend"],
        privacy: "private",
        client: "contract",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2024",
        endDate: "2025",
        links: {
            website: LINKS.projects.hu_bison
        }
    },
    hu_directus: {
        key: "hu_directus",
        images: {
            cover: projPics.hu_directus,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["react", "javascript", "directus", "php", "mysql"],
        categories: ["web_development", "backend"],
        privacy: "private",
        client: "contract",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2025",
        links: undefined
    },
    hu_kiosk: {
        key: "hu_kiosk",
        images: {
            cover: projPics.hu_kiosk,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["react", "typescript", "php"],
        categories: ["web_development", "backend", "frontend"],
        privacy: "private",
        client: "contract",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2023",
        endDate: "2024",
        links: {
            website: LINKS.projects.hu_kiosk
        }
    },
    bison_math: {
        key: "bison_math",
        images: {
            cover: projPics.hu_generic,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["latex"],
        categories: ["calculus", "frontend"],
        privacy: "private",
        client: "academic",
        organization: "harding",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2022",
        links: undefined
    },
    cs50: {
        key: "cs50",
        images: {
            cover: projPics.cs50,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["c", "html", "css", "python", "flask", "javascript", "sqlite"],
        categories: ["web_development", "backend", "frontend"],
        privacy: "private",
        client: "academic",
        organization: "harvard",
        status: "completed",
        featured: false,
        startDate: "2020",
        endDate: "2020",
        links: {
            website: LINKS.certifications.cs50.main
        }
    },
    duke: {
        key: "duke",
        images: {
            cover: projPics.duke,
            album: undefined
        },
        discipline: "software_engineering",
        stack: ["java"],
        categories: ["backend"],
        privacy: "private",
        client: "academic",
        organization: "duke",
        status: "completed",
        featured: false,
        startDate: "2020",
        endDate: "2020",
        links: {
            website: LINKS.certifications.coursera.main
        }
    }
} as const satisfies ProjectsSSOT;