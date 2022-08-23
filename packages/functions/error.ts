export class Errors {
    public newError(data: string) {
        throw new Error(`[DISCLOUD_API] ${data}`)
    }
}