import type { VanityListType, VanityEntryGroupType } from "../types/VanityType";
import { LINKS } from "./links";
import { SEO } from "./routing";
import { ICONS } from "./assets";
import { PERSONAL } from "./personal";

export const VANITY: VanityListType = {
    linkedin: {
        key: "linkedin",
        frontend: {
            name: "LinkedIn",
            link: LINKS.profiles.linkedin,
            icon: ICONS.linkedin,
            text: {
                owner: "my",
                type: "profile"
            },
        },
        metadata: {
            slug: "/linkedin",
            label: "My LinkedIn Profile",
            groups: ["contact", "social"]
        },
        SEO: {
            title: SEO.title("LinkedIn Profile"),
            description: SEO.description(`LinkedIn Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/linkedin")
        }
    },
    github: {
        key: "github",
        frontend: {
            name: "GitHub",
            link: LINKS.profiles.github,
            icon: ICONS.github,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/github",
            label: "My GitHub Profile",
            groups: ["contact", "social"]
        },
        SEO: {
            title: SEO.title("GitHub Profile"),
            description: SEO.description(`GitHub Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/github")
        }
    },
    handshake: {
        key: "handshake",
        frontend: {
            name: "Handshake",
            link: LINKS.profiles.handshake,
            icon: ICONS.handshake,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/handshake",
            label: "My Handshake Profile",
            groups: ["contact", "social"]
        },
        SEO: {
            title: SEO.title("Handshake Profile"),
            description: SEO.description(`Handshake Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/handshake")
        }
    },
    merit: {
        key: "merit",
        frontend: {
            name: "Merit",
            link: LINKS.profiles.merit,
            icon: ICONS.merit,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/merit",
            label: "My Merit Page",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("Merit Page Profile"),
            description: SEO.description(`Merit Page Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/merit")
        }
    },
    credly: {
        key: "credly",
        frontend: {
            name: "Credly",
            link: LINKS.certifications.credly.profile,
            icon: ICONS.credly,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/credly",
            label: "My Credly Profile",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("Credly Profile"),
            description: SEO.description(`Credly Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/credly")
        }
    },
    wisp: {
        key: "wisp",
        frontend: {
            name: "WISP",
            link: LINKS.organizations.wisp,
            icon: ICONS.wisp,
            text: {
                owner: "",
                type: "website"
            }
        },
        metadata: {
            slug: "/wisp",
            label: "WISP Official Website",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("WISP Website"),
            description: SEO.description(`WISP Website - ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/wisp")
        }
    },
    hu: {
        key: "hu",
        frontend: {
            name: "Harding University",
            link: LINKS.organizations.hu.main,
            icon: ICONS.hu,
            text: {
                owner: "",
                type: "website"
            }
        },
        metadata: {
            slug: "/hu",
            label: "Harding University Official Website",
            groups: ["social"]
        },
        SEO: {
            title: SEO.title("HU Website"),
            description: SEO.description(`Harding University Website - ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/hu")
        }
    },
    coursera: {
        key: "coursera",
        frontend: {
            name: "Coursera",
            link: LINKS.profiles.coursera,
            icon: ICONS.coursera,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/coursera",
            label: "My Coursera Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Coursera Profile"),
            description: SEO.description(`Coursera Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/coursera")
        }
    },
    edx: {
        key: "edx",
        frontend: {
            name: "EdX",
            link: LINKS.profiles.edx,
            icon: ICONS.edx,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/edx",
            label: "My EdX Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("EdX Profile"),
            description: SEO.description(`EdX Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/edx")
        }
    },
    googledev: {
        key: "googledev",
        frontend: {
            name: "Google Developer",
            link: LINKS.profiles.googledev,
            icon: ICONS.googledev,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/googledev",
            label: "My Google Developer Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Google Developer Profile"),
            description: SEO.description(`Google Developer Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/googledev")
        }
    },
    figma: {
        key: "figma",
        frontend: {
            name: "Figma",
            link: LINKS.profiles.figma,
            icon: ICONS.figma,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/figma",
            label: "My Figma Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Figma Profile"),
            description: SEO.description(`Figma Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/figma")
        }
    },
    gravatar: {
        key: "gravatar",
        frontend: {
            name: "Gravatar",
            link: LINKS.profiles.gravatar,
            icon: ICONS.gravatar,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/gravatar",
            label: "My Gravatar Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Gravatar Profile"),
            description: SEO.description(`Gravatar Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/gravatar")
        }
    },
    khanacademy: {
        key: "khanacademy",
        frontend: {
            name: "Khan Academy",
            link: LINKS.profiles.khanacademy,
            icon: ICONS.khanacademy,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/khanacademy",
            label: "My Khan Academy Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Khan Academy Profile"),
            description: SEO.description(`Khan Academy Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/khanacademy")
        }
    },
    peoplecert: {
        key: "peoplecert",
        frontend: {
            name: "PeopleCert",
            link: LINKS.profiles.peoplecert,
            icon: ICONS.peoplecert,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/peoplecert",
            label: "My PeopleCert Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("PeopleCert Profile"),
            description: SEO.description(`PeopleCert Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/peoplecert")
        }
    },
    quizlet: {
        key: "quizlet",
        frontend: {
            name: "Quizlet",
            link: LINKS.other.quizlet,
            icon: ICONS.quizlet,
            text: {
                owner: "my",
                type: "profile"
            }
        },
        metadata: {
            slug: "/quizlet",
            label: "My Quizlet Profile",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("Quizlet Profile"),
            description: SEO.description(`Quizlet Professional Profile of ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/quizlet")
        }
    },
    sidimaqsa: {
        key: "sidimaqsa",
        frontend: {
            name: "SIDIMAQSA",
            link: LINKS.organizations.sidimaqsa,
            icon: ICONS.sidimaqsa,
            text: {
                owner: "my",
                type: "business"
            }
        },
        metadata: {
            slug: "/sidimaqsa",
            label: "My Business Website",
            groups: ["ungrouped"]
        },
        SEO: {
            title: SEO.title("SIDIMAQSA Website"),
            description: SEO.description(`SIDIMAQSA Website - ${PERSONAL.name}`),
            canonical: SEO.canonical_vanity("/sidimaqsa")
        }
    }
} as const;

export const pickVanityGroup = (group: VanityEntryGroupType) =>
    Object.fromEntries(Object.entries(VANITY).filter(([, value]) =>
            value.metadata.groups.includes(group)
        )
    );