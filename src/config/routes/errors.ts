import { PERSONAL } from "@config/personal";
import type { ErrorsListType } from "@src/types/routes/ErrorsType";

export const ERRORS = {
    400: {
        code: 400,
        title: `(Error 400) Bad Request | ${PERSONAL.name}`,
        name: "Bad Request",
        description: "The request could not be understood or was missing required parameters."
    },
    401: {
        code: 401,
        title: `(Error 401) Unauthorized | ${PERSONAL.name}`,
        name: "Unauthorized",
        description: "Authentication is required to access this resource."
    },
    403: {
        code: 403,
        title: `(Error 403) Forbidden | ${PERSONAL.name}`,
        name: "Forbidden",
        description: "You do not have permission to access this resource."
    },
    404: {
        code: 404,
        title: `(Error 404) Page Not Found | ${PERSONAL.name}`,
        name: "Page Not Found",
        description: "The requested page could not be found."
    },
    410: {
        code: 410,
        title: `(Error 410) Gone | ${PERSONAL.name}`,
        name: "Gone",
        description: "The requested resource has been permanently removed."
    },
    429: {
        code: 429,
        title: `(Error 429) Too Many Requests | ${PERSONAL.name}`,
        name: "Too Many Requests",
        description: "Too many requests were sent in a short period of time."
    },
    500: {
        code: 500,
        title: `(Error 500) Internal Server Error | ${PERSONAL.name}`,
        name: "Internal Server Error",
        description: "The server encountered an unexpected error."
    },
    502: {
        code: 502,
        title: `(Error 502) Bad Gateway | ${PERSONAL.name}`,
        name: "Bad Gateway",
        description: "The server received an invalid response from an upstream server."
    },
    503: {
        code: 503,
        title: `(Error 503) Service Unavailable | ${PERSONAL.name}`,
        name: "Service Unavailable",
        description: "Service temporarily unavailable. Try again later."
    },
    504: {
        code: 504,
        title: `(Error 504) Gateway Timeout | ${PERSONAL.name}`,
        name: "Gateway Timeout",
        description: "The server did not receive a timely response from an upstream server."
    }
} as const satisfies ErrorsListType;