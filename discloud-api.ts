import { Errors } from "./packages/functions/error"
import { DiscloudApp } from "./packages/api/app"
import { DiscloudUser } from "./packages/api/user"
import { DiscloudDir } from "./packages/api/dir"

export type Languages = "en" | "pt"

export class DiscloudAPI {

    private readonly token: string
    private readonly lang: Languages
    public app: DiscloudApp
    public user: DiscloudUser
    public dir: DiscloudDir
    constructor(token: string, options?: { lang?: Languages }) {
        this.token = token
        this.lang = options?.lang ? options.lang : "en"
        this.app = new DiscloudApp(this.token, { lang: this.lang })
        this.user = new DiscloudUser(this.token, { lang: this.lang })
        this.dir = new DiscloudDir(this.token, { lang: this.lang })
    }
}