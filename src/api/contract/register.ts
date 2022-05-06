import type { Client, Contract, Identity } from '@api/types';
import type { Object } from '@src/types';


const register = async ({ platform }: Client, definition: Object, identity: Identity): Promise<Contract> => {
    let contract = await platform.contracts.create(definition, identity),
        result = await platform.dpp.dataContract.validate(contract);

    if (!result.isValid()) {
        throw result.errors[0];
    }

    return await platform.contracts.broadcast(contract, identity)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default register;
