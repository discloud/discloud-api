declare type ErrorType = "NO_DATA" | "BOT_ID" | "UNAUTHORIZED" | "NOT_UPDATED" | "INVALID_FILE";
declare type Languages = "en" | "pt";
export declare class Errors {
    newError(name: ErrorType, lang: Languages): void;
}
export {};
