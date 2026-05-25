import { SCHEMAORG_PERSON } from "@config/entities/person";
import { SCHEMAORG_WEBSITE } from "@config/entities/website";
import { SCHEMAORG_SIDIMAQSA } from "@config/entities/sidimaqsa";

export const SCHEMAORG_GRAPH: string = JSON.stringify({
	"@context": "https://schema.org",
	"@graph": [
		SCHEMAORG_PERSON,
		SCHEMAORG_WEBSITE,
		SCHEMAORG_SIDIMAQSA
	]
});