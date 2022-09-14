import { Dispatcher } from "undici";
export declare function requester(url: string, config?: ({
    dispatcher?: Dispatcher;
} & Omit<Dispatcher.RequestOptions, "origin" | "path" | "method"> & Partial<Pick<Dispatcher.RequestOptions, "method">>) | undefined): Promise<any>;
