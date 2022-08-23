import { Errors } from "../functions/error"

export interface UserStatus {
    userID: string,
    plan: string
}

//ADD COMMIT, DELETE AND BACKUP

export class DiscloudDir {

    private readonly token: string
    constructor(token: string) {
        this.token = token
    }

    private readonly error = new Errors()
}