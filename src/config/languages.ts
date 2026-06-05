import { FLAGS } from "@config/assets";
import { ROUTE } from "@config/routing";
import type { LanguagesType } from "@typing/LocalesType";

export const LANGUAGES = {
    de: {
        key: "de",
        home: ROUTE.home("de"),
        icon: "de",
        picture: FLAGS.de.picture,
        name: {
            standard: "German",
            localized: "Deutsch"
        },
        code: {
            lang: "de",
            langcountry: "de_DE"
        },
        text: {
            hello: "Hallo!",
            select: "Wählen Sie eine Sprache aus"
        }
    },
    en: {
        key: "en",
        home: ROUTE.home("en"),
        icon: "us",
        picture: FLAGS.us.picture,
        name: {
            standard: "English",
            localized: "English"
        },
        code: {
            lang: "en",
            langcountry: "en_US"
        },
        text: {
            hello: "Hello!",
            select: "Select a language"
        }
    },
    es: {
        key: "es",
        home: ROUTE.home("es"),
        icon: "mx",
        picture: FLAGS.mx.picture,
        name: {
            standard: "Spanish",
            localized: "Español"
        },
        code: {
            lang: "es",
            langcountry: "es_MX"
        },
        text: {
            hello: "¡Hola!",
            select: "Seleccione un idioma"
        }
    }
} as const satisfies LanguagesType;