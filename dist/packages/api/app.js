"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudApp = exports.APP = void 0;
const error_1 = require("../functions/error");
const request_1 = require("../functions/request");
var APP;
(function (APP) {
    APP["Restart"] = "restart";
    APP["Start"] = "start";
    APP["Stop"] = "stop";
})(APP = exports.APP || (exports.APP = {}));
// UPDATE ALL INTERFACES
class DiscloudApp {
    token;
    lang;
    constructor(token, options) {
        this.token = token;
        this.lang = options?.lang ? options.lang : "en";
    }
    url = "https://api.discloud.app/v2";
    error = new error_1.Errors();
    /**
        * @description Get data of a app.
        * @param {string} app_id ID of App
        * @return {Promise<GetApp | void>}
    */
    async get(app_id, isAll = false) {
        if (!app_id && !isAll)
            return this.error.newError("NEED_PARAM", this.lang);
        const data = (await (0, request_1.request)('GET', `${this.url}/app/${isAll ? "all" : app_id}`, {
            headers: {
                "api-token": `${this.token}`
            }
        }));
        if (data == 401)
            return this.error.newError("UNAUTHORIZED", this.lang);
        //if (!data) return this.error.newError("NO_DATA", this.lang)
        return data;
    }
    /**
    * @description Get log of a app.
    * @param {string} app_id ID of App
    * @return {Promise<AppLogs | void>}
    */
    async logs(app_id, isAll = false) {
        if (!app_id && !isAll)
            return this.error.newError("NEED_PARAM", this.lang);
        const data = (await (0, request_1.request)('GET', `${this.url}/app/${isAll ? "all" : app_id}/logs`, {
            headers: {
                "api-token": `${this.token}`
            }
        }));
        if (data == 401)
            return this.error.newError("UNAUTHORIZED", this.lang);
        if (!data)
            return this.error.newError("NO_DATA", this.lang);
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
            return this.error.newError("NEED_PARAM", this.lang);
        const data = (await (0, request_1.request)('PUT', `${this.url}/${isMod ? 'team' : 'app'}/${isAll ? "all" : app_id}/${status}`, {
            headers: {
                "api-token": `${this.token}`
            }
        }, {})).data;
        if (data == 401)
            return this.error.newError("UNAUTHORIZED", this.lang);
        if (!data)
            return this.error.newError("NO_DATA", this.lang);
        return data;
    }
}
exports.DiscloudApp = DiscloudApp;
