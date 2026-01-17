import { ROUTE } from "../routing";
import type { AdmittedLanguagesType } from "../../types/LocalesType";

export function withLink
<T extends Record<string, { slug: string }>>(pages: T, locale: AdmittedLanguagesType) {
    return Object.entries(pages).map(([key, page]) => ({
        key: key as keyof T,
        ...page,
        link: ROUTE.page(locale, page.slug)
    }));
}