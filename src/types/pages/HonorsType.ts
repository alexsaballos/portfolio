export type HonorsOrgListType = "ncees" | "wisp" | "hu";
export type HonorsLinkType = "link" | "verification";

// SSOT (picture & links) structure
export type AwardType = {
    year: string;
    info?: string;
	verification?: string;
};

export type OrgType = {
    key: HonorsOrgListType;
    picture: ImageMetadata;
    awards: AwardType[];
};

export type HonorsSSOT = Record<HonorsOrgListType, OrgType>;

// Locale (i18n) structure
export type LOChonorsAwardType = {
    title: string;
    issuer: string;
    summary: string;
    details: string;
    info?: string;
    verification?: string;
}

export type LOChonorsOrgType = {
    issuer: string;
    awards: LOChonorsAwardType[]
};
export type LOChonorsType = {
    texts: Record<("title" | "description" | "resources"), string>
} & Record<HonorsOrgListType, LOChonorsOrgType>