"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudApp = exports.APP = void 0;
const error_1 = require("../functions/error");
const file_1 = require("../functions/file");
const request_1 = require("../functions/request");
var APP;
(function (APP) {
    APP["Restart"] = "restart";
    APP["Start"] = "start";
    APP["Stop"] = "stop";
})(APP = exports.APP || (exports.APP = {}));
class DiscloudApp {
    token;
    constructor(token) {
        this.token = token;
    }
    error = new error_1.Errors();
    /**
    * @description Get data of a app.
    * @param {string} app_id ID of App
    * @return {Promise<GetApp | void>}
    */
    async get(app_id, isAll = false) {
        if (!app_id && !isAll)
            return this.error.newError("At least one of the parameters must be added to this method.");
        const data = (await (0, request_1.requester)(`/app/${isAll ? "all" : app_id}`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: "GET"
        }));
        return data;
    }
    /**
    * @description Get log of a app.
    * @param {string} app_id ID of App
    * @return {Promise<AppLogs | void>}
    */
    async logs(app_id, isAll = false) {
        if (!app_id && !isAll)
            return this.error.newError("At least one of the parameters must be added to this method.");
        const data = (await (0, request_1.requester)(`/app/${isAll ? "all" : app_id}/logs`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: "GET"
        }));
        return data;
    }
    /**
    * @description Change the APP Status.
    * @param {APP} status Type of Status.
    * @param {String?} app_id ID or SubDomain of App.
    * @param {Boolean?} isAll If is to update all or the @app_id app.
    * @param {Boolean?} isMod If is from Mod Team.
    * @return {Promise<GenericMessage | void>}
    */
    async changeStatus(status, app_id, isAll = false, isMod = false) {
        if (!app_id && !isAll)
            return this.error.newError("At least one of the parameters must be added to this method.");
        const data = await (0, request_1.requester)(`/${isMod ? 'team' : 'app'}/${isAll ? "all" : app_id}/${status}`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: "PUT"
        });
        return data;
    }
    /**
    * @description Put a new ram value on App.
    * @param {String} app_id ID or SubDomain of App.
    * @param {Number} ram Qunatity of Ram.
    * @return {Promise<GenericMessage | void>}
    */
    async ram(app_id, ram) {
        if (!app_id)
            return this.error.newError("ID of App is Missing.");
        const data = (await (0, request_1.requester)(`/app/${app_id}/ram`, {
            headers: {
                "api-token": `${this.token}`,
            },
            method: "PUT",
            body: `{ "ramMB": ${ram} }`
        }));
        return data;
    }
    /**
    * @description Upload a App.
    * @param {String} path Path of Zip File.
    * @return {Promise<GenericMessage | void>}
    */
    async upload(path) {
        if (!path.endsWith('.zip'))
            return this.error.newError("The added file is invalid.");
        const file = (0, file_1.getFile)(path);
        if (!file)
            return this.error.newError("The added file is invalid.");
        const data = await (0, request_1.requester)(`/upload`, {
            headersTimeout: 300000,
            bodyTimeout: 300000,
            headers: {
                "api-token": `${this.token}`
            },
            method: "POST",
            body: file
        });
        return data;
    }
    /**
     * @description Delete an app.
     * @param {string} app_id ID of App.
     * @return {Promise<AppDeleteResponse | void>}
     */
    async delete(app_id, isAll = false) {
        if (!app_id && !isAll)
            return this.error.newError("At least one of the parameters must be added to this method.");
        const data = await (0, request_1.requester)(`/app/${isAll ? "all" : app_id}/delete`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'DELETE'
        });
        return data;
    }
}
exports.DiscloudApp = DiscloudApp;
