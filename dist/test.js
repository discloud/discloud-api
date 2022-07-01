"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discloud_api_1 = require("./discloud-api");
async function get() {
    const api = new discloud_api_1.DiscloudAPI('xV7KkG4NbtHWs2tT4c8QkmcT8KsciC6HAV8KuirGDe1lD0DH4dkBc5T6G6uNW5xdpR', { lang: "pt", version: "v1" });
    const commit = await api.bot.commit('963643742429011988', 'test.zip', true);
    console.log(commit);
}
get();
