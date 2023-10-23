declare const _default: {
    get: ({ client }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, id?: string) => Promise<import("@dashevo/wasm-dpp").Identity | undefined>;
    register: ({ client }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }) => Promise<import("@dashevo/wasm-dpp").Identity>;
    topup: ({ client }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, identity: string, total: number) => Promise<import("@dashevo/wasm-dpp").Identity | undefined>;
};
export default _default;
