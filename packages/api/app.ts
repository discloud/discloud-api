import axios from "axios"
import { Languages } from "../.."
import { Errors } from "../functions/error"
import { request } from "../functions/request"

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

//ADD UPLOAD, RAM

export class DiscloudApp {

    private readonly token: string
    private readonly lang: Languages
    constructor(token: string, options?: { lang?: Languages }) {
        this.token = token
        this.lang = options?.lang ? options.lang : "en"
    }

    private readonly error = new Errors()

    /**
    * @description Get data of a app.
    * @param {string} app_id ID of App
    * @return {Promise<GetApp | void>}
    */
    async get(app_id?: string, isAll: boolean = false): Promise<GetApp | void> {

        if (!app_id && !isAll) return this.error.newError("NEED_PARAM", this.lang)

        const data = (await request('GET', `/app/${isAll ? "all" : app_id}`, {
            headers: {
                "api-token": `${this.token}`
            }
        }))

        if (data == 401) return this.error.newError("UNAUTHORIZED", this.lang)
        if (!data) return this.error.newError("NO_DATA", this.lang)

        return data;
    }

    /**
    * @description Get log of a app.
    * @param {string} app_id ID of App
    * @return {Promise<AppLogs | void>}
    */
    async logs(app_id?: string, isAll: boolean = false): Promise<AppLogs | void> {

        if (!app_id && !isAll) return this.error.newError("NEED_PARAM", this.lang)

        const data = (await request('GET', `/app/${isAll ? "all" : app_id}/logs`, {
            headers: {
                "api-token": `${this.token}`
            }
        }))

        if (data == 401) return this.error.newError("UNAUTHORIZED", this.lang)
        if (!data) return this.error.newError("NO_DATA", this.lang)

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

        if (!app_id && !isAll) return this.error.newError("NEED_PARAM", this.lang)

        const data = (await request('PUT', `/${isMod ? 'team' : 'app'}/${isAll ? "all" : app_id}/${status}`, {
            headers: {
                "api-token": `${this.token}`
            }
        }, {})).data

        if (data == 401) return this.error.newError("UNAUTHORIZED", this.lang)
        if (!data) return this.error.newError("NO_DATA", this.lang)

        return data;
    }
}