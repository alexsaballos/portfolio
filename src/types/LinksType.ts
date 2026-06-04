export type SystemLinksType = Record<("domain" | "pfp" | "logo"), string> & {
    API: Record<("google_analytics" | "resend" | "webfinger" | "webmention"), string>;
}

export type GeneralLinksType = {
    organizations: Record<(
        "abet" | "arpels" | "asgc" | "ieee" | "ncees" |  "sidimaqsa" | "wisp"
    ), string>
    & {
        hu: Record<(
            "main" | "engineering" | "math" | "asi" | "honors" | "arc"
        ), string>;
    },
    profiles: Record<(
        "coursera" | "credly" | "edx" | "figma" | "github" | "gravatar" | "googledev"
        | "handshake" | "khanacademy" | "linkedin" | "merit" | "orcid" | "peoplecert" | "quizlet"
    ), string>,
    other: Record<("facebook" | "instagram" | "messenger" | "youtube"), string>,
    gaming: Record<(
        "ea" | "epicgames" | "googleplay" | "nintendo" | "playstation" | "rockstar" | "steam" | "ubisoft" | "xbox"
    ), string>,
    payment: Record<("cashapp" | "paypal" | "venmo" | "venmoplus"), string>,
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