"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudBot = void 0;
const axios_1 = __importDefault(require("axios"));
const error_1 = require("../functions/error");
const request_1 = require("../functions/request");
// ADD 
class DiscloudBot {
    token;
    lang;
    constructor(token, options) {
        this.token = token;
        this.lang = options?.lang ? options.lang : "en";
    }
    url = "https://api.discloud.app/v2";
    error = new error_1.Errors();
    /**
   
        * @description Get data of a bot.
        * @param {string} bot_id ID of Bot
        * @return {Promise<GetBot | void>}
    */
    async get(bot_id) {
        if (!bot_id)
            return this.error.newError("BOT_ID", this.lang);
        let data;
        try {
            data = (await axios_1.default.get(`${this.url}/app/${bot_id}`, {
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
    /**
    
    * @description Get log of a bot.
    * @param {string} bot_id ID of Bot
    * @return {Promise<BotLogs | void>}
    */
    async logs(bot_id) {
        if (!bot_id)
            return this.error.newError("BOT_ID", this.lang);
        let data;
        try {
            data = (await axios_1.default.get(`${this.url}/app/${bot_id}/logs`, {
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
    /**
    
    * @param {string} bot_id ID of Bot
    * @description Restart the bot.
    * @return {Promise<BotRestart | void>}
    */
    async restart(bot_id) {
        if (!bot_id)
            return this.error.newError("BOT_ID", this.lang);
        let data;
        try {
            data = (await axios_1.default.post(`${this.url}/app/${bot_id}/restart`, {}, {
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
    /**
     * @description Start all or a bot.
     * @param bot_id The ID of Bot.
     * @param isAll If is to start all or the @bot_id bot.
     * @returns
     */
    async start(bot_id, isAll) {
        if (!bot_id && !isAll)
            return this.error.newError("NEED_PARAM", this.lang);
        const data = await (0, request_1.request)('PUT', `${this.url}/app/${isAll ? "all" : bot_id}/start`, {
            headers: {
                "api-token": `${this.token}`
            }
        }, {});
        if (data == 401)
            return this.error.newError("UNAUTHORIZED", this.lang);
        //if (!data) return this.error.newError("NO_DATA", this.lang)
        return data;
    }
    /**
     * @description Stop all or a bot.
     * @param {string} bot_id The ID of Bot.
     * @param {string} isAll If is to stop all or the @bot_id bot.
     * @returns
     */
    async stop(bot_id, isAll) {
        if (!bot_id && !isAll)
            return this.error.newError("NEED_PARAM", this.lang);
        const data = await (0, request_1.request)('PUT', `${this.url}/app/${isAll ? "all" : bot_id}/stop`, {
            headers: {
                "api-token": `${this.token}`
            }
        }, {});
        if (data == 401)
            return this.error.newError("UNAUTHORIZED", this.lang);
        if (!data)
            return this.error.newError("NO_DATA", this.lang);
        return data;
    }
}
exports.DiscloudBot = DiscloudBot;
