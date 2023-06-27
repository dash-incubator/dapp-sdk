import { Connection, Contract, Definition } from "~/types";


export default async ({ client, identity }: Connection, definition: Definition): Promise<Contract> => {
    let contract = await client.platform.contracts.create(definition, identity),
        result = await client.platform.dpp.dataContract.validate(contract);

    if (!result.isValid()) {
        for (let i = 0, n = result.errors.length; i < n; i++) {
            console.error( result.errors[i].toString() );
        }

        throw new Error('Contract is not valid');
    }

    return await client.platform.contracts.publish(contract, identity)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};
