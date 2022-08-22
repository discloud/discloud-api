import { Languages } from "../../discloud-api";
export interface UserPlan {
    status: string;
    message: string;
    user: {
        userID: string;
        totalRamMb: number;
        ramUsedMb: number;
        apps: string[];
        plan: string;
    };
}
export declare class DiscloudUser {
    private readonly token;
    private readonly lang;
    constructor(token: string, options?: {
        lang?: Languages;
    });
    private url;
    private readonly error;
    /**
     * @description Get status of user.
     * @return {Promise<UserStatus | void>}
     */
    status(): Promise<UserPlan | void>;
}
