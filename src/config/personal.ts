import type { PersonalInfoType } from "@typing/PersonalTypes";

export const PERSONAL = {
    name: "Alexander Saballos",
    jobTitle: "Electrical & Software Engineer",
    college: "Harding University"
} as const satisfies PersonalInfoType;