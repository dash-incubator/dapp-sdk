import type { Client, Identity, Object, Response } from '@src/dash/types';


const create = async ({ account, platform }: Client): Promise<Identity['id']> => {
    let identities: Identity['id'][] = await account.identities.getIdentityIds();

    if (identities[0]) {
        return identities[0];
    }

    return await platform.identities.register()
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e))
        .finally((d: Object) => (d.id || '').toString());
};


export default create;
