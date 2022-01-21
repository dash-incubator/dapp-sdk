import * as IPFS from 'ipfs-core';


// IPFS Node
// - Implementation is isolated to this file
// - Couldn't find a simple TS implementation for type
let node: any;


// TODO: Use Dash Platform IPFS host once available
async function connect(): Promise<void> {
    if (node) {
        return;
    }

    node = await IPFS.create();
};


const upload = {
    files: async (files: { content: string, path: string }[]): Promise<string> => {
        let options = {
                pin: true,
                wrapWithDirectory: true
            },
            root: string = '';

        await connect();

        for await (const file of node.addAll(files, options)) {
            if (file.path) {
                continue;
            }

            root = file.cid.toString();
        }

        return root;
    },
    file: async (content: string): Promise<string> => {
        await connect();

        return (await node.add(content)).cid.toString();
    }
};


export default { upload };
