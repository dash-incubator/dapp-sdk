import type { Client, Identity } from '@api/types';
import create from './create';


const get = async (client: Client, id: string = ''): Promise<Identity> => {
    if (!id) {
        let account = await client.getWalletAccount(),
            identities: string[] = await account.identities.getIdentityIds();

        if (identities[0]) {
            id = identities[0];
        }
        else {
            return await create(client);
        }
    }

    return await client.platform.identities.get(id)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default get;
