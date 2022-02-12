import type { IpfsOptions } from './types';
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


const upload = {
    data: async (data: { content: string, path: string }[] | File | string, options: IpfsOptions = {}): Promise<string> => {
        let cid: string = '';

        await connect();

        if (Array.isArray(data)) {
            if (options.encrypt) {
                data = await user.data.recursive.encrypt(data, {
                    secret: options.secret,
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
                data = await data.text();
            }

            if (options.encrypt) {
                data = await user.data.encrypt(data, options.secret);
            }

            cid = ( await node.add(data) ).cid.toString();
        }

        return `https://ipfs.io/ipfs/${cid}`;
    },
    images: async function(files: File[], options: IpfsOptions = {}): Promise<string[]> {
        let cids: string[] = [];

        for (let i = 0, n = files.length; i < n; i++) {
            let file = files[i];

            if (!file) {
                continue;
            }

            if ('compress' in options && options.compress) {
                file = await compressor(file, { useWebWorker: true });
            }

            cids.push( await upload.data(await file.text(), options) );
        }

        return cids;
    },
    image: async function(file: File, options: IpfsOptions = {}): Promise<string> {
        return ( await upload.images([file], options) )[0] || '';
    }
};


export default { upload };
