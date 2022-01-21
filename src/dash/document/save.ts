import type { Client, Document, Identity, Object, Response } from '@dash/types';


const save = async ({ platform }: Client, documents: Document[] | Document, identity: Identity, locator: string): Promise<Object> => {
    if (documents && !Array.isArray(documents)) {
        documents = [documents];
    }

    if (!documents.length) {
        return [];
    }

    let batch: { create: Object[], replace: Object[], replaceable: Object } = {
            create: [],
            replace: [],
            replaceable: {}
        },
        ids: string[] = documents.map((data: Object) => (data['$id'] || '').toString()).filter((value: any) => value),
        results = ids.length ? await platform.documents.get(locator, [
                ['$ownerId', '==', identity.id.toString()],
                ['$id', 'in', ids]
            ]) : [];

    for (let i = 0, n = results.length; i < n; i++) {
        let result = results[i];

        if (!result) {
            continue;
        }

        batch.replaceable[result['$id'].toString()] = result;
    }

    for (let i = 0, n = documents.length; i < n; i++) {
        let data: any = documents[i],
            ignore: boolean = true,
            replaceable: any = batch.replaceable[(data['$id'] || '').toString()];

        if (!data) {
            continue;
        }

        if (replaceable) {
            for (let key in data) {
                if (key.startsWith('$') || data[key] == replaceable.data[key]) {
                    continue;
                }

                ignore = false;
                replaceable.set(key, data[key]);
            }

            if (ignore) {
                continue;
            }

            batch.replace.push(replaceable);
        }
        else {
            batch.create.push( await platform.documents.create(locator, identity, data) );
        }
    }

    if (batch.create.length + batch.replace.length === 0) {
        return [];
    }

    return platform.documents.broadcast(batch, identity)
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default save;
