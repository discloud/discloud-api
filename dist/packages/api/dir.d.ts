export interface UserStatus {
    userID: string;
    plan: string;
}
export declare class DiscloudDir {
    private readonly token;
    constructor(token: string);
    private readonly error;
}
