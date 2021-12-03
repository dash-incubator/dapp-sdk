const register = async (client, contractDefinitions, identityId) => {
    const { platform } = client;
    const identity = await platform.identities.get(identityId);
    const contract = await platform.contracts.create(contractDefinitions, identity);
    const result   = await platform.dpp.dataContract.validate(contract);

    if (result.isValid()) {
        return platform.contracts.broadcast(contract, identity)
            .then((d) => JSON.parse(d).dataContract)
            .catch((e) => console.error('Something went wrong:\n', e));
    }

    throw result.errors[0];
};


export default register;
