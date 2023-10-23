export default async ({ client }, id = '') => {
    if (!id) {
        let account = await client.getWalletAccount(), identities = await account.identities.getIdentityIds();
        if (identities[0]) {
            id = identities[0];
        }
        else {
            return undefined;
        }
    }
    return await client.platform.identities.get(id)
        .catch((e) => console.error('Something went wrong:\n', e));
};
