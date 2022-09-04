"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamtoBlob = exports.getFile = void 0;
const fs_1 = require("fs");
const undici_1 = require("undici");
const buffer_1 = require("buffer");
function getFile(path) {
    let fileData;
    try {
        if ((0, fs_1.existsSync)(path)) {
            fileData = streamtoBlob(path);
        }
        else {
            fileData = null;
        }
    }
    catch (err) {
        return console.error(err);
    }
    const form = new undici_1.FormData();
    form.append('file', fileData);
    return form;
}
exports.getFile = getFile;
async function streamtoBlob(file) {
    return new Promise(async (resolve, reject) => {
        const stream = await (0, fs_1.createReadStream)(file);
        const chunks = [];
        stream
            .on("data", chunk => chunks.push(chunk))
            .once("end", () => resolve(new buffer_1.Blob(chunks)))
            .once("error", reject);
    });
}
exports.streamtoBlob = streamtoBlob;
