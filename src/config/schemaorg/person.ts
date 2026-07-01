import { PERSONAL } from "@config/personal";
import { LANGUAGES } from "@config/languages";
import { SYSTEM, LINKS } from "@config/routes/links";

// Person Entity - Alexander Saballos - Schema.org Structured Data Identity Linking
export const SCHEMAORG_PERSON = {
    "@type": "Person",
	"@id": `${SYSTEM.domain}#person`,
    "name": PERSONAL.name,
	"gender": "https://schema.org/Male",
	"height": "1.85 m",
	"pronouns": "he/him",
    "url": SYSTEM.domain,
	"email": `mailto:${PERSONAL.emails.schemaorg}`,
    "image": SYSTEM.notable.external.pfp,
	"mainEntityOfPage": {
		"@id": `${SYSTEM.domain}#website`
	},
	"nationality": {
		"@type": "Country",
  		"name": "Nicaragua"
	},
	"memberOf": {
		"@type": "Organization",
		"name": "IEEE Harding University Student Branch",
		"parentOrganization": {
			"@type": "Organization",
			"name": "IEEE"
		}
	},
    "jobTitle": [
		"Electrical Engineer", "Software Engineer"
	],
	"description": "Electrical and software engineer focused on industrial automation, embedded systems, enterprise infrastructure, and scalable engineering systems.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": PERSONAL.college,
	  "url": LINKS.organizations.hu.main
    },
	"worksFor": {
		"@id": `${LINKS.organizations.sidimaqsa}#organization`,
		"@type": "Organization",
		"name": "SIDIMAQSA",
		"url": LINKS.organizations.sidimaqsa
	},
	"identifier": [
		{
			"@type": "PropertyValue",
			"propertyID": "EI License Number",
			"value": "9869"
		}
	],
	"hasCertification": [
		{
			"@type": ["Certification", "EducationalOccupationalCredential"],
			"credentialCategory": "license",
			"name": "Engineer in Training (EiT/EI)",
    		"validFrom": "2025-05-22",
			"url": LINKS.certifications.credly.award,
			"recognizedBy": {
				"@type": "Organization",
				"name": "Arkansas State Board Of Licensure for Professional Engineers and Professional Surveyors",
				"url": LINKS.organizations.arpels
			}
		},
		{
			"@type": ["Certification", "EducationalOccupationalCredential"],
			"credentialCategory": "license",
			"name": "Basic Life Support (CPR & AED) Program",
    		"validFrom": "2024-08-13",
			"url": LINKS.certifications.aha.award,
			"description": "Completed as part of Resident Assistant & Monitor positions at Harding University",
			"recognizedBy": {
				"@type": "Organization",
				"name": "American Heart Association",
				"url": LINKS.certifications.aha.main
			}
		},
		{
			"@type": ["Certification", "EducationalOccupationalCredential"],
			"credentialCategory": "degree",
			"name": "Bachelor of Science in Electrical Engineering",
    		"validFrom": "2025-05-10",
			"description": "Cum Laude Honors Distinction Graduate from Harding University",
			"url": LINKS.certifications.parchment,
			"recognizedBy": {
				"@type": "CollegeOrUniversity",
				"name": "Harding University",
				"url": LINKS.organizations.hu.main
			}
		},
		{
			"@type": ["Certification", "EducationalOccupationalCredential"],
			"credentialCategory": "certificate",
			"name": "CS50",
    		"validFrom": "2020-06-10",
			"description": "Completed with Honors",
			"url": LINKS.certifications.cs50.award,
			"recognizedBy": {
				"@type": "CollegeOrUniversity",
				"name": "Harvard University",
				"url": LINKS.certifications.cs50.main
			}
		},
		{
			"@type": ["Certification", "EducationalOccupationalCredential"],
			"credentialCategory": "certificate",
			"name": "Solving Problems with Software (Java)",
    		"validFrom": "2020-10-24",
			"url": LINKS.certifications.coursera.award,
			"description": "Completed with Honors",
			"recognizedBy": {
				"@type": "CollegeOrUniversity",
				"name": "Duke University",
				"url": LINKS.certifications.coursera.main
			}
		}
	],
	"award": [
		"Walton International Scholarship Program (WISP)",
		"NCEES Honor Graduate - FE Exam (Electrical & Computer)",
		"Cum Laude Graduate - BSc. Electrical Engineering",
		"Distinguished Scholar - Harding University American Studies Institute",
		"Honor Student - Harding University Honors College",
		"Dean's List - Harding University Provost",
		"High School Valedictorian at 16 Years Old"
	],
    "knowsLanguage": Object.values(LANGUAGES).map(lang => ({
		"@type": "Language",
		"name": lang.name.standard,
		"alternateName": lang.code.lang
	})),
    "knowsAbout": [
		"Embedded Systems",
		"PCB Design",
		"Industrial Automation",
		"CNC Systems",
		"Electrical Engineering",
		"Software Engineering",
		"Microcontrollers",
		"Industrial Infrastructure",
		"Enterprise Software Systems"
	],
    "contactPoint": {
		"@type": "ContactPoint",
		"contactType": "professional inquiries",
		"email": `mailto:${PERSONAL.emails.schemaorg}`,
		"availableLanguage": Object.values(LANGUAGES).map(lang => ({
				"@type": "Language",
				"name": lang.name.standard,
				"alternateName": lang.code.lang
			})),
		"url": `${SYSTEM.domain}/contact/`
    },
    "sameAs": Object.values(LINKS.profiles),
	"brand": {
		"@type": "Brand",
		"@id": `${SYSTEM.domain}#personal-brand`,
		"name": PERSONAL.name,
		"owner": {
			"@id": `${SYSTEM.domain}#person`
		},
		"logo": SYSTEM.notable.external.logo
	}
} as const;