"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClass = void 0;
const error_1 = require("../functions/error");
class BaseClass {
    token;
    error;
    constructor(token) {
        this.token = token;
        this.error = new error_1.Errors();
    }
}
exports.BaseClass = BaseClass;
