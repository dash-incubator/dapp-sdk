import type { Client, Document, Identity, Response } from '@api/types';
import type { Object } from '@src/types';


const save = async ({ platform }: Client, documents: Document[] | Document, identity: Identity, locator: string): Promise<Object> => {
    documents = Array.isArray(documents) ? documents : [documents];

    if (!documents.length) {
        return {};
    }

    let batch: { create: Object[], replace: Object[] } = {
            create: [],
            replace: []
        },
        ids: string[] = documents.map((data: Document) => data['$id'] || '').filter(Boolean),
        replaceable: Object = {},
        results = ids.length === 0 ? [] : await platform.documents.get(locator, {
            where: [
                ['$ownerId', '==', identity.getId()],
                ['$id', 'in', ids]
            ]
        });

    for (let i = 0, n = results.length; i < n; i++) {
        let result = results[i];

        if (!result) {
            continue;
        }

        replaceable[result['$id'].toString()] = result;
    }

    let data: Document;

    while (data = documents.shift()) {
        let ignore: boolean = true,
            replace: Document = replaceable[data['$id'] || ''];

        if (replace) {
            for (let key in data) {
                if (key.startsWith('$') || data[key] == replace.data[key]) {
                    continue;
                }

                ignore = false;
                replace.set(key, data[key]);
            }

            if (ignore) {
                continue;
            }

            batch.replace.push(replace);
        }
        else {
            batch.create.push( await platform.documents.create(locator, identity, data) );
        }
    }

    if (batch.create.length + batch.replace.length === 0) {
        return {};
    }

    return await platform.documents.broadcast(batch, identity)
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default save;
