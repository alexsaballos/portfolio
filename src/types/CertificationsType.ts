export type CertsOrgListType = "iassc" | "arpels" | "hu" | "cs50" | "coursera";
export type CertListType = Record<CertsOrgListType, {
    key: CertsOrgListType
    year: string;
    status: "completed" | "progress" | "planned";
    honors: undefined | "laude" | "honors";
    picture: ImageMetadata;
    verification: string;
    info: string;
}>;

export type CertLocaleType = Record<CertsOrgListType, {
    name: string;
    issuer: string;
    summary: string;
    details: string;
    verification?: string;
    info: string;
}>;