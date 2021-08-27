const save = async (client, documents, identityId, locator) => {
    if (documents && !Array.isArray(documents)) {
        documents = [documents];
    }

    if (!documents.length) {
        return [];
    }

    const { platform } = client;
    const identity = await platform.identities.get(identityId);

    let batch = {},
        // TODO
        // - Check if any 'documents' includes 'id' or '$id' before looking up all documents
        // - Only look up 'document' ids found in step 1 ^
        // - Cleanup
        found = await platform.documents.get(locator, [
            ['$ownerId', Array.isArray(identityId) ? 'in' : '==', identityId]
        ]),
        replaceable = {};

	for (let i = 0, n = found.length; i < n; i++) {
		let document = found[i];

		replaceable[document.id.toString()] = document;
	}

    for (let i = 0, n = documents.length; i < n; i++) {
        let data = documents[i];

        if (data.id) {
            let ignore = true,
                replace = replaceable[data.id.toString()];

            if (!replace) {
                continue;
            }

            for (let key in data) {
                if (key == 'id' || data[key] == replace.data[key]) {
                    continue;
                }

                ignore = false;
				replace.set(key, data[key]);
            }

            if (ignore) {
                continue;
            }

            if (!batch.replace) {
                batch.replace = [];
            }

            batch.replace.push(replace);
        }
        else {
            if (!batch.create) {
                batch.create = [];
            }

            batch.create.push( await platform.documents.create(locator, identity, data) );
        }
    }

    if (!batch.create && !batch.replace) {
        return;
    }

    return platform.documents.broadcast(batch, identity)
        .then((d) => d.toJSON())
        .catch((e) => console.error('Something went wrong:\n', e));
};


export default save;
