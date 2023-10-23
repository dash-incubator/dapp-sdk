declare const _default: {
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
export default _default;
