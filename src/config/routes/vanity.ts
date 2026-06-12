import { SEO } from "@config/routes/routing";
import { LINKS } from "@config/links";
import { PERSONAL } from "@config/personal";
import type { VanityListType, VanityEntryGroupType } from "@typing/VanityType";

export const VANITY = {
    linkedin: {
        key: "linkedin",
        frontend: {
            name: "LinkedIn",
            link: LINKS.profiles.linkedin,
            icon: "linkedin",
            text: {
                owner: "my",
                type: "profile"
            },
        },
        metadata: {
            slug: "linkedin",
            label: "My LinkedIn Profile",
            groups: ["contact", "social"]
        },
        SEO: {
            title: SEO.title("LinkedIn Profile"),
            description: SEO.description(`LinkedIn Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("linkedin")
        }
    },
    github: {
        key: "github",
        frontend: {
            name: "GitHub",
            link: LINKS.profiles.github,
            icon: "github",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "github",
            label: "My GitHub Profile",
            groups: ["contact", "social"]
        },
        SEO: {
            title: SEO.title("GitHub Profile"),
            description: SEO.description(`GitHub Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("github")
        }
    },
    handshake: {
        key: "handshake",
        frontend: {
            name: "Handshake",
            link: LINKS.profiles.handshake,
            icon: "handshake",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "handshake",
            label: "My Handshake Profile",
            groups: ["contact", "social"]
        },
        SEO: {
            title: SEO.title("Handshake Profile"),
            description: SEO.description(`Handshake Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("handshake")
        }
    },
    merit: {
        key: "merit",
        frontend: {
            name: "Merit",
            link: LINKS.profiles.merit,
            icon: "merit",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "merit",
            label: "My Merit Page",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("Merit Page Profile"),
            description: SEO.description(`Merit Page Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("merit")
        }
    },
    credly: {
        key: "credly",
        frontend: {
            name: "Credly",
            link: LINKS.certifications.credly.profile,
            icon: "credly",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "credly",
            label: "My Credly Profile",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("Credly Profile"),
            description: SEO.description(`Credly Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("credly")
        }
    },
    wisp: {
        key: "wisp",
        frontend: {
            name: "WISP",
            link: LINKS.organizations.wisp,
            icon: "wisp",
            text: {
                owner: "",
                type: "website"
            }
        },
        metadata: {
            slug: "wisp",
            label: "WISP Official Website",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("WISP Website"),
            description: SEO.description(`WISP Website - ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("wisp")
        }
    },
    hu: {
        key: "hu",
        frontend: {
            name: "Harding University",
            link: LINKS.organizations.hu.main,
            icon: "hu",
            text: {
                owner: "",
                type: "website"
            }
        },
        metadata: {
            slug: "hu",
            label: "Harding University Official Website",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("HU Website"),
            description: SEO.description(`Harding University Website - ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("hu")
        }
    },
    coursera: {
        key: "coursera",
        frontend: {
            name: "Coursera",
            link: LINKS.profiles.coursera,
            icon: "coursera",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "coursera",
            label: "My Coursera Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Coursera Profile"),
            description: SEO.description(`Coursera Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("coursera")
        }
    },
    edx: {
        key: "edx",
        frontend: {
            name: "EdX",
            link: LINKS.profiles.edx,
            icon: "edx",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "edx",
            label: "My EdX Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("EdX Profile"),
            description: SEO.description(`EdX Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("edx")
        }
    },
    googledev: {
        key: "googledev",
        frontend: {
            name: "Google Developer",
            link: LINKS.profiles.googledev,
            icon: "googledev",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "googledev",
            label: "My Google Developer Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Google Developer Profile"),
            description: SEO.description(`Google Developer Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("googledev")
        }
    },
    figma: {
        key: "figma",
        frontend: {
            name: "Figma",
            link: LINKS.profiles.figma,
            icon: "figma",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "figma",
            label: "My Figma Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Figma Profile"),
            description: SEO.description(`Figma Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("figma")
        }
    },
    gravatar: {
        key: "gravatar",
        frontend: {
            name: "Gravatar",
            link: LINKS.profiles.gravatar,
            icon: "gravatar",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "gravatar",
            label: "My Gravatar Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Gravatar Profile"),
            description: SEO.description(`Gravatar Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("gravatar")
        }
    },
    khanacademy: {
        key: "khanacademy",
        frontend: {
            name: "Khan Academy",
            link: LINKS.profiles.khanacademy,
            icon: "khanacademy",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "khanacademy",
            label: "My Khan Academy Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Khan Academy Profile"),
            description: SEO.description(`Khan Academy Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("khanacademy")
        }
    },
    orcid: {
        key: "orcid",
        frontend: {
            name: "ORCiD",
            link: LINKS.profiles.orcid,
            icon: "orcid",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "orcid",
            label: "My ORCiD Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("ORCiD Profile"),
            description: SEO.description(`ORCiD ID Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("orcid")
        }
    },
    peoplecert: {
        key: "peoplecert",
        frontend: {
            name: "PeopleCert",
            link: LINKS.profiles.peoplecert,
            icon: "peoplecert",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "peoplecert",
            label: "My PeopleCert Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("PeopleCert Profile"),
            description: SEO.description(`PeopleCert Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("peoplecert")
        }
    },
    quizlet: {
        key: "quizlet",
        frontend: {
            name: "Quizlet",
            link: LINKS.profiles.quizlet,
            icon: "quizlet",
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "quizlet",
            label: "My Quizlet Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Quizlet Profile"),
            description: SEO.description(`Quizlet Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("quizlet")
        }
    },
    sidimaqsa: {
        key: "sidimaqsa",
        frontend: {
            name: "SIDIMAQSA",
            link: LINKS.organizations.sidimaqsa,
            icon: "sidimaqsa",
            text: {
                owner: "my",
                type: "business"
            }
        },
        metadata: {
            slug: "sidimaqsa",
            label: "My Business Website",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("SIDIMAQSA Website"),
            description: SEO.description(`SIDIMAQSA Website - ${PERSONAL.name}`),
            canonical: SEO.canonical.vanity("sidimaqsa")
        }
    }
} as const satisfies VanityListType;

export const pickVanityGroup = (group: VanityEntryGroupType) =>
    Object.fromEntries(Object.entries(VANITY).filter(([, value]) =>
            (value.metadata.groups as readonly string[]).includes(group)
    ));