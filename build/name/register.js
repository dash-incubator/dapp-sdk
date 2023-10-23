export default ({ client, identity }, name) => {
    if (!identity) {
        throw new Error('DAPP SDK: platform identity is required to continue');
    }
    return client.platform.names.register(`${name}.dash`, {
        dashUniqueIdentityId: identity.getId()
    }, identity)
        .then((document) => document.toJSON())
        .catch((e) => console.error('Something went wrong:\n', e));
};
