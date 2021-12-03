import localforage from 'localforage';


type options = { description?: string, name?: string, storeName?: string, version?: number };


let driver: any = localforage.LOCALSTORAGE;


function init(options: object = {}): void {
    localforage.config(Object.assign(options, { driver }));
}


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

const useIndexedDB = (options?: options): void => {
    driver = localforage.INDEXEDDB;
    init(options);
};

const useLocalStorage = (options?: options): void => {
    driver = localforage.LOCALSTORAGE;
    init(options);
};

const useOptions = (options?: options): void => {
    init(options);
};


// Initialize using localstorage as default storage
init();


export default { clear, delete: del, get, set, useIndexedDB, useLocalStorage, useOptions };
