import type { LanguagesType } from "../types/LocalesType";
import { ASSETS } from "./assets";
import { getHomeLink } from "./pages";

export const LANGUAGES: LanguagesType = {
    de: {
        home: getHomeLink("de"),
        flag: ASSETS.flags.de,
        alt: "de-de",
        name: "Deutsche",
        code: "de",
        hello: "Hallo!"
    },
    en: {
        home: getHomeLink("en"),
        flag: ASSETS.flags.us,
        alt: "en-us",
        name: "English",
        code: "en",
        hello: "Hello!"
    },
    es: {
        home: getHomeLink("es"),
        flag: ASSETS.flags.mx,
        alt: "es-mx",
        name: "Español",
        code: "es",
        hello: "¡Hola!"
    }
}