import { existsSync, createReadStream } from "fs";
import { FormData } from "undici";
import { Blob } from "buffer";
import { BinaryLike } from "crypto";

export async function getFile(path: string) {

  try {
    if (existsSync(path)) {
      const form = new FormData();
      form.append("file", await streamtoBlob(path), "file.zip");
      return form;
    } else {
      return;
    }
  } catch (err) {
    return console.error(err);
  }

  
}

export async function streamtoBlob(file: string) {
  return new Promise(async (resolve, reject) => {
    const stream = await createReadStream(file);
    const chunks: (Blob | BinaryLike)[] | (string | Buffer)[] = [];
    stream
      .on("data", (chunk) => chunks.push(chunk))
      .once("end", () => resolve(new Blob(chunks)))
      .once("error", reject);
  });
}
