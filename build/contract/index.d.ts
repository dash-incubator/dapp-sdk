declare const _default: {
    get: ({ client }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, id: string) => Promise<import("@dashevo/wasm-dpp").DataContract>;
    register: ({ client, identity }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, definition: import("../types").Definition) => Promise<import("@dashevo/wasm-dpp").DataContractCreateTransition>;
};
export default _default;
