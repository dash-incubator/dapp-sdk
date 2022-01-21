import type { Client, Object, Response } from '@dash/types';


const search = async ({ platform }: Client, name: string): Promise<Object[]> => {
    return platform.names.search(name, 'dash')
        .then((r: Response[]) => {
            let names = [];

            for (let i = 0, n = r.length; i < n; i++) {
                let result = r[i];

                if (!result) {
                    continue;
                }

                names.push(result.toJSON());
            }

            return names;
        })
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default search;
