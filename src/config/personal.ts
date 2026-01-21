import type { PersonalInfoType } from "../types/PersonalTypes";

// Personal Information to be publicly disclosed via website
export const PERSONAL: PersonalInfoType = {
    name: "Alexander Saballos",
    resend_endpoint: "https://api.alexsaballos.dev/contact.php"
} as const;