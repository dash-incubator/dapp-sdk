type Entity = {
    data: { [key: string]: any };
    decrypt: (secret?: string) => Promise<Entity>;
    delete: (key: string) => Entity;
    encrypted: boolean;
    encrypt: (secret?: string) => Promise<Entity>;
    update: (data: { [key: string]: any }) => Promise<Entity>;
};


export type { Entity };
