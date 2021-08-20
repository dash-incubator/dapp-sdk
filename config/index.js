import dot from 'dot';
import localStorage from './localStorage';


let bucket = 'DashDApp',
    config = {},
    storage = {};


const clear = () => {
    config = {};

    if (storage.clear) {
        storage.clear();
    }
};

const get = async (key, value = null) => {
    if (!has(key) && typeof value === 'function') {
        set(key, await value());
    }

    value = dot.get(config, key) || value;

    if (value === null) {
        throw new Error(`'${key}' has not been set in storage`);
    }

    return value;
};

const has = (key) => {
    return dot.has(config, key);
};

const set = (key, value) => {
    dot.set(config, key, value);

    if (storage.save) {
        storage.save(bucket, config);
    }
};

const useLocalStorage = () => {
    config = localStorage.read(bucket);
    storage = localStorage;
};

const useMemory = () => {
    config = {};
    storage = {};
};


export default { clear, get, has, set, useLocalStorage, useMemory };
