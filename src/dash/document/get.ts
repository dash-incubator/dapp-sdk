import type { Client, Document, Object } from '@dash/types';


const get = async ({ platform }: Client, locator: string, query: Object): Promise<Document[]> => {
    return platform.documents.get(locator, query)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default get;
