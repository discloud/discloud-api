"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudDir = void 0;
const error_1 = require("../functions/error");
//ADD COMMIT, DELETE AND BACKUP
class DiscloudDir {
    token;
    constructor(token) {
        this.token = token;
    }
    error = new error_1.Errors();
}
exports.DiscloudDir = DiscloudDir;
