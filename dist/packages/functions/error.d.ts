declare type ErrorType = "NO_DATA" | "APP_ID" | "UNAUTHORIZED" | "NEED_PARAM" | "INVALID_FILE";
declare type Languages = "en" | "pt";
export declare class Errors {
    newError(name: ErrorType, lang: Languages): void;
}
export {};
