import { Dispatcher, request } from "undici";
import { Errors } from "./error";

export async function requester(url: string, config?: ({ dispatcher?: Dispatcher } & Omit<
    Dispatcher.RequestOptions,
    "origin" | "path" | "method"
  > &
    Partial<Pick<Dispatcher.RequestOptions, "method">>)
| undefined) {
    let data;

    url = "https://api.discloud.app/v2" + url

    try {
        data = (await (await request(url, config)).body.json())
    } catch (err: any) {
        return new Errors().newError(err.response?.body ? err.response.body.json().message : err)
    }

    if (data.status == "error") return new Errors().newError(data.message)

    return data;
}