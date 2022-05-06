import type { Client, Response } from '@api/types';
import type { Object } from '@src/types';


const get = async ({ platform }: Client, locator: string, query: Object): Promise<Response[]> => {
    return await platform.documents.get(locator, query)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default get;
