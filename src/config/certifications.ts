import { LINKS } from "./links";
import { PICTURES } from "./assets";
import type { CertListType, CertsOrgListType } from "../types/CertificationsType";

export const CERT_LINKS: CertListType = {
    arpels: {
        year: "2025",
        picture: PICTURES.certifications.arpels,
        verification: LINKS.credly.award,
        info: LINKS.arpels
    },
    hu: {
        year: "2025",
        picture: PICTURES.honors.hu,
        verification: LINKS.parchment,
        info: LINKS.hu.engineering_dept
    },
    iassc: {
        year: "2026",
        picture: PICTURES.certifications.iassc,
        info: LINKS.iassc.main
    },
    cs50: {
        year: "2020",
        picture: PICTURES.certifications.cs50,
        verification: LINKS.cs50.award,
        info: LINKS.cs50.main
    },
    coursera: {
        year: "2020",
        picture: PICTURES.certifications.coursera,
        verification: LINKS.coursera.award,
        info: LINKS.coursera.main
    }
} as const satisfies CertListType;

export const CERT_KEYS = Object.keys(CERT_LINKS) as CertsOrgListType[];