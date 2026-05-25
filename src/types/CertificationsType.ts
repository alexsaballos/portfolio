export type CertsOrgListType = "arpels" | "hu" | "iassc" | "cs50" | "coursera";
export type CertListType = Record<CertsOrgListType, {
    year: string;
    picture: ImageMetadata;
    verification?: string;
    info: string;
}>;