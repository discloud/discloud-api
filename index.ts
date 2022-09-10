import { DiscloudApp } from "./packages/api/app"
import { DiscloudUser } from "./packages/api/user"
import { DiscloudDir } from "./packages/api/dir"
import { BaseClass } from "./packages/base/class"

export class DiscloudAPI extends BaseClass {

    public app: DiscloudApp
    public user: DiscloudUser
    public dir: DiscloudDir

    constructor(token: string) {
        super(token);
        this.app = new DiscloudApp(this.token)
        this.user = new DiscloudUser(this.token)
        this.dir = new DiscloudDir(this.token)
    }
}