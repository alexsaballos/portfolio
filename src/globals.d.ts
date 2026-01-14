/// <reference types="astro/client" />

import type { LocalesType } from "./types/LocalesType";

declare namespace App {
    interface Locals {
        readonly t: LocalesType;
        readonly locale: string;
    }
}