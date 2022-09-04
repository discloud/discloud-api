import { FormData } from 'undici';
export declare function getFile(path: string): void | FormData;
export declare function streamtoBlob(file: string): Promise<unknown>;
