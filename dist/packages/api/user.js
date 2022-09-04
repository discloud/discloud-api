"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudUser = void 0;
const error_1 = require("../functions/error");
const request_1 = require("../functions/request");
class DiscloudUser {
    token;
    constructor(token) {
        this.token = token;
    }
    error = new error_1.Errors();
    /**
     * @description Get information about an user.
     * @return {Promise<User | void>}
     */
    async info() {
        const data = await (0, request_1.requester)(`/user`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'GET'
        });
        return data;
    }
    /**
     * @description Change API language return.
     * @param {Locales} lang language.
     * @return {Promise<Locale | void>}
     */
    async locale(lang) {
        const data = await (0, request_1.requester)(`/locale/${lang}`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'PUT'
        });
        return data;
    }
}
exports.DiscloudUser = DiscloudUser;
