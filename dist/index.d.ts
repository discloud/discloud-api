import { DiscloudApp } from "./packages/api/app";
import { DiscloudUser } from "./packages/api/user";
import { DiscloudDir } from "./packages/api/dir";
export declare type Languages = "en" | "pt";
export declare class DiscloudAPI {
    private readonly token;
    private readonly lang;
    app: DiscloudApp;
    user: DiscloudUser;
    dir: DiscloudDir;
    constructor(token: string, options?: {
        lang?: Languages;
    });
}
