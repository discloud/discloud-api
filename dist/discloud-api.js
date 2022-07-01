"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const error_1 = require("./error");
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = require("fs");
class DiscloudAPI {
    token;
    lang;
    version;
    constructor(token, options) {
        this.token = token;
        this.lang = options?.lang ? options.lang : "en";
        this.version = options?.version ? options.version : "v2";
    }
    url = "https://discloud.app/api/v2";
    error = new error_1.Errors();
    selectVersion() {
        this.version == "v1" ? this.url = "https://discloud.app/status" : this.url = "https://discloud.app/api/v2";
        return this.url;
    }
    /**
     * @author GardZock
     * @description Get status of user.
     * @return {Promise<UserStatus | void>}
     */
    async userStatus() {
        let data;
        try {
            data = (await axios_1.default.get(`${this.selectVersion()}/user`, {
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
    bot = {
        /**
        * @author GardZock
        * @description Get data of a bot.
        * @param {string} bot_id ID of Bot
        * @return {Promise<GetBot | void>}
        */
        get: async (bot_id) => {
            if (!bot_id)
                return this.error.newError("BOT_ID", this.lang);
            let data;
            try {
                data = (await axios_1.default.get(`${this.selectVersion()}${this.version == "v1" ? "/bot/" : "/app/"}/${bot_id}`, {
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
        },
        /**
        * @author GardZock
        * @description Get log of a bot.
        * @param {string} bot_id ID of Bot
        * @return {Promise<BotLogs | void>}
        */
        logs: async (bot_id) => {
            if (!bot_id)
                return this.error.newError("BOT_ID", this.lang);
            let data;
            try {
                data = (await axios_1.default.get(`${this.selectVersion()}${this.version == "v1" ? "/bot/" : "/app/"}${bot_id}/logs`, {
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
        },
        /**
        * @author GardZock
        * @param {string} bot_id ID of Bot
        * @description Restart the bot.
        * @return {Promise<BotRestart | void>}
        */
        restart: async (bot_id) => {
            if (!bot_id)
                return this.error.newError("BOT_ID", this.lang);
            let data;
            try {
                data = (await axios_1.default.post(`${this.selectVersion()}${this.version == "v1" ? "/bot/" : "/app/"}${bot_id}/restart`, {
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
        },
        /**
        * @author GardZock
        * @param {string} bot_id ID of Bot
        * @param {string} path File Path
        * @param {boolean} restart Whether the bot will restart
        * @description Commit a file in the bot.
        * @return {Promise<BotRestart | void>}
        */
        commit: async (bot_id, path, restart) => {
            if (this.version != "v1")
                return this.error.newError("NOT_UPDATED", this.lang);
            if (!path.endsWith('.zip'))
                return this.error.newError("INVALID_FILE", this.lang);
            const form = new form_data_1.default();
            form.append('file', (0, fs_1.createReadStream)(path));
            const headers = form.getHeaders({
                "api-token": `${this.token}`
            });
            let data;
            try {
                data = (await axios_1.default.post(`https://discloud.app/status/bot/${bot_id}/commit?restart=${restart}`, form, {
                    headers: headers
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
    };
}
exports.DiscloudAPI = DiscloudAPI;
