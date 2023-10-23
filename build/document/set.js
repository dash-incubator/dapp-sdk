export default async ({ client, identity }, documents, locator) => {
    if (!identity) {
        throw new Error('DAPP SDK: platform identity is required to continue');
    }
    if (!Array.isArray(documents)) {
        documents = [documents];
    }
    if (!documents.length) {
        return [];
    }
    let batch = {
        create: [],
        replace: []
    }, ids = documents.map((document) => document?.['$id'] || '').filter(Boolean), replaceable = {};
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
    let data;
    while (data = documents.shift()) {
        let ignore = true, replace = replaceable[data['$id'] || ''];
        if (replace) {
            for (let key in data) {
                if (key[0] === '$' || data[key] == replace.get(key)) {
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
            batch.create.push(await client.platform.documents.create(locator, identity, data));
        }
    }
    if (batch.create.length + batch.replace.length === 0) {
        return [];
    }
    return await client.platform.documents.broadcast(batch, identity)
        .then((response) => response?.toJSON()?.transitions || [])
        .catch((e) => console.error('Something went wrong:\n', e));
};
