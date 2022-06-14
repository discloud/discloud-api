interface UserStatus {
    userID: string;
    plan: string;
}
interface GetBot {
    app_id: string;
    info: string;
    container: string;
    cpu: string;
    memory: string;
    last_restart: string;
}
interface BotLogs {
    app_id: string;
    link: string;
    logs: string | string[] | null;
}
interface BotRestart {
    status: string;
    message: string;
}
declare type Languages = "en" | "pt";
export declare class DiscloudAPI {
    private token;
    private lang;
    constructor(token: string, options?: {
        lang?: Languages;
    });
    private url;
    private error;
    /**
     * @author GardZock
     * @description Get status of user.
     * @return {Promise<UserStatus | void>}
     */
    userStatus(): Promise<UserStatus | void>;
    bot: {
        /**
        * @author GardZock
        * @description Get data of a bot.
        * @param {string} bot_id ID of Bot
        * @return {Promise<GetBot | void>}
        */
        get: (bot_id: string) => Promise<GetBot | void>;
        /**
        * @author GardZock
        * @description Get log of a bot.
        * @param {string} bot_id ID of Bot
        * @return {Promise<BotLogs | void>}
        */
        logs: (bot_id: string) => Promise<BotLogs | void>;
        /**
        * @author GardZock
        * @param {string} bot_id ID of Bot
        * @description Restart the bot.
        * @return {Promise<BotRestart | void>}
        */
        restart: (bot_id: string) => Promise<BotRestart | void>;
    };
}
export {};
