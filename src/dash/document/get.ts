import type { Client, Object, Response } from '@dash/types';


const get = async ({ platform }: Client, locator: string, query: Object): Promise<Response[]> => {
    return platform.documents.get(locator, query)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default get;
