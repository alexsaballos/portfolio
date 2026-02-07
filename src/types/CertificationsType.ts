export type CertsOrgListType = "iassc" | "arpels" | "hu" | "cs50" | "coursera";
export type CertListType = Record<CertsOrgListType, {
    year: string;
    picture: ImageMetadata;
    verification?: string;
    info: string;
}>;
export type CertLocaleType = Record<CertsOrgListType, {
    name: string;
    summary: string;
    details: string;
    verification: string;
    info: string;
}>;