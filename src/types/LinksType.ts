export type SystemLinksType = Record<("domain" | "pfp" | "logo"), string> &
    { notable: Record<("card_canon" | "card_utm"), string> } &
    { API: Record<("google_analytics" | "wallet_apple" | "wallet_google" | "resend" | "webfinger" | "webmention"), string>; }

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