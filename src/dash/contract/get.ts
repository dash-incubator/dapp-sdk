import type { Client, Object, Response } from '@dash/types';


const get = async ({ platform }: Client, id: string): Promise<Object> => {
    return platform.contracts.get(id)
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e));
}


export default get;
