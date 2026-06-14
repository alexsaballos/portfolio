/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/client" />

import type { AdmittedLanguagesType, LocalesType } from "./types/LocalesType";

declare global {
    namespace App {
        interface Locals {
            t: LocalesType;             // Saves current language from /[lang]/
            l: AdmittedLanguagesType;   // Saves all translated text web-wide
        }
    }
    
    // Google Analytics interfaces - Window & Document
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }

    interface Document {
        readonly prerendering?: boolean;
    }
}