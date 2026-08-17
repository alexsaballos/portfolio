export type SystemLinksType = {
    domain: string;
    subdomains: Record<("api" | "assets" | "integrations"), string>;
    notable: {
        internal: {
            card_canon: string;
            card_utm: string;
            files: Record<(
                "favicon_svg" | "favicon_ico" | "pgp_key" | "sitemap" | "manifest" | "humans" | "robots" | "vcard" | "xcard"
            ), string>;
        };
        external: {
            branding: Record<("pfp" | "logo"), string>;
            opengraph: Record<("default"), string>;
            pwa: Record<("favicons" | "screenshots"), string>;
            resume: Record<("es"), string>;
        };
    };
    API: Record<("google_analytics" | "webfinger" | "webmention"), string>;
    integrations: Record<("resend" | "gwallet"), string>;
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