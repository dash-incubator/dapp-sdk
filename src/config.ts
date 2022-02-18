import { local } from './storage';
import dot from '@esportsplus/dot';


let bucket: string = 'config',
    data: object = {};


const clear = () => {
    data = {};
    local.delete(bucket);
};

const del = (key: string): void => {
    set(key, undefined);
};

const get = async (key: string, value: any = null): Promise<any> => {
    if (!has(key) && typeof value === 'function') {
        set(key, await value());
    }

    value = dot.get(data, key) || value;

    if (value === null) {
        throw new Error(`'${key}' has not been set in storage`);
    }

    return value;
};

const has = (key: string): boolean => {
    return dot.has(data, key);
};

const set = (key: string, value: any): void => {
    dot.set(data, key, value);
    local.set(bucket, data);
};

const useOptions = local.useOptions;


// Sync `data` with local storage
(async () => {
    data = (await local.get(bucket)) || {};
})();


export default { clear, delete: del, get, has, set, useOptions };
