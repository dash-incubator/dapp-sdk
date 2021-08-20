const del = async (client, documents, identityId) => {
    if (!documents.length) {
        return [];
    }

    const { platform } = client;
    const identity = await platform.identities.get(identityId);

    return platform.documents.broadcast({ delete: documents }, identity)
        .then((d) => d.toJSON())
        .catch((e) => console.error('Something went wrong:\n', e));
};


export default del;
