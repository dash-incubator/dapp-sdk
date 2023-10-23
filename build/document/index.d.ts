declare const _default: {
    delete: ({ client, identity }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
    get: ({ client }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, locator: string, query: import("../types").Query) => Promise<import("../types").Documents>;
    set: ({ client, identity }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, documents: import("../types").Document | import("../types").Documents, locator: string) => Promise<import("../types").Documents>;
};
export default _default;
