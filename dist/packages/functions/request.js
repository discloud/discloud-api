"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
async function request(method, url, config, d) {
    let data;
    const methods = {
        PUT: axios_1.default.put,
        GET: axios_1.default.get,
        POST: axios_1.default.post
    };
    try {
        data = ((d || d == {}) ? await methods[method](url, d, config) : await methods[method](url, config)).data;
    }
    catch (err) {
        if (err.code == 401)
            return 401;
        return console.error(err);
    }
    return data;
}
exports.request = request;
