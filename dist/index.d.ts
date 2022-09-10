import { DiscloudApp } from "./packages/api/app";
import { DiscloudUser } from "./packages/api/user";
import { DiscloudDir } from "./packages/api/dir";
import { BaseClass } from "./packages/base/class";
export declare class DiscloudAPI extends BaseClass {
    app: DiscloudApp;
    user: DiscloudUser;
    dir: DiscloudDir;
    constructor(token: string);
}
