import IPFS from 'ipfs-core';


let node;


// TODO: Use Dash Platform IPFS Host Once Integrated By DCG
async function connect() {
    if (node) {
        return;
    }

    node = await IPFS.create();
};


const upload = {
    files: async (files) => {
        let options = {
                pin: true,
                wrapWithDirectory: true
            },
            root;

        await connect();

        for await (const file of node.addAll(files, options)) {
            if (file.path) {
                continue;
            }

            root = file.cid.toString();
        }

        return root;
    },
    file: async (content) => {
        await connect();
        
        let file = await node.add(content);

        return file.cid.toString();
    }
};


export default { upload };
