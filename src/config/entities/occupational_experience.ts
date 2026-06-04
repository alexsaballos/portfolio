import { SYSTEM } from "@config/links";

export const SCHEMAORG_OCCUPATIONALEXP = {
    "@type": "OccupationalExperienceRequirements",
    "@id": `${SYSTEM.domain}#experience-requirement`,
    "monthsOfExperience": 12,
        "qualifications": {
        "@type": "EducationalOccupationalCredential",
        "name": "This is a mere test to see if it gets correctly synced",
        "recognizedBy": {
            "@type": "Organization",
            "name": "Arkansas State Board Of Licensure for Professional Engineers"
        }
    }
} as const;