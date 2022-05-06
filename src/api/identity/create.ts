import type { Client, Identity } from '@api/types';


const create = async ({ platform }: Client): Promise<Identity> => {
    return await platform.identities.register()
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default create;
