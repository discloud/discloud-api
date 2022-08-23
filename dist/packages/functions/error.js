"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
class Errors {
    newError(data) {
        throw new Error(`[DISCLOUD_API] ${data}`);
    }
}
exports.Errors = Errors;
