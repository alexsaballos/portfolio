export type HonorsOrgListType = "ncees" | "wisp" | "hu";
export type HonorsListType = "ncees_award" | "wisp_award" | "engineering" | "asi" | "honors" | "deans_list";
export type HonorsLinkType = "link" | "verification";

// Locale (i18n) structure
export type AwardType = {
    title: string;
    key: HonorsListType;
    summary: string;
    details: string;
    link?: { name: string; };
	verification?: { name: string; };
}

export type HonorsType = Record<HonorsOrgListType, {
    name: string;
    key: HonorsOrgListType;
    awards: AwardType[];
}>

// SSOT (picture & links) structure
export type HonorLinkResource = {
    link?: string;
    verification?: string;
};

export type FlatHonorLinks = {
    picture: ImageMetadata;
} & HonorLinkResource;

export type NestedHonorLinks = {
    picture: ImageMetadata;
} & Record<HonorsListType, (HonorLinkResource | undefined)>;

export type HonorsSSOT = Record<HonorsOrgListType, (FlatHonorLinks | NestedHonorLinks)>