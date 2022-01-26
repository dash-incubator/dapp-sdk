type Entity = {
    data: { [key: string]: any };
    decrypt: (secret?: string) => Promise<void>;
    encrypted: boolean;
    encrypt: (secret?: string) => Promise<void>;
};


export default Entity;
