import { DiscloudApp } from "./packages/api/app";
import { DiscloudUser } from "./packages/api/user";
import { DiscloudDir } from "./packages/api/dir";
export declare class DiscloudAPI {
    private readonly token;
    app: DiscloudApp;
    user: DiscloudUser;
    dir: DiscloudDir;
    constructor(token: string);
}
