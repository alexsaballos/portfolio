export type ErrorsCodeType = 400 | 401 | 403 | 404 | 410 | 429 | 500 | 502 | 503 | 504;
export type ErrorsListType = Record<ErrorsCodeType, {
    code: number;
    title: string;
    name: string;
    description: string;
}>;