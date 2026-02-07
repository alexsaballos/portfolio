import { FLAGS } from "./assets";
import { ROUTE } from "./routing";
import type { LanguagesType } from "../types/LocalesType";

export const LANGUAGES: LanguagesType = {
    de: {
        home: ROUTE.home("de"),
        icon: FLAGS.de.icon,
        picture: FLAGS.de.picture,
        name: "Deutsch",
        code: {
            lang: "de",
            langcountry: "de-de"
        },
        text: {
            hello: "Hallo!",
            select: "Wählen Sie eine Sprache aus"
        }
    },
    en: {
        home: ROUTE.home("en"),
        icon: FLAGS.us.icon,
        picture: FLAGS.us.picture,
        name: "English",
        code: {
            lang: "en",
            langcountry: "en-us"
        },
        text: {
            hello: "Hello!",
            select: "Select a language"
        }
    },
    es: {
        home: ROUTE.home("es"),
        icon: FLAGS.mx.icon,
        picture: FLAGS.mx.picture,
        name: "Español",
        code: {
            lang: "es",
            langcountry: "es-mx"
        },
        text: {
            hello: "¡Hola!",
            select: "Seleccione un idioma"
        }
    }
} as const;