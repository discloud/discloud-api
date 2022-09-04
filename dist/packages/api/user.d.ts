export interface User {
    status: string;
    message: string;
    user: {
        userID: string;
        totalRamMb: number;
        ramUsedMb: number;
        subdomains: string[];
        customdomains: string[];
        apps: string[];
        plan: string;
        locale: Locales;
        lastDataLeft: {
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
        };
        planDataEnd: string;
    };
}
export interface Locale {
    status: string;
    locale: Locales;
}
export declare type Locales = "pt-BR" | "en-US";
export declare class DiscloudUser {
    private readonly token;
    constructor(token: string);
    private readonly error;
    /**
     * @description Get information about an user.
     * @return {Promise<User | void>}
     */
    info(): Promise<User | void>;
    /**
     * @description Change API language return.
     * @param {Locales} lang language.
     * @return {Promise<Locale | void>}
     */
    locale(lang: Locales): Promise<Locale | void>;
}
