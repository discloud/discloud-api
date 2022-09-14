import { BaseClass } from "../base/class"
import { getFile } from "../functions/file"
import { requester } from "../functions/request"

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



//REMAKE COMMIT, BACKUP

export class DiscloudDir extends BaseClass {

    /**
     * @description Commit a App.
     * @param {String} app_id ID or SubDomain of App.
     * @param {String} path Path of Zip File.
     * @return {Promise<CommitResponse | void>}
     */
    async commit(app_id: string, path: string): Promise<CommitResponse | void> {

        if (!path.endsWith('.zip')) return this.error.newError("The added file is invalid.")

        const file = await getFile(path)
        if (!file) return this.error.newError("The added file is invalid.")

        const data = await requester(`/app/${app_id}/commit`, {
            headersTimeout: 300000,
            bodyTimeout: 300000,
            headers: {
                "api-token": `${this.token}`
            },
            method: 'PUT',
            body: file
        })

        return data;
    }

    /**
     * @description Get backup of a app.
     * @param {string} app_id ID of App
     * @return {Promise<AppBackup | void>}
     */
    async backup(app_id?: string, isAll: boolean = false): Promise<ApiBackupResponse | void> {

        if (!app_id && !isAll) return this.error.newError("At least one of the parameters must be added to this method.",)

        const data = (await requester(`/app/${isAll ? "all" : app_id}/backup`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'GET'
        }))

        return data;
    }
}