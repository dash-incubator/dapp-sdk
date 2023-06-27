import { Client, Identity } from "~/types";


export default async ({ client }: { client: Client }, id: string = ''): Promise<Identity | undefined> => {
    if (!id) {
        let account = await client.getWalletAccount(),
            identities: string[] = await account.identities.getIdentityIds();

        if (identities[0]) {
            id = identities[0];
        }
        else {
            return undefined;
        }
    }

    return await client.platform.identities.get(id)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};
