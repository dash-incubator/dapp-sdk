import type { Client, Response } from '@api/types';
import type { Object } from '@src/types';


const search = async ({ platform }: Client, name: string): Promise<Object[]> => {
    return await platform.names.search(name, 'dash')
        .then((r: Response[]) => {
            return r.map((d: Response) => d.toJSON());
        })
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default search;
