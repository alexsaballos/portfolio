import { LINKS } from "@config/routes/links";
import { PICTURES } from "@config/assets";
import type { HonorsSSOT } from "@typing/HonorsType";

export const HONORS = {
    ncees: {
        key: "ncees",
        picture: PICTURES.honors.ncees,
        awards: [{
            year: "2025",
            info: LINKS.organizations.ncees,
            verification: LINKS.certifications.credly.award
        }]
    },
    wisp: {
        key: "wisp",
        picture: PICTURES.honors.wisp,
        awards: [{
            year: "2021-2025",
            info: LINKS.organizations.wisp,
            verification: undefined
        }]
    },
    hu: {
        key: "hu",
        picture: PICTURES.honors.hu,
        awards: [
            {
                year: "2025",
                info: LINKS.organizations.hu.engineering,
                verification: LINKS.certifications.parchment
            },
            {
                year: "2024",
                info: LINKS.organizations.hu.asi,
                verification: undefined
            },
            {
                year: "2021-2025",
                info: LINKS.organizations.hu.honors,
                verification: undefined
            },
            {
                year: "2021-2025",
                info: undefined,
                verification: LINKS.profiles.merit
            }
        ]
    }
} as const satisfies HonorsSSOT;