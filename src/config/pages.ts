import type { PagesType, PrimaryPagesListType, SecondaryPagesListType } from "../types/PagesType";
import { ASSETS } from "./assets";
import { SEO } from "./meta";
import { PERSONAL } from "./personal";

export const PAGES: PagesType = {
	home: {
		short_title: PERSONAL.short_name,
        long_title: PERSONAL.long_name,
        link: "#",
        slug: "/",
        icon: ASSETS.icons.home,
        SEO_title: SEO.title(PERSONAL.short_name),
        SEO_description: SEO.description(PERSONAL.description),
        SEO_canonical: SEO.canonical("/")
	},
	projects: {
		short_title: "Projects",
        long_title: "Engineering & Software Projects",
        link: "#projects",
        slug: "/projects",
        icon: ASSETS.icons.projects,
        picture: ASSETS.pictures.categories.projects,
        SEO_title: SEO.title("Engineering & Software Projects"),
        SEO_description: SEO.description("Selected engineering and software projects by Alexander Saballos, including embedded systems, automation, and full-stack development."),
        SEO_canonical: SEO.canonical("/projects")
	},
    experience: {
        short_title: "Experience",
        long_title: "Professional & Technical Experience",
        link: "#experience",
        slug: "/experience",
        icon: ASSETS.icons.experience,
        picture: ASSETS.pictures.categories.experience,
        SEO_title: SEO.title("Professional Experience"),
        SEO_description: SEO.description("Professional experience of Alexander Saballos across engineering, software development, and technical business operations."),
        SEO_canonical: SEO.canonical("/experience")
    },
    leadership: {
        short_title: "Leadership",
        long_title: "International Leadership Experience",
        link: "#leadership",
        slug: "/leadership",
        icon: ASSETS.icons.leadership,
        picture: ASSETS.pictures.categories.leadership,
        SEO_title: SEO.title("International Leadership Experience"),
        SEO_description: SEO.description("International leadership experience by Alexander Saballos throughout his engineering education."),
        SEO_canonical: SEO.canonical("/leadership")
    },
    certifications: {
        short_title: "Certifications",
        long_title: "Professional Certifications & Licensure",
        link: "#certifications",
        slug: "/certifications",
        icon: ASSETS.icons.certifications,
        picture: ASSETS.pictures.categories.certifications,
        SEO_title: SEO.title("Engineering & Technical Certifications"),
        SEO_description: SEO.description("Professional engineering certifications held by Alexander Saballos, including FE/EI licensure and formally issued credentials."),
        SEO_canonical: SEO.canonical("/certifications")
    },
    honors: {
        short_title: "Honors",
        long_title: "Honors & Distinctions",
        link: "#honors",
        slug: "/honors",
        icon: ASSETS.icons.honors,
        picture: ASSETS.pictures.categories.honors,
        SEO_title: SEO.title("Honors & Distinctions"),
        SEO_description: SEO.description("Academic honors, scholarships, and distinctions earned by Alexander Saballos throughout his engineering education."),
        SEO_canonical: SEO.canonical("/honors")
    },
    contact: {
        short_title: "Contact",
        long_title: "Get in touch!",
        link: "#contact",
        slug: "/contact",
        icon: ASSETS.icons.contact,
        SEO_title: SEO.title("Contact Alexander Saballos"),
        SEO_description: SEO.description("Contact information for Alexander Saballos regarding engineering, software, or professional collaboration inquiries."),
        SEO_canonical: SEO.canonical("/contact")
    }
} as const;

export const PRIMARY_PAGES: PrimaryPagesListType = {
    projects: PAGES.projects,
    experience: PAGES.experience,
    leadership: PAGES.leadership,
    certifications: PAGES.certifications,
    honors: PAGES.honors
} as const;

export const SECONDARY_PAGES: SecondaryPagesListType = {
    home: PAGES.home,
    contact: PAGES.contact
} as const

// Dynamic page link localizers
export const getHomeLink = (locale: string): string => `${PERSONAL.base}${locale}/`;
export const getPageLink = (locale: string, page: string): string => `${PERSONAL.base}${locale}${page}/`;