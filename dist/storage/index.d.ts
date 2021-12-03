import ipfs from './ipfs';
import local from './local';
declare const _default: {
    ipfs: {
        upload: {
            files: (files: {
                content: string;
                path: string;
            }) => Promise<string>;
            file: (content: string) => Promise<string>;
        };
    };
    local: {
        clear: (callback?: ((err: any) => void) | undefined) => Promise<void>;
        delete: (key: string) => void;
        get: (key: string) => Promise<any>;
        set: (key: string, value: any) => void;
        useIndexedDB: (options?: {
            description?: string | undefined;
            name?: string | undefined;
            storeName?: string | undefined;
            version?: number | undefined;
        } | undefined) => void;
        useLocalStorage: (options?: {
            description?: string | undefined;
            name?: string | undefined;
        } | undefined) => void;
    };
};
export default _default;
export { ipfs, local };
