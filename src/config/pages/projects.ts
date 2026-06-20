// Localized information: title, description, and other notes
import { PICTURES } from "../assets";
import { LINKS, SYSTEM } from "../routes/links";
import type { ProjectsSSOT } from "@src/types/pages/ProjectsType";

const projPics = PICTURES.projects;

export const PROJECTS = {
    // Postgrad Projects
    pcs: {
        key: "pcs",
        images: [projPics.pcs],
        stack: ["csharp", "javascript", "winui", "mysql", "cpanel", "php", "phpmyadmin"],
        categories: ["business", "software_engineering"],
        privacy: "private",
        client: "contract",
        status: "ongoing",
        featured: true,
        startDate: "2025",
        endDate: "2026",
        links: undefined
    },
    portfolio: {
        key: "portfolio",
        images: [projPics.portfolio],
        stack: ["astro", "tailwindcss", "daisyui", "typescript", "html", "css", "cpanel", "php", "resend", "google_wallet", "google_analytics", "nfc"],
        categories: ["software_engineering", "web_development"],
        privacy: "public",
        client: "personal",
        status: "ongoing",
        featured: true,
        startDate: "2026",
        links: {
            website: SYSTEM.domain,
            github: LINKS.projects.github_portfolio
        }
    },
    sidimaqsa: {
        key: "sidimaqsa",
        images: [projPics.sidimaqsa],
        stack: ["astro", "tailwindcss", "daisyui", "typescript", "html", "css", "cpanel", "php", "google_maps", "resend"],
        categories: ["business", "software_engineering", "web_development"],
        privacy: "private",
        client: "contract",
        status: "ongoing",
        featured: false,
        startDate: "2026",
        links: {
            website: LINKS.organizations.sidimaqsa
        }
    },

    // Electrical Engineering Projects
    // ToDO: IntroToEngr and Instrumentation
    domotics: {
        key: "domotics",
        images: [projPics.domotics],
        stack: ["arduino", "bluetooth", "electronics_digital", "cpp"],
        categories: ["electrical_engineering", "robotics"],
        privacy: "public",
        client: "personal",
        status: "completed",
        featured: false,
        startDate: "2026",
        endDate: "2026",
        links: undefined
    },
    atx: {
        key: "atx",
        images: [projPics.atx],
        stack: ["embedded", "electronics_analog", "electronics_digital", "multisim", "ultiboard", "c", "autocad"],
        categories: ["electrical_engineering", "robotics", "embedded_systems"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: true,
        startDate: "2024",
        endDate: "2025",
        links: undefined
    },
    arctos: {
        key: "arctos",
        images: [projPics.arctos],
        stack: ["arduino", "electronics_analog", "electronics_digital", "cpp"],
        categories: ["electrical_engineering", "robotics"],
        privacy: "private",
        client: "academic",
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
        images: [projPics.maze_robot],
        stack: ["embedded", "electronics_analog", "electronics_digital", "multisim", "ultiboard", "c"],
        categories: ["electrical_engineering", "robotics", "embedded_systems"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: true,
        startDate: "2024",
        endDate: "2024",
        links: undefined
    },
    asgc: {
        key: "asgc",
        images: [projPics.asgc],
        stack: ["opencv", "raspberrypi", "embedded", "electronics_analog", "electronics_digital", "python"],
        categories: ["electrical_engineering", "robotics", "embedded_systems"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2024",
        links: {
            website: LINKS.organizations.asgc
        }
    },
    digital_clock: {
        key: "digital_clock",
        images: [projPics.maze_robot],
        stack: ["electronics_digital"],
        categories: ["electrical_engineering"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: false,
        startDate: "2023",
        endDate: "2023",
        links: undefined
    },
    prog_engr: {
        key: "prog_engr",
        images: [projPics.maze_robot],
        stack: ["arduino", "cpp"],
        categories: ["electrical_engineering"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2022",
        links: undefined
    },
    habitar: {
        key: "habitar",
        images: [projPics.habitar],
        stack: ["autocad", "sketchup"],
        categories: ["electrical_engineering"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: false,
        startDate: "2020",
        endDate: "2021",
        links: undefined
    },

    // HU Brackett Library
    hu_remembers: {
        key: "hu_remembers",
        images: [projPics.hu_remembers],
        stack: ["react", "javascript", "axios", "directus", "bootstrap", "google_maps", "sass", "php" ],
        categories: ["software_engineering", "web_development"],
        privacy: "private",
        client: "contract",
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
        images: [projPics.hu_bison],
        stack: ["react", "javascript", "axios", "antdesign", "php"],
        categories: ["software_engineering", "web_development"],
        privacy: "private",
        client: "contract",
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
        images: [projPics.hu_directus],
        stack: ["react", "javascript", "directus", "mysql", "php"],
        categories: ["software_engineering", "web_development"],
        privacy: "private",
        client: "contract",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2025",
        links: undefined
    },
    hu_kiosk: {
        key: "hu_kiosk",
        images: [projPics.hu_kiosk],
        stack: ["react", "typescript", "php"],
        categories: ["software_engineering", "web_development"],
        privacy: "private",
        client: "contract",
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
        images: [projPics.maze_robot],
        stack: ["latex"],
        categories: ["software_engineering"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: false,
        startDate: "2022",
        endDate: "2022",
        links: undefined
    },
    cs50: {
        key: "cs50",
        images: [projPics.cs50],
        stack: ["c", "html", "css", "python", "flask", "javascript"],
        categories: ["software_engineering", "web_development"],
        privacy: "private",
        client: "academic",
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
        images: [projPics.duke],
        stack: ["java"],
        categories: ["software_engineering", "web_development"],
        privacy: "private",
        client: "academic",
        status: "completed",
        featured: false,
        startDate: "2020",
        endDate: "2020",
        links: {
            website: LINKS.certifications.coursera.main
        }
    }
} as const satisfies ProjectsSSOT;