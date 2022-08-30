import { Errors } from "../functions/error"
import { getFile } from "../functions/file"
import { request } from "../functions/request"

export interface CommitResponse {
    status: string
    statusCode: number
    message: string
}

export interface UserStatus {
    userID: string,
    plan: string
}

export interface ApiBackupResponse {
    status: string
    message: string
    backups: AppBackup | AppBackup[]
}

export interface AppBackup {
    id: string
    status: string
    url: string
}

export interface AppDeleteResponse {
    status: string
    message: string
    apps?: {
        removealled: string[]
        alreadyInProcess: string[]
        alreadyOffline: string[]
    }
}

//ADD COMMIT, DELETE AND BACKUP

export class DiscloudDir {

    private readonly token: string
    constructor(token: string) {
        this.token = token
    }

    private readonly error = new Errors()

    /**
     * @description Commit a App.
     * @param {String} app_id ID or SubDomain of App.
     * @param {String?} path Path of Zip File.
     * @return {Promise<CommitResponse | void>}
     */
    async commit(app_id: string, path: string): Promise<CommitResponse | void> {

        if (!path.endsWith('.zip')) return this.error.newError("The added file is invalid.")

        const file = getFile(path)
        if (!file) return this.error.newError("The added file is invalid.")

        const headers = file.getHeaders({
            "api-token": `${this.token}`
        })

        const data = (await request('PUT', `/app/${app_id}/commit`, {
            timeout: 300000,
            headers
        }, file))

        return data;
    }

    /**
     * @description Get backup of a app.
     * @param {string} app_id ID of App
     * @return {Promise<AppBackup | void>}
     */
    async backup(app_id?: string, isAll: boolean = false): Promise<ApiBackupResponse | void> {

        if (!app_id && !isAll) return this.error.newError("At least one of the parameters must be added to this method.",)

        const data = (await request('GET', `/app/${isAll ? "all" : app_id}/backup`, {
            headers: {
                "api-token": `${this.token}`
            }
        }))

        return data;
    }


    /**
     * @description Delete a app.
     * @param {string} app_id ID of App
     * @return {Promise<AppDeleteResponse | void>}
     */
    async delete(app_id?: string, isAll: boolean = false): Promise<AppDeleteResponse | void> {

        if (!app_id && !isAll) return this.error.newError("At least one of the parameters must be added to this method.",)

        const data = (await request('DELETE', `/app/${isAll ? "all" : app_id}/delete`, {
            headers: {
                "api-token": `${this.token}`
            }
        }))

        return data;
    }
}