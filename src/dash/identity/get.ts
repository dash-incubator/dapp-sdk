import type { Client, Identity, Object, Response } from '@src/dash/types';


const get = async ({ platform }: Client, id: Identity['id']): Promise<Object> => {
    return await platform.identities.get(id)
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default get;
