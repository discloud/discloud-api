export interface CommitResponse {
    status: string;
    statusCode: number;
    message: string;
}
export interface UserStatus {
    userID: string;
    plan: string;
}
export interface ApiBackupResponse {
    status: string;
    message: string;
    backups: AppBackup | AppBackup[];
}
export interface AppBackup {
    id: string;
    status: string;
    url: string;
}
export declare class DiscloudDir {
    private readonly token;
    constructor(token: string);
    private readonly error;
    /**
     * @description Commit a App.
     * @param {String} app_id ID or SubDomain of App.
     * @param {String} path Path of Zip File.
     * @return {Promise<CommitResponse | void>}
     */
    commit(app_id: string, path: string): Promise<CommitResponse | void>;
    /**
     * @description Get backup of a app.
     * @param {string} app_id ID of App
     * @return {Promise<AppBackup | void>}
     */
    backup(app_id?: string, isAll?: boolean): Promise<ApiBackupResponse | void>;
}
