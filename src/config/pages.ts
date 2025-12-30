import { SEO } from "./meta";

export const PAGES = {
	projects: {
		short_title: "Projects",
        long_title: "Engineering & Software Projects",
        link: "#projects",
        slug: "/projects",
        SEO_title: SEO.title("Engineering & Software Projects"),
        SEO_description: SEO.description("Selected engineering and software projects by Alexander Saballos, including embedded systems, automation, and full-stack development."),
        SEO_canonical: SEO.canonical("/projects")
	},
    experience: {
        short_title: "Experience",
        long_title: "Professional & Technical Experience",
        link: "#experience",
        slug: "/experience",
        SEO_title: SEO.title("Professional Experience"),
        SEO_description: SEO.description("Professional experience of Alexander Saballos across engineering, software development, and technical business operations."),
        SEO_canonical: SEO.canonical("/experience")
    },
    certifications: {
        short_title: "Certifications",
        long_title: "Professional Certifications & Licensure",
        link: "#certifications",
        slug: "/certifications",
        SEO_title: SEO.title("Engineering & Technical Certifications"),
        SEO_description: SEO.description("Professional engineering certifications held by Alexander Saballos, including FE/EI licensure and formally issued credentials."),
        SEO_canonical: SEO.canonical("/certifications")
    },
    honors: {
        short_title: "Honors",
        long_title: "Honors & Distinctions",
        link: "#honors",
        slug: "/honors",
        SEO_title: SEO.title("Honors & Distinctions"),
        SEO_description: SEO.description("Academic honors, scholarships, and distinctions earned by Alexander Saballos throughout his engineering education."),
        SEO_canonical: SEO.canonical("/honors")
    },
    contact: {
        short_title: "Contact",
        long_title: "Get in touch!",
        link: "#contact",
        slug: "/contact",
        SEO_title: SEO.title("Contact Alexander Saballos"),
        SEO_description: SEO.description("Contact information for Alexander Saballos regarding engineering, software, or professional collaboration inquiries."),
        SEO_canonical: SEO.canonical("/contact")
    }
} as const;