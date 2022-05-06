import type { Client, Document, Identity } from '@api/types';
import type { Object } from '@src/types';


const del = async ({ platform }: Client, documents: Document[] | Document, identity: Identity): Promise<Object> => {
    documents = Array.isArray(documents) ? documents : [documents];

    if (!documents.length) {
        return [];
    }

    return await platform.documents.broadcast({ delete: documents }, identity)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default del;
