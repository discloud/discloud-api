import { Languages } from "../../discloud-api";
export interface GetBot {
    app_id: string;
    info: string;
    container: string;
    cpu: string;
    memory: string;
    last_restart: string;
}
export interface BotLogs {
    app_id: string;
    link: string;
    logs: string | string[] | null;
}
export interface GenericMessage {
    status: string;
    message: string;
}
export declare class DiscloudBot {
    private readonly token;
    private readonly lang;
    constructor(token: string, options?: {
        lang?: Languages;
    });
    private url;
    private readonly error;
    /**
   
        * @description Get data of a bot.
        * @param {string} bot_id ID of Bot
        * @return {Promise<GetBot | void>}
    */
    get(bot_id: string): Promise<GetBot | void>;
    /**
    
    * @description Get log of a bot.
    * @param {string} bot_id ID of Bot
    * @return {Promise<BotLogs | void>}
    */
    logs(bot_id: string): Promise<BotLogs | void>;
    /**
    
    * @param {string} bot_id ID of Bot
    * @description Restart the bot.
    * @return {Promise<BotRestart | void>}
    */
    restart(bot_id: string): Promise<GenericMessage | void>;
    /**
     * @description Start all or a bot.
     * @param bot_id The ID of Bot.
     * @param isAll If is to start all or the @bot_id bot.
     * @returns
     */
    start(bot_id?: string, isAll?: boolean): Promise<GenericMessage | void>;
    /**
     * @description Stop all or a bot.
     * @param {string} bot_id The ID of Bot.
     * @param {string} isAll If is to stop all or the @bot_id bot.
     * @returns
     */
    stop(bot_id?: string, isAll?: boolean): Promise<GenericMessage | void>;
}
