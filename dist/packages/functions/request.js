"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requester = void 0;
const undici_1 = require("undici");
const error_1 = require("./error");
async function requester(url, config) {
    let data;
    url = "https://api.discloud.app/v2" + url;
    try {
        data = (await (await (0, undici_1.request)(url, config)).body.json());
    }
    catch (err) {
        return new error_1.Errors().newError(err.response?.body ? err.response.body.json().message : err);
    }
    if (data.status == "error")
        return new error_1.Errors().newError(data.message);
    return data;
}
exports.requester = requester;
