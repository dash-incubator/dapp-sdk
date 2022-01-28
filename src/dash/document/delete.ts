import type { Client, Document, Identity, Object } from '@dash/types';


const del = async ({ platform }: Client, documents: Document[] | Document, identity: Identity): Promise<Object> => {
    documents = Array.isArray(documents) ? documents : [documents];

    if (!documents.length) {
        return [];
    }

    return platform.documents.broadcast({ delete: documents }, identity)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default del;
