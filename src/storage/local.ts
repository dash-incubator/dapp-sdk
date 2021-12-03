import localforage from 'localforage';


let config: { name: string, storeName: string, version: number } = {
        name: 'dapp-kv',
        storeName: 'dapp-kv',
        version: 1.0
    };


const clear = localforage.clear;

const del = (key: string): void => {
    localforage.removeItem(key);
}

const get = (key: string): Promise<any> => {
    return localforage.getItem(key);
};

const set = (key: string, value: any): void => {
    localforage.setItem(key, value);
};


const useIndexedDB = (options?: { description?: string, name?: string, storeName?: string, version?: number }): void => {
    localforage.config(Object.assign(config, options, { driver: localforage.INDEXEDDB }));
};

const useLocalStorage = (options?: { description?: string, name?: string }): void => {
    localforage.config(Object.assign(config, options, { driver: localforage.LOCALSTORAGE }));
};


// Default to localStorage
useLocalStorage();


export default { clear, delete: del, get, set, useIndexedDB, useLocalStorage };
