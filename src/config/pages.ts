import { SEO } from "./routing";
import { PERSONAL } from "./personal";
import { ICONS, PICTURES } from "./assets";

import type { DirectoryPagesType, CategoryPagesListType, NavigationPagesListType } from "../types/PagesType";

export const PAGES: DirectoryPagesType = {
	home: {
		short_title: PERSONAL.name,
        long_title: `${PERSONAL.name} - Engineering Portfolio`,
        link: "#",
        slug: "/",
        key: "home",
        icon: ICONS.home,
        SEO_title: SEO.title(),
        SEO_description: SEO.description(`Welcome to ${PERSONAL.name}' Engineering Portfolio`)
	},
	projects: {
		short_title: "Projects",
        long_title: "Engineering & Software Projects",
        link: "#projects",
        slug: "/projects",
        key: "projects",
        icon: ICONS.projects,
        picture: PICTURES.categories.projects,
        SEO_title: SEO.title("Engineering & Software Projects"),
        SEO_description: SEO.description(`Selected engineering and software projects by ${PERSONAL.name}, including embedded systems, automation, and full-stack development.`)
	},
    experience: {
        short_title: "Experience",
        long_title: "Professional & Technical Experience",
        link: "#experience",
        slug: "/experience",
        key: "experience",
        icon: ICONS.experience,
        picture: PICTURES.categories.experience,
        SEO_title: SEO.title("Professional Experience"),
        SEO_description: SEO.description(`Professional experience of ${PERSONAL.name} across engineering, software development, and technical business operations.`)
    },
    leadership: {
        short_title: "Leadership",
        long_title: "International Leadership Experience",
        link: "#leadership",
        slug: "/leadership",
        key: "leadership",
        icon: ICONS.leadership,
        picture: PICTURES.categories.leadership,
        SEO_title: SEO.title("International Leadership Experience"),
        SEO_description: SEO.description(`International leadership experience by ${PERSONAL.name} throughout his engineering education.`)
    },
    certifications: {
        short_title: "Certifications",
        long_title: "Professional Certifications & Licensure",
        link: "#certifications",
        slug: "/certifications",
        key: "certifications",
        icon: ICONS.certifications,
        picture: PICTURES.categories.certifications,
        SEO_title: SEO.title("Engineering & Technical Certifications"),
        SEO_description: SEO.description(`Professional engineering certifications held by ${PERSONAL.name}, including FE/EI licensure and formally issued credentials.`)
    },
    honors: {
        short_title: "Honors",
        long_title: "Honors & Distinctions",
        link: "#honors",
        slug: "/honors",
        key: "honors",
        icon: ICONS.honors,
        picture: PICTURES.categories.honors,
        SEO_title: SEO.title("Honors & Distinctions"),
        SEO_description: SEO.description(`Academic honors, scholarships, and distinctions earned by ${PERSONAL.name} throughout his engineering education.`)
    },
    contact: {
        short_title: "Contact",
        long_title: "Get in touch!",
        link: "#contact",
        slug: "/contact",
        key: "contact",
        icon: ICONS.contact,
        SEO_title: SEO.title("Contact me"),
        SEO_description: SEO.description(`Contact information for ${PERSONAL.name} regarding engineering, software, or professional collaboration inquiries.`)
    }
} as const;

const NAV_KEYS = Object.keys(PAGES).filter((k) =>
    (k !== "home")) as (keyof NavigationPagesListType)[];
const CAT_KEYS = Object.keys(PAGES).filter((k) =>
    (k !== "home" && k !== "contact")) as (keyof CategoryPagesListType)[];

export const NAVIGATION_PAGES: NavigationPagesListType = Object.fromEntries(
    NAV_KEYS.map((key) => [key, PAGES[key]])
) as NavigationPagesListType;

export const CATEGORY_PAGES: CategoryPagesListType = Object.fromEntries(
    CAT_KEYS.map((key) => [key, PAGES[key]])
) as CategoryPagesListType;