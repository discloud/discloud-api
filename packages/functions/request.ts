import axios, { AxiosRequestConfig } from "axios";
import { Errors } from "./error";

type METHODS = "DELETE" | "PUT" | "GET" | "POST"

export async function request(method: METHODS, url: string, config?: AxiosRequestConfig<any>, d?: any) {
    let data;

    const methods = {
        DELETE: axios.delete,
        PUT: axios.put,
        GET: axios.get,
        POST: axios.post
    }

    config ? config['baseURL'] = "https://api.discloud.app/v2" : config = { baseURL: "https://api.discloud.app/v2" }

    try {
        data = ((d || d == {}) ? await methods[method](url, d, config) : await methods[method](url, config)).data
    } catch (err: any) {
        return new Errors().newError(err.response.data.message)
    }

    if (data.status == "error") return new Errors().newError(data.message)

    return data;
}