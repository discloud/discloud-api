import { BaseClass } from "../base/class";
export interface GetApp {
    status: string;
    message: string;
    apps: Apps | Apps[];
}
export interface Apps {
    id: string;
    online: boolean;
    ramKilled: boolean;
    ram: number;
    mainFile: string;
    lang: string;
    mods: Object[];
    autoDeployGit: string;
    autoRestart: boolean;
}
export interface AppDeleteResponse {
    status: string;
    message: string;
    apps?: {
        removealled: string[];
        alreadyInProcess: string[];
        alreadyOffline: string[];
    };
}
export interface RAM {
    ramMB: number;
}
export interface AppLogs {
    status: string;
    message: string;
    apps: {
        id: string;
        terminal: {
            big: string;
            small: string;
        };
    };
}
export interface GenericMessage {
    status: string;
    message: string;
}
export declare enum APP {
    Restart = "restart",
    Start = "start",
    Stop = "stop"
}
export declare class DiscloudApp extends BaseClass {
    /**
    * @description Get data of a app.
    * @param {string} app_id ID of App
    * @return {Promise<GetApp | void>}
    */
    get(app_id?: string, isAll?: boolean): Promise<GetApp | void>;
    /**
    * @description Get log of a app.
    * @param {string} app_id ID of App
    * @return {Promise<AppLogs | void>}
    */
    logs(app_id?: string, isAll?: boolean): Promise<AppLogs | void>;
    /**
    * @description Change the APP Status.
    * @param {APP} status Type of Status.
    * @param {String?} app_id ID or SubDomain of App.
    * @param {Boolean?} isAll If is to update all or the @app_id app.
    * @param {Boolean?} isMod If is from Mod Team.
    * @return {Promise<GenericMessage | void>}
    */
    changeStatus(status: APP, app_id?: string, isAll?: boolean, isMod?: boolean): Promise<GenericMessage | void>;
    /**
    * @description Put a new ram value on App.
    * @param {String} app_id ID or SubDomain of App.
    * @param {Number} ram Quantity of Ram.
    * @return {Promise<GenericMessage | void>}
    */
    ram(app_id: string, ram: number): Promise<GenericMessage | void>;
    /**
    * @description Upload a App.
    * @param {String} path Path of Zip File.
    * @return {Promise<GenericMessage | void>}
    */
    upload(path: string): Promise<GenericMessage | void>;
    /**
     * @description Delete an app.
     * @param {string} app_id ID of App.
     * @return {Promise<AppDeleteResponse | void>}
     */
    delete(app_id?: string, isAll?: boolean): Promise<AppDeleteResponse | void>;
}
