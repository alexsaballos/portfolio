import { SEO } from "@config/routes/routing";
import { PICTURES } from "@config/assets";
import { PERSONAL } from "@config/personal";

import type { DirectoryPagesListType, LocalizedPageType, NavigationPageType, UnlocalizedPageType } from "@typing/PagesType";

export const PAGES = {
	home: {
        key: "home",
        frontend: {
            short_title: PERSONAL.name,
            long_title: `${PERSONAL.name} - Engineering Portfolio`,
            icon: "home"
        },
        metadata: {
            link: "#",
            slug: "",
            sitemap_priority: "1.0",
            categories: ["localized", "unlocalized"]
        },
        SEO: {
            title: SEO.title(),
            description: SEO.description(`Welcome to ${PERSONAL.name}' Engineering Portfolio`),
            schemaorg_position: 1
        }
	},
	projects: {
        key: "projects",
        frontend: {
            short_title: "Projects",
            long_title: "Engineering & Software Projects",
            icon: "microchip",
            picture: PICTURES.categories.projects
        },
        metadata: {
            link: "#projects",
            slug: "projects",
            sitemap_priority: "0.8",
            categories: ["localized", "navigation"]
        },
        SEO: {
            title: SEO.title("Engineering & Software Projects"),
            description: SEO.description(`Selected engineering and software projects by ${PERSONAL.name}, including embedded systems, automation, and full-stack development.`),
            schemaorg_position: 2
        }
	},
    experience: {
        key: "experience",
        frontend: {
            short_title: "Experience",
            long_title: "Professional & Technical Experience",
            icon: "briefcase",
            picture: PICTURES.categories.experience
        },
        metadata: {
            link: "#experience",
            slug: "experience",
            sitemap_priority: "0.8",
            categories: ["localized", "navigation"]
        },
        SEO: {
            title: SEO.title("Professional Experience"),
            description: SEO.description(`Professional experience of ${PERSONAL.name} across engineering, software development, and technical business operations.`),
            schemaorg_position: 2
        }
    },
    leadership: {
        key: "leadership",
        frontend: {
            short_title: "Leadership",
            long_title: "International Leadership Experience",
            icon: "leadership",
            picture: PICTURES.categories.leadership
        },
        metadata: {
            link: "#leadership",
            slug: "leadership",
            sitemap_priority: "0.8",
            categories: ["localized", "navigation"]
        },
        SEO: {
            title: SEO.title("International Leadership Experience"),
            description: SEO.description(`International leadership experience by ${PERSONAL.name} throughout his engineering education.`),
            schemaorg_position: 2
        }
    },
    certifications: {
        key: "certifications",
        frontend: {
            short_title: "Certifications",
            long_title: "Professional Certifications & Licensure",
            icon: "certifications",
            picture: PICTURES.categories.certifications
        },
        metadata: {
            link: "#certifications",
            slug: "certifications",
            sitemap_priority: "0.8",
            categories: ["localized", "navigation"]
        },
        SEO: {
            title: SEO.title("Engineering & Technical Certifications"),
            description: SEO.description(`Professional engineering certifications held by ${PERSONAL.name}, including FE/EI licensure and formally issued credentials.`),
            schemaorg_position: 2
        }
    },
    honors: {
        key: "honors",
        frontend: {
            short_title: "Honors",
            long_title: "Honors & Distinctions",
            icon: "award",
            picture: PICTURES.categories.honors
        },
        metadata: {
            link: "#honors",
            slug: "honors",
            sitemap_priority: "0.8",
            categories: ["localized", "navigation"]
        },
        SEO: {
            title: SEO.title("Honors & Distinctions"),
            description: SEO.description(`Academic honors, scholarships, and distinctions earned by ${PERSONAL.name} throughout his engineering education.`),
            schemaorg_position: 2
        }
    },
    contact: {
        key: "contact",
        frontend: {
            short_title: "Contact",
            long_title: "Get in touch!",
            icon: "envelope_closed",
            picture: PICTURES.categories.contact
        },
        metadata: {
            link: "#contact",
            slug: "contact",
            sitemap_priority: "0.8",
            categories: ["localized", "navigation"]
        },
        SEO: {
            title: SEO.title("Contact me"),
            description: SEO.description(`Contact information for ${PERSONAL.name} regarding engineering, software, or professional collaboration inquiries.`),
            schemaorg_position: 2
        }
    },
	card: {
        key: "card",
        frontend: {
            short_title: "Card",
            long_title: "Professional Business Card",
            icon: "id_card"
        },
        metadata: {
            link: "#card",
            slug: "card",
            sitemap_priority: "0.8",
            categories: ["unlocalized"]
        },
        SEO: {
            title: SEO.title("Professional card"),
            description: SEO.description(`Professional business card of ${PERSONAL.name}`),
            schemaorg_position: 2
        }
	}
} as const satisfies DirectoryPagesListType;

// Page categories based on localization and navigation
export const LOCALIZED_PAGES = Object.fromEntries(
    Object.entries(PAGES).filter(([_, page]) => (page.metadata.categories as string[]).includes("localized")
));

export const UNLOCALIZED_PAGES = Object.fromEntries(
    Object.entries(PAGES).filter(([_, page]) => (page.metadata.categories as string[]).includes("unlocalized")
));

export const NAVIGATION_PAGES = Object.fromEntries(
    Object.entries(PAGES).filter(([_, page]) => (page.metadata.categories as string[]).includes("navigation")
));