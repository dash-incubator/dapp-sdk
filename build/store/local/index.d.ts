import accounts from "./accounts";
import apps from "./apps";
declare const _default: {
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
export default _default;
export { accounts, apps };
