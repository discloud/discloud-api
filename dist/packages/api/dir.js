"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudDir = void 0;
const error_1 = require("../functions/error");
//ADD COMMIT, DELETE AND BACKUP
class DiscloudDir {
    token;
    lang;
    constructor(token, options) {
        this.token = token;
        this.lang = options?.lang ? options.lang : "en";
    }
    error = new error_1.Errors();
}
exports.DiscloudDir = DiscloudDir;
