import audio from './audio';
import comment from './comment';
import gallery from './gallery';
import image from './image';
import notary from './notary';
import video from './video';
declare const _default: {
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
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
        get: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, query: import("../types").Query) => Promise<import("../types").Documents>;
        locator: string;
        set: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
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
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
        get: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, query: import("../types").Query) => Promise<import("../types").Documents>;
        locator: string;
        set: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("../types").Document | import("../types").Documents, locator: string) => Promise<import("../types").Documents>;
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
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
        get: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, query: import("../types").Query) => Promise<import("../types").Documents>;
        locator: string;
        set: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
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
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
        get: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, query: import("../types").Query) => Promise<import("../types").Documents>;
        locator: string;
        set: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
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
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
        get: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, query: import("../types").Query) => Promise<import("../types").Documents>;
        locator: string;
        set: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
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
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
        get: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, query: import("../types").Query) => Promise<import("../types").Documents>;
        locator: string;
        set: (connection: {
            apps: {
                set(key: string, contract: import("@dashevo/wasm-dpp").DataContract): void;
            };
            readonly address: Promise<string>;
            readonly balance: Promise<number>;
            readonly client: import("dash/build/SDK/Client").Client;
            identity: import("@dashevo/wasm-dpp").Identity | undefined;
        }, documents: import("../types").Document | import("../types").Documents) => Promise<import("../types").Documents>;
    };
};
export default _default;
export { audio, comment, gallery, image, notary, video };
