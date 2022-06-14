declare type ErrorType = "NO_DATA" | "BOT_ID";
declare type Languages = "en" | "pt";
export declare class Errors {
    newError(name: ErrorType, lang: Languages): void;
}
export {};
