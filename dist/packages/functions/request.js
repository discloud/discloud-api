"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const error_1 = require("./error");
async function request(method, url, config, d) {
    let data;
    const methods = {
        PUT: axios_1.default.put,
        GET: axios_1.default.get,
        POST: axios_1.default.post
    };
    config ? config['baseURL'] = "https://api.discloud.app/v2" : config = { baseURL: "https://api.discloud.app/v2" };
    try {
        data = ((d || d == {}) ? await methods[method](url, d, config) : await methods[method](url, config)).data;
    }
    catch (err) {
        return new error_1.Errors().newError(err.res.data.message);
    }
    if (data.status == "error")
        return new error_1.Errors().newError(data.message);
    return data;
}
exports.request = request;
