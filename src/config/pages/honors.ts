import { LINKS } from "@config/routes/links";
import { PICTURES } from "@config/assets";
import type { HonorsOrgListType, HonorsSSOT } from "@typing/HonorsType";

export const HONOR_LINKS = {
    ncees: {
        year: "2025",
        picture: PICTURES.honors.ncees,
        link: LINKS.organizations.ncees,
        verification: LINKS.certifications.credly.award
    },
    wisp: {
        year: "2021-2025",
        picture: PICTURES.honors.wisp,
        link: LINKS.organizations.wisp,
        verification: undefined
    },
    hu: {
        picture: PICTURES.honors.hu,
        engineering: {
            year: "2025",
            link: LINKS.organizations.hu.engineering,
            verification: LINKS.certifications.parchment
        },
        asi: {
            year: "2024",
            link: LINKS.organizations.hu.asi,
            verification: undefined
        },
        honors: {
            year: "2021-2025",
            link: LINKS.organizations.hu.honors,
            verification: undefined
        },
        deans_list: {
            year: "2021-2025",
            link: undefined,
            verification: LINKS.profiles.merit
        }
    }
} as const satisfies HonorsSSOT;

export const HONORS_KEYS = Object.keys(HONOR_LINKS) as HonorsOrgListType[];