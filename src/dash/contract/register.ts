import type { Client, Identity, Object, Response } from '@src/dash/types';


const register = async ({ platform }: Client, definition: Object, identity: Identity): Promise<string> => {
    let contract = await platform.contracts.create(definition, identity),
        result = await platform.dpp.dataContract.validate(contract);

    if (!result.isValid()) {
        throw result.errors[0];
    }

    return platform.contracts.broadcast(contract, identity)
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e))
        .finally((d: Object) => d.dataContract || '');
};


export default register;
