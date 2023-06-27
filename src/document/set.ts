import { Connection, Document, Documents, Response } from "~/types";


export default async ({ client, identity }: Connection, documents: Documents | Document, locator: string): Promise<Documents> => {
    if (!Array.isArray(documents)) {
        documents = [documents];
    }

    if (!documents.length) {
        return [];
    }

    if (!identity) {
        throw new Error('DAPP SDK: an identity is required to save documents');
    }

    let batch = {
            create: [] as Documents,
            replace: [] as Documents
        },
        ids: string[] = documents.map((document: Document) => document?.['$id'] || '').filter(Boolean),
        replaceable: Record<PropertyKey, Document> = {};

    if (ids.length) {
        let results = await client.platform.documents.get(locator, {
                where: [
                    ['$ownerId', '==', identity.getId()],
                    ['$id', 'in', ids]
                ]
            });

        for (let i = 0, n = results.length; i < n; i++) {
            let result = results[i];

            if (!result?.['$id']) {
                continue;
            }

            replaceable[result['$id'].toString()] = result;
        }
    }

    let data: Document | undefined;

    while (data = documents.shift()) {
        let ignore = true,
            replace = replaceable[data['$id'] || ''];

        if (replace) {
            for (let key in data) {
                if (key[0] === '$' || data[key as keyof typeof data] == replace.get(key)) {
                    continue;
                }

                ignore = false;
                replace.set(key, data[key as keyof typeof data]);
            }

            if (ignore) {
                continue;
            }

            batch.replace.push(replace);
        }
        else {
            batch.create.push(
                await client.platform.documents.create(locator, identity, data)
            );
        }
    }

    if (batch.create.length + batch.replace.length === 0) {
        return [];
    }

    // `transitions` returns saved document data with '$id'
    return await client.platform.documents.broadcast(batch, identity)
        .then((response: Response) => response?.transitions || [])
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};