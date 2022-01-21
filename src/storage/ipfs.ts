import compressor from 'browser-image-compression';
import user from '@src/user';
import * as IPFS from 'ipfs-core';


type Options = {
    compress?: boolean,
    encrypt?: boolean,
    secret?: string
};


// IPFS Node
let node: any;


// TODO: Use Dash Platform IPFS host once available
async function connect(): Promise<void> {
    if (node) {
        return;
    }

    node = await IPFS.create();
};

async function encrypt(data: string, { encrypt, secret }: Options = {}): Promise<string> {
    return encrypt ? await user.data.encrypt(data, secret) : data;
};


const upload = {
    files: async (files: { content: string, path: string }[], options: Options = {}): Promise<string> => {
        let root: string = '';

        await connect();

        files.map(async (file) => {
            return {
                content: await encrypt(file.content, options),
                path: file.path
            }
        });

        for await (const file of node.addAll(files, {
            pin: true,
            wrapWithDirectory: true
        })) {
            if (file.path) {
                continue;
            }

            root = await encrypt(file.cid.toString(), options);
        }

        return root;
    },
    file: async (content: string, options: Options = {}): Promise<string> => {
        await connect();

        return await encrypt(
            (await node.add(await encrypt(content, options))).cid.toString(),
            options
        );
    },
    images: async function(files: File[], options: Options = {}): Promise<string[]> {
        let cids: string[] = [];

        for (let i = 0, n = files.length; i < n; i++) {
            let file = files[i];

            if (!file) {
                continue;
            }

            if ('compress' in options && options.compress) {
                file = await compressor(file, { useWebWorker: true });
            }

            cids.push( await upload.file(await file.text(), options) );
        }

        return cids;
    },
    image: async function(file: File, options: Options = {}): Promise<string> {
        return ( await upload.images([file], options) )[0] || '';
    }
};


export default { upload };
