export type SystemLinksType = {
    domain: string;
    subdomains: Record<("api" | "assets"), string>;
    notable: {
        internal: Record<("card_canon" | "card_utm"), string>;
        external: Record<("pfp" | "logo"), string>;
    };
    API: Record<("google_analytics" | "wallet_google" | "resend" | "webfinger" | "webmention"), string>;
};

export type GeneralLinksType = {
    profiles: Record<(
        "coursera" | "credly" | "edx" | "figma" | "github" | "gravatar" | "googledev"
        | "handshake" | "khanacademy" | "linkedin" | "merit" | "orcid" | "peoplecert" | "quizlet"
    ), string>,
    projects: Record<("arctos" | "github_portfolio" | "hu_remembers" | "hu_bison" | "hu_kiosk"), string>;
    organizations: Record<(
        "abet" | "arpels" | "asgc" | "ieee" | "ncees" |  "sidimaqsa" | "wisp"
    ), string>
    & {
        hu: Record<(
            "main" | "engineering" | "math" | "asi" | "honors" | "arc"
        ), string>;
    },
    certifications: {
        aha: Record<("main" | "award"), string>;
        coursera: Record<("main" | "profile" | "award"), string>;
        credly: Record<("profile" | "award"), string>;
        cs50: Record<("main" | "award"), string>;
        edx: string;
        iassc: Record<("main" | "profile" | "award"), string>;
        parchment: string;
    }
}

export type utmMedium = "nfc" | "qr" | "gwallet" | "social" | "email" | "resume" | "event";
export type utmSource = "business_card" | "google_wallet" | "linkedin" | "github" | "handshake" | "orcid" | "gravatar"
    | "email_signature" | "resume" | "portfolio" | "conference" | "presentation" | "sms" | "whatsapp";