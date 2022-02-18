import type { Options } from './types';
import localforage from 'localforage';


let driver: any = localforage.LOCALSTORAGE;


function init(options: Options = {}): void {
    localforage.config(Object.assign({ name: 'dapp' }, options, { driver }));
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

const useIndexedDB = (options: Options = {}): void => {
    driver = localforage.INDEXEDDB;
    init(options);
};

const useLocalStorage = (options: Options = {}): void => {
    driver = localforage.LOCALSTORAGE;
    init(options);
};

const useOptions = (options: Options = {}): void => {
    init(options);
};


// Initialize using localstorage as default storage
init();


export default { clear, delete: del, get, set, useIndexedDB, useLocalStorage, useOptions };
