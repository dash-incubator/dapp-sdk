import type { Object } from '@src/types';
import type { Upload } from '@storage/ipfs/types';
import { storage } from '@src/index';


type Options = {
    translate: Object;
    upload: Upload['options'];
};


let methods: Object = {
        boolean: (value: any): boolean | undefined => {
            return (typeof value === 'boolean') ? value : undefined;
        },
        number: (value: any): number | undefined => {
            return Number.isFinite(value) ? value : undefined;
        },
        object: async (input: Object, options: Options, properties: Object): Promise<Object> => {
            return await process({}, input, options, properties);
        },
        string: async (value: any, { upload }: Options = { translate: {}, upload: {} }): Promise<undefined | string> => {
            if (typeof value === 'string') {
                return value;
            }

            if (storage.ipfs.uploadable(value)) {
                return await storage.ipfs.upload(value, upload);
            }

            return undefined;
        }
    };


async function process(data: Object, input: Object, { translate, upload }: Options, properties: Object): Promise<Object> {
    for (let key in input) {
        let options = { translate: translate[key] || {}, upload },
            value = input[key];

        // Translate to key used in platform document
        key = translate[key] || key;

        let field = properties[key] || {};

        if (Object.keys(field).length === 0) {
            continue;
        }

        if (field.type === 'array') {
            if (!field.items.type || !(Symbol.iterator in Object(value))) {
                continue;
            }

            data[key] = [];

            for (let i = 0, n = value.length; i < n; i++) {
                let item = await methods[field.items.type](value[i], options, field.items.properties || {});

                if (item === undefined || Object.keys(item).length === 0) {
                    continue;
                }

                data[key].push(item);
            }
        }
        else if (field.type === 'object') {
            if (Object.keys(field.properties).length === 0 || typeof value !== 'object' || value === null) {
                continue;
            }

            if (!data.hasOwnProperty(key)) {
                data[key] = {};
            }

            await process(data[key], value, options, field.properties);
        }
        else {
            value = await methods[field.type](value, options);

            if (value === undefined) {
                continue;
            }

            data[key] = value;
        }
    }

    return data;
}


const update = async function(data: Object, input: Object, properties: Object, translate: Options['translate'] = {}): Promise<Object> {
    let compress = methods.boolean(input.compress),
        encrypt = methods.boolean(input.encrypt),
        secret = await methods.string(input.secret);

    if (compress === undefined) {
        compress = false;
    }

    if (encrypt === undefined) {
        encrypt = data.encrypted || false;
    }

    if (secret === undefined) {
        secret = data.secret || '';
    }

    return await process(data, input, { translate, upload: { compress, encrypt, secret } }, properties);
};


export default update;
