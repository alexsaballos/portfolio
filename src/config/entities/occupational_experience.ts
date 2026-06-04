import { SYSTEM } from "@config/links";

export const SCHEMAORG_OCCUPATIONALEXP = {
    "@type": "OccupationalExperienceRequirements",
    "@id": `${SYSTEM.domain}#experience-requirement`,
    "monthsOfExperience": 12,
    "recognizedBy": {
        "@type": "Organization",
        "name": "Arkansas State Board Of Licensure for Professional Engineers"
    }
} as const;