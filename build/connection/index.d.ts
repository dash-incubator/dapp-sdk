import { Client } from 'dash';
import identity from '../identity';
declare const create: (options?: ConstructorParameters<typeof Client>[0] & {
    identity?: string;
}) => Promise<{
    apps: {
        set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
    };
    readonly address: Promise<string>;
    readonly balance: Promise<number>;
    readonly client: import("dash/build/SDK/Client").Client;
    identity: import("@dashevo/wasm-dpp").Identity | undefined;
}>;
declare const _default: {
    create: (options?: import("dash/build/SDK/Client/Client").ClientOpts & {
        identity?: string | undefined;
    }) => Promise<{
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }>;
};
export default _default;
export { create };
