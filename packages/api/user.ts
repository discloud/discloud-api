import { Errors } from "../functions/error"
import { requester } from "../functions/request"

export interface User {
    status: string,
    message: string,
    user: {
      userID: string,
      totalRamMb: number,
      ramUsedMb: number,
      subdomains: string[],
      customdomains: string[],
      apps: string[],
      plan: string,
      locale: Locales,
      lastDataLeft: { days: number, hours: number, minutes: number, seconds: number },
      planDataEnd: string
    }
}

export interface Locale { status: string, locale: Locales }
export type Locales = "pt-BR" | "en-US"

export class DiscloudUser {

    private readonly token: string
    constructor(token: string) {
        this.token = token
    }

    private readonly error = new Errors()

    /**
     * @description Get information about an user.
     * @return {Promise<User | void>}
     */
     public async info(): Promise<User | void> {

        const data = await requester(`/user`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'GET'
        })

        return data;
    }

    /**
     * @description Change API language return.
     * @param {Locales} lang language.
     * @return {Promise<Locale | void>}
     */
     public async locale(lang: Locales): Promise<Locale | void> {

        const data = await requester(`/locale/${lang}`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'PUT'
        })

        return data;
    }
}