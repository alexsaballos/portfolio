export type PersonalInfoType =
Record<("name" | "jobTitle" | "college"), string> &
{emails: Record<("contact" | "webfinger" | "schemaorg" | "security"), string>}