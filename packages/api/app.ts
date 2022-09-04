import { Errors } from "../functions/error"
import { getFile } from "../functions/file"
import { requester } from "../functions/request"

export interface GetApp {
    status: string,
    message: string,
    apps: {
      id: string,
      online: boolean,
      ramKilled: boolean,
      ram: number,
      mainFile: string,
      lang: string,
      mods: Object[],
      autoDeployGit: string,
      autoRestart: boolean
    }
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

export interface RAM {
    ramMB: number
}

export interface AppLogs {
    status: string,
    message: string,
    apps: {
        id: string,
        terminal: {
            big: string,
            small: string
        }
    }
}

export interface GenericMessage {
    status: string,
    message: string
}

export enum APP {
    Restart = 'restart',
    Start = 'start',
    Stop = 'stop'
}

export class DiscloudApp {

    private readonly token: string
    constructor(token: string) {
        this.token = token
    }

    private readonly error = new Errors()

    /**
    * @description Get data of a app.
    * @param {string} app_id ID of App
    * @return {Promise<GetApp | void>}
    */
    async get(app_id?: string, isAll: boolean = false): Promise<GetApp | void> {

        if (!app_id && !isAll) return this.error.newError("At least one of the parameters must be added to this method.", )

        const data = (await requester(`/app/${isAll ? "all" : app_id}`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: "GET"
        }))

        return data;
    }

    /**
    * @description Get log of a app.
    * @param {string} app_id ID of App
    * @return {Promise<AppLogs | void>}
    */
    async logs(app_id?: string, isAll: boolean = false): Promise<AppLogs | void> {

        if (!app_id && !isAll) return this.error.newError("At least one of the parameters must be added to this method.", )

        const data = (await requester(`/app/${isAll ? "all" : app_id}/logs`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: "GET"
        }))

        return data;
    }

    /**
    * @description Change the APP Status.
    * @param {APP} status Type of Status.
    * @param {String?} app_id ID or SubDomain of App.
    * @param {Boolean?} isAll If is to update all or the @app_id app.
    * @param {Boolean?} isMod If is from Mod Team.
    * @return {Promise<GenericMessage | void>}
    */
    async changeStatus(status: APP, app_id?: string, isAll: boolean = false, isMod: boolean = false): Promise<GenericMessage | void> {

        if (!app_id && !isAll) return this.error.newError("At least one of the parameters must be added to this method.")

        const data = await requester(`/${isMod ? 'team' : 'app'}/${isAll ? "all" : app_id}/${status}`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: "PUT"
        })

        return data;
    }

    /**
    * @description Put a new ram value on App.
    * @param {String} app_id ID or SubDomain of App.
    * @param {Number} ram Qunatity of Ram.
    * @return {Promise<GenericMessage | void>}
    */
     async ram(app_id: string, ram: number): Promise<GenericMessage | void> {

        if (!app_id) return this.error.newError("ID of App is Missing.")

        const data = (await requester(`/app/${app_id}/ram`, {
            headers: {
                "api-token": `${this.token}`,
            },
            method: "PUT",
            body: `{ "ramMB": ${ram} }`
        }))

        return data;
    }

    /**
    * @description Upload a App.
    * @param {String} path Path of Zip File.
    * @return {Promise<GenericMessage | void>}
    */
     async upload(path: string): Promise<GenericMessage | void> {

        if (!path.endsWith('.zip')) return this.error.newError("The added file is invalid.")

        const file = getFile(path)
        if (!file) return this.error.newError("The added file is invalid.")

        const data = await requester(`/upload`, {
            headersTimeout: 300000,
            bodyTimeout: 300000,
            headers: {
                "api-token": `${this.token}`
            },
            method: "POST",
            body: file
        })

        return data;
    }

    /**
     * @description Delete an app.
     * @param {string} app_id ID of App.
     * @return {Promise<AppDeleteResponse | void>}
     */
    async delete(app_id?: string, isAll: boolean = false): Promise<AppDeleteResponse | void> {

        if (!app_id && !isAll) return this.error.newError("At least one of the parameters must be added to this method.",)

        const data = await requester(`/app/${isAll ? "all" : app_id}/delete`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'DELETE'
        })

        return data;
    }
}