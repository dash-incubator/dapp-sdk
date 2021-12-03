const register = async (client, identityId, name) => {
    const { platform } = client;
    const identity = await platform.identities.get(identityId);

    return platform.names.register(
            `${name}.dash`,
            { dashUniqueIdentityId: identity.getId() },
            identity,
        )
        .then((d) => JSON.parse(d).label)
        .catch((e) => console.error('Something went wrong:\n', e));
};


export default register;
