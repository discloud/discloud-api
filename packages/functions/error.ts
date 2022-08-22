import { errors } from '../../translate-texts.json'

type ErrorType = "NO_DATA" | "APP_ID" | "UNAUTHORIZED" | "NEED_PARAM"
type Languages = "en" | "pt"

export class Errors {

    public newError(name: ErrorType, lang: Languages) {
        const error = errors[name]
        throw new Error(`[DISCLOUD_API] ${error[lang]}`)
    }
}