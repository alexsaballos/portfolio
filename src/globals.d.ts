/// <reference types="astro/client" />

import type { LocalesType } from "./types/LocalesType";

declare namespace App {
    interface locals {
        readonly t: LocalesType;
        readonly locale: string;
    }
}