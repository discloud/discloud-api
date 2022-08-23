"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = void 0;
const fs_1 = require("fs");
const form_data_1 = __importDefault(require("form-data"));
function getFile(path) {
    let fileData;
    try {
        if ((0, fs_1.existsSync)(path)) {
            fileData = (0, fs_1.createReadStream)(path);
        }
        else {
            fileData = null;
        }
    }
    catch (err) {
        return console.error(err);
    }
    const form = new form_data_1.default();
    form.append('file', fileData);
    return form;
}
exports.getFile = getFile;
