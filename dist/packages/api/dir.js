"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudDir = void 0;
const error_1 = require("../functions/error");
const file_1 = require("../functions/file");
const request_1 = require("../functions/request");
//REMAKE COMMIT, BACKUP
class DiscloudDir {
    token;
    constructor(token) {
        this.token = token;
    }
    error = new error_1.Errors();
    /**
     * @description Commit a App.
     * @param {String} app_id ID or SubDomain of App.
     * @param {String} path Path of Zip File.
     * @return {Promise<CommitResponse | void>}
     */
    async commit(app_id, path) {
        if (!path.endsWith('.zip'))
            return this.error.newError("The added file is invalid.");
        const file = (0, file_1.getFile)(path);
        if (!file)
            return this.error.newError("The added file is invalid.");
        const data = await (0, request_1.requester)(`/app/${app_id}/commit`, {
            headersTimeout: 300000,
            bodyTimeout: 300000,
            headers: {
                "api-token": `${this.token}`
            },
            method: 'PUT',
            body: file
        });
        return data;
    }
    /**
     * @description Get backup of a app.
     * @param {string} app_id ID of App
     * @return {Promise<AppBackup | void>}
     */
    async backup(app_id, isAll = false) {
        if (!app_id && !isAll)
            return this.error.newError("At least one of the parameters must be added to this method.");
        const data = (await (0, request_1.requester)(`/app/${isAll ? "all" : app_id}/backup`, {
            headers: {
                "api-token": `${this.token}`
            },
            method: 'GET'
        }));
        return data;
    }
}
exports.DiscloudDir = DiscloudDir;
