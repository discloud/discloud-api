import { Languages } from "../../discloud-api";
export interface UserStatus {
    userID: string;
    plan: string;
}
export declare class DiscloudDir {
    private readonly token;
    private readonly lang;
    constructor(token: string, options?: {
        lang?: Languages;
    });
    private url;
    private readonly error;
}
