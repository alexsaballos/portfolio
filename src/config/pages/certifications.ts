import { LINKS } from "@config/routes/links";
import { PICTURES } from "@config/assets";
import type { CertListType, CertsOrgListType } from "@typing/CertificationsType";

export const CERT_LINKS = {
    arpels: {
        year: "2025",
        picture: PICTURES.certifications.arpels,
        verification: LINKS.certifications.credly.award,
        info: LINKS.organizations.arpels
    },
    hu: {
        year: "2025",
        picture: PICTURES.honors.hu,
        verification: LINKS.certifications.parchment,
        info: LINKS.organizations.hu.engineering
    },
    iassc: {
        year: "2026",
        picture: PICTURES.certifications.iassc,
        verification: LINKS.profiles.peoplecert,
        info: LINKS.certifications.iassc.main
    },
    cs50: {
        year: "2020",
        picture: PICTURES.certifications.cs50,
        verification: LINKS.certifications.cs50.award,
        info: LINKS.certifications.cs50.main
    },
    coursera: {
        year: "2020",
        picture: PICTURES.certifications.coursera,
        verification: LINKS.certifications.coursera.award,
        info: LINKS.certifications.coursera.main
    }
} as const satisfies CertListType;

export const CERT_KEYS = Object.keys(CERT_LINKS) as CertsOrgListType[];