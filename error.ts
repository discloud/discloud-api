import { errors } from './translate-texts.json'

type ErrorType = "NO_DATA" | "BOT_ID" | "UNAUTHORIZED"
type Languages = "en" | "pt"

export class Errors {

    public newError(name: ErrorType, lang: Languages) {
        const error = errors[name]
        throw new Error(`[DISCLOUDAPI] ${error[lang]}`)
    }
}