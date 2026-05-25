import { PERSONAL } from "@config/personal";
import { LANGUAGES } from "@config/languages";
import { SYSTEM, LINKS } from "@config/links";

// Person Entity - Alexander Saballos - Schema.org Structured Data Identity Linking
export const SCHEMAORG_PERSON = {
    "@context": "https://schema.org",
    "@type": "Person",
	"@id": `${SYSTEM.domain}#person`,
    "name": PERSONAL.name,
	"gender": "https://schema.org/Male",
    "url": SYSTEM.domain,
    "image": SYSTEM.pfp,
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
      "name": "Harding University",
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
	"hasCredential": [
		{
			"@type": "EducationalOccupationalCredential",
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
			"@type": "EducationalOccupationalCredential",
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
			"@type": "EducationalOccupationalCredential",
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
			"@type": "EducationalOccupationalCredential",
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
			"@type": "EducationalOccupationalCredential",
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
		{
			"@type": "Award",
			"name": "Walton International Scholarship Program (WISP)",
			"description": "Full academic scholarship awarded to outstanding Central American students based on academic excellence and leadership potential.",
			"url": LINKS.organizations.wisp,
			"provider": {
				"@type": "Organization",
				"name": "Walton Family Foundation"
			}
		},
		{
			"@type": "Award",
			"name": "NCEES Honor Graduate - FE Exam (Electrical & Computer)",
			"description": "Passed the Fundamentals of Engineering exam prior to graduation.",
			"url": LINKS.organizations.ncees,
			"provider": {
				"@type": "Organization",
				"name": "National Council of Examiners for Engineering and Surveying (NCEES)"
			}
		},
		{
			"@type": "Award",
			"name": "Cum Laude Graduate - BSc. Electrical Engineering",
			"url": LINKS.organizations.hu.main,
			"provider": {
				"@type": "CollegeOrUniversity",
				"name": "Harding University"
			}
		},
		{
			"@type": "Award",
			"name": "Distinguished Scholar - Harding University American Studies Institute",
			"url": LINKS.organizations.hu.asi,
			"provider": {
				"@type": "CollegeOrUniversity",
				"name": "Harding University American Studies Institute"
			}
		},
		{
			"@type": "Award",
			"name": "Honor Student - Harding University Honors College",
			"url": LINKS.organizations.hu.honors,
			"provider": {
				"@type": "CollegeOrUniversity",
				"name": "Harding University Honors College"
			}
		},
		{
			"@type": "Award",
			"name": "Dean's List - Harding University Provost",
			"url": LINKS.profiles.merit,
			"provider": {
				"@type": "CollegeOrUniversity",
				"name": "Harding University Office of the Provost"
			}
		},
		{
			"@type": "Award",
			"name": "High School Valedictorian",
			"description": "Graduated as class valedictorian at 16 years old.",
			"provider": {
				"@type": "EducationalOrganization",
				"name": "Fe y Alegria Nicaragua"
			}
		}
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
	  "availableLanguage": Object.values(LANGUAGES).map(lang => ({
			"@type": "Language",
			"name": lang.name.standard,
			"alternateName": lang.code.lang
		})),
      "url": `${SYSTEM.domain}/contact/`
    },
    "sameAs": Object.values(LINKS.profiles)
} as const;