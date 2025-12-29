import { SEO } from "./meta";

export const PAGES = {
    certifications: {
        short_title: "Certifications",
        long_title: "My Certifications",
        link: "#certifications",
        slug: "/certifications",
        SEO_title: SEO.title("My Certifications"),
        SEO_description: SEO.description("Take a look at my certifications!"),
        SEO_canonical: SEO.canonical("/certifications")
    },
	projects: {
		short_title: "Projects",
        long_title: "My Projects",
        link: "#projects",
        slug: "/projects",
        SEO_title: SEO.title("My Projects"),
        SEO_description: SEO.description("Take a look at the projects I've developed!"),
        SEO_canonical: SEO.canonical("/projects")
	},
    awards: {
        short_title: "Awards",
        long_title: "My Awards",
        link: "#awards",
        slug: "/awards",
        SEO_title: SEO.title("My Awards"),
        SEO_description: SEO.description("Take a look at my awards!"),
        SEO_canonical: SEO.canonical("/awards")
    }
} as const;