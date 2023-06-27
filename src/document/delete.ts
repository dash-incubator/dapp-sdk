import { Connection, Documents, Document, Response } from "~/types";


export default async ({ client, identity }: Connection, documents: Documents | Document): Promise<Documents> => {
    if (!Array.isArray(documents)) {
        documents = [documents];
    }

    if (!documents.length) {
        return [];
    }

    return await client.platform.documents.broadcast({ delete: documents }, identity)
        .then((response: Response) => response?.transitions || [])
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};
