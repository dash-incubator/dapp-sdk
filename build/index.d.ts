import app from './app';
import connection from './connection';
import contract from './contract';
import document from './document';
import identity from './identity';
import name from './name';
import store from './store';
declare const _default: {
    app: {
        audio: {
            contracts: {
                audio: {
                    additionalProperties: boolean;
                    indices: {
                        name: string;
                        properties: {
                            $ownerId: string;
                        }[];
                    }[];
                    properties: {
                        audio: {
                            type: string;
                        };
                        banner: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        encrypted: {
                            type: string;
                        };
                        keywords: {
                            items: {
                                type: string;
                            };
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        secret: {
                            type: string;
                        };
                        thumbnail: {
                            type: string;
                        };
                        transcoded: {
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
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
            get: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, query: import("./types").Query) => Promise<import("./types").Documents>;
            locator: string;
            set: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
        };
        comment: {
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
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
            get: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, query: import("./types").Query) => Promise<import("./types").Documents>;
            locator: string;
            set: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, documents: import("./types").Document | import("./types").Documents, locator: string) => Promise<import("./types").Documents>;
        };
        gallery: {
            contracts: {
                gallery: {
                    additionalProperties: boolean;
                    indices: {
                        name: string;
                        properties: {
                            $ownerId: string;
                        }[];
                    }[];
                    properties: {
                        description: {
                            type: string;
                        };
                        encrypted: {
                            type: string;
                        };
                        gallery: {
                            items: {
                                type: string;
                            };
                            type: string;
                        };
                        keywords: {
                            items: {
                                type: string;
                            };
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        secret: {
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
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
            get: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, query: import("./types").Query) => Promise<import("./types").Documents>;
            locator: string;
            set: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
        };
        image: {
            contracts: {
                image: {
                    additionalProperties: boolean;
                    indices: {
                        name: string;
                        properties: {
                            $ownerId: string;
                        }[];
                    }[];
                    properties: {
                        description: {
                            type: string;
                        };
                        encrypted: {
                            type: string;
                        };
                        image: {
                            type: string;
                        };
                        keywords: {
                            items: {
                                type: string;
                            };
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        secret: {
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
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
            get: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, query: import("./types").Query) => Promise<import("./types").Documents>;
            locator: string;
            set: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
        };
        notary: {
            contracts: {
                notary: {
                    additionalProperties: boolean;
                    indices: ({
                        name: string;
                        properties: {
                            cid: string;
                        }[];
                        unique: boolean;
                    } | {
                        name: string;
                        properties: {
                            $ownerId: string;
                        }[];
                        unique?: undefined;
                    })[];
                    properties: {
                        cid: {
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
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
            get: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, query: import("./types").Query) => Promise<import("./types").Documents>;
            locator: string;
            set: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
        };
        video: {
            contracts: {
                video: {
                    additionalProperties: boolean;
                    indices: {
                        name: string;
                        properties: {
                            $ownerId: string;
                        }[];
                    }[];
                    properties: {
                        banner: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        encrypted: {
                            type: string;
                        };
                        keywords: {
                            items: {
                                type: string;
                            };
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        secret: {
                            type: string;
                        };
                        thumbnail: {
                            type: string;
                        };
                        transcoded: {
                            type: string;
                        };
                        video: {
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
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
            get: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, query: import("./types").Query) => Promise<import("./types").Documents>;
            locator: string;
            set: (connection: {
                apps: {
                    set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
                };
                readonly address: Promise<string>;
                readonly balance: Promise<number>;
                readonly client: import("dash/build/SDK/Client").Client;
                identity: import("@dashevo/wasm-dpp").Identity | undefined;
            }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
        };
    };
    connection: {
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
    contract: {
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
        }, definition: import("./types").Definition) => Promise<import("@dashevo/wasm-dpp").DataContractCreateTransition>;
    };
    document: {
        delete: ({ client, identity }: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("./types").Document | import("./types").Documents) => Promise<import("./types").Documents>;
        get: ({ client }: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, locator: string, query: import("./types").Query) => Promise<import("./types").Documents>;
        set: ({ client, identity }: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("./types").Document | import("./types").Documents, locator: string) => Promise<import("./types").Documents>;
    };
    identity: {
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
    name: {
        register: ({ client, identity }: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, name: string) => Promise<import("./types").Document>;
        search: ({ client }: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, name: string) => Promise<import("./types").Documents>;
    };
    store: {
        local: {
            accounts: (secret: string) => {
                instance: LocalForage;
                iterate: <T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U, callback?: ((err: any, result: U) => void) | undefined) => Promise<U>;
                keys: (callback?: ((err: any, keys: string[]) => void) | undefined) => Promise<string[]>;
                length: (callback?: ((err: any, numberOfKeys: number) => void) | undefined) => Promise<number>;
                secret: string | null;
                all(): Promise<Record<PropertyKey, {
                    identity: string;
                    mnemonic: string;
                }>>;
                clear(): Promise<void>;
                delete(...keys: PropertyKey[]): Promise<void>;
                filter(fn: import("@esportsplus/web-storage/build/types").Filter<Record<PropertyKey, {
                    identity: string;
                    mnemonic: string;
                }>>): Promise<Record<PropertyKey, {
                    identity: string;
                    mnemonic: string;
                }>>;
                get(key: PropertyKey): Promise<unknown>;
                only(...keys: PropertyKey[]): Promise<Record<PropertyKey, {
                    identity: string;
                    mnemonic: string;
                }>>;
                replace(values: Record<PropertyKey, {
                    identity: string;
                    mnemonic: string;
                }>): Promise<string[]>;
                set(key: PropertyKey, value: {
                    identity: string;
                    mnemonic: string;
                }): Promise<boolean>;
            };
            apps: {
                instance: LocalForage;
                iterate: <T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U, callback?: ((err: any, result: U) => void) | undefined) => Promise<U>;
                keys: (callback?: ((err: any, keys: string[]) => void) | undefined) => Promise<string[]>;
                length: (callback?: ((err: any, numberOfKeys: number) => void) | undefined) => Promise<number>;
                secret: string | null;
                all(): Promise<Record<PropertyKey, {
                    contractId: string;
                }>>;
                clear(): Promise<void>;
                delete(...keys: PropertyKey[]): Promise<void>;
                filter(fn: import("@esportsplus/web-storage/build/types").Filter<Record<PropertyKey, {
                    contractId: string;
                }>>): Promise<Record<PropertyKey, {
                    contractId: string;
                }>>;
                get(key: PropertyKey): Promise<unknown>;
                only(...keys: PropertyKey[]): Promise<Record<PropertyKey, {
                    contractId: string;
                }>>;
                replace(values: Record<PropertyKey, {
                    contractId: string;
                }>): Promise<string[]>;
                set(key: PropertyKey, value: {
                    contractId: string;
                }): Promise<boolean>;
            };
        };
    };
};
export default _default;
export type { Connection, Contract, ContractTransition, Definition, Document, Documents, Identity } from './types';
export { app, connection, contract, document, identity, name, store };
