import { Documents, Document, Query } from '../../types';
declare const _default: {
    contracts: {
        comment: {
            additionalProperties: boolean;
            indices: ({
                name: string;
                properties: {
                    $ownerId: string;
                }[];
            } | {
                name: string;
                properties: {
                    parent: string;
                }[];
            } | {
                name: string;
                properties: {
                    thread: string;
                }[];
            })[];
            properties: {
                content: {
                    type: string;
                };
                parent: {
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
                thread: {
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    delete: (connection: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, documents: Document | Documents) => Promise<Documents>;
    get: (connection: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, query: Query) => Promise<Documents>;
    locator: string;
    set: (connection: {
        apps: {
            set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
        };
        readonly address: Promise<string>;
        readonly balance: Promise<number>;
        readonly client: import("dash/build/SDK/Client").Client;
        identity: import("@dashevo/wasm-dpp").Identity | undefined;
    }, documents: Document | Documents, locator: string) => Promise<Documents>;
};
export default _default;
