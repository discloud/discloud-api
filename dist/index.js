"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudAPI = void 0;
const app_1 = require("./packages/api/app");
const user_1 = require("./packages/api/user");
const dir_1 = require("./packages/api/dir");
const class_1 = require("./packages/base/class");
class DiscloudAPI extends class_1.BaseClass {
    app;
    user;
    dir;
    constructor(token) {
        super(token);
        this.app = new app_1.DiscloudApp(this.token);
        this.user = new user_1.DiscloudUser(this.token);
        this.dir = new dir_1.DiscloudDir(this.token);
    }
}
exports.DiscloudAPI = DiscloudAPI;
