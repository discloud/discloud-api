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
    constructor(token: string);
    private readonly error;
    /**
     * @description Get status of user.
     * @return {Promise<UserStatus | void>}
     */
    status(): Promise<UserPlan | void>;
}
