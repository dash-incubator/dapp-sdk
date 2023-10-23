export default async ({ client, identity }, documents) => {
    if (!identity) {
        throw new Error('DAPP SDK: platform identity is required to continue');
    }
    if (!Array.isArray(documents)) {
        documents = [documents];
    }
    if (!documents.length) {
        return [];
    }
    return await client.platform.documents.broadcast({ delete: documents }, identity)
        .then((response) => response?.toJSON()?.transitions || [])
        .catch((e) => console.error('Something went wrong:\n', e));
};
