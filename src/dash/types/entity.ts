type Entity = {
    data: { [key: string]: any };
    decrypt: (secret?: string) => Promise<void>;
    delete: (key: string) => void;
    encrypted: boolean;
    encrypt: (secret?: string) => Promise<void>;
    update: (data: { [key: string]: any }) => Promise<void>;
};


export default Entity;
