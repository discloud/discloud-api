import { AxiosRequestConfig } from "axios";
declare type METHODS = "PUT" | "GET" | "POST";
export declare function request(method: METHODS, url: string, config?: AxiosRequestConfig<any>, d?: any): Promise<any>;
export {};
