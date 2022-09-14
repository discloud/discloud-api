"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudUser = void 0;
const class_1 = require("../base/class");
const request_1 = require("../functions/request");
class DiscloudUser extends class_1.BaseClass {
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
    /**
     * @description See your team users.
     * @return {Promise<any | void>}
     */
    async team() {
        const data = await (0, request_1.requester)(`/team`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'GET'
        });
        return data;
    }
}
exports.DiscloudUser = DiscloudUser;
