import type { PersonalType, SocialType } from "../types/PersonalTypes";

// Personal Information to be publicly disclosed via website
export const PERSONAL: PersonalType = {
    short_name: "Alexander Saballos",
    long_name: "Alexander Saballos - Engineering Portfolio",
    description: "Welcome to Alexander Saballos' Engineering Portfolio",
    url: "https://alexsaballos.dev",
    base: "/testing/",
    email: "alexander@alexsaballos.dev",
    nic_phone: "(+505) 8271-2533",
    usa_phone: "(+1) 501-236-2416"
} as const;

export const SOCIAL: SocialType = {
    whatsapp_URL: "https://wa.me/50582712533",
    portfolio_URL: "https://alexsaballos.dev",
    linkedin_URL: "https://www.linkedin.com/in/alex-saballos/",
    github_URL: "https://github.com/alexsaballos",
    handshake_URL: "https://app.joinhandshake.com/profiles/alexsaballos",
    merit_URL: "https://meritpages.com/alexsaballos",
    wisp_URL: "https://www.wispweb.org/",
    hu_URL: "https://harding.edu"

} as const;