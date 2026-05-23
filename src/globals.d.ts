/// <reference types="astro/client" />

import type { AdmittedLanguagesType, LocalesType } from "./types/LocalesType";

declare global {
    namespace App {
        interface Locals {
            t: LocalesType;             // Saves current language from /[lang]/
            l: AdmittedLanguagesType;   // Saves all translated text web-wide
        }
    }
}