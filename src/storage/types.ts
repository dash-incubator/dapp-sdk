type IpfsOptions = {
    compress?: boolean,
    encrypt?: boolean,
    secret?: string
};

type LocalOptions = {
    description?: string,
    name?: string,
    storeName?: string,
    version?: number
};


export type { IpfsOptions, LocalOptions };
