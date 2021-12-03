declare const _default: {
    config: {
        clear: () => void;
        get: (key: string, value?: any) => Promise<any>;
        has: (key: string) => boolean;
        set: (key: string, value: any) => void;
    };
    storage: {
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
    user: {
        apps: {
            all: () => Promise<any>;
            get: (app: string, fallback: () => void) => Promise<any>;
            set: (app: string, contract: string) => void;
        };
        connect: (options?: object) => Promise<void>;
        contract: {
            register: (contractDefinitions: object) => Promise<any>;
        };
        disconnect: () => void;
        document: {
            delete: (documents: object | []) => Promise<any>;
            read: (locator: string, query: object) => Promise<any>;
            save: (documents: object | [], locator: string) => Promise<any>;
        };
        identity: {
            get: () => Promise<any>;
        };
        init: (reconnect?: boolean) => Promise<void>;
        message: {
            decrypt: (message: any) => Promise<any>;
            encrypt: (message: any) => Promise<any>;
        };
        name: {
            read: (name: string) => Promise<any>;
            register: (name: string) => Promise<any>;
        };
        wallet: {
            read: () => Promise<any>;
        };
    };
};
export default _default;
