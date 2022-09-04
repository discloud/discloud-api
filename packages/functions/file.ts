import { existsSync, createReadStream } from 'fs'
import { FormData } from 'undici'
import { Blob } from "buffer";
import { BinaryLike } from "crypto";

export function getFile(path: string) {

    let fileData

    try {
        if (existsSync(path)) {
            fileData = streamtoBlob(path)
        } else {
            fileData = null
        }
    } catch(err) {
        return console.error(err)
    }

    const form = new FormData()
    form.append('file', fileData)
    return form;
}

export async function streamtoBlob(file: string) {
    return new Promise(async (resolve, reject) => {
        const stream = await createReadStream(file);
        const chunks: (Blob | BinaryLike)[] | (string | Buffer)[] = [];
        stream
            .on("data", chunk => chunks.push(chunk))
            .once("end", () => resolve(new Blob(chunks)))
            .once("error", reject);
    });
}