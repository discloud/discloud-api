import { Errors } from "../functions/error"

export class BaseClass {

    readonly token: string;
    readonly error: Errors;
    constructor(token: string) {

        this.token = token;
        this.error = new Errors()
    }
}