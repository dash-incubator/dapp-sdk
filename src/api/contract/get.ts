import type { Client, Contract } from '@api/types';


const get = async ({ platform }: Client, id: string): Promise<Contract> => {
    return await platform.contracts.get(id)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
}


export default get;
