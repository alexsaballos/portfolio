/// <reference types="astro/client" />

import type { Translations } from "./types/locales";

declare namespace App {
    interface Locals {
        readonly t: Translations;
        readonly locale: string;
    }
}