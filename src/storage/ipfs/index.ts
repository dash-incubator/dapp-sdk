import type { Upload } from './types';
import compressor from 'browser-image-compression';
import user from '@src/user';
import * as IPFS from 'ipfs-core';


// IPFS Node
let node: any;


// TODO: Use Dash Platform IPFS host once available
async function connect(): Promise<void> {
    if (node) {
        return;
    }

    node = await IPFS.create();
};


const upload = async (data: Upload['data'], { compress, encrypt, secret }: Upload['options'] = {}): Promise<string> => {
    let cid: string = '';

    await connect();

    if (Array.isArray(data)) {
        if (encrypt) {
            data = await user.data.recursive.encrypt(data, {
                secret: secret,
                skip: ['path']
            });
        }

        for await (const item of node.addAll(data, {
            pin: true,
            wrapWithDirectory: true
        })) {
            if (item.path) {
                continue;
            }

            cid = item.cid.toString();
        }
    }
    else {
        if (data instanceof File) {
            if (data.type.startsWith('image') && compress) {
                data = await compressor(data, { useWebWorker: true });
            }

            data = await data.text();
        }

        if (encrypt) {
            data = await user.data.encrypt(data, secret);
        }

        cid = ( await node.add(data) ).cid.toString();
    }

    return `https://ipfs.io/ipfs/${cid}`;
};

const uploadable = (value: any): boolean => {
    let valid = true;

    if (value instanceof File) { }
    else if (typeof value === 'object' && value !== null) {
        valid = 'content' in value;
    }
    else if (Array.isArray(value)) {
        for (let i = 0, n = value.length; i < n; i++) {
            if (!valid) {
                return valid;
            }

            valid = uploadable(value[i]);
        }
    }

    return valid;
};


export default { upload, uploadable };
