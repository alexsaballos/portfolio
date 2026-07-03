export type PublicFacingEmailsType =
    | "contact" | "security" | "business" | "engineering" | "careers" | "education"
    | "contact_webfinger" | "contact_schemaorg";

export type PersonalInfoType =
    Record<("name" | "jobTitle" | "college"), string> &
    {emails: Partial<Record<PublicFacingEmailsType, string>>};

export type wkdType = Record<PublicFacingEmailsType, string>;