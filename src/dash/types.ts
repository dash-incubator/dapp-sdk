type Client = {
    connect(options: { [key: string]: any }): any;
    disconnect(): void;
    getApps(): { [key: string]: any };
    getWalletAccount(): Promise<{ [key: string]: any }>;

    platform: { [key: string]: any };
    wallet: { [key: string]: any };
};

type Contract = {
    [key: string]: any
};

type Document = {
    [key: string]: any
};

type Identity = {
    [key: string]: any;
};

type Response = {
    toJSON(): { [key: string]: any };
};


export type { Client, Contract, Document, Identity, Response };
