import { Errors } from "./packages/functions/error"
import { DiscloudApp } from "./packages/api/app"
import { DiscloudUser } from "./packages/api/user"
import { DiscloudDir } from "./packages/api/dir"

export type Languages = "en" | "pt"

export class DiscloudAPI {

    private readonly token: string
    public app: DiscloudApp
    public user: DiscloudUser
    public dir: DiscloudDir
    constructor(token: string) {
        this.token = token
        this.app = new DiscloudApp(this.token)
        this.user = new DiscloudUser(this.token)
        this.dir = new DiscloudDir(this.token)
    }
}