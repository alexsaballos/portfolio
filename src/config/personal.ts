import type { PersonalInfoType, wkdType } from "@typing/PersonalTypes";

export const PERSONAL = {
    name: "Alexander Saballos",
    jobTitle: "Electrical & Software Engineer",
    college: "Harding University",
    emails: {
        contact: "contact@alexsaballos.dev",
        contact_webfinger: "contact+webfinger@alexsaballos.dev",
        contact_schemaorg: "contact+schemaorg@alexsaballos.dev",
        security: "security@alexsaballos.dev"
    }
} as const satisfies PersonalInfoType;

export const WKD = {
    contact: "dj3498u4hyyarh35rkjfnghbjxug6b19",
    security: "t5s8ztdbon8yzntexy6oz5y48etqsnbb",
    business: "pjmzw74d6on6w4o8hhtn9z5agk1cta8n",
    engineering: "qkez77sb5f5xs9k683jd11wnuinb7w6p",
    careers: "6p7uf88kgnmcejgwi3x5ikauof79jo41",
    education: "ruuwk8xom5kh4u8tyop6c9de9dcj4nd4",
    contact_webfinger: "c4dxkibtxawtm9kx34jyczkwwe3yxgzh",
    contact_schemaorg: "ydgo5mdwu1hhgrsucyheodi9uo7hchoz"
} as const satisfies wkdType;