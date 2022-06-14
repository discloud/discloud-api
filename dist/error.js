"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
const translate_texts_json_1 = require("./translate-texts.json");
class Errors {
    newError(name, lang) {
        const error = translate_texts_json_1.errors[name];
        throw new Error(`[DISCLOUDAPI] ${error[lang]}`);
    }
}
exports.Errors = Errors;
