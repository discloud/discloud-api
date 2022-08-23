import axios from "axios"
import { Errors } from "../functions/error"

export interface UserPlan {
    status: string,
    message: string,
    user: {
      userID: string,
      totalRamMb: number,
      ramUsedMb: number,
      apps: string[],
      plan: string
    }
}

export class DiscloudUser {

    private readonly token: string
    constructor(token: string) {
        this.token = token
    }

    private readonly error = new Errors()

    /**
     * @description Get status of user.
     * @return {Promise<UserStatus | void>}
     */
     public async status(): Promise<UserPlan | void> {

        let data;
        try {
            data = (await axios.get(`/user`, {
                headers: {
                    "api-token": `${this.token}`
                }
            })).data
        } catch (err: any) {
            if (err.code == 401) {
                    return this.error.newError("UNAUTHORIZED")
                }
                return console.error(err)
        }

        return data;
    }
}