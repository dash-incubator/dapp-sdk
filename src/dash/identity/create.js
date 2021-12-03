const create = async (client) => {
    const account = await client.getWalletAccount();
    const identities = await account.identities.getIdentityIds();

    let identity = (identities || [])[0];

    if (!identity) {
        identity = await client.platform.identities.register()
            .then((d) => JSON.parse(d))
            .catch((e) => console.error('Something went wrong:\n', e));
        identity = (identity || {}).id;
    }

    return identity;
};


export default create;
