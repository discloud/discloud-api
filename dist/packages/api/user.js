"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudUser = void 0;
const axios_1 = __importDefault(require("axios"));
const error_1 = require("../functions/error");
class DiscloudUser {
    token;
    lang;
    constructor(token, options) {
        this.token = token;
        this.lang = options?.lang ? options.lang : "en";
    }
    url = "https://api.discloud.app/v2";
    error = new error_1.Errors();
    /**
     * @description Get status of user.
     * @return {Promise<UserStatus | void>}
     */
    async status() {
        let data;
        try {
            data = (await axios_1.default.get(`${this.url}/user`, {
                headers: {
                    "api-token": `${this.token}`
                }
            })).data;
        }
        catch (err) {
            if (err.code == 401) {
                return this.error.newError("UNAUTHORIZED", this.lang);
            }
            return console.error(err);
        }
        if (!data)
            return this.error.newError("NO_DATA", this.lang);
        return data;
    }
}
exports.DiscloudUser = DiscloudUser;
