"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamtoBlob = exports.getFile = void 0;
const fs_1 = require("fs");
const undici_1 = require("undici");
const buffer_1 = require("buffer");
async function getFile(path) {
    try {
        if ((0, fs_1.existsSync)(path)) {
            const form = new undici_1.FormData();
            form.append("file", await streamtoBlob(path), "file.zip");
            return form;
        }
        else {
            return;
        }
    }
    catch (err) {
        return console.error(err);
    }
}
exports.getFile = getFile;
async function streamtoBlob(file) {
    return new Promise(async (resolve, reject) => {
        const stream = await (0, fs_1.createReadStream)(file);
        const chunks = [];
        stream
            .on("data", (chunk) => chunks.push(chunk))
            .once("end", () => resolve(new buffer_1.Blob(chunks)))
            .once("error", reject);
    });
}
exports.streamtoBlob = streamtoBlob;
