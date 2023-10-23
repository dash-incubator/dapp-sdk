import { Connection } from './types';
declare const decrypt: ({ client }: Connection, data: any, secret?: string) => Promise<string>;
declare const encrypt: ({ client }: Connection, data: any, secret?: string) => Promise<string>;
declare const _default: {
    decrypt: ({ client }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, data: any, secret?: string | undefined) => Promise<string>;
    encrypt: ({ client }: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, data: any, secret?: string | undefined) => Promise<string>;
};
export default _default;
export { decrypt, encrypt };
