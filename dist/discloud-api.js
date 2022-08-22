"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscloudAPI = void 0;
const app_1 = require("./packages/api/app");
const user_1 = require("./packages/api/user");
const dir_1 = require("./packages/api/dir");
class DiscloudAPI {
    token;
    lang;
    app;
    user;
    dir;
    constructor(token, options) {
        this.token = token;
        this.lang = options?.lang ? options.lang : "en";
        this.app = new app_1.DiscloudApp(this.token, { lang: this.lang });
        this.user = new user_1.DiscloudUser(this.token, { lang: this.lang });
        this.dir = new dir_1.DiscloudDir(this.token, { lang: this.lang });
    }
}
exports.DiscloudAPI = DiscloudAPI;
