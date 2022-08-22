import axios from "axios"
import { Languages } from "../../discloud-api"
import { Errors } from "../functions/error"

export interface UserStatus {
    userID: string,
    plan: string
}

//ADD COMMIT, DELETE AND BACKUP

export class DiscloudDir {

    private readonly token: string
    private readonly lang: Languages
    constructor(token: string, options?: { lang?: Languages }) {
        this.token = token
        this.lang = options?.lang ? options.lang : "en"
    }

    private url = "https://api.discloud.app/v2"
    private readonly error = new Errors()
}