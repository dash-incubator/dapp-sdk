declare const _default: {
    clear: (callback?: ((err: any) => void) | undefined) => Promise<void>;
    delete: (key: string) => void;
    get: (key: string) => Promise<any>;
    set: (key: string, value: any) => void;
    useIndexedDB: (options?: {
        description?: string | undefined;
        name?: string | undefined;
        storeName?: string | undefined;
        version?: number | undefined;
    } | undefined) => void;
    useLocalStorage: (options?: {
        description?: string | undefined;
        name?: string | undefined;
    } | undefined) => void;
};
export default _default;
