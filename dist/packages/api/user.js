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
    constructor(token) {
        this.token = token;
    }
    error = new error_1.Errors();
    /**
     * @description Get status of user.
     * @return {Promise<UserStatus | void>}
     */
    async status() {
        let data;
        try {
            data = (await axios_1.default.get(`/user`, {
                headers: {
                    "api-token": `${this.token}`
                }
            })).data;
        }
        catch (err) {
            if (err.code == 401) {
                return this.error.newError("UNAUTHORIZED");
            }
            return console.error(err);
        }
        return data;
    }
}
exports.DiscloudUser = DiscloudUser;
