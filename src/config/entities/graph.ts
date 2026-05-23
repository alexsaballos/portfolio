import { SCHEMAORG_PERSON } from "./person";
import { SCHEMAORG_WEBSITE } from "./website";
import { SCHEMAORG_SIDIMAQSA } from "./sidimaqsa";

export const SCHEMAORG_GRAPH: string = JSON.stringify({
	"@context": "https://schema.org",
	"@graph": [
		SCHEMAORG_PERSON,
		SCHEMAORG_WEBSITE,
		SCHEMAORG_SIDIMAQSA
	]
});