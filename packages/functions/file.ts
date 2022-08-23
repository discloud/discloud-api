import { existsSync, createReadStream } from 'fs'
import FormData from 'form-data'

export function getFile(path: string) {

    let fileData

    try {
        if (existsSync(path)) {
            fileData = createReadStream(path)
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