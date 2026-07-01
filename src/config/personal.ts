import type { PersonalInfoType } from "@typing/PersonalTypes";

export const PERSONAL = {
    name: "Alexander Saballos",
    jobTitle: "Electrical & Software Engineer",
    college: "Harding University",
    emails: {
        contact: "contact@alexsaballos.dev",
        webfinger: "contact+webfinger@alexsaballos.dev",
        schemaorg: "contact+schemaorg@alexsaballos.dev",
        security: "security@alexsaballos.dev"
    }
} as const satisfies PersonalInfoType;