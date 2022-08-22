import { Languages } from "../../discloud-api";
export interface GetApp {
    app_id: string;
    info: string;
    container: string;
    cpu: string;
    memory: string;
    last_restart: string;
}
export interface AppLogs {
    app_id: string;
    link: string;
    logs: string | string[] | null;
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
export declare class DiscloudApp {
    private readonly token;
    private readonly lang;
    constructor(token: string, options?: {
        lang?: Languages;
    });
    private url;
    private readonly error;
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
}
