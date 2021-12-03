import dot from '@esportsplus/dot';
import { local } from './storage';


let data: object = {},
    key: string = 'config';


const clear = () => {
    local.delete(key);
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

const has = (key: string) => {
    return dot.has(data, key);
};

const set = (key: string, value: any): void => {
    dot.set(data, key, value);
    local.set(key, data);
};


export default { clear, get, has, set };
