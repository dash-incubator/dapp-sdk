import type { Client, Document, Identity, Response } from '@dash/types';


const del = async ({ platform }: Client, documents: Document[], identity: Identity): Promise<Document[]> => {
    if (!documents.length) {
        return [];
    }

    return platform.documents.broadcast({ delete: documents }, identity)
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default del;
