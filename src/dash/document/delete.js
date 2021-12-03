const del = async (client, documents, identityId) => {
    if (!documents.length) {
        return [];
    }

    const { platform } = client;
    const identity = await platform.identities.get(identityId);

    return platform.documents.broadcast({ delete: documents }, identity)
        .then((d) => JSON.parse(d))
        .catch((e) => console.error('Something went wrong:\n', e));
};


export default del;
