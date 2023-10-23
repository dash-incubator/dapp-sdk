import { Client, Contract, Identity } from '../types';
declare const _default: (client: Client, identity?: Identity) => {
    apps: {
        set(key: string, contract: Contract): void;
    };
    readonly address: Promise<string>;
    readonly balance: Promise<number>;
    readonly client: import("dash/build/SDK/Client").Client;
    identity: import("@dashevo/wasm-dpp").Identity | undefined;
};
export default _default;
