declare const _default: {
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
export default _default;
